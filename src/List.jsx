import "./List.scss";
import Data from "./data.json";
import Icon from "@mui/material/Icon";

export function ListItem(props) {
    return <li><Icon>{Data.elements[4].icon}</Icon>{[props.animalList, props.icon]}</li>
}

export function List(props) {
    return (
        <ul>
            {props.animalList.map(animal => {
                return <ListItem key={animal} animalList={animal} />;
            })}
        </ul>
    );
};

export default function AnimalList() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return (
        <div id="List">
            <h1>Animals: </h1>
            <List animalList={animals} />
        </div>
    );
}