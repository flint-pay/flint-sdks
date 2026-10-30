import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/modifierSets.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createModifierSet"]:r0,["deleteModifierSet"]:r0,["getModifierSet"]:r0,["listModifierSets"]:r0,["updateModifierSet"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.modifierSets = Object.freeze({
      create: async (params, options) => this.#runtime.request("createModifierSet", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createModifierSet", result, path))),
      delete: async (modifier_set_id, params, options) => this.#runtime.request("deleteModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteModifierSet", result, path))),
      get: async (modifier_set_id, params, options) => this.#runtime.request("getModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getModifierSet", result, path))),
      list: async (params, options) => this.#runtime.request("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listModifierSets", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listModifierSets", result, path)),
      listItems: (params, options) => this.#runtime.items("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (modifier_set_id, params, options) => this.#runtime.request("updateModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateModifierSet", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateInlineModifierGroupRequest } from '../models/CreateInlineModifierGroupRequest.js';
export { makeCreateModifierRequest } from '../models/CreateModifierRequest.js';
export { makeCreateModifierSetGroupInputExisting } from '../models/CreateModifierSetGroupInputExisting.js';
export { makeCreateModifierSetGroupInputInline } from '../models/CreateModifierSetGroupInputInline.js';
export { makeCreateModifierSetGroupRequest } from '../models/CreateModifierSetGroupRequest.js';
export { makeCreateModifierSetRequest } from '../models/CreateModifierSetRequest.js';
export { makeInlineModifierGroupRequest } from '../models/InlineModifierGroupRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeModifierOverride } from '../models/ModifierOverride.js';
export { makeModifierRequest } from '../models/ModifierRequest.js';
export { makeModifierSetGroupInputExisting } from '../models/ModifierSetGroupInputExisting.js';
export { makeModifierSetGroupInputInline } from '../models/ModifierSetGroupInputInline.js';
export { makeModifierSetGroupRequest } from '../models/ModifierSetGroupRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeTextModifierConfigRequest } from '../models/TextModifierConfigRequest.js';
export { makeUpdateModifierSetRequest } from '../models/UpdateModifierSetRequest.js';
