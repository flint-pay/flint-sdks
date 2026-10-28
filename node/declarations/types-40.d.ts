import type { Dimensions, DimensionsInput } from './types-17.js';
import type { GiftCardProductConfiguration, GiftCardProductConfigurationRequestRequestInput } from './types-20.js';
import type { ImageRequest, ImageRequestInput } from './types-21.js';
import type { InventoryItemCreateRequest, InventoryItemCreateRequestInput } from './types-26.js';
import type { MetadataMap, MetadataRequestInput } from './types-32.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { Weight, WeightInput } from './types-65.js';
import type { ProductVariant } from './types-39.js';
import type { ResponseMeta } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { CreateProductRequestInput } from './types-9.js';
import type { UpdateProductRequestInput, UpdateProductVariantRequestInput } from './types-52.js';
import type {
    PromotionRuleGroup,
    PromotionSchedule,
    PromotionRuleGroupRequest,
    PromotionRuleGroupRequestInput,
    PromotionRuleValue
} from './types-41.js';
/**
 * Shape $ (Value): {@link ProductVariantMatch}. A single variant witness on product list rows
 * only. With exact variant filters, the first variant by position, then variant_id, satisfying
 * every exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use
 * the paginated nested variant list to enumerate every match.
 */
export type ProductVariantMatch = {
    /** Shape $ (Value): string. Name of the matching variant, when set. */
    "name"?: string;
    /** Shape $ (Value): string. Stock keeping unit of the matching variant, when set. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Identifier of the variant that matched the product list's variant
     * filters or query.
     */
    "variant_id": string;
};
/** Shape $ (Value): {@link ProductVariantRequest}. The request body for: Create product variant. */
export type ProductVariantRequest = {
    /**
     * Shape $ (Value): string. Barcode assigned to this sellable item. minLength: 1. maxLength:
     * 100.
     */
    "barcode"?: string;
    /**
     * Shape $ (Value): string. Identifier of the delivery profile to assign to this variant.
     * minLength: 1.
     */
    "delivery_profile_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link GiftCardProductConfiguration}. Only valid for product_type
     * gift_card. Omission creates a fixed denomination at unit_price_money. Discounted pricing
     * requires an explicit face_value_money and price_mode discounted. Gift card settings on a
     * product variant: its `face_value_money`, price mode (face value or discounted), and bounds
     * for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfiguration;
    /**
     * Shape $ (Value): Array of {@link ImageRequest}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Shape $ (Value): {@link InventoryItemCreateRequest}. New inventory item to create and track
     * for this variant. Send either inventory_item or inventory_item_id. Inventory item details
     * you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`,
     * and metadata.
     */
    "inventory_item"?: InventoryItemCreateRequest;
    /**
     * Shape $ (Value): string. Identifier of an existing inventory item to track for this variant.
     * Send either inventory_item_id or inventory_item. minLength: 1.
     */
    "inventory_item_id"?: string;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /**
     * Shape $ (Value): string. Variant name that distinguishes it from the product's other
     * variants. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Shape $ (Value): integer. Display order among the product's variants, starting at zero.
     * Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): Array of {@link ProductVariantSelectedOptionRequest}. Option name and value
     * selections for this variant. When present on an update, replaces the entire selection. Omit
     * to leave unchanged. Select one active value for every active option. null is invalid. Shape
     * $[] (Value): {@link ProductVariantSelectedOptionRequest}. An option name and value you
     * choose to identify a product variant, such as Size and Large.
     */
    "selected_options"?: Array<ProductVariantSelectedOptionRequest>;
    /**
     * Shape $ (Value): string. Stock keeping unit assigned to this sellable item. minLength: 1.
     * maxLength: 100.
     */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Whether the variant is active or inactive. An inactive variant
     * cannot be sold. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link Dimensions}. Per-unit measurement. Omitted when unknown. Package or
     * item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Shape $ (Value): {@link MoneyValue}. Price charged for one unit, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Shape $ (Value): {@link Weight}. Per-unit measurement. Omitted when unknown. A weight value
     * in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
};
/**
 * Shape $ (Value): {@link ProductVariantRequestInput}. The request body for: Create product
 * variant.
 */
export type ProductVariantRequestInput = {
    /**
     * Shape $ (Value): string. Barcode assigned to this sellable item. minLength: 1. maxLength:
     * 100.
     */
    "barcode"?: string;
    /**
     * Shape $ (Value): string. Identifier of the delivery profile to assign to this variant.
     * minLength: 1.
     */
    "delivery_profile_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link GiftCardProductConfigurationRequestRequestInput}. Only valid for
     * product_type gift_card. Omission creates a fixed denomination at unit_price_money.
     * Discounted pricing requires an explicit face_value_money and price_mode discounted. Gift
     * card settings on a product variant: its `face_value_money`, price mode (face value or
     * discounted), and bounds for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfigurationRequestRequestInput;
    /**
     * Shape $ (Value): Array of {@link ImageRequestInput}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
     * optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Shape $ (Value): {@link InventoryItemCreateRequestInput}. New inventory item to create and
     * track for this variant. Send either inventory_item or inventory_item_id. Inventory item
     * details you supply when creating an inventory item for a product variant: `name`, `sku`,
     * `barcode`, and metadata.
     */
    "inventory_item"?: InventoryItemCreateRequestInput;
    /**
     * Shape $ (Value): string. Identifier of an existing inventory item to track for this variant.
     * Send either inventory_item_id or inventory_item. minLength: 1.
     */
    "inventory_item_id"?: string;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /**
     * Shape $ (Value): string. Variant name that distinguishes it from the product's other
     * variants. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Shape $ (Value): integer. Display order among the product's variants, starting at zero.
     * Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): Array of {@link ProductVariantSelectedOptionRequestInput}. Option name and
     * value selections for this variant. When present on an update, replaces the entire selection.
     * Omit to leave unchanged. Select one active value for every active option. null is invalid.
     * Shape $[] (Value): {@link ProductVariantSelectedOptionRequestInput}. An option name and
     * value you choose to identify a product variant, such as Size and Large.
     */
    "selected_options"?: Array<ProductVariantSelectedOptionRequestInput>;
    /**
     * Shape $ (Value): string. Stock keeping unit assigned to this sellable item. minLength: 1.
     * maxLength: 100.
     */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Whether the variant is active or inactive. An inactive variant
     * cannot be sold. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link DimensionsInput}. Per-unit measurement. Omitted when unknown.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Price charged for one unit, in the currency's
     * smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Shape $ (Value): {@link WeightInput}. Per-unit measurement. Omitted when unknown. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
};
/** Shape $ (Value): {@link ProductVariantResponse}. A response containing `ProductVariant` data. */
export type ProductVariantResponse = {
    /**
     * Shape $ (Value): {@link ProductVariant}. The requested product variant data. A specific
     * purchasable version of a product.
     */
    "data": ProductVariant;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link ProductVariantSelectedOptionRequest}. An option name and value you
 * choose to identify a product variant, such as Size and Large.
 */
