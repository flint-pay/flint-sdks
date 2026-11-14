import type { ImageRequest, ImageRequestInput } from './types-28.js';
import type { MetadataPatchRequest, MetadataPatchRequestInput } from './types-38.js';
import type { Dimensions, DimensionsRequestInput } from './types-23.js';
import type { GiftCardProductConfiguration, GiftCardProductConfigurationRequestInput } from './types-27.js';
import type { InventoryItemCreateRequest, InventoryItemCreateRequestInput } from './types-29.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type {
    ProductVariantSelectedOptionRequest,
    ProductVariantSelectedOptionRequestInput,
    PromotionApplicationMethodPatch,
    PromotionApplicationMethodPatchInput
} from './types-50.js';
import type {
    QuantityPriceBreak,
    QuantityPriceBreakRequestInput,
    PromotionSchedulePatch,
    PromotionSchedulePatchInput,
    PromotionSettings,
    PromotionSettingsRequestInput
} from './types-52.js';
import type { Weight, WeightRequestInput } from './types-70.js';
import type {
    PromotionCombinesWithPatch,
    PromotionExclusivityPatch,
    PromotionRuleGroupRequest,
    PromotionCombinesWithPatchInput,
    PromotionExclusivityPatchInput,
    PromotionRuleGroupRequestInput
} from './types-51.js';
import type { GetReturnResponse, GetReturnPolicyResponse, GetReturnReasonResponse, GetReturnResolutionResponse } from './types-26.js';
import type {
    LineItemFulfillmentRequest,
    LineItemFulfillmentRequestModelInput,
    LegalSettingsRequest,
    LegalSettingsRequestInput
} from './types-35.js';
import type { RiskPredicateNodeRequest, RiskPredicateNodeRequestInput } from './types-58.js';
import type { BrandingSettingsRequest, BrandingSettingsRequestInput } from './types-1.js';
import type { CheckoutSettings, CheckoutSettingsRequestInput } from './types-6.js';
import type {
    CustomerAccountSettings,
    CustomerEmailDeliverySettings,
    CustomerAccountSettingsRequestInput,
    CustomerEmailDeliverySettingsRequestInput
} from './types-15.js';
import type { FulfillmentSettings, FulfillmentSettingsRequestInput } from './types-25.js';
import type { InventorySettingsRequest, InventorySettingsRequestInput } from './types-30.js';
import type { InvoiceSettingsPatch, InvoiceSettingsPatchInput } from './types-34.js';
import type { PaymentLimitSettingsPatch, PaymentLimitSettingsPatchInput } from './types-45.js';
import type { PaymentSettingsPatch, PaymentSettingsPatchInput } from './types-47.js';
import type { SubscriptionSettings, SubscriptionSettingsRequestInput } from './types-63.js';
import type { TaxIdentityPatch, TaxSettingsRequest, TaxIdentityPatchInput, TaxSettingsRequestInput } from './types-65.js';
import type { TippingSettingsPatch, TippingSettingsPatchInput } from './types-66.js';
import type { SubscriptionIntervalOption, SubscriptionIntervalOptionRequestInput } from './types-62.js';
import type {
    OrderLineItemModifierRequest,
    OrderLineItemTax,
    OrderLineItemModifierRequestModelInput,
    OrderLineItemTaxRequestInput
} from './types-41.js';
/**
 * A product option to keep or add when updating a product, with its name, position, status, and
 * values.
 */
export type UpdateProductOptionRequest = {
    /**
     * Value of this option given to every active variant that has no active value for it after
     * this request, such as when you add an option to a product that already has active variants.
     * It must match one of this option's active `values`, ignoring case and surrounding
     * whitespace. Not stored; the variants keep the value. minLength: 1. maxLength: 255.
     */
    "existing_variant_value"?: string;
    /**
     * Complete caller-owned metadata for this option. Retained options are replaced as members of
     * the options array, so omitting metadata, sending null, or sending {} clears it. A
     * null-valued key is omitted from the replacement. Values can't be empty strings. Keys
     * starting with flint_ are reserved and cannot be written through the public API. * (Value):
     * string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Option name, such as Size or Color. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Identifier of an existing option to retain. Omit it to create a new option. minLength: 1.
     * pattern: ^opt_[0-9A-HJKMNP-TV-Z]{26}$. Example: "opt_01KEZF7C008R5Q9BG9B4B4KQH8".
     */
    "option_id"?: string;
    /**
     * Display order among the product's options, starting at zero. Defaults to the option's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the option is active or inactive. Active variants must select an active value for
     * every active option. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Values offered for this option, such as Small, Medium, and Large for Size. [] (Value):
     * {@link UpdateProductOptionValueRequest}. A value to keep or add on a product option when
     * updating a product, with its position and status.
     */
    "values"?: Array<UpdateProductOptionValueRequest>;
};
/**
 * A product option to keep or add when updating a product, with its name, position, status, and
 * values.
 */
export type UpdateProductOptionRequestInput = {
    /**
     * Value of this option given to every active variant that has no active value for it after
     * this request, such as when you add an option to a product that already has active variants.
     * It must match one of this option's active `values`, ignoring case and surrounding
     * whitespace. Not stored; the variants keep the value. minLength: 1. maxLength: 255.
     */
    "existing_variant_value"?: string;
    /**
     * Complete caller-owned metadata for this option. Retained options are replaced as members of
     * the options array, so omitting metadata, sending null, or sending {} clears it. A
     * null-valued key is omitted from the replacement. Values can't be empty strings. Keys
     * starting with flint_ are reserved and cannot be written through the public API. * (Value):
     * string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Option name, such as Size or Color. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Identifier of an existing option to retain. Omit it to create a new option. minLength: 1.
     * pattern: ^opt_[0-9A-HJKMNP-TV-Z]{26}$. Example: "opt_01KEZF7C008R5Q9BG9B4B4KQH8".
     */
    "option_id"?: string;
    /**
     * Display order among the product's options, starting at zero. Defaults to the option's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the option is active or inactive. Active variants must select an active value for
     * every active option. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Values offered for this option, such as Small, Medium, and Large for Size. [] (Value):
     * {@link UpdateProductOptionValueRequestInput}. A value to keep or add on a product option
     * when updating a product, with its position and status.
     */
    "values"?: Array<UpdateProductOptionValueRequestInput>;
};
/**
 * A value to keep or add on a product option when updating a product, with its position and
 * status.
 */
export type UpdateProductOptionValueRequest = {
    /**
     * Complete caller-owned metadata for this option value. Retained option values are replaced as
     * members of the options array, so omitting metadata, sending null, or sending {} clears it. A
     * null-valued key is omitted from the replacement. Values can't be empty strings. Keys
     * starting with flint_ are reserved and cannot be written through the public API. * (Value):
     * string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Identifier of an existing option value to retain. Omit it to create a new value. minLength:
     * 1. pattern: ^optv_[0-9A-HJKMNP-TV-Z]{26}$. Example: "optv_01KEZF7C0078SVZ1T7PVRXQK7F".
     */
    "option_value_id"?: string;
    /**
     * Display order among the option's values, starting at zero. Defaults to the value's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the value is active or inactive. Active variants cannot newly select an inactive
     * value. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Option value shown to buyers, such as Medium. minLength: 1. maxLength: 255. */
    "value": string;
};
/**
 * A value to keep or add on a product option when updating a product, with its position and
 * status.
 */
