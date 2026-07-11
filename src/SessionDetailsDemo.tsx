import {
  IMPACT_KPI_CHIP_STATUS,
  ISSUE_LABELS,
  SESSION_DETAILS,
  sortByIssueOrder,
  type SessionDetailsModel,
} from './demoData';
import { ImpactIssueIcon } from './components/ImpactIssueIcons';

interface SessionDetailsDemoProps {
  data?: SessionDetailsModel;
}

export function SessionDetailsDemo({
  data = SESSION_DETAILS,
}: SessionDetailsDemoProps) {
  const impactTypes = sortByIssueOrder(data.impactTypes);
  const kpiGroups = sortByIssueOrder(data.kpiGroups);

  return (
    <aside className="an-session-details" aria-label="Session details">
      <header className="an-session-details__header">
        <h2 className="an-session-details__title">Session details</h2>
      </header>

      <div className="an-session-details__meta">
        {data.metadata.map((field) => (
          <div className="an-session-details__meta-row" key={field.label}>
            <span className="an-session-details__meta-label">{field.label}</span>
            <span className="an-session-details__meta-value">{field.value}</span>
          </div>
        ))}
      </div>

      {impactTypes.length > 0 && (
        <>
          <div className="an-session-details__divider" aria-hidden />
          <section
            className="an-session-details__impact-types"
            aria-label="Impact types"
          >
            <h3 className="an-session-details__section-title">Impact types</h3>
            <div className="an-session-details__kpi-groups">
              {impactTypes.map((group) => (
                <div
                  key={group.issueKind}
                  className="an-session-details__kpi-group"
                >
                  <h4 className="an-session-details__impact-heading">
                    <ImpactIssueIcon kind={group.issueKind} size={18} />
                    {ISSUE_LABELS[group.issueKind]}
                  </h4>
                  {group.kpis.map((kpi) => (
                    <div
                      key={kpi.kpiId}
                      className="an-session-details__kpi-row"
                    >
                      <span className="an-session-details__kpi-label">
                        {kpi.label}
                      </span>
                      <span
                        className={`an-chip an-chip--${IMPACT_KPI_CHIP_STATUS[kpi.band]}`}
                      >
                        {kpi.value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {kpiGroups.length > 0 && (
        <>
          <div className="an-session-details__divider" aria-hidden />
          <section
            className="an-session-details__kpis"
            aria-label="Correlated KPIs"
          >
            <h3 className="an-session-details__section-title">
              Correlated KPIs
            </h3>
            <div className="an-session-details__kpi-groups">
              {kpiGroups.map((group) => (
                <div
                  key={group.issueKind}
                  className="an-session-details__kpi-group"
                >
                  <h4 className="an-session-details__impact-heading">
                    <ImpactIssueIcon kind={group.issueKind} size={18} />
                    {ISSUE_LABELS[group.issueKind]}
                  </h4>
                  {group.kpis.map((kpi) => (
                    <div
                      key={kpi.kpiId}
                      className={`an-session-details__kpi-row${
                        kpi.selected
                          ? ' an-session-details__kpi-row--selected'
                          : ''
                      }`}
                    >
                      <span className="an-session-details__kpi-label">
                        {kpi.label}
                      </span>
                      <span className="an-session-details__kpi-value">
                        {kpi.value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </aside>
  );
}
