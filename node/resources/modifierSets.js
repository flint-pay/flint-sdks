import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/modifierSets.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["createModifierSet"]:r0,["deleteModifierSet"]:r0,["getModifierSet"]:r0,["listModifierSets"]:r0,["updateModifierSet"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.modifierSets = Object.freeze({
      create: async (params, options) => this.#runtime.request("createModifierSet", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createModifierSet", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createModifierSet", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (modifier_set_id, params, options) => this.#runtime.request("deleteModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteModifierSet", result, path))),
      removeWithResponse: async (modifier_set_id, params, options) => this.#runtime.request("deleteModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (modifier_set_id, params, options) => this.#runtime.request("getModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getModifierSet", result, path))),
      getWithResponse: async (modifier_set_id, params, options) => this.#runtime.request("getModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listModifierSets", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listModifierSets", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options),
      update: async (modifier_set_id, params, options) => this.#runtime.request("updateModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateModifierSet", result, path))),
      updateWithResponse: async (modifier_set_id, params, options) => this.#runtime.request("updateModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateInlineModifierGroupRequest } from '../models/CreateInlineModifierGroupRequest.js';
export { makeCreateModifierRequest } from '../models/CreateModifierRequest.js';
export { makeCreateModifierSetGroupInputExisting } from '../models/CreateModifierSetGroupInputExisting.js';
export { makeCreateModifierSetGroupInputInline } from '../models/CreateModifierSetGroupInputInline.js';
export { makeCreateModifierSetGroupRequest } from '../models/CreateModifierSetGroupRequest.js';
export { makeCreateModifierSetRequest } from '../models/CreateModifierSetRequest.js';
export { makeInlineModifierGroupRequest } from '../models/InlineModifierGroupRequest.js';
export { makeModifierOverride } from '../models/ModifierOverride.js';
export { makeModifierRequest } from '../models/ModifierRequest.js';
export { makeModifierSetGroupInputExisting } from '../models/ModifierSetGroupInputExisting.js';
export { makeModifierSetGroupInputInline } from '../models/ModifierSetGroupInputInline.js';
export { makeModifierSetGroupRequest } from '../models/ModifierSetGroupRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeTextModifierConfigRequest } from '../models/TextModifierConfigRequest.js';
export { makeUpdateModifierSetRequest } from '../models/UpdateModifierSetRequest.js';
