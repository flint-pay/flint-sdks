import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCardFundingDispositions.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["createGiftCardFundingDisposition"]:r0,["getGiftCardFundingDisposition"]:r0,["listGiftCardFundingDispositions"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCardFundingDispositions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createGiftCardFundingDisposition", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardFundingDisposition", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCardFundingDisposition", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_funding_disposition_id, params, options) => this.#runtime.request("getGiftCardFundingDisposition", _sdkRequestInput([
  "gift_card_funding_disposition_id"
], [gift_card_funding_disposition_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardFundingDisposition", result, path))),
      getWithResponse: async (gift_card_funding_disposition_id, params, options) => this.#runtime.request("getGiftCardFundingDisposition", _sdkRequestInput([
  "gift_card_funding_disposition_id"
], [gift_card_funding_disposition_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardFundingDispositions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardFundingDispositions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateGiftCardFundingDispositionRequest } from '../models/CreateGiftCardFundingDispositionRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
