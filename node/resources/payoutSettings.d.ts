import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    PayoutSettings,
    PayoutSettingsGetParams,
    PayoutSettingsResponse,
    PayoutSettingsUpdateParams,
    PayoutSettingsUpdatedInstalledMerchantsEvent,
    PayoutSettingsUpdatedMerchantEvent
} from '../declarations/types-48.js';
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
    PayoutSettingsGetParams,
    PayoutSettings,
    PayoutSettingsResponse,
    PayoutSettingsUpdateParams,
    PayoutSettingsUpdatedInstalledMerchantsEvent,
    PayoutSettingsUpdatedMerchantEvent
} from '../declarations/types-48.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-54.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MoneyMovementBlockedReason, MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { UpdatePayoutSettingsRequestInput } from '../declarations/types-67.js';
export type { PartnerWebhookEnvelope } from '../declarations/types-44.js';
export type { WebhookEventSource } from '../declarations/types-69.js';
export type { MerchantWebhookEnvelope } from '../declarations/types-38.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export { makeUpdatePayoutSettingsRequest } from '../declarations/types-84.js';
export interface PayoutSettingsResource {
    /**
 * Returns payout settings that control default payout behavior for the authenticated merchant.
 *
 * `GET /v1/payout-settings`
 * @see https://developers.withflintpay.com/docs/api/money-movement#getPayoutSettings
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.payoutSettings.get()
 */
    get(params?: PayoutSettingsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PayoutSettings, PayoutSettingsResponse>>;
    /**
 * Updates mutable payout settings for the authenticated merchant, including the default payout
 * destination for each currency. Changing defaults requires expected_version, and each new default
 * must be an active destination in its currency. Safe to retry with the same idempotency key.
 *
 * `PATCH /v1/payout-settings`
 * @see https://developers.withflintpay.com/docs/api/money-movement#updatePayoutSettings
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payoutSettings.update({interval: "manual"}, { idempotencyKey: idempotencyKey })
 */
    update(params: PayoutSettingsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PayoutSettings, PayoutSettingsResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly payoutSettings: PayoutSettingsResource;
}
