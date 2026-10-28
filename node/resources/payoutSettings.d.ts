import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    PayoutDestination,
    PayoutDestinationListResponse,
    PayoutDestinationResponse,
    PayoutSettings,
    PayoutSettingsDeletePayoutDestinationInput,
    PayoutSettingsGetInput,
    PayoutSettingsGetPayoutDestinationInput,
    PayoutSettingsListPayoutDestinationsInput,
    PayoutSettingsResponse,
    PayoutSettingsUpdateInput,
    PayoutSettingsUpdatePayoutDestinationInput
} from '../declarations/types-39.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { UpdatePayoutDestinationRequestInput, UpdatePayoutSettingsRequestInput } from '../declarations/types-52.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    PayoutDestination,
    PayoutDestinationResponse,
    PayoutSettings,
    PayoutSettingsResponse,
    PayoutDestinationListResponse,
    PayoutSettingsDeletePayoutDestinationInput,
    PayoutSettingsGetPayoutDestinationInput,
    PayoutSettingsGetInput,
    PayoutSettingsListPayoutDestinationsInput,
    PayoutSettingsUpdatePayoutDestinationInput,
    PayoutSettingsUpdateInput
} from '../declarations/types-39.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { UpdatePayoutDestinationRequestInput, UpdatePayoutSettingsRequestInput } from '../declarations/types-52.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-32.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type {
    NextAction,
    NextActionMerchantAccountSession,
    MoneyValue,
    MoneyMovementBlockedReason,
    MoneyMovementListMeta,
    MoneyMovementHistoryMeta,
    MoneyValueInput
} from '../declarations/types-33.js';
export { makeMetadataPatchRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeUpdatePayoutDestinationRequest, makeUpdatePayoutSettingsRequest } from '../declarations/types-77.js';
export interface PayoutSettingsResource {
    /**
 * Archives the payout destination and returns it with `status: archived`. It stays readable by ID.
 * You can't delete the active default destination. Safe to retry with the same Idempotency-Key.
 * @see reference/payoutSettings.md#payoutsettingsdeletepayoutdestination
 * DELETE /v1/payout-destinations/{payout_destination_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payoutSettings.deletePayoutDestination("example", {}, { idempotencyKey: idempotencyKey })
 */
    deletePayoutDestination(payout_destination_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PayoutDestination>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payoutSettings.md#payoutsettingsdeletepayoutdestination
     */
    deletePayoutDestinationWithResponse(payout_destination_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PayoutDestinationResponse>>;
    /**
 * Returns one payout destination by ID.
 * @see reference/payoutSettings.md#payoutsettingsgetpayoutdestination
 * GET /v1/payout-destinations/{payout_destination_id}
 * @example
 * client.payoutSettings.getPayoutDestination("example")
 */
    getPayoutDestination(payout_destination_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PayoutDestination>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payoutSettings.md#payoutsettingsgetpayoutdestination
     */
    getPayoutDestinationWithResponse(payout_destination_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PayoutDestinationResponse>>;
    /**
 * Returns payout settings that control default payout behavior for the authenticated merchant.
 * @see reference/payoutSettings.md#payoutsettingsget
 * GET /v1/payout-settings
 * @example
 * client.payoutSettings.get()
 */
    get(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PayoutSettings>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payoutSettings.md#payoutsettingsget
     */
    getWithResponse(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PayoutSettingsResponse>>;
    /**
 * Returns a paginated list of payout destinations available to the authenticated merchant. Default
 * order: created_at descending, then payout_destination_id descending.
 * @see reference/payoutSettings.md#payoutsettingslistpayoutdestinations
 * GET /v1/payout-destinations
 * @example
 * client.payoutSettings.listPayoutDestinations()
 */
    listPayoutDestinations(params?: {
        "currency"?: InputValue<string>;
        "type"?: InputValue<Array<"bank_account" | "debit_card">>;
        "status"?: InputValue<Array<"pending" | "active" | "verification_required" | "disabled" | "archived" | "failed">>;
        "available_payout_methods"?: InputValue<Array<"standard">>;
        "default_for_currency"?: InputValue<boolean>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PayoutDestinationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payoutSettings.md#payoutsettingslistpayoutdestinations
     */
    listPayoutDestinationsWithResponse(params?: {
        "currency"?: InputValue<string>;
        "type"?: InputValue<Array<"bank_account" | "debit_card">>;
        "status"?: InputValue<Array<"pending" | "active" | "verification_required" | "disabled" | "archived" | "failed">>;
        "available_payout_methods"?: InputValue<Array<"standard">>;
        "default_for_currency"?: InputValue<boolean>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PayoutDestinationListResponse>>;
    /** Iterate pages lazily.
     * @see reference/payoutSettings.md#payoutsettingslistpayoutdestinations
     */
    listPayoutDestinationsPages(params?: {
        "currency"?: InputValue<string>;
        "type"?: InputValue<Array<"bank_account" | "debit_card">>;
        "status"?: InputValue<Array<"pending" | "active" | "verification_required" | "disabled" | "archived" | "failed">>;
        "available_payout_methods"?: InputValue<Array<"standard">>;
        "default_for_currency"?: InputValue<boolean>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PayoutDestinationListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/payoutSettings.md#payoutsettingslistpayoutdestinations
     */
    listPayoutDestinationsPagesWithResponse(params?: {
        "currency"?: InputValue<string>;
        "type"?: InputValue<Array<"bank_account" | "debit_card">>;
        "status"?: InputValue<Array<"pending" | "active" | "verification_required" | "disabled" | "archived" | "failed">>;
        "available_payout_methods"?: InputValue<Array<"standard">>;
        "default_for_currency"?: InputValue<boolean>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<PayoutDestinationListResponse>>;
    /** Iterate items lazily.
     * @see reference/payoutSettings.md#payoutsettingslistpayoutdestinations
     */
    listPayoutDestinationsItems(params?: {
        "currency"?: InputValue<string>;
        "type"?: InputValue<Array<"bank_account" | "debit_card">>;
        "status"?: InputValue<Array<"pending" | "active" | "verification_required" | "disabled" | "archived" | "failed">>;
        "available_payout_methods"?: InputValue<Array<"standard">>;
        "default_for_currency"?: InputValue<boolean>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PayoutDestination>;
    /**
 * Updates mutable metadata and settings for a payout destination. Safe to retry with the same
 * Idempotency-Key.
 * @see reference/payoutSettings.md#payoutsettingsupdatepayoutdestination
 * PATCH /v1/payout-destinations/{payout_destination_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payoutSettings.updatePayoutDestination("example", {}, { idempotencyKey: idempotencyKey })
 */
    updatePayoutDestination(payout_destination_id: InputValue<string>, params: (InputValue<UpdatePayoutDestinationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PayoutDestination>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payoutSettings.md#payoutsettingsupdatepayoutdestination
     */
    updatePayoutDestinationWithResponse(payout_destination_id: InputValue<string>, params: (InputValue<UpdatePayoutDestinationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PayoutDestinationResponse>>;
    /**
 * Updates mutable payout settings for the authenticated merchant. Safe to retry with the same
 * Idempotency-Key.
 * @see reference/payoutSettings.md#payoutsettingsupdate
 * PATCH /v1/payout-settings
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payoutSettings.update({}, { idempotencyKey: idempotencyKey })
 */
    update(params: (InputValue<UpdatePayoutSettingsRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PayoutSettings>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payoutSettings.md#payoutsettingsupdate
     */
    updateWithResponse(params: (InputValue<UpdatePayoutSettingsRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PayoutSettingsResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly payoutSettings: PayoutSettingsResource;
}
