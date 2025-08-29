function Status1() {
    const milestones = [
        { title: 'Oppstart', desc: 'Onboarding, satte opp utviklingsmiljø og ble innført i kodebase.' },
        { title: 'legg til', desc: 'lorem ipsum dolor sit amet' },
        { title: 'legg til', desc: 'lorem ipsum dolor sit amet' }
    ];
    return (
        <div className="page-container fancy-status">
            <h1 className="page-title">Status 1</h1>
            <div className="status-grid">
                <div className="status-summary">
                    <p>Første status fokuserte på å etablere grunnlaget for prosjektet. Vi definerte mål, satte opp utviklingsmiljø og ble innført i kodebase.</p>
                </div>
                <ol className="timeline">
                    {milestones.map((m, i) => (
                        <li key={i} className="timeline-item">
                            <div className="dot" />
                            <div className="content">
                                <h3>{m.title}</h3>
                                <p>{m.desc}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Status1;