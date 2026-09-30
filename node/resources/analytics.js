import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/analytics.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';

const _sdkDescriptors = new DescriptorSource(settings, {["getAnalyticsOverview"]:r0,["getPaymentVolumeTimeseries"]:r0,["getSubscriptionAnalytics"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.analytics = Object.freeze({
      getOverview: async (params, options) => this.#runtime.request("getAnalyticsOverview", _sdkRequestInput([], [], [
  "range",
  "timezone",
  "include_previous_period",
  "currency",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getOverviewWithResponse: async (params, options) => this.#runtime.request("getAnalyticsOverview", _sdkRequestInput([], [], [
  "range",
  "timezone",
  "include_previous_period",
  "currency",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPaymentVolumeTimeseries: async (params, options) => this.#runtime.request("getPaymentVolumeTimeseries", _sdkRequestInput([], [], [
  "range",
  "timezone",
  "include_previous_period",
  "currency",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPaymentVolumeTimeseriesWithResponse: async (params, options) => this.#runtime.request("getPaymentVolumeTimeseries", _sdkRequestInput([], [], [
  "range",
  "timezone",
  "include_previous_period",
  "currency",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getSubscription: async (params, options) => this.#runtime.request("getSubscriptionAnalytics", _sdkRequestInput([], [], [
  "range",
  "timezone",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getSubscriptionWithResponse: async (params, options) => this.#runtime.request("getSubscriptionAnalytics", _sdkRequestInput([], [], [
  "range",
  "timezone",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeAnalyticsOverviewResponse } from '../models/AnalyticsOverviewResponse.js';
export { makePaymentVolumeTimeseriesResponse } from '../models/PaymentVolumeTimeseriesResponse.js';
export { makeSubscriptionAnalyticsResponse } from '../models/SubscriptionAnalyticsResponse.js';
export { makeAnalyticsOverview } from '../models/AnalyticsOverview.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makePaymentVolumeTimeseries } from '../models/PaymentVolumeTimeseries.js';
export { makePaymentVolumeBucket } from '../models/PaymentVolumeBucket.js';
export { makeCountMetric } from '../models/CountMetric.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeSubscriptionAnalytics } from '../models/SubscriptionAnalytics.js';
export { makeSubscriptionSnapshotMetrics } from '../models/SubscriptionSnapshotMetrics.js';
export { makeSubscriptionStatusCounts } from '../models/SubscriptionStatusCounts.js';
export { makeSubscriptionWindowMetrics } from '../models/SubscriptionWindowMetrics.js';
export { makeMoneyMetric } from '../models/MoneyMetric.js';
export { makeSignedMoney } from '../models/SignedMoney.js';
