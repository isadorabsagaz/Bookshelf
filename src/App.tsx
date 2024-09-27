import AuthorIcon from "./components/AuthorIcon.tsx";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar.tsx";
import about from "./assets/about.txt";

const App = () => {
    return (
        <>

        <div className="top-bar-container">
           <Header></Header>
            <NavigationBar></NavigationBar>
        </div>
            <div className="page-container">
                <AuthorIcon image=""
                            name="J.R.R Tolkien"
                            about={about}
                            birth=" 3th January, 1892.  Bloemfontein, South Africa"
                            death=" 2nd September, 1973.  Bournemouth, United Kingdom">
                </AuthorIcon>
            </div>
        </>
    );
};

export default App;