import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { Promotion } from '../declarations/types-48.js';
import type {
    PromotionListResponse,
    PromotionResponse,
    PromotionsCreateParams,
    PromotionsDeleteParams,
    PromotionsGetParams,
    PromotionsListParams,
    PromotionsUpdateParams
} from '../declarations/types-49.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
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
    PromotionsCreateParams,
    PromotionResponse,
    PromotionsDeleteParams,
    PromotionsGetParams,
    PromotionsListParams,
    PromotionListResponse,
    PromotionsUpdateParams,
    PromotionPercentOffMethodRequestInput,
    PromotionRuleGroupRequestInput,
    PromotionRuleRequestInput,
    PromotionRuleValueRequestInput,
    PromotionRecurrenceRequestInput,
    PromotionRecurrenceOnceRequestInput,
    PromotionRecurrenceRepeatingRequestInput,
    PromotionRecurrenceForeverRequestInput,
    PromotionExclusivityRequestInput,
    PromotionScheduleRequestInput,
    PromotionPercentOffMethod,
    PromotionRuleGroup,
    PromotionRule,
    PromotionRuleValue,
    PromotionRecurrence,
    PromotionRecurrenceOnce,
    PromotionRecurrenceRepeating,
    PromotionRecurrenceForever,
    PromotionSchedule,
    ReadinessMerchantAccountSession,
    PromotionExclusivityPatchInput,
    PromotionSchedulePatchInput,
    PromotionExclusivityRequest
} from '../declarations/types-49.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type {
    Promotion,
    PromotionApplicationMethodRequestInput,
    PromotionAmountOffMethodRequestInput,
    PromotionBuyXGetYMethodRequestInput,
    PromotionCodeRequestInput,
    PromotionCombinesWithRequestInput,
    PromotionApplicationMethod,
    PromotionAmountOffMethod,
    PromotionBuyXGetYMethod,
    PromotionCode,
    PromotionCodesSummary,
    PromotionCombinesWith,
    PromotionExclusivity,
    PromotionApplicationMethodPatchInput,
    PromotionCombinesWithPatchInput,
    PromotionCombinesWithPatch,
    PromotionExclusivityPatch
} from '../declarations/types-48.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreatePromotionRequestInput } from '../declarations/types-11.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-37.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-36.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { UpdatePromotionRequestInput } from '../declarations/types-64.js';
export type { CategoriesDeleteParams } from '../declarations/types-4.js';
export type { DisputesAcceptParams } from '../declarations/types-22.js';
export { makeCreatePromotionRequest } from '../declarations/types-70.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-74.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export {
    makePromotionAmountOffMethodRequest,
    makePromotionApplicationMethodPatch,
    makePromotionApplicationMethodRequest,
    makePromotionBuyXGetYMethodRequest,
    makePromotionCodeRequest,
    makePromotionCombinesWithPatch,
    makePromotionCombinesWithRequest,
    makePromotionExclusivityPatch,
    makePromotionExclusivityRequest,
    makePromotionPercentOffMethodRequest,
    makePromotionRecurrenceForeverRequest,
    makePromotionRecurrenceOnceRequest,
    makePromotionRecurrenceRepeatingRequest,
    makePromotionRecurrenceRequest,
    makePromotionRuleGroupRequest,
    makePromotionRuleRequest,
    makePromotionRuleValueRequest,
    makePromotionSchedulePatch,
    makePromotionScheduleRequest
} from '../declarations/types-76.js';
export { makeUpdatePromotionRequest } from '../declarations/types-80.js';
export interface PromotionsResource {
    /**
 * Creates a promotion: a discount that applies to qualifying orders automatically or when the
 * buyer enters a promotion code. Send `name` and `application_method`; `redemption_type` chooses
 * between automatic and code-gated, and a code-gated promotion can create up to 100 `codes` with
 * it. Eligibility rules, a schedule, a redemption limit, and exclusivity are optional. The
 * promotion is active unless you send `status: inactive`. A code that another resource already
 * uses fails with `ALREADY_EXISTS`.
 *
 * `POST /v1/promotions`
 * @see https://developers.withflintpay.com/docs/api/promotions#createPromotion
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.create({application_method: {type: "percent_off", percent_off: 1}, name:
 * "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: PromotionsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Promotion, PromotionResponse>>;
    /**
 * Archives a promotion and returns it as a read does. Deleting an already archived promotion
 * returns it again without changing its version or `updated_at`, sending a webhook, or checking
 * references.
 *
 * `DELETE /v1/promotions/{promotion_id}`
 * @param promotion_id Flint promotion ID.
 * @see https://developers.withflintpay.com/docs/api/promotions#deletePromotion
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.delete("promo_01KEZF7C00QQ8EZ74BDYSZ315V", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(promotion_id: InputValue<string>, params?: PromotionsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Promotion, PromotionResponse>>;
    /**
 * Returns a single promotion by ID.
 *
 * `GET /v1/promotions/{promotion_id}`
 * @param promotion_id Flint promotion ID.
 * @see https://developers.withflintpay.com/docs/api/promotions#getPromotion
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.promotions.get("promo_01KEZF7C00QQ8EZ74BDYSZ315V")
 */
    get(promotion_id: InputValue<string>, params?: PromotionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Promotion, PromotionResponse>>;
    /**
 * Returns a paginated list of promotions for the authenticated merchant. Default order: created_at
 * descending, then promotion_id descending.
 *
 * `GET /v1/promotions`
 * @see https://developers.withflintpay.com/docs/api/promotions#listPromotions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.promotions.list()
 */
    list(params?: PromotionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PromotionListResponse, PromotionListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/promotions#listPromotions
     */
    listPages(params?: PromotionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PromotionListResponse, PromotionListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/promotions#listPromotions
     */
    listItems(params?: PromotionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Promotion>;
    /**
 * Applies a sparse update to promotion fields. application_method, schedule, exclusivity, and
 * combines_with patch by subfield presence. Omitted fields retain stored values; null clears only
 * nullable fields. Sending a different application_method.type replaces the effect while
 * preserving omitted shared settings, including discounted_item_rules. A redeemed promotion can't
 * change its `discount_class` or `application_method` type; the update fails with
 * `ACTION_NOT_ALLOWED` and reason `field_locked`. Archived promotions cannot be changed. Fails
 * with `ACTION_NOT_ALLOWED` and reason `archived` when the resource, or the parent it belongs to,
 * is archived. The error names the archived resource and its `current_status`.
 *
 * `PATCH /v1/promotions/{promotion_id}`
 * @param promotion_id Flint promotion ID.
 * @see https://developers.withflintpay.com/docs/api/promotions#updatePromotion
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.update("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV", {description: "Selected spring
 * products"}, { idempotencyKey: idempotencyKey })
 */
    update(promotion_id: InputValue<string>, params: PromotionsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Promotion, PromotionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly promotions: PromotionsResource;
}
