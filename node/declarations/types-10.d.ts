import type { CreateProductOptionRequestInput, CreateProductOptionRequest } from './types-9.js';
import type { ImageRequestInput, ImageRequest } from './types-25.js';
import type { MetadataRequestInput, MetadataMap } from './types-34.js';
import type {
    ProductVariantRequestInput,
    ProductVariantRequest,
    PromotionApplicationMethodRequest,
    PromotionApplicationMethodRequestInput
} from './types-44.js';
import type {
    PromotionCombinesWithPatch,
    PromotionExclusivityRequest,
    PromotionRuleGroupRequest,
    PromotionSchedule,
    PromotionCombinesWithRequestInput,
    PromotionExclusivityRequestInput,
    PromotionRuleGroupRequestInput,
    PromotionScheduleRequestInput
} from './types-45.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type {
    RefundCharge,
    RefundDestinations,
    RefundLineItem,
    RefundChargeInput,
    RefundDestinationsInput,
    RefundLineItemInput,
    Refund,
    RefundGiftCardCode,
    RefundLineItemAllocation
} from './types-46.js';
import type {
    RefundTaxBreakdownRefundIn,
    RefundTenderAllocationRequest,
    RefundTaxBreakdownRefundInInput,
    RefundTenderAllocationRequestInput,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery
} from './types-47.js';
import type {
    ResponseMeta,
    ReturnEligibilitySelection,
    ReturnEligibilitySelectionInput,
    ReturnEligibilityPreview
} from './types-48.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from './types-21.js';
import type { PaymentRefund } from './types-42.js';
import type {
    GetReturnDispositionResponse,
    GetReturnInspectionResponse,
    GetReturnPolicyResponse,
    GetReturnReasonResponse,
    GetReturnReceiptResponse
} from './types-23.js';
import type {
    ReturnInspectionLineItemRequest,
    ReturnInspectionLineItemRequestInput,
    ReturnPolicyRevisionRequest,
    ReturnPolicyRevisionRequestInput,
    ReturnLineItemRequest,
    ReturnLineItemRequestInput
} from './types-49.js';
import type {
    ReturnSourceSystemRequest,
    ReturnSourceSystemRequestInput,
    ReturnResolutionPreview,
    ReturnReceiptLineItemRequest,
    ReturnReceiptLineItemRequestInput,
    ReturnReplacementLineItemRequest,
    ReturnResolutionAdjustmentRequest,
    ReturnResolutionLineItemRequest,
    ReturnResolutionAdjustmentRequestInput,
    ReturnReplacementLineItemRequestInput,
    ReturnResolutionLineItemRequestInput
} from './types-50.js';
import type { CreateReturnResolutionRequestStandard, CreateReturnResolutionRequestStandardInput } from './types-11.js';
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
     * 255.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
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
     * Independent variants to create with this product, at most 100. Add more with `POST
     * /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. [] (Value): {@link
     * ProductVariantRequestInput}. The request body for: Create product variant.
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
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant"?: ProductVariantRequest;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
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
     * Independent variants to create with this product, at most 100. Add more with `POST
     * /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. [] (Value): {@link
     * ProductVariantRequest}. The request body for: Create product variant.
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
     * Independent variants to create with this product, at most 100. Add more with `POST
     * /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. [] (Value): {@link
     * ProductVariantRequest}. The request body for: Create product variant.
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
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant"?: ProductVariantRequestInput;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
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
     * Independent variants to create with this product, at most 100. Add more with `POST
     * /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. [] (Value): {@link
     * ProductVariantRequestInput}. The request body for: Create product variant.
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
     * Independent variants to create with this product, at most 100. Add more with `POST
     * /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. [] (Value): {@link
     * ProductVariantRequestInput}. The request body for: Create product variant.
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
     * 255.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
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
    /** Selects the variant mode branch. Value enum: "simple". */
    "variant_mode": "simple" | (string & {});
    /**
     * Independent variants to create with this product, at most 100. Add more with `POST
     * /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. [] (Value): {@link
     * ProductVariantRequest}. The request body for: Create product variant.
     */
    "variants"?: Array<ProductVariantRequest>;
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
     * 255.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
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
    /** Selects the variant mode branch. Value enum: "simple". */
    "variant_mode": "simple";
    /**
     * Independent variants to create with this product, at most 100. Add more with `POST
     * /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. [] (Value): {@link
     * ProductVariantRequestInput}. The request body for: Create product variant.
     */
    "variants"?: Array<ProductVariantRequestInput>;
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
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry.
     * Format: date-time. minLength: 1.
     */
    "expires_at"?: string;
    /**
     * Maximum number of times this code can be redeemed. Omit for no redemption limit. Format:
     * int64.
     */
    "max_uses"?: number;
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
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry.
     * Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Maximum number of times this code can be redeemed. Omit for no redemption limit. Format:
     * int64.
     */
    "max_uses"?: number;
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
     * in `codes`. Add more later with `POST /v1/promotions/{promotion_id}/codes`, and manage each
     * code through the `/v1/promotions/{promotion_id}/codes/{promotion_code_id}` routes. maxItems:
     * 100. [] (Value): {@link CreatePromotionCodeRequest}. The request body for: Create promotion
     * code.
     */
    "codes"?: Array<CreatePromotionCodeRequest>;
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
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Omit for no
     * redemption limit. Format: int64.
     */
    "max_uses"?: number;
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
     * in `codes`. Add more later with `POST /v1/promotions/{promotion_id}/codes`, and manage each
     * code through the `/v1/promotions/{promotion_id}/codes/{promotion_code_id}` routes. maxItems:
     * 100. [] (Value): {@link CreatePromotionCodeRequestInput}. The request body for: Create
     * promotion code.
     */
    "codes"?: Array<CreatePromotionCodeRequestInput>;
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
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Omit for no
     * redemption limit. Format: int64.
     */
    "max_uses"?: number;
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
/** The request body for: Create refund. */
export type CreateRefundRequest = ({
    /**
     * Required for refund_type amount and forbidden for full and targets. Total to refund,
     * including named targets and any value Flint allocates to the remaining components. Tender
     * allocations must sum to this amount. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
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
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
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
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other".
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
        | (string & {});
    /** Optional note explaining the refund, up to 1,024 characters. minLength: 1. */
    "reason_message"?: string;
    /**
     * Required amount mode: full refunds the full remaining amount; amount requires amount_money
     * and permits named targets and tender_allocations within that amount; targets refunds named
     * line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not
     * accept tender_allocations. Gift card loads support full and amount only. Value enum: "full",
     * "amount", "targets".
     */
    "refund_type": "full" | "amount" | "targets" | (string & {});
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
    & ((Exclude<CreateRefundRequestFull & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestAmount & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestTargets & object, readonly unknown[]>)
    | (Record<string, unknown>))
    & (({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
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
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id": string;
})
    | (Record<string, unknown>));
/** The `amount` variant of `CreateRefundRequest`. */
export type CreateRefundRequestAmount = ({
    /**
     * Required for refund_type amount and forbidden for full and targets. Total to refund,
     * including named targets and any value Flint allocates to the remaining components. Tender
     * allocations must sum to this amount. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
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
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
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
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other".
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
        | (string & {});
    /** Optional note explaining the refund, up to 1,024 characters. minLength: 1. */
    "reason_message"?: string;
    /**
     * Required amount mode: full refunds the full remaining amount; amount requires amount_money
     * and permits named targets and tender_allocations within that amount; targets refunds named
     * line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not
     * accept tender_allocations. Gift card loads support full and amount only. Value enum:
     * "amount".
     */
    "refund_type": "full" | "amount" | "targets" | (string & {});
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
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
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
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id": string;
})
    | (Record<string, unknown>)));
