import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/packages.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';

const _sdkDescriptors = new DescriptorSource(settings, {["createPackageItem"]:r0,["deletePackageItem"]:r0,["getPackage"]:r0,["getPackageItem"]:r0,["listPackageItems"]:r0,["listPackages"]:r0,["transitionPackage"]:r0,["updatePackage"]:r0,["updatePackageItem"]:r0,["voidPackage"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.packages = Object.freeze({
      createItem: async (package_id, params, options) => this.#runtime.request("createPackageItem", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPackageItem", result, path))),
      createItemWithResponse: async (package_id, params, options) => this.#runtime.request("createPackageItem", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      deleteItem: async (package_id, package_item_id, params, options) => this.#runtime.request("deletePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePackageItem", result, path))),
      deleteItemWithResponse: async (package_id, package_item_id, params, options) => this.#runtime.request("deletePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (package_id, params, options) => this.#runtime.request("getPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPackage", result, path))),
      getWithResponse: async (package_id, params, options) => this.#runtime.request("getPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getItem: async (package_id, package_item_id, params, options) => this.#runtime.request("getPackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPackageItem", result, path))),
      getItemWithResponse: async (package_id, package_item_id, params, options) => this.#runtime.request("getPackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPackageItems: async (package_id, params, options) => this.#runtime.request("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPackageItems", result, path))),
      listPackageItemsWithResponse: async (package_id, params, options) => this.#runtime.request("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPackageItemsPages: (package_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPackageItems", result, path)),
      listPackageItemsPagesWithResponse: (package_id, params, options) => _sdkResponsePages(this.#runtime.pages("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
], false, false, params), options)),
      listPackageItemsItems: (package_id, params, options) => this.#runtime.items("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
], false, false, params), options),
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
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPackages", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPackages", _sdkRequestInput([], [], [
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
  "expand"
], false, false, params), options).then(_sdkResponse),
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
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPackages", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPackages", _sdkRequestInput([], [], [
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
  "expand"
], false, false, params), options)),
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
  "expand"
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionPackage", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionPackage", result, path))),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionPackage", input, options).then(_sdkResponse),
      update: async (package_id, params, options) => this.#runtime.request("updatePackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePackage", result, path))),
      updateWithResponse: async (package_id, params, options) => this.#runtime.request("updatePackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateItem: async (package_id, package_item_id, params, options) => this.#runtime.request("updatePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePackageItem", result, path))),
      updateItemWithResponse: async (package_id, package_item_id, params, options) => this.#runtime.request("updatePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (package_id, params, options) => this.#runtime.request("voidPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidPackage", result, path))),
      voidResourceWithResponse: async (package_id, params, options) => this.#runtime.request("voidPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreatePackageItemRequest } from '../models/CreatePackageItemRequest.js';
export { makeDimensions } from '../models/Dimensions.js';
export { makeFulfillmentTransitionRequestMarkPacked } from '../models/FulfillmentTransitionRequestMarkPacked.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePackageTransitionRequest } from '../models/PackageTransitionRequest.js';
export { makePackageTransitionRequestMarkDelivered } from '../models/PackageTransitionRequestMarkDelivered.js';
export { makePackageTransitionRequestMarkDeliveryAttempted } from '../models/PackageTransitionRequestMarkDeliveryAttempted.js';
export { makePackageTransitionRequestMarkException } from '../models/PackageTransitionRequestMarkException.js';
export { makePackageTransitionRequestMarkInTransit } from '../models/PackageTransitionRequestMarkInTransit.js';
export { makePackageTransitionRequestMarkOutForDelivery } from '../models/PackageTransitionRequestMarkOutForDelivery.js';
export { makePackageTransitionRequestMarkPacked } from '../models/PackageTransitionRequestMarkPacked.js';
export { makePackageTransitionRequestMarkReturned } from '../models/PackageTransitionRequestMarkReturned.js';
export { makePackageTransitionRequestMarkShipped } from '../models/PackageTransitionRequestMarkShipped.js';
export { makeReturnResolutionLineItemRequest } from '../models/ReturnResolutionLineItemRequest.js';
export { makeUpdatePackageItemRequest } from '../models/UpdatePackageItemRequest.js';
export { makeUpdatePackageRequest } from '../models/UpdatePackageRequest.js';
export { makeVoidPackageRequest } from '../models/VoidPackageRequest.js';
export { makeWeight } from '../models/Weight.js';
