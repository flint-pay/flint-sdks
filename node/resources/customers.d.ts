import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { AccessLink, AccessLinkResponse } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    Customer,
    CustomerAddress,
    CustomerAddressListResponse,
    CustomerAddressResponse,
    CustomerListResponse,
    CustomerResponse,
    CustomerSessionsRevocation,
    CustomerSessionsRevocationResponse
} from '../declarations/types-13.js';
import type {
    CustomersCreateAccessLinkParams,
    CustomersCreateAddressParams,
    CustomersCreateParams,
    CustomersDeleteAddressParams,
    CustomersGetAddressParams,
    CustomersGetParams,
    CustomersLinkGuestPurchasesParams,
    CustomersListAddressesParams,
    CustomersListParams,
    CustomersRevokeSessionsParams,
    CustomersUpdateAddressParams,
    CustomersUpdateParams
} from '../declarations/types-14.js';
import type { GuestPurchaseLink, GuestPurchaseLinkResponse } from '../declarations/types-25.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
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
    CustomersCreateParams,
    CustomersCreateAccessLinkParams,
    CustomersCreateAddressParams,
    CustomersDeleteAddressParams,
    CustomersGetParams,
    CustomersGetAddressParams,
    CustomersLinkGuestPurchasesParams,
    CustomersListAddressesParams,
    CustomersListParams,
    CustomersRevokeSessionsParams,
    CustomersUpdateParams,
    CustomersUpdateAddressParams
} from '../declarations/types-14.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    Customer,
    CustomerResponse,
    CustomerAddress,
    CustomerAddressResponse,
    CustomerAddressListResponse,
    CustomerListResponse,
    CustomerSessionsRevocation,
    CustomerSessionsRevocationResponse,
    CustomerReceivables,
    CustomerReceivableBalance
} from '../declarations/types-13.js';
export type { AccessLink, AccessLinkResponse, AddressRequestInput, AuthMode, Address, AddressRequest } from '../declarations/types-0.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { GuestPurchaseLink, GuestPurchaseLinkResponse } from '../declarations/types-25.js';
export type { ClientOptions, CheckoutSessionsListDeliverySelectionsParams } from '../declarations/types-5.js';
export type { CreateCustomerRequestInput } from '../declarations/types-7.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { TaxIdentityRequestInput, TaxIdentity, TaxIdentityPatchInput } from '../declarations/types-57.js';
export type { DocumentTaxIDRequestInput, ExpandedPaymentMethodSummary } from '../declarations/types-21.js';
export type { Credentials } from '../declarations/types-12.js';
export type { CardDetails } from '../declarations/types-4.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type { DocumentTaxID } from '../declarations/types-20.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { CreateCustomerAddressRequestInput } from '../declarations/types-6.js';
export type { LinkCustomerGuestPurchasesRequestInput, LinkCustomerGuestPurchasesRequest } from '../declarations/types-32.js';
export type { UpdateCustomerRequestInput, UpdateCustomerAddressRequestInput } from '../declarations/types-58.js';
export { makeAddressRequest } from '../declarations/types-61.js';
export { makeCreateCustomerAddressRequest, makeCreateCustomerRequest } from '../declarations/types-63.js';
export { makeDocumentTaxIDRequest } from '../declarations/types-67.js';
export {
    makeLinkCustomerGuestPurchasesRequest,
    makeMetadataPatchRequest,
    makeMetadataRequest,
    makeMoneyValue
} from '../declarations/types-69.js';
export {
    makeTaxIdentityPatch,
    makeTaxIdentityRequest,
    makeUpdateCustomerAddressRequest,
    makeUpdateCustomerRequest
} from '../declarations/types-73.js';
export interface CustomersResource {
    /**
 * Creates a customer for the authenticated merchant.
 *
 * `POST /v1/customers`
 * @see https://developers.withflintpay.com/docs/api/customers#createCustomer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.create({email: "jane@example.com", metadata: {crm_id: "crm_123"}, name: "Jane
 * Doe"}, { idempotencyKey: idempotencyKey })
 */
    create(params: CustomersCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Customer, CustomerResponse>>;
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
 *
 * `POST /v1/customers/{customer_id}/access-links`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customers#createCustomerAccessLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.createAccessLink("cus_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    createAccessLink(customer_id: InputValue<string>, params?: CustomersCreateAccessLinkParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<AccessLink, AccessLinkResponse>>;
    /**
 * Creates a stable saved address. The address becomes a default only when the request sets
 * is_default_billing or is_default_shipping, or later by setting those flags with PATCH, including
 * the customer's first address. A saved default becomes the customer's effective address for the
 * corresponding role.
 *
 * `POST /v1/customers/{customer_id}/addresses`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customers#createCustomerAddress
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.createAddress("cus_01ARZ3NDEKTSV4RRFFQ69G5FAV", {address: {city: "Springfield",
 * country: "US", line1: "100 Example Street", postal_code: "62701", state: "IL"}, recipient_name:
 * "Jordan Example"}, { idempotencyKey: idempotencyKey })
 */
    createAddress(customer_id: InputValue<string>, params: CustomersCreateAddressParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerAddress, CustomerAddressResponse>>;
    /**
 * Deletes a saved address. Deleting the billing or shipping default leaves the customer with none;
 * Flint doesn't pick another address.
 *
 * `DELETE /v1/customers/{customer_id}/addresses/{customer_address_id}`
 * @param customer_id Flint customer ID.
 * @param customer_address_id Flint customer address ID.
 * @see https://developers.withflintpay.com/docs/api/customers#deleteCustomerAddress
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.deleteAddress("cus_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    deleteAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params?: CustomersDeleteAddressParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerAddress, CustomerAddressResponse>>;
    /**
 * Returns a single customer by ID.
 *
 * `GET /v1/customers/{customer_id}`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customers#getCustomer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customers.get("cus_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(customer_id: InputValue<string>, params?: CustomersGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Customer, CustomerResponse>>;
    /**
 * Returns one saved address owned by the customer.
 *
 * `GET /v1/customers/{customer_id}/addresses/{customer_address_id}`
 * @param customer_id Flint customer ID.
 * @param customer_address_id Flint customer address ID.
 * @see https://developers.withflintpay.com/docs/api/customers#getCustomerAddress
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customers.getAddress("cus_01ARZ3NDEKTSV4RRFFQ69G5FAV", "caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params?: CustomersGetAddressParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomerAddress, CustomerAddressResponse>>;
    /**
 * Links purchases with the verified email and no customer to the verification's customer in the
 * same merchant environment. Purchases bound to another customer stay with that customer. The
 * verification is single use; use the same Idempotency-Key to retry an uncertain result.
 *
 * `POST /v1/customers/{customer_id}/link-guest-purchases`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customers#linkCustomerGuestPurchases
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.linkGuestPurchases("cus_01ARZ3NDEKTSV4RRFFQ69G5FAV", {customer_verification_id:
 * "cver_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey })
 */
    linkGuestPurchases(customer_id: InputValue<string>, params: CustomersLinkGuestPurchasesParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<GuestPurchaseLink, GuestPurchaseLinkResponse>>;
    /**
 * Lists the customer's saved addresses with billing and shipping default flags. Default order:
 * created_at descending, then customer_address_id descending.
 *
 * `GET /v1/customers/{customer_id}/addresses`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customers#listCustomerAddresses
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customers.listAddresses("cus_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listAddresses(customer_id: InputValue<string>, params?: CustomersListAddressesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomerAddressListResponse, CustomerAddressListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customers#listCustomerAddresses
     */
    listAddressesPages(customer_id: InputValue<string>, params?: CustomersListAddressesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<CustomerAddressListResponse, CustomerAddressListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customers#listCustomerAddresses
     */
    listAddressesItems(customer_id: InputValue<string>, params?: CustomersListAddressesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CustomerAddress>;
    /**
 * Returns a paginated list of customers for the authenticated merchant. Without a status filter,
 * returns active and deletion_processing customers; deleted customers appear only when the filter
 * names deleted. Default order: created_at descending, then customer_id descending.
 *
 * `GET /v1/customers`
 * @see https://developers.withflintpay.com/docs/api/customers#listCustomers
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customers.list()
 */
    list(params?: CustomersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomerListResponse, CustomerListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customers#listCustomers
     */
    listPages(params?: CustomersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<CustomerListResponse, CustomerListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customers#listCustomers
     */
    listItems(params?: CustomersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Customer>;
    /**
 * Revokes every customer session for one customer in the selected merchant environment. Flint
 * Account buyer sessions remain independent.
 *
 * `POST /v1/customers/{customer_id}/sessions/revoke`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customer-sessions#revokeCustomerSessions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.revokeSessions("cus_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    revokeSessions(customer_id: InputValue<string>, params?: CustomersRevokeSessionsParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerSessionsRevocation, CustomerSessionsRevocationResponse>>;
    /**
 * Applies a sparse update to a customer. Changing email requires customer_account.mode to be
 * merchant_hosted; otherwise Flint returns 409 ACTION_NOT_ALLOWED with reason managed_externally.
 * To change the email of a customer who signs in to your Flint-hosted account, create a customer
 * session for the customer and send `client.me.createEmailChangeRequest` with the new email; the
 * customer confirms it with the codes Flint emails them. If Flint cannot read the account
 * settings, it returns a retryable 503 SERVICE_UNAVAILABLE without changing the customer.
 *
 * `PATCH /v1/customers/{customer_id}`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customers#updateCustomer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.update("cus_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Jordan Example"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(customer_id: InputValue<string>, params: CustomersUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Customer, CustomerResponse>>;
    /**
 * Applies a sparse update to a saved address. Set is_default_billing or is_default_shipping to
 * true to make this address the default, or false to clear a default it holds. Updating a default
 * address also updates the customer's effective address for that role.
 *
 * `PATCH /v1/customers/{customer_id}/addresses/{customer_address_id}`
 * @param customer_id Flint customer ID.
 * @param customer_address_id Flint customer address ID.
 * @see https://developers.withflintpay.com/docs/api/customers#updateCustomerAddress
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.updateAddress("cus_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {label: "Home"}, { idempotencyKey: idempotencyKey })
 */
    updateAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params: CustomersUpdateAddressParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerAddress, CustomerAddressResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly customers: CustomersResource;
}
