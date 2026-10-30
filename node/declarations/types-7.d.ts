import type { MetadataMap, MetadataRequestInput } from './types-34.js';
import type { TaxIdentityPatch, TaxIdentityRequestInput } from './types-57.js';
import type {
    DeliveryLocationSetConfiguration,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationCreateRequest,
    DeliveryMethodConfigurationCreateRequestInput,
    DeliveryMethodConfigurationRequest,
    DeliveryMethodConfigurationRequestInput
} from './types-15.js';
import type {
    DeliveryMethodOriginSelectorRequest,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryPreviewRoutingSourceInput,
    DeliveryPickupAvailabilityMaximumDistanceRequestInput
} from './types-16.js';
import type {
    CreateOrderLineItem,
    CreateOrderLineItemRequestInput,
    CreatePickupFulfillmentDetails,
    CreatePickupFulfillmentDetailsInput
} from './types-9.js';
import type {
    DeliveryAddressRequest,
    DeliveryBuyerLocationRequest,
    DeliveryAddressRequestInput,
    DeliveryBuyerLocationRequestInput,
    DeliveryDistance
} from './types-14.js';
import type { InventoryRoutingSource } from './types-27.js';
import type { DeliveryProfileConfigurationRequest, DeliveryProfileConfigurationRequestInput } from './types-17.js';
import type { DeliveryRateCallbackConfiguration, DeliveryRateCallbackConfigurationInput } from './types-18.js';
import type { WebhookSigningMethod, WebhookSigningMethodInput } from './types-61.js';
import type {
    DeliverySelectionInstructionsRequest,
    DeliverySelectionInstructionsRequestInput,
    DeliverySelectionRecipientRequest,
    DeliverySelectionRecipientRequestInput,
    DeliveryZoneConfiguration,
    DeliveryZoneConfigurationInput
} from './types-19.js';
import type { AddressRequest, AddressRequestInput, APIKey } from './types-0.js';
import type { Sandbox } from './types-52.js';
import type { FeedbackReportingClient, FeedbackReportingClientInput } from './types-21.js';
import type { CreateFulfillmentRequestShipment, CreateFulfillmentRequestShipmentInput } from './types-8.js';
import type { CreateServiceFulfillmentDetails, CreateServiceFulfillmentDetailsInput } from './types-11.js';
import type {
    FulfillmentLineItemRequest,
    FulfillmentPackagingRequest,
    FulfillmentRecipientRequest,
    FulfillmentLineItemRequestInput,
    FulfillmentPackagingRequestInput,
    FulfillmentRecipientRequestInput
} from './types-22.js';
/** The request body for: Request customer account deletion. */
export type CreateCustomerDeletionRequest = {
    /** Flint customer ID of the customer to delete. minLength: 1. */
    "customer_id": string;
};
/** The request body for: Request customer account deletion. */
export type CreateCustomerDeletionRequestInput = CreateCustomerDeletionRequest;
/** The request body for: Create customer. */
export type CreateCustomerRequest = ({
    /** minLength: 1. */
    "default_invoice_payment_term_id"?: string;
    /** Format: email. minLength: 1. maxLength: 320. */
    "email"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "internal_note"?: string;
    /**
     * Flag you set on the customer, for example after checking ID in store. Promotion and delivery
     * rules can match it. Flint does not set it; it is unrelated to customer verifications, which
     * prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
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
    "name"?: string;
    /**
     * What to do when an active customer in this environment already has `email`. `error` returns
     * `409 ALREADY_EXISTS` naming that customer. `return_existing` returns that customer unchanged
     * with `200` instead of creating one; it requires `email`. Emails match case-insensitively.
     * Default: "error". Value enum: "error", "return_existing".
     */
    "on_email_conflict"?: "error" | "return_existing" | (string & {});
    /** minLength: 1. */
    "phone"?: string;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource.
     * minLength: 1.
     */
    "segment"?: string;
    "tax_exempt"?: boolean;
    /**
     * Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs
     * or change tax treatment. Tax IDs are an owned collection in display order; replacing the
     * array requires the parent's expected_version. Existing entries retain their document_tax_id;
     * omit an entry to remove it, or omit its ID to add one.
     */
    "tax_identity"?: TaxIdentityPatch;
    /**
     * Sandbox only. ID of a test clock to create the customer on. The customer, and every
     * subscription created for it, read the clock's time instead of real time. A customer can't be
     * moved to another clock or taken off one. A live credential gets `403 FORBIDDEN` with reason
     * `test_mode_required`. minLength: 1.
     */
    "test_clock_id"?: string;
});
/** The request body for: Create customer. */
export type CreateCustomerRequestInput = ({
    /** minLength: 1. */
    "default_invoice_payment_term_id"?: string;
    /** Format: email. minLength: 1. maxLength: 320. */
    "email"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "internal_note"?: string;
    /**
     * Flag you set on the customer, for example after checking ID in store. Promotion and delivery
     * rules can match it. Flint does not set it; it is unrelated to customer verifications, which
     * prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
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
    "name"?: string;
    /**
     * What to do when an active customer in this environment already has `email`. `error` returns
     * `409 ALREADY_EXISTS` naming that customer. `return_existing` returns that customer unchanged
     * with `200` instead of creating one; it requires `email`. Emails match case-insensitively.
     * Default: "error". Value enum: "error", "return_existing".
     */
    "on_email_conflict"?: "error" | "return_existing";
    /** minLength: 1. */
    "phone"?: string;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource.
     * minLength: 1.
     */
    "segment"?: string;
    "tax_exempt"?: boolean;
    /**
     * Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs
     * or change tax treatment. Tax IDs are an owned collection in display order; replacing the
     * array requires the parent's expected_version. Existing entries retain their document_tax_id;
     * omit an entry to remove it, or omit its ID to add one.
     */
    "tax_identity"?: TaxIdentityRequestInput;
    /**
     * Sandbox only. ID of a test clock to create the customer on. The customer, and every
     * subscription created for it, read the clock's time instead of real time. A customer can't be
     * moved to another clock or taken off one. A live credential gets `403 FORBIDDEN` with reason
     * `test_mode_required`. minLength: 1.
     */
    "test_clock_id"?: string;
});
/** The request body for: Create a customer session. */
export type CreateCustomerSessionRequest = {
    /** minLength: 1. */
    "customer_id": string;
    /** Format: int64. minimum: 300. maximum: 86400. */
    "expires_in_seconds"?: number;
    /** Format: int64. minimum: 3600. maximum: 2592000. */
    "refresh_expires_in_seconds"?: number;
};
/** The request body for: Create a customer session. */
export type CreateCustomerSessionRequestInput = CreateCustomerSessionRequest;
/** The request body for: Create a customer email verification. */
export type CreateCustomerVerificationRequest = {
    /**
     * Defaults to email when omitted. Explicit null and an empty value are not accepted. Default:
     * "email". Value enum: "email".
     */
    "channel"?: "email" | (string & {});
    /** minLength: 1. */
    "customer_id": string;
    /** Value enum: "link_guest_purchases". */
    "purpose": "link_guest_purchases" | (string & {});
};
/** The request body for: Create a customer email verification. */
export type CreateCustomerVerificationRequestInput = {
    /**
     * Defaults to email when omitted. Explicit null and an empty value are not accepted. Default:
     * "email". Value enum: "email".
     */
    "channel"?: "email";
    /** minLength: 1. */
    "customer_id": string;
    /** Value enum: "link_guest_purchases". */
    "purpose": "link_guest_purchases";
};
/**
 * Local delivery details you supply when creating a fulfillment: courier, timing window,
 * instructions, and tracking.
 */
