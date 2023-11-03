import Logo from "../assets/sbLogoWithName.png";

const Home = () => {
    return (
        <div className="home">
            <div className="topDesign">
                <img src={Logo} className="topImage" alt="Study Buddy Logo"></img>
            </div>
        </div>
    );
};

export default Home;