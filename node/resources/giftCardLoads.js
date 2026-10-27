import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCardLoads.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["createGiftCardLoad"]:r0,["getGiftCardLoad"]:r0,["listGiftCardLoads"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCardLoads = Object.freeze({
      create: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardLoad", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardLoad", result, path))),
      createWithResponse: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardLoad", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_load_id, params, options) => this.#runtime.request("getGiftCardLoad", _sdkRequestInput([
  "gift_card_load_id"
], [gift_card_load_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardLoad", result, path))),
      getWithResponse: async (gift_card_load_id, params, options) => this.#runtime.request("getGiftCardLoad", _sdkRequestInput([
  "gift_card_load_id"
], [gift_card_load_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCardLoads", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "funding_source_type",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_external_reference_id"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardLoads", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardLoads", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "funding_source_type",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_external_reference_id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardLoads", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "funding_source_type",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_external_reference_id"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardLoads", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardLoads", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "funding_source_type",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_external_reference_id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCardLoads", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "funding_source_type",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_external_reference_id"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateGiftCardLoadRequest } from '../models/CreateGiftCardLoadRequest.js';
export { makeGiftCardFundingSource } from '../models/GiftCardFundingSource.js';
export { makeGiftCardFundingSourceAdjustment } from '../models/GiftCardFundingSourceAdjustment.js';
export { makeGiftCardFundingSourceExternalPayment } from '../models/GiftCardFundingSourceExternalPayment.js';
export { makeGiftCardFundingSourceFlintManualPayment } from '../models/GiftCardFundingSourceFlintManualPayment.js';
export { makeGiftCardFundingSourceFlintPayment } from '../models/GiftCardFundingSourceFlintPayment.js';
export { makeGiftCardFundingSourceGiftCardPurchaseRefundRecovery } from '../models/GiftCardFundingSourceGiftCardPurchaseRefundRecovery.js';
export { makeGiftCardFundingSourceGiftCardRefund } from '../models/GiftCardFundingSourceGiftCardRefund.js';
export { makeGiftCardFundingSourceImport } from '../models/GiftCardFundingSourceImport.js';
export { makeGiftCardFundingSourceStoreCredit } from '../models/GiftCardFundingSourceStoreCredit.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
