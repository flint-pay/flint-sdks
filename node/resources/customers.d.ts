import type { InputValue } from '../runtime.js';
import type { AccessLink, AccessLinkResponse } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    CreateCustomerAddressRequestInput,
    CreateCustomerDeletionRequestInput,
    CreateCustomerRequestInput
} from '../declarations/types-5.js';
import type {
    Customer,
    CustomerAddress,
    CustomerAddressListResponse,
    CustomerAddressResponse,
    CustomerDeletionRequest,
    CustomerDeletionRequestResponse,
    CustomerListResponse,
    CustomerResponse,
    CustomerSessionsRevocation,
    CustomerSessionsRevocationResponse
} from '../declarations/types-10.js';
import type {
    CustomersCreateAccessLinkInput,
    CustomersCreateAddressInput,
    CustomersCreateDeletionRequestInput,
    CustomersCreateInput,
    CustomersDeleteAddressInput,
    CustomersGetAddressInput,
    CustomersGetDeletionRequestInput,
    CustomersGetInput,
    CustomersLinkGuestPurchasesInput,
    CustomersListAddressesInput,
    CustomersListInput,
    CustomersRevokeSessionsInput,
    CustomersSetDefaultAddressInput,
    CustomersUpdateAddressInput,
    CustomersUpdateInput
} from '../declarations/types-11.js';
import type { GuestPurchaseLink, GuestPurchaseLinkResponse } from '../declarations/types-19.js';
import type { LinkCustomerGuestPurchasesRequestInput } from '../declarations/types-28.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse, SetDefaultCustomerAddressRequestInput } from '../declarations/types-44.js';
import type { UpdateCustomerAddressRequestInput, UpdateCustomerRequestInput } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    CreateCustomerRequestInput,
    CreateCustomerAddressRequestInput,
    CreateCustomerDeletionRequestInput,
    CreateCustomerDeletionRequest
} from '../declarations/types-5.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    Customer,
    CustomerResponse,
    CustomerAddress,
    CustomerAddressResponse,
    CustomerDeletionRequest,
    CustomerDeletionRequestResponse,
    CustomerAddressListResponse,
    CustomerListResponse,
    CustomerSessionsRevocation,
    CustomerSessionsRevocationResponse,
    CustomerReceivables,
    CustomerReceivableBalance
} from '../declarations/types-10.js';
export type { SdkResponse, SetDefaultCustomerAddressRequestInput } from '../declarations/types-44.js';
export type { AccessLink, AccessLinkResponse, AddressRequestInput, AuthMode, Address, AddressRequest } from '../declarations/types-0.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { LinkCustomerGuestPurchasesRequestInput, LinkCustomerGuestPurchasesRequest } from '../declarations/types-28.js';
export type { GuestPurchaseLink, GuestPurchaseLinkResponse } from '../declarations/types-19.js';
export type {
    UpdateCustomerRequestInput,
    UpdateCustomerAddressRequestInput,
    TaxIdentityRequestInput,
    TaxIdentity,
    TaxIdentityPatchInput
} from '../declarations/types-47.js';
export type {
    CustomersCreateInput,
    CustomersCreateAccessLinkInput,
    CustomersCreateAddressInput,
    CustomersCreateDeletionRequestInput,
    CustomersDeleteAddressInput,
    CustomersGetInput,
    CustomersGetAddressInput,
    CustomersGetDeletionRequestInput,
    CustomersLinkGuestPurchasesInput,
    CustomersListAddressesInput,
    CustomersListInput,
    CustomersRevokeSessionsInput,
    CustomersSetDefaultAddressInput,
    CustomersUpdateInput,
    CustomersUpdateAddressInput
} from '../declarations/types-11.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { DocumentTaxIDInput, ExpandedPaymentMethodSummary, DocumentTaxID } from '../declarations/types-16.js';
export type { Credentials } from '../declarations/types-9.js';
export type { CardDetails } from '../declarations/types-3.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { PostalAddressInput } from '../declarations/types-37.js';
export { makeAddressRequest } from '../declarations/types-62.js';
export { makeCreateCustomerAddressRequest, makeCreateCustomerDeletionRequest, makeCreateCustomerRequest } from '../declarations/types-63.js';
export { makeDocumentTaxID } from '../declarations/types-66.js';
export { makeLinkCustomerGuestPurchasesRequest, makeMoneyValue } from '../declarations/types-68.js';
export { makePostalAddress } from '../declarations/types-70.js';
export { makeSetDefaultCustomerAddressRequest } from '../declarations/types-71.js';
export {
    makeTaxIdentityPatch,
    makeTaxIdentityRequest,
    makeUpdateCustomerAddressRequest,
    makeUpdateCustomerRequest
} from '../declarations/types-72.js';
export interface CustomersResource {
    /**
 * Creates a customer for the authenticated merchant.
 * @see reference/customers.md#customerscreate
 * POST /v1/customers
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.create({}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateCustomerRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Customer>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customerscreate
     */
    createWithResponse(params: (InputValue<CreateCustomerRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerResponse>>;
    /**
 * Signs the buyer in to your Flint-hosted customer account as this customer. Works for 15 minutes
 * and one open. The url is a bearer credential. Flint returns it only in this response and in a
 * retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A
 * call with a new key creates another link; earlier links keep working until they expire. Send no
 * request body or an empty object ({}). Requires customers.sessions.write. Idempotency is scoped
 * to the merchant, credential, environment, and this customer's route. A replay returns the
 * original link without extending its lifetime or replenishing its open. Without an
 * Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a
 * result after minting, contact support with X-Request-Id before sending a new request.
 * @see reference/customers.md#customerscreateaccesslink
 * POST /v1/customers/{customer_id}/access-links
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.createAccessLink("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createAccessLink(customer_id: InputValue<string>, params?: (InputValue<{}> | {}) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<AccessLink>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customerscreateaccesslink
     */
    createAccessLinkWithResponse(customer_id: InputValue<string>, params?: (InputValue<{}> | {}) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<AccessLinkResponse>>;
    /**
 * Creates a stable saved address. The address becomes a default only when the request sets
 * is_default_billing or is_default_shipping, or later through set-default, including the
 * customer's first address. A saved default becomes the customer's effective address for the
 * corresponding role.
 * @see reference/customers.md#customerscreateaddress
 * POST /v1/customers/{customer_id}/addresses
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.createAddress("example", {address: {city: "example", country: "US", line1:
 * "example", postal_code: "example", state: "example"}, recipient_name: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    createAddress(customer_id: InputValue<string>, params: (InputValue<CreateCustomerAddressRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomerAddress>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customerscreateaddress
     */
    createAddressWithResponse(customer_id: InputValue<string>, params: (InputValue<CreateCustomerAddressRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerAddressResponse>>;
    /**
 * Creates a deletion request for merchant review, or returns the customer's open request
 * unchanged. No deletion work starts until approval.
 * @see reference/customers.md#customerscreatedeletionrequest
 * POST /v1/customer-deletion-requests
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.createDeletionRequest({customer_id: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    createDeletionRequest(params: (InputValue<CreateCustomerDeletionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomerDeletionRequest>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customerscreatedeletionrequest
     */
    createDeletionRequestWithResponse(params: (InputValue<CreateCustomerDeletionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerDeletionRequestResponse>>;
    /**
 * Deletes a saved address and moves any default designation to the newest remaining address.
 * @see reference/customers.md#customersdeleteaddress
 * DELETE /v1/customers/{customer_id}/addresses/{customer_address_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.deleteAddress("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomerAddress>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customersdeleteaddress
     */
    deleteAddressWithResponse(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerAddressResponse>>;
    /**
 * Returns a single customer by ID.
 * @see reference/customers.md#customersget
 * GET /v1/customers/{customer_id}
 * @example
 * client.customers.get("example")
 */
    get(customer_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"default_payment_method" | "receivables">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Customer>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customersget
     */
    getWithResponse(customer_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"default_payment_method" | "receivables">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CustomerResponse>>;
    /**
 * Returns one saved address owned by the customer.
 * @see reference/customers.md#customersgetaddress
 * GET /v1/customers/{customer_id}/addresses/{customer_address_id}
 * @example
 * client.customers.getAddress("example", "example")
 */
    getAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<CustomerAddress>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customersgetaddress
     */
    getAddressWithResponse(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CustomerAddressResponse>>;
    /**
 * Returns the current status of a tracked deletion request.
 * @see reference/customers.md#customersgetdeletionrequest
 * GET /v1/customer-deletion-requests/{customer_deletion_request_id}
 * @example
 * client.customers.getDeletionRequest("example")
 */
    getDeletionRequest(customer_deletion_request_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<CustomerDeletionRequest>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customersgetdeletionrequest
     */
    getDeletionRequestWithResponse(customer_deletion_request_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CustomerDeletionRequestResponse>>;
    /**
 * Links purchases with the verified email and no customer to the verification's customer in the
 * same merchant environment. Purchases bound to another customer stay with that customer. The
 * verification is single use; use the same Idempotency-Key to retry an uncertain result.
 * @see reference/customers.md#customerslinkguestpurchases
 * POST /v1/customers/{customer_id}/link-guest-purchases
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.linkGuestPurchases("example", {customer_verification_id: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    linkGuestPurchases(customer_id: InputValue<string>, params: (InputValue<LinkCustomerGuestPurchasesRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<GuestPurchaseLink>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customerslinkguestpurchases
     */
    linkGuestPurchasesWithResponse(customer_id: InputValue<string>, params: (InputValue<LinkCustomerGuestPurchasesRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GuestPurchaseLinkResponse>>;
    /**
 * Lists the customer's saved addresses with billing and shipping default flags.
 * @see reference/customers.md#customerslistaddresses
 * GET /v1/customers/{customer_id}/addresses
 * @example
 * client.customers.listAddresses("example")
 */
    listAddresses(customer_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<CustomerAddressListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customerslistaddresses
     */
    listAddressesWithResponse(customer_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CustomerAddressListResponse>>;
    /** Iterate pages lazily.
     * @see reference/customers.md#customerslistaddresses
     */
    listAddressesPages(customer_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CustomerAddressListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/customers.md#customerslistaddresses
     */
    listAddressesPagesWithResponse(customer_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<CustomerAddressListResponse>>;
    /** Iterate items lazily.
     * @see reference/customers.md#customerslistaddresses
     */
    listAddressesItems(customer_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CustomerAddress>;
    /**
 * Returns a paginated list of customers for the authenticated merchant. Without a status filter,
 * returns active and deletion_processing customers; deleted customers appear only when the filter
 * names deleted.
 * @see reference/customers.md#customerslist
 * GET /v1/customers
 * @example
 * client.customers.list()
 */
    list(params?: {
        "status"?: InputValue<Array<"active" | "deletion_processing" | "deleted">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "email"?: InputValue<string>;
        "segment"?: InputValue<string>;
        "is_merchant_verified"?: InputValue<boolean>;
        "phone"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"default_payment_method" | "receivables">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<CustomerListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customerslist
     */
    listWithResponse(params?: {
        "status"?: InputValue<Array<"active" | "deletion_processing" | "deleted">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "email"?: InputValue<string>;
        "segment"?: InputValue<string>;
        "is_merchant_verified"?: InputValue<boolean>;
        "phone"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"default_payment_method" | "receivables">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CustomerListResponse>>;
    /** Iterate pages lazily.
     * @see reference/customers.md#customerslist
     */
    listPages(params?: {
        "status"?: InputValue<Array<"active" | "deletion_processing" | "deleted">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "email"?: InputValue<string>;
        "segment"?: InputValue<string>;
        "is_merchant_verified"?: InputValue<boolean>;
        "phone"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"default_payment_method" | "receivables">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CustomerListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/customers.md#customerslist
     */
    listPagesWithResponse(params?: {
        "status"?: InputValue<Array<"active" | "deletion_processing" | "deleted">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "email"?: InputValue<string>;
        "segment"?: InputValue<string>;
        "is_merchant_verified"?: InputValue<boolean>;
        "phone"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"default_payment_method" | "receivables">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<CustomerListResponse>>;
    /** Iterate items lazily.
     * @see reference/customers.md#customerslist
     */
    listItems(params?: {
        "status"?: InputValue<Array<"active" | "deletion_processing" | "deleted">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "email"?: InputValue<string>;
        "segment"?: InputValue<string>;
        "is_merchant_verified"?: InputValue<boolean>;
        "phone"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"default_payment_method" | "receivables">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Customer>;
    /**
 * Revokes every customer session for one customer in the selected merchant environment. Flint
 * Account buyer sessions remain independent.
 * @see reference/customers.md#customersrevokesessions
 * POST /v1/customers/{customer_id}/sessions/revoke
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.revokeSessions("example", {}, { idempotencyKey: idempotencyKey })
 */
    revokeSessions(customer_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomerSessionsRevocation>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customersrevokesessions
     */
    revokeSessionsWithResponse(customer_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerSessionsRevocationResponse>>;
    /**
 * Sets the address as the billing default, shipping default, or both and makes it the customer's
 * effective address for each selected role.
 * @see reference/customers.md#customerssetdefaultaddress
 * POST /v1/customers/{customer_id}/addresses/{customer_address_id}/set-default
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.setDefaultAddress("example", "example", {default_for: "billing"}, {
 * idempotencyKey: idempotencyKey })
 */
    setDefaultAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params: (InputValue<SetDefaultCustomerAddressRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomerAddress>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customerssetdefaultaddress
     */
    setDefaultAddressWithResponse(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params: (InputValue<SetDefaultCustomerAddressRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerAddressResponse>>;
    /**
 * Applies a sparse update to a customer. Writing billing_address or shipping_address clears the
 * corresponding saved-address default, so that field remains effective until another saved default
 * is selected. Changing email requires customer_account.mode to be merchant_hosted; otherwise
 * Flint returns 409 CUSTOMER_EMAIL_BUYER_MANAGED. If Flint cannot read the account settings, it
 * returns a retryable 503 SERVICE_UNAVAILABLE without changing the customer.
 * @see reference/customers.md#customersupdate
 * PATCH /v1/customers/{customer_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(customer_id: InputValue<string>, params: (InputValue<UpdateCustomerRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Customer>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customersupdate
     */
    updateWithResponse(customer_id: InputValue<string>, params: (InputValue<UpdateCustomerRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerResponse>>;
    /**
 * Applies a sparse update to a saved address. Updating a default address also updates the
 * customer's effective address for that role.
 * @see reference/customers.md#customersupdateaddress
 * PATCH /v1/customers/{customer_id}/addresses/{customer_address_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.updateAddress("example", "example", {address: {city: "example", country: "US",
 * line1: "example", postal_code: "example", state: "example"}}, { idempotencyKey: idempotencyKey
 * })
 */
    updateAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params: (InputValue<UpdateCustomerAddressRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomerAddress>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customers.md#customersupdateaddress
     */
    updateAddressWithResponse(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params: (InputValue<UpdateCustomerAddressRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerAddressResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly customers: CustomersResource;
}
