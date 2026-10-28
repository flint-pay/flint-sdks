import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/analytics.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';

const _sdkDescriptors = new DescriptorSource(settings, {["getAnalyticsOverview"]:r0,["getPaymentVolumeTimeseries"]:r0,["getSubscriptionAnalytics"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.analytics = Object.freeze({
      getOverview: async (params, options) => this.#runtime.request("getAnalyticsOverview", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAnalyticsOverview", result, path))),
      getOverviewWithResponse: async (params, options) => this.#runtime.request("getAnalyticsOverview", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency"
], false, false, params), options).then(_sdkResponse),
      getPaymentVolumeTimeseries: async (params, options) => this.#runtime.request("getPaymentVolumeTimeseries", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency",
  "granularity",
  "timezone"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentVolumeTimeseries", result, path))),
      getPaymentVolumeTimeseriesWithResponse: async (params, options) => this.#runtime.request("getPaymentVolumeTimeseries", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency",
  "granularity",
  "timezone"
], false, false, params), options).then(_sdkResponse),
      getSubscription: async (params, options) => this.#runtime.request("getSubscriptionAnalytics", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionAnalytics", result, path))),
      getSubscriptionWithResponse: async (params, options) => this.#runtime.request("getSubscriptionAnalytics", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency"
], false, false, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
