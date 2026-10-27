import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { PayoutDestination, PayoutDestinationListResponse, PayoutDestinationResponse } from '../declarations/types-36.js';
import type {
    PayoutSettings,
    PayoutSettingsDeletePayoutDestinationInput,
    PayoutSettingsGetInput,
    PayoutSettingsGetPayoutDestinationInput,
    PayoutSettingsListPayoutDestinationsInput,
    PayoutSettingsResponse,
    PayoutSettingsUpdateInput,
    PayoutSettingsUpdatePayoutDestinationInput
} from '../declarations/types-37.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { UpdatePayoutDestinationRequestInput, UpdatePayoutSettingsRequestInput } from '../declarations/types-48.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    SdkErrorDetails
} from '../runtime.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { PayoutDestination, PayoutDestinationResponse, PayoutDestinationListResponse } from '../declarations/types-36.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type {
    PayoutSettings,
    PayoutSettingsResponse,
    PayoutSettingsDeletePayoutDestinationInput,
    PayoutSettingsGetPayoutDestinationInput,
    PayoutSettingsGetInput,
    PayoutSettingsListPayoutDestinationsInput,
    PayoutSettingsUpdatePayoutDestinationInput,
    PayoutSettingsUpdateInput
} from '../declarations/types-37.js';
export type {
    UpdatePayoutDestinationRequestInput,
    UpdatePayoutSettingsRequestInput,
    UpdatePayoutDestinationRequest
} from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type {
    NextAction,
    NextActionMerchantAccountSession,
    MoneyValue,
    MoneyMovementBlockedReason,
    MoneyMovementListMeta,
    MoneyMovementHistoryMeta,
    MoneyValueInput
} from '../declarations/types-31.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdatePayoutDestinationRequest, makeUpdatePayoutSettingsRequest } from '../declarations/types-72.js';
export interface PayoutSettingsResource {
    /**
 * Disables an eligible payout destination and returns its final state. Safe to retry with the same
 * Idempotency-Key.
 * @see reference/payoutSettings.md#payoutsettingsdeletepayoutdestination
 * DELETE /v1/payout-settings/destinations/{payout_destination_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payoutSettings.deletePayoutDestination("example", {}, { idempotencyKey: idempotencyKey })
 */
    deletePayoutDestination(payout_destination_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<PayoutDestination>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payoutSettings.md#payoutsettingsdeletepayoutdestination
     */
    deletePayoutDestinationWithResponse(payout_destination_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PayoutDestinationResponse>>;
    /**
 * Returns one payout destination by ID.
 * @see reference/payoutSettings.md#payoutsettingsgetpayoutdestination
 * GET /v1/payout-settings/destinations/{payout_destination_id}
 * @example
 * client.payoutSettings.getPayoutDestination("example")
 */
    getPayoutDestination(payout_destination_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PayoutDestination>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payoutSettings.md#payoutsettingsgetpayoutdestination
     */
    getPayoutDestinationWithResponse(payout_destination_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PayoutDestinationResponse>>;
    /**
 * Returns payout settings that control default payout behavior for the authenticated merchant.
 * @see reference/payoutSettings.md#payoutsettingsget
 * GET /v1/payout-settings
 * @example
 * client.payoutSettings.get()
 */
    get(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PayoutSettings>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payoutSettings.md#payoutsettingsget
     */
    getWithResponse(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PayoutSettingsResponse>>;
    /**
 * Returns a paginated list of payout destinations available to the authenticated merchant.
 * @see reference/payoutSettings.md#payoutsettingslistpayoutdestinations
 * GET /v1/payout-settings/destinations
 * @example
 * client.payoutSettings.listPayoutDestinations()
 */
    listPayoutDestinations(params?: {
        "currency"?: InputValue<string>;
        "type"?: InputValue<Array<"bank_account" | "debit_card">>;
        "status"?: InputValue<Array<"pending" | "active" | "verification_required" | "disabled" | "archived" | "failed">>;
        "available_payout_method"?: InputValue<Array<"standard">>;
        "default_for_currency"?: InputValue<boolean>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PayoutDestinationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payoutSettings.md#payoutsettingslistpayoutdestinations
     */
    listPayoutDestinationsWithResponse(params?: {
        "currency"?: InputValue<string>;
        "type"?: InputValue<Array<"bank_account" | "debit_card">>;
        "status"?: InputValue<Array<"pending" | "active" | "verification_required" | "disabled" | "archived" | "failed">>;
        "available_payout_method"?: InputValue<Array<"standard">>;
        "default_for_currency"?: InputValue<boolean>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PayoutDestinationListResponse>>;
    /** Iterate pages lazily.
     * @see reference/payoutSettings.md#payoutsettingslistpayoutdestinations
     */
    listPayoutDestinationsPages(params?: {
        "currency"?: InputValue<string>;
        "type"?: InputValue<Array<"bank_account" | "debit_card">>;
        "status"?: InputValue<Array<"pending" | "active" | "verification_required" | "disabled" | "archived" | "failed">>;
        "available_payout_method"?: InputValue<Array<"standard">>;
        "default_for_currency"?: InputValue<boolean>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PayoutDestinationListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/payoutSettings.md#payoutsettingslistpayoutdestinations
     */
    listPayoutDestinationsPagesWithResponse(params?: {
        "currency"?: InputValue<string>;
        "type"?: InputValue<Array<"bank_account" | "debit_card">>;
        "status"?: InputValue<Array<"pending" | "active" | "verification_required" | "disabled" | "archived" | "failed">>;
        "available_payout_method"?: InputValue<Array<"standard">>;
        "default_for_currency"?: InputValue<boolean>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PayoutDestinationListResponse>>;
    /** Iterate items lazily.
     * @see reference/payoutSettings.md#payoutsettingslistpayoutdestinations
     */
    listPayoutDestinationsItems(params?: {
        "currency"?: InputValue<string>;
        "type"?: InputValue<Array<"bank_account" | "debit_card">>;
        "status"?: InputValue<Array<"pending" | "active" | "verification_required" | "disabled" | "archived" | "failed">>;
        "available_payout_method"?: InputValue<Array<"standard">>;
        "default_for_currency"?: InputValue<boolean>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PayoutDestination>;
    /**
 * Updates mutable metadata and settings for a payout destination. Safe to retry with the same
 * Idempotency-Key.
 * @see reference/payoutSettings.md#payoutsettingsupdatepayoutdestination
 * PATCH /v1/payout-settings/destinations/{payout_destination_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payoutSettings.updatePayoutDestination("example", {}, { idempotencyKey: idempotencyKey })
 */
    updatePayoutDestination(payout_destination_id: InputValue<string>, params: (InputValue<UpdatePayoutDestinationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<PayoutDestination>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payoutSettings.md#payoutsettingsupdatepayoutdestination
     */
    updatePayoutDestinationWithResponse(payout_destination_id: InputValue<string>, params: (InputValue<UpdatePayoutDestinationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PayoutDestinationResponse>>;
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
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<PayoutSettings>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payoutSettings.md#payoutsettingsupdate
     */
    updateWithResponse(params: (InputValue<UpdatePayoutSettingsRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PayoutSettingsResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly payoutSettings: PayoutSettingsResource;
}
