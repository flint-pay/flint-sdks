import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { CreditNoteLineItemRequest, CreditNoteLineItemRequestInput } from './types-11.js';
import type { AddressRequest, AddressRequestInput, APIKey } from './types-0.js';
import type { MetadataMap, MetadataRequestInput } from './types-32.js';
import type { TaxIdentityPatch, TaxIdentityRequestInput } from './types-50.js';
import type {
    DeliveryLocationSetConfiguration,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationCreateRequest,
    DeliveryMethodConfigurationCreateRequestInput,
    DeliveryMethodConfigurationRequest,
    DeliveryMethodConfigurationRequestInput,
    DeliveryDistance
} from './types-13.js';
import type {
    DeliveryMethodOriginSelectorRequest,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryPreviewRoutingSourceInput,
    DeliveryPickupAvailabilityMaximumDistanceRequestInput
} from './types-14.js';
import type { CreateOrderLineItem, CreateOrderLineItemRequestInput } from './types-8.js';
import type {
    DeliveryAddressRequest,
    DeliveryBuyerLocationRequest,
    DeliveryAddressRequestInput,
    DeliveryBuyerLocationRequestInput
} from './types-12.js';
import type { InventoryRoutingSource } from './types-27.js';
import type {
    DeliveryProfileConfigurationRequest,
    DeliveryProfileConfigurationRequestInput,
    DeliveryRateCallbackConfiguration,
    DeliveryRateCallbackConfigurationInput
} from './types-15.js';
import type { WebhookSigningMethod, WebhookSigningMethodInput } from './types-57.js';
import type {
    DeliverySelectionInstructionsRequest,
    DeliverySelectionInstructionsRequestInput,
    DeliverySelectionRecipientRequest,
    DeliverySelectionRecipientRequestInput
} from './types-16.js';
import type { DeliveryZoneConfiguration, DeliveryZoneConfigurationInput } from './types-17.js';
import type { Sandbox } from './types-46.js';
import type { FeedbackReportingClient, FeedbackReportingClientInput } from './types-18.js';
/**
 * Shape $ (Value): {@link CreateCreditNoteAllocationRequest}. The request body for: Allocate
 * credit note.
 */
export type CreateCreditNoteAllocationRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit to apply, no more than the credit note's
     * available_money or the invoice's outstanding balance. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): integer string. Credit note version last read. Optional; a stale version
     * returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link CreateCreditNoteAllocationRequestInput}. The request body for: Allocate
 * credit note.
 */
export type CreateCreditNoteAllocationRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Credit to apply, no more than the credit note's
     * available_money or the invoice's outstanding balance. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Credit note version last read. Optional; a stale version
     * returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CreateCreditNoteRefundRequest}. The request body for: Refund credit
 * note.
 */
export type CreateCreditNoteRefundRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit to refund. Omit to refund all available credit,
     * which Flint resolves once when it accepts the request. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Credit note version last read. Optional; a stale version
     * returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Why the refund is being made. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
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
        | (string & {});
    /** Shape $ (Value): string. Optional note explaining the refund. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CreateCreditNoteRefundRequestInput}. The request body for: Refund credit
 * note.
 */
export type CreateCreditNoteRefundRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Credit to refund. Omit to refund all available
     * credit, which Flint resolves once when it accepts the request. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Credit note version last read. Optional; a stale version
     * returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Why the refund is being made. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
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
        | "other";
    /** Shape $ (Value): string. Optional note explaining the refund. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link CreateCreditNoteRequest}. The request body for: Create credit note. */
export type CreateCreditNoteRequest = {
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. The invoice to correct. It has to be past draft and not voided.
     * minLength: 1.
     */
    "invoice_id": string;
    /**
     * Shape $ (Value): Array of {@link CreditNoteLineItemRequest}. Initial draft corrections. Omit
     * or send [] to create an empty draft. Null is not accepted. Shape $[] (Value): {@link
     * CreditNoteLineItemRequest}. A credit note line you supply when creating or updating a credit
     * note: the invoice line item it credits and how much, or an existing line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequest>;
    /**
     * Shape $ (Value): string. Free text shown on the credit note, up to 4096 characters.
     * minLength: 1. maxLength: 4096.
     */
    "memo"?: string;
    /**
     * Shape $ (Value): string. Why the invoice is being corrected: returned_goods,
     * order_adjustment, billing_error, goodwill, or other. Shown on the credit note document.
     * Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCreditNoteRequestInput}. The request body for: Create credit note.
 */
export type CreateCreditNoteRequestInput = {
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. The invoice to correct. It has to be past draft and not voided.
     * minLength: 1.
     */
    "invoice_id": string;
    /**
     * Shape $ (Value): Array of {@link CreditNoteLineItemRequestInput}. Initial draft corrections.
     * Omit or send [] to create an empty draft. Null is not accepted. Shape $[] (Value): {@link
     * CreditNoteLineItemRequestInput}. A credit note line you supply when creating or updating a
     * credit note: the invoice line item it credits and how much, or an existing line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Free text shown on the credit note, up to 4096 characters.
     * minLength: 1. maxLength: 4096.
     */
    "memo"?: string;
    /**
     * Shape $ (Value): string. Why the invoice is being corrected: returned_goods,
     * order_adjustment, billing_error, goodwill, or other. Shown on the credit note document.
     * Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other";
};
/**
 * Shape $ (Value): {@link CreateCustomDomainRequest}. The request body for: Create a custom
 * domain.
 */
export type CreateCustomDomainRequest = {
    /**
     * Shape $ (Value): string. Hostname to configure, such as checkout.example.com or
     * account.example.com. minLength: 1. maxLength: 253.
     */
    "hostname": string;
    /**
     * Shape $ (Value): string. Whether the hostname serves checkout pages or the customer account
     * Flint hosts. Value enum: "checkout", "customer_account".
     */
    "type": "checkout" | "customer_account" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCustomDomainRequestInput}. The request body for: Create a custom
 * domain.
 */
export type CreateCustomDomainRequestInput = {
    /**
     * Shape $ (Value): string. Hostname to configure, such as checkout.example.com or
     * account.example.com. minLength: 1. maxLength: 253.
     */
    "hostname": string;
    /**
     * Shape $ (Value): string. Whether the hostname serves checkout pages or the customer account
     * Flint hosts. Value enum: "checkout", "customer_account".
     */
    "type": "checkout" | "customer_account";
};
/**
 * Shape $ (Value): {@link CreateCustomerAddressRequest}. The request body for: Create a customer
 * address; Create an address for the current buyer.
 */
export type CreateCustomerAddressRequest = {
    /**
     * Shape $ (Value): {@link AddressRequest}. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "address": AddressRequest;
    /** Shape $ (Value): boolean. */
    "is_default_billing"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_default_shipping"?: boolean;
    /**
     * Shape $ (Value): string. Limited to 100 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 100.
     */
    "label"?: string;
    /**
     * Shape $ (Value): string. E.164 phone number. Limited to 30 characters (Unicode code points),
     * counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 30.
     */
    "phone"?: string;
    /**
     * Shape $ (Value): string. Limited to 255 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name": string;
};
/**
 * Shape $ (Value): {@link CreateCustomerAddressRequestInput}. The request body for: Create a
 * customer address; Create an address for the current buyer.
 */
export type CreateCustomerAddressRequestInput = {
    /**
     * Shape $ (Value): {@link AddressRequestInput}. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none.
     */
    "address": AddressRequestInput;
    /** Shape $ (Value): boolean. */
    "is_default_billing"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_default_shipping"?: boolean;
    /**
     * Shape $ (Value): string. Limited to 100 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 100.
     */
    "label"?: string;
    /**
     * Shape $ (Value): string. E.164 phone number. Limited to 30 characters (Unicode code points),
     * counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 30.
     */
    "phone"?: string;
    /**
     * Shape $ (Value): string. Limited to 255 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name": string;
};
/**
 * Shape $ (Value): {@link CreateCustomerDeletionRequest}. The request body for: Request customer
 * account deletion.
 */
export type CreateCustomerDeletionRequest = {
    /** Shape $ (Value): string. Flint customer ID of the customer to delete. minLength: 1. */
    "customer_id": string;
};
/**
 * Shape $ (Value): {@link CreateCustomerDeletionRequestInput}. The request body for: Request
 * customer account deletion.
 */
export type CreateCustomerDeletionRequestInput = CreateCustomerDeletionRequest;
/** Shape $ (Value): {@link CreateCustomerRequest}. The request body for: Create customer. */
export type CreateCustomerRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "default_invoice_payment_term_id"?: string;
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 320. */
    "email"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): boolean. Flag you set on the customer, for example after checking ID in
     * store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to
     * customer verifications, which prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): string. What to do when an active customer in this environment already has
     * `email`. `error` returns `409 ALREADY_EXISTS` naming that customer. `return_existing`
     * returns that customer unchanged with `200` instead of creating one; it requires `email`.
     * Emails match case-insensitively. Default: "error". Value enum: "error", "return_existing".
     */
    "on_email_conflict"?: "error" | "return_existing" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "phone"?: string;
    /**
     * Shape $ (Value): string. Free-form label you assign, such as wholesale, so promotion and
     * delivery rules can match groups of customers. It is not an ID; Flint does not check it
     * against any resource. minLength: 1.
     */
    "segment"?: string;
    /** Shape $ (Value): boolean. */
    "tax_exempt"?: boolean;
    /**
     * Shape $ (Value): {@link TaxIdentityPatch}. Merchant-provided legal identity displayed on
     * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
     * collection in display order; replacing the array requires the parent's expected_version.
     * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to
     * add one.
     */
    "tax_identity"?: TaxIdentityPatch;
});
/** Shape $ (Value): {@link CreateCustomerRequestInput}. The request body for: Create customer. */
export type CreateCustomerRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "default_invoice_payment_term_id"?: string;
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 320. */
    "email"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): boolean. Flag you set on the customer, for example after checking ID in
     * store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to
     * customer verifications, which prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): string. What to do when an active customer in this environment already has
     * `email`. `error` returns `409 ALREADY_EXISTS` naming that customer. `return_existing`
     * returns that customer unchanged with `200` instead of creating one; it requires `email`.
     * Emails match case-insensitively. Default: "error". Value enum: "error", "return_existing".
     */
    "on_email_conflict"?: "error" | "return_existing";
    /** Shape $ (Value): string. minLength: 1. */
    "phone"?: string;
    /**
     * Shape $ (Value): string. Free-form label you assign, such as wholesale, so promotion and
     * delivery rules can match groups of customers. It is not an ID; Flint does not check it
     * against any resource. minLength: 1.
     */
    "segment"?: string;
    /** Shape $ (Value): boolean. */
    "tax_exempt"?: boolean;
    /**
     * Shape $ (Value): {@link TaxIdentityRequestInput}. Merchant-provided legal identity displayed
     * on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one.
     */
    "tax_identity"?: TaxIdentityRequestInput;
});
/**
 * Shape $ (Value): {@link CreateCustomerSessionRequest}. The request body for: Create a customer
 * session.
 */
