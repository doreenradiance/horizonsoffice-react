import React from 'react';

function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-default navbar-home">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand site-logo" href="#">
        <img src="Images/logo.png"></img>
      </a>
      <div className="flags">
        <img src="Images/gh.svg"></img>
        <img src="Images/ng.svg"></img>
        <img src="Images/ke.svg"></img>
      </div>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        
        <li><a href="#">ABOUT US</a></li>
      </ul>
    </div>
  </div>
  </nav>
	
	<div className="container-fluid">
		<div className="row">
			<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="Images/anthony-rosset-4qw3AQaPUL4-unsplash.jpg" alt="Horizons Offices"></img>
          </div>

          <div className="item">
            <img src="Images/natasha-t-4-SpVqMgefM-unsplash.jpg" alt="Horizons Offices"></img>
          </div>

          <div className="item">
              <img src="Images/peter-ivey-hansen-coNhU4LiCE0-unsplash.jpg" alt="Horizons Offices"></img>
          </div>

         
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>



		<div className="container Plans">
      <div className="row">
        <h3 className="text-center">PLANS</h3>

        <div className= "col-md-3">
        <div className="thumbnail">
          <img src="Images/austin-distel-wD1LRb9OeEo-unsplash.jpg" alt="VIRTUAL OFFICES"></img>
          <div className="caption">
            <h3>VIRTUAL OFFICES</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. </p>    
          </div>
          </div>
        </div>
    
        <div className= "col-md-3">
          <div className="thumbnail">
          <img src="Images/austin-distel-wawEfYdpkag-unsplash.jpg" alt="CUSTOMIZED OFFICES"></img>
          <div className="caption">
            <h3>CUSTOMIZED OFFICES</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. </p>    
          </div>
        </div>
        </div>
    
        <div className= "col-md-3">
        <div className="thumbnail">
          <img src="Images/adolfo-felix-PG8NyM_Mcts-unsplash.jpg" alt="SERVICED OFFICES"></img>
          <div className="caption">
            <h3>SERVICED OFFICES</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. </p>    
          </div>
        </div>	
        </div>
    
        <div className= "col-md-3">
        <div className="thumbnail">
          <img src="Images/christina-wocintechchat-com-Q80LYxv_Tbs-unsplash.jpg" alt="MEETING ROOMS"></img>
          <div className="caption">
            <h3>MEETING ROOMS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. </p>    
          </div>	
        </div>
        </div>
    </div>
		</div>


        <div className="footer down">
          <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h3 className="text-center H">VISIT US IN KENYA</h3>
              <p className="text-center p1">Nairobi.Kenya</p>
              <p className="text-center p2">Belgravia Centre,14 Riverside drive, 4th floor, Off Riverside Drive Hanover,14 Riverside Drive, 6th Floor,Off Riverside Drive</p>

            </div>

            <div className="col-md-4">
              <h3 className="text-center H">VISIT US IN GHANA</h3>
              <p className="text-center p1">Accra.Ghana</p>
              <p className="text-center p2">One Airpot Square.Airport City Accra</p>
            </div>
            
            <div className="col-md-4">
              <h3 className="text-center H">VISIT US IN NIGERIA</h3>
              <p className="text-center p1">Lagos.Nigeria</p>
              <p className="text-center p2">Sterling Bank Builging</p>
            </div>

          </div>
          </div>
         </div>
        </div>
  );
}

export default App;
