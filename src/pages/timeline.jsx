import React from "react";
import { Chrono } from "react-chrono";
import data from "./timelineData";

export default function Timeline() {
    return (

        <div style={{ width: "100%", height: "95vh" }}>
            <Chrono items={data} mode="VERTICAL_ALTERNATING" enableOutline>
                <div></div>
                <div></div>
            </Chrono>
        </div>

    );
}
