import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/me.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelMeReturn"]:r0,["cancelMeSubscription"]:r0,["changeMeSubscriptionPaymentMethod"]:r0,["confirmMeEmailChangeRequest"]:r0,["createMeAddress"]:r0,["createMeDeletionRequest"]:r0,["createMeEmailChangeRequest"]:r0,["createMeFlintWalletStoreSetup"]:r0,["createMeInvoiceCheckoutSession"]:r0,["createMeReturn"]:r0,["createMeReturnPreview"]:r0,["createMeReturnResolutionCheckoutSession"]:r0,["createMeSubscriptionPaymentRetry"]:r0,["deleteMeAddress"]:r0,["getMe"]:r0,["getMeAddress"]:r0,["getMeCreditNote"]:r0,["getMeCreditNotePDF"]:r0,["getMeDeletionRequest"]:r0,["getMeEmailPreferences"]:r0,["getMeGiftCard"]:r0,["getMeInvoice"]:r0,["getMeInvoicePDF"]:r0,["getMeOrder"]:r0,["getMePaymentMethod"]:r0,["getMeReturn"]:r0,["getMeSubscription"]:r0,["getMeSubscriptionPaymentRetry"]:r0,["listMeAddresses"]:r0,["listMeCreditNotes"]:r0,["listMeDeletionRequests"]:r0,["listMeFlintWalletPaymentMethods"]:r0,["listMeFulfillments"]:r0,["listMeGiftCards"]:r0,["listMeGiftCardTransactions"]:r0,["listMeInvoices"]:r0,["listMeOrderActivities"]:r0,["listMeOrders"]:r0,["listMePackages"]:r0,["listMePaymentMethods"]:r0,["listMePayments"]:r0,["listMeRefunds"]:r0,["listMeReturns"]:r0,["listMeShipments"]:r0,["listMeSubscriptions"]:r0,["pauseMeSubscription"]:r0,["reactivateMeSubscription"]:r0,["removeMeGiftCard"]:r0,["removeMePaymentMethod"]:r0,["resumeMeSubscription"]:r0,["saveMeGiftCard"]:r0,["saveMePaymentMethod"]:r0,["sendMeOrderReceipt"]:r0,["setDefaultMeAddress"]:r0,["setDefaultMePaymentMethod"]:r0,["updateMe"]:r0,["updateMeAddress"]:r0,["updateMeEmailPreferences"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.me = Object.freeze({
      cancelReturn: async (return_id, params, options) => this.#runtime.request("cancelMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelReturnWithResponse: async (return_id, params, options) => this.#runtime.request("cancelMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      cancelSubscription: async (subscription_id, params, options) => this.#runtime.request("cancelMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("cancelMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      changeSubscriptionPaymentMethod: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      changeSubscriptionPaymentMethodWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      confirmEmailChangeRequest: async (email_change_request_id, params, options) => this.#runtime.request("confirmMeEmailChangeRequest", _sdkRequestInput([
  "email_change_request_id"
], [email_change_request_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      confirmEmailChangeRequestWithResponse: async (email_change_request_id, params, options) => this.#runtime.request("confirmMeEmailChangeRequest", _sdkRequestInput([
  "email_change_request_id"
], [email_change_request_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createAddress: async (params, options) => this.#runtime.request("createMeAddress", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createAddressWithResponse: async (params, options) => this.#runtime.request("createMeAddress", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createDeletionRequest: async (params, options) => this.#runtime.request("createMeDeletionRequest", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createDeletionRequestWithResponse: async (params, options) => this.#runtime.request("createMeDeletionRequest", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      createEmailChangeRequest: async (params, options) => this.#runtime.request("createMeEmailChangeRequest", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createEmailChangeRequestWithResponse: async (params, options) => this.#runtime.request("createMeEmailChangeRequest", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createFlintWalletStoreSetup: async (id, params, options) => this.#runtime.request("createMeFlintWalletStoreSetup", _sdkRequestInput([
  "id"
], [id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createFlintWalletStoreSetupWithResponse: async (id, params, options) => this.#runtime.request("createMeFlintWalletStoreSetup", _sdkRequestInput([
  "id"
], [id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      createInvoiceCheckoutSession: async (invoice_id, params, options) => this.#runtime.request("createMeInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createInvoiceCheckoutSessionWithResponse: async (invoice_id, params, options) => this.#runtime.request("createMeInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      createReturn: async (params, options) => this.#runtime.request("createMeReturn", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createReturnWithResponse: async (params, options) => this.#runtime.request("createMeReturn", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createReturnPreview: async (params, options) => this.#runtime.request("createMeReturnPreview", _sdkRequestInput([], [], [
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createReturnPreviewWithResponse: async (params, options) => this.#runtime.request("createMeReturnPreview", _sdkRequestInput([], [], [
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createReturnResolutionCheckoutSession: async (return_resolution_id, params, options) => this.#runtime.request("createMeReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createReturnResolutionCheckoutSessionWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("createMeReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      createSubscriptionPaymentRetry: async (subscription_id, params, options) => this.#runtime.request("createMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createSubscriptionPaymentRetryWithResponse: async (subscription_id, params, options) => this.#runtime.request("createMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      deleteAddress: async (customer_address_id, params, options) => this.#runtime.request("deleteMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("deleteMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (params, options) => this.#runtime.request("getMe", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (params, options) => this.#runtime.request("getMe", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getAddress: async (customer_address_id, params, options) => this.#runtime.request("getMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("getMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getCreditNote: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNote", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getCreditNoteWithResponse: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNote", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getCreditNotePDF: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNotePDF", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [
  "Flint-Version"
], false, false, params), options),
      getDeletionRequest: async (customer_deletion_request_id, params, options) => this.#runtime.request("getMeDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getDeletionRequestWithResponse: async (customer_deletion_request_id, params, options) => this.#runtime.request("getMeDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getEmailPreferences: async (params, options) => this.#runtime.request("getMeEmailPreferences", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getEmailPreferencesWithResponse: async (params, options) => this.#runtime.request("getMeEmailPreferences", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getGiftCard: async (gift_card_id, params, options) => this.#runtime.request("getMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getGiftCardWithResponse: async (gift_card_id, params, options) => this.#runtime.request("getMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getInvoice: async (invoice_id, params, options) => this.#runtime.request("getMeInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getInvoiceWithResponse: async (invoice_id, params, options) => this.#runtime.request("getMeInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getInvoicePDF: async (invoice_id, params, options) => this.#runtime.request("getMeInvoicePDF", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Version"
], false, false, params), options),
      getOrder: async (order_id, params, options) => this.#runtime.request("getMeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getOrderWithResponse: async (order_id, params, options) => this.#runtime.request("getMeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPaymentMethod: async (payment_method_id, params, options) => this.#runtime.request("getMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPaymentMethodWithResponse: async (payment_method_id, params, options) => this.#runtime.request("getMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getReturn: async (return_id, params, options) => this.#runtime.request("getMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getReturnWithResponse: async (return_id, params, options) => this.#runtime.request("getMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getSubscription: async (subscription_id, params, options) => this.#runtime.request("getMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("getMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getSubscriptionPaymentRetry: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getSubscriptionPaymentRetryWithResponse: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAddresses: async (params, options) => this.#runtime.request("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listAddressesWithResponse: async (params, options) => this.#runtime.request("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAddressesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listAddressesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listAddressesItems: (params, options) => this.#runtime.items("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      listCreditNotes: async (invoice_id, params, options) => this.#runtime.request("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listCreditNotesWithResponse: async (invoice_id, params, options) => this.#runtime.request("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listCreditNotesPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listCreditNotesPagesWithResponse: (invoice_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listCreditNotesItems: (invoice_id, params, options) => this.#runtime.items("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      listDeletionRequests: async (params, options) => this.#runtime.request("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listDeletionRequestsWithResponse: async (params, options) => this.#runtime.request("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listDeletionRequestsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listDeletionRequestsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listDeletionRequestsItems: (params, options) => this.#runtime.items("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      listFlintWalletPaymentMethods: async (params, options) => this.#runtime.request("listMeFlintWalletPaymentMethods", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listFlintWalletPaymentMethodsWithResponse: async (params, options) => this.#runtime.request("listMeFlintWalletPaymentMethods", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listFulfillments: async (params, options) => this.#runtime.request("listMeFulfillments", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listFulfillmentsWithResponse: async (params, options) => this.#runtime.request("listMeFulfillments", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listFulfillmentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeFulfillments", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listFulfillmentsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeFulfillments", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listFulfillmentsItems: (params, options) => this.#runtime.items("listMeFulfillments", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      listGiftCards: async (params, options) => this.#runtime.request("listMeGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listGiftCardsWithResponse: async (params, options) => this.#runtime.request("listMeGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listGiftCardsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listGiftCardsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listGiftCardsItems: (params, options) => this.#runtime.items("listMeGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      listGiftCardTransactions: async (gift_card_id, params, options) => this.#runtime.request("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listGiftCardTransactionsWithResponse: async (gift_card_id, params, options) => this.#runtime.request("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listGiftCardTransactionsPages: (gift_card_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listGiftCardTransactionsPagesWithResponse: (gift_card_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listGiftCardTransactionsItems: (gift_card_id, params, options) => this.#runtime.items("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      listInvoices: async (params, options) => this.#runtime.request("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listInvoicesWithResponse: async (params, options) => this.#runtime.request("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listInvoicesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options), []),
      listInvoicesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options)),
      listInvoicesItems: (params, options) => this.#runtime.items("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options),
      listOrderActivities: async (order_id, params, options) => this.#runtime.request("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listOrderActivitiesWithResponse: async (order_id, params, options) => this.#runtime.request("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listOrderActivitiesPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options), []),
      listOrderActivitiesPagesWithResponse: (order_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options)),
      listOrderActivitiesItems: (order_id, params, options) => this.#runtime.items("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options),
      listOrders: async (params, options) => this.#runtime.request("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listOrdersWithResponse: async (params, options) => this.#runtime.request("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listOrdersPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listOrdersPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listOrdersItems: (params, options) => this.#runtime.items("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      listPackages: async (params, options) => this.#runtime.request("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPackagesWithResponse: async (params, options) => this.#runtime.request("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPackagesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPackagesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listPackagesItems: (params, options) => this.#runtime.items("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      listPaymentMethods: async (params, options) => this.#runtime.request("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPaymentMethodsWithResponse: async (params, options) => this.#runtime.request("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPaymentMethodsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "Flint-Version"
], false, false, params), options), []),
      listPaymentMethodsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "Flint-Version"
], false, false, params), options)),
      listPaymentMethodsItems: (params, options) => this.#runtime.items("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "Flint-Version"
], false, false, params), options),
      listPayments: async (params, options) => this.#runtime.request("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPaymentsWithResponse: async (params, options) => this.#runtime.request("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPaymentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPaymentsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listPaymentsItems: (params, options) => this.#runtime.items("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      listRefunds: async (params, options) => this.#runtime.request("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listRefundsWithResponse: async (params, options) => this.#runtime.request("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listRefundsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listRefundsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listRefundsItems: (params, options) => this.#runtime.items("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      listReturns: async (params, options) => this.#runtime.request("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listReturnsWithResponse: async (params, options) => this.#runtime.request("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listReturnsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options), []),
      listReturnsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options)),
      listReturnsItems: (params, options) => this.#runtime.items("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options),
      listShipments: async (params, options) => this.#runtime.request("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listShipmentsWithResponse: async (params, options) => this.#runtime.request("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listShipmentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listShipmentsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listShipmentsItems: (params, options) => this.#runtime.items("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      listSubscriptions: async (params, options) => this.#runtime.request("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listSubscriptionsWithResponse: async (params, options) => this.#runtime.request("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listSubscriptionsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "Flint-Version"
], false, false, params), options), []),
      listSubscriptionsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "Flint-Version"
], false, false, params), options)),
      listSubscriptionsItems: (params, options) => this.#runtime.items("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "Flint-Version"
], false, false, params), options),
      pauseSubscription: async (subscription_id, params, options) => this.#runtime.request("pauseMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      pauseSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("pauseMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      reactivateSubscription: async (subscription_id, params, options) => this.#runtime.request("reactivateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      reactivateSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("reactivateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      removeGiftCard: async (gift_card_id, params, options) => this.#runtime.request("removeMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeGiftCardWithResponse: async (gift_card_id, params, options) => this.#runtime.request("removeMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      removePaymentMethod: async (payment_method_id, params, options) => this.#runtime.request("removeMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removePaymentMethodWithResponse: async (payment_method_id, params, options) => this.#runtime.request("removeMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      resumeSubscription: async (subscription_id, params, options) => this.#runtime.request("resumeMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      resumeSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("resumeMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      saveGiftCard: async (params, options) => this.#runtime.request("saveMeGiftCard", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      saveGiftCardWithResponse: async (params, options) => this.#runtime.request("saveMeGiftCard", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      savePaymentMethod: async (params, options) => this.#runtime.request("saveMePaymentMethod", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      savePaymentMethodWithResponse: async (params, options) => this.#runtime.request("saveMePaymentMethod", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      sendOrderReceipt: async (order_id, params, options) => this.#runtime.request("sendMeOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      sendOrderReceiptWithResponse: async (order_id, params, options) => this.#runtime.request("sendMeOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      setDefaultAddress: async (customer_address_id, params, options) => this.#runtime.request("setDefaultMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      setDefaultAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("setDefaultMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      setDefaultPaymentMethod: async (payment_method_id, params, options) => this.#runtime.request("setDefaultMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      setDefaultPaymentMethodWithResponse: async (payment_method_id, params, options) => this.#runtime.request("setDefaultMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updateMe", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (params, options) => this.#runtime.request("updateMe", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateAddress: async (customer_address_id, params, options) => this.#runtime.request("updateMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("updateMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateEmailPreferences: async (params, options) => this.#runtime.request("updateMeEmailPreferences", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateEmailPreferencesWithResponse: async (params, options) => this.#runtime.request("updateMeEmailPreferences", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeAddReturnLineItemResponse } from '../models/AddReturnLineItemResponse.js';
