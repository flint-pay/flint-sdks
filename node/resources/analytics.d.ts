import type { WithResponseInfo } from '../runtime.js';
import type {
    AnalyticsGetOverviewParams,
    AnalyticsGetPaymentVolumeTimeseriesParams,
    AnalyticsGetSubscriptionParams,
    AnalyticsOverview,
    AnalyticsOverviewResponse
} from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { PaymentVolumeTimeseries, PaymentVolumeTimeseriesResponse } from '../declarations/types-48.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { SubscriptionAnalytics, SubscriptionAnalyticsResponse } from '../declarations/types-60.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    AnalyticsGetOverviewParams,
    AnalyticsOverview,
    AnalyticsOverviewResponse,
    AnalyticsGetPaymentVolumeTimeseriesParams,
    AnalyticsGetSubscriptionParams
} from '../declarations/types-0.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { PaymentVolumeTimeseries, PaymentVolumeTimeseriesResponse, PaymentVolumeBucket } from '../declarations/types-48.js';
export type { SubscriptionAnalytics, SubscriptionAnalyticsResponse } from '../declarations/types-60.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MoneyValue, NextAction } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { SubscriptionSnapshotMetrics, SubscriptionStatusCounts } from '../declarations/types-63.js';
export type { SubscriptionWindowMetrics } from '../declarations/types-64.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export interface AnalyticsResource {
    /**
 * Returns high-level merchant analytics for the requested half-open period.
 *
 * `GET /v1/analytics/overview`
 * @see https://developers.withflintpay.com/docs/api/analytics#getAnalyticsOverview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.analytics.getOverview({period_start_at: "2026-08-02T16:00:00Z"})
 */
    getOverview(params: AnalyticsGetOverviewParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<AnalyticsOverview, AnalyticsOverviewResponse>>;
    /**
 * Returns merchant payment volume buckets for the requested half-open period.
 *
 * `GET /v1/analytics/payment-volume-timeseries`
 * @see https://developers.withflintpay.com/docs/api/analytics#getPaymentVolumeTimeseries
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.analytics.getPaymentVolumeTimeseries({period_start_at: "2026-08-02T16:00:00Z"})
 */
    getPaymentVolumeTimeseries(params: AnalyticsGetPaymentVolumeTimeseriesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentVolumeTimeseries, PaymentVolumeTimeseriesResponse>>;
    /**
 * Returns windowed subscription metrics plus current subscription snapshot metrics.
 *
 * `GET /v1/analytics/subscriptions`
 * @see https://developers.withflintpay.com/docs/api/analytics#getSubscriptionAnalytics
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.analytics.getSubscription({period_start_at: "2026-08-02T16:00:00Z"})
 */
    getSubscription(params: AnalyticsGetSubscriptionParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionAnalytics, SubscriptionAnalyticsResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly analytics: AnalyticsResource;
}
