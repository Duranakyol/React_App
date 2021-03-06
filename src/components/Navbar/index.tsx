import React from 'react';

function Navbar (){

  return <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand text-white" href="/#"><i className="fa-brands fa-react"/> REACT</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-white" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/myPage">MyPage</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/#">Action</a>
          <a className="dropdown-item" href="/#">Another action</a>
          <div className="dropdown-divider"/>
          <a className="dropdown-item" href="/#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled text-white" href="/#">Disabled</a>
      </li>
    </ul>
      <form className="form-inline my-2 my-lg-0">
        <a href="/register">
           <button type="button" className="btn btn-success mx-2"><i className="fa-solid fa-address-card"/> Register</button>
        </a>
        <a href="/loginPage">
          <button type="button" className="btn btn-light mx-2"><i className="fa-solid fa-arrow-right-to-bracket"/> Login</button>
        </a>     
    </form>
  </div>
</nav>
}

export default Navbar 