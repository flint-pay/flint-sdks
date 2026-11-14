import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type { PriceListPriceRequest, PriceListPriceRequestInput, PriceList, PriceListPriceAddition } from './types-49.js';
import type { ResponseMeta } from './types-54.js';
import type { MetadataMap, MetadataRequestInput } from './types-38.js';
import type { ImageRequest, ImageRequestInput } from './types-28.js';
import type {
    ProductVariantRequest,
    ProductVariantRequestInput,
    PromotionApplicationMethodRequest,
    PromotionApplicationMethodRequestInput
} from './types-50.js';
import type {
    PromotionCodeRequest,
    PromotionCombinesWithPatch,
    PromotionExclusivityRequest,
    PromotionRuleGroupRequest,
    PromotionCodeRequestInput,
    PromotionCombinesWithRequestInput,
    PromotionExclusivityRequestInput,
    PromotionRuleGroupRequestInput
} from './types-51.js';
import type { PromotionSchedule, PromotionScheduleRequestInput } from './types-52.js';
import type {
    CreateSmartReaderRequest,
    CreateSmartReaderRequestInput,
    CreateReturnResolutionPreviewRequest,
    CreateReturnResolutionPreviewRequestInput
} from './types-13.js';
import type { CreateTapToPayReaderRequest, CreateTapToPayReaderRequestInput } from './types-14.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type {
    RefundCharge,
    RefundDestinations,
    RefundLineItem,
    RefundTaxBreakdownRefundIn,
    RefundTenderAllocationRequest,
    RefundChargeInput,
    RefundDestinationsInput,
    RefundLineItemInput,
    RefundTaxBreakdownRefundInInput,
    RefundTenderAllocationRequestInput,
    RefundWithGiftCardCodes
} from './types-53.js';
import type { SplitReversalRequest, SplitReversalRequestInput } from './types-60.js';
import type { CreateIntervalReportRequest, CreateIntervalReportRequestInput } from './types-9.js';
import type { GetReturnDispositionResponse, GetReturnInspectionResponse, GetReturnPolicyResponse } from './types-26.js';
import type {
    ReturnEligibilitySelection,
    ReturnEligibilitySelectionRequestInput,
    ReturnInspectionLineItemRequest,
    ReturnInspectionLineItemRequestInput,
    ReturnEligibilityPreview
} from './types-55.js';
import type { ReturnSourceSystemRequest, ReturnSourceSystemRequestInput, ReturnResolutionPreview } from './types-57.js';
import type { ReturnPolicyRevisionRequest, ReturnPolicyRevisionRequestInput } from './types-56.js';
/**
 * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
 * instructions, and curbside details.
 */
export type CreatePickupFulfillmentDetails = {
    /**
     * Address where the buyer collects the order. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "address"?: AddressRequest;
    /** Instructions specific to curbside handoff. minLength: 1. maxLength: 2048. */
    "curbside_instructions"?: string;
    /**
     * Buyer-reported arrival time for curbside or counter pickup. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "customer_arrived_at"?: string;
    /** Pickup instructions for the buyer, such as where to go on arrival. minLength: 1. */
    "instructions"?: string;
    /** Name of the store or place where the buyer collects the order. minLength: 1. */
    "location_name"?: string;
    /**
     * Time by which the buyer should collect the order. Passing it does not change status or emit
     * an event automatically; the merchant decides how to follow up. Format: date-time. minLength:
     * 1. Example: "2026-08-02T16:00:00Z".
     */
    "pickup_due_at"?: string;
    /**
     * Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0.
     * maximum: 86400.
     */
    "pickup_window_duration_seconds"?: number;
    /**
     * Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "ready_at"?: string;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
    /** Buyer vehicle description used for curbside handoff. minLength: 1. maxLength: 500. */
    "vehicle_description"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string;
};
/**
 * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
 * instructions, and curbside details.
 */
export type CreatePickupFulfillmentDetailsInput = {
    /**
     * Address where the buyer collects the order. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "address"?: AddressRequestInput;
    /** Instructions specific to curbside handoff. minLength: 1. maxLength: 2048. */
    "curbside_instructions"?: string;
    /**
     * Buyer-reported arrival time for curbside or counter pickup. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "customer_arrived_at"?: string | globalThis.Date;
    /** Pickup instructions for the buyer, such as where to go on arrival. minLength: 1. */
    "instructions"?: string;
    /** Name of the store or place where the buyer collects the order. minLength: 1. */
    "location_name"?: string;
    /**
     * Time by which the buyer should collect the order. Passing it does not change status or emit
     * an event automatically; the merchant decides how to follow up. Format: date-time. minLength:
     * 1. Example: "2026-08-02T16:00:00Z".
     */
    "pickup_due_at"?: string | globalThis.Date;
    /**
     * Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0.
     * maximum: 86400.
     */
    "pickup_window_duration_seconds"?: number;
    /**
     * Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "ready_at"?: string | globalThis.Date;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
    /** Buyer vehicle description used for curbside handoff. minLength: 1. maxLength: 500. */
    "vehicle_description"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string | globalThis.Date;
};
/** Add or update a batch of variant prices atomically. */
export type CreatePriceListPricesRequest = {
    /**
     * Price list aggregate version last read. A mismatch rejects the entire batch. Format: uint64.
     * minimum: 1.
     */
    "expected_price_list_version"?: number;
    /**
     * Behavior when the list already prices a variant. Default: "return_existing". Value enum:
     * "return_existing", "update".
     */
    "on_variant_conflict"?: "return_existing" | "update" | (string & {});
    /**
     * Between 1 and 500 variant prices. A price list holds at most 10,000 prices. minItems: 1.
     * maxItems: 500. [] (Value): {@link PriceListPriceRequest}. A variant price to add to a price
     * list.
     */
    "prices": Array<PriceListPriceRequest>;
};
/** Add or update a batch of variant prices atomically. */
export type CreatePriceListPricesRequestInput = {
    /**
     * Price list aggregate version last read. A mismatch rejects the entire batch. Format: uint64.
     * minimum: 1.
     */
    "expected_price_list_version"?: number;
    /**
     * Behavior when the list already prices a variant. Default: "return_existing". Value enum:
     * "return_existing", "update".
     */
    "on_variant_conflict"?: "return_existing" | "update";
    /**
     * Between 1 and 500 variant prices. A price list holds at most 10,000 prices. minItems: 1.
     * maxItems: 500. [] (Value): {@link PriceListPriceRequestInput}. A variant price to add to a
     * price list.
     */
    "prices": Array<PriceListPriceRequestInput>;
};
/** A response containing `CreatePriceListPricesResult` data. */
export type CreatePriceListPricesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The price list and
     * individual outcomes after a bulk price write.
     */
    "data": CreatePriceListPricesResult;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The price list and individual outcomes after a bulk price write. */
