import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { PromotionCode, PromotionCodeListResponse, PromotionCodesListParams, PromotionCodesSummary } from '../declarations/types-45.js';
import type { RequestOptions } from '../declarations/types-48.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
    Promotion,
    PromotionApplicationMethod,
    PromotionPercentOffMethod,
    PromotionRecurrence,
    PromotionRecurrenceForever,
    PromotionAmountOffMethod,
    PromotionBuyXGetYMethod,
    PromotionCombinesWith,
    PromotionExclusivity
} from '../declarations/types-45.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { NextAction, MoneyValue, MetadataMap } from '../declarations/types-35.js';
export type {
    ReadinessMerchantAccountSession,
    PromotionRuleGroup,
    PromotionRule,
    PromotionRuleValue,
    PromotionRecurrenceOnce,
    PromotionRecurrenceRepeating,
    PromotionSchedule
} from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-70.js';
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
