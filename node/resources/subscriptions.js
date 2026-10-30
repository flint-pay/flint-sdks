import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/subscriptions.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelSubscription"]:r0,["changeSubscriptionPlan"]:r0,["createSubscription"]:r0,["createSubscriptionAccessLink"]:r0,["createSubscriptionLineItem"]:r0,["createSubscriptionPaymentRetry"]:r0,["deleteSubscriptionLineItem"]:r0,["getSubscription"]:r0,["getSubscriptionPaymentRetry"]:r0,["listSubscriptionPaymentRetries"]:r0,["listSubscriptions"]:r0,["pauseSubscription"]:r0,["renewSubscription"]:r0,["resumeSubscription"]:r0,["skipSubscriptionCycle"]:r0,["updateSubscription"]:r0,["updateSubscriptionLineItem"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.subscriptions = Object.freeze({
      cancel: async (subscription_id, params, options) => this.#runtime.request("cancelSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelSubscription", result, path))),
      changePlan: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionPlan", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeSubscriptionPlan", result, path))),
      create: async (params, options) => this.#runtime.request("createSubscription", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscription", result, path))),
      createAccessLink: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionAccessLink", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionAccessLink", result, path))),
      createLineItem: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionLineItem", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionLineItem", result, path))),
      createPaymentRetry: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPaymentRetry", result, path))),
      deleteLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("deleteSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionLineItem", result, path))),
      get: async (subscription_id, params, options) => this.#runtime.request("getSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscription", result, path))),
      getPaymentRetry: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionPaymentRetry", result, path))),
      listPaymentRetries: async (subscription_id, params, options) => this.#runtime.request("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionPaymentRetries", result, path))),
      listPaymentRetriesPages: (subscription_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionPaymentRetries", result, path)),
      listPaymentRetriesItems: (subscription_id, params, options) => this.#runtime.items("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
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
  "awaiting_billing_schedule",
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
  "expand"
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
  "awaiting_billing_schedule",
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
  "expand"
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
  "awaiting_billing_schedule",
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      pause: async (subscription_id, params, options) => this.#runtime.request("pauseSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("pauseSubscription", result, path))),
      renew: async (subscription_id, params, options) => this.#runtime.request("renewSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("renewSubscription", result, path))),
      resume: async (subscription_id, params, options) => this.#runtime.request("resumeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resumeSubscription", result, path))),
      skipCycle: async (subscription_id, params, options) => this.#runtime.request("skipSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("skipSubscriptionCycle", result, path))),
      update: async (subscription_id, params, options) => this.#runtime.request("updateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscription", result, path))),
      updateLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("updateSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [], true, true, params, [
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
export { makeCancelSubscriptionRequest } from '../models/CancelSubscriptionRequest.js';
export { makeChangeSubscriptionPlanRequest } from '../models/ChangeSubscriptionPlanRequest.js';
export { makeConfigurationVersionRequest } from '../models/ConfigurationVersionRequest.js';
export { makeConfirmReturnResolutionRequest } from '../models/ConfirmReturnResolutionRequest.js';
export { makeCreateSubscriptionAccessLinkRequest } from '../models/CreateSubscriptionAccessLinkRequest.js';
export { makeCreateSubscriptionLineItemRequest } from '../models/CreateSubscriptionLineItemRequest.js';
export { makeCreateSubscriptionLineItemRequestBundle } from '../models/CreateSubscriptionLineItemRequestBundle.js';
export { makeCreateSubscriptionLineItemRequestVariant } from '../models/CreateSubscriptionLineItemRequestVariant.js';
export { makeCreateSubscriptionRequest } from '../models/CreateSubscriptionRequest.js';
export { makeDeliverySelectionRecipientRequest } from '../models/DeliverySelectionRecipientRequest.js';
export { makeDimensions } from '../models/Dimensions.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeOrderCalculatedChargeTax } from '../models/OrderCalculatedChargeTax.js';
export { makeOrderCalculatedLineItemTax } from '../models/OrderCalculatedLineItemTax.js';
export { makeOrderLineItemTax } from '../models/OrderLineItemTax.js';
export { makePauseSubscriptionRequest } from '../models/PauseSubscriptionRequest.js';
export { makePromotionRecurrence } from '../models/PromotionRecurrence.js';
export { makePromotionRecurrenceForever } from '../models/PromotionRecurrenceForever.js';
export { makePromotionRecurrenceOnce } from '../models/PromotionRecurrenceOnce.js';
export { makePromotionRecurrenceRepeating } from '../models/PromotionRecurrenceRepeating.js';
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
export { makeSubscriptionIntervalOption } from '../models/SubscriptionIntervalOption.js';
export { makeSubscriptionOfferLineItemRequest } from '../models/SubscriptionOfferLineItemRequest.js';
export { makeSubscriptionOfferTermsRequest } from '../models/SubscriptionOfferTermsRequest.js';
export { makeSubscriptionPlanChangeLineItemRequest } from '../models/SubscriptionPlanChangeLineItemRequest.js';
export { makeSubscriptionPlanTermsRequest } from '../models/SubscriptionPlanTermsRequest.js';
export { makeSubscriptionServiceLocationInputAddress } from '../models/SubscriptionServiceLocationInputAddress.js';
export { makeSubscriptionServiceLocationInputCustomerAddress } from '../models/SubscriptionServiceLocationInputCustomerAddress.js';
export { makeSubscriptionServiceLocationRequest } from '../models/SubscriptionServiceLocationRequest.js';
export { makeSubscriptionTermsRequest } from '../models/SubscriptionTermsRequest.js';
export { makeTaxCalculationRequest } from '../models/TaxCalculationRequest.js';
export { makeTaxComponentRequest } from '../models/TaxComponentRequest.js';
export { makeTaxJurisdiction } from '../models/TaxJurisdiction.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateSubscriptionLineItemRequest } from '../models/UpdateSubscriptionLineItemRequest.js';
export { makeUpdateSubscriptionRequest } from '../models/UpdateSubscriptionRequest.js';
export { makeWeight } from '../models/Weight.js';
