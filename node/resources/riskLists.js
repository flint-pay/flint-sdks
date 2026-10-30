import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/riskLists.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createRiskList"]:r0,["createRiskListItems"]:r0,["deleteRiskList"]:r0,["deleteRiskListItem"]:r0,["getRiskList"]:r0,["getRiskListItem"]:r0,["listRiskListItems"]:r0,["listRiskLists"]:r0,["updateRiskList"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.riskLists = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskList", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskList", result, path))),
      createItems: async (risk_list_id, params, options) => this.#runtime.request("createRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskListItems", result, path))),
      delete: async (risk_list_id, params, options) => this.#runtime.request("deleteRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskList", result, path))),
      deleteItem: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("deleteRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskListItem", result, path))),
      get: async (risk_list_id, params, options) => this.#runtime.request("getRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskList", result, path))),
      getItem: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("getRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskListItem", result, path))),
      listRiskListItems: async (risk_list_id, params, options) => this.#runtime.request("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskListItems", result, path))),
      listRiskListItemsPages: (risk_list_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listRiskListItems", result, path)),
      listRiskListItemsItems: (risk_list_id, params, options) => this.#runtime.items("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskLists", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listRiskLists", result, path)),
      listItems: (params, options) => this.#runtime.items("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (risk_list_id, params, options) => this.#runtime.request("updateRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateRiskList", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddRiskListItemsRequest } from '../models/AddRiskListItemsRequest.js';
export { makeCreateRiskListRequest } from '../models/CreateRiskListRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateRiskListRequest } from '../models/UpdateRiskListRequest.js';
