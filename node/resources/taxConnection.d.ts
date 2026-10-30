import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { DisconnectTaxConnectionResponse, DisconnectTaxConnectionResult } from '../declarations/types-20.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    TaxConnection,
    TaxConnectionConnectParams,
    TaxConnectionCreateRegistrationParams,
    TaxConnectionDeleteRegistrationParams,
    TaxConnectionDisclosure,
    TaxConnectionDisconnectParams,
    TaxConnectionGetParams,
    TaxConnectionGetRegistrationParams,
    TaxConnectionListRegistrationsParams,
    TaxConnectionResponse,
    TaxConnectionSellerAttestation,
    TaxConnectionUpdateRegistrationParams,
    TaxRegistration,
    TaxRegistrationListResponse,
    TaxRegistrationResponse
} from '../declarations/types-57.js';
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
    TaxConnectionConnectParams,
    TaxConnection,
    TaxConnectionResponse,
    TaxConnectionCreateRegistrationParams,
    TaxRegistration,
    TaxRegistrationResponse,
    TaxConnectionDeleteRegistrationParams,
    TaxConnectionDisconnectParams,
    TaxConnectionGetParams,
    TaxConnectionGetRegistrationParams,
    TaxConnectionListRegistrationsParams,
    TaxRegistrationListResponse,
    TaxConnectionUpdateRegistrationParams,
    TaxConnectionDisclosure,
    TaxConnectionSellerAttestation,
    TaxSettings,
    TaxIdentity,
    TippingSettings,
    TaxDisclosureStatement
} from '../declarations/types-57.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    DisconnectTaxConnectionResult,
    DisconnectTaxConnectionResponse,
    DisconnectTaxConnectionRequestInput,
    DocumentTaxID
} from '../declarations/types-20.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions, CheckoutSettings, CheckoutTaxConfig } from '../declarations/types-5.js';
export type { ConnectTaxConnectionRequestInput } from '../declarations/types-6.js';
export type { SellerTaxAttestationRequestInput, Settings, SellerTaxAttestationRequest } from '../declarations/types-53.js';
export type { AuthMode, Address } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession, ReceiptSettings } from '../declarations/types-46.js';
export type { CreateTaxRegistrationRequestInput } from '../declarations/types-11.js';
export type { BrandingSettings, BuyerCapabilities } from '../declarations/types-1.js';
export type { CheckoutRecoveryEmailSettings } from '../declarations/types-4.js';
export type {
    CustomerAccountSettings,
    CustomerAccountPresentation,
    CustomerAccountRouteTemplates,
    CustomerEmailDeliverySettings
} from '../declarations/types-13.js';
export type { BuyerPauseCapability, BuyerRetentionOffer } from '../declarations/types-2.js';
export type { BuyerSkipCapability } from '../declarations/types-3.js';
export type { FulfillmentSettings } from '../declarations/types-22.js';
export type { InventorySettings, InvoiceAutopayRetryPolicy } from '../declarations/types-28.js';
export type { InventoryOriginPolicy } from '../declarations/types-26.js';
export type { InvoiceSettings, InvoiceReminderPolicy, InvoiceReminderRule } from '../declarations/types-31.js';
export type { InvoicePaymentPolicy, InvoicePaymentOptionLimit } from '../declarations/types-30.js';
export type { LegalSettings } from '../declarations/types-32.js';
export type { MetadataMap } from '../declarations/types-34.js';
export type { PaymentLimitSettings } from '../declarations/types-41.js';
export type { PromotionSettings } from '../declarations/types-45.js';
export type { SubscriptionSettings } from '../declarations/types-56.js';
export type { UpdateTaxRegistrationRequestInput } from '../declarations/types-60.js';
export {
    makeBuyerCapabilities,
    makeBuyerPauseCapability,
    makeBuyerRetentionOffer,
    makeBuyerSkipCapability
} from '../declarations/types-62.js';
export { makeConnectTaxConnectionRequest } from '../declarations/types-63.js';
export { makeCreateTaxRegistrationRequest } from '../declarations/types-65.js';
export { makeDisconnectTaxConnectionRequest } from '../declarations/types-67.js';
export {
    makeInvoiceAutopayRetryPolicy,
    makeInvoicePaymentOptionLimit,
    makeInvoicePaymentPolicy,
    makeInvoiceReminderPolicy,
    makeInvoiceReminderRule
} from '../declarations/types-68.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeSellerTaxAttestationRequest } from '../declarations/types-72.js';
export { makeUpdateTaxRegistrationRequest } from '../declarations/types-74.js';
export interface TaxConnectionResource {
    /**
 * Records the seller's attestation and creates or completes the tax account from verified business
 * details and the default line-item tax category in settings. Syncs registrations and removes
 * tax-account copies of deleted registrations. Reconnect retains the tax account and does not turn
 * the default tax setting back on. A rejected stored registration returns attention_required with
 * registration_rejected. Successful configuration marks open calculated automatic-tax orders
 * without an issued invoice incomplete and advances their versions. A same-key retry resumes setup
 * without creating another account; unconfirmed account creation requires support. Retrieve the
 * connection after a lost response.
 *
 * `POST /v1/tax-connection/connect`
 * @see https://developers.withflintpay.com/docs/api/tax-connection#connectTaxConnection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.taxConnection.connect({expected_version: 1793016000, seller_attestation:
 * {disclosure_version: "2026-11-01.5f3a9c1e"}}, { idempotencyKey: idempotencyKey })
 */
    connect(params: TaxConnectionConnectParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TaxConnection, TaxConnectionResponse>>;
    /**
 * Saves one US state registration for a non-overlapping, inclusive date window. Start_date may be
 * up to 365 days ahead; end_date is optional. Before the connection is active, saves locally as
 * pending without creating a tax account. On an active connection, syncs the registration in this
 * request. Acceptance of a registration effective today marks open calculated automatic-tax orders
 * without an issued invoice incomplete, advancing their versions. Scheduled registrations do not
 * invalidate calculations. A definitive rejection before a tax-account registration exists removes
 * the pending registration and leaves working tax and orders unchanged. If a tax-account copy
 * exists or may have been created, rejection cleanup marks those open orders incomplete and
 * advances their versions. Successful cleanup leaves the connection active. An uncertain outcome
 * keeps the registration pending and the connection active; retry with the same key to resume
 * without duplicating the registration. If the key is lost, filter the list by state and match the
 * submitted start_date, delete the pending registration and create again after deletion succeeds.
 *
 * `POST /v1/tax-connection/registrations`
 * @see https://developers.withflintpay.com/docs/api/tax-registrations#createTaxRegistration
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.taxConnection.createRegistration({state: "AL", registration_number: "example",
 * start_date: "2026-01-01"}, { idempotencyKey: idempotencyKey })
 */
    createRegistration(params: TaxConnectionCreateRegistrationParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TaxRegistration, TaxRegistrationResponse>>;
    /**
 * Hard-deletes a pending, rejected or scheduled registration and returns its final snapshot with
 * status removed. While disconnected, deletes locally and records tax-account cleanup for the next
 * connect. Otherwise, removes a possible tax-account copy first. If earlier creation is
 * unconfirmed, an empty tax-account registration list does not prove the copy is absent:
 * EXTERNAL_SERVICE_ERROR keeps the local registration. Retry the same request with the same
 * Idempotency-Key until the copy can be identified and removed. Provider failure retains the local
 * registration. An online deletion of a pending or rejected registration that removes existing or
 * possibly created tax-account coverage marks open calculated automatic-tax orders without an
 * issued invoice incomplete and advances their versions. Scheduled and disconnected deletions do
 * not invalidate calculations. Scheduled deletion removes its tax-account copy immediately unless
 * disconnected, without pausing automatic tax or invalidating calculations. Active and ended
 * registrations cannot be deleted. Later GET returns RESOURCE_NOT_FOUND.
 *
 * `DELETE /v1/tax-connection/registrations/{tax_registration_id}`
 * @param tax_registration_id Flint tax registration ID.
 * @see https://developers.withflintpay.com/docs/api/tax-registrations#deleteTaxRegistration
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.taxConnection.deleteRegistration("trg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    deleteRegistration(tax_registration_id: InputValue<string>, params?: TaxConnectionDeleteRegistrationParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TaxRegistration, TaxRegistrationResponse>>;
    /**
 * Turns automatic tax off while retaining the tax account and registrations for reconnecting.
 * Choose tax_default_behavior explicitly: turn_off stops adding tax to new orders, checkout
 * sessions and renewals that inherit the default; keep leaves the default unchanged, refuses those
 * orders and holds renewals for retry without charging buyers or starting dunning. Payment links
 * that explicitly enable automatic tax are refused when creating a checkout session with either
 * choice. Settings are updated first when needed, then the connection is disconnected and open
 * calculated automatic-tax orders without an issued invoice snapshot become incomplete. Issued
 * invoice snapshots are unchanged. A same-key retry resumes after settings were changed; after a
 * lost response, retrieve the connection and disconnect again if needed.
 *
 * `POST /v1/tax-connection/disconnect`
 * @see https://developers.withflintpay.com/docs/api/tax-connection#disconnectTaxConnection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.taxConnection.disconnect({expected_version: 1793016000, tax_default_behavior:
 * "turn_off"}, { idempotencyKey: idempotencyKey })
 */
    disconnect(params: TaxConnectionDisconnectParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DisconnectTaxConnectionResult, DisconnectTaxConnectionResponse>>;
    /**
 * Returns the environment's automatic sales tax connection, including before a record exists. Read
 * the disclosure and status_reason to learn what connect needs. Business-detail changes, temporary
 * provider pauses and registration date boundaries are computed at read time and do not advance
 * version or send webhooks.
 *
 * `GET /v1/tax-connection`
 * @see https://developers.withflintpay.com/docs/api/tax-connection#getTaxConnection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.taxConnection.get()
 */
    get(params?: TaxConnectionGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<TaxConnection, TaxConnectionResponse>>;
    /**
 * Returns one saved tax registration. Removed registrations return RESOURCE_NOT_FOUND.
 *
 * `GET /v1/tax-connection/registrations/{tax_registration_id}`
 * @param tax_registration_id Flint tax registration ID.
 * @see https://developers.withflintpay.com/docs/api/tax-registrations#getTaxRegistration
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.taxConnection.getRegistration("trg_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getRegistration(tax_registration_id: InputValue<string>, params?: TaxConnectionGetRegistrationParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<TaxRegistration, TaxRegistrationResponse>>;
    /**
 * Returns independent tax registrations ordered by state ascending, then tax_registration_id
 * ascending. Removed registrations never list. After a lost create response, filter by state and
 * match the start_date sent by the create. Default order: state ascending, then
 * tax_registration_id ascending.
 *
 * `GET /v1/tax-connection/registrations`
 * @see https://developers.withflintpay.com/docs/api/tax-registrations#listTaxRegistrations
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.taxConnection.listRegistrations()
 */
    listRegistrations(params?: TaxConnectionListRegistrationsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<TaxRegistrationListResponse, TaxRegistrationListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/tax-registrations#listTaxRegistrations
     */
    listRegistrationsPages(params?: TaxConnectionListRegistrationsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<TaxRegistrationListResponse, TaxRegistrationListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/tax-registrations#listTaxRegistrations
     */
    listRegistrationsItems(params?: TaxConnectionListRegistrationsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<TaxRegistration>;
    /**
 * Updates locally without a tax-account call. Pending and rejected registrations allow
 * registration_number, start_date and end_date; registration_number and start_date require a
 * connection that is not active. Scheduled and active registrations allow only end_date. A pending
 * or rejected registration whose tax-account copy exists or may have been created cannot change
 * start_date; delete it and create it again. Ended registrations cannot be changed. End_date must
 * be on or after start_date and today (UTC); null clears it before the registration ends. Date
 * windows in the same state cannot overlap. To replace an active registration number, set its
 * end_date, then create a replacement starting the next day. Changing end_date does not invalidate
 * calculations made today. An empty patch is invalid.
 *
 * `PATCH /v1/tax-connection/registrations/{tax_registration_id}`
 * @param tax_registration_id Flint tax registration ID.
 * @see https://developers.withflintpay.com/docs/api/tax-registrations#updateTaxRegistration
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.taxConnection.updateRegistration("trg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {end_date:
 * "2026-12-31"}, { idempotencyKey: idempotencyKey })
 */
    updateRegistration(tax_registration_id: InputValue<string>, params: TaxConnectionUpdateRegistrationParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TaxRegistration, TaxRegistrationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly taxConnection: TaxConnectionResource;
}
