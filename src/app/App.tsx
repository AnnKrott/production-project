import { Link } from "react-router-dom";


import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./provider/ThemeProvider";


import 'app/styles/index.scss';
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>

            <Navbar />

            <AppRouter />

        </div>
    )
};

export default App;
