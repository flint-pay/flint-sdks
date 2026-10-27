import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/shipments.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["createPackage"]:r0,["getShipment"]:r0,["listShipments"]:r0,["updateShipment"]:r0,["voidShipment"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.shipments = Object.freeze({
      createPackage: async (shipment_id, params, options) => this.#runtime.request("createPackage", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPackage", result, path))),
      createPackageWithResponse: async (shipment_id, params, options) => this.#runtime.request("createPackage", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (shipment_id, params, options) => this.#runtime.request("getShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getShipment", result, path))),
      getWithResponse: async (shipment_id, params, options) => this.#runtime.request("getShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listShipments", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listShipments", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options),
      update: async (shipment_id, params, options) => this.#runtime.request("updateShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateShipment", result, path))),
      updateWithResponse: async (shipment_id, params, options) => this.#runtime.request("updateShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (shipment_id, params, options) => this.#runtime.request("voidShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidShipment", result, path))),
      voidResourceWithResponse: async (shipment_id, params, options) => this.#runtime.request("voidShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreatePackageItemRequest } from '../models/CreatePackageItemRequest.js';
export { makeDimensions } from '../models/Dimensions.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePackageCreateInputCreated } from '../models/PackageCreateInputCreated.js';
export { makePackageCreateInputShipped } from '../models/PackageCreateInputShipped.js';
export { makePackageCreateRequest } from '../models/PackageCreateRequest.js';
export { makeReturnResolutionLineItemRequest } from '../models/ReturnResolutionLineItemRequest.js';
export { makeReturnShipmentLineItemAllocation } from '../models/ReturnShipmentLineItemAllocation.js';
export { makeUpdateShipmentRequest } from '../models/UpdateShipmentRequest.js';
export { makeVoidPackageRequest } from '../models/VoidPackageRequest.js';
export { makeVoidShipmentRequest } from '../models/VoidShipmentRequest.js';
export { makeWeight } from '../models/Weight.js';