export { makeSubscriptionResponse } from '../models/SubscriptionResponse.js';
export { makeEmailChangeRequestResponse } from '../models/EmailChangeRequestResponse.js';
export { makeCustomerAddressResponse } from '../models/CustomerAddressResponse.js';
export { makeCustomerDeletionRequestResponse } from '../models/CustomerDeletionRequestResponse.js';
export { makeMeFlintWalletStoreSetupResponse } from '../models/MeFlintWalletStoreSetupResponse.js';
export { makeBuyerInvoiceCheckoutSessionResponse } from '../models/BuyerInvoiceCheckoutSessionResponse.js';
export { makeCreateReturnPreviewResponse } from '../models/CreateReturnPreviewResponse.js';
export { makeCheckoutSessionLaunchResponse } from '../models/CheckoutSessionLaunchResponse.js';
export { makeBuyerSubscriptionPaymentRetryResponse } from '../models/BuyerSubscriptionPaymentRetryResponse.js';
export { makeActionResponse } from '../models/ActionResponse.js';
export { makeCustomerResponse } from '../models/CustomerResponse.js';
export { makeBuyerCreditNoteResponse } from '../models/BuyerCreditNoteResponse.js';
export { makeCustomerEmailPreferencesResponse } from '../models/CustomerEmailPreferencesResponse.js';
export { makeBuyerGiftCardResponse } from '../models/BuyerGiftCardResponse.js';
export { makeBuyerInvoiceResponse } from '../models/BuyerInvoiceResponse.js';
export { makeOrderResponse } from '../models/OrderResponse.js';
export { makePaymentMethodResponse } from '../models/PaymentMethodResponse.js';
export { makeCustomerAddressListResponse } from '../models/CustomerAddressListResponse.js';
export { makeCustomerAddress } from '../models/CustomerAddress.js';
export { makeBuyerCreditNoteListResponse } from '../models/BuyerCreditNoteListResponse.js';
export { makeBuyerCreditNote } from '../models/BuyerCreditNote.js';
export { makeCustomerDeletionRequestListResponse } from '../models/CustomerDeletionRequestListResponse.js';
export { makeCustomerDeletionRequest } from '../models/CustomerDeletionRequest.js';
export { makeMeFlintWalletCardListResponse } from '../models/MeFlintWalletCardListResponse.js';
export { makeFulfillmentListResponse } from '../models/FulfillmentListResponse.js';
export { makeFulfillment } from '../models/Fulfillment.js';
export { makeBuyerGiftCardListResponse } from '../models/BuyerGiftCardListResponse.js';
export { makeBuyerGiftCard } from '../models/BuyerGiftCard.js';
export { makeBuyerGiftCardTransactionListResponse } from '../models/BuyerGiftCardTransactionListResponse.js';
export { makeBuyerGiftCardTransaction } from '../models/BuyerGiftCardTransaction.js';
export { makeBuyerInvoiceListResponse } from '../models/BuyerInvoiceListResponse.js';
export { makeBuyerInvoice } from '../models/BuyerInvoice.js';
export { makeOrderActivityListResponse } from '../models/OrderActivityListResponse.js';
export { makeOrderActivity } from '../models/OrderActivity.js';
export { makeOrderListResponse } from '../models/OrderListResponse.js';
export { makeOrder } from '../models/Order.js';
export { makePackageListResponse } from '../models/PackageListResponse.js';
export { makePackage } from '../models/Package.js';
export { makePaymentMethodListResponse } from '../models/PaymentMethodListResponse.js';
export { makePaymentMethod } from '../models/PaymentMethod.js';
export { makePaymentIntentListResponse } from '../models/PaymentIntentListResponse.js';
export { makePaymentIntent } from '../models/PaymentIntent.js';
export { makeBuyerRefundListResponse } from '../models/BuyerRefundListResponse.js';
export { makeBuyerRefund } from '../models/BuyerRefund.js';
export { makeListReturnsResponse } from '../models/ListReturnsResponse.js';
export { makeReturnResource } from '../models/ReturnResource.js';
export { makeShipmentListResponse } from '../models/ShipmentListResponse.js';
export { makeShipment } from '../models/Shipment.js';
export { makeSubscriptionListResponse } from '../models/SubscriptionListResponse.js';
export { makeSubscription } from '../models/Subscription.js';
export { makeSavePaymentMethodResponse } from '../models/SavePaymentMethodResponse.js';
export { makeMeFlintWalletCard } from '../models/MeFlintWalletCard.js';
export { makeMeFlintWalletStoreSetup } from '../models/MeFlintWalletStoreSetup.js';
export { makeMerchant } from '../models/Merchant.js';
export { makeMerchantAccountSession } from '../models/MerchantAccountSession.js';
export { makeMerchantAccountSessionClientSession } from '../models/MerchantAccountSessionClientSession.js';
export { makeMerchantAccountSessionCreateRequest } from '../models/MerchantAccountSessionCreateRequest.js';
export { makeMerchantAccountSessionEffectivePolicy } from '../models/MerchantAccountSessionEffectivePolicy.js';
export { makeMerchantAccountSessionRefreshRequest } from '../models/MerchantAccountSessionRefreshRequest.js';
export { makeMerchantAccountSessionResponse } from '../models/MerchantAccountSessionResponse.js';
export { makeMerchantAccountSessionStripe } from '../models/MerchantAccountSessionStripe.js';
export { makeMerchantAccountSessionStripeAccountSession } from '../models/MerchantAccountSessionStripeAccountSession.js';
export { makeMerchantAccountSessionStripeCollectionOptions } from '../models/MerchantAccountSessionStripeCollectionOptions.js';
export { makeMerchantAccountSessionStripeComponent } from '../models/MerchantAccountSessionStripeComponent.js';
export { makeMerchantAccountSessionStripeRequirements } from '../models/MerchantAccountSessionStripeRequirements.js';
export { makeMerchantBillingBalance } from '../models/MerchantBillingBalance.js';
export { makeMerchantBillingBalanceListResponse } from '../models/MerchantBillingBalanceListResponse.js';
export { makeMerchantBillingBalanceResponse } from '../models/MerchantBillingBalanceResponse.js';
export { makeMerchantReadinessAxis } from '../models/MerchantReadinessAxis.js';
export { makeMerchantReadinessRequirements } from '../models/MerchantReadinessRequirements.js';
export { makeMerchantResponse } from '../models/MerchantResponse.js';
export { makeMerchantSubscriptionInvoice } from '../models/MerchantSubscriptionInvoice.js';
export { makeMerchantSubscriptionInvoiceLine } from '../models/MerchantSubscriptionInvoiceLine.js';
export { makeMerchantSubscriptionInvoiceListResponse } from '../models/MerchantSubscriptionInvoiceListResponse.js';
export { makeMerchantSubscriptionInvoiceResponse } from '../models/MerchantSubscriptionInvoiceResponse.js';
export { makeMerchantWebhookEnvelope } from '../models/MerchantWebhookEnvelope.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeEmailChangeRequest } from '../models/EmailChangeRequest.js';
export { makeBuyerInvoiceCheckoutSessionResult } from '../models/BuyerInvoiceCheckoutSessionResult.js';
export { makeCheckoutSession } from '../models/CheckoutSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePaymentAttemptGiftCardRedemption } from '../models/PaymentAttemptGiftCardRedemption.js';
export { makePaymentAttemptPaymentIntent } from '../models/PaymentAttemptPaymentIntent.js';
export { makePaymentErrorSummary } from '../models/PaymentErrorSummary.js';
export { makeErrorRemediation } from '../models/ErrorRemediation.js';
export { makePendingPaymentAction } from '../models/PendingPaymentAction.js';
export { makeStripePaymentClientAction } from '../models/StripePaymentClientAction.js';
export { makeCheckoutCustomTextWriteConfig } from '../models/CheckoutCustomTextWriteConfig.js';
export { makeCheckoutCustomerConfig } from '../models/CheckoutCustomerConfig.js';
export { makePrefilledCustomerInfo } from '../models/PrefilledCustomerInfo.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeCheckoutDeliveryPinnedDependency } from '../models/CheckoutDeliveryPinnedDependency.js';
export { makeCheckoutExpirationConfig } from '../models/CheckoutExpirationConfig.js';
export { makeDeliveryQuoteChoiceGroupResource } from '../models/DeliveryQuoteChoiceGroupResource.js';
export { makeDeliveryCandidateOutcomeResource } from '../models/DeliveryCandidateOutcomeResource.js';
export { makeDeliveryAddressAdvisoryResource } from '../models/DeliveryAddressAdvisoryResource.js';
export { makeDeliveryAddressRequest } from '../models/DeliveryAddressRequest.js';
export { makeDeliveryInputRequirement } from '../models/DeliveryInputRequirement.js';
export { makeDeliveryInputConstraint } from '../models/DeliveryInputConstraint.js';
export { makeDeliveryWindowResource } from '../models/DeliveryWindowResource.js';
export { makeDeliveryOptionProjection } from '../models/DeliveryOptionProjection.js';
export { makeDeliveryArrivalEstimate } from '../models/DeliveryArrivalEstimate.js';
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeDeliveryPlan } from '../models/DeliveryPlan.js';
export { makeDeliveryQuoteExecutionLegResource } from '../models/DeliveryQuoteExecutionLegResource.js';
export { makeDeliveryShipmentDetails } from '../models/DeliveryShipmentDetails.js';
export { makeDeliveryPickupDetails } from '../models/DeliveryPickupDetails.js';
export { makeDeliveryLocationSummaryResource } from '../models/DeliveryLocationSummaryResource.js';
export { makeDeliveryAddressResource } from '../models/DeliveryAddressResource.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliveryQuoteLineItemResource } from '../models/DeliveryQuoteLineItemResource.js';
export { makeDeliveryMerchantDiagnostic } from '../models/DeliveryMerchantDiagnostic.js';
export { makeDeliveryEligibilityMismatch } from '../models/DeliveryEligibilityMismatch.js';
export { makeBuyerDeliveryQuoteChoiceGroupResource } from '../models/BuyerDeliveryQuoteChoiceGroupResource.js';
export { makeBuyerDeliveryInputRequirementResource } from '../models/BuyerDeliveryInputRequirementResource.js';
export { makeBuyerDeliveryOptionResource } from '../models/BuyerDeliveryOptionResource.js';
export { makeLegalSettings } from '../models/LegalSettings.js';
export { makePricingAmounts } from '../models/PricingAmounts.js';
export { makeSettlementAmounts } from '../models/SettlementAmounts.js';
export { makeSignedMoney } from '../models/SignedMoney.js';
export { makePaymentCollectionStripe } from '../models/PaymentCollectionStripe.js';
export { makeSelectableOrderPaymentIntent } from '../models/SelectableOrderPaymentIntent.js';
export { makePaymentCollection } from '../models/PaymentCollection.js';
export { makeExpandedPaymentIntentSummary } from '../models/ExpandedPaymentIntentSummary.js';
export { makePaymentSourceSummary } from '../models/PaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../models/PaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../models/PaymentSourceCardSummary.js';
export { makeCheckoutPaymentConfig } from '../models/CheckoutPaymentConfig.js';
export { makeCheckoutProblemResource } from '../models/CheckoutProblemResource.js';
export { makeCheckoutPromotionConfig } from '../models/CheckoutPromotionConfig.js';
export { makeCheckoutRedirectsConfig } from '../models/CheckoutRedirectsConfig.js';
export { makeCheckoutTaxConfig } from '../models/CheckoutTaxConfig.js';
export { makeThemeConfig } from '../models/ThemeConfig.js';
export { makeCheckoutTipConfig } from '../models/CheckoutTipConfig.js';
export { makeHostedCheckout } from '../models/HostedCheckout.js';
export { makeInvoicePaymentAttempt } from '../models/InvoicePaymentAttempt.js';
export { makeCreateReturnPreviewData } from '../models/CreateReturnPreviewData.js';
export { makeReturnEligibilityCheck } from '../models/ReturnEligibilityCheck.js';
export { makeReturnEligibilityCheckLineItem } from '../models/ReturnEligibilityCheckLineItem.js';
export { makeBundleComponent } from '../models/BundleComponent.js';
export { makeSelectedProductOption } from '../models/SelectedProductOption.js';
export { makeReturnLineItemEligibility } from '../models/ReturnLineItemEligibility.js';
export { makeReturnLineItemDecisionProposal } from '../models/ReturnLineItemDecisionProposal.js';
export { makeReturnPolicyAdjustmentProposal } from '../models/ReturnPolicyAdjustmentProposal.js';
export { makeImage } from '../models/Image.js';
export { makeOrderLineItemModifier } from '../models/OrderLineItemModifier.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeReturnReasonSummary } from '../models/ReturnReasonSummary.js';
export { makeReturnPolicyEvaluation } from '../models/ReturnPolicyEvaluation.js';
export { makeReturnPolicyEvaluationLineItem } from '../models/ReturnPolicyEvaluationLineItem.js';
export { makeReturnEligibilitySelection } from '../models/ReturnEligibilitySelection.js';
export { makeReturnLineItemRequest } from '../models/ReturnLineItemRequest.js';
export { makeReturnResolutionPreview } from '../models/ReturnResolutionPreview.js';
export { makeReturnResolutionAdjustment } from '../models/ReturnResolutionAdjustment.js';
export { makeReturnActor } from '../models/ReturnActor.js';
export { makeReturnResolutionLineItem } from '../models/ReturnResolutionLineItem.js';
export { makeReturnReplacementLineItem } from '../models/ReturnReplacementLineItem.js';
export { makeReturnResolutionWarning } from '../models/ReturnResolutionWarning.js';
export { makeCheckoutSessionLaunchResult } from '../models/CheckoutSessionLaunchResult.js';
export { makeCheckoutAccess } from '../models/CheckoutAccess.js';
export { makeBuyerSubscriptionPaymentRetry } from '../models/BuyerSubscriptionPaymentRetry.js';
export { makeSubscriptionPaymentRetryFailure } from '../models/SubscriptionPaymentRetryFailure.js';
export { makeActionResult } from '../models/ActionResult.js';
export { makeCustomer } from '../models/Customer.js';
export { makeCardDetails } from '../models/CardDetails.js';
export { makeCustomerReceivableBalance } from '../models/CustomerReceivableBalance.js';
export { makeDocumentTaxID } from '../models/DocumentTaxID.js';
export { makeCustomerEmailPreferences } from '../models/CustomerEmailPreferences.js';
export { makeCreditNoteLine } from '../models/CreditNoteLine.js';
export { makeFulfillmentChargeLink } from '../models/FulfillmentChargeLink.js';
export { makeDigitalFulfillmentDetails } from '../models/DigitalFulfillmentDetails.js';
export { makeFulfillmentLineItem } from '../models/FulfillmentLineItem.js';
export { makeDeliveryFulfillmentDetails } from '../models/DeliveryFulfillmentDetails.js';
export { makeExpandedPackageSummary } from '../models/ExpandedPackageSummary.js';
export { makePickupFulfillmentDetails } from '../models/PickupFulfillmentDetails.js';
export { makeFulfillmentRecipient } from '../models/FulfillmentRecipient.js';
export { makeServiceFulfillmentDetails } from '../models/ServiceFulfillmentDetails.js';
export { makeExpandedShipmentSummary } from '../models/ExpandedShipmentSummary.js';
export { makeBuyerAction } from '../models/BuyerAction.js';
export { makeBuyerInvoiceLateFee } from '../models/BuyerInvoiceLateFee.js';
export { makeInvoiceLateFeePolicy } from '../models/InvoiceLateFeePolicy.js';
export { makeInvoicePaymentTermCalculation } from '../models/InvoicePaymentTermCalculation.js';
export { makeInvoiceScheduleEntry } from '../models/InvoiceScheduleEntry.js';
export { makeInvoiceScheduleAmountSpecification } from '../models/InvoiceScheduleAmountSpecification.js';
export { makeInvoiceScheduleDue } from '../models/InvoiceScheduleDue.js';
export { makeOrderCharge } from '../models/OrderCharge.js';
export { makeOrderCalculatedChargeTax } from '../models/OrderCalculatedChargeTax.js';
export { makeTaxCalculationRequest } from '../models/TaxCalculationRequest.js';
export { makeTaxComponentRequest } from '../models/TaxComponentRequest.js';
export { makeTaxJurisdiction } from '../models/TaxJurisdiction.js';
export { makeInvoiceDiscount } from '../models/InvoiceDiscount.js';
export { makeInvoiceLineItem } from '../models/InvoiceLineItem.js';
export { makeCategoryReference } from '../models/CategoryReference.js';
export { makeInvoiceTip } from '../models/InvoiceTip.js';
export { makeAppliedDiscount } from '../models/AppliedDiscount.js';
export { makeOrderDeliveryDestinationAddress } from '../models/OrderDeliveryDestinationAddress.js';
export { makeOrderDeliveryDestinationRecipient } from '../models/OrderDeliveryDestinationRecipient.js';
export { makeOrderGiftCardAllocation } from '../models/OrderGiftCardAllocation.js';
export { makeOrderGiftCardSettlement } from '../models/OrderGiftCardSettlement.js';
export { makeOrderGiftCardSelection } from '../models/OrderGiftCardSelection.js';
export { makeOrderLineItem } from '../models/OrderLineItem.js';
export { makeGiftCardProductConfiguration } from '../models/GiftCardProductConfiguration.js';
export { makeGiftCardCustomAmountBounds } from '../models/GiftCardCustomAmountBounds.js';
export { makeGiftCardPurchaseRecipient } from '../models/GiftCardPurchaseRecipient.js';
export { makeLineItemInventoryDemand } from '../models/LineItemInventoryDemand.js';
export { makePurchasedGiftCard } from '../models/PurchasedGiftCard.js';
export { makeOrderCalculatedLineItemTax } from '../models/OrderCalculatedLineItemTax.js';
export { makeRequestedTip } from '../models/RequestedTip.js';
export { makeOrderReturnCreditSettlement } from '../models/OrderReturnCreditSettlement.js';
export { makeSubscriptionPlanLineItem } from '../models/SubscriptionPlanLineItem.js';
export { makeOrderLineItemTax } from '../models/OrderLineItemTax.js';
export { makeOrderTaxExemption } from '../models/OrderTaxExemption.js';
export { makeOrderTaxLocation } from '../models/OrderTaxLocation.js';
export { makeTaxBreakdown } from '../models/TaxBreakdown.js';
export { makeTip } from '../models/Tip.js';
export { makeTipPaymentIntentAllocation } from '../models/TipPaymentIntentAllocation.js';
export { makeTipValueSettlementAllocation } from '../models/TipValueSettlementAllocation.js';
export { makeShippingDimensions } from '../models/ShippingDimensions.js';
export { makeReturnShipmentLineItemAllocation } from '../models/ReturnShipmentLineItemAllocation.js';
export { makeShippingWeight } from '../models/ShippingWeight.js';
export { makePaymentAddOnFee } from '../models/PaymentAddOnFee.js';
export { makeRefundLineItemAllocation } from '../models/RefundLineItemAllocation.js';
export { makeRefundLineItemAdjustmentRefund } from '../models/RefundLineItemAdjustmentRefund.js';
export { makeRefundLineItemAdjustment } from '../models/RefundLineItemAdjustment.js';
export { makeRefundAdjustmentReason } from '../models/RefundAdjustmentReason.js';
export { makeRefundLineItemModifierAllocation } from '../models/RefundLineItemModifierAllocation.js';
export { makeRefundTaxBreakdownRefund } from '../models/RefundTaxBreakdownRefund.js';
export { makePaymentRefund } from '../models/PaymentRefund.js';
export { makeRefundTenderAllocation } from '../models/RefundTenderAllocation.js';
export { makeRefundGiftCardDestination } from '../models/RefundGiftCardDestination.js';
export { makeReturnCompletionBlocker } from '../models/ReturnCompletionBlocker.js';
export { makeReturnFinancialSummary } from '../models/ReturnFinancialSummary.js';
export { makeReturnHandoffRequirement } from '../models/ReturnHandoffRequirement.js';
export { makeReturnHandoffDestination } from '../models/ReturnHandoffDestination.js';
export { makeReturnLineItem } from '../models/ReturnLineItem.js';
export { makeReturnLineItemValue } from '../models/ReturnLineItemValue.js';
export { makeSubscriptionLineItem } from '../models/SubscriptionLineItem.js';
export { makeSubscriptionServiceLocation } from '../models/SubscriptionServiceLocation.js';
export { makeSavePaymentMethodResult } from '../models/SavePaymentMethodResult.js';
export { makeStripeClientSetup } from '../models/StripeClientSetup.js';
export { makeStripeClientSetupStripe } from '../models/StripeClientSetupStripe.js';
export { makeStripeClientAuthority } from '../models/StripeClientAuthority.js';
export { makeBanner } from '../models/Banner.js';
export { makeOnboardingRequirements } from '../models/OnboardingRequirements.js';
