import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/fulfillments.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';

const _sdkDescriptors = new DescriptorSource(settings, {["acceptFulfillment"]:r0,["cancelFulfillment"]:r0,["completeFulfillment"]:r0,["createFulfillmentEvent"]:r0,["createShipment"]:r0,["dispatchFulfillment"]:r0,["failFulfillment"]:r0,["getFulfillment"]:r0,["holdFulfillment"]:r0,["listFulfillments"]:r0,["markFulfillmentNoShow"]:r0,["markFulfillmentPacked"]:r0,["markFulfillmentPicked"]:r0,["markFulfillmentPreparing"]:r0,["markFulfillmentReady"]:r0,["releaseFulfillmentHold"]:r0,["scheduleFulfillment"]:r0,["startFulfillment"]:r0,["updateFulfillment"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.fulfillments = Object.freeze({
      accept: async (fulfillment_id, params, options) => this.#runtime.request("acceptFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("acceptFulfillment", result, path))),
      cancel: async (fulfillment_id, params, options) => this.#runtime.request("cancelFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelFulfillment", result, path))),
      complete: async (fulfillment_id, params, options) => this.#runtime.request("completeFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("completeFulfillment", result, path))),
      createEvent: async (fulfillment_id, params, options) => this.#runtime.request("createFulfillmentEvent", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFulfillmentEvent", result, path))),
      createShipment: async (fulfillment_id, params, options) => this.#runtime.request("createShipment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createShipment", result, path))),
      dispatch: async (fulfillment_id, params, options) => this.#runtime.request("dispatchFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("dispatchFulfillment", result, path))),
      fail: async (fulfillment_id, params, options) => this.#runtime.request("failFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("failFulfillment", result, path))),
      get: async (fulfillment_id, params, options) => this.#runtime.request("getFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFulfillment", result, path))),
      hold: async (fulfillment_id, params, options) => this.#runtime.request("holdFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("holdFulfillment", result, path))),
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
  "sort_direction",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "sort_direction",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "sort_direction",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      markNoShow: async (fulfillment_id, params, options) => this.#runtime.request("markFulfillmentNoShow", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markFulfillmentNoShow", result, path))),
      markPacked: async (fulfillment_id, params, options) => this.#runtime.request("markFulfillmentPacked", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markFulfillmentPacked", result, path))),
      markPicked: async (fulfillment_id, params, options) => this.#runtime.request("markFulfillmentPicked", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markFulfillmentPicked", result, path))),
      markPreparing: async (fulfillment_id, params, options) => this.#runtime.request("markFulfillmentPreparing", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markFulfillmentPreparing", result, path))),
      markReady: async (fulfillment_id, params, options) => this.#runtime.request("markFulfillmentReady", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markFulfillmentReady", result, path))),
      releaseHold: async (fulfillment_id, params, options) => this.#runtime.request("releaseFulfillmentHold", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("releaseFulfillmentHold", result, path))),
      schedule: async (fulfillment_id, params, options) => this.#runtime.request("scheduleFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("scheduleFulfillment", result, path))),
      start: async (fulfillment_id, params, options) => this.#runtime.request("startFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("startFulfillment", result, path))),
      update: async (fulfillment_id, params, options) => this.#runtime.request("updateFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
export { makeAcceptFulfillmentRequest } from '../models/AcceptFulfillmentRequest.js';
export { makeAddressRequest } from '../models/AddressRequest.js';
export { makeCancelFulfillmentRequest } from '../models/CancelFulfillmentRequest.js';
export { makeCompleteFulfillmentRequest } from '../models/CompleteFulfillmentRequest.js';
export { makeCreateFulfillmentEventRequest } from '../models/CreateFulfillmentEventRequest.js';
export { makeCreatePackageItemRequest } from '../models/CreatePackageItemRequest.js';
export { makeCreateShipmentRequest } from '../models/CreateShipmentRequest.js';
export { makeCreateShipmentRequestOutbound } from '../models/CreateShipmentRequestOutbound.js';
export { makeCreateShipmentRequestReturn } from '../models/CreateShipmentRequestReturn.js';
export { makeDimensionsRequest } from '../models/DimensionsRequest.js';
export { makeDispatchFulfillmentRequest } from '../models/DispatchFulfillmentRequest.js';
export { makeFailFulfillmentRequest } from '../models/FailFulfillmentRequest.js';
export { makeFulfillmentRecipientRequest } from '../models/FulfillmentRecipientRequest.js';
export { makeHoldFulfillmentRequest } from '../models/HoldFulfillmentRequest.js';
export { makeMarkFulfillmentNoShowRequest } from '../models/MarkFulfillmentNoShowRequest.js';
export { makeMarkFulfillmentPackedRequest } from '../models/MarkFulfillmentPackedRequest.js';
export { makeMarkFulfillmentPickedRequest } from '../models/MarkFulfillmentPickedRequest.js';
export { makeMarkFulfillmentPreparingRequest } from '../models/MarkFulfillmentPreparingRequest.js';
export { makeMarkFulfillmentReadyRequest } from '../models/MarkFulfillmentReadyRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePackageCreateInputCreated } from '../models/PackageCreateInputCreated.js';
export { makePackageCreateInputShipped } from '../models/PackageCreateInputShipped.js';
export { makePackageCreateRequest } from '../models/PackageCreateRequest.js';
export { makeReleaseFulfillmentHoldRequest } from '../models/ReleaseFulfillmentHoldRequest.js';
export { makeReturnResolutionLineItemRequest } from '../models/ReturnResolutionLineItemRequest.js';
export { makeReturnShipmentLineItemAllocationRequest } from '../models/ReturnShipmentLineItemAllocationRequest.js';
export { makeScheduleFulfillmentRequest } from '../models/ScheduleFulfillmentRequest.js';
export { makeStartFulfillmentRequest } from '../models/StartFulfillmentRequest.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateDeliveryFulfillmentDetails } from '../models/UpdateDeliveryFulfillmentDetails.js';
export { makeUpdateDigitalFulfillmentDetails } from '../models/UpdateDigitalFulfillmentDetails.js';
export { makeUpdateFulfillmentRequest } from '../models/UpdateFulfillmentRequest.js';
export { makeUpdatePickupFulfillmentDetails } from '../models/UpdatePickupFulfillmentDetails.js';
export { makeUpdateServiceFulfillmentDetails } from '../models/UpdateServiceFulfillmentDetails.js';
export { makeWeightRequest } from '../models/WeightRequest.js';
