import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCardRedemptions.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelGiftCardRedemption"]:r0,["captureGiftCardRedemption"]:r0,["createGiftCardRedemption"]:r0,["getGiftCardRedemption"]:r0,["listGiftCardRedemptions"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCardRedemptions = Object.freeze({
      cancel: async (gift_card_redemption_id, params, options) => this.#runtime.request("cancelGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelGiftCardRedemption", result, path))),
      cancelWithResponse: async (gift_card_redemption_id, params, options) => this.#runtime.request("cancelGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      capture: async (gift_card_redemption_id, params, options) => this.#runtime.request("captureGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("captureGiftCardRedemption", result, path))),
      captureWithResponse: async (gift_card_redemption_id, params, options) => this.#runtime.request("captureGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createGiftCardRedemption", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardRedemption", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCardRedemption", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_redemption_id, params, options) => this.#runtime.request("getGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardRedemption", result, path))),
      getWithResponse: async (gift_card_redemption_id, params, options) => this.#runtime.request("getGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "sale_reference",
  "source_type",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardRedemptions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "sale_reference",
  "source_type",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "sale_reference",
  "source_type",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardRedemptions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "sale_reference",
  "source_type",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "sale_reference",
  "source_type",
  "status"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateGiftCardRedemptionRequest } from '../models/CreateGiftCardRedemptionRequest.js';
export { makeCreateGiftCardRedemptionRequestAutomatic } from '../models/CreateGiftCardRedemptionRequestAutomatic.js';
export { makeCreateGiftCardRedemptionRequestManual } from '../models/CreateGiftCardRedemptionRequestManual.js';
export { makeGiftCardVersionRequest } from '../models/GiftCardVersionRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
