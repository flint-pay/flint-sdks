export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ActionResponse } from '../declarations/ActionResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { Customer } from '../declarations/Customer.js';
import type { CustomerAddress } from '../declarations/CustomerAddress.js';
import type { CustomerAddressListResponse } from '../declarations/CustomerAddressListResponse.js';
import type { CustomerAddressResponse } from '../declarations/CustomerAddressResponse.js';
import type { CustomerDeletionRequestResponse } from '../declarations/CustomerDeletionRequestResponse.js';
import type { CustomerListResponse } from '../declarations/CustomerListResponse.js';
import type { CustomerResponse } from '../declarations/CustomerResponse.js';
import type { CustomerSessionsRevocationResponse } from '../declarations/CustomerSessionsRevocationResponse.js';
import type { CustomersCreateAddressInput } from '../declarations/CustomersCreateAddressInput.js';
import type { CustomersCreateAddressResponse } from '../declarations/CustomersCreateAddressResponse.js';
import type { CustomersCreateDeletionRequestInput } from '../declarations/CustomersCreateDeletionRequestInput.js';
import type { CustomersCreateDeletionRequestResponse } from '../declarations/CustomersCreateDeletionRequestResponse.js';
import type { CustomersCreateInput } from '../declarations/CustomersCreateInput.js';
import type { CustomersCreateResponse } from '../declarations/CustomersCreateResponse.js';
import type { CustomersDeleteAddressInput } from '../declarations/CustomersDeleteAddressInput.js';
import type { CustomersDeleteAddressResponse } from '../declarations/CustomersDeleteAddressResponse.js';
import type { CustomersGetAddressInput } from '../declarations/CustomersGetAddressInput.js';
import type { CustomersGetAddressResponse } from '../declarations/CustomersGetAddressResponse.js';
import type { CustomersGetDeletionRequestInput } from '../declarations/CustomersGetDeletionRequestInput.js';
import type { CustomersGetDeletionRequestResponse } from '../declarations/CustomersGetDeletionRequestResponse.js';
import type { CustomersGetInput } from '../declarations/CustomersGetInput.js';
import type { CustomersGetResponse } from '../declarations/CustomersGetResponse.js';
import type { CustomersListAddressesInput } from '../declarations/CustomersListAddressesInput.js';
import type { CustomersListAddressesResponse } from '../declarations/CustomersListAddressesResponse.js';
import type { CustomersListInput } from '../declarations/CustomersListInput.js';
import type { CustomersListResponse } from '../declarations/CustomersListResponse.js';
import type { CustomersRevokeSessionsInput } from '../declarations/CustomersRevokeSessionsInput.js';
import type { CustomersRevokeSessionsResponse } from '../declarations/CustomersRevokeSessionsResponse.js';
import type { CustomersSetDefaultAddressInput } from '../declarations/CustomersSetDefaultAddressInput.js';
import type { CustomersSetDefaultAddressResponse } from '../declarations/CustomersSetDefaultAddressResponse.js';
import type { CustomersUpdateAddressInput } from '../declarations/CustomersUpdateAddressInput.js';
import type { CustomersUpdateAddressResponse } from '../declarations/CustomersUpdateAddressResponse.js';
import type { CustomersUpdateInput } from '../declarations/CustomersUpdateInput.js';
import type { CustomersUpdateResponse } from '../declarations/CustomersUpdateResponse.js';
import type { DocumentTaxIDInput } from '../declarations/DocumentTaxIDInput.js';
import type { PostalAddressInput } from '../declarations/PostalAddressInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { TaxIdentityPatchInput } from '../declarations/TaxIdentityPatchInput.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface CustomersResource {
    /**
 * Creates a customer for the authenticated merchant.
 * POST /v1/customers
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.create({email: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "billing_address"?: PostalAddressInput; "default_invoice_payment_term_id"?: string; "email": string; "external_reference_id"?: string; "group_id"?: string; "internal_note"?: string; "is_verified"?: boolean; "metadata"?: Record<string, string>; "name"?: string; "phone"?: string; "shipping_address"?: PostalAddressInput; "tax_exempt"?: boolean; "tax_identity"?: TaxIdentityPatchInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CustomerResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "billing_address"?: PostalAddressInput; "default_invoice_payment_term_id"?: string; "email": string; "external_reference_id"?: string; "group_id"?: string; "internal_note"?: string; "is_verified"?: boolean; "metadata"?: Record<string, string>; "name"?: string; "phone"?: string; "shipping_address"?: PostalAddressInput; "tax_exempt"?: boolean; "tax_identity"?: TaxIdentityPatchInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomersCreateResponse>>;
    /**
 * Creates a stable saved address. The first address becomes both the billing and shipping default. A saved default becomes the customer's effective address for the corresponding role.
 * POST /v1/customers/{customer_id}/addresses
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.createAddress("example", {address: {city: "example", country: "US", line1: "example", postal_code: "example", state: "example"}, recipient_name: "example"}, { idempotencyKey: idempotencyKey })
 */
    createAddress(customer_id: InputValue<string>, params: (InputValue<{ "address": PostalAddressInput; "is_default_billing"?: boolean; "is_default_shipping"?: boolean; "label"?: string; "phone"?: string; "recipient_name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CustomerAddressResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createAddressWithResponse(customer_id: InputValue<string>, params: (InputValue<{ "address": PostalAddressInput; "is_default_billing"?: boolean; "is_default_shipping"?: boolean; "label"?: string; "phone"?: string; "recipient_name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomersCreateAddressResponse>>;
    /**
 * Creates or returns the pending tracked deletion request. Required commerce records are retained until the deletion workflow resolves their legal retention requirements.
 * POST /v1/customers/{customer_id}/deletion-requests
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.createDeletionRequest("example", {}, { idempotencyKey: idempotencyKey })
 */
    createDeletionRequest(customer_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CustomerDeletionRequestResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createDeletionRequestWithResponse(customer_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomersCreateDeletionRequestResponse>>;
    /**
 * Deletes a saved address and moves any default designation to the newest remaining address.
 * DELETE /v1/customers/{customer_id}/addresses/{customer_address_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.deleteAddress("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ActionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    deleteAddressWithResponse(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomersDeleteAddressResponse>>;
    /**
 * Returns a single customer by ID.
 * GET /v1/customers/{customer_id}
 * @example
 * client.customers.get("example")
 */
    get(customer_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"default_payment_method" | "receivables">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CustomerResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(customer_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"default_payment_method" | "receivables">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CustomersGetResponse>>;
    /**
 * Returns one saved address owned by the customer.
 * GET /v1/customers/{customer_id}/addresses/{customer_address_id}
 * @example
 * client.customers.getAddress("example", "example")
 */
    getAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CustomerAddressResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getAddressWithResponse(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CustomersGetAddressResponse>>;
    /**
 * Returns the current status of a tracked deletion request.
 * GET /v1/customers/{customer_id}/deletion-requests/{customer_deletion_request_id}
 * @example
 * client.customers.getDeletionRequest("example", "example")
 */
    getDeletionRequest(customer_id: InputValue<string>, customer_deletion_request_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CustomerDeletionRequestResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getDeletionRequestWithResponse(customer_id: InputValue<string>, customer_deletion_request_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CustomersGetDeletionRequestResponse>>;
    /**
 * Lists the customer's saved addresses with billing and shipping default flags.
 * GET /v1/customers/{customer_id}/addresses
 * @example
 * client.customers.listAddresses("example")
 */
    listAddresses(customer_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CustomerAddressListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listAddressesWithResponse(customer_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CustomersListAddressesResponse>>;
    listAddressesPages(customer_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CustomerAddressListResponse>;
    listAddressesPagesWithResponse(customer_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<CustomersListAddressesResponse>>;
    listAddressesItems(customer_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CustomerAddress>;
    /**
 * Returns a paginated list of customers for the authenticated merchant.
 * GET /v1/customers
 * @example
 * client.customers.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "email"?: InputValue<string>; "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expand"?: InputValue<Array<"receivables">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CustomerListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "email"?: InputValue<string>; "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expand"?: InputValue<Array<"receivables">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CustomersListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "email"?: InputValue<string>; "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expand"?: InputValue<Array<"receivables">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CustomerListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "email"?: InputValue<string>; "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expand"?: InputValue<Array<"receivables">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<CustomersListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "email"?: InputValue<string>; "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expand"?: InputValue<Array<"receivables">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Customer>;
    /**
 * Revokes every customer session for one customer in the selected merchant environment. Flint Account buyer sessions remain independent.
 * POST /v1/customers/{customer_id}/sessions/revoke
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.revokeSessions("example", {}, { idempotencyKey: idempotencyKey })
 */
    revokeSessions(customer_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CustomerSessionsRevocationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    revokeSessionsWithResponse(customer_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomersRevokeSessionsResponse>>;
    /**
 * Sets the address as the billing default, shipping default, or both and makes it the customer's effective address for each selected role.
 * POST /v1/customers/{customer_id}/addresses/{customer_address_id}/set-default
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.setDefaultAddress("example", "example", {default_for: "billing"}, { idempotencyKey: idempotencyKey })
 */
    setDefaultAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params: (InputValue<{ "default_for": "billing" | "shipping" | "both"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CustomerAddressResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    setDefaultAddressWithResponse(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params: (InputValue<{ "default_for": "billing" | "shipping" | "both"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomersSetDefaultAddressResponse>>;
    /**
 * Applies a sparse update to a customer. Writing billing_address or shipping_address clears the corresponding saved-address default, so that field remains effective until another saved default is selected.
 * PATCH /v1/customers/{customer_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(customer_id: InputValue<string>, params: (InputValue<({ "billing_address"?: PostalAddressInput; "default_invoice_payment_term_id"?: string; "expected_version"?: string; "external_reference_id"?: string; "group_id"?: string; "internal_note"?: string; "is_verified"?: boolean; "metadata"?: Record<string, string | null> | null; "name"?: string; "phone"?: string; "shipping_address"?: PostalAddressInput; "tax_exempt"?: boolean; "tax_identity"?: (({ "legal_name"?: string | null; "registered_address"?: (({ "city": string; "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; }) | (null)); "tax_ids"?: Array<DocumentTaxIDInput>; }) | (null)); })>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CustomerResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(customer_id: InputValue<string>, params: (InputValue<({ "billing_address"?: PostalAddressInput; "default_invoice_payment_term_id"?: string; "expected_version"?: string; "external_reference_id"?: string; "group_id"?: string; "internal_note"?: string; "is_verified"?: boolean; "metadata"?: Record<string, string | null> | null; "name"?: string; "phone"?: string; "shipping_address"?: PostalAddressInput; "tax_exempt"?: boolean; "tax_identity"?: (({ "legal_name"?: string | null; "registered_address"?: (({ "city": string; "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; }) | (null)); "tax_ids"?: Array<DocumentTaxIDInput>; }) | (null)); })>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomersUpdateResponse>>;
    /**
 * Applies a sparse update to a saved address. Updating a default address also updates the customer's effective address for that role.
 * PATCH /v1/customers/{customer_id}/addresses/{customer_address_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.updateAddress("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    updateAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params: (InputValue<{ "address"?: PostalAddressInput; "label"?: string; "phone"?: string; "recipient_name"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CustomerAddressResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateAddressWithResponse(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params: (InputValue<{ "address"?: PostalAddressInput; "label"?: string; "phone"?: string; "recipient_name"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomersUpdateAddressResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly customers: CustomersResource;
}
export type { PostalAddressInput } from '../declarations/PostalAddressInput.js';
export type { TaxIdentityPatchInput } from '../declarations/TaxIdentityPatchInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CustomerResponse } from '../declarations/CustomerResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { CustomersCreateResponse } from '../declarations/CustomersCreateResponse.js';
export type { CustomerAddressResponse } from '../declarations/CustomerAddressResponse.js';
export type { CustomersCreateAddressResponse } from '../declarations/CustomersCreateAddressResponse.js';
export type { CustomerDeletionRequestResponse } from '../declarations/CustomerDeletionRequestResponse.js';
export type { CustomersCreateDeletionRequestResponse } from '../declarations/CustomersCreateDeletionRequestResponse.js';
export type { ActionResponse } from '../declarations/ActionResponse.js';
export type { CustomersDeleteAddressResponse } from '../declarations/CustomersDeleteAddressResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { CustomersGetResponse } from '../declarations/CustomersGetResponse.js';
export type { CustomersGetAddressResponse } from '../declarations/CustomersGetAddressResponse.js';
export type { CustomersGetDeletionRequestResponse } from '../declarations/CustomersGetDeletionRequestResponse.js';
export type { CustomerAddressListResponse } from '../declarations/CustomerAddressListResponse.js';
export type { CustomersListAddressesResponse } from '../declarations/CustomersListAddressesResponse.js';
export type { CustomerAddress } from '../declarations/CustomerAddress.js';
export type { CustomerListResponse } from '../declarations/CustomerListResponse.js';
export type { CustomersListResponse } from '../declarations/CustomersListResponse.js';
export type { Customer } from '../declarations/Customer.js';
export type { CustomerSessionsRevocationResponse } from '../declarations/CustomerSessionsRevocationResponse.js';
export type { CustomersRevokeSessionsResponse } from '../declarations/CustomersRevokeSessionsResponse.js';
export type { CustomersSetDefaultAddressResponse } from '../declarations/CustomersSetDefaultAddressResponse.js';
export type { DocumentTaxIDInput } from '../declarations/DocumentTaxIDInput.js';
export type { CustomersUpdateResponse } from '../declarations/CustomersUpdateResponse.js';
export type { CustomersUpdateAddressResponse } from '../declarations/CustomersUpdateAddressResponse.js';
export type { CustomersCreateInput } from '../declarations/CustomersCreateInput.js';
export type { CustomersCreateAddressInput } from '../declarations/CustomersCreateAddressInput.js';
export type { CustomersCreateDeletionRequestInput } from '../declarations/CustomersCreateDeletionRequestInput.js';
export type { CustomersDeleteAddressInput } from '../declarations/CustomersDeleteAddressInput.js';
export type { CustomersGetInput } from '../declarations/CustomersGetInput.js';
export type { CustomersGetAddressInput } from '../declarations/CustomersGetAddressInput.js';
export type { CustomersGetDeletionRequestInput } from '../declarations/CustomersGetDeletionRequestInput.js';
export type { CustomersListAddressesInput } from '../declarations/CustomersListAddressesInput.js';
export type { CustomersListInput } from '../declarations/CustomersListInput.js';
export type { CustomersRevokeSessionsInput } from '../declarations/CustomersRevokeSessionsInput.js';
export type { CustomersSetDefaultAddressInput } from '../declarations/CustomersSetDefaultAddressInput.js';
export type { CustomersUpdateInput } from '../declarations/CustomersUpdateInput.js';
export type { CustomersUpdateAddressInput } from '../declarations/CustomersUpdateAddressInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CustomerDeletionRequest } from '../declarations/CustomerDeletionRequest.js';
export type { ActionResult } from '../declarations/ActionResult.js';
export type { PostalAddress } from '../declarations/PostalAddress.js';
export type { CardDetails } from '../declarations/CardDetails.js';
export type { CustomerReceivableBalance } from '../declarations/CustomerReceivableBalance.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { DocumentTaxID } from '../declarations/DocumentTaxID.js';
export type { CustomerSessionsRevocation } from '../declarations/CustomerSessionsRevocation.js';
export type { CreateCustomerRequestInput } from '../declarations/CreateCustomerRequestInput.js';
export type { CreateCustomerAddressRequestInput } from '../declarations/CreateCustomerAddressRequestInput.js';
export type { SetDefaultCustomerAddressRequestInput } from '../declarations/SetDefaultCustomerAddressRequestInput.js';
export type { UpdateCustomerRequestInput } from '../declarations/UpdateCustomerRequestInput.js';
export type { UpdateCustomerAddressRequestInput } from '../declarations/UpdateCustomerAddressRequestInput.js';
export { makeCustomerResponse } from '../declarations/makeCustomerResponse.js';
export { makeCustomerAddressResponse } from '../declarations/makeCustomerAddressResponse.js';
export { makeCustomerDeletionRequestResponse } from '../declarations/makeCustomerDeletionRequestResponse.js';
export { makeActionResponse } from '../declarations/makeActionResponse.js';
export { makeCustomerAddressListResponse } from '../declarations/makeCustomerAddressListResponse.js';
export { makeCustomerAddress } from '../declarations/makeCustomerAddress.js';
export { makeCustomerListResponse } from '../declarations/makeCustomerListResponse.js';
export { makeCustomer } from '../declarations/makeCustomer.js';
export { makeCustomerSessionsRevocationResponse } from '../declarations/makeCustomerSessionsRevocationResponse.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeCustomerDeletionRequest } from '../declarations/makeCustomerDeletionRequest.js';
export { makeActionResult } from '../declarations/makeActionResult.js';
export { makePostalAddress } from '../declarations/makePostalAddress.js';
export { makeCardDetails } from '../declarations/makeCardDetails.js';
export { makeCustomerReceivableBalance } from '../declarations/makeCustomerReceivableBalance.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeDocumentTaxID } from '../declarations/makeDocumentTaxID.js';
export { makeCustomerSessionsRevocation } from '../declarations/makeCustomerSessionsRevocation.js';
