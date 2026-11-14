import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/subscriptions.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';

const _sdkDescriptors = new DescriptorSource(settings, {["applySubscriptionPromotion"]:r0,["cancelSubscription"]:r0,["changeSubscriptionPlan"]:r0,["changeSubscriptionQuantity"]:r0,["createSubscription"]:r0,["createSubscriptionAccessLink"]:r0,["createSubscriptionLineItem"]:r0,["createSubscriptionPaymentRetry"]:r0,["deleteSubscriptionLineItem"]:r0,["getSubscription"]:r0,["getSubscriptionPaymentRetry"]:r0,["listSubscriptionLineItems"]:r0,["listSubscriptionPaymentRetries"]:r0,["listSubscriptions"]:r0,["pauseSubscription"]:r0,["removeSubscriptionPromotions"]:r0,["renewSubscription"]:r0,["resumeSubscription"]:r0,["skipSubscriptionCycle"]:r0,["updateSubscription"]:r0,["updateSubscriptionLineItem"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.subscriptions = Object.freeze({
      applyPromotion: async (subscription_id, params, options) => this.#runtime.request("applySubscriptionPromotion", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("applySubscriptionPromotion", result, path))),
      cancel: async (subscription_id, params, options) => this.#runtime.request("cancelSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelSubscription", result, path))),
      changePlan: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionPlan", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeSubscriptionPlan", result, path))),
      changeQuantity: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionQuantity", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeSubscriptionQuantity", result, path))),
      create: async (params, options) => this.#runtime.request("createSubscription", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscription", result, path))),
      createAccessLink: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionAccessLink", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionAccessLink", result, path))),
      createLineItem: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionLineItem", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionLineItem", result, path))),
      createPaymentRetry: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPaymentRetry", result, path))),
      deleteLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("deleteSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionLineItem", result, path))),
      get: async (subscription_id, params, options) => this.#runtime.request("getSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscription", result, path))),
      getPaymentRetry: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionPaymentRetry", result, path))),
      listLineItems: async (subscription_id, params, options) => this.#runtime.request("listSubscriptionLineItems", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionLineItems", result, path))),
      listLineItemsPages: (subscription_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionLineItems", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionLineItems", result, path)),
      listLineItemsItems: (subscription_id, params, options) => this.#runtime.items("listSubscriptionLineItems", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listPaymentRetries: async (subscription_id, params, options) => this.#runtime.request("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionPaymentRetries", result, path))),
      listPaymentRetriesPages: (subscription_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionPaymentRetries", result, path)),
      listPaymentRetriesItems: (subscription_id, params, options) => this.#runtime.items("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listSubscriptions", _sdkRequestInput([], [], [
  "idempotency_key",
  "terms_type",
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "is_awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "delivery_method_id",
  "hold_reason",
  "subscription_offer_id",
  "subscription_plan_id",
  "external_reference_id",
  "test_clock_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptions", _sdkRequestInput([], [], [
  "idempotency_key",
  "terms_type",
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "is_awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "delivery_method_id",
  "hold_reason",
  "subscription_offer_id",
  "subscription_plan_id",
  "external_reference_id",
  "test_clock_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptions", result, path)),
      listItems: (params, options) => this.#runtime.items("listSubscriptions", _sdkRequestInput([], [], [
  "idempotency_key",
  "terms_type",
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "is_awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "delivery_method_id",
  "hold_reason",
  "subscription_offer_id",
  "subscription_plan_id",
  "external_reference_id",
  "test_clock_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      pause: async (subscription_id, params, options) => this.#runtime.request("pauseSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("pauseSubscription", result, path))),
      removePromotions: async (subscription_id, params, options) => this.#runtime.request("removeSubscriptionPromotions", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeSubscriptionPromotions", result, path))),
      renew: async (subscription_id, params, options) => this.#runtime.request("renewSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("renewSubscription", result, path))),
      resume: async (subscription_id, params, options) => this.#runtime.request("resumeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resumeSubscription", result, path))),
      skipCycle: async (subscription_id, params, options) => this.#runtime.request("skipSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("skipSubscriptionCycle", result, path))),
      update: async (subscription_id, params, options) => this.#runtime.request("updateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscription", result, path))),
      updateLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("updateSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionLineItem", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddressRequest } from '../models/AddressRequest.js';
