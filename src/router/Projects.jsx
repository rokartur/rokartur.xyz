import "../assets/styles/Subpage.scss";
import "./Projects.scss";
import React, {useState} from 'react';
import {BackButtonProjects} from "../components/BackButton/BackButton";
import {SubpageText} from "../components/SubpageText";
import {SortButtons} from "../components/SortButtons/SortButtons";
import {ProjectModel} from "../components/ProjectModel/ProjectModel";

import BongocatIcon from "../assets/images/bongocat_icon.png";
import BongocatMain from "../assets/images/bongocat_main.png";
import NethizerIcon from "../assets/images/nethizer_icon.png";
import NethizerMain from "../assets/images/nethizer_main.png";
import MechanikTGIcon from "../assets/images/mechaniktg_icon.png";
import MechanikTGMain from "../assets/images/mechaniktg_main.png";

export default function Projects() {
    const [category, setCategory] = useState(0);
    const projectsList = [
        {
            icon: BongocatIcon,
            title: "bongocat.xyz",
            category: "Website",
            categoryID: 1,
            mainImage: BongocatMain,
            link: "/projects/bongocat",
        },
        {
            icon: NethizerIcon,
            title: "nethizer.pl",
            category: "Website",
            categoryID: 1,
            mainImage: NethizerMain,
            link: "/projects/nethizer",
        },
        {
            icon: MechanikTGIcon,
            title: "mechaniktg.pl",
            category: "Website",
            categoryID: 1,
            mainImage: MechanikTGMain,
            link: "/projects/mechaniktg",
        },
    ]

    return (
        <div className="projects">
            <header className="global_subpage_header">
                <BackButtonProjects/>
            </header>

            <SubpageText title="My all works" overline="The most interesting" color="red"/>

            <SortButtons
                category={category}
                onClickAllButton={() => {setCategory(0)}}
                onClickWebsiteButton={() => {setCategory(1)}}
                onClickMobileButton={() => {setCategory(2)}}
            />

            <div className="projects_list">
                {projectsList.filter(project => category === 0 ? true : project.categoryID === category).map(project => (
                    <ProjectModel
                        link={project.link}
                        icon={project.icon}
                        title={project.title}
                        category={project.category}
                        mainImage={project.mainImage}
                    />
                ))}
            </div>
        </div>
    );
}