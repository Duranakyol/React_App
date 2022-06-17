import React from 'react'



function Home() {
  return (
    <div className='home'>
        <div id="carouselExampleIndicators" className="myCarousel carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block" src="https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block" src="https://react-spectrum.adobe.com/ReactAria_976x445_2x.ad6471aa.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block" src="https://scriptverse.academy/img/tutorials/reactjs-first-app.png" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"/>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"/>
    <span className="sr-only">Next</span>
        </a>
      </div>
      {/* SLIDER FERTIG */}
      <div className="myCards card-deck">
  <div className="card">
    <img className='card-img-top' src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe" alt="Card" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://reactjs.org/logo-og.png" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
  </div>
  )
}

export default Home
