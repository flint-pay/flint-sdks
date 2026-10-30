import type { SubscriptionDeliveryRequest, SubscriptionDeliveryRequestInput } from './types-54.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type { ImageRequest, ImageRequestInput } from './types-25.js';
import type { MetadataPatchRequest, MetadataPatchRequestInput } from './types-34.js';
import type {
    ModifierRequest,
    ModifierRequestInput,
    ModifierSetGroupRequest,
    ModifierSetGroupRequestInput,
    MoneyValue,
    MoneyValueInput
} from './types-35.js';
import type { TextModifierConfigPatchRequest, TextModifierConfigPatchRequestInput } from './types-57.js';
import type {
    OrderCalculatedChargeTax,
    OrderCalculatedChargeTaxInput,
    OrderDeliveryDestinationRequest,
    OrderDeliveryDestinationRequestInput,
    OrderInventoryRoutingSourceRequestInput
} from './types-36.js';
import type { CreateOrderTip, CreateOrderTipInput } from './types-9.js';
import type { InventoryRoutingSource, InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-27.js';
import type { OrderTaxUpdateRequest, OrderTaxUpdateRequestInput } from './types-38.js';
import type { Dimensions, DimensionsInput } from './types-20.js';
import type { Weight, WeightInput } from './types-61.js';
import type { PartnerAppPermissionManifestEntry, PartnerAppPermissionManifestEntryRequestInput } from './types-39.js';
import type {
    CheckoutBuyerFields,
    CheckoutPromotionConfig,
    CheckoutBuyerFieldsRequestInput,
    CheckoutPromotionConfigRequestInput
} from './types-4.js';
import type {
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutTaxConfigRequestInput,
    CheckoutTipConfigRequestInput
} from './types-5.js';
import type { LegalSettingsRequest } from './types-32.js';
import type {
    PaymentLinkCustomFieldPatchRequest,
    PaymentLinkCustomTextPatchRequest,
    PaymentLinkEventConfigPatchRequest,
    PaymentLinkCustomFieldPatchRequestInput,
    PaymentLinkCustomTextPatchRequestInput,
    PaymentLinkEventConfigPatchRequestInput,
    PaymentLinkLegalPatchRequestInput
} from './types-41.js';
import type {
    PaymentLinkLineItemPatchRequest,
    PaymentLinkPaymentPatchRequest,
    PaymentLinkRedirectsPatchRequest,
    PaymentLinkThemePatchRequest,
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkPaymentPatchRequestInput,
    PaymentLinkRedirectsPatchRequestInput,
    PaymentLinkThemePatchRequestInput
} from './types-42.js';
import type { GiftCardProductConfiguration, GiftCardProductConfigurationRequestInput } from './types-24.js';
import type { InventoryItemCreateRequest, InventoryItemCreateRequestInput } from './types-26.js';
import type {
    ProductVariantSelectedOptionRequest,
    ProductVariantSelectedOptionRequestInput,
    PromotionApplicationMethodPatch,
    PromotionApplicationMethodPatchInput
} from './types-44.js';
import type {
    PromotionCombinesWithPatch,
    PromotionExclusivityPatch,
    PromotionRuleGroupRequest,
    PromotionSchedulePatch,
    PromotionCombinesWithPatchInput,
    PromotionExclusivityPatchInput,
    PromotionRuleGroupRequestInput,
    PromotionSchedulePatchInput
} from './types-45.js';
import type { GetReturnResponse, GetReturnPolicyResponse, GetReturnReasonResponse } from './types-23.js';
/** The request body for: Update the current buyer profile. minProperties: 1. */
export type UpdateMeRequest = {
    /**
     * The active off_session payment method to use by default. Omit to leave unchanged; null
     * clears it. minLength: 1.
     */
    "default_payment_method_id"?: string | null;
    /**
     * The customer version you read. A different version refuses the update. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /** Send null to clear it. minLength: 1. */
    "name"?: string | null;
    /** E.164 phone number. Send null to remove it. minLength: 1. */
    "phone"?: string | null;
};
/** The request body for: Update the current buyer profile. minProperties: 1. */
export type UpdateMeRequestInput = UpdateMeRequest;
/** The request body for: Swap subscription variant. */
export type UpdateMeSubscriptionLineItemRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id": string;
};
/** The request body for: Swap subscription variant. */
export type UpdateMeSubscriptionLineItemRequestInput = UpdateMeSubscriptionLineItemRequest;
/** The request body for: Update subscription. */
export type UpdateMeSubscriptionRequest = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /** Value enum: false. */
    "cancel_at_period_end"?: boolean;
    /**
     * The delivery preference to set on a subscription: delivery method, type, destination, and
     * recipient.
     */
    "delivery"?: SubscriptionDeliveryRequest;
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** minLength: 1. */
    "payment_method_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */
    "quantity"?: number;
});
/** The request body for: Update subscription. */
export type UpdateMeSubscriptionRequestInput = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /** Value enum: false. */
    "cancel_at_period_end"?: false;
    /**
     * The delivery preference to set on a subscription: delivery method, type, destination, and
     * recipient.
     */
    "delivery"?: SubscriptionDeliveryRequestInput;
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** minLength: 1. */
    "payment_method_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */
    "quantity"?: number;
});
/** The request body for: Update merchant. */
export type UpdateMerchantRequest = {
    /**
     * This field is shared across live and all sandboxes. Writing it requires a live-mode
     * credential or a Dashboard session in any selected environment. Test credentials receive 403
     * FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. A
     * complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address"?: AddressRequest;
    /**
     * Set the merchant default to any supported API version using a live-mode credential or a
     * Dashboard session. Omit to leave it unchanged. Null is not accepted. The default is shared
     * across live and test environments; requests with Flint-Version use that header instead. This
     * field is shared across live and all sandboxes. Writing it requires a live-mode credential or
     * a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with
     * reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Business name buyers see. Limited to 120 characters (Unicode code points) before trimming
     * surrounding whitespace. The trimmed name must not be empty. The name cannot be cleared. This
     * field is shared across live and all sandboxes. Writing it requires a live-mode credential or
     * a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with
     * reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     * maxLength: 120.
     */
    "business_name"?: string;
    /**
     * Send null to clear it. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "email"?: string | null;
    /**
     * Merchant profile version last read. A different current version returns 409
     * VERSION_CONFLICT. Send this value when saving a logo or icon to detect concurrent profile
     * edits. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * A square image, at least 128 by 128 pixels, shown where the store needs a small mark:
     * browser tabs and compact headers. This field is shared across live and all sandboxes.
     * Writing it requires a live-mode credential or a Dashboard session in any selected
     * environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required,
     * including for nulls and metadata changes. anyOf[1] (Value): {@link ImageRequest}. An image
     * you supply by `source_url`, with optional `alt` text and external reference. anyOf[2]
     * (Value): null.
     */
    "icon"?: ((ImageRequest) | (null) | (unknown));
    /**
     * This field is shared across live and all sandboxes. Writing it requires a live-mode
     * credential or a Dashboard session in any selected environment. Test credentials receive 403
     * FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. anyOf[1]
     * (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional `alt` text
     * and external reference. anyOf[2] (Value): null.
     */
    "logo"?: ((ImageRequest) | (null) | (unknown));
    /**
     * This field is shared across live and all sandboxes. Writing it requires a live-mode
     * credential or a Dashboard session in any selected environment. Test credentials receive 403
     * FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. anyOf[1]
     * (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Send null to clear it. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "phone"?: string | null;
    /**
     * This field is shared across live and all sandboxes. Writing it requires a live-mode
     * credential or a Dashboard session in any selected environment. Test credentials receive 403
     * FORBIDDEN with reason live_mode_required, including for nulls and metadata changes.
     * minLength: 1.
     */
    "reporting_timezone"?: string;
    /**
     * Send null to clear it. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "support_email"?: string | null;
    /**
     * Support phone in E.164 format, for example +12125551234. Send null to clear it. This field
     * is shared across live and all sandboxes. Writing it requires a live-mode credential or a
     * Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with
     * reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     * maxLength: 16. pattern: ^\+[1-9][0-9]{6,14}$.
     */
    "support_phone"?: string | null;
    /**
     * Send null to clear it. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "support_url"?: string | null;
    /**
     * Send null to clear it. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "website_url"?: string | null;
};
/** The request body for: Update merchant. */
export type UpdateMerchantRequestInput = {
    /**
     * This field is shared across live and all sandboxes. Writing it requires a live-mode
     * credential or a Dashboard session in any selected environment. Test credentials receive 403
     * FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. A
     * complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address"?: AddressRequestInput;
    /**
     * Set the merchant default to any supported API version using a live-mode credential or a
     * Dashboard session. Omit to leave it unchanged. Null is not accepted. The default is shared
     * across live and test environments; requests with Flint-Version use that header instead. This
     * field is shared across live and all sandboxes. Writing it requires a live-mode credential or
     * a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with
     * reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Business name buyers see. Limited to 120 characters (Unicode code points) before trimming
     * surrounding whitespace. The trimmed name must not be empty. The name cannot be cleared. This
     * field is shared across live and all sandboxes. Writing it requires a live-mode credential or
     * a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with
     * reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     * maxLength: 120.
     */
    "business_name"?: string;
    /**
     * Send null to clear it. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "email"?: string | null;
    /**
     * Merchant profile version last read. A different current version returns 409
     * VERSION_CONFLICT. Send this value when saving a logo or icon to detect concurrent profile
     * edits. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * A square image, at least 128 by 128 pixels, shown where the store needs a small mark:
     * browser tabs and compact headers. This field is shared across live and all sandboxes.
     * Writing it requires a live-mode credential or a Dashboard session in any selected
     * environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required,
     * including for nulls and metadata changes. anyOf[1] (Value): {@link ImageRequestInput}. An
     * image you supply by `source_url`, with optional `alt` text and external reference. anyOf[2]
     * (Value): null.
     */
    "icon"?: ((ImageRequestInput) | (null));
    /**
     * This field is shared across live and all sandboxes. Writing it requires a live-mode
     * credential or a Dashboard session in any selected environment. Test credentials receive 403
     * FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. anyOf[1]
     * (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with optional `alt`
     * text and external reference. anyOf[2] (Value): null.
     */
    "logo"?: ((ImageRequestInput) | (null));
    /**
     * This field is shared across live and all sandboxes. Writing it requires a live-mode
     * credential or a Dashboard session in any selected environment. Test credentials receive 403
     * FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. anyOf[1]
     * (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Send null to clear it. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "phone"?: string | null;
    /**
     * This field is shared across live and all sandboxes. Writing it requires a live-mode
     * credential or a Dashboard session in any selected environment. Test credentials receive 403
     * FORBIDDEN with reason live_mode_required, including for nulls and metadata changes.
     * minLength: 1.
     */
    "reporting_timezone"?: string;
    /**
     * Send null to clear it. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "support_email"?: string | null;
    /**
     * Support phone in E.164 format, for example +12125551234. Send null to clear it. This field
     * is shared across live and all sandboxes. Writing it requires a live-mode credential or a
     * Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with
     * reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     * maxLength: 16. pattern: ^\+[1-9][0-9]{6,14}$.
     */
    "support_phone"?: string | null;
    /**
     * Send null to clear it. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "support_url"?: string | null;
    /**
     * Send null to clear it. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "website_url"?: string | null;
};
/** The request body for: Update modifier group. */
export type UpdateModifierGroupRequest = ({
    /** Whether buyers can select more than one unit of a list modifier. */
    "allow_quantities"?: boolean;
    /**
     * Modifier group version last read by the caller. Required when modifiers is present. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Maximum whole-number quantity for each selected list modifier. Omit it to keep the current
     * value; send null to clear it. Fractional quantities are not supported. Format: int64.
     */
    "max_quantity"?: number | null;
    /**
     * Maximum number of distinct list modifiers buyers can select. Omit it to keep the current
     * value; send null to remove the limit. Format: int32.
     */
    "max_selected"?: number | null;
    /**
     * Maximum combined whole-number quantity across selected list modifiers. Omit it to keep the
     * current value; send null to clear it. Fractional quantities are not supported. Format:
     * int64.
     */
    "max_total_quantity"?: number | null;
    /**
     * Omitted metadata is unchanged. Objects merge by key, null values delete keys, an empty
     * object is a no-op, and null clears all metadata. The merged map can contain at most 50 keys.
     * This operation also limits the metadata object you send, before merging: at most 50 keys,
     * counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8
     * bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a
     * caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
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
     * Minimum whole-number quantity for each selected list modifier. Omit it to keep the current
     * value; send null to clear it. Fractional quantities are not supported. Format: int64.
     */
    "min_quantity"?: number | null;
    /**
     * Minimum number of distinct list modifiers buyers must select. Omit it to keep the current
     * value; send null to remove the minimum. Format: int32.
     */
    "min_selected"?: number | null;
    /**
     * Replaces all modifiers atomically. Include modifier_id to retain an existing modifier, omit
     * the ID to create one, and omit a previous modifier to archive it. Omit the array to leave
     * modifiers unchanged. An empty array clears modifiers when the group rules permit it. Null is
     * not accepted. [] (Value): {@link ModifierRequest}. A modifier you supply when creating or
     * updating a modifier group, such as an add-on with a price change.
     */
    "modifiers"?: Array<ModifierRequest>;
    /** Name of the modifier group shown to buyers. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Patch text entry rules by field. Omitted fields keep their current values; null clears the
     * text configuration when the group rules permit it. An empty object is invalid. anyOf[1]
     * (Value): {@link TextModifierConfigPatchRequest}. Send only text fields to change. Omitted
     * fields keep their stored values. null clears min_length or max_length. An empty object is
     * invalid. The merged configuration is validated. minProperties: 1. anyOf[2] (Value): null.
     */
    "text"?: ((TextModifierConfigPatchRequest) | (null));
});
/** The request body for: Update modifier group. */
export type UpdateModifierGroupRequestInput = ({
    /** Whether buyers can select more than one unit of a list modifier. */
    "allow_quantities"?: boolean;
    /**
     * Modifier group version last read by the caller. Required when modifiers is present. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Maximum whole-number quantity for each selected list modifier. Omit it to keep the current
     * value; send null to clear it. Fractional quantities are not supported. Format: int64.
     */
    "max_quantity"?: number | null;
    /**
     * Maximum number of distinct list modifiers buyers can select. Omit it to keep the current
     * value; send null to remove the limit. Format: int32.
     */
    "max_selected"?: number | null;
    /**
     * Maximum combined whole-number quantity across selected list modifiers. Omit it to keep the
     * current value; send null to clear it. Fractional quantities are not supported. Format:
     * int64.
     */
    "max_total_quantity"?: number | null;
    /**
     * Omitted metadata is unchanged. Objects merge by key, null values delete keys, an empty
     * object is a no-op, and null clears all metadata. The merged map can contain at most 50 keys.
     * This operation also limits the metadata object you send, before merging: at most 50 keys,
     * counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8
     * bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a
     * caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
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
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /**
     * Minimum whole-number quantity for each selected list modifier. Omit it to keep the current
     * value; send null to clear it. Fractional quantities are not supported. Format: int64.
     */
    "min_quantity"?: number | null;
    /**
     * Minimum number of distinct list modifiers buyers must select. Omit it to keep the current
     * value; send null to remove the minimum. Format: int32.
     */
    "min_selected"?: number | null;
    /**
     * Replaces all modifiers atomically. Include modifier_id to retain an existing modifier, omit
     * the ID to create one, and omit a previous modifier to archive it. Omit the array to leave
     * modifiers unchanged. An empty array clears modifiers when the group rules permit it. Null is
     * not accepted. [] (Value): {@link ModifierRequestInput}. A modifier you supply when creating
     * or updating a modifier group, such as an add-on with a price change.
     */
    "modifiers"?: Array<ModifierRequestInput>;
    /** Name of the modifier group shown to buyers. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Patch text entry rules by field. Omitted fields keep their current values; null clears the
     * text configuration when the group rules permit it. An empty object is invalid. anyOf[1]
     * (Value): {@link TextModifierConfigPatchRequestInput}. Send only text fields to change.
     * Omitted fields keep their stored values. null clears min_length or max_length. An empty
     * object is invalid. The merged configuration is validated. minProperties: 1. anyOf[2]
     * (Value): null.
     */
    "text"?: ((TextModifierConfigPatchRequestInput) | (null));
});
/** The request body for: Update modifier set. */
export type UpdateModifierSetRequest = ({
    /**
     * Modifier set version last read by the caller. Required when modifier_groups is present.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Omitted metadata is unchanged. Objects merge by key, null values delete keys, an empty
     * object is a no-op, and null clears all metadata. The merged map can contain at most 50 keys.
     * This operation also limits the metadata object you send, before merging: at most 50 keys,
     * counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8
     * bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a
     * caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
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
     * Replaces the set's group entries atomically. Include modifier_set_group_id to retain an
     * entry or omit it to create one. Entries omitted from the array are removed. Omit the array
     * to leave entries unchanged; send [] to clear them. [] (Value): {@link
     * ModifierSetGroupRequest}. A modifier group you add to a modifier set, either an existing
     * group by ID or a new inline group, with selection limits and overrides.
     */
    "modifier_groups"?: Array<ModifierSetGroupRequest>;
    /** Name used to identify this modifier set. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
});
/** The request body for: Update modifier set. */
export type UpdateModifierSetRequestInput = ({
    /**
     * Modifier set version last read by the caller. Required when modifier_groups is present.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Omitted metadata is unchanged. Objects merge by key, null values delete keys, an empty
     * object is a no-op, and null clears all metadata. The merged map can contain at most 50 keys.
     * This operation also limits the metadata object you send, before merging: at most 50 keys,
     * counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8
     * bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a
     * caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
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
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /**
     * Replaces the set's group entries atomically. Include modifier_set_group_id to retain an
     * entry or omit it to create one. Entries omitted from the array are removed. Omit the array
     * to leave entries unchanged; send [] to clear them. [] (Value): {@link
     * ModifierSetGroupRequestInput}. A modifier group you add to a modifier set, either an
     * existing group by ID or a new inline group, with selection limits and overrides.
     */
    "modifier_groups"?: Array<ModifierSetGroupRequestInput>;
    /** Name used to identify this modifier set. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
});
/** The request body for: Update order charge. */
export type UpdateOrderChargeRequest = {
    /**
     * Replacement fixed charge amount in the order currency. The amount and every computed order
     * amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Send null to clear description. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Send null to unlink the fulfillment. minLength: 1. */
    "fulfillment_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. Send null to clear all metadata. anyOf[1] (Value): {@link MetadataPatchRequest}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
     */
    "type"?: "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other"
        | (string & {});
};
/** The request body for: Update order charge. */
export type UpdateOrderChargeRequestInput = {
    /**
     * Replacement fixed charge amount in the order currency. The amount and every computed order
     * amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /** Send null to clear description. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Send null to unlink the fulfillment. minLength: 1. */
    "fulfillment_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. Send null to clear all metadata. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxInput;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
     */
    "type"?: "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other";
};
/** The request body for: Update order. minProperties: 1. */
export type UpdateOrderRequest = {
    /**
     * Buyer-provided note about this order, such as a gift message or purchase preference. Send
     * null to clear it. minLength: 1. maxLength: 1000.
     */
    "buyer_note"?: string | null;
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Complete replacement destination. Allowed while the order is open and unpaid and no delivery
     * selection controls it. A merchant may also correct a paid subscription signup or renewal
     * before shipment by sending expected_version, when the committed delivery methods remain
     * eligible and shipping and tax totals stay the same. A paid destination cannot be cleared.
     * Send null to clear an unpaid order's delivery destination. anyOf[1] (Value): {@link
     * OrderDeliveryDestinationRequest}. The delivery destination you set when creating or updating
     * an order, with an address and an optional recipient. anyOf[2] (Value): null.
     */
    "delivery_destination"?: ((OrderDeliveryDestinationRequest) | (null));
    /**
     * Order version from the last order read. Required when correcting a paid delivery
     * destination. Optional for other updates; when supplied, the update fails if the order
     * changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear
     * external_reference_id. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Internal note about this order, visible only to the merchant. Send null to clear it.
     * minLength: 1. maxLength: 1000.
     */
    "internal_note"?: string | null;
    /**
     * Where inventory for an order is allocated from: a fixed location, an allocation policy, or a
     * specific policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. Send null to clear caller-owned metadata and preserve Flint-managed keys. anyOf[1]
     * (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Requested tip to set or replace. Send null to clear the current requested tip. anyOf[1]
     * (Value): {@link CreateOrderTip}. Requested tip expressed as either a flat amount or a
     * percentage. Send exactly one of amount_money or percent. anyOf[2] (Value): null.
     */
    "requested_tip"?: ((CreateOrderTip) | (null) | (unknown));
    /**
     * Changes to an order's tax settings: whether tax is enabled, the calculation, the location,
     * and per-line-item or per-charge calculations.
     */
    "tax"?: OrderTaxUpdateRequest;
};
/** The request body for: Update order. minProperties: 1. */
export type UpdateOrderRequestInput = {
    /**
     * Buyer-provided note about this order, such as a gift message or purchase preference. Send
     * null to clear it. minLength: 1. maxLength: 1000.
     */
    "buyer_note"?: string | null;
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Complete replacement destination. Allowed while the order is open and unpaid and no delivery
     * selection controls it. A merchant may also correct a paid subscription signup or renewal
     * before shipment by sending expected_version, when the committed delivery methods remain
     * eligible and shipping and tax totals stay the same. A paid destination cannot be cleared.
     * Send null to clear an unpaid order's delivery destination. anyOf[1] (Value): {@link
     * OrderDeliveryDestinationRequestInput}. The delivery destination you set when creating or
     * updating an order, with an address and an optional recipient. anyOf[2] (Value): null.
     */
    "delivery_destination"?: ((OrderDeliveryDestinationRequestInput) | (null));
    /**
     * Order version from the last order read. Required when correcting a paid delivery
     * destination. Optional for other updates; when supplied, the update fails if the order
     * changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear
     * external_reference_id. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Internal note about this order, visible only to the merchant. Send null to clear it.
     * minLength: 1. maxLength: 1000.
     */
    "internal_note"?: string | null;
    /**
     * Where inventory for an order is allocated from: a fixed location, an allocation policy, or a
     * specific policy revision.
     */
    "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. Send null to clear caller-owned metadata and preserve Flint-managed keys. anyOf[1]
     * (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Requested tip to set or replace. Send null to clear the current requested tip. anyOf[1]
     * (Value): {@link CreateOrderTipInput}. Requested tip expressed as either a flat amount or a
     * percentage. Send exactly one of amount_money or percent. anyOf[2] (Value): null.
     */
    "requested_tip"?: ((CreateOrderTipInput) | (null));
    /**
     * Changes to an order's tax settings: whether tax is enabled, the calculation, the location,
     * and per-line-item or per-charge calculations.
     */
    "tax"?: OrderTaxUpdateRequestInput;
};
/** The request body for: Update organization. minProperties: 1. */
export type UpdateOrganizationRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
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
    /**
     * Moves the organization, and every organization below it, under another active organization
     * you can manage. Can't be null. minLength: 1.
     */
    "parent_organization_id"?: string;
};
/** The request body for: Update organization. minProperties: 1. */
export type UpdateOrganizationRequestInput = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
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
    /**
     * Moves the organization, and every organization below it, under another active organization
     * you can manage. Can't be null. minLength: 1.
     */
    "parent_organization_id"?: string;
};
/** The request body for: Update package item. */
export type UpdatePackageItemRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
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
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
};
/** The request body for: Update package item. */
export type UpdatePackageItemRequestInput = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
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
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
};
/** The request body for: Update package. */
export type UpdatePackageRequest = {
    /** Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     *  anyOf[1] (Value): {@link Dimensions}. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`. anyOf[2] (Value): null.
     */
    "dimensions"?: ((Dimensions) | (null));
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
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
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. Send null to clear it.
     * minLength: 1.
     */
    "label_url"?: string | null;
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
    /** Send null to clear it. minLength: 1. */
    "service_code"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "status_reason"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "tracking_number"?: string | null;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to
     * clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
    /**
     *  anyOf[1] (Value): {@link Weight}. A weight value in grams, kilograms, ounces, or pounds,
     * used in delivery profile configuration. anyOf[2] (Value): null.
     */
    "weight"?: ((Weight) | (null));
};
/** The request body for: Update package. */
export type UpdatePackageRequestInput = {
    /** Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     *  anyOf[1] (Value): {@link DimensionsInput}. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`. anyOf[2] (Value): null.
     */
    "dimensions"?: ((DimensionsInput) | (null));
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
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
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. Send null to clear it.
     * minLength: 1.
     */
    "label_url"?: string | null;
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
    /** Send null to clear it. minLength: 1. */
    "service_code"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "status_reason"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "tracking_number"?: string | null;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to
     * clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
    /**
     *  anyOf[1] (Value): {@link WeightInput}. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration. anyOf[2] (Value): null.
     */
    "weight"?: ((WeightInput) | (null));
};
/** The request body for: Update partner app. minProperties: 1. */
export type UpdatePartnerAppRequest = ({
    /** minLength: 1. */
    "api_version"?: string;
    "client_secret_enabled"?: boolean;
    /**
     * Replaces the default requested permission IDs. Each ID must exist in the manifest. []
     * (Value): string. minLength: 1.
     */
    "default_requested_permissions"?: Array<string>;
    /**
     * Apply api_version only if this matches the resource's current api_version. A mismatch
     * returns HTTP 409. Requires api_version; null is not accepted. minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Apply only if this matches the app’s current version. Required with permission_manifest; a
     * mismatch returns HTTP 409 VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them;
     * existing grants narrow immediately. Requires expected_version. [] (Value): {@link
     * PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a title,
     * a description, and the Flint scopes it grants.
     */
    "permission_manifest"?: Array<PartnerAppPermissionManifestEntry>;
    /** Replaces the entire list of registered redirect URIs. [] (Value): string. minLength: 1. */
    "redirect_uris"?: Array<string>;
})
    & ((({
    "client_secret_enabled": boolean;
})
    | ({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /** Replaces the entire list of registered redirect URIs. [] (Value): string. minLength: 1. */
    "redirect_uris": Array<string>;
})
    | ({
    /**
     * Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them;
     * existing grants narrow immediately. Requires expected_version. [] (Value): {@link
     * PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a title,
     * a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
})
    | ({
    /**
     * Replaces the default requested permission IDs. Each ID must exist in the manifest. []
     * (Value): string. minLength: 1.
     */
    "default_requested_permissions": Array<string>;
})
    | ({
    /** minLength: 1. */
    "api_version": string;
})
    | (Record<string, unknown>)));
/** The request body for: Update partner app. minProperties: 1. */
export type UpdatePartnerAppRequestInput = ({
    /** minLength: 1. */
    "api_version"?: string;
    "client_secret_enabled"?: boolean;
    /**
     * Replaces the default requested permission IDs. Each ID must exist in the manifest. []
     * (Value): string. minLength: 1.
     */
    "default_requested_permissions"?: Array<string>;
    /**
     * Apply api_version only if this matches the resource's current api_version. A mismatch
     * returns HTTP 409. Requires api_version; null is not accepted. minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Apply only if this matches the app’s current version. Required with permission_manifest; a
     * mismatch returns HTTP 409 VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them;
     * existing grants narrow immediately. Requires expected_version. [] (Value): {@link
     * PartnerAppPermissionManifestEntryRequestInput}. One permission a partner app can request,
     * with a title, a description, and the Flint scopes it grants.
     */
    "permission_manifest"?: Array<PartnerAppPermissionManifestEntryRequestInput>;
    /** Replaces the entire list of registered redirect URIs. [] (Value): string. minLength: 1. */
    "redirect_uris"?: Array<string>;
})
    & ((({
    "client_secret_enabled": boolean;
})
    | ({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /** Replaces the entire list of registered redirect URIs. [] (Value): string. minLength: 1. */
    "redirect_uris": Array<string>;
})
    | ({
    /**
     * Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them;
     * existing grants narrow immediately. Requires expected_version. [] (Value): {@link
     * PartnerAppPermissionManifestEntryRequestInput}. One permission a partner app can request,
     * with a title, a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntryRequestInput>;
})
    | ({
    /**
     * Replaces the default requested permission IDs. Each ID must exist in the manifest. []
     * (Value): string. minLength: 1.
     */
    "default_requested_permissions": Array<string>;
})
    | ({
    /** minLength: 1. */
    "api_version": string;
})));
/** The request body for: Update payment intent. */
export type UpdatePaymentIntentRequest = {
    /**
     * Payment amount. Can change only while status is requires_payment_method and before the first
     * confirmation attempt. Cannot be cleared. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Customer linked to this payment intent. Can change only while status is
     * requires_payment_method. Cannot be cleared. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it. Omit
     * it to keep the current value. minLength: 1. maxLength: 255.
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
    /**
     * Send null to clear it. Omit it to keep the current value. Format: email. minLength: 1.
     * maxLength: 255.
     */
    "receipt_email"?: string | null;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. Not accepted on order-linked payment intents. Send null to clear the tip; omit
     * it to keep the current value. anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValue) | (null));
};
/** The request body for: Update payment intent. */
export type UpdatePaymentIntentRequestInput = {
    /**
     * Payment amount. Can change only while status is requires_payment_method and before the first
     * confirmation attempt. Cannot be cleared. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Customer linked to this payment intent. Can change only while status is
     * requires_payment_method. Cannot be cleared. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it. Omit
     * it to keep the current value. minLength: 1. maxLength: 255.
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
    /**
     * Send null to clear it. Omit it to keep the current value. Format: email. minLength: 1.
     * maxLength: 255.
     */
    "receipt_email"?: string | null;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. Not accepted on order-linked payment intents. Send null to clear the tip; omit
     * it to keep the current value. anyOf[1] (Value): {@link MoneyValueInput}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValueInput) | (null));
};
/** The request body for: Update payment link. */
export type UpdatePaymentLinkRequest = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use
     * your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: number;
    /**
     * Replaces all custom fields atomically. Include an existing payment_link_custom_field_id to
     * retain that member, omit the ID to create a member, and omit a previous member to remove it.
     * Send an empty array to clear all custom fields, omit custom_fields to leave it unchanged,
     * and do not send null. maxItems: 20. [] (Value): {@link PaymentLinkCustomFieldPatchRequest}.
     * A custom field in a payment link update. Include its ID to change an existing field, or omit
     * the ID to add a new one.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldPatchRequest>;
    /** Changes to a payment link's custom checkout text. Send null to clear a field. */
    "custom_text"?: PaymentLinkCustomTextPatchRequest;
    /**
     * Complete delivery method selection for the link. A link without delivery methods offers
     * settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an
     * empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null
     * and duplicate IDs are not accepted. maxItems: 25. uniqueItems: true. [] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /** Send null to clear. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Maximum donation amount. Send null to clear the maximum. Send null to clear. anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. anyOf[2] (Value): null.
     */
    "donation_max_amount_money"?: ((MoneyValue) | (null));
    /**
     * Minimum donation amount. Send null to clear the minimum. Send null to clear. anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. anyOf[2] (Value): null.
     */
    "donation_min_amount_money"?: ((MoneyValue) | (null));
    /**
     * Suggested donation amounts. Send an empty array to clear suggested amounts. [] (Value):
     * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Event configuration patch. Omit to leave unchanged. The whole configuration cannot be
     * cleared; null is not accepted. Changes to an event payment link's settings. Send null on a
     * nullable field to clear it.
     */
    "event_config"?: PaymentLinkEventConfigPatchRequest;
    /**
     * Payment link version last read by the caller. Required when line_items, custom_fields, or
     * delivery_method_ids is present. Required when any of these fields is present: line_items,
     * custom_fields, delivery_method_ids. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Send null to clear. anyOf[1] (Value): {@link ImageRequest}. An image you supply by
     * `source_url`, with optional `alt` text and external reference. anyOf[2] (Value): null.
     */
    "image"?: ((ImageRequest) | (null) | (unknown));
    /** Send null to clear. minLength: 1. maxLength: 500. */
    "inactive_message"?: string | null;
    /**
     * Where you want inventory routed from: a fixed Location, an inventory allocation policy, or
     * one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Changes to a payment link's legal links and terms setting. Send null on a URL to clear it.
     */
    "legal"?: LegalSettingsRequest;
    /**
     * Replaces all line items atomically. Include an existing payment_link_line_item_id to retain
     * that member, omit the ID to create a member, and omit a previous member to remove it. Omit
     * line_items to leave it unchanged. Null is not accepted. minItems: 1. [] (Value): {@link
     * PaymentLinkLineItemPatchRequest}. A line item in a payment link update. Include its ID to
     * change an existing line item, or omit the ID to add a new one.
     */
    "line_items"?: Array<PaymentLinkLineItemPatchRequest>;
    /** Send null to clear. Format: int32. */
    "max_completions"?: number | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. Send null to clear. Metadata pairs plus custom fields must not exceed 44; 6 of the
     * order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and
     * largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and
     * textarea answers are budgeted at four bytes per Unicode code point, including optional
     * fields. Each checkbox answer is budgeted at five bytes (the length of false). If the
     * combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or
     * reduce metadata. These limits apply to standard and plan links and are checked against the
     * merged configuration on update. This operation also limits the metadata object you send,
     * before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code
     * points, and at most 32768 UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link
     * MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the field to leave
     * metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object
     * makes no change; send null for the whole field to clear all caller-owned metadata. The
     * resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1
     * to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values
     * total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the
     * number of operations is not itself the stored-map limit. Values can't be empty strings, and
     * keys starting with flint_ are reserved for Flint. maxProperties: 50. Changes to a
     * caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. anyOf[1].* (Value): string or null. minLength: 1. maxLength: 4096. anyOf[2]
     * (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Changes to a payment link's payment settings. Send null on the payment note to clear it. */
    "payments"?: PaymentLinkPaymentPatchRequest;
    /**
     * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer
     * can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Changes to a payment link's hosted checkout destinations. Omit
     * a URL to leave it unchanged, or send null to clear it.
     */
    "redirects"?: PaymentLinkRedirectsPatchRequest;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve returns
     * PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event
     * link without sales_end_at stops selling at event_config.event_at. A checkout opened before
     * the end can still start payment for up to 15 minutes after it. Send null to clear it.
     * Format: date-time. minLength: 1.
     */
    "sales_end_at"?: string | null;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** Whether tax is collected for a checkout session or payment link. */
    "tax"?: CheckoutTaxConfig;
    /** Changes to a payment link's checkout theme. Send null on a field to clear it. */
    "theme"?: PaymentLinkThemePatchRequest;
    /**
     * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options,
     * the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
});
/** The request body for: Update payment link. */
export type UpdatePaymentLinkRequestInput = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFieldsRequestInput;
    /**
     * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use
     * your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: number;
    /**
     * Replaces all custom fields atomically. Include an existing payment_link_custom_field_id to
     * retain that member, omit the ID to create a member, and omit a previous member to remove it.
     * Send an empty array to clear all custom fields, omit custom_fields to leave it unchanged,
     * and do not send null. maxItems: 20. [] (Value): {@link
     * PaymentLinkCustomFieldPatchRequestInput}. A custom field in a payment link update. Include
     * its ID to change an existing field, or omit the ID to add a new one.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldPatchRequestInput>;
    /** Changes to a payment link's custom checkout text. Send null to clear a field. */
    "custom_text"?: PaymentLinkCustomTextPatchRequestInput;
    /**
     * Complete delivery method selection for the link. A link without delivery methods offers
     * settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an
     * empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null
     * and duplicate IDs are not accepted. maxItems: 25. uniqueItems: true. [] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /** Send null to clear. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Maximum donation amount. Send null to clear the maximum. Send null to clear. anyOf[1]
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "donation_max_amount_money"?: ((MoneyValueInput) | (null));
    /**
     * Minimum donation amount. Send null to clear the minimum. Send null to clear. anyOf[1]
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "donation_min_amount_money"?: ((MoneyValueInput) | (null));
    /**
     * Suggested donation amounts. Send an empty array to clear suggested amounts. [] (Value):
     * {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValueInput>;
    /**
     * Event configuration patch. Omit to leave unchanged. The whole configuration cannot be
     * cleared; null is not accepted. Changes to an event payment link's settings. Send null on a
     * nullable field to clear it.
     */
    "event_config"?: PaymentLinkEventConfigPatchRequestInput;
    /**
     * Payment link version last read by the caller. Required when line_items, custom_fields, or
     * delivery_method_ids is present. Required when any of these fields is present: line_items,
     * custom_fields, delivery_method_ids. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Send null to clear. anyOf[1] (Value): {@link ImageRequestInput}. An image you supply by
     * `source_url`, with optional `alt` text and external reference. anyOf[2] (Value): null.
     */
    "image"?: ((ImageRequestInput) | (null));
    /** Send null to clear. minLength: 1. maxLength: 500. */
    "inactive_message"?: string | null;
    /**
     * Where you want inventory routed from: a fixed Location, an inventory allocation policy, or
     * one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Changes to a payment link's legal links and terms setting. Send null on a URL to clear it.
     */
    "legal"?: PaymentLinkLegalPatchRequestInput;
    /**
     * Replaces all line items atomically. Include an existing payment_link_line_item_id to retain
     * that member, omit the ID to create a member, and omit a previous member to remove it. Omit
     * line_items to leave it unchanged. Null is not accepted. minItems: 1. [] (Value): {@link
     * PaymentLinkLineItemPatchRequestInput}. A line item in a payment link update. Include its ID
     * to change an existing line item, or omit the ID to add a new one.
     */
    "line_items"?: Array<PaymentLinkLineItemPatchRequestInput>;
    /** Send null to clear. Format: int32. */
    "max_completions"?: number | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. Send null to clear. Metadata pairs plus custom fields must not exceed 44; 6 of the
     * order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and
     * largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and
     * textarea answers are budgeted at four bytes per Unicode code point, including optional
     * fields. Each checkbox answer is budgeted at five bytes (the length of false). If the
     * combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or
     * reduce metadata. These limits apply to standard and plan links and are checked against the
     * merged configuration on update. This operation also limits the metadata object you send,
     * before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code
     * points, and at most 32768 UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link
     * MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave
     * metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object
     * makes no change; send null for the whole field to clear all caller-owned metadata. The
     * resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1
     * to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values
     * total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the
     * number of operations is not itself the stored-map limit. Values can't be empty strings, and
     * keys starting with flint_ are reserved for Flint. maxProperties: 50. Changes to a
     * caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. anyOf[1].* (Value): string or null. minLength: 1. maxLength: 4096. anyOf[2]
     * (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Changes to a payment link's payment settings. Send null on the payment note to clear it. */
    "payments"?: PaymentLinkPaymentPatchRequestInput;
    /**
     * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer
     * can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestInput;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Changes to a payment link's hosted checkout destinations. Omit
     * a URL to leave it unchanged, or send null to clear it.
     */
    "redirects"?: PaymentLinkRedirectsPatchRequestInput;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve returns
     * PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event
     * link without sales_end_at stops selling at event_config.event_at. A checkout opened before
     * the end can still start payment for up to 15 minutes after it. Send null to clear it.
     * Format: date-time. minLength: 1.
     */
    "sales_end_at"?: string | globalThis.Date | null;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** Whether tax is collected for a checkout session or payment link. */
    "tax"?: CheckoutTaxConfigRequestInput;
    /** Changes to a payment link's checkout theme. Send null on a field to clear it. */
    "theme"?: PaymentLinkThemePatchRequestInput;
    /**
     * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options,
     * the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfigRequestInput;
});
/** The request body for: Update payment method domain. */
export type UpdatePaymentMethodDomainRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Whether wallet buttons are on for the hostname. active registers it on your current payment
     * account and checks it again; inactive turns wallet buttons off. Value enum: "active",
     * "inactive".
     */
    "status": "active" | "inactive" | (string & {});
};
/** The request body for: Update payment method domain. */
export type UpdatePaymentMethodDomainRequestInput = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Whether wallet buttons are on for the hostname. active registers it on your current payment
     * account and checks it again; inactive turns wallet buttons off. Value enum: "active",
     * "inactive".
     */
    "status": "active" | "inactive";
};
/** The request body for: Update payout destination metadata. */
export type UpdatePayoutDestinationRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
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
/** The request body for: Update payout destination metadata. */
export type UpdatePayoutDestinationRequestInput = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
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
/** The request body for: Update payout settings. */
export type UpdatePayoutSettingsRequest = ({
    /**
     * Days, 0 through 31, a payment stays pending before its funds become available, in place of
     * the account's default. Send null to go back to the default. Format: int32.
     */
    "delay_days_override"?: number | null;
    /**
     * Expected version of the payout settings. Required when sending minimum_balance_by_currency,
     * monthly_payout_days, or weekly_payout_days, including empty collections and supported null
     * clears. A stale value returns 409 VERSION_CONFLICT; retrieve the settings and rebuild the
     * request before retrying. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * When Flint sends available funds: daily, weekly on weekly_payout_days, monthly on
     * monthly_payout_days, or manual, which sends nothing until you create a payout. weekly and
     * monthly need their day list in the same request. Value enum: "manual", "daily", "weekly",
     * "monthly".
     */
    "interval"?: "manual" | "daily" | "weekly" | "monthly" | (string & {});
    /**
     * Amount to keep in your balance instead of paying it out, keyed by currency code. Each
     * value's currency must match its key and its amount can't be negative. Set a currency to null
     * to remove its minimum. * (Value): {@link MoneyValue} or null. *.anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. *.anyOf[2] (Value): null.
     */
    "minimum_balance_by_currency"?: Record<string, ((MoneyValue) | (null))>;
    /**
     * Days of the month, 1 through 31, on which monthly payouts are sent. Send it with interval
     * monthly; it is rejected with any other interval. [] (Value): integer. Format: int32.
     */
    "monthly_payout_days"?: Array<number>;
    /**
     * Text shown on your bank statement for payouts, 22 characters or fewer. Send null to clear
     * it. minLength: 1.
     */
    "statement_descriptor"?: string | null;
    /**
     * Weekdays on which weekly payouts are sent, monday through friday. Send it with interval
     * weekly; it is rejected with any other interval. [] enum: "monday", "tuesday", "wednesday",
     * "thursday", "friday". [] (Value): string. Value enum: "monday", "tuesday", "wednesday",
     * "thursday", "friday".
     */
    "weekly_payout_days"?: Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | (string & {})>;
});
/** The request body for: Update payout settings. */
export type UpdatePayoutSettingsRequestInput = ({
    /**
     * Days, 0 through 31, a payment stays pending before its funds become available, in place of
     * the account's default. Send null to go back to the default. Format: int32.
     */
    "delay_days_override"?: number | null;
    /**
     * Expected version of the payout settings. Required when sending minimum_balance_by_currency,
     * monthly_payout_days, or weekly_payout_days, including empty collections and supported null
     * clears. A stale value returns 409 VERSION_CONFLICT; retrieve the settings and rebuild the
     * request before retrying. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * When Flint sends available funds: daily, weekly on weekly_payout_days, monthly on
     * monthly_payout_days, or manual, which sends nothing until you create a payout. weekly and
     * monthly need their day list in the same request. Value enum: "manual", "daily", "weekly",
     * "monthly".
     */
    "interval"?: "manual" | "daily" | "weekly" | "monthly";
    /**
     * Amount to keep in your balance instead of paying it out, keyed by currency code. Each
     * value's currency must match its key and its amount can't be negative. Set a currency to null
     * to remove its minimum. * (Value): {@link MoneyValueInput} or null. *.anyOf[1] (Value):
     * {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. *.anyOf[2] (Value): null.
     */
    "minimum_balance_by_currency"?: Record<string, ((MoneyValueInput) | (null))>;
    /**
     * Days of the month, 1 through 31, on which monthly payouts are sent. Send it with interval
     * monthly; it is rejected with any other interval. [] (Value): integer. Format: int32.
     */
    "monthly_payout_days"?: Array<number>;
    /**
     * Text shown on your bank statement for payouts, 22 characters or fewer. Send null to clear
     * it. minLength: 1.
     */
    "statement_descriptor"?: string | null;
    /**
     * Weekdays on which weekly payouts are sent, monday through friday. Send it with interval
     * weekly; it is rejected with any other interval. [] enum: "monday", "tuesday", "wednesday",
     * "thursday", "friday". [] (Value): string. Value enum: "monday", "tuesday", "wednesday",
     * "thursday", "friday".
     */
    "weekly_payout_days"?: Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday">;
});
/**
 * Pickup fulfillment fields to change when updating a fulfillment, such as location, pickup
 * window, and curbside details. Send null to clear a field.
 */
export type UpdatePickupFulfillmentDetails = {
    /**
     * Address where the buyer collects the order. anyOf[1] (Value): {@link AddressRequest}. A
     * complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none. anyOf[2] (Value): null.
     */
    "address"?: ((AddressRequest) | (null));
    /**
     * Instructions specific to curbside handoff. Send null to clear it. minLength: 1. maxLength:
     * 2048.
     */
    "curbside_instructions"?: string | null;
    /**
     * Buyer-reported arrival time for curbside or counter pickup. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "customer_arrived_at"?: string | null;
    /**
     * Deadline after which an uncollected pickup should enter merchant review. Send null to clear
     * it. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | null;
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
    "picked_up_at"?: string | null;
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
    "ready_at"?: string | null;
    /** minLength: 1. */
    "timezone"?: string;
    /**
     * Buyer vehicle description used for curbside handoff. Send null to clear it. minLength: 1.
     * maxLength: 500.
     */
    "vehicle_description"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "window_end_at"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "window_start_at"?: string | null;
};
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
