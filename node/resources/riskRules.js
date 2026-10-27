import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/riskRules.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["createRiskRule"]:r0,["deleteRiskRule"]:r0,["getRiskRule"]:r0,["getRiskRuleAttributes"]:r0,["listRiskRules"]:r0,["updateRiskRule"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.riskRules = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskRule", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskRule", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createRiskRule", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (risk_rule_id, params, options) => this.#runtime.request("deleteRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskRule", result, path))),
      removeWithResponse: async (risk_rule_id, params, options) => this.#runtime.request("deleteRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (risk_rule_id, params, options) => this.#runtime.request("getRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskRule", result, path))),
      getWithResponse: async (risk_rule_id, params, options) => this.#runtime.request("getRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [], false, false, params), options).then(_sdkResponse),
      getAttributeRegistry: async (params, options) => this.#runtime.request("getRiskRuleAttributes", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskRuleAttributes", result, path))),
      getAttributeRegistryWithResponse: async (params, options) => this.#runtime.request("getRiskRuleAttributes", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskRules", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listRiskRules", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options),
      update: async (risk_rule_id, params, options) => this.#runtime.request("updateRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateRiskRule", result, path))),
      updateWithResponse: async (risk_rule_id, params, options) => this.#runtime.request("updateRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateRiskRuleRequest } from '../models/CreateRiskRuleRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeRiskPredicateNode } from '../models/RiskPredicateNode.js';
export { makeUpdateRiskRuleRequest } from '../models/UpdateRiskRuleRequest.js';
