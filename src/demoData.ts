export type IssueKind = 'connectivity' | 'reliability' | 'signal' | 'throughput';
export type KpiBand = 'breached' | 'nearBreach' | 'meetsTarget';

export interface SessionMetadataField {
  label: string;
  value: string;
}

export interface SessionImpactKpi {
  kpiId: string;
  label: string;
  value: string;
  band: KpiBand;
}

export interface SessionImpactTypeGroup {
  issueKind: IssueKind;
  kpis: SessionImpactKpi[];
}

export interface SessionKpiRow {
  kpiId: string;
  label: string;
  value: string;
  selected: boolean;
}

export interface SessionKpiGroup {
  issueKind: IssueKind;
  kpis: SessionKpiRow[];
}

export interface SessionDetailsModel {
  metadata: SessionMetadataField[];
  impactTypes: SessionImpactTypeGroup[];
  kpiGroups: SessionKpiGroup[];
}

/** Issue order within each section: connectivity → reliability → signal → throughput */
export const ISSUE_ORDER: IssueKind[] = [
  'connectivity',
  'reliability',
  'signal',
  'throughput',
];

export const ISSUE_LABELS: Record<IssueKind, string> = {
  connectivity: 'Connectivity',
  reliability: 'Reliability',
  signal: 'Signal',
  throughput: 'Throughput',
};

export const IMPACT_KPI_CHIP_STATUS: Record<KpiBand, string> = {
  breached: 'soft-red',
  nearBreach: 'soft-yellow',
  meetsTarget: 'soft-green',
};

export const DEMO_SUBSCRIBER_IMSI = '310150987654321';
export const DEMO_SUBSCRIBER_CELL = 'Downtown-metro-14bx';
export const DEMO_FOCUSED_KPI = 'DL Throughput';

/**
 * Impact types — categories this session was flagged with (Reliability + Throughput).
 * Correlated KPIs — complementary categories not already in Impact types (Connectivity + Signal).
 */
export const SESSION_DETAILS: SessionDetailsModel = {
  metadata: [
    { label: 'Session ID', value: 'ses-8842-thr-rel-001' },
    {
      label: 'Site / sector / band',
      value: 'Site METR-14 · sector S2 · band n78',
    },
    { label: 'Duration', value: '12m 34s' },
    { label: 'Start time', value: '2026-03-12 14:08:22' },
    { label: 'End time', value: '2026-03-12 14:20:56' },
  ],
  impactTypes: [
    {
      issueKind: 'reliability',
      kpis: [
        {
          kpiId: 'reliability_5g_ho_success_pct',
          label: '5G HO Succ%',
          value: '72.4%',
          band: 'breached',
        },
        {
          kpiId: 'reliability_rlf_count',
          label: 'Radio Link Failure (RLF) count',
          value: '3',
          band: 'breached',
        },
      ],
    },
    {
      issueKind: 'throughput',
      kpis: [
        {
          kpiId: 'throughput_dl_mbps',
          label: 'DL Throughput',
          value: '8.2 Mbps',
          band: 'nearBreach',
        },
        {
          kpiId: 'throughput_ul_mbps',
          label: 'UL Throughput',
          value: '1.1 Mbps',
          band: 'nearBreach',
        },
      ],
    },
  ],
  kpiGroups: [
    {
      issueKind: 'connectivity',
      kpis: [
        {
          kpiId: 'connectivity_attach_success_pct',
          label: 'Attach Succ%',
          value: '98.2%',
          selected: false,
        },
        {
          kpiId: 'connectivity_nr_rrc_setup_success_pct',
          label: 'NR RRC Setup Succ%',
          value: '99.1%',
          selected: false,
        },
      ],
    },
    {
      issueKind: 'signal',
      kpis: [
        {
          kpiId: 'signal_rsrp',
          label: 'RSRP',
          value: '-91.2 dBm',
          selected: false,
        },
        {
          kpiId: 'signal_rsrq',
          label: 'RSRQ',
          value: '-12.4 dB',
          selected: false,
        },
        {
          kpiId: 'signal_bler',
          label: 'BLER',
          value: '2.1%',
          selected: false,
        },
      ],
    },
  ],
};

export function sortByIssueOrder<T extends { issueKind: IssueKind }>(
  groups: T[],
): T[] {
  return [...groups].sort(
    (a, b) => ISSUE_ORDER.indexOf(a.issueKind) - ISSUE_ORDER.indexOf(b.issueKind),
  );
}