export type CreateCustomerSessionRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 300. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 3600. maximum: 2592000.
     */
    "refresh_expires_in_seconds"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link CreateCustomerSessionRequestInput}. The request body for: Create a
 * customer session.
 */
export type CreateCustomerSessionRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 300. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 3600. maximum: 2592000.
     */
    "refresh_expires_in_seconds"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CreateCustomerVerificationRequest}. The request body for: Create a
 * customer email verification.
 */
export type CreateCustomerVerificationRequest = {
    /**
     * Shape $ (Value): string. Defaults to email when omitted. Explicit null and an empty value
     * are not accepted. Default: "email". Value enum: "email".
     */
    "channel"?: "email" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /** Shape $ (Value): string.  Value enum: "link_guest_purchases". */
    "purpose": "link_guest_purchases" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCustomerVerificationRequestInput}. The request body for: Create a
 * customer email verification.
 */
export type CreateCustomerVerificationRequestInput = {
    /**
     * Shape $ (Value): string. Defaults to email when omitted. Explicit null and an empty value
     * are not accepted. Default: "email". Value enum: "email".
     */
    "channel"?: "email";
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /** Shape $ (Value): string.  Value enum: "link_guest_purchases". */
    "purpose": "link_guest_purchases";
};
/**
 * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
 * when creating a fulfillment: courier, timing window, instructions, and tracking.
 */
export type CreateDeliveryFulfillmentDetails = {
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): string. Time at which the courier collected the order. Format: date-time.
     * minLength: 1.
     */
    "courier_pickup_at"?: string;
    /**
     * Shape $ (Value): integer string. Width of the promised courier pickup window, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Delivery network or merchant fleet provider handling the job.
     * minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string;
    /**
     * Shape $ (Value): string. Buyer-safe support number for the courier or merchant fleet.
     * minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "dispatched_at"?: string;
    /**
     * Shape $ (Value): string. Driver-facing notes for the final handoff. minLength: 1. maxLength:
     * 2048.
     */
    "dropoff_notes"?: string;
    /**
     * Shape $ (Value): string. Deadline after which an undelivered job should enter merchant
     * review. Format: date-time. minLength: 1.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Stable delivery job ID owned by the courier or merchant dispatch
     * system. minLength: 1. maxLength: 255.
     */
    "external_delivery_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "instructions"?: string;
    /** Shape $ (Value): boolean. Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean;
    /**
     * Shape $ (Value): integer string. Expected preparation time before courier pickup, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Time at which the order became ready for courier pickup. Format:
     * date-time. minLength: 1.
     */
    "ready_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "service_area_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
 * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
 */
export type CreateDeliveryFulfillmentDetailsInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): string. Time at which the courier collected the order. Format: date-time.
     * minLength: 1.
     */
    "courier_pickup_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): integer string. Width of the promised courier pickup window, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Delivery network or merchant fleet provider handling the job.
     * minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string;
    /**
     * Shape $ (Value): string. Buyer-safe support number for the courier or merchant fleet.
     * minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "dispatched_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Driver-facing notes for the final handoff. minLength: 1. maxLength:
     * 2048.
     */
    "dropoff_notes"?: string;
    /**
     * Shape $ (Value): string. Deadline after which an undelivered job should enter merchant
     * review. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Stable delivery job ID owned by the courier or merchant dispatch
     * system. minLength: 1. maxLength: 255.
     */
    "external_delivery_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "instructions"?: string;
    /** Shape $ (Value): boolean. Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean;
    /**
     * Shape $ (Value): integer string. Expected preparation time before courier pickup, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Time at which the order became ready for courier pickup. Format:
     * date-time. minLength: 1.
     */
    "ready_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "service_area_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
};
/**
 * Shape $ (Value): {@link CreateDeliveryLocationSetRequest}. The request body for: Create delivery
 * location set.
 */
export type CreateDeliveryLocationSetRequest = {
    /**
     * Shape $ (Value): {@link DeliveryLocationSetConfiguration}. The location IDs in a delivery
     * location set.
     */
    "configuration": DeliveryLocationSetConfiguration;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryLocationSetRequestInput}. The request body for: Create
 * delivery location set.
 */
export type CreateDeliveryLocationSetRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryLocationSetConfigurationInput}. The location IDs in a
     * delivery location set.
     */
    "configuration": DeliveryLocationSetConfigurationInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequest}. The request body for: Create delivery
 * method.
 */
export type CreateDeliveryMethodRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequest}. The configuration you
     * supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
    /** Shape $ (Value): string.  Value enum: "shipment", "local_delivery", "pickup". */
    "type": "shipment" | "local_delivery" | "pickup" | (string & {});
})
    & ((Exclude<CreateDeliveryMethodRequestShipment & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestLocalDelivery & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestPickup & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestInput}. The request body for: Create delivery
 * method.
 */
export type CreateDeliveryMethodRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequestInput}. The configuration
     * you supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
    /** Shape $ (Value): string.  Value enum: "shipment", "local_delivery", "pickup". */
    "type": "shipment" | "local_delivery" | "pickup";
})
    & ((Exclude<CreateDeliveryMethodRequestShipmentInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestLocalDeliveryInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestPickupInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestLocalDelivery}. The `local_delivery` variant
 * of `CreateDeliveryMethodRequest`.
 */
export type CreateDeliveryMethodRequestLocalDelivery = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequest}. The configuration you
     * supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
    /** Shape $ (Value): string.  Value enum: "local_delivery". */
    "type": "local_delivery" | (string & {});
})
    & ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationRequest}. The configuration you supply
     * for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and
     * recipient requirements. Shape $.buyer_instructions (Optional): {@link
     * BuyerInstructionsConfig}. Controls whether checkout collects buyer instructions for this
     * method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. Shape $.charge_tax_category (Optional):
     * string or null. Tax category of the delivery charge, which decides its automatic tax and
     * appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. Shape $.eligibility
     * (Optional): {@link DeliveryEligibilityExpression}. Conditions that decide where this method
     * is offered. Omit this field to offer the method everywhere the merchant serves. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes. Shape $.estimate (Optional): {@link
     * DeliveryEstimateRule}. The buyer-visible delivery or pickup estimate. Use type none when the
     * merchant makes no timing promise. The timing estimate rule you supply for a delivery method,
     * chosen by `type`: none, a transit time, or a schedule window. Shape
     * $.minimum_option_lifetime_seconds (Optional): integer string. Minimum remaining quote
     * lifetime required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899. Shape $.origin (Required): {@link
     * DeliveryMethodOriginSelectorRequest}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. Shape $.pricing (Required):
     * {@link DeliveryPricingStrategyRequest}. How Flint calculates the delivery charge. The
     * pricing strategy you supply when updating a delivery method. Set `type` and the matching
     * property. Shape $.public_details (Optional): object. Buyer-visible structured details
     * supplied by the merchant. Shape $.public_details.instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. Shape
     * $.public_details.pickup_mode (Optional): string. Required for pickup methods and rejected
     * for other method types. Value enum: "in_store", "curbside", "locker", "other". Shape
     * $.public_details.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "same_day", "on_demand", "scheduled". Shape
     * $.quote_input_fields (Optional): Array of string. Address and coordinate fields a callback
     * method requires and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirement}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Shape $.recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirement}. Says whether a recipient field (`name`, `email`, or `phone`)
     * is required for a delivery method, and the format it must use. Shape
     * $.selection_guarantee_seconds (Optional): integer string. How long after evaluation Flint
     * guarantees a selected price, when that is later than the option expiry. Defaults to 0, which
     * uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked
     * inventory hold until the checkout's calculation expiry. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. Shape $.taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequest & object, readonly unknown[]>)
        & ({
        /**
         * Shape $ (Value): object. Shape $.service_level (Optional): string. Value enum:
         * "on_demand", "same_day", "scheduled".
         */
        "public_details"?: ({
            /** Shape $ (Value): string.  Value enum: "on_demand", "same_day", "scheduled". */
            "service_level"?: "on_demand" | "same_day" | "scheduled" | (string & {});
        });
    });
    /** Shape $ (Value): string.  Value enum: "local_delivery". */
    "type": "local_delivery" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestLocalDeliveryInput}. The `local_delivery`
 * variant of `CreateDeliveryMethodRequest`.
 */
export type CreateDeliveryMethodRequestLocalDeliveryInput = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequestInput}. The configuration
     * you supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
    /** Shape $ (Value): string.  Value enum: "local_delivery". */
    "type": "local_delivery";
})
    & ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationRequestInput}. The configuration you
     * supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings,
     * and recipient requirements. Shape $.buyer_instructions (Optional): {@link
     * BuyerInstructionsConfigRequestRequestInput}. Controls whether checkout collects buyer
     * instructions for this method. Controls buyer instructions for a delivery option. Omit it
     * from a method configuration to disable instruction collection. Shape $.charge_tax_category
     * (Optional): string or null. Tax category of the delivery charge, which decides its automatic
     * tax and appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. Shape $.eligibility
     * (Optional): {@link DeliveryEligibilityExpressionInput}. Conditions that decide where this
     * method is offered. Omit this field to offer the method everywhere the merchant serves. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. Shape $.estimate (Optional):
     * {@link DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use
     * type none when the merchant makes no timing promise. The timing estimate rule you supply for
     * a delivery method, chosen by `type`: none, a transit time, or a schedule window. Shape
     * $.minimum_option_lifetime_seconds (Optional): integer string. Minimum remaining quote
     * lifetime required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899. Shape $.origin (Required): {@link
     * DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. Shape $.pricing (Required):
     * {@link DeliveryPricingStrategyRequestInput}. How Flint calculates the delivery charge. The
     * pricing strategy you supply when updating a delivery method. Set `type` and the matching
     * property. Shape $.public_details (Optional): object. Buyer-visible structured details
     * supplied by the merchant. Shape $.public_details.instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. Shape
     * $.public_details.pickup_mode (Optional): string. Required for pickup methods and rejected
     * for other method types. Value enum: "in_store", "curbside", "locker", "other". Shape
     * $.public_details.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "same_day", "on_demand", "scheduled". Shape
     * $.quote_input_fields (Optional): Array of string. Address and coordinate fields a callback
     * method requires and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirementInput}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Shape $.recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or
     * `phone`) is required for a delivery method, and the format it must use. Shape
     * $.selection_guarantee_seconds (Optional): integer string. How long after evaluation Flint
     * guarantees a selected price, when that is later than the option expiry. Defaults to 0, which
     * uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked
     * inventory hold until the checkout's calculation expiry. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. Shape $.taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**
         * Shape $ (Value): object. Shape $.service_level (Optional): string. Value enum:
         * "on_demand", "same_day", "scheduled".
         */
        "public_details"?: ({
            /** Shape $ (Value): string.  Value enum: "on_demand", "same_day", "scheduled". */
            "service_level"?: "on_demand" | "same_day" | "scheduled";
        })
            & ({
            "pickup_mode"?: never;
        });
    });
    /** Shape $ (Value): string.  Value enum: "local_delivery". */
    "type": "local_delivery";
});
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestPickup}. The `pickup` variant of
 * `CreateDeliveryMethodRequest`.
 */
