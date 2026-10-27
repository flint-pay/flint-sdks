import type { DeliveryProfileConfigurationRequest, DeliveryProfileConfigurationRequestInput } from './types-13.js';
import type {
    DeliveryRateCallbackConfigurationPatchRequest,
    DeliveryRateCallbackConfigurationPatchRequestInput
} from './types-14.js';
import type { DeliveryZoneConfiguration, DeliveryZoneConfigurationInput } from './types-15.js';
import type { FulfillmentRecipientRequest, FulfillmentRecipientRequestInput } from './types-17.js';
import type {
    UpdateDeliveryFulfillmentDetails,
    UpdateDeliveryFulfillmentDetailsInput,
    TextModifierConfigPatchRequest,
    TextModifierConfigPatchRequestInput
} from './types-47.js';
import type {
    UpdatePickupFulfillmentDetails,
    UpdateServiceFulfillmentDetails,
    UpdatePickupFulfillmentDetailsInput,
    UpdateServiceFulfillmentDetailsInput
} from './types-49.js';
import type {
    InventoryAllocationConfigurationValue,
    InventoryAllocationConfigurationValueInput,
    InventoryCountObservationRequest,
    InventoryCountObservationRequestInput
} from './types-24.js';
import type {
    InventorySourceSystemRequest,
    InventorySourceSystemRequestInput,
    InventoryRoutingSource,
    InventoryRoutingSourceRequest,
    InventoryRoutingSourceRequestInput
} from './types-25.js';
import type {
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyInput,
    InvoiceCollectionRequest,
    InvoiceCollectionRequestInput
} from './types-26.js';
import type {
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationInput,
    InvoicePaymentDueRequest,
    InvoicePaymentDueRequestInput
} from './types-27.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type { InvoiceScheduleEntryWrite, InvoiceScheduleEntryWriteInput, LegalSettingsRequest } from './types-28.js';
import type { GiftCardPurchaseRecipientPatchRequest, GiftCardPurchaseRecipientPatchRequestInput } from './types-19.js';
import type {
    MoneyValue,
    MoneyValueInput,
    ModifierRequest,
    ModifierRequestInput,
    ModifierSetGroupRequest,
    ModifierSetGroupRequestInput
} from './types-31.js';
import type {
    OrderCalculatedLineItemTax,
    OrderLineItemModifierRequest,
    OrderCalculatedLineItemTaxInput,
    OrderLineItemModifierRequestInput,
    OrderCalculatedChargeTax,
    OrderCalculatedChargeTaxInput,
    OrderDeliveryDestinationRequest,
    OrderDeliveryDestinationRequestInput,
    OrderInventoryRoutingSourceRequestInput
} from './types-32.js';
import type { SubscribedLineRequest, SubscribedLineRequestInput } from './types-44.js';
import type { LocationAddressRequest, LocationCoordinate, LocationAddressRequestInput, LocationCoordinateInput } from './types-29.js';
import type { SubscriptionDeliveryRequest, SubscriptionDeliveryRequestInput } from './types-45.js';
import type { ImageRequest, ImageRequestInput } from './types-20.js';
import type { CreateOrderTip, CreateOrderTipInput } from './types-7.js';
import type { OrderTaxUpdateRequest, OrderTaxUpdateRequestInput } from './types-33.js';
import type { Dimensions, DimensionsInput } from './types-16.js';
import type { Weight, WeightInput } from './types-61.js';
import type {
    PartnerAppPermissionManifestEntry,
    PartnerAppPermissionManifestEntryInput,
    PaymentLinkCustomFieldPatchRequest,
    PaymentLinkCustomTextPatchRequest,
    PaymentLinkEventConfigPatchRequest,
    PaymentLinkCustomFieldPatchRequestInput,
    PaymentLinkCustomTextPatchRequestInput
} from './types-35.js';
import type { CheckoutBuyerFields, CheckoutBuyerFieldsInput } from './types-3.js';
import type {
    CheckoutPromotionConfig,
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutPromotionConfigInput,
    CheckoutTaxConfigInput,
    CheckoutTipConfigInput
} from './types-4.js';
import type {
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
} from './types-36.js';
/**
 * Shape $ (Value): {@link UpdateDeliveryProfileRequest}. The request body for: Update delivery
 * profile.
 */
export type UpdateDeliveryProfileRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryProfileConfigurationRequest}. Send the whole profile
     * configuration. It replaces the current one; leave configuration out to keep it. requirement
     * none allows no other keys, and quote profiles require origin_policy, combination_policy, and
     * splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery
     * planning settings you supply when creating or updating a delivery profile. Which fields are
     * allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration"?: DeliveryProfileConfigurationRequest;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): boolean. Send true to make this active profile the physical catalog
     * default. Can be combined with other mutable fields in one atomic update. Send
     * expected_version to fence the update against this profile's current version. Sending only
     * is_default true for the current default is a no-op: its version stays unchanged and no
     * events are emitted. False is invalid; make another profile the default instead. Value enum:
     * true.
     */
    "is_default"?: boolean;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryProfileConfigurationRequest}. Send the whole profile
     * configuration. It replaces the current one; leave configuration out to keep it. requirement
     * none allows no other keys, and quote profiles require origin_policy, combination_policy, and
     * splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery
     * planning settings you supply when creating or updating a delivery profile. Which fields are
     * allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequest;
})
    | ({
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata": Record<string, string | null> | null;
})
    | ({
    /**
     * Shape $ (Value): boolean. Send true to make this active profile the physical catalog
     * default. Can be combined with other mutable fields in one atomic update. Send
     * expected_version to fence the update against this profile's current version. Sending only
     * is_default true for the current default is a no-op: its version stays unchanged and no
     * events are emitted. False is invalid; make another profile the default instead. Value enum:
     * true.
     */
    "is_default": boolean;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateDeliveryProfileRequestInput}. The request body for: Update
 * delivery profile.
 */
export type UpdateDeliveryProfileRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryProfileConfigurationRequestInput}. Send the whole profile
     * configuration. It replaces the current one; leave configuration out to keep it. requirement
     * none allows no other keys, and quote profiles require origin_policy, combination_policy, and
     * splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery
     * planning settings you supply when creating or updating a delivery profile. Which fields are
     * allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration"?: DeliveryProfileConfigurationRequestInput;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): boolean. Send true to make this active profile the physical catalog
     * default. Can be combined with other mutable fields in one atomic update. Send
     * expected_version to fence the update against this profile's current version. Sending only
     * is_default true for the current default is a no-op: its version stays unchanged and no
     * events are emitted. False is invalid; make another profile the default instead. Value enum:
     * true.
     */
    "is_default"?: true;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryProfileConfigurationRequestInput}. Send the whole profile
     * configuration. It replaces the current one; leave configuration out to keep it. requirement
     * none allows no other keys, and quote profiles require origin_policy, combination_policy, and
     * splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery
     * planning settings you supply when creating or updating a delivery profile. Which fields are
     * allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequestInput;
})
    | ({
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata": Record<string, string | null> | null;
})
    | ({
    /**
     * Shape $ (Value): boolean. Send true to make this active profile the physical catalog
     * default. Can be combined with other mutable fields in one atomic update. Send
     * expected_version to fence the update against this profile's current version. Sending only
     * is_default true for the current default is a no-op: its version stays unchanged and no
     * events are emitted. False is invalid; make another profile the default instead. Value enum:
     * true.
     */
    "is_default": true;
}));
/**
 * Shape $ (Value): {@link UpdateDeliveryRateCallbackRequest}. The request body for: Update
 * delivery rate callback.
 */
export type UpdateDeliveryRateCallbackRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfigurationPatchRequest}. Only the keys you
     * send change; keys you leave out keep their current values. Null restores a key's default, as
     * each field describes. The result must be a configuration you could create. Requires
     * expected_version. An empty configuration is invalid. Only the keys you send change; keys you
     * leave out keep their current values. Null restores a key's default, as each field describes.
     * The result must be a configuration you could create. Requires expected_version. An empty
     * configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryRateCallbackConfigurationPatchRequest;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfigurationPatchRequest}. Only the keys you
     * send change; keys you leave out keep their current values. Null restores a key's default, as
     * each field describes. The result must be a configuration you could create. Requires
     * expected_version. An empty configuration is invalid. Only the keys you send change; keys you
     * leave out keep their current values. Null restores a key's default, as each field describes.
     * The result must be a configuration you could create. Requires expected_version. An empty
     * configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryRateCallbackConfigurationPatchRequest;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status": "inactive" | "active" | (string & {});
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateDeliveryRateCallbackRequestInput}. The request body for: Update
 * delivery rate callback.
 */
export type UpdateDeliveryRateCallbackRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfigurationPatchRequestInput}. Only the keys
     * you send change; keys you leave out keep their current values. Null restores a key's
     * default, as each field describes. The result must be a configuration you could create.
     * Requires expected_version. An empty configuration is invalid. Only the keys you send change;
     * keys you leave out keep their current values. Null restores a key's default, as each field
     * describes. The result must be a configuration you could create. Requires expected_version.
     * An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryRateCallbackConfigurationPatchRequestInput;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfigurationPatchRequestInput}. Only the keys
     * you send change; keys you leave out keep their current values. Null restores a key's
     * default, as each field describes. The result must be a configuration you could create.
     * Requires expected_version. An empty configuration is invalid. Only the keys you send change;
     * keys you leave out keep their current values. Null restores a key's default, as each field
     * describes. The result must be a configuration you could create. Requires expected_version.
     * An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryRateCallbackConfigurationPatchRequestInput;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status": "inactive" | "active";
}));
/**
 * Shape $ (Value): {@link UpdateDeliveryZoneRequest}. The request body for: Update delivery zone.
 */
export type UpdateDeliveryZoneRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryZoneConfiguration}. Send the whole geography. It replaces
     * the zone's current geography; leave configuration out to keep it. Null and an empty object
     * are invalid. Requires expected_version. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "configuration"?: DeliveryZoneConfiguration;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryZoneConfiguration}. Send the whole geography. It replaces
     * the zone's current geography; leave configuration out to keep it. Null and an empty object
     * are invalid. Requires expected_version. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfiguration;
})
    | ({
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata": Record<string, string | null> | null;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateDeliveryZoneRequestInput}. The request body for: Update delivery
 * zone.
 */
export type UpdateDeliveryZoneRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. Send the whole geography. It
     * replaces the zone's current geography; leave configuration out to keep it. Null and an empty
     * object are invalid. Requires expected_version. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "configuration"?: DeliveryZoneConfigurationInput;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. Send the whole geography. It
     * replaces the zone's current geography; leave configuration out to keep it. Null and an empty
     * object are invalid. Requires expected_version. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfigurationInput;
})
    | ({
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata": Record<string, string | null> | null;
}));
/** Shape $ (Value): {@link UpdateDeviceRequest}. The request body for: Update device. */
export type UpdateDeviceRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "location_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
};
/** Shape $ (Value): {@link UpdateDeviceRequestInput}. The request body for: Update device. */
export type UpdateDeviceRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "location_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
};
/**
 * Shape $ (Value): {@link UpdateDigitalFulfillmentDetails}. Digital fulfillment fields to change
 * when updating a fulfillment: delivery time and URL. Send null to clear a field.
 */
export type UpdateDigitalFulfillmentDetails = {
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "delivered_at"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "delivery_url"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdateDigitalFulfillmentDetailsInput}. Digital fulfillment fields to
 * change when updating a fulfillment: delivery time and URL. Send null to clear a field.
 */
export type UpdateDigitalFulfillmentDetailsInput = {
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "delivered_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "delivery_url"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdateFulfillmentRequest}. Provide at most one fulfillment details
 * object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment
 * execution details belong to shipments and packages. A supplied detail field must match the
 * stored fulfillment type. Omit details for metadata-only updates. Even null detail fields count
 * toward exclusivity.
 */
export type UpdateFulfillmentRequest = ({
    /**
     * Shape $ (Value): string or null. Completion evidence timestamp. Use only to correct
     * completion evidence on an already completed fulfillment; complete pending fulfillments with
     * POST /transitions. Send null to clear it. Format: date-time. minLength: 1.
     */
    "completed_at"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "customer_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "device_id"?: string | null;
    /**
     * Shape $ (Value): {@link UpdateDigitalFulfillmentDetails} or null. Shape $.anyOf[1] (Value):
     * {@link UpdateDigitalFulfillmentDetails}. Digital fulfillment fields to change when updating
     * a fulfillment: delivery time and URL. Send null to clear a field. Shape $.anyOf[2] (Value):
     * null.
     */
    "digital_details"?: ((UpdateDigitalFulfillmentDetails) | (null));
    /**
     * Shape $ (Value): integer string. Optional resource version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link UpdateDeliveryFulfillmentDetails} or null. Shape $.anyOf[1] (Value):
     * {@link UpdateDeliveryFulfillmentDetails}. Delivery fulfillment fields to change when
     * updating a fulfillment, such as courier, tracking, and delivery times. Send null to clear a
     * field. Shape $.anyOf[2] (Value): null.
     */
    "local_delivery_details"?: ((UpdateDeliveryFulfillmentDetails) | (null));
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "location_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): {@link UpdatePickupFulfillmentDetails} or null. Shape $.anyOf[1] (Value):
     * {@link UpdatePickupFulfillmentDetails}. Pickup fulfillment fields to change when updating a
     * fulfillment, such as location, pickup window, and curbside details. Send null to clear a
     * field. Shape $.anyOf[2] (Value): null.
     */
    "pickup_details"?: ((UpdatePickupFulfillmentDetails) | (null));
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest} or null. Shape $.anyOf[1] (Value):
     * {@link FulfillmentRecipientRequest}. Recipient details you supply when creating or updating
     * a fulfillment: name, email, phone, address, and handling instructions. Shape $.anyOf[2]
     * (Value): null.
     */
    "recipient"?: ((FulfillmentRecipientRequest) | (null));
    /**
     * Shape $ (Value): {@link UpdateServiceFulfillmentDetails} or null. Shape $.anyOf[1] (Value):
     * {@link UpdateServiceFulfillmentDetails}. Service fulfillment fields to change when updating
     * a fulfillment: scheduled times, completion time, and notes. Send null to clear a field.
     * Shape $.anyOf[2] (Value): null.
     */
    "service_details"?: ((UpdateServiceFulfillmentDetails) | (null));
});
/**
 * Shape $ (Value): {@link UpdateFulfillmentRequestInput}. Provide at most one fulfillment details
 * object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment
 * execution details belong to shipments and packages. A supplied detail field must match the
 * stored fulfillment type. Omit details for metadata-only updates. Even null detail fields count
 * toward exclusivity.
 */
export type UpdateFulfillmentRequestInput = ({
    /**
     * Shape $ (Value): string or null. Completion evidence timestamp. Use only to correct
     * completion evidence on an already completed fulfillment; complete pending fulfillments with
     * POST /transitions. Send null to clear it. Format: date-time. minLength: 1.
     */
    "completed_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "customer_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "device_id"?: string | null;
    /**
     * Shape $ (Value): {@link UpdateDigitalFulfillmentDetailsInput} or null. Shape $.anyOf[1]
     * (Value): {@link UpdateDigitalFulfillmentDetailsInput}. Digital fulfillment fields to change
     * when updating a fulfillment: delivery time and URL. Send null to clear a field. Shape
     * $.anyOf[2] (Value): null.
     */
    "digital_details"?: ((UpdateDigitalFulfillmentDetailsInput) | (null));
    /**
     * Shape $ (Value): integer string. Optional resource version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link UpdateDeliveryFulfillmentDetailsInput} or null. Shape $.anyOf[1]
     * (Value): {@link UpdateDeliveryFulfillmentDetailsInput}. Delivery fulfillment fields to
     * change when updating a fulfillment, such as courier, tracking, and delivery times. Send null
     * to clear a field. Shape $.anyOf[2] (Value): null.
     */
    "local_delivery_details"?: ((UpdateDeliveryFulfillmentDetailsInput) | (null));
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "location_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): {@link UpdatePickupFulfillmentDetailsInput} or null. Shape $.anyOf[1]
     * (Value): {@link UpdatePickupFulfillmentDetailsInput}. Pickup fulfillment fields to change
     * when updating a fulfillment, such as location, pickup window, and curbside details. Send
     * null to clear a field. Shape $.anyOf[2] (Value): null.
     */
    "pickup_details"?: ((UpdatePickupFulfillmentDetailsInput) | (null));
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput} or null. Shape $.anyOf[1] (Value):
     * {@link FulfillmentRecipientRequestInput}. Recipient details you supply when creating or
     * updating a fulfillment: name, email, phone, address, and handling instructions. Shape
     * $.anyOf[2] (Value): null.
     */
    "recipient"?: ((FulfillmentRecipientRequestInput) | (null));
    /**
     * Shape $ (Value): {@link UpdateServiceFulfillmentDetailsInput} or null. Shape $.anyOf[1]
     * (Value): {@link UpdateServiceFulfillmentDetailsInput}. Service fulfillment fields to change
     * when updating a fulfillment: scheduled times, completion time, and notes. Send null to clear
     * a field. Shape $.anyOf[2] (Value): null.
     */
    "service_details"?: ((UpdateServiceFulfillmentDetailsInput) | (null));
})
    & (({
    "pickup_details"?: never;
} | {
    "local_delivery_details"?: never;
}))
    & (({
    "pickup_details"?: never;
} | {
    "digital_details"?: never;
}))
    & (({
    "pickup_details"?: never;
} | {
    "service_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
} | {
    "digital_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
} | {
    "service_details"?: never;
}))
    & (({
    "digital_details"?: never;
} | {
    "service_details"?: never;
}));
/** Shape $ (Value): {@link UpdateGiftCardRequest}. The request body for: Update a gift card. */
export type UpdateGiftCardRequest = {
    /**
     * Shape $ (Value): string or null. Omission preserves the association; null clears it.
     * minLength: 1.
     */
    "customer_id"?: string | null;
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omission preserves the association; null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdateGiftCardRequestInput}. The request body for: Update a gift card.
 */
