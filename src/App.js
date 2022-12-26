import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import {
  PetProfile,
  Pets
} from './ui-components';
import {
  NavBar
} from './ui-components';
import {
  Footer
} from './ui-components';
import {
  AddPet
} from './ui-components';




function App() {

  const [showForm, setShowForm] = useState(false);

  const formOverride = {
    Icon: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(false);
      }
    },


  };
  const navbarOverrides = {
    image: {
      src: "https://static.vecteezy.com/system/resources/previews/003/731/316/original/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg"
    },
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(!showForm)
      }
    }
  };


  return (
    <div className="App">
      <NavBar width={"100%"}
        overrides={navbarOverrides}
      />
      <header className="App-header">
        {showForm && (
          <AddPet
            overrides={formOverride}
            style={
              {
                textAlign: "left",
                margin: "1rem"
              }
            }
          />
        )
        }
        <Pets overrideItems={({ item, index }) =>
        ({
          overrides: {
            Breed: { color: "blue" },
            Button29766907: {
              onClick: () => alert(`${item.name}`)
            }
          }
        })}
        />


      </header>
    </div>
  );
}

export default App;
