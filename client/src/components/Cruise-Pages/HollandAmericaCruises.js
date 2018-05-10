import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class PrincessCruises extends Component {
  state = {
    cruises: [],
    name: " ",
    price: " ",
    date: " "
  };

  componentDidMount() {
    this.loadPrincessCruises();
  }

  loadPrincessCruises = () => {
    API.getPrincessCruises()
      .then(res =>
        this.setState({ cruises: res.data, name: res.data.name, price: res.data.price, date: res.data.date })
      )
      .catch(err => console.log(err));
  };

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Cunard Cruises</h1>
              <h3>Name: {this.state.name}</h3>
              <h3>Prices: {this.state.price}</h3>
              <h4>Date: {this.state.date}</h4>
              {console.log(this.state.cruises)}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PrincessCruises;
