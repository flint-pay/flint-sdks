import type { PartnerAppPermissionManifestEntry } from './types-36.js';
import type {
    PartnerAppPermissionManifestEntryRequestRequestInput,
    PaymentLinkCustomFieldPatchRequest,
    PaymentLinkCustomTextPatchRequest,
    PaymentLinkCustomFieldPatchRequestInput,
    PaymentLinkCustomTextPatchRequestInput,
    PaymentLimitSettingsPatch,
    PaymentLimitSettingsPatchInput
} from './types-37.js';
import type { MetadataPatchRequest, MetadataPatchRequestInput } from './types-32.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type {
    CheckoutBuyerFields,
    CheckoutPromotionConfig,
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutBuyerFieldsRequestRequestInput,
    CheckoutPromotionConfigRequestRequestInput,
    CheckoutTaxConfigRequestRequestInput,
    CheckoutTipConfigRequestRequestInput,
    CheckoutSettings,
    CheckoutSettingsRequestRequestInput
} from './types-4.js';
import type { ImageRequest, ImageRequestInput } from './types-21.js';
import type {
    InventoryRoutingSourceRequest,
    InventoryRoutingSourceRequestInput,
    InventorySettings,
    InventorySettingsRequestRequestInput
} from './types-27.js';
import type { LegalSettingsRequest, LegalSettingsRequestInput } from './types-30.js';
import type {
    PaymentLinkEventConfigPatchRequest,
    PaymentLinkLineItemPatchRequest,
    PaymentLinkPaymentPatchRequest,
    PaymentLinkRedirectsPatchRequest,
    PaymentLinkThemePatchRequest,
    PaymentLinkEventConfigPatchRequestInput,
    PaymentLinkLegalPatchRequestInput,
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkPaymentPatchRequestInput,
    PaymentLinkRedirectsPatchRequestInput,
    PaymentLinkThemePatchRequestInput
} from './types-38.js';
import type { AddressRequest, AddressRequestInput, BrandingSettingsRequest, BrandingSettingsRequestInput } from './types-0.js';
import type { Dimensions, DimensionsInput } from './types-17.js';
import type { GiftCardProductConfiguration, GiftCardProductConfigurationRequestRequestInput } from './types-20.js';
import type { InventoryItemCreateRequest, InventoryItemCreateRequestInput } from './types-26.js';
import type {
    ProductVariantSelectedOptionRequest,
    ProductVariantSelectedOptionRequestInput,
    PromotionApplicationMethodPatch,
    PromotionCombinesWithPatch,
    PromotionExclusivityPatch,
    PromotionApplicationMethodPatchInput,
    PromotionCombinesWithPatchInput,
    PromotionExclusivityPatchInput
} from './types-40.js';
import type { Weight, WeightInput } from './types-65.js';
import type {
    PromotionRuleGroupRequest,
    PromotionSchedulePatch,
    PromotionRuleGroupRequestInput,
    PromotionSchedulePatchInput,
    PromotionSettings,
    ReceiptSettingsRequest,
    PromotionSettingsRequestRequestInput,
    ReceiptSettingsRequestInput
} from './types-41.js';
import type { RiskPredicateNode, RiskPredicateNodeInput } from './types-46.js';
import type {
    CustomerAccountSettings,
    CustomerEmailDeliverySettings,
    CustomerAccountSettingsRequestRequestInput,
    CustomerEmailDeliverySettingsRequestRequestInput
} from './types-11.js';
import type { FulfillmentSettings, FulfillmentSettingsRequestRequestInput } from './types-19.js';
import type { InvoiceSettingsPatch, InvoiceSettingsPatchInput } from './types-29.js';
import type { SubscriptionSettings, SubscriptionSettingsRequestRequestInput } from './types-49.js';
import type {
    TaxIdentityPatch,
    TaxSettingsRequest,
    TippingSettingsPatch,
    TaxIdentityPatchInput,
    TaxSettingsRequestInput,
    TippingSettingsPatchInput
} from './types-50.js';
import type { SubscriptionIntervalOption, SubscriptionIntervalOptionInput } from './types-48.js';
import type { OrderLineItemModifierRequest, OrderLineItemTax } from './types-34.js';
/**
 * Shape $ (Value): {@link UpdatePartnerAppRequest}. The request body for: Update partner app.
 * minProperties: 1.
 */
export type UpdatePartnerAppRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "api_version"?: string;
    /** Shape $ (Value): boolean. */
    "client_secret_enabled"?: boolean;
    /**
     * Shape $ (Value): Array of string. Replaces the default requested permission IDs. Each ID
     * must exist in the manifest. Shape $[] (Value): string. minLength: 1.
     */
    "default_requested_permissions"?: Array<string>;
    /**
     * Shape $ (Value): string. Apply api_version only if this matches the resource's current
     * api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted.
     * minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Shape $ (Value): integer string. Apply only if this matches the app’s current version.
     * Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntry}. Replaces the whole
     * manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow
     * immediately. Requires expected_version. Shape $[] (Value): {@link
     * PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a title,
     * a description, and the Flint scopes it grants.
     */
    "permission_manifest"?: Array<PartnerAppPermissionManifestEntry>;
    /**
     * Shape $ (Value): Array of string. Replaces the entire list of registered redirect URIs.
     * Shape $[] (Value): string. minLength: 1.
     */
    "redirect_uris"?: Array<string>;
})
    & ((({
    /** Shape $ (Value): boolean. */
    "client_secret_enabled": boolean;
})
    | ({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Replaces the entire list of registered redirect URIs.
     * Shape $[] (Value): string. minLength: 1.
     */
    "redirect_uris": Array<string>;
})
    | ({
    /**
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntry}. Replaces the whole
     * manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow
     * immediately. Requires expected_version. Shape $[] (Value): {@link
     * PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a title,
     * a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Replaces the default requested permission IDs. Each ID
     * must exist in the manifest. Shape $[] (Value): string. minLength: 1.
     */
    "default_requested_permissions": Array<string>;
})
    | ({
    /** Shape $ (Value): string. minLength: 1. */
    "api_version": string;
})
    | (Record<string, unknown>)));
/**
 * Shape $ (Value): {@link UpdatePartnerAppRequestInput}. The request body for: Update partner app.
 * minProperties: 1.
 */
export type UpdatePartnerAppRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "api_version"?: string;
    /** Shape $ (Value): boolean. */
    "client_secret_enabled"?: boolean;
    /**
     * Shape $ (Value): Array of string. Replaces the default requested permission IDs. Each ID
     * must exist in the manifest. Shape $[] (Value): string. minLength: 1.
     */
    "default_requested_permissions"?: Array<string>;
    /**
     * Shape $ (Value): string. Apply api_version only if this matches the resource's current
     * api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted.
     * minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Shape $ (Value): integer string. Apply only if this matches the app’s current version.
     * Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntryRequestRequestInput}.
     * Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them;
     * existing grants narrow immediately. Requires expected_version. Shape $[] (Value): {@link
     * PartnerAppPermissionManifestEntryRequestRequestInput}. One permission a partner app can
     * request, with a title, a description, and the Flint scopes it grants.
     */
    "permission_manifest"?: Array<PartnerAppPermissionManifestEntryRequestRequestInput>;
    /**
     * Shape $ (Value): Array of string. Replaces the entire list of registered redirect URIs.
     * Shape $[] (Value): string. minLength: 1.
     */
    "redirect_uris"?: Array<string>;
})
    & ((({
    /** Shape $ (Value): boolean. */
    "client_secret_enabled": boolean;
})
    | ({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Replaces the entire list of registered redirect URIs.
     * Shape $[] (Value): string. minLength: 1.
     */
    "redirect_uris": Array<string>;
})
    | ({
    /**
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntryRequestRequestInput}.
     * Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them;
     * existing grants narrow immediately. Requires expected_version. Shape $[] (Value): {@link
     * PartnerAppPermissionManifestEntryRequestRequestInput}. One permission a partner app can
     * request, with a title, a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntryRequestRequestInput>;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Replaces the default requested permission IDs. Each ID
     * must exist in the manifest. Shape $[] (Value): string. minLength: 1.
     */
    "default_requested_permissions": Array<string>;
})
    | ({
    /** Shape $ (Value): string. minLength: 1. */
    "api_version": string;
})));
/**
 * Shape $ (Value): {@link UpdatePaymentIntentRequest}. The request body for: Update payment
 * intent.
 */
export type UpdatePaymentIntentRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Payment amount. Can change only while status is
     * requires_payment_method and before the first confirmation attempt. Cannot be cleared.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Customer linked to this payment intent. Can change only while
     * status is requires_payment_method. Cannot be cleared. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. Omit it to keep the current value. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Shape $ (Value): string or null. Send null to clear it. Omit it to keep the current value.
     * Format: email. minLength: 1. maxLength: 255.
     */
    "receipt_email"?: string | null;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Portion of amount_money that is a tip. Uses
     * amount_money's currency and is at most amount_money. Not accepted on order-linked payment
     * intents. Send null to clear the tip; omit it to keep the current value. Shape $.anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. Shape $.anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValue) | (null));
};
/**
 * Shape $ (Value): {@link UpdatePaymentIntentRequestInput}. The request body for: Update payment
 * intent.
 */