export type ProductVariantSelectedOptionRequest = {
    /**
     * Shape $ (Value): string. Name of one of the product's options. Limited to 255 characters
     * (Unicode code points) before trimming surrounding whitespace. Matches case-insensitively
     * after trimming surrounding whitespace. On a variant update, an option that is no longer
     * active is accepted only when the entry matches the variant's current selection for that
     * option; omit it to keep that selection. minLength: 1. maxLength: 255.
     */
    "option_name": string;
    /**
     * Shape $ (Value): string. Value of the named option. Limited to 255 characters (Unicode code
     * points) before trimming surrounding whitespace. Matches the option's values
     * case-insensitively after trimming surrounding whitespace. A value that is no longer active
     * is accepted only on a variant update, when it matches the variant's current selection for
     * that option. minLength: 1. maxLength: 255.
     */
    "value": string;
};
/**
 * Shape $ (Value): {@link ProductVariantSelectedOptionRequestInput}. An option name and value you
 * choose to identify a product variant, such as Size and Large.
 */
export type ProductVariantSelectedOptionRequestInput = ProductVariantSelectedOptionRequest;
export type ProductsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateProductRequestInput}. The request body for: Create product. */
    "body": InputValue<CreateProductRequestInput>;
};
export type ProductsCreateVariantInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ProductVariantRequestInput}. The request body for: Create product
     * variant.
     */
    "body": InputValue<ProductVariantRequestInput>;
};
export type ProductsDeleteVariantInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "variant_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ProductsGetInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "modifier_set". Shape $[] (Value): string. Value
     * enum: "modifier_set".
     */
    "expand"?: InputValue<Array<"modifier_set">>;
};
export type ProductsGetOptionInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "option_id": InputValue<string>;
};
export type ProductsGetVariantInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "variant_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "modifier_set". Shape $[] (Value): string. Value
     * enum: "modifier_set".
     */
    "expand"?: InputValue<Array<"modifier_set">>;
};
export type ProductsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "physical", "service", "fee",
     * "digital", "gift_card". Shape $[] (Value): string. Value enum: "physical", "service", "fee",
     * "digital", "gift_card".
     */
    "product_type"?: InputValue<Array<"physical" | "service" | "fee" | "digital" | "gift_card">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): string. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$. */
    "category_handle"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "sku"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "variant_external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. pattern: ^invi_[0-9A-HJKMNP-TV-Z]{26}$. */
    "inventory_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "configured", "action_required",
     * "not_applicable". Shape $[] (Value): string. Value enum: "configured", "action_required",
     * "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "name", "created_at",
     * "updated_at".
     */
    "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "modifier_set". Shape $[] (Value): string. Value
     * enum: "modifier_set".
     */
    "expand"?: InputValue<Array<"modifier_set">>;
};
export type ProductsListOptionsInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
};
export type ProductsListVariantsInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "sku"?: InputValue<string>;
    /** Shape $ (Value): string. pattern: ^invi_[0-9A-HJKMNP-TV-Z]{26}$. */
    "inventory_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "position". Value enum: "position", "created_at",
     * "updated_at", "unit_price_money".
     */
    "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price_money">;
    /** Shape $ (Value): string. Default: "asc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "configured", "action_required",
     * "not_applicable". Shape $[] (Value): string. Value enum: "configured", "action_required",
     * "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "modifier_set". Shape $[] (Value): string. Value
     * enum: "modifier_set".
     */
    "expand"?: InputValue<Array<"modifier_set">>;
};
export type ProductsRemoveInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ProductsUpdateInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateProductRequestInput}. Send only fields to change. Omitted
     * fields keep their stored values. null clears nullable fields; null on any other field
     * returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with
     * at most 50 keys after merging.
     */
    "body": InputValue<UpdateProductRequestInput>;
};
export type ProductsUpdateVariantInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "variant_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateProductVariantRequestInput}. Send only fields to change.
     * Omitted fields keep their stored values. null clears nullable fields; null on any other
     * field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by
     * key, with at most 50 keys after merging.
     */
    "body": InputValue<UpdateProductVariantRequestInput>;
};
/**
 * Shape $ (Value): {@link Promotion}. Promotion evaluation order: manual discounts stay, do not
 * count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are
 * admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include
 * codes being applied, existing promotion discounts, and qualifying automatic promotions. Each
 * exclusivity group keeps its highest-priority member, then the larger standalone discount,
 * earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount,
 * then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order
 * is reached or both promotions do not allow each other's discount class. Admitted promotions
 * price line item first, then order, then service charge. A zero-value promotion is dropped and
 * selection runs again.
 */
export type Promotion = {
    /**
     * Shape $ (Value): {@link PromotionApplicationMethod}. Discount effect and how it applies to
     * eligible items or charges. A flat application method whose type selects its effect fields.
     */
    "application_method": PromotionApplicationMethod;
    /**
     * Shape $ (Value): boolean. Whether the promotion can apply right now: it is active, inside
     * its schedule, under its max_uses, and, when code-gated, has at least one redeemable code.
     */
    "available": boolean;
    /**
     * Shape $ (Value): Array of {@link PromotionCode}. The codes this request created, in request
     * order. Present only on the `POST /v1/promotions` response, where it is `[]` for a promotion
     * created without codes. Read codes later with `GET /v1/promotion-codes?promotion_id=`. Shape
     * $[] (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion.
     */
    "codes"?: Array<PromotionCode>;
    /**
     * Shape $ (Value): {@link PromotionCodesSummary}. Read-only rollup of this promotion's codes.
     * Present only on code-gated promotions; automatic promotions omit it. A count of a
     * promotion's codes, including how many are redeemable now and the newest redeemable code.
     */
    "codes_summary"?: PromotionCodesSummary;
    /**
     * Shape $ (Value): {@link PromotionCombinesWith}. Which promotion discount classes this
     * promotion may share an order with. Both promotions must allow each other's class. Manual
     * discounts are ignored. See Promotion for the evaluation order. Which kinds of discounts a
     * promotion can combine with: line item, order, and service charge discounts.
     */
    "combines_with": PromotionCombinesWith;
    /**
     * Shape $ (Value): string. When the promotion was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /** Shape $ (Value): string. Optional description of the promotion for your own records. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Whether the promotion discounts the order, individual line items,
     * or service charges. Value enum: "order", "line_item", "service_charge".
     */
    "discount_class": "order" | "line_item" | "service_charge" | (string & {});
    /**
     * Shape $ (Value): string. Buyer-facing promotion name shown in checkout and order discount
     * surfaces.
     */
    "display_name": string;
    /**
     * Shape $ (Value): {@link PromotionRuleGroup}. Conditions an order must satisfy for the
     * promotion to apply. Omitted when the promotion has no eligibility conditions. A rule group
     * is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested
     * groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or
     * send null where the field is clearable. Responses list rules before nested groups. Under
     * any, a nested group containing only one rule reads back as that rule. Under all, nested
     * groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic
     * normalizations stabilize after one round trip. matched_items.subtotal sums the line items
     * matched by the line_item.* rules in the same all group, including its nested groups.
     */
    "eligibility_rules"?: PromotionRuleGroup;
    /**
     * Shape $ (Value): {@link PromotionExclusivity}. Optional group and priority used to choose
     * one promotion from competing promotions in the same group. See Promotion for the evaluation
     * order. Only one promotion in an exclusivity group continues. See Promotion for the
     * evaluation order.
     */
    "exclusivity"?: PromotionExclusivity;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Maximum number of redemptions across all codes and
     * automatic applications. Omitted when there is no redemption limit. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "max_uses"?: `${bigint}`;
    /** Shape $ (Value): string. Identifier of the merchant that owns the promotion. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Key-value data you attach to the promotion.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. Internal promotion name for dashboards, searching, and reporting.
     */
    "name": string;
    /** Shape $ (Value): string. Unique identifier for the promotion. */
    "promotion_id": string;
    /**
     * Shape $ (Value): string. Whether the promotion applies automatically when its rules match or
     * requires a promotion code. Value enum: "automatic", "code".
     */
    "redemption_type": "automatic" | "code" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionSchedule}. Optional start and end times that limit when the
     * promotion can apply. When a promotion is active, with a start time, an end time, and the
     * time zone it was entered in.
     */
    "schedule"?: PromotionSchedule;
    /**
     * Shape $ (Value): string. Lifecycle status. Set active or inactive with PATCH; DELETE sets
     * archived. An active promotion can still be unavailable: read available. Value enum:
     * "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string. Why available is false. Present only when available is false. Value
     * enum: "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
     */
    "unavailable_reason"?: "inactive"
        | "archived"
        | "not_yet_started"
        | "expired"
        | "exhausted"
        | "no_active_codes"
        | (string & {});
    /**
     * Shape $ (Value): string. When the promotion was last updated, as an RFC3339 timestamp.
     * Format: date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Number of times the promotion has been redeemed. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "uses_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Persisted owned-state version. Clock-based availability and
     * expanded resources do not advance this counter. Use an integer string (decimal digits), not
     * a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link PromotionAmountOffMethod}. The `amount_off` variant of
 * `PromotionApplicationMethod`.
 */
