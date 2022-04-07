import React from "react";
import { Chrono } from "react-chrono";
import data from "./timelineData";
import ChildFriendlyRoundedIcon from '@mui/icons-material/ChildFriendlyRounded';

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
