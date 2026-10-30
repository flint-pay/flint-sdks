import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/discountPreviews.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createDiscountPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.discountPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDiscountPreview", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDiscountPreview", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateOrderDiscount } from '../models/CreateOrderDiscount.js';
export { makeCreateOrderDiscountManual } from '../models/CreateOrderDiscountManual.js';
export { makeCreateOrderDiscountPromotion } from '../models/CreateOrderDiscountPromotion.js';
export { makeDiscountPreviewRequest } from '../models/DiscountPreviewRequest.js';
export { makeManualDiscountRequest } from '../models/ManualDiscountRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePromotionRefInputPromotionCode } from '../models/PromotionRefInputPromotionCode.js';
export { makePromotionRefInputPromotionID } from '../models/PromotionRefInputPromotionID.js';
export { makePromotionRefRequest } from '../models/PromotionRefRequest.js';
