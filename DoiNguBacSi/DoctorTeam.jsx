import React from 'react';
import ServiceCard from './ServiceCard';

const DoctorTeam = ({ doctorData }) => {
    return (
        <div className="doctor-team">
            {doctorData.map((doctor) => (
                <ServiceCard
                    key={doctor.id}
                    icon={doctor.icon}
                    title={doctor.title}
                    description={doctor.description}
                    buttonText={doctor.buttonText}
                />
            ))}
        </div>
    );
};

export default DoctorTeam;