export type PromotionAmountOffMethod = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Positive fixed discount in the primary currency.
     * allocation determines whether it applies to each matched item or once across the matched
     * set. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_off_money": MoneyValue;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Alternative positive fixed discounts, keyed by
     * currency code. Each Money currency must match its key. Shape $.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "currency_options"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): {@link PromotionRuleGroup}. Which line items receive the discount. Required
     * for service_charge promotions, and for line_item promotions whose eligibility_rules include
     * any non-line-item condition (for example order.subtotal or a customer condition). It is
     * optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroup;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Selects the amount_off discount effect and its allowed fields.
     * Value enum: "amount_off".
     */
    "type": "amount_off" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionAmountOffMethodRequest}. The `amount_off` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionAmountOffMethodRequest = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Positive fixed discount in the primary currency.
     * allocation determines whether it applies to each matched item or once across the matched
     * set. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_off_money": MoneyValue;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Alternative positive fixed discounts, keyed by
     * currency code. Each Money currency must match its key. Shape $.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "currency_options"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Which line items receive the discount.
     * Required for service_charge promotions, and for line_item promotions whose eligibility_rules
     * include any non-line-item condition (for example order.subtotal or a customer condition). It
     * is optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Selects the amount_off discount effect and its allowed fields.
     * Value enum: "amount_off".
     */
    "type": "amount_off" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionAmountOffMethodRequestInput}. The `amount_off` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionAmountOffMethodRequestInput = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Positive fixed discount in the primary currency.
     * allocation determines whether it applies to each matched item or once across the matched
     * set. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_off_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax";
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Alternative positive fixed discounts, keyed
     * by currency code. Each Money currency must match its key. Shape $.* (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput}. Which line items receive the
     * discount. Required for service_charge promotions, and for line_item promotions whose
     * eligibility_rules include any non-line-item condition (for example order.subtotal or a
     * customer condition). It is optional only when eligibility_rules consist entirely of
     * line_item.* conditions (plus matched_items.subtotal), in which case the matched items are
     * used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule
     * group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested
     * groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or
     * send null where the field is clearable. Responses list rules before nested groups. Under
     * any, a nested group containing only one rule reads back as that rule. Under all, nested
     * groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic
     * normalizations stabilize after one round trip. matched_items.subtotal sums the line items
     * matched by the line_item.* rules in the same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRecurrenceInput}. Optional recurrence for subscription
     * payments: once applies to the first charged payment, repeating applies for period_count
     * charged payments, and forever applies to every payment. One-time orders apply the promotion
     * once. How often a promotion's discount repeats on a subscription: once, for a number of
     * charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrenceInput;
    /**
     * Shape $ (Value): string. Selects the amount_off discount effect and its allowed fields.
     * Value enum: "amount_off".
     */
    "type": "amount_off";
};
/**
 * Shape $ (Value): {@link PromotionApplicationMethod}. A flat application method whose type
 * selects its effect fields.
 */
export type PromotionApplicationMethod = ((PromotionPercentOffMethod)
    | (PromotionAmountOffMethod)
    | (PromotionBuyXGetYMethod)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PromotionApplicationMethodPatch}. Send only application_method fields to
 * change. Omitted fields keep their stored values. Sending a different type replaces the effect
 * with the supplied effect fields; allocation, calculation_basis, recurrence, and
 * discounted_item_rules are preserved unless sent, and discounted_item_rules: null clears the
 * stored rules. Money, recurrence, currency_options, and each rule group are replaced whole when
 * present. null clears only nullable fields. discounted_item_rules cannot be null for buy_x_get_y.
 * minProperties: 1.
 */
