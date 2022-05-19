import {Component} from "react";
import "./HomeText.scss";

export class HomeText extends Component {
    render() {
        return (
            <div className="text">
                <span className="text_overline">
                    hey there!
                </span>
                <span className="text_title">
                    I'm Artur
                </span>
                <span className="text_description">
                    18 yo student from Poland, UI/UX Designer & Web Developer.
                </span>
            </div>
        )
    }
}