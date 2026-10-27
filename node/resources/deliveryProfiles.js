import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryProfiles.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';

const _sdkDescriptors = new DescriptorSource(settings, {["assignToUnconfiguredDeliveryProfile"]:r0,["createDeliveryProfile"]:r0,["deleteDeliveryProfile"]:r0,["getDeliveryProfile"]:r0,["listDeliveryProfiles"]:r0,["updateDeliveryProfile"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryProfiles = Object.freeze({
      assignToUnconfigured: async (delivery_profile_id, params, options) => this.#runtime.request("assignToUnconfiguredDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("assignToUnconfiguredDeliveryProfile", result, path))),
      assignToUnconfiguredWithResponse: async (delivery_profile_id, params, options) => this.#runtime.request("assignToUnconfiguredDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createDeliveryProfile", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryProfile", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryProfile", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_profile_id, params, options) => this.#runtime.request("deleteDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryProfile", result, path))),
      removeWithResponse: async (delivery_profile_id, params, options) => this.#runtime.request("deleteDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_profile_id, params, options) => this.#runtime.request("getDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "include_diagnostics"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryProfile", result, path))),
      getWithResponse: async (delivery_profile_id, params, options) => this.#runtime.request("getDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "include_diagnostics"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryProfiles", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryProfiles", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params), options),
      update: async (delivery_profile_id, params, options) => this.#runtime.request("updateDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryProfile", result, path))),
      updateWithResponse: async (delivery_profile_id, params, options) => this.#runtime.request("updateDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAssignToUnconfiguredDeliveryProfileRequest } from '../models/AssignToUnconfiguredDeliveryProfileRequest.js';
export { makeCreateDeliveryProfileRequest } from '../models/CreateDeliveryProfileRequest.js';
export { makeDeliveryProfileConfigurationRequest } from '../models/DeliveryProfileConfigurationRequest.js';
export { makeDeliveryProfileOriginPolicyInputFixedLocation } from '../models/DeliveryProfileOriginPolicyInputFixedLocation.js';
export { makeDeliveryProfileOriginPolicyInputInventoryRouting } from '../models/DeliveryProfileOriginPolicyInputInventoryRouting.js';
export { makeDeliveryProfileOriginPolicyInputMethodOrigin } from '../models/DeliveryProfileOriginPolicyInputMethodOrigin.js';
export { makeDeliveryProfileOriginPolicyRequest } from '../models/DeliveryProfileOriginPolicyRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateDeliveryProfileRequest } from '../models/UpdateDeliveryProfileRequest.js';