export type CreateDeliveryMethodRequestPickup = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequest}. The configuration you
     * supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
    /** Shape $ (Value): string.  Value enum: "pickup". */
    "type": "pickup" | (string & {});
})
    & ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationRequest}. The configuration you supply
     * for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and
     * recipient requirements. Shape $.buyer_instructions (Optional): {@link
     * BuyerInstructionsConfig}. Controls whether checkout collects buyer instructions for this
     * method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. Shape $.charge_tax_category (Optional):
     * string or null. Tax category of the delivery charge, which decides its automatic tax and
     * appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. Shape $.eligibility
     * (Optional): {@link DeliveryEligibilityExpression}. Conditions that decide where this method
     * is offered. Omit this field to offer the method everywhere the merchant serves. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes. Shape $.estimate (Optional): {@link
     * DeliveryEstimateRule}. The buyer-visible delivery or pickup estimate. Use type none when the
     * merchant makes no timing promise. The timing estimate rule you supply for a delivery method,
     * chosen by `type`: none, a transit time, or a schedule window. Shape
     * $.minimum_option_lifetime_seconds (Optional): integer string. Minimum remaining quote
     * lifetime required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899. Shape $.origin (Required): {@link
     * DeliveryMethodOriginSelectorRequest}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. Shape
     * $.origin.delivery_location_set_id (Optional): string. Named delivery location set to reuse.
     * Send either delivery_location_set_id or inline location_ids, never both. The set may contain
     * at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection.
     * minLength: 1. Shape $.origin.location_id (Optional): string. minLength: 1. Shape
     * $.origin.location_ids (Optional): Array of string. Inline Location IDs for a set managed by
     * this delivery method. Send either location_ids or delivery_location_set_id, never both. Use
     * 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for
     * pickup_location_collection. Reads return these Location IDs without exposing the managed
     * set. Shape $.origin.location_ids[] (Value): string. minLength: 1. Shape $.origin.type
     * (Required): string. Value enum: "pickup_location_collection". Shape $.origin.oneOf[1]
     * (Value): {@link DeliveryMethodOriginSelectorInputFixedLocation}. The `fixed_location`
     * variant of `DeliveryMethodOriginSelectorInput`. Shape $.origin.oneOf[2] (Value): {@link
     * DeliveryMethodOriginSelectorInputAllocatedOriginGroup}. The `allocated_origin_group` variant
     * of `DeliveryMethodOriginSelectorInput`. Shape $.origin.oneOf[3] (Value): {@link
     * DeliveryMethodOriginSelectorInputPickupLocationCollection}. The `pickup_location_collection`
     * variant of `DeliveryMethodOriginSelectorInput`. Shape $.pricing (Required): {@link
     * DeliveryPricingStrategyRequest}. How Flint calculates the delivery charge. The pricing
     * strategy you supply when updating a delivery method. Set `type` and the matching property.
     * Shape $.public_details (Required): object. Buyer-visible structured details supplied by the
     * merchant. Shape $.public_details.instructions (Optional): string. Buyer-visible instructions
     * for this method. minLength: 1. maxLength: 2048. Shape $.public_details.pickup_mode
     * (Required): string. Required for pickup methods and rejected for other method types. Value
     * enum: "in_store", "curbside", "locker", "other". Shape $.public_details.service_level
     * (Optional): string. Buyer-visible service level. Shipment accepts economy, standard,
     * expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day,
     * scheduled. Value enum: "economy", "standard", "expedited", "express", "overnight",
     * "same_day", "on_demand", "scheduled". Shape $.quote_input_fields (Optional): Array of
     * string. Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirement}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Shape $.recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirement}. Says whether a recipient field (`name`, `email`, or `phone`)
     * is required for a delivery method, and the format it must use. Shape
     * $.selection_guarantee_seconds (Optional): integer string. How long after evaluation Flint
     * guarantees a selected price, when that is later than the option expiry. Defaults to 0, which
     * uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked
     * inventory hold until the checkout's calculation expiry. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. Shape $.taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequest & object, readonly unknown[]>)
        & ({
        /**
         * Shape $ (Value): {@link DeliveryMethodOriginSelectorRequest}. The origin you supply for
         * a delivery method, chosen by `type`: a fixed location, or locations from a delivery
         * location set or an inline list. Shape $.delivery_location_set_id (Optional): string.
         * Named delivery location set to reuse. Send either delivery_location_set_id or inline
         * location_ids, never both. The set may contain at most 25 Locations for
         * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Shape
         * $.location_id (Optional): string. minLength: 1. Shape $.location_ids (Optional): Array
         * of string. Inline Location IDs for a set managed by this delivery method. Send either
         * location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for
         * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
         * Location IDs without exposing the managed set. Shape $.location_ids[] (Value): string.
         * minLength: 1. Shape $.type (Required): string. Value enum: "pickup_location_collection".
         * Shape $.oneOf[1] (Value): {@link DeliveryMethodOriginSelectorInputFixedLocation}. The
         * `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. Shape $.oneOf[2]
         * (Value): {@link DeliveryMethodOriginSelectorInputAllocatedOriginGroup}. The
         * `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. Shape
         * $.oneOf[3] (Value): {@link DeliveryMethodOriginSelectorInputPickupLocationCollection}.
         * The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.
         */
        "origin": (Exclude<DeliveryMethodOriginSelectorRequest & object, readonly unknown[]>)
            & ({
            /** Shape $ (Value): string.  Value enum: "pickup_location_collection". */
            "type"?: "pickup_location_collection" | (string & {});
        });
        /**
         * Shape $ (Value): object. Shape $.pickup_mode (Required): string. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "public_details": ({
            /** Shape $ (Value): string.  Value enum: "in_store", "curbside", "locker", "other". */
            "pickup_mode": "in_store" | "curbside" | "locker" | "other" | (string & {});
        });
    });
    /** Shape $ (Value): string.  Value enum: "pickup". */
    "type": "pickup" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestPickupInput}. The `pickup` variant of
 * `CreateDeliveryMethodRequest`.
 */