export type CreateDeliveryFulfillmentDetails = {
    /** minLength: 1. */
    "carrier"?: string;
    /** Time at which the courier collected the order. Format: date-time. minLength: 1. */
    "courier_pickup_at"?: string;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number;
    /**
     * Delivery network or merchant fleet provider handling the job. minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string;
    /** Buyer-safe support number for the courier or merchant fleet. minLength: 1. maxLength: 30. */
    "courier_support_phone"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "dispatched_at"?: string;
    /** Driver-facing notes for the final handoff. minLength: 1. maxLength: 2048. */
    "dropoff_notes"?: string;
    /**
     * Deadline after which an undelivered job should enter merchant review. Format: date-time.
     * minLength: 1.
     */
    "expires_at"?: string;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. minLength: 1.
     * maxLength: 255.
     */
    "external_delivery_id"?: string;
    /** minLength: 1. */
    "instructions"?: string;
    /** Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /** Time at which the order became ready for courier pickup. Format: date-time. minLength: 1. */
    "ready_at"?: string;
    /** minLength: 1. */
    "service_area_id"?: string;
    /** minLength: 1. */
    "timezone"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
};
/**
 * Local delivery details you supply when creating a fulfillment: courier, timing window,
 * instructions, and tracking.
 */
export type CreateDeliveryFulfillmentDetailsInput = {
    /** minLength: 1. */
    "carrier"?: string;
    /** Time at which the courier collected the order. Format: date-time. minLength: 1. */
    "courier_pickup_at"?: string | globalThis.Date;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number;
    /**
     * Delivery network or merchant fleet provider handling the job. minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string;
    /** Buyer-safe support number for the courier or merchant fleet. minLength: 1. maxLength: 30. */
    "courier_support_phone"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "dispatched_at"?: string | globalThis.Date;
    /** Driver-facing notes for the final handoff. minLength: 1. maxLength: 2048. */
    "dropoff_notes"?: string;
    /**
     * Deadline after which an undelivered job should enter merchant review. Format: date-time.
     * minLength: 1.
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. minLength: 1.
     * maxLength: 255.
     */
    "external_delivery_id"?: string;
    /** minLength: 1. */
    "instructions"?: string;
    /** Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /** Time at which the order became ready for courier pickup. Format: date-time. minLength: 1. */
    "ready_at"?: string | globalThis.Date;
    /** minLength: 1. */
    "service_area_id"?: string;
    /** minLength: 1. */
    "timezone"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
};
/** The request body for: Create delivery location set. */
export type CreateDeliveryLocationSetRequest = {
    /** The location IDs in a delivery location set. */
    "configuration": DeliveryLocationSetConfiguration;
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
};
/** The request body for: Create delivery location set. */
export type CreateDeliveryLocationSetRequestInput = {
    /** The location IDs in a delivery location set. */
    "configuration": DeliveryLocationSetConfigurationInput;
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
};
/** The request body for: Create delivery method. */
export type CreateDeliveryMethodRequest = ({
    /**
     * The configuration you supply when creating a delivery method. `origin` and `pricing` are
     * required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** minLength: 1. */
    "description"?: string;
    /** Format: int32. */
    "display_position"?: number;
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
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
    /** Value enum: "shipment", "local_delivery", "pickup". */
    "type": "shipment" | "local_delivery" | "pickup" | (string & {});
})
    & ((Exclude<CreateDeliveryMethodRequestShipment & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestLocalDelivery & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestPickup & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create delivery method. */
export type CreateDeliveryMethodRequestInput = ({
    /**
     * The configuration you supply when creating a delivery method. `origin` and `pricing` are
     * required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** minLength: 1. */
    "description"?: string;
    /** Format: int32. */
    "display_position"?: number;
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
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
    /** Value enum: "shipment", "local_delivery", "pickup". */
    "type": "shipment" | "local_delivery" | "pickup";
})
    & ((Exclude<CreateDeliveryMethodRequestShipmentInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestLocalDeliveryInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestPickupInput & object, readonly unknown[]>));
/** The `local_delivery` variant of `CreateDeliveryMethodRequest`. */
export type CreateDeliveryMethodRequestLocalDelivery = ({
    /**
     * The configuration you supply when creating a delivery method. `origin` and `pricing` are
     * required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** minLength: 1. */
    "description"?: string;
    /** Format: int32. */
    "display_position"?: number;
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
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
    /** Value enum: "local_delivery". */
    "type": "local_delivery" | (string & {});
})
    & ({
    /**
     * The configuration you supply for a delivery method: origin, pricing, eligibility, timing
     * estimate, tax settings, and recipient requirements. buyer_instructions (Optional): {@link
     * BuyerInstructionsConfig}. Controls whether checkout collects buyer instructions for this
     * method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. charge_tax_category (Optional): string or
     * null. Tax category of the delivery charge, which decides its automatic tax and appears in
     * tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if
     * unset, Flint derives shipping for shipment methods, delivery for local delivery, or
     * service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the
     * current value, or send null to clear it back to inheriting. Automatic tax calculates the
     * shipping and delivery categories at the general rate and refuses the others with
     * AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null. eligibility (Optional): {@link
     * DeliveryEligibilityExpression}. Conditions that decide where this method is offered. Omit
     * this field to offer the method everywhere the merchant serves. A boolean expression
     * containing exactly one operator or typed condition at each node. Expressions support at most
     * 8 levels and 100 total nodes. estimate (Optional): {@link DeliveryEstimateRule}. The
     * buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing
     * promise. The timing estimate rule you supply for a delivery method, chosen by `type`: none,
     * a transit time, or a schedule window. minimum_option_lifetime_seconds (Optional): integer.
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. origin
     * (Required): {@link DeliveryMethodOriginSelectorRequest}. Where delivery starts. A method can
     * use a fixed location or a delivery location set; origin.type determines allocation or buyer
     * pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed
     * location, or locations from a delivery location set or an inline list. pricing (Required):
     * {@link DeliveryPricingStrategyRequest}. How Flint calculates the delivery charge. The
     * pricing strategy you supply when updating a delivery method. Set `type` and the matching
     * property. public_details (Optional): object. Buyer-visible structured details supplied by
     * the merchant. public_details.instructions (Optional): string. Buyer-visible instructions for
     * this method. minLength: 1. maxLength: 2048. public_details.pickup_mode (Optional): string.
     * Required for pickup methods and rejected for other method types. Value enum: "in_store",
     * "curbside", "locker", "other". public_details.service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "same_day", "on_demand", "scheduled". quote_input_fields (Optional): Array of string.
     * Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirement}. Recipient
     * fields this method asks for. A delivery selection can leave out required fields, but payment
     * needs them. recipient_requirements[] (Value): {@link DeliveryRecipientRequirement}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use. selection_guarantee_seconds (Optional): integer. How long after
     * evaluation Flint guarantees a selected price, when that is later than the option expiry.
     * Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart
     * without tracked inventory hold until the checkout's calculation expiry. Format: int64.
     * minimum: 0. taxable (Optional): boolean or null. Whether the delivery charge is taxable.
     * Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it
     * on PATCH to preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequest & object, readonly unknown[]>)
        & ({
        /**  service_level (Optional): string.  Value enum: "on_demand", "same_day", "scheduled". */
        "public_details"?: ({
            /** Value enum: "on_demand", "same_day", "scheduled". */
            "service_level"?: "on_demand" | "same_day" | "scheduled" | (string & {});
        });
    });
    /** Value enum: "local_delivery". */
    "type": "local_delivery" | (string & {});
});
/** The `local_delivery` variant of `CreateDeliveryMethodRequest`. */
export type CreateDeliveryMethodRequestLocalDeliveryInput = ({
    /**
     * The configuration you supply when creating a delivery method. `origin` and `pricing` are
     * required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** minLength: 1. */
    "description"?: string;
    /** Format: int32. */
    "display_position"?: number;
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
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
    /** Value enum: "local_delivery". */
    "type": "local_delivery";
})
    & ({
    /**
     * The configuration you supply for a delivery method: origin, pricing, eligibility, timing
     * estimate, tax settings, and recipient requirements. buyer_instructions (Optional): {@link
     * BuyerInstructionsConfigRequestInput}. Controls whether checkout collects buyer instructions
     * for this method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. charge_tax_category (Optional): string or
     * null. Tax category of the delivery charge, which decides its automatic tax and appears in
     * tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if
     * unset, Flint derives shipping for shipment methods, delivery for local delivery, or
     * service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the
     * current value, or send null to clear it back to inheriting. Automatic tax calculates the
     * shipping and delivery categories at the general rate and refuses the others with
     * AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null. eligibility (Optional): {@link
     * DeliveryEligibilityExpressionInput}. Conditions that decide where this method is offered.
     * Omit this field to offer the method everywhere the merchant serves. A boolean expression
     * containing exactly one operator or typed condition at each node. Expressions support at most
     * 8 levels and 100 total nodes. estimate (Optional): {@link DeliveryEstimateRuleRequestInput}.
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`:
     * none, a transit time, or a schedule window. minimum_option_lifetime_seconds (Optional):
     * integer. Minimum remaining quote lifetime required before Flint offers this method. Required
     * for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must
     * be less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899.
     * origin (Required): {@link DeliveryMethodOriginSelectorRequestInput}. Where delivery starts.
     * A method can use a fixed location or a delivery location set; origin.type determines
     * allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by
     * `type`: a fixed location, or locations from a delivery location set or an inline list.
     * pricing (Required): {@link DeliveryPricingStrategyRequestInput}. How Flint calculates the
     * delivery charge. The pricing strategy you supply when updating a delivery method. Set `type`
     * and the matching property. public_details (Optional): object. Buyer-visible structured
     * details supplied by the merchant. public_details.instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048.
     * public_details.pickup_mode (Optional): string. Required for pickup methods and rejected for
     * other method types. Value enum: "in_store", "curbside", "locker", "other".
     * public_details.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "same_day", "on_demand", "scheduled".
     * quote_input_fields (Optional): Array of string. Address and coordinate fields a callback
     * method requires and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirementInput}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or
     * `phone`) is required for a delivery method, and the format it must use.
     * selection_guarantee_seconds (Optional): integer. How long after evaluation Flint guarantees
     * a selected price, when that is later than the option expiry. Defaults to 0, which uses the
     * option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory
     * hold until the checkout's calculation expiry. Format: int64. minimum: 0. taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**  service_level (Optional): string.  Value enum: "on_demand", "same_day", "scheduled". */
        "public_details"?: ({
            /** Value enum: "on_demand", "same_day", "scheduled". */
            "service_level"?: "on_demand" | "same_day" | "scheduled";
        })
            & ({
            "pickup_mode"?: never;
        });
    });
    /** Value enum: "local_delivery". */
    "type": "local_delivery";
});
/** The `pickup` variant of `CreateDeliveryMethodRequest`. */
export type CreateDeliveryMethodRequestPickup = ({
    /**
     * The configuration you supply when creating a delivery method. `origin` and `pricing` are
     * required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** minLength: 1. */
    "description"?: string;
    /** Format: int32. */
    "display_position"?: number;
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
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
    /** Value enum: "pickup". */
    "type": "pickup" | (string & {});
})
    & ({
    /**
     * The configuration you supply for a delivery method: origin, pricing, eligibility, timing
     * estimate, tax settings, and recipient requirements. buyer_instructions (Optional): {@link
     * BuyerInstructionsConfig}. Controls whether checkout collects buyer instructions for this
     * method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. charge_tax_category (Optional): string or
     * null. Tax category of the delivery charge, which decides its automatic tax and appears in
     * tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if
     * unset, Flint derives shipping for shipment methods, delivery for local delivery, or
     * service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the
     * current value, or send null to clear it back to inheriting. Automatic tax calculates the
     * shipping and delivery categories at the general rate and refuses the others with
     * AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null. eligibility (Optional): {@link
     * DeliveryEligibilityExpression}. Conditions that decide where this method is offered. Omit
     * this field to offer the method everywhere the merchant serves. A boolean expression
     * containing exactly one operator or typed condition at each node. Expressions support at most
     * 8 levels and 100 total nodes. estimate (Optional): {@link DeliveryEstimateRule}. The
     * buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing
     * promise. The timing estimate rule you supply for a delivery method, chosen by `type`: none,
     * a transit time, or a schedule window. minimum_option_lifetime_seconds (Optional): integer.
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. origin
     * (Required): {@link DeliveryMethodOriginSelectorRequest}. Where delivery starts. A method can
     * use a fixed location or a delivery location set; origin.type determines allocation or buyer
     * pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed
     * location, or locations from a delivery location set or an inline list.
     * origin.delivery_location_set_id (Optional): string. Named delivery location set to reuse.
     * Send either delivery_location_set_id or inline location_ids, never both. The set may contain
     * at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection.
     * minLength: 1. origin.location_id (Optional): string. minLength: 1. origin.location_ids
     * (Optional): Array of string. Inline Location IDs for a set managed by this delivery method.
     * Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. origin.location_ids[] (Value):
     * string. minLength: 1. origin.type (Required): string. Value enum:
     * "pickup_location_collection". origin.oneOf[1] (Value): {@link
     * DeliveryMethodOriginSelectorInputFixedLocation}. The `fixed_location` variant of
     * `DeliveryMethodOriginSelectorInput`. origin.oneOf[2] (Value): {@link
     * DeliveryMethodOriginSelectorInputAllocatedOriginGroup}. The `allocated_origin_group` variant
     * of `DeliveryMethodOriginSelectorInput`. origin.oneOf[3] (Value): {@link
     * DeliveryMethodOriginSelectorInputPickupLocationCollection}. The `pickup_location_collection`
     * variant of `DeliveryMethodOriginSelectorInput`. pricing (Required): {@link
     * DeliveryPricingStrategyRequest}. How Flint calculates the delivery charge. The pricing
     * strategy you supply when updating a delivery method. Set `type` and the matching property.
     * public_details (Required): object. Buyer-visible structured details supplied by the
     * merchant. public_details.instructions (Optional): string. Buyer-visible instructions for
     * this method. minLength: 1. maxLength: 2048. public_details.pickup_mode (Required): string.
     * Required for pickup methods and rejected for other method types. Value enum: "in_store",
     * "curbside", "locker", "other". public_details.service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
     * "scheduled". quote_input_fields (Optional): Array of string. Address and coordinate fields a
     * callback method requires and is allowed to receive. maxItems: 12. uniqueItems: true. []
     * enum: "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirement}. Recipient
     * fields this method asks for. A delivery selection can leave out required fields, but payment
     * needs them. recipient_requirements[] (Value): {@link DeliveryRecipientRequirement}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use. selection_guarantee_seconds (Optional): integer. How long after
     * evaluation Flint guarantees a selected price, when that is later than the option expiry.
     * Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart
     * without tracked inventory hold until the checkout's calculation expiry. Format: int64.
     * minimum: 0. taxable (Optional): boolean or null. Whether the delivery charge is taxable.
     * Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it
     * on PATCH to preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequest & object, readonly unknown[]>)
        & ({
        /**
         * The origin you supply for a delivery method, chosen by `type`: a fixed location, or
         * locations from a delivery location set or an inline list. delivery_location_set_id
         * (Optional): string. Named delivery location set to reuse. Send either
         * delivery_location_set_id or inline location_ids, never both. The set may contain at most
         * 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection.
         * minLength: 1. location_id (Optional): string. minLength: 1. location_ids (Optional):
         * Array of string. Inline Location IDs for a set managed by this delivery method. Send
         * either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
         * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
         * return these Location IDs without exposing the managed set. location_ids[] (Value):
         * string. minLength: 1. type (Required): string. Value enum: "pickup_location_collection".
         * oneOf[1] (Value): {@link DeliveryMethodOriginSelectorInputFixedLocation}. The
         * `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. oneOf[2] (Value):
         * {@link DeliveryMethodOriginSelectorInputAllocatedOriginGroup}. The
         * `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. oneOf[3]
         * (Value): {@link DeliveryMethodOriginSelectorInputPickupLocationCollection}. The
         * `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.
         */
        "origin": (Exclude<DeliveryMethodOriginSelectorRequest & object, readonly unknown[]>)
            & ({
            /** Value enum: "pickup_location_collection". */
            "type"?: "pickup_location_collection" | (string & {});
        });
        /**
         *  pickup_mode (Required): string. Value enum: "in_store", "curbside", "locker", "other".
         */
        "public_details": ({
            /** Value enum: "in_store", "curbside", "locker", "other". */
            "pickup_mode": "in_store" | "curbside" | "locker" | "other" | (string & {});
        });
    });
    /** Value enum: "pickup". */
    "type": "pickup" | (string & {});
});
/** The `pickup` variant of `CreateDeliveryMethodRequest`. */
export type CreateDeliveryMethodRequestPickupInput = ({
    /**
     * The configuration you supply when creating a delivery method. `origin` and `pricing` are
     * required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** minLength: 1. */
    "description"?: string;
    /** Format: int32. */
    "display_position"?: number;
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
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
    /** Value enum: "pickup". */
    "type": "pickup";
})
    & ({
    /**
     * The configuration you supply for a delivery method: origin, pricing, eligibility, timing
     * estimate, tax settings, and recipient requirements. buyer_instructions (Optional): {@link
     * BuyerInstructionsConfigRequestInput}. Controls whether checkout collects buyer instructions
     * for this method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. charge_tax_category (Optional): string or
     * null. Tax category of the delivery charge, which decides its automatic tax and appears in
     * tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if
     * unset, Flint derives shipping for shipment methods, delivery for local delivery, or
     * service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the
     * current value, or send null to clear it back to inheriting. Automatic tax calculates the
     * shipping and delivery categories at the general rate and refuses the others with
     * AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null. eligibility (Optional): {@link
     * DeliveryEligibilityExpressionInput}. Conditions that decide where this method is offered.
     * Omit this field to offer the method everywhere the merchant serves. A boolean expression
     * containing exactly one operator or typed condition at each node. Expressions support at most
     * 8 levels and 100 total nodes. estimate (Optional): {@link DeliveryEstimateRuleRequestInput}.
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`:
     * none, a transit time, or a schedule window. minimum_option_lifetime_seconds (Optional):
     * integer. Minimum remaining quote lifetime required before Flint offers this method. Required
     * for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must
     * be less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899.
     * origin (Required): {@link DeliveryMethodOriginSelectorRequestInput}. Where delivery starts.
     * A method can use a fixed location or a delivery location set; origin.type determines
     * allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by
     * `type`: a fixed location, or locations from a delivery location set or an inline list.
     * origin.delivery_location_set_id (Optional): string. Named delivery location set to reuse.
     * Send either delivery_location_set_id or inline location_ids, never both. The set may contain
     * at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection.
     * minLength: 1. origin.location_id (Optional): string. minLength: 1. origin.location_ids
     * (Optional): Array of string. Inline Location IDs for a set managed by this delivery method.
     * Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. origin.location_ids[] (Value):
     * string. minLength: 1. origin.type (Required): string. Value enum:
     * "pickup_location_collection". origin.oneOf[1] (Value): {@link
     * DeliveryMethodOriginSelectorInputFixedLocationInput}. The `fixed_location` variant of
     * `DeliveryMethodOriginSelectorInput`. origin.oneOf[2] (Value): {@link
     * DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput}. The `allocated_origin_group`
     * variant of `DeliveryMethodOriginSelectorInput`. origin.oneOf[3] (Value): {@link
     * DeliveryMethodOriginSelectorInputPickupLocationCollectionInput}. The
     * `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`. pricing
     * (Required): {@link DeliveryPricingStrategyRequestInput}. How Flint calculates the delivery
     * charge. The pricing strategy you supply when updating a delivery method. Set `type` and the
     * matching property. public_details (Required): object. Buyer-visible structured details
     * supplied by the merchant. public_details.instructions (Optional): string. Buyer-visible
     * instructions for this method. minLength: 1. maxLength: 2048. public_details.pickup_mode
     * (Required): string. Required for pickup methods and rejected for other method types. Value
     * enum: "in_store", "curbside", "locker", "other". public_details.service_level (Optional):
     * string. Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
     * "scheduled". quote_input_fields (Optional): Array of string. Address and coordinate fields a
     * callback method requires and is allowed to receive. maxItems: 12. uniqueItems: true. []
     * enum: "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirementInput}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or
     * `phone`) is required for a delivery method, and the format it must use.
     * selection_guarantee_seconds (Optional): integer. How long after evaluation Flint guarantees
     * a selected price, when that is later than the option expiry. Defaults to 0, which uses the
     * option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory
     * hold until the checkout's calculation expiry. Format: int64. minimum: 0. taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**
         * The origin you supply for a delivery method, chosen by `type`: a fixed location, or
         * locations from a delivery location set or an inline list. delivery_location_set_id
         * (Optional): string. Named delivery location set to reuse. Send either
         * delivery_location_set_id or inline location_ids, never both. The set may contain at most
         * 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection.
         * minLength: 1. location_id (Optional): string. minLength: 1. location_ids (Optional):
         * Array of string. Inline Location IDs for a set managed by this delivery method. Send
         * either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
         * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
         * return these Location IDs without exposing the managed set. location_ids[] (Value):
         * string. minLength: 1. type (Required): string. Value enum: "pickup_location_collection".
         * oneOf[1] (Value): {@link DeliveryMethodOriginSelectorInputFixedLocationInput}. The
         * `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. oneOf[2] (Value):
         * {@link DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput}. The
         * `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. oneOf[3]
         * (Value): {@link DeliveryMethodOriginSelectorInputPickupLocationCollectionInput}. The
         * `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.
         */
        "origin": (Exclude<DeliveryMethodOriginSelectorRequestInput & object, readonly unknown[]>)
            & ({
            /** Value enum: "pickup_location_collection". */
            "type"?: "pickup_location_collection";
        });
        /**
         *  pickup_mode (Required): string. Value enum: "in_store", "curbside", "locker", "other".
         */
        "public_details": ({
            /** Value enum: "in_store", "curbside", "locker", "other". */
            "pickup_mode": "in_store" | "curbside" | "locker" | "other";
        })
            & ({
            "service_level"?: never;
        });
    });
    /** Value enum: "pickup". */
    "type": "pickup";
});
/** The `shipment` variant of `CreateDeliveryMethodRequest`. */
export type CreateDeliveryMethodRequestShipment = ({
    /**
     * The configuration you supply when creating a delivery method. `origin` and `pricing` are
     * required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** minLength: 1. */
    "description"?: string;
    /** Format: int32. */
    "display_position"?: number;
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
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
    /** Value enum: "shipment". */
    "type": "shipment" | (string & {});
})
    & ({
    /**
     * The configuration you supply for a delivery method: origin, pricing, eligibility, timing
     * estimate, tax settings, and recipient requirements. buyer_instructions (Optional): {@link
     * BuyerInstructionsConfig}. Controls whether checkout collects buyer instructions for this
     * method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. charge_tax_category (Optional): string or
     * null. Tax category of the delivery charge, which decides its automatic tax and appears in
     * tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if
     * unset, Flint derives shipping for shipment methods, delivery for local delivery, or
     * service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the
     * current value, or send null to clear it back to inheriting. Automatic tax calculates the
     * shipping and delivery categories at the general rate and refuses the others with
     * AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null. eligibility (Optional): {@link
     * DeliveryEligibilityExpression}. Conditions that decide where this method is offered. Omit
     * this field to offer the method everywhere the merchant serves. A boolean expression
     * containing exactly one operator or typed condition at each node. Expressions support at most
     * 8 levels and 100 total nodes. estimate (Optional): {@link DeliveryEstimateRule}. The
     * buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing
     * promise. The timing estimate rule you supply for a delivery method, chosen by `type`: none,
     * a transit time, or a schedule window. minimum_option_lifetime_seconds (Optional): integer.
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. origin
     * (Required): {@link DeliveryMethodOriginSelectorRequest}. Where delivery starts. A method can
     * use a fixed location or a delivery location set; origin.type determines allocation or buyer
     * pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed
     * location, or locations from a delivery location set or an inline list. pricing (Required):
     * {@link DeliveryPricingStrategyRequest}. How Flint calculates the delivery charge. The
     * pricing strategy you supply when updating a delivery method. Set `type` and the matching
     * property. public_details (Optional): object. Buyer-visible structured details supplied by
     * the merchant. public_details.instructions (Optional): string. Buyer-visible instructions for
     * this method. minLength: 1. maxLength: 2048. public_details.pickup_mode (Optional): string.
     * Required for pickup methods and rejected for other method types. Value enum: "in_store",
     * "curbside", "locker", "other". public_details.service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day". quote_input_fields
     * (Optional): Array of string. Address and coordinate fields a callback method requires and is
     * allowed to receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirement}. Recipient
     * fields this method asks for. A delivery selection can leave out required fields, but payment
     * needs them. recipient_requirements[] (Value): {@link DeliveryRecipientRequirement}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use. selection_guarantee_seconds (Optional): integer. How long after
     * evaluation Flint guarantees a selected price, when that is later than the option expiry.
     * Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart
     * without tracked inventory hold until the checkout's calculation expiry. Format: int64.
     * minimum: 0. taxable (Optional): boolean or null. Whether the delivery charge is taxable.
     * Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it
     * on PATCH to preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequest & object, readonly unknown[]>)
        & ({
        /**
         *  service_level (Optional): string. Value enum: "economy", "standard", "expedited",
         * "express", "overnight", "same_day".
         */
        "public_details"?: ({
            /**
             * Value enum: "economy", "standard", "expedited", "express", "overnight", "same_day".
             */
            "service_level"?: "economy" | "standard" | "expedited" | "express" | "overnight" | "same_day" | (string & {});
        });
    });
    /** Value enum: "shipment". */
    "type": "shipment" | (string & {});
});
/** The `shipment` variant of `CreateDeliveryMethodRequest`. */
export type CreateDeliveryMethodRequestShipmentInput = ({
    /**
     * The configuration you supply when creating a delivery method. `origin` and `pricing` are
     * required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** minLength: 1. */
    "description"?: string;
    /** Format: int32. */
    "display_position"?: number;
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
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
    /** Value enum: "shipment". */
    "type": "shipment";
})
    & ({
    /**
     * The configuration you supply for a delivery method: origin, pricing, eligibility, timing
     * estimate, tax settings, and recipient requirements. buyer_instructions (Optional): {@link
     * BuyerInstructionsConfigRequestInput}. Controls whether checkout collects buyer instructions
     * for this method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. charge_tax_category (Optional): string or
     * null. Tax category of the delivery charge, which decides its automatic tax and appears in
     * tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if
     * unset, Flint derives shipping for shipment methods, delivery for local delivery, or
     * service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the
     * current value, or send null to clear it back to inheriting. Automatic tax calculates the
     * shipping and delivery categories at the general rate and refuses the others with
     * AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null. eligibility (Optional): {@link
     * DeliveryEligibilityExpressionInput}. Conditions that decide where this method is offered.
     * Omit this field to offer the method everywhere the merchant serves. A boolean expression
     * containing exactly one operator or typed condition at each node. Expressions support at most
     * 8 levels and 100 total nodes. estimate (Optional): {@link DeliveryEstimateRuleRequestInput}.
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`:
     * none, a transit time, or a schedule window. minimum_option_lifetime_seconds (Optional):
     * integer. Minimum remaining quote lifetime required before Flint offers this method. Required
     * for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must
     * be less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899.
     * origin (Required): {@link DeliveryMethodOriginSelectorRequestInput}. Where delivery starts.
     * A method can use a fixed location or a delivery location set; origin.type determines
     * allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by
     * `type`: a fixed location, or locations from a delivery location set or an inline list.
     * pricing (Required): {@link DeliveryPricingStrategyRequestInput}. How Flint calculates the
     * delivery charge. The pricing strategy you supply when updating a delivery method. Set `type`
     * and the matching property. public_details (Optional): object. Buyer-visible structured
     * details supplied by the merchant. public_details.instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048.
     * public_details.pickup_mode (Optional): string. Required for pickup methods and rejected for
     * other method types. Value enum: "in_store", "curbside", "locker", "other".
     * public_details.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day". quote_input_fields (Optional): Array of string. Address and
     * coordinate fields a callback method requires and is allowed to receive. maxItems: 12.
     * uniqueItems: true. [] enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate". quote_input_fields[] (Value): string. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirementInput}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or
     * `phone`) is required for a delivery method, and the format it must use.
     * selection_guarantee_seconds (Optional): integer. How long after evaluation Flint guarantees
     * a selected price, when that is later than the option expiry. Defaults to 0, which uses the
     * option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory
     * hold until the checkout's calculation expiry. Format: int64. minimum: 0. taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**
         *  service_level (Optional): string. Value enum: "economy", "standard", "expedited",
         * "express", "overnight", "same_day".
         */
        "public_details"?: ({
            /**
             * Value enum: "economy", "standard", "expedited", "express", "overnight", "same_day".
             */
            "service_level"?: "economy" | "standard" | "expedited" | "express" | "overnight" | "same_day";
        })
            & ({
            "pickup_mode"?: never;
        });
    });
    /** Value enum: "shipment". */
    "type": "shipment";
});
/** The `delivery_options` variant of `CreateDeliveryPreviewRequest`. */
export type CreateDeliveryOptionsPreviewRequest = {
    /**
     * The buyer's location for pickup or local delivery, supplied as an address or a coordinate,
     * chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Delivery methods to evaluate. When omitted, uses
     * settings.checkout.default_delivery_method_ids, or no methods when that setting is empty. []
     * (Value): string. minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * A partial address for delivery quotes, previews, and buyer locations. Country is required
     * when any member is present.
     */
    "destination_address"?: DeliveryAddressRequest;
    /**
     * Chooses where a delivery options preview routes inventory from: a fixed Location, an
     * inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link CreateOrderLineItem}. A line item to add to
     * an order: a catalog variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
    /**
     * The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods
     * and prices for the supplied items and buyer location. Value enum: "delivery_options".
     */
    "mode": "delivery_options" | (string & {});
    /** minLength: 1. */
    "pickup_location_id"?: string;
    /**  * (Value): string. minLength: 1. */
    "pricing_context"?: Record<string, string>;
};
/** The `delivery_options` variant of `CreateDeliveryPreviewRequest`. */
export type CreateDeliveryOptionsPreviewRequestInput = {
    /**
     * The buyer's location for pickup or local delivery, supplied as an address or a coordinate,
     * chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequestInput;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Delivery methods to evaluate. When omitted, uses
     * settings.checkout.default_delivery_method_ids, or no methods when that setting is empty. []
     * (Value): string. minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * A partial address for delivery quotes, previews, and buyer locations. Country is required
     * when any member is present.
     */
    "destination_address"?: DeliveryAddressRequestInput;
    /**
     * Chooses where a delivery options preview routes inventory from: a fixed Location, an
     * inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: DeliveryPreviewRoutingSourceInput;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link CreateOrderLineItemRequestInput}. A line item
     * to add to an order: a catalog variant, a bundle, or a custom item with a name and unit
     * price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
    /**
     * The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods
     * and prices for the supplied items and buyer location. Value enum: "delivery_options".
     */
    "mode": "delivery_options";
    /** minLength: 1. */
    "pickup_location_id"?: string;
    /**  * (Value): string. minLength: 1. */
    "pricing_context"?: Record<string, string>;
};
/** The `pickup_locations` variant of `CreateDeliveryPreviewRequest`. */
export type CreateDeliveryPickupLocationsPreviewRequest = {
    /**
     * The buyer's location for pickup or local delivery, supplied as an address or a coordinate,
     * chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /**
     * Checkout session whose pickup locations to evaluate. Checkout credentials must identify
     * their own session. minLength: 1.
     */
    "checkout_session_id": string;
    /**
     * A maximum distance from the buyer location, as a value and unit, that limits which pickup
     * locations a preview returns.
     */
    "maximum_distance"?: DeliveryDistance;
    /**
     * The delivery question this preview answers. - `pickup_locations`: Lists the checkout
     * session's pickup locations and whether each can supply its items. Value enum:
     * "pickup_locations".
     */
    "mode": "pickup_locations" | (string & {});
};
/** The `pickup_locations` variant of `CreateDeliveryPreviewRequest`. */
export type CreateDeliveryPickupLocationsPreviewRequestInput = {
    /**
     * The buyer's location for pickup or local delivery, supplied as an address or a coordinate,
     * chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequestInput;
    /**
     * Checkout session whose pickup locations to evaluate. Checkout credentials must identify
     * their own session. minLength: 1.
     */
    "checkout_session_id": string;
    /**
     * A maximum distance from the buyer location, as a value and unit, that limits which pickup
     * locations a preview returns.
     */
    "maximum_distance"?: DeliveryPickupAvailabilityMaximumDistanceRequestInput;
    /**
     * The delivery question this preview answers. - `pickup_locations`: Lists the checkout
     * session's pickup locations and whether each can supply its items. Value enum:
     * "pickup_locations".
     */
    "mode": "pickup_locations";
};
/** The request body for: Create delivery preview. */
export type CreateDeliveryPreviewRequest = ((CreateDeliveryOptionsPreviewRequest)
    | (CreateDeliveryPickupLocationsPreviewRequest)
    | (Record<string, unknown>));
