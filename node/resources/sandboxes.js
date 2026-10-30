import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/sandboxes.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createSandbox"]:r0,["createSandboxAPIKey"]:r0,["deleteSandbox"]:r0,["getSandbox"]:r0,["listSandboxes"]:r0,["resetSandbox"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.sandboxes = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSandbox", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSandbox", result, path))),
      createAPIKey: async (sandbox_id, params, options) => this.#runtime.request("createSandboxAPIKey", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSandboxAPIKey", result, path))),
      delete: async (sandbox_id, params, options) => this.#runtime.request("deleteSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSandbox", result, path))),
      get: async (sandbox_id, params, options) => this.#runtime.request("getSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSandbox", result, path))),
      list: async (params, options) => this.#runtime.request("listSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSandboxes", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSandboxes", result, path)),
      listItems: (params, options) => this.#runtime.items("listSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      reset: async (sandbox_id, params, options) => this.#runtime.request("resetSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resetSandbox", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateSandboxRequest } from '../models/CreateSandboxRequest.js';
export { makeIssueSandboxAPIKeyRequest } from '../models/IssueSandboxAPIKeyRequest.js';
export { makeIssueSandboxAPIKeyRequestFull } from '../models/IssueSandboxAPIKeyRequestFull.js';
export { makeIssueSandboxAPIKeyRequestReadOnly } from '../models/IssueSandboxAPIKeyRequestReadOnly.js';
export { makeIssueSandboxAPIKeyRequestRestricted } from '../models/IssueSandboxAPIKeyRequestRestricted.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
