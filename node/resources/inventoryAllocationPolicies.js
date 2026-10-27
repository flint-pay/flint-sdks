import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryAllocationPolicies.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["createInventoryAllocationPolicy"]:r0,["deleteInventoryAllocationPolicy"]:r0,["getInventoryAllocationPolicy"]:r0,["getInventoryAllocationPolicyRevision"]:r0,["listInventoryAllocationPolicies"]:r0,["listInventoryAllocationPolicyRevisions"]:r0,["updateInventoryAllocationPolicy"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryAllocationPolicies = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryAllocationPolicy", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryAllocationPolicy", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryAllocationPolicy", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("deleteInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInventoryAllocationPolicy", result, path))),
      removeWithResponse: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("deleteInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("getInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryAllocationPolicy", result, path))),
      getWithResponse: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("getInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [], false, false, params), options).then(_sdkResponse),
      getRevision: async (inventory_allocation_policy_id, inventory_allocation_policy_revision_id, params, options) => this.#runtime.request("getInventoryAllocationPolicyRevision", _sdkRequestInput([
  "inventory_allocation_policy_id",
  "inventory_allocation_policy_revision_id"
], [inventory_allocation_policy_id, inventory_allocation_policy_revision_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryAllocationPolicyRevision", result, path))),
      getRevisionWithResponse: async (inventory_allocation_policy_id, inventory_allocation_policy_revision_id, params, options) => this.#runtime.request("getInventoryAllocationPolicyRevision", _sdkRequestInput([
  "inventory_allocation_policy_id",
  "inventory_allocation_policy_revision_id"
], [inventory_allocation_policy_id, inventory_allocation_policy_revision_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicies", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicies", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options),
      listRevisions: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicyRevisions", result, path))),
      listRevisionsWithResponse: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params), options).then(_sdkResponse),
      listRevisionsPages: (inventory_allocation_policy_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicyRevisions", result, path)),
      listRevisionsPagesWithResponse: (inventory_allocation_policy_id, params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params), options)),
      listRevisionsItems: (inventory_allocation_policy_id, params, options) => this.#runtime.items("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params), options),
      update: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("updateInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryAllocationPolicy", result, path))),
      updateWithResponse: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("updateInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateInventoryAllocationPolicyRequest } from '../models/CreateInventoryAllocationPolicyRequest.js';
export { makeInventoryAllocationConfigurationValue } from '../models/InventoryAllocationConfigurationValue.js';
export { makeInventoryAllocationPolicyLocation } from '../models/InventoryAllocationPolicyLocation.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateInventoryAllocationPolicyRequest } from '../models/UpdateInventoryAllocationPolicyRequest.js';
