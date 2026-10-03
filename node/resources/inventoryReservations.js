import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryReservations.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';

const _sdkDescriptors = new DescriptorSource(settings, {["commitInventoryReservation"]:r0,["consumeInventoryReservation"]:r0,["createInventoryReservation"]:r0,["listInventoryReservations"]:r0,["releaseInventoryReservation"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryReservations = Object.freeze({
      commit: async (inventory_reservation_id, params, options) => this.#runtime.request("commitInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      commitWithResponse: async (inventory_reservation_id, params, options) => this.#runtime.request("commitInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      consume: async (inventory_reservation_id, params, options) => this.#runtime.request("consumeInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      consumeWithResponse: async (inventory_reservation_id, params, options) => this.#runtime.request("consumeInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createInventoryReservation", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryReservation", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "owner_expires_after",
  "owner_expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "owner_expires_after",
  "owner_expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "owner_expires_after",
  "owner_expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "owner_expires_after",
  "owner_expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "owner_expires_after",
  "owner_expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      release: async (inventory_reservation_id, params, options) => this.#runtime.request("releaseInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      releaseWithResponse: async (inventory_reservation_id, params, options) => this.#runtime.request("releaseInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeInventoryReservationResultResponse } from '../models/InventoryReservationResultResponse.js';
export { makeInventoryReservationListResponse } from '../models/InventoryReservationListResponse.js';
export { makeInventoryReservation } from '../models/InventoryReservation.js';
export { makeInventoryReservationResult } from '../models/InventoryReservationResult.js';
export { makeInventoryLevel } from '../models/InventoryLevel.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeInventoryRoutingSource } from '../models/InventoryRoutingSource.js';
export { makeReservationLine } from '../models/ReservationLine.js';
export { makeInventoryReservationOwner } from '../models/InventoryReservationOwner.js';