export type UpdatePaymentIntentRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Payment amount. Can change only while status is
     * requires_payment_method and before the first confirmation attempt. Cannot be cleared.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. Customer linked to this payment intent. Can change only while
     * status is requires_payment_method. Cannot be cleared. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. Omit it to keep the current value. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Shape $ (Value): string or null. Send null to clear it. Omit it to keep the current value.
     * Format: email. minLength: 1. maxLength: 255.
     */
    "receipt_email"?: string | null;
    /**
     * Shape $ (Value): {@link MoneyValueInput} or null. Portion of amount_money that is a tip.
     * Uses amount_money's currency and is at most amount_money. Not accepted on order-linked
     * payment intents. Send null to clear the tip; omit it to keep the current value. Shape
     * $.anyOf[1] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValueInput) | (null));
};
/** Shape $ (Value): {@link UpdatePaymentLinkRequest}. The request body for: Update payment link. */
export type UpdatePaymentLinkRequest = ({
    /**
     * Shape $ (Value): {@link CheckoutBuyerFields}. What checkout asks the buyer for. Each field
     * you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Shape $ (Value): integer string. Seconds each checkout session the link starts stays open,
     * from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the
     * link; use sales_end_at for that. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkCustomFieldPatchRequest}. Replaces all custom
     * fields atomically. Include an existing payment_link_custom_field_id to retain that member,
     * omit the ID to create a member, and omit a previous member to remove it. Send an empty array
     * to clear all custom fields, omit custom_fields to leave it unchanged, and do not send null.
     * maxItems: 20. Shape $[] (Value): {@link PaymentLinkCustomFieldPatchRequest}. A custom field
     * in a payment link update. Include its ID to change an existing field, or omit the ID to add
     * a new one.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldPatchRequest>;
    /**
     * Shape $ (Value): {@link PaymentLinkCustomTextPatchRequest}. Changes to a payment link's
     * custom checkout text. Send null to clear a field.
     */
    "custom_text"?: PaymentLinkCustomTextPatchRequest;
    /**
     * Shape $ (Value): Array of string. Complete delivery method selection for the link. A link
     * without delivery methods offers settings.checkout.default_delivery_method_ids when its order
     * has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave
     * the selection unchanged. Null and duplicate IDs are not accepted. maxItems: 25. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): string or null. Send null to clear. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Maximum donation amount. Send null to clear the
     * maximum. Send null to clear. Shape $.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value):
     * null.
     */
    "donation_max_amount_money"?: ((MoneyValue) | (null));
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Minimum donation amount. Send null to clear the
     * minimum. Send null to clear. Shape $.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value):
     * null.
     */
    "donation_min_amount_money"?: ((MoneyValue) | (null));
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. Suggested donation amounts. Send an empty
     * array to clear suggested amounts. Shape $[] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Shape $ (Value): {@link PaymentLinkEventConfigPatchRequest}. Event configuration patch. Omit
     * to leave unchanged. The whole configuration cannot be cleared; null is not accepted. Changes
     * to an event payment link's settings. Send null on a nullable field to clear it.
     */
    "event_config"?: PaymentLinkEventConfigPatchRequest;
    /**
     * Shape $ (Value): integer string. Payment link version last read by the caller. Required when
     * line_items, custom_fields, or delivery_method_ids is present. Required when any of these
     * fields is present: line_items, custom_fields, delivery_method_ids. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link ImageRequest} or null. Send null to clear. Shape $.anyOf[1] (Value):
     * {@link ImageRequest}. An image you supply by `source_url`, with optional `alt` text and
     * external reference. Shape $.anyOf[2] (Value): null.
     */
    "image"?: ((ImageRequest) | (null) | (unknown));
    /** Shape $ (Value): string or null. Send null to clear. minLength: 1. maxLength: 500. */
    "inactive_message"?: string | null;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequest}. Where you want inventory routed
     * from: a fixed Location, an inventory allocation policy, or one policy revision, selected by
     * `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Shape $ (Value): {@link LegalSettingsRequest}. Changes to a payment link's legal links and
     * terms setting. Send null on a URL to clear it.
     */
    "legal"?: LegalSettingsRequest;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkLineItemPatchRequest}. Replaces all line items
     * atomically. Include an existing payment_link_line_item_id to retain that member, omit the ID
     * to create a member, and omit a previous member to remove it. Omit line_items to leave it
     * unchanged. Null is not accepted. minItems: 1. Shape $[] (Value): {@link
     * PaymentLinkLineItemPatchRequest}. A line item in a payment link update. Include its ID to
     * change an existing line item, or omit the ID to add a new one.
     */
    "line_items"?: Array<PaymentLinkLineItemPatchRequest>;
    /** Shape $ (Value): integer or null. Send null to clear. Format: int32. */
    "max_completions"?: number | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Send null to clear. Metadata
     * pairs plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for
     * Flint. Metadata keys and values, custom_field_ keys and largest possible answers, and Flint
     * metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four
     * bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at
     * five bytes (the length of false). If the combined budget is exceeded, lower max_length on
     * some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and
     * plan links and are checked against the merged configuration on update. This operation also
     * limits the metadata object you send, before merging: at most 50 keys, counting null
     * deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus
     * values. Shape $.anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned
     * metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null
     * value deletes the key, and an empty object makes no change; send null for the whole field to
     * clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput:
     * Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096
     * Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key
     * that does not exist is allowed, so the number of operations is not itself the stored-map
     * limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to leave metadata
     * unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no
     * change; send null for the whole field to clear all caller-owned metadata. The resulting map
     * is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256
     * Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at
     * most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of
     * operations is not itself the stored-map limit. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. Shape $.anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): {@link PaymentLinkPaymentPatchRequest}. Changes to a payment link's payment
     * settings. Send null on the payment note to clear it.
     */
    "payments"?: PaymentLinkPaymentPatchRequest;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfig}. Promotion settings for a checkout: whether
     * automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Shape $ (Value): {@link PaymentLinkRedirectsPatchRequest}. Where checkout sessions started
     * from this payment link send the buyer after payment, cancellation, or expiration. Changes to
     * a payment link's hosted checkout destinations. Omit a URL to leave it unchanged, or send
     * null to clear it.
     */
    "redirects"?: PaymentLinkRedirectsPatchRequest;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp after which the link stops starting
     * checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on
     * their own, except that an event link without sales_end_at stops selling at
     * event_config.event_at. A checkout opened before the end can still start payment for up to 15
     * minutes after it. Send null to clear it. Format: date-time. minLength: 1.
     */
    "sales_end_at"?: string | null;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutTaxConfig}. Whether tax is collected for a checkout session
     * or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * Shape $ (Value): {@link PaymentLinkThemePatchRequest}. Changes to a payment link's checkout
     * theme. Send null on a field to clear it.
     */
    "theme"?: PaymentLinkThemePatchRequest;
    /**
     * Shape $ (Value): {@link CheckoutTipConfig}. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
});
/**
 * Shape $ (Value): {@link UpdatePaymentLinkRequestInput}. The request body for: Update payment
 * link.
 */
export type UpdatePaymentLinkRequestInput = ({
    /**
     * Shape $ (Value): {@link CheckoutBuyerFieldsRequestRequestInput}. What checkout asks the
     * buyer for. Each field you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFieldsRequestRequestInput;
    /**
     * Shape $ (Value): integer string. Seconds each checkout session the link starts stays open,
     * from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the
     * link; use sales_end_at for that. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkCustomFieldPatchRequestInput}. Replaces all
     * custom fields atomically. Include an existing payment_link_custom_field_id to retain that
     * member, omit the ID to create a member, and omit a previous member to remove it. Send an
     * empty array to clear all custom fields, omit custom_fields to leave it unchanged, and do not
     * send null. maxItems: 20. Shape $[] (Value): {@link PaymentLinkCustomFieldPatchRequestInput}.
     * A custom field in a payment link update. Include its ID to change an existing field, or omit
     * the ID to add a new one.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldPatchRequestInput>;
    /**
     * Shape $ (Value): {@link PaymentLinkCustomTextPatchRequestInput}. Changes to a payment link's
     * custom checkout text. Send null to clear a field.
     */
    "custom_text"?: PaymentLinkCustomTextPatchRequestInput;
    /**
     * Shape $ (Value): Array of string. Complete delivery method selection for the link. A link
     * without delivery methods offers settings.checkout.default_delivery_method_ids when its order
     * has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave
     * the selection unchanged. Null and duplicate IDs are not accepted. maxItems: 25. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): string or null. Send null to clear. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Shape $ (Value): {@link MoneyValueInput} or null. Maximum donation amount. Send null to
     * clear the maximum. Send null to clear. Shape $.anyOf[1] (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape
     * $.anyOf[2] (Value): null.
     */
    "donation_max_amount_money"?: ((MoneyValueInput) | (null));
    /**
     * Shape $ (Value): {@link MoneyValueInput} or null. Minimum donation amount. Send null to
     * clear the minimum. Send null to clear. Shape $.anyOf[1] (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape
     * $.anyOf[2] (Value): null.
     */
    "donation_min_amount_money"?: ((MoneyValueInput) | (null));
    /**
     * Shape $ (Value): Array of {@link MoneyValueInput}. Suggested donation amounts. Send an empty
     * array to clear suggested amounts. Shape $[] (Value): {@link MoneyValueInput}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValueInput>;
    /**
     * Shape $ (Value): {@link PaymentLinkEventConfigPatchRequestInput}. Event configuration patch.
     * Omit to leave unchanged. The whole configuration cannot be cleared; null is not accepted.
     * Changes to an event payment link's settings. Send null on a nullable field to clear it.
     */
    "event_config"?: PaymentLinkEventConfigPatchRequestInput;
    /**
     * Shape $ (Value): integer string. Payment link version last read by the caller. Required when
     * line_items, custom_fields, or delivery_method_ids is present. Required when any of these
     * fields is present: line_items, custom_fields, delivery_method_ids. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link ImageRequestInput} or null. Send null to clear. Shape $.anyOf[1]
     * (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with optional `alt`
     * text and external reference. Shape $.anyOf[2] (Value): null.
     */
    "image"?: ((ImageRequestInput) | (null));
    /** Shape $ (Value): string or null. Send null to clear. minLength: 1. maxLength: 500. */
    "inactive_message"?: string | null;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequestInput}. Where you want inventory routed
     * from: a fixed Location, an inventory allocation policy, or one policy revision, selected by
     * `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): {@link PaymentLinkLegalPatchRequestInput}. Changes to a payment link's
     * legal links and terms setting. Send null on a URL to clear it.
     */
    "legal"?: PaymentLinkLegalPatchRequestInput;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkLineItemPatchRequestInput}. Replaces all line
     * items atomically. Include an existing payment_link_line_item_id to retain that member, omit
     * the ID to create a member, and omit a previous member to remove it. Omit line_items to leave
     * it unchanged. Null is not accepted. minItems: 1. Shape $[] (Value): {@link
     * PaymentLinkLineItemPatchRequestInput}. A line item in a payment link update. Include its ID
     * to change an existing line item, or omit the ID to add a new one.
     */
    "line_items"?: Array<PaymentLinkLineItemPatchRequestInput>;
    /** Shape $ (Value): integer or null. Send null to clear. Format: int32. */
    "max_completions"?: number | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Send null to clear. Metadata
     * pairs plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for
     * Flint. Metadata keys and values, custom_field_ keys and largest possible answers, and Flint
     * metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four
     * bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at
     * five bytes (the length of false). If the combined budget is exceeded, lower max_length on
     * some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and
     * plan links and are checked against the merged configuration on update. This operation also
     * limits the metadata object you send, before merging: at most 50 keys, counting null
     * deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus
     * values. Shape $.anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a
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
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[1].* (Value): string or
     * null. minLength: 1. maxLength: 4096. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): {@link PaymentLinkPaymentPatchRequestInput}. Changes to a payment link's
     * payment settings. Send null on the payment note to clear it.
     */
    "payments"?: PaymentLinkPaymentPatchRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfigRequestRequestInput}. Promotion settings for
     * a checkout: whether automatic promotions apply and whether the buyer can apply promotion
     * codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestRequestInput;
    /**
     * Shape $ (Value): {@link PaymentLinkRedirectsPatchRequestInput}. Where checkout sessions
     * started from this payment link send the buyer after payment, cancellation, or expiration.
     * Changes to a payment link's hosted checkout destinations. Omit a URL to leave it unchanged,
     * or send null to clear it.
     */
    "redirects"?: PaymentLinkRedirectsPatchRequestInput;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp after which the link stops starting
     * checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on
     * their own, except that an event link without sales_end_at stops selling at
     * event_config.event_at. A checkout opened before the end can still start payment for up to 15
     * minutes after it. Send null to clear it. Format: date-time. minLength: 1.
     */
    "sales_end_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): {@link CheckoutTaxConfigRequestRequestInput}. Whether tax is collected for
     * a checkout session or payment link.
     */
    "tax"?: CheckoutTaxConfigRequestRequestInput;
    /**
     * Shape $ (Value): {@link PaymentLinkThemePatchRequestInput}. Changes to a payment link's
     * checkout theme. Send null on a field to clear it.
     */
    "theme"?: PaymentLinkThemePatchRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutTipConfigRequestRequestInput}. Tip settings for a checkout:
     * whether tips are enabled, the percent or fixed amount options, the default tip, and custom
     * tips.
     */
    "tip"?: CheckoutTipConfigRequestRequestInput;
});
/**
 * Shape $ (Value): {@link UpdatePaymentMethodDomainRequest}. The request body for: Update payment
 * method domain.
 */
export type UpdatePaymentMethodDomainRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link UpdatePaymentMethodDomainRequestInput}. The request body for: Update
 * payment method domain.
 */
export type UpdatePaymentMethodDomainRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status": "active" | "inactive";
};
/**
 * Shape $ (Value): {@link UpdatePayoutDestinationRequest}. The request body for: Update payout
 * destination metadata.
 */
export type UpdatePayoutDestinationRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
};
/**
 * Shape $ (Value): {@link UpdatePayoutDestinationRequestInput}. The request body for: Update
 * payout destination metadata.
 */
export type UpdatePayoutDestinationRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
};
/**
 * Shape $ (Value): {@link UpdatePayoutSettingsRequest}. The request body for: Update payout
 * settings.
 */
export type UpdatePayoutSettingsRequest = ({
    /**
     * Shape $ (Value): integer or null. Days, 0 through 31, a payment stays pending before its
     * funds become available, in place of the account's default. Send null to go back to the
     * default. Format: int32.
     */
    "delay_days_override"?: number | null;
    /**
     * Shape $ (Value): integer string. Expected version of the payout settings. Required when
     * sending minimum_balance_by_currency, monthly_payout_days, or weekly_payout_days, including
     * empty collections and supported null clears. A stale value returns 409 VERSION_CONFLICT;
     * retrieve the settings and rebuild the request before retrying. Use an integer string
     * (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. When Flint sends available funds: daily, weekly on
     * weekly_payout_days, monthly on monthly_payout_days, or manual, which sends nothing until you
     * create a payout. weekly and monthly need their day list in the same request. Value enum:
     * "manual", "daily", "weekly", "monthly".
     */
    "interval"?: "manual" | "daily" | "weekly" | "monthly" | (string & {});
    /**
     * Shape $ (Value): Map of ({@link MoneyValue} or null). Amount to keep in your balance instead
     * of paying it out, keyed by currency code. Each value's currency must match its key and its
     * amount can't be negative. Set a currency to null to remove its minimum. Shape $.* (Value):
     * {@link MoneyValue} or null. Shape $.*.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. Shape $.*.anyOf[2]
     * (Value): null.
     */
    "minimum_balance_by_currency"?: Record<string, ((MoneyValue) | (null))>;
    /**
     * Shape $ (Value): Array of integer. Days of the month, 1 through 31, on which monthly payouts
     * are sent. Send it with interval monthly; it is rejected with any other interval. Shape $[]
     * (Value): integer. Format: int32.
     */
    "monthly_payout_days"?: Array<number>;
    /**
     * Shape $ (Value): string or null. Text shown on your bank statement for payouts, 22
     * characters or fewer. Send null to clear it. minLength: 1.
     */
    "statement_descriptor"?: string | null;
    /**
     * Shape $ (Value): Array of string. Weekdays on which weekly payouts are sent, monday through
     * friday. Send it with interval weekly; it is rejected with any other interval. [] enum:
     * "monday", "tuesday", "wednesday", "thursday", "friday". Shape $[] (Value): string. Value
     * enum: "monday", "tuesday", "wednesday", "thursday", "friday".
     */
    "weekly_payout_days"?: Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | (string & {})>;
});
/**
 * Shape $ (Value): {@link UpdatePayoutSettingsRequestInput}. The request body for: Update payout
 * settings.
 */
export type UpdatePayoutSettingsRequestInput = ({
    /**
     * Shape $ (Value): integer or null. Days, 0 through 31, a payment stays pending before its
     * funds become available, in place of the account's default. Send null to go back to the
     * default. Format: int32.
     */
    "delay_days_override"?: number | null;
    /**
     * Shape $ (Value): integer string. Expected version of the payout settings. Required when
     * sending minimum_balance_by_currency, monthly_payout_days, or weekly_payout_days, including
     * empty collections and supported null clears. A stale value returns 409 VERSION_CONFLICT;
     * retrieve the settings and rebuild the request before retrying. Use an integer string
     * (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. When Flint sends available funds: daily, weekly on
     * weekly_payout_days, monthly on monthly_payout_days, or manual, which sends nothing until you
     * create a payout. weekly and monthly need their day list in the same request. Value enum:
     * "manual", "daily", "weekly", "monthly".
     */
    "interval"?: "manual" | "daily" | "weekly" | "monthly";
    /**
     * Shape $ (Value): Map of ({@link MoneyValueInput} or null). Amount to keep in your balance
     * instead of paying it out, keyed by currency code. Each value's currency must match its key
     * and its amount can't be negative. Set a currency to null to remove its minimum. Shape $.*
     * (Value): {@link MoneyValueInput} or null. Shape $.*.anyOf[1] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. Shape $.*.anyOf[2] (Value): null.
     */
    "minimum_balance_by_currency"?: Record<string, ((MoneyValueInput) | (null))>;
    /**
     * Shape $ (Value): Array of integer. Days of the month, 1 through 31, on which monthly payouts
     * are sent. Send it with interval monthly; it is rejected with any other interval. Shape $[]
     * (Value): integer. Format: int32.
     */
    "monthly_payout_days"?: Array<number>;
    /**
     * Shape $ (Value): string or null. Text shown on your bank statement for payouts, 22
     * characters or fewer. Send null to clear it. minLength: 1.
     */
    "statement_descriptor"?: string | null;
    /**
     * Shape $ (Value): Array of string. Weekdays on which weekly payouts are sent, monday through
     * friday. Send it with interval weekly; it is rejected with any other interval. [] enum:
     * "monday", "tuesday", "wednesday", "thursday", "friday". Shape $[] (Value): string. Value
     * enum: "monday", "tuesday", "wednesday", "thursday", "friday".
     */
    "weekly_payout_days"?: Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday">;
});
/**
 * Shape $ (Value): {@link UpdatePickupFulfillmentDetails}. Pickup fulfillment fields to change
 * when updating a fulfillment, such as location, pickup window, and curbside details. Send null to
 * clear a field.
 */
export type UpdatePickupFulfillmentDetails = {
    /**
     * Shape $ (Value): {@link AddressRequest} or null. Address where the buyer collects the order.
     * Shape $.anyOf[1] (Value): {@link AddressRequest}. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none. Shape $.anyOf[2] (Value):
     * null.
     */
    "address"?: ((AddressRequest) | (null));
    /**
     * Shape $ (Value): string or null. Instructions specific to curbside handoff. Send null to
     * clear it. minLength: 1. maxLength: 2048.
     */
    "curbside_instructions"?: string | null;
    /**
     * Shape $ (Value): string or null. Buyer-reported arrival time for curbside or counter pickup.
     * Send null to clear it. Format: date-time. minLength: 1.
     */
    "customer_arrived_at"?: string | null;
    /**
     * Shape $ (Value): string or null. Deadline after which an uncollected pickup should enter
     * merchant review. Send null to clear it. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | null;
    /**
     * Shape $ (Value): string or null. Pickup instructions for the buyer, such as where to go on
     * arrival. Send null to clear it. minLength: 1.
     */
    "instructions"?: string | null;
    /**
     * Shape $ (Value): string or null. Name of the store or place where the buyer collects the
     * order. Send null to clear it. minLength: 1.
     */
    "location_name"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "picked_up_at"?: string | null;
    /**
     * Shape $ (Value): integer string or null. Width of the promised pickup window, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "pickup_window_duration_seconds"?: `${bigint}` | null;
    /**
     * Shape $ (Value): integer string or null. Expected preparation time for restaurant and
     * made-to-order pickup, from 0 to 86400 seconds. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}` | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "ready_at"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string or null. Buyer vehicle description used for curbside handoff. Send
     * null to clear it. minLength: 1. maxLength: 500.
     */
    "vehicle_description"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "window_end_at"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "window_start_at"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdatePickupFulfillmentDetailsInput}. Pickup fulfillment fields to
 * change when updating a fulfillment, such as location, pickup window, and curbside details. Send
 * null to clear a field.
 */
