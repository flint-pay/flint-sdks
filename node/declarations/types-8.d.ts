import type { AddressRequestInput, AddressRequest } from './types-0.js';
import type {
    CreateInvoiceIssueRequestInput,
    CreateInvoiceQuickPayRequestInput,
    CreateInvoiceIssueRequest,
    CreateInvoiceQuickPayRequest,
    CreateInlineModifierGroupRequestInput
} from './types-7.js';
import type { InvoiceCollectionRequestInput, InvoiceCollectionRequest } from './types-28.js';
import type {
    InvoicePaymentDueRequestInput,
    InvoiceScheduleEntryWriteInput,
    InvoicePaymentDueRequest,
    InvoiceScheduleEntryWrite
} from './types-29.js';
import type { MetadataRequestInput, MetadataMap } from './types-32.js';
import type { LocationCoordinate, LineItemFulfillmentRequest, LineItemFulfillmentRequestInput, LegalSettings } from './types-30.js';
import type { LocationCoordinateRequestRequestInput, ManualDiscountRequest, ManualDiscountRequestInput } from './types-31.js';
import type { CreateSubscriptionPreviewRequestDeliveryOptions, CreateSubscriptionPreviewRequestNextRenewal } from './types-10.js';
import type { SubscriptionDeliveryDestinationRequestInput } from './types-48.js';
import type { TextModifierConfigRequest, ThemeConfig } from './types-50.js';
import type { MoneyValue, MoneyValueInput, ModifierOverride, ModifierOverrideInput, OrderCalculatedLineItemTax } from './types-33.js';
import type { PromotionRefRequest, PromotionRefRequestInput } from './types-40.js';
import type { Dimensions, DimensionsInput } from './types-17.js';
import type {
    GiftCardPurchaseRequest,
    ImageReferenceRequest,
    ImageReferenceRequestInput,
    ImageRequest,
    ImageRequestInput
} from './types-21.js';
import type {
    OrderDraftLineItemInventoryDemandRequest,
    OrderLineItemModifierRequest,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderLineItemModifierRequestInput,
    OrderPaymentSourceSelection,
    OrderPaymentSourceSelectionInput,
    OrderDeliveryDestinationRequest,
    OrderDeliveryDestinationRequestInput,
    OrderInventoryRoutingSourceRequestInput
} from './types-34.js';
import type { SubscribedLineRequest, SubscribedLineRequestInput } from './types-47.js';
import type { Weight, WeightInput } from './types-65.js';
import type { GiftCardPurchaseDetailsRequestInput } from './types-20.js';
import type { InventoryRoutingSource, InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-27.js';
import type { OrderTaxRequest, OrderTaxRequestInput } from './types-35.js';
import type {
    CheckoutGiftCardChallenge,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutBuyerFieldsRequestRequestInput,
    CheckoutPromotionConfigRequestRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutTaxConfigRequestRequestInput,
    CheckoutTipConfigRequestRequestInput
} from './types-4.js';
import type {
    PartnerAppCredentialJWKSURLRequestInput,
    PartnerAppCredentialPublicKeyRequest,
    PartnerAppCredentialPublicKeyRequestInput,
    PartnerAppCredentialWorkloadIdentityRequest,
    PartnerAppCredentialWorkloadIdentityRequestInput,
    PartnerAppPermissionManifestEntry
} from './types-36.js';
import type {
    PartnerAppPermissionManifestEntryRequestRequestInput,
    PaymentLinkCustomFieldRequest,
    PaymentLinkEventConfig,
    PaymentLinkCustomFieldRequestInput,
    PaymentLinkCustomTextConfigInput
} from './types-37.js';
import type {
    PaymentLinkLineItemRequest,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLineItemRequestInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkThemeConfigInput
} from './types-38.js';
/**
 * Shape $ (Value): {@link CreateInvoiceRequestOrderInput}. The `order` variant of
 * `CreateInvoiceRequest`.
 */
export type CreateInvoiceRequestOrderInput = ({
    /**
     * Shape $ (Value): Array of string. Additional addresses copied on the invoice email and every
     * reminder. Shape $[] (Value): string. minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * Shape $ (Value): {@link InvoiceCollectionRequestInput}. How the invoice is collected. Omit
     * it to use merchant_default. The invoice's collection object returns the resolved mode, and
     * you can send it back unchanged on update. How an invoice is collected, used when creating or
     * updating an invoice: a `mode`, an optional saved payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it
     * by exact match. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Fine print at the bottom of the invoice and PDF. Omit it to use the
     * invoice settings default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceIssueRequestInput}. Issue the invoice immediately after
     * creating it. An empty object uses merchant_default delivery. Cannot be combined with a
     * scheduled_issue_at timestamp. Options for issuing an invoice as you create it.
     * `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequestInput;
    /**
     * Shape $ (Value): string. Message to the customer, printed on the invoice and PDF. Omit it to
     * use the invoice settings default_memo. minLength: 1.
     */
    "memo"?: string;
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
    /**
     * Shape $ (Value): string. The open order to bill. It must have no payments, refunds, or other
     * active invoice. Send exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id": string;
    /**
     * Shape $ (Value): {@link InvoicePaymentDueRequestInput}. When the invoice is due. Omit it to
     * use merchant_default. The invoice's payment_due object returns the resolved type, and you
     * can send it back unchanged on update. Default: {"type":"merchant_default"}. When an invoice
     * is due, used when creating or updating an invoice: no due date, a fixed time, payment terms,
     * or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /**
     * Shape $ (Value): string. The buyer's purchase order number, printed on the invoice and PDF.
     * minLength: 1.
     */
    "po_number"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceQuickPayRequestInput}. Order details for an invoice
     * with no existing order. Flint creates the backing order from them. Send exactly one of
     * order_id or quick_pay. Inline order details for creating an invoice as `quick_pay`: line
     * items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequestInput;
    /**
     * Shape $ (Value): string. Where Flint emails the invoice and its reminders. Required at issue
     * when delivery resolves to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Shape $ (Value): string. Your reference for the invoice, printed on the invoice and PDF. Put
     * the buyer's purchase order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
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
     * recipient_email. Cannot be combined with issue. null is the same as omitting it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The
     * invoice and PDF print it as written, without timezone conversion. Format: date. minLength:
     * 1.
     */
    "service_date"?: string;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "order". */
    "type": "order";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "order". */
    "type": ("order") & ("order");
    /**
     * Shape $ (Value): string. The open order to bill. It must have no payments, refunds, or other
     * active invoice. Send exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id": string;
})
    & (({
    "quick_pay"?: never;
})));
/**
 * Shape $ (Value): {@link CreateInvoiceRequestQuickPay}. The `quick_pay` variant of
 * `CreateInvoiceRequest`.
 */
export type CreateInvoiceRequestQuickPay = ({
    /**
     * Shape $ (Value): Array of string. Additional addresses copied on the invoice email and every
     * reminder. Shape $[] (Value): string. minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * Shape $ (Value): {@link InvoiceCollectionRequest}. How the invoice is collected. Omit it to
     * use merchant_default. The invoice's collection object returns the resolved mode, and you can
     * send it back unchanged on update. How an invoice is collected, used when creating or
     * updating an invoice: a `mode`, an optional saved payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it
     * by exact match. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Fine print at the bottom of the invoice and PDF. Omit it to use the
     * invoice settings default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceIssueRequest}. Issue the invoice immediately after
     * creating it. An empty object uses merchant_default delivery. Cannot be combined with a
     * scheduled_issue_at timestamp. Options for issuing an invoice as you create it.
     * `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequest;
    /**
     * Shape $ (Value): string. Message to the customer, printed on the invoice and PDF. Omit it to
     * use the invoice settings default_memo. minLength: 1.
     */
    "memo"?: string;
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
    /**
     * Shape $ (Value): string. The open order to bill. It must have no payments, refunds, or other
     * active invoice. Send exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link InvoicePaymentDueRequest}. When the invoice is due. Omit it to use
     * merchant_default. The invoice's payment_due object returns the resolved type, and you can
     * send it back unchanged on update. Default: {"type":"merchant_default"}. When an invoice is
     * due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or
     * a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /**
     * Shape $ (Value): string. The buyer's purchase order number, printed on the invoice and PDF.
     * minLength: 1.
     */
    "po_number"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceQuickPayRequest}. Order details for an invoice with no
     * existing order. Flint creates the backing order from them. Send exactly one of order_id or
     * quick_pay. Inline order details for creating an invoice as `quick_pay`: line items,
     * discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequest;
    /**
     * Shape $ (Value): string. Where Flint emails the invoice and its reminders. Required at issue
     * when delivery resolves to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Shape $ (Value): string. Your reference for the invoice, printed on the invoice and PDF. Put
     * the buyer's purchase order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
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
     * recipient_email. Cannot be combined with issue. null is the same as omitting it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | null;
    /**
     * Shape $ (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The
     * invoice and PDF print it as written, without timezone conversion. Format: date. minLength:
     * 1.
     */
    "service_date"?: string;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "quick_pay". */
    "type": "quick_pay" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "quick_pay". */
    "type": "quick_pay" | (string & {});
    /**
     * Shape $ (Value): {@link CreateInvoiceQuickPayRequest}. Order details for an invoice with no
     * existing order. Flint creates the backing order from them. Send exactly one of order_id or
     * quick_pay. Inline order details for creating an invoice as `quick_pay`: line items,
     * discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequest;
}));
/**
 * Shape $ (Value): {@link CreateInvoiceRequestQuickPayInput}. The `quick_pay` variant of
 * `CreateInvoiceRequest`.
 */
export type CreateInvoiceRequestQuickPayInput = ({
    /**
     * Shape $ (Value): Array of string. Additional addresses copied on the invoice email and every
     * reminder. Shape $[] (Value): string. minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * Shape $ (Value): {@link InvoiceCollectionRequestInput}. How the invoice is collected. Omit
     * it to use merchant_default. The invoice's collection object returns the resolved mode, and
     * you can send it back unchanged on update. How an invoice is collected, used when creating or
     * updating an invoice: a `mode`, an optional saved payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it
     * by exact match. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Fine print at the bottom of the invoice and PDF. Omit it to use the
     * invoice settings default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceIssueRequestInput}. Issue the invoice immediately after
     * creating it. An empty object uses merchant_default delivery. Cannot be combined with a
     * scheduled_issue_at timestamp. Options for issuing an invoice as you create it.
     * `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequestInput;
    /**
     * Shape $ (Value): string. Message to the customer, printed on the invoice and PDF. Omit it to
     * use the invoice settings default_memo. minLength: 1.
     */
    "memo"?: string;
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
    /**
     * Shape $ (Value): string. The open order to bill. It must have no payments, refunds, or other
     * active invoice. Send exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link InvoicePaymentDueRequestInput}. When the invoice is due. Omit it to
     * use merchant_default. The invoice's payment_due object returns the resolved type, and you
     * can send it back unchanged on update. Default: {"type":"merchant_default"}. When an invoice
     * is due, used when creating or updating an invoice: no due date, a fixed time, payment terms,
     * or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /**
     * Shape $ (Value): string. The buyer's purchase order number, printed on the invoice and PDF.
     * minLength: 1.
     */
    "po_number"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceQuickPayRequestInput}. Order details for an invoice
     * with no existing order. Flint creates the backing order from them. Send exactly one of
     * order_id or quick_pay. Inline order details for creating an invoice as `quick_pay`: line
     * items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequestInput;
    /**
     * Shape $ (Value): string. Where Flint emails the invoice and its reminders. Required at issue
     * when delivery resolves to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Shape $ (Value): string. Your reference for the invoice, printed on the invoice and PDF. Put
     * the buyer's purchase order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
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
     * recipient_email. Cannot be combined with issue. null is the same as omitting it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The
     * invoice and PDF print it as written, without timezone conversion. Format: date. minLength:
     * 1.
     */
    "service_date"?: string;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "quick_pay". */
    "type": "quick_pay";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "quick_pay". */
    "type": ("quick_pay") & ("quick_pay");
    /**
     * Shape $ (Value): {@link CreateInvoiceQuickPayRequestInput}. Order details for an invoice
     * with no existing order. Flint creates the backing order from them. Send exactly one of
     * order_id or quick_pay. Inline order details for creating an invoice as `quick_pay`: line
     * items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequestInput;
})
    & (({
    "order_id"?: never;
})));
/** Shape $ (Value): {@link CreateLocationRequest}. The request body for: Create location. */
export type CreateLocationRequest = {
    /**
     * Shape $ (Value): {@link AddressRequest}. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "address": AddressRequest;
    /**
     * Shape $ (Value): {@link LocationCoordinate}. A latitude and longitude for a merchant
     * location.
     */
    "coordinate"?: LocationCoordinate;
    /**
     * Shape $ (Value): string or null. Send null to clear it. Value enum: "merchant_supplied",
     * "geocoded", null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether this Location accepts inventory allocation. Sending this
     * field requires commerce.inventory.allocation.write in addition to the route scope. Default:
     * false.
     */
    "inventory_allocation_enabled"?: boolean;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "timezone": string;
};
/** Shape $ (Value): {@link CreateLocationRequestInput}. The request body for: Create location. */
export type CreateLocationRequestInput = {
    /**
     * Shape $ (Value): {@link AddressRequestInput}. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none.
     */
    "address": AddressRequestInput;
    /**
     * Shape $ (Value): {@link LocationCoordinateRequestRequestInput}. A latitude and longitude for
     * a merchant location.
     */
    "coordinate"?: LocationCoordinateRequestRequestInput;
    /**
     * Shape $ (Value): string or null. Send null to clear it. Value enum: "merchant_supplied",
     * "geocoded", null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether this Location accepts inventory allocation. Sending this
     * field requires commerce.inventory.allocation.write in addition to the route scope. Default:
     * false.
     */
    "inventory_allocation_enabled"?: boolean;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): string. minLength: 1. */
    "timezone": string;
};
/**
 * Shape $ (Value): {@link CreateMeSubscriptionPreviewRequest}. The request body for: Preview
 * subscription.
 */
export type CreateMeSubscriptionPreviewRequest = ((CreateSubscriptionPreviewRequestDeliveryOptions)
    | (CreateSubscriptionPreviewRequestNextRenewal)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateMeSubscriptionPreviewRequestDeliveryOptionsInput}. The
 * `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`.
 */
export type CreateMeSubscriptionPreviewRequestDeliveryOptionsInput = {
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryDestinationRequestInput}. Where to deliver a
     * subscription: a saved customer address by ID, or a new address.
     */
    "destination": SubscriptionDeliveryDestinationRequestInput;
    /** Shape $ (Value): string.  Value enum: "delivery_options". */
    "mode": "delivery_options";
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
};
/**
 * Shape $ (Value): {@link CreateMeSubscriptionPreviewRequestInput}. The request body for: Preview
 * subscription.
 */
export type CreateMeSubscriptionPreviewRequestInput = ((CreateMeSubscriptionPreviewRequestDeliveryOptionsInput)
    | (CreateMeSubscriptionPreviewRequestNextRenewalInput));
/**
 * Shape $ (Value): {@link CreateMeSubscriptionPreviewRequestNextRenewalInput}. The `next_renewal`
 * variant of `CreateMeSubscriptionPreviewRequest`.
 */
export type CreateMeSubscriptionPreviewRequestNextRenewalInput = {
    /** Shape $ (Value): string.  Value enum: "next_renewal". */
    "mode": "next_renewal";
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
};
/**
 * Shape $ (Value): {@link CreateModifierGroupRequest}. The request body for: Create modifier
 * group.
 */
export type CreateModifierGroupRequest = {
    /**
     * Shape $ (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     * Default: false.
     */
    "allow_quantities"?: boolean;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Maximum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "max_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Maximum number of distinct modifiers buyers can select from a list
     * group. Omit it for no limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer string. Maximum combined whole-number quantity across selected list
     * modifiers; fractional quantities are not supported. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64.
     */
    "max_total_quantity"?: `${bigint}`;
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
    /**
     * Shape $ (Value): integer string. Minimum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "min_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Minimum number of distinct modifiers buyers must select from a
     * list group. Omit it to require no selections. A modifier set can override this value.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): string. Whether buyers choose from a list of modifiers or enter text. On
     * create, inferred as text when text configuration is supplied, otherwise list. Value enum:
     * "list", "text".
     */
    "modifier_group_type"?: "list" | "text" | (string & {});
    /**
     * Shape $ (Value): Array of {@link CreateModifierRequest}. Choices in a list group. Only
     * active modifiers whose set override's available is not false are offered to buyers. Text
     * groups do not have choices. Shape $[] (Value): {@link CreateModifierRequest}. A modifier to
     * create in a modifier group, with its name, price change, tax category, and default
     * selection.
     */
    "modifiers"?: Array<CreateModifierRequest>;
    /**
     * Shape $ (Value): string. Name of the modifier group shown to buyers. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
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
     * offered to buyers; archived groups remain readable and cannot be edited. Default: "active".
     * Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): {@link TextModifierConfigRequest}. Text entry rules for a text group. Use
     * text.required to require a value; list groups use min_selected instead. Settings for a text
     * modifier group when creating or updating one: required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequest;
};
/**
 * Shape $ (Value): {@link CreateModifierGroupRequestInput}. The request body for: Create modifier
 * group.
 */
export type CreateModifierGroupRequestInput = CreateInlineModifierGroupRequestInput;
/**
 * Shape $ (Value): {@link CreateModifierRequest}. A modifier to create in a modifier group, with
 * its name, price change, tax category, and default selection.
 */
export type CreateModifierRequest = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity selected by default. Used only when
     * the choice is available and selected_by_default is true. A modifier set can override this
     * value; fractional quantities are not supported. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
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
        | (string & {});
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
    /**
     * Shape $ (Value): string. Name of the choice shown to buyers. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): integer. Display position of the choice within its group; lower values
     * appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Whether this choice is selected when the buyer has not supplied
     * selections for the group. A modifier set can override this value; unavailable choices are
     * never selected by default. Default: false.
     */
    "selected_by_default"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier. Only active modifiers can be
     * offered to buyers. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): boolean. Whether this modifier's price is taxable. A modifier set can
     * override this value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount added to the item's unit price for each unit of
     * this modifier. A modifier set can override this value. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link CreateModifierRequestInput}. A modifier to create in a modifier group,
 * with its name, price change, tax category, and default selection.
 */
export type CreateModifierRequestInput = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity selected by default. Used only when
     * the choice is available and selected_by_default is true. A modifier set can override this
     * value; fractional quantities are not supported. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
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
        | "admission";
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
    /**
     * Shape $ (Value): string. Name of the choice shown to buyers. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): integer. Display position of the choice within its group; lower values
     * appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Whether this choice is selected when the buyer has not supplied
     * selections for the group. A modifier set can override this value; unavailable choices are
     * never selected by default. Default: false.
     */
    "selected_by_default"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier. Only active modifiers can be
     * offered to buyers. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): boolean. Whether this modifier's price is taxable. A modifier set can
     * override this value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Amount added to the item's unit price for each
     * unit of this modifier. A modifier set can override this value. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/**
 * Shape $ (Value): {@link CreateModifierSetGroupInputExisting}. The `existing` variant of
 * `CreateModifierSetGroupInput`.
 */
