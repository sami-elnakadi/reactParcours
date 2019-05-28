import React, { Component } from 'react';

export default class Footer extends Component {

        render(){
        return (
       
        <div className="Footer">
            <section id="footer">
				<ul class="icons">
					<li><a href="#" class="icon alt fa-twitter"><span class="label">Twitter</span></a></li>
					<li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>
					<li><a href="#" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li>
					<li><a href="#" class="icon alt fa-github"><span class="label">GitHub</span></a></li>
					<li><a href="#" class="icon alt fa-envelope"><span class="label">Email</span></a></li>
				</ul>
				<ul class="copyright">
					<li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li><li>Demo Images: <a href="http://unsplash.com">Unsplash</a></li>
				</ul>
			</section>
        </div>
       
        );
    }
}