import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCardCashOuts.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';

const _sdkDescriptors = new DescriptorSource(settings, {["cashOutGiftCard"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCardCashOuts = Object.freeze({
      create: async (gift_card_id, params, options) => this.#runtime.request("cashOutGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cashOutGiftCard", result, path))),
      createWithResponse: async (gift_card_id, params, options) => this.#runtime.request("cashOutGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCashOutGiftCardRequest } from '../models/CashOutGiftCardRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
