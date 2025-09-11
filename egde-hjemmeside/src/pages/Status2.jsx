function Status2() {
    const metrics = [
        { label: 'Komponenter', value: 1, accent: 'blue' },
        { label: 'Commits', value: 8, accent: 'yellow' },
        { label: 'Åpne tasks', value: 1, accent: 'orange' },
        { label: 'Fullførte tasks', value: 1, accent: 'purple' }
    ];
    return (
        <div className="page-container fancy-status">
            <h1 className="page-title">Status 2 - 20.10.2025</h1>
            <div className="progress-layout">
                <div className="progress-intro">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum culpa ab minus alias vitae nam ratione debitis consequatur, tenetur dolorum sapiente magnam veniam minima, temporibus inventore delectus, repellendus soluta!</p>
                </div>
                <div className="metrics-grid">
                    {metrics.map(m => (
                        <div key={m.label} className={`metric-card accent-${m.accent}`}>
                            <span className="metric-value">{m.value}</span>
                            <span className="metric-label">{m.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Status2;
