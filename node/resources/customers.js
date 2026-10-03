import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/customers.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';

const _sdkDescriptors = new DescriptorSource(settings, {["createCustomer"]:r0,["createCustomerAddress"]:r0,["createCustomerDeletionRequest"]:r0,["deleteCustomerAddress"]:r0,["getCustomer"]:r0,["getCustomerAddress"]:r0,["getCustomerDeletionRequest"]:r0,["listCustomerAddresses"]:r0,["listCustomers"]:r0,["revokeCustomerSessions"]:r0,["setDefaultCustomerAddress"]:r0,["updateCustomer"]:r0,["updateCustomerAddress"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.customers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomer", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomer", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createAddress: async (customer_id, params, options) => this.#runtime.request("createCustomerAddress", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createAddressWithResponse: async (customer_id, params, options) => this.#runtime.request("createCustomerAddress", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createDeletionRequest: async (customer_id, params, options) => this.#runtime.request("createCustomerDeletionRequest", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createDeletionRequestWithResponse: async (customer_id, params, options) => this.#runtime.request("createCustomerDeletionRequest", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      deleteAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("deleteCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("deleteCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (customer_id, params, options) => this.#runtime.request("getCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (customer_id, params, options) => this.#runtime.request("getCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("getCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("getCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getDeletionRequest: async (customer_id, customer_deletion_request_id, params, options) => this.#runtime.request("getCustomerDeletionRequest", _sdkRequestInput([
  "customer_id",
  "customer_deletion_request_id"
], [customer_id, customer_deletion_request_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getDeletionRequestWithResponse: async (customer_id, customer_deletion_request_id, params, options) => this.#runtime.request("getCustomerDeletionRequest", _sdkRequestInput([
  "customer_id",
  "customer_deletion_request_id"
], [customer_id, customer_deletion_request_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAddresses: async (customer_id, params, options) => this.#runtime.request("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listAddressesWithResponse: async (customer_id, params, options) => this.#runtime.request("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAddressesPages: (customer_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listAddressesPagesWithResponse: (customer_id, params, options) => _sdkResponsePages(this.#runtime.pages("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listAddressesItems: (customer_id, params, options) => this.#runtime.items("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listCustomers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listCustomers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCustomers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCustomers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options),
      revokeSessions: async (customer_id, params, options) => this.#runtime.request("revokeCustomerSessions", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      revokeSessionsWithResponse: async (customer_id, params, options) => this.#runtime.request("revokeCustomerSessions", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      setDefaultAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("setDefaultCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      setDefaultAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("setDefaultCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (customer_id, params, options) => this.#runtime.request("updateCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (customer_id, params, options) => this.#runtime.request("updateCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("updateCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("updateCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeCustomerResponse } from '../models/CustomerResponse.js';
export { makeCustomerAddressResponse } from '../models/CustomerAddressResponse.js';
export { makeCustomerDeletionRequestResponse } from '../models/CustomerDeletionRequestResponse.js';
export { makeActionResponse } from '../models/ActionResponse.js';
export { makeCustomerAddressListResponse } from '../models/CustomerAddressListResponse.js';
export { makeCustomerAddress } from '../models/CustomerAddress.js';
export { makeCustomerListResponse } from '../models/CustomerListResponse.js';
export { makeCustomer } from '../models/Customer.js';
export { makeCustomerSessionsRevocationResponse } from '../models/CustomerSessionsRevocationResponse.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeCustomerDeletionRequest } from '../models/CustomerDeletionRequest.js';
export { makeActionResult } from '../models/ActionResult.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeCardDetails } from '../models/CardDetails.js';
export { makeCustomerReceivableBalance } from '../models/CustomerReceivableBalance.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeDocumentTaxID } from '../models/DocumentTaxID.js';
export { makeCustomerSessionsRevocation } from '../models/CustomerSessionsRevocation.js';
