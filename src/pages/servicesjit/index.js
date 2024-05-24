import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, services } from "../../content_option";

export const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (index) => {
    if (activeService === index) {
      setActiveService(null);
    } else {
      setActiveService(index);
    }
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Services | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="14">
            <h1 className="display-4 mb-4"> Services </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="14">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5
                    className="service__title"
                    onClick={() => toggleService(i)}
                  >
                    {data.title}
                  </h5>
                  {activeService === i && (
                    <p className="service_desc">{data.description}</p>
                  )}
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};