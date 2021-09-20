import styled from '@emotion/styled'


interface Props {
    newConfirmed: number;
    newDeaths: number;
    newRecovered: number;
}

const Wrapper = styled.div`
    text-align: center;

`


const GlobalInfo: React.FunctionComponent<Props> = ({ newConfirmed, newDeaths, newRecovered}) => {
    return (<Wrapper>
        <h1>世界コロナウイルス調査</h1>
        <h3>新規感染者 : {new Intl.NumberFormat().format(newConfirmed)}</h3>
        <h3>死亡者 : {new Intl.NumberFormat().format(newDeaths)}</h3>
        <h3>回復者 : {new Intl.NumberFormat().format(newRecovered)}</h3>
    </Wrapper>
    );
};

export default GlobalInfo;