import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/workloadIdentities.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';

const _sdkDescriptors = new DescriptorSource(settings, {["createWorkloadIdentity"]:r0,["deleteWorkloadIdentity"]:r0,["getWorkloadIdentity"]:r0,["listWorkloadIdentities"]:r0,["updateWorkloadIdentity"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.workloadIdentities = Object.freeze({
      create: async (params, options) => this.#runtime.request("createWorkloadIdentity", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWorkloadIdentity", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createWorkloadIdentity", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (workload_identity_id, params, options) => this.#runtime.request("deleteWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteWorkloadIdentity", result, path))),
      removeWithResponse: async (workload_identity_id, params, options) => this.#runtime.request("deleteWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (workload_identity_id, params, options) => this.#runtime.request("getWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWorkloadIdentity", result, path))),
      getWithResponse: async (workload_identity_id, params, options) => this.#runtime.request("getWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listWorkloadIdentities", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWorkloadIdentities", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listWorkloadIdentities", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWorkloadIdentities", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listWorkloadIdentities", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listWorkloadIdentities", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listWorkloadIdentities", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options),
      update: async (workload_identity_id, params, options) => this.#runtime.request("updateWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateWorkloadIdentity", result, path))),
      updateWithResponse: async (workload_identity_id, params, options) => this.#runtime.request("updateWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateWorkloadIdentityRequest } from '../models/CreateWorkloadIdentityRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateWorkloadIdentityRequest } from '../models/UpdateWorkloadIdentityRequest.js';
export { makeWorkloadIdentityClaimConditionRequest } from '../models/WorkloadIdentityClaimConditionRequest.js';
