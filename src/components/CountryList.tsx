import { Country } from "../types";
import styled from '@emotion/styled'

interface Props {
    countries: Country[];
}

const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;

`;

const ListItem = styled.li`
    list-style-type: none;
    text-align: center;
    @media (min-width: 420px) {
        flex: 0 0 33.3%;
    }
`

const ListContent = styled.div`
    background-color: #f7f7f7;
    margin: 5px;
    padding: 10px 0;
`


const CountryList: React.FunctionComponent<Props> = ({countries}) => {
    return (
        <ListWrapper>
            {countries.map((country) => (
                <ListItem key = {country.ID}>
                    {country.Country}
                    <ListContent>
                    <h4>{country.Country}</h4>
                      <div>新規感染者: {country.NewConfirmed}</div>
                      <div>死亡者: {country.NewDeaths}</div>
                      <div>回復者 {country.NewRecovered}</div>
                    </ListContent>
                </ListItem>


            ))}
        </ListWrapper>

    );

};

export default CountryList;
