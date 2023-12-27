import DateAndTime from "./DateAndTime/DateAndTime.jsx";
import AppName from "./AppName/AppName.jsx";
import '../../stylesheet/components/header/header.scss'
import backgroundImage from '../../assets/header/background.jpg';
import Menu from "./menu/Menu.jsx";
function AppHeader() {
    const background_image = {
        backgroundImage: `url(${backgroundImage})`,
    };
    return <>
        <header style={background_image}>
            <div className={'top'}>
                <Menu />
                <div className="user-profile"></div>
            </div>
            <AppName />
        </header>
    </>
}

export default AppHeader
