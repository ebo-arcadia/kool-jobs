import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Search = (props) => {
  const [state, setState] = useState({
    description: "",
    location: "",
    remote_job_only: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "remote_only") {
      setState((prevState) => ({
        ...state,
        [name]: !prevState.remote_job_only,
      }));
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="search-section">
      <Form className="search-form" onSubmit={handleSearch}>
        <Row>
          <Col>
            <Form.Group controlId="description">
              <Form.Control
                type="text"
                name="description"
                value={state.description || ""}
                placeholder="Enter search term"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="location">
              <Form.Control
                type="text"
                name="location"
                value={state.location || ""}
                placeholder="Enter location"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit" className="btn-search">
              Search
            </Button>
          </Col>
        </Row>
        <div className="filters">
          <Form.Group controlId="remote_job_only">
            <Form.Check
              type="checkbox"
              name="remote_job_only"
              className="remote-only-checkbox"
              label="Remote job only"
              checked={state.remote_job_only}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};
export default Search;
