import React from 'react';
import '../App.css';

const TeamSection = ({ id, title, members }) => {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div className="team-grid">
        {members.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-image">
              <img
                src={member.image} // Path to the image
                alt={member.name}
                className="rounded-image" // Add rounded image class
              />
            </div>
            <div className="team-text">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;