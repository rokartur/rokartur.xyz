import {Component} from "react";
import {Link} from "react-router-dom";
import "./BackButton.scss";

export class BackButtonMe extends Component {
    render() {
        const textStyle = {
            textDecoration: "none",
        }
        return (
            <Link to="/" style={textStyle}>
                <button className="back_button_me">
                    <span className="button_icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M21.92 3H10.7467C5.89333 3 3 5.89333 3 10.7467V21.9067C3 26.7733 5.89333 29.6667 10.7467 29.6667H21.9067C26.76 29.6667 29.6533 26.7733 29.6533 21.92V10.7467C29.6667 5.89333 26.7733 3 21.92 3Z" fill="#16A34A"/>
                            <path d="M17.6799 21.7067C17.4266 21.7067 17.1732 21.6133 16.9732 21.4133L12.2666 16.7067C11.8799 16.32 11.8799 15.68 12.2666 15.2933L16.9732 10.5867C17.3599 10.2 17.9999 10.2 18.3866 10.5867C18.7732 10.9733 18.7732 11.6133 18.3866 12L14.3866 16L18.3866 20C18.7732 20.3867 18.7732 21.0267 18.3866 21.4133C18.1999 21.6133 17.9466 21.7067 17.6799 21.7067Z" fill="#16A34A"/>
                        </svg>
                    </span>
                    <span className="back_button_me_text">
                        Home
                    </span>
                </button>
            </Link>
        )
    };
}

export class BackButtonExperience extends Component {
    render() {
        const textStyle = {
            textDecoration: "none",
        }
        return (
            <Link to="/" style={textStyle}>
                <button className="back_button_experience">
                    <span className="button_icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M21.92 3H10.7467C5.89333 3 3 5.89333 3 10.7467V21.9067C3 26.7733 5.89333 29.6667 10.7467 29.6667H21.9067C26.76 29.6667 29.6533 26.7733 29.6533 21.92V10.7467C29.6667 5.89333 26.7733 3 21.92 3Z" fill="#7375FD"/>
                            <path d="M17.6799 21.7067C17.4266 21.7067 17.1732 21.6133 16.9732 21.4133L12.2666 16.7067C11.8799 16.32 11.8799 15.68 12.2666 15.2933L16.9732 10.5867C17.3599 10.2 17.9999 10.2 18.3866 10.5867C18.7732 10.9733 18.7732 11.6133 18.3866 12L14.3866 16L18.3866 20C18.7732 20.3867 18.7732 21.0267 18.3866 21.4133C18.1999 21.6133 17.9466 21.7067 17.6799 21.7067Z" fill="#7375FD"/>
                        </svg>
                    </span>
                    <span className="back_button_experience_text">
                        Home
                    </span>
                </button>
            </Link>
        )
    };
}

export class BackButtonProjects extends Component {
    render() {
        const textStyle = {
            textDecoration: "none",
        }
        return (
            <Link to="/" style={textStyle}>
                <button className="back_button_projects">
                    <span className="button_icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M21.92 3H10.7467C5.89333 3 3 5.89333 3 10.7467V21.9067C3 26.7733 5.89333 29.6667 10.7467 29.6667H21.9067C26.76 29.6667 29.6533 26.7733 29.6533 21.92V10.7467C29.6667 5.89333 26.7733 3 21.92 3Z" fill="#F87171"/>
                            <path d="M17.6799 21.7067C17.4266 21.7067 17.1732 21.6133 16.9732 21.4133L12.2666 16.7067C11.8799 16.32 11.8799 15.68 12.2666 15.2933L16.9732 10.5867C17.3599 10.2 17.9999 10.2 18.3866 10.5867C18.7732 10.9733 18.7732 11.6133 18.3866 12L14.3866 16L18.3866 20C18.7732 20.3867 18.7732 21.0267 18.3866 21.4133C18.1999 21.6133 17.9466 21.7067 17.6799 21.7067Z" fill="#F87171"/>
                        </svg>
                    </span>
                    <span className="back_button_projects_text">
                        Home
                    </span>
                </button>
            </Link>
        )
    };
}