export type CreatePriceListPricesResult = {
    /**
     * One result for each requested variant price, in request order. [] (Value): {@link
     * PriceListPriceAddition}. Outcome for one requested variant price.
     */
    "additions": Array<PriceListPriceAddition>;
    /**
     * The price list after the batch, including its new count and aggregate version. A
     * merchant-only set of variant prices for individual customers or customer segments.
     */
    "price_list": PriceList;
};
/** Fields for a new price list. */
export type CreatePriceListRequest = {
    /**
     * Currency of all list prices, as an uppercase ISO 4217 code. Must match the catalog currency;
     * currently only USD is supported. Cannot be changed after creation. minLength: 3. maxLength:
     * 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Customer.segment labels to assign, at most 20. Each label can belong to only one unarchived
     * list, including inactive lists. Omit or send [] for no segment assignments. maxItems: 20.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "customer_segments"?: Array<string>;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata to store on this price list. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Name used to identify the price list. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Initial availability. Inactive lists remain assignable but do not provide prices. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** Fields for a new price list. */
export type CreatePriceListRequestInput = {
    /**
     * Currency of all list prices, as an uppercase ISO 4217 code. Must match the catalog currency;
     * currently only USD is supported. Cannot be changed after creation. minLength: 3. maxLength:
     * 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Customer.segment labels to assign, at most 20. Each label can belong to only one unarchived
     * list, including inactive lists. Omit or send [] for no segment assignments. maxItems: 20.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "customer_segments"?: Array<string>;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata to store on this price list. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Name used to identify the price list. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Initial availability. Inactive lists remain assignable but do not provide prices. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
/**
 * A product option to create with a product, such as size, with its values, position, and status.
 */
export type CreateProductOptionRequest = {
    /**
     * Value of this option given to every active variant that has no active value for it after
     * this request, such as when you add an option to a product that already has active variants.
     * It must match one of this option's active `values`, ignoring case and surrounding
     * whitespace. Not stored; the variants keep the value. minLength: 1. maxLength: 255.
     */
    "existing_variant_value"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Option name, such as Size or Color. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display order among the product's options, starting at zero. Defaults to the option's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the option is active or inactive. Active variants must select an active value for
     * every active option. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Values offered for this option, such as Small, Medium, and Large for Size. [] (Value):
     * {@link CreateProductOptionValueRequest}. One value of a product option to create, such as a
     * specific size, with its position and status.
     */
    "values"?: Array<CreateProductOptionValueRequest>;
};
/**
 * A product option to create with a product, such as size, with its values, position, and status.
 */
export type CreateProductOptionRequestInput = {
    /**
     * Value of this option given to every active variant that has no active value for it after
     * this request, such as when you add an option to a product that already has active variants.
     * It must match one of this option's active `values`, ignoring case and surrounding
     * whitespace. Not stored; the variants keep the value. minLength: 1. maxLength: 255.
     */
    "existing_variant_value"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Option name, such as Size or Color. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display order among the product's options, starting at zero. Defaults to the option's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the option is active or inactive. Active variants must select an active value for
     * every active option. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Values offered for this option, such as Small, Medium, and Large for Size. [] (Value):
     * {@link CreateProductOptionValueRequestInput}. One value of a product option to create, such
     * as a specific size, with its position and status.
     */
    "values"?: Array<CreateProductOptionValueRequestInput>;
};
/**
 * One value of a product option to create, such as a specific size, with its position and status.
 */
export type CreateProductOptionValueRequest = {
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Display order among the option's values, starting at zero. Defaults to the value's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the value is active or inactive. Active variants cannot newly select an inactive
     * value. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Option value shown to buyers, such as Medium. minLength: 1. maxLength: 255. */
    "value": string;
};
/**
 * One value of a product option to create, such as a specific size, with its position and status.
 */
export type CreateProductOptionValueRequestInput = {
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Display order among the option's values, starting at zero. Defaults to the value's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the value is active or inactive. Active variants cannot newly select an inactive
     * value. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Option value shown to buyers, such as Medium. minLength: 1. maxLength: 255. */
    "value": string;
};
/** The request body for: Create product. */
export type CreateProductRequest = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant"?: ProductVariantRequest;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /** Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequest}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options"?: Array<CreateProductOptionRequest>;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Selects the variant mode branch. Value enum: "simple", "optioned". */
    "variant_mode": "simple" | "optioned" | (string & {});
    /**
     * The variants of an optioned product, sent together with `options` and without
     * `default_variant`. Each variant selects one active value for every option. At most 100; add
     * more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. []
     * (Value): {@link ProductVariantRequest}. The request body for: Create product variant.
     */
    "variants"?: Array<ProductVariantRequest>;
})
    & ((Exclude<CreateProductRequestSimple & object, readonly unknown[]>)
    | (Exclude<CreateProductRequestOptioned & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create product. */
export type CreateProductRequestInput = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant"?: ProductVariantRequestInput;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /** Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequestInput}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options"?: Array<CreateProductOptionRequestInput>;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card";
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Selects the variant mode branch. Value enum: "simple", "optioned". */
    "variant_mode": "simple" | "optioned";
    /**
     * The variants of an optioned product, sent together with `options` and without
     * `default_variant`. Each variant selects one active value for every option. At most 100; add
     * more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. []
     * (Value): {@link ProductVariantRequestInput}. The request body for: Create product variant.
     */
    "variants"?: Array<ProductVariantRequestInput>;
})
    & ((Exclude<CreateProductRequestSimpleInput & object, readonly unknown[]>)
    | (Exclude<CreateProductRequestOptionedInput & object, readonly unknown[]>));