export type PromotionApplicationMethodPatch = {
    /**
     * Shape $ (Value): string. How the effect is allocated. Omitted allocation keeps its stored
     * value; it defaults by discount_class only when no allocation is stored. Changing
     * discount_class does not reset allocation. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Positive fixed discount in the primary currency.
     * allocation determines whether it applies to each matched item or once across the matched
     * set. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_off_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer. Number of qualifying units needed for one application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "buy_min_quantity"?: number;
    /**
     * Shape $ (Value): string or null. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Send null to clear it. Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | null | (string & {}) | null;
    /**
     * Shape $ (Value): Map of {@link MoneyValue} or null. Alternative positive fixed discounts,
     * keyed by currency code. Each Money currency must match its key. Shape $.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "currency_options"?: Record<string, MoneyValue> | null;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest} or null. Which line items receive the
     * discount. Required for service_charge promotions, and for line_item promotions whose
     * eligibility_rules include any non-line-item condition (for example order.subtotal or a
     * customer condition). It is optional only when eligibility_rules consist entirely of
     * line_item.* conditions (plus matched_items.subtotal), in which case the matched items are
     * used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. Shape
     * $.anyOf[1] (Value): {@link PromotionRuleGroupRequest}. A rule group is an object with
     * exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
     * groups, and a rules key are invalid. Omit the field for no rules, or send null where the
     * field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. Shape $.anyOf[2]
     * (Value): null.
     */
    "discounted_item_rules"?: ((PromotionRuleGroupRequest) | (null) | (unknown));
    /**
     * Shape $ (Value): number. Percentage to discount from reward items, from 1 to 100. Use 100 to
     * make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off"?: number;
    /**
     * Shape $ (Value): integer. Maximum number of reward units discounted per application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "get_quantity"?: number;
    /**
     * Shape $ (Value): integer or null. Maximum number of times the buy_x_get_y promotion can
     * apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format:
     * int32. minimum: 1.
     */
    "max_applications_per_order"?: number | null;
    /**
     * Shape $ (Value): integer or null. Maximum matched units discounted, valid only for
     * percent_off with allocation each. null clears the limit. Fields belonging to another effect
     * return INVALID_REQUEST; send type to change effects. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number | null;
    /**
     * Shape $ (Value): number. Percentage to discount, from 1 to 100. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "percent_off"?: number;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Rules that identify the items counted
     * toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly
     * one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups,
     * and a rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "qualifying_item_rules"?: PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): {@link PromotionRecurrence} or null. Optional recurrence for subscription
     * payments: once applies to the first charged payment, repeating applies for period_count
     * charged payments, and forever applies to every payment. One-time orders apply the promotion
     * once. Shape $.anyOf[1] (Value): {@link PromotionRecurrence}. How often a promotion's
     * discount repeats on a subscription: once, for a number of charged payments, or forever.
     * Shape $.anyOf[2] (Value): null.
     */
    "recurrence"?: ((PromotionRecurrence) | (null) | (unknown));
    /**
     * Shape $ (Value): string. Which matching reward items receive the discount: the cheapest, the
     * highest priced, or those added first to the order. Defaults to cheapest. Default:
     * "cheapest". Value enum: "cheapest", "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Shape $ (Value): string. Discount effect: a percentage, a fixed amount, or a discount on
     * reward items after qualifying purchases. Value enum: "percent_off", "amount_off",
     * "buy_x_get_y".
     */
    "type"?: "percent_off" | "amount_off" | "buy_x_get_y" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionApplicationMethodPatchInput}. Send only application_method
 * fields to change. Omitted fields keep their stored values. Sending a different type replaces the
 * effect with the supplied effect fields; allocation, calculation_basis, recurrence, and
 * discounted_item_rules are preserved unless sent, and discounted_item_rules: null clears the
 * stored rules. Money, recurrence, currency_options, and each rule group are replaced whole when
 * present. null clears only nullable fields. discounted_item_rules cannot be null for buy_x_get_y.
 * minProperties: 1.
 */
export type PromotionApplicationMethodPatchInput = {
    /**
     * Shape $ (Value): string. How the effect is allocated. Omitted allocation keeps its stored
     * value; it defaults by discount_class only when no allocation is stored. Changing
     * discount_class does not reset allocation. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Positive fixed discount in the primary currency.
     * allocation determines whether it applies to each matched item or once across the matched
     * set. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_off_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer. Number of qualifying units needed for one application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "buy_min_quantity"?: number;
    /**
     * Shape $ (Value): string or null. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Send null to clear it. Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | null;
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput} or null. Alternative positive fixed
     * discounts, keyed by currency code. Each Money currency must match its key. Shape $.*
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValueInput> | null;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput} or null. Which line items receive
     * the discount. Required for service_charge promotions, and for line_item promotions whose
     * eligibility_rules include any non-line-item condition (for example order.subtotal or a
     * customer condition). It is optional only when eligibility_rules consist entirely of
     * line_item.* conditions (plus matched_items.subtotal), in which case the matched items are
     * used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. Shape
     * $.anyOf[1] (Value): {@link PromotionRuleGroupRequestInput}. A rule group is an object with
     * exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
     * groups, and a rules key are invalid. Omit the field for no rules, or send null where the
     * field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. Shape $.anyOf[2]
     * (Value): null.
     */
    "discounted_item_rules"?: ((PromotionRuleGroupRequestInput) | (null));
    /**
     * Shape $ (Value): number. Percentage to discount from reward items, from 1 to 100. Use 100 to
     * make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off"?: number;
    /**
     * Shape $ (Value): integer. Maximum number of reward units discounted per application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "get_quantity"?: number;
    /**
     * Shape $ (Value): integer or null. Maximum number of times the buy_x_get_y promotion can
     * apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format:
     * int32. minimum: 1.
     */
    "max_applications_per_order"?: number | null;
    /**
     * Shape $ (Value): integer or null. Maximum matched units discounted, valid only for
     * percent_off with allocation each. null clears the limit. Fields belonging to another effect
     * return INVALID_REQUEST; send type to change effects. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number | null;
    /**
     * Shape $ (Value): number. Percentage to discount, from 1 to 100. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "percent_off"?: number;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput}. Rules that identify the items
     * counted toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with
     * exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
     * groups, and a rules key are invalid. Omit the field for no rules, or send null where the
     * field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups.
     */
    "qualifying_item_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRecurrenceInput} or null. Optional recurrence for
     * subscription payments: once applies to the first charged payment, repeating applies for
     * period_count charged payments, and forever applies to every payment. One-time orders apply
     * the promotion once. Shape $.anyOf[1] (Value): {@link PromotionRecurrenceInput}. How often a
     * promotion's discount repeats on a subscription: once, for a number of charged payments, or
     * forever. Shape $.anyOf[2] (Value): null.
     */
    "recurrence"?: ((PromotionRecurrenceInput) | (null));
    /**
     * Shape $ (Value): string. Which matching reward items receive the discount: the cheapest, the
     * highest priced, or those added first to the order. Defaults to cheapest. Default:
     * "cheapest". Value enum: "cheapest", "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added";
    /**
     * Shape $ (Value): string. Discount effect: a percentage, a fixed amount, or a discount on
     * reward items after qualifying purchases. Value enum: "percent_off", "amount_off",
     * "buy_x_get_y".
     */
    "type"?: "percent_off" | "amount_off" | "buy_x_get_y";
};
/**
 * Shape $ (Value): {@link PromotionApplicationMethodRequest}. A flat application method whose type
 * selects its effect fields.
 */
export type PromotionApplicationMethodRequest = ((PromotionPercentOffMethodRequest)
    | (PromotionAmountOffMethodRequest)
    | (PromotionBuyXGetYMethodRequest)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PromotionApplicationMethodRequestInput}. A flat application method whose
 * type selects its effect fields.
 */
export type PromotionApplicationMethodRequestInput = ((PromotionPercentOffMethodRequestInput)
    | (PromotionAmountOffMethodRequestInput)
    | (PromotionBuyXGetYMethodRequestInput));
/**
 * Shape $ (Value): {@link PromotionBuyXGetYMethod}. The `buy_x_get_y` variant of
 * `PromotionApplicationMethod`.
 */
