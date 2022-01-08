import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const plan = ({ name, price, user, userStyle, store, domain, features }) => {
  const [f5, f6, f7, f8] = features;
  const [userSty] = userStyle;
  return (
    <div className="plan center">
      <div className="plan-intro">
        <h4 className="text-upper">{name}</h4>
        <h4>
          <span className="text-headline">${price}</span>/month
        </h4>
      </div>
      <ul className="plan-features">
        <li className={userSty === "T" ? "emp" : ""}>
          <AiOutlineCheck className="icon" />
          {user} User
        </li>
        <li>
          <AiOutlineCheck className="icon" />
          {store}GB Storage
        </li>
        <li>
          <AiOutlineCheck className="icon" />
          Unlimited Public Projects
        </li>
        <li>
          <AiOutlineCheck className="icon" />
          Community Access
        </li>
        <li className={f5 === "F" ? "disable" : ""}>
          {f5 === "T" ? (
            <AiOutlineCheck className="icon " />
          ) : (
            <AiOutlineClose className="icon" />
          )}
          Unlimited Private Projects
        </li>
        <li className={f6 === "F" ? "disable" : ""}>
          {f6 === "T" ? (
            <AiOutlineCheck className="icon" />
          ) : (
            <AiOutlineClose className="icon" />
          )}
          Dedicated Phone Support
        </li>
        <li className={f7 === "F" ? "disable" : ""}>
          {f7 === "T" ? (
            <AiOutlineCheck className="icon" />
          ) : (
            <AiOutlineClose className="icon" />
          )}
          {domain} Subdomain
        </li>
        <li className={f8 === "F" ? "disable" : ""}>
          {f8 === "T" ? (
            <AiOutlineCheck className="icon" />
          ) : (
            <AiOutlineClose className="icon" />
          )}
          Monthly Status Report
        </li>
      </ul>
      <a className="btn">Subscribe</a>
    </div>
  );
};

export default plan;
