import React, { Component } from "react";
import Logo from "./logo";
import Menu from "./Menu";
export default class Navbar extends Component {
  render() {
    return (
      <section id="mainblock">
        <section id="main">
          <article>
            <Logo />
            <Menu />
          </article>
          
          <div id="page1">
            <div id="header" >
            <h1>CLEAN AND FLEXIBLE TEMPLATE</h1>
            </div>
            <div id="page2">
              <p>
                Aenean faucibus nibh and just the course of that rutrum lorem
                imperdiet. Now to put the sad smile of life. <br/> The course of the
                house, I would like to decorate the cartoons, sometimes there
                was no pain, so that the advantage of the backyard was a free
                life.
              </p>
            </div>
            <div id="button">
              <button className="D-button">DOWNLOAD NOW</button>
              <button className="F-button">VIEW FEATURES</button>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
