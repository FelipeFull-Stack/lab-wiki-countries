import countries from "../../countries.json";
import { useParams } from "react-router-dom";
import { BordersCard } from "../../components/BordersCard";

export function CountryPage() {

    const params = useParams();
    const country = countries.filter((currentElement) => currentElement.alpha3Code === params.countryCode)
    console.log(country)
    return (
        <div>
            <img style={{width: '75%'}} src={`https://flagpedia.net/data/flags/icon/72x54/${country[0].alpha2Code.toLowerCase()}.png`} alt="" />
            <h1 className="text-center">{country[0].name.common}</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital:</td>
                        <td>{country[0].capital}</td>
                    </tr>
                    <tr>
                        <td>Area:</td>
                        <td>
                            {country[0].area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders:</td>
                        <td>
                            <ul>
                                <BordersCard country2Code={country[0].borders} propsLink={country[0].alpha3Code}/>

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
