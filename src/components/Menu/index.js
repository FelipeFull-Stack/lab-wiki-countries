import { CountryCard } from "../CountryCard";
import countries from "../../countries.json";

export function Menu() {
    return <div>{countries.map((currentElement) => {
        return <CountryCard
            countryName={currentElement.name.common}
            countryCode={currentElement.alpha3Code}
        />
    })}
    </div>
}