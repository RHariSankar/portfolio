import React from "react";
import { Chrono } from "react-chrono";
import data from "./timelineData";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import { Grid } from "@mui/material";
const inlineIconCss = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginRight: '1vw'
};

export function LineWithIcon(props) {
    console.log(props)
    const { text, github, document } = props
    // console.log("github", github)
    // console.log("document", document)
    if (github === undefined && document === undefined) {
        return (
            <div style={inlineIconCss}>
                {text}
            </div>
        )
    }
    else if (document === undefined) {
        return (
            <div style={inlineIconCss}>
                {text} | <GitHubIcon sx={{ fontSize: 17 }}></GitHubIcon>
            </div>
        )
    }
    else if (github === undefined) {
        return (
            <div style={inlineIconCss}>
                {text} | <ArticleIcon sx={{ fontSize: 17 }}></ArticleIcon>
            </div>
        )
    }
    else{
        return (
            <div style={inlineIconCss}>
                {text} | <GitHubIcon sx={{ fontSize: 17 }}></GitHubIcon> | <ArticleIcon sx={{ fontSize: 17 }}></ArticleIcon>
            </div>
        )
    }    
}

export default function Timeline() {
    return (

        <div style={{ width: "100%", height: "95vh" }}>
            <Chrono items={data} mode="VERTICAL_ALTERNATING" enableOutline>
                <div></div>
                <div></div>
                <div>
                    <ul>
                        <li>CGPA - 10.0</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Class 12 - 95.2%</li>
                        <li>JEE AIR - 15138</li>
                        <li>Kerala Entrance Rank - 433</li>
                        <li>Joined Collge of Engineering, Trivandrum - B.Tech In Computer Science</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>S1, Cgpa - 9.63</li>
                        <li>S2, Cgpa - 9.48</li>
                        <li>
                            <LineWithIcon text='First full stack project, Cryptex-An online treasure hunt based on crytography' github="https://github.com/RHariSankar/cryptex-2017"></LineWithIcon>
                            <ul>
                                <li>Nodejs and ExpressJs - Backend</li>
                                <li>Passport Js - Authentication</li>
                                <li>Mongo DB - Database</li>
                                <li>HTML/Ejs - Frontend</li>
                            </ul>
                        </li>
                        <li>MEC Hackathon, POC - Notify near by emergency vehicles using IOT</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>S3, Cgpa - 9.17</li>
                        <li>S4, Cgpa - 9.57</li>
                        <li><LineWithIcon text='Attended Amazon deep learning workshop, Shastra 2018'></LineWithIcon></li>
                        <li>
                            <LineWithIcon text='Summer Intership, Sentient Scripts Pvt. Ltd.' />
                            <ul>
                                <li>Data analysis</li>
                                <li>Data Preprocessing using R and excel macros</li>
                                <li>Data visualisation using Power BI</li>
                            </ul>
                        </li>
                        <li><LineWithIcon text='Regional Winner NASA Space Apps Challenge, 2018' />
                            <ul>
                                <li>POC - ML based classifier to predict commonly found type of mosquito in a region and suggest required vaccinations for possible diseases.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>S5, Cgpa - 9.39</li>
                        <li>S6, Cgpa - 8.61</li>
                        <li><LineWithIcon text='Design Project, Automated Parking system using OpenCV' />
                            <ul>
                                <li>Image processing on top CCTV to detect free parking spaces, alternative to much expensive sensor based systems</li>
                                <li>Naive image and contrast based filters to detect if marked area is occupied to not</li>
                                <li>Firebase realtime database and android app for frontend</li>
                            </ul>
                        </li>
                        <li>
                            <LineWithIcon text='Research Inter, Summer Fellowship Program, IIT Madras' />
                            <ul>
                                <li>Research Inter under the Summer Fellowship Program in IIT Madras</li>
                                <li>Worked under Professor Jayalal</li>
                                <li>Hypergraphs and related papers</li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <div>
                    <ul>
                        <li>S7, Cgpa - 8.64</li>
                        <li>S8, Cgpa - 10.0</li>
                        <li><LineWithIcon text='Main Project, Detection and Tracking of objects in Areial Videos' />
                            <ul>
                                <li>UAVision Challenge</li>
                                <li>Objective: Improve class wise precision of classifying object in drone videos</li>
                                <li>YOLOv3 model with static tiling preprocessing to improve detection accuracy</li>
                                <li>Deep SORT algorithm for tracking</li>
                            </ul>
                        </li>
                        <li>Placed at <strong>Avalara Technologies Pvt. Ltd.</strong> </li>

                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Formal Training in Scala, Spark</li>
                        <li>Built microservices that helps internal teams with content updation and maintenance</li>
                        <li>Integration with exiting internal content management tools</li>
                        <li>Worked in projects based on Scala, Golang and Javascripts</li>
                        <li>UI in React JS</li>
                        <li>Familier with CI/CD tools (GoCD mainly)</li>
                        <li>Devops, Basic Docker, Kubernetes and Helm</li>
                    </ul>
                </div>
                <div className="chrono-icons">
                    <img src="birthday.svg" alt="image2" />
                    <img src="college.svg" alt="academics" />
                    <img src="college.svg" alt="academics" />
                    <img src="college.svg" alt="academics" />
                    <img src="college.svg" alt="academics" />
                    <img src="college.svg" alt="academics" />
                    <img src="college.svg" alt="academics" />
                    <img src="college.svg" alt="academics" />
                    <img src="office.svg" alt="work" />
                </div>
            </Chrono>
        </div>

    );
}