export type CreateModifierSetGroupInputExisting = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link CreateModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group"?: CreateModifierGroupRequest;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. References an independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
}));
/**
 * Shape $ (Value): {@link CreateModifierSetGroupInputExistingInput}. The `existing` variant of
 * `CreateModifierSetGroupInput`.
 */
export type CreateModifierSetGroupInputExistingInput = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link CreateInlineModifierGroupRequestInput}. Modifier group owned by this
     * set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group"?: CreateInlineModifierGroupRequestInput;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverrideInput}. Overrides for individual list
     * modifiers in this set. A choice is offered only when its status is active and its override's
     * available is not false. Shape $[] (Value): {@link ModifierOverrideInput}. Settings for one
     * modifier that apply only within a modifier set group, overriding the modifier group's own
     * values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing".
     */
    "source": "existing";
})
    & (({
    /**
     * Shape $ (Value): string. References an independent modifier group. Value enum: "existing".
     */
    "source": "existing";
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
})
    & ({
    "modifier_group"?: never;
}));
/**
 * Shape $ (Value): {@link CreateModifierSetGroupInputInline}. The `inline` variant of
 * `CreateModifierSetGroupInput`.
 */
export type CreateModifierSetGroupInputInline = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link CreateModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group": CreateModifierGroupRequest;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "inline".
     */
    "source": "inline" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. Defines a modifier group owned by this modifier set. Value enum:
     * "inline".
     */
    "source": "inline" | (string & {});
    /**
     * Shape $ (Value): {@link CreateModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group": CreateModifierGroupRequest;
}));
/**
 * Shape $ (Value): {@link CreateModifierSetGroupInputInlineInput}. The `inline` variant of
 * `CreateModifierSetGroupInput`.
 */