export type UpdateProductOptionValueRequestInput = {
    /**
     * Complete caller-owned metadata for this option value. Retained option values are replaced as
     * members of the options array, so omitting metadata, sending null, or sending {} clears it. A
     * null-valued key is omitted from the replacement. Values can't be empty strings. Keys
     * starting with flint_ are reserved and cannot be written through the public API. * (Value):
     * string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Identifier of an existing option value to retain. Omit it to create a new value. minLength:
     * 1. pattern: ^optv_[0-9A-HJKMNP-TV-Z]{26}$. Example: "optv_01KEZF7C0078SVZ1T7PVRXQK7F".
     */
    "option_value_id"?: string;
    /**
     * Display order among the option's values, starting at zero. Defaults to the value's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the value is active or inactive. Active variants cannot newly select an inactive
     * value. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Option value shown to buyers, such as Medium. minLength: 1. maxLength: 255. */
    "value": string;
};
/**
 * Send only fields to change. Omitted fields keep their stored values. null clears nullable
 * fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE.
 * Metadata merges by key, with at most 50 keys after merging. minProperties: 1.
 */
export type UpdateProductRequest = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /** Send null to clear it. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "default_variant_id"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Resource version last read by the caller. Required when options or images is present.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to
     * a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /** Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Replaces all product options and values atomically. Include existing option_id and
     * option_value_id values to retain members. Omitted members are archived. Null is not
     * accepted. [] (Value): {@link UpdateProductOptionRequest}. A product option to keep or add
     * when updating a product, with its name, position, status, and values.
     */
    "options"?: Array<UpdateProductOptionRequest>;
    /**
     * Kind of goods or service this product represents. Changing to digital fills variants' unset
     * line_item_tax_category with digital_goods and advances their versions. Explicit categories
     * are preserved. Returns 409 ACTION_NOT_ALLOWED with reason mixed_tax_treatment and
     * blocking_resources if a containing bundle would become mixed. Value enum: "physical",
     * "service", "fee", "digital", "gift_card".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
});
/**
 * Send only fields to change. Omitted fields keep their stored values. null clears nullable
 * fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE.
 * Metadata merges by key, with at most 50 keys after merging. minProperties: 1.
 */
export type UpdateProductRequestInput = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /** Send null to clear it. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "default_variant_id"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Resource version last read by the caller. Required when options or images is present.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value):
     * string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /** Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Replaces all product options and values atomically. Include existing option_id and
     * option_value_id values to retain members. Omitted members are archived. Null is not
     * accepted. [] (Value): {@link UpdateProductOptionRequestInput}. A product option to keep or
     * add when updating a product, with its name, position, status, and values.
     */
    "options"?: Array<UpdateProductOptionRequestInput>;
    /**
     * Kind of goods or service this product represents. Changing to digital fills variants' unset
     * line_item_tax_category with digital_goods and advances their versions. Explicit categories
     * are preserved. Returns 409 ACTION_NOT_ALLOWED with reason mixed_tax_treatment and
     * blocking_resources if a containing bundle would become mixed. Value enum: "physical",
     * "service", "fee", "digital", "gift_card".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | "gift_card";
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
});
/**
 * Send only fields to change. Omitted fields keep their stored values. null clears nullable
 * fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE.
 * Metadata merges by key, with at most 50 keys after merging. minProperties: 1.
 */
export type UpdateProductVariantRequest = ({
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /**
     * Omit to preserve the assignment. Send null to clear it. Clearing a digital or service
     * variant restores not_applicable with no delivery requirement and never selects a default.
     * Assigned profiles must be required/manual with allowed_types exactly [digital] or [service],
     * matching the product type. Existing order delivery snapshots do not change. minLength: 1.
     * Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id"?: string | null;
    /**
     * Resource version last read by the caller. Required when images is present. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Replaces the complete gift card configuration. Omission preserves it. Null is not accepted.
     * Include expected_version to reject a concurrent variant change. Gift card settings on a
     * product variant: its `face_value_money`, price mode (face value or discounted), and bounds
     * for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfiguration;
    /**
     * Replaces the authored variant gallery atomically. Send [] to clear it and resume
     * product-image inheritance. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An
     * image you supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * New inventory item to create and track for this variant. Send either inventory_item or
     * inventory_item_id. Inventory item details you supply when creating an inventory item for a
     * product variant: `name`, `sku`, `barcode`, and metadata.
     */
    "inventory_item"?: InventoryItemCreateRequest;
    /**
     * Inventory item tracked by this variant. Send null to stop tracking inventory. minLength: 1.
     * Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: string | null;
    /**
     * Flint line-item tax category to store. Send null to clear it and use the merchant default.
     * Returns 409 ACTION_NOT_ALLOWED with reason mixed_tax_treatment and blocking_resources if a
     * containing bundle would become mixed. Value enum: "general", "physical_goods",
     * "digital_goods", "software", "saas", "services", "professional_services", "food",
     * "prepared_food", "clothing", "medical_goods", "admission", null.
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
        | null
        | (string & {})
        | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to
     * a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /** Display order among the product's variants, starting at zero. Format: int32. */
    "position"?: number;
    /**
     * Complete array of up to 10 quantity price breaks. Replaces the whole array; [] clears it and
     * omission preserves it on update. Minimum quantities start at 2 and strictly increase. Unit
     * prices strictly decrease from the base unit price and use its currency. Gift card variants
     * reject a nonempty array. null is invalid. Include expected_version on update to reject a
     * concurrent variant change. maxItems: 10. [] (Value): {@link QuantityPriceBreak}. A net unit
     * price that applies when one catalog line reaches minimum_quantity.
     */
    "quantity_price_breaks"?: Array<QuantityPriceBreak>;
    /**
     * Calendar release date in YYYY-MM-DD format. Omit to preserve it; send null to clear it.
     * Existing order line dates do not change. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "release_date"?: string | null;
    /**
     * Option name and value selections for this variant. When present on an update, replaces the
     * entire selection. Omit to leave unchanged. Select one active value for every active option.
     * null is invalid. [] (Value): {@link ProductVariantSelectedOptionRequest}. An option name and
     * value you choose to identify a product variant, such as Size and Large.
     */
    "selected_options"?: Array<ProductVariantSelectedOptionRequest>;
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "sku"?: string | null;
    /**
     * Whether the variant is active or inactive. An inactive variant cannot be sold. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Replaces the complete object. Send null to clear it. anyOf[1] (Value): {@link Dimensions}.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`. anyOf[2]
     * (Value): null.
     */
    "unit_dimensions"?: ((Dimensions) | (null));
    /**
     * Base unit price in the currency's smallest unit. It applies below the first quantity price
     * break. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Replaces the complete object. Send null to clear it. anyOf[1] (Value): {@link Weight}. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * anyOf[2] (Value): null.
     */
    "unit_weight"?: ((Weight) | (null));
});
/**
 * Send only fields to change. Omitted fields keep their stored values. null clears nullable
 * fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE.
 * Metadata merges by key, with at most 50 keys after merging. minProperties: 1.
 */
