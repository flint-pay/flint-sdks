import { BaseService, resolveEnum } from "./base";
import type { Money } from "../generated/types/common";
import { fromRawMoney, type Raw } from "./parsing";

const SERVICE = "flint.v1.analytics.AnalyticsService";

export type AnalyticsTimeRange = "today" | "last_7_days" | "last_30_days";

export const ANALYTICS_TIME_RANGE_MAP: Record<number, AnalyticsTimeRange> = {
  1: "today",
  2: "last_7_days",
  3: "last_30_days",
};

export const ANALYTICS_TIME_RANGE_TO_PROTO: Record<AnalyticsTimeRange, number> = {
  today: 1,
  last_7_days: 2,
  last_30_days: 3,
};

export type MoneyMetric = {
  currentMoney: Money;
  previousMoney?: Money;
  changePercent?: number;
};

export type CountMetric = {
  currentCount: number;
  previousCount?: number;
  changePercent?: number;
};

export type AnalyticsOverview = {
  range: AnalyticsTimeRange;
  timezone: string;
  grossVolume: MoneyMetric;
  netVolume: MoneyMetric;
  refundsTotal: MoneyMetric;
  paymentsCount: CountMetric;
  averagePayment: MoneyMetric;
  newCustomers: CountMetric;
  activeSubscriptions: CountMetric;
  hasMultipleCurrencies: boolean;
  currencies: string[];
};

export type PaymentVolumeBucket = {
  label: string;
  periodStart: Date;
  periodEnd: Date;
  volumeMoney: Money;
  paymentsCount: number;
  previousVolumeMoney?: Money;
  previousPaymentsCount?: number;
};

export type PaymentVolumeTimeseries = {
  range: AnalyticsTimeRange;
  timezone: string;
  buckets: PaymentVolumeBucket[];
  hasMultipleCurrencies: boolean;
  currencies: string[];
};

export type SubscriptionStatusCounts = {
  trialing: number;
  active: number;
  paused: number;
  pastDue: number;
  canceled: number;
};

export type SubscriptionWindowMetrics = {
  newSubscriptions: number;
  canceledSubscriptions: number;
  subscriptionCollectedAmountByCurrency: Money[];
};

export type SubscriptionSnapshotMetrics = {
  mrrByCurrency: Money[];
  arrByCurrency: Money[];
  statusCounts: SubscriptionStatusCounts;
};

export type SubscriptionAnalytics = {
  range: AnalyticsTimeRange;
  timezone: string;
  windowMetrics: SubscriptionWindowMetrics;
  snapshotMetrics: SubscriptionSnapshotMetrics;
};

export type AnalyticsOverviewParams = {
  range: AnalyticsTimeRange;
  timezone?: string;
  includePreviousPeriod?: boolean;
};

export type PaymentVolumeTimeseriesParams = AnalyticsOverviewParams;

export type SubscriptionAnalyticsParams = {
  range: AnalyticsTimeRange;
  timezone?: string;
};

export class AnalyticsService extends BaseService {
  async getOverview(params: AnalyticsOverviewParams): Promise<AnalyticsOverview> {
    const res = await this.rpc<Record<string, unknown>, { overview: Raw }>(
      SERVICE,
      "GetAnalyticsOverview",
      {
        range: ANALYTICS_TIME_RANGE_TO_PROTO[params.range],
        timezone: params.timezone,
        includePreviousPeriod: params.includePreviousPeriod,
      }
    );

    return fromRawOverview(res.overview);
  }

  async getPaymentVolumeTimeseries(
    params: PaymentVolumeTimeseriesParams
  ): Promise<PaymentVolumeTimeseries> {
    const res = await this.rpc<Record<string, unknown>, Raw>(
      SERVICE,
      "GetPaymentVolumeTimeseries",
      {
        range: ANALYTICS_TIME_RANGE_TO_PROTO[params.range],
        timezone: params.timezone,
        includePreviousPeriod: params.includePreviousPeriod,
      }
    );

    return fromRawPaymentVolumeTimeseries(res);
  }

  async getSubscriptions(params: SubscriptionAnalyticsParams): Promise<SubscriptionAnalytics> {
    const res = await this.rpc<Record<string, unknown>, { analytics: Raw }>(
      SERVICE,
      "GetSubscriptionAnalytics",
      {
        range: ANALYTICS_TIME_RANGE_TO_PROTO[params.range],
        timezone: params.timezone,
      }
    );

    return fromRawSubscriptionAnalytics(res.analytics);
  }
}

const fromRawMoneyMetric = (raw: Raw): MoneyMetric => ({
  currentMoney: fromRawMoney(raw["currentMoney"] as Raw | undefined),
  previousMoney: raw["previousMoney"] ? fromRawMoney(raw["previousMoney"] as Raw) : undefined,
  changePercent: raw["changePercent"] as number | undefined,
});

