import React, { useState } from "react";
import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";

const MissionControl = ({ missionsData }) => {
    const [missions, setMissions] = useState(missionsData);
    const [filter, setFilter] = useState('All');

    const handleFilterChange = (newFilter) => setFilter(newFilter);

    const filteredMissions = missions.filter((mission) => {
        if(filter === 'All') return true;
        return mission.status === filter;
    });

    return(
        <div>
            <h1>Mission Control</h1>
            <MissionFilter filter={filter} onFilterChange={handleFilterChange} />
            <div className="missions-list">
                {filteredMissions.map((mission) => (
                    <MissionCard
                        key={mission.id}
                        mission={mission}
                        onUpdate={(updatedMission) =>
                            setMissions((prev) =>
                            prev.map((m) => (m.id === updatedMission.id ? updatedMission : m))
                    )
                }
                />
                ))}
            </div>
        </div>
    );
};

export default MissionControl;