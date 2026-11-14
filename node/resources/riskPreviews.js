import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/riskPreviews.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';

const _sdkDescriptors = new DescriptorSource(settings, {["createRiskPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.riskPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskPreview", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskPreview", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateRiskPreviewRequest } from '../models/CreateRiskPreviewRequest.js';
export { makeCreateRiskPreviewRequestInline } from '../models/CreateRiskPreviewRequestInline.js';
export { makeCreateRiskPreviewRequestStoredRule } from '../models/CreateRiskPreviewRequestStoredRule.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeRiskPredicateNodeAllRequest } from '../models/RiskPredicateNodeAllRequest.js';
export { makeRiskPredicateNodeAnyRequest } from '../models/RiskPredicateNodeAnyRequest.js';
export { makeRiskPredicateNodeComparisonRequest } from '../models/RiskPredicateNodeComparisonRequest.js';
export { makeRiskPredicateNodeInListRequest } from '../models/RiskPredicateNodeInListRequest.js';
export { makeRiskPredicateNodeInRequest } from '../models/RiskPredicateNodeInRequest.js';
export { makeRiskPredicateNodeIsMissingRequest } from '../models/RiskPredicateNodeIsMissingRequest.js';
export { makeRiskPredicateNodeMoneyComparisonRequest } from '../models/RiskPredicateNodeMoneyComparisonRequest.js';
export { makeRiskPredicateNodeNotRequest } from '../models/RiskPredicateNodeNotRequest.js';
export { makeRiskPredicateNodeRequest } from '../models/RiskPredicateNodeRequest.js';
