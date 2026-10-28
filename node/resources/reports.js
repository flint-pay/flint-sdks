import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/reports.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';

const _sdkDescriptors = new DescriptorSource(settings, {["createReport"]:r0,["getReport"]:r0,["listReports"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.reports = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReport", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReport", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createReport", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (report_id, params, options) => this.#runtime.request("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReport", result, path))),
      getWithResponse: async (report_id, params, options) => this.#runtime.request("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [], false, false, params), options).then(_sdkResponse),
      getWait: (report_id, params, options) => this.#runtime.wait("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReport", result, path))),
      getWaitWithResponse: (report_id, params, options) => this.#runtime.wait("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReports", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReports", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateReportRequest } from '../models/CreateReportRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
