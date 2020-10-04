import React from 'react'
import './styles.css'

export default function PhoneComponent () {
  return (
    <div className='container'>
      <div id='celular'>
        <h1>Nokia</h1>

        <div id='tela' />
        <div className='content'>
          <div className='row'>
            <button className='bt-enter' />
          </div>

          <div className='row '>
            <button className='botao'>1</button>
            <button className='botao'>2 <br />abc</button>
            <button className='botao'>3<br />def</button>
          </div>

          <div className='row'>
            <button className='botao'>4<br />ghi</button>
            <button className='botao'>5<br />jkl</button>
            <button className='botao'>6<br />mno</button>
          </div>

          <div className='row'>
            <button className='botao'>7<br />pqrs</button>
            <button className='botao'>8<br />tuv</button>
            <button className='botao'>9<br />wxyz</button>
          </div>

          <div className='row'>
            <button className='botao'>*</button>
            <button className='botao'>0</button>
            <button className='botao'>#</button>
          </div>
        </div>
      </div>
    </div>
  )
}
