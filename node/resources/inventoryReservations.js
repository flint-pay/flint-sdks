import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryReservations.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createInventoryReservation"]:r0,["getInventoryReservation"]:r0,["listInventoryReservations"]:r0,["transitionInventoryReservation"]:r0,["updateInventoryReservation"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryReservations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryReservation", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryReservation", result, path))),
      get: async (inventory_reservation_id, params, options) => this.#runtime.request("getInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryReservation", result, path))),
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
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryReservations", result, path))),
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
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryReservations", result, path)),
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
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      transition: async (inventory_reservation_id, params, options) => this.#runtime.request("transitionInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryReservation", result, path))),
      update: async (inventory_reservation_id, params, options) => this.#runtime.request("updateInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryReservation", result, path))),
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
