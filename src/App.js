import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./components/HeaderNav";
import ProductList from "./components/ProductList";
import { Button } from "react-bootstrap";
import ListeDeProduits from "./components/ListeDeProduits";

export default class App extends Component {
  state = {
    cartVisible: true,
    searchValue: "",
    produits: [
      {
        id: Math.random(),
        imageUrl:
          "https://contents.mediadecathlon.com/p2290858/k$9736807509d8dbde03e0ab9664173dcb/chaussures-fitness-100-homme.jpg?format=auto&quality=60&f=800x800",
        unitPrice: 169,
        name: "Sneakers",
      },
      {
        id: Math.random(),
        imageUrl:
          "https://contents.mediadecathlon.com/p2572815/k$962fa0f64fdaa429ab7e3b5cc7561e13/chaussures-de-trekking-montagne-trek100-homme.jpg?format=auto&quality=60&f=800x800",
        unitPrice: 389,
        name: "Chaussures",
      },
      {
        id: Math.random(),
        imageUrl:
          "https://contents.mediadecathlon.com/p1837940/k$342974be1e7383cf6bd496297cbb45d7/chemise-chasse-coton-manches-longues-respirant-100-a-carreaux-blanc.jpg?format=auto&quality=60&f=800x800",
        quantity: 0,
        unitPrice: 100,
        name: "Chemise",
      },
      {
        id: Math.random(),
        imageUrl:
          "https://contents.mediadecathlon.com/p2294322/k$46cf76b8892e48e41416fab46c1a66dc/veste-hiver-impermeable-de-randonnee-sh100-x-warm-10c-homme.jpg?format=auto&quality=60&f=800x800",
        name: "Veste",
        unitPrice: 250,
      },
    ],
    panier: [
      {
        id: Math.random(),
        imageUrl:
          "https://contents.mediadecathlon.com/p2290858/k$9736807509d8dbde03e0ab9664173dcb/chaussures-fitness-100-homme.jpg?format=auto&quality=60&f=800x800",
        quantity: 1,
        unitPrice: 169,
        liked: false,
      },
      {
        id: Math.random(),
        imageUrl:
          "https://contents.mediadecathlon.com/p2572815/k$962fa0f64fdaa429ab7e3b5cc7561e13/chaussures-de-trekking-montagne-trek100-homme.jpg?format=auto&quality=60&f=800x800",
        quantity: 2,
        unitPrice: 389,
        liked: false,
      },
      {
        id: Math.random(),
        imageUrl:
          "https://contents.mediadecathlon.com/p1837940/k$342974be1e7383cf6bd496297cbb45d7/chemise-chasse-coton-manches-longues-respirant-100-a-carreaux-blanc.jpg?format=auto&quality=60&f=800x800",
        quantity: 0,
        unitPrice: 100,
        liked: true,
      },
      {
        id: Math.random(),
        imageUrl:
          "https://contents.mediadecathlon.com/p2294322/k$46cf76b8892e48e41416fab46c1a66dc/veste-hiver-impermeable-de-randonnee-sh100-x-warm-10c-homme.jpg?format=auto&quality=60&f=800x800",
        quantity: 3,
        unitPrice: 250,
        liked: true,
      },
    ],
  };
  handleSearch = (text) => this.setState({ searchValue: text });

  handleLike = (ClickedID) =>
    this.setState({
      panier: this.state.panier.map((el) =>
        el.id === ClickedID ? { ...el, liked: !el.liked } : el
      ),
    });

  quantityINC = (ClickedID) =>
    this.setState({
      panier: this.state.panier.map((el) =>
        el.id === ClickedID ? { ...el, quantity: el.quantity + 1 } : el
      ),
    });

  quantityDEC = (ClickedID) =>
    this.setState({
      panier: this.state.panier.map((el) =>
        el.id === ClickedID && el.quantity > 0
          ? { ...el, quantity: el.quantity - 1 }
          : el
      ),
    });

  handleCart = () => this.setState({ cartVisible: !this.state.cartVisible });

  handleDelete = (ClickedID) =>
    this.setState({
      panier: this.state.panier.filter((el) => el.id !== ClickedID),
    });

  render() {
    return (
      <div className="App">
        <HeaderNav
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch}
        />
        <ListeDeProduits
          produits={this.state.produits}
          text={this.state.searchValue}
        />
        <Button
          onClick={() => this.handleCart()}
          style={{ margin: "50px" }}
          variant="outline-info"
        >
          Show Cart
        </Button>
        {this.state.cartVisible ? (
          <ProductList
            products={this.state.panier}
            quantityINC={this.quantityINC}
            quantityDEC={this.quantityDEC}
            del={this.handleDelete}
            handleLike={this.handleLike}
          />
        ) : null}
        <hr />
        PARTIE ADMIN
        <hr />
        <Button>ADD PRODUCT</Button>
      </div>
    );
  }
}
