import React from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const ServiceCard = ({ serviceData }) => {
  return (
    <div className="service_card shadow-2">
      <div
        className="card-head"
        style={{
          backgroundColor: serviceData.backgroundColor,
          color: serviceData.fontColor,
        }}
      >
        <h3>{serviceData.serviceName}</h3>
        <span>R$ {serviceData.price}</span>
      </div>
      <div className="card-body">
        <div className="card-items">
          {serviceData.listItems.map((listItem) => {
            return (
              <div className="card-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <p>{listItem}</p>
              </div>
            );
          })}
        </div>
        <Button
          color={serviceData.fontColor}
          backgroundColor={serviceData.backgroundColor}
          targetId="contact__section"
        >
          {"contratar >"}
        </Button>
      </div>
    </div>
  );
};
