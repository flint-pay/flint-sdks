import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/checkoutSessions.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';

const _sdkDescriptors = new DescriptorSource(settings, {["closeCheckoutSession"]:r0,["confirmCheckoutSessionCustomerVerification"]:r0,["createCheckoutSession"]:r0,["createCheckoutSessionCustomerVerification"]:r0,["createCheckoutSessionDeliveryQuote"]:r0,["createCheckoutSessionDeliverySelection"]:r0,["deleteCheckoutSessionCurrentDeliverySelection"]:r0,["getCheckoutSession"]:r0,["getCheckoutSessionCurrentDeliverySelection"]:r0,["getCheckoutSessionDeliveryQuote"]:r0,["getCheckoutSessionDeliverySelectionHistory"]:r0,["listCheckoutSessions"]:r0,["updateCheckoutSession"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.checkoutSessions = Object.freeze({
      closeSession: async (checkout_session_id, params, options) => this.#runtime.request("closeCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("closeCheckoutSession", result, path))),
      closeSessionWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("closeCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      confirmCustomerVerification: async (checkout_session_id, checkout_session_customer_verification_id, params, options) => this.#runtime.request("confirmCheckoutSessionCustomerVerification", _sdkRequestInput([
  "checkout_session_id",
  "checkout_session_customer_verification_id"
], [checkout_session_id, checkout_session_customer_verification_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmCheckoutSessionCustomerVerification", result, path))),
      confirmCustomerVerificationWithResponse: async (checkout_session_id, checkout_session_customer_verification_id, params, options) => this.#runtime.request("confirmCheckoutSessionCustomerVerification", _sdkRequestInput([
  "checkout_session_id",
  "checkout_session_customer_verification_id"
], [checkout_session_id, checkout_session_customer_verification_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createCheckoutSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSession", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCheckoutSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createCustomerVerification: (input = {}, options) => this.#runtime.request("createCheckoutSessionCustomerVerification", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionCustomerVerification", result, path))),
      createCustomerVerificationWithResponse: (input = {}, options) => this.#runtime.request("createCheckoutSessionCustomerVerification", input, options).then(_sdkResponse),
      createDeliveryQuote: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionDeliveryQuote", result, path))),
      createDeliveryQuoteWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionDeliverySelection", result, path))),
      createDeliverySelectionWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      deleteCurrentDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("deleteCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expected_delivery_selection_id",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCheckoutSessionCurrentDeliverySelection", result, path))),
      deleteCurrentDeliverySelectionWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("deleteCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expected_delivery_selection_id",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSession", result, path))),
      getWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getCurrentDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionCurrentDeliverySelection", result, path))),
      getCurrentDeliverySelectionWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], false, false, params), options).then(_sdkResponse),
      getDeliveryQuote: async (checkout_session_id, delivery_quote_id, params, options) => this.#runtime.request("getCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id",
  "delivery_quote_id"
], [checkout_session_id, delivery_quote_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionDeliveryQuote", result, path))),
      getDeliveryQuoteWithResponse: async (checkout_session_id, delivery_quote_id, params, options) => this.#runtime.request("getCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id",
  "delivery_quote_id"
], [checkout_session_id, delivery_quote_id], [], false, false, params), options).then(_sdkResponse),
      getDeliverySelectionHistory: async (checkout_session_id, delivery_selection_id, params, options) => this.#runtime.request("getCheckoutSessionDeliverySelectionHistory", _sdkRequestInput([
  "checkout_session_id",
  "delivery_selection_id"
], [checkout_session_id, delivery_selection_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionDeliverySelectionHistory", result, path))),
      getDeliverySelectionHistoryWithResponse: async (checkout_session_id, delivery_selection_id, params, options) => this.#runtime.request("getCheckoutSessionDeliverySelectionHistory", _sdkRequestInput([
  "checkout_session_id",
  "delivery_selection_id"
], [checkout_session_id, delivery_selection_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCheckoutSessions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listCheckoutSessions", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCheckoutSessions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCheckoutSessions", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      update: async (checkout_session_id, params, options) => this.#runtime.request("updateCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCheckoutSession", result, path))),
      updateWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("updateCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddressRequest } from '../models/AddressRequest.js';
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeCallerSuppliedDeliveryMethodResultRequest } from '../models/CallerSuppliedDeliveryMethodResultRequest.js';
export { makeCallerSuppliedDeliveryOutcomeRequest } from '../models/CallerSuppliedDeliveryOutcomeRequest.js';
export { makeCallerSuppliedDeliveryOutcomeRequestAvailable } from '../models/CallerSuppliedDeliveryOutcomeRequestAvailable.js';
export { makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate } from '../models/CallerSuppliedDeliveryOutcomeRequestCannotCalculate.js';
export { makeCallerSuppliedDeliveryOutcomeRequestUnavailable } from '../models/CallerSuppliedDeliveryOutcomeRequestUnavailable.js';
export { makeCheckoutBuyerContactRequest } from '../models/CheckoutBuyerContactRequest.js';
export { makeCheckoutBuyerFields } from '../models/CheckoutBuyerFields.js';
export { makeCheckoutCustomTextWriteConfig } from '../models/CheckoutCustomTextWriteConfig.js';
export { makeCheckoutLegalConfigRequest } from '../models/CheckoutLegalConfigRequest.js';
export { makeCheckoutPaymentConfigRequest } from '../models/CheckoutPaymentConfigRequest.js';
export { makeCheckoutPrefillRequest } from '../models/CheckoutPrefillRequest.js';
export { makeCheckoutPromotionConfig } from '../models/CheckoutPromotionConfig.js';
export { makeCheckoutQuickPayItemRequest } from '../models/CheckoutQuickPayItemRequest.js';
export { makeCheckoutRedirectsRequest } from '../models/CheckoutRedirectsRequest.js';
export { makeCheckoutSubscriptionTermsRequest } from '../models/CheckoutSubscriptionTermsRequest.js';
export { makeCheckoutTaxConfig } from '../models/CheckoutTaxConfig.js';
export { makeCheckoutTipConfig } from '../models/CheckoutTipConfig.js';
export { makeCloseCheckoutSessionRequest } from '../models/CloseCheckoutSessionRequest.js';
export { makeConfirmCheckoutSessionCustomerVerificationRequest } from '../models/ConfirmCheckoutSessionCustomerVerificationRequest.js';
export { makeCreateCheckoutDeliveryQuoteRequest } from '../models/CreateCheckoutDeliveryQuoteRequest.js';
export { makeCreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest } from '../models/CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest.js';
export { makeCreateCheckoutSessionCustomerVerificationRequest } from '../models/CreateCheckoutSessionCustomerVerificationRequest.js';
export { makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest } from '../models/CreateCheckoutSessionGiftCardPurchaseVerificationRequest.js';
export { makeCreateCheckoutSessionRequest } from '../models/CreateCheckoutSessionRequest.js';
export { makeCreateCheckoutSessionSavePaymentMethodVerificationRequest } from '../models/CreateCheckoutSessionSavePaymentMethodVerificationRequest.js';
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
export { makeGiftCardCustomAmountBounds } from '../models/GiftCardCustomAmountBounds.js';
export { makeGiftCardProductConfiguration } from '../models/GiftCardProductConfiguration.js';
export { makeLocationCoordinate } from '../models/LocationCoordinate.js';
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
