import AuthorIcon from "./components/AuthorIcon.tsx";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar.tsx";
//import About from "./assets/about.txt";
import TolkienImage from "./assets/tolkien_img.webp";


const App = () => {
    return (
        <>

        <div className="top-bar-container">
           <Header></Header>
            <NavigationBar></NavigationBar>
        </div>
            <div className="page-container">
                <AuthorIcon image={TolkienImage}
                            name="J.R.R Tolkien"
                            about="John Ronald Reuel Tolkien, was an English writer, philologist, and academic best known for his epic fantasy works 'The Hobbit' and
                                'The Lord of the Rings' trilogy. Born in South Africa and raised in England, Tolkien became a professor of Anglo-Saxon at Oxford University.
                                His deep interest in language, mythology, and medieval literature greatly influenced his writings."
                            birth=" 3th January, 1892.  Bloemfontein, South Africa"
                            death=" 2nd September, 1973.  Bournemouth, United Kingdom">
                </AuthorIcon>
            </div>
        </>
    );
};

export default App;