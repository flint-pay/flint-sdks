import type { AddressRequestInput } from './types-0.js';
import type { ImageRequest, ImageRequestInput } from './types-25.js';
import type { MetadataPatchRequest, MetadataPatchRequestInput, MoneyValue, MoneyValueInput } from './types-35.js';
import type { Dimensions, DimensionsInput } from './types-20.js';
import type { GiftCardProductConfiguration, GiftCardProductConfigurationRequestInput } from './types-24.js';
import type { InventoryItemCreateRequest, InventoryItemCreateRequestInput } from './types-26.js';
import type { ProductVariantSelectedOptionRequest, ProductVariantSelectedOptionRequestInput } from './types-44.js';
import type { Weight, WeightInput } from './types-62.js';
import type {
    PromotionApplicationMethodPatch,
    PromotionCombinesWithPatch,
    PromotionExclusivityPatch,
    PromotionApplicationMethodPatchInput,
    PromotionCombinesWithPatchInput,
    PromotionExclusivityPatchInput
} from './types-45.js';
import type {
    PromotionRuleGroupRequest,
    PromotionSchedulePatch,
    PromotionRuleGroupRequestInput,
    PromotionSchedulePatchInput,
    PromotionSettings,
    ReceiptSettingsRequest,
    PromotionSettingsRequestInput,
    ReceiptSettingsRequestInput
} from './types-46.js';
import type { GetReturnResponse, GetReturnPolicyResponse, GetReturnReasonResponse, GetReturnResolutionResponse } from './types-23.js';
import type { RiskPredicateNode, RiskPredicateNodeInput } from './types-52.js';
import type { BrandingSettingsRequest, BrandingSettingsRequestInput } from './types-1.js';
import type { CheckoutSettings, CheckoutSettingsRequestInput } from './types-5.js';
import type {
    CustomerAccountSettings,
    CustomerEmailDeliverySettings,
    CustomerAccountSettingsRequestInput,
    CustomerEmailDeliverySettingsRequestInput
} from './types-13.js';
import type { FulfillmentSettings, FulfillmentSettingsRequestInput } from './types-22.js';
import type { InventorySettings, InventorySettingsRequestInput, InventoryRoutingSourceRequest } from './types-28.js';
import type { InvoiceSettingsPatch, LegalSettingsRequest, InvoiceSettingsPatchInput, LegalSettingsRequestInput } from './types-32.js';
import type { PaymentLimitSettingsPatch, PaymentLimitSettingsPatchInput } from './types-41.js';
import type { SubscriptionSettings, SubscriptionSettingsRequestInput } from './types-56.js';
import type { TaxIdentityPatch, TaxSettingsRequest, TaxIdentityPatchInput, TaxSettingsRequestInput } from './types-57.js';
import type { TippingSettingsPatch, TippingSettingsPatchInput } from './types-58.js';
import type { SubscriptionIntervalOption, SubscriptionIntervalOptionInput } from './types-55.js';
import type {
    OrderLineItemModifierRequest,
    OrderLineItemTax,
    OrderLineItemModifierRequestInput,
    OrderLineItemTaxInput
} from './types-37.js';
/**
 * Pickup fulfillment fields to change when updating a fulfillment, such as location, pickup
 * window, and curbside details. Send null to clear a field.
 */
