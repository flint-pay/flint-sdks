import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/paymentLinks.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createPaymentLink"]:r0,["getPaymentLink"]:r0,["getPaymentLinkPublic"]:r0,["listPaymentLinks"]:r0,["resolvePaymentLink"]:r0,["updatePaymentLink"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.paymentLinks = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentLink", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentLink", result, path))),
      get: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentLink", result, path))),
      getPublic: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLinkPublic", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentLinkPublic", result, path))),
      list: async (params, options) => this.#runtime.request("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_subscription_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentLinks", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_subscription_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPaymentLinks", result, path)),
      listItems: (params, options) => this.#runtime.items("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_subscription_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      resolve: async (payment_link_id, params, options) => this.#runtime.request("resolvePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resolvePaymentLink", result, path))),
      update: async (payment_link_id, params, options) => this.#runtime.request("updatePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePaymentLink", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCheckoutBuyerFieldsRequest } from '../models/CheckoutBuyerFieldsRequest.js';
export { makeCheckoutPromotionConfigRequest } from '../models/CheckoutPromotionConfigRequest.js';
export { makeCheckoutRedirectsRequest } from '../models/CheckoutRedirectsRequest.js';
export { makeCheckoutTaxConfigRequest } from '../models/CheckoutTaxConfigRequest.js';
export { makeCheckoutTipConfigRequest } from '../models/CheckoutTipConfigRequest.js';
export { makeCreatePaymentLinkRequest } from '../models/CreatePaymentLinkRequest.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliveryWindowRequest } from '../models/DeliveryWindowRequest.js';
export { makeImageInputFile } from '../models/ImageInputFile.js';
export { makeImageInputSourceURL } from '../models/ImageInputSourceURL.js';
export { makeImageRequest } from '../models/ImageRequest.js';
export { makeInventoryRoutingSourceInputFixedLocation } from '../models/InventoryRoutingSourceInputFixedLocation.js';
export { makeInventoryRoutingSourceInputPolicy } from '../models/InventoryRoutingSourceInputPolicy.js';
export { makeInventoryRoutingSourceInputPolicyRevision } from '../models/InventoryRoutingSourceInputPolicyRevision.js';
export { makeInventoryRoutingSourceRequest } from '../models/InventoryRoutingSourceRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeOrderLineItemTax } from '../models/OrderLineItemTax.js';
export { makePaymentLinkCustomFieldPatchRequest } from '../models/PaymentLinkCustomFieldPatchRequest.js';
export { makePaymentLinkCustomFieldRequest } from '../models/PaymentLinkCustomFieldRequest.js';
export { makePaymentLinkCustomTextConfig } from '../models/PaymentLinkCustomTextConfig.js';
export { makePaymentLinkCustomTextPatchRequest } from '../models/PaymentLinkCustomTextPatchRequest.js';
export { makePaymentLinkEventConfigPatchRequest } from '../models/PaymentLinkEventConfigPatchRequest.js';
export { makePaymentLinkEventConfigRequest } from '../models/PaymentLinkEventConfigRequest.js';
export { makePaymentLinkLegalConfig } from '../models/PaymentLinkLegalConfig.js';
export { makePaymentLinkLegalPatchRequest } from '../models/PaymentLinkLegalPatchRequest.js';
export { makePaymentLinkLineItemInputBundle } from '../models/PaymentLinkLineItemInputBundle.js';
export { makePaymentLinkLineItemInputCustomFixed } from '../models/PaymentLinkLineItemInputCustomFixed.js';
export { makePaymentLinkLineItemInputCustomVariable } from '../models/PaymentLinkLineItemInputCustomVariable.js';
export { makePaymentLinkLineItemInputVariant } from '../models/PaymentLinkLineItemInputVariant.js';
export { makePaymentLinkLineItemPatchInputBundle } from '../models/PaymentLinkLineItemPatchInputBundle.js';
export { makePaymentLinkLineItemPatchInputCustomFixed } from '../models/PaymentLinkLineItemPatchInputCustomFixed.js';
export { makePaymentLinkLineItemPatchInputCustomVariable } from '../models/PaymentLinkLineItemPatchInputCustomVariable.js';
export { makePaymentLinkLineItemPatchInputVariant } from '../models/PaymentLinkLineItemPatchInputVariant.js';
export { makePaymentLinkLineItemPatchRequest } from '../models/PaymentLinkLineItemPatchRequest.js';
export { makePaymentLinkLineItemRequest } from '../models/PaymentLinkLineItemRequest.js';
export { makePaymentLinkPaymentConfig } from '../models/PaymentLinkPaymentConfig.js';
export { makePaymentLinkPaymentPatchRequest } from '../models/PaymentLinkPaymentPatchRequest.js';
export { makePaymentLinkRedirectsPatchRequest } from '../models/PaymentLinkRedirectsPatchRequest.js';
export { makePaymentLinkThemeConfig } from '../models/PaymentLinkThemeConfig.js';
export { makePaymentLinkThemePatchRequest } from '../models/PaymentLinkThemePatchRequest.js';
export { makeResolvePaymentLinkLineItemModifierRequest } from '../models/ResolvePaymentLinkLineItemModifierRequest.js';
export { makeResolvePaymentLinkLineItemModifiers } from '../models/ResolvePaymentLinkLineItemModifiers.js';
export { makeResolvePaymentLinkRequest } from '../models/ResolvePaymentLinkRequest.js';
export { makeResolvePaymentLinkTextModifierRequest } from '../models/ResolvePaymentLinkTextModifierRequest.js';
export { makeSubscriptionIntervalOption } from '../models/SubscriptionIntervalOption.js';
export { makeTextModifierConfigRequest } from '../models/TextModifierConfigRequest.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdatePaymentLinkRequest } from '../models/UpdatePaymentLinkRequest.js';
