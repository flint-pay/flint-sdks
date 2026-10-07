export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { PayoutDestination } from '../declarations/PayoutDestination.js';
import type { PayoutDestinationListResponse } from '../declarations/PayoutDestinationListResponse.js';
import type { PayoutDestinationResponse } from '../declarations/PayoutDestinationResponse.js';
import type { PayoutSettings } from '../declarations/PayoutSettings.js';
import type { PayoutSettingsDeletePayoutDestinationInput } from '../declarations/PayoutSettingsDeletePayoutDestinationInput.js';
import type { PayoutSettingsDeletePayoutDestinationResponse } from '../declarations/PayoutSettingsDeletePayoutDestinationResponse.js';
import type { PayoutSettingsGetInput } from '../declarations/PayoutSettingsGetInput.js';
import type { PayoutSettingsGetPayoutDestinationInput } from '../declarations/PayoutSettingsGetPayoutDestinationInput.js';
import type { PayoutSettingsGetPayoutDestinationResponse } from '../declarations/PayoutSettingsGetPayoutDestinationResponse.js';
import type { PayoutSettingsGetResponse } from '../declarations/PayoutSettingsGetResponse.js';
import type { PayoutSettingsInput } from '../declarations/PayoutSettingsInput.js';
import type { PayoutSettingsListPayoutDestinationsInput } from '../declarations/PayoutSettingsListPayoutDestinationsInput.js';
import type { PayoutSettingsListPayoutDestinationsResponse } from '../declarations/PayoutSettingsListPayoutDestinationsResponse.js';
import type { PayoutSettingsResponse } from '../declarations/PayoutSettingsResponse.js';
import type { PayoutSettingsResponseInput } from '../declarations/PayoutSettingsResponseInput.js';
import type { PayoutSettingsUpdateInput } from '../declarations/PayoutSettingsUpdateInput.js';
import type { PayoutSettingsUpdatePayoutDestinationInput } from '../declarations/PayoutSettingsUpdatePayoutDestinationInput.js';
import type { PayoutSettingsUpdatePayoutDestinationResponse } from '../declarations/PayoutSettingsUpdatePayoutDestinationResponse.js';
import type { PayoutSettingsUpdateResponse } from '../declarations/PayoutSettingsUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface PayoutSettingsResource {
    /**
 * Disables an eligible payout destination and returns its final state. Safe to retry with the same Idempotency-Key.
 * DELETE /v1/payout-settings/destinations/{payout_destination_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payoutSettings.deletePayoutDestination("example", {}, { idempotencyKey: idempotencyKey })
 */
    deletePayoutDestination(payout_destination_id: InputValue<string>, params: (InputValue<{  [key: string]: unknown; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PayoutDestinationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    deletePayoutDestinationWithResponse(payout_destination_id: InputValue<string>, params: (InputValue<{  [key: string]: unknown; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PayoutSettingsDeletePayoutDestinationResponse>>;
    /**
 * Returns one payout destination by ID.
 * GET /v1/payout-settings/destinations/{payout_destination_id}
 * @example
 * client.payoutSettings.getPayoutDestination("example")
 */
    getPayoutDestination(payout_destination_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<PayoutDestinationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getPayoutDestinationWithResponse(payout_destination_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PayoutSettingsGetPayoutDestinationResponse>>;
    /**
 * Returns payout settings that control default payout behavior for the authenticated merchant.
 * GET /v1/payout-settings
 * @example
 * client.payoutSettings.get()
 */
    get(params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<PayoutSettingsResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PayoutSettingsGetResponse>>;
    /**
 * Returns a paginated list of payout destinations available to the authenticated merchant.
 * GET /v1/payout-settings/destinations
 * @example
 * client.payoutSettings.listPayoutDestinations()
 */
    listPayoutDestinations(params?: { "currency"?: InputValue<string>; "type"?: InputValue<"bank_account" | "debit_card">; "status"?: InputValue<"pending" | "active" | "verification_required" | "disabled" | "deleted" | "failed">; "available_payout_method"?: InputValue<"standard">; "default_for_currency"?: InputValue<boolean>; "include_deleted"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PayoutDestinationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listPayoutDestinationsWithResponse(params?: { "currency"?: InputValue<string>; "type"?: InputValue<"bank_account" | "debit_card">; "status"?: InputValue<"pending" | "active" | "verification_required" | "disabled" | "deleted" | "failed">; "available_payout_method"?: InputValue<"standard">; "default_for_currency"?: InputValue<boolean>; "include_deleted"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PayoutSettingsListPayoutDestinationsResponse>>;
    listPayoutDestinationsPages(params?: { "currency"?: InputValue<string>; "type"?: InputValue<"bank_account" | "debit_card">; "status"?: InputValue<"pending" | "active" | "verification_required" | "disabled" | "deleted" | "failed">; "available_payout_method"?: InputValue<"standard">; "default_for_currency"?: InputValue<boolean>; "include_deleted"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PayoutDestinationListResponse>;
    listPayoutDestinationsPagesWithResponse(params?: { "currency"?: InputValue<string>; "type"?: InputValue<"bank_account" | "debit_card">; "status"?: InputValue<"pending" | "active" | "verification_required" | "disabled" | "deleted" | "failed">; "available_payout_method"?: InputValue<"standard">; "default_for_currency"?: InputValue<boolean>; "include_deleted"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PayoutSettingsListPayoutDestinationsResponse>>;
    listPayoutDestinationsItems(params?: { "currency"?: InputValue<string>; "type"?: InputValue<"bank_account" | "debit_card">; "status"?: InputValue<"pending" | "active" | "verification_required" | "disabled" | "deleted" | "failed">; "available_payout_method"?: InputValue<"standard">; "default_for_currency"?: InputValue<boolean>; "include_deleted"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PayoutDestination>;
    /**
 * Updates mutable metadata and settings for a payout destination. Safe to retry with the same Idempotency-Key.
 * PATCH /v1/payout-settings/destinations/{payout_destination_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payoutSettings.updatePayoutDestination("example", {}, { idempotencyKey: idempotencyKey })
 */
    updatePayoutDestination(payout_destination_id: InputValue<string>, params: (InputValue<{ "metadata"?: Record<string, string | null> | null; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PayoutDestinationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updatePayoutDestinationWithResponse(payout_destination_id: InputValue<string>, params: (InputValue<{ "metadata"?: Record<string, string | null> | null; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PayoutSettingsUpdatePayoutDestinationResponse>>;
    /**
 * Updates mutable payout settings for the authenticated merchant. Safe to retry with the same Idempotency-Key.
 * PATCH /v1/payout-settings
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payoutSettings.update({}, { idempotencyKey: idempotencyKey })
 */
    update(params: (InputValue<{ "default_payout_destinations"?: Record<string, string>; "delay_days_override"?: number | null; "interval"?: "manual" | "daily" | "weekly" | "monthly"; "minimum_balance_by_currency"?: Record<string, (({ "amount": string; "currency": string; }) | (null))>; "monthly_payout_days"?: Array<number>; "statement_descriptor"?: string; "weekly_payout_days"?: Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday">; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PayoutSettingsResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(params: (InputValue<{ "default_payout_destinations"?: Record<string, string>; "delay_days_override"?: number | null; "interval"?: "manual" | "daily" | "weekly" | "monthly"; "minimum_balance_by_currency"?: Record<string, (({ "amount": string; "currency": string; }) | (null))>; "monthly_payout_days"?: Array<number>; "statement_descriptor"?: string; "weekly_payout_days"?: Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday">; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PayoutSettingsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly payoutSettings: PayoutSettingsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { PayoutDestinationResponse } from '../declarations/PayoutDestinationResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { PayoutSettingsDeletePayoutDestinationResponse } from '../declarations/PayoutSettingsDeletePayoutDestinationResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { PayoutSettingsGetPayoutDestinationResponse } from '../declarations/PayoutSettingsGetPayoutDestinationResponse.js';
export type { PayoutSettingsResponse } from '../declarations/PayoutSettingsResponse.js';
export type { PayoutSettingsGetResponse } from '../declarations/PayoutSettingsGetResponse.js';
export type { PayoutDestinationListResponse } from '../declarations/PayoutDestinationListResponse.js';
export type { PayoutSettingsListPayoutDestinationsResponse } from '../declarations/PayoutSettingsListPayoutDestinationsResponse.js';
export type { PayoutDestination } from '../declarations/PayoutDestination.js';
export type { PayoutSettingsUpdatePayoutDestinationResponse } from '../declarations/PayoutSettingsUpdatePayoutDestinationResponse.js';
export type { PayoutSettingsUpdateResponse } from '../declarations/PayoutSettingsUpdateResponse.js';
export type { PayoutSettings } from '../declarations/PayoutSettings.js';
export type { PayoutSettingsInput } from '../declarations/PayoutSettingsInput.js';
export type { PayoutSettingsResponseInput } from '../declarations/PayoutSettingsResponseInput.js';
export type { PayoutSettingsDeletePayoutDestinationInput } from '../declarations/PayoutSettingsDeletePayoutDestinationInput.js';
export type { PayoutSettingsGetPayoutDestinationInput } from '../declarations/PayoutSettingsGetPayoutDestinationInput.js';
export type { PayoutSettingsGetInput } from '../declarations/PayoutSettingsGetInput.js';
export type { PayoutSettingsListPayoutDestinationsInput } from '../declarations/PayoutSettingsListPayoutDestinationsInput.js';
export type { PayoutSettingsUpdatePayoutDestinationInput } from '../declarations/PayoutSettingsUpdatePayoutDestinationInput.js';
export type { PayoutSettingsUpdateInput } from '../declarations/PayoutSettingsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { MoneyMovementListMeta } from '../declarations/MoneyMovementListMeta.js';
export type { MoneyMovementHistoryMeta } from '../declarations/MoneyMovementHistoryMeta.js';
export type { MoneyMovementBlockedReason } from '../declarations/MoneyMovementBlockedReason.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { ResponseMetaInput } from '../declarations/ResponseMetaInput.js';
export type { ResponseWarningInput } from '../declarations/ResponseWarningInput.js';
export type { NextActionInput } from '../declarations/NextActionInput.js';
export type { NextActionMerchantAccountSessionInput } from '../declarations/NextActionMerchantAccountSessionInput.js';
export type { CancelPayoutRequestInput } from '../declarations/CancelPayoutRequestInput.js';
export type { UpdatePayoutDestinationRequestInput } from '../declarations/UpdatePayoutDestinationRequestInput.js';
export type { UpdatePayoutSettingsRequestInput } from '../declarations/UpdatePayoutSettingsRequestInput.js';
export { makePayoutDestinationResponse } from '../declarations/makePayoutDestinationResponse.js';
export { makePayoutSettingsResponse } from '../declarations/makePayoutSettingsResponse.js';
export { makePayoutDestinationListResponse } from '../declarations/makePayoutDestinationListResponse.js';
export { makePayoutDestination } from '../declarations/makePayoutDestination.js';
export { makePayoutSettings } from '../declarations/makePayoutSettings.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeMoneyMovementListMeta } from '../declarations/makeMoneyMovementListMeta.js';
export { makeMoneyMovementHistoryMeta } from '../declarations/makeMoneyMovementHistoryMeta.js';
export { makeMoneyMovementBlockedReason } from '../declarations/makeMoneyMovementBlockedReason.js';
