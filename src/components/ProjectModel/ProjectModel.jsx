import {Component} from "react";
import {Link} from "react-router-dom";
import "./ProjectModel.scss";

export class ProjectModel extends Component {
    render() {
        const textStyle = {
            textDecoration: "none"
        }
        return (
            <Link to={this.props.link} style={textStyle} className="project_model_link">
                <div className="project_model">
                    <div className="project_label">
                        <img src={this.props.icon} alt="" className="project_icon"/>
                        <div className="project_text">
                            <span className="project_title">
                                {this.props.title}
                            </span>
                            <span className="project_category">
                                {this.props.category}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        )
    };
}