import React, { Component } from "react";


import NavTabs from "../components/NavTabs";
import Home from "../components/Cruise-Pages/Home";
import About from "../components/Cruise-Pages/About";
import CunardCruises from "../components/Cruise-Pages/CunardCruises";
import HollandAmericaCruises from "../components/Cruise-Pages/HollandAmericaCruises";
import RoyalCaribbeanCruises from "../components/Cruise-Pages/RoyalCaribbeanCruises";
import PrincessCruises from "../components/Cruise-Pages/PrincessCruises";
import POCruises from "../components/Cruise-Pages/POCruises";
import Blog from "../components/Cruise-Pages/Blog";
import Contact from "../components/Cruise-Pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if(this.state.currentPage === "Home"){
      return <Home />
    }
    else if(this.state.currentPage === "About"){
      return<About />
    }
    else if(this.state.currentPage === "Blog"){
      return<Blog />
    }
    else if(this.state.currentPage === "Cunard Line"){
      return<CunardCruises />
    }
    else if(this.state.currentPage === "Holland-America Line"){
      return<HollandAmericaCruises />
    }
    else if(this.state.currentPage === "Royal Caribbean"){
      return<RoyalCaribbeanCruises />
    }
    else if(this.state.currentPage === "Princess Cruises"){
      return<PrincessCruises />
    }
    else if(this.state.currentPage === "P&O Cruises"){
      return<POCruises />
    }
    else{
      return<Contact />
    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default PortfolioContainer;