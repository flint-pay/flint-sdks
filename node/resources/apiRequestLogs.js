import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/apiRequestLogs.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';

const _sdkDescriptors = new DescriptorSource(settings, {["getAPIRequestLog"]:r0,["listAPIRequestLogs"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.apiRequestLogs = Object.freeze({
      get: async (api_request_log_id, params, options) => this.#runtime.request("getAPIRequestLog", _sdkRequestInput([
  "api_request_log_id"
], [api_request_log_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAPIRequestLog", result, path))),
      list: async (params, options) => this.#runtime.request("listAPIRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "caller_type",
  "caller_id",
  "partner_app_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listAPIRequestLogs", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listAPIRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "caller_type",
  "caller_id",
  "partner_app_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listAPIRequestLogs", result, path)),
      listItems: (params, options) => this.#runtime.items("listAPIRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "caller_type",
  "caller_id",
  "partner_app_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
