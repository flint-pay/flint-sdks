import type { InvoiceLateFeePolicy, InvoiceLateFeePolicyRequestInput } from './types-32.js';
import type {
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationRequestInput,
    InvoicePaymentDueRequest,
    InvoicePaymentDueRequestInput
} from './types-33.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type { InvoiceCollectionRequest, InvoiceCollectionRequestInput } from './types-31.js';
import type { InvoiceScheduleEntryWrite, InvoiceScheduleEntryWriteInput } from './types-34.js';
import type {
    MetadataPatchRequest,
    MetadataPatchRequestInput,
    ModifierRequest,
    ModifierRequestInput,
    ModifierSetGroupRequest,
    ModifierSetGroupRequestInput
} from './types-38.js';
import type {
    GiftCardPurchaseRecipientPatchRequest,
    GiftCardPurchaseRecipientPatchRequestInput,
    GiftCardProductConfiguration,
    GiftCardProductConfigurationRequestInput
} from './types-27.js';
import type {
    MoneyValue,
    OrderCalculatedLineItemTax,
    MoneyValueInput,
    OrderCalculatedLineItemTaxRequestInput,
    OrderCalculatedChargeTax,
    OrderCalculatedChargeTaxRequestInput
} from './types-39.js';
import type { OrderLineItemModifierRequest, OrderLineItemModifierRequestModelInput } from './types-41.js';
import type { SubscribedLineRequest, SubscribedLineRequestModelInput } from './types-60.js';
import type { LocationCoordinate, LocationCoordinateRequestInput, LegalSettingsRequest } from './types-35.js';
import type { SubscriptionDeliveryRequest, SubscriptionDeliveryRequestInput } from './types-61.js';
import type { ImageRequest, ImageRequestInput } from './types-28.js';
import type { TextModifierConfigPatchRequest, TextModifierConfigPatchRequestInput } from './types-65.js';
import type { CreateOrderTip, CreateOrderTipInput } from './types-11.js';
import type { InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-30.js';
import type {
    OrderDeliveryDestinationRequest,
    OrderDeliveryRequest,
    OrderHandover,
    OrderDeliveryDestinationRequestInput,
    OrderDeliveryRequestInput,
    OrderHandoverRequestInput
} from './types-40.js';
import type { OrderTaxUpdateRequest, OrderTaxUpdateRequestInput } from './types-42.js';
import type { Dimensions, DimensionsRequestInput } from './types-23.js';
import type { Weight, WeightRequestInput } from './types-70.js';
import type {
    PartnerAppPaymentSplits,
    PartnerAppPermissionManifestEntry,
    PartnerAppPlatformProfile,
    PartnerAppPaymentSplitsRequestInput,
    PartnerAppPermissionManifestEntryRequestInput,
    PartnerAppPlatformProfileRequestInput
} from './types-43.js';
import type { PlatformFeeCap, PlatformFeeCapRequestInput } from './types-49.js';
import type {
    CheckoutBuyerFields,
    CheckoutPromotionConfig,
    CheckoutBuyerFieldsRequestInput,
    CheckoutPromotionConfigRequestInput
} from './types-5.js';
import type {
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutTaxConfigRequestInput,
    CheckoutTipConfigRequestInput
} from './types-6.js';
import type {
    PaymentLinkCustomFieldPatchRequest,
    PaymentLinkCustomTextPatchRequest,
    PaymentLinkEventConfigPatchRequest,
    PaymentLinkCustomFieldPatchRequestInput,
    PaymentLinkCustomTextPatchRequestInput,
    PaymentLinkEventConfigPatchRequestInput,
    PaymentLinkLegalPatchRequestInput
} from './types-45.js';
import type {
    PaymentLinkLineItemPatchRequest,
    PaymentLinkPaymentPatchRequest,
    PaymentLinkRedirectsPatchRequest,
    PaymentLinkThemePatchRequest,
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkPaymentPatchRequestInput,
    PaymentLinkRedirectsPatchRequestInput,
    PaymentLinkThemePatchRequestInput
} from './types-46.js';
import type { QuantityPriceBreak, QuantityPriceBreakRequestInput } from './types-52.js';
import type { InventoryItemCreateRequest, InventoryItemCreateRequestInput } from './types-29.js';
import type {
    ProductVariantSelectedOptionRequest,
    ProductVariantSelectedOptionRequestInput,
    PromotionApplicationMethodPatch,
    PromotionApplicationMethodPatchInput
} from './types-50.js';
import type {
    PromotionCombinesWithPatch,
    PromotionExclusivityPatch,
    PromotionRuleGroupRequest,
    PromotionSchedulePatch,
    PromotionCombinesWithPatchInput,
    PromotionExclusivityPatchInput,
    PromotionRuleGroupRequestInput,
    PromotionSchedulePatchInput
} from './types-51.js';
/** The request body for: Update inventory reservation. minProperties: 1. */
export type UpdateInventoryReservationRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * New hold deadline: after now and at most 24 hours from now. It can be earlier or later than
     * the current deadline. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string | globalThis.Date;
};
/** The request body for: Update inventory transfer. minProperties: 1. */
export type UpdateInventoryTransferRequest = ({
    /** Required when any of these fields is present: lines. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Replace the transfer's owned lines collection atomically. Lines have no lifecycle outside
     * this transfer. Include every line to keep, with its inventory_transfer_line_id; omit it to
     * remove it. Lines with departed or canceled quantity must remain. Requires expected_version
     * when present. minItems: 1. maxItems: 100. [] (Value): object. [].condition (Optional):
     * string. Condition of the units being moved. Default: "sellable". Value enum: "sellable",
     * "quality_control", "damaged", "quarantined". [].inventory_item_id (Required): string. ID of
     * the inventory item to move. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     * [].inventory_transfer_line_id (Optional): string. Existing line in this transfer. Omit to
     * add a line. minLength: 1. Example: "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
     * [].requested_quantity (Required): integer. Units to move from the origin. Format: int64.
     * minimum: 1.
     */
    "lines"?: Array<{
        /**
         * Condition of the units being moved. Default: "sellable". Value enum: "sellable",
         * "quality_control", "damaged", "quarantined".
         */
        "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
        /**
         * ID of the inventory item to move. minLength: 1. Example:
         * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
         */
        "inventory_item_id": string;
        /**
         * Existing line in this transfer. Omit to add a line. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id"?: string;
        /** Units to move from the origin. Format: int64. minimum: 1. */
        "requested_quantity": number;
    }>;
    /** Send null to clear it. minLength: 1. */
    "note"?: string | null;
});
/** The request body for: Update inventory transfer. minProperties: 1. */
export type UpdateInventoryTransferRequestInput = ({
    /** Required when any of these fields is present: lines. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Replace the transfer's owned lines collection atomically. Lines have no lifecycle outside
     * this transfer. Include every line to keep, with its inventory_transfer_line_id; omit it to
     * remove it. Lines with departed or canceled quantity must remain. Requires expected_version
     * when present. minItems: 1. maxItems: 100. [] (Value): object. [].condition (Optional):
     * string. Condition of the units being moved. Default: "sellable". Value enum: "sellable",
     * "quality_control", "damaged", "quarantined". [].inventory_item_id (Required): string. ID of
     * the inventory item to move. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     * [].inventory_transfer_line_id (Optional): string. Existing line in this transfer. Omit to
     * add a line. minLength: 1. Example: "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
     * [].requested_quantity (Required): integer. Units to move from the origin. Format: int64.
     * minimum: 1.
     */
    "lines"?: Array<{
        /**
         * Condition of the units being moved. Default: "sellable". Value enum: "sellable",
         * "quality_control", "damaged", "quarantined".
         */
        "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined";
        /**
         * ID of the inventory item to move. minLength: 1. Example:
         * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
         */
        "inventory_item_id": string;
        /**
         * Existing line in this transfer. Omit to add a line. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id"?: string;
        /** Units to move from the origin. Format: int64. minimum: 1. */
        "requested_quantity": number;
    }>;
    /** Send null to clear it. minLength: 1. */
    "note"?: string | null;
});
/** The request body for: Update invoice payment term. minProperties: 1. */
export type UpdateInvoicePaymentTermRequest = {
    /**
     * Rule used to calculate the invoice's due date when it is issued. Required on create; omit it
     * on update to preserve the current rule. How an invoice due date is calculated from payment
     * terms, such as on receipt, net days, or a day of the month.
     */
    "calculation"?: InvoicePaymentTermCalculation;
    /** Optional version last read by the caller. Format: uint32. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on
     * create or preserve the current policy on update; send null on update to remove it. anyOf[1]
     * (Value): {@link InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed amount or a
     * percentage, a grace period in days, and whether Flint applies it automatically. anyOf[2]
     * (Value): null.
     */
    "late_fee_policy"?: ((InvoiceLateFeePolicy) | (null) | (unknown));
    /**
     * Name of the payment term shown on invoices. Required on create; omit it on update to
     * preserve the current name. minLength: 1.
     */
    "name"?: string;
};
/** The request body for: Update invoice payment term. minProperties: 1. */
export type UpdateInvoicePaymentTermRequestInput = {
    /**
     * Rule used to calculate the invoice's due date when it is issued. Required on create; omit it
     * on update to preserve the current rule. How an invoice due date is calculated from payment
     * terms, such as on receipt, net days, or a day of the month.
     */
    "calculation"?: InvoicePaymentTermCalculationRequestInput;
    /** Optional version last read by the caller. Format: uint32. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on
     * create or preserve the current policy on update; send null on update to remove it. anyOf[1]
     * (Value): {@link InvoiceLateFeePolicyRequestInput}. A late fee for overdue invoices: a fixed
     * amount or a percentage, a grace period in days, and whether Flint applies it automatically.
     * anyOf[2] (Value): null.
     */
    "late_fee_policy"?: ((InvoiceLateFeePolicyRequestInput) | (null));
    /**
     * Name of the payment term shown on invoices. Required on create; omit it on update to
     * preserve the current name. minLength: 1.
     */
    "name"?: string;
};
/** The request body for: Update invoice. minProperties: 1. */
export type UpdateInvoiceRequest = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. Send the complete list;
     * [] removes every address. [] (Value): string. minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Send the invoice's collection object back unchanged, or a new
     * one. merchant_default resolves again from invoice settings when the draft is written. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Invoice version last read. Required when schedule_entries is present. Required when any of
     * these fields is present: schedule_entries. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. Send null
     * to clear it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /** Fine print at the bottom of the invoice and PDF. Send null to clear it. minLength: 1. */
    "footer"?: string | null;
    /**
     * Message to the customer, printed on the invoice and PDF. Send null to clear it. minLength:
     * 1.
     */
    "memo"?: string | null;
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
     * When the invoice is due. Send the invoice's payment_due object back unchanged, or a new one.
     * Sending payment_terms captures the term's current revision again. When an invoice is due,
     * used when creating or updating an invoice: no due date, a calendar date, payment terms, or a
     * default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /**
     * The buyer's purchase order number, printed on the invoice and PDF. Send null to clear it.
     * minLength: 1.
     */
    "po_number"?: string | null;
    /**
     * Where Flint emails the invoice and its reminders. Defaults to the linked customer's email
     * when omitted at creation. Send null to leave it unset at creation; PATCH null clears it.
     * Required at issue when delivery resolves to email, and when you schedule the issue. Send
     * null to clear it. minLength: 1.
     */
    "recipient_email"?: string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. Send null to clear it. minLength: 1.
     */
    "reference"?: string | null;
    /**
     * Pauses (true) or resumes (false) the automatic reminder cadence. Accepted only on an open or
     * partially paid invoice with a balance remaining, and only alone or with expected_version:
     * every other field is draft-only. While paused, manual send-reminder calls still work, and
     * invoice.overdue and invoice.late_fee_due still fire. On resume, reminder times that passed
     * while paused do not fire. Sending the current value succeeds without changing the invoice.
     */
    "reminders_paused"?: boolean;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequest;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWrite}. One payment schedule
     * entry you supply when creating or updating an invoice. Set its kind, how much it collects,
     * and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWrite>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Clearing it cancels
     * the scheduled issue. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_issue_at"?: string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Send null to clear it. Format: date. minLength: 1.
     * Example: "2026-08-02".
     */
    "service_date"?: string | null;
});
/** The request body for: Update invoice. minProperties: 1. */
export type UpdateInvoiceRequestInput = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. Send the complete list;
     * [] removes every address. [] (Value): string. minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Send the invoice's collection object back unchanged, or a new
     * one. merchant_default resolves again from invoice settings when the draft is written. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Invoice version last read. Required when schedule_entries is present. Required when any of
     * these fields is present: schedule_entries. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. Send null
     * to clear it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /** Fine print at the bottom of the invoice and PDF. Send null to clear it. minLength: 1. */
    "footer"?: string | null;
    /**
     * Message to the customer, printed on the invoice and PDF. Send null to clear it. minLength:
     * 1.
     */
    "memo"?: string | null;
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
     * When the invoice is due. Send the invoice's payment_due object back unchanged, or a new one.
     * Sending payment_terms captures the term's current revision again. When an invoice is due,
     * used when creating or updating an invoice: no due date, a calendar date, payment terms, or a
     * default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /**
     * The buyer's purchase order number, printed on the invoice and PDF. Send null to clear it.
     * minLength: 1.
     */
    "po_number"?: string | null;
    /**
     * Where Flint emails the invoice and its reminders. Defaults to the linked customer's email
     * when omitted at creation. Send null to leave it unset at creation; PATCH null clears it.
     * Required at issue when delivery resolves to email, and when you schedule the issue. Send
     * null to clear it. minLength: 1.
     */
    "recipient_email"?: string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. Send null to clear it. minLength: 1.
     */
    "reference"?: string | null;
    /**
     * Pauses (true) or resumes (false) the automatic reminder cadence. Accepted only on an open or
     * partially paid invoice with a balance remaining, and only alone or with expected_version:
     * every other field is draft-only. While paused, manual send-reminder calls still work, and
     * invoice.overdue and invoice.late_fee_due still fire. On resume, reminder times that passed
     * while paused do not fire. Sending the current value succeeds without changing the invoice.
     */
    "reminders_paused"?: boolean;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequestInput;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWriteInput}. One payment
     * schedule entry you supply when creating or updating an invoice. Set its kind, how much it
     * collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWriteInput>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Clearing it cancels
     * the scheduled issue. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Send null to clear it. Format: date. minLength: 1.
     * Example: "2026-08-02".
     */
    "service_date"?: string | null;
});
/** The request body for: Update line item. minProperties: 1. */
export type UpdateLineItemRequest = ({
    /** Send null to clear description. minLength: 1. */
    "description"?: string | null;
    /**
     * Expected ship date in YYYY-MM-DD format. Send null to clear it. Omission preserves it.
     * Accepted on paid orders as the only field apart from expected_version. Repeating the current
     * date or clearing an already-null date leaves the order version unchanged. Format: date.
     * minLength: 1. Example: "2026-08-02".
     */
    "expected_ship_date"?: string | null;
    /**
     * Order version from the last order read, returned in data.version. Required when any of these
     * fields is present: modifiers, gift_card_recipient, gift_card_face_value_money, subscription.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Selects the face value of an unpaid, unfunded gift card line within its frozen offer's
     * custom_amount_bounds and reprices the order. Fixed-denomination offers accept only their
     * current value. Omission preserves the value; null is not allowed. Requires expected_version
     * from the order. Checkout credentials may send this field alone or together with
     * gift_card_recipient. Currency must be USD. Amount must be between 1 and 200000 minor units,
     * inclusive. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "gift_card_face_value_money"?: MoneyValue;
    /**
     * Replaces the recipient of an unfunded gift card purchase. Omission preserves it; null clears
     * it. Send expected_version from the order. Send null to clear gift_card_recipient. Requires
     * expected_version. anyOf[1] (Value): {@link GiftCardPurchaseRecipientPatchRequest}. Changes
     * to the recipient of a gift card purchase when updating a line item. Send null for `name` or
     * `message` to clear it. anyOf[2] (Value): null.
     */
    "gift_card_recipient"?: ((GiftCardPurchaseRecipientPatchRequest) | (null));
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
    /**
     * The line item's modifier selections. Sending the field replaces the current selections, so
     * include every modifier you want to keep. Requires `expected_version`. Flint reprices the
     * line item. Modifiers can't change once the line item has been paid for, and the request
     * returns 409. [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you
     * supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.
     */
    "modifiers"?: Array<OrderLineItemModifierRequest>;
    /** Name of the line item. minLength: 1. */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Replacement quantity, from 1 through 9999. The extended line subtotal, including modifiers,
     * must satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999.
     */
    "quantity"?: number;
    /**
     * Selects an active subscription offer and reprices an unpaid line. Null selects a one-time
     * purchase. Omission preserves the selection. Requires expected_version from the order and
     * clears the delivery selection when terms change. Send null to clear subscription. Requires
     * expected_version. anyOf[1] (Value): {@link SubscribedLineRequest}. Makes an order line a
     * subscription purchase, with the subscription offer and billing interval. anyOf[2] (Value):
     * null.
     */
    "subscription"?: ((SubscribedLineRequest) | (null));
    /**
     * Tax settings for the line item. Tax settings for an order line item calculated by Flint or
     * supplied by you, including the line item tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
});
/** The request body for: Update line item. minProperties: 1. */
export type UpdateLineItemRequestInput = ({
    /** Send null to clear description. minLength: 1. */
    "description"?: string | null;
    /**
     * Expected ship date in YYYY-MM-DD format. Send null to clear it. Omission preserves it.
     * Accepted on paid orders as the only field apart from expected_version. Repeating the current
     * date or clearing an already-null date leaves the order version unchanged. Format: date.
     * minLength: 1. Example: "2026-08-02".
     */
    "expected_ship_date"?: string | null;
    /**
     * Order version from the last order read, returned in data.version. Required when any of these
     * fields is present: modifiers, gift_card_recipient, gift_card_face_value_money, subscription.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Selects the face value of an unpaid, unfunded gift card line within its frozen offer's
     * custom_amount_bounds and reprices the order. Fixed-denomination offers accept only their
     * current value. Omission preserves the value; null is not allowed. Requires expected_version
     * from the order. Checkout credentials may send this field alone or together with
     * gift_card_recipient. Currency must be USD. Amount must be between 1 and 200000 minor units,
     * inclusive. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "gift_card_face_value_money"?: MoneyValueInput;
    /**
     * Replaces the recipient of an unfunded gift card purchase. Omission preserves it; null clears
     * it. Send expected_version from the order. Send null to clear gift_card_recipient. Requires
     * expected_version. anyOf[1] (Value): {@link GiftCardPurchaseRecipientPatchRequestInput}.
     * Changes to the recipient of a gift card purchase when updating a line item. Send null for
     * `name` or `message` to clear it. anyOf[2] (Value): null.
     */
    "gift_card_recipient"?: ((GiftCardPurchaseRecipientPatchRequestInput) | (null));
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
    /**
     * The line item's modifier selections. Sending the field replaces the current selections, so
     * include every modifier you want to keep. Requires `expected_version`. Flint reprices the
     * line item. Modifiers can't change once the line item has been paid for, and the request
     * returns 409. [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier
     * selection you supply on a line item: a catalog modifier by ID or a text modifier, with a
     * quantity.
     */
    "modifiers"?: Array<OrderLineItemModifierRequestModelInput>;
    /** Name of the line item. minLength: 1. */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Replacement quantity, from 1 through 9999. The extended line subtotal, including modifiers,
     * must satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999.
     */
    "quantity"?: number;
    /**
     * Selects an active subscription offer and reprices an unpaid line. Null selects a one-time
     * purchase. Omission preserves the selection. Requires expected_version from the order and
     * clears the delivery selection when terms change. Send null to clear subscription. Requires
     * expected_version. anyOf[1] (Value): {@link SubscribedLineRequestModelInput}. Makes an order
     * line a subscription purchase, with the subscription offer and billing interval. anyOf[2]
     * (Value): null.
     */
    "subscription"?: ((SubscribedLineRequestModelInput) | (null));
    /**
     * Tax settings for the line item. Tax settings for an order line item calculated by Flint or
     * supplied by you, including the line item tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedLineItemTaxRequestInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
});
/**
 * Sparse Location update. Omitted fields stay unchanged. address and coordinate are atomic value
 * objects. Sending address requires coordinate. Sending coordinate_source requires coordinate. A
 * non-null coordinate requires a non-null coordinate_source. coordinate: null clears both
 * coordinate and coordinate_source; coordinate_source must then be omitted or null. timezone and
 * coordinate may each be updated without address. geography_version advances only when address,
 * timezone, coordinate, or coordinate_source changes; version advances on every Location change.
 * minProperties: 1.
 */
export type UpdateLocationRequest = ({
    /**
     * Complete replacement postal address, validated as on create. Requires coordinate in the same
     * request, including null to clear it. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "address"?: AddressRequest;
    /**
     * Complete replacement coordinate. Send null to clear both coordinate and coordinate_source. A
     * non-null value requires coordinate_source in the same request. anyOf[1] (Value): {@link
     * LocationCoordinate}. A latitude and longitude for a merchant location. anyOf[2] (Value):
     * null.
     */
    "coordinate"?: ((LocationCoordinate) | (null));
    /**
     * Source of the coordinate sent in the same request. A non-null coordinate requires
     * merchant_supplied or geocoded. Send null only with coordinate: null to clear both fields.
     * Value enum: "merchant_supplied", "geocoded", null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Whether this Location accepts inventory allocation. Sending this field requires
     * commerce.inventory.allocation.write in addition to the route scope.
     */
    "inventory_allocation_enabled"?: boolean;
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
    /** Merchant-facing Location name, from 1 to 255 characters. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * New status for the Location. Omit it to leave the status unchanged. Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * IANA timezone for local schedules, validated as on create. Can be updated without address.
     * minLength: 1.
     */
    "timezone"?: string;
});
/**
 * Sparse Location update. Omitted fields stay unchanged. address and coordinate are atomic value
 * objects. Sending address requires coordinate. Sending coordinate_source requires coordinate. A
 * non-null coordinate requires a non-null coordinate_source. coordinate: null clears both
 * coordinate and coordinate_source; coordinate_source must then be omitted or null. timezone and
 * coordinate may each be updated without address. geography_version advances only when address,
 * timezone, coordinate, or coordinate_source changes; version advances on every Location change.
 * minProperties: 1.
 */
export type UpdateLocationRequestInput = ({
    /**
     * Complete replacement postal address, validated as on create. Requires coordinate in the same
     * request, including null to clear it. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "address"?: AddressRequestInput;
    /**
     * Complete replacement coordinate. Send null to clear both coordinate and coordinate_source. A
     * non-null value requires coordinate_source in the same request. anyOf[1] (Value): {@link
     * LocationCoordinateRequestInput}. A latitude and longitude for a merchant location. anyOf[2]
     * (Value): null.
     */
    "coordinate"?: ((LocationCoordinateRequestInput) | (null));
    /**
     * Source of the coordinate sent in the same request. A non-null coordinate requires
     * merchant_supplied or geocoded. Send null only with coordinate: null to clear both fields.
     * Value enum: "merchant_supplied", "geocoded", null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Whether this Location accepts inventory allocation. Sending this field requires
     * commerce.inventory.allocation.write in addition to the route scope.
     */
    "inventory_allocation_enabled"?: boolean;
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
    /** Merchant-facing Location name, from 1 to 255 characters. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * New status for the Location. Omit it to leave the status unchanged. Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * IANA timezone for local schedules, validated as on create. Can be updated without address.
     * minLength: 1.
     */
    "timezone"?: string;
});
/** The request body for: Update the current buyer profile. minProperties: 1. */
export type UpdateMeRequest = {
    /**
     * The active off_session payment method to use by default. Omit to leave unchanged; null
     * clears it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
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
/** The request body for: Swap subscription variant. minProperties: 1. */
export type UpdateMeSubscriptionLineItemRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * ID of the variant to swap the line to. It must be the line's own variant or one of the swap
     * variants its plan line allows. The line keeps its quantity and is priced from the variant's
     * catalog price for the subscription's customer. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/** The request body for: Swap subscription variant. minProperties: 1. */
export type UpdateMeSubscriptionLineItemRequestInput = UpdateMeSubscriptionLineItemRequest;
/** The request body for: Update subscription. minProperties: 1. */
export type UpdateMeSubscriptionRequest = ({
    /**
     * New billing interval unit. Send it with `billing_interval_count`; the pair must be one the
     * subscription's `billing_interval_options` offer. It applies from the next renewal that has
     * not been paid, and it is refused while a plan change is scheduled. Not accepted as null.
     * Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Number of `billing_interval` units between charges, from 1 to 365. Send it with
     * `billing_interval`. Not accepted as null. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Send `false` to undo a scheduled cancellation. `true` isn't accepted: schedule a
     * cancellation with POST /v1/me/subscriptions/{subscription_id}/cancel. Not accepted as null.
     * Value enum: false.
     */
    "cancel_at_period_end"?: boolean;
    /**
     * Replaces the whole saved delivery preference. The delivery method must be one the
     * subscription's plan offers. Not accepted as null. The delivery preference to set on a
     * subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequest;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * ID of the saved payment method to charge for renewals. It must belong to the subscription's
     * customer, be active, and allow charges without the buyer present. Not accepted as null.
     * minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string;
    /**
     * Send null to cancel a scheduled plan change and keep the current plan. Omit to leave it
     * unchanged. Schedule or replace through change-plan.
     */
    "scheduled_plan_change"?: null;
});
/** The request body for: Update subscription. minProperties: 1. */
export type UpdateMeSubscriptionRequestInput = ({
    /**
     * New billing interval unit. Send it with `billing_interval_count`; the pair must be one the
     * subscription's `billing_interval_options` offer. It applies from the next renewal that has
     * not been paid, and it is refused while a plan change is scheduled. Not accepted as null.
     * Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * Number of `billing_interval` units between charges, from 1 to 365. Send it with
     * `billing_interval`. Not accepted as null. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Send `false` to undo a scheduled cancellation. `true` isn't accepted: schedule a
     * cancellation with POST /v1/me/subscriptions/{subscription_id}/cancel. Not accepted as null.
     * Value enum: false.
     */
    "cancel_at_period_end"?: false;
    /**
     * Replaces the whole saved delivery preference. The delivery method must be one the
     * subscription's plan offers. Not accepted as null. The delivery preference to set on a
     * subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequestInput;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * ID of the saved payment method to charge for renewals. It must belong to the subscription's
     * customer, be active, and allow charges without the buyer present. Not accepted as null.
     * minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string;
    /**
     * Send null to cancel a scheduled plan change and keep the current plan. Omit to leave it
     * unchanged. Schedule or replace through change-plan.
     */
    "scheduled_plan_change"?: null;
});
/** The request body for: Update merchant. minProperties: 1. */
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
     * One bare email address with no display name or whitespace, a valid host, and at most 320
     * characters. Send null to clear it. This field is shared across live and all sandboxes.
     * Writing it requires a live-mode credential or a Dashboard session in any selected
     * environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required,
     * including for nulls and metadata changes. minLength: 1.
     */
    "email"?: string | null;
    /**
     * Requires api_version in the same request. The merchant’s current API version must match this
     * value; otherwise returns VERSION_CONFLICT with current_api_version. It guards only
     * api_version, which is shared across live and all sandboxes. Writing api_version requires a
     * live-mode credential or a Dashboard session in any selected environment. Test credentials
     * receive 403 FORBIDDEN with reason live_mode_required. minLength: 1.
     */
    "expected_api_version"?: string;
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
     * One bare support email address with no display name or whitespace, a valid host, and at most
     * 320 characters. Send null to clear it. This field is shared across live and all sandboxes.
     * Writing it requires a live-mode credential or a Dashboard session in any selected
     * environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required,
     * including for nulls and metadata changes. minLength: 1.
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
     * Business IANA time zone, such as America/New_York. Defaults for new invoice deadlines,
     * locations, notifications, and reporting use this zone unless a request supplies one.
     * Existing resources keep their saved time zone. Omit to leave unchanged; null and empty
     * values are not accepted. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "timezone"?: string;
    /**
     * Send null to clear it. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "website_url"?: string | null;
};
/** The request body for: Update merchant. minProperties: 1. */
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
     * One bare email address with no display name or whitespace, a valid host, and at most 320
     * characters. Send null to clear it. This field is shared across live and all sandboxes.
     * Writing it requires a live-mode credential or a Dashboard session in any selected
     * environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required,
     * including for nulls and metadata changes. minLength: 1.
     */
    "email"?: string | null;
    /**
     * Requires api_version in the same request. The merchant’s current API version must match this
     * value; otherwise returns VERSION_CONFLICT with current_api_version. It guards only
     * api_version, which is shared across live and all sandboxes. Writing api_version requires a
     * live-mode credential or a Dashboard session in any selected environment. Test credentials
     * receive 403 FORBIDDEN with reason live_mode_required. minLength: 1.
     */
    "expected_api_version"?: string;
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
     * One bare support email address with no display name or whitespace, a valid host, and at most
     * 320 characters. Send null to clear it. This field is shared across live and all sandboxes.
     * Writing it requires a live-mode credential or a Dashboard session in any selected
     * environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required,
     * including for nulls and metadata changes. minLength: 1.
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
     * Business IANA time zone, such as America/New_York. Defaults for new invoice deadlines,
     * locations, notifications, and reporting use this zone unless a request supplies one.
     * Existing resources keep their saved time zone. Omit to leave unchanged; null and empty
     * values are not accepted. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "timezone"?: string;
    /**
     * Send null to clear it. This field is shared across live and all sandboxes. Writing it
     * requires a live-mode credential or a Dashboard session in any selected environment. Test
     * credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and
     * metadata changes. minLength: 1.
     */
    "website_url"?: string | null;
};
/** The request body for: Update modifier group. minProperties: 1. */
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
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
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
/** The request body for: Update modifier group. minProperties: 1. */
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
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
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
/** The request body for: Update modifier set. minProperties: 1. */
export type UpdateModifierSetRequest = ({
    /**
     * Modifier set version last read by the caller. Required when modifier_groups is present.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
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
/** The request body for: Update modifier set. minProperties: 1. */
export type UpdateModifierSetRequestInput = ({
    /**
     * Modifier set version last read by the caller. Required when modifier_groups is present.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
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
/** The request body for: Update order charge. minProperties: 1. */
export type UpdateOrderChargeRequest = ({
    /**
     * Replacement fixed charge amount in the order currency. The amount and every computed order
     * amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount",
     * "subtotal_post_discount".
     */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Send null to clear description. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Send null to unlink the fulfillment. minLength: 1. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
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
    /**
     * What the buyer sees for this charge at checkout and on receipts. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges
     * use `amount_money` instead. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * How tax applies to this charge. Tax settings for an order charge calculated by Flint or
     * supplied by you, including the charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * What the charge is for. It classifies the charge in reporting and sets its default tax
     * category. Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee",
     * "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee", "installation_fee",
     * "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee",
     * "restocking_fee", "rush_fee", "other".
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
});
/** The request body for: Update order charge. minProperties: 1. */
export type UpdateOrderChargeRequestInput = ({
    /**
     * Replacement fixed charge amount in the order currency. The amount and every computed order
     * amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount",
     * "subtotal_post_discount".
     */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /** Send null to clear description. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Send null to unlink the fulfillment. minLength: 1. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
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
    /**
     * What the buyer sees for this charge at checkout and on receipts. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges
     * use `amount_money` instead. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * How tax applies to this charge. Tax settings for an order charge calculated by Flint or
     * supplied by you, including the charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxRequestInput;
    /**
     * What the charge is for. It classifies the charge in reporting and sets its default tax
     * category. Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee",
     * "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee", "installation_fee",
     * "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee",
     * "restocking_fee", "rush_fee", "other".
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
})
    & ({
    "amount_money"?: never;
} | {
    "percent"?: never;
});
/** The request body for: Update order. minProperties: 1. */
export type UpdateOrderRequest = ({
    /**
     * Buyer-provided note about this order, such as a gift message or purchase preference. Send
     * null to clear it. minLength: 1. maxLength: 1000.
     */
    "buyer_note"?: string | null;
    /**
     * Defaults to keep, preserving frozen prices. Send reprice with an explicit non-null
     * customer_id to refresh every catalog variant line on an open, unpaid order. Reassigning
     * resolves the new customer’s direct list, then segment list, then variant pricing.
     * Subscription-owned prices remain locked. If any catalog line’s variant is no longer for
     * sale, reprice is refused; remove that line first. Default: "keep". Value enum: "keep",
     * "reprice".
     */
    "catalog_price_behavior"?: "keep" | "reprice" | (string & {});
    /**
     * Customer to attach. Cannot be null or cleared. Reassignment requires catalog_price_behavior:
     * reprice, which resolves the new customer’s direct list, then segment list, then variant
     * pricing. minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Complete replacement delivery preference. Omit to leave unchanged. Requires
     * expected_version, orders-write and delivery-write. Send null to clear a provisional
     * direct-order selection, its charge and hold. Draft invoice orders are allowed until issue;
     * checkout-owned, subscription-owned, paid and locked orders are refused. Change delivery
     * separately from delivery_destination, handover and shipping charge calculations. anyOf[1]
     * (Value): {@link OrderDeliveryRequest}. Complete delivery preference to quote and select
     * together with the order's delivery charge and inventory hold. anyOf[2] (Value): null.
     */
    "delivery"?: ((OrderDeliveryRequest) | (null));
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
     * Order version from the last order read. Required when sending delivery or correcting a paid
     * delivery destination. Optional for other updates; when supplied, the update fails if the
     * order changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear
     * external_reference_id. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Carry-out handover to set or replace. Allowed while the order is open, nothing is paid, and
     * no checkout session or delivery selection controls its delivery. Can't be combined with
     * delivery_destination. Send null to clear it. anyOf[1] (Value): {@link OrderHandover}. Every
     * physical item is handed to the buyer at this location when the order is paid. Replaces a
     * delivery selection. anyOf[2] (Value): null.
     */
    "handover"?: ((OrderHandover) | (null));
    /**
     * Internal note about this order, visible only to the merchant. Send null to clear it.
     * minLength: 1. maxLength: 1000.
     */
    "internal_note"?: string | null;
    /**
     * How Flint chooses the Locations that fill this order's inventory: one fixed Location, an
     * allocation policy, or a specific policy revision. Where you want inventory routed from: a
     * fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
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
     * Requested tip to set or replace. Send null to clear the current requested tip. Refused with
     * ACTION_NOT_ALLOWED and reason payment_collected once a payment's capture has set its own
     * tip. anyOf[1] (Value): {@link CreateOrderTip}. Requested tip expressed as either a flat
     * amount or a percentage. Send exactly one of amount_money or percent. anyOf[2] (Value): null.
     */
    "requested_tip"?: ((CreateOrderTip) | (null) | (unknown));
    /**
     * Tax settings for the order. Changes to an order's tax settings: whether tax is enabled, the
     * calculation, the location, the exemption selection, and per-line-item or per-charge
     * calculations.
     */
    "tax"?: OrderTaxUpdateRequest;
});
/** The request body for: Update order. minProperties: 1. */
export type UpdateOrderRequestInput = ({
    /**
     * Buyer-provided note about this order, such as a gift message or purchase preference. Send
     * null to clear it. minLength: 1. maxLength: 1000.
     */
    "buyer_note"?: string | null;
    /**
     * Defaults to keep, preserving frozen prices. Send reprice with an explicit non-null
     * customer_id to refresh every catalog variant line on an open, unpaid order. Reassigning
     * resolves the new customer’s direct list, then segment list, then variant pricing.
     * Subscription-owned prices remain locked. If any catalog line’s variant is no longer for
     * sale, reprice is refused; remove that line first. Default: "keep". Value enum: "keep",
     * "reprice".
     */
    "catalog_price_behavior"?: "keep" | "reprice";
    /**
     * Customer to attach. Cannot be null or cleared. Reassignment requires catalog_price_behavior:
     * reprice, which resolves the new customer’s direct list, then segment list, then variant
     * pricing. minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Complete replacement delivery preference. Omit to leave unchanged. Requires
     * expected_version, orders-write and delivery-write. Send null to clear a provisional
     * direct-order selection, its charge and hold. Draft invoice orders are allowed until issue;
     * checkout-owned, subscription-owned, paid and locked orders are refused. Change delivery
     * separately from delivery_destination, handover and shipping charge calculations. anyOf[1]
     * (Value): {@link OrderDeliveryRequestInput}. Complete delivery preference to quote and select
     * together with the order's delivery charge and inventory hold. anyOf[2] (Value): null.
     */
    "delivery"?: ((OrderDeliveryRequestInput) | (null));
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
     * Order version from the last order read. Required when sending delivery or correcting a paid
     * delivery destination. Optional for other updates; when supplied, the update fails if the
     * order changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear
     * external_reference_id. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Carry-out handover to set or replace. Allowed while the order is open, nothing is paid, and
     * no checkout session or delivery selection controls its delivery. Can't be combined with
     * delivery_destination. Send null to clear it. anyOf[1] (Value): {@link
     * OrderHandoverRequestInput}. Every physical item is handed to the buyer at this location when
     * the order is paid. Replaces a delivery selection. anyOf[2] (Value): null.
     */
    "handover"?: ((OrderHandoverRequestInput) | (null));
    /**
     * Internal note about this order, visible only to the merchant. Send null to clear it.
     * minLength: 1. maxLength: 1000.
     */
    "internal_note"?: string | null;
    /**
     * How Flint chooses the Locations that fill this order's inventory: one fixed Location, an
     * allocation policy, or a specific policy revision. Where you want inventory routed from: a
     * fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
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
     * Requested tip to set or replace. Send null to clear the current requested tip. Refused with
     * ACTION_NOT_ALLOWED and reason payment_collected once a payment's capture has set its own
     * tip. anyOf[1] (Value): {@link CreateOrderTipInput}. Requested tip expressed as either a flat
     * amount or a percentage. Send exactly one of amount_money or percent. anyOf[2] (Value): null.
     */
    "requested_tip"?: ((CreateOrderTipInput) | (null));
    /**
     * Tax settings for the order. Changes to an order's tax settings: whether tax is enabled, the
     * calculation, the location, the exemption selection, and per-line-item or per-charge
     * calculations.
     */
    "tax"?: OrderTaxUpdateRequestInput;
});
/** The request body for: Update package item. minProperties: 1. */
export type UpdatePackageItemRequest = {
    /**
     * Bundle component to pack on this order line in the fulfillment. Every PATCH of a bundle line
     * requires its component ID, including when the fulfillment has only one component for the
     * line. Send null for a non-bundle line. minLength: 1. Example:
     * "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string | null;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
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
/** The request body for: Update package item. minProperties: 1. */
export type UpdatePackageItemRequestInput = {
    /**
     * Bundle component to pack on this order line in the fulfillment. Every PATCH of a bundle line
     * requires its component ID, including when the fulfillment has only one component for the
     * line. Send null for a non-bundle line. minLength: 1. Example:
     * "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string | null;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
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
/** The request body for: Update package. minProperties: 1. */
export type UpdatePackageRequest = {
    /** Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Dimensions of the package. anyOf[1] (Value): {@link Dimensions}. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. anyOf[2] (Value): null.
     */
    "dimensions"?: ((Dimensions) | (null));
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
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
     * Weight of the package. anyOf[1] (Value): {@link Weight}. A weight value in grams, kilograms,
     * ounces, or pounds, used in delivery profile configuration. anyOf[2] (Value): null.
     */
    "weight"?: ((Weight) | (null));
};
/** The request body for: Update package. minProperties: 1. */
export type UpdatePackageRequestInput = {
    /** Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Dimensions of the package. anyOf[1] (Value): {@link DimensionsRequestInput}. Package or item
     * dimensions as `length`, `width`, and `height` in the given `unit`. anyOf[2] (Value): null.
     */
    "dimensions"?: ((DimensionsRequestInput) | (null));
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
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
     * Weight of the package. anyOf[1] (Value): {@link WeightRequestInput}. A weight value in
     * grams, kilograms, ounces, or pounds, used in delivery profile configuration. anyOf[2]
     * (Value): null.
     */
    "weight"?: ((WeightRequestInput) | (null));
};
/** The request body for: Update partner app. minProperties: 1. */
export type UpdatePartnerAppRequest = ({
    /**
     * The API version to use for requests the app's tokens make without a Flint-Version header, as
     * a supported release date. A retired or unknown version is rejected, and `null` is rejected.
     * A change starts a 72-hour window in which `api_version_previous` offers a rollback. Send
     * expected_api_version to apply the change only if the current version is the one you read.
     * minLength: 1.
     */
    "api_version"?: string;
    /**
     * Set true to issue a client secret when secret authentication is disabled. The response
     * returns the secret once; setting true when already enabled does not rotate or reveal it. Set
     * false to end current and previous secrets immediately.
     */
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
     * Apply only if this matches the app’s current version. Required with permission_manifest,
     * platform_fee_cap, merchant_action_url and payment_splits; a mismatch returns HTTP 409
     * VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends an owner of a merchant this app created through a merchant signup when an
     * email asks them to act, such as to finish verification. An absolute `https` URL of at most
     * 2,048 characters, without userinfo or a fragment. It may have a query: Flint adds `flint_*`
     * query parameters and replaces any it already has. Once the app has a `platform_profile`, its
     * registrable domain must equal that of `platform_profile.website_url`, or the write fails
     * with 400 `INVALID_VALUE` at the field written. Setting it requests the `create_merchants`
     * platform capability. After Flint first approves or limits the platform, a change to another
     * registrable domain routes after 72 hours, and every change is emailed to the owning
     * merchant's owners and admins. Requires expected_version, because it decides where every
     * merchant the app created is sent from Flint's emails. Send null to clear it: emails then
     * lead to Flint, and new merchant signups are refused until you set it again. Format: uri.
     * minLength: 1. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     */
    "merchant_action_url"?: string | null;
    /**
     * The app's name, shown to merchants on the consent screen and in Flint's emails, at most 100
     * characters, without links or email addresses. minLength: 1. maxLength: 100.
     */
    "name"?: string;
    /**
     * Replaces the whole payment_splits declaration. Sellers that already approved keep the seller
     * terms they approved; merchants that authorize afterwards approve the new seller_terms_url.
     * Send null to remove it, which ends every seller's approval at once: a seller must authorize
     * the app again after you declare it again. Requires expected_version. Setting it doesn't need
     * platform approval, and an unchanged declaration changes nothing. anyOf[1] (Value): {@link
     * PartnerAppPaymentSplits}. The whole payment_splits declaration. Every field is required, and
     * a write replaces the declaration whole. anyOf[2] (Value): null.
     */
    "payment_splits"?: ((PartnerAppPaymentSplits) | (null));
    /**
     * Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them;
     * existing grants narrow immediately. Requires expected_version. [] (Value): {@link
     * PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a title,
     * a description, and the Flint scopes it grants.
     */
    "permission_manifest"?: Array<PartnerAppPermissionManifestEntry>;
    /**
     * Replaces the whole platform fee cap. Lowering percent or a maximum, or removing a currency,
     * lowers the cap every merchant approved at once. Raising either, or adding a currency,
     * changes no install: each merchant must authorize the app again to approve the higher cap.
     * Send null to remove the cap from the app and every install. Requires expected_version.
     * Setting it doesn't need platform approval, and an unchanged cap changes nothing. anyOf[1]
     * (Value): {@link PlatformFeeCap}. The whole platform fee cap. The largest platform fee on a
     * payment is percent of the amount it collects, rounded half up to the minor unit, plus the
     * currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1%
     * + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. percent
     * and maximum_fee_currency_options are required. A write replaces the cap whole, so a cap sent
     * without fixed_fee_currency_options has no fixed part. anyOf[2] (Value): null.
     */
    "platform_fee_cap"?: ((PlatformFeeCap) | (null));
    /**
     * Replaces the whole platform profile, which Flint reviews before it approves the app as a
     * platform. Every field is validated together. Send null to remove it while platform.status is
     * not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits
     * are recorded for Flint's review without changing platform.status. An unchanged profile
     * changes nothing. anyOf[1] (Value): {@link PartnerAppPlatformProfile}. The whole platform
     * profile. Every field is required except support_phone, and a write replaces the profile
     * whole. anyOf[2] (Value): null.
     */
    "platform_profile"?: ((PartnerAppPlatformProfile) | (null));
    /** Replaces the entire list of registered redirect URIs. [] (Value): string. minLength: 1. */
    "redirect_uris"?: Array<string>;
})
    & ((({
    /**
     * Set true to issue a client secret when secret authentication is disabled. The response
     * returns the secret once; setting true when already enabled does not rotate or reveal it. Set
     * false to end current and previous secrets immediately.
     */
    "client_secret_enabled": boolean;
})
    | ({
    /**
     * The app's name, shown to merchants on the consent screen and in Flint's emails, at most 100
     * characters, without links or email addresses. minLength: 1. maxLength: 100.
     */
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
    /**
     * The API version to use for requests the app's tokens make without a Flint-Version header, as
     * a supported release date. A retired or unknown version is rejected, and `null` is rejected.
     * A change starts a 72-hour window in which `api_version_previous` offers a rollback. Send
     * expected_api_version to apply the change only if the current version is the one you read.
     * minLength: 1.
     */
    "api_version": string;
})
    | ({
    /**
     * Replaces the whole platform profile, which Flint reviews before it approves the app as a
     * platform. Every field is validated together. Send null to remove it while platform.status is
     * not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits
     * are recorded for Flint's review without changing platform.status. An unchanged profile
     * changes nothing. anyOf[1] (Value): {@link PartnerAppPlatformProfile}. The whole platform
     * profile. Every field is required except support_phone, and a write replaces the profile
     * whole. anyOf[2] (Value): null.
     */
    "platform_profile": ((PartnerAppPlatformProfile) | (null));
})
    | ({
    /**
     * Replaces the whole platform fee cap. Lowering percent or a maximum, or removing a currency,
     * lowers the cap every merchant approved at once. Raising either, or adding a currency,
     * changes no install: each merchant must authorize the app again to approve the higher cap.
     * Send null to remove the cap from the app and every install. Requires expected_version.
     * Setting it doesn't need platform approval, and an unchanged cap changes nothing. anyOf[1]
     * (Value): {@link PlatformFeeCap}. The whole platform fee cap. The largest platform fee on a
     * payment is percent of the amount it collects, rounded half up to the minor unit, plus the
     * currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1%
     * + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. percent
     * and maximum_fee_currency_options are required. A write replaces the cap whole, so a cap sent
     * without fixed_fee_currency_options has no fixed part. anyOf[2] (Value): null.
     */
    "platform_fee_cap": ((PlatformFeeCap) | (null));
})
    | ({
    /**
     * Where Flint sends an owner of a merchant this app created through a merchant signup when an
     * email asks them to act, such as to finish verification. An absolute `https` URL of at most
     * 2,048 characters, without userinfo or a fragment. It may have a query: Flint adds `flint_*`
     * query parameters and replaces any it already has. Once the app has a `platform_profile`, its
     * registrable domain must equal that of `platform_profile.website_url`, or the write fails
     * with 400 `INVALID_VALUE` at the field written. Setting it requests the `create_merchants`
     * platform capability. After Flint first approves or limits the platform, a change to another
     * registrable domain routes after 72 hours, and every change is emailed to the owning
     * merchant's owners and admins. Requires expected_version, because it decides where every
     * merchant the app created is sent from Flint's emails. Send null to clear it: emails then
     * lead to Flint, and new merchant signups are refused until you set it again. Format: uri.
     * minLength: 1. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     */
    "merchant_action_url": string | null;
})
    | ({
    /**
     * Replaces the whole payment_splits declaration. Sellers that already approved keep the seller
     * terms they approved; merchants that authorize afterwards approve the new seller_terms_url.
     * Send null to remove it, which ends every seller's approval at once: a seller must authorize
     * the app again after you declare it again. Requires expected_version. Setting it doesn't need
     * platform approval, and an unchanged declaration changes nothing. anyOf[1] (Value): {@link
     * PartnerAppPaymentSplits}. The whole payment_splits declaration. Every field is required, and
     * a write replaces the declaration whole. anyOf[2] (Value): null.
     */
    "payment_splits": ((PartnerAppPaymentSplits) | (null));
})
    | (Record<string, unknown>)));
/** The request body for: Update partner app. minProperties: 1. */
export type UpdatePartnerAppRequestInput = ({
    /**
     * The API version to use for requests the app's tokens make without a Flint-Version header, as
     * a supported release date. A retired or unknown version is rejected, and `null` is rejected.
     * A change starts a 72-hour window in which `api_version_previous` offers a rollback. Send
     * expected_api_version to apply the change only if the current version is the one you read.
     * minLength: 1.
     */
    "api_version"?: string;
    /**
     * Set true to issue a client secret when secret authentication is disabled. The response
     * returns the secret once; setting true when already enabled does not rotate or reveal it. Set
     * false to end current and previous secrets immediately.
     */
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
     * Apply only if this matches the app’s current version. Required with permission_manifest,
     * platform_fee_cap, merchant_action_url and payment_splits; a mismatch returns HTTP 409
     * VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends an owner of a merchant this app created through a merchant signup when an
     * email asks them to act, such as to finish verification. An absolute `https` URL of at most
     * 2,048 characters, without userinfo or a fragment. It may have a query: Flint adds `flint_*`
     * query parameters and replaces any it already has. Once the app has a `platform_profile`, its
     * registrable domain must equal that of `platform_profile.website_url`, or the write fails
     * with 400 `INVALID_VALUE` at the field written. Setting it requests the `create_merchants`
     * platform capability. After Flint first approves or limits the platform, a change to another
     * registrable domain routes after 72 hours, and every change is emailed to the owning
     * merchant's owners and admins. Requires expected_version, because it decides where every
     * merchant the app created is sent from Flint's emails. Send null to clear it: emails then
     * lead to Flint, and new merchant signups are refused until you set it again. Format: uri.
     * minLength: 1. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     */
    "merchant_action_url"?: string | null;
    /**
     * The app's name, shown to merchants on the consent screen and in Flint's emails, at most 100
     * characters, without links or email addresses. minLength: 1. maxLength: 100.
     */
    "name"?: string;
    /**
     * Replaces the whole payment_splits declaration. Sellers that already approved keep the seller
     * terms they approved; merchants that authorize afterwards approve the new seller_terms_url.
     * Send null to remove it, which ends every seller's approval at once: a seller must authorize
     * the app again after you declare it again. Requires expected_version. Setting it doesn't need
     * platform approval, and an unchanged declaration changes nothing. anyOf[1] (Value): {@link
     * PartnerAppPaymentSplitsRequestInput}. The whole payment_splits declaration. Every field is
     * required, and a write replaces the declaration whole. anyOf[2] (Value): null.
     */
    "payment_splits"?: ((PartnerAppPaymentSplitsRequestInput) | (null));
    /**
     * Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them;
     * existing grants narrow immediately. Requires expected_version. [] (Value): {@link
     * PartnerAppPermissionManifestEntryRequestInput}. One permission a partner app can request,
     * with a title, a description, and the Flint scopes it grants.
     */
    "permission_manifest"?: Array<PartnerAppPermissionManifestEntryRequestInput>;
    /**
     * Replaces the whole platform fee cap. Lowering percent or a maximum, or removing a currency,
     * lowers the cap every merchant approved at once. Raising either, or adding a currency,
     * changes no install: each merchant must authorize the app again to approve the higher cap.
     * Send null to remove the cap from the app and every install. Requires expected_version.
     * Setting it doesn't need platform approval, and an unchanged cap changes nothing. anyOf[1]
     * (Value): {@link PlatformFeeCapRequestInput}. The whole platform fee cap. The largest
     * platform fee on a payment is percent of the amount it collects, rounded half up to the minor
     * unit, plus the currency's fixed part if it has one, and never more than the currency's
     * maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00
     * USD payment. percent and maximum_fee_currency_options are required. A write replaces the cap
     * whole, so a cap sent without fixed_fee_currency_options has no fixed part. anyOf[2] (Value):
     * null.
     */
    "platform_fee_cap"?: ((PlatformFeeCapRequestInput) | (null));
    /**
     * Replaces the whole platform profile, which Flint reviews before it approves the app as a
     * platform. Every field is validated together. Send null to remove it while platform.status is
     * not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits
     * are recorded for Flint's review without changing platform.status. An unchanged profile
     * changes nothing. anyOf[1] (Value): {@link PartnerAppPlatformProfileRequestInput}. The whole
     * platform profile. Every field is required except support_phone, and a write replaces the
     * profile whole. anyOf[2] (Value): null.
     */
    "platform_profile"?: ((PartnerAppPlatformProfileRequestInput) | (null));
    /** Replaces the entire list of registered redirect URIs. [] (Value): string. minLength: 1. */
    "redirect_uris"?: Array<string>;
})
    & ((({
    /**
     * Set true to issue a client secret when secret authentication is disabled. The response
     * returns the secret once; setting true when already enabled does not rotate or reveal it. Set
     * false to end current and previous secrets immediately.
     */
    "client_secret_enabled": boolean;
})
    | ({
    /**
     * The app's name, shown to merchants on the consent screen and in Flint's emails, at most 100
     * characters, without links or email addresses. minLength: 1. maxLength: 100.
     */
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
    /**
     * The API version to use for requests the app's tokens make without a Flint-Version header, as
     * a supported release date. A retired or unknown version is rejected, and `null` is rejected.
     * A change starts a 72-hour window in which `api_version_previous` offers a rollback. Send
     * expected_api_version to apply the change only if the current version is the one you read.
     * minLength: 1.
     */
    "api_version": string;
})
    | ({
    /**
     * Replaces the whole platform profile, which Flint reviews before it approves the app as a
     * platform. Every field is validated together. Send null to remove it while platform.status is
     * not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits
     * are recorded for Flint's review without changing platform.status. An unchanged profile
     * changes nothing. anyOf[1] (Value): {@link PartnerAppPlatformProfileRequestInput}. The whole
     * platform profile. Every field is required except support_phone, and a write replaces the
     * profile whole. anyOf[2] (Value): null.
     */
    "platform_profile": ((PartnerAppPlatformProfileRequestInput) | (null));
})
    | ({
    /**
     * Replaces the whole platform fee cap. Lowering percent or a maximum, or removing a currency,
     * lowers the cap every merchant approved at once. Raising either, or adding a currency,
     * changes no install: each merchant must authorize the app again to approve the higher cap.
     * Send null to remove the cap from the app and every install. Requires expected_version.
     * Setting it doesn't need platform approval, and an unchanged cap changes nothing. anyOf[1]
     * (Value): {@link PlatformFeeCapRequestInput}. The whole platform fee cap. The largest
     * platform fee on a payment is percent of the amount it collects, rounded half up to the minor
     * unit, plus the currency's fixed part if it has one, and never more than the currency's
     * maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00
     * USD payment. percent and maximum_fee_currency_options are required. A write replaces the cap
     * whole, so a cap sent without fixed_fee_currency_options has no fixed part. anyOf[2] (Value):
     * null.
     */
    "platform_fee_cap": ((PlatformFeeCapRequestInput) | (null));
})
    | ({
    /**
     * Where Flint sends an owner of a merchant this app created through a merchant signup when an
     * email asks them to act, such as to finish verification. An absolute `https` URL of at most
     * 2,048 characters, without userinfo or a fragment. It may have a query: Flint adds `flint_*`
     * query parameters and replaces any it already has. Once the app has a `platform_profile`, its
     * registrable domain must equal that of `platform_profile.website_url`, or the write fails
     * with 400 `INVALID_VALUE` at the field written. Setting it requests the `create_merchants`
     * platform capability. After Flint first approves or limits the platform, a change to another
     * registrable domain routes after 72 hours, and every change is emailed to the owning
     * merchant's owners and admins. Requires expected_version, because it decides where every
     * merchant the app created is sent from Flint's emails. Send null to clear it: emails then
     * lead to Flint, and new merchant signups are refused until you set it again. Format: uri.
     * minLength: 1. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     */
    "merchant_action_url": string | null;
})
    | ({
    /**
     * Replaces the whole payment_splits declaration. Sellers that already approved keep the seller
     * terms they approved; merchants that authorize afterwards approve the new seller_terms_url.
     * Send null to remove it, which ends every seller's approval at once: a seller must authorize
     * the app again after you declare it again. Requires expected_version. Setting it doesn't need
     * platform approval, and an unchanged declaration changes nothing. anyOf[1] (Value): {@link
     * PartnerAppPaymentSplitsRequestInput}. The whole payment_splits declaration. Every field is
     * required, and a write replaces the declaration whole. anyOf[2] (Value): null.
     */
    "payment_splits": ((PartnerAppPaymentSplitsRequestInput) | (null));
})));
/** The request body for: Update payment intent. minProperties: 1. */
export type UpdatePaymentIntentRequest = {
    /**
     * Payment amount. Can change only while status is requires_payment_method and before the first
     * confirmation attempt. Cannot be cleared. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Customer linked to this payment intent. Can change only while status is
     * requires_payment_method. Cannot be cleared. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
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
     * it to keep the current value. minLength: 1. maxLength: 255. Example: "warehouse-1842".
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
     * maxLength: 255. Example: "buyer@example.com".
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
/** The request body for: Update payment intent. minProperties: 1. */
export type UpdatePaymentIntentRequestInput = {
    /**
     * Payment amount. Can change only while status is requires_payment_method and before the first
     * confirmation attempt. Cannot be cleared. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Customer linked to this payment intent. Can change only while status is
     * requires_payment_method. Cannot be cleared. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
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
     * it to keep the current value. minLength: 1. maxLength: 255. Example: "warehouse-1842".
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
     * maxLength: 255. Example: "buyer@example.com".
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
/** The request body for: Update payment link. minProperties: 1. */
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
    /**
     * Custom text for checkouts started from this link. Changes to a payment link's custom
     * checkout text. Send null to clear a field.
     */
    "custom_text"?: PaymentLinkCustomTextPatchRequest;
    /**
     * Complete delivery method selection for the link. A link without delivery methods offers
     * settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an
     * empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null
     * and duplicate IDs are not accepted. Create, activation, and edits to items, delivery
     * methods, or inventory routing require explicit methods or checkout defaults to cover the
     * items' delivery profiles; otherwise ACTION_NOT_ALLOWED with reason configuration_required is
     * returned. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Text about what the link sells, returned to buyers when they open it. Send null to clear.
     * minLength: 1. maxLength: 2048.
     */
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
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Image shown to buyers with the link. Send null to clear. anyOf[1] (Value): {@link
     * ImageRequest}. An image you supply by `source_url`, with optional `alt` text and external
     * reference. anyOf[2] (Value): null.
     */
    "image"?: ((ImageRequest) | (null) | (unknown));
    /**
     * Message to show the buyer when the link is inactive. Send null to clear. minLength: 1.
     * maxLength: 500.
     */
    "inactive_message"?: string | null;
    /**
     * Routing source for tracked demand. Create, activation, and sellability edits require at
     * least one active routing location with inventory_allocation_enabled; temporary stock
     * shortages do not prevent these writes. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * The terms and policy links checkouts started from this link show the buyer. Changes to a
     * payment link's legal links and terms setting. Send null on a URL to clear it.
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
    /**
     * Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once
     * the limit is reached, resolving the link fails with a request error. It can't be set below
     * `completed_count`. Send null to clear. Format: int32.
     */
    "max_completions"?: number | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. Send null to clear. At most 44 pairs, because Flint reserves 6 of the order's 50
     * metadata pairs. Metadata keys and values plus Flint's metadata must fit within 32768 UTF-8
     * bytes. Custom fields don't count toward either limit. These limits apply to standard and
     * plan links and are checked against the merged configuration on update. This operation also
     * limits the metadata object you send, before merging: at most 50 keys, counting null
     * deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus
     * values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata
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
     * flint_ are reserved for Flint. anyOf[1].* (Value): string or null. minLength: 1. maxLength:
     * 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /** Name of the payment link. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Payment options for checkouts started from this link. Changes to a payment link's payment
     * settings. Send null on the payment note to clear it.
     */
    "payments"?: PaymentLinkPaymentPatchRequest;
    /**
     * Whether automatic promotions apply to checkouts started from this link and whether buyers
     * can enter promotion codes. Promotion settings for a checkout: whether automatic promotions
     * apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Changes to a payment link's hosted checkout destinations. Omit
     * a URL to leave it unchanged, or send null to clear it.
     */
    "redirects"?: PaymentLinkRedirectsPatchRequest;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve fails with
     * `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own,
     * except that an event link without sales_end_at stops selling at event_config.event_at. A
     * checkout opened before the end can still start payment for up to 15 minutes after it. Send
     * null to clear it. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "sales_end_at"?: string | null;
    /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Tax settings for checkouts started from this link. Whether tax is collected for a checkout
     * session or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * The title and colors for checkouts started from this link, over your branding settings.
     * Changes to a payment link's checkout theme. Send null on a field to clear it.
     */
    "theme"?: PaymentLinkThemePatchRequest;
    /**
     * Tip options for checkouts started from this link. Tip settings for a checkout: whether tips
     * are enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
});
/** The request body for: Update payment link. minProperties: 1. */
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
    /**
     * Custom text for checkouts started from this link. Changes to a payment link's custom
     * checkout text. Send null to clear a field.
     */
    "custom_text"?: PaymentLinkCustomTextPatchRequestInput;
    /**
     * Complete delivery method selection for the link. A link without delivery methods offers
     * settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an
     * empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null
     * and duplicate IDs are not accepted. Create, activation, and edits to items, delivery
     * methods, or inventory routing require explicit methods or checkout defaults to cover the
     * items' delivery profiles; otherwise ACTION_NOT_ALLOWED with reason configuration_required is
     * returned. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Text about what the link sells, returned to buyers when they open it. Send null to clear.
     * minLength: 1. maxLength: 2048.
     */
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
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Image shown to buyers with the link. Send null to clear. anyOf[1] (Value): {@link
     * ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and
     * external reference. anyOf[2] (Value): null.
     */
    "image"?: ((ImageRequestInput) | (null));
    /**
     * Message to show the buyer when the link is inactive. Send null to clear. minLength: 1.
     * maxLength: 500.
     */
    "inactive_message"?: string | null;
    /**
     * Routing source for tracked demand. Create, activation, and sellability edits require at
     * least one active routing location with inventory_allocation_enabled; temporary stock
     * shortages do not prevent these writes. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * The terms and policy links checkouts started from this link show the buyer. Changes to a
     * payment link's legal links and terms setting. Send null on a URL to clear it.
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
    /**
     * Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once
     * the limit is reached, resolving the link fails with a request error. It can't be set below
     * `completed_count`. Send null to clear. Format: int32.
     */
    "max_completions"?: number | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. Send null to clear. At most 44 pairs, because Flint reserves 6 of the order's 50
     * metadata pairs. Metadata keys and values plus Flint's metadata must fit within 32768 UTF-8
     * bytes. Custom fields don't count toward either limit. These limits apply to standard and
     * plan links and are checked against the merged configuration on update. This operation also
     * limits the metadata object you send, before merging: at most 50 keys, counting null
     * deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus
     * values. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned
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
     * starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null. minLength:
     * 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /** Name of the payment link. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Payment options for checkouts started from this link. Changes to a payment link's payment
     * settings. Send null on the payment note to clear it.
     */
    "payments"?: PaymentLinkPaymentPatchRequestInput;
    /**
     * Whether automatic promotions apply to checkouts started from this link and whether buyers
     * can enter promotion codes. Promotion settings for a checkout: whether automatic promotions
     * apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestInput;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Changes to a payment link's hosted checkout destinations. Omit
     * a URL to leave it unchanged, or send null to clear it.
     */
    "redirects"?: PaymentLinkRedirectsPatchRequestInput;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve fails with
     * `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own,
     * except that an event link without sales_end_at stops selling at event_config.event_at. A
     * checkout opened before the end can still start payment for up to 15 minutes after it. Send
     * null to clear it. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "sales_end_at"?: string | globalThis.Date | null;
    /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /**
     * Tax settings for checkouts started from this link. Whether tax is collected for a checkout
     * session or payment link.
     */
    "tax"?: CheckoutTaxConfigRequestInput;
    /**
     * The title and colors for checkouts started from this link, over your branding settings.
     * Changes to a payment link's checkout theme. Send null on a field to clear it.
     */
    "theme"?: PaymentLinkThemePatchRequestInput;
    /**
     * Tip options for checkouts started from this link. Tip settings for a checkout: whether tips
     * are enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfigRequestInput;
});
/** The request body for: Update payment method domain. minProperties: 1. */
export type UpdatePaymentMethodDomainRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Whether wallet buttons are on for the hostname. active registers it on your current payment
     * account and checks it again; inactive turns wallet buttons off. Value enum: "active",
     * "inactive".
     */
    "status": "active" | "inactive" | (string & {});
};
/** The request body for: Update payment method domain. minProperties: 1. */
export type UpdatePaymentMethodDomainRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Whether wallet buttons are on for the hostname. active registers it on your current payment
     * account and checks it again; inactive turns wallet buttons off. Value enum: "active",
     * "inactive".
     */
    "status": "active" | "inactive";
};
/** The request body for: Update payout destination metadata. minProperties: 1. */
export type UpdatePayoutDestinationRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
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
/** The request body for: Update payout destination metadata. minProperties: 1. */
export type UpdatePayoutDestinationRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
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
/** The request body for: Update payout settings. minProperties: 1. */
export type UpdatePayoutSettingsRequest = ({
    /**
     * Makes each listed destination the default for its currency, keyed by currency code.
     * Currencies you leave out keep their default. Each destination must be `active` and in that
     * currency. A currency's default can't be removed, only replaced, so values can't be null.
     * Requires expected_version. maxProperties: 20. * (Value): string. minLength: 1. pattern:
     * ^pdest_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_payout_destinations"?: Record<string, string>;
    /**
     * Days, 0 through 31, a payment stays pending before its funds become available, in place of
     * the account's default. Send null to go back to the default. Format: int32.
     */
    "delay_days_override"?: number | null;
    /**
     * Expected version of the payout settings. Required when sending default_payout_destinations,
     * minimum_balance_currency_options, monthly_payout_days, or weekly_payout_days, including
     * empty collections and supported null clears. A stale value returns 409 VERSION_CONFLICT;
     * retrieve the settings and rebuild the request before retrying. Format: uint64. minimum: 1.
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
     * Amount to keep in your balance instead of paying it out, keyed by uppercase ISO 4217
     * currency code, such as USD. Each value's currency must match its key and its amount can't be
     * negative. Set a currency to null to remove its minimum. * (Value): {@link MoneyValue} or
     * null. *.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. *.anyOf[2] (Value): null.
     */
    "minimum_balance_currency_options"?: Record<string, ((MoneyValue) | (null))>;
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
/** The request body for: Update payout settings. minProperties: 1. */
export type UpdatePayoutSettingsRequestInput = ({
    /**
     * Makes each listed destination the default for its currency, keyed by currency code.
     * Currencies you leave out keep their default. Each destination must be `active` and in that
     * currency. A currency's default can't be removed, only replaced, so values can't be null.
     * Requires expected_version. maxProperties: 20. * (Value): string. minLength: 1. pattern:
     * ^pdest_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_payout_destinations"?: Record<string, string>;
    /**
     * Days, 0 through 31, a payment stays pending before its funds become available, in place of
     * the account's default. Send null to go back to the default. Format: int32.
     */
    "delay_days_override"?: number | null;
    /**
     * Expected version of the payout settings. Required when sending default_payout_destinations,
     * minimum_balance_currency_options, monthly_payout_days, or weekly_payout_days, including
     * empty collections and supported null clears. A stale value returns 409 VERSION_CONFLICT;
     * retrieve the settings and rebuild the request before retrying. Format: uint64. minimum: 1.
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
     * Amount to keep in your balance instead of paying it out, keyed by uppercase ISO 4217
     * currency code, such as USD. Each value's currency must match its key and its amount can't be
     * negative. Set a currency to null to remove its minimum. * (Value): {@link MoneyValueInput}
     * or null. *.anyOf[1] (Value): {@link MoneyValueInput}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. *.anyOf[2] (Value): null.
     */
    "minimum_balance_currency_options"?: Record<string, ((MoneyValueInput) | (null))>;
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
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "customer_arrived_at"?: string | null;
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
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "picked_up_at"?: string | null;
    /**
     * Time by which the buyer should collect the order. Passing it does not change status or emit
     * an event automatically; the merchant decides how to follow up. Send null to clear it.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "pickup_due_at"?: string | null;
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
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string | null;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
    /**
     * Buyer vehicle description used for curbside handoff. Send null to clear it. minLength: 1.
     * maxLength: 500.
     */
    "vehicle_description"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
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
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "customer_arrived_at"?: string | globalThis.Date | null;
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
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "picked_up_at"?: string | globalThis.Date | null;
    /**
     * Time by which the buyer should collect the order. Passing it does not change status or emit
     * an event automatically; the merchant decides how to follow up. Send null to clear it.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "pickup_due_at"?: string | globalThis.Date | null;
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
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string | globalThis.Date | null;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
    /**
     * Buyer vehicle description used for curbside handoff. Send null to clear it. minLength: 1.
     * maxLength: 500.
     */
    "vehicle_description"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string | globalThis.Date | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string | globalThis.Date | null;
};
/** Change one price or its quantity schedule. Omitted fields remain unchanged. minProperties: 1. */
export type UpdatePriceListPriceRequest = ({
    /**
     * Version of this child price last read. Required when quantity_price_breaks is present. A
     * mismatch returns VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Replace the complete quantity schedule. Omit to preserve it; send [] to clear it. The
     * resulting complete schedule must remain valid. Include expected_version whenever
     * quantity_price_breaks is supplied. maxItems: 10. [] (Value): {@link QuantityPriceBreak}. A
     * net unit price that applies when one catalog line reaches minimum_quantity.
     */
    "quantity_price_breaks"?: Array<QuantityPriceBreak>;
    /**
     * New positive base net unit price in the list's currency. The resulting complete schedule
     * must remain valid. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
});
/** Change one price or its quantity schedule. Omitted fields remain unchanged. minProperties: 1. */
export type UpdatePriceListPriceRequestInput = ({
    /**
     * Version of this child price last read. Required when quantity_price_breaks is present. A
     * mismatch returns VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Replace the complete quantity schedule. Omit to preserve it; send [] to clear it. The
     * resulting complete schedule must remain valid. Include expected_version whenever
     * quantity_price_breaks is supplied. maxItems: 10. [] (Value): {@link
     * QuantityPriceBreakRequestInput}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks"?: Array<QuantityPriceBreakRequestInput>;
    /**
     * New positive base net unit price in the list's currency. The resulting complete schedule
     * must remain valid. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
});
/**
 * Fields to change on an unarchived price list. Omitted fields remain unchanged. minProperties: 1.
 */
export type UpdatePriceListRequest = ({
    /**
     * Complete set of Customer.segment labels to assign, at most 20. Each label can belong to only
     * one unarchived list, including inactive lists. On PATCH, omission preserves the set and []
     * clears it. Include expected_version whenever customer_segments is supplied. maxItems: 20.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "customer_segments"?: Array<string>;
    /**
     * Aggregate version last read. Required when customer_segments is present. A mismatch returns
     * VERSION_CONFLICT without changing the list. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to keep it unchanged;
     * send null to clear it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Metadata patch. Omit to keep metadata unchanged; send null to clear all metadata. anyOf[1]
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
    /** Name used to identify the price list. minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * Set active or inactive. To archive a price list, use DELETE /v1/price-lists/{price_list_id}.
     * Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
});
/**
 * Fields to change on an unarchived price list. Omitted fields remain unchanged. minProperties: 1.
 */
export type UpdatePriceListRequestInput = ({
    /**
     * Complete set of Customer.segment labels to assign, at most 20. Each label can belong to only
     * one unarchived list, including inactive lists. On PATCH, omission preserves the set and []
     * clears it. Include expected_version whenever customer_segments is supplied. maxItems: 20.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "customer_segments"?: Array<string>;
    /**
     * Aggregate version last read. Required when customer_segments is present. A mismatch returns
     * VERSION_CONFLICT without changing the list. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to keep it unchanged;
     * send null to clear it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Metadata patch. Omit to keep metadata unchanged; send null to clear all metadata. anyOf[1]
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
    /** Name used to identify the price list. minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * Set active or inactive. To archive a price list, use DELETE /v1/price-lists/{price_list_id}.
     * Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
});
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
