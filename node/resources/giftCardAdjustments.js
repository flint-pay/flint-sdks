import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCardAdjustments.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';

const _sdkDescriptors = new DescriptorSource(settings, {["adjustGiftCardBalance"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCardAdjustments = Object.freeze({
      create: async (gift_card_id, params, options) => this.#runtime.request("adjustGiftCardBalance", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("adjustGiftCardBalance", result, path))),
      createWithResponse: async (gift_card_id, params, options) => this.#runtime.request("adjustGiftCardBalance", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAdjustGiftCardBalanceRequest } from '../models/AdjustGiftCardBalanceRequest.js';
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
export { makeSignedMoneyRequestRequest } from '../models/SignedMoneyRequestRequest.js';
