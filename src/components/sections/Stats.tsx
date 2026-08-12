import { Stat } from '../../types';

export default function Stats() {
  const stats: Stat[] = [
    { value: '2,245,341', label: 'Members', icon: '👥' },
    { value: '46,328', label: 'Clubs', icon: '🏛' },
    { value: '828,867', label: 'Event Bookings', icon: '📅' },
    { value: '1,926,436', label: 'Payments', icon: '💳' },
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
              <span className="stat-icon" role="img" aria-label={s.label}>{s.icon}</span>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