/** The `amount` variant of `CreateRefundRequest`. */
export type CreateRefundRequestAmountInput = ({
    /**
     * Required for refund_type amount and forbidden for full and targets. Total to refund,
     * including named targets and any value Flint allocates to the remaining components. Tender
     * allocations must sum to this amount. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
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
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
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
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other".
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
        | "other";
    /** Optional note explaining the refund, up to 1,024 characters. minLength: 1. */
    "reason_message"?: string;
    /**
     * Required amount mode: full refunds the full remaining amount; amount requires amount_money
     * and permits named targets and tender_allocations within that amount; targets refunds named
     * line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not
     * accept tender_allocations. Gift card loads support full and amount only. Value enum:
     * "amount".
     */
    "refund_type": ("full" | "amount" | "targets") & ("amount");
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
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
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
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id": string;
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
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
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
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other".
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
        | (string & {});
    /** Optional note explaining the refund, up to 1,024 characters. minLength: 1. */
    "reason_message"?: string;
    /**
     * Required amount mode: full refunds the full remaining amount; amount requires amount_money
     * and permits named targets and tender_allocations within that amount; targets refunds named
     * line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not
     * accept tender_allocations. Gift card loads support full and amount only. Value enum: "full".
     */
    "refund_type": "full" | "amount" | "targets" | (string & {});
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
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
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id": string;
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
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
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
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other".
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
        | "other";
    /** Optional note explaining the refund, up to 1,024 characters. minLength: 1. */
    "reason_message"?: string;
    /**
     * Required amount mode: full refunds the full remaining amount; amount requires amount_money
     * and permits named targets and tender_allocations within that amount; targets refunds named
     * line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not
     * accept tender_allocations. Gift card loads support full and amount only. Value enum: "full".
     */
    "refund_type": ("full" | "amount" | "targets") & ("full");
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
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
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id": string;
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
     * Required for refund_type amount and forbidden for full and targets. Total to refund,
     * including named targets and any value Flint allocates to the remaining components. Tender
     * allocations must sum to this amount. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
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
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
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
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other".
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
        | "other";
    /** Optional note explaining the refund, up to 1,024 characters. minLength: 1. */
    "reason_message"?: string;
    /**
     * Required amount mode: full refunds the full remaining amount; amount requires amount_money
     * and permits named targets and tender_allocations within that amount; targets refunds named
     * line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not
     * accept tender_allocations. Gift card loads support full and amount only. Value enum: "full",
     * "amount", "targets".
     */
    "refund_type": "full" | "amount" | "targets";
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
    & ((Exclude<CreateRefundRequestFullInput & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestAmountInput & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestTargetsInput & object, readonly unknown[]>))
    & (({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
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
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_load_id": string;
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
     * 255.
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
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other".
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
        | (string & {});
    /** Optional note explaining the refund, up to 1,024 characters. minLength: 1. */
    "reason_message"?: string;
    /**
     * Required amount mode: full refunds the full remaining amount; amount requires amount_money
     * and permits named targets and tender_allocations within that amount; targets refunds named
     * line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not
     * accept tender_allocations. Gift card loads support full and amount only. Value enum:
     * "targets".
     */
    "refund_type": "full" | "amount" | "targets" | (string & {});
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
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
     */
    "payment_intent_id": string;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    "gift_card_load_id": unknown;
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
     * 255.
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
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other".
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
        | "other";
    /** Optional note explaining the refund, up to 1,024 characters. minLength: 1. */
    "reason_message"?: string;
    /**
     * Required amount mode: full refunds the full remaining amount; amount requires amount_money
     * and permits named targets and tender_allocations within that amount; targets refunds named
     * line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not
     * accept tender_allocations. Gift card loads support full and amount only. Value enum:
     * "targets".
     */
    "refund_type": ("full" | "amount" | "targets") & ("targets");
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
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1.
     */
    "payment_intent_id": string;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    "gift_card_load_id": unknown;
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
/** A response containing `CreateRefundResult` data. */
export type CreateRefundResponse = {
    /**
     * The refund created by a create refund call, with all the fields of a refund. Money returned
     * against a collected payment.
     */
    "data": CreateRefundResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The refund created by a create refund call, with all the fields of a refund. Money returned
 * against a collected payment.
 */
export type CreateRefundResult = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "credit_note_id"?: string;
    /**
     *  anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
     * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    "customer_id"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * New gift card codes recovered only within 24 hours of the original command and only while
     * each code remains current. Omitted after the recovery window and never returned by ordinary
     * refund reads or events. [] (Value): {@link RefundGiftCardCode}. The code of a gift card
     * issued by a refund, returned once in the refund result with its `gift_card_id`.
     */
    "gift_card_codes"?: Array<RefundGiftCardCode>;
    /**
     * Present only on refunds created through POST /v1/credit-notes/{credit_note_id}/refunds or by
     * issuing a credit note with refund: the Idempotency-Key of that call. Use it with GET
     * /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create
     * response was lost.
     */
    "idempotency_key"?: string;
    "invoice_id"?: string;
    /**
     *  [] (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations.
     */
    "line_item_allocations"?: Array<RefundLineItemAllocation>;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     *  anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    "order_id"?: string;
    /**
     *  anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields,
     * including amount, status, and capture method, returned when the payment intent is expanded.
     * anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    "payment_intent_id"?: string;
    /**
     *  [] (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with
     * the amount, tip, status, and any failure reason.
     */
    "payment_refunds"?: Array<PaymentRefund>;
    "payment_review_id"?: string;
    /**
     * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", null.
     */
    "reason": "duplicate"
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
        | null
        | (string & {})
        | null;
    "reason_message"?: string;
    "refund_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_tip_money": MoneyValue;
    "return_id"?: string;
    "return_resolution_id"?: string;
    /**
     * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. Follow
     * refund.updated. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     *  [] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an
     * order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /**
     *  [] (Value): {@link RefundTenderAllocation}. One tender's share of a refund, listed in the
     * refund's tender allocations.
     */
    "tender_allocations"?: Array<RefundTenderAllocation>;
    /**
     * Cash returned after an unissued gift card purchase refund failed. Return it through a new
     * refund against payment_intent_id and order_line_item_id. It does not issue another card.
     * Source remaining and pending amounts describe the entire original settlement allocation;
     * repeated entries for that source are not additive. [] (Value): {@link
     * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the card
     * was issued, including the amounts recovered.
     */
    "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
})
    & (Exclude<Refund & object, readonly unknown[]>)
    & ({
    /**
     * New gift card codes recovered only within 24 hours of the original command and only while
     * each code remains current. Omitted after the recovery window and never returned by ordinary
     * refund reads or events. [] (Value): {@link RefundGiftCardCode}. The code of a gift card
     * issued by a refund, returned once in the refund result with its `gift_card_id`.
     */
    "gift_card_codes"?: Array<RefundGiftCardCode>;
});
/** The request body for: Create a report. */
export type CreateReportRequest = {
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1.
     */
    "interval_end_at": string;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1.
     */
    "interval_start_at": string;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1".
     */
    "report_type": "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to UTC. minLength: 1.
     */
    "timezone"?: string;
};
/** The request body for: Create a report. */
export type CreateReportRequestInput = {
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1.
     */
    "interval_end_at": string | globalThis.Date;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1.
     */
    "interval_start_at": string | globalThis.Date;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1".
     */
    "report_type": "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1";
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to UTC. minLength: 1.
     */
    "timezone"?: string;
};
/** The request body for: Create return disposition. */
export type CreateReturnDispositionRequest = ({
    /**
     * Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost".
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
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Value enum: "inspection_result", "return_policy", "warehouse_override",
     * "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "replaces_return_disposition_id"?: string;
    /** minLength: 1. */
    "return_inspection_line_item_id"?: string;
    /** minLength: 1. */
    "return_receipt_line_item_id"?: string;
})
    & ((Exclude<CreateReturnDispositionRequestReceiptLine & object, readonly unknown[]>)
    | (Exclude<CreateReturnDispositionRequestInspectionLine & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create return disposition. */
export type CreateReturnDispositionRequestInput = ({
    /**
     * Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost".
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
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string | globalThis.Date;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Value enum: "inspection_result", "return_policy", "warehouse_override",
     * "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "replaces_return_disposition_id"?: string;
    /** minLength: 1. */
    "return_inspection_line_item_id"?: string;
    /** minLength: 1. */
    "return_receipt_line_item_id"?: string;
})
    & ((Exclude<CreateReturnDispositionRequestReceiptLineInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnDispositionRequestInspectionLineInput & object, readonly unknown[]>));
/** The `Inspection line` variant of `CreateReturnDispositionRequest`. */
export type CreateReturnDispositionRequestInspectionLine = ({
    /**
     * Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost".
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
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Value enum: "inspection_result", "return_policy", "warehouse_override",
     * "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "replaces_return_disposition_id"?: string;
    /** minLength: 1. */
    "return_inspection_line_item_id": string;
    /** minLength: 1. */
    "return_receipt_line_item_id"?: string;
});
/** The `Inspection line` variant of `CreateReturnDispositionRequest`. */
export type CreateReturnDispositionRequestInspectionLineInput = ({
    /**
     * Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost".
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
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string | globalThis.Date;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Value enum: "inspection_result", "return_policy", "warehouse_override",
     * "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "replaces_return_disposition_id"?: string;
    /** minLength: 1. */
    "return_inspection_line_item_id": string;
    /** minLength: 1. */
    "return_receipt_line_item_id"?: string;
})
    & ({
    "return_receipt_line_item_id"?: never;
});
/** The `Receipt line` variant of `CreateReturnDispositionRequest`. */
export type CreateReturnDispositionRequestReceiptLine = ({
    /**
     * Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost".
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
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Value enum: "inspection_result", "return_policy", "warehouse_override",
     * "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "replaces_return_disposition_id"?: string;
    /** minLength: 1. */
    "return_inspection_line_item_id"?: string;
    /** minLength: 1. */
    "return_receipt_line_item_id": string;
});
/** The `Receipt line` variant of `CreateReturnDispositionRequest`. */
export type CreateReturnDispositionRequestReceiptLineInput = ({
    /**
     * Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost".
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
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string | globalThis.Date;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Value enum: "inspection_result", "return_policy", "warehouse_override",
     * "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "replaces_return_disposition_id"?: string;
    /** minLength: 1. */
    "return_inspection_line_item_id"?: string;
    /** minLength: 1. */
    "return_receipt_line_item_id": string;
})
    & ({
    "return_inspection_line_item_id"?: never;
});
export type CreateReturnDispositionResponse = GetReturnDispositionResponse;
/** A request to preview which items of an order can be returned, given an order and a selection. */
export type CreateReturnEligibilityPreviewRequest = {
    /** minLength: 1. */
    "order_id": string;
    /**
     * Which order lines to check for return eligibility: all remaining fulfilled lines, or a
     * specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
};
/** A request to preview which items of an order can be returned, given an order and a selection. */
export type CreateReturnEligibilityPreviewRequestInput = {
    /** minLength: 1. */
    "order_id": string;
    /**
     * Which order lines to check for return eligibility: all remaining fulfilled lines, or a
     * specific list of lines.
     */
    "selection": ReturnEligibilitySelectionInput;
};
/** The request body for: Create return inspection. */
export type CreateReturnInspectionRequest = {
    /**
     * Value enum: "entry_error", "duplicate_observation", "source_correction",
     * "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     */
    "inspected_at": string;
    /**
     * Location where the returned merchandise was inspected. Must match the receipt
     * receiving_location_id. minLength: 1.
     */
    "inspection_location_id": string;
    /**
     * minItems: 1. [] (Value): {@link ReturnInspectionLineItemRequest}. The inspection result for
     * one received return line: acceptance status, condition, and findings.
     */
    "line_items": Array<ReturnInspectionLineItemRequest>;
    /** minLength: 1. */
    "return_receipt_id": string;
    /**
     * The system a return event came from, such as a point of sale or warehouse system, with its
     * own identifier.
     */
    "source_system"?: ReturnSourceSystemRequest;
    /** minLength: 1. */
    "supersedes_return_inspection_id"?: string;
};
/** The request body for: Create return inspection. */
export type CreateReturnInspectionRequestInput = {
    /**
     * Value enum: "entry_error", "duplicate_observation", "source_correction",
     * "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other";
    /** minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     */
    "inspected_at": string | globalThis.Date;
    /**
     * Location where the returned merchandise was inspected. Must match the receipt
     * receiving_location_id. minLength: 1.
     */
    "inspection_location_id": string;
    /**
     * minItems: 1. [] (Value): {@link ReturnInspectionLineItemRequestInput}. The inspection result
     * for one received return line: acceptance status, condition, and findings.
     */
    "line_items": Array<ReturnInspectionLineItemRequestInput>;
    /** minLength: 1. */
    "return_receipt_id": string;
    /**
     * The system a return event came from, such as a point of sale or warehouse system, with its
     * own identifier.
     */
    "source_system"?: ReturnSourceSystemRequestInput;
    /** minLength: 1. */
    "supersedes_return_inspection_id"?: string;
};
export type CreateReturnInspectionResponse = GetReturnInspectionResponse;
/** The request body for: Create return policy. */
export type CreateReturnPolicyRequest = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
    /** minLength: 1. */
    "name": string;
    /**
     * The rules for a return policy revision: scope, eligibility, return window, approval and
     * resolution modes, shipping, and restocking fee.
     */
    "revision": ReturnPolicyRevisionRequest;
};
/** The request body for: Create return policy. */
export type CreateReturnPolicyRequestInput = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
    /** minLength: 1. */
    "name": string;
    /**
     * The rules for a return policy revision: scope, eligibility, return window, approval and
     * resolution modes, shipping, and restocking fee.
     */
    "revision": ReturnPolicyRevisionRequestInput;
};
export type CreateReturnPolicyResponse = GetReturnPolicyResponse;
/**
 * A return preview, selected by `mode`: either the eligibility of the selected items or the
 * amounts of a resolution.
 */
export type CreateReturnPreviewData = ({
    /**
     * The result of checking whether an order's items can be returned: overall status, per-line
     * eligibility, and the policy evaluation.
     */
    "eligibility"?: ReturnEligibilityPreview;
    /** Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * A preview of a return resolution before it is created: returned and replacement totals,
     * adjustments, and amounts due to or from the buyer.
     */
    "resolution"?: ReturnResolutionPreview;
})
    & ((Exclude<CreateReturnPreviewDataEligibility & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewDataResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `eligibility` variant of `CreateReturnPreviewData`. */
export type CreateReturnPreviewDataEligibility = ({
    /**
     * The result of checking whether an order's items can be returned: overall status, per-line
     * eligibility, and the policy evaluation.
     */
    "eligibility": ReturnEligibilityPreview;
    /** Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * A preview of a return resolution before it is created: returned and replacement totals,
     * adjustments, and amounts due to or from the buyer.
     */
    "resolution"?: ReturnResolutionPreview;
})
    & (({
    /** Value enum: "eligibility". */
    "mode": unknown;
    /**
     * The result of checking whether an order's items can be returned: overall status, per-line
     * eligibility, and the policy evaluation.
     */
    "eligibility": ReturnEligibilityPreview;
}));
/** The `resolution` variant of `CreateReturnPreviewData`. */
export type CreateReturnPreviewDataResolution = ({
    /**
     * The result of checking whether an order's items can be returned: overall status, per-line
     * eligibility, and the policy evaluation.
     */
    "eligibility"?: ReturnEligibilityPreview;
    /** Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * A preview of a return resolution before it is created: returned and replacement totals,
     * adjustments, and amounts due to or from the buyer.
     */
    "resolution": ReturnResolutionPreview;
})
    & (({
    /** Value enum: "resolution". */
    "mode": unknown;
    /**
     * A preview of a return resolution before it is created: returned and replacement totals,
     * adjustments, and amounts due to or from the buyer.
     */
    "resolution": ReturnResolutionPreview;
}));
/** The request body for: Create return preview. */
export type CreateReturnPreviewRequest = ({
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * A request to preview the amounts of a return resolution for a return, selected by
     * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequest;
})
    & ((Exclude<CreateReturnPreviewRequestEligibility & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewRequestResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `eligibility` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestEligibility = ({
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
    /** Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * A request to preview the amounts of a return resolution for a return, selected by
     * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequest;
})
    & (({
    /** Value enum: "eligibility". */
    "mode": unknown;
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
}));
/** The `eligibility` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestEligibilityInput = ({
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
    /** Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * A request to preview the amounts of a return resolution for a return, selected by
     * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
})
    & ({
    "resolution"?: never;
}));
/** The request body for: Create return preview. */
export type CreateReturnPreviewRequestInput = ({
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution";
    /**
     * A request to preview the amounts of a return resolution for a return, selected by
     * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequestInput;
})
    & ((Exclude<CreateReturnPreviewRequestEligibilityInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewRequestResolutionInput & object, readonly unknown[]>));
/** The `resolution` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestResolution = ({
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * A request to preview the amounts of a return resolution for a return, selected by
     * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequest;
})
    & (({
    /** Value enum: "resolution". */
    "mode": unknown;
    /**
     * A request to preview the amounts of a return resolution for a return, selected by
     * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequest;
}));
/** The `resolution` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestResolutionInput = ({
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Value enum: "resolution". */
    "mode": "resolution";
    /**
     * A request to preview the amounts of a return resolution for a return, selected by
     * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Value enum: "resolution". */
    "mode": "resolution";
    /**
     * A request to preview the amounts of a return resolution for a return, selected by
     * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequestInput;
})
    & ({
    "eligibility"?: never;
}));
/** A response containing `CreateReturnPreviewData` data. */
export type CreateReturnPreviewResponse = {
    /**
     * A return preview, selected by `mode`: either the eligibility of the selected items or the
     * amounts of a resolution.
     */
    "data": CreateReturnPreviewData;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The request body for: Create return reason. */
export type CreateReturnReasonRequest = {
    /**
     * Catalog category handles this reason applies to. A reason with categories is suggested, and
     * accepted from a customer session, only for order lines whose product is in one of them. A
     * reason with no categories applies to every line. Not product types or tags: use handles from
     * GET /v1/categories. Repeated handles are dropped. maxItems: 100. [] (Value): string.
     * minLength: 1.
     */
    "category_handles"?: Array<string>;
    /** Description, limited to 2048 bytes after trimming surrounding whitespace. minLength: 1. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Stable lower_snake_case identifier. After trimming surrounding whitespace, it must start
     * with a lowercase letter and contain only lowercase letters, digits, and underscores, with 1
     * through 100 characters. minLength: 1.
     */
    "handle": string;
    /**
     * Whether a Return line with this reason needs a buyer_note. Defaults to false. Default:
     * false.
     */
    "is_note_required"?: boolean;
    /**
     * Display name, limited to 1 through 255 bytes after trimming surrounding whitespace.
     * minLength: 1.
     */
    "name": string;
};
/** The request body for: Create return reason. */
export type CreateReturnReasonRequestInput = CreateReturnReasonRequest;
export type CreateReturnReasonResponse = GetReturnReasonResponse;
/** The request body for: Create return receipt. */
export type CreateReturnReceiptRequest = {
    /**
     * Value enum: "entry_error", "duplicate_observation", "source_correction",
     * "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link ReturnReceiptLineItemRequest}. One line of received
     * merchandise: a matched return line, excess quantity, or an unverified item.
     */
    "line_items": Array<ReturnReceiptLineItemRequest>;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     */
    "received_at": string;
    /** minLength: 1. */
    "receiving_location_id": string;
    /** minLength: 1. */
    "shipment_id"?: string;
    /**
     * The system a return event came from, such as a point of sale or warehouse system, with its
     * own identifier.
     */
    "source_system"?: ReturnSourceSystemRequest;
    /** minLength: 1. */
    "supersedes_return_receipt_id"?: string;
};
/** The request body for: Create return receipt. */
export type CreateReturnReceiptRequestInput = {
    /**
     * Value enum: "entry_error", "duplicate_observation", "source_correction",
     * "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other";
    /** minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link ReturnReceiptLineItemRequestInput}. One line of received
     * merchandise: a matched return line, excess quantity, or an unverified item.
     */
    "line_items": Array<ReturnReceiptLineItemRequestInput>;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     */
    "received_at": string | globalThis.Date;
    /** minLength: 1. */
    "receiving_location_id": string;
    /** minLength: 1. */
    "shipment_id"?: string;
    /**
     * The system a return event came from, such as a point of sale or warehouse system, with its
     * own identifier.
     */
    "source_system"?: ReturnSourceSystemRequestInput;
    /** minLength: 1. */
    "supersedes_return_receipt_id"?: string;
};
export type CreateReturnReceiptResponse = GetReturnReceiptResponse;
/** The request body for: Create return. */
export type CreateReturnRequest = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link ReturnLineItemRequest}. An order line item to return, with
     * the quantity, return reason, and optionally a note and the resolution the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. */
    "order_id": string;
};
/** The request body for: Create return. */
export type CreateReturnRequestInput = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link ReturnLineItemRequestInput}. An order line item to return,
     * with the quantity, return reason, and optionally a note and the resolution the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. */
    "order_id": string;
};
/**
 * A request to preview the amounts of a return resolution for a return, selected by
 * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
 */
export type CreateReturnResolutionPreviewRequest = ({
    /**
     *  [] (Value): {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /** minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     *  [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and quantity to include
     * in a return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     *  [] (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a
     * return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /** minLength: 1. */
    "return_id": string;
})
    & ((Exclude<CreateReturnResolutionPreviewRequestStandard & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionPreviewRequestCorrection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `correction` variant of `CreateReturnResolutionPreviewRequest`. */
export type CreateReturnResolutionPreviewRequestCorrection = ({
    /**
     *  [] (Value): {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequest>;
    /** minLength: 1. */
    "corrects_return_resolution_id": string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /** Value enum: "correction". */
    "resolution_type": "correction" | (string & {});
    /** minLength: 1. */
    "return_id": string;
})
    & (({
    /** minItems: 1. */
    "adjustments": unknown;
    /** Value enum: "correction". */
    "resolution_type"?: unknown;
    /** minLength: 1. */
    "corrects_return_resolution_id": string;
}));
/** The `correction` variant of `CreateReturnResolutionPreviewRequest`. */
export type CreateReturnResolutionPreviewRequestCorrectionInput = ({
    /**
     *  [] (Value): {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a
     * return resolution, with the assessed and applied amounts and whether it is applied or
     * waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequestInput>;
    /** minLength: 1. */
    "corrects_return_resolution_id": string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /** Value enum: "correction". */
    "resolution_type": "correction";
    /** minLength: 1. */
    "return_id": string;
})
    & (({
    /** minItems: 1. */
    "adjustments": unknown;
    /** Value enum: "correction". */
    "resolution_type"?: "correction";
    /** minLength: 1. */
    "corrects_return_resolution_id": string;
})
    & (({
    "line_items"?: never;
})
    & ({
    "replacement_line_items"?: never;
})
    & ({
    "pricing_basis"?: never;
})));
/**
 * A request to preview the amounts of a return resolution for a return, selected by
 * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
 */
export type CreateReturnResolutionPreviewRequestInput = ({
    /**
     *  [] (Value): {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a
     * return resolution, with the assessed and applied amounts and whether it is applied or
     * waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /** minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     *  [] (Value): {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to
     * include in a return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequestInput>;
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     *  [] (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in
     * a return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction";
    /** minLength: 1. */
    "return_id": string;
})
    & ((Exclude<CreateReturnResolutionPreviewRequestStandardInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionPreviewRequestCorrectionInput & object, readonly unknown[]>));
/**
 * The `exchange` variant of `CreateReturnResolutionPreviewRequest`. The `no_monetary_action`
 * variant of `CreateReturnResolutionPreviewRequest`. The `refund` variant of
 * `CreateReturnResolutionPreviewRequest`. The `replacement` variant of
 * `CreateReturnResolutionPreviewRequest`. The `store_credit` variant of
 * `CreateReturnResolutionPreviewRequest`.
 */
export type CreateReturnResolutionPreviewRequestStandard = ({
    /**
     *  [] (Value): {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     *  [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and quantity to include
     * in a return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     *  [] (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a
     * return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** minLength: 1. */
    "return_id": string;
})
    & (({
    /** minItems: 1. */
    "line_items": unknown;
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". */
    "resolution_type"?: unknown;
}));
/**
 * The `exchange` variant of `CreateReturnResolutionPreviewRequest`. The `no_monetary_action`
 * variant of `CreateReturnResolutionPreviewRequest`. The `refund` variant of
 * `CreateReturnResolutionPreviewRequest`. The `replacement` variant of
 * `CreateReturnResolutionPreviewRequest`. The `store_credit` variant of
 * `CreateReturnResolutionPreviewRequest`.
 */
export type CreateReturnResolutionPreviewRequestStandardInput = ({
    /**
     *  [] (Value): {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a
     * return resolution, with the assessed and applied amounts and whether it is applied or
     * waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     *  [] (Value): {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to
     * include in a return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequestInput>;
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     *  [] (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in
     * a return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /** minLength: 1. */
    "return_id": string;
})
    & (({
    /** minItems: 1. */
    "line_items": unknown;
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". */
    "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
})
    & ({
    "corrects_return_resolution_id"?: never;
}));
/** The request body for: Create return resolution. */
export type CreateReturnResolutionRequest = ({
    /**
     *  [] (Value): {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /** minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     *  [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and quantity to include
     * in a return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     *  [] (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a
     * return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
})
    & ((Exclude<CreateReturnResolutionRequestStandard & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionRequestCorrection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `correction` variant of `CreateReturnResolutionRequest`. */
export type CreateReturnResolutionRequestCorrection = ({
    /**
     *  [] (Value): {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequest>;
    /** minLength: 1. */
    "corrects_return_resolution_id": string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Value enum: "correction". */
    "resolution_type": "correction" | (string & {});
})
    & (({
    /** minItems: 1. */
    "adjustments": unknown;
    /** Value enum: "correction". */
    "resolution_type"?: unknown;
    /** minLength: 1. */
    "corrects_return_resolution_id": string;
}));
/** The `correction` variant of `CreateReturnResolutionRequest`. */
export type CreateReturnResolutionRequestCorrectionInput = ({
    /**
     *  [] (Value): {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a
     * return resolution, with the assessed and applied amounts and whether it is applied or
     * waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequestInput>;
    /** minLength: 1. */
    "corrects_return_resolution_id": string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Value enum: "correction". */
    "resolution_type": "correction";
})
    & (({
    /** minItems: 1. */
    "adjustments": unknown;
    /** Value enum: "correction". */
    "resolution_type"?: "correction";
    /** minLength: 1. */
    "corrects_return_resolution_id": string;
})
    & (({
    "line_items"?: never;
})
    & ({
    "replacement_line_items"?: never;
})
    & ({
    "pricing_basis"?: never;
})));
/** The request body for: Create return resolution. */
export type CreateReturnResolutionRequestInput = ({
    /**
     *  [] (Value): {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a
     * return resolution, with the assessed and applied amounts and whether it is applied or
     * waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /** minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     *  [] (Value): {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to
     * include in a return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     *  [] (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in
     * a return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction";
})
    & ((Exclude<CreateReturnResolutionRequestStandardInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionRequestCorrectionInput & object, readonly unknown[]>));
