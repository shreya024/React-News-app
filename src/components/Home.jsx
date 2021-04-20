import logo from './logo.png';
import Search from './Search';

const Home=()=>{
    return(
        <div>
            <img src={logo} width='300' alt=""/>
            <Search></Search>
        </div>
    );
}

export default Home;