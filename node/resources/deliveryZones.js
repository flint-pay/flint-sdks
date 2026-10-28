import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryZones.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';

const _sdkDescriptors = new DescriptorSource(settings, {["createDeliveryZone"]:r0,["deleteDeliveryZone"]:r0,["getDeliveryZone"]:r0,["listDeliveryZones"]:r0,["updateDeliveryZone"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryZones = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryZone", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryZone", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryZone", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_zone_id, params, options) => this.#runtime.request("deleteDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryZone", result, path))),
      removeWithResponse: async (delivery_zone_id, params, options) => this.#runtime.request("deleteDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_zone_id, params, options) => this.#runtime.request("getDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryZone", result, path))),
      getWithResponse: async (delivery_zone_id, params, options) => this.#runtime.request("getDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryZones", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryZones", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options),
      update: async (delivery_zone_id, params, options) => this.#runtime.request("updateDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryZone", result, path))),
      updateWithResponse: async (delivery_zone_id, params, options) => this.#runtime.request("updateDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateDeliveryZoneRequest } from '../models/CreateDeliveryZoneRequest.js';
export { makeDeliveryCountryCondition } from '../models/DeliveryCountryCondition.js';
export { makeDeliveryDistance } from '../models/DeliveryDistance.js';
export { makeDeliveryPostalCodeCondition } from '../models/DeliveryPostalCodeCondition.js';
export { makeDeliveryPostalCodeValue } from '../models/DeliveryPostalCodeValue.js';
export { makeDeliveryRadiusCondition } from '../models/DeliveryRadiusCondition.js';
export { makeDeliveryRadiusOrigin } from '../models/DeliveryRadiusOrigin.js';
export { makeDeliveryStateCondition } from '../models/DeliveryStateCondition.js';
export { makeDeliveryZoneConfiguration } from '../models/DeliveryZoneConfiguration.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateDeliveryZoneRequest } from '../models/UpdateDeliveryZoneRequest.js';