export type UpdateProductVariantRequestInput = ({
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /**
     * Omit to preserve the assignment. Send null to clear it. Clearing a digital or service
     * variant restores not_applicable with no delivery requirement and never selects a default.
     * Assigned profiles must be required/manual with allowed_types exactly [digital] or [service],
     * matching the product type. Existing order delivery snapshots do not change. minLength: 1.
     * Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id"?: string | null;
    /**
     * Resource version last read by the caller. Required when images is present. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Replaces the complete gift card configuration. Omission preserves it. Null is not accepted.
     * Include expected_version to reject a concurrent variant change. Gift card settings on a
     * product variant: its `face_value_money`, price mode (face value or discounted), and bounds
     * for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfigurationRequestInput;
    /**
     * Replaces the authored variant gallery atomically. Send [] to clear it and resume
     * product-image inheritance. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}.
     * An image you supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * New inventory item to create and track for this variant. Send either inventory_item or
     * inventory_item_id. Inventory item details you supply when creating an inventory item for a
     * product variant: `name`, `sku`, `barcode`, and metadata.
     */
    "inventory_item"?: InventoryItemCreateRequestInput;
    /**
     * Inventory item tracked by this variant. Send null to stop tracking inventory. minLength: 1.
     * Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: string | null;
    /**
     * Flint line-item tax category to store. Send null to clear it and use the merchant default.
     * Returns 409 ACTION_NOT_ALLOWED with reason mixed_tax_treatment and blocking_resources if a
     * containing bundle would become mixed. Value enum: "general", "physical_goods",
     * "digital_goods", "software", "saas", "services", "professional_services", "food",
     * "prepared_food", "clothing", "medical_goods", "admission", null.
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
        | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value):
     * string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /** Display order among the product's variants, starting at zero. Format: int32. */
    "position"?: number;
    /**
     * Complete array of up to 10 quantity price breaks. Replaces the whole array; [] clears it and
     * omission preserves it on update. Minimum quantities start at 2 and strictly increase. Unit
     * prices strictly decrease from the base unit price and use its currency. Gift card variants
     * reject a nonempty array. null is invalid. Include expected_version on update to reject a
     * concurrent variant change. maxItems: 10. [] (Value): {@link QuantityPriceBreakRequestInput}.
     * A net unit price that applies when one catalog line reaches minimum_quantity.
     */
    "quantity_price_breaks"?: Array<QuantityPriceBreakRequestInput>;
    /**
     * Calendar release date in YYYY-MM-DD format. Omit to preserve it; send null to clear it.
     * Existing order line dates do not change. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "release_date"?: string | null;
    /**
     * Option name and value selections for this variant. When present on an update, replaces the
     * entire selection. Omit to leave unchanged. Select one active value for every active option.
     * null is invalid. [] (Value): {@link ProductVariantSelectedOptionRequestInput}. An option
     * name and value you choose to identify a product variant, such as Size and Large.
     */
    "selected_options"?: Array<ProductVariantSelectedOptionRequestInput>;
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "sku"?: string | null;
    /**
     * Whether the variant is active or inactive. An inactive variant cannot be sold. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Replaces the complete object. Send null to clear it. anyOf[1] (Value): {@link
     * DimensionsRequestInput}. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`. anyOf[2] (Value): null.
     */
    "unit_dimensions"?: ((DimensionsRequestInput) | (null));
    /**
     * Base unit price in the currency's smallest unit. It applies below the first quantity price
     * break. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Replaces the complete object. Send null to clear it. anyOf[1] (Value): {@link
     * WeightRequestInput}. A weight value in grams, kilograms, ounces, or pounds, used in delivery
     * profile configuration. anyOf[2] (Value): null.
     */
    "unit_weight"?: ((WeightRequestInput) | (null));
});
/** The request body for: Update promotion code. minProperties: 1. */
export type UpdatePromotionCodeRequest = {
    /**
     * Only this identified customer can redeem the code. The customer must belong to the same
     * merchant and environment. A checkout may use its merchant-named or email-verified customer;
     * a typed email does not identify a customer. Omit to preserve the binding; send a customer ID
     * to bind or rebind the code, or null to remove the binding. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string | null;
    /**
     * Promotion code version last read by the caller. Optional for updates. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Absolute RFC3339 expiry timestamp. Omission keeps the stored value; null clears it. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | null;
    /**
     * Maximum number of times this code can be redeemed. Send null to remove the redemption limit.
     * Format: int64.
     */
    "max_uses"?: number | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** Lifecycle status: active or inactive. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * IANA zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires. Send null to clear it. minLength:
     * 1. maxLength: 255.
     */
    "timezone"?: string | null;
};
/** The request body for: Update promotion code. minProperties: 1. */
export type UpdatePromotionCodeRequestInput = {
    /**
     * Only this identified customer can redeem the code. The customer must belong to the same
     * merchant and environment. A checkout may use its merchant-named or email-verified customer;
     * a typed email does not identify a customer. Omit to preserve the binding; send a customer ID
     * to bind or rebind the code, or null to remove the binding. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string | null;
    /**
     * Promotion code version last read by the caller. Optional for updates. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Absolute RFC3339 expiry timestamp. Omission keeps the stored value; null clears it. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date | null;
    /**
     * Maximum number of times this code can be redeemed. Send null to remove the redemption limit.
     * Format: int64.
     */
    "max_uses"?: number | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /** Lifecycle status: active or inactive. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /**
     * IANA zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires. Send null to clear it. minLength:
     * 1. maxLength: 255.
     */
    "timezone"?: string | null;
};
/** The request body for: Update promotion. minProperties: 1. */
export type UpdatePromotionRequest = ({
    /**
     * Fields of the discount effect to change. Omitted fields keep their stored values. Send only
     * application_method fields to change. Omitted fields keep their stored values. Sending a
     * different type replaces the effect with the supplied effect fields; allocation,
     * calculation_basis, recurrence, and discounted_item_rules are preserved unless sent, and
     * discounted_item_rules: null clears the stored rules. Money, recurrence, currency_options,
     * and each rule group are replaced whole when present. null clears only nullable fields.
     * discounted_item_rules cannot be null for buy_x_get_y. minProperties: 1.
     */
    "application_method"?: PromotionApplicationMethodPatch;
    /**
     * Send only the classes to change. Omitted classes keep their current value. null, an empty
     * object, and null classes are invalid. Change which promotion discount classes this promotion
     * can combine with. Omitted classes keep their current values. minProperties: 1.
     */
    "combines_with"?: PromotionCombinesWithPatch;
    /**
     * Description of the promotion for your own records. Send null to clear it. minLength: 1.
     * maxLength: 500.
     */
    "description"?: string | null;
    /** Promotion discount class. Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**
     * Buyer-facing promotion name shown in checkout and order discount surfaces. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Replaces the promotion's eligibility conditions. Send null to remove all eligibility
     * conditions. anyOf[1] (Value): {@link PromotionRuleGroupRequest}. A rule group is an object
     * with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays,
     * empty groups, and a rules key are invalid. Omit the field for no rules, or send null where
     * the field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. anyOf[2] (Value):
     * null.
     */
    "eligibility_rules"?: ((PromotionRuleGroupRequest) | (null) | (unknown));
    /**
     * Fields of the exclusivity group and priority to change. Send null to remove the promotion
     * from its exclusivity group. anyOf[1] (Value): {@link PromotionExclusivityPatch}. Send only
     * fields to change. Omitted fields keep their stored values. Send priority 0 to reset it. An
     * empty object is invalid. minProperties: 1. anyOf[2] (Value): null.
     */
    "exclusivity"?: ((PromotionExclusivityPatch) | (null));
    /**
     * Resource version last read by the caller. Required when application_method or
     * eligibility_rules is present, including an empty collection or a supported null clear.
     * Optional for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Send null to
     * remove the redemption limit. Format: int64.
     */
    "max_uses"?: number | null;
    /**
     * Maximum reserved and redeemed uses per identified customer across every code and automatic
     * or ID-based application. Checked atomically when payment starts. Failed, canceled, or
     * expired attempts release their reservation; refunds do not restore uses. Counts only within
     * the same merchant and environment; live and test mode are separate. Without an identified
     * customer, returns 409 PROMOTION_DECLINED with reason customer_required. Omit to keep the
     * current limit; send null to remove it. Format: int64. minimum: 1.
     */
    "max_uses_per_customer"?: number | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Internal promotion name for dashboards, searching, and reporting. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Fields of the promotion schedule to change. Send null to remove the schedule. anyOf[1]
     * (Value): {@link PromotionSchedulePatch}. Send only fields to change. Omitted fields keep
     * their stored values. null clears nullable subfields. An empty object is invalid.
     * minProperties: 1. anyOf[2] (Value): null.
     */
    "schedule"?: ((PromotionSchedulePatch) | (null));
    /**
     * Lifecycle status to set: active or inactive. Archived promotions cannot be updated. Value
     * enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
});
/** The request body for: Update promotion. minProperties: 1. */
export type UpdatePromotionRequestInput = ({
    /**
     * Fields of the discount effect to change. Omitted fields keep their stored values. Send only
     * application_method fields to change. Omitted fields keep their stored values. Sending a
     * different type replaces the effect with the supplied effect fields; allocation,
     * calculation_basis, recurrence, and discounted_item_rules are preserved unless sent, and
     * discounted_item_rules: null clears the stored rules. Money, recurrence, currency_options,
     * and each rule group are replaced whole when present. null clears only nullable fields.
     * discounted_item_rules cannot be null for buy_x_get_y. minProperties: 1.
     */
    "application_method"?: PromotionApplicationMethodPatchInput;
    /**
     * Send only the classes to change. Omitted classes keep their current value. null, an empty
     * object, and null classes are invalid. Change which promotion discount classes this promotion
     * can combine with. Omitted classes keep their current values. minProperties: 1.
     */
    "combines_with"?: PromotionCombinesWithPatchInput;
    /**
     * Description of the promotion for your own records. Send null to clear it. minLength: 1.
     * maxLength: 500.
     */
    "description"?: string | null;
    /** Promotion discount class. Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /**
     * Buyer-facing promotion name shown in checkout and order discount surfaces. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Replaces the promotion's eligibility conditions. Send null to remove all eligibility
     * conditions. anyOf[1] (Value): {@link PromotionRuleGroupRequestInput}. A rule group is an
     * object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups.
     * Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null
     * where the field is clearable. Responses list rules before nested groups. Under any, a nested
     * group containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. anyOf[2] (Value):
     * null.
     */
    "eligibility_rules"?: ((PromotionRuleGroupRequestInput) | (null));
    /**
     * Fields of the exclusivity group and priority to change. Send null to remove the promotion
     * from its exclusivity group. anyOf[1] (Value): {@link PromotionExclusivityPatchInput}. Send
     * only fields to change. Omitted fields keep their stored values. Send priority 0 to reset it.
     * An empty object is invalid. minProperties: 1. anyOf[2] (Value): null.
     */
    "exclusivity"?: ((PromotionExclusivityPatchInput) | (null));
    /**
     * Resource version last read by the caller. Required when application_method or
     * eligibility_rules is present, including an empty collection or a supported null clear.
     * Optional for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Send null to
     * remove the redemption limit. Format: int64.
     */
    "max_uses"?: number | null;
    /**
     * Maximum reserved and redeemed uses per identified customer across every code and automatic
     * or ID-based application. Checked atomically when payment starts. Failed, canceled, or
     * expired attempts release their reservation; refunds do not restore uses. Counts only within
     * the same merchant and environment; live and test mode are separate. Without an identified
     * customer, returns 409 PROMOTION_DECLINED with reason customer_required. Omit to keep the
     * current limit; send null to remove it. Format: int64. minimum: 1.
     */
    "max_uses_per_customer"?: number | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Internal promotion name for dashboards, searching, and reporting. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Fields of the promotion schedule to change. Send null to remove the schedule. anyOf[1]
     * (Value): {@link PromotionSchedulePatchInput}. Send only fields to change. Omitted fields
     * keep their stored values. null clears nullable subfields. An empty object is invalid.
     * minProperties: 1. anyOf[2] (Value): null.
     */
    "schedule"?: ((PromotionSchedulePatchInput) | (null));
    /**
     * Lifecycle status to set: active or inactive. Archived promotions cannot be updated. Value
     * enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
});
/** A sparse reader update. A reader's type and location never change. minProperties: 1. */
export type UpdateReaderRequest = {
    /**
     * The device the reader takes payments for. `null` clears it. Naming a device needs
     * `accounts.devices.read` as well. minLength: 1. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string | null;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Keys to set, merged into the reader's metadata. A key with an empty value is removed; `null`
     * clears all metadata. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a
     * caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** Your label for the reader. Can't be null. minLength: 1. maxLength: 255. */
    "name"?: string;
};
/** A sparse reader update. A reader's type and location never change. minProperties: 1. */
export type UpdateReaderRequestInput = {
    /**
     * The device the reader takes payments for. `null` clears it. Naming a device needs
     * `accounts.devices.read` as well. minLength: 1. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string | null;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Keys to set, merged into the reader's metadata. A key with an empty value is removed; `null`
     * clears all metadata. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a
     * caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /** Your label for the reader. Can't be null. minLength: 1. maxLength: 255. */
    "name"?: string;
};
/** The request body for: Update refund. minProperties: 1. */
export type UpdateRefundRequest = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
};
/** The request body for: Update refund. minProperties: 1. */
export type UpdateRefundRequestInput = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
};
/** The request body for: Update return line item. */
export type UpdateReturnLineItemRequest = {
    /** Send null to clear it. minLength: 1. */
    "buyer_note"?: string | null;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity"?: number;
    /**
     * Send null to clear it. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", null.
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | null | (string & {}) | null;
    /**
     * ID of the return reason for this line. The reason must be active. minLength: 1. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id"?: string;
};
/** The request body for: Update return line item. */
export type UpdateReturnLineItemRequestInput = {
    /** Send null to clear it. minLength: 1. */
    "buyer_note"?: string | null;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity"?: number;
    /**
     * Send null to clear it. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", null.
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | null;
    /**
     * ID of the return reason for this line. The reason must be active. minLength: 1. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id"?: string;
};
export type UpdateReturnLineItemResponse = GetReturnResponse;
/** The request body for: Update return policy. */
export type UpdateReturnPolicyRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** Name of the policy, from 1 to 255 characters. minLength: 1. */
    "name"?: string;
    /**
     * Set `active` to evaluate the policy or `inactive` to stop. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Update return policy. */
export type UpdateReturnPolicyRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /** Name of the policy, from 1 to 255 characters. minLength: 1. */
    "name"?: string;
    /**
     * Set `active` to evaluate the policy or `inactive` to stop. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
export type UpdateReturnPolicyResponse = GetReturnPolicyResponse;
/** The request body for: Update return reason. */
export type UpdateReturnReasonRequest = ({
    /**
     * Catalog category handles this reason applies to. A reason with categories is suggested, and
     * accepted from a customer session, only for order lines whose product is in one of them. A
     * reason with no categories applies to every line. Not product types or tags: use handles from
     * GET /v1/categories. Repeated handles are dropped. Requires expected_version. maxItems: 100.
     * [] (Value): string. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Description, limited to 2048 bytes after trimming surrounding whitespace. Send null to clear
     * it. minLength: 1.
     */
    "description"?: string | null;
    /**
     * Required when any of these fields is present: category_handles. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /** Whether a Return line with this reason needs a buyer_note. */
    "is_note_required"?: boolean;
    /**
     * Display name, limited to 1 through 255 bytes after trimming surrounding whitespace.
     * minLength: 1.
     */
    "name"?: string;
    /**
     * Set active to offer the reason or inactive to stop offering it. To archive a merchant
     * reason, use DELETE. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
});
/** The request body for: Update return reason. */
export type UpdateReturnReasonRequestInput = ({
    /**
     * Catalog category handles this reason applies to. A reason with categories is suggested, and
     * accepted from a customer session, only for order lines whose product is in one of them. A
     * reason with no categories applies to every line. Not product types or tags: use handles from
     * GET /v1/categories. Repeated handles are dropped. Requires expected_version. maxItems: 100.
     * [] (Value): string. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Description, limited to 2048 bytes after trimming surrounding whitespace. Send null to clear
     * it. minLength: 1.
     */
    "description"?: string | null;
    /**
     * Required when any of these fields is present: category_handles. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /** Whether a Return line with this reason needs a buyer_note. */
    "is_note_required"?: boolean;
    /**
     * Display name, limited to 1 through 255 bytes after trimming surrounding whitespace.
     * minLength: 1.
     */
    "name"?: string;
    /**
     * Set active to offer the reason or inactive to stop offering it. To archive a merchant
     * reason, use DELETE. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
});
export type UpdateReturnReasonResponse = GetReturnReasonResponse;
/** The `bundle` variant of `UpdateReturnReplacementLineItemInput`. */
export type UpdateReturnReplacementLineItemInputBundle = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of an existing replacement line to keep. Leave out to add a new line. minLength: 1.
     * Example: "retrepli_01KEZF7C00F6P8VWG80G0JC8W2".
     */
    "return_replacement_line_item_id"?: string;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle" | (string & {});
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": unknown;
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** The `bundle` variant of `UpdateReturnReplacementLineItemInput`. */
export type UpdateReturnReplacementLineItemInputBundleInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestModelInput;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of an existing replacement line to keep. Leave out to add a new line. minLength: 1.
     * Example: "retrepli_01KEZF7C00F6P8VWG80G0JC8W2".
     */
    "return_replacement_line_item_id"?: string;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle";
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle";
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "name"?: never;
}) & ({
    "fulfillment"?: never;
})));
/** The `custom` variant of `UpdateReturnReplacementLineItemInput`. */
export type UpdateReturnReplacementLineItemInputCustom = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of an existing replacement line to keep. Leave out to add a new line. minLength: 1.
     * Example: "retrepli_01KEZF7C00F6P8VWG80G0JC8W2".
     */
    "return_replacement_line_item_id"?: string;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom" | (string & {});
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": unknown;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name": string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
}));
/** The `custom` variant of `UpdateReturnReplacementLineItemInput`. */
export type UpdateReturnReplacementLineItemInputCustomInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestModelInput;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of an existing replacement line to keep. Leave out to add a new line. minLength: 1.
     * Example: "retrepli_01KEZF7C00F6P8VWG80G0JC8W2".
     */
    "return_replacement_line_item_id"?: string;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom";
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom";
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name": string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestModelInput;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `UpdateReturnReplacementLineItemInput`. */
export type UpdateReturnReplacementLineItemInputVariant = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of an existing replacement line to keep. Leave out to add a new line. minLength: 1.
     * Example: "retrepli_01KEZF7C00F6P8VWG80G0JC8W2".
     */
    "return_replacement_line_item_id"?: string;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant" | (string & {});
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": unknown;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
}));
/** The `variant` variant of `UpdateReturnReplacementLineItemInput`. */
export type UpdateReturnReplacementLineItemInputVariantInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestModelInput;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of an existing replacement line to keep. Leave out to add a new line. minLength: 1.
     * Example: "retrepli_01KEZF7C00F6P8VWG80G0JC8W2".
     */
    "return_replacement_line_item_id"?: string;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant";
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant";
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}) & ({
    "name"?: never;
}) & ({
    "fulfillment"?: never;
})));
/**
 * A replacement item to keep or add when updating a return resolution. Include
 * `return_replacement_line_item_id` to keep an existing one.
 */
