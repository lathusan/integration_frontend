import React from 'react';

function NavigationBar() {
  return (
    <div className="main_menu">
      <nav className="navbar navbar-expand-lg navbar-light" style={{ height: '75px'}}>
        <div className="container">
          <a className="navbar-brand logo_h" href="index.html"><img src="https://previews.123rf.com/images/vitmann/vitmann1902/vitmann190200037/118401644-wave-sea-vector-silhouette-isolated-on-white-background-ocean-symbol-blue-modern-style-of-color-logo.jpg" alt="" style={{ height: '76px', width: '76px', marginInlineStart: '100px' }} /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>

          <div className="collapse navbar-collapse offset" id="navbarSupportedContent" style={{ marginInlineStart: '240px'}}>
            <ul className="nav navbar-nav menu_nav ml-auto" style={{ fontFamily:'Berlin Sans FB', fontSize: '30px', width: '950px' ,color:'#1a000d', wordSpacing:'30px' }}>
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/stays">Stays</a></li>
              <li className="nav-item"><a className="nav-link" href="/packages">Packages</a></li>
              <li className="nav-item"><a className="nav-link" href="/tours">Tours</a></li>
              {/*{<li className="nav-item"><a className="nav-link" href="/book-trip">BookTrip</a></li>}*/}
              <li className="nav-item"><a className="nav-link" href="/feedback">Feedback</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">ContactUs</a></li>
            </ul>
          </div>

              {/* <li className="nav-item submenu dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                <ul className="dropdown-menu">
                  <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="/book-trip">Book trip</a></li>
                  <li className="nav-item"><a className="nav-link" href="/elements">Elements</a></li>
                </ul>
              </li> 
              <li className="nav-item submenu dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                <ul className="dropdown-menu">
                  <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                  <li className="nav-item"><a className="nav-link" href="/single-blog">Blog Details</a></li>
                </ul>
              </li> */}
              

          <div className="collapse navbar-collapse offset" id="navbarSupportedContent" style={{ width: '350px'}} >
            <ul className="nav navbar-nav menu_nav ml-auto">
              <button style={{ width: '150px',height:'70px', borderRadius:'25px',float:'right' ,fontFamily:'Berlin Sans FB', borderColor:'blueviolet', fontSize: '25px',  borderColor:'white'}}>
                <li style={{ alignItems:'center',textAlign:'center'}}><a href="/login">Login </a></li>
              </button>
            </ul>
            <ul className="nav navbar-nav menu_nav ml-auto">
              <button style={{ width: '150px',height:'70px', color:'black',fontFamily:'Berlin Sans FB' ,borderRadius:'25px',fontSize: '25px', borderColor:'white'}} href="/register">
                <li><a href="/register">Register</a></li>
              </button>
            </ul>
          </div>

        </div>
      </nav>
    </div>
    
  );
}
export default NavigationBar;