import React from "react";
import PreLoader from "../component/preLoader";
import "../../styles/home.css";
import vizualsLogoNegro from "../../img/vizuals-negro-bgn.png";

export const Home = () => {
  return (
    <div className="home">
      <PreLoader />
      <header className="header-home text-center">
      
        <img className="header-image" src={vizualsLogoNegro} style={{ width: '400px' }}/>
      </header>

      <section className="content-section container text-center pt-5">
      <div class="container-post">
                <div class="row">
                  <div class="col1">
                    <div class="card" style={{ width: "500px", height: "auto" }}>
                        <div class="d-flex header-post justify-content-between m-3">
                            <h3>My Crazy dog Spark!</h3>
                            <p>08/21</p>
                        </div>
                        <img src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p><b>204 Likes</b></p>
                          <p class="card-text">This is a card as an example of a real Instagram post. It contains a header, an image and a caption.</p>
                        </div>
                      </div>
                  </div>
            </div>
                 
                  <div class="col pt-4">
                    <div class="card" style={{ width: "500px", height: "auto" }}>
                        <div class="d-flex header-post justify-content-between m-3">
                            <h3>Spending Time with friends!</h3>
                            <p>08/22</p>
                        </div>
                        <img src="https://images.indianexpress.com/2022/01/Friends-1200.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p><b>151 Likes</b></p>
                          <p class="card-text">This is a card as an example of a real Instagram post. It contains a header, an image and a caption.</p>
                        </div>
                      </div>
                  </div>
      </div>
      </section>
    </div>
  );
};


