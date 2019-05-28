import React, { Component } from 'react';
import pic01 from './images/pic01.jpg';

export default class Poser extends Component {

        render(){
        return (
       
        <div className="Poser">
            <section id="one" className="main style1">
				<div className="container">
					<div className="row gtr-150">
						<div className="col-6 col-12-medium">
							<header className="major">
								<h2>Lorem ipsum dolor adipiscing<br />
								amet dolor consequat</h2>
							</header>
							<p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
						</div>
						<div className="col-6 col-12-medium imp-medium">
							<span className="image fit"><img src={pic01} alt="" /></span>
						</div>
					</div>
				</div>
			</section>
        </div>
       
        );
    }
}