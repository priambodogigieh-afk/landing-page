import { Stat } from '../../types';

export default function Stats() {
  const stats: Stat[] = [
    { value: '2,245,341', label: 'Members', icon: '/member.svg' },
    { value: '46,328', label: 'Clubs', icon: '/club.svg' },
    { value: '828,867', label: 'Event Bookings', icon: '/event.svg' },
    { value: '1,926,436', label: 'Payments', icon: '/payment%20copy.svg' },
  ];
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-text">
          <h2>Helping a local <span className="text-green">business reinvent itself</span></h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-icon-wrapper">
                <img src={s.icon} alt={`${s.label} icon`} className="stat-icon-img" />
              </div>
              <div className="stat-info">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
