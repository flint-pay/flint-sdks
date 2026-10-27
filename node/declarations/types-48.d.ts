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
import type {
    GiftCardPurchaseRecipientPatchRequest,
    GiftCardPurchaseRecipientPatchRequestInput,
    ImageRequest,
    ImageRequestInput,
    GiftCardProductConfiguration,
    GiftCardProductConfigurationInput
} from './types-19.js';
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
import type { TextModifierConfigPatchRequest, TextModifierConfigPatchRequestInput } from './types-47.js';
import type { CreateOrderTip, CreateOrderTipInput } from './types-7.js';
import type { InventoryRoutingSource, InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-25.js';
import type { OrderTaxUpdateRequest, OrderTaxUpdateRequestInput } from './types-33.js';
import type { Dimensions, DimensionsInput } from './types-16.js';
import type { Weight, WeightInput } from './types-61.js';
import type { PartnerAppPermissionManifestEntry } from './types-34.js';
import type {
    PartnerAppPermissionManifestEntryInput,
    PaymentLinkCustomFieldPatchRequest,
    PaymentLinkCustomTextPatchRequest,
    PaymentLinkEventConfigPatchRequest,
    PaymentLinkCustomFieldPatchRequestInput,
    PaymentLinkCustomTextPatchRequestInput,
    PaymentLinkEventConfigPatchRequestInput
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
    PaymentLinkLegalPatchRequestInput,
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkPaymentPatchRequestInput,
    PaymentLinkRedirectsPatchRequestInput,
    PaymentLinkThemePatchRequestInput
} from './types-36.js';
import type { InventoryItemCreateRequest, InventoryItemCreateRequestInput } from './types-24.js';
import type {
    ProductVariantSelectedOptionRequest,
    ProductVariantSelectedOptionRequestInput,
    PromotionApplicationMethodPatch,
    PromotionApplicationMethodPatchInput
} from './types-37.js';
import type {
    PromotionCombinesWithPatch,
    PromotionExclusivityPatch,
    PromotionRuleGroupRequest,
    PromotionSchedulePatch,
    PromotionCombinesWithPatchInput,
    PromotionExclusivityPatchInput,
    PromotionRuleGroupRequestInput,
    PromotionSchedulePatchInput
} from './types-38.js';
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
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "cc_emails"?: Array<string>;
    /**
     * Shape $ (Value): {@link InvoiceCollectionRequest}. How an invoice is collected, used when
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
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "footer"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
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
     * Shape $ (Value): {@link InvoicePaymentDueRequest}. When an invoice is due, used when
     * creating or updating an invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "po_number"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "recipient_email"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
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
     * Shape $ (Value): {@link AddressRequest}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
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
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | null;
    /**
     * Shape $ (Value): string or null. Calendar date in YYYY-MM-DD format. Send null to clear it.
     * Format: date. minLength: 1.
     */
    "service_date"?: string | null;
});
/** Shape $ (Value): {@link UpdateInvoiceRequestInput}. The request body for: Update invoice. */
export type UpdateInvoiceRequestInput = ({
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "cc_emails"?: Array<string>;
    /**
     * Shape $ (Value): {@link InvoiceCollectionRequestInput}. How an invoice is collected, used
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
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "footer"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
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
     * Shape $ (Value): {@link InvoicePaymentDueRequestInput}. When an invoice is due, used when
     * creating or updating an invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "po_number"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "recipient_email"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
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
     * Shape $ (Value): {@link AddressRequestInput}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
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
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. Calendar date in YYYY-MM-DD format. Send null to clear it.
     * Format: date. minLength: 1.
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
    /** Shape $ (Value): string. minLength: 1. */
    "organization_id"?: string;
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
    /** Shape $ (Value): string. minLength: 1. */
    "organization_id"?: string;
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
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "parent_organization_id"?: string | null;
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
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "parent_organization_id"?: string | null;
};
/** Shape $ (Value): {@link UpdatePackageItemRequest}. The request body for: Update package item. */
export type UpdatePackageItemRequest = {
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
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link UpdatePaymentMethodDomainRequestInput}. The request body for: Update
 * payment method domain.
 */
export type UpdatePaymentMethodDomainRequestInput = {
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status": "active" | "inactive";
};
/**
 * Shape $ (Value): {@link UpdatePayoutDestinationRequest}. The request body for: Update payout
 * destination metadata.
 */
export type UpdatePayoutDestinationRequest = {
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
};
/**
 * Shape $ (Value): {@link UpdatePayoutDestinationRequestInput}. The request body for: Update
 * payout destination metadata.
 */
export type UpdatePayoutDestinationRequestInput = UpdatePayoutDestinationRequest;
/**
 * Shape $ (Value): {@link UpdatePayoutSettingsRequest}. The request body for: Update payout
 * settings.
 */
export type UpdatePayoutSettingsRequest = {
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "default_payout_destinations"?: Record<string, string>;
    /** Shape $ (Value): integer or null. Format: int32. */
    "delay_days_override"?: number | null;
    /** Shape $ (Value): string.  Value enum: "manual", "daily", "weekly", "monthly". */
    "interval"?: "manual" | "daily" | "weekly" | "monthly" | (string & {});
    /**
     * Shape $ (Value): Map of ({@link MoneyValue} or null). Shape $.* (Value): {@link MoneyValue}
     * or null. Shape $.*.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. Shape $.*.anyOf[2] (Value): null.
     */
    "minimum_balance_by_currency"?: Record<string, ((MoneyValue) | (null))>;
    /** Shape $ (Value): Array of integer. Shape $[] (Value): integer. Format: int32. */
    "monthly_payout_days"?: Array<number>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "statement_descriptor"?: string | null;
    /**
     * Shape $ (Value): Array of string. Weekdays on which weekly payouts are sent. Allowed values
     * are monday, tuesday, wednesday, thursday, and friday. [] enum: "monday", "tuesday",
     * "wednesday", "thursday", "friday". Shape $[] (Value): string. Value enum: "monday",
     * "tuesday", "wednesday", "thursday", "friday".
     */
    "weekly_payout_days"?: Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | (string & {})>;
};
/**
 * Shape $ (Value): {@link UpdatePayoutSettingsRequestInput}. The request body for: Update payout
 * settings.
 */
export type UpdatePayoutSettingsRequestInput = {
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "default_payout_destinations"?: Record<string, string>;
    /** Shape $ (Value): integer or null. Format: int32. */
    "delay_days_override"?: number | null;
    /** Shape $ (Value): string.  Value enum: "manual", "daily", "weekly", "monthly". */
    "interval"?: "manual" | "daily" | "weekly" | "monthly";
    /**
     * Shape $ (Value): Map of ({@link MoneyValueInput} or null). Shape $.* (Value): {@link
     * MoneyValueInput} or null. Shape $.*.anyOf[1] (Value): {@link MoneyValueInput}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code. Shape $.*.anyOf[2]
     * (Value): null.
     */
    "minimum_balance_by_currency"?: Record<string, ((MoneyValueInput) | (null))>;
    /** Shape $ (Value): Array of integer. Shape $[] (Value): integer. Format: int32. */
    "monthly_payout_days"?: Array<number>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "statement_descriptor"?: string | null;
    /**
     * Shape $ (Value): Array of string. Weekdays on which weekly payouts are sent. Allowed values
     * are monday, tuesday, wednesday, thursday, and friday. [] enum: "monday", "tuesday",
     * "wednesday", "thursday", "friday". Shape $[] (Value): string. Value enum: "monday",
     * "tuesday", "wednesday", "thursday", "friday".
     */
    "weekly_payout_days"?: Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday">;
};
/**
 * Shape $ (Value): {@link UpdatePickupFulfillmentDetails}. Pickup fulfillment fields to change
 * when updating a fulfillment, such as location, pickup window, and curbside details. Send null to
 * clear a field.
 */
export type UpdatePickupFulfillmentDetails = {
    /**
     * Shape $ (Value): {@link AddressRequest} or null. Address where the buyer collects the order.
     * Shape $.anyOf[1] (Value): {@link AddressRequest}. A postal address you supply when creating
     * or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2`
     * to clear it. Shape $.anyOf[2] (Value): null.
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
     * order. Shape $.anyOf[1] (Value): {@link AddressRequestInput}. A postal address you supply
     * when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null
     * for `line2` to clear it. Shape $.anyOf[2] (Value): null.
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
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
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
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
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
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
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
     * Shape $ (Value): {@link GiftCardProductConfigurationInput}. Replaces the complete gift card
     * configuration. Omission preserves it. Null is not accepted. Include expected_version to
     * reject a concurrent variant change. Gift card settings on a product variant: its
     * `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfigurationInput;
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
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
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
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
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
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
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
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
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
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
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
