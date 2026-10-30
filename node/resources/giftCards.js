import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCards.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["adjustGiftCardBalance"]:r0,["cashOutGiftCard"]:r0,["createGiftCard"]:r0,["createGiftCardLoad"]:r0,["getGiftCard"]:r0,["listGiftCards"]:r0,["lookupGiftCard"]:r0,["rotateGiftCardCode"]:r0,["transitionGiftCard"]:r0,["updateGiftCard"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCards = Object.freeze({
      adjustBalance: async (gift_card_id, params, options) => this.#runtime.request("adjustGiftCardBalance", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("adjustGiftCardBalance", result, path))),
      cashOut: async (gift_card_id, params, options) => this.#runtime.request("cashOutGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cashOutGiftCard", result, path))),
      create: async (params, options) => this.#runtime.request("createGiftCard", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCard", result, path))),
      createLoad: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardLoad", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardLoad", result, path))),
      get: async (gift_card_id, params, options) => this.#runtime.request("getGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCard", result, path))),
      list: async (params, options) => this.#runtime.request("listGiftCards", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "external_reference_id",
  "idempotency_key",
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCards", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCards", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "external_reference_id",
  "idempotency_key",
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listGiftCards", result, path)),
      listItems: (params, options) => this.#runtime.items("listGiftCards", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "external_reference_id",
  "idempotency_key",
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      lookup: async (params, options) => this.#runtime.request("lookupGiftCard", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("lookupGiftCard", result, path))),
      rotateCode: async (gift_card_id, params, options) => this.#runtime.request("rotateGiftCardCode", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateGiftCardCode", result, path))),
      transition: async (gift_card_id, params, options) => this.#runtime.request("transitionGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionGiftCard", result, path))),
      update: async (gift_card_id, params, options) => this.#runtime.request("updateGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateGiftCard", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAdjustGiftCardBalanceRequest } from '../models/AdjustGiftCardBalanceRequest.js';
export { makeCashOutGiftCardRequest } from '../models/CashOutGiftCardRequest.js';
export { makeCreateGiftCardLoadRequest } from '../models/CreateGiftCardLoadRequest.js';
export { makeCreateGiftCardRequest } from '../models/CreateGiftCardRequest.js';
export { makeGiftCardFundingSource } from '../models/GiftCardFundingSource.js';
export { makeGiftCardFundingSourceAdjustment } from '../models/GiftCardFundingSourceAdjustment.js';
export { makeGiftCardFundingSourceExternalPayment } from '../models/GiftCardFundingSourceExternalPayment.js';
export { makeGiftCardFundingSourceFlintManualPayment } from '../models/GiftCardFundingSourceFlintManualPayment.js';
export { makeGiftCardFundingSourceFlintPayment } from '../models/GiftCardFundingSourceFlintPayment.js';
export { makeGiftCardFundingSourceGiftCardPurchaseRefundRecovery } from '../models/GiftCardFundingSourceGiftCardPurchaseRefundRecovery.js';
export { makeGiftCardFundingSourceGiftCardRefund } from '../models/GiftCardFundingSourceGiftCardRefund.js';
export { makeGiftCardFundingSourceImport } from '../models/GiftCardFundingSourceImport.js';
export { makeGiftCardFundingSourceStoreCredit } from '../models/GiftCardFundingSourceStoreCredit.js';
export { makeGiftCardNotificationRecipient } from '../models/GiftCardNotificationRecipient.js';
export { makeInitialGiftCardFunding } from '../models/InitialGiftCardFunding.js';
export { makeLookupGiftCardRequest } from '../models/LookupGiftCardRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeRotateGiftCardCodeRequest } from '../models/RotateGiftCardCodeRequest.js';
export { makeSignedMoneyRequest } from '../models/SignedMoneyRequest.js';
export { makeTransitionGiftCardRequest } from '../models/TransitionGiftCardRequest.js';
export { makeTransitionGiftCardRequestFreeze } from '../models/TransitionGiftCardRequestFreeze.js';
export { makeTransitionGiftCardRequestWithoutReason } from '../models/TransitionGiftCardRequestWithoutReason.js';
export { makeUpdateGiftCardRequest } from '../models/UpdateGiftCardRequest.js';
