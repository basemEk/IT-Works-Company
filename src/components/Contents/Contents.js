import React from "react";
import "./Contents.css";
import Hacker from "../images/hacker.jpg";

function Contents() {
  return (
    <div className="some-page-wrapper">
      <div className="column-heading">
        <h1><i>A Brief About The Company</i></h1>
      </div>
      <div className="row">
        <div className="column">
          <div className="blue-column">
            <h3>Who we help in our mission</h3> <br />
            Some Text in Column One Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One Some Text in Column One Some Text in Column One.
             Some Text in Column One Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One Some Text in Column One Some Text in Column One
             Some Text in Column One Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One Some Text in Column One Some Text in Column One
          </div>
        </div>
        <div className="column">
          <div className="green-column">
            <h3>What can we do for you</h3> <br />
            Some Text in Column Two Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One v v Some Text in Column One Some Text in Column
             Some Text in Column Two Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One v v Some Text in Column One Some Text in Column
             Some Text in Column Two Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One v v Some Text in Column One Some Text in Column
          </div>
        </div>
        <div className="column">
          <div className="orange-column">
            <h3>Who is the Team</h3> <br /> <br/>
            Some Text in Column Two Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One v v Some Text in Column One Some Text in Column
            Some Text in Column Two Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One v v Some Text in Column One Some Text in Column
            Some Text in Column Two Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One v v Some Text in Column One Some Text in Column
          </div>
        </div>
      </div>
     <br/>
      <div className="security">
       <div>
        <p>
          <h3>Security is what we care about First</h3><br/>
          security is very important in the tech field, you can't run an
          application without it. security is very important in the tech field,
          you can't run an application without it security is very important in
          the tech field, you can't run an application without it security is
          very important in the tech field, you can't run an application without
          it security is very important in the tech field, you can't run an
          application without it security is very important in the tech field,
          you can't run an application without it security is very important in
          the tech field, you can't run an application without it security is
          very important in the tech field, you can't run an application without
          it security is very important in the tech field, you can't run an
          application without it
        </p>
        </div>

       <div><img src={Hacker} id="hacker" /></div> 
      </div>
    </div>
  );
}

export default Contents;
