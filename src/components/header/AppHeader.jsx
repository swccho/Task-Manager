import DateAndTime from "./DateAndTime/DateAndTime.jsx";
import AppName from "./AppName/AppName.jsx";
import '../../stylesheet/components/header/header.scss'
import backgroundImage from '../../assets/header/background.jpg';
function AppHeader() {
    const background_image = {
        backgroundImage: `url(${backgroundImage})`,
    };
    return <>
        <header style={background_image}>
            <div className={'top'}>
                <div className="bar-menu"></div>
                <div className="user-profile"></div>
            </div>
            <AppName />
        </header>
    </>
}

export default AppHeader