/** The `optioned` variant of `CreateProductRequest`. */
export type CreateProductRequestOptioned = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /** Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequest}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options": Array<CreateProductOptionRequest>;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Selects the variant mode branch. Value enum: "optioned". */
    "variant_mode": "optioned" | (string & {});
    /**
     * The variants of an optioned product, sent together with `options` and without
     * `default_variant`. Each variant selects one active value for every option. At most 100; add
     * more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. []
     * (Value): {@link ProductVariantRequest}. The request body for: Create product variant.
     */
    "variants": Array<ProductVariantRequest>;
})
    & (({
    /** Selects the variant mode branch. Value enum: "optioned". */
    "variant_mode": "optioned" | (string & {});
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequest}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options": Array<CreateProductOptionRequest>;
    /**
     * The variants of an optioned product, sent together with `options` and without
     * `default_variant`. Each variant selects one active value for every option. At most 100; add
     * more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. []
     * (Value): {@link ProductVariantRequest}. The request body for: Create product variant.
     */
    "variants": Array<ProductVariantRequest>;
}));
/** The `optioned` variant of `CreateProductRequest`. */
export type CreateProductRequestOptionedInput = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /** Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequestInput}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options": Array<CreateProductOptionRequestInput>;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card";
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Selects the variant mode branch. Value enum: "optioned". */
    "variant_mode": "optioned";
    /**
     * The variants of an optioned product, sent together with `options` and without
     * `default_variant`. Each variant selects one active value for every option. At most 100; add
     * more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. []
     * (Value): {@link ProductVariantRequestInput}. The request body for: Create product variant.
     */
    "variants": Array<ProductVariantRequestInput>;
})
    & (({
    /** Selects the variant mode branch. Value enum: "optioned". */
    "variant_mode": ("optioned") & ("optioned");
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequestInput}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options": Array<CreateProductOptionRequestInput>;
    /**
     * The variants of an optioned product, sent together with `options` and without
     * `default_variant`. Each variant selects one active value for every option. At most 100; add
     * more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. []
     * (Value): {@link ProductVariantRequestInput}. The request body for: Create product variant.
     */
    "variants": Array<ProductVariantRequestInput>;
})
    & (({
    "default_variant"?: never;
})));
/** The `simple` variant of `CreateProductRequest`. */
export type CreateProductRequestSimple = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant": ProductVariantRequest;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /** Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Selects the variant mode branch. Value enum: "simple". */
    "variant_mode": "simple" | (string & {});
})
    & (({
    /** Selects the variant mode branch. Value enum: "simple". */
    "variant_mode": "simple" | (string & {});
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant": ProductVariantRequest;
}));
/** The `simple` variant of `CreateProductRequest`. */
export type CreateProductRequestSimpleInput = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant": ProductVariantRequestInput;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /** Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card";
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Selects the variant mode branch. Value enum: "simple". */
    "variant_mode": "simple";
})
    & (({
    /** Selects the variant mode branch. Value enum: "simple". */
    "variant_mode": ("simple") & ("simple");
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant": ProductVariantRequestInput;
})
    & (({
    "options"?: never;
}) & ({
    "variants"?: never;
})));
/** The request body for: Create promotion code. */
export type CreatePromotionCodeRequest = {
    /** Code a buyer enters to redeem the promotion. minLength: 1. maxLength: 100. */
    "code": string;
    /**
     * Only this identified customer can redeem the code. The customer must belong to the same
     * merchant and environment. A checkout may use its merchant-named or email-verified customer;
     * a typed email does not identify a customer. Omit or send null to create an unbound code.
     * minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string | null;
    /**
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Maximum number of times this code can be redeemed. Omit for no redemption limit. Format:
     * int64.
     */
    "max_uses"?: number;
    /**
     * Key-value data you attach to the promotion code. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Flint promotion ID that owns this code. minLength: 1. Example:
     * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id": string;
    /**
     * Lifecycle status. Defaults to active; send inactive to create a code that cannot be
     * redeemed. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * IANA zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires. minLength: 1. maxLength: 255.
     */
    "timezone"?: string;
};
/** The request body for: Create promotion code. */
export type CreatePromotionCodeRequestInput = {
    /** Code a buyer enters to redeem the promotion. minLength: 1. maxLength: 100. */
    "code": string;
    /**
     * Only this identified customer can redeem the code. The customer must belong to the same
     * merchant and environment. A checkout may use its merchant-named or email-verified customer;
     * a typed email does not identify a customer. Omit or send null to create an unbound code.
     * minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string | null;
    /**
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Maximum number of times this code can be redeemed. Omit for no redemption limit. Format:
     * int64.
     */
    "max_uses"?: number;
    /**
     * Key-value data you attach to the promotion code. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Flint promotion ID that owns this code. minLength: 1. Example:
     * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id": string;
    /**
     * Lifecycle status. Defaults to active; send inactive to create a code that cannot be
     * redeemed. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * IANA zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires. minLength: 1. maxLength: 255.
     */
    "timezone"?: string;
};
/** The request body for: Create promotion. */
export type CreatePromotionRequest = {
    /**
     * Discount effect and how it applies to eligible items or charges. A flat application method
     * whose type selects its effect fields.
     */
    "application_method": PromotionApplicationMethodRequest;
    /**
     * Codes to create with a code-gated promotion, at most 100. The create response returns them
     * in `codes`. Add more later with `POST /v1/promotion-codes`, and manage each code through the
     * `/v1/promotion-codes/{promotion_code_id}` routes. maxItems: 100. [] (Value): {@link
     * PromotionCodeRequest}. A promotion code to create inline with its promotion. The promotion
     * supplies its parent ID.
     */
    "codes"?: Array<PromotionCodeRequest>;
    /**
     * Which discount classes this promotion can combine with. Omitted classes default to true.
     * Which promotion discount classes this promotion can combine with. Omitted classes default to
     * true.
     */
    "combines_with"?: PromotionCombinesWithPatch;
    /** Optional description of the promotion for your own records. minLength: 1. maxLength: 500. */
    "description"?: string;
    /**
     * Defaults to order when omitted. Default: "order". Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**
     * Buyer-facing promotion name shown in checkout and order discount surfaces. Defaults to name
     * when omitted. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Conditions an order must satisfy for the promotion to apply. Omit to create a promotion with
     * no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or
     * any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid.
     * Omit the field for no rules, or send null where the field is clearable. Responses list rules
     * before nested groups. Under any, a nested group containing only one rule reads back as that
     * rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal
     * scope. These deterministic normalizations stabilize after one round trip.
     * matched_items.subtotal sums the line items matched by the line_item.* rules in the same all
     * group, including its nested groups.
     */
    "eligibility_rules"?: PromotionRuleGroupRequest;
    /**
     * Optional group and priority used to choose one promotion from competing promotions in the
     * same group. See Promotion for the evaluation order. Only one promotion in an exclusivity
     * group continues. See Promotion for the evaluation order.
     */
    "exclusivity"?: PromotionExclusivityRequest;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Omit for no
     * redemption limit. Format: int64.
     */
    "max_uses"?: number;
    /**
     * Maximum reserved and redeemed uses per identified customer across every code and automatic
     * or ID-based application. Checked atomically when payment starts. Failed, canceled, or
     * expired attempts release their reservation; refunds do not restore uses. Counts only within
     * the same merchant and environment; live and test mode are separate. Without an identified
     * customer, returns 409 PROMOTION_DECLINED with reason customer_required. Omit or send null
     * for no per-customer limit. Format: int64. minimum: 1.
     */
    "max_uses_per_customer"?: number | null;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Internal promotion name for dashboards, searching, and reporting. This is not intended for
     * buyer-facing checkout or receipt copy. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Whether the promotion applies automatically when its rules match or requires a promotion
     * code. Value enum: "automatic", "code".
     */
    "redemption_type"?: "automatic" | "code" | (string & {});
    /**
     * Optional start and end times that limit when the promotion can apply. When a promotion is
     * active, with a start time, an end time, and the time zone it was entered in.
     */
    "schedule"?: PromotionSchedule;
    /**
     * Lifecycle status. Defaults to active; send inactive to create a promotion that is switched
     * off. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create promotion. */
export type CreatePromotionRequestInput = {
    /**
     * Discount effect and how it applies to eligible items or charges. A flat application method
     * whose type selects its effect fields.
     */
    "application_method": PromotionApplicationMethodRequestInput;
    /**
     * Codes to create with a code-gated promotion, at most 100. The create response returns them
     * in `codes`. Add more later with `POST /v1/promotion-codes`, and manage each code through the
     * `/v1/promotion-codes/{promotion_code_id}` routes. maxItems: 100. [] (Value): {@link
     * PromotionCodeRequestInput}. A promotion code to create inline with its promotion. The
     * promotion supplies its parent ID.
     */
    "codes"?: Array<PromotionCodeRequestInput>;
    /**
     * Which discount classes this promotion can combine with. Omitted classes default to true.
     * Which promotion discount classes this promotion can combine with. Omitted classes default to
     * true.
     */
    "combines_with"?: PromotionCombinesWithRequestInput;
    /** Optional description of the promotion for your own records. minLength: 1. maxLength: 500. */
    "description"?: string;
    /**
     * Defaults to order when omitted. Default: "order". Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /**
     * Buyer-facing promotion name shown in checkout and order discount surfaces. Defaults to name
     * when omitted. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Conditions an order must satisfy for the promotion to apply. Omit to create a promotion with
     * no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or
     * any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid.
     * Omit the field for no rules, or send null where the field is clearable. Responses list rules
     * before nested groups. Under any, a nested group containing only one rule reads back as that
     * rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal
     * scope. These deterministic normalizations stabilize after one round trip.
     * matched_items.subtotal sums the line items matched by the line_item.* rules in the same all
     * group, including its nested groups.
     */
    "eligibility_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Optional group and priority used to choose one promotion from competing promotions in the
     * same group. See Promotion for the evaluation order. Only one promotion in an exclusivity
     * group continues. See Promotion for the evaluation order.
     */
    "exclusivity"?: PromotionExclusivityRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Omit for no
     * redemption limit. Format: int64.
     */
    "max_uses"?: number;
    /**
     * Maximum reserved and redeemed uses per identified customer across every code and automatic
     * or ID-based application. Checked atomically when payment starts. Failed, canceled, or
     * expired attempts release their reservation; refunds do not restore uses. Counts only within
     * the same merchant and environment; live and test mode are separate. Without an identified
     * customer, returns 409 PROMOTION_DECLINED with reason customer_required. Omit or send null
     * for no per-customer limit. Format: int64. minimum: 1.
     */
    "max_uses_per_customer"?: number | null;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Internal promotion name for dashboards, searching, and reporting. This is not intended for
     * buyer-facing checkout or receipt copy. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Whether the promotion applies automatically when its rules match or requires a promotion
     * code. Value enum: "automatic", "code".
     */
    "redemption_type"?: "automatic" | "code";
    /**
     * Optional start and end times that limit when the promotion can apply. When a promotion is
     * active, with a start time, an end time, and the time zone it was entered in.
     */
    "schedule"?: PromotionScheduleRequestInput;
    /**
     * Lifecycle status. Defaults to active; send inactive to create a promotion that is switched
     * off. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
/** A reader registration selected by type. */
export type CreateReaderRequest = ((CreateSmartReaderRequest) | (CreateTapToPayReaderRequest) | (Record<string, unknown>));
/** A reader registration selected by type. */
export type CreateReaderRequestInput = ((CreateSmartReaderRequestInput) | (CreateTapToPayReaderRequestInput));
/** The `receivables_aging_v1` variant of `CreateReportRequest`. */
export type CreateReceivablesAgingReportRequest = ({
    /**
     * Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than
     * today. Balances are measured at the earlier of the end of that day and report creation.
     * Format: date. minLength: 1. Example: "2026-08-02".
     */
    "as_of_date": string;
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at"?: string;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at"?: string;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "receivables_aging_v1".
     */
    "report_type": "receivables_aging_v1" | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved
     * on the report at creation. minLength: 1.
     */
    "timezone"?: string;
});
/** The `receivables_aging_v1` variant of `CreateReportRequest`. */
export type CreateReceivablesAgingReportRequestInput = ({
    /**
     * Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than
     * today. Balances are measured at the earlier of the end of that day and report creation.
     * Format: date. minLength: 1. Example: "2026-08-02".
     */
    "as_of_date": string;
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at"?: string | globalThis.Date;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at"?: string | globalThis.Date;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "receivables_aging_v1".
     */
    "report_type": "receivables_aging_v1";
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved
     * on the report at creation. minLength: 1.
     */
    "timezone"?: string;
})
    & (({
    "interval_start_at"?: never;
}))
    & (({
    "interval_end_at"?: never;
}));
/** The request body for: Create refund. */
export type CreateRefundRequest = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundCharge}. An order charge to refund when creating a refund, with an optional amount to
     * refund.
     */
    "charges"?: Array<RefundCharge>;
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id"?: string;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the
     * current_version. Format: int64. minimum: 1.
     */
    "expected_credit_note_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItem}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItem>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use
     * flint for Flint to return the money to the invoice's payments. Use merchant to record money
     * you already returned outside Flint, for example by check or wire; Flint moves no money.
     * Default: "flint". Value enum: "flint", "merchant".
     */
    "processed_by"?: "flint" | "merchant" | (string & {});
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock"
        | (string & {});
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Return the platform fee on the payments this refund refunds, as Stripe's
     * refund_application_fee does. By default the partner app keeps its fee. With true, each
     * refunded payment that carries the partner app's collected platform fee returns all of the
     * fee's unreturned amount when this refund returns the whole captured amount, and otherwise a
     * proportional share, rounded half up; the refund that completes the payment returns what
     * rounding left, when every earlier refund of it also returned the fee. Each payment refund
     * reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once
     * that payment refund succeeds. Payments without a platform fee are refunded normally. Only
     * the partner app install token whose app charged the fee can send true; from any other
     * credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with
     * NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the
     * request fingerprint. See [Platform fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1
     * to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID.
     * Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400
     * INVALID_REQUEST` (`NOT_ALLOWED`). minLength: 1. maxLength: 255.
     */
    "refund_reference"?: string;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "full",
     * "amount", "targets", "credit_note".
     */
    "refund_type": "full" | "amount" | "targets" | "credit_note" | (string & {});
    /**
     * When you report returning the money outside Flint. Omit to use the current time. Must be an
     * RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds
     * are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails
     * with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "refunded_at"?: string;
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequest}. The seller amount to take back from one eligible payment split when
     * creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequest>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundIn}. The
     * tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to
     * a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequest>;
})
    & ((Exclude<CreateRefundRequestCreditNote & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestFull & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestAmount & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestTargets & object, readonly unknown[]>)
    | (Record<string, unknown>))
    & (({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to
     * a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequest>;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id": string;
})
    | (Record<string, unknown>));
/** The `amount` variant of `CreateRefundRequest`. */
export type CreateRefundRequestAmount = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundCharge}. An order charge to refund when creating a refund, with an optional amount to
     * refund.
     */
    "charges"?: Array<RefundCharge>;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItem}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItem>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock"
        | (string & {});
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Return the platform fee on the payments this refund refunds, as Stripe's
     * refund_application_fee does. By default the partner app keeps its fee. With true, each
     * refunded payment that carries the partner app's collected platform fee returns all of the
     * fee's unreturned amount when this refund returns the whole captured amount, and otherwise a
     * proportional share, rounded half up; the refund that completes the payment returns what
     * rounding left, when every earlier refund of it also returned the fee. Each payment refund
     * reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once
     * that payment refund succeeds. Payments without a platform fee are refunded normally. Only
     * the partner app install token whose app charged the fee can send true; from any other
     * credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with
     * NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the
     * request fingerprint. See [Platform fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "amount".
     */
    "refund_type": "amount" | (string & {});
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequest}. The seller amount to take back from one eligible payment split when
     * creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequest>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundIn}. The
     * tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to
     * a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequest>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to
     * a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequest>;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    "credit_note_id": unknown;
})
    | (Record<string, unknown>)));
/** The `amount` variant of `CreateRefundRequest`. */
export type CreateRefundRequestAmountInput = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundChargeInput}. An order charge to refund when creating a refund, with an optional
     * amount to refund.
     */
    "charges"?: Array<RefundChargeInput>;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItemInput}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItemInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock";
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Return the platform fee on the payments this refund refunds, as Stripe's
     * refund_application_fee does. By default the partner app keeps its fee. With true, each
     * refunded payment that carries the partner app's collected platform fee returns all of the
     * fee's unreturned amount when this refund returns the whole captured amount, and otherwise a
     * proportional share, rounded half up; the refund that completes the payment returns what
     * rounding left, when every earlier refund of it also returned the fee. Each payment refund
     * reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once
     * that payment refund succeeds. Payments without a platform fee are refunded normally. Only
     * the partner app install token whose app charged the fee can send true; from any other
     * credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with
     * NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the
     * request fingerprint. See [Platform fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "amount".
     */
    "refund_type": ("amount") & ("amount");
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequestInput}. The seller amount to take back from one eligible payment split
     * when creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequestInput>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundInInput}.
     * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequestInput}. Where part of a refund goes:
     * back to a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequestInput>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequestInput}. Where part of a refund goes:
     * back to a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequestInput>;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    "credit_note_id": unknown;
})))
    & ((({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
})));
/** The `credit_note` variant of `CreateRefundRequest`. */
export type CreateRefundRequestCreditNote = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id": string;
    /**
     * Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the
     * current_version. Format: int64. minimum: 1.
     */
    "expected_credit_note_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use
     * flint for Flint to return the money to the invoice's payments. Use merchant to record money
     * you already returned outside Flint, for example by check or wire; Flint moves no money.
     * Default: "flint". Value enum: "flint", "merchant".
     */
    "processed_by"?: "flint" | "merchant" | (string & {});
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock"
        | (string & {});
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1
     * to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID.
     * Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400
     * INVALID_REQUEST` (`NOT_ALLOWED`). minLength: 1. maxLength: 255.
     */
    "refund_reference"?: string;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "credit_note".
     */
    "refund_type": "credit_note" | (string & {});
    /**
     * When you report returning the money outside Flint. Omit to use the current time. Must be an
     * RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds
     * are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails
     * with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "refunded_at"?: string;
})
    & ((({
    "order_id": unknown;
})
    | ({
    "payment_intent_id": unknown;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    "gift_card_load_id": unknown;
})
    | ({
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id": string;
})
    | (Record<string, unknown>)));
/** The `credit_note` variant of `CreateRefundRequest`. */
export type CreateRefundRequestCreditNoteInput = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id": string;
    /**
     * Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the
     * current_version. Format: int64. minimum: 1.
     */
    "expected_credit_note_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use
     * flint for Flint to return the money to the invoice's payments. Use merchant to record money
     * you already returned outside Flint, for example by check or wire; Flint moves no money.
     * Default: "flint". Value enum: "flint", "merchant".
     */
    "processed_by"?: "flint" | "merchant";
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock";
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1
     * to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID.
     * Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400
     * INVALID_REQUEST` (`NOT_ALLOWED`). minLength: 1. maxLength: 255.
     */
    "refund_reference"?: string;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "credit_note".
     */
    "refund_type": ("credit_note") & ("credit_note");
    /**
     * When you report returning the money outside Flint. Omit to use the current time. Must be an
     * RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds
     * are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails
     * with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "refunded_at"?: string | globalThis.Date;
})
    & ((({
    "order_id": unknown;
})
    | ({
    "payment_intent_id": unknown;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    "gift_card_load_id": unknown;
})
    | ({
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id": string;
})))
    & ((({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
})));
/** The `full` variant of `CreateRefundRequest`. */
export type CreateRefundRequestFull = ({
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock"
        | (string & {});
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Return the platform fee on the payments this refund refunds, as Stripe's
     * refund_application_fee does. By default the partner app keeps its fee. With true, each
     * refunded payment that carries the partner app's collected platform fee returns all of the
     * fee's unreturned amount when this refund returns the whole captured amount, and otherwise a
     * proportional share, rounded half up; the refund that completes the payment returns what
     * rounding left, when every earlier refund of it also returned the fee. Each payment refund
     * reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once
     * that payment refund succeeds. Payments without a platform fee are refunded normally. Only
     * the partner app install token whose app charged the fee can send true; from any other
     * credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with
     * NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the
     * request fingerprint. See [Platform fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "full".
     */
    "refund_type": "full" | (string & {});
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequest}. The seller amount to take back from one eligible payment split when
     * creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequest>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    "credit_note_id": unknown;
})
    | (Record<string, unknown>)));
/** The `full` variant of `CreateRefundRequest`. */
export type CreateRefundRequestFullInput = ({
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock";
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Return the platform fee on the payments this refund refunds, as Stripe's
     * refund_application_fee does. By default the partner app keeps its fee. With true, each
     * refunded payment that carries the partner app's collected platform fee returns all of the
     * fee's unreturned amount when this refund returns the whole captured amount, and otherwise a
     * proportional share, rounded half up; the refund that completes the payment returns what
     * rounding left, when every earlier refund of it also returned the fee. Each payment refund
     * reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once
     * that payment refund succeeds. Payments without a platform fee are refunded normally. Only
     * the partner app install token whose app charged the fee can send true; from any other
     * credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with
     * NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the
     * request fingerprint. See [Platform fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "full".
     */
    "refund_type": ("full") & ("full");
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequestInput}. The seller amount to take back from one eligible payment split
     * when creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequestInput>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    "credit_note_id": unknown;
})))
    & ((({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
})))
    & (({
    "amount_money"?: never;
})
    & ({
    "line_items"?: never;
})
    & ({
    "charges"?: never;
})
    & ({
    "tax_breakdown_refunds"?: never;
})
    & ({
    "tender_allocations"?: never;
}));
/** The request body for: Create refund. */
export type CreateRefundRequestInput = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundChargeInput}. An order charge to refund when creating a refund, with an optional
     * amount to refund.
     */
    "charges"?: Array<RefundChargeInput>;
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id"?: string;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the
     * current_version. Format: int64. minimum: 1.
     */
    "expected_credit_note_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItemInput}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItemInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use
     * flint for Flint to return the money to the invoice's payments. Use merchant to record money
     * you already returned outside Flint, for example by check or wire; Flint moves no money.
     * Default: "flint". Value enum: "flint", "merchant".
     */
    "processed_by"?: "flint" | "merchant";
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock";
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Return the platform fee on the payments this refund refunds, as Stripe's
     * refund_application_fee does. By default the partner app keeps its fee. With true, each
     * refunded payment that carries the partner app's collected platform fee returns all of the
     * fee's unreturned amount when this refund returns the whole captured amount, and otherwise a
     * proportional share, rounded half up; the refund that completes the payment returns what
     * rounding left, when every earlier refund of it also returned the fee. Each payment refund
     * reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once
     * that payment refund succeeds. Payments without a platform fee are refunded normally. Only
     * the partner app install token whose app charged the fee can send true; from any other
     * credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with
     * NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the
     * request fingerprint. See [Platform fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1
     * to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID.
     * Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400
     * INVALID_REQUEST` (`NOT_ALLOWED`). minLength: 1. maxLength: 255.
     */
    "refund_reference"?: string;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "full",
     * "amount", "targets", "credit_note".
     */
    "refund_type": "full" | "amount" | "targets" | "credit_note";
    /**
     * When you report returning the money outside Flint. Omit to use the current time. Must be an
     * RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds
     * are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails
     * with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "refunded_at"?: string | globalThis.Date;
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequestInput}. The seller amount to take back from one eligible payment split
     * when creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequestInput>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundInInput}.
     * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequestInput}. Where part of a refund goes:
     * back to a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequestInput>;
})
    & (({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
}))
    & ((Exclude<CreateRefundRequestCreditNoteInput & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestFullInput & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestAmountInput & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestTargetsInput & object, readonly unknown[]>))
    & (({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequestInput}. Where part of a refund goes:
     * back to a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequestInput>;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id": string;
}));
/** The `targets` variant of `CreateRefundRequest`. */
export type CreateRefundRequestTargets = ({
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundCharge}. An order charge to refund when creating a refund, with an optional amount to
     * refund.
     */
    "charges"?: Array<RefundCharge>;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItem}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItem>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock"
        | (string & {});
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Return the platform fee on the payments this refund refunds, as Stripe's
     * refund_application_fee does. By default the partner app keeps its fee. With true, each
     * refunded payment that carries the partner app's collected platform fee returns all of the
     * fee's unreturned amount when this refund returns the whole captured amount, and otherwise a
     * proportional share, rounded half up; the refund that completes the payment returns what
     * rounding left, when every earlier refund of it also returned the fee. Each payment refund
     * reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once
     * that payment refund succeeds. Payments without a platform fee are refunded normally. Only
     * the partner app install token whose app charged the fee can send true; from any other
     * credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with
     * NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the
     * request fingerprint. See [Platform fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "targets".
     */
    "refund_type": "targets" | (string & {});
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequest}. The seller amount to take back from one eligible payment split when
     * creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequest>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundIn}. The
     * tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    "gift_card_load_id": unknown;
})
    | ({
    "credit_note_id": unknown;
})
    | (Record<string, unknown>)))
    & (({
    /** minItems: 1. */
    "line_items": unknown;
})
    | ({
    /** minItems: 1. */
    "charges": unknown;
})
    | ({
    /** minItems: 1. */
    "tax_breakdown_refunds": unknown;
})
    | (Record<string, unknown>));
