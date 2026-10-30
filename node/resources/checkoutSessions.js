import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/checkoutSessions.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["closeCheckoutSession"]:r0,["confirmCheckoutSessionCustomerVerification"]:r0,["createCheckoutSession"]:r0,["createCheckoutSessionCustomerVerification"]:r0,["createCheckoutSessionDeliveryQuote"]:r0,["createCheckoutSessionDeliverySelection"]:r0,["deleteCheckoutSessionCurrentDeliverySelection"]:r0,["getCheckoutSession"]:r0,["getCheckoutSessionCurrentDeliverySelection"]:r0,["getCheckoutSessionDeliveryQuote"]:r0,["getCheckoutSessionDeliverySelection"]:r0,["listCheckoutSessionDeliverySelections"]:r0,["listCheckoutSessions"]:r0,["updateCheckoutSession"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.checkoutSessions = Object.freeze({
      close: async (checkout_session_id, params, options) => this.#runtime.request("closeCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("closeCheckoutSession", result, path))),
      confirmCustomerVerification: async (checkout_session_id, checkout_session_customer_verification_id, params, options) => this.#runtime.request("confirmCheckoutSessionCustomerVerification", _sdkRequestInput([
  "checkout_session_id",
  "checkout_session_customer_verification_id"
], [checkout_session_id, checkout_session_customer_verification_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmCheckoutSessionCustomerVerification", result, path))),
      create: async (params, options) => this.#runtime.request("createCheckoutSession", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSession", result, path))),
      createCustomerVerification: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionCustomerVerification", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionCustomerVerification", result, path))),
      createDeliveryQuote: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionDeliveryQuote", result, path))),
      createDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionDeliverySelection", result, path))),
      deleteCurrentDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("deleteCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expected_delivery_selection_id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCheckoutSessionCurrentDeliverySelection", result, path))),
      get: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSession", result, path))),
      getCurrentDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionCurrentDeliverySelection", result, path))),
      getDeliveryQuote: async (checkout_session_id, delivery_quote_id, params, options) => this.#runtime.request("getCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id",
  "delivery_quote_id"
], [checkout_session_id, delivery_quote_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionDeliveryQuote", result, path))),
      getDeliverySelection: async (checkout_session_id, delivery_selection_id, params, options) => this.#runtime.request("getCheckoutSessionDeliverySelection", _sdkRequestInput([
  "checkout_session_id",
  "delivery_selection_id"
], [checkout_session_id, delivery_selection_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionDeliverySelection", result, path))),
      listDeliverySelections: async (checkout_session_id, params, options) => this.#runtime.request("listCheckoutSessionDeliverySelections", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCheckoutSessionDeliverySelections", result, path))),
      listDeliverySelectionsPages: (checkout_session_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCheckoutSessionDeliverySelections", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCheckoutSessionDeliverySelections", result, path)),
      listDeliverySelectionsItems: (checkout_session_id, params, options) => this.#runtime.items("listCheckoutSessionDeliverySelections", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listCheckoutSessions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "payment_link_id",
  "customer_id",
  "subscription_plan_id",
  "invoice_id",
  "surface",
  "type",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expires_after",
  "expires_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCheckoutSessions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCheckoutSessions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "payment_link_id",
  "customer_id",
  "subscription_plan_id",
  "invoice_id",
  "surface",
  "type",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expires_after",
  "expires_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCheckoutSessions", result, path)),
      listItems: (params, options) => this.#runtime.items("listCheckoutSessions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "payment_link_id",
  "customer_id",
  "subscription_plan_id",
  "invoice_id",
  "surface",
  "type",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expires_after",
  "expires_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (checkout_session_id, params, options) => this.#runtime.request("updateCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCheckoutSession", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddressRequest } from '../models/AddressRequest.js';
