import type { MetadataPatchRequest, MetadataPatchRequestInput } from './types-32.js';
import type {
    TaxIdentityPatch,
    TaxIdentityPatchInput,
    TextModifierConfigPatchRequest,
    TextModifierConfigPatchRequestInput
} from './types-50.js';
import type {
    DeliveryLocationSetConfiguration,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationPatchRequest,
    DeliveryMethodConfigurationPatchRequestInput
} from './types-13.js';
import type {
    DeliveryProfileConfigurationRequest,
    DeliveryProfileConfigurationRequestInput,
    DeliveryRateCallbackConfigurationPatchRequest,
    DeliveryRateCallbackConfigurationPatchRequestInput
} from './types-15.js';
import type { WebhookSigningMethod, WebhookSigningMethodInput } from './types-57.js';
import type { DeliveryZoneConfiguration, DeliveryZoneConfigurationInput, Dimensions, DimensionsInput } from './types-17.js';
import type { FulfillmentRecipientRequest, FulfillmentRecipientRequestInput } from './types-19.js';
import type {
    UpdatePickupFulfillmentDetails,
    UpdateServiceFulfillmentDetails,
    UpdatePickupFulfillmentDetailsInput,
    UpdateServiceFulfillmentDetailsInput
} from './types-52.js';
import type { InventoryAllocationConfigurationValue, InventoryAllocationConfigurationValueInput } from './types-25.js';
import type { InventoryCountObservationRequest, InventoryCountObservationRequestInput } from './types-26.js';
import type { InventorySourceSystemRequest, InventorySourceSystemRequestInput, InventoryRoutingSource } from './types-27.js';
import type {
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyInput,
    InvoiceCollectionRequest,
    InvoiceCollectionRequestInput
} from './types-28.js';
import type {
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationInput,
    InvoicePaymentDueRequest,
    InvoiceScheduleEntryWrite,
    InvoicePaymentDueRequestInput,
    InvoiceScheduleEntryWriteInput
} from './types-29.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type {
    GiftCardPurchaseRecipientPatchRequest,
    GiftCardPurchaseRecipientPatchRequestInput,
    ImageRequest,
    ImageRequestInput
} from './types-21.js';
import type {
    MoneyValue,
    OrderCalculatedLineItemTax,
    MoneyValueInput,
    OrderCalculatedLineItemTaxInput,
    ModifierRequest,
    ModifierRequestInput,
    ModifierSetGroupRequest,
    ModifierSetGroupRequestInput,
    OrderCalculatedChargeTax,
    OrderCalculatedChargeTaxInput
} from './types-33.js';
import type {
    OrderLineItemModifierRequest,
    OrderLineItemModifierRequestInput,
    OrderDeliveryDestinationRequest,
    OrderDeliveryDestinationRequestInput,
    OrderInventoryRoutingSourceRequestInput
} from './types-34.js';
import type { SubscribedLineRequest, SubscribedLineRequestInput } from './types-47.js';
import type { LocationCoordinate } from './types-30.js';
import type { LocationCoordinateRequestRequestInput } from './types-31.js';
import type { SubscriptionDeliveryRequest, SubscriptionDeliveryRequestInput } from './types-48.js';
import type { CreateOrderTip, CreateOrderTipInput } from './types-8.js';
import type { OrderTaxUpdateRequest, OrderTaxUpdateRequestInput } from './types-35.js';
import type { Weight, WeightInput } from './types-65.js';
/** Shape $ (Value): {@link UpdateCustomerRequest}. The request body for: Update customer. */
export type UpdateCustomerRequest = ({
    /**
     * Shape $ (Value): string or null. Default payment term for this customer's invoices. Send
     * null to clear it. minLength: 1.
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * Shape $ (Value): string or null. The active off_session payment method to use by default.
     * Omit to leave unchanged; null clears it. A change sends customer.updated. minLength: 1.
     */
    "default_payment_method_id"?: string | null;
    /**
     * Shape $ (Value): string or null. The customer's email. Omit to leave unchanged; null clears
     * it. Changing it is allowed only when your store hosts its own customer accounts
     * (`customer_account.mode` is `merchant_hosted`). Format: email. minLength: 1. maxLength: 320.
     */
    "email"?: string | null;
    /**
     * Shape $ (Value): integer string. Required when tax_identity is null or tax_identity.tax_ids
     * is present. Stale versions return a conflict. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omit to leave unchanged; null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Internal note about this customer. Omit to leave unchanged;
     * null clears it. minLength: 1.
     */
    "internal_note"?: string | null;
    /**
     * Shape $ (Value): boolean. Flag you set on the customer, for example after checking ID in
     * store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to
     * customer verifications, which prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
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
     * Shape $ (Value): string or null. Customer name. Omit to leave unchanged; null clears it.
     * minLength: 1.
     */
    "name"?: string | null;
    /**
     * Shape $ (Value): string or null. Customer phone number. Omit to leave unchanged; null clears
     * it. minLength: 1.
     */
    "phone"?: string | null;
    /**
     * Shape $ (Value): string or null. Free-form label you assign, such as wholesale, so promotion
     * and delivery rules can match groups of customers. It is not an ID; Flint does not check it
     * against any resource. Omit to leave unchanged; null clears it. minLength: 1.
     */
    "segment"?: string | null;
    /** Shape $ (Value): boolean. */
    "tax_exempt"?: boolean;
    /**
     * Shape $ (Value): {@link TaxIdentityPatch} or null. Shape $.anyOf[1] (Value): {@link
     * TaxIdentityPatch}. Merchant-provided legal identity displayed on invoices and credit notes.
     * Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display
     * order; replacing the array requires the parent's expected_version. Existing entries retain
     * their document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape
     * $.anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatch) | (null));
});
/** Shape $ (Value): {@link UpdateCustomerRequestInput}. The request body for: Update customer. */
export type UpdateCustomerRequestInput = ({
    /**
     * Shape $ (Value): string or null. Default payment term for this customer's invoices. Send
     * null to clear it. minLength: 1.
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * Shape $ (Value): string or null. The active off_session payment method to use by default.
     * Omit to leave unchanged; null clears it. A change sends customer.updated. minLength: 1.
     */
    "default_payment_method_id"?: string | null;
    /**
     * Shape $ (Value): string or null. The customer's email. Omit to leave unchanged; null clears
     * it. Changing it is allowed only when your store hosts its own customer accounts
     * (`customer_account.mode` is `merchant_hosted`). Format: email. minLength: 1. maxLength: 320.
     */
    "email"?: string | null;
    /**
     * Shape $ (Value): integer string. Required when tax_identity is null or tax_identity.tax_ids
     * is present. Stale versions return a conflict. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omit to leave unchanged; null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Internal note about this customer. Omit to leave unchanged;
     * null clears it. minLength: 1.
     */
    "internal_note"?: string | null;
    /**
     * Shape $ (Value): boolean. Flag you set on the customer, for example after checking ID in
     * store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to
     * customer verifications, which prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
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
     * Shape $ (Value): string or null. Customer name. Omit to leave unchanged; null clears it.
     * minLength: 1.
     */
    "name"?: string | null;
    /**
     * Shape $ (Value): string or null. Customer phone number. Omit to leave unchanged; null clears
     * it. minLength: 1.
     */
    "phone"?: string | null;
    /**
     * Shape $ (Value): string or null. Free-form label you assign, such as wholesale, so promotion
     * and delivery rules can match groups of customers. It is not an ID; Flint does not check it
     * against any resource. Omit to leave unchanged; null clears it. minLength: 1.
     */
    "segment"?: string | null;
    /** Shape $ (Value): boolean. */
    "tax_exempt"?: boolean;
    /**
     * Shape $ (Value): {@link TaxIdentityPatchInput} or null. Shape $.anyOf[1] (Value): {@link
     * TaxIdentityPatchInput}. Merchant-provided legal identity displayed on invoices and credit
     * notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in
     * display order; replacing the array requires the parent's expected_version. Existing entries
     * retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape
     * $.anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatchInput) | (null));
});
/**
 * Shape $ (Value): {@link UpdateDeliveryFulfillmentDetails}. Delivery fulfillment fields to change
 * when updating a fulfillment, such as courier, tracking, and delivery times. Send null to clear a
 * field.
 */
export type UpdateDeliveryFulfillmentDetails = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Shape $ (Value): string or null. Time at which the courier collected the order. Send null to
     * clear it. Format: date-time. minLength: 1.
     */
    "courier_pickup_at"?: string | null;
    /**
     * Shape $ (Value): integer string or null. Width of the promised courier pickup window, from 0
     * to 86400 seconds. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: `${bigint}` | null;
    /**
     * Shape $ (Value): string or null. Delivery network or merchant fleet provider handling the
     * job. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string | null;
    /**
     * Shape $ (Value): string or null. Buyer-safe support number for the courier or merchant
     * fleet. Send null to clear it. minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "delivered_at"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "dispatched_at"?: string | null;
    /**
     * Shape $ (Value): string or null. Driver-facing notes for the final handoff. Send null to
     * clear it. minLength: 1. maxLength: 2048.
     */
    "dropoff_notes"?: string | null;
    /**
     * Shape $ (Value): string or null. Deadline after which an undelivered job should enter
     * merchant review. Send null to clear it. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | null;
    /**
     * Shape $ (Value): string or null. Stable delivery job ID owned by the courier or merchant
     * dispatch system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_delivery_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "instructions"?: string | null;
    /** Shape $ (Value): boolean or null. Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean | null;
    /**
     * Shape $ (Value): integer string or null. Expected preparation time before courier pickup,
     * from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}` | null;
    /**
     * Shape $ (Value): string or null. Time at which the order became ready for courier pickup.
     * Send null to clear it. Format: date-time. minLength: 1.
     */
    "ready_at"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "service_area_id"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string or null. Absolute HTTPS carrier tracking URL. Embedded URL
     * credentials are rejected. Send null to clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
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
 * Shape $ (Value): {@link UpdateDeliveryFulfillmentDetailsInput}. Delivery fulfillment fields to
 * change when updating a fulfillment, such as courier, tracking, and delivery times. Send null to
 * clear a field.
 */
export type UpdateDeliveryFulfillmentDetailsInput = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Shape $ (Value): string or null. Time at which the courier collected the order. Send null to
     * clear it. Format: date-time. minLength: 1.
     */
    "courier_pickup_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): integer string or null. Width of the promised courier pickup window, from 0
     * to 86400 seconds. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): string or null. Delivery network or merchant fleet provider handling the
     * job. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string | null;
    /**
     * Shape $ (Value): string or null. Buyer-safe support number for the courier or merchant
     * fleet. Send null to clear it. minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "delivered_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "dispatched_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. Driver-facing notes for the final handoff. Send null to
     * clear it. minLength: 1. maxLength: 2048.
     */
    "dropoff_notes"?: string | null;
    /**
     * Shape $ (Value): string or null. Deadline after which an undelivered job should enter
     * merchant review. Send null to clear it. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. Stable delivery job ID owned by the courier or merchant
     * dispatch system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_delivery_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "instructions"?: string | null;
    /** Shape $ (Value): boolean or null. Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean | null;
    /**
     * Shape $ (Value): integer string or null. Expected preparation time before courier pickup,
     * from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): string or null. Time at which the order became ready for courier pickup.
     * Send null to clear it. Format: date-time. minLength: 1.
     */
    "ready_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "service_area_id"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string or null. Absolute HTTPS carrier tracking URL. Embedded URL
     * credentials are rejected. Send null to clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
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
 * Shape $ (Value): {@link UpdateDeliveryLocationSetRequest}. The request body for: Update delivery
 * location set.
 */
export type UpdateDeliveryLocationSetRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryLocationSetConfiguration}. location_ids replaces the set's
     * Locations when present; leave configuration out to keep them. Null, an empty list, and
     * duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery
     * location set.
     */
    "configuration"?: DeliveryLocationSetConfiguration;
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
     * Shape $ (Value): {@link DeliveryLocationSetConfiguration}. location_ids replaces the set's
     * Locations when present; leave configuration out to keep them. Null, an empty list, and
     * duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery
     * location set.
     */
    "configuration": DeliveryLocationSetConfiguration;
})
    | ({
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
    "metadata": ((MetadataPatchRequest) | (null));
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateDeliveryLocationSetRequestInput}. The request body for: Update
 * delivery location set.
 */
export type UpdateDeliveryLocationSetRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryLocationSetConfigurationInput}. location_ids replaces the
     * set's Locations when present; leave configuration out to keep them. Null, an empty list, and
     * duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery
     * location set.
     */
    "configuration"?: DeliveryLocationSetConfigurationInput;
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
     * Shape $ (Value): {@link DeliveryLocationSetConfigurationInput}. location_ids replaces the
     * set's Locations when present; leave configuration out to keep them. Null, an empty list, and
     * duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery
     * location set.
     */
    "configuration": DeliveryLocationSetConfigurationInput;
})
    | ({
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
    "metadata": ((MetadataPatchRequestInput) | (null));
}));
/**
 * Shape $ (Value): {@link UpdateDeliveryMethodRequest}. The request body for: Update delivery
 * method.
 */
export type UpdateDeliveryMethodRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationPatchRequest}. Only the keys you send
     * change; keys you leave out keep their current values. Each key you send replaces that part
     * of the configuration whole. Null removes an optional key, as each field describes. Arrays
     * can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. Only the keys you send change; keys you
     * leave out keep their current values. Each key you send replaces that part of the
     * configuration whole. Null removes an optional key, as each field describes. Arrays can't be
     * null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryMethodConfigurationPatchRequest;
    /**
     * Shape $ (Value): string or null. Delivery method description. Send null to clear it.
     * minLength: 1.
     */
    "description"?: string | null;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration, name,
     * description, display_position, recommendation_priority. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
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
    /**
     * Shape $ (Value): integer or null. Marks this method as recommended. Within each choice
     * group, the available method with the lowest value is recommended and listed first. Ties go
     * to the lower display_position, then the method ID. Null never recommends the method. Send
     * null to clear it. Format: int32.
     */
    "recommendation_priority"?: number | null;
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
     * Shape $ (Value): {@link DeliveryMethodConfigurationPatchRequest}. Only the keys you send
     * change; keys you leave out keep their current values. Each key you send replaces that part
     * of the configuration whole. Null removes an optional key, as each field describes. Arrays
     * can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. Only the keys you send change; keys you
     * leave out keep their current values. Each key you send replaces that part of the
     * configuration whole. Null removes an optional key, as each field describes. Arrays can't be
     * null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryMethodConfigurationPatchRequest;
})
    | ({
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
    "metadata": ((MetadataPatchRequest) | (null));
})
    | ({
    /**
     * Shape $ (Value): string or null. Delivery method description. Send null to clear it.
     * minLength: 1.
     */
    "description": string | null;
})
    | ({
    /** Shape $ (Value): integer. Format: int32. */
    "display_position": number;
})
    | ({
    /**
     * Shape $ (Value): integer or null. Marks this method as recommended. Within each choice
     * group, the available method with the lowest value is recommended and listed first. Ties go
     * to the lower display_position, then the method ID. Null never recommends the method. Send
     * null to clear it. Format: int32.
     */
    "recommendation_priority": number | null;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status": "inactive" | "active" | (string & {});
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateDeliveryMethodRequestInput}. The request body for: Update delivery
 * method.
 */
export type UpdateDeliveryMethodRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationPatchRequestInput}. Only the keys you
     * send change; keys you leave out keep their current values. Each key you send replaces that
     * part of the configuration whole. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. Only the keys you send change; keys you
     * leave out keep their current values. Each key you send replaces that part of the
     * configuration whole. Null removes an optional key, as each field describes. Arrays can't be
     * null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryMethodConfigurationPatchRequestInput;
    /**
     * Shape $ (Value): string or null. Delivery method description. Send null to clear it.
     * minLength: 1.
     */
    "description"?: string | null;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration, name,
     * description, display_position, recommendation_priority. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
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
    /**
     * Shape $ (Value): integer or null. Marks this method as recommended. Within each choice
     * group, the available method with the lowest value is recommended and listed first. Ties go
     * to the lower display_position, then the method ID. Null never recommends the method. Send
     * null to clear it. Format: int32.
     */
    "recommendation_priority"?: number | null;
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
     * Shape $ (Value): {@link DeliveryMethodConfigurationPatchRequestInput}. Only the keys you
     * send change; keys you leave out keep their current values. Each key you send replaces that
     * part of the configuration whole. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. Only the keys you send change; keys you
     * leave out keep their current values. Each key you send replaces that part of the
     * configuration whole. Null removes an optional key, as each field describes. Arrays can't be
     * null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryMethodConfigurationPatchRequestInput;
})
    | ({
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
    "metadata": ((MetadataPatchRequestInput) | (null));
})
    | ({
    /**
     * Shape $ (Value): string or null. Delivery method description. Send null to clear it.
     * minLength: 1.
     */
    "description": string | null;
})
    | ({
    /** Shape $ (Value): integer. Format: int32. */
    "display_position": number;
})
    | ({
    /**
     * Shape $ (Value): integer or null. Marks this method as recommended. Within each choice
     * group, the available method with the lowest value is recommended and listed first. Ties go
     * to the lower display_position, then the method ID. Null never recommends the method. Send
     * null to clear it. Format: int32.
     */
    "recommendation_priority": number | null;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status": "inactive" | "active";
}));
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
    "metadata": ((MetadataPatchRequest) | (null));
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
    "metadata": ((MetadataPatchRequestInput) | (null));
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
     * status updates. Required when any of these fields is present: configuration,
     * signing_methods. Use an integer string (decimal digits), not a floating-point number.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of {@link WebhookSigningMethod}. Replaces the signing methods.
     * Removing hmac deletes all shared secrets. Use rotate-secret to add hmac when no secret has
     * been issued. Omit to leave unchanged. Requires expected_version. minItems: 1. uniqueItems:
     * true. [] enum: "jwt", "hmac". Shape $[] (Value): {@link WebhookSigningMethod}. jwt uses
     * Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum: "jwt",
     * "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
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
    /**
     * Shape $ (Value): Array of {@link WebhookSigningMethod}. Replaces the signing methods.
     * Removing hmac deletes all shared secrets. Use rotate-secret to add hmac when no secret has
     * been issued. Omit to leave unchanged. Requires expected_version. minItems: 1. uniqueItems:
     * true. [] enum: "jwt", "hmac". Shape $[] (Value): {@link WebhookSigningMethod}. jwt uses
     * Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum: "jwt",
     * "hmac".
     */
    "signing_methods": Array<WebhookSigningMethod>;
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
     * status updates. Required when any of these fields is present: configuration,
     * signing_methods. Use an integer string (decimal digits), not a floating-point number.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of {@link WebhookSigningMethodInput}. Replaces the signing methods.
     * Removing hmac deletes all shared secrets. Use rotate-secret to add hmac when no secret has
     * been issued. Omit to leave unchanged. Requires expected_version. minItems: 1. uniqueItems:
     * true. [] enum: "jwt", "hmac". Shape $[] (Value): {@link WebhookSigningMethodInput}. jwt uses
     * Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum: "jwt",
     * "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
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
    /**
     * Shape $ (Value): Array of {@link WebhookSigningMethodInput}. Replaces the signing methods.
     * Removing hmac deletes all shared secrets. Use rotate-secret to add hmac when no secret has
     * been issued. Omit to leave unchanged. Requires expected_version. minItems: 1. uniqueItems:
     * true. [] enum: "jwt", "hmac". Shape $[] (Value): {@link WebhookSigningMethodInput}. jwt uses
     * Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum: "jwt",
     * "hmac".
     */
    "signing_methods": Array<WebhookSigningMethodInput>;
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
    "metadata": ((MetadataPatchRequest) | (null));
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
    "metadata": ((MetadataPatchRequestInput) | (null));
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
     * floating-point number. Format: int64. minimum: 1.
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
     * floating-point number. Format: int64. minimum: 1.
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
     * the invoice. Omit it to use the invoice settings remit-to address. A complete postal
     * address. State and postal_code are required for US addresses and optional for other
     * countries. Send null or omit line2, state, and postal_code when the address has none.
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
     * printed on the invoice. Omit it to use the invoice settings remit-to address. A complete
     * postal address. State and postal_code are required for US addresses and optional for other
     * countries. Send null or omit line2, state, and postal_code when the address has none.
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
     * gift_card_face_value_money, subscription. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): object. Selects the face value of an unpaid, unfunded gift card line within
     * its frozen offer's custom_amount_bounds and reprices the order. Fixed-denomination offers
     * accept only their current value. Omission preserves the value; null is not allowed. Requires
     * expected_version from the order. Checkout credentials may send this field alone or together
     * with gift_card_recipient. Shape $.amount (Required): integer string. Amount in the
     * currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64. minimum: 1. maximum: 200000. Shape $.currency
     * (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "gift_card_face_value_money"?: {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
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
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Send null to clear all
     * metadata. Shape $.anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned
     * metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null
     * value deletes the key, and an empty object makes no change; send null for the whole field to
     * clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput:
     * Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096
     * Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key
     * that does not exist is allowed, so the number of operations is not itself the stored-map
     * limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
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
     * gift_card_face_value_money, subscription. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): object. Selects the face value of an unpaid, unfunded gift card line within
     * its frozen offer's custom_amount_bounds and reprices the order. Fixed-denomination offers
     * accept only their current value. Omission preserves the value; null is not allowed. Requires
     * expected_version from the order. Checkout credentials may send this field alone or together
     * with gift_card_recipient. Shape $.amount (Required): integer string. Amount in the
     * currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64. minimum: 1. maximum: 200000. Shape $.currency
     * (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "gift_card_face_value_money"?: {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}` | bigint;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD";
    };
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
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Send null to clear all
     * metadata. Shape $.anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a
     * caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
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
     * Shape $ (Value): {@link AddressRequest}. Complete replacement postal address, validated as
     * on create. Requires coordinate in the same request, including null to clear it. A complete
     * postal address. State and postal_code are required for US addresses and optional for other
     * countries. Send null or omit line2, state, and postal_code when the address has none.
     */
    "address"?: AddressRequest;
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
     * field requires commerce.inventory.allocation.write in addition to the route scope.
     */
    "inventory_allocation_enabled"?: boolean;
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
     * Shape $ (Value): {@link AddressRequestInput}. Complete replacement postal address, validated
     * as on create. Requires coordinate in the same request, including null to clear it. A
     * complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address"?: AddressRequestInput;
    /**
     * Shape $ (Value): {@link LocationCoordinateRequestRequestInput} or null. Complete replacement
     * coordinate. Send null to clear both coordinate and coordinate_source. A non-null value
     * requires coordinate_source in the same request. Shape $.anyOf[1] (Value): {@link
     * LocationCoordinateRequestRequestInput}. A latitude and longitude for a merchant location.
     * Shape $.anyOf[2] (Value): null.
     */
    "coordinate"?: ((LocationCoordinateRequestRequestInput) | (null));
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
     * field requires commerce.inventory.allocation.write in addition to the route scope.
     */
    "inventory_allocation_enabled"?: boolean;
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
     * Shape $ (Value): {@link AddressRequest}. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
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
     * Shape $ (Value): {@link AddressRequestInput}. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none.
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
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Omitted metadata is unchanged.
     * Objects merge by key, null values delete keys, an empty object is a no-op, and null clears
     * all metadata. The merged map can contain at most 50 keys. This operation also limits the
     * metadata object you send, before merging: at most 50 keys, counting null deletions, each key
     * 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. Shape
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
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Omitted metadata is unchanged.
     * Objects merge by key, null values delete keys, an empty object is a no-op, and null clears
     * all metadata. The merged map can contain at most 50 keys. This operation also limits the
     * metadata object you send, before merging: at most 50 keys, counting null deletions, each key
     * 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. Shape
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
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Omitted metadata is unchanged.
     * Objects merge by key, null values delete keys, an empty object is a no-op, and null clears
     * all metadata. The merged map can contain at most 50 keys. This operation also limits the
     * metadata object you send, before merging: at most 50 keys, counting null deletions, each key
     * 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. Shape
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
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Omitted metadata is unchanged.
     * Objects merge by key, null values delete keys, an empty object is a no-op, and null clears
     * all metadata. The merged map can contain at most 50 keys. This operation also limits the
     * metadata object you send, before merging: at most 50 keys, counting null deletions, each key
     * 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. Shape
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
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Send null to clear all
     * metadata. Shape $.anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned
     * metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null
     * value deletes the key, and an empty object makes no change; send null for the whole field to
     * clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput:
     * Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096
     * Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key
     * that does not exist is allowed, so the number of operations is not itself the stored-map
     * limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
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
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Send null to clear all
     * metadata. Shape $.anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a
     * caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
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
     * Shape $ (Value): {@link MetadataPatchRequest} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Send null to clear
     * caller-owned metadata and preserve Flint-managed keys. Shape $.anyOf[1] (Value): {@link
     * MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the field to leave
     * metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object
     * makes no change; send null for the whole field to clear all caller-owned metadata. The
     * resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1
     * to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values
     * total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the
     * number of operations is not itself the stored-map limit. Values can't be empty strings, and
     * keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
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
     * Shape $ (Value): {@link MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this
     * field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Send null to clear
     * caller-owned metadata and preserve Flint-managed keys. Shape $.anyOf[1] (Value): {@link
     * MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave
     * metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object
     * makes no change; send null for the whole field to clear all caller-owned metadata. The
     * resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1
     * to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values
     * total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the
     * number of operations is not itself the stored-map limit. Values can't be empty strings, and
     * keys starting with flint_ are reserved for Flint. Shape $.anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
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
