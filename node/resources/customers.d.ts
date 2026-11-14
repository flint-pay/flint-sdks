import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { AccessLink, AccessLinkResponse } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    Customer,
    CustomerAddress,
    CustomerAddressListResponse,
    CustomerAddressResponse,
    CustomerEmailPreferences,
    CustomerEmailPreferencesResponse
} from '../declarations/types-15.js';
import type {
    CustomerListResponse,
    CustomerResponse,
    CustomerSessionsRevocation,
    CustomerSessionsRevocationResponse,
    CustomerTaxExemption,
    CustomerTaxExemptionListResponse,
    CustomerTaxExemptionResponse,
    CustomersCancelEmailChangeRequestParams,
    CustomersCreateAccessLinkParams,
    CustomersCreateAddressParams,
    CustomersCreateEmailChangeRequestParams,
    CustomersCreateParams,
    CustomersCreateTaxExemptionParams,
    CustomersDeleteAddressParams,
    CustomersDeleteTaxExemptionParams,
    CustomersGetAddressParams,
    CustomersGetEmailChangeRequestParams,
    CustomersGetEmailPreferencesParams,
    CustomersGetParams,
    CustomersGetTaxExemptionParams,
    CustomersLinkGuestPurchasesParams,
    CustomersListAddressesParams,
    CustomersListEmailChangeRequestsParams,
    CustomersListParams,
    CustomersListTaxExemptionsParams,
    CustomersRevokeSessionsParams,
    CustomersUpdateAddressParams,
    CustomersUpdateParams,
    CustomersUpdateTaxExemptionParams
} from '../declarations/types-16.js';
import type { EmailChangeRequest, EmailChangeRequestListResponse, EmailChangeRequestResponse } from '../declarations/types-24.js';
import type { GuestPurchaseLink, GuestPurchaseLinkResponse } from '../declarations/types-28.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    CustomersCancelEmailChangeRequestParams,
    CustomersCreateParams,
    CustomerResponse,
    CustomersCreateAccessLinkParams,
    CustomersCreateAddressParams,
    CustomersCreateEmailChangeRequestParams,
    CustomersCreateTaxExemptionParams,
    CustomerTaxExemption,
    CustomerTaxExemptionResponse,
    CustomersDeleteAddressParams,
    CustomersDeleteTaxExemptionParams,
    CustomersGetParams,
    CustomersGetAddressParams,
    CustomersGetEmailChangeRequestParams,
    CustomersGetEmailPreferencesParams,
    CustomersGetTaxExemptionParams,
    CustomersLinkGuestPurchasesParams,
    CustomersListAddressesParams,
    CustomersListEmailChangeRequestsParams,
    CustomersListParams,
    CustomerListResponse,
    CustomersListTaxExemptionsParams,
    CustomerTaxExemptionListResponse,
    CustomersRevokeSessionsParams,
    CustomerSessionsRevocation,
    CustomerSessionsRevocationResponse,
    CustomersUpdateParams,
    CustomersUpdateAddressParams,
    CustomersUpdateTaxExemptionParams,
    CustomerReceivables,
    CustomerReceivableBalance,
    CustomerTaxExemptionCoverageRequestInput,
    CustomerTaxExemptionCoverageAllStatesRequestInput,
    CustomerTaxExemptionCoverageStatesRequestInput,
    CustomerTaxExemptionCoverage,
    CustomerTaxExemptionCoverageAllStates,
    CustomerTaxExemptionCoverageStates
} from '../declarations/types-16.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type {
    EmailChangeRequest,
    EmailChangeRequestResponse,
    EmailChangeRequestListResponse,
    DocumentTaxIDRequestInput,
    ExpandedPaymentMethodSummary,
    DocumentTaxID,
    DisputesAcceptParams
} from '../declarations/types-24.js';
export type {
    Customer,
    CustomerAddress,
    CustomerAddressResponse,
    CustomerEmailPreferences,
    CustomerEmailPreferencesResponse,
    CustomerAddressListResponse
} from '../declarations/types-15.js';
export type { AccessLink, AccessLinkResponse, AddressRequestInput, Address, AddressRequest } from '../declarations/types-0.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { GuestPurchaseLink, GuestPurchaseLinkResponse } from '../declarations/types-28.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type {
    CreateCustomerRequestInput,
    CreateCustomerAddressRequestInput,
    CreateCustomerAccessLinkRequestInput,
    CreateCustomerTaxExemptionRequestInput,
    CreateCustomerAccessLinkRequest
} from '../declarations/types-8.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-38.js';
export type { TaxIdentityRequestInput, TaxIdentity, TaxIdentityPatchInput } from '../declarations/types-65.js';
export type { CardDetails } from '../declarations/types-5.js';
export type { CreateEmailChangeRequestInput, CreateEmailChangeRequest } from '../declarations/types-9.js';
export type { LinkCustomerGuestPurchasesRequestInput, LinkCustomerGuestPurchasesRequest } from '../declarations/types-35.js';
export type {
    UpdateCustomerRequestInput,
    UpdateCustomerAddressRequestInput,
    UpdateCustomerTaxExemptionRequestInput
} from '../declarations/types-66.js';
export { makeAddressRequest } from '../declarations/types-70.js';
export {
    makeCreateCustomerAccessLinkRequest,
    makeCreateCustomerAddressRequest,
    makeCreateCustomerRequest,
    makeCreateCustomerTaxExemptionRequest,
    makeCreateEmailChangeRequest
} from '../declarations/types-72.js';
export {
    makeCustomerTaxExemptionCoverageAllStatesRequest,
    makeCustomerTaxExemptionCoverageRequest,
    makeCustomerTaxExemptionCoverageStatesRequest
} from '../declarations/types-75.js';
export { makeDocumentTaxIDRequest } from '../declarations/types-77.js';
export { makeLinkCustomerGuestPurchasesRequest } from '../declarations/types-78.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-79.js';
export {
    makeTaxIdentityPatch,
    makeTaxIdentityRequest,
    makeUpdateCustomerAddressRequest,
    makeUpdateCustomerRequest,
    makeUpdateCustomerTaxExemptionRequest
} from '../declarations/types-83.js';
export interface CustomersResource {
    /**
 * Cancels a pending request and invalidates its link or codes. The customer's email stays
 * unchanged. A terminal request refuses cancellation. Send no body or an empty JSON object.
 *
 * `POST /v1/customers/{customer_id}/email-change-requests/{email_change_request_id}/cancel`
 * @param customer_id Flint customer ID.
 * @param email_change_request_id Flint email change request ID.
 * @see https://developers.withflintpay.com/docs/api/customers#cancelCustomerEmailChangeRequest
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.cancelEmailChangeRequest("cus_01KEZF7C006X9JK6NZNA2SM9XD",
 * "cecr_01KEZF7C00B8VJX4M828K0430H", {}, { idempotencyKey: idempotencyKey })
 */
    cancelEmailChangeRequest(customer_id: InputValue<string>, email_change_request_id: InputValue<string>, params?: CustomersCancelEmailChangeRequestParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<EmailChangeRequest, EmailChangeRequestResponse>>;
    /**
 * Creates a customer record for a buyer's contact details and purchases in this environment. When
 * an active customer already has `email`, `on_email_conflict` chooses whether to fail with
 * `ALREADY_EXISTS`, which names that customer, or return the existing customer unchanged. Emails
 * match case-insensitively.
 *
 * `POST /v1/customers`
 * @see https://developers.withflintpay.com/docs/api/customers#createCustomer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.create(undefined, { idempotencyKey: idempotencyKey })
 */
    create(params?: CustomersCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Customer, CustomerResponse>>;
    /**
 * Signs the buyer in to your Flint-hosted customer account as this customer. Works for 15 minutes
 * and one open. The url is a bearer credential. Flint returns it only in this response and in a
 * retry with the same idempotency key, so send it only to the buyer and keep it out of logs. A
 * call with a new key creates another link; earlier links keep working until they expire.
 * Optionally send return_url for a destination on your site, or omit the body. Requires
 * customers.sessions.write. Idempotency is scoped to the merchant, credential, environment, and
 * this customer's route. A replay returns the original link without extending its lifetime or
 * replenishing its open. Without an idempotency key, each call creates a new link and has no
 * replay result. If Flint cannot retain a result after minting, contact support with the request
 * ID before sending a new request.
 *
 * `POST /v1/customers/{customer_id}/access-links`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customers#createCustomerAccessLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.createAccessLink("cus_01KEZF7C006X9JK6NZNA2SM9XD", undefined, { idempotencyKey:
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
 * Emails the new address a confirmation link valid for seven days. Available for Flint-hosted
 * accounts. One request can be pending per customer; creating another cancels the previous
 * request. Nothing changes until the new address confirms. The change affects only this store,
 * revokes the customer's sessions and links, and never moves cards saved with Flint. Limited to
 * three attempts per customer in 15 minutes and 30 staff requests per merchant environment per
 * hour.
 *
 * `POST /v1/customers/{customer_id}/email-change-requests`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customers#createCustomerEmailChangeRequest
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.createEmailChangeRequest("cus_01KEZF7C006X9JK6NZNA2SM9XD", {new_email:
 * "alex.new@example.com"}, { idempotencyKey: idempotencyKey })
 */
    createEmailChangeRequest(customer_id: InputValue<string>, params: CustomersCreateEmailChangeRequestParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<EmailChangeRequest, EmailChangeRequestResponse>>;
    /**
 * Records a nested customer exemption with reason, coverage and an inclusive date window. At most
 * 100 unarchived exemptions may belong to a customer; exceeding that limit returns LIMIT_REACHED
 * with reason customer_tax_exemptions. An active record applies to the customer's sales whose
 * taxable destination its coverage contains, within its date range. Saving a record doesn't change
 * the customer's blanket tax_exempt flag, which still takes precedence. Only API keys and
 * dashboard sessions can access these records. Retry a lost response with the same request and
 * Idempotency-Key. If IDEMPOTENCY_RECOVERY_REQUIRED is returned, inspect this customer's list and
 * GET records before sending a new write. Match a lost create against submitted fields across list
 * pages; contact support with the original key and request ID if its outcome is unclear.
 *
 * `POST /v1/customers/{customer_id}/tax-exemptions`
 * @param customer_id Flint ID of the customer that owns this nested child.
 * @see
 * https://developers.withflintpay.com/docs/api/customer-tax-exemptions#createCustomerTaxExemption
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.createTaxExemption("cus_01KEZF7C006X9JK6NZNA2SM9XD", {reason:
 * "federal_government", coverage: {type: "all_states", country: "US"}, start_date: "2026-08-02"},
 * { idempotencyKey: idempotencyKey })
 */
    createTaxExemption(customer_id: InputValue<string>, params: CustomersCreateTaxExemptionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerTaxExemption, CustomerTaxExemptionResponse>>;
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
 * client.customers.deleteAddress("cus_01KEZF7C006X9JK6NZNA2SM9XD",
 * "caddr_01KEZF7C00K2Q127FBJAXWB0FP", {}, { idempotencyKey: idempotencyKey })
 */
    deleteAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params?: CustomersDeleteAddressParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerAddress, CustomerAddressResponse>>;
    /**
 * Archives the record and returns its archived snapshot in the same schema as GET. It stays
 * readable by ID and is excluded from lists unless status includes archived. Expired and archived
 * records cannot be edited. An optional expected_version query parameter rejects a stale write
 * before effects. Retry a lost response with the same request and Idempotency-Key. If
 * IDEMPOTENCY_RECOVERY_REQUIRED is returned, inspect this customer's list and GET records before
 * sending a new write. Match a lost create against submitted fields across list pages; contact
 * support with the original key and request ID if its outcome is unclear.
 *
 * `DELETE /v1/customers/{customer_id}/tax-exemptions/{customer_tax_exemption_id}`
 * @param customer_id Flint ID of the customer that owns this nested child.
 * @param customer_tax_exemption_id Flint customer tax exemption ID, prefixed ctex_.
 * @see
 * https://developers.withflintpay.com/docs/api/customer-tax-exemptions#deleteCustomerTaxExemption
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.deleteTaxExemption("cus_01KEZF7C006X9JK6NZNA2SM9XD",
 * "ctex_01KEZF7C009N0YTK0NMWP1XZPW", {}, { idempotencyKey: idempotencyKey })
 */
    deleteTaxExemption(customer_id: InputValue<string>, customer_tax_exemption_id: InputValue<string>, params?: CustomersDeleteTaxExemptionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerTaxExemption, CustomerTaxExemptionResponse>>;
    /**
 * Returns a single customer by ID.
 *
 * `GET /v1/customers/{customer_id}`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customers#getCustomer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customers.get("cus_01KEZF7C006X9JK6NZNA2SM9XD")
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
 * client.customers.getAddress("cus_01KEZF7C006X9JK6NZNA2SM9XD", "caddr_01KEZF7C00K2Q127FBJAXWB0FP")
 */
    getAddress(customer_id: InputValue<string>, customer_address_id: InputValue<string>, params?: CustomersGetAddressParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomerAddress, CustomerAddressResponse>>;
    /**
 * Returns one request belonging to this customer, including its current status. Terminal requests
 * have no new_email.
 *
 * `GET /v1/customers/{customer_id}/email-change-requests/{email_change_request_id}`
 * @param customer_id Flint customer ID.
 * @param email_change_request_id Flint email change request ID.
 * @see https://developers.withflintpay.com/docs/api/customers#getCustomerEmailChangeRequest
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customers.getEmailChangeRequest("cus_01KEZF7C006X9JK6NZNA2SM9XD",
 * "cecr_01KEZF7C00B8VJX4M828K0430H")
 */
    getEmailChangeRequest(customer_id: InputValue<string>, email_change_request_id: InputValue<string>, params?: CustomersGetEmailChangeRequestParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<EmailChangeRequest, EmailChangeRequestResponse>>;
    /**
 * Returns the preferences for the customer's current email address in this merchant environment. A
 * missing choice is enabled. Reads remain available while deletion is processing. Returns
 * RESOURCE_NOT_FOUND for an unknown or deleted customer, or with reason email_missing when the
 * customer has no email address. Merchants cannot change these preferences.
 *
 * `GET /v1/customers/{customer_id}/email-preferences`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customers#getCustomerEmailPreferences
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customers.getEmailPreferences("cus_01KEZF7C006X9JK6NZNA2SM9XD")
 */
    getEmailPreferences(customer_id: InputValue<string>, params?: CustomersGetEmailPreferencesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomerEmailPreferences, CustomerEmailPreferencesResponse>>;
    /**
 * Returns one exemption belonging to this customer, including an archived record. A record
 * belonging to another customer returns RESOURCE_NOT_FOUND. Evidence references are merchant-only;
 * customer and checkout sessions cannot access this route.
 *
 * `GET /v1/customers/{customer_id}/tax-exemptions/{customer_tax_exemption_id}`
 * @param customer_id Flint ID of the customer that owns this nested child.
 * @param customer_tax_exemption_id Flint customer tax exemption ID, prefixed ctex_.
 * @see https://developers.withflintpay.com/docs/api/customer-tax-exemptions#getCustomerTaxExemption
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customers.getTaxExemption("cus_01KEZF7C006X9JK6NZNA2SM9XD",
 * "ctex_01KEZF7C009N0YTK0NMWP1XZPW")
 */
    getTaxExemption(customer_id: InputValue<string>, customer_tax_exemption_id: InputValue<string>, params?: CustomersGetTaxExemptionParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomerTaxExemption, CustomerTaxExemptionResponse>>;
    /**
 * Links purchases with the verified email and no customer to the verification's customer in the
 * same merchant environment. Purchases bound to another customer stay with that customer. The
 * verification is single use; use the same idempotency key to retry an uncertain result.
 *
 * `POST /v1/customers/{customer_id}/link-guest-purchases`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customers#linkCustomerGuestPurchases
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.linkGuestPurchases("cus_01KEZF7C006X9JK6NZNA2SM9XD", {customer_verification_id:
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
 * client.customers.listAddresses("cus_01KEZF7C006X9JK6NZNA2SM9XD")
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
 * Returns requests in every status, ordered by created_at descending, then email_change_request_id
 * descending. Status and supported_actions are computed when read. Default order: created_at
 * descending, then email_change_request_id descending.
 *
 * `GET /v1/customers/{customer_id}/email-change-requests`
 * @param customer_id Flint customer ID.
 * @see https://developers.withflintpay.com/docs/api/customers#listCustomerEmailChangeRequests
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customers.listEmailChangeRequests("cus_01KEZF7C006X9JK6NZNA2SM9XD")
 */
    listEmailChangeRequests(customer_id: InputValue<string>, params?: CustomersListEmailChangeRequestsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<EmailChangeRequestListResponse, EmailChangeRequestListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customers#listCustomerEmailChangeRequests
     */
    listEmailChangeRequestsPages(customer_id: InputValue<string>, params?: CustomersListEmailChangeRequestsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<EmailChangeRequestListResponse, EmailChangeRequestListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customers#listCustomerEmailChangeRequests
     */
    listEmailChangeRequestsItems(customer_id: InputValue<string>, params?: CustomersListEmailChangeRequestsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<EmailChangeRequest>;
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
 * Returns the customer's exemption records ordered by created_at descending, then
 * customer_tax_exemption_id descending. Archived records are excluded by default. Status may
 * filter scheduled, active, expired and archived records, alone or together. Default order:
 * created_at descending, then customer_tax_exemption_id descending.
 *
 * `GET /v1/customers/{customer_id}/tax-exemptions`
 * @param customer_id Flint ID of the customer that owns this nested child.
 * @see
 * https://developers.withflintpay.com/docs/api/customer-tax-exemptions#listCustomerTaxExemptions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customers.listTaxExemptions("cus_01KEZF7C006X9JK6NZNA2SM9XD")
 */
    listTaxExemptions(customer_id: InputValue<string>, params?: CustomersListTaxExemptionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomerTaxExemptionListResponse, CustomerTaxExemptionListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/customer-tax-exemptions#listCustomerTaxExemptions
     */
    listTaxExemptionsPages(customer_id: InputValue<string>, params?: CustomersListTaxExemptionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<CustomerTaxExemptionListResponse, CustomerTaxExemptionListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/customer-tax-exemptions#listCustomerTaxExemptions
     */
    listTaxExemptionsItems(customer_id: InputValue<string>, params?: CustomersListTaxExemptionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CustomerTaxExemption>;
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
 * client.customers.revokeSessions("cus_01KEZF7C006X9JK6NZNA2SM9XD", {}, { idempotencyKey:
 * idempotencyKey })
 */
    revokeSessions(customer_id: InputValue<string>, params?: CustomersRevokeSessionsParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerSessionsRevocation, CustomerSessionsRevocationResponse>>;
    /**
 * Applies a sparse update to a customer. Clearing email while any subscription is not canceled
 * returns 409 CUSTOMER_EMAIL_REQUIRED. Changing, case-changing, or clearing an existing email
 * requires customer_account.mode to be merchant_hosted; otherwise the update fails with
 * `ACTION_NOT_ALLOWED` and reason `managed_externally`. A customer with no email can be given one
 * in either mode. To change the email of a customer who signs in to your Flint-hosted account,
 * send `client.customers.createEmailChangeRequest` with new_email. The new address confirms
 * through the link Flint emails it. If Flint cannot read the account settings, the update fails
 * with a retryable `SERVICE_UNAVAILABLE` and the customer is unchanged.
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
    /**
 * Updates only fields supplied. Coverage is replaced as a whole and requires expected_version.
 * Null clears optional description, certificate_number, evidence_reference and end_date. Metadata
 * merges by key; null values remove individual keys and a null map clears caller-owned metadata.
 * Expired and archived records reject edits with ACTION_NOT_ALLOWED and reason terminal_status. A
 * stale expected_version returns VERSION_CONFLICT before effects. Retry a lost response with the
 * same request and Idempotency-Key. If IDEMPOTENCY_RECOVERY_REQUIRED is returned, inspect this
 * customer's list and GET records before sending a new write. Match a lost create against
 * submitted fields across list pages; contact support with the original key and request ID if its
 * outcome is unclear.
 *
 * `PATCH /v1/customers/{customer_id}/tax-exemptions/{customer_tax_exemption_id}`
 * @param customer_id Flint ID of the customer that owns this nested child.
 * @param customer_tax_exemption_id Flint customer tax exemption ID, prefixed ctex_.
 * @see
 * https://developers.withflintpay.com/docs/api/customer-tax-exemptions#updateCustomerTaxExemption
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customers.updateTaxExemption("cus_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "ctex_01ARZ3NDEKTSV4RRFFQ69G5FAV", {description: "Example exemption"}, { idempotencyKey:
 * idempotencyKey })
 */
    updateTaxExemption(customer_id: InputValue<string>, customer_tax_exemption_id: InputValue<string>, params: CustomersUpdateTaxExemptionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerTaxExemption, CustomerTaxExemptionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly customers: CustomersResource;
}