export type PromotionBuyXGetYMethod = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): integer. Number of qualifying units needed for one application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionRuleGroup}. Which line items receive the discount. Required
     * for service_charge promotions, and for line_item promotions whose eligibility_rules include
     * any non-line-item condition (for example order.subtotal or a customer condition). It is
     * optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules": PromotionRuleGroup;
    /**
     * Shape $ (Value): number. Percentage to discount from reward items, from 1 to 100. Use 100 to
     * make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Shape $ (Value): integer. Maximum number of reward units discounted per application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Shape $ (Value): integer. Maximum number of times the buy_x_get_y promotion can apply to one
     * order. Omit for no limit beyond the qualifying and reward quantities. Format: int32.
     * minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Shape $ (Value): {@link PromotionRuleGroup}. Rules that identify the items counted toward
     * buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "qualifying_item_rules": PromotionRuleGroup;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Which matching reward items receive the discount: the cheapest, the
     * highest priced, or those added first to the order. Defaults to cheapest. Default:
     * "cheapest". Value enum: "cheapest", "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Shape $ (Value): string. Selects the buy_x_get_y discount effect and its allowed fields.
     * Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionBuyXGetYMethodRequest}. The `buy_x_get_y` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionBuyXGetYMethodRequest = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): integer. Number of qualifying units needed for one application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Which line items receive the discount.
     * Required for service_charge promotions, and for line_item promotions whose eligibility_rules
     * include any non-line-item condition (for example order.subtotal or a customer condition). It
     * is optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules": PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): number. Percentage to discount from reward items, from 1 to 100. Use 100 to
     * make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Shape $ (Value): integer. Maximum number of reward units discounted per application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Shape $ (Value): integer. Maximum number of times the buy_x_get_y promotion can apply to one
     * order. Omit for no limit beyond the qualifying and reward quantities. Format: int32.
     * minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Rules that identify the items counted
     * toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly
     * one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups,
     * and a rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "qualifying_item_rules": PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Which matching reward items receive the discount: the cheapest, the
     * highest priced, or those added first to the order. Defaults to cheapest. Default:
     * "cheapest". Value enum: "cheapest", "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Shape $ (Value): string. Selects the buy_x_get_y discount effect and its allowed fields.
     * Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionBuyXGetYMethodRequestInput}. The `buy_x_get_y` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionBuyXGetYMethodRequestInput = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * Shape $ (Value): integer. Number of qualifying units needed for one application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax";
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput}. Which line items receive the
     * discount. Required for service_charge promotions, and for line_item promotions whose
     * eligibility_rules include any non-line-item condition (for example order.subtotal or a
     * customer condition). It is optional only when eligibility_rules consist entirely of
     * line_item.* conditions (plus matched_items.subtotal), in which case the matched items are
     * used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule
     * group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested
     * groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or
     * send null where the field is clearable. Responses list rules before nested groups. Under
     * any, a nested group containing only one rule reads back as that rule. Under all, nested
     * groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic
     * normalizations stabilize after one round trip. matched_items.subtotal sums the line items
     * matched by the line_item.* rules in the same all group, including its nested groups.
     */
    "discounted_item_rules": PromotionRuleGroupRequestInput;
    /**
     * Shape $ (Value): number. Percentage to discount from reward items, from 1 to 100. Use 100 to
     * make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Shape $ (Value): integer. Maximum number of reward units discounted per application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Shape $ (Value): integer. Maximum number of times the buy_x_get_y promotion can apply to one
     * order. Omit for no limit beyond the qualifying and reward quantities. Format: int32.
     * minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput}. Rules that identify the items
     * counted toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with
     * exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
     * groups, and a rules key are invalid. Omit the field for no rules, or send null where the
     * field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups.
     */
    "qualifying_item_rules": PromotionRuleGroupRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRecurrenceInput}. Optional recurrence for subscription
     * payments: once applies to the first charged payment, repeating applies for period_count
     * charged payments, and forever applies to every payment. One-time orders apply the promotion
     * once. How often a promotion's discount repeats on a subscription: once, for a number of
     * charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrenceInput;
    /**
     * Shape $ (Value): string. Which matching reward items receive the discount: the cheapest, the
     * highest priced, or those added first to the order. Defaults to cheapest. Default:
     * "cheapest". Value enum: "cheapest", "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added";
    /**
     * Shape $ (Value): string. Selects the buy_x_get_y discount effect and its allowed fields.
     * Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y";
};
/**
 * Shape $ (Value): {@link PromotionCandidate}. A promotion considered for an order, with its
 * discount amounts, its stacking rules, and why it was or was not applied.
 */
export type PromotionCandidate = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Calculated discount amount for this promotion candidate
     * before final application, when available. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Discount amount applied to the order for candidates in
     * applied[]. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "applied_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link PromotionCombinesWith}. Which kinds of discounts a promotion can
     * combine with: line item, order, and service charge discounts.
     */
    "combines_with"?: PromotionCombinesWith;
    /**
     * Shape $ (Value): {@link MoneyValue}. Current money amount counted toward threshold_money for
     * available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "current_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "customer_facing_name": string;
    /** Shape $ (Value): string.  Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionExclusivity}. Only one promotion in an exclusivity group
     * continues. See Promotion for the evaluation order.
     */
    "exclusivity"?: PromotionExclusivity;
    /**
     * Shape $ (Value): {@link MoneyValue}. Additional money amount needed to reach threshold_money
     * for available[] candidates. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "gap_money"?: MoneyValue;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "order_charge_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "order_line_item_ids"?: Array<string>;
    /** Shape $ (Value): string. */
    "promotion_code"?: string;
    /** Shape $ (Value): string. */
    "promotion_code_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "already_applied", "automatic_disabled",
     * "buy_item_missing", "code_invalid", "code_required", "codes_disabled", "currency_mismatch",
     * "exhausted", "expired", "inactive", "max_promotions_reached", "minimum_not_met",
     * "no_discountable_balance", "not_combinable", "not_eligible", "not_yet_started",
     * "superseded", "superseded_by_better_offer", "superseded_by_higher_priority", "unknown_type".
     */
    "promotion_decline_reason"?: "already_applied"
        | "automatic_disabled"
        | "buy_item_missing"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "currency_mismatch"
        | "exhausted"
        | "expired"
        | "inactive"
        | "max_promotions_reached"
        | "minimum_not_met"
        | "no_discountable_balance"
        | "not_combinable"
        | "not_eligible"
        | "not_yet_started"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "unknown_type"
        | (string & {});
    /** Shape $ (Value): string. */
    "promotion_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Minimum money amount required by a threshold rule for
     * available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "threshold_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Discount amount this candidate would have applied if it
     * had been eligible and won conflict resolution. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "would_have_applied_money"?: MoneyValue;
};
/** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
export type PromotionCode = {
    /**
     * Shape $ (Value): boolean. Whether a buyer can redeem the code right now: the code is active,
     * not expired, and under its max_uses, and its promotion is available.
     */
    "available": boolean;
    /** Shape $ (Value): string. Code a buyer enters to redeem the promotion. */
    "code": string;
    /**
     * Shape $ (Value): string. When the promotion code was created, as an RFC3339 timestamp.
     * Format: date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. When the code stops being redeemable, as an absolute RFC3339
     * timestamp. Omitted when the code does not expire. Format: date-time.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): integer string. Maximum number of times this code can be redeemed. Omitted
     * when the code has no redemption limit. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "max_uses"?: `${bigint}`;
    /** Shape $ (Value): string. Identifier of the merchant that owns the promotion code. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Key-value data you attach to the promotion code.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link Promotion}. The promotion this code belongs to. Present only when
     * the list request asked for expand=promotion. Promotion evaluation order: manual discounts
     * stay, do not count toward the cap, and are ignored by combines_with. Frozen
     * subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "promotion"?: Promotion;
    /** Shape $ (Value): string. Unique identifier for the promotion code. */
    "promotion_code_id": string;
    /** Shape $ (Value): string. Identifier of the promotion this code redeems. */
    "promotion_id": string;
    /**
     * Shape $ (Value): string. Lifecycle status: active, inactive, or archived. Set active or
     * inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read
     * available. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string. IANA zone the code's times were entered in, used for display.
     * expires_at is an absolute timestamp, so this does not change when the code expires.
     */
    "timezone"?: string;
    /**
     * Shape $ (Value): string. Why available is false. Present only when available is false. The
     * code's own state is reported first; promotion_unavailable means the code is usable but its
     * promotion is not. Value enum: "archived", "inactive", "expired", "exhausted",
     * "promotion_unavailable".
     */
    "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
    /**
     * Shape $ (Value): string. When the promotion code was last updated, as an RFC3339 timestamp.
     * Format: date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Number of times this code has been redeemed. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64.
     */
    "uses_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Persisted owned-state version. Clock-based availability and
     * expanded resources do not advance this counter. Use an integer string (decimal digits), not
     * a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link PromotionCodeListResponse}. A page of `PromotionCode` objects. */