export type UpdateGiftCardRequestInput = {
    /**
     * Shape $ (Value): string or null. Omission preserves the association; null clears it.
     * minLength: 1.
     */
    "customer_id"?: string | null;
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omission preserves the association; null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdateInventoryAllocationPolicyRequest}. The request body for: Update
 * inventory allocation policy.
 */
export type UpdateInventoryAllocationPolicyRequest = ({
    /**
     * Shape $ (Value): {@link InventoryAllocationConfigurationValue}. Requires expected_version.
     * Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand
     * can be split, and how many Locations one assignment may use.
     */
    "configuration"?: InventoryAllocationConfigurationValue;
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present:
     * configuration. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
});
/**
 * Shape $ (Value): {@link UpdateInventoryAllocationPolicyRequestInput}. The request body for:
 * Update inventory allocation policy.
 */
export type UpdateInventoryAllocationPolicyRequestInput = ({
    /**
     * Shape $ (Value): {@link InventoryAllocationConfigurationValueInput}. Requires
     * expected_version. Routing rules for an inventory allocation policy: ranked groups of
     * Locations, whether demand can be split, and how many Locations one assignment may use.
     */
    "configuration"?: InventoryAllocationConfigurationValueInput;
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present:
     * configuration. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
});
/**
 * Shape $ (Value): {@link UpdateInventoryCountRequest}. The request body for: Update inventory
 * count.
 */
