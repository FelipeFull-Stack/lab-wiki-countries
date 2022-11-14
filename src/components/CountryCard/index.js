import { Link } from "react-router-dom";

export function CountryCard(props) {
    return (
        <div class="container">
            <div class="row">
                <div class="col-5" style={{ maxHeight: '90vh', overFlow: 'scroll' }}>
                    <div class="list-group">
                        <Link
                            class="list-group-item list-group-item-action"
                            to={`/${props.countryCode}`}
                        >
                            <div><img src={`https://flagpedia.net/data/flags/icon/72x54/${props.alpha2Code}.png`} alt=""/></div>
                            {props.countryName}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}