export type CreateModifierSetGroupInputInlineInput = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link CreateInlineModifierGroupRequestInput}. Modifier group owned by this
     * set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group": CreateInlineModifierGroupRequestInput;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverrideInput}. Overrides for individual list
     * modifiers in this set. A choice is offered only when its status is active and its override's
     * available is not false. Shape $[] (Value): {@link ModifierOverrideInput}. Settings for one
     * modifier that apply only within a modifier set group, overriding the modifier group's own
     * values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "inline".
     */
    "source": "inline";
})
    & (({
    /**
     * Shape $ (Value): string. Defines a modifier group owned by this modifier set. Value enum:
     * "inline".
     */
    "source": "inline";
    /**
     * Shape $ (Value): {@link CreateInlineModifierGroupRequestInput}. Modifier group owned by this
     * set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group": CreateInlineModifierGroupRequestInput;
})
    & ({
    "modifier_group_id"?: never;
}));
/**
 * Shape $ (Value): {@link CreateModifierSetGroupRequest}. A modifier group to add to a modifier
 * set, either an existing group by ID or one defined inline, chosen by `source`.
 */
export type CreateModifierSetGroupRequest = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link CreateModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group"?: CreateModifierGroupRequest;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
})
    & ((Exclude<CreateModifierSetGroupInputExisting & object, readonly unknown[]>)
    | (Exclude<CreateModifierSetGroupInputInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateModifierSetGroupRequestInput}. A modifier group to add to a
 * modifier set, either an existing group by ID or one defined inline, chosen by `source`.
 */
export type CreateModifierSetGroupRequestInput = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link CreateInlineModifierGroupRequestInput}. Modifier group owned by this
     * set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group"?: CreateInlineModifierGroupRequestInput;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverrideInput}. Overrides for individual list
     * modifiers in this set. A choice is offered only when its status is active and its override's
     * available is not false. Shape $[] (Value): {@link ModifierOverrideInput}. Settings for one
     * modifier that apply only within a modifier set group, overriding the modifier group's own
     * values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline";
})
    & ((Exclude<CreateModifierSetGroupInputExistingInput & object, readonly unknown[]>)
    | (Exclude<CreateModifierSetGroupInputInlineInput & object, readonly unknown[]>));
