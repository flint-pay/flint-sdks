import type { InputValue } from '../runtime.js';
import type {
    AnalyticsGetOverviewInput,
    AnalyticsGetPaymentVolumeTimeseriesInput,
    AnalyticsGetSubscriptionInput,
    AnalyticsOverview,
    AnalyticsOverviewResponse
} from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { PaymentVolumeTimeseries, PaymentVolumeTimeseriesResponse } from '../declarations/types-36.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { SubscriptionAnalytics, SubscriptionAnalyticsResponse } from '../declarations/types-44.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails
} from '../runtime.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    AnalyticsOverview,
    AnalyticsOverviewResponse,
    AnalyticsGetOverviewInput,
    AnalyticsGetPaymentVolumeTimeseriesInput,
    AnalyticsGetSubscriptionInput,
    AuthMode
} from '../declarations/types-0.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { PaymentVolumeTimeseries, PaymentVolumeTimeseriesResponse, PaymentVolumeBucket } from '../declarations/types-36.js';
export type { SubscriptionAnalytics, SubscriptionAnalyticsResponse } from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { Credentials } from '../declarations/types-9.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { SubscriptionSnapshotMetrics, SubscriptionStatusCounts, SubscriptionWindowMetrics } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface AnalyticsResource {
    /**
 * Returns high-level merchant analytics for the requested half-open period.
 * @see reference/analytics.md#analyticsgetoverview
 * GET /v1/analytics/overview
 * @example
 * client.analytics.getOverview({period_start_at: "2026-01-01T00:00:00Z"})
 */
    getOverview(params: {
        "period_start_at": InputValue<string | globalThis.Date>;
        "period_end_at"?: InputValue<string | globalThis.Date>;
        "currency"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<AnalyticsOverview>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/analytics.md#analyticsgetoverview
     */
    getOverviewWithResponse(params: {
        "period_start_at": InputValue<string | globalThis.Date>;
        "period_end_at"?: InputValue<string | globalThis.Date>;
        "currency"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<AnalyticsOverviewResponse>>;
    /**
 * Returns merchant payment volume buckets for the requested half-open period.
 * @see reference/analytics.md#analyticsgetpaymentvolumetimeseries
 * GET /v1/analytics/payment-volume-timeseries
 * @example
 * client.analytics.getPaymentVolumeTimeseries({period_start_at: "2026-01-01T00:00:00Z"})
 */
    getPaymentVolumeTimeseries(params: {
        "period_start_at": InputValue<string | globalThis.Date>;
        "period_end_at"?: InputValue<string | globalThis.Date>;
        "currency"?: InputValue<string>;
        "granularity"?: InputValue<"hour" | "day" | "week" | "month">;
        "timezone"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PaymentVolumeTimeseries>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/analytics.md#analyticsgetpaymentvolumetimeseries
     */
    getPaymentVolumeTimeseriesWithResponse(params: {
        "period_start_at": InputValue<string | globalThis.Date>;
        "period_end_at"?: InputValue<string | globalThis.Date>;
        "currency"?: InputValue<string>;
        "granularity"?: InputValue<"hour" | "day" | "week" | "month">;
        "timezone"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PaymentVolumeTimeseriesResponse>>;
    /**
 * Returns windowed subscription metrics plus current subscription snapshot metrics.
 * @see reference/analytics.md#analyticsgetsubscription
 * GET /v1/analytics/subscriptions
 * @example
 * client.analytics.getSubscription({period_start_at: "2026-01-01T00:00:00Z"})
 */
    getSubscription(params: {
        "period_start_at": InputValue<string | globalThis.Date>;
        "period_end_at"?: InputValue<string | globalThis.Date>;
        "currency"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SubscriptionAnalytics>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/analytics.md#analyticsgetsubscription
     */
    getSubscriptionWithResponse(params: {
        "period_start_at": InputValue<string | globalThis.Date>;
        "period_end_at"?: InputValue<string | globalThis.Date>;
        "currency"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionAnalyticsResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly analytics: AnalyticsResource;
}