export type UpdateReturnReplacementLineItemRequest = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of an existing replacement line to keep. Leave out to add a new line. minLength: 1.
     * Example: "retrepli_01KEZF7C00F6P8VWG80G0JC8W2".
     */
    "return_replacement_line_item_id"?: string;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<UpdateReturnReplacementLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A replacement item to keep or add when updating a return resolution. Include
 * `return_replacement_line_item_id` to keep an existing one.
 */
export type UpdateReturnReplacementLineItemRequestInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestModelInput;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of an existing replacement line to keep. Leave out to add a new line. minLength: 1.
     * Example: "retrepli_01KEZF7C00F6P8VWG80G0JC8W2".
     */
    "return_replacement_line_item_id"?: string;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom";
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<UpdateReturnReplacementLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputCustomInput & object, readonly unknown[]>));
/** The request body for: Update return. minProperties: 1. */
export type UpdateReturnRequestInput = {
    /**
     * Optional version of the Return. A stale value returns VERSION_CONFLICT with the current
     * Return version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
};
/**
 * A fee or credit to keep or add when updating a return resolution. Include
 * `return_resolution_adjustment_id` to update an existing one.
 */
export type UpdateReturnResolutionAdjustmentRequest = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Keep this member ID when updating an existing adjustment. Omit it to create a new
     * adjustment. minLength: 1. Example: "retadj_01KEZF7C00EX1XSCX7WSCDKSZZ".
     */
    "return_resolution_adjustment_id"?: string;
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived".
     */
    "status"?: "applied" | "waived" | (string & {});
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit".
     */
    "value_effect": "deduction" | "credit" | (string & {});
    /**
     * Why the adjustment was waived. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** Detail about `waiver_reason`. minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * A fee or credit to keep or add when updating a return resolution. Include
 * `return_resolution_adjustment_id` to update an existing one.
 */
export type UpdateReturnResolutionAdjustmentRequestInput = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValueInput;
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Keep this member ID when updating an existing adjustment. Omit it to create a new
     * adjustment. minLength: 1. Example: "retadj_01KEZF7C00EX1XSCX7WSCDKSZZ".
     */
    "return_resolution_adjustment_id"?: string;
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived".
     */
    "status"?: "applied" | "waived";
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit".
     */
    "value_effect": "deduction" | "credit";
    /**
     * Why the adjustment was waived. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** Detail about `waiver_reason`. minLength: 1. */
    "waiver_reason_message"?: string;
};
/** A return line and quantity to keep or add when updating a return resolution. */
export type UpdateReturnResolutionLineItemRequest = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of the Return line the resolution covers. minLength: 1. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * ID of an existing resolution line to keep. Leave out to add a new line. minLength: 1.
     * Example: "retresli_01KEZF7C00CR5NCDXRBP9W14CB".
     */
    "return_resolution_line_item_id"?: string;
};
/** A return line and quantity to keep or add when updating a return resolution. */
export type UpdateReturnResolutionLineItemRequestInput = UpdateReturnResolutionLineItemRequest;
/** The request body for: Update return resolution. */
export type UpdateReturnResolutionRequest = ({
    /**
     * Requires expected_version. [] (Value): {@link UpdateReturnResolutionAdjustmentRequest}. A
     * fee or credit to keep or add when updating a return resolution. Include
     * `return_resolution_adjustment_id` to update an existing one.
     */
    "adjustments"?: Array<UpdateReturnResolutionAdjustmentRequest>;
    /**
     * Required when any of these fields is present: line_items, replacement_line_items,
     * adjustments. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Requires expected_version. [] (Value): {@link UpdateReturnResolutionLineItemRequest}. A
     * return line and quantity to keep or add when updating a return resolution.
     */
    "line_items"?: Array<UpdateReturnResolutionLineItemRequest>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Requires expected_version. [] (Value): {@link UpdateReturnReplacementLineItemRequest}. A
     * replacement item to keep or add when updating a return resolution. Include
     * `return_replacement_line_item_id` to keep an existing one.
     */
    "replacement_line_items"?: Array<UpdateReturnReplacementLineItemRequest>;
});
/** The request body for: Update return resolution. */
export type UpdateReturnResolutionRequestInput = ({
    /**
     * Requires expected_version. [] (Value): {@link UpdateReturnResolutionAdjustmentRequestInput}.
     * A fee or credit to keep or add when updating a return resolution. Include
     * `return_resolution_adjustment_id` to update an existing one.
     */
    "adjustments"?: Array<UpdateReturnResolutionAdjustmentRequestInput>;
    /**
     * Required when any of these fields is present: line_items, replacement_line_items,
     * adjustments. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Requires expected_version. [] (Value): {@link UpdateReturnResolutionLineItemRequestInput}. A
     * return line and quantity to keep or add when updating a return resolution.
     */
    "line_items"?: Array<UpdateReturnResolutionLineItemRequestInput>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Requires expected_version. [] (Value): {@link UpdateReturnReplacementLineItemRequestInput}.
     * A replacement item to keep or add when updating a return resolution. Include
     * `return_replacement_line_item_id` to keep an existing one.
     */
    "replacement_line_items"?: Array<UpdateReturnReplacementLineItemRequestInput>;
});
export type UpdateReturnResolutionResponse = GetReturnResolutionResponse;
export type UpdateReturnResponse = GetReturnResponse;
/** The request body for: Update a risk list. minProperties: 1. */
export type UpdateRiskListRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** Name of a merchant-created risk list. It can't be cleared. minLength: 1. */
    "name": string;
};
/** The request body for: Update a risk list. minProperties: 1. */
export type UpdateRiskListRequestInput = UpdateRiskListRequest;
/** The request body for: Update a risk rule. minProperties: 1. */
export type UpdateRiskRuleRequest = ({
    /**
     * What Flint does with a payment the rule matches. Value enum: "allow", "block", "review",
     * "require_3ds".
     */
    "action"?: "allow" | "block" | "review" | "require_3ds" | (string & {});
    /**
     * Your note on what the rule is for. Limited to 512 characters (Unicode code points). Leading
     * and trailing whitespace is trimmed. minLength: 1. maxLength: 512.
     */
    "description"?: string;
    /** Optional risk rule version last read by the caller. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * The condition a payment must meet for the rule to match. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNodeRequest;
    /** Whether the rule runs. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
})
    & (({
    /**
     * What Flint does with a payment the rule matches. Value enum: "allow", "block", "review",
     * "require_3ds".
     */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
})
    | ({
    /**
     * The condition a payment must meet for the rule to match. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeRequest;
})
    | ({
    /**
     * Your note on what the rule is for. Limited to 512 characters (Unicode code points). Leading
     * and trailing whitespace is trimmed. minLength: 1. maxLength: 512.
     */
    "description": string;
})
    | ({
    /** Whether the rule runs. Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
})
    | (Record<string, unknown>));
/** The request body for: Update a risk rule. minProperties: 1. */
export type UpdateRiskRuleRequestInput = ({
    /**
     * What Flint does with a payment the rule matches. Value enum: "allow", "block", "review",
     * "require_3ds".
     */
    "action"?: "allow" | "block" | "review" | "require_3ds";
    /**
     * Your note on what the rule is for. Limited to 512 characters (Unicode code points). Leading
     * and trailing whitespace is trimmed. minLength: 1. maxLength: 512.
     */
    "description"?: string;
    /** Optional risk rule version last read by the caller. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * The condition a payment must meet for the rule to match. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNodeRequestInput;
    /** Whether the rule runs. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
})
    & (({
    /**
     * What Flint does with a payment the rule matches. Value enum: "allow", "block", "review",
     * "require_3ds".
     */
    "action": "allow" | "block" | "review" | "require_3ds";
})
    | ({
    /**
     * The condition a payment must meet for the rule to match. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeRequestInput;
})
    | ({
    /**
     * Your note on what the rule is for. Limited to 512 characters (Unicode code points). Leading
     * and trailing whitespace is trimmed. minLength: 1. maxLength: 512.
     */
    "description": string;
})
    | ({
    /** Whether the rule runs. Value enum: "active", "inactive". */
    "status": "active" | "inactive";
}));
/**
 * Service fulfillment fields to change when updating a fulfillment: scheduled times, completion
 * time, and notes. Send null to clear a field.
 */
export type UpdateServiceFulfillmentDetails = {
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "completed_at"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "notes"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_end_at"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at"?: string | null;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
};
/**
 * Service fulfillment fields to change when updating a fulfillment: scheduled times, completion
 * time, and notes. Send null to clear a field.
 */
export type UpdateServiceFulfillmentDetailsInput = {
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "completed_at"?: string | globalThis.Date | null;
    /** Send null to clear it. minLength: 1. */
    "notes"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_end_at"?: string | globalThis.Date | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at"?: string | globalThis.Date | null;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
};
/** The request body for: Update merchant settings. minProperties: 1. */
export type UpdateSettingsRequest = ({
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * BrandingSettingsRequest}. Branding values to change when updating settings. Send null for a
     * color or `font_family` to clear it. anyOf[2] (Value): null.
     */
    "branding"?: ((BrandingSettingsRequest) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link CheckoutSettings}.
     * Merchant defaults for checkout: delivery methods, expiration, payment options, required
     * contact fields, promotion codes, recovery email, and saved payment details. anyOf[2]
     * (Value): null.
     */
    "checkout"?: ((CheckoutSettings) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. Flint then serves the default Flint-hosted
     * account, and GET /v1/settings omits customer_account. anyOf[1] (Value): {@link
     * CustomerAccountSettings}. Customer account settings: hosted mode, merchant account URL,
     * presentation, route templates, and what buyers may do to their own subscriptions. anyOf[2]
     * (Value): null.
     */
    "customer_account"?: ((CustomerAccountSettings) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * CustomerEmailDeliverySettings}. For each kind of customer email, whether Flint sends it or
     * the merchant sends it. anyOf[2] (Value): null.
     */
    "customer_email_delivery"?: ((CustomerEmailDeliverySettings) | (null));
    /**
     * The Settings.version last read by the caller. Required when tax_identity is present,
     * including null. Stale versions return VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link FulfillmentSettings}.
     * Merchant fulfillment settings, including whether fulfillments require approval
     * (`approval_required`). anyOf[2] (Value): null.
     */
    "fulfillment"?: ((FulfillmentSettings) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * InventorySettingsRequest}. Inventory settings to change: the `low_stock_threshold`, how
     * inventory failures are handled for each order source, and the `default_routing_source` for
     * requests that omit one. anyOf[2] (Value): null.
     */
    "inventory"?: ((InventorySettingsRequest) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link InvoiceSettingsPatch}.
     * Changes to a merchant's invoice settings. Send only the fields to change, and send null on a
     * nullable field to clear it. minProperties: 1. anyOf[2] (Value): null.
     */
    "invoices"?: ((InvoiceSettingsPatch) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link LegalSettingsRequest}.
     * Changes to a merchant's legal settings. Send null on a URL to clear it. anyOf[2] (Value):
     * null.
     */
    "legal"?: ((LegalSettingsRequest) | (null));
    /**
     * Merged by key. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an
     * object to merge by key, set a key to null to remove it, or set metadata to null to clear all
     * caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned
     * metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null
     * value deletes the key, and an empty object makes no change; send null for the whole field to
     * clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput:
     * Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096
     * Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key
     * that does not exist is allowed, so the number of operations is not itself the stored-map
     * limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. Clearing merchant limits preserves Flint support
     * approvals. Cleared maps are omitted from reads. anyOf[1] (Value): {@link
     * PaymentLimitSettingsPatch}. Changes to a merchant's payment amount limits. Each map replaces
     * the existing one, and null clears it. minProperties: 1. anyOf[2] (Value): null.
     */
    "payment_limits"?: ((PaymentLimitSettingsPatch) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Changes the
     * statement text for new payments. Changes to the statement text for new payments.
     */
    "payments"?: PaymentSettingsPatch;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link PromotionSettings}.
     * Merchant promotion settings: whether automatic promotions and codes are enabled, and how
     * many promotions can apply to one order. anyOf[2] (Value): null.
     */
    "promotions"?: ((PromotionSettings) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link SubscriptionSettings}.
     * Subscription settings: the default billing schedule owner, dunning retry days and end
     * action, and the backorder email. anyOf[2] (Value): null.
     */
    "subscriptions"?: ((SubscriptionSettings) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link TaxSettingsRequest}.
     * Tax settings to change when updating settings. Send null for a category to clear it.
     * anyOf[2] (Value): null.
     */
    "tax"?: ((TaxSettingsRequest) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. Legal identity displayed on invoices and credit
     * notes. Requires expected_version whenever present. anyOf[1] (Value): {@link
     * TaxIdentityPatch}. Merchant-provided legal identity displayed on invoices and credit notes.
     * Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU
     * or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not
     * change tax treatment. Tax IDs are an owned collection in display order; replacing the array
     * requires the parent's expected_version. Existing entries retain their document_tax_id; omit
     * an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatch) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link TippingSettingsPatch}.
     * Tipping settings to change when updating settings. Omit a field to keep it; send null to
     * clear a preselected tip. minProperties: 1. anyOf[2] (Value): null.
     */
    "tipping"?: ((TippingSettingsPatch) | (null));
});
/** The request body for: Update merchant settings. minProperties: 1. */
export type UpdateSettingsRequestInput = ({
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * BrandingSettingsRequestInput}. Branding values to change when updating settings. Send null
     * for a color or `font_family` to clear it. anyOf[2] (Value): null.
     */
    "branding"?: ((BrandingSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * CheckoutSettingsRequestInput}. Merchant defaults for checkout: delivery methods, expiration,
     * payment options, required contact fields, promotion codes, recovery email, and saved payment
     * details. anyOf[2] (Value): null.
     */
    "checkout"?: ((CheckoutSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. Flint then serves the default Flint-hosted
     * account, and GET /v1/settings omits customer_account. anyOf[1] (Value): {@link
     * CustomerAccountSettingsRequestInput}. Customer account settings: hosted mode, merchant
     * account URL, presentation, route templates, and what buyers may do to their own
     * subscriptions. anyOf[2] (Value): null.
     */
    "customer_account"?: ((CustomerAccountSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * CustomerEmailDeliverySettingsRequestInput}. For each kind of customer email, whether Flint
     * sends it or the merchant sends it. anyOf[2] (Value): null.
     */
    "customer_email_delivery"?: ((CustomerEmailDeliverySettingsRequestInput) | (null));
    /**
     * The Settings.version last read by the caller. Required when tax_identity is present,
     * including null. Stale versions return VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * FulfillmentSettingsRequestInput}. Merchant fulfillment settings, including whether
     * fulfillments require approval (`approval_required`). anyOf[2] (Value): null.
     */
    "fulfillment"?: ((FulfillmentSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * InventorySettingsRequestInput}. Inventory settings to change: the `low_stock_threshold`, how
     * inventory failures are handled for each order source, and the `default_routing_source` for
     * requests that omit one. anyOf[2] (Value): null.
     */
    "inventory"?: ((InventorySettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * InvoiceSettingsPatchInput}. Changes to a merchant's invoice settings. Send only the fields
     * to change, and send null on a nullable field to clear it. minProperties: 1. anyOf[2]
     * (Value): null.
     */
    "invoices"?: ((InvoiceSettingsPatchInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * LegalSettingsRequestInput}. Changes to a merchant's legal settings. Send null on a URL to
     * clear it. anyOf[2] (Value): null.
     */
    "legal"?: ((LegalSettingsRequestInput) | (null));
    /**
     * Merged by key. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an
     * object to merge by key, set a key to null to remove it, or set metadata to null to clear all
     * caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a
     * caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. Clearing merchant limits preserves Flint support
     * approvals. Cleared maps are omitted from reads. anyOf[1] (Value): {@link
     * PaymentLimitSettingsPatchInput}. Changes to a merchant's payment amount limits. Each map
     * replaces the existing one, and null clears it. minProperties: 1. anyOf[2] (Value): null.
     */
    "payment_limits"?: ((PaymentLimitSettingsPatchInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Changes the
     * statement text for new payments. Changes to the statement text for new payments.
     */
    "payments"?: PaymentSettingsPatchInput;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * PromotionSettingsRequestInput}. Merchant promotion settings: whether automatic promotions
     * and codes are enabled, and how many promotions can apply to one order. anyOf[2] (Value):
     * null.
     */
    "promotions"?: ((PromotionSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * SubscriptionSettingsRequestInput}. Subscription settings: the default billing schedule
     * owner, dunning retry days and end action, and the backorder email. anyOf[2] (Value): null.
     */
    "subscriptions"?: ((SubscriptionSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * TaxSettingsRequestInput}. Tax settings to change when updating settings. Send null for a
     * category to clear it. anyOf[2] (Value): null.
     */
    "tax"?: ((TaxSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. Legal identity displayed on invoices and credit
     * notes. Requires expected_version whenever present. anyOf[1] (Value): {@link
     * TaxIdentityPatchInput}. Merchant-provided legal identity displayed on invoices and credit
     * notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU,
     * GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do
     * not change tax treatment. Tax IDs are an owned collection in display order; replacing the
     * array requires the parent's expected_version. Existing entries retain their document_tax_id;
     * omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatchInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * TippingSettingsPatchInput}. Tipping settings to change when updating settings. Omit a field
     * to keep it; send null to clear a preselected tip. minProperties: 1. anyOf[2] (Value): null.
     */
    "tipping"?: ((TippingSettingsPatchInput) | (null));
});
/** The request body for: Update shipment. minProperties: 1. */
export type UpdateShipmentRequest = {
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: 1.
     */
    "external_system"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
};
/** The request body for: Update shipment. minProperties: 1. */
export type UpdateShipmentRequestInput = {
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: 1.
     */
    "external_system"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
};
/** The request body for: Update subscription line item. minProperties: 1. */
export type UpdateSubscriptionLineItemRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     */
    "quantity"?: number;
    /**
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/** The request body for: Update subscription line item. minProperties: 1. */
export type UpdateSubscriptionLineItemRequestInput = UpdateSubscriptionLineItemRequest;
/** The request body for: Update subscription offer. minProperties: 1. */
export type UpdateSubscriptionOfferRequest = {
    /**
     * Offered billing interval and count pairs. Every option bills the same catalog line prices
     * once per period; changing cadence does not scale prices. minItems: 1. maxItems: 12.
     * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing interval, such
     * as every 2 months, that a plan, offer, or subscription lets buyers choose. Prices of lines
     * that ship are per delivery, and each option charges for all deliveries in its period.
     * Without a delivery cadence there is one delivery per period, so every option bills the same
     * line prices once per period. With a delivery cadence, a longer period bills more deliveries
     * of the lines that ship; other lines bill once per period. For a different price per interval
     * with no delivery cadence, create separate plans.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * The version read before editing. A mismatch returns VERSION_CONFLICT. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Products whose active variants the offer covers, including variants added later. At most
     * 100. Send at least one product or variant. Each product must be active and physical,
     * digital, or a service. A variant can be in only one active offer; an overlap returns `409
     * ALREADY_EXISTS` naming the other offer. maxItems: 100. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * An active promotion with forever recurrence. On PATCH, null removes the discount for new
     * signups; omission keeps it. minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: string | null;
    /** Use active or inactive. Archive the offer with DELETE. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Delivery methods offered at signup. An empty array uses the store's checkout defaults.
     * Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Individual variants the offer covers. At most 100. Send at least one product or variant. A
     * variant can be in only one active offer; an overlap returns `409 ALREADY_EXISTS` naming the
     * other offer. maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
};
/** The request body for: Update subscription offer. minProperties: 1. */
export type UpdateSubscriptionOfferRequestInput = {
    /**
     * Offered billing interval and count pairs. Every option bills the same catalog line prices
     * once per period; changing cadence does not scale prices. minItems: 1. maxItems: 12.
     * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOptionRequestInput}. A billing
     * interval, such as every 2 months, that a plan, offer, or subscription lets buyers choose.
     * Prices of lines that ship are per delivery, and each option charges for all deliveries in
     * its period. Without a delivery cadence there is one delivery per period, so every option
     * bills the same line prices once per period. With a delivery cadence, a longer period bills
     * more deliveries of the lines that ship; other lines bill once per period. For a different
     * price per interval with no delivery cadence, create separate plans.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOptionRequestInput>;
    /**
     * The version read before editing. A mismatch returns VERSION_CONFLICT. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Products whose active variants the offer covers, including variants added later. At most
     * 100. Send at least one product or variant. Each product must be active and physical,
     * digital, or a service. A variant can be in only one active offer; an overlap returns `409
     * ALREADY_EXISTS` naming the other offer. maxItems: 100. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * An active promotion with forever recurrence. On PATCH, null removes the discount for new
     * signups; omission keeps it. minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: string | null;
    /** Use active or inactive. Archive the offer with DELETE. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /**
     * Delivery methods offered at signup. An empty array uses the store's checkout defaults.
     * Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Individual variants the offer covers. At most 100. Send at least one product or variant. A
     * variant can be in only one active offer; an overlap returns `409 ALREADY_EXISTS` naming the
     * other offer. maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
};
/** The `bundle` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputBundle = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
}));
/** The `bundle` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputBundleInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply
     * on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned
     * on the order line item's modifier. Values can't be empty strings. Keys starting with flint_
     * are reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
    /** Value enum: "bundle". */
    "type": "bundle";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})));
/** The `custom` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputCustom = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** minLength: 1. */
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
}));
/** The `custom` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputCustomInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply
     * on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned
     * on the order line item's modifier. Values can't be empty strings. Keys starting with flint_
     * are reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
    /** Value enum: "custom". */
    "type": "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": ("custom") & ("custom");
    /** minLength: 1. */
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputVariant = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
}));
/** The `variant` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputVariantInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply
     * on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned
     * on the order line item's modifier. Values can't be empty strings. Keys starting with flint_
     * are reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
    /** Value enum: "variant". */
    "type": "variant";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})));
/**
 * A line item to keep or add when updating a subscription plan. Include
 * `subscription_plan_line_item_id` to keep an existing one.
 */
export type UpdateSubscriptionPlanLineItemRequest = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & ((Exclude<UpdateSubscriptionPlanLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A line item to keep or add when updating a subscription plan. Include
 * `subscription_plan_line_item_id` to keep an existing one.
 */
export type UpdateSubscriptionPlanLineItemRequestInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply
     * on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned
     * on the order line item's modifier. Values can't be empty strings. Keys starting with flint_
     * are reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & ((Exclude<UpdateSubscriptionPlanLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputCustomInput & object, readonly unknown[]>));
