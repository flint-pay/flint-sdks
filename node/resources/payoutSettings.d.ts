import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { PayoutSettings, PayoutSettingsGetParams, PayoutSettingsResponse, PayoutSettingsUpdateParams } from '../declarations/types-43.js';
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
export type { PayoutSettingsGetParams, PayoutSettings, PayoutSettingsResponse, PayoutSettingsUpdateParams } from '../declarations/types-43.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MoneyMovementBlockedReason, MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { UpdatePayoutSettingsRequestInput } from '../declarations/types-59.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdatePayoutSettingsRequest } from '../declarations/types-74.js';
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
 * Updates mutable payout settings for the authenticated merchant. Safe to retry with the same
 * Idempotency-Key.
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
