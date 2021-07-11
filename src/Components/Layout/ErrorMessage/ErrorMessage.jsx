import React from "react";
import Amazon from "../../../assets/Amazon_logo.svg";
import Warning from "../../../assets/warning.png";
import "./ErrorMessage.css";

export default function ErrorMessage(props) {
  console.log(props.error);
  return (
    <>
      <img src={Amazon} className="logo" alt="amazon-logo" />
      
      <div className="container" style={props.error ? {} : { display: "none" } }>
        {props.error ? (
          <>
            <div>
              <div className="error-notice">
                <img src={Warning} className="warning" alt="warning" />

              </div>
            </div>
            <div>
              <p className="warning">There was a problem</p>
              {!props.user? " " : <li className="warning-message">{props.user}</li> }
              {!props.password? " " : <li className="warning-message">{props.password}</li> }
              {!props.email? " " : <li className="warning-message">{props.email}</li> }
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
