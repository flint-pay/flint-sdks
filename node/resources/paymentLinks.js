import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/paymentLinks.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';

const _sdkDescriptors = new DescriptorSource(settings, {["createPaymentLink"]:r0,["getPaymentLink"]:r0,["getPaymentLinkPublic"]:r0,["listPaymentLinks"]:r0,["resolvePaymentLink"]:r0,["updatePaymentLink"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.paymentLinks = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentLink", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentLink", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createPaymentLink", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentLink", result, path))),
      getWithResponse: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getPublic: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLinkPublic", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentLinkPublic", result, path))),
      getPublicWithResponse: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLinkPublic", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentLinks", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentLinks", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPaymentLinks", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentLinks", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      resolve: async (payment_link_id, params, options) => this.#runtime.request("resolvePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resolvePaymentLink", result, path))),
      resolveWithResponse: async (payment_link_id, params, options) => this.#runtime.request("resolvePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (payment_link_id, params, options) => this.#runtime.request("updatePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePaymentLink", result, path))),
      updateWithResponse: async (payment_link_id, params, options) => this.#runtime.request("updatePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeCheckoutBuyerFields } from '../models/CheckoutBuyerFields.js';
export { makeCheckoutPromotionConfig } from '../models/CheckoutPromotionConfig.js';
export { makeCheckoutRedirectsRequest } from '../models/CheckoutRedirectsRequest.js';
export { makeCheckoutTaxConfig } from '../models/CheckoutTaxConfig.js';
export { makeCheckoutTipConfig } from '../models/CheckoutTipConfig.js';
export { makeCreatePaymentLinkRequest } from '../models/CreatePaymentLinkRequest.js';
export { makeDeliveryAddressRequest } from '../models/DeliveryAddressRequest.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliveryWindowRequest } from '../models/DeliveryWindowRequest.js';
export { makeImageRequest } from '../models/ImageRequest.js';
export { makeInventoryRoutingSourceInputFixedLocation } from '../models/InventoryRoutingSourceInputFixedLocation.js';
export { makeInventoryRoutingSourceInputPolicy } from '../models/InventoryRoutingSourceInputPolicy.js';
export { makeInventoryRoutingSourceInputPolicyRevision } from '../models/InventoryRoutingSourceInputPolicyRevision.js';
export { makeInventoryRoutingSourceRequest } from '../models/InventoryRoutingSourceRequest.js';
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