export type PromotionCodeListResponse = {
    /**
     * Shape $ (Value): Array of {@link PromotionCode}. Promotion codes returned in the requested
     * sort order. Shape $[] (Value): {@link PromotionCode}. A code a buyer enters to claim a
     * promotion.
     */
    "data": Array<PromotionCode>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link PromotionCodeResponse}. A response containing `PromotionCode` data. */
export type PromotionCodeResponse = {
    /**
     * Shape $ (Value): {@link PromotionCode}. The requested promotion code. A code a buyer enters
     * to claim a promotion.
     */
    "data": PromotionCode;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link PromotionCodesSummary}. A count of a promotion's codes, including how
 * many are redeemable now and the newest redeemable code.
 */
export type PromotionCodesSummary = {
    /**
     * Shape $ (Value): integer. Number of codes a buyer can redeem now: active, not expired, and
     * under their max_uses. When it is 0, a code-gated promotion is unavailable with
     * unavailable_reason no_active_codes. Format: int32.
     */
    "active_count": number;
    /**
     * Shape $ (Value): string. Most recently created redeemable code. Omitted when active_count is
     * zero.
     */
    "newest_active_code"?: string;
    /**
     * Shape $ (Value): integer. Number of codes on the promotion, excluding archived codes.
     * Format: int32.
     */
    "total_count": number;
};
/**
 * Shape $ (Value): {@link PromotionCombinesWith}. Which kinds of discounts a promotion can combine
 * with: line item, order, and service charge discounts.
 */
export type PromotionCombinesWith = {
    /**
     * Shape $ (Value): boolean. Allow line item promotions, subject to the evaluation order on
     * Promotion.
     */
    "line_item": boolean;
    /**
     * Shape $ (Value): boolean. Allow order promotions, subject to the evaluation order on
     * Promotion.
     */
    "order": boolean;
    /**
     * Shape $ (Value): boolean. Allow service charge promotions, subject to the evaluation order
     * on Promotion.
     */
    "service_charge": boolean;
};
/**
 * Shape $ (Value): {@link PromotionCombinesWithPatch}. Change which promotion discount classes
 * this promotion can combine with. Omitted classes keep their current values. minProperties: 1.
 */
export type PromotionCombinesWithPatch = {
    /**
     * Shape $ (Value): boolean. Allow line item promotions, subject to the evaluation order on
     * Promotion.
     */
    "line_item"?: boolean;
    /**
     * Shape $ (Value): boolean. Allow order promotions, subject to the evaluation order on
     * Promotion.
     */
    "order"?: boolean;
    /**
     * Shape $ (Value): boolean. Allow service charge promotions, subject to the evaluation order
     * on Promotion.
     */
    "service_charge"?: boolean;
};
/**
 * Shape $ (Value): {@link PromotionCombinesWithPatchInput}. Change which promotion discount
 * classes this promotion can combine with. Omitted classes keep their current values.
 * minProperties: 1.
 */
export type PromotionCombinesWithPatchInput = PromotionCombinesWithPatch;
/**
 * Shape $ (Value): {@link PromotionCombinesWithRequestInput}. Which promotion discount classes
 * this promotion can combine with. Omitted classes default to true.
 */
export type PromotionCombinesWithRequestInput = PromotionCombinesWithPatch;
/**
 * Shape $ (Value): {@link PromotionExclusivity}. Only one promotion in an exclusivity group
 * continues. See Promotion for the evaluation order.
 */
export type PromotionExclusivity = {
    /**
     * Shape $ (Value): string. Exact, case-sensitive group name, 1 to 100 characters after
     * trimming. minLength: 1. maxLength: 100.
     */
    "group": string;
    /**
     * Shape $ (Value): integer. Higher priority wins. Equal priorities favor the larger standalone
     * discount, then the earlier created_at, then the lower promotion_id. Format: int32. Default:
     * 0.
     */
    "priority": number;
};
/**
 * Shape $ (Value): {@link PromotionExclusivityPatch}. Send only fields to change. Omitted fields
 * keep their stored values. Send priority 0 to reset it. An empty object is invalid.
 * minProperties: 1.
 */
export type PromotionExclusivityPatch = {
    /**
     * Shape $ (Value): string. Exact, case-sensitive group name, 1 to 100 characters after
     * trimming. minLength: 1. maxLength: 100.
     */
    "group"?: string;
    /**
     * Shape $ (Value): integer. Higher priority wins. Equal priorities favor the larger standalone
     * discount, then the earlier created_at, then the lower promotion_id. Format: int32. Default:
     * 0.
     */
    "priority"?: number;
};
/**
 * Shape $ (Value): {@link PromotionExclusivityPatchInput}. Send only fields to change. Omitted
 * fields keep their stored values. Send priority 0 to reset it. An empty object is invalid.
 * minProperties: 1.
 */
export type PromotionExclusivityPatchInput = PromotionExclusivityPatch;
/**
 * Shape $ (Value): {@link PromotionExclusivityRequest}. Only one promotion in an exclusivity group
 * continues. See Promotion for the evaluation order.
 */
