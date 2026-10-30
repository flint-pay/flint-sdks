import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryMovements.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["getInventoryMovement"]:r0,["listInventoryMovements"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryMovements = Object.freeze({
      get: async (inventory_movement_id, params, options) => this.#runtime.request("getInventoryMovement", _sdkRequestInput([
  "inventory_movement_id"
], [inventory_movement_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryMovement", result, path))),
      list: async (params, options) => this.#runtime.request("listInventoryMovements", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "type",
  "reason",
  "idempotency_key",
  "return_id",
  "return_disposition_id",
  "sort_direction",
  "expand",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "source_reference_type",
  "source_reference_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryMovements", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryMovements", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "type",
  "reason",
  "idempotency_key",
  "return_id",
  "return_disposition_id",
  "sort_direction",
  "expand",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "source_reference_type",
  "source_reference_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryMovements", result, path)),
      listItems: (params, options) => this.#runtime.items("listInventoryMovements", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "type",
  "reason",
  "idempotency_key",
  "return_id",
  "return_disposition_id",
  "sort_direction",
  "expand",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "source_reference_type",
  "source_reference_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