/** The `targets` variant of `CreateRefundRequest`. */
export type CreateRefundRequestTargetsInput = ({
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundChargeInput}. An order charge to refund when creating a refund, with an optional
     * amount to refund.
     */
    "charges"?: Array<RefundChargeInput>;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItemInput}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItemInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock";
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Return the platform fee on the payments this refund refunds, as Stripe's
     * refund_application_fee does. By default the partner app keeps its fee. With true, each
     * refunded payment that carries the partner app's collected platform fee returns all of the
     * fee's unreturned amount when this refund returns the whole captured amount, and otherwise a
     * proportional share, rounded half up; the refund that completes the payment returns what
     * rounding left, when every earlier refund of it also returned the fee. Each payment refund
     * reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once
     * that payment refund succeeds. Payments without a platform fee are refunded normally. Only
     * the partner app install token whose app charged the fee can send true; from any other
     * credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with
     * NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the
     * request fingerprint. See [Platform fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "targets".
     */
    "refund_type": ("targets") & ("targets");
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequestInput}. The seller amount to take back from one eligible payment split
     * when creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequestInput>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundInInput}.
     * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    "gift_card_load_id": unknown;
})
    | ({
    "credit_note_id": unknown;
})))
    & ((({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
})))
    & (({
    /** minItems: 1. */
    "line_items": unknown;
})
    | ({
    /** minItems: 1. */
    "charges": unknown;
})
    | ({
    /** minItems: 1. */
    "tax_breakdown_refunds": unknown;
}))
    & (({
    "amount_money"?: never;
})
    & ({
    "tender_allocations"?: never;
})
    & ({
    "gift_card_load_id"?: never;
}));
/** A response containing `RefundWithGiftCardCodes` data. */
export type CreateRefundResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A refund with newly
     * issued gift card codes available during the command recovery window. Money returned against
     * a collected payment.
     */
    "data": RefundWithGiftCardCodes;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The request body for: Create a report. */