/** Shape $ (Value): {@link CreateModifierSetRequest}. The request body for: Create modifier set. */
export type CreateModifierSetRequest = {
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
    /**
     * Shape $ (Value): Array of {@link CreateModifierSetGroupRequest}. Ordered group entries in
     * this set, including references to reusable groups and groups owned by the set. Shape $[]
     * (Value): {@link CreateModifierSetGroupRequest}. A modifier group to add to a modifier set,
     * either an existing group by ID or one defined inline, chosen by `source`.
     */
    "modifier_groups"?: Array<CreateModifierSetGroupRequest>;
    /**
     * Shape $ (Value): string. Name used to identify this modifier set. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier set. Only active sets can be
     * offered to buyers; archived sets remain readable and cannot be edited. Default: "active".
     * Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateModifierSetRequestInput}. The request body for: Create modifier
 * set.
 */
export type CreateModifierSetRequestInput = {
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
    /**
     * Shape $ (Value): Array of {@link CreateModifierSetGroupRequestInput}. Ordered group entries
     * in this set, including references to reusable groups and groups owned by the set. Shape $[]
     * (Value): {@link CreateModifierSetGroupRequestInput}. A modifier group to add to a modifier
     * set, either an existing group by ID or one defined inline, chosen by `source`.
     */
    "modifier_groups"?: Array<CreateModifierSetGroupRequestInput>;
    /**
     * Shape $ (Value): string. Name used to identify this modifier set. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier set. Only active sets can be
     * offered to buyers; archived sets remain readable and cannot be edited. Default: "active".
     * Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
/**
 * Shape $ (Value): {@link CreateOrderDiscount}. A discount to apply when creating an order: either
 * a manual discount or a reference to a promotion.
 */
export type CreateOrderDiscount = ({
    /**
     * Shape $ (Value): {@link ManualDiscountRequest}. A discount you apply by hand to an order,
     * with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /**
     * Shape $ (Value): {@link PromotionRefRequest}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion"?: PromotionRefRequest;
})
    & ((Exclude<CreateOrderDiscountPromotion & object, readonly unknown[]>)
    | (Exclude<CreateOrderDiscountManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateOrderDiscountInput}. A discount to apply when creating an order:
 * either a manual discount or a reference to a promotion.
 */
export type CreateOrderDiscountInput = ({
    /**
     * Shape $ (Value): {@link ManualDiscountRequestInput}. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRefRequestInput}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion"?: PromotionRefRequestInput;
})
    & ((Exclude<CreateOrderDiscountPromotionInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderDiscountManualInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateOrderDiscountManual}. The `Manual` variant of
 * `CreateOrderDiscount`.
 */
export type CreateOrderDiscountManual = ({
    /**
     * Shape $ (Value): {@link ManualDiscountRequest}. A discount you apply by hand to an order,
     * with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual": ManualDiscountRequest;
    /**
     * Shape $ (Value): {@link PromotionRefRequest}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion"?: PromotionRefRequest;
});
/**
 * Shape $ (Value): {@link CreateOrderDiscountManualInput}. The `Manual` variant of
 * `CreateOrderDiscount`.
 */
export type CreateOrderDiscountManualInput = ({
    /**
     * Shape $ (Value): {@link ManualDiscountRequestInput}. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual": ManualDiscountRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRefRequestInput}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion"?: PromotionRefRequestInput;
})
    & (({
    "promotion"?: never;
}));
/**
 * Shape $ (Value): {@link CreateOrderDiscountPromotion}. The `Promotion` variant of
 * `CreateOrderDiscount`.
 */
export type CreateOrderDiscountPromotion = ({
    /**
     * Shape $ (Value): {@link ManualDiscountRequest}. A discount you apply by hand to an order,
     * with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /**
     * Shape $ (Value): {@link PromotionRefRequest}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion": PromotionRefRequest;
});
/**
 * Shape $ (Value): {@link CreateOrderDiscountPromotionInput}. The `Promotion` variant of
 * `CreateOrderDiscount`.
 */
export type CreateOrderDiscountPromotionInput = ({
    /**
     * Shape $ (Value): {@link ManualDiscountRequestInput}. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRefRequestInput}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion": PromotionRefRequestInput;
})
    & (({
    "manual"?: never;
}));
/**
 * Shape $ (Value): {@link CreateOrderLineItem}. A line item in a delivery preview: a catalog
 * variant, a bundle, or a custom item with a name and unit price.
 */
export type CreateOrderLineItem = ({
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequest}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRequest}. Buyer-selected face value and recipient
     * for a gift_card variant. The server freezes the offer and resolves consideration per unit.
     * Omit to purchase the reference denomination without a recipient. Gift card details for an
     * order line item: the `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /**
     * Shape $ (Value): {@link ImageReferenceRequest}. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequest;
    /**
     * Shape $ (Value): Array of {@link OrderDraftLineItemInventoryDemandRequest}. Shape $[]
     * (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
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
    /** Shape $ (Value): string. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link SubscribedLineRequest}. Selected recurring terms for this variant.
     * Lines with the same cadence start one subscription after payment. Makes an order line a
     * subscription purchase, with the subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Shape $ (Value): {@link OrderCalculatedLineItemTax}. Tax settings you supply for a draft
     * order line item: its tax category, whether it is taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /**
     * Shape $ (Value): string. Selects the type branch. Value enum: "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Shape $ (Value): {@link Dimensions}. Dimensions of one unit. Accepted only for custom lines
     * without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link Weight}. Weight of one unit. Accepted only for custom lines without
     * variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
})
    & ((Exclude<CreateOrderLineItemVariant & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemBundle & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateOrderLineItemBundle}. The `bundle` variant of
 * `CreateOrderLineItem`.
 */
export type CreateOrderLineItemBundle = ({
    /** Shape $ (Value): string. */
    "bundle_id": string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequest}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRequest}. Buyer-selected face value and recipient
     * for a gift_card variant. The server freezes the offer and resolves consideration per unit.
     * Omit to purchase the reference denomination without a recipient. Gift card details for an
     * order line item: the `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /**
     * Shape $ (Value): {@link ImageReferenceRequest}. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequest;
    /**
     * Shape $ (Value): Array of {@link OrderDraftLineItemInventoryDemandRequest}. Shape $[]
     * (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
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
    /** Shape $ (Value): string. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link SubscribedLineRequest}. Selected recurring terms for this variant.
     * Lines with the same cadence start one subscription after payment. Makes an order line a
     * subscription purchase, with the subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Shape $ (Value): {@link OrderCalculatedLineItemTax}. Tax settings you supply for a draft
     * order line item: its tax category, whether it is taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Shape $ (Value): {@link Dimensions}. Dimensions of one unit. Accepted only for custom lines
     * without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link Weight}. Weight of one unit. Accepted only for custom lines without
     * variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): any. */
    "tax"?: unknown;
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Shape $ (Value): string. */
    "bundle_id": string;
}));
/**
 * Shape $ (Value): {@link CreateOrderLineItemCustom}. The `custom` variant of
 * `CreateOrderLineItem`.
 */
export type CreateOrderLineItemCustom = ({
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequest}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRequest}. Buyer-selected face value and recipient
     * for a gift_card variant. The server freezes the offer and resolves consideration per unit.
     * Omit to purchase the reference denomination without a recipient. Gift card details for an
     * order line item: the `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /**
     * Shape $ (Value): {@link ImageReferenceRequest}. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequest;
    /**
     * Shape $ (Value): Array of {@link OrderDraftLineItemInventoryDemandRequest}. Shape $[]
     * (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
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
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link SubscribedLineRequest}. Selected recurring terms for this variant.
     * Lines with the same cadence start one subscription after payment. Makes an order line a
     * subscription purchase, with the subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Shape $ (Value): {@link OrderCalculatedLineItemTax}. Tax settings you supply for a draft
     * order line item: its tax category, whether it is taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "custom". */
    "type": "custom" | (string & {});
    /**
     * Shape $ (Value): {@link Dimensions}. Dimensions of one unit. Accepted only for custom lines
     * without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Shape $ (Value): {@link Weight}. Weight of one unit. Accepted only for custom lines without
     * variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequest}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
}));
/**
 * Shape $ (Value): {@link CreateOrderLineItemInputBundleInput}. The `bundle` variant of
 * `CreateOrderLineItemInput`.
 */
export type CreateOrderLineItemInputBundleInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequestInput}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestInput;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseDetailsRequestInput}. Buyer-selected face value and
     * recipient for a gift_card variant. The server freezes the offer and resolves consideration
     * per unit. Omit to purchase the reference denomination without a recipient. Gift card details
     * you supply for an order line item: the `face_value_money` and the `recipient` who receives
     * the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /**
     * Shape $ (Value): {@link ImageReferenceRequestInput}. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequestInput;
    /**
     * Shape $ (Value): Array of {@link OrderDraftLineItemInventoryDemandRequestInput}. Shape $[]
     * (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
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
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifierRequestInput}. Shape $[] (Value):
     * {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a line item: a
     * catalog modifier by ID or a text modifier, with a quantity. Shape $[].metadata (Optional):
     * {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced map. Omit it
     * for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are
     * 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50. Shape $[].modifier_id (Optional): string. ID of the existing modifier. Treated as an
     * opaque resource reference; accepted spellings follow resource ID validation. minLength: 1.
     * Shape $[].order_line_item_modifier_id (Optional): string. Existing selection ID to retain
     * during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Shape $[].quantity
     * (Optional): integer string. Whole-number quantity; fractional quantities are not supported.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape
     * $[].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. Shape $[].type (Required): string. Selects the type
     * branch. Value enum: "catalog", "text". Shape $[].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. Shape $[].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link SubscribedLineRequestInput}. Selected recurring terms for this
     * variant. Lines with the same cadence start one subscription after payment. Makes an order
     * line a subscription purchase, with the subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Shape $ (Value): {@link OrderDraftLineItemTaxRequestInput}. Tax settings you supply for a
     * draft order line item: its tax category, whether it is taxable, and an optional tax
     * calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "bundle". */
    "type": "bundle";
    /**
     * Shape $ (Value): {@link DimensionsInput}. Dimensions of one unit. Accepted only for custom
     * lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): {@link WeightInput}. Weight of one unit. Accepted only for custom lines
     * without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): any. */
    "tax"?: (({
        "taxable"?: never;
    }) & ({
        "line_item_tax_category"?: never;
    }));
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** Shape $ (Value): string. minLength: 1. */
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
    "unit_weight"?: never;
})
    & ({
    "unit_dimensions"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "image"?: never;
})
    & ({
    "inventory_demands"?: never;
})
    & ({
    "fulfillment"?: never;
})
    & ({
    "gift_card_purchase"?: never;
})));
/**
 * Shape $ (Value): {@link CreateOrderLineItemInputCustomInput}. The `custom` variant of
 * `CreateOrderLineItemInput`.
 */
export type CreateOrderLineItemInputCustomInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequestInput}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestInput;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseDetailsRequestInput}. Buyer-selected face value and
     * recipient for a gift_card variant. The server freezes the offer and resolves consideration
     * per unit. Omit to purchase the reference denomination without a recipient. Gift card details
     * you supply for an order line item: the `face_value_money` and the `recipient` who receives
     * the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /**
     * Shape $ (Value): {@link ImageReferenceRequestInput}. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequestInput;
    /**
     * Shape $ (Value): Array of {@link OrderDraftLineItemInventoryDemandRequestInput}. Shape $[]
     * (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
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
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifierRequestInput}. Shape $[] (Value):
     * {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a line item: a
     * catalog modifier by ID or a text modifier, with a quantity. Shape $[].metadata (Optional):
     * {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced map. Omit it
     * for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are
     * 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50. Shape $[].modifier_id (Optional): string. ID of the existing modifier. Treated as an
     * opaque resource reference; accepted spellings follow resource ID validation. minLength: 1.
     * Shape $[].order_line_item_modifier_id (Optional): string. Existing selection ID to retain
     * during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Shape $[].quantity
     * (Optional): integer string. Whole-number quantity; fractional quantities are not supported.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape
     * $[].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. Shape $[].type (Required): string. Selects the type
     * branch. Value enum: "catalog", "text". Shape $[].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. Shape $[].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link SubscribedLineRequestInput}. Selected recurring terms for this
     * variant. Lines with the same cadence start one subscription after payment. Makes an order
     * line a subscription purchase, with the subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Shape $ (Value): {@link OrderDraftLineItemTaxRequestInput}. Tax settings you supply for a
     * draft order line item: its tax category, whether it is taxable, and an optional tax
     * calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "custom". */
    "type": "custom";
    /**
     * Shape $ (Value): {@link DimensionsInput}. Dimensions of one unit. Accepted only for custom
     * lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Shape $ (Value): {@link WeightInput}. Weight of one unit. Accepted only for custom lines
     * without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "custom". */
    "type": ("custom") & ("custom");
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequestInput}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestInput;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})
    & ({
    "gift_card_purchase"?: never;
})));
/**
 * Shape $ (Value): {@link CreateOrderLineItemInputVariantInput}. The `variant` variant of
 * `CreateOrderLineItemInput`.
 */
export type CreateOrderLineItemInputVariantInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequestInput}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestInput;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseDetailsRequestInput}. Buyer-selected face value and
     * recipient for a gift_card variant. The server freezes the offer and resolves consideration
     * per unit. Omit to purchase the reference denomination without a recipient. Gift card details
     * you supply for an order line item: the `face_value_money` and the `recipient` who receives
     * the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /**
     * Shape $ (Value): {@link ImageReferenceRequestInput}. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequestInput;
    /**
     * Shape $ (Value): Array of {@link OrderDraftLineItemInventoryDemandRequestInput}. Shape $[]
     * (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
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
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifierRequestInput}. Shape $[] (Value):
     * {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a line item: a
     * catalog modifier by ID or a text modifier, with a quantity. Shape $[].metadata (Optional):
     * {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced map. Omit it
     * for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are
     * 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50. Shape $[].modifier_id (Optional): string. ID of the existing modifier. Treated as an
     * opaque resource reference; accepted spellings follow resource ID validation. minLength: 1.
     * Shape $[].order_line_item_modifier_id (Optional): string. Existing selection ID to retain
     * during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Shape $[].quantity
     * (Optional): integer string. Whole-number quantity; fractional quantities are not supported.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape
     * $[].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. Shape $[].type (Required): string. Selects the type
     * branch. Value enum: "catalog", "text". Shape $[].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. Shape $[].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link SubscribedLineRequestInput}. Selected recurring terms for this
     * variant. Lines with the same cadence start one subscription after payment. Makes an order
     * line a subscription purchase, with the subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Shape $ (Value): {@link OrderDraftLineItemTaxRequestInput}. Tax settings you supply for a
     * draft order line item: its tax category, whether it is taxable, and an optional tax
     * calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "variant". */
    "type": "variant";
    /**
     * Shape $ (Value): {@link DimensionsInput}. Dimensions of one unit. Accepted only for custom
     * lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): {@link WeightInput}. Weight of one unit. Accepted only for custom lines
     * without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Shape $ (Value): any. */
    "tax"?: (({
        "taxable"?: never;
    }) & ({
        "line_item_tax_category"?: never;
    }));
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": ("variant") & ("variant");
    /** Shape $ (Value): string. minLength: 1. */
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
    "unit_weight"?: never;
})
    & ({
    "unit_dimensions"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "image"?: never;
})
    & ({
    "inventory_demands"?: never;
})
    & ({
    "fulfillment"?: never;
})));
/**
 * Shape $ (Value): {@link CreateOrderLineItemRequestInput}. A line item to add to an order: a
 * catalog variant, a bundle, or a custom item with a name and unit price.
 */
export type CreateOrderLineItemRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequestInput}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestInput;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseDetailsRequestInput}. Buyer-selected face value and
     * recipient for a gift_card variant. The server freezes the offer and resolves consideration
     * per unit. Omit to purchase the reference denomination without a recipient. Gift card details
     * you supply for an order line item: the `face_value_money` and the `recipient` who receives
     * the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /**
     * Shape $ (Value): {@link ImageReferenceRequestInput}. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequestInput;
    /**
     * Shape $ (Value): Array of {@link OrderDraftLineItemInventoryDemandRequestInput}. Shape $[]
     * (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
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
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifierRequestInput}. Shape $[] (Value):
     * {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a line item: a
     * catalog modifier by ID or a text modifier, with a quantity. Shape $[].metadata (Optional):
     * {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced map. Omit it
     * for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are
     * 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50. Shape $[].modifier_id (Optional): string. ID of the existing modifier. Treated as an
     * opaque resource reference; accepted spellings follow resource ID validation. minLength: 1.
     * Shape $[].order_line_item_modifier_id (Optional): string. Existing selection ID to retain
     * during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Shape $[].quantity
     * (Optional): integer string. Whole-number quantity; fractional quantities are not supported.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape
     * $[].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. Shape $[].type (Required): string. Selects the type
     * branch. Value enum: "catalog", "text". Shape $[].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. Shape $[].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link SubscribedLineRequestInput}. Selected recurring terms for this
     * variant. Lines with the same cadence start one subscription after payment. Makes an order
     * line a subscription purchase, with the subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Shape $ (Value): {@link OrderDraftLineItemTaxRequestInput}. Tax settings you supply for a
     * draft order line item: its tax category, whether it is taxable, and an optional tax
     * calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /**
     * Shape $ (Value): string. Selects the type branch. Value enum: "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom";
    /**
     * Shape $ (Value): {@link DimensionsInput}. Dimensions of one unit. Accepted only for custom
     * lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): {@link WeightInput}. Weight of one unit. Accepted only for custom lines
     * without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<CreateOrderLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemInputCustomInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateOrderLineItemVariant}. The `variant` variant of
 * `CreateOrderLineItem`.
 */
export type CreateOrderLineItemVariant = ({
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequest}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRequest}. Buyer-selected face value and recipient
     * for a gift_card variant. The server freezes the offer and resolves consideration per unit.
     * Omit to purchase the reference denomination without a recipient. Gift card details for an
     * order line item: the `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /**
     * Shape $ (Value): {@link ImageReferenceRequest}. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequest;
    /**
     * Shape $ (Value): Array of {@link OrderDraftLineItemInventoryDemandRequest}. Shape $[]
     * (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
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
    /** Shape $ (Value): string. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link SubscribedLineRequest}. Selected recurring terms for this variant.
     * Lines with the same cadence start one subscription after payment. Makes an order line a
     * subscription purchase, with the subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Shape $ (Value): {@link OrderCalculatedLineItemTax}. Tax settings you supply for a draft
     * order line item: its tax category, whether it is taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Shape $ (Value): {@link Dimensions}. Dimensions of one unit. Accepted only for custom lines
     * without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link Weight}. Weight of one unit. Accepted only for custom lines without
     * variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /** Shape $ (Value): string. */
    "variant_id": string;
})
    & (({
    /** Shape $ (Value): any. */
    "tax"?: unknown;
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Shape $ (Value): string. */
    "variant_id": string;
}));
/**
 * Shape $ (Value): {@link CreateOrderPaymentIntentRequest}. The request body for: Create order
 * payment intent.
 */
export type CreateOrderPaymentIntentRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. automatic collects the payment when it is confirmed. manual places
     * a hold at confirmation that you capture or cancel later. Defaults to automatic. Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
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
    /**
     * Shape $ (Value): Array of string. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". Shape $[] (Value): string. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link OrderPaymentSourceSelection}. The payment source options you choose
     * when creating an order payment intent.
     */
    "payment_source_selection"?: OrderPaymentSourceSelection;
};
/**
 * Shape $ (Value): {@link CreateOrderPaymentIntentRequestInput}. The request body for: Create
 * order payment intent.
 */
export type CreateOrderPaymentIntentRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. automatic collects the payment when it is confirmed. manual places
     * a hold at confirmation that you capture or cancel later. Defaults to automatic. Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual";
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
    /**
     * Shape $ (Value): Array of string. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". Shape $[] (Value): string. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link OrderPaymentSourceSelectionInput}. The payment source options you
     * choose when creating an order payment intent.
     */
    "payment_source_selection"?: OrderPaymentSourceSelectionInput;
};
/** Shape $ (Value): {@link CreateOrderRequest}. The request body for: Create order. */
export type CreateOrderRequest = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 1000. */
    "buyer_note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRequest}. Shipment or local-delivery
     * destination for an order created without a delivery selection. The delivery destination you
     * set when creating or updating an order, with an address and an optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequest;
    /**
     * Shape $ (Value): Array of {@link CreateOrderDiscount}. Shape $[] (Value): {@link
     * CreateOrderDiscount}. A discount to apply when creating an order: either a manual discount
     * or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscount>;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 1000. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSource}. Where inventory for an order is allocated
     * from: a fixed location, an allocation policy, or a specific policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItem}. minItems: 1. Shape $[] (Value):
     * {@link CreateOrderLineItem}. A line item to add to an order: a catalog variant, a bundle, or
     * a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
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
    /**
     * Shape $ (Value): {@link CreateOrderTip}. Optional requested tip. Its effective amount must
     * satisfy the CreateOrderTip limit. Requested tip expressed as either a flat amount or a
     * percentage. Send exactly one of amount_money or percent.
     */
    "requested_tip"?: CreateOrderTip;
    /**
     * Shape $ (Value): {@link OrderTaxRequest}. Tax settings you supply when creating an order:
     * whether tax is enabled, how it is calculated, and the tax location.
     */
    "tax"?: OrderTaxRequest;
};
/** Shape $ (Value): {@link CreateOrderRequestInput}. The request body for: Create order. */
export type CreateOrderRequestInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 1000. */
    "buyer_note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRequestInput}. Shipment or local-delivery
     * destination for an order created without a delivery selection. The delivery destination you
     * set when creating or updating an order, with an address and an optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequestInput;
    /**
     * Shape $ (Value): Array of {@link CreateOrderDiscountInput}. Shape $[] (Value): {@link
     * CreateOrderDiscountInput}. A discount to apply when creating an order: either a manual
     * discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscountInput>;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 1000. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): {@link OrderInventoryRoutingSourceRequestInput}. Where inventory for an
     * order is allocated from: a fixed location, an allocation policy, or a specific policy
     * revision.
     */
    "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog
     * variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
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
    /**
     * Shape $ (Value): {@link CreateOrderTipInput}. Optional requested tip. Its effective amount
     * must satisfy the CreateOrderTip limit. Requested tip expressed as either a flat amount or a
     * percentage. Send exactly one of amount_money or percent.
     */
    "requested_tip"?: CreateOrderTipInput;
    /**
     * Shape $ (Value): {@link OrderTaxRequestInput}. Tax settings you supply when creating an
     * order: whether tax is enabled, how it is calculated, and the tax location.
     */
    "tax"?: OrderTaxRequestInput;
};
/**
 * Shape $ (Value): {@link CreateOrderTip}. Requested tip expressed as either a flat amount or a
 * percentage. Send exactly one of amount_money or percent.
 */
export type CreateOrderTip = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Flat requested tip in the order currency. The amount
     * must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param
     * requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or
     * the post-discount merchandise subtotal. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Selects the calculation type branch. Value enum: "amount",
     * "percent".
     */
    "calculation_type": "amount" | "percent" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "description"?: string;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): number. Requested tip percentage from 1 through 100, calculated from the
     * post-discount merchandise subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & ((Exclude<CreateOrderTipAmount & object, readonly unknown[]>)
    | (Exclude<CreateOrderTipPercent & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateOrderTipAmount}. Requested tip expressed as either a flat amount
 * or a percentage. Send exactly one of amount_money or percent.
 */
export type CreateOrderTipAmount = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Flat requested tip in the order currency. The amount
     * must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param
     * requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or
     * the post-discount merchandise subtotal. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Shape $ (Value): string. Selects the calculation type branch. Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "description"?: string;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): number. Requested tip percentage from 1 through 100, calculated from the
     * post-discount merchandise subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Flat requested tip in the order currency. The amount
     * must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param
     * requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or
     * the post-discount merchandise subtotal. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
}));
/**
 * Shape $ (Value): {@link CreateOrderTipAmountInput}. Requested tip expressed as either a flat
 * amount or a percentage. Send exactly one of amount_money or percent.
 */
export type CreateOrderTipAmountInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Flat requested tip in the order currency. The
     * amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param
     * requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or
     * the post-discount merchandise subtotal. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Shape $ (Value): string. Selects the calculation type branch. Value enum: "amount". */
    "calculation_type": "amount";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "description"?: string;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): number. Requested tip percentage from 1 through 100, calculated from the
     * post-discount merchandise subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "amount". */
    "calculation_type": ("amount") & ("amount");
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Flat requested tip in the order currency. The
     * amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param
     * requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or
     * the post-discount merchandise subtotal. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
})
    & (({
    "percent"?: never;
})));
/**
 * Shape $ (Value): {@link CreateOrderTipInput}. Requested tip expressed as either a flat amount or
 * a percentage. Send exactly one of amount_money or percent.
 */
