import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    PromotionCode,
    PromotionCodeListResponse,
    PromotionCodeResponse,
    PromotionCodesCreateParams,
    PromotionCodesDeleteParams
} from '../declarations/types-50.js';
import type {
    PromotionCodesGetParams,
    PromotionCodesListParams,
    PromotionCodesSummary,
    PromotionCodesUpdateParams
} from '../declarations/types-51.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    PromotionCodesCreateParams,
    PromotionCode,
    PromotionCodeResponse,
    PromotionCodesDeleteParams,
    PromotionCodeListResponse,
    Promotion,
    PromotionApplicationMethod,
    PromotionAmountOffMethod,
    PromotionBuyXGetYMethod
} from '../declarations/types-50.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type {
    PromotionCodesGetParams,
    PromotionCodesListParams,
    PromotionCodesUpdateParams,
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
} from '../declarations/types-51.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreatePromotionCodeRequestInput } from '../declarations/types-12.js';
export type { MetadataRequestInput, MoneyValue, NextAction } from '../declarations/types-38.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-37.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { UpdatePromotionCodeRequestInput } from '../declarations/types-67.js';
export type { CategoriesDeleteParams } from '../declarations/types-5.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export { makeCreatePromotionCodeRequest } from '../declarations/types-73.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-78.js';
export { makeUpdatePromotionCodeRequest } from '../declarations/types-83.js';
export interface PromotionCodesResource {
    /**
 * Creates a code for a promotion whose `redemption_type` is code; adding a code to an automatic
 * promotion fails with `INVALID_REQUEST`. A code that another resource already uses fails with
 * `ALREADY_EXISTS`. Fails with `ACTION_NOT_ALLOWED` and reason `archived` when the resource, or
 * the parent it belongs to, is archived. The error names the archived resource and its
 * `current_status`.
 *
 * `POST /v1/promotion-codes`
 * @see https://developers.withflintpay.com/docs/api/promotions#createPromotionCode
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotionCodes.create({code: "VIP20", expires_at: "2026-04-01T00:00:00Z", max_uses: 100,
 * metadata: {audience: "vip"}, promotion_id: "promo_01HZYV7Q9Y0Y4H8Q3H9F6R7T8J"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: PromotionCodesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PromotionCode, PromotionCodeResponse>>;
    /**
 * Archives a promotion code. The code remains readable with status archived. Returns the archived
 * resource as a read does. Deleting an already archived resource returns it again without changing
 * its version or `updated_at`, sending a webhook, or checking references.
 *
 * `DELETE /v1/promotion-codes/{promotion_code_id}`
 * @param promotion_code_id Flint promotion code ID.
 * @see https://developers.withflintpay.com/docs/api/promotions#deletePromotionCode
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotionCodes.delete("pcode_01KEZF7C00JCC7QXWC262EF05T", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(promotion_code_id: InputValue<string>, params?: PromotionCodesDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PromotionCode, PromotionCodeResponse>>;
    /**
 * Returns a single promotion code by code ID. Archived codes remain readable, including codes of
 * an archived promotion. Fails with `RESOURCE_NOT_FOUND` when the code does not exist or belongs
 * to another merchant or environment.
 *
 * `GET /v1/promotion-codes/{promotion_code_id}`
 * @param promotion_code_id Flint promotion code ID.
 * @see https://developers.withflintpay.com/docs/api/promotions#getPromotionCode
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.promotionCodes.get("pcode_01KEZF7C00JCC7QXWC262EF05T")
 */
    get(promotion_code_id: InputValue<string>, params?: PromotionCodesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PromotionCode, PromotionCodeResponse>>;
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
    /**
 * Applies a sparse update to a promotion code. Fails with `ACTION_NOT_ALLOWED` and reason
 * `archived` when the resource, or the parent it belongs to, is archived. The error names the
 * archived resource and its `current_status`.
 *
 * `PATCH /v1/promotion-codes/{promotion_code_id}`
 * @param promotion_code_id Flint promotion code ID.
 * @see https://developers.withflintpay.com/docs/api/promotions#updatePromotionCode
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotionCodes.update("pcode_01ARZ3NDEKTSV4RRFFQ69G5FAV", {max_uses: 50}, {
 * idempotencyKey: idempotencyKey })
 */
    update(promotion_code_id: InputValue<string>, params: PromotionCodesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PromotionCode, PromotionCodeResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly promotionCodes: PromotionCodesResource;
}
