import type { AddressRequestInput, AddressRequest, APIKey } from './types-0.js';
import type { MetadataMap, MetadataRequestInput } from './types-36.js';
import type { TaxIdentityPatch, TaxIdentityRequestInput } from './types-61.js';
import type { CustomerTaxExemptionCoverage, CustomerTaxExemptionCoverageRequestInput } from './types-15.js';
import type {
    DeliveryLocationSetConfiguration,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationCreateRequest,
    DeliveryMethodConfigurationCreateRequestInput,
    DeliveryMethodConfigurationRequest,
    DeliveryMethodConfigurationRequestInput,
    DeliveryMethodOriginSelectorRequest
} from './types-17.js';
import type {
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryPreviewRoutingSourceInput,
    DeliveryPickupAvailabilityMaximumDistanceRequestInput
} from './types-18.js';
import type { CreateOrderLineItem, CreateOrderLineItemRequestInput } from './types-10.js';
import type {
    DeliveryAddressRequest,
    DeliveryBuyerLocationRequest,
    DeliveryAddressRequestInput,
    DeliveryBuyerLocationRequestInput,
    DeliveryDistance
} from './types-16.js';
import type { InventoryRoutingSource } from './types-29.js';
import type { DeliveryProfileConfigurationRequest, DeliveryProfileConfigurationRequestInput } from './types-19.js';
import type {
    DeliveryRateCallbackConfiguration,
    DeliveryRateCallbackConfigurationRequestInput,
    DeliveryRevocationTarget
} from './types-20.js';
import type { WebhookSigningMethod, WebhookSigningMethodInput } from './types-66.js';
import type {
    DeliverySelectionInstructionsRequest,
    DeliverySelectionInstructionsRequestInput,
    DeliverySelectionRecipientRequest,
    DeliverySelectionRecipientRequestInput,
    DeliveryZoneConfigurationRequest,
    DeliveryZoneConfigurationRequestInput
} from './types-21.js';
import type { Sandbox } from './types-56.js';
import type { FeedbackReportingClient, FeedbackReportingClientRequestInput } from './types-23.js';
/** The request body for: Create a customer address; Create an address for the current buyer. */
export type CreateCustomerAddressRequestInput = {
    /**
     * The postal address to save. A complete postal address. State and postal_code are required
     * for US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "address": AddressRequestInput;
    /**
     * Set true to make this the default billing address and remove that default from any other
     * saved address. Defaults to false.
     */
    "is_default_billing"?: boolean;
    /**
     * Set true to make this the default shipping address and remove that default from any other
     * saved address. Defaults to false.
     */
    "is_default_shipping"?: boolean;
    /**
     * Limited to 100 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. minLength: 1. maxLength: 100.
     */
    "label"?: string;
    /**
     * E.164 phone number. Limited to 30 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 30.
     */
    "phone"?: string;
    /**
     * Limited to 255 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name": string;
};
/** The request body for: Request customer account deletion. */
export type CreateCustomerDeletionRequest = {
    /**
     * Flint customer ID of the customer to delete. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
};
/** The request body for: Request customer account deletion. */
export type CreateCustomerDeletionRequestInput = CreateCustomerDeletionRequest;
/** The request body for: Create customer. */
export type CreateCustomerRequest = ({
    /**
     * ID of the invoice payment term that applies to this customer's invoices created with
     * `payment_due.type` set to `customer_default`. minLength: 1. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string;
    /**
     * Customer email, unique among the environment's customers. Required when `on_email_conflict`
     * is `return_existing`. Format: email. minLength: 1. maxLength: 320. Example:
     * "buyer@example.com".
     */
    "email"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Internal note about this customer. Not returned to customer sessions. minLength: 1. */
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
    /**
     * Customer name, up to 255 characters (Unicode code points) after trimming surrounding
     * whitespace. minLength: 1.
     */
    "name"?: string;
    /**
     * What to do when an active customer in this environment already has `email`. `error` returns
     * `409 ALREADY_EXISTS` naming that customer. `return_existing` returns that customer unchanged
     * with `200` instead of creating one; it requires `email`. Emails match case-insensitively.
     * Default: "error". Value enum: "error", "return_existing".
     */
    "on_email_conflict"?: "error" | "return_existing" | (string & {});
    /** Customer phone number. minLength: 1. */
    "phone"?: string;
    /**
     * ID of a wholesale price list in this merchant environment. An inactive list can be assigned
     * but does not apply. An archived list returns 409 ACTION_NOT_ALLOWED; a missing list returns
     * 404 RESOURCE_NOT_FOUND. Omit or send null for no direct list. minLength: 1. pattern:
     * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id"?: string | null;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource.
     * minLength: 1.
     */
    "segment"?: string;
    /**
     * Whether Flint treats this customer as exempt from tax on their orders, so it skips tax
     * calculation for them. Defaults to `false`.
     */
    "tax_exempt"?: boolean;
    /**
     * Legal name, registered address and tax IDs printed on this customer's invoices and credit
     * notes. Merchant-provided legal identity displayed on invoices and credit notes. Does not
     * verify IDs or change tax treatment. Tax IDs are an owned collection in display order;
     * replacing the array requires the parent's expected_version. Existing entries retain their
     * document_tax_id; omit an entry to remove it, or omit its ID to add one.
     */
    "tax_identity"?: TaxIdentityPatch;
    /**
     * Sandbox only. ID of a test clock to create the customer on. The customer, and every
     * subscription created for it, read the clock's time instead of real time. A customer can't be
     * moved to another clock or taken off one. A live credential gets `403 FORBIDDEN` with reason
     * `test_mode_required`. minLength: 1. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
     */
    "test_clock_id"?: string;
});
/** The request body for: Create customer. */
export type CreateCustomerRequestInput = ({
    /**
     * ID of the invoice payment term that applies to this customer's invoices created with
     * `payment_due.type` set to `customer_default`. minLength: 1. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string;
    /**
     * Customer email, unique among the environment's customers. Required when `on_email_conflict`
     * is `return_existing`. Format: email. minLength: 1. maxLength: 320. Example:
     * "buyer@example.com".
     */
    "email"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Internal note about this customer. Not returned to customer sessions. minLength: 1. */
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
    /**
     * Customer name, up to 255 characters (Unicode code points) after trimming surrounding
     * whitespace. minLength: 1.
     */
    "name"?: string;
    /**
     * What to do when an active customer in this environment already has `email`. `error` returns
     * `409 ALREADY_EXISTS` naming that customer. `return_existing` returns that customer unchanged
     * with `200` instead of creating one; it requires `email`. Emails match case-insensitively.
     * Default: "error". Value enum: "error", "return_existing".
     */
    "on_email_conflict"?: "error" | "return_existing";
    /** Customer phone number. minLength: 1. */
    "phone"?: string;
    /**
     * ID of a wholesale price list in this merchant environment. An inactive list can be assigned
     * but does not apply. An archived list returns 409 ACTION_NOT_ALLOWED; a missing list returns
     * 404 RESOURCE_NOT_FOUND. Omit or send null for no direct list. minLength: 1. pattern:
     * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id"?: string | null;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource.
     * minLength: 1.
     */
    "segment"?: string;
    /**
     * Whether Flint treats this customer as exempt from tax on their orders, so it skips tax
     * calculation for them. Defaults to `false`.
     */
    "tax_exempt"?: boolean;
    /**
     * Legal name, registered address and tax IDs printed on this customer's invoices and credit
     * notes. Merchant-provided legal identity displayed on invoices and credit notes. Does not
     * verify IDs or change tax treatment. Tax IDs are an owned collection in display order;
     * replacing the array requires the parent's expected_version. Existing entries retain their
     * document_tax_id; omit an entry to remove it, or omit its ID to add one.
     */
    "tax_identity"?: TaxIdentityRequestInput;
    /**
     * Sandbox only. ID of a test clock to create the customer on. The customer, and every
     * subscription created for it, read the clock's time instead of real time. A customer can't be
     * moved to another clock or taken off one. A live credential gets `403 FORBIDDEN` with reason
     * `test_mode_required`. minLength: 1. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
     */
    "test_clock_id"?: string;
});
/** The request body for: Create a customer session. */
export type CreateCustomerSessionRequest = {
    /**
     * ID of the customer the session acts as. Calls made with the session's secret see only this
     * customer's data. minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * How long the secret authenticates account calls, in seconds. Defaults to 3600 (one hour).
     * Refreshing issues a new secret with a new window. Format: int64. minimum: 300. maximum:
     * 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * How long the refresh token can be exchanged for a new secret, in seconds. Defaults to 604800
     * (seven days). Format: int64. minimum: 3600. maximum: 2592000.
     */
    "refresh_expires_in_seconds"?: number;
};
/** The request body for: Create a customer session. */
export type CreateCustomerSessionRequestInput = CreateCustomerSessionRequest;
/** The request body for: Create a customer tax exemption. */
export type CreateCustomerTaxExemptionRequest = {
    /**
     * Merchant's exemption certificate number. Null when none is recorded. minLength: 1.
     * maxLength: 255.
     */
    "certificate_number"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. Replaced as a whole: send every
     * field you want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage": CustomerTaxExemptionCoverage;
    /**
     * Explanation of the exemption. Required for other. Null when none is recorded. minLength: 1.
     * maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no
     * end date. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "end_date"?: string | null;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. Null when none is recorded. minLength: 1. maxLength: 1024.
     */
    "evidence_reference"?: string | null;
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
     * Exemption reason. Other requires a description. Value enum: "federal_government",
     * "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other".
     */
    "reason": "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other"
        | (string & {});
    /**
     * First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the
     * future. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "start_date": string;
};
/** The request body for: Create a customer tax exemption. */
export type CreateCustomerTaxExemptionRequestInput = {
    /**
     * Merchant's exemption certificate number. Null when none is recorded. minLength: 1.
     * maxLength: 255.
     */
    "certificate_number"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. Replaced as a whole: send every
     * field you want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage": CustomerTaxExemptionCoverageRequestInput;
    /**
     * Explanation of the exemption. Required for other. Null when none is recorded. minLength: 1.
     * maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no
     * end date. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "end_date"?: string | null;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. Null when none is recorded. minLength: 1. maxLength: 1024.
     */
    "evidence_reference"?: string | null;
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
     * Exemption reason. Other requires a description. Value enum: "federal_government",
     * "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other".
     */
    "reason": "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other";
    /**
     * First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the
     * future. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "start_date": string;
};
/** The request body for: Create a customer email verification. */
export type CreateCustomerVerificationRequest = {
    /**
     * Defaults to email when omitted. Explicit null and an empty value are not accepted. Default:
     * "email". Value enum: "email".
     */
    "channel"?: "email" | (string & {});
    /**
     * ID of the customer whose email to verify. The code goes to this customer's current email.
     * minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * What the verification is for. It can only be used for that purpose. Value enum:
     * "link_guest_purchases".
     */
    "purpose": "link_guest_purchases" | (string & {});
};
/** The request body for: Create a customer email verification. */
export type CreateCustomerVerificationRequestInput = {
    /**
     * Defaults to email when omitted. Explicit null and an empty value are not accepted. Default:
     * "email". Value enum: "email".
     */
    "channel"?: "email";
    /**
     * ID of the customer whose email to verify. The code goes to this customer's current email.
     * minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * What the verification is for. It can only be used for that purpose. Value enum:
     * "link_guest_purchases".
     */
    "purpose": "link_guest_purchases";
};
/**
 * Local delivery details you supply when creating a fulfillment: courier, timing window,
 * instructions, and tracking.
 */
export type CreateDeliveryFulfillmentDetails = {
    /** minLength: 1. */
    "carrier"?: string;
    /**
     * Time at which the courier collected the order. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "dispatched_at"?: string;
    /** Driver-facing notes for the final handoff. minLength: 1. maxLength: 2048. */
    "dropoff_notes"?: string;
    /**
     * Deadline after which an undelivered job should enter merchant review. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
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
    /**
     * Time at which the order became ready for courier pickup. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string;
    /** minLength: 1. Example: "boston-north". */
    "service_area_id"?: string;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string;
};
/**
 * Local delivery details you supply when creating a fulfillment: courier, timing window,
 * instructions, and tracking.
 */
export type CreateDeliveryFulfillmentDetailsInput = {
    /** minLength: 1. */
    "carrier"?: string;
    /**
     * Time at which the courier collected the order. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "dispatched_at"?: string | globalThis.Date;
    /** Driver-facing notes for the final handoff. minLength: 1. maxLength: 2048. */
    "dropoff_notes"?: string;
    /**
     * Deadline after which an undelivered job should enter merchant review. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
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
    /**
     * Time at which the order became ready for courier pickup. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string | globalThis.Date;
    /** minLength: 1. Example: "boston-north". */
    "service_area_id"?: string;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string | globalThis.Date;
};
/** The request body for: Create delivery location set. */
export type CreateDeliveryLocationSetRequest = {
    /** The location IDs in a delivery location set. */
    "configuration": DeliveryLocationSetConfiguration;
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
    /** minLength: 1. */
    "name": string;
};
/** The request body for: Create delivery location set. */
export type CreateDeliveryLocationSetRequestInput = {
    /** The location IDs in a delivery location set. */
    "configuration": DeliveryLocationSetConfigurationInput;
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
    /** minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
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
    /** minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
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
    /** minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
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
     * current value, or send null to clear it back to inheriting. Automatic tax calculates
     * service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge
     * location, including the store for pickup. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null. eligibility (Optional): {@link
     * DeliveryEligibilityExpressionRequest}. Conditions that decide where this method is offered.
     * Omit this field to offer the method everywhere the merchant serves. A boolean expression
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
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". quote_input_fields[] (Value):
     * string. Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". recipient_requirements
     * (Optional): Array of {@link DeliveryRecipientRequirement}. Recipient fields this method asks
     * for. A delivery selection can leave out required fields, but payment needs them.
     * recipient_requirements[] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use. selection_guarantee_seconds (Optional): integer. How long after
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
    /** minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
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
     * current value, or send null to clear it back to inheriting. Automatic tax calculates
     * service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge
     * location, including the store for pickup. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null. eligibility (Optional): {@link
     * DeliveryEligibilityExpressionRequestInput}. Conditions that decide where this method is
     * offered. Omit this field to offer the method everywhere the merchant serves. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes. estimate (Optional): {@link
     * DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use type
     * none when the merchant makes no timing promise. The timing estimate rule you supply for a
     * delivery method, chosen by `type`: none, a transit time, or a schedule window.
     * minimum_option_lifetime_seconds (Optional): integer. Minimum remaining quote lifetime
     * required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. origin (Required): {@link
     * DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. pricing (Required): {@link
     * DeliveryPricingStrategyRequestInput}. How Flint calculates the delivery charge. The pricing
     * strategy you supply when updating a delivery method. Set `type` and the matching property.
     * public_details (Optional): object. Buyer-visible structured details supplied by the
     * merchant. public_details.instructions (Optional): string. Buyer-visible instructions for
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
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". quote_input_fields[] (Value):
     * string. Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". recipient_requirements
     * (Optional): Array of {@link DeliveryRecipientRequirementRequestInput}. Recipient fields this
     * method asks for. A delivery selection can leave out required fields, but payment needs them.
     * recipient_requirements[] (Value): {@link DeliveryRecipientRequirementRequestInput}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use. selection_guarantee_seconds (Optional): integer. How long after
     * evaluation Flint guarantees a selected price, when that is later than the option expiry.
     * Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart
     * without tracked inventory hold until the checkout's calculation expiry. Format: int64.
     * minimum: 0. taxable (Optional): boolean or null. Whether the delivery charge is taxable.
     * Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it
     * on PATCH to preserve the current value, or send null to clear it back to inheriting.
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
    /** minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
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
     * current value, or send null to clear it back to inheriting. Automatic tax calculates
     * service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge
     * location, including the store for pickup. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null. eligibility (Optional): {@link
     * DeliveryEligibilityExpressionRequest}. Conditions that decide where this method is offered.
     * Omit this field to offer the method everywhere the merchant serves. A boolean expression
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
     * minLength: 1. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". origin.location_id (Optional):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin.location_ids
     * (Optional): Array of string. Inline Location IDs for a set managed by this delivery method.
     * Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. origin.location_ids[] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin.type (Required):
     * string. Value enum: "pickup_location_collection". origin.oneOf[1] (Value): {@link
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
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". quote_input_fields[] (Value):
     * string. Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". recipient_requirements
     * (Optional): Array of {@link DeliveryRecipientRequirement}. Recipient fields this method asks
     * for. A delivery selection can leave out required fields, but payment needs them.
     * recipient_requirements[] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use. selection_guarantee_seconds (Optional): integer. How long after
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
         * minLength: 1. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". location_id (Optional): string.
         * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_ids (Optional): Array
         * of string. Inline Location IDs for a set managed by this delivery method. Send either
         * location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for
         * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
         * Location IDs without exposing the managed set. location_ids[] (Value): string.
         * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". type (Required): string. Value
         * enum: "pickup_location_collection". oneOf[1] (Value): {@link
         * DeliveryMethodOriginSelectorInputFixedLocation}. The `fixed_location` variant of
         * `DeliveryMethodOriginSelectorInput`. oneOf[2] (Value): {@link
         * DeliveryMethodOriginSelectorInputAllocatedOriginGroup}. The `allocated_origin_group`
         * variant of `DeliveryMethodOriginSelectorInput`. oneOf[3] (Value): {@link
         * DeliveryMethodOriginSelectorInputPickupLocationCollection}. The
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
    /** minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
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
     * current value, or send null to clear it back to inheriting. Automatic tax calculates
     * service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge
     * location, including the store for pickup. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null. eligibility (Optional): {@link
     * DeliveryEligibilityExpressionRequestInput}. Conditions that decide where this method is
     * offered. Omit this field to offer the method everywhere the merchant serves. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes. estimate (Optional): {@link
     * DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use type
     * none when the merchant makes no timing promise. The timing estimate rule you supply for a
     * delivery method, chosen by `type`: none, a transit time, or a schedule window.
     * minimum_option_lifetime_seconds (Optional): integer. Minimum remaining quote lifetime
     * required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. origin (Required): {@link
     * DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. origin.delivery_location_set_id
     * (Optional): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". origin.location_id (Optional): string. minLength:
     * 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin.location_ids (Optional): Array of
     * string. Inline Location IDs for a set managed by this delivery method. Send either
     * location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. origin.location_ids[] (Value): string.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin.type (Required): string.
     * Value enum: "pickup_location_collection". origin.oneOf[1] (Value): {@link
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
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". quote_input_fields[] (Value):
     * string. Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". recipient_requirements
     * (Optional): Array of {@link DeliveryRecipientRequirementRequestInput}. Recipient fields this
     * method asks for. A delivery selection can leave out required fields, but payment needs them.
     * recipient_requirements[] (Value): {@link DeliveryRecipientRequirementRequestInput}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use. selection_guarantee_seconds (Optional): integer. How long after
     * evaluation Flint guarantees a selected price, when that is later than the option expiry.
     * Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart
     * without tracked inventory hold until the checkout's calculation expiry. Format: int64.
     * minimum: 0. taxable (Optional): boolean or null. Whether the delivery charge is taxable.
     * Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it
     * on PATCH to preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**
         * The origin you supply for a delivery method, chosen by `type`: a fixed location, or
         * locations from a delivery location set or an inline list. delivery_location_set_id
         * (Optional): string. Named delivery location set to reuse. Send either
         * delivery_location_set_id or inline location_ids, never both. The set may contain at most
         * 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection.
         * minLength: 1. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". location_id (Optional): string.
         * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_ids (Optional): Array
         * of string. Inline Location IDs for a set managed by this delivery method. Send either
         * location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for
         * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
         * Location IDs without exposing the managed set. location_ids[] (Value): string.
         * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". type (Required): string. Value
         * enum: "pickup_location_collection". oneOf[1] (Value): {@link
         * DeliveryMethodOriginSelectorInputFixedLocationInput}. The `fixed_location` variant of
         * `DeliveryMethodOriginSelectorInput`. oneOf[2] (Value): {@link
         * DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput}. The
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
    /** minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
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
     * current value, or send null to clear it back to inheriting. Automatic tax calculates
     * service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge
     * location, including the store for pickup. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null. eligibility (Optional): {@link
     * DeliveryEligibilityExpressionRequest}. Conditions that decide where this method is offered.
     * Omit this field to offer the method everywhere the merchant serves. A boolean expression
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
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". quote_input_fields[] (Value):
     * string. Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". recipient_requirements
     * (Optional): Array of {@link DeliveryRecipientRequirement}. Recipient fields this method asks
     * for. A delivery selection can leave out required fields, but payment needs them.
     * recipient_requirements[] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use. selection_guarantee_seconds (Optional): integer. How long after
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
    /** minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
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
     * current value, or send null to clear it back to inheriting. Automatic tax calculates
     * service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge
     * location, including the store for pickup. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null. eligibility (Optional): {@link
     * DeliveryEligibilityExpressionRequestInput}. Conditions that decide where this method is
     * offered. Omit this field to offer the method everywhere the merchant serves. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes. estimate (Optional): {@link
     * DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use type
     * none when the merchant makes no timing promise. The timing estimate rule you supply for a
     * delivery method, chosen by `type`: none, a transit time, or a schedule window.
     * minimum_option_lifetime_seconds (Optional): integer. Minimum remaining quote lifetime
     * required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. origin (Required): {@link
     * DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. pricing (Required): {@link
     * DeliveryPricingStrategyRequestInput}. How Flint calculates the delivery charge. The pricing
     * strategy you supply when updating a delivery method. Set `type` and the matching property.
     * public_details (Optional): object. Buyer-visible structured details supplied by the
     * merchant. public_details.instructions (Optional): string. Buyer-visible instructions for
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
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". quote_input_fields[] (Value):
     * string. Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". recipient_requirements
     * (Optional): Array of {@link DeliveryRecipientRequirementRequestInput}. Recipient fields this
     * method asks for. A delivery selection can leave out required fields, but payment needs them.
     * recipient_requirements[] (Value): {@link DeliveryRecipientRequirementRequestInput}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use. selection_guarantee_seconds (Optional): integer. How long after
     * evaluation Flint guarantees a selected price, when that is later than the option expiry.
     * Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart
     * without tracked inventory hold until the checkout's calculation expiry. Format: int64.
     * minimum: 0. taxable (Optional): boolean or null. Whether the delivery charge is taxable.
     * Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it
     * on PATCH to preserve the current value, or send null to clear it back to inheriting.
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
     * (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
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
    /** minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
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
     * (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
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
    /** minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
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
     * their own session. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
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
     * their own session. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
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
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "name": string;
    /**
     * Signing methods for callback requests. Defaults to JWT verification with Flint's public
     * JWKS. A shared secret and key_id are returned only when hmac is included. minItems: 1.
     * uniqueItems: true. Default: ["jwt"]. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethod}. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
};
/** The request body for: Create delivery rate callback. */
export type CreateDeliveryRateCallbackRequestInput = {
    /**
     * Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout,
     * request and response size limits, redirect policy, and whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfigurationRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "name": string;
    /**
     * Signing methods for callback requests. Defaults to JWT verification with Flint's public
     * JWKS. A shared secret and key_id are returned only when hmac is included. minItems: 1.
     * uniqueItems: true. Default: ["jwt"]. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethodInput}. How Flint signs requests to this endpoint. Value enum: "jwt",
     * "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
};
/** Creates a permanent fence for one exact delivery dependency in this merchant and environment. */
export type CreateDeliveryRevocationRequest = {
    /** Optional incident context retained with this revocation. minLength: 1. maxLength: 2048. */
    "merchant_note"?: string;
    /**
     * Why this dependency must no longer be used. Value enum: "unsafe_configuration",
     * "location_unavailable", "credential_compromise", "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other"
        | (string & {});
    /**
     * The parent and exact child identity to fence. Each target_type accepts only its own IDs. The
     * parent and exact child identity to fence. Targets never resolve an alias to a current
     * revision.
     */
    "target": DeliveryRevocationTarget;
};
/** Creates a permanent fence for one exact delivery dependency in this merchant and environment. */
export type CreateDeliveryRevocationRequestInput = {
    /** Optional incident context retained with this revocation. minLength: 1. maxLength: 2048. */
    "merchant_note"?: string;
    /**
     * Why this dependency must no longer be used. Value enum: "unsafe_configuration",
     * "location_unavailable", "credential_compromise", "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other";
    /**
     * The parent and exact child identity to fence. Each target_type accepts only its own IDs. The
     * parent and exact child identity to fence. Targets never resolve an alias to a current
     * revision.
     */
    "target": CreateDeliveryRevocationTargetInput;
};
/** Fences one immutable revision of the named delivery method. */
export type CreateDeliveryRevocationTargetDeliveryMethodRevisionInput = {
    /**
     * ID of the delivery method that owns the targeted revision. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_method_id. minLength: 1.
     * Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id": string;
    /**
     * Fences one immutable revision of the named delivery method. Value enum:
     * "delivery_method_revision".
     */
    "target_type": ("delivery_method_revision") & ("delivery_method_revision");
};
/** Fences one immutable revision of the named delivery rate callback. */
export type CreateDeliveryRevocationTargetDeliveryRateCallbackRevisionInput = {
    /**
     * ID of the delivery rate callback that owns the targeted revision or signing key. minLength:
     * 1. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id": string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_rate_callback_id.
     * minLength: 1. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     */
    "delivery_rate_callback_revision_id": string;
    /**
     * Fences one immutable revision of the named delivery rate callback. Value enum:
     * "delivery_rate_callback_revision".
     */
    "target_type": ("delivery_rate_callback_revision") & ("delivery_rate_callback_revision");
};
/** Fences one current or previous HMAC signing key of the named delivery rate callback. */
export type CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKeyInput = {
    /**
     * ID of the delivery rate callback that owns the targeted revision or signing key. minLength:
     * 1. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id": string;
    /**
     * ID of the HMAC signing key to fence. It must be the named callback's current or previous
     * key; secret material is never returned. minLength: 1. Example:
     * "cbkey_00112233445566778899aabb".
     */
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Fences one current or previous HMAC signing key of the named delivery rate callback. Value
     * enum: "delivery_rate_callback_signing_key".
     */
    "target_type": ("delivery_rate_callback_signing_key") & ("delivery_rate_callback_signing_key");
};
/**
 * The parent and exact child identity to fence. Targets never resolve an alias to a current
 * revision.
 */
export type CreateDeliveryRevocationTargetInput = ({
    /**
     * ID of the delivery method that owns the targeted revision. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_method_id. minLength: 1.
     * Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id"?: string;
    /**
     * ID of the delivery rate callback that owns the targeted revision or signing key. minLength:
     * 1. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id"?: string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_rate_callback_id.
     * minLength: 1. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     */
    "delivery_rate_callback_revision_id"?: string;
    /**
     * ID of the HMAC signing key to fence. It must be the named callback's current or previous
     * key; secret material is never returned. minLength: 1. Example:
     * "cbkey_00112233445566778899aabb".
     */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact recorded geography version of location_id to fence. Future and unrecorded versions are
     * not accepted. Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /**
     * ID of the Location that recorded the targeted geography version. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * The kind of exact dependency this revocation fences. Value enum: "location_geography",
     * "delivery_rate_callback_signing_key", "delivery_rate_callback_revision",
     * "delivery_method_revision".
     */
    "target_type": "location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback_revision"
        | "delivery_method_revision";
})
    & ((Exclude<CreateDeliveryRevocationTargetLocationGeographyInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKeyInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryRevocationTargetDeliveryRateCallbackRevisionInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryRevocationTargetDeliveryMethodRevisionInput & object, readonly unknown[]>));
/** Fences one geography version recorded by the named Location. */
export type CreateDeliveryRevocationTargetLocationGeographyInput = {
    /**
     * Exact recorded geography version of location_id to fence. Future and unrecorded versions are
     * not accepted. Format: int64. minimum: 1.
     */
    "location_geography_version": number;
    /**
     * ID of the Location that recorded the targeted geography version. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Fences one geography version recorded by the named Location. Value enum:
     * "location_geography".
     */
    "target_type": ("location_geography") & ("location_geography");
};
/**
 * The delivery option to select for one choice group when creating a delivery selection, with
 * optional delivery instructions.
 */
export type CreateDeliverySelectionChoiceRequest = {
    /** minLength: 1. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". */
    "delivery_choice_group_id": string;
    /** minLength: 1. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". */
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
    /** minLength: 1. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". */
    "delivery_choice_group_id": string;
    /** minLength: 1. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". */
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
    /** minLength: 1. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". */
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
     * current. minLength: 1. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
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
    /** minLength: 1. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". */
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
     * current. minLength: 1. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
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
    "configuration": DeliveryZoneConfigurationRequest;
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
    /** minLength: 1. */
    "name": string;
};
/** The request body for: Create delivery zone. */
export type CreateDeliveryZoneRequestInput = {
    /**
     * A reusable geographic predicate containing only country, state, postal_code, and radius
     * conditions.
     */
    "configuration": DeliveryZoneConfigurationRequestInput;
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
    /**
     * An active Location to assign the device to. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
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
    /** Name for the device, such as Front register. minLength: 1. */
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
    /**
     * An active Location to assign the device to. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
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
    /** Name for the device, such as Front register. minLength: 1. */
    "name": string;
};
/** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
export type CreateDigitalFulfillmentDetails = {
    /** URL where the recipient can access the delivered digital goods. minLength: 1. */
    "delivery_url"?: string;
};
/** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
export type CreateDigitalFulfillmentDetailsInput = CreateDigitalFulfillmentDetails;
/** The request body for: Request an email change. */
export type CreateEmailChangeRequest = {
    /**
     * The address to change the email to. Flint emails a six-digit code to it. Format: email.
     * minLength: 1. maxLength: 320. Example: "buyer@example.com".
     */
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
     * One file path relative to your repository root, optionally followed by `:line` or
     * `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and
     * backslashes are rejected. Limited to 500 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 500.
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
     * 255. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, at most 20 and all different. Flint
     * checks only that each ID has the format of a Flint resource ID, not that the resource exists
     * or that you can read it. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
     * A public API route template exactly as the API reference shows it, such as
     * `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that
     * isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
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
     * One file path relative to your repository root, optionally followed by `:line` or
     * `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and
     * backslashes are rejected. Limited to 500 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 500.
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
     * 255. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, at most 20 and all different. Flint
     * checks only that each ID has the format of a Flint resource ID, not that the resource exists
     * or that you can read it. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientRequestInput;
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
     * A public API route template exactly as the API reference shows it, such as
     * `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that
     * isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
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
     * One file path relative to your repository root, optionally followed by `:line` or
     * `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and
     * backslashes are rejected. Limited to 500 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 500.
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
     * 255. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, at most 20 and all different. Flint
     * checks only that each ID has the format of a Flint resource ID, not that the resource exists
     * or that you can read it. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
     * A public API route template exactly as the API reference shows it, such as
     * `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that
     * isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
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
     * One file path relative to your repository root, optionally followed by `:line` or
     * `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and
     * backslashes are rejected. Limited to 500 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 500.
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
     * 255. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, at most 20 and all different. Flint
     * checks only that each ID has the format of a Flint resource ID, not that the resource exists
     * or that you can read it. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientRequestInput;
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
     * A public API route template exactly as the API reference shows it, such as
     * `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that
     * isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
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
     * One file path relative to your repository root, optionally followed by `:line` or
     * `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and
     * backslashes are rejected. Limited to 500 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 500.
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
     * 255. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, at most 20 and all different. Flint
     * checks only that each ID has the format of a Flint resource ID, not that the resource exists
     * or that you can read it. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
     * A public API route template exactly as the API reference shows it, such as
     * `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that
     * isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
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
     * One file path relative to your repository root, optionally followed by `:line` or
     * `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and
     * backslashes are rejected. Limited to 500 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 500.
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
     * 255. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, at most 20 and all different. Flint
     * checks only that each ID has the format of a Flint resource ID, not that the resource exists
     * or that you can read it. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientRequestInput;
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
     * A public API route template exactly as the API reference shows it, such as
     * `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that
     * isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ((Exclude<CreateFeedbackReportRatingInput & object, readonly unknown[]>)
    | (Exclude<CreateFeedbackReportNarrativeInput & object, readonly unknown[]>));
/** The request body for: Create a file. */
export type CreateFileRequest = {
    /**
     * Media type of the image you will upload. Value enum: "image/jpeg", "image/png",
     * "image/webp".
     */
    "content_type": "image/jpeg" | "image/png" | "image/webp" | (string & {});
    /**
     * What the image will be used for. Creating or completing merchant_logo and merchant_icon
     * files changes shared branding and requires a live-mode credential or a Dashboard session in
     * any selected environment. Test credentials receive 403 FORBIDDEN with reason
     * live_mode_required. Partner install tokens need the purpose's scope too; merchant_logo and
     * merchant_icon need merchants.profile.write and a live install token. Value enum: "product",
     * "product_variant", "bundle", "payment_link", "subscription_plan", "merchant_logo",
     * "merchant_icon".
     */
    "purpose": "product"
        | "product_variant"
        | "bundle"
        | "payment_link"
        | "subscription_plan"
        | "merchant_logo"
        | "merchant_icon"
        | (string & {});
    /**
     * Size of the image you will upload, in bytes, from 1 to 5,242,880 (5 MiB). Format: int64.
     * minimum: 1. maximum: 5242880.
     */
    "size_bytes": number;
};
/** The request body for: Create a file. */
export type CreateFileRequestInput = {
    /**
     * Media type of the image you will upload. Value enum: "image/jpeg", "image/png",
     * "image/webp".
     */
    "content_type": "image/jpeg" | "image/png" | "image/webp";
    /**
     * What the image will be used for. Creating or completing merchant_logo and merchant_icon
     * files changes shared branding and requires a live-mode credential or a Dashboard session in
     * any selected environment. Test credentials receive 403 FORBIDDEN with reason
     * live_mode_required. Partner install tokens need the purpose's scope too; merchant_logo and
     * merchant_icon need merchants.profile.write and a live install token. Value enum: "product",
     * "product_variant", "bundle", "payment_link", "subscription_plan", "merchant_logo",
     * "merchant_icon".
     */
    "purpose": "product"
        | "product_variant"
        | "bundle"
        | "payment_link"
        | "subscription_plan"
        | "merchant_logo"
        | "merchant_icon";
    /**
     * Size of the image you will upload, in bytes, from 1 to 5,242,880 (5 MiB). Format: int64.
     * minimum: 1. maximum: 5242880.
     */
    "size_bytes": number;
};
/** The request body for: Create fulfillment event. */
export type CreateFulfillmentEventRequest = {
    /** Free-form details attached to the event. * (Value): string. minLength: 1. */
    "custom_details"?: Record<string, string>;
    /** What kind of event this records. Value enum: "carrier_scan", "custom". */
    "event_type": "carrier_scan" | "custom" | (string & {});
    /**
     * Event identifier assigned by that integration. Flint records a repeated pair of
     * `external_system` and `external_event_id` once. minLength: 1. Example: "warehouse-1842".
     */
    "external_event_id"?: string;
    /** Status supplied by that integration. minLength: 1. */
    "external_status"?: string;
    /** Integration that supplied the event. minLength: 1. */
    "external_system"?: string;
    /** Where the event happened, such as `Louisville, KY`. minLength: 1. */
    "location_description"?: string;
    /** Human-readable text describing the event. minLength: 1. */
    "message"?: string;
    /**
     * Provider event timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * Nested package associated with this observational event. Flint resolves and validates its
     * shipment and fulfillment ownership. minLength: 1. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     */
    "package_id"?: string;
    /**
     * Nested shipment associated with this observational event. Flint validates that it belongs to
     * the fulfillment in the path. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
};
/** The request body for: Create fulfillment event. */
export type CreateFulfillmentEventRequestInput = {
    /** Free-form details attached to the event. * (Value): string. minLength: 1. */
    "custom_details"?: Record<string, string>;
    /** What kind of event this records. Value enum: "carrier_scan", "custom". */
    "event_type": "carrier_scan" | "custom";
    /**
     * Event identifier assigned by that integration. Flint records a repeated pair of
     * `external_system` and `external_event_id` once. minLength: 1. Example: "warehouse-1842".
     */
    "external_event_id"?: string;
    /** Status supplied by that integration. minLength: 1. */
    "external_status"?: string;
    /** Integration that supplied the event. minLength: 1. */
    "external_system"?: string;
    /** Where the event happened, such as `Louisville, KY`. minLength: 1. */
    "location_description"?: string;
    /** Human-readable text describing the event. minLength: 1. */
    "message"?: string;
    /**
     * Provider event timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Nested package associated with this observational event. Flint resolves and validates its
     * shipment and fulfillment ownership. minLength: 1. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     */
    "package_id"?: string;
    /**
     * Nested shipment associated with this observational event. Flint validates that it belongs to
     * the fulfillment in the path. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
};
