import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/packages.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';

const _sdkDescriptors = new DescriptorSource(settings, {["createPackageItem"]:r0,["deletePackageItem"]:r0,["getPackage"]:r0,["getPackageItem"]:r0,["listPackageItems"]:r0,["listPackages"]:r0,["transitionPackage"]:r0,["updatePackage"]:r0,["updatePackageItem"]:r0,["voidPackage"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.packages = Object.freeze({
      createItem: async (package_id, params, options) => this.#runtime.request("createPackageItem", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createItemWithResponse: async (package_id, params, options) => this.#runtime.request("createPackageItem", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      deleteItem: async (package_id, package_item_id, params, options) => this.#runtime.request("deletePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteItemWithResponse: async (package_id, package_item_id, params, options) => this.#runtime.request("deletePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (package_id, params, options) => this.#runtime.request("getPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (package_id, params, options) => this.#runtime.request("getPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getItem: async (package_id, package_item_id, params, options) => this.#runtime.request("getPackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getItemWithResponse: async (package_id, package_item_id, params, options) => this.#runtime.request("getPackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPackageItems: async (package_id, params, options) => this.#runtime.request("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPackageItemsWithResponse: async (package_id, params, options) => this.#runtime.request("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPackageItemsPages: (package_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPackageItemsPagesWithResponse: (package_id, params, options) => _sdkResponsePages(this.#runtime.pages("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listPackageItemsItems: (package_id, params, options) => this.#runtime.items("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
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
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
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
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
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
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionPackage", input, options).then(result => _sdkPayload(result, ["data"])),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionPackage", input, options).then(_sdkResponse),
      update: async (package_id, params, options) => this.#runtime.request("updatePackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (package_id, params, options) => this.#runtime.request("updatePackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateItem: async (package_id, package_item_id, params, options) => this.#runtime.request("updatePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateItemWithResponse: async (package_id, package_item_id, params, options) => this.#runtime.request("updatePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (package_id, params, options) => this.#runtime.request("voidPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      voidResourceWithResponse: async (package_id, params, options) => this.#runtime.request("voidPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makePackageItemResponse } from '../models/PackageItemResponse.js';
export { makePackageResponse } from '../models/PackageResponse.js';
export { makePackageItemListResponse } from '../models/PackageItemListResponse.js';
export { makePackageItem } from '../models/PackageItem.js';
export { makePackageListResponse } from '../models/PackageListResponse.js';
export { makePackage } from '../models/Package.js';
export { makePackageStatusUpdateResponse } from '../models/PackageStatusUpdateResponse.js';
export { makeUpdatePackageResponse } from '../models/UpdatePackageResponse.js';
export { makeVoidPackageResponse } from '../models/VoidPackageResponse.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makePricingAmounts } from '../models/PricingAmounts.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeSettlementAmounts } from '../models/SettlementAmounts.js';
export { makeSignedMoney } from '../models/SignedMoney.js';
export { makeShippingDimensions } from '../models/ShippingDimensions.js';
export { makeReturnShipmentLineItemAllocation } from '../models/ReturnShipmentLineItemAllocation.js';
export { makeShippingWeight } from '../models/ShippingWeight.js';
export { makePackageStatusUpdateResult } from '../models/PackageStatusUpdateResult.js';
export { makeFulfillmentEvent } from '../models/FulfillmentEvent.js';
export { makeFulfillmentNotification } from '../models/FulfillmentNotification.js';
export { makePackageStatusUpdate } from '../models/PackageStatusUpdate.js';
export { makeUpdatePackageResult } from '../models/UpdatePackageResult.js';
export { makeVoidPackageResult } from '../models/VoidPackageResult.js';
