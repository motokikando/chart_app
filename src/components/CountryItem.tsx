import styled from "@emotion/styled";
import { useState } from "react";
import { Country } from "../types"

interface Props {
    country: Country;
    onItemClick: (country: Country) => void;

}

interface ListContentProps {
    isActive: boolean;

}

const ListItem = styled.li`
    list-style-type: none;
    text-align: center;
    @media (min-width: 420px) {
        flex: 0 0 33.3%;
    }
`;

const ListContent = styled.div<ListContentProps>`
    background-color: ${(props) => (props.isActive ? "#fff" : "#f7f7f7")};
    margin: 5px;
    padding: 10px 0;

`;


const CountryItem: React.FunctionComponent<Props> = ({country, onItemClick }) => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const handleClick = (country: Country) => {
        onItemClick(country);
        setIsActive(!isActive);
    }

    return(

    <ListItem key = {country.ID} onClick= {() => {handleClick(country)}}>
    {country.Country}

    <ListContent isActive = {isActive}>
    <h4>{country.Country}</h4>
      <div>新規感染者: {country.NewConfirmed}</div>
      <div>死亡者: {country.NewDeaths}</div>
      <div>回復者 {country.NewRecovered}</div>
    </ListContent>
</ListItem>
    );

};

export default CountryItem;