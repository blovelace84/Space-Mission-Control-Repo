import React from "react";
import MissionAction from "./MissionAction";
import "./MissionCard.css";

const MissionCard = ({ mission, onUpdate}) => (
    <div className="mission-card">
        <h2>{mission.name}</h2>
        <p>Status: {mission.status}</p>
        <p>Destination: {mission.destination}</p>
        <MissionAction mission={mission} onUpdate={onUpdate} />
    </div>
);

export default MissionCard;