export type CreateOrderTipInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Flat requested tip in the order currency. The
     * amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param
     * requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or
     * the post-discount merchandise subtotal. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Selects the calculation type branch. Value enum: "amount",
     * "percent".
     */
    "calculation_type": "amount" | "percent";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "description"?: string;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): number. Requested tip percentage from 1 through 100, calculated from the
     * post-discount merchandise subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & ((Exclude<CreateOrderTipAmountInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderTipPercentInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateOrderTipPercent}. Requested tip expressed as either a flat amount
 * or a percentage. Send exactly one of amount_money or percent.
 */
export type CreateOrderTipPercent = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Flat requested tip in the order currency. The amount
     * must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param
     * requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or
     * the post-discount merchandise subtotal. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Shape $ (Value): string. Selects the calculation type branch. Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "description"?: string;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): number. Requested tip percentage from 1 through 100, calculated from the
     * post-discount merchandise subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /**
     * Shape $ (Value): number. Requested tip percentage from 1 through 100, calculated from the
     * post-discount merchandise subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
}));
/**
 * Shape $ (Value): {@link CreateOrderTipPercentInput}. Requested tip expressed as either a flat
 * amount or a percentage. Send exactly one of amount_money or percent.
 */
export type CreateOrderTipPercentInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Flat requested tip in the order currency. The
     * amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param
     * requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or
     * the post-discount merchandise subtotal. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Shape $ (Value): string. Selects the calculation type branch. Value enum: "percent". */
    "calculation_type": "percent";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "description"?: string;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): number. Requested tip percentage from 1 through 100, calculated from the
     * post-discount merchandise subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "percent". */
    "calculation_type": ("percent") & ("percent");
    /**
     * Shape $ (Value): number. Requested tip percentage from 1 through 100, calculated from the
     * post-discount merchandise subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    "amount_money"?: never;
})));
/**
 * Shape $ (Value): {@link CreateOrganizationRequest}. The request body for: Create organization.
 */
