import "./Home.scss";
import {NavigatonBar} from "../components/NavigationBar/NavigatonBar";
import {Avatar} from "../components/Avatar/Avatar";
import {HomeText} from "../components/HomeText/HomeText";
import {Shapes} from "../components/Shapes/Shapes";
import {Buttons} from "../components/MainButtons/Buttons";
import Image from "../assets/images/avatar.png";

export default function Home() {
    return (
        <div className="home">
            <NavigatonBar/>
            <div className="short_about_me">
                <Avatar source={Image}/>
                <HomeText/>
            </div>
            <Shapes/>
            <Buttons/>
        </div>
    );
}