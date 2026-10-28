import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/riskPreviews.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';

const _sdkDescriptors = new DescriptorSource(settings, {["createRiskPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.riskPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskPreview", _sdkRequestInput([], [], [], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskPreview", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createRiskPreview", _sdkRequestInput([], [], [], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateRiskPreviewRequest } from '../models/CreateRiskPreviewRequest.js';
export { makeCreateRiskPreviewRequestInline } from '../models/CreateRiskPreviewRequestInline.js';
export { makeCreateRiskPreviewRequestStoredRule } from '../models/CreateRiskPreviewRequestStoredRule.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeRiskPredicateNode } from '../models/RiskPredicateNode.js';
export { makeRiskPredicateNodeAll } from '../models/RiskPredicateNodeAll.js';
export { makeRiskPredicateNodeAny } from '../models/RiskPredicateNodeAny.js';
export { makeRiskPredicateNodeComparison } from '../models/RiskPredicateNodeComparison.js';
export { makeRiskPredicateNodeIn } from '../models/RiskPredicateNodeIn.js';
export { makeRiskPredicateNodeInList } from '../models/RiskPredicateNodeInList.js';
export { makeRiskPredicateNodeIsMissing } from '../models/RiskPredicateNodeIsMissing.js';
export { makeRiskPredicateNodeMoneyComparison } from '../models/RiskPredicateNodeMoneyComparison.js';
export { makeRiskPredicateNodeNot } from '../models/RiskPredicateNodeNot.js';
