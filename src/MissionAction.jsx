import React from "react";

const MissionAction = ({ mission, onUpdate}) => {
    const handleLaunch = () => {
        if(mission.status === 'Scheduled') {
            onUpdate({...mission, status: 'Launched'});
        }
    };

    const handleAbort = () => {
        if(mission.status === 'Launched') {
            onUpdate({...mission, status: 'Aborted'});
        }
    };

    return(
        <div className="mission-actions">
            {mission.status === 'Scheduled' && (
                <button onClick={handleLaunch}>Launch</button>
            )}
            {mission.status === 'Launched' && (
                <button onClick={handleAbort}>Abort</button>
            )}
        </div>
    );
};

export default MissionAction;