export type CreateOrganizationRequest = {
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
     * Shape $ (Value): string. The organization to create this one under. It must be an active
     * organization you can manage. minLength: 1.
     */
    "parent_organization_id": string;
};
/**
 * Shape $ (Value): {@link CreateOrganizationRequestInput}. The request body for: Create
 * organization.
 */
export type CreateOrganizationRequestInput = {
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
     * Shape $ (Value): string. The organization to create this one under. It must be an active
     * organization you can manage. minLength: 1.
     */
    "parent_organization_id": string;
};
/** Shape $ (Value): {@link CreatePackageItemRequest}. The request body for: Create package item. */
export type CreatePackageItemRequest = {
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
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
};
/**
 * Shape $ (Value): {@link CreatePackageItemRequestInput}. The request body for: Create package
 * item.
 */
export type CreatePackageItemRequestInput = {
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
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CreatePartnerAppCredentialJWKSURLRequest}. The `jwks_url` variant of
 * `CreatePartnerAppCredentialRequest`.
 */
export type CreatePartnerAppCredentialJWKSURLRequest = {
    /**
     * Shape $ (Value): {@link CheckoutGiftCardChallenge}. A public HTTPS JSON Web Key Set URL.
     * Flint validates and fetches it before registering the credential.
     */
    "jwks_url": CheckoutGiftCardChallenge;
    /**
     * Shape $ (Value): string. Optional name to identify this credential. minLength: 1. maxLength:
     * 100.
     */
    "name"?: string;
    /** Shape $ (Value): string. Credential type. Value enum: "jwks_url". */
    "type": "jwks_url" | (string & {});
};
/**
 * Shape $ (Value): {@link CreatePartnerAppCredentialJWKSURLRequestInput}. The `jwks_url` variant
 * of `CreatePartnerAppCredentialRequest`.
 */
