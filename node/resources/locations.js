import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/locations.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';

const _sdkDescriptors = new DescriptorSource(settings, {["createLocation"]:r0,["deleteLocation"]:r0,["getLocation"]:r0,["listLocations"]:r0,["publishLocationGeography"]:r0,["updateLocation"]:r0,["updateLocationInventory"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.locations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createLocation", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createLocation", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (location_id, params, options) => this.#runtime.request("deleteLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (location_id, params, options) => this.#runtime.request("deleteLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (location_id, params, options) => this.#runtime.request("getLocation", _sdkRequestInput([
  "location_id"
], [location_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (location_id, params, options) => this.#runtime.request("getLocation", _sdkRequestInput([
  "location_id"
], [location_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_status",
  "external_reference_id",
  "query"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_status",
  "external_reference_id",
  "query"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_status",
  "external_reference_id",
  "query"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_status",
  "external_reference_id",
  "query"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_status",
  "external_reference_id",
  "query"
], false, false, params), options),
      publishGeography: async (location_id, params, options) => this.#runtime.request("publishLocationGeography", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      publishGeographyWithResponse: async (location_id, params, options) => this.#runtime.request("publishLocationGeography", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateInventory: async (location_id, params, options) => this.#runtime.request("updateLocationInventory", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateInventoryWithResponse: async (location_id, params, options) => this.#runtime.request("updateLocationInventory", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeLocationResponse } from '../models/LocationResponse.js';
export { makeLocationListResponse } from '../models/LocationListResponse.js';
export { makeLocation } from '../models/Location.js';
export { makeLocationInventoryResponse } from '../models/LocationInventoryResponse.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeLocationAddress } from '../models/LocationAddress.js';
export { makeDeliveryAddressResource } from '../models/DeliveryAddressResource.js';
export { makeLocationCoordinate } from '../models/LocationCoordinate.js';
export { makeLocationInventory } from '../models/LocationInventory.js';
