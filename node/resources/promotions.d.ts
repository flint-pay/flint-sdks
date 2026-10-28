import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreatePromotionCodeRequestInput, CreatePromotionRequestInput } from '../declarations/types-9.js';
import type {
    Promotion,
    PromotionCode,
    PromotionCodeListResponse,
    PromotionCodeResponse,
    PromotionListResponse,
    PromotionResponse
} from '../declarations/types-40.js';
import type {
    PromotionsCreateCodeInput,
    PromotionsCreateInput,
    PromotionsDeleteCodeInput,
    PromotionsGetCodeInput,
    PromotionsGetInput,
    PromotionsListCodesInput,
    PromotionsListInput,
    PromotionsRemoveInput,
    PromotionsUpdateCodeInput,
    PromotionsUpdateInput
} from '../declarations/types-41.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { UpdatePromotionCodeRequestInput, UpdatePromotionRequestInput } from '../declarations/types-52.js';
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
export type { CreatePromotionRequestInput, CreatePromotionCodeRequestInput } from '../declarations/types-9.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    Promotion,
    PromotionResponse,
    PromotionCode,
    PromotionCodeResponse,
    PromotionCodeListResponse,
    PromotionListResponse,
    PromotionApplicationMethodRequestInput,
    PromotionPercentOffMethodRequestInput,
    PromotionRecurrenceInput,
    PromotionRecurrenceOnceInput,
    PromotionRecurrenceRepeatingInput,
    PromotionRecurrenceForeverInput,
    PromotionAmountOffMethodRequestInput,
    PromotionBuyXGetYMethodRequestInput,
    PromotionCombinesWithRequestInput,
    PromotionExclusivityRequestInput,
    PromotionApplicationMethod,
    PromotionPercentOffMethod,
    PromotionRule,
    PromotionRecurrence,
    PromotionRecurrenceOnce,
    PromotionRecurrenceRepeating,
    PromotionRecurrenceForever,
    PromotionAmountOffMethod,
    PromotionBuyXGetYMethod,
    PromotionCodesSummary,
    PromotionCombinesWith,
    PromotionExclusivity,
    PromotionApplicationMethodPatchInput,
    PromotionCombinesWithPatchInput,
    PromotionExclusivityPatchInput,
    PromotionCombinesWithPatch,
    PromotionExclusivityRequest,
    PromotionExclusivityPatch
} from '../declarations/types-40.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { UpdatePromotionRequestInput, UpdatePromotionCodeRequestInput } from '../declarations/types-52.js';
export type {
    PromotionsCreateInput,
    PromotionsCreateCodeInput,
    PromotionsRemoveInput,
    PromotionsDeleteCodeInput,
    PromotionsGetInput,
    PromotionsGetCodeInput,
    PromotionsListCodesInput,
    PromotionsListInput,
    PromotionsUpdateInput,
    PromotionsUpdateCodeInput,
    PromotionRuleGroupRequestInput,
    PromotionRuleRequestInput,
    PromotionRuleValueRequestInput,
    PromotionScheduleRequestRequestInput,
    PromotionRuleGroup,
    PromotionRuleValue,
    PromotionSchedule,
    PromotionSchedulePatchInput
} from '../declarations/types-41.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-33.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-32.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export { makeCreatePromotionCodeRequest, makeCreatePromotionRequest } from '../declarations/types-68.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-73.js';
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
    makePromotionScheduleRequestRequest
} from '../declarations/types-74.js';
export { makeUpdatePromotionCodeRequest, makeUpdatePromotionRequest } from '../declarations/types-77.js';
export interface PromotionsResource {
    /**
 * Creates a promotion for the authenticated merchant.
 * @see reference/promotions.md#promotionscreate
 * POST /v1/promotions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.create({application_method: {type: "percent_off", percent_off: 1}, name:
 * "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreatePromotionRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Promotion>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/promotions.md#promotionscreate
     */
    createWithResponse(params: (InputValue<CreatePromotionRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PromotionResponse>>;
    /**
 * Creates a code for a code-gated promotion. An archived resource returns 409 ACTION_NOT_ALLOWED
 * with reason archived and current_status archived. The error identifies the archived resource; a
 * create under an archived parent identifies that parent.
 * @see reference/promotions.md#promotionscreatecode
 * POST /v1/promotions/{promotion_id}/codes
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.createCode("example", {code: "example"}, { idempotencyKey: idempotencyKey })
 */
    createCode(promotion_id: InputValue<string>, params: (InputValue<CreatePromotionCodeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PromotionCode>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/promotions.md#promotionscreatecode
     */
    createCodeWithResponse(promotion_id: InputValue<string>, params: (InputValue<CreatePromotionCodeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PromotionCodeResponse>>;
    /**
 * Archives a promotion and returns the resource exactly as GET returns it. Repeating DELETE
 * returns 200 without changing version or updated_at, sending a webhook, or checking references.
 * @see reference/promotions.md#promotionsremove
 * DELETE /v1/promotions/{promotion_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(promotion_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Promotion>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/promotions.md#promotionsremove
     */
    removeWithResponse(promotion_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PromotionResponse>>;
    /**
 * Archives a promotion code. The code remains readable with status archived. Returns the archived
 * resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or
 * updated_at, sending a webhook, or checking references.
 * @see reference/promotions.md#promotionsdeletecode
 * DELETE /v1/promotions/{promotion_id}/codes/{promotion_code_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.deleteCode("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteCode(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PromotionCode>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/promotions.md#promotionsdeletecode
     */
    deleteCodeWithResponse(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PromotionCodeResponse>>;
    /**
 * Returns a single promotion by ID.
 * @see reference/promotions.md#promotionsget
 * GET /v1/promotions/{promotion_id}
 * @example
 * client.promotions.get("example")
 */
    get(promotion_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Promotion>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/promotions.md#promotionsget
     */
    getWithResponse(promotion_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PromotionResponse>>;
    /**
 * Returns a single promotion code by promotion ID and code ID. Archived codes remain readable,
 * including codes of an archived promotion. Returns 404 when the code does not exist or belongs to
 * another promotion, merchant, or environment.
 * @see reference/promotions.md#promotionsgetcode
 * GET /v1/promotions/{promotion_id}/codes/{promotion_code_id}
 * @example
 * client.promotions.getCode("example", "example")
 */
    getCode(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PromotionCode>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/promotions.md#promotionsgetcode
     */
    getCodeWithResponse(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PromotionCodeResponse>>;
    /**
 * Returns a paginated list of promotion codes in every status, ordered by created_at descending,
 * then promotion_code_id descending. Archived codes are excluded unless status=archived. Default
 * order: created_at descending, then promotion_code_id descending.
 * @see reference/promotions.md#promotionslistcodes
 * GET /v1/promotion-codes
 * @example
 * client.promotions.listCodes()
 */
    listCodes(params?: {
        "promotion_id"?: InputValue<string>;
        "code"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "availability"?: InputValue<Array<"available" | "inactive" | "expired" | "exhausted" | "promotion_unavailable">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"promotion">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PromotionCodeListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/promotions.md#promotionslistcodes
     */
    listCodesWithResponse(params?: {
        "promotion_id"?: InputValue<string>;
        "code"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "availability"?: InputValue<Array<"available" | "inactive" | "expired" | "exhausted" | "promotion_unavailable">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"promotion">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PromotionCodeListResponse>>;
    /** Iterate pages lazily.
     * @see reference/promotions.md#promotionslistcodes
     */
    listCodesPages(params?: {
        "promotion_id"?: InputValue<string>;
        "code"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "availability"?: InputValue<Array<"available" | "inactive" | "expired" | "exhausted" | "promotion_unavailable">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"promotion">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PromotionCodeListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/promotions.md#promotionslistcodes
     */
    listCodesPagesWithResponse(params?: {
        "promotion_id"?: InputValue<string>;
        "code"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "availability"?: InputValue<Array<"available" | "inactive" | "expired" | "exhausted" | "promotion_unavailable">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"promotion">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<PromotionCodeListResponse>>;
    /** Iterate items lazily.
     * @see reference/promotions.md#promotionslistcodes
     */
    listCodesItems(params?: {
        "promotion_id"?: InputValue<string>;
        "code"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "availability"?: InputValue<Array<"available" | "inactive" | "expired" | "exhausted" | "promotion_unavailable">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"promotion">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PromotionCode>;
    /**
 * Returns a paginated list of promotions for the authenticated merchant. Default order: created_at
 * descending, then promotion_id descending.
 * @see reference/promotions.md#promotionslist
 * GET /v1/promotions
 * @example
 * client.promotions.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "availability"?: InputValue<Array<"available"
            | "inactive"
            | "archived"
            | "not_yet_started"
            | "expired"
            | "exhausted"
            | "no_active_codes">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "product_id"?: InputValue<string>;
        "variant_id"?: InputValue<string>;
        "bundle_id"?: InputValue<string>;
        "category_handle"?: InputValue<string>;
        "redemption_type"?: InputValue<Array<"automatic" | "code">>;
        "discount_class"?: InputValue<Array<"order" | "line_item" | "service_charge">>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PromotionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/promotions.md#promotionslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "availability"?: InputValue<Array<"available"
            | "inactive"
            | "archived"
            | "not_yet_started"
            | "expired"
            | "exhausted"
            | "no_active_codes">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "product_id"?: InputValue<string>;
        "variant_id"?: InputValue<string>;
        "bundle_id"?: InputValue<string>;
        "category_handle"?: InputValue<string>;
        "redemption_type"?: InputValue<Array<"automatic" | "code">>;
        "discount_class"?: InputValue<Array<"order" | "line_item" | "service_charge">>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PromotionListResponse>>;
    /** Iterate pages lazily.
     * @see reference/promotions.md#promotionslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "availability"?: InputValue<Array<"available"
            | "inactive"
            | "archived"
            | "not_yet_started"
            | "expired"
            | "exhausted"
            | "no_active_codes">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "product_id"?: InputValue<string>;
        "variant_id"?: InputValue<string>;
        "bundle_id"?: InputValue<string>;
        "category_handle"?: InputValue<string>;
        "redemption_type"?: InputValue<Array<"automatic" | "code">>;
        "discount_class"?: InputValue<Array<"order" | "line_item" | "service_charge">>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PromotionListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/promotions.md#promotionslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "availability"?: InputValue<Array<"available"
            | "inactive"
            | "archived"
            | "not_yet_started"
            | "expired"
            | "exhausted"
            | "no_active_codes">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "product_id"?: InputValue<string>;
        "variant_id"?: InputValue<string>;
        "bundle_id"?: InputValue<string>;
        "category_handle"?: InputValue<string>;
        "redemption_type"?: InputValue<Array<"automatic" | "code">>;
        "discount_class"?: InputValue<Array<"order" | "line_item" | "service_charge">>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<PromotionListResponse>>;
    /** Iterate items lazily.
     * @see reference/promotions.md#promotionslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "availability"?: InputValue<Array<"available"
            | "inactive"
            | "archived"
            | "not_yet_started"
            | "expired"
            | "exhausted"
            | "no_active_codes">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "product_id"?: InputValue<string>;
        "variant_id"?: InputValue<string>;
        "bundle_id"?: InputValue<string>;
        "category_handle"?: InputValue<string>;
        "redemption_type"?: InputValue<Array<"automatic" | "code">>;
        "discount_class"?: InputValue<Array<"order" | "line_item" | "service_charge">>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Promotion>;
    /**
 * Applies a sparse update to promotion fields. application_method, schedule, and exclusivity patch
 * by subfield presence. Omitted fields retain stored values; null clears only nullable fields.
 * Sending a different application_method.type replaces the effect while preserving omitted shared
 * settings, including discounted_item_rules. Archived promotions cannot be changed. An archived
 * resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The
 * error identifies the archived resource; a create under an archived parent identifies that
 * parent.
 * @see reference/promotions.md#promotionsupdate
 * PATCH /v1/promotions/{promotion_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(promotion_id: InputValue<string>, params: (InputValue<UpdatePromotionRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Promotion>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/promotions.md#promotionsupdate
     */
    updateWithResponse(promotion_id: InputValue<string>, params: (InputValue<UpdatePromotionRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PromotionResponse>>;
    /**
 * Applies a sparse update to a promotion code. An archived resource returns 409 ACTION_NOT_ALLOWED
 * with reason archived and current_status archived. The error identifies the archived resource; a
 * create under an archived parent identifies that parent.
 * @see reference/promotions.md#promotionsupdatecode
 * PATCH /v1/promotions/{promotion_id}/codes/{promotion_code_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.updateCode("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    updateCode(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params: (InputValue<UpdatePromotionCodeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PromotionCode>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/promotions.md#promotionsupdatecode
     */
    updateCodeWithResponse(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params: (InputValue<UpdatePromotionCodeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PromotionCodeResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly promotions: PromotionsResource;
}
