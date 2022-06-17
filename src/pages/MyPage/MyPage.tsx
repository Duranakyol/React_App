import React from 'react'
import "src/app.css";

function Kayit() {
  const submit = () => {
    alert("Wird registiert!");
}
  return (
    <button type="button" className="btn myButton btn-primary btn-lg mx-auto mt-3 rounded" onClick={ submit }>REGISTER</button>
  );
}


function MyPage() {
  return (
    <div className='myPage'>
<div className="container p-5 bg-dark text-white">
      <h1 className='title'>REGISTER</h1>
      <div className="row d-flex justify-content-md-center flex-column">
        <label htmlFor='exampleFormControlInput1' className='form-label'>
      FIRSTNAME :
      <input
        type='text'
        className='form-control mt-1'
        id='firstname'
        placeholder='firstname'
      />
    </label>
    <label htmlFor='exampleFormControlInput1' className='form-label'>
      LASTNAME :
      <input
        type='text'
        className='form-control mt-1'
        id='lastname'
        placeholder='lastname'
      />
    </label>
    <label htmlFor='exampleFormControlInput1' className='form-label'>
      E-MAIL ADRESS :
      <input
        type='email'
        className='form-control mt-1'
        id='email'
        placeholder='name@example.com'
      />
    </label>
    <label htmlFor='exampleFormControlInput1' className='form-label'>
      PASSWORD :
      <input
        type='password'
        className='form-control mt-1'
        id='password'
        placeholder='password'
        />
         <Kayit />
      </label>
  </div>
    </div>
</div>
  )
}

export default MyPage