export type UpdatePickupFulfillmentDetailsInput = {
    /**
     * Address where the buyer collects the order. anyOf[1] (Value): {@link AddressRequestInput}. A
     * complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none. anyOf[2] (Value): null.
     */
    "address"?: ((AddressRequestInput) | (null));
    /**
     * Instructions specific to curbside handoff. Send null to clear it. minLength: 1. maxLength:
     * 2048.
     */
    "curbside_instructions"?: string | null;
    /**
     * Buyer-reported arrival time for curbside or counter pickup. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "customer_arrived_at"?: string | globalThis.Date | null;
    /**
     * Deadline after which an uncollected pickup should enter merchant review. Send null to clear
     * it. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date | null;
    /**
     * Pickup instructions for the buyer, such as where to go on arrival. Send null to clear it.
     * minLength: 1.
     */
    "instructions"?: string | null;
    /**
     * Name of the store or place where the buyer collects the order. Send null to clear it.
     * minLength: 1.
     */
    "location_name"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "picked_up_at"?: string | globalThis.Date | null;
    /**
     * Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0.
     * maximum: 86400.
     */
    "pickup_window_duration_seconds"?: number | null;
    /**
     * Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "ready_at"?: string | globalThis.Date | null;
    /** minLength: 1. */
    "timezone"?: string;
    /**
     * Buyer vehicle description used for curbside handoff. Send null to clear it. minLength: 1.
     * maxLength: 500.
     */
    "vehicle_description"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date | null;
};
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
     * pattern: ^opt_[0-9A-HJKMNP-TV-Z]{26}$.
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
     * pattern: ^opt_[0-9A-HJKMNP-TV-Z]{26}$.
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
     * 1. pattern: ^optv_[0-9A-HJKMNP-TV-Z]{26}$.
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
     * 1. pattern: ^optv_[0-9A-HJKMNP-TV-Z]{26}$.
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
 * Metadata merges by key, with at most 50 keys after merging.
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
    /** Send null to clear it. minLength: 1. */
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
     * minLength: 1. maxLength: 255.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
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
 * Metadata merges by key, with at most 50 keys after merging.
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
    /** Send null to clear it. minLength: 1. */
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
     * minLength: 1. maxLength: 255.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
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
 * Metadata merges by key, with at most 50 keys after merging.
 */
export type UpdateProductVariantRequest = ({
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "delivery_profile_id"?: string | null;
    /**
     * Resource version last read by the caller. Required when images is present. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
    "modifier_set_id"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /** Display order among the product's variants, starting at zero. Format: int32. */
    "position"?: number;
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
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
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
 * Metadata merges by key, with at most 50 keys after merging.
 */
export type UpdateProductVariantRequestInput = ({
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "delivery_profile_id"?: string | null;
    /**
     * Resource version last read by the caller. Required when images is present. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
    "modifier_set_id"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /** Display order among the product's variants, starting at zero. Format: int32. */
    "position"?: number;
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
     * DimensionsInput}. Package or item dimensions as `length`, `width`, and `height` in the given
     * `unit`. anyOf[2] (Value): null.
     */
    "unit_dimensions"?: ((DimensionsInput) | (null));
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Replaces the complete object. Send null to clear it. anyOf[1] (Value): {@link WeightInput}.
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration. anyOf[2] (Value): null.
     */
    "unit_weight"?: ((WeightInput) | (null));
});
/** The request body for: Update promotion code. */
export type UpdatePromotionCodeRequest = {
    /**
     * Promotion code version last read by the caller. Optional for updates. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Absolute RFC3339 expiry timestamp. Omission keeps the stored value; null clears it. Format:
     * date-time. minLength: 1.
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
/** The request body for: Update promotion code. */
export type UpdatePromotionCodeRequestInput = {
    /**
     * Promotion code version last read by the caller. Optional for updates. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Absolute RFC3339 expiry timestamp. Omission keeps the stored value; null clears it. Format:
     * date-time. minLength: 1.
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
/** The request body for: Update promotion. */
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
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Send null to
     * remove the redemption limit. Format: int64.
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
/** The request body for: Update promotion. */
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
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Send null to
     * remove the redemption limit. Format: int64.
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
/** The request body for: Update refund. */
export type UpdateRefundRequest = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
/** The request body for: Update refund. */
export type UpdateRefundRequestInput = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity"?: number;
    /**
     * Send null to clear it. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", null.
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | null | (string & {}) | null;
    /** minLength: 1. */
    "return_reason_id"?: string;
};
/** The request body for: Update return line item. */
export type UpdateReturnLineItemRequestInput = {
    /** Send null to clear it. minLength: 1. */
    "buyer_note"?: string | null;
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity"?: number;
    /**
     * Send null to clear it. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", null.
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | null;
    /** minLength: 1. */
    "return_reason_id"?: string;
};
export type UpdateReturnLineItemResponse = GetReturnResponse;
/** The request body for: Update return policy. */
export type UpdateReturnPolicyRequest = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "name"?: string;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Update return policy. */
export type UpdateReturnPolicyRequestInput = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "name"?: string;
    /** Value enum: "active", "inactive". */
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
     * minLength: 1. maxLength: 255.
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
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": unknown;
    /** minLength: 1. */
    "bundle_id": string;
}));
/** The `bundle` variant of `UpdateReturnReplacementLineItemInput`. */
export type UpdateReturnReplacementLineItemInputBundleInput = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle";
    /** minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "name"?: never;
})));
/** The `custom` variant of `UpdateReturnReplacementLineItemInput`. */
export type UpdateReturnReplacementLineItemInputCustom = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": unknown;
    /** minLength: 1. */
    "name": string;
}));
/** The `custom` variant of `UpdateReturnReplacementLineItemInput`. */
export type UpdateReturnReplacementLineItemInputCustomInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom";
    /** minLength: 1. */
    "name": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `UpdateReturnReplacementLineItemInput`. */
