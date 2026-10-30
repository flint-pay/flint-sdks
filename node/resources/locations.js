import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/locations.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createLocation"]:r0,["deleteLocation"]:r0,["getLocation"]:r0,["listLocations"]:r0,["updateLocation"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.locations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createLocation", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createLocation", result, path))),
      delete: async (location_id, params, options) => this.#runtime.request("deleteLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteLocation", result, path))),
      get: async (location_id, params, options) => this.#runtime.request("getLocation", _sdkRequestInput([
  "location_id"
], [location_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getLocation", result, path))),
      list: async (params, options) => this.#runtime.request("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_enabled",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listLocations", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_enabled",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listLocations", result, path)),
      listItems: (params, options) => this.#runtime.items("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_enabled",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateLocation", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddressRequest } from '../models/AddressRequest.js';
export { makeCreateLocationRequest } from '../models/CreateLocationRequest.js';
export { makeLocationCoordinateRequest } from '../models/LocationCoordinateRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateLocationRequest } from '../models/UpdateLocationRequest.js';
