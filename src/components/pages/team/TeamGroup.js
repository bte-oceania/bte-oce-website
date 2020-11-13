import React from 'react';

const TeamGroup = (props) => {
    const { team } = props; 
    const members = [];
    team.members.forEach(member => {
        members.push(<member>
            <img src={member.avatar} alt={member.name}></img>
            <p>{member.name}</p>
        </member>);
    });
    console.log(team);
    return (
        <teamgroup>
            <h2>{ team.teamName }</h2>
            <divider/>
            <members>                
                {members}
            </members>
        </teamgroup>
    );
};

export default TeamGroup;