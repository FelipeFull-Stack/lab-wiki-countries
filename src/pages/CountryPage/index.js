import countries from "../../countries.json";
import { useParams } from "react-router-dom";
import { BordersCard } from "../../components/BordersCard";

export function CountryPage() {

    const params = useParams();

    const country = countries.filter((currentElement) => currentElement.alpha3Code === params.countryCode)[0]

    return (
        <div>
            <h1>{country.name.common}</h1>
            <table class="table">
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital:</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area:</td>
                        <td>
                            {country.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders:</td>
                        <td>
                            <ul>
                                {countries.map((currentElement) => <BordersCard country2Code={currentElement.borders} />)}

                                {/* <li><Link></Link></li>
                                <li><a href="/AND">Andorra</a></li>
                                <li><a href="/BEL">Belgium</a></li>
                                <li><a href="/DEU">Germany</a></li>
                                <li><a href="/ITA">Italy</a></li>
                                <li><a href="/LUX">Luxembourg</a></li>
                                <li><a href="/MCO">Monaco</a></li>
                                <li><a href="/ESP">Spain</a></li>
                                <li><a href="/CHE">Switzerland</a></li> */}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}
