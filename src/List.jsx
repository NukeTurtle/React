import "./List.scss";
import Data from "./data.json";
import Icon from "@mui/material/Icon";

// first component to list multiple animals
export default function AnimalList() {
    // create array
    const animals = ["Lion", "Zebra", "Snake", "Horse", "Pinguin"];
    // change to render list animals from array instead from hardcoding
    const listItem = animals.map((animal) => {
        return (
            // listItems(li)
            animal.startsWith("") ? <li key={animal}><Icon>{Data.elements[0].icon}</Icon>{animal}</li> : null
        )
    })
    // list(ul)
    const list = <ul>{listItem}</ul>
    return (
        // for animallist(div)
        <div id="List">
            <h1>Animals :</h1>
            {list}
        </div>
    )
}
