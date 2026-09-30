export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreatePromotionCodeRequestInput } from '../declarations/CreatePromotionCodeRequestInput.js';
import type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
import type { Promotion } from '../declarations/Promotion.js';
import type { PromotionApplicationMethodInput } from '../declarations/PromotionApplicationMethodInput.js';
import type { PromotionCode } from '../declarations/PromotionCode.js';
import type { PromotionCodeListResponse } from '../declarations/PromotionCodeListResponse.js';
import type { PromotionCodeResolutionResponse } from '../declarations/PromotionCodeResolutionResponse.js';
import type { PromotionCodeResponse } from '../declarations/PromotionCodeResponse.js';
import type { PromotionCombinesWithInput } from '../declarations/PromotionCombinesWithInput.js';
import type { PromotionExclusivityInput } from '../declarations/PromotionExclusivityInput.js';
import type { PromotionListResponse } from '../declarations/PromotionListResponse.js';
import type { PromotionResponse } from '../declarations/PromotionResponse.js';
import type { PromotionRuleGroupInput } from '../declarations/PromotionRuleGroupInput.js';
import type { PromotionRuleInput } from '../declarations/PromotionRuleInput.js';
import type { PromotionRuleValueInput } from '../declarations/PromotionRuleValueInput.js';
import type { PromotionScheduleInput } from '../declarations/PromotionScheduleInput.js';
import type { PromotionsCreateCodeInput } from '../declarations/PromotionsCreateCodeInput.js';
import type { PromotionsCreateCodeResponse } from '../declarations/PromotionsCreateCodeResponse.js';
import type { PromotionsCreateInput } from '../declarations/PromotionsCreateInput.js';
import type { PromotionsCreateResponse } from '../declarations/PromotionsCreateResponse.js';
import type { PromotionsDeleteCodeInput } from '../declarations/PromotionsDeleteCodeInput.js';
import type { PromotionsDeleteCodeResponse } from '../declarations/PromotionsDeleteCodeResponse.js';
import type { PromotionsGetInput } from '../declarations/PromotionsGetInput.js';
import type { PromotionsGetResponse } from '../declarations/PromotionsGetResponse.js';
import type { PromotionsListCodesInput } from '../declarations/PromotionsListCodesInput.js';
import type { PromotionsListCodesResponse } from '../declarations/PromotionsListCodesResponse.js';
import type { PromotionsListInput } from '../declarations/PromotionsListInput.js';
import type { PromotionsListResponse } from '../declarations/PromotionsListResponse.js';
import type { PromotionsRemoveInput } from '../declarations/PromotionsRemoveInput.js';
import type { PromotionsRemoveResponse } from '../declarations/PromotionsRemoveResponse.js';
import type { PromotionsResolveCodeInput } from '../declarations/PromotionsResolveCodeInput.js';
import type { PromotionsResolveCodeResponse } from '../declarations/PromotionsResolveCodeResponse.js';
import type { PromotionsUpdateCodeInput } from '../declarations/PromotionsUpdateCodeInput.js';
import type { PromotionsUpdateCodeResponse } from '../declarations/PromotionsUpdateCodeResponse.js';
import type { PromotionsUpdateInput } from '../declarations/PromotionsUpdateInput.js';
import type { PromotionsUpdateResponse } from '../declarations/PromotionsUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface PromotionsResource {
    /**
 * Creates a promotion for the authenticated merchant.
 * POST /v1/promotions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.create({application_method: {percent_off: 1}, name: "example", "Idempotency-Key": idempotencyKey})
 */
    create(params: (InputValue<({ "application_method"?: (({ "allocation"?: "each" | "across"; "amount_off_money"?: MoneyValueInput; "applies_to"?: never; "buy_min_quantity"?: number; "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax"; "currency_options"?: Record<string, MoneyValueInput>; "discounted_item_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "get_percent_off"?: number; "get_quantity"?: number; "max_applications_per_order"?: number; "max_discounted_quantity"?: number; "percent_off"?: number; "qualifying_item_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "recurrence"?: { "period_count"?: number; "type": "once"; }; "reward_selection"?: "cheapest" | "highest_price" | "first_added"; "type"?: "percent_off" | "amount_off" | "buy_x_get_y"; }) & (({ "type"?: "percent_off"; "percent_off": unknown; }) | ({ "type"?: "amount_off"; "amount_off_money": unknown; }) | ({ "type"?: "buy_x_get_y"; "qualifying_item_rules": unknown; "buy_min_quantity": unknown; "discounted_item_rules": unknown; "get_quantity": unknown; "get_percent_off": unknown; }))) & (({ "type"?: "percent_off"; "percent_off": unknown; }) | ({ "type"?: "amount_off"; "amount_off_money": unknown; }) | ({ "type"?: "buy_x_get_y"; "qualifying_item_rules": unknown; "buy_min_quantity": unknown; "discounted_item_rules": unknown; "get_quantity": unknown; "get_percent_off": unknown; })); }) & ({ "application_method": PromotionApplicationMethodInput; "codes"?: Array<CreatePromotionCodeRequestInput>; "combines_with"?: PromotionCombinesWithInput; "description"?: string; "discount_class"?: "order" | "line_item" | "service_charge"; "display_name"?: string; "eligibility_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "exclusivity"?: PromotionExclusivityInput; "external_reference_id"?: string; "max_uses"?: string; "metadata"?: Record<string, string>; "name": string; "redemption_type"?: "automatic" | "code"; "schedule"?: PromotionScheduleInput; "stacking_mode"?: "continue" | "stop_after"; })>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PromotionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<({ "application_method"?: (({ "allocation"?: "each" | "across"; "amount_off_money"?: MoneyValueInput; "applies_to"?: never; "buy_min_quantity"?: number; "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax"; "currency_options"?: Record<string, MoneyValueInput>; "discounted_item_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "get_percent_off"?: number; "get_quantity"?: number; "max_applications_per_order"?: number; "max_discounted_quantity"?: number; "percent_off"?: number; "qualifying_item_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "recurrence"?: { "period_count"?: number; "type": "once"; }; "reward_selection"?: "cheapest" | "highest_price" | "first_added"; "type"?: "percent_off" | "amount_off" | "buy_x_get_y"; }) & (({ "type"?: "percent_off"; "percent_off": unknown; }) | ({ "type"?: "amount_off"; "amount_off_money": unknown; }) | ({ "type"?: "buy_x_get_y"; "qualifying_item_rules": unknown; "buy_min_quantity": unknown; "discounted_item_rules": unknown; "get_quantity": unknown; "get_percent_off": unknown; }))) & (({ "type"?: "percent_off"; "percent_off": unknown; }) | ({ "type"?: "amount_off"; "amount_off_money": unknown; }) | ({ "type"?: "buy_x_get_y"; "qualifying_item_rules": unknown; "buy_min_quantity": unknown; "discounted_item_rules": unknown; "get_quantity": unknown; "get_percent_off": unknown; })); }) & ({ "application_method": PromotionApplicationMethodInput; "codes"?: Array<CreatePromotionCodeRequestInput>; "combines_with"?: PromotionCombinesWithInput; "description"?: string; "discount_class"?: "order" | "line_item" | "service_charge"; "display_name"?: string; "eligibility_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "exclusivity"?: PromotionExclusivityInput; "external_reference_id"?: string; "max_uses"?: string; "metadata"?: Record<string, string>; "name": string; "redemption_type"?: "automatic" | "code"; "schedule"?: PromotionScheduleInput; "stacking_mode"?: "continue" | "stop_after"; })>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PromotionsCreateResponse>>;
    /**
 * Creates a code for a code-gated promotion.
 * POST /v1/promotions/{promotion_id}/codes
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.createCode("example", {code: "example", "Idempotency-Key": idempotencyKey})
 */
    createCode(promotion_id: InputValue<string>, params: (InputValue<{ "code": string; "expires_at"?: string | globalThis.Date; "max_uses"?: string; "metadata"?: Record<string, string>; "timezone"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PromotionCodeResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createCodeWithResponse(promotion_id: InputValue<string>, params: (InputValue<{ "code": string; "expires_at"?: string | globalThis.Date; "max_uses"?: string; "metadata"?: Record<string, string>; "timezone"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PromotionsCreateCodeResponse>>;
    /**
 * Archives a promotion and returns its final state.
 * DELETE /v1/promotions/{promotion_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.remove("example", {"Idempotency-Key": idempotencyKey})
 */
    remove(promotion_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PromotionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(promotion_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PromotionsRemoveResponse>>;
    /**
 * Deletes a promotion code.
 * DELETE /v1/promotions/{promotion_id}/codes/{promotion_code_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.deleteCode("example", "example", {"Idempotency-Key": idempotencyKey})
 */
    deleteCode(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PromotionCodeResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    deleteCodeWithResponse(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PromotionsDeleteCodeResponse>>;
    /**
 * Returns a single promotion by ID.
 * GET /v1/promotions/{promotion_id}
 * @example
 * client.promotions.get("example", {})
 */
    get(promotion_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<PromotionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(promotion_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PromotionsGetResponse>>;
    /**
 * Returns a paginated list of codes for a promotion.
 * GET /v1/promotions/{promotion_id}/codes
 * @example
 * client.promotions.listCodes("example", {})
 */
    listCodes(promotion_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PromotionCodeListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listCodesWithResponse(promotion_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PromotionsListCodesResponse>>;
    listCodesPages(promotion_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PromotionCodeListResponse>;
    listCodesPagesWithResponse(promotion_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PromotionsListCodesResponse>>;
    listCodesItems(promotion_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PromotionCode>;
    /**
 * Returns a paginated list of promotions for the authenticated merchant.
 * GET /v1/promotions
 * @example
 * client.promotions.list({})
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"active" | "inactive" | "expired" | "not_yet_started" | "exhausted" | "no_active_codes" | "archived">>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "product_id"?: InputValue<string>; "variant_id"?: InputValue<string>; "bundle_id"?: InputValue<string>; "category_handle"?: InputValue<string>; "redemption_type"?: InputValue<"automatic" | "code">; "discount_class"?: InputValue<"order" | "line_item" | "service_charge">; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PromotionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"active" | "inactive" | "expired" | "not_yet_started" | "exhausted" | "no_active_codes" | "archived">>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "product_id"?: InputValue<string>; "variant_id"?: InputValue<string>; "bundle_id"?: InputValue<string>; "category_handle"?: InputValue<string>; "redemption_type"?: InputValue<"automatic" | "code">; "discount_class"?: InputValue<"order" | "line_item" | "service_charge">; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PromotionsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"active" | "inactive" | "expired" | "not_yet_started" | "exhausted" | "no_active_codes" | "archived">>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "product_id"?: InputValue<string>; "variant_id"?: InputValue<string>; "bundle_id"?: InputValue<string>; "category_handle"?: InputValue<string>; "redemption_type"?: InputValue<"automatic" | "code">; "discount_class"?: InputValue<"order" | "line_item" | "service_charge">; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PromotionListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"active" | "inactive" | "expired" | "not_yet_started" | "exhausted" | "no_active_codes" | "archived">>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "product_id"?: InputValue<string>; "variant_id"?: InputValue<string>; "bundle_id"?: InputValue<string>; "category_handle"?: InputValue<string>; "redemption_type"?: InputValue<"automatic" | "code">; "discount_class"?: InputValue<"order" | "line_item" | "service_charge">; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PromotionsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"active" | "inactive" | "expired" | "not_yet_started" | "exhausted" | "no_active_codes" | "archived">>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "product_id"?: InputValue<string>; "variant_id"?: InputValue<string>; "bundle_id"?: InputValue<string>; "category_handle"?: InputValue<string>; "redemption_type"?: InputValue<"automatic" | "code">; "discount_class"?: InputValue<"order" | "line_item" | "service_charge">; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Promotion>;
    /**
 * Resolves a buyer-entered promotion code to its promotion code record and parent promotion. This does not evaluate the code against an order or redeem it.
 * GET /v1/promotions/by-code/{code}
 * @example
 * client.promotions.resolveCode("example", {})
 */
    resolveCode(code: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<PromotionCodeResolutionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    resolveCodeWithResponse(code: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PromotionsResolveCodeResponse>>;
    /**
 * Applies a sparse update to promotion fields.
 * PATCH /v1/promotions/{promotion_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.update("example", {"Idempotency-Key": idempotencyKey})
 */
    update(promotion_id: InputValue<string>, params: (InputValue<({ "application_method"?: (({ "allocation"?: "each" | "across"; "amount_off_money"?: MoneyValueInput; "applies_to"?: never; "buy_min_quantity"?: number; "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax"; "currency_options"?: Record<string, MoneyValueInput>; "discounted_item_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "get_percent_off"?: number; "get_quantity"?: number; "max_applications_per_order"?: number; "max_discounted_quantity"?: number; "percent_off"?: number; "qualifying_item_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "recurrence"?: { "period_count"?: number; "type": "once"; }; "reward_selection"?: "cheapest" | "highest_price" | "first_added"; "type"?: "percent_off" | "amount_off" | "buy_x_get_y"; }) & (({ "type"?: "percent_off"; "percent_off": unknown; }) | ({ "type"?: "amount_off"; "amount_off_money": unknown; }) | ({ "type"?: "buy_x_get_y"; "qualifying_item_rules": unknown; "buy_min_quantity": unknown; "discounted_item_rules": unknown; "get_quantity": unknown; "get_percent_off": unknown; }))) & (({ "type"?: "percent_off"; "percent_off": unknown; }) | ({ "type"?: "amount_off"; "amount_off_money": unknown; }) | ({ "type"?: "buy_x_get_y"; "qualifying_item_rules": unknown; "buy_min_quantity": unknown; "discounted_item_rules": unknown; "get_quantity": unknown; "get_percent_off": unknown; })); }) & ({ "application_method"?: PromotionApplicationMethodInput; "combines_with"?: PromotionCombinesWithInput; "description"?: string; "discount_class"?: "order" | "line_item" | "service_charge"; "display_name"?: string; "eligibility_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "exclusivity"?: PromotionExclusivityInput; "external_reference_id"?: string; "max_uses"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; "schedule"?: PromotionScheduleInput; "stacking_mode"?: "continue" | "stop_after"; "status"?: "active" | "inactive"; })>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PromotionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(promotion_id: InputValue<string>, params: (InputValue<({ "application_method"?: (({ "allocation"?: "each" | "across"; "amount_off_money"?: MoneyValueInput; "applies_to"?: never; "buy_min_quantity"?: number; "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax"; "currency_options"?: Record<string, MoneyValueInput>; "discounted_item_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "get_percent_off"?: number; "get_quantity"?: number; "max_applications_per_order"?: number; "max_discounted_quantity"?: number; "percent_off"?: number; "qualifying_item_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "recurrence"?: { "period_count"?: number; "type": "once"; }; "reward_selection"?: "cheapest" | "highest_price" | "first_added"; "type"?: "percent_off" | "amount_off" | "buy_x_get_y"; }) & (({ "type"?: "percent_off"; "percent_off": unknown; }) | ({ "type"?: "amount_off"; "amount_off_money": unknown; }) | ({ "type"?: "buy_x_get_y"; "qualifying_item_rules": unknown; "buy_min_quantity": unknown; "discounted_item_rules": unknown; "get_quantity": unknown; "get_percent_off": unknown; }))) & (({ "type"?: "percent_off"; "percent_off": unknown; }) | ({ "type"?: "amount_off"; "amount_off_money": unknown; }) | ({ "type"?: "buy_x_get_y"; "qualifying_item_rules": unknown; "buy_min_quantity": unknown; "discounted_item_rules": unknown; "get_quantity": unknown; "get_percent_off": unknown; })); }) & ({ "application_method"?: PromotionApplicationMethodInput; "combines_with"?: PromotionCombinesWithInput; "description"?: string; "discount_class"?: "order" | "line_item" | "service_charge"; "display_name"?: string; "eligibility_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "exclusivity"?: PromotionExclusivityInput; "external_reference_id"?: string; "max_uses"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; "schedule"?: PromotionScheduleInput; "stacking_mode"?: "continue" | "stop_after"; "status"?: "active" | "inactive"; })>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PromotionsUpdateResponse>>;
    /**
 * Applies a sparse update to a promotion code.
 * PATCH /v1/promotions/{promotion_id}/codes/{promotion_code_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.promotions.updateCode("example", "example", {"Idempotency-Key": idempotencyKey})
 */
    updateCode(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params: (InputValue<{ "expires_at"?: string | globalThis.Date; "max_uses"?: string; "metadata"?: Record<string, string | null> | null; "status"?: "active" | "inactive"; "timezone"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PromotionCodeResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateCodeWithResponse(promotion_id: InputValue<string>, promotion_code_id: InputValue<string>, params: (InputValue<{ "expires_at"?: string | globalThis.Date; "max_uses"?: string; "metadata"?: Record<string, string | null> | null; "status"?: "active" | "inactive"; "timezone"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PromotionsUpdateCodeResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly promotions: PromotionsResource;
}
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { PromotionRuleInput } from '../declarations/PromotionRuleInput.js';
export type { PromotionRuleValueInput } from '../declarations/PromotionRuleValueInput.js';
export type { PromotionRuleGroupInput } from '../declarations/PromotionRuleGroupInput.js';
export type { PromotionApplicationMethodInput } from '../declarations/PromotionApplicationMethodInput.js';
export type { CreatePromotionCodeRequestInput } from '../declarations/CreatePromotionCodeRequestInput.js';
export type { PromotionCombinesWithInput } from '../declarations/PromotionCombinesWithInput.js';
export type { PromotionExclusivityInput } from '../declarations/PromotionExclusivityInput.js';
export type { PromotionScheduleInput } from '../declarations/PromotionScheduleInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { PromotionResponse } from '../declarations/PromotionResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { PromotionsCreateResponse } from '../declarations/PromotionsCreateResponse.js';
export type { PromotionCodeResponse } from '../declarations/PromotionCodeResponse.js';
export type { PromotionsCreateCodeResponse } from '../declarations/PromotionsCreateCodeResponse.js';
export type { PromotionsRemoveResponse } from '../declarations/PromotionsRemoveResponse.js';
export type { PromotionsDeleteCodeResponse } from '../declarations/PromotionsDeleteCodeResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { PromotionsGetResponse } from '../declarations/PromotionsGetResponse.js';
export type { PromotionCodeListResponse } from '../declarations/PromotionCodeListResponse.js';
export type { PromotionsListCodesResponse } from '../declarations/PromotionsListCodesResponse.js';
export type { PromotionCode } from '../declarations/PromotionCode.js';
export type { PromotionListResponse } from '../declarations/PromotionListResponse.js';
export type { PromotionsListResponse } from '../declarations/PromotionsListResponse.js';
export type { Promotion } from '../declarations/Promotion.js';
export type { PromotionCodeResolutionResponse } from '../declarations/PromotionCodeResolutionResponse.js';
export type { PromotionsResolveCodeResponse } from '../declarations/PromotionsResolveCodeResponse.js';
export type { PromotionsUpdateResponse } from '../declarations/PromotionsUpdateResponse.js';
export type { PromotionsUpdateCodeResponse } from '../declarations/PromotionsUpdateCodeResponse.js';
export type { PromotionsCreateInput } from '../declarations/PromotionsCreateInput.js';
export type { PromotionsCreateCodeInput } from '../declarations/PromotionsCreateCodeInput.js';
export type { PromotionsRemoveInput } from '../declarations/PromotionsRemoveInput.js';
export type { PromotionsDeleteCodeInput } from '../declarations/PromotionsDeleteCodeInput.js';
export type { PromotionsGetInput } from '../declarations/PromotionsGetInput.js';
export type { PromotionsListCodesInput } from '../declarations/PromotionsListCodesInput.js';
export type { PromotionsListInput } from '../declarations/PromotionsListInput.js';
export type { PromotionsResolveCodeInput } from '../declarations/PromotionsResolveCodeInput.js';
export type { PromotionsUpdateInput } from '../declarations/PromotionsUpdateInput.js';
export type { PromotionsUpdateCodeInput } from '../declarations/PromotionsUpdateCodeInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { PromotionApplicationMethod } from '../declarations/PromotionApplicationMethod.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { PromotionRule } from '../declarations/PromotionRule.js';
export type { PromotionRuleValue } from '../declarations/PromotionRuleValue.js';
export type { PromotionRuleGroup } from '../declarations/PromotionRuleGroup.js';
export type { PromotionCombinesWith } from '../declarations/PromotionCombinesWith.js';
export type { PromotionExclusivity } from '../declarations/PromotionExclusivity.js';
export type { PromotionSchedule } from '../declarations/PromotionSchedule.js';
export type { PromotionCodeResolution } from '../declarations/PromotionCodeResolution.js';
export type { UpdatePromotionCodeRequestInput } from '../declarations/UpdatePromotionCodeRequestInput.js';
export { makePromotionResponse } from '../declarations/makePromotionResponse.js';
export { makePromotionCodeResponse } from '../declarations/makePromotionCodeResponse.js';
export { makePromotionCodeListResponse } from '../declarations/makePromotionCodeListResponse.js';
export { makePromotionCode } from '../declarations/makePromotionCode.js';
export { makePromotionListResponse } from '../declarations/makePromotionListResponse.js';
export { makePromotion } from '../declarations/makePromotion.js';
export { makePromotionCodeResolutionResponse } from '../declarations/makePromotionCodeResolutionResponse.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makePromotionApplicationMethod } from '../declarations/makePromotionApplicationMethod.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makePromotionRule } from '../declarations/makePromotionRule.js';
export { makePromotionRuleValue } from '../declarations/makePromotionRuleValue.js';
export { makePromotionRuleGroup } from '../declarations/makePromotionRuleGroup.js';
export { makePromotionCombinesWith } from '../declarations/makePromotionCombinesWith.js';
export { makePromotionExclusivity } from '../declarations/makePromotionExclusivity.js';
export { makePromotionSchedule } from '../declarations/makePromotionSchedule.js';
export { makePromotionCodeResolution } from '../declarations/makePromotionCodeResolution.js';
