import React from 'react';
import { Briefcase, Users, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: <Briefcase size={40} />, value: '150+', label: 'Projects Completed' },
    { icon: <Users size={40} />, value: '200+', label: 'Happy Clients' },
    { icon: <Award size={40} />, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section className="stats-section py-5 bg-white">
      <div className="container">
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-4">
              <div className="stat-card text-center p-4 h-100 card-hover">
                <div className="stat-icon text-primary mb-3">
                  {stat.icon}
                </div>
                <h2 className="display-4 fw-bold mb-2">{stat.value}</h2>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;