export type UpdateInventoryCountRequest = ({
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version": `${bigint}`;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryCountObservationRequest}. Complete replacement
     * containing every count item exactly once. Every physical version must match current stock or
     * the entire save is refused. Recount affected items before submitting fresh fences. minItems:
     * 1. maxItems: 100. Shape $[] (Value): {@link InventoryCountObservationRequest}. A counted
     * quantity for one item in an inventory count, with the physical version it was read at.
     */
    "observations": Array<InventoryCountObservationRequest>;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
     * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/**
 * Shape $ (Value): {@link UpdateInventoryCountRequestInput}. The request body for: Update
 * inventory count.
 */
export type UpdateInventoryCountRequestInput = ({
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryCountObservationRequestInput}. Complete
     * replacement containing every count item exactly once. Every physical version must match
     * current stock or the entire save is refused. Recount affected items before submitting fresh
     * fences. minItems: 1. maxItems: 100. Shape $[] (Value): {@link
     * InventoryCountObservationRequestInput}. A counted quantity for one item in an inventory
     * count, with the physical version it was read at.
     */
    "observations": Array<InventoryCountObservationRequestInput>;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for
     * an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/**
 * Shape $ (Value): {@link UpdateInventoryItemRequest}. The request body for: Update inventory
 * item.
 */
export type UpdateInventoryItemRequest = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "barcode"?: string | null;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Array of integer or null. Caller-owned metadata. Omit this field to leave
     * metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set
     * metadata to null to clear all caller-owned metadata. An empty object makes no change. Values
     * can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned,
     * and cannot be written through the public API. Shape $[] (Value): integer. minimum: 0. Shape
     * $.* (Value): string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "sku"?: string | null;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link UpdateInventoryItemRequestInput}. The request body for: Update inventory
 * item.
 */
export type UpdateInventoryItemRequestInput = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "barcode"?: string | null;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Array of integer or null. Caller-owned metadata. Omit this field to leave
     * metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set
     * metadata to null to clear all caller-owned metadata. An empty object makes no change. Values
     * can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned,
     * and cannot be written through the public API. Shape $[] (Value): integer. minimum: 0. Shape
     * $.* (Value): string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "sku"?: string | null;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/**
 * Shape $ (Value): {@link UpdateInventoryLevelRequest}. The request body for: Update inventory
 * level.
 */
export type UpdateInventoryLevelRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0.
     */
    "safety_stock_quantity": `${bigint}`;
};
/**
 * Shape $ (Value): {@link UpdateInventoryLevelRequestInput}. The request body for: Update
 * inventory level.
 */
export type UpdateInventoryLevelRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0.
     */
    "safety_stock_quantity": `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link UpdateInventoryReservationRequest}. The request body for: Update
 * inventory reservation.
 */
export type UpdateInventoryReservationRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. New hold deadline: after now and at most 24 hours from now. It can
     * be earlier or later than the current deadline. Format: date-time. minLength: 1.
     */
    "expires_at": string;
};
/**
 * Shape $ (Value): {@link UpdateInventoryReservationRequestInput}. The request body for: Update
 * inventory reservation.
 */
export type UpdateInventoryReservationRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. New hold deadline: after now and at most 24 hours from now. It can
     * be earlier or later than the current deadline. Format: date-time. minLength: 1.
     */
    "expires_at": string | globalThis.Date;
};
/**
 * Shape $ (Value): {@link UpdateInventoryTransferRequest}. The request body for: Update inventory
 * transfer.
 */
export type UpdateInventoryTransferRequest = ({
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present: lines. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Array of object. Replace the transfer's owned lines collection atomically.
     * Lines have no lifecycle outside this transfer. Include every line to keep, with its
     * inventory_transfer_line_id; omit it to remove it. Lines with departed or canceled quantity
     * must remain. Requires expected_version when present. minItems: 1. maxItems: 100. Shape $[]
     * (Value): object. Shape $[].condition (Optional): string. Default: "sellable". Value enum:
     * "sellable", "quality_control", "damaged", "quarantined". Shape $[].inventory_item_id
     * (Required): string. minLength: 1. Shape $[].inventory_transfer_line_id (Optional): string.
     * Existing line in this transfer. Omit to add a line. minLength: 1. Shape
     * $[].requested_quantity (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1.
     */
    "lines"?: Array<{
        /**
         * Shape $ (Value): string. Default: "sellable". Value enum: "sellable", "quality_control",
         * "damaged", "quarantined".
         */
        "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
        /** Shape $ (Value): string. minLength: 1. */
        "inventory_item_id": string;
        /**
         * Shape $ (Value): string. Existing line in this transfer. Omit to add a line. minLength:
         * 1.
         */
        "inventory_transfer_line_id"?: string;
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "requested_quantity": `${bigint}`;
    }>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "note"?: string | null;
});
/**
 * Shape $ (Value): {@link UpdateInventoryTransferRequestInput}. The request body for: Update
 * inventory transfer.
 */
export type UpdateInventoryTransferRequestInput = ({
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present: lines. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Array of object. Replace the transfer's owned lines collection atomically.
     * Lines have no lifecycle outside this transfer. Include every line to keep, with its
     * inventory_transfer_line_id; omit it to remove it. Lines with departed or canceled quantity
     * must remain. Requires expected_version when present. minItems: 1. maxItems: 100. Shape $[]
     * (Value): object. Shape $[].condition (Optional): string. Default: "sellable". Value enum:
     * "sellable", "quality_control", "damaged", "quarantined". Shape $[].inventory_item_id
     * (Required): string. minLength: 1. Shape $[].inventory_transfer_line_id (Optional): string.
     * Existing line in this transfer. Omit to add a line. minLength: 1. Shape
     * $[].requested_quantity (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1.
     */
    "lines"?: Array<{
        /**
         * Shape $ (Value): string. Default: "sellable". Value enum: "sellable", "quality_control",
         * "damaged", "quarantined".
         */
        "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined";
        /** Shape $ (Value): string. minLength: 1. */
        "inventory_item_id": string;
        /**
         * Shape $ (Value): string. Existing line in this transfer. Omit to add a line. minLength:
         * 1.
         */
        "inventory_transfer_line_id"?: string;
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "requested_quantity": `${bigint}` | bigint;
    }>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "note"?: string | null;
});
/**
 * Shape $ (Value): {@link UpdateInvoicePaymentTermRequest}. The request body for: Update invoice
 * payment term. minProperties: 1.
 */
export type UpdateInvoicePaymentTermRequest = {
    /**
     * Shape $ (Value): {@link InvoicePaymentTermCalculation}. How an invoice due date is
     * calculated from payment terms, such as on receipt, net days, or a day of the month.
     */
    "calculation"?: InvoicePaymentTermCalculation;
    /**
     * Shape $ (Value): integer. Optional version last read by the caller. Format: uint32. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link InvoiceLateFeePolicy} or null. Shape $.anyOf[1] (Value): {@link
     * InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed amount or a percentage, a
     * grace period in days, and whether Flint applies it automatically. Shape $.anyOf[2] (Value):
     * null.
     */
    "late_fee_policy"?: ((InvoiceLateFeePolicy) | (null) | (unknown));
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
};
/**
 * Shape $ (Value): {@link UpdateInvoicePaymentTermRequestInput}. The request body for: Update
 * invoice payment term. minProperties: 1.
 */
export type UpdateInvoicePaymentTermRequestInput = {
    /**
     * Shape $ (Value): {@link InvoicePaymentTermCalculationInput}. How an invoice due date is
     * calculated from payment terms, such as on receipt, net days, or a day of the month.
     */
    "calculation"?: InvoicePaymentTermCalculationInput;
    /**
     * Shape $ (Value): integer. Optional version last read by the caller. Format: uint32. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link InvoiceLateFeePolicyInput} or null. Shape $.anyOf[1] (Value): {@link
     * InvoiceLateFeePolicyInput}. A late fee for overdue invoices: a fixed amount or a percentage,
     * a grace period in days, and whether Flint applies it automatically. Shape $.anyOf[2]
     * (Value): null.
     */
    "late_fee_policy"?: ((InvoiceLateFeePolicyInput) | (null));
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
};
/** Shape $ (Value): {@link UpdateInvoiceRequest}. The request body for: Update invoice. */
export type UpdateInvoiceRequest = ({
    /**
     * Shape $ (Value): Array of string. Additional addresses copied on the invoice email and every
     * reminder. Send the complete list; [] removes every address. Shape $[] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * Shape $ (Value): {@link InvoiceCollectionRequest}. How the invoice is collected. Send the
     * invoice's collection object back unchanged, or a new one. merchant_default resolves again
     * from invoice settings when the draft is written. How an invoice is collected, used when
     * creating or updating an invoice: a `mode`, an optional saved payment method, and a payment
     * policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Shape $ (Value): integer string. Invoice version last read. Required when schedule_entries
     * is present. Required when any of these fields is present: schedule_entries. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices
     * filters on it by exact match. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Fine print at the bottom of the invoice and PDF. Send null
     * to clear it. minLength: 1.
     */
    "footer"?: string | null;
    /**
     * Shape $ (Value): string or null. Message to the customer, printed on the invoice and PDF.
     * Send null to clear it. minLength: 1.
     */
    "memo"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentDueRequest}. When the invoice is due. Send the
     * invoice's payment_due object back unchanged, or a new one. Sending payment_terms captures
     * the term's current revision again. When an invoice is due, used when creating or updating an
     * invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /**
     * Shape $ (Value): string or null. The buyer's purchase order number, printed on the invoice
     * and PDF. Send null to clear it. minLength: 1.
     */
    "po_number"?: string | null;
    /**
     * Shape $ (Value): string or null. Where Flint emails the invoice and its reminders. Required
     * at issue when delivery resolves to email, and when you schedule the issue. Send null to
     * clear it. minLength: 1.
     */
    "recipient_email"?: string | null;
    /**
     * Shape $ (Value): string or null. Your reference for the invoice, printed on the invoice and
     * PDF. Put the buyer's purchase order number in po_number instead. Send null to clear it.
     * minLength: 1.
     */
    "reference"?: string | null;
    /**
     * Shape $ (Value): boolean. Pauses (true) or resumes (false) the automatic reminder cadence.
     * Accepted only on an open or partially paid invoice with a balance remaining, and only alone
     * or with expected_version: every other field is draft-only. While paused, manual
     * send-reminder calls still work, and invoice.overdue and invoice.late_fee_due still fire. On
     * resume, reminder times that passed while paused do not fire. Sending the current value
     * succeeds without changing the invoice.
     */
    "reminders_paused"?: boolean;
    /**
     * Shape $ (Value): {@link AddressRequest}. Where the buyer sends offline payments, printed on
     * the invoice. Omit it to use the invoice settings remit-to address. A postal address you
     * supply when creating or updating a customer, invoice, fulfillment, or delivery selection.
     * Send null for `line2` to clear it.
     */
    "remit_to_address"?: AddressRequest;
    /**
     * Shape $ (Value): Array of {@link InvoiceScheduleEntryWrite}. Complete draft payment schedule
     * with at most 14 entries. Validation errors identify the entry by index, such as
     * schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding
     * whitespace. Omission preserves the current or default schedule; [] clears the authored
     * schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an
     * entry and expected_version to detect concurrent edits. maxItems: 14. Shape $[] (Value):
     * {@link InvoiceScheduleEntryWrite}. One payment schedule entry you supply when creating or
     * updating an invoice. Set its kind, how much it collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWrite>;
    /**
     * Shape $ (Value): string or null. When Flint issues and delivers this draft, as an RFC 3339
     * timestamp in the future. A scheduled issue delivers by email, so the draft needs
     * recipient_email. Clearing it cancels the scheduled issue. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | null;
    /**
     * Shape $ (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
     * format. The invoice and PDF print it as written, without timezone conversion. Send null to
     * clear it. Format: date. minLength: 1.
     */
    "service_date"?: string | null;
});
/** Shape $ (Value): {@link UpdateInvoiceRequestInput}. The request body for: Update invoice. */
export type UpdateInvoiceRequestInput = ({
    /**
     * Shape $ (Value): Array of string. Additional addresses copied on the invoice email and every
     * reminder. Send the complete list; [] removes every address. Shape $[] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * Shape $ (Value): {@link InvoiceCollectionRequestInput}. How the invoice is collected. Send
     * the invoice's collection object back unchanged, or a new one. merchant_default resolves
     * again from invoice settings when the draft is written. How an invoice is collected, used
     * when creating or updating an invoice: a `mode`, an optional saved payment method, and a
     * payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Shape $ (Value): integer string. Invoice version last read. Required when schedule_entries
     * is present. Required when any of these fields is present: schedule_entries. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices
     * filters on it by exact match. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Fine print at the bottom of the invoice and PDF. Send null
     * to clear it. minLength: 1.
     */
    "footer"?: string | null;
    /**
     * Shape $ (Value): string or null. Message to the customer, printed on the invoice and PDF.
     * Send null to clear it. minLength: 1.
     */
    "memo"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentDueRequestInput}. When the invoice is due. Send the
     * invoice's payment_due object back unchanged, or a new one. Sending payment_terms captures
     * the term's current revision again. When an invoice is due, used when creating or updating an
     * invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /**
     * Shape $ (Value): string or null. The buyer's purchase order number, printed on the invoice
     * and PDF. Send null to clear it. minLength: 1.
     */
    "po_number"?: string | null;
    /**
     * Shape $ (Value): string or null. Where Flint emails the invoice and its reminders. Required
     * at issue when delivery resolves to email, and when you schedule the issue. Send null to
     * clear it. minLength: 1.
     */
    "recipient_email"?: string | null;
    /**
     * Shape $ (Value): string or null. Your reference for the invoice, printed on the invoice and
     * PDF. Put the buyer's purchase order number in po_number instead. Send null to clear it.
     * minLength: 1.
     */
    "reference"?: string | null;
    /**
     * Shape $ (Value): boolean. Pauses (true) or resumes (false) the automatic reminder cadence.
     * Accepted only on an open or partially paid invoice with a balance remaining, and only alone
     * or with expected_version: every other field is draft-only. While paused, manual
     * send-reminder calls still work, and invoice.overdue and invoice.late_fee_due still fire. On
     * resume, reminder times that passed while paused do not fire. Sending the current value
     * succeeds without changing the invoice.
     */
    "reminders_paused"?: boolean;
    /**
     * Shape $ (Value): {@link AddressRequestInput}. Where the buyer sends offline payments,
     * printed on the invoice. Omit it to use the invoice settings remit-to address. A postal
     * address you supply when creating or updating a customer, invoice, fulfillment, or delivery
     * selection. Send null for `line2` to clear it.
     */
    "remit_to_address"?: AddressRequestInput;
    /**
     * Shape $ (Value): Array of {@link InvoiceScheduleEntryWriteInput}. Complete draft payment
     * schedule with at most 14 entries. Validation errors identify the entry by index, such as
     * schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding
     * whitespace. Omission preserves the current or default schedule; [] clears the authored
     * schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an
     * entry and expected_version to detect concurrent edits. maxItems: 14. Shape $[] (Value):
     * {@link InvoiceScheduleEntryWriteInput}. One payment schedule entry you supply when creating
     * or updating an invoice. Set its kind, how much it collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWriteInput>;
    /**
     * Shape $ (Value): string or null. When Flint issues and delivers this draft, as an RFC 3339
     * timestamp in the future. A scheduled issue delivers by email, so the draft needs
     * recipient_email. Clearing it cancels the scheduled issue. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
     * format. The invoice and PDF print it as written, without timezone conversion. Send null to
     * clear it. Format: date. minLength: 1.
     */
    "service_date"?: string | null;
});
/** Shape $ (Value): {@link UpdateLineItemRequest}. The request body for: Update line item. */
export type UpdateLineItemRequest = ({
    /** Shape $ (Value): string or null.  Send null to clear description. minLength: 1. */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Order version from the last order read, returned in
     * data.version. Required when any of these fields is present: modifiers, gift_card_recipient,
     * subscription. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRecipientPatchRequest} or null. Replaces the
     * recipient of an unfunded gift card purchase. Omission preserves it; null clears it. Send
     * expected_version from the order. Send null to clear gift_card_recipient. Requires
     * expected_version. Shape $.anyOf[1] (Value): {@link GiftCardPurchaseRecipientPatchRequest}.
     * Changes to the recipient of a gift card purchase when updating a line item. Send null for
     * `name` or `message` to clear it. Shape $.anyOf[2] (Value): null.
     */
    "gift_card_recipient"?: ((GiftCardPurchaseRecipientPatchRequest) | (null));
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Send null to clear all metadata.
     * Shape $.* (Value): string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifierRequest}. Shape $[] (Value): {@link
     * OrderLineItemModifierRequest}. A modifier selection you supply on a line item: a catalog
     * modifier by ID or a text modifier, with a quantity.
     */
    "modifiers"?: Array<OrderLineItemModifierRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link SubscribedLineRequest} or null. Selects an active subscription offer
     * and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the
     * selection. Requires expected_version from the order and clears the delivery selection when
     * terms change. Send null to clear subscription. Requires expected_version. Shape $.anyOf[1]
     * (Value): {@link SubscribedLineRequest}. Makes an order line a subscription purchase, with
     * the subscription offer and billing interval. Shape $.anyOf[2] (Value): null.
     */
    "subscription"?: ((SubscribedLineRequest) | (null));
    /**
     * Shape $ (Value): {@link OrderCalculatedLineItemTax}. Tax settings for an order line item
     * calculated by Flint or supplied by you, including the line item tax category and whether it
     * is taxable.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
});
/** Shape $ (Value): {@link UpdateLineItemRequestInput}. The request body for: Update line item. */
export type UpdateLineItemRequestInput = ({
    /** Shape $ (Value): string or null.  Send null to clear description. minLength: 1. */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Order version from the last order read, returned in
     * data.version. Required when any of these fields is present: modifiers, gift_card_recipient,
     * subscription. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRecipientPatchRequestInput} or null. Replaces the
     * recipient of an unfunded gift card purchase. Omission preserves it; null clears it. Send
     * expected_version from the order. Send null to clear gift_card_recipient. Requires
     * expected_version. Shape $.anyOf[1] (Value): {@link
     * GiftCardPurchaseRecipientPatchRequestInput}. Changes to the recipient of a gift card
     * purchase when updating a line item. Send null for `name` or `message` to clear it. Shape
     * $.anyOf[2] (Value): null.
     */
    "gift_card_recipient"?: ((GiftCardPurchaseRecipientPatchRequestInput) | (null));
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Send null to clear all metadata.
     * Shape $.* (Value): string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifierRequestInput}. Shape $[] (Value):
     * {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a line item: a
     * catalog modifier by ID or a text modifier, with a quantity.
     */
    "modifiers"?: Array<OrderLineItemModifierRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link SubscribedLineRequestInput} or null. Selects an active subscription
     * offer and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the
     * selection. Requires expected_version from the order and clears the delivery selection when
     * terms change. Send null to clear subscription. Requires expected_version. Shape $.anyOf[1]
     * (Value): {@link SubscribedLineRequestInput}. Makes an order line a subscription purchase,
     * with the subscription offer and billing interval. Shape $.anyOf[2] (Value): null.
     */
    "subscription"?: ((SubscribedLineRequestInput) | (null));
    /**
     * Shape $ (Value): {@link OrderCalculatedLineItemTaxInput}. Tax settings for an order line
     * item calculated by Flint or supplied by you, including the line item tax category and
     * whether it is taxable.
     */
    "tax"?: OrderCalculatedLineItemTaxInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
});
/**
 * Shape $ (Value): {@link UpdateLocationRequest}. Sparse Location update. Omitted fields stay
 * unchanged. address and coordinate are atomic value objects. Sending address requires coordinate.
 * Sending coordinate_source requires coordinate. A non-null coordinate requires a non-null
 * coordinate_source. coordinate: null clears both coordinate and coordinate_source;
 * coordinate_source must then be omitted or null. timezone and coordinate may each be updated
 * without address. geography_version advances only when address, timezone, coordinate, or
 * coordinate_source changes; version advances on every Location change.
 */
export type UpdateLocationRequest = ({
    /**
     * Shape $ (Value): {@link LocationAddressRequest}. Complete replacement postal address,
     * validated as on create. Requires coordinate in the same request, including null to clear it.
     * The street address you supply when creating or updating a merchant location. Send null on an
     * optional field to clear it.
     */
    "address"?: LocationAddressRequest;
    /**
     * Shape $ (Value): {@link LocationCoordinate} or null. Complete replacement coordinate. Send
     * null to clear both coordinate and coordinate_source. A non-null value requires
     * coordinate_source in the same request. Shape $.anyOf[1] (Value): {@link LocationCoordinate}.
     * A latitude and longitude for a merchant location. Shape $.anyOf[2] (Value): null.
     */
    "coordinate"?: ((LocationCoordinate) | (null));
    /**
     * Shape $ (Value): string or null. Source of the coordinate sent in the same request. A
     * non-null coordinate requires merchant_supplied or geocoded. Send null only with coordinate:
     * null to clear both fields. Value enum: "merchant_supplied", "geocoded", null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): boolean. Whether this Location accepts inventory allocation. Sending this
     * field requires commerce.inventory_locations.write in addition to the route scope.
     */
    "inventory_allocation_enabled"?: boolean;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. maxProperties: 50. Shape $.*
     * (Value): string or null. minLength: 1. maxLength: 4096.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): string. IANA timezone for local schedules, validated as on create. Can be
     * updated without address. minLength: 1.
     */
    "timezone"?: string;
});
/**
 * Shape $ (Value): {@link UpdateLocationRequestInput}. Sparse Location update. Omitted fields stay
 * unchanged. address and coordinate are atomic value objects. Sending address requires coordinate.
 * Sending coordinate_source requires coordinate. A non-null coordinate requires a non-null
 * coordinate_source. coordinate: null clears both coordinate and coordinate_source;
 * coordinate_source must then be omitted or null. timezone and coordinate may each be updated
 * without address. geography_version advances only when address, timezone, coordinate, or
 * coordinate_source changes; version advances on every Location change.
 */
export type UpdateLocationRequestInput = ({
    /**
     * Shape $ (Value): {@link LocationAddressRequestInput}. Complete replacement postal address,
     * validated as on create. Requires coordinate in the same request, including null to clear it.
     * The street address you supply when creating or updating a merchant location. Send null on an
     * optional field to clear it.
     */
    "address"?: LocationAddressRequestInput;
    /**
     * Shape $ (Value): {@link LocationCoordinateInput} or null. Complete replacement coordinate.
     * Send null to clear both coordinate and coordinate_source. A non-null value requires
     * coordinate_source in the same request. Shape $.anyOf[1] (Value): {@link
     * LocationCoordinateInput}. A latitude and longitude for a merchant location. Shape $.anyOf[2]
     * (Value): null.
     */
    "coordinate"?: ((LocationCoordinateInput) | (null));
    /**
     * Shape $ (Value): string or null. Source of the coordinate sent in the same request. A
     * non-null coordinate requires merchant_supplied or geocoded. Send null only with coordinate:
     * null to clear both fields. Value enum: "merchant_supplied", "geocoded", null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): boolean. Whether this Location accepts inventory allocation. Sending this
     * field requires commerce.inventory_locations.write in addition to the route scope.
     */
    "inventory_allocation_enabled"?: boolean;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. maxProperties: 50. Shape $.*
     * (Value): string or null. minLength: 1. maxLength: 4096.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): string. IANA timezone for local schedules, validated as on create. Can be
     * updated without address. minLength: 1.
     */
    "timezone"?: string;
});
/**
 * Shape $ (Value): {@link UpdateMeRequest}. The request body for: Update the current buyer
 * profile. minProperties: 1.
 */
export type UpdateMeRequest = {
    /**
     * Shape $ (Value): string or null. The active off_session payment method to use by default.
     * Omit to leave unchanged; null clears it. minLength: 1.
     */
    "default_payment_method_id"?: string | null;
    /**
     * Shape $ (Value): integer string. The customer version you read. A different version refuses
     * the update. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "name"?: string | null;
    /**
     * Shape $ (Value): string or null. E.164 phone number. Send null to remove it. minLength: 1.
     */
    "phone"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdateMeRequestInput}. The request body for: Update the current buyer
 * profile. minProperties: 1.
 */
export type UpdateMeRequestInput = {
    /**
     * Shape $ (Value): string or null. The active off_session payment method to use by default.
     * Omit to leave unchanged; null clears it. minLength: 1.
     */
    "default_payment_method_id"?: string | null;
    /**
     * Shape $ (Value): integer string. The customer version you read. A different version refuses
     * the update. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "name"?: string | null;
    /**
     * Shape $ (Value): string or null. E.164 phone number. Send null to remove it. minLength: 1.
     */
    "phone"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdateMeSubscriptionLineItemRequest}. The request body for: Swap
 * subscription variant.
 */
export type UpdateMeSubscriptionLineItemRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id": string;
};
/**
 * Shape $ (Value): {@link UpdateMeSubscriptionLineItemRequestInput}. The request body for: Swap
 * subscription variant.
 */
export type UpdateMeSubscriptionLineItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id": string;
};
/**
 * Shape $ (Value): {@link UpdateMeSubscriptionRequest}. The request body for: Update subscription.
 */
export type UpdateMeSubscriptionRequest = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /** Shape $ (Value): boolean.  Value enum: false. */
    "cancel_at_period_end"?: boolean;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryRequest}. The delivery preference to set on a
     * subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequest;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_method_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
});
/**
 * Shape $ (Value): {@link UpdateMeSubscriptionRequestInput}. The request body for: Update
 * subscription.
 */
export type UpdateMeSubscriptionRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /** Shape $ (Value): boolean.  Value enum: false. */
    "cancel_at_period_end"?: false;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryRequestInput}. The delivery preference to set on
     * a subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequestInput;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_method_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
});
/** Shape $ (Value): {@link UpdateMerchantRequest}. The request body for: Update merchant. */
export type UpdateMerchantRequest = {
    /**
     * Shape $ (Value): {@link AddressRequest}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
     */
    "address"?: AddressRequest;
    /**
     * Shape $ (Value): string. Set the merchant default to any supported API version using a
     * live-mode API key or the live dashboard environment. Omit to leave it unchanged. Null is not
     * accepted. The default is shared across live and test environments; requests with
     * Flint-Version use that header instead. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Shape $ (Value): string. Business name buyers see. Limited to 120 characters (Unicode code
     * points) before trimming surrounding whitespace. The trimmed name must not be empty. The name
     * cannot be cleared, and only live credentials can set it. minLength: 1. maxLength: 120.
     */
    "business_name"?: string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "email"?: string | null;
    /**
     * Shape $ (Value): integer string. Merchant profile version last read. A different current
     * version returns 409 VERSION_CONFLICT. Send this value when saving a logo or icon to detect
     * concurrent profile edits. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link ImageRequest} or null. A square image, at least 128 by 128 pixels,
     * shown where the store needs a small mark: browser tabs and compact headers. Shape $.anyOf[1]
     * (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional `alt` text
     * and external reference. Shape $.anyOf[2] (Value): null.
     */
    "icon"?: ((ImageRequest) | (null) | (unknown));
    /**
     * Shape $ (Value): {@link ImageRequest} or null. Shape $.anyOf[1] (Value): {@link
     * ImageRequest}. An image you supply by `source_url`, with optional `alt` text and external
     * reference. Shape $.anyOf[2] (Value): null.
     */
    "logo"?: ((ImageRequest) | (null) | (unknown));
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "phone"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "reporting_timezone"?: string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "support_email"?: string | null;
    /**
     * Shape $ (Value): string or null. Support phone in E.164 format, for example +12125551234.
     * Send null to clear it. minLength: 1. maxLength: 16. pattern: ^\+[1-9][0-9]{6,14}$.
     */
    "support_phone"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "support_url"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "website_url"?: string | null;
};
/** Shape $ (Value): {@link UpdateMerchantRequestInput}. The request body for: Update merchant. */
export type UpdateMerchantRequestInput = {
    /**
     * Shape $ (Value): {@link AddressRequestInput}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
     */
    "address"?: AddressRequestInput;
    /**
     * Shape $ (Value): string. Set the merchant default to any supported API version using a
     * live-mode API key or the live dashboard environment. Omit to leave it unchanged. Null is not
     * accepted. The default is shared across live and test environments; requests with
     * Flint-Version use that header instead. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Shape $ (Value): string. Business name buyers see. Limited to 120 characters (Unicode code
     * points) before trimming surrounding whitespace. The trimmed name must not be empty. The name
     * cannot be cleared, and only live credentials can set it. minLength: 1. maxLength: 120.
     */
    "business_name"?: string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "email"?: string | null;
    /**
     * Shape $ (Value): integer string. Merchant profile version last read. A different current
     * version returns 409 VERSION_CONFLICT. Send this value when saving a logo or icon to detect
     * concurrent profile edits. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link ImageRequestInput} or null. A square image, at least 128 by 128
     * pixels, shown where the store needs a small mark: browser tabs and compact headers. Shape
     * $.anyOf[1] (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
     * optional `alt` text and external reference. Shape $.anyOf[2] (Value): null.
     */
    "icon"?: ((ImageRequestInput) | (null));
    /**
     * Shape $ (Value): {@link ImageRequestInput} or null. Shape $.anyOf[1] (Value): {@link
     * ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and
     * external reference. Shape $.anyOf[2] (Value): null.
     */
    "logo"?: ((ImageRequestInput) | (null));
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "phone"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "reporting_timezone"?: string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "support_email"?: string | null;
    /**
     * Shape $ (Value): string or null. Support phone in E.164 format, for example +12125551234.
     * Send null to clear it. minLength: 1. maxLength: 16. pattern: ^\+[1-9][0-9]{6,14}$.
     */
    "support_phone"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "support_url"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "website_url"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdateModifierGroupRequest}. The request body for: Update modifier
 * group.
 */
export type UpdateModifierGroupRequest = ({
    /**
     * Shape $ (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     */
    "allow_quantities"?: boolean;
    /**
     * Shape $ (Value): integer string. Modifier group version last read by the caller. Required
     * when modifiers is present. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): integer string or null. Maximum whole-number quantity for each selected
     * list modifier. Omit it to keep the current value; send null to clear it. Fractional
     * quantities are not supported. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64.
     */
    "max_quantity"?: `${bigint}` | null;
    /**
     * Shape $ (Value): integer or null. Maximum number of distinct list modifiers buyers can
     * select. Omit it to keep the current value; send null to remove the limit. Format: int32.
     */
    "max_selected"?: number | null;
    /**
     * Shape $ (Value): integer string or null. Maximum combined whole-number quantity across
     * selected list modifiers. Omit it to keep the current value; send null to clear it.
     * Fractional quantities are not supported. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "max_total_quantity"?: `${bigint}` | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Omitted metadata is unchanged. Objects
     * merge by key, null values delete keys, an empty object is a no-op, and null clears all
     * metadata. The merged map can contain at most 50 keys. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): integer string or null. Minimum whole-number quantity for each selected
     * list modifier. Omit it to keep the current value; send null to clear it. Fractional
     * quantities are not supported. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64.
     */
    "min_quantity"?: `${bigint}` | null;
    /**
     * Shape $ (Value): integer or null. Minimum number of distinct list modifiers buyers must
     * select. Omit it to keep the current value; send null to remove the minimum. Format: int32.
     */
    "min_selected"?: number | null;
    /**
     * Shape $ (Value): Array of {@link ModifierRequest}. Replaces all modifiers atomically.
     * Include modifier_id to retain an existing modifier, omit the ID to create one, and omit a
     * previous modifier to archive it. Omit the array to leave modifiers unchanged. An empty array
     * clears modifiers when the group rules permit it. Null is not accepted. Shape $[] (Value):
     * {@link ModifierRequest}. A modifier you supply when creating or updating a modifier group,
     * such as an add-on with a price change.
     */
    "modifiers"?: Array<ModifierRequest>;
    /**
     * Shape $ (Value): string. Name of the modifier group shown to buyers. minLength: 1.
     * maxLength: 255.
     */
    "name"?: string;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear in fulfillment details
     * unless overridden for a modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier group. Only active groups can be
     * offered to buyers; archived groups remain readable and cannot be edited. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): {@link TextModifierConfigPatchRequest} or null. Patch text entry rules by
     * field. Omitted fields keep their current values; null clears the text configuration when the
     * group rules permit it. An empty object is invalid. Shape $.anyOf[1] (Value): {@link
     * TextModifierConfigPatchRequest}. Send only text fields to change. Omitted fields keep their
     * stored values. null clears min_length or max_length. An empty object is invalid. The merged
     * configuration is validated. minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "text"?: ((TextModifierConfigPatchRequest) | (null));
});
/**
 * Shape $ (Value): {@link UpdateModifierGroupRequestInput}. The request body for: Update modifier
 * group.
 */
export type UpdateModifierGroupRequestInput = ({
    /**
     * Shape $ (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     */
    "allow_quantities"?: boolean;
    /**
     * Shape $ (Value): integer string. Modifier group version last read by the caller. Required
     * when modifiers is present. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): integer string or null. Maximum whole-number quantity for each selected
     * list modifier. Omit it to keep the current value; send null to clear it. Fractional
     * quantities are not supported. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64.
     */
    "max_quantity"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): integer or null. Maximum number of distinct list modifiers buyers can
     * select. Omit it to keep the current value; send null to remove the limit. Format: int32.
     */
    "max_selected"?: number | null;
    /**
     * Shape $ (Value): integer string or null. Maximum combined whole-number quantity across
     * selected list modifiers. Omit it to keep the current value; send null to clear it.
     * Fractional quantities are not supported. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "max_total_quantity"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Omitted metadata is unchanged. Objects
     * merge by key, null values delete keys, an empty object is a no-op, and null clears all
     * metadata. The merged map can contain at most 50 keys. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): integer string or null. Minimum whole-number quantity for each selected
     * list modifier. Omit it to keep the current value; send null to clear it. Fractional
     * quantities are not supported. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64.
     */
    "min_quantity"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): integer or null. Minimum number of distinct list modifiers buyers must
     * select. Omit it to keep the current value; send null to remove the minimum. Format: int32.
     */
    "min_selected"?: number | null;
    /**
     * Shape $ (Value): Array of {@link ModifierRequestInput}. Replaces all modifiers atomically.
     * Include modifier_id to retain an existing modifier, omit the ID to create one, and omit a
     * previous modifier to archive it. Omit the array to leave modifiers unchanged. An empty array
     * clears modifiers when the group rules permit it. Null is not accepted. Shape $[] (Value):
     * {@link ModifierRequestInput}. A modifier you supply when creating or updating a modifier
     * group, such as an add-on with a price change.
     */
    "modifiers"?: Array<ModifierRequestInput>;
    /**
     * Shape $ (Value): string. Name of the modifier group shown to buyers. minLength: 1.
     * maxLength: 255.
     */
    "name"?: string;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear in fulfillment details
     * unless overridden for a modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier group. Only active groups can be
     * offered to buyers; archived groups remain readable and cannot be edited. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): {@link TextModifierConfigPatchRequestInput} or null. Patch text entry rules
     * by field. Omitted fields keep their current values; null clears the text configuration when
     * the group rules permit it. An empty object is invalid. Shape $.anyOf[1] (Value): {@link
     * TextModifierConfigPatchRequestInput}. Send only text fields to change. Omitted fields keep
     * their stored values. null clears min_length or max_length. An empty object is invalid. The
     * merged configuration is validated. minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "text"?: ((TextModifierConfigPatchRequestInput) | (null));
});
/** Shape $ (Value): {@link UpdateModifierSetRequest}. The request body for: Update modifier set. */
export type UpdateModifierSetRequest = ({
    /**
     * Shape $ (Value): integer string. Modifier set version last read by the caller. Required when
     * modifier_groups is present. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Omitted metadata is unchanged. Objects
     * merge by key, null values delete keys, an empty object is a no-op, and null clears all
     * metadata. The merged map can contain at most 50 keys. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): Array of {@link ModifierSetGroupRequest}. Replaces the set's group entries
     * atomically. Include modifier_set_group_id to retain an entry or omit it to create one.
     * Entries omitted from the array are removed. Omit the array to leave entries unchanged; send
     * [] to clear them. Shape $[] (Value): {@link ModifierSetGroupRequest}. A modifier group you
     * add to a modifier set, either an existing group by ID or a new inline group, with selection
     * limits and overrides.
     */
    "modifier_groups"?: Array<ModifierSetGroupRequest>;
    /**
     * Shape $ (Value): string. Name used to identify this modifier set. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier set. Only active sets can be
     * offered to buyers; archived sets remain readable and cannot be edited. Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
});
/**
 * Shape $ (Value): {@link UpdateModifierSetRequestInput}. The request body for: Update modifier
 * set.
 */
export type UpdateModifierSetRequestInput = ({
    /**
     * Shape $ (Value): integer string. Modifier set version last read by the caller. Required when
     * modifier_groups is present. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Omitted metadata is unchanged. Objects
     * merge by key, null values delete keys, an empty object is a no-op, and null clears all
     * metadata. The merged map can contain at most 50 keys. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): Array of {@link ModifierSetGroupRequestInput}. Replaces the set's group
     * entries atomically. Include modifier_set_group_id to retain an entry or omit it to create
     * one. Entries omitted from the array are removed. Omit the array to leave entries unchanged;
     * send [] to clear them. Shape $[] (Value): {@link ModifierSetGroupRequestInput}. A modifier
     * group you add to a modifier set, either an existing group by ID or a new inline group, with
     * selection limits and overrides.
     */
    "modifier_groups"?: Array<ModifierSetGroupRequestInput>;
    /**
     * Shape $ (Value): string. Name used to identify this modifier set. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier set. Only active sets can be
     * offered to buyers; archived sets remain readable and cannot be edited. Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive";
});
/** Shape $ (Value): {@link UpdateOrderChargeRequest}. The request body for: Update order charge. */
export type UpdateOrderChargeRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string.  Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /**
     * Shape $ (Value): string or null. Send null to clear description. minLength: 1. maxLength:
     * 2048.
     */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string or null.  Send null to unlink the fulfillment. minLength: 1. */
    "fulfillment_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Send null to clear all metadata.
     * Shape $.* (Value): string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): {@link OrderCalculatedChargeTax}. Tax settings for an order charge
     * calculated by Flint or supplied by you, including the charge's tax category and whether it
     * is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Shape $ (Value): string. Value enum: "service_fee", "delivery_fee", "shipping_fee",
     * "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee",
     * "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee",
     * "fulfillment_fee", "restocking_fee", "rush_fee", "other".
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
/**
 * Shape $ (Value): {@link UpdateOrderChargeRequestInput}. The request body for: Update order
 * charge.
 */
export type UpdateOrderChargeRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string.  Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /**
     * Shape $ (Value): string or null. Send null to clear description. minLength: 1. maxLength:
     * 2048.
     */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string or null.  Send null to unlink the fulfillment. minLength: 1. */
    "fulfillment_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Send null to clear all metadata.
     * Shape $.* (Value): string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): {@link OrderCalculatedChargeTaxInput}. Tax settings for an order charge
     * calculated by Flint or supplied by you, including the charge's tax category and whether it
     * is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxInput;
    /**
     * Shape $ (Value): string. Value enum: "service_fee", "delivery_fee", "shipping_fee",
     * "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee",
     * "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee",
     * "fulfillment_fee", "restocking_fee", "rush_fee", "other".
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
/**
 * Shape $ (Value): {@link UpdateOrderRequest}. The request body for: Update order. minProperties:
 * 1.
 */
export type UpdateOrderRequest = {
    /**
     * Shape $ (Value): string or null. Buyer-provided note about this order, such as a gift
     * message or purchase preference. Send null to clear it. minLength: 1. maxLength: 1000.
     */
    "buyer_note"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRequest} or null. Complete replacement
     * destination. Allowed while the order is open and unpaid and no delivery selection controls
     * it. A merchant may also correct a paid subscription signup or renewal before shipment by
     * sending expected_version, when the committed delivery methods remain eligible and shipping
     * and tax totals stay the same. A paid destination cannot be cleared. Send null to clear an
     * unpaid order's delivery destination. Shape $.anyOf[1] (Value): {@link
     * OrderDeliveryDestinationRequest}. The delivery destination you set when creating or updating
     * an order, with an address and an optional recipient. Shape $.anyOf[2] (Value): null.
     */
    "delivery_destination"?: ((OrderDeliveryDestinationRequest) | (null));
    /**
     * Shape $ (Value): integer string. Order version from the last order read. Required when
     * correcting a paid delivery destination. Optional for other updates; when supplied, the
     * update fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear external_reference_id. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Internal note about this order, visible only to the
     * merchant. Send null to clear it. minLength: 1. maxLength: 1000.
     */
    "internal_note"?: string | null;
    /**
     * Shape $ (Value): {@link InventoryRoutingSource}. Where inventory for an order is allocated
     * from: a fixed location, an allocation policy, or a specific policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Send null to clear caller-owned
     * metadata and preserve Flint-managed keys. Shape $.* (Value): string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): {@link CreateOrderTip} or null. Requested tip to set or replace. Send null
     * to clear the current requested tip. Shape $.anyOf[1] (Value): {@link CreateOrderTip}.
     * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
     * amount_money or percent. Shape $.anyOf[2] (Value): null.
     */
    "requested_tip"?: ((CreateOrderTip) | (null) | (unknown));
    /**
     * Shape $ (Value): {@link OrderTaxUpdateRequest}. Changes to an order's tax settings: whether
     * tax is enabled, the calculation, the location, and per-line-item or per-charge calculations.
     */
    "tax"?: OrderTaxUpdateRequest;
};
/**
 * Shape $ (Value): {@link UpdateOrderRequestInput}. The request body for: Update order.
 * minProperties: 1.
 */
export type UpdateOrderRequestInput = {
    /**
     * Shape $ (Value): string or null. Buyer-provided note about this order, such as a gift
     * message or purchase preference. Send null to clear it. minLength: 1. maxLength: 1000.
     */
    "buyer_note"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRequestInput} or null. Complete replacement
     * destination. Allowed while the order is open and unpaid and no delivery selection controls
     * it. A merchant may also correct a paid subscription signup or renewal before shipment by
     * sending expected_version, when the committed delivery methods remain eligible and shipping
     * and tax totals stay the same. A paid destination cannot be cleared. Send null to clear an
     * unpaid order's delivery destination. Shape $.anyOf[1] (Value): {@link
     * OrderDeliveryDestinationRequestInput}. The delivery destination you set when creating or
     * updating an order, with an address and an optional recipient. Shape $.anyOf[2] (Value):
     * null.
     */
    "delivery_destination"?: ((OrderDeliveryDestinationRequestInput) | (null));
    /**
     * Shape $ (Value): integer string. Order version from the last order read. Required when
     * correcting a paid delivery destination. Optional for other updates; when supplied, the
     * update fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear external_reference_id. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Internal note about this order, visible only to the
     * merchant. Send null to clear it. minLength: 1. maxLength: 1000.
     */
    "internal_note"?: string | null;
    /**
     * Shape $ (Value): {@link OrderInventoryRoutingSourceRequestInput}. Where inventory for an
     * order is allocated from: a fixed location, an allocation policy, or a specific policy
     * revision.
     */
    "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Send null to clear caller-owned
     * metadata and preserve Flint-managed keys. Shape $.* (Value): string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): {@link CreateOrderTipInput} or null. Requested tip to set or replace. Send
     * null to clear the current requested tip. Shape $.anyOf[1] (Value): {@link
     * CreateOrderTipInput}. Requested tip expressed as either a flat amount or a percentage. Send
     * exactly one of amount_money or percent. Shape $.anyOf[2] (Value): null.
     */
    "requested_tip"?: ((CreateOrderTipInput) | (null));
    /**
     * Shape $ (Value): {@link OrderTaxUpdateRequestInput}. Changes to an order's tax settings:
     * whether tax is enabled, the calculation, the location, and per-line-item or per-charge
     * calculations.
     */
    "tax"?: OrderTaxUpdateRequestInput;
};
/**
 * Shape $ (Value): {@link UpdateOrganizationRequest}. The request body for: Update organization.
 * minProperties: 1.
 */
export type UpdateOrganizationRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): string. Moves the organization, and every organization below it, under
     * another active organization you can manage. Can't be null. minLength: 1.
     */
    "parent_organization_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateOrganizationRequestInput}. The request body for: Update
 * organization. minProperties: 1.
 */
export type UpdateOrganizationRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): string. Moves the organization, and every organization below it, under
     * another active organization you can manage. Can't be null. minLength: 1.
     */
    "parent_organization_id"?: string;
};
/** Shape $ (Value): {@link UpdatePackageItemRequest}. The request body for: Update package item. */
export type UpdatePackageItemRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link UpdatePackageItemRequestInput}. The request body for: Update package
 * item.
 */
export type UpdatePackageItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity"?: `${bigint}` | bigint;
};
/** Shape $ (Value): {@link UpdatePackageRequest}. The request body for: Update package. */
export type UpdatePackageRequest = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Shape $ (Value): {@link Dimensions} or null. Shape $.anyOf[1] (Value): {@link Dimensions}.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`. Shape
     * $.anyOf[2] (Value): null.
     */
    "dimensions"?: ((Dimensions) | (null));
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | null;
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
     * Shape $ (Value): string or null. Merchant or integration supplied HTTPS shipping-label URL
     * for authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. Send null to clear it. minLength: 1.
     */
    "label_url"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "service_code"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "status_reason"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "tracking_number"?: string | null;
    /**
     * Shape $ (Value): string or null. Absolute HTTPS carrier tracking URL. Embedded URL
     * credentials are rejected. Send null to clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
    /**
     * Shape $ (Value): {@link Weight} or null. Shape $.anyOf[1] (Value): {@link Weight}. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. Shape
     * $.anyOf[2] (Value): null.
     */
    "weight"?: ((Weight) | (null));
};
/** Shape $ (Value): {@link UpdatePackageRequestInput}. The request body for: Update package. */
export type UpdatePackageRequestInput = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Shape $ (Value): {@link DimensionsInput} or null. Shape $.anyOf[1] (Value): {@link
     * DimensionsInput}. Package or item dimensions as `length`, `width`, and `height` in the given
     * `unit`. Shape $.anyOf[2] (Value): null.
     */
    "dimensions"?: ((DimensionsInput) | (null));
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
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
     * Shape $ (Value): string or null. Merchant or integration supplied HTTPS shipping-label URL
     * for authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. Send null to clear it. minLength: 1.
     */
    "label_url"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "service_code"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "status_reason"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "tracking_number"?: string | null;
    /**
     * Shape $ (Value): string or null. Absolute HTTPS carrier tracking URL. Embedded URL
     * credentials are rejected. Send null to clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
    /**
     * Shape $ (Value): {@link WeightInput} or null. Shape $.anyOf[1] (Value): {@link WeightInput}.
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration. Shape $.anyOf[2] (Value): null.
     */
    "weight"?: ((WeightInput) | (null));
};
/**
 * Shape $ (Value): {@link UpdatePartnerAppRequest}. The request body for: Update partner app.
 * minProperties: 1.
 */