export { makeCallerSuppliedDeliveryMethodResultRequest } from '../models/CallerSuppliedDeliveryMethodResultRequest.js';
export { makeCallerSuppliedDeliveryOutcomeRequest } from '../models/CallerSuppliedDeliveryOutcomeRequest.js';
export { makeCallerSuppliedDeliveryOutcomeRequestAvailable } from '../models/CallerSuppliedDeliveryOutcomeRequestAvailable.js';
export { makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate } from '../models/CallerSuppliedDeliveryOutcomeRequestCannotCalculate.js';
export { makeCallerSuppliedDeliveryOutcomeRequestUnavailable } from '../models/CallerSuppliedDeliveryOutcomeRequestUnavailable.js';
export { makeCheckoutBuyerContactRequest } from '../models/CheckoutBuyerContactRequest.js';
export { makeCheckoutBuyerFieldsRequest } from '../models/CheckoutBuyerFieldsRequest.js';
export { makeCheckoutCustomTextWriteConfig } from '../models/CheckoutCustomTextWriteConfig.js';
export { makeCheckoutLegalConfigRequest } from '../models/CheckoutLegalConfigRequest.js';
export { makeCheckoutPaymentConfigRequest } from '../models/CheckoutPaymentConfigRequest.js';
export { makeCheckoutPrefillRequest } from '../models/CheckoutPrefillRequest.js';
export { makeCheckoutPromotionConfigRequest } from '../models/CheckoutPromotionConfigRequest.js';
export { makeCheckoutQuickPayItemRequest } from '../models/CheckoutQuickPayItemRequest.js';
export { makeCheckoutRedirectsRequest } from '../models/CheckoutRedirectsRequest.js';
export { makeCheckoutSubscriptionTermsRequest } from '../models/CheckoutSubscriptionTermsRequest.js';
export { makeCheckoutTaxConfigRequest } from '../models/CheckoutTaxConfigRequest.js';
export { makeCheckoutTipConfigRequest } from '../models/CheckoutTipConfigRequest.js';
export { makeCloseCheckoutSessionRequest } from '../models/CloseCheckoutSessionRequest.js';
export { makeConfirmCheckoutSessionCustomerVerificationRequest } from '../models/ConfirmCheckoutSessionCustomerVerificationRequest.js';
export { makeCreateCheckoutDeliveryQuoteRequest } from '../models/CreateCheckoutDeliveryQuoteRequest.js';
export { makeCreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest } from '../models/CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest.js';
export { makeCreateCheckoutSessionCustomerVerificationRequest } from '../models/CreateCheckoutSessionCustomerVerificationRequest.js';
export { makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest } from '../models/CreateCheckoutSessionGiftCardPurchaseVerificationRequest.js';
export { makeCreateCheckoutSessionOrder } from '../models/CreateCheckoutSessionOrder.js';
export { makeCreateCheckoutSessionQuickPay } from '../models/CreateCheckoutSessionQuickPay.js';
export { makeCreateCheckoutSessionRequest } from '../models/CreateCheckoutSessionRequest.js';
export { makeCreateCheckoutSessionSavePaymentMethodVerificationRequest } from '../models/CreateCheckoutSessionSavePaymentMethodVerificationRequest.js';
export { makeCreateCheckoutSessionSubscriptionPlan } from '../models/CreateCheckoutSessionSubscriptionPlan.js';
export { makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest } from '../models/CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest.js';
export { makeCreateDeliverySelectionChoiceRequest } from '../models/CreateDeliverySelectionChoiceRequest.js';
export { makeCreateDeliverySelectionRequest } from '../models/CreateDeliverySelectionRequest.js';
export { makeDeliveryAddressRequest } from '../models/DeliveryAddressRequest.js';
export { makeDeliveryBuyerLocationInputAddress } from '../models/DeliveryBuyerLocationInputAddress.js';
export { makeDeliveryBuyerLocationInputCoordinate } from '../models/DeliveryBuyerLocationInputCoordinate.js';
export { makeDeliveryBuyerLocationRequest } from '../models/DeliveryBuyerLocationRequest.js';
export { makeDeliveryCoordinateRequest } from '../models/DeliveryCoordinateRequest.js';
export { makeDeliveryInventoryAssignmentRequest } from '../models/DeliveryInventoryAssignmentRequest.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliverySelectionInstructionsRequest } from '../models/DeliverySelectionInstructionsRequest.js';
export { makeDeliverySelectionRecipientRequest } from '../models/DeliverySelectionRecipientRequest.js';
export { makeDeliveryWindowRequest } from '../models/DeliveryWindowRequest.js';
export { makeDimensions } from '../models/Dimensions.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeOrderCalculatedChargeTax } from '../models/OrderCalculatedChargeTax.js';
export { makeOrderCalculatedLineItemTax } from '../models/OrderCalculatedLineItemTax.js';
export { makeOrderLineItemTax } from '../models/OrderLineItemTax.js';
export { makeSubscriptionIntervalOption } from '../models/SubscriptionIntervalOption.js';
export { makeTaxCalculationRequest } from '../models/TaxCalculationRequest.js';
export { makeTaxComponentRequest } from '../models/TaxComponentRequest.js';
export { makeTaxJurisdiction } from '../models/TaxJurisdiction.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeThemeConfigRequest } from '../models/ThemeConfigRequest.js';
export { makeUpdateCheckoutSessionRequest } from '../models/UpdateCheckoutSessionRequest.js';
export { makeWeight } from '../models/Weight.js';
