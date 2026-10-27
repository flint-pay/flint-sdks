import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/promotions.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["createPromotion"]:r0,["createPromotionCode"]:r0,["deletePromotion"]:r0,["deletePromotionCode"]:r0,["getPromotion"]:r0,["getPromotionCode"]:r0,["listPromotionCodes"]:r0,["listPromotions"]:r0,["updatePromotion"]:r0,["updatePromotionCode"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.promotions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPromotion", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPromotion", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createPromotion", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createCode: async (promotion_id, params, options) => this.#runtime.request("createPromotionCode", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPromotionCode", result, path))),
      createCodeWithResponse: async (promotion_id, params, options) => this.#runtime.request("createPromotionCode", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (promotion_id, params, options) => this.#runtime.request("deletePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePromotion", result, path))),
      removeWithResponse: async (promotion_id, params, options) => this.#runtime.request("deletePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      deleteCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("deletePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePromotionCode", result, path))),
      deleteCodeWithResponse: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("deletePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (promotion_id, params, options) => this.#runtime.request("getPromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPromotion", result, path))),
      getWithResponse: async (promotion_id, params, options) => this.#runtime.request("getPromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [], false, false, params), options).then(_sdkResponse),
      getCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("getPromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPromotionCode", result, path))),
      getCodeWithResponse: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("getPromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [], false, false, params), options).then(_sdkResponse),
      listCodes: async (params, options) => this.#runtime.request("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "availability",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPromotionCodes", result, path))),
      listCodesWithResponse: async (params, options) => this.#runtime.request("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "availability",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listCodesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "availability",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPromotionCodes", result, path)),
      listCodesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "availability",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options)),
      listCodesItems: (params, options) => this.#runtime.items("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "availability",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "availability",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPromotions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "availability",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "availability",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPromotions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "availability",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "availability",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options),
      update: async (promotion_id, params, options) => this.#runtime.request("updatePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePromotion", result, path))),
      updateWithResponse: async (promotion_id, params, options) => this.#runtime.request("updatePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("updatePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePromotionCode", result, path))),
      updateCodeWithResponse: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("updatePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreatePromotionCodeRequest } from '../models/CreatePromotionCodeRequest.js';
export { makeCreatePromotionRequest } from '../models/CreatePromotionRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePromotionAmountOffMethodRequest } from '../models/PromotionAmountOffMethodRequest.js';
export { makePromotionApplicationMethodPatch } from '../models/PromotionApplicationMethodPatch.js';
export { makePromotionApplicationMethodRequest } from '../models/PromotionApplicationMethodRequest.js';
export { makePromotionBuyXGetYMethodRequest } from '../models/PromotionBuyXGetYMethodRequest.js';
export { makePromotionCombinesWithPatch } from '../models/PromotionCombinesWithPatch.js';
export { makePromotionCombinesWithRequest } from '../models/PromotionCombinesWithRequest.js';
export { makePromotionExclusivityPatch } from '../models/PromotionExclusivityPatch.js';
export { makePromotionExclusivityRequest } from '../models/PromotionExclusivityRequest.js';
export { makePromotionPercentOffMethodRequest } from '../models/PromotionPercentOffMethodRequest.js';
export { makePromotionRecurrence } from '../models/PromotionRecurrence.js';
export { makePromotionRecurrenceForever } from '../models/PromotionRecurrenceForever.js';
export { makePromotionRecurrenceOnce } from '../models/PromotionRecurrenceOnce.js';
export { makePromotionRecurrenceRepeating } from '../models/PromotionRecurrenceRepeating.js';
export { makePromotionRuleGroupRequest } from '../models/PromotionRuleGroupRequest.js';
export { makePromotionRuleRequest } from '../models/PromotionRuleRequest.js';
export { makePromotionRuleValueRequest } from '../models/PromotionRuleValueRequest.js';
export { makePromotionSchedule } from '../models/PromotionSchedule.js';
export { makePromotionSchedulePatch } from '../models/PromotionSchedulePatch.js';
export { makeUpdatePromotionCodeRequest } from '../models/UpdatePromotionCodeRequest.js';
export { makeUpdatePromotionRequest } from '../models/UpdatePromotionRequest.js';
