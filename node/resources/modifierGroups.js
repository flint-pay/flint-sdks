import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/modifierGroups.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';

const _sdkDescriptors = new DescriptorSource(settings, {["createModifierGroup"]:r0,["deleteModifierGroup"]:r0,["getModifierGroup"]:r0,["listModifierGroups"]:r0,["updateModifierGroup"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.modifierGroups = Object.freeze({
      create: async (params, options) => this.#runtime.request("createModifierGroup", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createModifierGroup", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(_sdkResponse),
      remove: async (modifier_group_id, params, options) => this.#runtime.request("deleteModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (modifier_group_id, params, options) => this.#runtime.request("deleteModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id"
], false, false, params), options).then(_sdkResponse),
      get: async (modifier_group_id, params, options) => this.#runtime.request("getModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (modifier_group_id, params, options) => this.#runtime.request("getModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query"
], false, false, params), options),
      update: async (modifier_group_id, params, options) => this.#runtime.request("updateModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (modifier_group_id, params, options) => this.#runtime.request("updateModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeModifierGroupResponse } from '../models/ModifierGroupResponse.js';
export { makeModifierGroupListResponse } from '../models/ModifierGroupListResponse.js';
export { makeModifierGroup } from '../models/ModifierGroup.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeModifier } from '../models/Modifier.js';
export { makeTextModifierConfig } from '../models/TextModifierConfig.js';
export { makeAvailableTextModifierConfig } from '../models/AvailableTextModifierConfig.js';
export { makePublicResolvedTextModifier } from '../models/PublicResolvedTextModifier.js';
