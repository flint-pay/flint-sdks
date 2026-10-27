import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/modifierGroups.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["createModifierGroup"]:r0,["deleteModifierGroup"]:r0,["getModifierGroup"]:r0,["listModifierGroups"]:r0,["updateModifierGroup"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.modifierGroups = Object.freeze({
      create: async (params, options) => this.#runtime.request("createModifierGroup", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createModifierGroup", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createModifierGroup", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (modifier_group_id, params, options) => this.#runtime.request("deleteModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteModifierGroup", result, path))),
      removeWithResponse: async (modifier_group_id, params, options) => this.#runtime.request("deleteModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (modifier_group_id, params, options) => this.#runtime.request("getModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getModifierGroup", result, path))),
      getWithResponse: async (modifier_group_id, params, options) => this.#runtime.request("getModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listModifierGroups", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listModifierGroups", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options),
      update: async (modifier_group_id, params, options) => this.#runtime.request("updateModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateModifierGroup", result, path))),
      updateWithResponse: async (modifier_group_id, params, options) => this.#runtime.request("updateModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateInlineModifierGroupRequest } from '../models/CreateInlineModifierGroupRequest.js';
export { makeCreateModifierGroupRequest } from '../models/CreateModifierGroupRequest.js';
export { makeCreateModifierRequest } from '../models/CreateModifierRequest.js';
export { makeModifierRequest } from '../models/ModifierRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeTextModifierConfigPatchRequest } from '../models/TextModifierConfigPatchRequest.js';
export { makeTextModifierConfigRequest } from '../models/TextModifierConfigRequest.js';
export { makeUpdateModifierGroupRequest } from '../models/UpdateModifierGroupRequest.js';
