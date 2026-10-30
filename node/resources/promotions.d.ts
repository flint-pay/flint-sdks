import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { Promotion } from '../declarations/types-44.js';
import type {
    PromotionCode,
    PromotionCodeResponse,
    PromotionListResponse,
    PromotionResponse,
    PromotionsCreateCodeParams
} from '../declarations/types-45.js';
import type {
    PromotionsCreateParams,
    PromotionsDeleteCodeParams,
    PromotionsDeleteParams,
    PromotionsGetCodeParams,
    PromotionsGetParams,
    PromotionsListParams,
    PromotionsUpdateCodeParams,
    PromotionsUpdateParams
} from '../declarations/types-46.js';
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
    PromotionsCreateParams,
    PromotionsDeleteParams,
    PromotionsDeleteCodeParams,
    PromotionsGetParams,
    PromotionsGetCodeParams,
    PromotionsListParams,
    PromotionsUpdateParams,
    PromotionsUpdateCodeParams,
    ReadinessMerchantAccountSession
} from '../declarations/types-46.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    Promotion,
    PromotionApplicationMethodRequestInput,
    PromotionAmountOffMethodRequestInput,
    PromotionApplicationMethod,
    PromotionAmountOffMethod,
    PromotionBuyXGetYMethod,
    PromotionApplicationMethodPatchInput
} from '../declarations/types-44.js';
export type {
    PromotionResponse,
    PromotionsCreateCodeParams,
    PromotionCode,
    PromotionCodeResponse,
    PromotionListResponse,
    PromotionPercentOffMethodRequestInput,
    PromotionRuleGroupRequestInput,
    PromotionRuleRequestInput,
    PromotionRuleValueRequestInput,
    PromotionRecurrenceInput,
    PromotionRecurrenceOnceInput,
    PromotionRecurrenceRepeatingInput,
    PromotionRecurrenceForeverInput,
    PromotionBuyXGetYMethodRequestInput,
    PromotionCombinesWithRequestInput,
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
    PromotionCodesSummary,
    PromotionCombinesWith,
    PromotionExclusivity,
    PromotionSchedule,
    PromotionCombinesWithPatchInput,
    PromotionExclusivityPatchInput,
    PromotionSchedulePatchInput,
    PromotionCombinesWithPatch,
    PromotionExclusivityRequest,
    PromotionExclusivityPatch
} from '../declarations/types-45.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreatePromotionRequestInput, CreatePromotionCodeRequestInput } from '../declarations/types-10.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-35.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { UpdatePromotionRequestInput, UpdatePromotionCodeRequestInput } from '../declarations/types-59.js';
export type { CategoriesDeleteParams } from '../declarations/types-4.js';
export { makeCreatePromotionCodeRequest, makeCreatePromotionRequest } from '../declarations/types-64.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export {
    makePromotionAmountOffMethodRequest,
    makePromotionApplicationMethodPatch,
    makePromotionApplicationMethodRequest,
    makePromotionBuyXGetYMethodRequest,
    makePromotionCombinesWithPatch,
    makePromotionCombinesWithRequest,
    makePromotionExclusivityPatch,
    makePromotionExclusivityRequest,
    makePromotionPercentOffMethodRequest,
    makePromotionRecurrence,
    makePromotionRecurrenceForever,
    makePromotionRecurrenceOnce,
    makePromotionRecurrenceRepeating,
    makePromotionRuleGroupRequest,
    makePromotionRuleRequest,
    makePromotionRuleValueRequest,
    makePromotionSchedulePatch,
    makePromotionScheduleRequest
} from '../declarations/types-71.js';
export { makeUpdatePromotionCodeRequest, makeUpdatePromotionRequest } from '../declarations/types-74.js';
export interface PromotionsResource {
    /**
 * Creates a promotion for the authenticated merchant.
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
 * Creates a code for a code-gated promotion. An archived resource returns 409 ACTION_NOT_ALLOWED
 * with reason archived and current_status archived. The error identifies the archived resource; a
 * create under an archived parent identifies that parent.
 *
 * `POST /v1/promotions/{promotion_id}/codes`
 * @param promotion_id Flint promotion ID.
 * @see https://developers.withflintpay.com/docs/api/promotions#createPromotionCode
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.createCode("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV", {code: "VIP20", expires_at:
 * "2026-04-01T00:00:00Z", max_uses: 100, metadata: {audience: "vip"}}, { idempotencyKey:
 * idempotencyKey })
 */
    createCode(promotion_id: InputValue<string>, params: PromotionsCreateCodeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PromotionCode, PromotionCodeResponse>>;
    /**
 * Archives a promotion and returns the resource exactly as GET returns it. Repeating DELETE
 * returns 200 without changing version or updated_at, sending a webhook, or checking references.
 *
 * `DELETE /v1/promotions/{promotion_id}`
 * @param promotion_id Flint promotion ID.
 * @see https://developers.withflintpay.com/docs/api/promotions#deletePromotion
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.delete("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(promotion_id: InputValue<string>, params?: PromotionsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Promotion, PromotionResponse>>;
    /**
 * Archives a promotion code. The code remains readable with status archived. Returns the archived
 * resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or
 * updated_at, sending a webhook, or checking references.
 *
 * `DELETE /v1/promotions/{promotion_id}/codes/{promotion_code_id}`
 * @param promotion_id Flint promotion ID.
 * @param promotion_code_id Flint promotion code ID.
 * @see https://developers.withflintpay.com/docs/api/promotions#deletePromotionCode
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.deleteCode("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "pcode_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    deleteCode(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params?: PromotionsDeleteCodeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PromotionCode, PromotionCodeResponse>>;
    /**
 * Returns a single promotion by ID.
 *
 * `GET /v1/promotions/{promotion_id}`
 * @param promotion_id Flint promotion ID.
 * @see https://developers.withflintpay.com/docs/api/promotions#getPromotion
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.promotions.get("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(promotion_id: InputValue<string>, params?: PromotionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Promotion, PromotionResponse>>;
    /**
 * Returns a single promotion code by promotion ID and code ID. Archived codes remain readable,
 * including codes of an archived promotion. Returns 404 when the code does not exist or belongs to
 * another promotion, merchant, or environment.
 *
 * `GET /v1/promotions/{promotion_id}/codes/{promotion_code_id}`
 * @param promotion_id Flint promotion ID.
 * @param promotion_code_id Flint promotion code ID.
 * @see https://developers.withflintpay.com/docs/api/promotions#getPromotionCode
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.promotions.getCode("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV", "pcode_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getCode(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params?: PromotionsGetCodeParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PromotionCode, PromotionCodeResponse>>;
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
 * Applies a sparse update to promotion fields. application_method, schedule, and exclusivity patch
 * by subfield presence. Omitted fields retain stored values; null clears only nullable fields.
 * Sending a different application_method.type replaces the effect while preserving omitted shared
 * settings, including discounted_item_rules. Archived promotions cannot be changed. An archived
 * resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The
 * error identifies the archived resource; a create under an archived parent identifies that
 * parent.
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
    /**
 * Applies a sparse update to a promotion code. An archived resource returns 409 ACTION_NOT_ALLOWED
 * with reason archived and current_status archived. The error identifies the archived resource; a
 * create under an archived parent identifies that parent.
 *
 * `PATCH /v1/promotions/{promotion_id}/codes/{promotion_code_id}`
 * @param promotion_id Flint promotion ID.
 * @param promotion_code_id Flint promotion code ID.
 * @see https://developers.withflintpay.com/docs/api/promotions#updatePromotionCode
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.updateCode("promo_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "pcode_01ARZ3NDEKTSV4RRFFQ69G5FAV", {max_uses: 50}, { idempotencyKey: idempotencyKey })
 */
    updateCode(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params: PromotionsUpdateCodeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PromotionCode, PromotionCodeResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly promotions: PromotionsResource;
}
