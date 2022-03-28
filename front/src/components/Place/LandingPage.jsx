import React, { useState } from 'react'
import Map from './Map'
import './LadingPage.css'
import MapContainer from './MapContainer'

const LandingPage = (id) => {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
        <button type="submit">검색</button>
      </form>
      {/*<Map searchPlace={id.id} />*/}
      <MapContainer searchPlace={id.id} />
    </>
  )
}

export default LandingPage