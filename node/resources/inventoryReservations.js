import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryReservations.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["createInventoryReservation"]:r0,["getInventoryReservation"]:r0,["listInventoryReservations"]:r0,["transitionInventoryReservation"]:r0,["updateInventoryReservation"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryReservations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryReservation", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryReservation", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryReservation", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (inventory_reservation_id, params, options) => this.#runtime.request("getInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryReservation", result, path))),
      getWithResponse: async (inventory_reservation_id, params, options) => this.#runtime.request("getInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "order_id",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "expires_after",
  "expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryReservations", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "order_id",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "expires_after",
  "expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "order_id",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "expires_after",
  "expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryReservations", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "order_id",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "expires_after",
  "expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "order_id",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "expires_after",
  "expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionInventoryReservation", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryReservation", result, path))),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionInventoryReservation", input, options).then(_sdkResponse),
      update: async (inventory_reservation_id, params, options) => this.#runtime.request("updateInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryReservation", result, path))),
      updateWithResponse: async (inventory_reservation_id, params, options) => this.#runtime.request("updateInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateInventoryReservationRequest } from '../models/CreateInventoryReservationRequest.js';
export { makeInventoryProvenanceRequest } from '../models/InventoryProvenanceRequest.js';
export { makeInventoryReservationOwnerRequest } from '../models/InventoryReservationOwnerRequest.js';
export { makeInventoryReservationTransitionRequest } from '../models/InventoryReservationTransitionRequest.js';
export { makeInventoryReservationTransitionRequestCommit } from '../models/InventoryReservationTransitionRequestCommit.js';
export { makeInventoryReservationTransitionRequestConsume } from '../models/InventoryReservationTransitionRequestConsume.js';
export { makeInventoryReservationTransitionRequestRelease } from '../models/InventoryReservationTransitionRequestRelease.js';
export { makeInventoryRoutingDemand } from '../models/InventoryRoutingDemand.js';
export { makeInventoryRoutingSourceInputFixedLocation } from '../models/InventoryRoutingSourceInputFixedLocation.js';
export { makeInventoryRoutingSourceInputPolicy } from '../models/InventoryRoutingSourceInputPolicy.js';
export { makeInventoryRoutingSourceInputPolicyRevision } from '../models/InventoryRoutingSourceInputPolicyRevision.js';
export { makeInventoryRoutingSourceRequest } from '../models/InventoryRoutingSourceRequest.js';
export { makeInventorySourceSystemRequest } from '../models/InventorySourceSystemRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateInventoryReservationRequest } from '../models/UpdateInventoryReservationRequest.js';
