import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/apiKeys.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["createAPIKey"]:r0,["getAPIKey"]:r0,["listAPIKeys"]:r0,["revokeAPIKey"]:r0,["updateAPIKey"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.apiKeys = Object.freeze({
      create: async (params, options) => this.#runtime.request("createAPIKey", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createAPIKey", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createAPIKey", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (api_key_id, params, options) => this.#runtime.request("getAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAPIKey", result, path))),
      getWithResponse: async (api_key_id, params, options) => this.#runtime.request("getAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listAPIKeys", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listAPIKeys", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listAPIKeys", _sdkRequestInput([], [], [
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
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listAPIKeys", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listAPIKeys", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listAPIKeys", _sdkRequestInput([], [], [
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
      listItems: (params, options) => this.#runtime.items("listAPIKeys", _sdkRequestInput([], [], [
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
      revoke: async (api_key_id, params, options) => this.#runtime.request("revokeAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeAPIKey", result, path))),
      revokeWithResponse: async (api_key_id, params, options) => this.#runtime.request("revokeAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      update: async (api_key_id, params, options) => this.#runtime.request("updateAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateAPIKey", result, path))),
      updateWithResponse: async (api_key_id, params, options) => this.#runtime.request("updateAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeConfigurationVersionRequest } from '../models/ConfigurationVersionRequest.js';
export { makeCreateAPIKeyRequest } from '../models/CreateAPIKeyRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateAPIKeyRequest } from '../models/UpdateAPIKeyRequest.js';
