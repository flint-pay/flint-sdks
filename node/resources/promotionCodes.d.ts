import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { PromotionCode, PromotionCodeListResponse, PromotionCodesListParams, PromotionCodesSummary } from '../declarations/types-45.js';
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
    PromotionCodesListParams,
    PromotionCodeListResponse,
    PromotionCode,
    PromotionCodesSummary,
    PromotionPercentOffMethod,
    PromotionRuleGroup,
    PromotionRule,
    PromotionRuleValue,
    PromotionRecurrence,
    PromotionRecurrenceOnce,
    PromotionRecurrenceRepeating,
    PromotionRecurrenceForever,
    PromotionCombinesWith,
    PromotionExclusivity,
    PromotionSchedule
} from '../declarations/types-45.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { MetadataMap } from '../declarations/types-34.js';
export type { Promotion, PromotionApplicationMethod, PromotionAmountOffMethod, PromotionBuyXGetYMethod } from '../declarations/types-44.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export {
    makePromotionRecurrence,
    makePromotionRecurrenceForever,
    makePromotionRecurrenceOnce,
    makePromotionRecurrenceRepeating
} from '../declarations/types-71.js';
export interface PromotionCodesResource {
    /**
 * Returns a paginated list of promotion codes in every status, ordered by created_at descending,
 * then promotion_code_id descending. Archived codes are excluded unless status=archived. Default
 * order: created_at descending, then promotion_code_id descending.
 *
 * `GET /v1/promotion-codes`
 * @see https://developers.withflintpay.com/docs/api/promotions#listPromotionCodes
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.promotionCodes.list()
 */
    list(params?: PromotionCodesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PromotionCodeListResponse, PromotionCodeListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/promotions#listPromotionCodes
     */
    listPages(params?: PromotionCodesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PromotionCodeListResponse, PromotionCodeListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/promotions#listPromotionCodes
     */
    listItems(params?: PromotionCodesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PromotionCode>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly promotionCodes: PromotionCodesResource;
}
