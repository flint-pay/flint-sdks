import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/me.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelMeReturn"]:r0,["cancelMeSubscription"]:r0,["changeMeSubscriptionBillingInterval"]:r0,["changeMeSubscriptionDelivery"]:r0,["changeMeSubscriptionPaymentMethod"]:r0,["changeMeSubscriptionQuantity"]:r0,["confirmMeEmailChangeRequest"]:r0,["createMeAddress"]:r0,["createMeDeletionRequest"]:r0,["createMeEmailChangeRequest"]:r0,["createMeFlintWalletStoreSetup"]:r0,["createMeInvoiceCheckoutSession"]:r0,["createMePaymentMethod"]:r0,["createMeReturn"]:r0,["createMeReturnPreview"]:r0,["createMeReturnResolutionCheckoutSession"]:r0,["createMeSubscriptionPaymentRetry"]:r0,["createMeSubscriptionPreview"]:r0,["deleteMeAddress"]:r0,["deleteMePaymentMethod"]:r0,["getMe"]:r0,["getMeAddress"]:r0,["getMeCreditNote"]:r0,["getMeCreditNotePDF"]:r0,["getMeDeletionRequest"]:r0,["getMeEmailPreferences"]:r0,["getMeFulfillment"]:r0,["getMeGiftCard"]:r0,["getMeInvoice"]:r0,["getMeInvoicePDF"]:r0,["getMeOrder"]:r0,["getMePackage"]:r0,["getMePayment"]:r0,["getMePaymentMethod"]:r0,["getMeRefund"]:r0,["getMeReturn"]:r0,["getMeReturnResolution"]:r0,["getMeShipment"]:r0,["getMeSubscription"]:r0,["getMeSubscriptionPaymentRetry"]:r0,["listMeAddresses"]:r0,["listMeCreditNotes"]:r0,["listMeDeletionRequests"]:r0,["listMeFlintWalletPaymentMethods"]:r0,["listMeFulfillmentEvents"]:r0,["listMeFulfillments"]:r0,["listMeGiftCards"]:r0,["listMeGiftCardTransactions"]:r0,["listMeInvoices"]:r0,["listMeOrderActivities"]:r0,["listMeOrders"]:r0,["listMePackages"]:r0,["listMePaymentMethods"]:r0,["listMePayments"]:r0,["listMeRefunds"]:r0,["listMeReturns"]:r0,["listMeShipments"]:r0,["listMeSubscriptionPaymentRetries"]:r0,["listMeSubscriptions"]:r0,["pauseMeSubscription"]:r0,["reactivateMeSubscription"]:r0,["removeMeGiftCard"]:r0,["renewMeSubscription"]:r0,["resumeMeSubscription"]:r0,["revokeMeSession"]:r0,["saveMeGiftCard"]:r0,["sendMeOrderReceipt"]:r0,["setDefaultMeAddress"]:r0,["skipMeSubscriptionCycle"]:r0,["updateMe"]:r0,["updateMeAddress"]:r0,["updateMeEmailPreferences"]:r0,["updateMeSubscription"]:r0,["updateMeSubscriptionLineItem"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.me = Object.freeze({
      cancelReturn: async (return_id, params, options) => this.#runtime.request("cancelMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelMeReturn", result, path))),
      cancelReturnWithResponse: async (return_id, params, options) => this.#runtime.request("cancelMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      cancelSubscription: async (subscription_id, params, options) => this.#runtime.request("cancelMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelMeSubscription", result, path))),
      cancelSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("cancelMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      changeSubscriptionBillingInterval: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionBillingInterval", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeMeSubscriptionBillingInterval", result, path))),
      changeSubscriptionBillingIntervalWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionBillingInterval", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      changeSubscriptionDelivery: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionDelivery", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeMeSubscriptionDelivery", result, path))),
      changeSubscriptionDeliveryWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionDelivery", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      changeSubscriptionPaymentMethod: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeMeSubscriptionPaymentMethod", result, path))),
      changeSubscriptionPaymentMethodWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      changeSubscriptionQuantity: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionQuantity", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeMeSubscriptionQuantity", result, path))),
      changeSubscriptionQuantityWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionQuantity", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      confirmEmailChangeRequest: async (email_change_request_id, params, options) => this.#runtime.request("confirmMeEmailChangeRequest", _sdkRequestInput([
  "email_change_request_id"
], [email_change_request_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmMeEmailChangeRequest", result, path))),
      confirmEmailChangeRequestWithResponse: async (email_change_request_id, params, options) => this.#runtime.request("confirmMeEmailChangeRequest", _sdkRequestInput([
  "email_change_request_id"
], [email_change_request_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createAddress: async (params, options) => this.#runtime.request("createMeAddress", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeAddress", result, path))),
      createAddressWithResponse: async (params, options) => this.#runtime.request("createMeAddress", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createDeletionRequest: async (params, options) => this.#runtime.request("createMeDeletionRequest", _sdkRequestInput([], [], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeDeletionRequest", result, path))),
      createDeletionRequestWithResponse: async (params, options) => this.#runtime.request("createMeDeletionRequest", _sdkRequestInput([], [], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      createEmailChangeRequest: async (params, options) => this.#runtime.request("createMeEmailChangeRequest", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeEmailChangeRequest", result, path))),
      createEmailChangeRequestWithResponse: async (params, options) => this.#runtime.request("createMeEmailChangeRequest", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createFlintWalletStoreSetup: async (id, params, options) => this.#runtime.request("createMeFlintWalletStoreSetup", _sdkRequestInput([
  "id"
], [id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeFlintWalletStoreSetup", result, path))),
      createFlintWalletStoreSetupWithResponse: async (id, params, options) => this.#runtime.request("createMeFlintWalletStoreSetup", _sdkRequestInput([
  "id"
], [id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      createInvoiceCheckoutSession: async (invoice_id, params, options) => this.#runtime.request("createMeInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeInvoiceCheckoutSession", result, path))),
      createInvoiceCheckoutSessionWithResponse: async (invoice_id, params, options) => this.#runtime.request("createMeInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      savePaymentMethod: async (params, options) => this.#runtime.request("createMePaymentMethod", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMePaymentMethod", result, path))),
      savePaymentMethodWithResponse: async (params, options) => this.#runtime.request("createMePaymentMethod", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createReturn: async (params, options) => this.#runtime.request("createMeReturn", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeReturn", result, path))),
      createReturnWithResponse: async (params, options) => this.#runtime.request("createMeReturn", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createReturnPreview: async (params, options) => this.#runtime.request("createMeReturnPreview", _sdkRequestInput([], [], [], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeReturnPreview", result, path))),
      createReturnPreviewWithResponse: async (params, options) => this.#runtime.request("createMeReturnPreview", _sdkRequestInput([], [], [], true, true, params), options).then(_sdkResponse),
      createReturnResolutionCheckoutSession: async (return_resolution_id, params, options) => this.#runtime.request("createMeReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeReturnResolutionCheckoutSession", result, path))),
      createReturnResolutionCheckoutSessionWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("createMeReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      createSubscriptionPaymentRetry: async (subscription_id, params, options) => this.#runtime.request("createMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeSubscriptionPaymentRetry", result, path))),
      createSubscriptionPaymentRetryWithResponse: async (subscription_id, params, options) => this.#runtime.request("createMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      createSubscriptionPreview: (input = {}, options) => this.#runtime.request("createMeSubscriptionPreview", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeSubscriptionPreview", result, path))),
      createSubscriptionPreviewWithResponse: (input = {}, options) => this.#runtime.request("createMeSubscriptionPreview", input, options).then(_sdkResponse),
      deleteAddress: async (customer_address_id, params, options) => this.#runtime.request("deleteMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteMeAddress", result, path))),
      deleteAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("deleteMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      removePaymentMethod: async (payment_method_id, params, options) => this.#runtime.request("deleteMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteMePaymentMethod", result, path))),
      removePaymentMethodWithResponse: async (payment_method_id, params, options) => this.#runtime.request("deleteMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (params, options) => this.#runtime.request("getMe", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMe", result, path))),
      getWithResponse: async (params, options) => this.#runtime.request("getMe", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      getAddress: async (customer_address_id, params, options) => this.#runtime.request("getMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeAddress", result, path))),
      getAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("getMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [], false, false, params), options).then(_sdkResponse),
      getCreditNote: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNote", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeCreditNote", result, path))),
      getCreditNoteWithResponse: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNote", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [], false, false, params), options).then(_sdkResponse),
      getCreditNotePDF: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNotePDF", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [], false, false, params), options),
      getDeletionRequest: async (customer_deletion_request_id, params, options) => this.#runtime.request("getMeDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeDeletionRequest", result, path))),
      getDeletionRequestWithResponse: async (customer_deletion_request_id, params, options) => this.#runtime.request("getMeDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], false, false, params), options).then(_sdkResponse),
      getEmailPreferences: async (params, options) => this.#runtime.request("getMeEmailPreferences", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeEmailPreferences", result, path))),
      getEmailPreferencesWithResponse: async (params, options) => this.#runtime.request("getMeEmailPreferences", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      getFulfillment: async (fulfillment_id, params, options) => this.#runtime.request("getMeFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeFulfillment", result, path))),
      getFulfillmentWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("getMeFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [], false, false, params), options).then(_sdkResponse),
      getGiftCard: async (gift_card_id, params, options) => this.#runtime.request("getMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeGiftCard", result, path))),
      getGiftCardWithResponse: async (gift_card_id, params, options) => this.#runtime.request("getMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], false, false, params), options).then(_sdkResponse),
      getInvoice: async (invoice_id, params, options) => this.#runtime.request("getMeInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeInvoice", result, path))),
      getInvoiceWithResponse: async (invoice_id, params, options) => this.#runtime.request("getMeInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], false, false, params), options).then(_sdkResponse),
      getInvoicePDF: async (invoice_id, params, options) => this.#runtime.request("getMeInvoicePDF", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], false, false, params), options),
      getOrder: async (order_id, params, options) => this.#runtime.request("getMeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeOrder", result, path))),
      getOrderWithResponse: async (order_id, params, options) => this.#runtime.request("getMeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [], false, false, params), options).then(_sdkResponse),
      getPackage: async (package_id, params, options) => this.#runtime.request("getMePackage", _sdkRequestInput([
  "package_id"
], [package_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMePackage", result, path))),
      getPackageWithResponse: async (package_id, params, options) => this.#runtime.request("getMePackage", _sdkRequestInput([
  "package_id"
], [package_id], [], false, false, params), options).then(_sdkResponse),
      getPayment: async (payment_intent_id, params, options) => this.#runtime.request("getMePayment", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMePayment", result, path))),
      getPaymentWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("getMePayment", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [], false, false, params), options).then(_sdkResponse),
      getPaymentMethod: async (payment_method_id, params, options) => this.#runtime.request("getMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMePaymentMethod", result, path))),
      getPaymentMethodWithResponse: async (payment_method_id, params, options) => this.#runtime.request("getMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [], false, false, params), options).then(_sdkResponse),
      getRefund: async (refund_id, params, options) => this.#runtime.request("getMeRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeRefund", result, path))),
      getRefundWithResponse: async (refund_id, params, options) => this.#runtime.request("getMeRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [], false, false, params), options).then(_sdkResponse),
      getReturn: async (return_id, params, options) => this.#runtime.request("getMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeReturn", result, path))),
      getReturnWithResponse: async (return_id, params, options) => this.#runtime.request("getMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], false, false, params), options).then(_sdkResponse),
      getReturnResolution: async (return_resolution_id, params, options) => this.#runtime.request("getMeReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeReturnResolution", result, path))),
      getReturnResolutionWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("getMeReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [], false, false, params), options).then(_sdkResponse),
      getShipment: async (shipment_id, params, options) => this.#runtime.request("getMeShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeShipment", result, path))),
      getShipmentWithResponse: async (shipment_id, params, options) => this.#runtime.request("getMeShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [], false, false, params), options).then(_sdkResponse),
      getSubscription: async (subscription_id, params, options) => this.#runtime.request("getMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeSubscription", result, path))),
      getSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("getMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], false, false, params), options).then(_sdkResponse),
      getSubscriptionPaymentRetry: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeSubscriptionPaymentRetry", result, path))),
      getSubscriptionPaymentRetryWithResponse: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [], false, false, params), options).then(_sdkResponse),
      listAddresses: async (params, options) => this.#runtime.request("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeAddresses", result, path))),
      listAddressesWithResponse: async (params, options) => this.#runtime.request("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listAddressesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeAddresses", result, path)),
      listAddressesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listAddressesItems: (params, options) => this.#runtime.items("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options),
      listCreditNotes: async (invoice_id, params, options) => this.#runtime.request("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeCreditNotes", result, path))),
      listCreditNotesWithResponse: async (invoice_id, params, options) => this.#runtime.request("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listCreditNotesPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeCreditNotes", result, path)),
      listCreditNotesPagesWithResponse: (invoice_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listCreditNotesItems: (invoice_id, params, options) => this.#runtime.items("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options),
      listDeletionRequests: async (params, options) => this.#runtime.request("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeDeletionRequests", result, path))),
      listDeletionRequestsWithResponse: async (params, options) => this.#runtime.request("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listDeletionRequestsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeDeletionRequests", result, path)),
      listDeletionRequestsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options)),
      listDeletionRequestsItems: (params, options) => this.#runtime.items("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options),
      listFlintWalletPaymentMethods: async (params, options) => this.#runtime.request("listMeFlintWalletPaymentMethods", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeFlintWalletPaymentMethods", result, path))),
      listFlintWalletPaymentMethodsWithResponse: async (params, options) => this.#runtime.request("listMeFlintWalletPaymentMethods", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      listFulfillmentEvents: async (params, options) => this.#runtime.request("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeFulfillmentEvents", result, path))),
      listFulfillmentEventsWithResponse: async (params, options) => this.#runtime.request("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listFulfillmentEventsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeFulfillmentEvents", result, path)),
      listFulfillmentEventsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params), options)),
      listFulfillmentEventsItems: (params, options) => this.#runtime.items("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params), options),
      listFulfillments: async (params, options) => this.#runtime.request("listMeFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "type",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeFulfillments", result, path))),
      listFulfillmentsWithResponse: async (params, options) => this.#runtime.request("listMeFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "type",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction"
], false, false, params), options).then(_sdkResponse),
      listFulfillmentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "type",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeFulfillments", result, path)),
      listFulfillmentsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "type",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction"
], false, false, params), options)),
      listFulfillmentsItems: (params, options) => this.#runtime.items("listMeFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "type",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction"
], false, false, params), options),
      listGiftCards: async (params, options) => this.#runtime.request("listMeGiftCards", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeGiftCards", result, path))),
      listGiftCardsWithResponse: async (params, options) => this.#runtime.request("listMeGiftCards", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listGiftCardsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeGiftCards", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeGiftCards", result, path)),
      listGiftCardsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeGiftCards", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listGiftCardsItems: (params, options) => this.#runtime.items("listMeGiftCards", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options),
      listGiftCardTransactions: async (gift_card_id, params, options) => this.#runtime.request("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeGiftCardTransactions", result, path))),
      listGiftCardTransactionsWithResponse: async (gift_card_id, params, options) => this.#runtime.request("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listGiftCardTransactionsPages: (gift_card_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeGiftCardTransactions", result, path)),
      listGiftCardTransactionsPagesWithResponse: (gift_card_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listGiftCardTransactionsItems: (gift_card_id, params, options) => this.#runtime.items("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params), options),
      listInvoices: async (params, options) => this.#runtime.request("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeInvoices", result, path))),
      listInvoicesWithResponse: async (params, options) => this.#runtime.request("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction"
], false, false, params), options).then(_sdkResponse),
      listInvoicesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeInvoices", result, path)),
      listInvoicesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction"
], false, false, params), options)),
      listInvoicesItems: (params, options) => this.#runtime.items("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction"
], false, false, params), options),
      listOrderActivities: async (order_id, params, options) => this.#runtime.request("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeOrderActivities", result, path))),
      listOrderActivitiesWithResponse: async (order_id, params, options) => this.#runtime.request("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options).then(_sdkResponse),
      listOrderActivitiesPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeOrderActivities", result, path)),
      listOrderActivitiesPagesWithResponse: (order_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options)),
      listOrderActivitiesItems: (order_id, params, options) => this.#runtime.items("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options),
      listOrders: async (params, options) => this.#runtime.request("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeOrders", result, path))),
      listOrdersWithResponse: async (params, options) => this.#runtime.request("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(_sdkResponse),
      listOrdersPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeOrders", result, path)),
      listOrdersPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options)),
      listOrdersItems: (params, options) => this.#runtime.items("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options),
      listPackages: async (params, options) => this.#runtime.request("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMePackages", result, path))),
      listPackagesWithResponse: async (params, options) => this.#runtime.request("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before"
], false, false, params), options).then(_sdkResponse),
      listPackagesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMePackages", result, path)),
      listPackagesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before"
], false, false, params), options)),
      listPackagesItems: (params, options) => this.#runtime.items("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before"
], false, false, params), options),
      listPaymentMethods: async (params, options) => this.#runtime.request("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMePaymentMethods", result, path))),
      listPaymentMethodsWithResponse: async (params, options) => this.#runtime.request("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params), options).then(_sdkResponse),
      listPaymentMethodsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMePaymentMethods", result, path)),
      listPaymentMethodsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params), options)),
      listPaymentMethodsItems: (params, options) => this.#runtime.items("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params), options),
      listPayments: async (params, options) => this.#runtime.request("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "payment_flow",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMePayments", result, path))),
      listPaymentsWithResponse: async (params, options) => this.#runtime.request("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "payment_flow",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(_sdkResponse),
      listPaymentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "payment_flow",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMePayments", result, path)),
      listPaymentsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "payment_flow",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options)),
      listPaymentsItems: (params, options) => this.#runtime.items("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "payment_flow",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options),
      listRefunds: async (params, options) => this.#runtime.request("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "min_amount",
  "max_amount",
  "currency",
  "return_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeRefunds", result, path))),
      listRefundsWithResponse: async (params, options) => this.#runtime.request("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "min_amount",
  "max_amount",
  "currency",
  "return_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(_sdkResponse),
      listRefundsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "min_amount",
  "max_amount",
  "currency",
  "return_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeRefunds", result, path)),
      listRefundsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "min_amount",
  "max_amount",
  "currency",
  "return_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options)),
      listRefundsItems: (params, options) => this.#runtime.items("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "min_amount",
  "max_amount",
  "currency",
  "return_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options),
      listReturns: async (params, options) => this.#runtime.request("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "idempotency_key",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeReturns", result, path))),
      listReturnsWithResponse: async (params, options) => this.#runtime.request("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "idempotency_key",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before"
], false, false, params), options).then(_sdkResponse),
      listReturnsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "idempotency_key",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeReturns", result, path)),
      listReturnsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "idempotency_key",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before"
], false, false, params), options)),
      listReturnsItems: (params, options) => this.#runtime.items("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "idempotency_key",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before"
], false, false, params), options),
      listShipments: async (params, options) => this.#runtime.request("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeShipments", result, path))),
      listShipmentsWithResponse: async (params, options) => this.#runtime.request("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before"
], false, false, params), options).then(_sdkResponse),
      listShipmentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeShipments", result, path)),
      listShipmentsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before"
], false, false, params), options)),
      listShipmentsItems: (params, options) => this.#runtime.items("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before"
], false, false, params), options),
      listSubscriptionPaymentRetries: async (subscription_id, params, options) => this.#runtime.request("listMeSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeSubscriptionPaymentRetries", result, path))),
      listSubscriptionPaymentRetriesWithResponse: async (subscription_id, params, options) => this.#runtime.request("listMeSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(_sdkResponse),
      listSubscriptionPaymentRetriesPages: (subscription_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeSubscriptionPaymentRetries", result, path)),
      listSubscriptionPaymentRetriesPagesWithResponse: (subscription_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options)),
      listSubscriptionPaymentRetriesItems: (subscription_id, params, options) => this.#runtime.items("listMeSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options),
      listSubscriptions: async (params, options) => this.#runtime.request("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "cancel_at_period_end",
  "delivery_method_id",
  "hold_reason",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeSubscriptions", result, path))),
      listSubscriptionsWithResponse: async (params, options) => this.#runtime.request("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "cancel_at_period_end",
  "delivery_method_id",
  "hold_reason",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention"
], false, false, params), options).then(_sdkResponse),
      listSubscriptionsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "cancel_at_period_end",
  "delivery_method_id",
  "hold_reason",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeSubscriptions", result, path)),
      listSubscriptionsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "cancel_at_period_end",
  "delivery_method_id",
  "hold_reason",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention"
], false, false, params), options)),
      listSubscriptionsItems: (params, options) => this.#runtime.items("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "cancel_at_period_end",
  "delivery_method_id",
  "hold_reason",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention"
], false, false, params), options),
      pauseSubscription: async (subscription_id, params, options) => this.#runtime.request("pauseMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("pauseMeSubscription", result, path))),
      pauseSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("pauseMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      reactivateSubscription: async (subscription_id, params, options) => this.#runtime.request("reactivateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reactivateMeSubscription", result, path))),
      reactivateSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("reactivateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      removeGiftCard: async (gift_card_id, params, options) => this.#runtime.request("removeMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeMeGiftCard", result, path))),
      removeGiftCardWithResponse: async (gift_card_id, params, options) => this.#runtime.request("removeMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      renewSubscription: async (subscription_id, params, options) => this.#runtime.request("renewMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("renewMeSubscription", result, path))),
      renewSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("renewMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      resumeSubscription: async (subscription_id, params, options) => this.#runtime.request("resumeMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resumeMeSubscription", result, path))),
      resumeSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("resumeMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      revokeSession: async (params, options) => this.#runtime.request("revokeMeSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeMeSession", result, path))),
      revokeSessionWithResponse: async (params, options) => this.#runtime.request("revokeMeSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      saveGiftCard: async (params, options) => this.#runtime.request("saveMeGiftCard", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("saveMeGiftCard", result, path))),
      saveGiftCardWithResponse: async (params, options) => this.#runtime.request("saveMeGiftCard", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      sendOrderReceipt: async (order_id, params, options) => this.#runtime.request("sendMeOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendMeOrderReceipt", result, path))),
      sendOrderReceiptWithResponse: async (order_id, params, options) => this.#runtime.request("sendMeOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      setDefaultAddress: async (customer_address_id, params, options) => this.#runtime.request("setDefaultMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("setDefaultMeAddress", result, path))),
      setDefaultAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("setDefaultMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      skipSubscriptionCycle: async (subscription_id, params, options) => this.#runtime.request("skipMeSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("skipMeSubscriptionCycle", result, path))),
      skipSubscriptionCycleWithResponse: async (subscription_id, params, options) => this.#runtime.request("skipMeSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updateMe", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMe", result, path))),
      updateWithResponse: async (params, options) => this.#runtime.request("updateMe", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateAddress: async (customer_address_id, params, options) => this.#runtime.request("updateMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMeAddress", result, path))),
      updateAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("updateMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateEmailPreferences: async (params, options) => this.#runtime.request("updateMeEmailPreferences", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMeEmailPreferences", result, path))),
      updateEmailPreferencesWithResponse: async (params, options) => this.#runtime.request("updateMeEmailPreferences", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateSubscription: async (subscription_id, params, options) => this.#runtime.request("updateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMeSubscription", result, path))),
      updateSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("updateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateSubscriptionLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("updateMeSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMeSubscriptionLineItem", result, path))),
      updateSubscriptionLineItemWithResponse: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("updateMeSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddressRequest } from '../models/AddressRequest.js';
export { makeBuyerCreateReturnPreviewRequest } from '../models/BuyerCreateReturnPreviewRequest.js';
export { makeBuyerCreateReturnRequest } from '../models/BuyerCreateReturnRequest.js';
export { makeBuyerCreateReturnResolutionPreviewRequest } from '../models/BuyerCreateReturnResolutionPreviewRequest.js';
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeBuyerReturnReplacementLineItemInputBundle } from '../models/BuyerReturnReplacementLineItemInputBundle.js';
export { makeBuyerReturnReplacementLineItemInputVariant } from '../models/BuyerReturnReplacementLineItemInputVariant.js';
export { makeBuyerReturnReplacementLineItemRequest } from '../models/BuyerReturnReplacementLineItemRequest.js';
export { makeCancelReturnRequest } from '../models/CancelReturnRequest.js';
export { makeCancelSubscriptionRequest } from '../models/CancelSubscriptionRequest.js';
export { makeChangeMeSubscriptionBillingIntervalRequest } from '../models/ChangeMeSubscriptionBillingIntervalRequest.js';
export { makeChangeMeSubscriptionDeliveryRequest } from '../models/ChangeMeSubscriptionDeliveryRequest.js';
export { makeChangeMeSubscriptionQuantityRequest } from '../models/ChangeMeSubscriptionQuantityRequest.js';
export { makeChangeSubscriptionPaymentMethodRequest } from '../models/ChangeSubscriptionPaymentMethodRequest.js';
export { makeCheckoutBuyerFields } from '../models/CheckoutBuyerFields.js';
export { makeCheckoutPromotionConfig } from '../models/CheckoutPromotionConfig.js';
export { makeCheckoutRedirectsRequest } from '../models/CheckoutRedirectsRequest.js';
export { makeCheckoutTipConfig } from '../models/CheckoutTipConfig.js';
export { makeConfigurationVersionRequest } from '../models/ConfigurationVersionRequest.js';
export { makeConfirmEmailChangeRequest } from '../models/ConfirmEmailChangeRequest.js';
export { makeConfirmReturnResolutionRequest } from '../models/ConfirmReturnResolutionRequest.js';
export { makeCreateCustomerAddressRequest } from '../models/CreateCustomerAddressRequest.js';
export { makeCreateEmailChangeRequest } from '../models/CreateEmailChangeRequest.js';
export { makeCreateMeSubscriptionPreviewRequest } from '../models/CreateMeSubscriptionPreviewRequest.js';
export { makeCreateReturnEligibilityPreviewRequest } from '../models/CreateReturnEligibilityPreviewRequest.js';
export { makeCreditNoteCorrectionRequest } from '../models/CreditNoteCorrectionRequest.js';
export { makeCreditNoteCorrectionRequestAmount } from '../models/CreditNoteCorrectionRequestAmount.js';
export { makeCreditNoteCorrectionRequestQuantity } from '../models/CreditNoteCorrectionRequestQuantity.js';
export { makeDeliveryAddressRequest } from '../models/DeliveryAddressRequest.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliverySelectionRecipientRequest } from '../models/DeliverySelectionRecipientRequest.js';
export { makeDeliveryWindowRequest } from '../models/DeliveryWindowRequest.js';
export { makeDimensions } from '../models/Dimensions.js';
export { makeDocumentTaxID } from '../models/DocumentTaxID.js';
export { makeGetOrCreateReturnResolutionCheckoutSessionRequest } from '../models/GetOrCreateReturnResolutionCheckoutSessionRequest.js';
export { makeGiftCardCustomAmountBounds } from '../models/GiftCardCustomAmountBounds.js';
export { makeGiftCardProductConfiguration } from '../models/GiftCardProductConfiguration.js';
export { makeImageRequest } from '../models/ImageRequest.js';
export { makeInvoiceCheckoutSessionRequest } from '../models/InvoiceCheckoutSessionRequest.js';
export { makeInvoiceLateFeePolicy } from '../models/InvoiceLateFeePolicy.js';
export { makeInvoiceLateFeePolicyFixed } from '../models/InvoiceLateFeePolicyFixed.js';
export { makeInvoiceLateFeePolicyPercentage } from '../models/InvoiceLateFeePolicyPercentage.js';
export { makeInvoicePaymentTermCalculation } from '../models/InvoicePaymentTermCalculation.js';
export { makeInvoicePaymentTermCalculationDayOfMonth } from '../models/InvoicePaymentTermCalculationDayOfMonth.js';
export { makeInvoicePaymentTermCalculationDayOfNextMonth } from '../models/InvoicePaymentTermCalculationDayOfNextMonth.js';
export { makeInvoicePaymentTermCalculationDaysAfterMonthEnd } from '../models/InvoicePaymentTermCalculationDaysAfterMonthEnd.js';
export { makeInvoicePaymentTermCalculationNetDays } from '../models/InvoicePaymentTermCalculationNetDays.js';
export { makeInvoicePaymentTermCalculationOnReceipt } from '../models/InvoicePaymentTermCalculationOnReceipt.js';
export { makeInvoiceScheduleAmountSpecification } from '../models/InvoiceScheduleAmountSpecification.js';
export { makeInvoiceScheduleAmountSpecificationFixed } from '../models/InvoiceScheduleAmountSpecificationFixed.js';
export { makeInvoiceScheduleAmountSpecificationPercentage } from '../models/InvoiceScheduleAmountSpecificationPercentage.js';
export { makeInvoiceScheduleAmountSpecificationRemainingBalance } from '../models/InvoiceScheduleAmountSpecificationRemainingBalance.js';
export { makeMerchantAccountSessionCreateRequest } from '../models/MerchantAccountSessionCreateRequest.js';
export { makeMerchantAccountSessionRefreshRequest } from '../models/MerchantAccountSessionRefreshRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeOrderCalculatedChargeTax } from '../models/OrderCalculatedChargeTax.js';
export { makeOrderCalculatedLineItemTax } from '../models/OrderCalculatedLineItemTax.js';
export { makeOrderDeliveryDestinationAddressRequest } from '../models/OrderDeliveryDestinationAddressRequest.js';
export { makeOrderLineItemTax } from '../models/OrderLineItemTax.js';
export { makePauseSubscriptionRequest } from '../models/PauseSubscriptionRequest.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makePromotionRecurrence } from '../models/PromotionRecurrence.js';
export { makePromotionRecurrenceForever } from '../models/PromotionRecurrenceForever.js';
export { makePromotionRecurrenceOnce } from '../models/PromotionRecurrenceOnce.js';
export { makePromotionRecurrenceRepeating } from '../models/PromotionRecurrenceRepeating.js';
export { makeRenewSubscriptionRequest } from '../models/RenewSubscriptionRequest.js';
export { makeResourceVersionRequest } from '../models/ResourceVersionRequest.js';
export { makeReturnEligibilityLineItemRequest } from '../models/ReturnEligibilityLineItemRequest.js';
export { makeReturnEligibilitySelection } from '../models/ReturnEligibilitySelection.js';
export { makeReturnEligibilitySelectionAllRemainingFulfilled } from '../models/ReturnEligibilitySelectionAllRemainingFulfilled.js';
export { makeReturnEligibilitySelectionLineItems } from '../models/ReturnEligibilitySelectionLineItems.js';
export { makeReturnLineItemRequest } from '../models/ReturnLineItemRequest.js';
export { makeReturnResolutionLineItemRequest } from '../models/ReturnResolutionLineItemRequest.js';
export { makeSaveMeGiftCardRequest } from '../models/SaveMeGiftCardRequest.js';
export { makeSaveMeGiftCardRequestCode } from '../models/SaveMeGiftCardRequestCode.js';
export { makeSaveMeGiftCardRequestRecipientAccess } from '../models/SaveMeGiftCardRequestRecipientAccess.js';
export { makeSaveMePaymentMethodRequest } from '../models/SaveMePaymentMethodRequest.js';
export { makeSetDefaultCustomerAddressRequest } from '../models/SetDefaultCustomerAddressRequest.js';
export { makeSkipMeSubscriptionCycleRequest } from '../models/SkipMeSubscriptionCycleRequest.js';
export { makeSubscriptionDeliveryDestinationInputAddress } from '../models/SubscriptionDeliveryDestinationInputAddress.js';
export { makeSubscriptionDeliveryDestinationInputCustomerAddress } from '../models/SubscriptionDeliveryDestinationInputCustomerAddress.js';
export { makeSubscriptionDeliveryDestinationRequest } from '../models/SubscriptionDeliveryDestinationRequest.js';
export { makeSubscriptionDeliveryRequest } from '../models/SubscriptionDeliveryRequest.js';
export { makeSubscriptionIntervalOption } from '../models/SubscriptionIntervalOption.js';
export { makeTaxCalculationRequest } from '../models/TaxCalculationRequest.js';
export { makeTaxComponentRequest } from '../models/TaxComponentRequest.js';
export { makeTaxJurisdiction } from '../models/TaxJurisdiction.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateCustomerAddressRequest } from '../models/UpdateCustomerAddressRequest.js';
export { makeUpdateCustomerEmailPreferencesRequest } from '../models/UpdateCustomerEmailPreferencesRequest.js';
export { makeUpdateMerchantRequest } from '../models/UpdateMerchantRequest.js';
export { makeUpdateMeRequest } from '../models/UpdateMeRequest.js';
export { makeUpdateMeSubscriptionLineItemRequest } from '../models/UpdateMeSubscriptionLineItemRequest.js';
export { makeUpdateMeSubscriptionRequest } from '../models/UpdateMeSubscriptionRequest.js';
export { makeWeight } from '../models/Weight.js';
