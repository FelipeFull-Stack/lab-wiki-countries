import { Link } from "react-router-dom";

export function CountryCard(props) {

    const {countryName, countryCode, countryTest} = props

    return (
        <div className="container text-sm-center">
            <div className="row">
                <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scrol' }}>
                    <div className="list-group d-flex">
                        <Link
                            className="list-group-item list-group-item-action"
                            to={`/${countryCode}`}
                        >
                            <div><img style={{width: '50%'}} src={`https://flagpedia.net/data/flags/icon/72x54/${countryTest.toLowerCase()}.png`} alt="" /></div>
                            {countryName}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}