const fromRawCountMetric = (raw: Raw): CountMetric => ({
  currentCount: Number(raw["currentCount"] ?? 0),
  previousCount: raw["previousCount"] != null ? Number(raw["previousCount"]) : undefined,
  changePercent: raw["changePercent"] as number | undefined,
});

const fromRawOverview = (raw: Raw): AnalyticsOverview => ({
  range:
    resolveEnum(raw["range"], ANALYTICS_TIME_RANGE_MAP, ANALYTICS_TIME_RANGE_TO_PROTO) ?? "last_30_days",
  timezone: (raw["timezone"] as string) ?? "UTC",
  grossVolume: fromRawMoneyMetric((raw["grossVolume"] as Raw) ?? {}),
  netVolume: fromRawMoneyMetric((raw["netVolume"] as Raw) ?? {}),
  refundsTotal: fromRawMoneyMetric((raw["refundsTotal"] as Raw) ?? {}),
  paymentsCount: fromRawCountMetric((raw["paymentsCount"] as Raw) ?? {}),
  averagePayment: fromRawMoneyMetric((raw["averagePayment"] as Raw) ?? {}),
  newCustomers: fromRawCountMetric((raw["newCustomers"] as Raw) ?? {}),
  activeSubscriptions: fromRawCountMetric((raw["activeSubscriptions"] as Raw) ?? {}),
  hasMultipleCurrencies: Boolean(raw["hasMultipleCurrencies"]),
  currencies: (raw["currencies"] as string[]) ?? [],
});

const fromRawPaymentVolumeBucket = (raw: Raw): PaymentVolumeBucket => ({
  label: (raw["label"] as string) ?? "",
  periodStart: new Date(raw["periodStart"] as string),
  periodEnd: new Date(raw["periodEnd"] as string),
  volumeMoney: fromRawMoney(raw["volumeMoney"] as Raw | undefined),
  paymentsCount: Number(raw["paymentsCount"] ?? 0),
  previousVolumeMoney: raw["previousVolumeMoney"]
    ? fromRawMoney(raw["previousVolumeMoney"] as Raw)
    : undefined,
  previousPaymentsCount:
    raw["previousPaymentsCount"] != null ? Number(raw["previousPaymentsCount"]) : undefined,
});

const fromRawPaymentVolumeTimeseries = (raw: Raw): PaymentVolumeTimeseries => ({
  range:
    resolveEnum(raw["range"], ANALYTICS_TIME_RANGE_MAP, ANALYTICS_TIME_RANGE_TO_PROTO) ?? "last_30_days",
  timezone: (raw["timezone"] as string) ?? "UTC",
  buckets: ((raw["buckets"] as Raw[]) ?? []).map(fromRawPaymentVolumeBucket),
  hasMultipleCurrencies: Boolean(raw["hasMultipleCurrencies"]),
  currencies: (raw["currencies"] as string[]) ?? [],
});

const fromRawStatusCounts = (raw: Raw): SubscriptionStatusCounts => ({
  trialing: Number(raw["trialing"] ?? 0),
  active: Number(raw["active"] ?? 0),
  paused: Number(raw["paused"] ?? 0),
  pastDue: Number(raw["pastDue"] ?? 0),
  canceled: Number(raw["canceled"] ?? 0),
});

const fromRawSubscriptionAnalytics = (raw: Raw): SubscriptionAnalytics => ({
  range:
    resolveEnum(raw["range"], ANALYTICS_TIME_RANGE_MAP, ANALYTICS_TIME_RANGE_TO_PROTO) ?? "last_30_days",
  timezone: (raw["timezone"] as string) ?? "UTC",
  windowMetrics: {
    newSubscriptions: Number((raw["windowMetrics"] as Raw | undefined)?.["newSubscriptions"] ?? 0),
    canceledSubscriptions: Number(
      (raw["windowMetrics"] as Raw | undefined)?.["canceledSubscriptions"] ?? 0
    ),
    subscriptionCollectedAmountByCurrency: (
      (((raw["windowMetrics"] as Raw | undefined)?.["subscriptionCollectedAmountByCurrency"] as Raw[]) ??
        [])
    ).map(fromRawMoney),
  },
  snapshotMetrics: {
    mrrByCurrency: (
      (((raw["snapshotMetrics"] as Raw | undefined)?.["mrrByCurrency"] as Raw[]) ?? [])
    ).map(fromRawMoney),
    arrByCurrency: (
      (((raw["snapshotMetrics"] as Raw | undefined)?.["arrByCurrency"] as Raw[]) ?? [])
    ).map(fromRawMoney),
    statusCounts: fromRawStatusCounts(
      (((raw["snapshotMetrics"] as Raw | undefined)?.["statusCounts"] as Raw) ?? {})
    ),
  },
});
