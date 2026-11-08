import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryTransfers.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelInventoryTransfer"]:r0,["createInventoryTransfer"]:r0,["departInventoryTransfer"]:r0,["getInventoryTransfer"]:r0,["listInventoryTransfers"]:r0,["receiveInventoryTransfer"]:r0,["reportInventoryTransferLoss"]:r0,["returnInventoryTransferToOrigin"]:r0,["updateInventoryTransfer"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryTransfers = Object.freeze({
      cancel: async (inventory_transfer_id, params, options) => this.#runtime.request("cancelInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelInventoryTransfer", result, path))),
      create: async (params, options) => this.#runtime.request("createInventoryTransfer", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryTransfer", result, path))),
      depart: async (inventory_transfer_id, params, options) => this.#runtime.request("departInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("departInventoryTransfer", result, path))),
      get: async (inventory_transfer_id, params, options) => this.#runtime.request("getInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryTransfer", result, path))),
      list: async (params, options) => this.#runtime.request("listInventoryTransfers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "origin_location_id",
  "destination_location_id",
  "status",
  "idempotency_key",
  "external_reference_id",
  "query",
  "closed_reason",
  "created_after",
  "created_before",
  "departed_after",
  "departed_before",
  "received_after",
  "received_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryTransfers", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryTransfers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "origin_location_id",
  "destination_location_id",
  "status",
  "idempotency_key",
  "external_reference_id",
  "query",
  "closed_reason",
  "created_after",
  "created_before",
  "departed_after",
  "departed_before",
  "received_after",
  "received_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryTransfers", result, path)),
      listItems: (params, options) => this.#runtime.items("listInventoryTransfers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "origin_location_id",
  "destination_location_id",
  "status",
  "idempotency_key",
  "external_reference_id",
  "query",
  "closed_reason",
  "created_after",
  "created_before",
  "departed_after",
  "departed_before",
  "received_after",
  "received_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      receive: async (inventory_transfer_id, params, options) => this.#runtime.request("receiveInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("receiveInventoryTransfer", result, path))),
      reportLoss: async (inventory_transfer_id, params, options) => this.#runtime.request("reportInventoryTransferLoss", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reportInventoryTransferLoss", result, path))),
      returnToOrigin: async (inventory_transfer_id, params, options) => this.#runtime.request("returnInventoryTransferToOrigin", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("returnInventoryTransferToOrigin", result, path))),
      update: async (inventory_transfer_id, params, options) => this.#runtime.request("updateInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryTransfer", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCancelInventoryTransferRequest } from '../models/CancelInventoryTransferRequest.js';
export { makeCreateInventoryTransferRequest } from '../models/CreateInventoryTransferRequest.js';
export { makeDepartInventoryTransferRequest } from '../models/DepartInventoryTransferRequest.js';
export { makeInventoryProvenanceRequest } from '../models/InventoryProvenanceRequest.js';
export { makeInventorySourceSystemRequest } from '../models/InventorySourceSystemRequest.js';
export { makeInventoryTransferLineRequest } from '../models/InventoryTransferLineRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeReceiveInventoryTransferRequest } from '../models/ReceiveInventoryTransferRequest.js';
export { makeReportInventoryTransferLossRequest } from '../models/ReportInventoryTransferLossRequest.js';
export { makeReturnInventoryTransferToOriginRequest } from '../models/ReturnInventoryTransferToOriginRequest.js';
export { makeUpdateInventoryTransferRequest } from '../models/UpdateInventoryTransferRequest.js';
