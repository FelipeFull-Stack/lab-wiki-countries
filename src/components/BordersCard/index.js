import { Link } from "react-router-dom";

export function BordersCard(props) {

    const element = props.country2Code
    return (
        <div>
            {element.map((currentElement) => {
                return (
                    <Link to={`/${currentElement}`}>
                        <li>{currentElement}</li>
                    </Link>
                )
            })}
        </div>
    );
}