export type PromotionExclusivityRequest = {
    /**
     * Shape $ (Value): string. Exact, case-sensitive group name, 1 to 100 characters after
     * trimming. minLength: 1. maxLength: 100.
     */
    "group": string;
    /**
     * Shape $ (Value): integer. Higher priority wins. Equal priorities favor the larger standalone
     * discount, then the earlier created_at, then the lower promotion_id. Format: int32. Default:
     * 0.
     */
    "priority"?: number;
};
/**
 * Shape $ (Value): {@link PromotionExclusivityRequestInput}. Only one promotion in an exclusivity
 * group continues. See Promotion for the evaluation order.
 */
export type PromotionExclusivityRequestInput = PromotionExclusivityRequest;
/** Shape $ (Value): {@link PromotionListResponse}. A page of `Promotion` objects. */
export type PromotionListResponse = {
    /**
     * Shape $ (Value): Array of {@link Promotion}. Promotions returned in the requested sort
     * order. Shape $[] (Value): {@link Promotion}. Promotion evaluation order: manual discounts
     * stay, do not count toward the cap, and are ignored by combines_with. Frozen
     * subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data": Array<Promotion>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link PromotionPercentOffMethod}. The `percent_off` variant of
 * `PromotionApplicationMethod`.
 */
export type PromotionPercentOffMethod = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionRuleGroup}. Which line items receive the discount. Required
     * for service_charge promotions, and for line_item promotions whose eligibility_rules include
     * any non-line-item condition (for example order.subtotal or a customer condition). It is
     * optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroup;
    /**
     * Shape $ (Value): integer. Maximum number of matched units that receive the discount. Only
     * valid when type is percent_off, and requires allocation each. Sending it with amount_off or
     * buy_x_get_y returns INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional
     * quantities are not supported. Flint discounts the first matched units in line-item order
     * (the order items were added), not the cheapest. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number;
    /**
     * Shape $ (Value): number. Percentage to discount, from 1 to 100. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "percent_off": number;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Selects the percent_off discount effect and its allowed fields.
     * Value enum: "percent_off".
     */
    "type": "percent_off" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionPercentOffMethodRequest}. The `percent_off` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionPercentOffMethodRequest = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Which line items receive the discount.
     * Required for service_charge promotions, and for line_item promotions whose eligibility_rules
     * include any non-line-item condition (for example order.subtotal or a customer condition). It
     * is optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): integer. Maximum number of matched units that receive the discount. Only
     * valid when type is percent_off, and requires allocation each. Sending it with amount_off or
     * buy_x_get_y returns INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional
     * quantities are not supported. Flint discounts the first matched units in line-item order
     * (the order items were added), not the cheapest. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number;
    /**
     * Shape $ (Value): number. Percentage to discount, from 1 to 100. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "percent_off": number;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Selects the percent_off discount effect and its allowed fields.
     * Value enum: "percent_off".
     */
    "type": "percent_off" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionPercentOffMethodRequestInput}. The `percent_off` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionPercentOffMethodRequestInput = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax";
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput}. Which line items receive the
     * discount. Required for service_charge promotions, and for line_item promotions whose
     * eligibility_rules include any non-line-item condition (for example order.subtotal or a
     * customer condition). It is optional only when eligibility_rules consist entirely of
     * line_item.* conditions (plus matched_items.subtotal), in which case the matched items are
     * used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule
     * group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested
     * groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or
     * send null where the field is clearable. Responses list rules before nested groups. Under
     * any, a nested group containing only one rule reads back as that rule. Under all, nested
     * groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic
     * normalizations stabilize after one round trip. matched_items.subtotal sums the line items
     * matched by the line_item.* rules in the same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Shape $ (Value): integer. Maximum number of matched units that receive the discount. Only
     * valid when type is percent_off, and requires allocation each. Sending it with amount_off or
     * buy_x_get_y returns INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional
     * quantities are not supported. Flint discounts the first matched units in line-item order
     * (the order items were added), not the cheapest. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number;
    /**
     * Shape $ (Value): number. Percentage to discount, from 1 to 100. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "percent_off": number;
    /**
     * Shape $ (Value): {@link PromotionRecurrenceInput}. Optional recurrence for subscription
     * payments: once applies to the first charged payment, repeating applies for period_count
     * charged payments, and forever applies to every payment. One-time orders apply the promotion
     * once. How often a promotion's discount repeats on a subscription: once, for a number of
     * charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrenceInput;
    /**
     * Shape $ (Value): string. Selects the percent_off discount effect and its allowed fields.
     * Value enum: "percent_off".
     */
    "type": "percent_off";
};
/**
 * Shape $ (Value): {@link PromotionRecurrence}. How often a promotion's discount repeats on a
 * subscription: once, for a number of charged payments, or forever.
 */
export type PromotionRecurrence = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "once", "repeating", "forever".
     */
    "type": "once" | "repeating" | "forever" | (string & {});
})
    & ((Exclude<PromotionRecurrenceOnce & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceRepeating & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceForever & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PromotionRecurrenceForever}. The `forever` variant of
 * `PromotionRecurrence`.
 */
export type PromotionRecurrenceForever = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "forever".
     */
    "type": "forever" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): any. Apply the promotion to every charged subscription payment. Value enum:
     * "forever".
     */
    "type": unknown;
}));
/**
 * Shape $ (Value): {@link PromotionRecurrenceForeverInput}. The `forever` variant of
 * `PromotionRecurrence`.
 */
export type PromotionRecurrenceForeverInput = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "forever".
     */
    "type": "forever";
})
    & (({
    /**
     * Shape $ (Value): any. Apply the promotion to every charged subscription payment. Value enum:
     * "forever".
     */
    "type": ("forever") & ("forever");
})
    & ({
    "period_count"?: never;
}));
/**
 * Shape $ (Value): {@link PromotionRecurrenceInput}. How often a promotion's discount repeats on a
 * subscription: once, for a number of charged payments, or forever.
 */
export type PromotionRecurrenceInput = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "once", "repeating", "forever".
     */
    "type": "once" | "repeating" | "forever";
})
    & ((Exclude<PromotionRecurrenceOnceInput & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceRepeatingInput & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceForeverInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link PromotionRecurrenceOnce}. The `once` variant of `PromotionRecurrence`.
 */
export type PromotionRecurrenceOnce = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "once".
     */
    "type": "once" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): any. Apply the promotion to the first charged subscription payment. Value
     * enum: "once".
     */
    "type": unknown;
}));
/**
 * Shape $ (Value): {@link PromotionRecurrenceOnceInput}. The `once` variant of
 * `PromotionRecurrence`.
 */
export type PromotionRecurrenceOnceInput = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "once".
     */
    "type": "once";
})
    & (({
    /**
     * Shape $ (Value): any. Apply the promotion to the first charged subscription payment. Value
     * enum: "once".
     */
    "type": ("once") & ("once");
})
    & ({
    "period_count"?: never;
}));
/**
 * Shape $ (Value): {@link PromotionRecurrenceRepeating}. The `repeating` variant of
 * `PromotionRecurrence`.
 */