export type CreateDeliveryMethodRequestPickupInput = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequestInput}. The configuration
     * you supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
    /** Shape $ (Value): string.  Value enum: "pickup". */
    "type": "pickup";
})
    & ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationRequestInput}. The configuration you
     * supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings,
     * and recipient requirements. Shape $.buyer_instructions (Optional): {@link
     * BuyerInstructionsConfigRequestRequestInput}. Controls whether checkout collects buyer
     * instructions for this method. Controls buyer instructions for a delivery option. Omit it
     * from a method configuration to disable instruction collection. Shape $.charge_tax_category
     * (Optional): string or null. Tax category of the delivery charge, which decides its automatic
     * tax and appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. Shape $.eligibility
     * (Optional): {@link DeliveryEligibilityExpressionInput}. Conditions that decide where this
     * method is offered. Omit this field to offer the method everywhere the merchant serves. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. Shape $.estimate (Optional):
     * {@link DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use
     * type none when the merchant makes no timing promise. The timing estimate rule you supply for
     * a delivery method, chosen by `type`: none, a transit time, or a schedule window. Shape
     * $.minimum_option_lifetime_seconds (Optional): integer string. Minimum remaining quote
     * lifetime required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899. Shape $.origin (Required): {@link
     * DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. Shape
     * $.origin.delivery_location_set_id (Optional): string. Named delivery location set to reuse.
     * Send either delivery_location_set_id or inline location_ids, never both. The set may contain
     * at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection.
     * minLength: 1. Shape $.origin.location_id (Optional): string. minLength: 1. Shape
     * $.origin.location_ids (Optional): Array of string. Inline Location IDs for a set managed by
     * this delivery method. Send either location_ids or delivery_location_set_id, never both. Use
     * 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for
     * pickup_location_collection. Reads return these Location IDs without exposing the managed
     * set. Shape $.origin.location_ids[] (Value): string. minLength: 1. Shape $.origin.type
     * (Required): string. Value enum: "pickup_location_collection". Shape $.origin.oneOf[1]
     * (Value): {@link DeliveryMethodOriginSelectorInputFixedLocationInput}. The `fixed_location`
     * variant of `DeliveryMethodOriginSelectorInput`. Shape $.origin.oneOf[2] (Value): {@link
     * DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput}. The `allocated_origin_group`
     * variant of `DeliveryMethodOriginSelectorInput`. Shape $.origin.oneOf[3] (Value): {@link
     * DeliveryMethodOriginSelectorInputPickupLocationCollectionInput}. The
     * `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`. Shape $.pricing
     * (Required): {@link DeliveryPricingStrategyRequestInput}. How Flint calculates the delivery
     * charge. The pricing strategy you supply when updating a delivery method. Set `type` and the
     * matching property. Shape $.public_details (Required): object. Buyer-visible structured
     * details supplied by the merchant. Shape $.public_details.instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. Shape
     * $.public_details.pickup_mode (Required): string. Required for pickup methods and rejected
     * for other method types. Value enum: "in_store", "curbside", "locker", "other". Shape
     * $.public_details.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day", "on_demand", "scheduled". Shape $.quote_input_fields (Optional):
     * Array of string. Address and coordinate fields a callback method requires and is allowed to
     * receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirementInput}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Shape $.recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or
     * `phone`) is required for a delivery method, and the format it must use. Shape
     * $.selection_guarantee_seconds (Optional): integer string. How long after evaluation Flint
     * guarantees a selected price, when that is later than the option expiry. Defaults to 0, which
     * uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked
     * inventory hold until the checkout's calculation expiry. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. Shape $.taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**
         * Shape $ (Value): {@link DeliveryMethodOriginSelectorRequestInput}. The origin you supply
         * for a delivery method, chosen by `type`: a fixed location, or locations from a delivery
         * location set or an inline list. Shape $.delivery_location_set_id (Optional): string.
         * Named delivery location set to reuse. Send either delivery_location_set_id or inline
         * location_ids, never both. The set may contain at most 25 Locations for
         * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Shape
         * $.location_id (Optional): string. minLength: 1. Shape $.location_ids (Optional): Array
         * of string. Inline Location IDs for a set managed by this delivery method. Send either
         * location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for
         * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
         * Location IDs without exposing the managed set. Shape $.location_ids[] (Value): string.
         * minLength: 1. Shape $.type (Required): string. Value enum: "pickup_location_collection".
         * Shape $.oneOf[1] (Value): {@link DeliveryMethodOriginSelectorInputFixedLocationInput}.
         * The `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. Shape $.oneOf[2]
         * (Value): {@link DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput}. The
         * `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. Shape
         * $.oneOf[3] (Value): {@link
         * DeliveryMethodOriginSelectorInputPickupLocationCollectionInput}. The
         * `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.
         */
        "origin": (Exclude<DeliveryMethodOriginSelectorRequestInput & object, readonly unknown[]>)
            & ({
            /** Shape $ (Value): string.  Value enum: "pickup_location_collection". */
            "type"?: "pickup_location_collection";
        });
        /**
         * Shape $ (Value): object. Shape $.pickup_mode (Required): string. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "public_details": ({
            /** Shape $ (Value): string.  Value enum: "in_store", "curbside", "locker", "other". */
            "pickup_mode": "in_store" | "curbside" | "locker" | "other";
        })
            & ({
            "service_level"?: never;
        });
    });
    /** Shape $ (Value): string.  Value enum: "pickup". */
    "type": "pickup";
});
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestShipment}. The `shipment` variant of
 * `CreateDeliveryMethodRequest`.
 */
export type CreateDeliveryMethodRequestShipment = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequest}. The configuration you
     * supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
    /** Shape $ (Value): string.  Value enum: "shipment". */
    "type": "shipment" | (string & {});
})
    & ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationRequest}. The configuration you supply
     * for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and
     * recipient requirements. Shape $.buyer_instructions (Optional): {@link
     * BuyerInstructionsConfig}. Controls whether checkout collects buyer instructions for this
     * method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. Shape $.charge_tax_category (Optional):
     * string or null. Tax category of the delivery charge, which decides its automatic tax and
     * appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. Shape $.eligibility
     * (Optional): {@link DeliveryEligibilityExpression}. Conditions that decide where this method
     * is offered. Omit this field to offer the method everywhere the merchant serves. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes. Shape $.estimate (Optional): {@link
     * DeliveryEstimateRule}. The buyer-visible delivery or pickup estimate. Use type none when the
     * merchant makes no timing promise. The timing estimate rule you supply for a delivery method,
     * chosen by `type`: none, a transit time, or a schedule window. Shape
     * $.minimum_option_lifetime_seconds (Optional): integer string. Minimum remaining quote
     * lifetime required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899. Shape $.origin (Required): {@link
     * DeliveryMethodOriginSelectorRequest}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. Shape $.pricing (Required):
     * {@link DeliveryPricingStrategyRequest}. How Flint calculates the delivery charge. The
     * pricing strategy you supply when updating a delivery method. Set `type` and the matching
     * property. Shape $.public_details (Optional): object. Buyer-visible structured details
     * supplied by the merchant. Shape $.public_details.instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. Shape
     * $.public_details.pickup_mode (Optional): string. Required for pickup methods and rejected
     * for other method types. Value enum: "in_store", "curbside", "locker", "other". Shape
     * $.public_details.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day". Shape $.quote_input_fields (Optional): Array of string. Address and
     * coordinate fields a callback method requires and is allowed to receive. maxItems: 12.
     * uniqueItems: true. [] enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate". Shape $.quote_input_fields[] (Value): string. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirement}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Shape $.recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirement}. Says whether a recipient field (`name`, `email`, or `phone`)
     * is required for a delivery method, and the format it must use. Shape
     * $.selection_guarantee_seconds (Optional): integer string. How long after evaluation Flint
     * guarantees a selected price, when that is later than the option expiry. Defaults to 0, which
     * uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked
     * inventory hold until the checkout's calculation expiry. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. Shape $.taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequest & object, readonly unknown[]>)
        & ({
        /**
         * Shape $ (Value): object. Shape $.service_level (Optional): string. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day".
         */
        "public_details"?: ({
            /**
             * Shape $ (Value): string. Value enum: "economy", "standard", "expedited", "express",
             * "overnight", "same_day".
             */
            "service_level"?: "economy" | "standard" | "expedited" | "express" | "overnight" | "same_day" | (string & {});
        });
    });
    /** Shape $ (Value): string.  Value enum: "shipment". */
    "type": "shipment" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestShipmentInput}. The `shipment` variant of
 * `CreateDeliveryMethodRequest`.
 */
export type CreateDeliveryMethodRequestShipmentInput = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequestInput}. The configuration
     * you supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
    /** Shape $ (Value): string.  Value enum: "shipment". */
    "type": "shipment";
})
    & ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationRequestInput}. The configuration you
     * supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings,
     * and recipient requirements. Shape $.buyer_instructions (Optional): {@link
     * BuyerInstructionsConfigRequestRequestInput}. Controls whether checkout collects buyer
     * instructions for this method. Controls buyer instructions for a delivery option. Omit it
     * from a method configuration to disable instruction collection. Shape $.charge_tax_category
     * (Optional): string or null. Tax category of the delivery charge, which decides its automatic
     * tax and appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. Shape $.eligibility
     * (Optional): {@link DeliveryEligibilityExpressionInput}. Conditions that decide where this
     * method is offered. Omit this field to offer the method everywhere the merchant serves. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. Shape $.estimate (Optional):
     * {@link DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use
     * type none when the merchant makes no timing promise. The timing estimate rule you supply for
     * a delivery method, chosen by `type`: none, a transit time, or a schedule window. Shape
     * $.minimum_option_lifetime_seconds (Optional): integer string. Minimum remaining quote
     * lifetime required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899. Shape $.origin (Required): {@link
     * DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. Shape $.pricing (Required):
     * {@link DeliveryPricingStrategyRequestInput}. How Flint calculates the delivery charge. The
     * pricing strategy you supply when updating a delivery method. Set `type` and the matching
     * property. Shape $.public_details (Optional): object. Buyer-visible structured details
     * supplied by the merchant. Shape $.public_details.instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. Shape
     * $.public_details.pickup_mode (Optional): string. Required for pickup methods and rejected
     * for other method types. Value enum: "in_store", "curbside", "locker", "other". Shape
     * $.public_details.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day". Shape $.quote_input_fields (Optional): Array of string. Address and
     * coordinate fields a callback method requires and is allowed to receive. maxItems: 12.
     * uniqueItems: true. [] enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate". Shape $.quote_input_fields[] (Value): string. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirementInput}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Shape $.recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or
     * `phone`) is required for a delivery method, and the format it must use. Shape
     * $.selection_guarantee_seconds (Optional): integer string. How long after evaluation Flint
     * guarantees a selected price, when that is later than the option expiry. Defaults to 0, which
     * uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked
     * inventory hold until the checkout's calculation expiry. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. Shape $.taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**
         * Shape $ (Value): object. Shape $.service_level (Optional): string. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day".
         */
        "public_details"?: ({
            /**
             * Shape $ (Value): string. Value enum: "economy", "standard", "expedited", "express",
             * "overnight", "same_day".
             */
            "service_level"?: "economy" | "standard" | "expedited" | "express" | "overnight" | "same_day";
        })
            & ({
            "pickup_mode"?: never;
        });
    });
    /** Shape $ (Value): string.  Value enum: "shipment". */
    "type": "shipment";
});
/**
 * Shape $ (Value): {@link CreateDeliveryOptionsPreviewRequest}. The `delivery_options` variant of
 * `CreateDeliveryPreviewRequest`.
 */
export type CreateDeliveryOptionsPreviewRequest = {
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequest}. The buyer's location for pickup or
     * local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): Array of string. Delivery methods to evaluate. When omitted, uses
     * settings.checkout.default_delivery_method_ids, or no methods when that setting is empty.
     * Shape $[] (Value): string. minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): {@link DeliveryAddressRequest}. A partial address for delivery quotes,
     * previews, and buyer locations. Country is required when any member is present.
     */
    "destination_address"?: DeliveryAddressRequest;
    /**
     * Shape $ (Value): {@link InventoryRoutingSource}. Chooses where a delivery options preview
     * routes inventory from: a fixed Location, an inventory allocation policy, or one policy
     * revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItem}. minItems: 1. maxItems: 100. Shape $[]
     * (Value): {@link CreateOrderLineItem}. A line item to add to an order: a catalog variant, a
     * bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
    /**
     * Shape $ (Value): string. The delivery question this preview answers. - `delivery_options`:
     * Evaluates delivery methods and prices for the supplied items and buyer location. Value enum:
     * "delivery_options".
     */
    "mode": "delivery_options" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "pickup_location_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "pricing_context"?: Record<string, string>;
};
/**
 * Shape $ (Value): {@link CreateDeliveryOptionsPreviewRequestInput}. The `delivery_options`
 * variant of `CreateDeliveryPreviewRequest`.
 */
export type CreateDeliveryOptionsPreviewRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequestInput}. The buyer's location for pickup
     * or local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequestInput;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): Array of string. Delivery methods to evaluate. When omitted, uses
     * settings.checkout.default_delivery_method_ids, or no methods when that setting is empty.
     * Shape $[] (Value): string. minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): {@link DeliveryAddressRequestInput}. A partial address for delivery quotes,
     * previews, and buyer locations. Country is required when any member is present.
     */
    "destination_address"?: DeliveryAddressRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryPreviewRoutingSourceInput}. Chooses where a delivery options
     * preview routes inventory from: a fixed Location, an inventory allocation policy, or one
     * policy revision.
     */
    "inventory_routing_source"?: DeliveryPreviewRoutingSourceInput;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItemRequestInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link CreateOrderLineItemRequestInput}. A line item to add to an
     * order: a catalog variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
    /**
     * Shape $ (Value): string. The delivery question this preview answers. - `delivery_options`:
     * Evaluates delivery methods and prices for the supplied items and buyer location. Value enum:
     * "delivery_options".
     */
    "mode": "delivery_options";
    /** Shape $ (Value): string. minLength: 1. */
    "pickup_location_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "pricing_context"?: Record<string, string>;
};
/**
 * Shape $ (Value): {@link CreateDeliveryPickupLocationsPreviewRequest}. The `pickup_locations`
 * variant of `CreateDeliveryPreviewRequest`.
 */
export type CreateDeliveryPickupLocationsPreviewRequest = {
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequest}. The buyer's location for pickup or
     * local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /**
     * Shape $ (Value): string. Checkout session whose pickup locations to evaluate. Checkout
     * credentials must identify their own session. minLength: 1.
     */
    "checkout_session_id": string;
    /**
     * Shape $ (Value): {@link DeliveryDistance}. A maximum distance from the buyer location, as a
     * value and unit, that limits which pickup locations a preview returns.
     */
    "maximum_distance"?: DeliveryDistance;
    /**
     * Shape $ (Value): string. The delivery question this preview answers. - `pickup_locations`:
     * Lists the checkout session's pickup locations and whether each can supply its items. Value
     * enum: "pickup_locations".
     */
    "mode": "pickup_locations" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateDeliveryPickupLocationsPreviewRequestInput}. The
 * `pickup_locations` variant of `CreateDeliveryPreviewRequest`.
 */
export type CreateDeliveryPickupLocationsPreviewRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequestInput}. The buyer's location for pickup
     * or local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequestInput;
    /**
     * Shape $ (Value): string. Checkout session whose pickup locations to evaluate. Checkout
     * credentials must identify their own session. minLength: 1.
     */
    "checkout_session_id": string;
    /**
     * Shape $ (Value): {@link DeliveryPickupAvailabilityMaximumDistanceRequestInput}. A maximum
     * distance from the buyer location, as a value and unit, that limits which pickup locations a
     * preview returns.
     */
    "maximum_distance"?: DeliveryPickupAvailabilityMaximumDistanceRequestInput;
    /**
     * Shape $ (Value): string. The delivery question this preview answers. - `pickup_locations`:
     * Lists the checkout session's pickup locations and whether each can supply its items. Value
     * enum: "pickup_locations".
     */
    "mode": "pickup_locations";
};
/**
 * Shape $ (Value): {@link CreateDeliveryPreviewRequest}. The request body for: Create delivery
 * preview.
 */
export type CreateDeliveryPreviewRequest = ((CreateDeliveryOptionsPreviewRequest)
    | (CreateDeliveryPickupLocationsPreviewRequest)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateDeliveryPreviewRequestInput}. The request body for: Create
 * delivery preview.
 */
export type CreateDeliveryPreviewRequestInput = ((CreateDeliveryOptionsPreviewRequestInput) | (CreateDeliveryPickupLocationsPreviewRequestInput));
/**
 * Shape $ (Value): {@link CreateDeliveryProfileRequest}. The request body for: Create delivery
 * profile.
 */
export type CreateDeliveryProfileRequest = {
    /**
     * Shape $ (Value): {@link DeliveryProfileConfigurationRequest}. Delivery planning settings you
     * supply when creating or updating a delivery profile. Which fields are allowed depends on
     * `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequest;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryProfileRequestInput}. The request body for: Create
 * delivery profile.
 */