export { makeApplySubscriptionPromotionRequest } from '../models/ApplySubscriptionPromotionRequest.js';
export { makeCancelSubscriptionRequest } from '../models/CancelSubscriptionRequest.js';
export { makeChangeSubscriptionPlanRequest } from '../models/ChangeSubscriptionPlanRequest.js';
export { makeChangeSubscriptionQuantityRequest } from '../models/ChangeSubscriptionQuantityRequest.js';
export { makeConfigurationVersionRequest } from '../models/ConfigurationVersionRequest.js';
export { makeConfirmReturnResolutionRequest } from '../models/ConfirmReturnResolutionRequest.js';
export { makeCreateSubscriptionAccessLinkRequest } from '../models/CreateSubscriptionAccessLinkRequest.js';
export { makeCreateSubscriptionLineItemRequest } from '../models/CreateSubscriptionLineItemRequest.js';
export { makeCreateSubscriptionLineItemRequestBundle } from '../models/CreateSubscriptionLineItemRequestBundle.js';
export { makeCreateSubscriptionLineItemRequestVariant } from '../models/CreateSubscriptionLineItemRequestVariant.js';
export { makeCreateSubscriptionRequest } from '../models/CreateSubscriptionRequest.js';
export { makeDeliverySelectionRecipientRequest } from '../models/DeliverySelectionRecipientRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePauseSubscriptionRequest } from '../models/PauseSubscriptionRequest.js';
export { makePromotionRefInputPromotionCode } from '../models/PromotionRefInputPromotionCode.js';
export { makePromotionRefInputPromotionID } from '../models/PromotionRefInputPromotionID.js';
export { makePromotionRefRequest } from '../models/PromotionRefRequest.js';
export { makeRemoveSubscriptionPromotionsRequest } from '../models/RemoveSubscriptionPromotionsRequest.js';
export { makeRenewSubscriptionRequest } from '../models/RenewSubscriptionRequest.js';
export { makeResourceVersionRequest } from '../models/ResourceVersionRequest.js';
export { makeSkipSubscriptionCycleRequest } from '../models/SkipSubscriptionCycleRequest.js';
export { makeSubscriptionBillingScheduleInputExternal } from '../models/SubscriptionBillingScheduleInputExternal.js';
export { makeSubscriptionBillingScheduleInputFlint } from '../models/SubscriptionBillingScheduleInputFlint.js';
export { makeSubscriptionBillingScheduleRequest } from '../models/SubscriptionBillingScheduleRequest.js';
export { makeSubscriptionBillingScheduleUpdateInputExternal } from '../models/SubscriptionBillingScheduleUpdateInputExternal.js';
export { makeSubscriptionBillingScheduleUpdateInputFlint } from '../models/SubscriptionBillingScheduleUpdateInputFlint.js';
export { makeSubscriptionBillingScheduleUpdateRequest } from '../models/SubscriptionBillingScheduleUpdateRequest.js';
export { makeSubscriptionBillingStartInputImmediate } from '../models/SubscriptionBillingStartInputImmediate.js';
export { makeSubscriptionBillingStartInputImported } from '../models/SubscriptionBillingStartInputImported.js';
export { makeSubscriptionBillingStartInputScheduled } from '../models/SubscriptionBillingStartInputScheduled.js';
export { makeSubscriptionBillingStartRequest } from '../models/SubscriptionBillingStartRequest.js';
export { makeSubscriptionDeliveryDestinationInputAddress } from '../models/SubscriptionDeliveryDestinationInputAddress.js';
export { makeSubscriptionDeliveryDestinationInputCustomerAddress } from '../models/SubscriptionDeliveryDestinationInputCustomerAddress.js';
export { makeSubscriptionDeliveryDestinationRequest } from '../models/SubscriptionDeliveryDestinationRequest.js';
export { makeSubscriptionDeliveryRequest } from '../models/SubscriptionDeliveryRequest.js';
export { makeSubscriptionEndAfterCyclesRequest } from '../models/SubscriptionEndAfterCyclesRequest.js';
export { makeSubscriptionEndAfterDateRequest } from '../models/SubscriptionEndAfterDateRequest.js';
export { makeSubscriptionEndAfterRequest } from '../models/SubscriptionEndAfterRequest.js';
export { makeSubscriptionGiftRecipientRequest } from '../models/SubscriptionGiftRecipientRequest.js';
export { makeSubscriptionOfferLineItemRequest } from '../models/SubscriptionOfferLineItemRequest.js';
export { makeSubscriptionOfferTermsRequest } from '../models/SubscriptionOfferTermsRequest.js';
export { makeSubscriptionPlanChangeLineItemRequest } from '../models/SubscriptionPlanChangeLineItemRequest.js';
export { makeSubscriptionPlanTermsRequest } from '../models/SubscriptionPlanTermsRequest.js';
export { makeSubscriptionPromotionRequest } from '../models/SubscriptionPromotionRequest.js';
export { makeSubscriptionQuantityChangeLineItemRequest } from '../models/SubscriptionQuantityChangeLineItemRequest.js';
export { makeSubscriptionServiceLocationInputAddress } from '../models/SubscriptionServiceLocationInputAddress.js';
export { makeSubscriptionServiceLocationInputCustomerAddress } from '../models/SubscriptionServiceLocationInputCustomerAddress.js';
export { makeSubscriptionServiceLocationRequest } from '../models/SubscriptionServiceLocationRequest.js';
export { makeSubscriptionTaxCalculationRequest } from '../models/SubscriptionTaxCalculationRequest.js';
export { makeSubscriptionTaxRequest } from '../models/SubscriptionTaxRequest.js';
export { makeSubscriptionTermsRequest } from '../models/SubscriptionTermsRequest.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateSubscriptionLineItemRequest } from '../models/UpdateSubscriptionLineItemRequest.js';
export { makeUpdateSubscriptionRequest } from '../models/UpdateSubscriptionRequest.js';
