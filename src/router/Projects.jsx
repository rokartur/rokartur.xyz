import "../assets/styles/Subpage.scss";
import "./Projects.scss";
import React from 'react';
import {BackButtonProjects} from "../components/BackButton/BackButton";
import {SubpageText} from "../components/SubpageText";
import {ProjectModel} from "../components/ProjectModel/ProjectModel";
import ExmapleIcon from "../assets/images/avatar.png";

export default function Projects() {
    return (
        <div className="projects">
            <header className="global_subpage_header">
                <BackButtonProjects/>
            </header>

            <SubpageText title="My all works" overline="The most interesting" color="red"/>

            <div className="projects_list">
                <ProjectModel
                    icon={ExmapleIcon}
                    title="bongocat.xyz"
                    category="Website"
                    mainImage={ExmapleIcon}
                />
                <ProjectModel
                    icon={ExmapleIcon}
                    title="bongocat.xyz"
                    category="Website"
                    mainImage={ExmapleIcon}
                />
                <ProjectModel
                    icon={ExmapleIcon}
                    title="bongocat.xyz"
                    category="Website"
                    mainImage={ExmapleIcon}
                />
                <ProjectModel
                    icon={ExmapleIcon}
                    title="bongocat.xyz"
                    category="Website"
                    mainImage={ExmapleIcon}
                />
                <ProjectModel
                    icon={ExmapleIcon}
                    title="bongocat.xyz"
                    category="Website"
                    mainImage={ExmapleIcon}
                />
                <ProjectModel
                    icon={ExmapleIcon}
                    title="bongocat.xyz"
                    category="Website"
                    mainImage={ExmapleIcon}
                />
            </div>
        </div>
    );
}