/** The request body for: Create delivery preview. */
export type CreateDeliveryPreviewRequestInput = ((CreateDeliveryOptionsPreviewRequestInput) | (CreateDeliveryPickupLocationsPreviewRequestInput));
/** The request body for: Create delivery profile. */
export type CreateDeliveryProfileRequest = {
    /**
     * Delivery planning settings you supply when creating or updating a delivery profile. Which
     * fields are allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequest;
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
};
/** The request body for: Create delivery profile. */
export type CreateDeliveryProfileRequestInput = {
    /**
     * Delivery planning settings you supply when creating or updating a delivery profile. Which
     * fields are allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequestInput;
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
};
/** The request body for: Create delivery rate callback. */
export type CreateDeliveryRateCallbackRequest = {
    /**
     * Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout,
     * request and response size limits, redirect policy, and whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfiguration;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "name": string;
    /**
     * Signing methods for callback requests. Defaults to JWT verification with Flint's public
     * JWKS. A shared secret and key_id are returned only when hmac is included. minItems: 1.
     * uniqueItems: true. Default: ["jwt"]. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethod}. jwt uses Flint's public JWKS. hmac uses a shared secret and Standard
     * Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
};
/** The request body for: Create delivery rate callback. */
export type CreateDeliveryRateCallbackRequestInput = {
    /**
     * Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout,
     * request and response size limits, redirect policy, and whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfigurationInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "name": string;
    /**
     * Signing methods for callback requests. Defaults to JWT verification with Flint's public
     * JWKS. A shared secret and key_id are returned only when hmac is included. minItems: 1.
     * uniqueItems: true. Default: ["jwt"]. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethodInput}. jwt uses Flint's public JWKS. hmac uses a shared secret and
     * Standard Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
};
/**
 * The delivery option to select for one choice group when creating a delivery selection, with
 * optional delivery instructions.
 */
export type CreateDeliverySelectionChoiceRequest = {
    /** minLength: 1. */
    "delivery_choice_group_id": string;
    /** minLength: 1. */
    "delivery_option_id": string;
    /**
     * Buyer input for a selected delivery option: a `delivery_window_id` where the option uses
     * delivery windows, and optional `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequest;
};
/**
 * The delivery option to select for one choice group when creating a delivery selection, with
 * optional delivery instructions.
 */
export type CreateDeliverySelectionChoiceRequestInput = {
    /** minLength: 1. */
    "delivery_choice_group_id": string;
    /** minLength: 1. */
    "delivery_option_id": string;
    /**
     * Buyer input for a selected delivery option: a `delivery_window_id` where the option uses
     * delivery windows, and optional `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequestInput;
};
/** The request body for: Create delivery selection. */
export type CreateDeliverySelectionRequest = {
    /**
     *  [] (Value): {@link CreateDeliverySelectionChoiceRequest}. The delivery option to select for
     * one choice group when creating a delivery selection, with optional delivery instructions.
     */
    "choices": Array<CreateDeliverySelectionChoiceRequest>;
    /** minLength: 1. */
    "delivery_quote_id": string;
    /**
     * Partial is fine when quoting: send what the buyer has entered, at least country. A
     * destination_address sent with a selection must be complete; a selection that omits it uses
     * the quote's destination, which may be partial. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none.
     */
    "destination_address"?: AddressRequest;
    /**
     * Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no
     * assertion, send null to assert that no selection exists, or send an ID to assert that it is
     * current. minLength: 1.
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Recipient details you supply with a delivery selection or subscription delivery: optional
     * `name`, `email`, and `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequest;
};
/** The request body for: Create delivery selection. */
export type CreateDeliverySelectionRequestInput = {
    /**
     *  [] (Value): {@link CreateDeliverySelectionChoiceRequestInput}. The delivery option to
     * select for one choice group when creating a delivery selection, with optional delivery
     * instructions.
     */
    "choices": Array<CreateDeliverySelectionChoiceRequestInput>;
    /** minLength: 1. */
    "delivery_quote_id": string;
    /**
     * Partial is fine when quoting: send what the buyer has entered, at least country. A
     * destination_address sent with a selection must be complete; a selection that omits it uses
     * the quote's destination, which may be partial. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none.
     */
    "destination_address"?: AddressRequestInput;
    /**
     * Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no
     * assertion, send null to assert that no selection exists, or send an ID to assert that it is
     * current. minLength: 1.
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Recipient details you supply with a delivery selection or subscription delivery: optional
     * `name`, `email`, and `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequestInput;
};
/** The request body for: Create delivery zone. */
export type CreateDeliveryZoneRequest = {
    /**
     * A reusable geographic predicate containing only country, state, postal_code, and radius
     * conditions.
     */
    "configuration": DeliveryZoneConfiguration;
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
};
/** The request body for: Create delivery zone. */
export type CreateDeliveryZoneRequestInput = {
    /**
     * A reusable geographic predicate containing only country, state, postal_code, and radius
     * conditions.
     */
    "configuration": DeliveryZoneConfigurationInput;
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
};
/** The request body for: Create demo session. */
export type CreateDemoSessionRequestInput = {
    /**
     * Omit to use quickstart. An explicit empty or unsupported template is invalid. Default:
     * "quickstart". Value enum: "quickstart".
     */
    "template"?: "quickstart";
};
/**
 * The created sandbox is the primary resource, with the API key and one-time secret_key when
 * issue_test_key is true.
 */
export type CreateDeveloperSandboxResult = {
    /**
     * The newly issued test API key. Present exactly when issue_test_key is true. A credential
     * used to authenticate API requests.
     */
    "api_key"?: APIKey;
    /** An isolated environment for testing an integration. */
    "sandbox": Sandbox;
    /** The one-time secret for api_key. Present exactly when issue_test_key is true. */
    "secret_key"?: string;
};
/** The request body for: Create device. */
export type CreateDeviceRequest = {
    /**
     * Stable hardware identity. Must have no leading or trailing whitespace and is compared
     * exactly, including case and accents. Only one active device in this merchant and environment
     * can hold it. minLength: 1. maxLength: 255.
     */
    "hardware_fingerprint"?: string;
    /** minLength: 1. */
    "location_id"?: string;
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
};
/** The request body for: Create device. */
export type CreateDeviceRequestInput = {
    /**
     * Stable hardware identity. Must have no leading or trailing whitespace and is compared
     * exactly, including case and accents. Only one active device in this merchant and environment
     * can hold it. minLength: 1. maxLength: 255.
     */
    "hardware_fingerprint"?: string;
    /** minLength: 1. */
    "location_id"?: string;
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
};
/** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
export type CreateDigitalFulfillmentDetails = {
    /** minLength: 1. */
    "delivery_url"?: string;
};
/** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
export type CreateDigitalFulfillmentDetailsInput = CreateDigitalFulfillmentDetails;
/** The request body for: Request an email change. */
export type CreateEmailChangeRequest = {
    /** Format: email. minLength: 1. maxLength: 320. */
    "new_email": string;
};
/** The request body for: Request an email change. */
export type CreateEmailChangeRequestInput = CreateEmailChangeRequest;
/**
 * The `bug` variant of `CreateFeedbackReportRequest`. The `feature_request` variant of
 * `CreateFeedbackReportRequest`. The `other` variant of `CreateFeedbackReportRequest`. The
 * `papercut` variant of `CreateFeedbackReportRequest`. The `praise` variant of
 * `CreateFeedbackReportRequest`.
 */
export type CreateFeedbackReportNarrative = ({
    /**
     * Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Location in the reporting code associated with this feedback. Limited to 500 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /**
     * Optional details about the feedback. Limited to 8000 characters (Unicode code points),
     * counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /**
     * Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "praise",
     * "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255.
     */
    "related_request_id"?: string;
    /**
     * Existing public resources associated with this feedback, with at most 20 unique IDs.
     * maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems:
     * true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral" | (string & {});
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Relevant route in the product being discussed. Limited to 500 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Value enum: "papercut", "bug", "feature_request", "praise", "other". */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
});
/**
 * The `bug` variant of `CreateFeedbackReportRequest`. The `feature_request` variant of
 * `CreateFeedbackReportRequest`. The `other` variant of `CreateFeedbackReportRequest`. The
 * `papercut` variant of `CreateFeedbackReportRequest`. The `praise` variant of
 * `CreateFeedbackReportRequest`.
 */
export type CreateFeedbackReportNarrativeInput = ({
    /**
     * Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Location in the reporting code associated with this feedback. Limited to 500 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /**
     * Optional details about the feedback. Limited to 8000 characters (Unicode code points),
     * counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /**
     * Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "praise",
     * "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other";
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255.
     */
    "related_request_id"?: string;
    /**
     * Existing public resources associated with this feedback, with at most 20 unique IDs.
     * maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientInput;
    /**
     * Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems:
     * true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral";
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other";
    /**
     * Relevant route in the product being discussed. Limited to 500 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Value enum: "papercut", "bug", "feature_request", "praise", "other". */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other";
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other";
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
});
/** The `rating` variant of `CreateFeedbackReportRequest`. */
export type CreateFeedbackReportRating = ({
    /**
     * Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Location in the reporting code associated with this feedback. Limited to 500 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /**
     * Optional details about the feedback. Limited to 8000 characters (Unicode code points),
     * counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /** Classification of the feedback. Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255.
     */
    "related_request_id"?: string;
    /**
     * Existing public resources associated with this feedback, with at most 20 unique IDs.
     * maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems:
     * true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral" | (string & {});
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Relevant route in the product being discussed. Limited to 500 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral" | (string & {});
});
/** The `rating` variant of `CreateFeedbackReportRequest`. */
export type CreateFeedbackReportRatingInput = ({
    /**
     * Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Location in the reporting code associated with this feedback. Limited to 500 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /**
     * Optional details about the feedback. Limited to 8000 characters (Unicode code points),
     * counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /** Classification of the feedback. Value enum: "rating". */
    "kind": "rating";
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255.
     */
    "related_request_id"?: string;
    /**
     * Existing public resources associated with this feedback, with at most 20 unique IDs.
     * maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientInput;
    /**
     * Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems:
     * true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral";
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other";
    /**
     * Relevant route in the product being discussed. Limited to 500 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Value enum: "rating". */
    "kind": "rating";
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other";
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral";
});
/** The request body for: Create a feedback report. */
export type CreateFeedbackReportRequest = ({
    /**
     * Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Location in the reporting code associated with this feedback. Limited to 500 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /**
     * Optional details about the feedback. Limited to 8000 characters (Unicode code points),
     * counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /**
     * Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "rating",
     * "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other" | (string & {});
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255.
     */
    "related_request_id"?: string;
    /**
     * Existing public resources associated with this feedback, with at most 20 unique IDs.
     * maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems:
     * true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral" | (string & {});
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Relevant route in the product being discussed. Limited to 500 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 500.
     */
    "surface_route"?: string;
})
    & ((Exclude<CreateFeedbackReportRating & object, readonly unknown[]>)
    | (Exclude<CreateFeedbackReportNarrative & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create a feedback report. */
export type CreateFeedbackReportRequestInput = ({
    /**
     * Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Location in the reporting code associated with this feedback. Limited to 500 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /**
     * Optional details about the feedback. Limited to 8000 characters (Unicode code points),
     * counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /**
     * Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "rating",
     * "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other";
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255.
     */
    "related_request_id"?: string;
    /**
     * Existing public resources associated with this feedback, with at most 20 unique IDs.
     * maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientInput;
    /**
     * Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems:
     * true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral";
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other";
    /**
     * Relevant route in the product being discussed. Limited to 500 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 500.
     */
    "surface_route"?: string;
})
    & ((Exclude<CreateFeedbackReportRatingInput & object, readonly unknown[]>)
    | (Exclude<CreateFeedbackReportNarrativeInput & object, readonly unknown[]>));
/** The request body for: Create a file. */
export type CreateFileRequest = {
    /** Value enum: "image/jpeg", "image/png", "image/webp". */
    "content_type": "image/jpeg" | "image/png" | "image/webp" | (string & {});
    /**
     * What the image will be used for. Creating or completing merchant_logo and merchant_icon
     * files changes shared branding and requires a live-mode credential or a Dashboard session in
     * any selected environment. Test credentials receive 403 FORBIDDEN with reason
     * live_mode_required. Partner installs support the five commerce purposes; merchant_logo and
     * merchant_icon require merchants.profile.write, which partner installs cannot grant, so live
     * install credentials receive INSUFFICIENT_SCOPE with scope_requirement. Value enum:
     * "product", "product_variant", "bundle", "payment_link", "subscription_plan",
     * "merchant_logo", "merchant_icon".
     */
    "purpose": "product"
        | "product_variant"
        | "bundle"
        | "payment_link"
        | "subscription_plan"
        | "merchant_logo"
        | "merchant_icon"
        | (string & {});
    /** Format: int64. minimum: 1. maximum: 5242880. */
    "size_bytes": number;
};
/** The request body for: Create a file. */
export type CreateFileRequestInput = {
    /** Value enum: "image/jpeg", "image/png", "image/webp". */
    "content_type": "image/jpeg" | "image/png" | "image/webp";
    /**
     * What the image will be used for. Creating or completing merchant_logo and merchant_icon
     * files changes shared branding and requires a live-mode credential or a Dashboard session in
     * any selected environment. Test credentials receive 403 FORBIDDEN with reason
     * live_mode_required. Partner installs support the five commerce purposes; merchant_logo and
     * merchant_icon require merchants.profile.write, which partner installs cannot grant, so live
     * install credentials receive INSUFFICIENT_SCOPE with scope_requirement. Value enum:
     * "product", "product_variant", "bundle", "payment_link", "subscription_plan",
     * "merchant_logo", "merchant_icon".
     */
    "purpose": "product"
        | "product_variant"
        | "bundle"
        | "payment_link"
        | "subscription_plan"
        | "merchant_logo"
        | "merchant_icon";
    /** Format: int64. minimum: 1. maximum: 5242880. */
    "size_bytes": number;
};
/** The request body for: Create fulfillment event. */
export type CreateFulfillmentEventRequest = {
    /**  * (Value): string. minLength: 1. */
    "custom_details"?: Record<string, string>;
    /** Value enum: "carrier_scan", "custom". */
    "event_type": "carrier_scan" | "custom" | (string & {});
    /** minLength: 1. */
    "external_event_id"?: string;
    /** minLength: 1. */
    "external_status"?: string;
    /** minLength: 1. */
    "external_system"?: string;
    /** minLength: 1. */
    "location_description"?: string;
    /** minLength: 1. */
    "message"?: string;
    /** Provider event timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Nested package associated with this observational event. Flint resolves and validates its
     * shipment and fulfillment ownership. minLength: 1.
     */
    "package_id"?: string;
    /**
     * Nested shipment associated with this observational event. Flint validates that it belongs to
     * the fulfillment in the path. minLength: 1.
     */
    "shipment_id"?: string;
};
/** The request body for: Create fulfillment event. */
export type CreateFulfillmentEventRequestInput = {
    /**  * (Value): string. minLength: 1. */
    "custom_details"?: Record<string, string>;
    /** Value enum: "carrier_scan", "custom". */
    "event_type": "carrier_scan" | "custom";
    /** minLength: 1. */
    "external_event_id"?: string;
    /** minLength: 1. */
    "external_status"?: string;
    /** minLength: 1. */
    "external_system"?: string;
    /** minLength: 1. */
    "location_description"?: string;
    /** minLength: 1. */
    "message"?: string;
    /** Provider event timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Nested package associated with this observational event. Flint resolves and validates its
     * shipment and fulfillment ownership. minLength: 1.
     */
    "package_id"?: string;
    /**
     * Nested shipment associated with this observational event. Flint validates that it belongs to
     * the fulfillment in the path. minLength: 1.
     */
    "shipment_id"?: string;
};
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequest = ({
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1.
     */
    "device_id"?: string;
    /** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity
     * to include when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Local delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** minLength: 1. */
    "location_id"?: string;
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
     * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
     * instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
     * address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Service details you supply when creating a fulfillment: the scheduled start and end,
     * timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Value enum: "shipment", "pickup", "local_delivery", "digital", "service". */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
})
    & ((Exclude<CreateFulfillmentRequestShipment & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestPickup & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestLocalDelivery & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestDigital & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestService & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestDigital = ({
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1.
     */
    "device_id"?: string;
    /** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity
     * to include when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Local delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** minLength: 1. */
    "location_id"?: string;
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
     * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
     * instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
     * address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Service details you supply when creating a fulfillment: the scheduled start and end,
     * timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Value enum: "digital". */
    "type": "digital" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestDigitalInput = ({
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1.
     */
    "device_id"?: string;
    /** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link FulfillmentLineItemRequestInput}. An order line item and
     * quantity to include when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Local delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** minLength: 1. */
    "location_id"?: string;
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
     * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
     * instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
     * address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Service details you supply when creating a fulfillment: the scheduled start and end,
     * timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Value enum: "digital". */
    "type": "digital";
})
    & (({
    "shipment"?: never;
}))
    & (({
    "pickup_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
}))
    & (({
    "service_details"?: never;
}));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestInput = ({
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1.
     */
    "device_id"?: string;
    /** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link FulfillmentLineItemRequestInput}. An order line item and
     * quantity to include when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Local delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** minLength: 1. */
    "location_id"?: string;
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
     * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
     * instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
     * address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Service details you supply when creating a fulfillment: the scheduled start and end,
     * timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Value enum: "shipment", "pickup", "local_delivery", "digital", "service". */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service";
})
    & ((Exclude<CreateFulfillmentRequestShipmentInput & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestPickupInput & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestLocalDeliveryInput & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestDigitalInput & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestServiceInput & object, readonly unknown[]>));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestLocalDelivery = ({
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1.
     */
    "device_id"?: string;
    /** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity
     * to include when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Local delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** minLength: 1. */
    "location_id"?: string;
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
     * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
     * instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
     * address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Service details you supply when creating a fulfillment: the scheduled start and end,
     * timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Value enum: "local_delivery". */
    "type": "local_delivery" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestLocalDeliveryInput = ({
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1.
     */
    "device_id"?: string;
    /** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link FulfillmentLineItemRequestInput}. An order line item and
     * quantity to include when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Local delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** minLength: 1. */
    "location_id"?: string;
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
     * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
     * instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
     * address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Service details you supply when creating a fulfillment: the scheduled start and end,
     * timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Value enum: "local_delivery". */
    "type": "local_delivery";
})
    & (({
    "shipment"?: never;
}))
    & (({
    "pickup_details"?: never;
}))
    & (({
    "digital_details"?: never;
}))
    & (({
    "service_details"?: never;
}));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestPickup = ({
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1.
     */
    "device_id"?: string;
    /** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity
     * to include when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Local delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** minLength: 1. */
    "location_id"?: string;
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
     * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
     * instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
     * address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Service details you supply when creating a fulfillment: the scheduled start and end,
     * timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Value enum: "pickup". */
    "type": "pickup" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestPickupInput = ({
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1.
     */
    "device_id"?: string;
    /** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link FulfillmentLineItemRequestInput}. An order line item and
     * quantity to include when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Local delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** minLength: 1. */
    "location_id"?: string;
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
     * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
     * instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
     * address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Service details you supply when creating a fulfillment: the scheduled start and end,
     * timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Value enum: "pickup". */
    "type": "pickup";
})
    & (({
    "shipment"?: never;
}))
    & (({
    "local_delivery_details"?: never;
}))
    & (({
    "digital_details"?: never;
}))
    & (({
    "service_details"?: never;
}));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestService = ({
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1.
     */
    "device_id"?: string;
    /** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity
     * to include when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Local delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** minLength: 1. */
    "location_id"?: string;
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
     * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
     * instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
     * address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Service details you supply when creating a fulfillment: the scheduled start and end,
     * timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Value enum: "service". */
    "type": "service" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestServiceInput = ({
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1.
     */
    "device_id"?: string;
    /** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link FulfillmentLineItemRequestInput}. An order line item and
     * quantity to include when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Local delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** minLength: 1. */
    "location_id"?: string;
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
     * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
     * instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
     * address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Service details you supply when creating a fulfillment: the scheduled start and end,
     * timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Value enum: "service". */
    "type": "service";
})
    & (({
    "shipment"?: never;
}))
    & (({
    "pickup_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
}))
    & (({
    "digital_details"?: never;
}));
