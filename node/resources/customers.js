import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/customers.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["createCustomer"]:r0,["createCustomerAccessLink"]:r0,["createCustomerAddress"]:r0,["createCustomerDeletionRequest"]:r0,["deleteCustomerAddress"]:r0,["getCustomer"]:r0,["getCustomerAddress"]:r0,["getCustomerDeletionRequest"]:r0,["linkCustomerGuestPurchases"]:r0,["listCustomerAddresses"]:r0,["listCustomers"]:r0,["revokeCustomerSessions"]:r0,["setDefaultCustomerAddress"]:r0,["updateCustomer"]:r0,["updateCustomerAddress"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.customers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomer", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomer", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomer", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createAccessLink: async (customer_id, params, options) => this.#runtime.request("createCustomerAccessLink", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerAccessLink", result, path))),
      createAccessLinkWithResponse: async (customer_id, params, options) => this.#runtime.request("createCustomerAccessLink", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      createAddress: async (customer_id, params, options) => this.#runtime.request("createCustomerAddress", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerAddress", result, path))),
      createAddressWithResponse: async (customer_id, params, options) => this.#runtime.request("createCustomerAddress", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createDeletionRequest: async (params, options) => this.#runtime.request("createCustomerDeletionRequest", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerDeletionRequest", result, path))),
      createDeletionRequestWithResponse: async (params, options) => this.#runtime.request("createCustomerDeletionRequest", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      deleteAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("deleteCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCustomerAddress", result, path))),
      deleteAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("deleteCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (customer_id, params, options) => this.#runtime.request("getCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomer", result, path))),
      getWithResponse: async (customer_id, params, options) => this.#runtime.request("getCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("getCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomerAddress", result, path))),
      getAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("getCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [], false, false, params), options).then(_sdkResponse),
      getDeletionRequest: async (customer_deletion_request_id, params, options) => this.#runtime.request("getCustomerDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomerDeletionRequest", result, path))),
      getDeletionRequestWithResponse: async (customer_deletion_request_id, params, options) => this.#runtime.request("getCustomerDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], false, false, params), options).then(_sdkResponse),
      linkGuestPurchases: async (customer_id, params, options) => this.#runtime.request("linkCustomerGuestPurchases", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("linkCustomerGuestPurchases", result, path))),
      linkGuestPurchasesWithResponse: async (customer_id, params, options) => this.#runtime.request("linkCustomerGuestPurchases", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      listAddresses: async (customer_id, params, options) => this.#runtime.request("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomerAddresses", result, path))),
      listAddressesWithResponse: async (customer_id, params, options) => this.#runtime.request("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listAddressesPages: (customer_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCustomerAddresses", result, path)),
      listAddressesPagesWithResponse: (customer_id, params, options) => _sdkResponsePages(this.#runtime.pages("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listAddressesItems: (customer_id, params, options) => this.#runtime.items("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listCustomers", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "segment",
  "is_merchant_verified",
  "phone",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomers", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listCustomers", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "segment",
  "is_merchant_verified",
  "phone",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomers", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "segment",
  "is_merchant_verified",
  "phone",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCustomers", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCustomers", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "segment",
  "is_merchant_verified",
  "phone",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCustomers", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "segment",
  "is_merchant_verified",
  "phone",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options),
      revokeSessions: async (customer_id, params, options) => this.#runtime.request("revokeCustomerSessions", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeCustomerSessions", result, path))),
      revokeSessionsWithResponse: async (customer_id, params, options) => this.#runtime.request("revokeCustomerSessions", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      setDefaultAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("setDefaultCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("setDefaultCustomerAddress", result, path))),
      setDefaultAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("setDefaultCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (customer_id, params, options) => this.#runtime.request("updateCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCustomer", result, path))),
      updateWithResponse: async (customer_id, params, options) => this.#runtime.request("updateCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("updateCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCustomerAddress", result, path))),
      updateAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("updateCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddressRequest } from '../models/AddressRequest.js';
export { makeCreateCustomerAddressRequest } from '../models/CreateCustomerAddressRequest.js';
export { makeCreateCustomerDeletionRequest } from '../models/CreateCustomerDeletionRequest.js';
export { makeCreateCustomerRequest } from '../models/CreateCustomerRequest.js';
export { makeDocumentTaxID } from '../models/DocumentTaxID.js';
export { makeLinkCustomerGuestPurchasesRequest } from '../models/LinkCustomerGuestPurchasesRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeSetDefaultCustomerAddressRequest } from '../models/SetDefaultCustomerAddressRequest.js';
export { makeTaxIdentityPatch } from '../models/TaxIdentityPatch.js';
export { makeTaxIdentityRequest } from '../models/TaxIdentityRequest.js';
export { makeUpdateCustomerAddressRequest } from '../models/UpdateCustomerAddressRequest.js';
export { makeUpdateCustomerRequest } from '../models/UpdateCustomerRequest.js';