export type UpdateReturnReplacementLineItemInputVariant = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": unknown;
    /** minLength: 1. */
    "variant_id": string;
}));
/** The `variant` variant of `UpdateReturnReplacementLineItemInput`. */
export type UpdateReturnReplacementLineItemInputVariantInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant";
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}) & ({
    "name"?: never;
})));
/**
 * A replacement item to keep or add when updating a return resolution. Include
 * `return_replacement_line_item_id` to keep an existing one.
 */
export type UpdateReturnReplacementLineItemRequest = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
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
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<UpdateReturnReplacementLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputCustomInput & object, readonly unknown[]>));
/** The request body for: Update return. */
export type UpdateReturnRequestInput = {
    /**
     * Optional version of the Return. A stale value returns VERSION_CONFLICT with the current
     * Return version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
     * Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit",
     * "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "assessed_amount_money": MoneyValue;
    /**
     * Value enum: "return_policy", "inspection_result", "return_shipping_cost",
     * "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "return_line_item_id"?: string;
    /**
     * Keep this member ID when updating an existing adjustment. Omit it to create a new
     * adjustment. minLength: 1.
     */
    "return_resolution_adjustment_id"?: string;
    /** Value enum: "applied", "waived". */
    "status"?: "applied" | "waived" | (string & {});
    /** Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
    /** Value enum: "policy_override", "merchant_review", "customer_service", "other". */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * A fee or credit to keep or add when updating a return resolution. Include
 * `return_resolution_adjustment_id` to update an existing one.
 */
export type UpdateReturnResolutionAdjustmentRequestInput = {
    /**
     * Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit",
     * "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_amount_money": MoneyValueInput;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Value enum: "return_policy", "inspection_result", "return_shipping_cost",
     * "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "return_line_item_id"?: string;
    /**
     * Keep this member ID when updating an existing adjustment. Omit it to create a new
     * adjustment. minLength: 1.
     */
    "return_resolution_adjustment_id"?: string;
    /** Value enum: "applied", "waived". */
    "status"?: "applied" | "waived";
    /** Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit";
    /** Value enum: "policy_override", "merchant_review", "customer_service", "other". */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** minLength: 1. */
    "waiver_reason_message"?: string;
};
/** A return line and quantity to keep or add when updating a return resolution. */
export type UpdateReturnResolutionLineItemRequest = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_line_item_id": string;
    /** minLength: 1. */
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
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
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
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
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
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
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
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
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
/** The request body for: Update a risk list. */
export type UpdateRiskListRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** Name of a merchant-created risk list. It can't be cleared. minLength: 1. */
    "name": string;
};
/** The request body for: Update a risk list. */
export type UpdateRiskListRequestInput = UpdateRiskListRequest;
/** The request body for: Update a risk rule. */
export type UpdateRiskRuleRequest = ({
    /** Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds" | (string & {});
    /** minLength: 1. */
    "description"?: string;
    /** Optional risk rule version last read by the caller. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
     * group of other nodes.
     */
    "predicate"?: RiskPredicateNode;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
})
    & (({
    /** Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
})
    | ({
    /**
     * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
     * group of other nodes.
     */
    "predicate": RiskPredicateNode;
})
    | ({
    /** minLength: 1. */
    "description": string;
})
    | ({
    /** Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
})
    | (Record<string, unknown>));
/** The request body for: Update a risk rule. */
export type UpdateRiskRuleRequestInput = ({
    /** Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds";
    /** minLength: 1. */
    "description"?: string;
    /** Optional risk rule version last read by the caller. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
     * group of other nodes.
     */
    "predicate"?: RiskPredicateNodeInput;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
})
    & (({
    /** Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds";
})
    | ({
    /**
     * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
     * group of other nodes.
     */
    "predicate": RiskPredicateNodeInput;
})
    | ({
    /** minLength: 1. */
    "description": string;
})
    | ({
    /** Value enum: "active", "inactive". */
    "status": "active" | "inactive";
}));
/**
 * Service fulfillment fields to change when updating a fulfillment: scheduled times, completion
 * time, and notes. Send null to clear a field.
 */
export type UpdateServiceFulfillmentDetails = {
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "completed_at"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "notes"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "scheduled_end_at"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "scheduled_start_at"?: string | null;
    /** minLength: 1. */
    "timezone"?: string;
};
/**
 * Service fulfillment fields to change when updating a fulfillment: scheduled times, completion
 * time, and notes. Send null to clear a field.
 */
export type UpdateServiceFulfillmentDetailsInput = {
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "completed_at"?: string | globalThis.Date | null;
    /** Send null to clear it. minLength: 1. */
    "notes"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "scheduled_end_at"?: string | globalThis.Date | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "scheduled_start_at"?: string | globalThis.Date | null;
    /** minLength: 1. */
    "timezone"?: string;
};
/** The request body for: Update merchant settings. */
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
     * Merchant defaults for checkout: custom domain, delivery methods, expiration, payment
     * options, required contact fields, promotion codes, recovery email, and saved payment
     * details. anyOf[2] (Value): null.
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
     * remove every value you set in this section. anyOf[1] (Value): {@link InventorySettings}.
     * Inventory settings: the `low_stock_threshold` and how inventory failures are handled for
     * each order source. anyOf[2] (Value): null.
     */
    "inventory"?: ((InventorySettings) | (null));
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
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link PromotionSettings}.
     * Merchant promotion settings: whether automatic promotions and codes are enabled, and how
     * many promotions can apply to one order. anyOf[2] (Value): null.
     */
    "promotions"?: ((PromotionSettings) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * ReceiptSettingsRequest}. Receipt settings to change when updating settings. Send null for
     * `header_text` or `footer_text` to clear it. anyOf[2] (Value): null.
     */
    "receipts"?: ((ReceiptSettingsRequest) | (null));
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
     * Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display
     * order; replacing the array requires the parent's expected_version. Existing entries retain
     * their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2]
     * (Value): null.
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
/** The request body for: Update merchant settings. */
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
     * CheckoutSettingsRequestInput}. Merchant defaults for checkout: custom domain, delivery
     * methods, expiration, payment options, required contact fields, promotion codes, recovery
     * email, and saved payment details. anyOf[2] (Value): null.
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
     * InventorySettingsRequestInput}. Inventory settings: the `low_stock_threshold` and how
     * inventory failures are handled for each order source. anyOf[2] (Value): null.
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
     * ReceiptSettingsRequestInput}. Receipt settings to change when updating settings. Send null
     * for `header_text` or `footer_text` to clear it. anyOf[2] (Value): null.
     */
    "receipts"?: ((ReceiptSettingsRequestInput) | (null));
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
     * notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in
     * display order; replacing the array requires the parent's expected_version. Existing entries
     * retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.
     * anyOf[2] (Value): null.
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
/** The request body for: Update shipment. */
export type UpdateShipmentRequest = {
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
/** The request body for: Update shipment. */
export type UpdateShipmentRequestInput = {
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
/** The request body for: Update subscription line item. */
export type UpdateSubscriptionLineItemRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     */
    "quantity"?: number;
    /** minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
};
/** The request body for: Update subscription line item. */
export type UpdateSubscriptionLineItemRequestInput = UpdateSubscriptionLineItemRequest;
/** The request body for: Update subscription offer. minProperties: 1. */
export type UpdateSubscriptionOfferRequest = {
    /**
     * minItems: 1. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * The version read before editing. A mismatch returns VERSION_CONFLICT. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255.
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
     * Catalog targets for new signups. At least one product or variant is required. maxItems: 100.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "product_ids"?: Array<string>;
    /**
     * An active promotion with forever recurrence. On PATCH, null removes the discount for new
     * signups; omission keeps it. minLength: 1.
     */
    "promotion_id"?: string | null;
    /** Use active or inactive. Archive the offer with DELETE. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Delivery methods offered at signup. An empty array uses the store's checkout defaults.
     * Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. []
     * (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Catalog targets for new signups. At least one product or variant is required. maxItems: 100.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "variant_ids"?: Array<string>;
};
/** The request body for: Update subscription offer. minProperties: 1. */
export type UpdateSubscriptionOfferRequestInput = {
    /**
     * minItems: 1. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOptionInput}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOptionInput>;
    /**
     * The version read before editing. A mismatch returns VERSION_CONFLICT. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255.
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
     * Catalog targets for new signups. At least one product or variant is required. maxItems: 100.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "product_ids"?: Array<string>;
    /**
     * An active promotion with forever recurrence. On PATCH, null removes the discount for new
     * signups; omission keeps it. minLength: 1.
     */
    "promotion_id"?: string | null;
    /** Use active or inactive. Archive the offer with DELETE. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /**
     * Delivery methods offered at signup. An empty array uses the store's checkout defaults.
     * Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. []
     * (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Catalog targets for new signups. At least one product or variant is required. maxItems: 100.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "variant_ids"?: Array<string>;
};
/** The `bundle` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputBundle = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
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
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** minLength: 1. */
    "bundle_id": string;
}));
/** The `bundle` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputBundleInput = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
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
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "bundle". */
    "type": "bundle";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** minLength: 1. */
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
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
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
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /** minLength: 1. */
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
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
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
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "custom". */
    "type": "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
    /** minLength: 1. */
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
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
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
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** minLength: 1. */
    "variant_id": string;
}));
/** The `variant` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputVariantInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
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
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "variant". */
    "type": "variant";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
    /** minLength: 1. */
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
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
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
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
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
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
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
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<UpdateSubscriptionPlanLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputCustomInput & object, readonly unknown[]>));
/** The request body for: Update subscription plan. */
export type UpdateSubscriptionPlanRequest = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count"?: number;
    /**
     * Omission leaves the choices unchanged. Send [] to reset to the plan’s default billing
     * interval and count. Null is invalid. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout
     * and records it on each new subscription (contract_start_at, contract_end_at). Flint does not
     * stop the buyer from canceling earlier. Format: int32. minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /** Omission leaves this field unchanged. Null clears it. minLength: 1. */
    "description"?: string | null;
    /**
     * A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it
     * at checkout and records it on each new subscription, but never charges it. To collect it,
     * charge the buyer yourself, for example with an order on their saved payment method. Requires
     * contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Resource version last read by the caller. Required when replacing an owned collection.
     * Required when any of these fields is present: images, line_items. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Replaces the plan's routing source. Subscriptions and payment links that already exist keep
     * the source they copied. It can't be cleared. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Replaces all owned plan line items atomically. Requires expected_version. Omission leaves
     * items unchanged; an empty array or null is invalid. Include subscription_plan_line_item_id
     * to retain an item; omit it for a new server-generated ID. Omitted members are removed.
     * Existing subscriptions keep their snapshots. Retained catalog items with the same source
     * keep their catalog snapshot; omitted modifiers keep their recorded choices. minItems: 1. []
     * (Value): {@link UpdateSubscriptionPlanLineItemRequest}. A line item to keep or add when
     * updating a subscription plan. Include `subscription_plan_line_item_id` to keep an existing
     * one.
     */
    "line_items"?: Array<UpdateSubscriptionPlanLineItemRequest>;
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
    /** minLength: 1. */
    "name"?: string;
    /**
     * Omission leaves the choices unchanged. Send [] to reset to [1]. Null is invalid. maxItems:
     * 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "setup_fee_money"?: MoneyValue;
    /**
     * Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED
     * while existing subscriptions keep renewing. Archived plans are read-only and their status is
     * set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Omission leaves the delivery methods unchanged. Send [] to remove all delivery methods. Null
     * is invalid. [] (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /** Format: int32. */
    "trial_period_days"?: number;
});
