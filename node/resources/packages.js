import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/packages.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';

const _sdkDescriptors = new DescriptorSource(settings, {["createPackage"]:r0,["createPackageItem"]:r0,["deletePackageItem"]:r0,["getPackage"]:r0,["getPackageItem"]:r0,["listPackageItems"]:r0,["listPackages"]:r0,["markPackageDelivered"]:r0,["markPackageDeliveryAttempted"]:r0,["markPackageException"]:r0,["markPackageInTransit"]:r0,["markPackageOutForDelivery"]:r0,["markPackagePacked"]:r0,["markPackageReturned"]:r0,["markPackageShipped"]:r0,["updatePackage"]:r0,["updatePackageItem"]:r0,["voidPackage"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.packages = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPackage", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPackage", result, path))),
      createItem: async (package_id, params, options) => this.#runtime.request("createPackageItem", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPackageItem", result, path))),
      deleteItem: async (package_id, package_item_id, params, options) => this.#runtime.request("deletePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePackageItem", result, path))),
      get: async (package_id, params, options) => this.#runtime.request("getPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPackage", result, path))),
      getItem: async (package_id, package_item_id, params, options) => this.#runtime.request("getPackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPackageItem", result, path))),
      listPackageItems: async (package_id, params, options) => this.#runtime.request("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPackageItems", result, path))),
      listPackageItemsPages: (package_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPackageItems", result, path)),
      listPackageItemsItems: (package_id, params, options) => this.#runtime.items("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "created_after",
  "created_before",
  "status",
  "tracking_number",
  "carrier",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPackages", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "created_after",
  "created_before",
  "status",
  "tracking_number",
  "carrier",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPackages", result, path)),
      listItems: (params, options) => this.#runtime.items("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "created_after",
  "created_before",
  "status",
  "tracking_number",
  "carrier",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      markDelivered: async (package_id, params, options) => this.#runtime.request("markPackageDelivered", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageDelivered", result, path))),
      markDeliveryAttempted: async (package_id, params, options) => this.#runtime.request("markPackageDeliveryAttempted", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageDeliveryAttempted", result, path))),
      markException: async (package_id, params, options) => this.#runtime.request("markPackageException", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageException", result, path))),
      markInTransit: async (package_id, params, options) => this.#runtime.request("markPackageInTransit", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageInTransit", result, path))),
      markOutForDelivery: async (package_id, params, options) => this.#runtime.request("markPackageOutForDelivery", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageOutForDelivery", result, path))),
      markPacked: async (package_id, params, options) => this.#runtime.request("markPackagePacked", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackagePacked", result, path))),
      markReturned: async (package_id, params, options) => this.#runtime.request("markPackageReturned", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageReturned", result, path))),
      markShipped: async (package_id, params, options) => this.#runtime.request("markPackageShipped", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageShipped", result, path))),
      update: async (package_id, params, options) => this.#runtime.request("updatePackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePackage", result, path))),
      updateItem: async (package_id, package_item_id, params, options) => this.#runtime.request("updatePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePackageItem", result, path))),
      void: async (package_id, params, options) => this.#runtime.request("voidPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidPackage", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreatePackageItemRequest } from '../models/CreatePackageItemRequest.js';
export { makeCreatePackageRequest } from '../models/CreatePackageRequest.js';
export { makeCreatePackageRequestCreated } from '../models/CreatePackageRequestCreated.js';
export { makeCreatePackageRequestShipped } from '../models/CreatePackageRequestShipped.js';
export { makeDimensionsRequest } from '../models/DimensionsRequest.js';
export { makeMarkPackageDeliveredRequest } from '../models/MarkPackageDeliveredRequest.js';
export { makeMarkPackageDeliveryAttemptedRequest } from '../models/MarkPackageDeliveryAttemptedRequest.js';
export { makeMarkPackageExceptionRequest } from '../models/MarkPackageExceptionRequest.js';
export { makeMarkPackageInTransitRequest } from '../models/MarkPackageInTransitRequest.js';
export { makeMarkPackageOutForDeliveryRequest } from '../models/MarkPackageOutForDeliveryRequest.js';
export { makeMarkPackagePackedRequest } from '../models/MarkPackagePackedRequest.js';
export { makeMarkPackageReturnedRequest } from '../models/MarkPackageReturnedRequest.js';
export { makeMarkPackageShippedRequest } from '../models/MarkPackageShippedRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeReturnResolutionLineItemRequest } from '../models/ReturnResolutionLineItemRequest.js';
export { makeReturnShipmentLineItemAllocationRequest } from '../models/ReturnShipmentLineItemAllocationRequest.js';
export { makeUpdatePackageItemRequest } from '../models/UpdatePackageItemRequest.js';
export { makeUpdatePackageRequest } from '../models/UpdatePackageRequest.js';
export { makeVoidPackageRequest } from '../models/VoidPackageRequest.js';
export { makeWeightRequest } from '../models/WeightRequest.js';
