import {React,useState,useEffect,useCallback} from 'react';

import { useTelegram } from '../../hooks/useTelegram';

import './Form.css';
export const Form =()=>{
 const [street,setStreet] = useState('');
 const [city, setCity] = useState('');
 const [subject, setSubject] = useState('');
 const {tg} = useTelegram();
 const onSendData = useCallback(()=>{
  const data = {
    street, city, subject
  }
  tg.sendData(JSON.stringify(data))
}, [city, street, subject])
useEffect(()=>{
 tg.onEvent('mainButtonClicked', onSendData)
return() =>{
tg.offEvent('mainButtonClicked', onSendData)
}
})
useEffect(()=>{
  tg.MainButton.setParams({
     text: 'Отправить данные'
  })
}, [])

useEffect(()=>{
  if (!street || !city){
    tg.MainButton.hide();
  }else{
     tg.MainButton.show();
  }

}, [street, city])
const onChangeCity = (e) =>{
  setCity(e.target.value);
}
const onChangeStreet = (e) =>{
  setStreet(e.target.value);
}
const onChangeSudject = (e) =>{
  setSubject(e.target.value);
}
 return(
    <>
    <h3>Ведите ваши данные:</h3>
    <input 
      className='input'
      type='text'
      placeholder='Ваш город'
      value={city}
      onChange={onChangeCity}
      />
      <input
      className='input'
      type='text'
      placeholder='Улица'
      value={street}
      onChange={onChangeStreet}
      />
      <select value={subject} onChange={onChangeSudject} className='select'>
        <option value={'legal'}>Физ.лицо</option>
        <option value={'legal'}>Юр.лицо</option>
      </select>
    </>
  )
}
 