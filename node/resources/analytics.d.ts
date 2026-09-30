export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { AnalyticsGetOverviewInput } from '../declarations/AnalyticsGetOverviewInput.js';
import type { AnalyticsGetOverviewResponse } from '../declarations/AnalyticsGetOverviewResponse.js';
import type { AnalyticsGetPaymentVolumeTimeseriesInput } from '../declarations/AnalyticsGetPaymentVolumeTimeseriesInput.js';
import type { AnalyticsGetPaymentVolumeTimeseriesResponse } from '../declarations/AnalyticsGetPaymentVolumeTimeseriesResponse.js';
import type { AnalyticsGetSubscriptionInput } from '../declarations/AnalyticsGetSubscriptionInput.js';
import type { AnalyticsGetSubscriptionResponse } from '../declarations/AnalyticsGetSubscriptionResponse.js';
import type { AnalyticsOverview } from '../declarations/AnalyticsOverview.js';
import type { AnalyticsOverviewInput } from '../declarations/AnalyticsOverviewInput.js';
import type { AnalyticsOverviewResponse } from '../declarations/AnalyticsOverviewResponse.js';
import type { AnalyticsOverviewResponseInput } from '../declarations/AnalyticsOverviewResponseInput.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { PaymentVolumeTimeseriesResponse } from '../declarations/PaymentVolumeTimeseriesResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { SubscriptionAnalyticsResponse } from '../declarations/SubscriptionAnalyticsResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface AnalyticsResource {
    /**
 * Returns high-level merchant analytics for the requested time range.
 * GET /v1/analytics/overview
 * @example
 * client.analytics.getOverview({range: "today"})
 */
    getOverview(params: { "range": InputValue<"today" | "last_7_days" | "last_30_days" | "last_90_days">; "timezone"?: InputValue<string>; "include_previous_period"?: InputValue<boolean>; "currency"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<AnalyticsOverviewResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getOverviewWithResponse(params: { "range": InputValue<"today" | "last_7_days" | "last_30_days" | "last_90_days">; "timezone"?: InputValue<string>; "include_previous_period"?: InputValue<boolean>; "currency"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<AnalyticsGetOverviewResponse>>;
    /**
 * Returns merchant payment volume buckets for the requested time range.
 * GET /v1/analytics/payment-volume-timeseries
 * @example
 * client.analytics.getPaymentVolumeTimeseries({range: "today"})
 */
    getPaymentVolumeTimeseries(params: { "range": InputValue<"today" | "last_7_days" | "last_30_days" | "last_90_days">; "timezone"?: InputValue<string>; "include_previous_period"?: InputValue<boolean>; "currency"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<PaymentVolumeTimeseriesResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getPaymentVolumeTimeseriesWithResponse(params: { "range": InputValue<"today" | "last_7_days" | "last_30_days" | "last_90_days">; "timezone"?: InputValue<string>; "include_previous_period"?: InputValue<boolean>; "currency"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<AnalyticsGetPaymentVolumeTimeseriesResponse>>;
    /**
 * Returns windowed subscription metrics plus current subscription snapshot metrics.
 * GET /v1/analytics/subscriptions
 * @example
 * client.analytics.getSubscription({range: "today"})
 */
    getSubscription(params: { "range": InputValue<"today" | "last_7_days" | "last_30_days" | "last_90_days">; "timezone"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<SubscriptionAnalyticsResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getSubscriptionWithResponse(params: { "range": InputValue<"today" | "last_7_days" | "last_30_days" | "last_90_days">; "timezone"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<AnalyticsGetSubscriptionResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly analytics: AnalyticsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { AnalyticsOverviewResponse } from '../declarations/AnalyticsOverviewResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { AnalyticsGetOverviewResponse } from '../declarations/AnalyticsGetOverviewResponse.js';
export type { PaymentVolumeTimeseriesResponse } from '../declarations/PaymentVolumeTimeseriesResponse.js';
export type { AnalyticsGetPaymentVolumeTimeseriesResponse } from '../declarations/AnalyticsGetPaymentVolumeTimeseriesResponse.js';
export type { SubscriptionAnalyticsResponse } from '../declarations/SubscriptionAnalyticsResponse.js';
export type { AnalyticsGetSubscriptionResponse } from '../declarations/AnalyticsGetSubscriptionResponse.js';
export type { AnalyticsOverview } from '../declarations/AnalyticsOverview.js';
export type { AnalyticsOverviewInput } from '../declarations/AnalyticsOverviewInput.js';
export type { AnalyticsOverviewResponseInput } from '../declarations/AnalyticsOverviewResponseInput.js';
export type { AnalyticsGetOverviewInput } from '../declarations/AnalyticsGetOverviewInput.js';
export type { AnalyticsGetPaymentVolumeTimeseriesInput } from '../declarations/AnalyticsGetPaymentVolumeTimeseriesInput.js';
export type { AnalyticsGetSubscriptionInput } from '../declarations/AnalyticsGetSubscriptionInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { PaymentVolumeTimeseries } from '../declarations/PaymentVolumeTimeseries.js';
export type { PaymentVolumeBucket } from '../declarations/PaymentVolumeBucket.js';
export type { CountMetric } from '../declarations/CountMetric.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { SubscriptionAnalytics } from '../declarations/SubscriptionAnalytics.js';
export type { SubscriptionSnapshotMetrics } from '../declarations/SubscriptionSnapshotMetrics.js';
export type { SubscriptionStatusCounts } from '../declarations/SubscriptionStatusCounts.js';
export type { SubscriptionWindowMetrics } from '../declarations/SubscriptionWindowMetrics.js';
export type { MoneyMetric } from '../declarations/MoneyMetric.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export type { CountMetricInput } from '../declarations/CountMetricInput.js';
export type { MoneyMetricInput } from '../declarations/MoneyMetricInput.js';
export type { SignedMoneyInput } from '../declarations/SignedMoneyInput.js';
export type { ResponseMetaInput } from '../declarations/ResponseMetaInput.js';
export type { ResponseWarningInput } from '../declarations/ResponseWarningInput.js';
export type { NextActionInput } from '../declarations/NextActionInput.js';
export { makeAnalyticsOverviewResponse } from '../declarations/makeAnalyticsOverviewResponse.js';
export { makePaymentVolumeTimeseriesResponse } from '../declarations/makePaymentVolumeTimeseriesResponse.js';
export { makeSubscriptionAnalyticsResponse } from '../declarations/makeSubscriptionAnalyticsResponse.js';
export { makeAnalyticsOverview } from '../declarations/makeAnalyticsOverview.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makePaymentVolumeTimeseries } from '../declarations/makePaymentVolumeTimeseries.js';
export { makePaymentVolumeBucket } from '../declarations/makePaymentVolumeBucket.js';
export { makeCountMetric } from '../declarations/makeCountMetric.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeSubscriptionAnalytics } from '../declarations/makeSubscriptionAnalytics.js';
export { makeSubscriptionSnapshotMetrics } from '../declarations/makeSubscriptionSnapshotMetrics.js';
export { makeSubscriptionStatusCounts } from '../declarations/makeSubscriptionStatusCounts.js';
export { makeSubscriptionWindowMetrics } from '../declarations/makeSubscriptionWindowMetrics.js';
export { makeMoneyMetric } from '../declarations/makeMoneyMetric.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