export type UpdatePickupFulfillmentDetailsInput = {
    /**
     * Shape $ (Value): {@link AddressRequestInput} or null. Address where the buyer collects the
     * order. Shape $.anyOf[1] (Value): {@link AddressRequestInput}. A complete postal address.
     * State and postal_code are required for US addresses and optional for other countries. Send
     * null or omit line2, state, and postal_code when the address has none. Shape $.anyOf[2]
     * (Value): null.
     */
    "address"?: ((AddressRequestInput) | (null));
    /**
     * Shape $ (Value): string or null. Instructions specific to curbside handoff. Send null to
     * clear it. minLength: 1. maxLength: 2048.
     */
    "curbside_instructions"?: string | null;
    /**
     * Shape $ (Value): string or null. Buyer-reported arrival time for curbside or counter pickup.
     * Send null to clear it. Format: date-time. minLength: 1.
     */
    "customer_arrived_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. Deadline after which an uncollected pickup should enter
     * merchant review. Send null to clear it. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. Pickup instructions for the buyer, such as where to go on
     * arrival. Send null to clear it. minLength: 1.
     */
    "instructions"?: string | null;
    /**
     * Shape $ (Value): string or null. Name of the store or place where the buyer collects the
     * order. Send null to clear it. minLength: 1.
     */
    "location_name"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "picked_up_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): integer string or null. Width of the promised pickup window, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "pickup_window_duration_seconds"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): integer string or null. Expected preparation time for restaurant and
     * made-to-order pickup, from 0 to 86400 seconds. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "ready_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string or null. Buyer vehicle description used for curbside handoff. Send
     * null to clear it. minLength: 1. maxLength: 500.
     */
    "vehicle_description"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "window_end_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "window_start_at"?: string | globalThis.Date | null;
};
/**
 * Shape $ (Value): {@link UpdateProductOptionRequest}. A product option to keep or add when
 * updating a product, with its name, position, status, and values.
 */
export type UpdateProductOptionRequest = {
    /**
     * Shape $ (Value): string. Value of this option given to every active variant that has no
     * active value for it after this request, such as when you add an option to a product that
     * already has active variants. It must match one of this option's active `values`, ignoring
     * case and surrounding whitespace. Not stored; the variants keep the value. minLength: 1.
     * maxLength: 255.
     */
    "existing_variant_value"?: string;
    /**
     * Shape $ (Value): Map of (string or null) or null. Complete caller-owned metadata for this
     * option. Retained options are replaced as members of the options array, so omitting metadata,
     * sending null, or sending {} clears it. A null-valued key is omitted from the replacement.
     * Values can't be empty strings. Keys starting with flint_ are reserved and cannot be written
     * through the public API. Shape $.* (Value): string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): string. Option name, such as Size or Color. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): string. Identifier of an existing option to retain. Omit it to create a new
     * option. minLength: 1. pattern: ^opt_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "option_id"?: string;
    /**
     * Shape $ (Value): integer. Display order among the product's options, starting at zero.
     * Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Shape $ (Value): string. Whether the option is active or inactive. Active variants must
     * select an active value for every active option. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): Array of {@link UpdateProductOptionValueRequest}. Values offered for this
     * option, such as Small, Medium, and Large for Size. Shape $[] (Value): {@link
     * UpdateProductOptionValueRequest}. A value to keep or add on a product option when updating a
     * product, with its position and status.
     */
    "values"?: Array<UpdateProductOptionValueRequest>;
};
/**
 * Shape $ (Value): {@link UpdateProductOptionRequestInput}. A product option to keep or add when
 * updating a product, with its name, position, status, and values.
 */
export type UpdateProductOptionRequestInput = {
    /**
     * Shape $ (Value): string. Value of this option given to every active variant that has no
     * active value for it after this request, such as when you add an option to a product that
     * already has active variants. It must match one of this option's active `values`, ignoring
     * case and surrounding whitespace. Not stored; the variants keep the value. minLength: 1.
     * maxLength: 255.
     */
    "existing_variant_value"?: string;
    /**
     * Shape $ (Value): Map of (string or null) or null. Complete caller-owned metadata for this
     * option. Retained options are replaced as members of the options array, so omitting metadata,
     * sending null, or sending {} clears it. A null-valued key is omitted from the replacement.
     * Values can't be empty strings. Keys starting with flint_ are reserved and cannot be written
     * through the public API. Shape $.* (Value): string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): string. Option name, such as Size or Color. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): string. Identifier of an existing option to retain. Omit it to create a new
     * option. minLength: 1. pattern: ^opt_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "option_id"?: string;
    /**
     * Shape $ (Value): integer. Display order among the product's options, starting at zero.
     * Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Shape $ (Value): string. Whether the option is active or inactive. Active variants must
     * select an active value for every active option. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): Array of {@link UpdateProductOptionValueRequestInput}. Values offered for
     * this option, such as Small, Medium, and Large for Size. Shape $[] (Value): {@link
     * UpdateProductOptionValueRequestInput}. A value to keep or add on a product option when
     * updating a product, with its position and status.
     */
    "values"?: Array<UpdateProductOptionValueRequestInput>;
};
/**
 * Shape $ (Value): {@link UpdateProductOptionValueRequest}. A value to keep or add on a product
 * option when updating a product, with its position and status.
 */
export type UpdateProductOptionValueRequest = {
    /**
     * Shape $ (Value): Map of (string or null) or null. Complete caller-owned metadata for this
     * option value. Retained option values are replaced as members of the options array, so
     * omitting metadata, sending null, or sending {} clears it. A null-valued key is omitted from
     * the replacement. Values can't be empty strings. Keys starting with flint_ are reserved and
     * cannot be written through the public API. Shape $.* (Value): string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): string. Identifier of an existing option value to retain. Omit it to create
     * a new value. minLength: 1. pattern: ^optv_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "option_value_id"?: string;
    /**
     * Shape $ (Value): integer. Display order among the option's values, starting at zero. Format:
     * int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Shape $ (Value): string. Whether the value is active or inactive. Active variants cannot
     * newly select an inactive value. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): string. Option value shown to buyers, such as Medium. minLength: 1.
     * maxLength: 255.
     */
    "value": string;
};
/**
 * Shape $ (Value): {@link UpdateProductOptionValueRequestInput}. A value to keep or add on a
 * product option when updating a product, with its position and status.
 */
export type UpdateProductOptionValueRequestInput = {
    /**
     * Shape $ (Value): Map of (string or null) or null. Complete caller-owned metadata for this
     * option value. Retained option values are replaced as members of the options array, so
     * omitting metadata, sending null, or sending {} clears it. A null-valued key is omitted from
     * the replacement. Values can't be empty strings. Keys starting with flint_ are reserved and
     * cannot be written through the public API. Shape $.* (Value): string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): string. Identifier of an existing option value to retain. Omit it to create
     * a new value. minLength: 1. pattern: ^optv_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "option_value_id"?: string;
    /**
     * Shape $ (Value): integer. Display order among the option's values, starting at zero. Format:
     * int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Shape $ (Value): string. Whether the value is active or inactive. Active variants cannot
     * newly select an inactive value. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): string. Option value shown to buyers, such as Medium. minLength: 1.
     * maxLength: 255.
     */
    "value": string;
};
/**
 * Shape $ (Value): {@link UpdateProductRequest}. Send only fields to change. Omitted fields keep
 * their stored values. null clears nullable fields; null on any other field returns 400
 * INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys
 * after merging.
 */
