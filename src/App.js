import "./App.css";
import React from "react";
import Modal from "./components/modal";
import dogs from "./data/dogs.json";
import DogsList from "./components/dogs-list";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import DogInfo from "./components/dog-info";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeDog: null,
    };

    this.setActiveDog = this.setActiveDog.bind(this);
    this.removeActiveDog = this.removeActiveDog.bind(this);

    this.getPreviousDog = this.getPreviousDog.bind(this);
    this.getNextDog = this.getNextDog.bind(this);
  }

  setActiveDog(dog) {
    this.setState({
      activeDog: dog,
    });
  }

  removeActiveDog() {
    this.setState({
      activeDog: null,
    });
  }

  getPreviousDog() {
    const currentIndex = dogs.indexOf(this.state.activeDog);
    const nextIndex = currentIndex - 1;

    if (nextIndex < 0) {
      this.setState({
        activeDog: dogs[dogs.length - 1],
      });
    } else
      this.setState({
        activeDog: dogs[currentIndex - 1],
      });
  }

  getNextDog() {
    const currentIndex = dogs.indexOf(this.state.activeDog);
    const nextIndex = currentIndex + 1;

    if (nextIndex > dogs.length - 1) {
      this.setState({
        activeDog: dogs[0],
      });
    } else
      this.setState({
        activeDog: dogs[currentIndex + 1],
      });
  }

  getModalTheme() {
    let theme = "";

    switch (this.state.activeDog.cityArea) {
      case "Treptow":
        theme = "roasted-peppers";
        break;
      case "Mitte":
        theme = "sunshine";
        break;
      case "Kreuzberg":
        theme = "deep-purple";
        break;
      case "Lichtenberg":
        theme = "dark-blue";
        break;
      default:
        theme = "";
        break;
    }

    return theme;
  }

  render() {
    return (
      <div className="page">
        <SiteHeader />

        <section className="content-container">
          <h2 className="content-container-title">
            This platform's purpose is to help busy or ailing dog's owner to
            find a dog keeper. You can choose one of <span>{dogs.length}</span>{" "}
            of our dogs and contact the owner if you would like to walk this dog
            out!
          </h2>
          <DogsList onSelectedItem={this.setActiveDog} data={dogs} />
        </section>

        <SiteFooter />

        {this.state.activeDog && (
          <Modal
            title={`
            ${this.state.activeDog.dogsName} from ${this.state.activeDog.cityArea}
          `}
            leftButtonLabel="Previous"
            rightButtonLabel="Next"
            onClose={this.removeActiveDog}
            onLeftButtonClick={this.getPreviousDog}
            onRightButtonClick={this.getNextDog}
            theme={this.getModalTheme()}
          >
            <DogInfo dog={this.state.activeDog} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
