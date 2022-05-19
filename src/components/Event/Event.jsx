import "./Event.scss";
import {Component} from "react";

export class Event extends Component {
    render() {
        return (
            <div className="event">
                <span className="event_date">
                    {this.props.eventDate}
                </span>

                {this.props.eventTag}

                <div className="event_text">
                    <span className="event_title">
                        {this.props.eventTitle}
                    </span>

                    <span className="event_description">
                        {this.props.eventDescription}
                    </span>
                </div>
            </div>
        );
    }
}