export type PromotionRecurrenceRepeating = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count": number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "repeating".
     */
    "type": "repeating" | (string & {});
})
    & ({
    /**
     * Shape $ (Value): any. Apply the promotion to period_count charged subscription payments.
     * Value enum: "repeating".
     */
    "type": unknown;
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count": number;
});
/**
 * Shape $ (Value): {@link PromotionRecurrenceRepeatingInput}. The `repeating` variant of
 * `PromotionRecurrence`.
 */
export type PromotionRecurrenceRepeatingInput = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count": number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "repeating".
     */
    "type": "repeating";
})
    & ({
    /**
     * Shape $ (Value): any. Apply the promotion to period_count charged subscription payments.
     * Value enum: "repeating".
     */
    "type": ("repeating") & ("repeating");
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count": number;
});
/**
 * Shape $ (Value): {@link PromotionRefInputPromotionCode}. The `Promotion code` variant of
 * `PromotionRefInput`.
 */
export type PromotionRefInputPromotionCode = ({
    /**
     * Shape $ (Value): string. Human-entered promotion code. Use this when redeeming a campaign
     * code. minLength: 1.
     */
    "promotion_code": string;
    /**
     * Shape $ (Value): string. Use `promotion_id` for server-side apply flows where you already
     * know the promotion, including code-gated promotions, which then apply without a code and
     * count only toward the promotion's `max_uses`. Checkout credentials must use
     * `promotion_code`. minLength: 1.
     */
    "promotion_id"?: string;
});
/**
 * Shape $ (Value): {@link PromotionRefInputPromotionCodeInput}. The `Promotion code` variant of
 * `PromotionRefInput`.
 */
export type PromotionRefInputPromotionCodeInput = ({
    /**
     * Shape $ (Value): string. Human-entered promotion code. Use this when redeeming a campaign
     * code. minLength: 1.
     */
    "promotion_code": string;
    /**
     * Shape $ (Value): string. Use `promotion_id` for server-side apply flows where you already
     * know the promotion, including code-gated promotions, which then apply without a code and
     * count only toward the promotion's `max_uses`. Checkout credentials must use
     * `promotion_code`. minLength: 1.
     */
    "promotion_id"?: string;
})
    & (({
    "promotion_id"?: never;
}));
/**
 * Shape $ (Value): {@link PromotionRefInputPromotionID}. The `Promotion ID` variant of
 * `PromotionRefInput`.
 */
export type PromotionRefInputPromotionID = ({
    /**
     * Shape $ (Value): string. Human-entered promotion code. Use this when redeeming a campaign
     * code. minLength: 1.
     */
    "promotion_code"?: string;
    /**
     * Shape $ (Value): string. Use `promotion_id` for server-side apply flows where you already
     * know the promotion, including code-gated promotions, which then apply without a code and
     * count only toward the promotion's `max_uses`. Checkout credentials must use
     * `promotion_code`. minLength: 1.
     */
    "promotion_id": string;
});
/**
 * Shape $ (Value): {@link PromotionRefInputPromotionIDInput}. The `Promotion ID` variant of
 * `PromotionRefInput`.
 */
export type PromotionRefInputPromotionIDInput = ({
    /**
     * Shape $ (Value): string. Human-entered promotion code. Use this when redeeming a campaign
     * code. minLength: 1.
     */
    "promotion_code"?: string;
    /**
     * Shape $ (Value): string. Use `promotion_id` for server-side apply flows where you already
     * know the promotion, including code-gated promotions, which then apply without a code and
     * count only toward the promotion's `max_uses`. Checkout credentials must use
     * `promotion_code`. minLength: 1.
     */
    "promotion_id": string;
})
    & (({
    "promotion_code"?: never;
}));
/**
 * Shape $ (Value): {@link PromotionRefRequest}. Identifies the promotion to apply, by promotion
 * code or by promotion ID.
 */
export type PromotionRefRequest = ({
    /**
     * Shape $ (Value): string. Human-entered promotion code. Use this when redeeming a campaign
     * code. minLength: 1.
     */
    "promotion_code"?: string;
    /**
     * Shape $ (Value): string. Use `promotion_id` for server-side apply flows where you already
     * know the promotion, including code-gated promotions, which then apply without a code and
     * count only toward the promotion's `max_uses`. Checkout credentials must use
     * `promotion_code`. minLength: 1.
     */
    "promotion_id"?: string;
})
    & ((Exclude<PromotionRefInputPromotionID & object, readonly unknown[]>)
    | (Exclude<PromotionRefInputPromotionCode & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PromotionRefRequestInput}. Identifies the promotion to apply, by
 * promotion code or by promotion ID.
 */
export type PromotionRefRequestInput = ({
    /**
     * Shape $ (Value): string. Human-entered promotion code. Use this when redeeming a campaign
     * code. minLength: 1.
     */
    "promotion_code"?: string;
    /**
     * Shape $ (Value): string. Use `promotion_id` for server-side apply flows where you already
     * know the promotion, including code-gated promotions, which then apply without a code and
     * count only toward the promotion's `max_uses`. Checkout credentials must use
     * `promotion_code`. minLength: 1.
     */
    "promotion_id"?: string;
})
    & ((Exclude<PromotionRefInputPromotionIDInput & object, readonly unknown[]>)
    | (Exclude<PromotionRefInputPromotionCodeInput & object, readonly unknown[]>));
/** Shape $ (Value): {@link PromotionResponse}. A response containing `Promotion` data. */
export type PromotionResponse = {
    /**
     * Shape $ (Value): {@link Promotion}. The requested promotion. Promotion evaluation order:
     * manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen
     * subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data": Promotion;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link PromotionRule}. One condition in a promotion rule group, which tests an
 * attribute with an operator and values.
 */
export type PromotionRule = {
    /**
     * Shape $ (Value): string. Field the rule tests. The attribute fixes the value type and the
     * operators that are legal for it: money attributes accept comparison operators but not eq or
     * in, booleans accept eq only, and so on. The full attribute/type/operator matrix is
     * machine-readable in x-flint-rule-attributes on this schema. metadata.<key> reads a string
     * from the customer's metadata and accepts the string operators. A disallowed operator is
     * rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for
     * the attribute.
     */
    "attribute": string;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Alternative thresholds for money-valued rules,
     * keyed by currency code. Each Money currency must match its key. Shape $.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "currency_options"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): string. Comparison to apply to the attribute. The attribute determines
     * which operators are allowed. Value enum: "eq", "ne", "gt", "gte", "lt", "lte", "in",
     * "contains", "is_defined".
     */
    "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined" | (string & {});
    /**
     * Shape $ (Value): Array of {@link PromotionRuleValue}. Comparison values with the type
     * required by the attribute. Omit for is_defined, which tests whether the attribute is
     * present. Shape $[] (Value): {@link PromotionRuleValue}. Rule comparison value. Use a
     * primitive string, number, boolean, or a money object.
     */
    "values"?: Array<PromotionRuleValue>;
};
