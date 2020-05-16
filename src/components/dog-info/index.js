import React from "react";
import "./styles.css";
// Icons
import email from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";

function DogInfo({ dog }) {
  return (
    <section className="dog-info">
      <div className="dog-info-header">
        <img src={dog.avatar} className="dog-info-avatar" />
      </div>
      <div className="dog-info-main">
        <p className="dog-info-bio">{dog.bio}</p>
      </div>

      <ul className="dog-info-social">
        <li>
          <a href={dog.contact.phone} target="_blank" rel="noopener noreferrer">
            <img src={phone} className="icon" alt="phone icon" />
            {dog.contact.phone}
          </a>
        </li>
        <li>
          <a href={dog.contact.email} target="_blank" rel="noopener noreferrer">
            <img src={email} className="icon" alt="email icon" />
            {dog.contact.email}
          </a>
        </li>
        <li>
          <p>Name: {dog.contact.ownersName} </p>
        </li>
      </ul>
    </section>
  );
}

export default DogInfo;