export type UpdatePartnerAppRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "api_version"?: string;
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
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntryInput}. Replaces the whole
     * manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow
     * immediately. Requires expected_version. Shape $[] (Value): {@link
     * PartnerAppPermissionManifestEntryInput}. One permission a partner app can request, with a
     * title, a description, and the Flint scopes it grants.
     */
    "permission_manifest"?: Array<PartnerAppPermissionManifestEntryInput>;
    /**
     * Shape $ (Value): Array of string. Replaces the entire list of registered redirect URIs.
     * Shape $[] (Value): string. minLength: 1.
     */
    "redirect_uris"?: Array<string>;
})
    & ((({
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
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntryInput}. Replaces the whole
     * manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow
     * immediately. Requires expected_version. Shape $[] (Value): {@link
     * PartnerAppPermissionManifestEntryInput}. One permission a partner app can request, with a
     * title, a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntryInput>;
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
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
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
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
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
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Send null to clear. Metadata pairs
     * plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint.
     * Metadata keys and values, custom_field_ keys and largest possible answers, and Flint
     * metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four
     * bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at
     * five bytes (the length of false). If the combined budget is exceeded, lower max_length on
     * some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and
     * plan links and are checked against the merged configuration on update. Shape $.* (Value):
     * string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
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
     * Shape $ (Value): {@link CheckoutBuyerFieldsInput}. What checkout asks the buyer for. Each
     * field you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFieldsInput;
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
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Send null to clear. Metadata pairs
     * plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint.
     * Metadata keys and values, custom_field_ keys and largest possible answers, and Flint
     * metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four
     * bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at
     * five bytes (the length of false). If the combined budget is exceeded, lower max_length on
     * some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and
     * plan links and are checked against the merged configuration on update. Shape $.* (Value):
     * string or null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): {@link PaymentLinkPaymentPatchRequestInput}. Changes to a payment link's
     * payment settings. Send null on the payment note to clear it.
     */
    "payments"?: PaymentLinkPaymentPatchRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfigInput}. Promotion settings for a checkout:
     * whether automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigInput;
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
     * Shape $ (Value): {@link CheckoutTaxConfigInput}. Whether tax is collected for a checkout
     * session or payment link.
     */
    "tax"?: CheckoutTaxConfigInput;
    /**
     * Shape $ (Value): {@link PaymentLinkThemePatchRequestInput}. Changes to a payment link's
     * checkout theme. Send null on a field to clear it.
     */
    "theme"?: PaymentLinkThemePatchRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutTipConfigInput}. Tip settings for a checkout: whether tips
     * are enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfigInput;
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
