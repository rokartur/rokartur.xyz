import React, {Component} from 'react';

export class SubpageText extends Component {
    render() {
        return (
            <div>
                <div className="subpage_text">
                    <span className="title">
                        {this.props.title}
                    </span>

                    <span className={"overline_" + this.props.color}>
                        {this.props.overline}
                    </span>
                </div>
            </div>
        );
    }
}