export type CreateReportRequest = ({
    /**
     * Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than
     * today. Balances are measured at the earlier of the end of that day and report creation.
     * Format: date. minLength: 1. Example: "2026-08-02".
     */
    "as_of_date"?: string;
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at"?: string;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at"?: string;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "receivables_aging_v1", "invoices_itemized_v1",
     * "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1", "tax_transactions_itemized_v2".
     */
    "report_type": "receivables_aging_v1"
        | "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2"
        | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved
     * on the report at creation. minLength: 1.
     */
    "timezone"?: string;
})
    & ((Exclude<CreateIntervalReportRequest & object, readonly unknown[]>)
    | (Exclude<CreateReceivablesAgingReportRequest & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create a report. */
export type CreateReportRequestInput = ({
    /**
     * Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than
     * today. Balances are measured at the earlier of the end of that day and report creation.
     * Format: date. minLength: 1. Example: "2026-08-02".
     */
    "as_of_date"?: string;
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at"?: string | globalThis.Date;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at"?: string | globalThis.Date;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "receivables_aging_v1", "invoices_itemized_v1",
     * "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1", "tax_transactions_itemized_v2".
     */
    "report_type": "receivables_aging_v1"
        | "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2";
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved
     * on the report at creation. minLength: 1.
     */
    "timezone"?: string;
})
    & ((Exclude<CreateIntervalReportRequestInput & object, readonly unknown[]>)
    | (Exclude<CreateReceivablesAgingReportRequestInput & object, readonly unknown[]>));
/** The request body for: Create return disposition. */
export type CreateReturnDispositionRequest = ({
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. minLength: 1. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * minLength: 1. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id"?: string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * minLength: 1. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id"?: string;
})
    & ((Exclude<CreateReturnDispositionRequestReceiptLine & object, readonly unknown[]>)
    | (Exclude<CreateReturnDispositionRequestInspectionLine & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create return disposition. */
export type CreateReturnDispositionRequestInput = ({
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost";
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string | globalThis.Date;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. minLength: 1. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * minLength: 1. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id"?: string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * minLength: 1. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id"?: string;
})
    & ((Exclude<CreateReturnDispositionRequestReceiptLineInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnDispositionRequestInspectionLineInput & object, readonly unknown[]>));
/** The `Inspection line` variant of `CreateReturnDispositionRequest`. */
export type CreateReturnDispositionRequestInspectionLine = ({
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. minLength: 1. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * minLength: 1. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id": string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * minLength: 1. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id"?: string;
});
/** The `Inspection line` variant of `CreateReturnDispositionRequest`. */
export type CreateReturnDispositionRequestInspectionLineInput = ({
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost";
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string | globalThis.Date;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. minLength: 1. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * minLength: 1. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id": string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * minLength: 1. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id"?: string;
})
    & ({
    "return_receipt_line_item_id"?: never;
});
/** The `Receipt line` variant of `CreateReturnDispositionRequest`. */
export type CreateReturnDispositionRequestReceiptLine = ({
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. minLength: 1. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * minLength: 1. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id"?: string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * minLength: 1. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id": string;
});
/** The `Receipt line` variant of `CreateReturnDispositionRequest`. */
export type CreateReturnDispositionRequestReceiptLineInput = ({
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost";
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string | globalThis.Date;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. minLength: 1. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * minLength: 1. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id"?: string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * minLength: 1. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id": string;
})
    & ({
    "return_inspection_line_item_id"?: never;
});
export type CreateReturnDispositionResponse = GetReturnDispositionResponse;
/** A request to preview which items of an order can be returned, given an order and a selection. */
export type CreateReturnEligibilityPreviewRequest = {
    /**
     * ID of the Order to return items from. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Which fulfilled units to check. Which order lines to check for return eligibility: all
     * remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
};
/** A request to preview which items of an order can be returned, given an order and a selection. */
export type CreateReturnEligibilityPreviewRequestInput = {
    /**
     * ID of the Order to return items from. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Which fulfilled units to check. Which order lines to check for return eligibility: all
     * remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelectionRequestInput;
};
/** The request body for: Create return inspection. */
export type CreateReturnInspectionRequest = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** Detail about `correction_reason`. minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "inspected_at": string;
    /**
     * Location where the returned merchandise was inspected. Must match the receipt
     * receiving_location_id. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inspection_location_id": string;
    /**
     * The lines recorded. minItems: 1. [] (Value): {@link ReturnInspectionLineItemRequest}. The
     * inspection result for one received return line: acceptance status, condition, and findings.
     */
    "line_items": Array<ReturnInspectionLineItemRequest>;
    /**
     * ID of the receipt being inspected. minLength: 1. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "return_receipt_id": string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. The system
     * a return event came from, such as a point of sale or warehouse system, with its own
     * identifier.
     */
    "source_system"?: ReturnSourceSystemRequest;
    /**
     * ID of the inspection this one corrects. minLength: 1. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "supersedes_return_inspection_id"?: string;
};
/** The request body for: Create return inspection. */
export type CreateReturnInspectionRequestInput = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other";
    /** Detail about `correction_reason`. minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "inspected_at": string | globalThis.Date;
    /**
     * Location where the returned merchandise was inspected. Must match the receipt
     * receiving_location_id. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inspection_location_id": string;
    /**
     * The lines recorded. minItems: 1. [] (Value): {@link ReturnInspectionLineItemRequestInput}.
     * The inspection result for one received return line: acceptance status, condition, and
     * findings.
     */
    "line_items": Array<ReturnInspectionLineItemRequestInput>;
    /**
     * ID of the receipt being inspected. minLength: 1. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "return_receipt_id": string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. The system
     * a return event came from, such as a point of sale or warehouse system, with its own
     * identifier.
     */
    "source_system"?: ReturnSourceSystemRequestInput;
    /**
     * ID of the inspection this one corrects. minLength: 1. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "supersedes_return_inspection_id"?: string;
};
export type CreateReturnInspectionResponse = GetReturnInspectionResponse;
/** The request body for: Create return policy. */
export type CreateReturnPolicyRequest = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Name of the policy, from 1 to 255 characters. minLength: 1. */
    "name": string;
    /**
     * The revision with the complete rules. A field you leave out doesn't carry over from the
     * previous revision. The rules for a return policy revision: scope, eligibility, return
     * window, approval and resolution modes, shipping, and restocking fee.
     */
    "revision": ReturnPolicyRevisionRequest;
    /**
     * Whether the policy applies to new Returns. Defaults to inactive. Creating an active policy
     * checks for overlapping active policies and a usable receiving location, just like activation
     * through PATCH. Default: "inactive". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create return policy. */
export type CreateReturnPolicyRequestInput = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Name of the policy, from 1 to 255 characters. minLength: 1. */
    "name": string;
    /**
     * The revision with the complete rules. A field you leave out doesn't carry over from the
     * previous revision. The rules for a return policy revision: scope, eligibility, return
     * window, approval and resolution modes, shipping, and restocking fee.
     */
    "revision": ReturnPolicyRevisionRequestInput;
    /**
     * Whether the policy applies to new Returns. Defaults to inactive. Creating an active policy
     * checks for overlapping active policies and a usable receiving location, just like activation
     * through PATCH. Default: "inactive". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
export type CreateReturnPolicyResponse = GetReturnPolicyResponse;
/**
 * A return preview, selected by `mode`: either the eligibility of the selected items or the
 * amounts of a resolution.
 */
export type CreateReturnPreviewData = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The result of checking whether
     * an order's items can be returned: overall status, per-line eligibility, and the policy
     * evaluation.
     */
    "eligibility"?: ReturnEligibilityPreview;
    /** Which preview to run. Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution
     * before it is created: returned and replacement totals, adjustments, and amounts due to or
     * from the buyer.
     */
    "resolution"?: ReturnResolutionPreview;
})
    & ((Exclude<CreateReturnPreviewDataEligibility & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewDataResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `eligibility` variant of `CreateReturnPreviewData`. */
export type CreateReturnPreviewDataEligibility = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The result of checking whether
     * an order's items can be returned: overall status, per-line eligibility, and the policy
     * evaluation.
     */
    "eligibility": ReturnEligibilityPreview;
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution
     * before it is created: returned and replacement totals, adjustments, and amounts due to or
     * from the buyer.
     */
    "resolution"?: ReturnResolutionPreview;
})
    & (({
    /** Which preview to run. Value enum: "eligibility". */
    "mode": unknown;
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The result of checking whether
     * an order's items can be returned: overall status, per-line eligibility, and the policy
     * evaluation.
     */
    "eligibility": ReturnEligibilityPreview;
}));
/** The `resolution` variant of `CreateReturnPreviewData`. */
export type CreateReturnPreviewDataResolution = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The result of checking whether
     * an order's items can be returned: overall status, per-line eligibility, and the policy
     * evaluation.
     */
    "eligibility"?: ReturnEligibilityPreview;
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution
     * before it is created: returned and replacement totals, adjustments, and amounts due to or
     * from the buyer.
     */
    "resolution": ReturnResolutionPreview;
})
    & (({
    /** Which preview to run. Value enum: "resolution". */
    "mode": unknown;
    /**
     * The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution
     * before it is created: returned and replacement totals, adjustments, and amounts due to or
     * from the buyer.
     */
    "resolution": ReturnResolutionPreview;
}));
/** The request body for: Create return preview. */
export type CreateReturnPreviewRequest = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Which preview to run. Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequest;
})
    & ((Exclude<CreateReturnPreviewRequestEligibility & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewRequestResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `eligibility` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestEligibility = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequest;
})
    & (({
    /** Which preview to run. Value enum: "eligibility". */
    "mode": unknown;
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
}));
/** The `eligibility` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestEligibilityInput = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
})
    & ({
    "resolution"?: never;
}));
/** The request body for: Create return preview. */
export type CreateReturnPreviewRequestInput = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Which preview to run. Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution";
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequestInput;
})
    & ((Exclude<CreateReturnPreviewRequestEligibilityInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewRequestResolutionInput & object, readonly unknown[]>));
/** The `resolution` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestResolution = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequest;
})
    & (({
    /** Which preview to run. Value enum: "resolution". */
    "mode": unknown;
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequest;
}));
/** The `resolution` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestResolutionInput = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution";
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution";
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequestInput;
})
    & ({
    "eligibility"?: never;
}));
/** A response containing `CreateReturnPreviewData` data. */
export type CreateReturnPreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A return preview,
     * selected by `mode`: either the eligibility of the selected items or the amounts of a
     * resolution.
     */
    "data": CreateReturnPreviewData;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
