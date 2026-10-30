import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/riskRules.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createRiskRule"]:r0,["deleteRiskRule"]:r0,["getRiskRule"]:r0,["getRiskRuleAttributes"]:r0,["listRiskRules"]:r0,["updateRiskRule"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.riskRules = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskRule", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskRule", result, path))),
      delete: async (risk_rule_id, params, options) => this.#runtime.request("deleteRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskRule", result, path))),
      get: async (risk_rule_id, params, options) => this.#runtime.request("getRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskRule", result, path))),
      getAttributes: async (params, options) => this.#runtime.request("getRiskRuleAttributes", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskRuleAttributes", result, path))),
      list: async (params, options) => this.#runtime.request("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskRules", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listRiskRules", result, path)),
      listItems: (params, options) => this.#runtime.items("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (risk_rule_id, params, options) => this.#runtime.request("updateRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateRiskRule", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateRiskRuleRequest } from '../models/CreateRiskRuleRequest.js';
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
export { makeUpdateRiskRuleRequest } from '../models/UpdateRiskRuleRequest.js';
