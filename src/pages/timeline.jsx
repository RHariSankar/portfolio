import React from "react";
import { Chrono } from "react-chrono";
import data from "./timelineData";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from "@mui/material";
const inlineIconCss = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginRight: '1vw'
};

export function LineWithIcon(props) {
    const { text } = props
    return (
        <div style={inlineIconCss}>
            {text} | <GitHubIcon sx={{ fontSize: 17 }}></GitHubIcon>
        </div>
    )
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
                        {/* <li><div style={inlineIconCss}>First full stack project, Cryptex-An online treasure hunt based on crytography   <GitHubIcon sx={{ fontSize: 20 }} />  </div> */}
                        <li>
                            <LineWithIcon text='First full stack project, Cryptex-An online treasure hunt based on crytography'></LineWithIcon>
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
                <div className="chrono-icons">
                    <img src="birthday.svg" alt="image2" />
                    <img src="books.svg" alt="image2" />
                    <img src="books.svg" alt="image2" />
                    <img src="books.svg" alt="image2" />
                </div>
            </Chrono>
        </div>

    );
}