export type CreatePartnerAppCredentialJWKSURLRequestInput = {
    /**
     * Shape $ (Value): {@link PartnerAppCredentialJWKSURLRequestInput}. A public HTTPS JSON Web
     * Key Set URL. Flint validates and fetches it before registering the credential.
     */
    "jwks_url": PartnerAppCredentialJWKSURLRequestInput;
    /**
     * Shape $ (Value): string. Optional name to identify this credential. minLength: 1. maxLength:
     * 100.
     */
    "name"?: string;
    /** Shape $ (Value): string. Credential type. Value enum: "jwks_url". */
    "type": "jwks_url";
};
/**
 * Shape $ (Value): {@link CreatePartnerAppCredentialPublicKeyRequest}. The `public_key` variant of
 * `CreatePartnerAppCredentialRequest`.
 */
export type CreatePartnerAppCredentialPublicKeyRequest = {
    /**
     * Shape $ (Value): string. Optional name to identify this credential. minLength: 1. maxLength:
     * 100.
     */
    "name"?: string;
    /**
     * Shape $ (Value): {@link PartnerAppCredentialPublicKeyRequest}. The public JSON Web Key to
     * register for client authentication.
     */
    "public_key": PartnerAppCredentialPublicKeyRequest;
    /** Shape $ (Value): string. Credential type. Value enum: "public_key". */
    "type": "public_key" | (string & {});
};
/**
 * Shape $ (Value): {@link CreatePartnerAppCredentialPublicKeyRequestInput}. The `public_key`
 * variant of `CreatePartnerAppCredentialRequest`.
 */
export type CreatePartnerAppCredentialPublicKeyRequestInput = {
    /**
     * Shape $ (Value): string. Optional name to identify this credential. minLength: 1. maxLength:
     * 100.
     */
    "name"?: string;
    /**
     * Shape $ (Value): {@link PartnerAppCredentialPublicKeyRequestInput}. The public JSON Web Key
     * to register for client authentication.
     */
    "public_key": PartnerAppCredentialPublicKeyRequestInput;
    /** Shape $ (Value): string. Credential type. Value enum: "public_key". */
    "type": "public_key";
};
/**
 * Shape $ (Value): {@link CreatePartnerAppCredentialRequest}. An immutable public key, JWKS URL,
 * or workload identity credential for partner app client authentication.
 */
export type CreatePartnerAppCredentialRequest = ((CreatePartnerAppCredentialPublicKeyRequest)
    | (CreatePartnerAppCredentialJWKSURLRequest)
    | (CreatePartnerAppCredentialWorkloadIdentityRequest)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreatePartnerAppCredentialRequestInput}. An immutable public key, JWKS
 * URL, or workload identity credential for partner app client authentication.
 */
export type CreatePartnerAppCredentialRequestInput = ((CreatePartnerAppCredentialPublicKeyRequestInput)
    | (CreatePartnerAppCredentialJWKSURLRequestInput)
    | (CreatePartnerAppCredentialWorkloadIdentityRequestInput));
/**
 * Shape $ (Value): {@link CreatePartnerAppCredentialWorkloadIdentityRequest}. The
 * `workload_identity` variant of `CreatePartnerAppCredentialRequest`.
 */
export type CreatePartnerAppCredentialWorkloadIdentityRequest = {
    /**
     * Shape $ (Value): string. Optional name to identify this credential. minLength: 1. maxLength:
     * 100.
     */
    "name"?: string;
    /** Shape $ (Value): string. Credential type. Value enum: "workload_identity". */
    "type": "workload_identity" | (string & {});
    /**
     * Shape $ (Value): {@link PartnerAppCredentialWorkloadIdentityRequest}. An external OIDC
     * identity whose subject and claim conditions must match exactly the registered policy.
     */
    "workload_identity": PartnerAppCredentialWorkloadIdentityRequest;
};
/**
 * Shape $ (Value): {@link CreatePartnerAppCredentialWorkloadIdentityRequestInput}. The
 * `workload_identity` variant of `CreatePartnerAppCredentialRequest`.
 */
export type CreatePartnerAppCredentialWorkloadIdentityRequestInput = {
    /**
     * Shape $ (Value): string. Optional name to identify this credential. minLength: 1. maxLength:
     * 100.
     */
    "name"?: string;
    /** Shape $ (Value): string. Credential type. Value enum: "workload_identity". */
    "type": "workload_identity";
    /**
     * Shape $ (Value): {@link PartnerAppCredentialWorkloadIdentityRequestInput}. An external OIDC
     * identity whose subject and claim conditions must match exactly the registered policy.
     */
    "workload_identity": PartnerAppCredentialWorkloadIdentityRequestInput;
};
/** Shape $ (Value): {@link CreatePartnerAppRequest}. The request body for: Create partner app. */
export type CreatePartnerAppRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "api_version"?: string;
    /**
     * Shape $ (Value): boolean. Defaults to false: no client secret is generated. Register a
     * public key, JWKS URL, or workload identity to authenticate with a client assertion. Set true
     * explicitly to issue a client secret at creation. Default: false.
     */
    "client_secret_enabled"?: boolean;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "default_requested_permissions"?: Array<string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntry}. Shape $[] (Value):
     * {@link PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a
     * title, a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "redirect_uris": Array<string>;
};
/**
 * Shape $ (Value): {@link CreatePartnerAppRequestInput}. The request body for: Create partner app.
 */
export type CreatePartnerAppRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "api_version"?: string;
    /**
     * Shape $ (Value): boolean. Defaults to false: no client secret is generated. Register a
     * public key, JWKS URL, or workload identity to authenticate with a client assertion. Set true
     * explicitly to issue a client secret at creation. Default: false.
     */
    "client_secret_enabled"?: boolean;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "default_requested_permissions"?: Array<string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntryRequestRequestInput}.
     * Shape $[] (Value): {@link PartnerAppPermissionManifestEntryRequestRequestInput}. One
     * permission a partner app can request, with a title, a description, and the Flint scopes it
     * grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntryRequestRequestInput>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "redirect_uris": Array<string>;
};
/**
 * Shape $ (Value): {@link CreatePaymentIntentRequest}. The request body for: Create standalone
 * payment intent.
 */
export type CreatePaymentIntentRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount to request from the buyer, including any
     * tip_money. With capture_method manual, this is the hold amount, and you can capture less of
     * it later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. automatic collects the payment when it is confirmed. manual places
     * a hold at confirmation that you capture or cancel later. Defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string. Customer to link to this payment intent. minLength: 1. */
    "customer_id"?: string;
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
    /**
     * Shape $ (Value): Array of string. Payment options the buyer can use. Name at least one.
     * minItems: 1. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[]
     * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Shape $ (Value): string. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm. Required when payment_options includes affirm. It can't
     * contain credentials, a query string, or a fragment. Test mode also accepts http loopback
     * URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): string. Email address for this payment's receipt. When omitted, Flint uses
     * the customer's email. Format: email. minLength: 1. maxLength: 255.
     */
    "receipt_email"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Portion of amount_money that is a tip. Uses
     * amount_money's currency and is at most amount_money. Not accepted on order-linked payment
     * intents. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Why the bank debit is taken. Required when payment_options includes
     * ach_debit, and rejected with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose
     * otherwise. Value enum: "goods", "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
});
/**
 * Shape $ (Value): {@link CreatePaymentIntentRequestInput}. The request body for: Create
 * standalone payment intent.
 */