export type UpdateProductRequest = ({
    /**
     * Shape $ (Value): Array of string. Relationship set of category handles that must already
     * exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return
     * RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH,
     * omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern:
     * ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "default_variant_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * options or images is present. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Array of {@link ImageRequest}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. This operation also limits
     * the metadata object you send, before merging: at most 50 keys, counting null deletions, each
     * key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. Shape
     * $.anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each
     * key sets a value, a null value deletes the key, and an empty object makes no change; send
     * null for the whole field to clear all caller-owned metadata. The resulting map is limited
     * the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is
     * not itself the stored-map limit. Values can't be empty strings, and keys starting with
     * flint_ are reserved for Flint. Shape $.anyOf[1].* (Value): string or null. minLength: 1.
     * maxLength: 4096. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /** Shape $ (Value): string. Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of {@link UpdateProductOptionRequest}. Replaces all product options
     * and values atomically. Include existing option_id and option_value_id values to retain
     * members. Omitted members are archived. Null is not accepted. Shape $[] (Value): {@link
     * UpdateProductOptionRequest}. A product option to keep or add when updating a product, with
     * its name, position, status, and values.
     */
    "options"?: Array<UpdateProductOptionRequest>;
    /**
     * Shape $ (Value): string. Kind of goods or service this product represents. Value enum:
     * "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Shape $ (Value): string. Whether the product is active or inactive. An inactive product's
     * variants cannot be sold. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
});
/**
 * Shape $ (Value): {@link UpdateProductRequestInput}. Send only fields to change. Omitted fields
 * keep their stored values. null clears nullable fields; null on any other field returns 400
 * INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys
 * after merging.
 */
export type UpdateProductRequestInput = ({
    /**
     * Shape $ (Value): Array of string. Relationship set of category handles that must already
     * exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return
     * RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH,
     * omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern:
     * ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "default_variant_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * options or images is present. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Array of {@link ImageRequestInput}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
     * optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. This operation also limits
     * the metadata object you send, before merging: at most 50 keys, counting null deletions, each
     * key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. Shape
     * $.anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each
     * key sets a value, a null value deletes the key, and an empty object makes no change; send
     * null for the whole field to clear all caller-owned metadata. The resulting map is limited
     * the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is
     * not itself the stored-map limit. Values can't be empty strings, and keys starting with
     * flint_ are reserved for Flint. Shape $.anyOf[1].* (Value): string or null. minLength: 1.
     * maxLength: 4096. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /** Shape $ (Value): string. Product name shown to buyers. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of {@link UpdateProductOptionRequestInput}. Replaces all product
     * options and values atomically. Include existing option_id and option_value_id values to
     * retain members. Omitted members are archived. Null is not accepted. Shape $[] (Value):
     * {@link UpdateProductOptionRequestInput}. A product option to keep or add when updating a
     * product, with its name, position, status, and values.
     */
    "options"?: Array<UpdateProductOptionRequestInput>;
    /**
     * Shape $ (Value): string. Kind of goods or service this product represents. Value enum:
     * "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | "gift_card";
    /**
     * Shape $ (Value): string. Whether the product is active or inactive. An inactive product's
     * variants cannot be sold. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
});
/**
 * Shape $ (Value): {@link UpdateProductVariantRequest}. Send only fields to change. Omitted fields
 * keep their stored values. null clears nullable fields; null on any other field returns 400
 * INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys
 * after merging.
 */
export type UpdateProductVariantRequest = ({
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "delivery_profile_id"?: string | null;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * images is present. Use an integer string (decimal digits), not a floating-point number.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link GiftCardProductConfiguration}. Replaces the complete gift card
     * configuration. Omission preserves it. Null is not accepted. Include expected_version to
     * reject a concurrent variant change. Gift card settings on a product variant: its
     * `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfiguration;
    /**
     * Shape $ (Value): Array of {@link ImageRequest}. Replaces the authored variant gallery
     * atomically. Send [] to clear it and resume product-image inheritance. minItems: 0. maxItems:
     * 8. Shape $[] (Value): {@link ImageRequest}. An image you supply by `source_url`, with
     * optional `alt` text and external reference.
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
     * Shape $ (Value): string or null. Inventory item tracked by this variant. Send null to stop
     * tracking inventory. minLength: 1.
     */
    "inventory_item_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Flint line-item tax category. Send null to clear it. Value
     * enum: "general", "physical_goods", "digital_goods", "software", "saas", "services",
     * "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission",
     * null.
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
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. This operation also limits
     * the metadata object you send, before merging: at most 50 keys, counting null deletions, each
     * key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. Shape
     * $.anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each
     * key sets a value, a null value deletes the key, and an empty object makes no change; send
     * null for the whole field to clear all caller-owned metadata. The resulting map is limited
     * the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is
     * not itself the stored-map limit. Values can't be empty strings, and keys starting with
     * flint_ are reserved for Flint. Shape $.anyOf[1].* (Value): string or null. minLength: 1.
     * maxLength: 4096. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
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
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 100. */
    "sku"?: string | null;
    /**
     * Shape $ (Value): string. Whether the variant is active or inactive. An inactive variant
     * cannot be sold. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link Dimensions} or null. Replaces the complete object. Send null to
     * clear it. Shape $.anyOf[1] (Value): {@link Dimensions}. Package or item dimensions as
     * `length`, `width`, and `height` in the given `unit`. Shape $.anyOf[2] (Value): null.
     */
    "unit_dimensions"?: ((Dimensions) | (null));
    /**
     * Shape $ (Value): {@link MoneyValue}. Price charged for one unit, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link Weight} or null. Replaces the complete object. Send null to clear
     * it. Shape $.anyOf[1] (Value): {@link Weight}. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration. Shape $.anyOf[2] (Value): null.
     */
    "unit_weight"?: ((Weight) | (null));
});
/**
 * Shape $ (Value): {@link UpdateProductVariantRequestInput}. Send only fields to change. Omitted
 * fields keep their stored values. null clears nullable fields; null on any other field returns
 * 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50
 * keys after merging.
 */
export type UpdateProductVariantRequestInput = ({
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "delivery_profile_id"?: string | null;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * images is present. Use an integer string (decimal digits), not a floating-point number.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link GiftCardProductConfigurationRequestRequestInput}. Replaces the
     * complete gift card configuration. Omission preserves it. Null is not accepted. Include
     * expected_version to reject a concurrent variant change. Gift card settings on a product
     * variant: its `face_value_money`, price mode (face value or discounted), and bounds for
     * custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfigurationRequestRequestInput;
    /**
     * Shape $ (Value): Array of {@link ImageRequestInput}. Replaces the authored variant gallery
     * atomically. Send [] to clear it and resume product-image inheritance. minItems: 0. maxItems:
     * 8. Shape $[] (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
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
     * Shape $ (Value): string or null. Inventory item tracked by this variant. Send null to stop
     * tracking inventory. minLength: 1.
     */
    "inventory_item_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Flint line-item tax category. Send null to clear it. Value
     * enum: "general", "physical_goods", "digital_goods", "software", "saas", "services",
     * "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission",
     * null.
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
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. This operation also limits
     * the metadata object you send, before merging: at most 50 keys, counting null deletions, each
     * key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. Shape
     * $.anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each
     * key sets a value, a null value deletes the key, and an empty object makes no change; send
     * null for the whole field to clear all caller-owned metadata. The resulting map is limited
     * the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is
     * not itself the stored-map limit. Values can't be empty strings, and keys starting with
     * flint_ are reserved for Flint. Shape $.anyOf[1].* (Value): string or null. minLength: 1.
     * maxLength: 4096. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
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
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 100. */
    "sku"?: string | null;
    /**
     * Shape $ (Value): string. Whether the variant is active or inactive. An inactive variant
     * cannot be sold. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link DimensionsInput} or null. Replaces the complete object. Send null to
     * clear it. Shape $.anyOf[1] (Value): {@link DimensionsInput}. Package or item dimensions as
     * `length`, `width`, and `height` in the given `unit`. Shape $.anyOf[2] (Value): null.
     */
    "unit_dimensions"?: ((DimensionsInput) | (null));
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Price charged for one unit, in the currency's
     * smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): {@link WeightInput} or null. Replaces the complete object. Send null to
     * clear it. Shape $.anyOf[1] (Value): {@link WeightInput}. A weight value in grams, kilograms,
     * ounces, or pounds, used in delivery profile configuration. Shape $.anyOf[2] (Value): null.
     */
    "unit_weight"?: ((WeightInput) | (null));
});
/**
 * Shape $ (Value): {@link UpdatePromotionCodeRequest}. The request body for: Update promotion
 * code.
 */
export type UpdatePromotionCodeRequest = {
    /**
     * Shape $ (Value): integer string. Promotion code version last read by the caller. Optional
     * for updates. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Absolute RFC3339 expiry timestamp. Omission keeps the
     * stored value; null clears it. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | null;
    /**
     * Shape $ (Value): integer string or null. Maximum number of times this code can be redeemed.
     * Send null to remove the redemption limit. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "max_uses"?: `${bigint}` | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Shape $ (Value): string. Lifecycle status: active or inactive. Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): string or null. IANA zone the code's times were entered in, used for
     * display. expires_at is an absolute timestamp, so this does not change when the code expires.
     * Send null to clear it. minLength: 1. maxLength: 255.
     */
    "timezone"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdatePromotionCodeRequestInput}. The request body for: Update promotion
 * code.
 */
export type UpdatePromotionCodeRequestInput = {
    /**
     * Shape $ (Value): integer string. Promotion code version last read by the caller. Optional
     * for updates. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Absolute RFC3339 expiry timestamp. Omission keeps the
     * stored value; null clears it. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): integer string or null. Maximum number of times this code can be redeemed.
     * Send null to remove the redemption limit. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "max_uses"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Shape $ (Value): string. Lifecycle status: active or inactive. Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): string or null. IANA zone the code's times were entered in, used for
     * display. expires_at is an absolute timestamp, so this does not change when the code expires.
     * Send null to clear it. minLength: 1. maxLength: 255.
     */
    "timezone"?: string | null;
};
/** Shape $ (Value): {@link UpdatePromotionRequest}. The request body for: Update promotion. */
export type UpdatePromotionRequest = ({
    /**
     * Shape $ (Value): {@link PromotionApplicationMethodPatch}. Fields of the discount effect to
     * change. Omitted fields keep their stored values. Send only application_method fields to
     * change. Omitted fields keep their stored values. Sending a different type replaces the
     * effect with the supplied effect fields; allocation, calculation_basis, recurrence, and
     * discounted_item_rules are preserved unless sent, and discounted_item_rules: null clears the
     * stored rules. Money, recurrence, currency_options, and each rule group are replaced whole
     * when present. null clears only nullable fields. discounted_item_rules cannot be null for
     * buy_x_get_y. minProperties: 1.
     */
    "application_method"?: PromotionApplicationMethodPatch;
    /**
     * Shape $ (Value): {@link PromotionCombinesWithPatch}. Send only the classes to change.
     * Omitted classes keep their current value. null, an empty object, and null classes are
     * invalid. Change which promotion discount classes this promotion can combine with. Omitted
     * classes keep their current values. minProperties: 1.
     */
    "combines_with"?: PromotionCombinesWithPatch;
    /**
     * Shape $ (Value): string or null. Description of the promotion for your own records. Send
     * null to clear it. minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Shape $ (Value): string. Promotion discount class. Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**
     * Shape $ (Value): string. Buyer-facing promotion name shown in checkout and order discount
     * surfaces. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest} or null. Replaces the promotion's
     * eligibility conditions. Send null to remove all eligibility conditions. Shape $.anyOf[1]
     * (Value): {@link PromotionRuleGroupRequest}. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups. Shape $.anyOf[2] (Value): null.
     */
    "eligibility_rules"?: ((PromotionRuleGroupRequest) | (null) | (unknown));
    /**
     * Shape $ (Value): {@link PromotionExclusivityPatch} or null. Fields of the exclusivity group
     * and priority to change. Send null to remove the promotion from its exclusivity group. Shape
     * $.anyOf[1] (Value): {@link PromotionExclusivityPatch}. Send only fields to change. Omitted
     * fields keep their stored values. Send priority 0 to reset it. An empty object is invalid.
     * minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "exclusivity"?: ((PromotionExclusivityPatch) | (null));
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * application_method or eligibility_rules is present, including an empty collection or a
     * supported null clear. Optional for scalar updates. Use an integer string (decimal digits),
     * not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): integer string or null. Maximum number of redemptions across all codes and
     * automatic applications. Send null to remove the redemption limit. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "max_uses"?: `${bigint}` | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Shape $ (Value): string. Internal promotion name for dashboards, searching, and reporting.
     * minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Shape $ (Value): {@link PromotionSchedulePatch} or null. Fields of the promotion schedule to
     * change. Send null to remove the schedule. Shape $.anyOf[1] (Value): {@link
     * PromotionSchedulePatch}. Send only fields to change. Omitted fields keep their stored
     * values. null clears nullable subfields. An empty object is invalid. minProperties: 1. Shape
     * $.anyOf[2] (Value): null.
     */
    "schedule"?: ((PromotionSchedulePatch) | (null));
    /**
     * Shape $ (Value): string. Lifecycle status to set: active or inactive. Archived promotions
     * cannot be updated. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
});
/** Shape $ (Value): {@link UpdatePromotionRequestInput}. The request body for: Update promotion. */
export type UpdatePromotionRequestInput = ({
    /**
     * Shape $ (Value): {@link PromotionApplicationMethodPatchInput}. Fields of the discount effect
     * to change. Omitted fields keep their stored values. Send only application_method fields to
     * change. Omitted fields keep their stored values. Sending a different type replaces the
     * effect with the supplied effect fields; allocation, calculation_basis, recurrence, and
     * discounted_item_rules are preserved unless sent, and discounted_item_rules: null clears the
     * stored rules. Money, recurrence, currency_options, and each rule group are replaced whole
     * when present. null clears only nullable fields. discounted_item_rules cannot be null for
     * buy_x_get_y. minProperties: 1.
     */
    "application_method"?: PromotionApplicationMethodPatchInput;
    /**
     * Shape $ (Value): {@link PromotionCombinesWithPatchInput}. Send only the classes to change.
     * Omitted classes keep their current value. null, an empty object, and null classes are
     * invalid. Change which promotion discount classes this promotion can combine with. Omitted
     * classes keep their current values. minProperties: 1.
     */
    "combines_with"?: PromotionCombinesWithPatchInput;
    /**
     * Shape $ (Value): string or null. Description of the promotion for your own records. Send
     * null to clear it. minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Shape $ (Value): string. Promotion discount class. Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /**
     * Shape $ (Value): string. Buyer-facing promotion name shown in checkout and order discount
     * surfaces. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput} or null. Replaces the promotion's
     * eligibility conditions. Send null to remove all eligibility conditions. Shape $.anyOf[1]
     * (Value): {@link PromotionRuleGroupRequestInput}. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups. Shape $.anyOf[2] (Value): null.
     */
    "eligibility_rules"?: ((PromotionRuleGroupRequestInput) | (null));
    /**
     * Shape $ (Value): {@link PromotionExclusivityPatchInput} or null. Fields of the exclusivity
     * group and priority to change. Send null to remove the promotion from its exclusivity group.
     * Shape $.anyOf[1] (Value): {@link PromotionExclusivityPatchInput}. Send only fields to
     * change. Omitted fields keep their stored values. Send priority 0 to reset it. An empty
     * object is invalid. minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "exclusivity"?: ((PromotionExclusivityPatchInput) | (null));
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * application_method or eligibility_rules is present, including an empty collection or a
     * supported null clear. Optional for scalar updates. Use an integer string (decimal digits),
     * not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): integer string or null. Maximum number of redemptions across all codes and
     * automatic applications. Send null to remove the redemption limit. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "max_uses"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Shape $ (Value): string. Internal promotion name for dashboards, searching, and reporting.
     * minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Shape $ (Value): {@link PromotionSchedulePatchInput} or null. Fields of the promotion
     * schedule to change. Send null to remove the schedule. Shape $.anyOf[1] (Value): {@link
     * PromotionSchedulePatchInput}. Send only fields to change. Omitted fields keep their stored
     * values. null clears nullable subfields. An empty object is invalid. minProperties: 1. Shape
     * $.anyOf[2] (Value): null.
     */
    "schedule"?: ((PromotionSchedulePatchInput) | (null));
    /**
     * Shape $ (Value): string. Lifecycle status to set: active or inactive. Archived promotions
     * cannot be updated. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
});
/** Shape $ (Value): {@link UpdateRefundRequest}. The request body for: Update refund. */
export type UpdateRefundRequest = {
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
};
/** Shape $ (Value): {@link UpdateRefundRequestInput}. The request body for: Update refund. */
export type UpdateRefundRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
};
/**
 * Shape $ (Value): {@link UpdateReturnLineItemRequest}. The request body for: Update return line
 * item.
 */
export type UpdateReturnLineItemRequest = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "buyer_note"?: string | null;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Send null to clear it. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", null.
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | null | (string & {}) | null;
    /** Shape $ (Value): string. minLength: 1. */
    "return_reason_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateReturnLineItemRequestInput}. The request body for: Update return
 * line item.
 */
export type UpdateReturnLineItemRequestInput = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "buyer_note"?: string | null;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Send null to clear it. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", null.
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | null;
    /** Shape $ (Value): string. minLength: 1. */
    "return_reason_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateReturnPolicyRequest}. The request body for: Update return policy.
 */
export type UpdateReturnPolicyRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link UpdateReturnPolicyRequestInput}. The request body for: Update return
 * policy.
 */
export type UpdateReturnPolicyRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/**
 * Shape $ (Value): {@link UpdateReturnReasonRequest}. The request body for: Update return reason.
 */
export type UpdateReturnReasonRequest = ({
    /**
     * Shape $ (Value): Array of string. Catalog category handles this reason applies to. A reason
     * with categories is suggested, and accepted from a customer session, only for order lines
     * whose product is in one of them. A reason with no categories applies to every line. Not
     * product types or tags: use handles from GET /v1/categories. Requires expected_version. Shape
     * $[] (Value): string. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present:
     * category_handles. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Shape $ (Value): boolean. */
    "is_note_required"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): string. Set active to offer the reason or inactive to stop offering it. To
     * archive a merchant reason, use DELETE. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
});
/**
 * Shape $ (Value): {@link UpdateReturnReasonRequestInput}. The request body for: Update return
 * reason.
 */
export type UpdateReturnReasonRequestInput = ({
    /**
     * Shape $ (Value): Array of string. Catalog category handles this reason applies to. A reason
     * with categories is suggested, and accepted from a customer session, only for order lines
     * whose product is in one of them. A reason with no categories applies to every line. Not
     * product types or tags: use handles from GET /v1/categories. Requires expected_version. Shape
     * $[] (Value): string. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present:
     * category_handles. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Shape $ (Value): boolean. */
    "is_note_required"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): string. Set active to offer the reason or inactive to stop offering it. To
     * archive a merchant reason, use DELETE. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
});
/**
 * Shape $ (Value): {@link UpdateReturnReplacementLineItemInputBundle}. The `bundle` variant of
 * `UpdateReturnReplacementLineItemInput`.
 */
export type UpdateReturnReplacementLineItemInputBundle = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "bundle".
     */
    "type": "bundle" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "bundle". */
    "type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
}));
/**
 * Shape $ (Value): {@link UpdateReturnReplacementLineItemInputBundleInput}. The `bundle` variant
 * of `UpdateReturnReplacementLineItemInput`.
 */
export type UpdateReturnReplacementLineItemInputBundleInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "bundle".
     */
    "type": "bundle";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "bundle". */
    "type": "bundle";
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "name"?: never;
})));
/**
 * Shape $ (Value): {@link UpdateReturnReplacementLineItemInputCustom}. The `custom` variant of
 * `UpdateReturnReplacementLineItemInput`.
 */
export type UpdateReturnReplacementLineItemInputCustom = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "custom".
     */
    "type": "custom" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "custom". */
    "type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
}));
/**
 * Shape $ (Value): {@link UpdateReturnReplacementLineItemInputCustomInput}. The `custom` variant
 * of `UpdateReturnReplacementLineItemInput`.
 */
export type UpdateReturnReplacementLineItemInputCustomInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "custom".
     */
    "type": "custom";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "custom". */
    "type": "custom";
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/**
 * Shape $ (Value): {@link UpdateReturnReplacementLineItemInputVariant}. The `variant` variant of
 * `UpdateReturnReplacementLineItemInput`.
 */
export type UpdateReturnReplacementLineItemInputVariant = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "variant".
     */
    "type": "variant" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "variant". */
    "type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
}));
/**
 * Shape $ (Value): {@link UpdateReturnReplacementLineItemInputVariantInput}. The `variant` variant
 * of `UpdateReturnReplacementLineItemInput`.
 */
export type UpdateReturnReplacementLineItemInputVariantInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "variant".
     */
    "type": "variant";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "variant". */
    "type": "variant";
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}) & ({
    "name"?: never;
})));
/**
 * Shape $ (Value): {@link UpdateReturnReplacementLineItemRequest}. A replacement item to keep or
 * add when updating a return resolution. Include `return_replacement_line_item_id` to keep an
 * existing one.
 */
export type UpdateReturnReplacementLineItemRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<UpdateReturnReplacementLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateReturnReplacementLineItemRequestInput}. A replacement item to keep
 * or add when updating a return resolution. Include `return_replacement_line_item_id` to keep an
 * existing one.
 */
export type UpdateReturnReplacementLineItemRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<UpdateReturnReplacementLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputCustomInput & object, readonly unknown[]>));
/** Shape $ (Value): {@link UpdateReturnRequestInput}. The request body for: Update return. */
export type UpdateReturnRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional version of the Return. A stale value returns
     * VERSION_CONFLICT with the current Return version. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
};
/**
 * Shape $ (Value): {@link UpdateReturnResolutionAdjustmentRequest}. A fee or credit to keep or add
 * when updating a return resolution. Include `return_resolution_adjustment_id` to update an
 * existing one.
 */
export type UpdateReturnResolutionAdjustmentRequest = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id"?: string;
    /**
     * Shape $ (Value): string. Keep this member ID when updating an existing adjustment. Omit it
     * to create a new adjustment. minLength: 1.
     */
    "return_resolution_adjustment_id"?: string;
    /** Shape $ (Value): string.  Value enum: "applied", "waived". */
    "status"?: "applied" | "waived" | (string & {});
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link UpdateReturnResolutionAdjustmentRequestInput}. A fee or credit to keep
 * or add when updating a return resolution. Include `return_resolution_adjustment_id` to update an
 * existing one.
 */
export type UpdateReturnResolutionAdjustmentRequestInput = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id"?: string;
    /**
     * Shape $ (Value): string. Keep this member ID when updating an existing adjustment. Omit it
     * to create a new adjustment. minLength: 1.
     */
    "return_resolution_adjustment_id"?: string;
    /** Shape $ (Value): string.  Value enum: "applied", "waived". */
    "status"?: "applied" | "waived";
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit";
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link UpdateReturnResolutionLineItemRequest}. A return line and quantity to
 * keep or add when updating a return resolution.
 */
export type UpdateReturnResolutionLineItemRequest = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_resolution_line_item_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateReturnResolutionLineItemRequestInput}. A return line and quantity
 * to keep or add when updating a return resolution.
 */
export type UpdateReturnResolutionLineItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_resolution_line_item_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateReturnResolutionRequest}. The request body for: Update return
 * resolution.
 */
export type UpdateReturnResolutionRequest = ({
    /**
     * Shape $ (Value): Array of {@link UpdateReturnResolutionAdjustmentRequest}. Requires
     * expected_version. Shape $[] (Value): {@link UpdateReturnResolutionAdjustmentRequest}. A fee
     * or credit to keep or add when updating a return resolution. Include
     * `return_resolution_adjustment_id` to update an existing one.
     */
    "adjustments"?: Array<UpdateReturnResolutionAdjustmentRequest>;
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present: line_items,
     * replacement_line_items, adjustments. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): Array of {@link UpdateReturnResolutionLineItemRequest}. Requires
     * expected_version. Shape $[] (Value): {@link UpdateReturnResolutionLineItemRequest}. A return
     * line and quantity to keep or add when updating a return resolution.
     */
    "line_items"?: Array<UpdateReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link UpdateReturnReplacementLineItemRequest}. Requires
     * expected_version. Shape $[] (Value): {@link UpdateReturnReplacementLineItemRequest}. A
     * replacement item to keep or add when updating a return resolution. Include
     * `return_replacement_line_item_id` to keep an existing one.
     */
    "replacement_line_items"?: Array<UpdateReturnReplacementLineItemRequest>;
});
/**
 * Shape $ (Value): {@link UpdateReturnResolutionRequestInput}. The request body for: Update return
 * resolution.
 */
export type UpdateReturnResolutionRequestInput = ({
    /**
     * Shape $ (Value): Array of {@link UpdateReturnResolutionAdjustmentRequestInput}. Requires
     * expected_version. Shape $[] (Value): {@link UpdateReturnResolutionAdjustmentRequestInput}. A
     * fee or credit to keep or add when updating a return resolution. Include
     * `return_resolution_adjustment_id` to update an existing one.
     */
    "adjustments"?: Array<UpdateReturnResolutionAdjustmentRequestInput>;
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present: line_items,
     * replacement_line_items, adjustments. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): Array of {@link UpdateReturnResolutionLineItemRequestInput}. Requires
     * expected_version. Shape $[] (Value): {@link UpdateReturnResolutionLineItemRequestInput}. A
     * return line and quantity to keep or add when updating a return resolution.
     */
    "line_items"?: Array<UpdateReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): Array of {@link UpdateReturnReplacementLineItemRequestInput}. Requires
     * expected_version. Shape $[] (Value): {@link UpdateReturnReplacementLineItemRequestInput}. A
     * replacement item to keep or add when updating a return resolution. Include
     * `return_replacement_line_item_id` to keep an existing one.
     */
    "replacement_line_items"?: Array<UpdateReturnReplacementLineItemRequestInput>;
});
/** Shape $ (Value): {@link UpdateRiskListRequest}. The request body for: Update a risk list. */
export type UpdateRiskListRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Name of a merchant-created risk list. It can't be cleared.
     * minLength: 1.
     */
    "name": string;
};
/**
 * Shape $ (Value): {@link UpdateRiskListRequestInput}. The request body for: Update a risk list.
 */
export type UpdateRiskListRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Name of a merchant-created risk list. It can't be cleared.
     * minLength: 1.
     */
    "name": string;
};
/** Shape $ (Value): {@link UpdateRiskRuleRequest}. The request body for: Update a risk rule. */
export type UpdateRiskRuleRequest = ({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): integer string. Optional risk rule version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNode;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
})
    | ({
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNode;
})
    | ({
    /** Shape $ (Value): string. minLength: 1. */
    "description": string;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateRiskRuleRequestInput}. The request body for: Update a risk rule.
 */
export type UpdateRiskRuleRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds";
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): integer string. Optional risk rule version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNodeInput;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds";
})
    | ({
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeInput;
})
    | ({
    /** Shape $ (Value): string. minLength: 1. */
    "description": string;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status": "active" | "inactive";
}));
/**
 * Shape $ (Value): {@link UpdateServiceFulfillmentDetails}. Service fulfillment fields to change
 * when updating a fulfillment: scheduled times, completion time, and notes. Send null to clear a
 * field.
 */
export type UpdateServiceFulfillmentDetails = {
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "completed_at"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "notes"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_end_at"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_start_at"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link UpdateServiceFulfillmentDetailsInput}. Service fulfillment fields to
 * change when updating a fulfillment: scheduled times, completion time, and notes. Send null to
 * clear a field.
 */
export type UpdateServiceFulfillmentDetailsInput = {
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "completed_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "notes"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_end_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_start_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link UpdateSettingsRequest}. The request body for: Update merchant settings.
 */
export type UpdateSettingsRequest = ({
    /**
     * Shape $ (Value): {@link BrandingSettingsRequest} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link BrandingSettingsRequest}. Branding values to
     * change when updating settings. Send null for a color or `font_family` to clear it. Shape
     * $.anyOf[2] (Value): null.
     */
    "branding"?: ((BrandingSettingsRequest) | (null));
    /**
     * Shape $ (Value): {@link CheckoutSettings} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link CheckoutSettings}. Merchant defaults for checkout:
     * custom domain, delivery methods, expiration, payment options, required contact fields,
     * promotion codes, recovery email, and saved payment details. Shape $.anyOf[2] (Value): null.
     */
    "checkout"?: ((CheckoutSettings) | (null));
    /**
     * Shape $ (Value): {@link CustomerAccountSettings} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Flint then serves the default Flint-hosted account, and GET /v1/settings omits
     * customer_account. Shape $.anyOf[1] (Value): {@link CustomerAccountSettings}. Customer
     * account settings: hosted mode, merchant account URL, presentation, route templates, and what
     * buyers may do to their own subscriptions. Shape $.anyOf[2] (Value): null.
     */
    "customer_account"?: ((CustomerAccountSettings) | (null));
    /**
     * Shape $ (Value): {@link CustomerEmailDeliverySettings} or null. Patch object: fields you
     * send are applied, fields you omit are unchanged. Send null to remove every value you set in
     * this section. Shape $.anyOf[1] (Value): {@link CustomerEmailDeliverySettings}. For each kind
     * of customer email, whether Flint sends it or the merchant sends it. Shape $.anyOf[2]
     * (Value): null.
     */
    "customer_email_delivery"?: ((CustomerEmailDeliverySettings) | (null));
    /**
     * Shape $ (Value): integer string. The Settings.version last read by the caller. Required when
     * tax_identity is present, including null. Stale versions return VERSION_CONFLICT. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link FulfillmentSettings} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link FulfillmentSettings}. Merchant fulfillment
     * settings, including whether fulfillments require approval (`approval_required`). Shape
     * $.anyOf[2] (Value): null.
     */
    "fulfillment"?: ((FulfillmentSettings) | (null));
    /**
     * Shape $ (Value): {@link InventorySettings} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link InventorySettings}. Inventory settings: the
     * `low_stock_threshold` and how inventory failures are handled for each order source. Shape
     * $.anyOf[2] (Value): null.
     */
    "inventory"?: ((InventorySettings) | (null));
    /**
     * Shape $ (Value): {@link InvoiceSettingsPatch} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link InvoiceSettingsPatch}. Changes to a merchant's
     * invoice settings. Send only the fields to change, and send null on a nullable field to clear
     * it. minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "invoices"?: ((InvoiceSettingsPatch) | (null));
    /**
     * Shape $ (Value): {@link LegalSettingsRequest} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link LegalSettingsRequest}. Changes to a merchant's
     * legal settings. Send null on a URL to clear it. Shape $.anyOf[2] (Value): null.
     */
    "legal"?: ((LegalSettingsRequest) | (null));
    /**
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Merged by key. Caller-owned metadata.
     * Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to
     * null to remove it, or set metadata to null to clear all caller-owned metadata. An empty
     * object makes no change. Values can't be empty strings. Keys starting with flint_ are
     * reserved for Flint, are not returned, and cannot be written through the public API. Shape
     * $.anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. Shape
     * $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Shape $ (Value): {@link PaymentLimitSettingsPatch} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Clearing merchant limits preserves Flint support approvals. Cleared maps are
     * omitted from reads. Shape $.anyOf[1] (Value): {@link PaymentLimitSettingsPatch}. Changes to
     * a merchant's payment amount limits. Each map replaces the existing one, and null clears it.
     * minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "payment_limits"?: ((PaymentLimitSettingsPatch) | (null));
    /**
     * Shape $ (Value): {@link PromotionSettings} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link PromotionSettings}. Merchant promotion settings:
     * whether automatic promotions and codes are enabled, and how many promotions can apply to one
     * order. Shape $.anyOf[2] (Value): null.
     */
    "promotions"?: ((PromotionSettings) | (null));
    /**
     * Shape $ (Value): {@link ReceiptSettingsRequest} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link ReceiptSettingsRequest}. Receipt settings to
     * change when updating settings. Send null for `header_text` or `footer_text` to clear it.
     * Shape $.anyOf[2] (Value): null.
     */
    "receipts"?: ((ReceiptSettingsRequest) | (null));
    /**
     * Shape $ (Value): {@link SubscriptionSettings} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link SubscriptionSettings}. Subscription settings: the
     * default billing schedule owner, dunning retry days and end action, and the backorder email.
     * Shape $.anyOf[2] (Value): null.
     */
    "subscriptions"?: ((SubscriptionSettings) | (null));
    /**
     * Shape $ (Value): {@link TaxSettingsRequest} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link TaxSettingsRequest}. Tax settings to change when
     * updating settings. Send null for a category to clear it. Shape $.anyOf[2] (Value): null.
     */
    "tax"?: ((TaxSettingsRequest) | (null));
    /**
     * Shape $ (Value): {@link TaxIdentityPatch} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Legal identity displayed on invoices and credit notes. Requires expected_version
     * whenever present. Shape $.anyOf[1] (Value): {@link TaxIdentityPatch}. Merchant-provided
     * legal identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. Shape $.anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatch) | (null));
    /**
     * Shape $ (Value): {@link TippingSettingsPatch} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link TippingSettingsPatch}. Tipping settings to change
     * when updating settings. Omit a field to keep it; send null to clear a preselected tip.
     * minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "tipping"?: ((TippingSettingsPatch) | (null));
});
/**
 * Shape $ (Value): {@link UpdateSettingsRequestInput}. The request body for: Update merchant
 * settings.
 */
export type UpdateSettingsRequestInput = ({
    /**
     * Shape $ (Value): {@link BrandingSettingsRequestInput} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link BrandingSettingsRequestInput}. Branding values to
     * change when updating settings. Send null for a color or `font_family` to clear it. Shape
     * $.anyOf[2] (Value): null.
     */
    "branding"?: ((BrandingSettingsRequestInput) | (null));
    /**
     * Shape $ (Value): {@link CheckoutSettingsRequestRequestInput} or null. Patch object: fields
     * you send are applied, fields you omit are unchanged. Send null to remove every value you set
     * in this section. Shape $.anyOf[1] (Value): {@link CheckoutSettingsRequestRequestInput}.
     * Merchant defaults for checkout: custom domain, delivery methods, expiration, payment
     * options, required contact fields, promotion codes, recovery email, and saved payment
     * details. Shape $.anyOf[2] (Value): null.
     */
    "checkout"?: ((CheckoutSettingsRequestRequestInput) | (null));
    /**
     * Shape $ (Value): {@link CustomerAccountSettingsRequestRequestInput} or null. Patch object:
     * fields you send are applied, fields you omit are unchanged. Send null to remove every value
     * you set in this section. Flint then serves the default Flint-hosted account, and GET
     * /v1/settings omits customer_account. Shape $.anyOf[1] (Value): {@link
     * CustomerAccountSettingsRequestRequestInput}. Customer account settings: hosted mode,
     * merchant account URL, presentation, route templates, and what buyers may do to their own
     * subscriptions. Shape $.anyOf[2] (Value): null.
     */
    "customer_account"?: ((CustomerAccountSettingsRequestRequestInput) | (null));
    /**
     * Shape $ (Value): {@link CustomerEmailDeliverySettingsRequestRequestInput} or null. Patch
     * object: fields you send are applied, fields you omit are unchanged. Send null to remove
     * every value you set in this section. Shape $.anyOf[1] (Value): {@link
     * CustomerEmailDeliverySettingsRequestRequestInput}. For each kind of customer email, whether
     * Flint sends it or the merchant sends it. Shape $.anyOf[2] (Value): null.
     */
    "customer_email_delivery"?: ((CustomerEmailDeliverySettingsRequestRequestInput) | (null));
    /**
     * Shape $ (Value): integer string. The Settings.version last read by the caller. Required when
     * tax_identity is present, including null. Stale versions return VERSION_CONFLICT. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link FulfillmentSettingsRequestRequestInput} or null. Patch object:
     * fields you send are applied, fields you omit are unchanged. Send null to remove every value
     * you set in this section. Shape $.anyOf[1] (Value): {@link
     * FulfillmentSettingsRequestRequestInput}. Merchant fulfillment settings, including whether
     * fulfillments require approval (`approval_required`). Shape $.anyOf[2] (Value): null.
     */
    "fulfillment"?: ((FulfillmentSettingsRequestRequestInput) | (null));
    /**
     * Shape $ (Value): {@link InventorySettingsRequestRequestInput} or null. Patch object: fields
     * you send are applied, fields you omit are unchanged. Send null to remove every value you set
     * in this section. Shape $.anyOf[1] (Value): {@link InventorySettingsRequestRequestInput}.
     * Inventory settings: the `low_stock_threshold` and how inventory failures are handled for
     * each order source. Shape $.anyOf[2] (Value): null.
     */
    "inventory"?: ((InventorySettingsRequestRequestInput) | (null));
    /**
     * Shape $ (Value): {@link InvoiceSettingsPatchInput} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link InvoiceSettingsPatchInput}. Changes to a
     * merchant's invoice settings. Send only the fields to change, and send null on a nullable
     * field to clear it. minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "invoices"?: ((InvoiceSettingsPatchInput) | (null));
    /**
     * Shape $ (Value): {@link LegalSettingsRequestInput} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link LegalSettingsRequestInput}. Changes to a
     * merchant's legal settings. Send null on a URL to clear it. Shape $.anyOf[2] (Value): null.
     */
    "legal"?: ((LegalSettingsRequestInput) | (null));
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Merged by key. Caller-owned
     * metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a
     * key to null to remove it, or set metadata to null to clear all caller-owned metadata. An
     * empty object makes no change. Values can't be empty strings. Keys starting with flint_ are
     * reserved for Flint, are not returned, and cannot be written through the public API. Shape
     * $.anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. Shape
     * $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Shape $ (Value): {@link PaymentLimitSettingsPatchInput} or null. Patch object: fields you
     * send are applied, fields you omit are unchanged. Send null to remove every value you set in
     * this section. Clearing merchant limits preserves Flint support approvals. Cleared maps are
     * omitted from reads. Shape $.anyOf[1] (Value): {@link PaymentLimitSettingsPatchInput}.
     * Changes to a merchant's payment amount limits. Each map replaces the existing one, and null
     * clears it. minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "payment_limits"?: ((PaymentLimitSettingsPatchInput) | (null));
    /**
     * Shape $ (Value): {@link PromotionSettingsRequestRequestInput} or null. Patch object: fields
     * you send are applied, fields you omit are unchanged. Send null to remove every value you set
     * in this section. Shape $.anyOf[1] (Value): {@link PromotionSettingsRequestRequestInput}.
     * Merchant promotion settings: whether automatic promotions and codes are enabled, and how
     * many promotions can apply to one order. Shape $.anyOf[2] (Value): null.
     */
    "promotions"?: ((PromotionSettingsRequestRequestInput) | (null));
    /**
     * Shape $ (Value): {@link ReceiptSettingsRequestInput} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link ReceiptSettingsRequestInput}. Receipt settings to
     * change when updating settings. Send null for `header_text` or `footer_text` to clear it.
     * Shape $.anyOf[2] (Value): null.
     */
    "receipts"?: ((ReceiptSettingsRequestInput) | (null));
    /**
     * Shape $ (Value): {@link SubscriptionSettingsRequestRequestInput} or null. Patch object:
     * fields you send are applied, fields you omit are unchanged. Send null to remove every value
     * you set in this section. Shape $.anyOf[1] (Value): {@link
     * SubscriptionSettingsRequestRequestInput}. Subscription settings: the default billing
     * schedule owner, dunning retry days and end action, and the backorder email. Shape $.anyOf[2]
     * (Value): null.
     */
    "subscriptions"?: ((SubscriptionSettingsRequestRequestInput) | (null));
    /**
     * Shape $ (Value): {@link TaxSettingsRequestInput} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link TaxSettingsRequestInput}. Tax settings to change
     * when updating settings. Send null for a category to clear it. Shape $.anyOf[2] (Value):
     * null.
     */
    "tax"?: ((TaxSettingsRequestInput) | (null));
    /**
     * Shape $ (Value): {@link TaxIdentityPatchInput} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Legal identity displayed on invoices and credit notes. Requires expected_version
     * whenever present. Shape $.anyOf[1] (Value): {@link TaxIdentityPatchInput}. Merchant-provided
     * legal identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. Shape $.anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatchInput) | (null));
    /**
     * Shape $ (Value): {@link TippingSettingsPatchInput} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link TippingSettingsPatchInput}. Tipping settings to
     * change when updating settings. Omit a field to keep it; send null to clear a preselected
     * tip. minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "tipping"?: ((TippingSettingsPatchInput) | (null));
});
/** Shape $ (Value): {@link UpdateShipmentRequest}. The request body for: Update shipment. */
export type UpdateShipmentRequest = {
    /**
     * Shape $ (Value): integer string. Optional resource version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Requires external_system. External references are not unique. Use Idempotency-Key
     * for retries. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Name of the external system that external_reference_id
     * belongs to. External references are not unique. Use Idempotency-Key for retries. Send null
     * to clear it. minLength: 1.
     */
    "external_system"?: string | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
};
/** Shape $ (Value): {@link UpdateShipmentRequestInput}. The request body for: Update shipment. */
export type UpdateShipmentRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional resource version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Requires external_system. External references are not unique. Use Idempotency-Key
     * for retries. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Name of the external system that external_reference_id
     * belongs to. External references are not unique. Use Idempotency-Key for retries. Send null
     * to clear it. minLength: 1.
     */
    "external_system"?: string | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
};
/**
 * Shape $ (Value): {@link UpdateSubscriptionLineItemRequest}. The request body for: Update
 * subscription line item.
 */
export type UpdateSubscriptionLineItemRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateSubscriptionLineItemRequestInput}. The request body for: Update
 * subscription line item.
 */
export type UpdateSubscriptionLineItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateSubscriptionOfferRequest}. The request body for: Update
 * subscription offer. minProperties: 1.
 */
export type UpdateSubscriptionOfferRequest = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. minItems: 1. maxItems: 12.
     * uniqueItems: true. Shape $[] (Value): {@link SubscriptionIntervalOption}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * Shape $ (Value): integer string. The version read before editing. A mismatch returns
     * VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omission leaves this field unchanged. Null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength:
     * 1.
     */
    "product_ids"?: Array<string>;
    /**
     * Shape $ (Value): string or null. An active promotion with forever recurrence. On PATCH, null
     * removes the discount for new signups; omission keeps it. minLength: 1.
     */
    "promotion_id"?: string | null;
    /**
     * Shape $ (Value): string. Use active or inactive. Archive the offer with DELETE. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): Array of string. Delivery methods offered at signup. An empty array uses
     * the store's checkout defaults. Existing subscriptions keep their selected method. maxItems:
     * 25. uniqueItems: true. Shape $[] (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength:
     * 1.
     */
    "variant_ids"?: Array<string>;
};
/**
 * Shape $ (Value): {@link UpdateSubscriptionOfferRequestInput}. The request body for: Update
 * subscription offer. minProperties: 1.
 */
export type UpdateSubscriptionOfferRequestInput = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOptionInput}. minItems: 1. maxItems:
     * 12. uniqueItems: true. Shape $[] (Value): {@link SubscriptionIntervalOptionInput}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOptionInput>;
    /**
     * Shape $ (Value): integer string. The version read before editing. A mismatch returns
     * VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omission leaves this field unchanged. Null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.anyOf[1] (Value):
     * {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength:
     * 1.
     */
    "product_ids"?: Array<string>;
    /**
     * Shape $ (Value): string or null. An active promotion with forever recurrence. On PATCH, null
     * removes the discount for new signups; omission keeps it. minLength: 1.
     */
    "promotion_id"?: string | null;
    /**
     * Shape $ (Value): string. Use active or inactive. Archive the offer with DELETE. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): Array of string. Delivery methods offered at signup. An empty array uses
     * the store's checkout defaults. Existing subscriptions keep their selected method. maxItems:
     * 25. uniqueItems: true. Shape $[] (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength:
     * 1.
     */
    "variant_ids"?: Array<string>;
};
/**
 * Shape $ (Value): {@link UpdateSubscriptionPlanLineItemInputBundle}. The `bundle` variant of
 * `UpdateSubscriptionPlanLineItemInput`.
 */
export type UpdateSubscriptionPlanLineItemInputBundle = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifierRequest}. Shape $[] (Value): {@link
     * OrderLineItemModifierRequest}. A modifier selection you supply on a line item: a catalog
     * modifier by ID or a text modifier, with a quantity. Shape $[].metadata (Optional): {@link
     * MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * Shape $[].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. minLength: 1. Shape
     * $[].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Shape $[].quantity
     * (Optional): integer string. Whole-number quantity; fractional quantities are not supported.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape
     * $[].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. Shape $[].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". Shape $[].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalog}. The `catalog` variant of `OrderLineItemModifierInput`.
     * Shape $[].oneOf[2] (Value): {@link OrderLineItemModifierInputText}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Omission uses 1. Format: int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Shape $ (Value): string. ID of an existing item on this plan to retain. Omit for a new item.
     * Duplicate IDs and IDs from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * Shape $ (Value): Array of string. maxItems: 25. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /**
     * Shape $ (Value): {@link OrderLineItemTax}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTax;
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
}));
