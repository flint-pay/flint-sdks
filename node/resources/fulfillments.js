import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/fulfillments.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createFulfillmentEvent"]:r0,["createShipment"]:r0,["getFulfillment"]:r0,["listFulfillments"]:r0,["transitionFulfillment"]:r0,["updateFulfillment"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.fulfillments = Object.freeze({
      createEvent: async (fulfillment_id, params, options) => this.#runtime.request("createFulfillmentEvent", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFulfillmentEvent", result, path))),
      createShipment: async (fulfillment_id, params, options) => this.#runtime.request("createShipment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createShipment", result, path))),
      get: async (fulfillment_id, params, options) => this.#runtime.request("getFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFulfillment", result, path))),
      list: async (params, options) => this.#runtime.request("listFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "expand",
  "order_id",
  "customer_id",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFulfillments", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "expand",
  "order_id",
  "customer_id",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listFulfillments", result, path)),
      listItems: (params, options) => this.#runtime.items("listFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "expand",
  "order_id",
  "customer_id",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      transition: async (fulfillment_id, params, options) => this.#runtime.request("transitionFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionFulfillment", result, path))),
      update: async (fulfillment_id, params, options) => this.#runtime.request("updateFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateFulfillment", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddressRequest } from '../models/AddressRequest.js';
export { makeCreateFulfillmentEventRequest } from '../models/CreateFulfillmentEventRequest.js';
export { makeCreatePackageItemRequest } from '../models/CreatePackageItemRequest.js';
export { makeCreateShipmentRequest } from '../models/CreateShipmentRequest.js';
export { makeCreateShipmentRequestOutbound } from '../models/CreateShipmentRequestOutbound.js';
export { makeCreateShipmentRequestReturn } from '../models/CreateShipmentRequestReturn.js';
export { makeDimensions } from '../models/Dimensions.js';
export { makeFulfillmentRecipientRequest } from '../models/FulfillmentRecipientRequest.js';
export { makeFulfillmentTransitionRequest } from '../models/FulfillmentTransitionRequest.js';
export { makeFulfillmentTransitionRequestAccept } from '../models/FulfillmentTransitionRequestAccept.js';
export { makeFulfillmentTransitionRequestCancel } from '../models/FulfillmentTransitionRequestCancel.js';
export { makeFulfillmentTransitionRequestComplete } from '../models/FulfillmentTransitionRequestComplete.js';
export { makeFulfillmentTransitionRequestDispatch } from '../models/FulfillmentTransitionRequestDispatch.js';
export { makeFulfillmentTransitionRequestFail } from '../models/FulfillmentTransitionRequestFail.js';
export { makeFulfillmentTransitionRequestHold } from '../models/FulfillmentTransitionRequestHold.js';
export { makeFulfillmentTransitionRequestMarkNoShow } from '../models/FulfillmentTransitionRequestMarkNoShow.js';
export { makeFulfillmentTransitionRequestMarkPacked } from '../models/FulfillmentTransitionRequestMarkPacked.js';
export { makeFulfillmentTransitionRequestMarkPicked } from '../models/FulfillmentTransitionRequestMarkPicked.js';
export { makeFulfillmentTransitionRequestMarkPreparing } from '../models/FulfillmentTransitionRequestMarkPreparing.js';
export { makeFulfillmentTransitionRequestMarkReady } from '../models/FulfillmentTransitionRequestMarkReady.js';
export { makeFulfillmentTransitionRequestReleaseHold } from '../models/FulfillmentTransitionRequestReleaseHold.js';
export { makeFulfillmentTransitionRequestSchedule } from '../models/FulfillmentTransitionRequestSchedule.js';
export { makeFulfillmentTransitionRequestStart } from '../models/FulfillmentTransitionRequestStart.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePackageCreateInputCreated } from '../models/PackageCreateInputCreated.js';
export { makePackageCreateInputShipped } from '../models/PackageCreateInputShipped.js';
export { makePackageCreateRequest } from '../models/PackageCreateRequest.js';
export { makeReturnResolutionLineItemRequest } from '../models/ReturnResolutionLineItemRequest.js';
export { makeReturnShipmentLineItemAllocationRequest } from '../models/ReturnShipmentLineItemAllocationRequest.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateDeliveryFulfillmentDetails } from '../models/UpdateDeliveryFulfillmentDetails.js';
export { makeUpdateDigitalFulfillmentDetails } from '../models/UpdateDigitalFulfillmentDetails.js';
export { makeUpdateFulfillmentRequest } from '../models/UpdateFulfillmentRequest.js';
export { makeUpdatePickupFulfillmentDetails } from '../models/UpdatePickupFulfillmentDetails.js';
export { makeUpdateServiceFulfillmentDetails } from '../models/UpdateServiceFulfillmentDetails.js';
export { makeWeight } from '../models/Weight.js';
