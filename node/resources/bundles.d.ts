export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { Bundle } from '../declarations/Bundle.js';
import type { BundleComponent } from '../declarations/BundleComponent.js';
import type { BundleComponentListResponse } from '../declarations/BundleComponentListResponse.js';
import type { BundleListResponse } from '../declarations/BundleListResponse.js';
import type { BundleResponse } from '../declarations/BundleResponse.js';
import type { BundlesCreateInput } from '../declarations/BundlesCreateInput.js';
import type { BundlesCreateResponse } from '../declarations/BundlesCreateResponse.js';
import type { BundlesGetInput } from '../declarations/BundlesGetInput.js';
import type { BundlesGetResponse } from '../declarations/BundlesGetResponse.js';
import type { BundlesListComponentsInput } from '../declarations/BundlesListComponentsInput.js';
import type { BundlesListComponentsResponse } from '../declarations/BundlesListComponentsResponse.js';
import type { BundlesListInput } from '../declarations/BundlesListInput.js';
import type { BundlesListResponse } from '../declarations/BundlesListResponse.js';
import type { BundlesRemoveInput } from '../declarations/BundlesRemoveInput.js';
import type { BundlesRemoveResponse } from '../declarations/BundlesRemoveResponse.js';
import type { BundlesUpdateInput } from '../declarations/BundlesUpdateInput.js';
import type { BundlesUpdateResponse } from '../declarations/BundlesUpdateResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateBundleComponentRequestInput } from '../declarations/CreateBundleComponentRequestInput.js';
import type { ImageRequestInput } from '../declarations/ImageRequestInput.js';
import type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { UpdateBundleComponentRequestInput } from '../declarations/UpdateBundleComponentRequestInput.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface BundlesResource {
    /**
 * Create bundle.
 * POST /v1/bundles
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.bundles.create({name: "example", unit_price_money: {amount: "0", currency: "USD"}, "Idempotency-Key": idempotencyKey})
 */
    create(params: (InputValue<{ "barcode"?: string; "categories"?: Array<string>; "components"?: Array<CreateBundleComponentRequestInput>; "description"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "line_item_tax_category"?: "general" | "physical_goods" | "digital_goods" | "software" | "saas" | "services" | "professional_services" | "food" | "prepared_food" | "clothing" | "medical_goods" | "admission"; "metadata"?: Record<string, string>; "modifier_set_id"?: string | null; "name": string; "sku"?: string; "status"?: "active" | "inactive"; "taxable"?: boolean; "unit_price_money": MoneyValueInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<BundleResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "barcode"?: string; "categories"?: Array<string>; "components"?: Array<CreateBundleComponentRequestInput>; "description"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "line_item_tax_category"?: "general" | "physical_goods" | "digital_goods" | "software" | "saas" | "services" | "professional_services" | "food" | "prepared_food" | "clothing" | "medical_goods" | "admission"; "metadata"?: Record<string, string>; "modifier_set_id"?: string | null; "name": string; "sku"?: string; "status"?: "active" | "inactive"; "taxable"?: boolean; "unit_price_money": MoneyValueInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<BundlesCreateResponse>>;
    /**
 * Archives a bundle and returns its final state.
 * DELETE /v1/bundles/{bundle_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.bundles.remove("example", {"Idempotency-Key": idempotencyKey})
 */
    remove(bundle_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<BundleResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(bundle_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<BundlesRemoveResponse>>;
    /**
 * Get bundle.
 * GET /v1/bundles/{bundle_id}
 * @example
 * client.bundles.get("example", {})
 */
    get(bundle_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"modifier_set">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<BundleResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(bundle_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"modifier_set">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<BundlesGetResponse>>;
    /**
 * List bundle components.
 * GET /v1/bundles/{bundle_id}/components
 * @example
 * client.bundles.listComponents("example", {})
 */
    listComponents(bundle_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<BundleComponentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listComponentsWithResponse(bundle_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<BundlesListComponentsResponse>>;
    listComponentsPages(bundle_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<BundleComponentListResponse>;
    listComponentsPagesWithResponse(bundle_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<BundlesListComponentsResponse>>;
    listComponentsItems(bundle_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<BundleComponent>;
    /**
 * List bundles.
 * GET /v1/bundles
 * @example
 * client.bundles.list({})
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "sku"?: InputValue<string>; "query"?: InputValue<string>; "category_handle"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "sort_by"?: InputValue<"created_at" | "updated_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<BundleListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "sku"?: InputValue<string>; "query"?: InputValue<string>; "category_handle"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "sort_by"?: InputValue<"created_at" | "updated_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<BundlesListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "sku"?: InputValue<string>; "query"?: InputValue<string>; "category_handle"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "sort_by"?: InputValue<"created_at" | "updated_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<BundleListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "sku"?: InputValue<string>; "query"?: InputValue<string>; "category_handle"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "sort_by"?: InputValue<"created_at" | "updated_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<BundlesListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "sku"?: InputValue<string>; "query"?: InputValue<string>; "category_handle"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "sort_by"?: InputValue<"created_at" | "updated_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Bundle>;
    /**
 * Update bundle.
 * PATCH /v1/bundles/{bundle_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.bundles.update("example", {"Idempotency-Key": idempotencyKey})
 */
    update(bundle_id: InputValue<string>, params: (InputValue<({ "barcode"?: string; "categories"?: Array<string>; "components"?: Array<UpdateBundleComponentRequestInput>; "description"?: string; "expected_version"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "line_item_tax_category"?: "general" | "physical_goods" | "digital_goods" | "software" | "saas" | "services" | "professional_services" | "food" | "prepared_food" | "clothing" | "medical_goods" | "admission"; "metadata"?: Record<string, string | null> | null; "modifier_set_id"?: string | null; "name"?: string; "sku"?: string; "status"?: "active" | "inactive"; "taxable"?: boolean; "unit_price_money"?: MoneyValueInput; }) & (((({ "categories"?: never })) | ({ "expected_version": unknown; }))) & (((({ "components"?: never })) | ({ "expected_version": unknown; }))) & (((({ "images"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<BundleResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(bundle_id: InputValue<string>, params: (InputValue<({ "barcode"?: string; "categories"?: Array<string>; "components"?: Array<UpdateBundleComponentRequestInput>; "description"?: string; "expected_version"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "line_item_tax_category"?: "general" | "physical_goods" | "digital_goods" | "software" | "saas" | "services" | "professional_services" | "food" | "prepared_food" | "clothing" | "medical_goods" | "admission"; "metadata"?: Record<string, string | null> | null; "modifier_set_id"?: string | null; "name"?: string; "sku"?: string; "status"?: "active" | "inactive"; "taxable"?: boolean; "unit_price_money"?: MoneyValueInput; }) & (((({ "categories"?: never })) | ({ "expected_version": unknown; }))) & (((({ "components"?: never })) | ({ "expected_version": unknown; }))) & (((({ "images"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<BundlesUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly bundles: BundlesResource;
}
export type { CreateBundleComponentRequestInput } from '../declarations/CreateBundleComponentRequestInput.js';
export type { ImageRequestInput } from '../declarations/ImageRequestInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { BundleResponse } from '../declarations/BundleResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { BundlesCreateResponse } from '../declarations/BundlesCreateResponse.js';
export type { BundlesRemoveResponse } from '../declarations/BundlesRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { BundlesGetResponse } from '../declarations/BundlesGetResponse.js';
export type { BundleComponentListResponse } from '../declarations/BundleComponentListResponse.js';
export type { BundlesListComponentsResponse } from '../declarations/BundlesListComponentsResponse.js';
export type { BundleComponent } from '../declarations/BundleComponent.js';
export type { BundleListResponse } from '../declarations/BundleListResponse.js';
export type { BundlesListResponse } from '../declarations/BundlesListResponse.js';
export type { Bundle } from '../declarations/Bundle.js';
export type { UpdateBundleComponentRequestInput } from '../declarations/UpdateBundleComponentRequestInput.js';
export type { BundlesUpdateResponse } from '../declarations/BundlesUpdateResponse.js';
export type { BundlesCreateInput } from '../declarations/BundlesCreateInput.js';
export type { BundlesRemoveInput } from '../declarations/BundlesRemoveInput.js';
export type { BundlesGetInput } from '../declarations/BundlesGetInput.js';
export type { BundlesListComponentsInput } from '../declarations/BundlesListComponentsInput.js';
export type { BundlesListInput } from '../declarations/BundlesListInput.js';
export type { BundlesUpdateInput } from '../declarations/BundlesUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { SelectedProductOption } from '../declarations/SelectedProductOption.js';
export type { CategoryReference } from '../declarations/CategoryReference.js';
export type { Image } from '../declarations/Image.js';
export type { ModifierSetGroup } from '../declarations/ModifierSetGroup.js';
export type { ModifierGroup } from '../declarations/ModifierGroup.js';
export type { Modifier } from '../declarations/Modifier.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { TextModifierConfig } from '../declarations/TextModifierConfig.js';
export type { ModifierOverride } from '../declarations/ModifierOverride.js';
export type { CreateBundleRequestInput } from '../declarations/CreateBundleRequestInput.js';
export type { UpdateBundleRequestInput } from '../declarations/UpdateBundleRequestInput.js';
export { makeBundleResponse } from '../declarations/makeBundleResponse.js';
export { makeBundleComponentListResponse } from '../declarations/makeBundleComponentListResponse.js';
export { makeBundleComponent } from '../declarations/makeBundleComponent.js';
export { makeBundleListResponse } from '../declarations/makeBundleListResponse.js';
export { makeBundle } from '../declarations/makeBundle.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeSelectedProductOption } from '../declarations/makeSelectedProductOption.js';
export { makeCategoryReference } from '../declarations/makeCategoryReference.js';
export { makeImage } from '../declarations/makeImage.js';
export { makeModifierSetGroup } from '../declarations/makeModifierSetGroup.js';
export { makeModifierGroup } from '../declarations/makeModifierGroup.js';
export { makeModifier } from '../declarations/makeModifier.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeTextModifierConfig } from '../declarations/makeTextModifierConfig.js';
export { makeModifierOverride } from '../declarations/makeModifierOverride.js';
