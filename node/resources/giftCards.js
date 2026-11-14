import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCards.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';

const _sdkDescriptors = new DescriptorSource(settings, {["adjustGiftCardBalance"]:r0,["cashOutGiftCard"]:r0,["closeGiftCard"]:r0,["createGiftCard"]:r0,["freezeGiftCard"]:r0,["getGiftCard"]:r0,["listGiftCards"]:r0,["lookupGiftCard"]:r0,["rotateGiftCardCode"]:r0,["unfreezeGiftCard"]:r0,["updateGiftCard"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCards = Object.freeze({
      adjustBalance: async (gift_card_id, params, options) => this.#runtime.request("adjustGiftCardBalance", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("adjustGiftCardBalance", result, path))),
      cashOut: async (gift_card_id, params, options) => this.#runtime.request("cashOutGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cashOutGiftCard", result, path))),
      close: async (gift_card_id, params, options) => this.#runtime.request("closeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("closeGiftCard", result, path))),
      create: async (params, options) => this.#runtime.request("createGiftCard", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCard", result, path))),
      freeze: async (gift_card_id, params, options) => this.#runtime.request("freezeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("freezeGiftCard", result, path))),
      get: async (gift_card_id, params, options) => this.#runtime.request("getGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      lookup: async (params, options) => this.#runtime.request("lookupGiftCard", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("lookupGiftCard", result, path))),
      rotateCode: async (gift_card_id, params, options) => this.#runtime.request("rotateGiftCardCode", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateGiftCardCode", result, path))),
      unfreeze: async (gift_card_id, params, options) => this.#runtime.request("unfreezeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("unfreezeGiftCard", result, path))),
      update: async (gift_card_id, params, options) => this.#runtime.request("updateGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
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
export { makeCloseGiftCardRequest } from '../models/CloseGiftCardRequest.js';
export { makeCreateGiftCardRequest } from '../models/CreateGiftCardRequest.js';
export { makeFreezeGiftCardRequest } from '../models/FreezeGiftCardRequest.js';
export { makeGiftCardFundingSourceAdjustmentRequest } from '../models/GiftCardFundingSourceAdjustmentRequest.js';
export { makeGiftCardFundingSourceExternalPaymentRequest } from '../models/GiftCardFundingSourceExternalPaymentRequest.js';
export { makeGiftCardFundingSourceFlintManualPaymentRequest } from '../models/GiftCardFundingSourceFlintManualPaymentRequest.js';
export { makeGiftCardFundingSourceFlintPaymentRequest } from '../models/GiftCardFundingSourceFlintPaymentRequest.js';
export { makeGiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest } from '../models/GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest.js';
export { makeGiftCardFundingSourceGiftCardRefundRequest } from '../models/GiftCardFundingSourceGiftCardRefundRequest.js';
export { makeGiftCardFundingSourceImportRequest } from '../models/GiftCardFundingSourceImportRequest.js';
export { makeGiftCardFundingSourceRequest } from '../models/GiftCardFundingSourceRequest.js';
export { makeGiftCardFundingSourceStoreCreditRequest } from '../models/GiftCardFundingSourceStoreCreditRequest.js';
export { makeGiftCardNotificationRecipient } from '../models/GiftCardNotificationRecipient.js';
export { makeInitialGiftCardFunding } from '../models/InitialGiftCardFunding.js';
export { makeLookupGiftCardRequest } from '../models/LookupGiftCardRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeRotateGiftCardCodeRequest } from '../models/RotateGiftCardCodeRequest.js';
export { makeSignedMoneyRequest } from '../models/SignedMoneyRequest.js';
export { makeUnfreezeGiftCardRequest } from '../models/UnfreezeGiftCardRequest.js';
export { makeUpdateGiftCardRequest } from '../models/UpdateGiftCardRequest.js';