export type CreateDeliveryProfileRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryProfileConfigurationRequestInput}. Delivery planning
     * settings you supply when creating or updating a delivery profile. Which fields are allowed
     * depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequestInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryRateCallbackRequest}. The request body for: Create
 * delivery rate callback.
 */
export type CreateDeliveryRateCallbackRequest = {
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfiguration}. Settings for a delivery rate
     * callback: the endpoint `url` Flint calls, request timeout, request and response size limits,
     * redirect policy, and whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfiguration;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): Array of {@link WebhookSigningMethod}. Signing methods for callback
     * requests. Defaults to JWT verification with Flint's public JWKS. A shared secret and key_id
     * are returned only when hmac is included. minItems: 1. uniqueItems: true. Default: ["jwt"].
     * [] enum: "jwt", "hmac". Shape $[] (Value): {@link WebhookSigningMethod}. jwt uses Flint's
     * public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
};
/**
 * Shape $ (Value): {@link CreateDeliveryRateCallbackRequestInput}. The request body for: Create
 * delivery rate callback.
 */
export type CreateDeliveryRateCallbackRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfigurationInput}. Settings for a delivery
     * rate callback: the endpoint `url` Flint calls, request timeout, request and response size
     * limits, redirect policy, and whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfigurationInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): Array of {@link WebhookSigningMethodInput}. Signing methods for callback
     * requests. Defaults to JWT verification with Flint's public JWKS. A shared secret and key_id
     * are returned only when hmac is included. minItems: 1. uniqueItems: true. Default: ["jwt"].
     * [] enum: "jwt", "hmac". Shape $[] (Value): {@link WebhookSigningMethodInput}. jwt uses
     * Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum: "jwt",
     * "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
};
/**
 * Shape $ (Value): {@link CreateDeliverySelectionChoiceRequest}. The delivery option to select for
 * one choice group when creating a delivery selection, with optional delivery instructions.
 */
export type CreateDeliverySelectionChoiceRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_choice_group_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_option_id": string;
    /**
     * Shape $ (Value): {@link DeliverySelectionInstructionsRequest}. Buyer input for a selected
     * delivery option: a `delivery_window_id` where the option uses delivery windows, and optional
     * `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequest;
};
/**
 * Shape $ (Value): {@link CreateDeliverySelectionChoiceRequestInput}. The delivery option to
 * select for one choice group when creating a delivery selection, with optional delivery
 * instructions.
 */
export type CreateDeliverySelectionChoiceRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_choice_group_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_option_id": string;
    /**
     * Shape $ (Value): {@link DeliverySelectionInstructionsRequestInput}. Buyer input for a
     * selected delivery option: a `delivery_window_id` where the option uses delivery windows, and
     * optional `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequestInput;
};
/**
 * Shape $ (Value): {@link CreateDeliverySelectionRequest}. The request body for: Create delivery
 * selection.
 */
export type CreateDeliverySelectionRequest = {
    /**
     * Shape $ (Value): Array of {@link CreateDeliverySelectionChoiceRequest}. Shape $[] (Value):
     * {@link CreateDeliverySelectionChoiceRequest}. The delivery option to select for one choice
     * group when creating a delivery selection, with optional delivery instructions.
     */
    "choices": Array<CreateDeliverySelectionChoiceRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_quote_id": string;
    /**
     * Shape $ (Value): {@link AddressRequest}. Partial is fine when quoting: send what the buyer
     * has entered, at least country. A destination_address sent with a selection must be complete;
     * a selection that omits it uses the quote's destination, which may be partial. A complete
     * postal address. State and postal_code are required for US addresses and optional for other
     * countries. Send null or omit line2, state, and postal_code when the address has none.
     */
    "destination_address"?: AddressRequest;
    /**
     * Shape $ (Value): string or null. Optional assertion on
     * CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to
     * assert that no selection exists, or send an ID to assert that it is current. minLength: 1.
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Shape $ (Value): {@link DeliverySelectionRecipientRequest}. Recipient details you supply
     * with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequest;
};
/**
 * Shape $ (Value): {@link CreateDeliverySelectionRequestInput}. The request body for: Create
 * delivery selection.
 */
export type CreateDeliverySelectionRequestInput = {
    /**
     * Shape $ (Value): Array of {@link CreateDeliverySelectionChoiceRequestInput}. Shape $[]
     * (Value): {@link CreateDeliverySelectionChoiceRequestInput}. The delivery option to select
     * for one choice group when creating a delivery selection, with optional delivery
     * instructions.
     */
    "choices": Array<CreateDeliverySelectionChoiceRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_quote_id": string;
    /**
     * Shape $ (Value): {@link AddressRequestInput}. Partial is fine when quoting: send what the
     * buyer has entered, at least country. A destination_address sent with a selection must be
     * complete; a selection that omits it uses the quote's destination, which may be partial. A
     * complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "destination_address"?: AddressRequestInput;
    /**
     * Shape $ (Value): string or null. Optional assertion on
     * CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to
     * assert that no selection exists, or send an ID to assert that it is current. minLength: 1.
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Shape $ (Value): {@link DeliverySelectionRecipientRequestInput}. Recipient details you
     * supply with a delivery selection or subscription delivery: optional `name`, `email`, and
     * `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequestInput;
};
/**
 * Shape $ (Value): {@link CreateDeliveryZoneRequest}. The request body for: Create delivery zone.
 */
export type CreateDeliveryZoneRequest = {
    /**
     * Shape $ (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfiguration;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryZoneRequestInput}. The request body for: Create delivery
 * zone.
 */
export type CreateDeliveryZoneRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfigurationInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDemoSessionRequestInput}. The request body for: Create demo
 * session.
 */
export type CreateDemoSessionRequestInput = {
    /**
     * Shape $ (Value): string. Omit to use quickstart. An explicit empty or unsupported template
     * is invalid. Default: "quickstart". Value enum: "quickstart".
     */
    "template"?: "quickstart";
};
/**
 * Shape $ (Value): {@link CreateDeveloperSandboxResult}. The created sandbox is the primary
 * resource, with the API key and one-time secret_key when issue_test_key is true.
 */
export type CreateDeveloperSandboxResult = {
    /**
     * Shape $ (Value): {@link APIKey}. The newly issued test API key. Present exactly when
     * issue_test_key is true. A credential used to authenticate API requests.
     */
    "api_key"?: APIKey;
    /** Shape $ (Value): {@link Sandbox}. An isolated environment for testing an integration. */
    "sandbox": Sandbox;
    /**
     * Shape $ (Value): string. The one-time secret for api_key. Present exactly when
     * issue_test_key is true.
     */
    "secret_key"?: string;
};
/** Shape $ (Value): {@link CreateDeviceRequest}. The request body for: Create device. */
export type CreateDeviceRequest = {
    /**
     * Shape $ (Value): string. Stable hardware identity. Must have no leading or trailing
     * whitespace and is compared exactly, including case and accents. Only one active device in
     * this merchant and environment can hold it. minLength: 1. maxLength: 255.
     */
    "hardware_fingerprint"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/** Shape $ (Value): {@link CreateDeviceRequestInput}. The request body for: Create device. */
export type CreateDeviceRequestInput = {
    /**
     * Shape $ (Value): string. Stable hardware identity. Must have no leading or trailing
     * whitespace and is compared exactly, including case and accents. Only one active device in
     * this merchant and environment can hold it. minLength: 1. maxLength: 255.
     */
    "hardware_fingerprint"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you supply
 * when creating a fulfillment: the delivery URL.
 */
export type CreateDigitalFulfillmentDetails = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_url"?: string;
};
/**
 * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details you
 * supply when creating a fulfillment: the delivery URL.
 */
export type CreateDigitalFulfillmentDetailsInput = CreateDigitalFulfillmentDetails;
/**
 * Shape $ (Value): {@link CreateEmailChangeRequest}. The request body for: Request an email
 * change.
 */
export type CreateEmailChangeRequest = {
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 320. */
    "new_email": string;
};
/**
 * Shape $ (Value): {@link CreateEmailChangeRequestInput}. The request body for: Request an email
 * change.
 */
export type CreateEmailChangeRequestInput = CreateEmailChangeRequest;
/**
 * Shape $ (Value): {@link CreateFeedbackReportNarrative}. The `bug` variant of
 * `CreateFeedbackReportRequest`. The `feature_request` variant of `CreateFeedbackReportRequest`.
 * The `other` variant of `CreateFeedbackReportRequest`. The `papercut` variant of
 * `CreateFeedbackReportRequest`. The `praise` variant of `CreateFeedbackReportRequest`.
 */
export type CreateFeedbackReportNarrative = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /**
     * Shape $ (Value): string. Classification of the feedback. Value enum: "papercut", "bug",
     * "feature_request", "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Shape $ (Value): {@link FeedbackReportingClient}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral" | (string & {});
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /**
     * Shape $ (Value): string. Value enum: "papercut", "bug", "feature_request", "praise",
     * "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
});
/**
 * Shape $ (Value): {@link CreateFeedbackReportNarrativeInput}. The `bug` variant of
 * `CreateFeedbackReportRequest`. The `feature_request` variant of `CreateFeedbackReportRequest`.
 * The `other` variant of `CreateFeedbackReportRequest`. The `papercut` variant of
 * `CreateFeedbackReportRequest`. The `praise` variant of `CreateFeedbackReportRequest`.
 */
export type CreateFeedbackReportNarrativeInput = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /**
     * Shape $ (Value): string. Classification of the feedback. Value enum: "papercut", "bug",
     * "feature_request", "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other";
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Shape $ (Value): {@link FeedbackReportingClientInput}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientInput;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral";
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /**
     * Shape $ (Value): string. Value enum: "papercut", "bug", "feature_request", "praise",
     * "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other";
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
});
/**
 * Shape $ (Value): {@link CreateFeedbackReportRating}. The `rating` variant of
 * `CreateFeedbackReportRequest`.
 */
export type CreateFeedbackReportRating = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /** Shape $ (Value): string. Classification of the feedback. Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Shape $ (Value): {@link FeedbackReportingClient}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral" | (string & {});
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateFeedbackReportRatingInput}. The `rating` variant of
 * `CreateFeedbackReportRequest`.
 */
export type CreateFeedbackReportRatingInput = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /** Shape $ (Value): string. Classification of the feedback. Value enum: "rating". */
    "kind": "rating";
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Shape $ (Value): {@link FeedbackReportingClientInput}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientInput;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral";
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "rating". */
    "kind": "rating";
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral";
});
/**
 * Shape $ (Value): {@link CreateFeedbackReportRequest}. The request body for: Create a feedback
 * report.
 */
export type CreateFeedbackReportRequest = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /**
     * Shape $ (Value): string. Classification of the feedback. Value enum: "papercut", "bug",
     * "feature_request", "rating", "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other" | (string & {});
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Shape $ (Value): {@link FeedbackReportingClient}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral" | (string & {});
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ((Exclude<CreateFeedbackReportRating & object, readonly unknown[]>)
    | (Exclude<CreateFeedbackReportNarrative & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateFeedbackReportRequestInput}. The request body for: Create a
 * feedback report.
 */
export type CreateFeedbackReportRequestInput = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /**
     * Shape $ (Value): string. Classification of the feedback. Value enum: "papercut", "bug",
     * "feature_request", "rating", "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other";
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Shape $ (Value): {@link FeedbackReportingClientInput}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientInput;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral";
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ((Exclude<CreateFeedbackReportRatingInput & object, readonly unknown[]>)
    | (Exclude<CreateFeedbackReportNarrativeInput & object, readonly unknown[]>));
/** Shape $ (Value): {@link CreateFileRequest}. The request body for: Create a file. */
export type CreateFileRequest = {
    /** Shape $ (Value): string.  Value enum: "image/jpeg", "image/png", "image/webp". */
    "content_type": "image/jpeg" | "image/png" | "image/webp" | (string & {});
    /**
     * Shape $ (Value): string. What the image will be used for. Partner installs support the five
     * commerce purposes; merchant_logo and merchant_icon require merchants.profile.write, which
     * partner installs cannot grant, and return INSUFFICIENT_SCOPE with scope_requirement. Value
     * enum: "product", "product_variant", "bundle", "payment_link", "subscription_plan",
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
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 5242880.
     */
    "size_bytes": `${bigint}`;
};
/** Shape $ (Value): {@link CreateFileRequestInput}. The request body for: Create a file. */
export type CreateFileRequestInput = {
    /** Shape $ (Value): string.  Value enum: "image/jpeg", "image/png", "image/webp". */
    "content_type": "image/jpeg" | "image/png" | "image/webp";
    /**
     * Shape $ (Value): string. What the image will be used for. Partner installs support the five
     * commerce purposes; merchant_logo and merchant_icon require merchants.profile.write, which
     * partner installs cannot grant, and return INSUFFICIENT_SCOPE with scope_requirement. Value
     * enum: "product", "product_variant", "bundle", "payment_link", "subscription_plan",
     * "merchant_logo", "merchant_icon".
     */
    "purpose": "product"
        | "product_variant"
        | "bundle"
        | "payment_link"
        | "subscription_plan"
        | "merchant_logo"
        | "merchant_icon";
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 5242880.
     */
    "size_bytes": `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CreateFulfillmentEventRequest}. The request body for: Create fulfillment
 * event.
 */
export type CreateFulfillmentEventRequest = {
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "custom_details"?: Record<string, string>;
    /** Shape $ (Value): string.  Value enum: "carrier_scan", "custom". */
    "event_type": "carrier_scan" | "custom" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "external_event_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_status"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_system"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "message"?: string;
    /** Shape $ (Value): string. Provider event timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Nested package associated with this observational event. Flint
     * resolves and validates its shipment and fulfillment ownership. minLength: 1.
     */
    "package_id"?: string;
    /**
     * Shape $ (Value): string. Nested shipment associated with this observational event. Flint
     * validates that it belongs to the fulfillment in the path. minLength: 1.
     */
    "shipment_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateFulfillmentEventRequestInput}. The request body for: Create
 * fulfillment event.
 */
export type CreateFulfillmentEventRequestInput = {
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "custom_details"?: Record<string, string>;
    /** Shape $ (Value): string.  Value enum: "carrier_scan", "custom". */
    "event_type": "carrier_scan" | "custom";
    /** Shape $ (Value): string. minLength: 1. */
    "external_event_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_status"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_system"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "message"?: string;
    /** Shape $ (Value): string. Provider event timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Nested package associated with this observational event. Flint
     * resolves and validates its shipment and fulfillment ownership. minLength: 1.
     */
    "package_id"?: string;
    /**
     * Shape $ (Value): string. Nested shipment associated with this observational event. Flint
     * validates that it belongs to the fulfillment in the path. minLength: 1.
     */
    "shipment_id"?: string;
};