export type CreatePaymentIntentRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Amount to request from the buyer, including any
     * tip_money. With capture_method manual, this is the hold amount, and you can capture less of
     * it later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. automatic collects the payment when it is confirmed. manual places
     * a hold at confirmation that you capture or cancel later. Defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual";
    /** Shape $ (Value): string. Customer to link to this payment intent. minLength: 1. */
    "customer_id"?: string;
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
    /**
     * Shape $ (Value): Array of string. Payment options the buyer can use. Name at least one.
     * minItems: 1. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[]
     * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Shape $ (Value): string. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm. Required when payment_options includes affirm. It can't
     * contain credentials, a query string, or a fragment. Test mode also accepts http loopback
     * URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): string. Email address for this payment's receipt. When omitted, Flint uses
     * the customer's email. Format: email. minLength: 1. maxLength: 255.
     */
    "receipt_email"?: string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Portion of amount_money that is a tip. Uses
     * amount_money's currency and is at most amount_money. Not accepted on order-linked payment
     * intents. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. Why the bank debit is taken. Required when payment_options includes
     * ach_debit, and rejected with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose
     * otherwise. Value enum: "goods", "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other";
});
/** Shape $ (Value): {@link CreatePaymentLinkRequest}. The request body for: Create payment link. */
export type CreatePaymentLinkRequest = {
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
     * Shape $ (Value): Array of {@link PaymentLinkCustomFieldRequest}. maxItems: 20. Shape $[]
     * (Value): {@link PaymentLinkCustomFieldRequest}. A custom field you add to a payment link
     * when creating it.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldRequest>;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom text shown on a payment link's
     * checkout, such as the order summary message and shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Shape $ (Value): Array of string. Complete delivery method selection for the link. A link
     * without delivery methods offers settings.checkout.default_delivery_method_ids when its order
     * has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave
     * the selection unchanged. Null and duplicate IDs are not accepted. maxItems: 25. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. Shape $[] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Shape $ (Value): {@link PaymentLinkEventConfig}. Event settings you supply when creating an
     * event payment link.
     */
    "event_config"?: PaymentLinkEventConfig;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "image"?: ImageRequest;
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "inactive_message"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequest}. Where you want inventory routed
     * from: a fixed Location, an inventory allocation policy, or one policy revision, selected by
     * `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Shape $ (Value): {@link LegalSettings}. Legal links on a payment link: contract, refund
     * policy, shipping policy, and terms of service URLs, and whether buyers must accept the
     * terms.
     */
    "legal"?: LegalSettings;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkLineItemRequest}. Shape $[] (Value): {@link
     * PaymentLinkLineItemRequest}. A line item you add to a payment link when creating it, from a
     * catalog variant, a bundle, or an ad hoc name and price.
     */
    "line_items"?: Array<PaymentLinkLineItemRequest>;
    /** Shape $ (Value): integer. Format: int32. */
    "max_completions"?: number;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Metadata pairs plus custom fields must not exceed 44; 6 of the
     * order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and
     * largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and
     * textarea answers are budgeted at four bytes per Unicode code point, including optional
     * fields. Each checkbox answer is budgeted at five bytes (the length of false). If the
     * combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or
     * reduce metadata. These limits apply to standard and plan links and are checked against the
     * merged configuration on update. maxProperties: 44. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Shape $.* (Value): string. minLength: 1. maxLength: 4096.
     */
    "metadata"?: (Exclude<MetadataMap & object, readonly unknown[]>);
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): string. Payment link type. Omit to use standard. Explicit values must be
     * standard, donation, or event; empty or padded values are invalid. Default: "standard". Value
     * enum: "standard", "donation", "event".
     */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfig}. Payment settings on a payment link: the
     * enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfig}. Promotion settings for a checkout: whether
     * automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where checkout sessions started from this
     * payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): string. RFC3339 timestamp after which the link stops starting checkouts and
     * resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except
     * that an event link without sales_end_at stops selling at event_config.event_at. A checkout
     * opened before the end can still start payment for up to 15 minutes after it. Format:
     * date-time. minLength: 1.
     */
    "sales_end_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutTaxConfig}. Whether tax is collected for a checkout session
     * or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * Shape $ (Value): {@link ThemeConfig}. Theme settings for a payment link's checkout: accent
     * color, primary color, and title.
     */
    "theme"?: ThemeConfig;
    /**
     * Shape $ (Value): {@link CheckoutTipConfig}. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
};
/**
 * Shape $ (Value): {@link CreatePaymentLinkRequestInput}. The request body for: Create payment
 * link.
 */
export type CreatePaymentLinkRequestInput = {
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
     * Shape $ (Value): Array of {@link PaymentLinkCustomFieldRequestInput}. maxItems: 20. Shape
     * $[] (Value): {@link PaymentLinkCustomFieldRequestInput}. A custom field you add to a payment
     * link when creating it.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldRequestInput>;
    /**
     * Shape $ (Value): {@link PaymentLinkCustomTextConfigInput}. Custom text shown on a payment
     * link's checkout, such as the order summary message and shipping address label.
     */
    "custom_text"?: PaymentLinkCustomTextConfigInput;
    /**
     * Shape $ (Value): Array of string. Complete delivery method selection for the link. A link
     * without delivery methods offers settings.checkout.default_delivery_method_ids when its order
     * has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave
     * the selection unchanged. Null and duplicate IDs are not accepted. maxItems: 25. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): Array of {@link MoneyValueInput}. Shape $[] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValueInput>;
    /**
     * Shape $ (Value): {@link PaymentLinkEventConfigRequestInput}. Event settings you supply when
     * creating an event payment link.
     */
    "event_config"?: PaymentLinkEventConfigRequestInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
     * optional `alt` text and external reference.
     */
    "image"?: ImageRequestInput;
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "inactive_message"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequestInput}. Where you want inventory routed
     * from: a fixed Location, an inventory allocation policy, or one policy revision, selected by
     * `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): {@link PaymentLinkLegalConfigInput}. Legal links on a payment link:
     * contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must
     * accept the terms.
     */
    "legal"?: PaymentLinkLegalConfigInput;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkLineItemRequestInput}. Shape $[] (Value): {@link
     * PaymentLinkLineItemRequestInput}. A line item you add to a payment link when creating it,
     * from a catalog variant, a bundle, or an ad hoc name and price.
     */
    "line_items"?: Array<PaymentLinkLineItemRequestInput>;
    /** Shape $ (Value): integer. Format: int32. */
    "max_completions"?: number;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Metadata pairs plus custom fields must not exceed 44; 6 of
     * the order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys
     * and largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and
     * textarea answers are budgeted at four bytes per Unicode code point, including optional
     * fields. Each checkbox answer is budgeted at five bytes (the length of false). If the
     * combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or
     * reduce metadata. These limits apply to standard and plan links and are checked against the
     * merged configuration on update. maxProperties: 44. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Shape $.* (Value): string. minLength: 1. maxLength: 4096.
     */
    "metadata"?: (Exclude<MetadataRequestInput & object, readonly unknown[]>);
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): string. Payment link type. Omit to use standard. Explicit values must be
     * standard, donation, or event; empty or padded values are invalid. Default: "standard". Value
     * enum: "standard", "donation", "event".
     */
    "payment_link_type"?: "standard" | "donation" | "event";
    /**
     * Shape $ (Value): {@link PaymentLinkPaymentConfigInput}. Payment settings on a payment link:
     * the enabled payment options and a note shown with payment.
     */
    "payments"?: PaymentLinkPaymentConfigInput;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfigRequestRequestInput}. Promotion settings for
     * a checkout: whether automatic promotions apply and whether the buyer can apply promotion
     * codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutRedirectsRequestInput}. Where checkout sessions started from
     * this payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Shape $ (Value): string. RFC3339 timestamp after which the link stops starting checkouts and
     * resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except
     * that an event link without sales_end_at stops selling at event_config.event_at. A checkout
     * opened before the end can still start payment for up to 15 minutes after it. Format:
     * date-time. minLength: 1.
     */
    "sales_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutTaxConfigRequestRequestInput}. Whether tax is collected for
     * a checkout session or payment link.
     */
    "tax"?: CheckoutTaxConfigRequestRequestInput;
    /**
     * Shape $ (Value): {@link PaymentLinkThemeConfigInput}. Theme settings for a payment link's
     * checkout: accent color, primary color, and title.
     */
    "theme"?: PaymentLinkThemeConfigInput;
    /**
     * Shape $ (Value): {@link CheckoutTipConfigRequestRequestInput}. Tip settings for a checkout:
     * whether tips are enabled, the percent or fixed amount options, the default tip, and custom
     * tips.
     */
    "tip"?: CheckoutTipConfigRequestRequestInput;
};
/**
 * Shape $ (Value): {@link CreatePaymentMethodDomainRequest}. The request body for: Register
 * payment method domain.
 */
export type CreatePaymentMethodDomainRequest = {
    /**
     * Shape $ (Value): string. Exact fully-qualified hostname to register. Limited to 253
     * characters (Unicode code points) before trimming whitespace and lowercasing. The resulting
     * hostname uses ASCII characters only. Do not include a scheme, path, port, IP address, or
     * wildcard. minLength: 1. maxLength: 253.
     */
    "domain_name": (string);
};
