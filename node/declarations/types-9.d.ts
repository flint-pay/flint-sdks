import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type {
    CreateInvoiceIssueRequest,
    CreateInvoiceQuickPayRequest,
    CreateInvoiceIssueRequestInput,
    CreateInvoiceQuickPayRequestInput,
    CreateInlineModifierGroupRequestInput
} from './types-8.js';
import type { InvoiceCollectionRequest, InvoiceCollectionRequestInput } from './types-29.js';
import type { InvoicePaymentDueRequest, InvoicePaymentDueRequestInput } from './types-30.js';
import type { InvoiceScheduleEntryWrite, InvoiceScheduleEntryWriteInput } from './types-31.js';
import type {
    MetadataMap,
    MetadataRequestInput,
    MoneyValue,
    MoneyValueInput,
    ModifierOverride,
    ModifierOverrideInput
} from './types-35.js';
import type {
    LocationCoordinate,
    LocationCoordinateRequestInput,
    ManualDiscountRequest,
    ManualDiscountRequestInput
} from './types-33.js';
import type { CreateSubscriptionPreviewRequestDeliveryOptions, CreateSubscriptionPreviewRequestNextRenewal } from './types-11.js';
import type { SubscriptionDeliveryDestinationRequestInput, SubscribedLineRequest, SubscribedLineRequestInput } from './types-54.js';
import type { TextModifierConfigRequest, ThemeConfig } from './types-58.js';
import type { PromotionRefRequest, PromotionRefRequestInput } from './types-46.js';
import type { Dimensions, DimensionsInput } from './types-20.js';
import type { GiftCardPurchaseRequest, GiftCardPurchaseDetailsRequestInput } from './types-24.js';
import type { ImageReferenceRequest, ImageReferenceRequestInput, ImageRequest, ImageRequestInput } from './types-25.js';
import type { LineItemFulfillmentRequest, LineItemFulfillmentRequestInput, LegalSettings } from './types-32.js';
import type { OrderCalculatedLineItemTax } from './types-36.js';
import type {
    OrderDraftLineItemInventoryDemandRequest,
    OrderLineItemModifierRequest,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderLineItemModifierRequestInput,
    OrderDeliveryDestinationRequest,
    OrderDeliveryDestinationRequestInput,
    OrderInventoryRoutingSourceRequestInput
} from './types-37.js';
import type { Weight, WeightInput } from './types-62.js';
import type {
    OrderPaymentSourceSelection,
    OrderPaymentSourceSelectionInput,
    OrderTaxRequest,
    OrderTaxRequestInput
} from './types-38.js';
import type { InventoryRoutingSource, InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-28.js';
import type {
    CheckoutGiftCardChallenge,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutBuyerFieldsRequestInput,
    CheckoutPromotionConfigRequestInput
} from './types-4.js';
import type {
    PartnerAppCredentialJWKSURLRequestInput,
    PartnerAppCredentialPublicKeyRequest,
    PartnerAppCredentialPublicKeyRequestInput,
    PartnerAppCredentialWorkloadIdentityRequest,
    PartnerAppCredentialWorkloadIdentityRequestInput,
    PartnerAppPermissionManifestEntry,
    PartnerAppPermissionManifestEntryRequestInput
} from './types-40.js';
import type {
    CheckoutRedirects,
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutRedirectsRequestInput,
    CheckoutTaxConfigRequestInput,
    CheckoutTipConfigRequestInput
} from './types-5.js';
import type {
    PaymentLinkCustomFieldRequest,
    PaymentLinkEventConfig,
    PaymentLinkLineItemRequest,
    PaymentLinkCustomFieldRequestInput,
    PaymentLinkCustomTextConfigInput,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLineItemRequestInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkThemeConfigInput
} from './types-42.js';
/** The `quick_pay` variant of `CreateInvoiceRequest`. */
export type CreateInvoiceRequestQuickPay = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequest;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id"?: string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequest;
    /**
     * Where Flint emails the invoice and its reminders. Required at issue when delivery resolves
     * to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
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
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1.
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "quick_pay". */
    "type": "quick_pay" | (string & {});
})
    & (({
    /** Value enum: "quick_pay". */
    "type": "quick_pay" | (string & {});
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequest;
}));
/** The `quick_pay` variant of `CreateInvoiceRequest`. */
export type CreateInvoiceRequestQuickPayInput = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequestInput;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id"?: string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequestInput;
    /**
     * Where Flint emails the invoice and its reminders. Required at issue when delivery resolves
     * to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
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
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1.
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "quick_pay". */
    "type": "quick_pay";
})
    & (({
    /** Value enum: "quick_pay". */
    "type": ("quick_pay") & ("quick_pay");
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequestInput;
})
    & (({
    "order_id"?: never;
})));
/** The request body for: Create location. */
export type CreateLocationRequest = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address": AddressRequest;
    /** A latitude and longitude for a merchant location. */
    "coordinate"?: LocationCoordinate;
    /** Send null to clear it. Value enum: "merchant_supplied", "geocoded", null. */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Whether this Location accepts inventory allocation. Sending this field requires
     * commerce.inventory.allocation.write in addition to the route scope. Default: false.
     */
    "inventory_allocation_enabled"?: boolean;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** minLength: 1. */
    "timezone": string;
};
/** The request body for: Create location. */
export type CreateLocationRequestInput = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address": AddressRequestInput;
    /** A latitude and longitude for a merchant location. */
    "coordinate"?: LocationCoordinateRequestInput;
    /** Send null to clear it. Value enum: "merchant_supplied", "geocoded", null. */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Whether this Location accepts inventory allocation. Sending this field requires
     * commerce.inventory.allocation.write in addition to the route scope. Default: false.
     */
    "inventory_allocation_enabled"?: boolean;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** minLength: 1. */
    "timezone": string;
};
/** The request body for: Preview subscription. */
export type CreateMeSubscriptionPreviewRequest = ((CreateSubscriptionPreviewRequestDeliveryOptions)
    | (CreateSubscriptionPreviewRequestNextRenewal)
    | (Record<string, unknown>));
/** The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`. */
export type CreateMeSubscriptionPreviewRequestDeliveryOptionsInput = {
    /** Where to deliver a subscription: a saved customer address by ID, or a new address. */
    "destination": SubscriptionDeliveryDestinationRequestInput;
    /** Value enum: "delivery_options". */
    "mode": "delivery_options";
    /** minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
};
/** The request body for: Preview subscription. */
export type CreateMeSubscriptionPreviewRequestInput = ((CreateMeSubscriptionPreviewRequestDeliveryOptionsInput)
    | (CreateMeSubscriptionPreviewRequestNextRenewalInput));
/** The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`. */
export type CreateMeSubscriptionPreviewRequestNextRenewalInput = {
    /** Value enum: "next_renewal". */
    "mode": "next_renewal";
    /** minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
};
/** The request body for: Create modifier group. */
export type CreateModifierGroupRequest = {
    /** Whether buyers can select more than one unit of a list modifier. Default: false. */
    "allow_quantities"?: boolean;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Maximum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "max_quantity"?: number;
    /**
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64.
     */
    "max_total_quantity"?: number;
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
     * Minimum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "min_quantity"?: number;
    /**
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Whether buyers choose from a list of modifiers or enter text. On create, inferred as text
     * when text configuration is supplied, otherwise list. Value enum: "list", "text".
     */
    "modifier_group_type"?: "list" | "text" | (string & {});
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. [] (Value): {@link
     * CreateModifierRequest}. A modifier to create in a modifier group, with its name, price
     * change, tax category, and default selection.
     */
    "modifiers"?: Array<CreateModifierRequest>;
    /** Name of the modifier group shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
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
     * archived groups remain readable and cannot be edited. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. Settings for a text modifier group when creating or updating one:
     * required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequest;
};
/** The request body for: Create modifier group. */
export type CreateModifierGroupRequestInput = CreateInlineModifierGroupRequestInput;
/**
 * A modifier to create in a modifier group, with its name, price change, tax category, and default
 * selection.
 */
export type CreateModifierRequest = {
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
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
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Name of the choice shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     * Default: false.
     */
    "selected_by_default"?: boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * A modifier to create in a modifier group, with its name, price change, tax category, and default
 * selection.
 */
export type CreateModifierRequestInput = {
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
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
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Name of the choice shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     * Default: false.
     */
    "selected_by_default"?: boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/** The `existing` variant of `CreateModifierSetGroupInput`. */
export type CreateModifierSetGroupInputExisting = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group"?: CreateModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
})
    & (({
    /** References an independent modifier group. Value enum: "existing". */
    "source": "existing" | (string & {});
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id": string;
}));
/** The `existing` variant of `CreateModifierSetGroupInput`. */
export type CreateModifierSetGroupInputExistingInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group"?: CreateInlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideInput}. Settings for one modifier that apply only within a modifier set
     * group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing".
     */
    "source": "existing";
})
    & (({
    /** References an independent modifier group. Value enum: "existing". */
    "source": "existing";
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id": string;
})
    & ({
    "modifier_group"?: never;
}));
/** The `inline` variant of `CreateModifierSetGroupInput`. */
export type CreateModifierSetGroupInputInline = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group": CreateModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "inline".
     */
    "source": "inline" | (string & {});
})
    & (({
    /** Defines a modifier group owned by this modifier set. Value enum: "inline". */
    "source": "inline" | (string & {});
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group": CreateModifierGroupRequest;
}));
/** The `inline` variant of `CreateModifierSetGroupInput`. */
export type CreateModifierSetGroupInputInlineInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group": CreateInlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideInput}. Settings for one modifier that apply only within a modifier set
     * group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "inline".
     */
    "source": "inline";
})
    & (({
    /** Defines a modifier group owned by this modifier set. Value enum: "inline". */
    "source": "inline";
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group": CreateInlineModifierGroupRequestInput;
})
    & ({
    "modifier_group_id"?: never;
}));
/**
 * A modifier group to add to a modifier set, either an existing group by ID or one defined inline,
 * chosen by `source`.
 */
export type CreateModifierSetGroupRequest = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group"?: CreateModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
})
    & ((Exclude<CreateModifierSetGroupInputExisting & object, readonly unknown[]>)
    | (Exclude<CreateModifierSetGroupInputInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A modifier group to add to a modifier set, either an existing group by ID or one defined inline,
 * chosen by `source`.
 */
export type CreateModifierSetGroupRequestInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group"?: CreateInlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1.
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideInput}. Settings for one modifier that apply only within a modifier set
     * group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline";
})
    & ((Exclude<CreateModifierSetGroupInputExistingInput & object, readonly unknown[]>)
    | (Exclude<CreateModifierSetGroupInputInlineInput & object, readonly unknown[]>));
/** The request body for: Create modifier set. */
export type CreateModifierSetRequest = {
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
    /**
     * Ordered group entries in this set, including references to reusable groups and groups owned
     * by the set. [] (Value): {@link CreateModifierSetGroupRequest}. A modifier group to add to a
     * modifier set, either an existing group by ID or one defined inline, chosen by `source`.
     */
    "modifier_groups"?: Array<CreateModifierSetGroupRequest>;
    /** Name used to identify this modifier set. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Default: "active". Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create modifier set. */
export type CreateModifierSetRequestInput = {
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
    /**
     * Ordered group entries in this set, including references to reusable groups and groups owned
     * by the set. [] (Value): {@link CreateModifierSetGroupRequestInput}. A modifier group to add
     * to a modifier set, either an existing group by ID or one defined inline, chosen by `source`.
     */
    "modifier_groups"?: Array<CreateModifierSetGroupRequestInput>;
    /** Name used to identify this modifier set. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Default: "active". Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive";
};
/**
 * A discount to apply when creating an order: either a manual discount or a reference to a
 * promotion.
 */
export type CreateOrderDiscount = ({
    /**
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion"?: PromotionRefRequest;
})
    & ((Exclude<CreateOrderDiscountPromotion & object, readonly unknown[]>)
    | (Exclude<CreateOrderDiscountManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A discount to apply when creating an order: either a manual discount or a reference to a
 * promotion.
 */
export type CreateOrderDiscountInput = ({
    /**
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion"?: PromotionRefRequestInput;
})
    & ((Exclude<CreateOrderDiscountPromotionInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderDiscountManualInput & object, readonly unknown[]>));
/** The `Manual` variant of `CreateOrderDiscount`. */
export type CreateOrderDiscountManual = ({
    /**
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual": ManualDiscountRequest;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion"?: PromotionRefRequest;
});
/** The `Manual` variant of `CreateOrderDiscount`. */
export type CreateOrderDiscountManualInput = ({
    /**
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual": ManualDiscountRequestInput;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion"?: PromotionRefRequestInput;
})
    & (({
    "promotion"?: never;
}));
/** The `Promotion` variant of `CreateOrderDiscount`. */
export type CreateOrderDiscountPromotion = ({
    /**
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion": PromotionRefRequest;
});
/** The `Promotion` variant of `CreateOrderDiscount`. */
export type CreateOrderDiscountPromotionInput = ({
    /**
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion": PromotionRefRequestInput;
})
    & (({
    "manual"?: never;
}));
/**
 * A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and
 * unit price.
 */
export type CreateOrderLineItem = ({
    "bundle_id"?: string;
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details for an order line item: the `face_value_money` and
     * the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequest;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    "name"?: string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /** Selects the type branch. Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    "variant_id"?: string;
})
    & ((Exclude<CreateOrderLineItemVariant & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemBundle & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `bundle` variant of `CreateOrderLineItem`. */
export type CreateOrderLineItemBundle = ({
    "bundle_id": string;
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details for an order line item: the `face_value_money` and
     * the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequest;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    "name"?: string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /** Selects the type branch. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    "variant_id"?: string;
})
    & (({
    "tax"?: unknown;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    "bundle_id": string;
}));
/** The `custom` variant of `CreateOrderLineItem`. */
export type CreateOrderLineItemCustom = ({
    "bundle_id"?: string;
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details for an order line item: the `face_value_money` and
     * the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequest;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    "name": string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /** Selects the type branch. Value enum: "custom". */
    "type": "custom" | (string & {});
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    "name": string;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
}));
/** The `bundle` variant of `CreateOrderLineItemInput`. */
export type CreateOrderLineItemInputBundleInput = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestInput;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequestInput;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
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
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /** Selects the type branch. Value enum: "bundle". */
    "type": "bundle";
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    "tax"?: (({
        "taxable"?: never;
    }) & ({
        "line_item_tax_category"?: never;
    }));
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** minLength: 1. */
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
/** The `custom` variant of `CreateOrderLineItemInput`. */
export type CreateOrderLineItemInputCustomInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestInput;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequestInput;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
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
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name": string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /** Selects the type branch. Value enum: "custom". */
    "type": "custom";
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": ("custom") & ("custom");
    /** minLength: 1. */
    "name": string;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
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
/** The `variant` variant of `CreateOrderLineItemInput`. */
export type CreateOrderLineItemInputVariantInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestInput;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequestInput;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
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
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /** Selects the type branch. Value enum: "variant". */
    "type": "variant";
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    "tax"?: (({
        "taxable"?: never;
    }) & ({
        "line_item_tax_category"?: never;
    }));
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
    /** minLength: 1. */
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
 * A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and
 * unit price.
 */
export type CreateOrderLineItemRequestInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestInput;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequestInput;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
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
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /** Selects the type branch. Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom";
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<CreateOrderLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemInputCustomInput & object, readonly unknown[]>));
/** The `variant` variant of `CreateOrderLineItem`. */
export type CreateOrderLineItemVariant = ({
    "bundle_id"?: string;
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} for services, digital
     * goods, and items handed over at the point of sale. Fulfillment requirements you supply for
     * an order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details for an order line item: the `face_value_money` and
     * the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
    "image"?: ImageReferenceRequest;
    /**
     *  [] (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    "name"?: string;
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Tax settings you supply for a draft order line item: its tax category, whether it is
     * taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /** Selects the type branch. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    "variant_id": string;
})
    & (({
    "tax"?: unknown;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    "variant_id": string;
}));
/** The request body for: Create order payment intent. */
export type CreateOrderPaymentIntentRequest = {
    /**
     * Amount to collect toward the order, in the order currency. The amount and every computed
     * order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input
     * or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * automatic collects the payment when it is confirmed. manual places a hold at confirmation
     * that you capture or cancel later. Defaults to automatic. Value enum: "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
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
    /**
     * [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as
     * Affirm. Required when payment_options includes affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /** The payment source options you choose when creating an order payment intent. */
    "payment_source_selection"?: OrderPaymentSourceSelection;
};
/** The request body for: Create order payment intent. */
export type CreateOrderPaymentIntentRequestInput = {
    /**
     * Amount to collect toward the order, in the order currency. The amount and every computed
     * order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input
     * or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * automatic collects the payment when it is confirmed. manual places a hold at confirmation
     * that you capture or cancel later. Defaults to automatic. Value enum: "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual";
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
    /**
     * [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as
     * Affirm. Required when payment_options includes affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /** The payment source options you choose when creating an order payment intent. */
    "payment_source_selection"?: OrderPaymentSourceSelectionInput;
};
/** The request body for: Create order. */
export type CreateOrderRequest = {
    /** minLength: 1. maxLength: 1000. */
    "buyer_note"?: string;
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Shipment or local-delivery destination for an order created without a delivery selection.
     * The delivery destination you set when creating or updating an order, with an address and an
     * optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequest;
    /**
     *  [] (Value): {@link CreateOrderDiscount}. A discount to apply when creating an order: either
     * a manual discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscount>;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. maxLength: 1000. */
    "internal_note"?: string;
    /**
     * Where inventory for an order is allocated from: a fixed location, an allocation policy, or a
     * specific policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * minItems: 1. [] (Value): {@link CreateOrderLineItem}. A line item to add to an order: a
     * catalog variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
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
     * Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit.
     * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
     * amount_money or percent.
     */
    "requested_tip"?: CreateOrderTip;
    /**
     * Tax settings you supply when creating an order: whether tax is enabled, how it is
     * calculated, and the tax location.
     */
    "tax"?: OrderTaxRequest;
};
/** The request body for: Create order. */
export type CreateOrderRequestInput = {
    /** minLength: 1. maxLength: 1000. */
    "buyer_note"?: string;
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Shipment or local-delivery destination for an order created without a delivery selection.
     * The delivery destination you set when creating or updating an order, with an address and an
     * optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequestInput;
    /**
     *  [] (Value): {@link CreateOrderDiscountInput}. A discount to apply when creating an order:
     * either a manual discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscountInput>;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. maxLength: 1000. */
    "internal_note"?: string;
    /**
     * Where inventory for an order is allocated from: a fixed location, an allocation policy, or a
     * specific policy revision.
     */
    "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput;
    /**
     * minItems: 1. [] (Value): {@link CreateOrderLineItemRequestInput}. A line item to add to an
     * order: a catalog variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
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
     * Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit.
     * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
     * amount_money or percent.
     */
    "requested_tip"?: CreateOrderTipInput;
    /**
     * Tax settings you supply when creating an order: whether tax is enabled, how it is
     * calculated, and the tax location.
     */
    "tax"?: OrderTaxRequestInput;
};
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTip = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "amount", "percent". */
    "calculation_type": "amount" | "percent" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & ((Exclude<CreateOrderTipAmount & object, readonly unknown[]>)
    | (Exclude<CreateOrderTipPercent & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipAmount = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & (({
    /** Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
}));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipAmountInput = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "amount". */
    "calculation_type": "amount";
    /** minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & (({
    /** Value enum: "amount". */
    "calculation_type": ("amount") & ("amount");
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
})
    & (({
    "percent"?: never;
})));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipInput = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "amount", "percent". */
    "calculation_type": "amount" | "percent";
    /** minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & ((Exclude<CreateOrderTipAmountInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderTipPercentInput & object, readonly unknown[]>));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipPercent = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /** minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    /** Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
}));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipPercentInput = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "percent". */
    "calculation_type": "percent";
    /** minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    /** Value enum: "percent". */
    "calculation_type": ("percent") & ("percent");
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    "amount_money"?: never;
})));
/** The request body for: Create organization. */
export type CreateOrganizationRequest = {
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
     * The organization to create this one under. It must be an active organization you can manage.
     * minLength: 1.
     */
    "parent_organization_id": string;
};
/** The request body for: Create organization. */
export type CreateOrganizationRequestInput = {
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
     * The organization to create this one under. It must be an active organization you can manage.
     * minLength: 1.
     */
    "parent_organization_id": string;
};
/** The request body for: Create package item. */
export type CreatePackageItemRequest = {
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
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/** The request body for: Create package item. */
export type CreatePackageItemRequestInput = {
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
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/** The `jwks_url` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialJWKSURLRequest = {
    /**
     * A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the
     * credential.
     */
    "jwks_url": CheckoutGiftCardChallenge;
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** Credential type. Value enum: "jwks_url". */
    "type": "jwks_url" | (string & {});
};
/** The `jwks_url` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialJWKSURLRequestInput = {
    /**
     * A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the
     * credential.
     */
    "jwks_url": PartnerAppCredentialJWKSURLRequestInput;
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** Credential type. Value enum: "jwks_url". */
    "type": "jwks_url";
};
/** The `public_key` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialPublicKeyRequest = {
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** The public JSON Web Key to register for client authentication. */
    "public_key": PartnerAppCredentialPublicKeyRequest;
    /** Credential type. Value enum: "public_key". */
    "type": "public_key" | (string & {});
};
/** The `public_key` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialPublicKeyRequestInput = {
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** The public JSON Web Key to register for client authentication. */
    "public_key": PartnerAppCredentialPublicKeyRequestInput;
    /** Credential type. Value enum: "public_key". */
    "type": "public_key";
};
/**
 * An immutable public key, JWKS URL, or workload identity credential for partner app client
 * authentication.
 */
export type CreatePartnerAppCredentialRequest = ((CreatePartnerAppCredentialPublicKeyRequest)
    | (CreatePartnerAppCredentialJWKSURLRequest)
    | (CreatePartnerAppCredentialWorkloadIdentityRequest)
    | (Record<string, unknown>));
/**
 * An immutable public key, JWKS URL, or workload identity credential for partner app client
 * authentication.
 */
export type CreatePartnerAppCredentialRequestInput = ((CreatePartnerAppCredentialPublicKeyRequestInput)
    | (CreatePartnerAppCredentialJWKSURLRequestInput)
    | (CreatePartnerAppCredentialWorkloadIdentityRequestInput));
/** The `workload_identity` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialWorkloadIdentityRequest = {
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** Credential type. Value enum: "workload_identity". */
    "type": "workload_identity" | (string & {});
    /**
     * An external OIDC identity whose subject and claim conditions must match exactly the
     * registered policy.
     */
    "workload_identity": PartnerAppCredentialWorkloadIdentityRequest;
};
/** The `workload_identity` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialWorkloadIdentityRequestInput = {
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** Credential type. Value enum: "workload_identity". */
    "type": "workload_identity";
    /**
     * An external OIDC identity whose subject and claim conditions must match exactly the
     * registered policy.
     */
    "workload_identity": PartnerAppCredentialWorkloadIdentityRequestInput;
};
/** The request body for: Create partner app. */
export type CreatePartnerAppRequest = {
    /**
     * API version for requests the app makes with its install tokens that send no Flint-Version
     * header. Defaults to the version of this request and can't be newer than it. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Defaults to false: no client secret is generated. Register a public key, JWKS URL, or
     * workload identity to authenticate with a client assertion. Set true explicitly to issue a
     * client secret at creation. Default: false.
     */
    "client_secret_enabled"?: boolean;
    /**
     * IDs of the permissions requested when an authorization request sends no scope. Each must be
     * in permission_manifest. Defaults to every permission that isn't optional. [] (Value):
     * string. minLength: 1.
     */
    "default_requested_permissions"?: Array<string>;
    /** The app's name, shown to merchants on the consent screen. minLength: 1. */
    "name": string;
    /**
     * Permissions the app can request from merchants. At least one is required. Each lists the
     * Flint scopes it grants. [] (Value): {@link PartnerAppPermissionManifestEntry}. One
     * permission a partner app can request, with a title, a description, and the Flint scopes it
     * grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
    /**
     * Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or
     * HTTP on localhost or a loopback address, with no fragment. At least one is required. []
     * (Value): string. minLength: 1.
     */
    "redirect_uris": Array<string>;
};
/** The request body for: Create partner app. */
export type CreatePartnerAppRequestInput = {
    /**
     * API version for requests the app makes with its install tokens that send no Flint-Version
     * header. Defaults to the version of this request and can't be newer than it. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Defaults to false: no client secret is generated. Register a public key, JWKS URL, or
     * workload identity to authenticate with a client assertion. Set true explicitly to issue a
     * client secret at creation. Default: false.
     */
    "client_secret_enabled"?: boolean;
    /**
     * IDs of the permissions requested when an authorization request sends no scope. Each must be
     * in permission_manifest. Defaults to every permission that isn't optional. [] (Value):
     * string. minLength: 1.
     */
    "default_requested_permissions"?: Array<string>;
    /** The app's name, shown to merchants on the consent screen. minLength: 1. */
    "name": string;
    /**
     * Permissions the app can request from merchants. At least one is required. Each lists the
     * Flint scopes it grants. [] (Value): {@link PartnerAppPermissionManifestEntryRequestInput}.
     * One permission a partner app can request, with a title, a description, and the Flint scopes
     * it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntryRequestInput>;
    /**
     * Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or
     * HTTP on localhost or a loopback address, with no fragment. At least one is required. []
     * (Value): string. minLength: 1.
     */
    "redirect_uris": Array<string>;
};
/** The request body for: Create standalone payment intent. */
export type CreatePaymentIntentRequest = ({
    /**
     * Amount to request from the buyer, including any tip_money. With capture_method manual, this
     * is the hold amount, and you can capture less of it later. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * automatic collects the payment when it is confirmed. manual places a hold at confirmation
     * that you capture or cancel later. Defaults to automatic. Default: "automatic". Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /** Customer to link to this payment intent. minLength: 1. */
    "customer_id"?: string;
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
    /**
     * Payment options the buyer can use. Name at least one. minItems: 1. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as
     * Affirm. Required when payment_options includes affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Email address for this payment's receipt. When omitted, Flint uses the customer's email.
     * Format: email. minLength: 1. maxLength: 255.
     */
    "receipt_email"?: string;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. Not accepted on order-linked payment intents. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
    /**
     * Why the bank debit is taken. Required when payment_options includes ach_debit, and rejected
     * with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose otherwise. Value enum: "goods",
     * "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
});
/** The request body for: Create standalone payment intent. */
export type CreatePaymentIntentRequestInput = ({
    /**
     * Amount to request from the buyer, including any tip_money. With capture_method manual, this
     * is the hold amount, and you can capture less of it later. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * automatic collects the payment when it is confirmed. manual places a hold at confirmation
     * that you capture or cancel later. Defaults to automatic. Default: "automatic". Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual";
    /** Customer to link to this payment intent. minLength: 1. */
    "customer_id"?: string;
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
    /**
     * Payment options the buyer can use. Name at least one. minItems: 1. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as
     * Affirm. Required when payment_options includes affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Email address for this payment's receipt. When omitted, Flint uses the customer's email.
     * Format: email. minLength: 1. maxLength: 255.
     */
    "receipt_email"?: string;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. Not accepted on order-linked payment intents. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValueInput;
    /**
     * Why the bank debit is taken. Required when payment_options includes ach_debit, and rejected
     * with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose otherwise. Value enum: "goods",
     * "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other";
});
/** The request body for: Create payment link. */
export type CreatePaymentLinkRequest = {
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use
     * your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: number;
    /**
     * maxItems: 20. [] (Value): {@link PaymentLinkCustomFieldRequest}. A custom field you add to a
     * payment link when creating it.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldRequest>;
    /**
     * Custom text shown on a payment link's checkout, such as the order summary message and
     * shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Complete delivery method selection for the link. A link without delivery methods offers
     * settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an
     * empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null
     * and duplicate IDs are not accepted. maxItems: 25. uniqueItems: true. [] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_max_amount_money"?: MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_min_amount_money"?: MoneyValue;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /** Event settings you supply when creating an event payment link. */
    "event_config"?: PaymentLinkEventConfig;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** An image you supply by `source_url`, with optional `alt` text and external reference. */
    "image"?: ImageRequest;
    /** minLength: 1. maxLength: 500. */
    "inactive_message"?: string;
    /**
     * Where you want inventory routed from: a fixed Location, an inventory allocation policy, or
     * one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Legal links on a payment link: contract, refund policy, shipping policy, and terms of
     * service URLs, and whether buyers must accept the terms.
     */
    "legal"?: LegalSettings;
    /**
     *  [] (Value): {@link PaymentLinkLineItemRequest}. A line item you add to a payment link when
     * creating it, from a catalog variant, a bundle, or an ad hoc name and price.
     */
    "line_items"?: Array<PaymentLinkLineItemRequest>;
    /** Format: int32. */
    "max_completions"?: number;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Metadata pairs
     * plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint.
     * Metadata keys and values, custom_field_ keys and largest possible answers, and Flint
     * metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four
     * bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at
     * five bytes (the length of false). If the combined budget is exceeded, lower max_length on
     * some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and
     * plan links and are checked against the merged configuration on update. maxProperties: 44.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. * (Value): string.
     * minLength: 1. maxLength: 4096.
     */
    "metadata"?: (Exclude<MetadataMap & object, readonly unknown[]>);
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Payment link type. Omit to use standard. Explicit values must be standard, donation, or
     * event; empty or padded values are invalid. Default: "standard". Value enum: "standard",
     * "donation", "event".
     */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Payment settings on a payment link: the enabled payment options and a note shown with
     * payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer
     * can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface
     * is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve returns
     * PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event
     * link without sales_end_at stops selling at event_config.event_at. A checkout opened before
     * the end can still start payment for up to 15 minutes after it. Format: date-time. minLength:
     * 1.
     */
    "sales_end_at"?: string;
    /** minLength: 1. */
    "subscription_plan_id"?: string;
    /** Whether tax is collected for a checkout session or payment link. */
    "tax"?: CheckoutTaxConfig;
    /** Theme settings for a payment link's checkout: accent color, primary color, and title. */
    "theme"?: ThemeConfig;
    /**
     * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options,
     * the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
};
/** The request body for: Create payment link. */
export type CreatePaymentLinkRequestInput = {
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFieldsRequestInput;
    /**
     * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use
     * your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: number;
    /**
     * maxItems: 20. [] (Value): {@link PaymentLinkCustomFieldRequestInput}. A custom field you add
     * to a payment link when creating it.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldRequestInput>;
    /**
     * Custom text shown on a payment link's checkout, such as the order summary message and
     * shipping address label.
     */
    "custom_text"?: PaymentLinkCustomTextConfigInput;
    /**
     * Complete delivery method selection for the link. A link without delivery methods offers
     * settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an
     * empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null
     * and duplicate IDs are not accepted. maxItems: 25. uniqueItems: true. [] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_max_amount_money"?: MoneyValueInput;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_min_amount_money"?: MoneyValueInput;
    /**
     *  [] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValueInput>;
    /** Event settings you supply when creating an event payment link. */
    "event_config"?: PaymentLinkEventConfigRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** An image you supply by `source_url`, with optional `alt` text and external reference. */
    "image"?: ImageRequestInput;
    /** minLength: 1. maxLength: 500. */
    "inactive_message"?: string;
    /**
     * Where you want inventory routed from: a fixed Location, an inventory allocation policy, or
     * one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Legal links on a payment link: contract, refund policy, shipping policy, and terms of
     * service URLs, and whether buyers must accept the terms.
     */
    "legal"?: PaymentLinkLegalConfigInput;
    /**
     *  [] (Value): {@link PaymentLinkLineItemRequestInput}. A line item you add to a payment link
     * when creating it, from a catalog variant, a bundle, or an ad hoc name and price.
     */
    "line_items"?: Array<PaymentLinkLineItemRequestInput>;
    /** Format: int32. */
    "max_completions"?: number;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Metadata pairs
     * plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint.
     * Metadata keys and values, custom_field_ keys and largest possible answers, and Flint
     * metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four
     * bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at
     * five bytes (the length of false). If the combined budget is exceeded, lower max_length on
     * some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and
     * plan links and are checked against the merged configuration on update. maxProperties: 44.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. * (Value): string.
     * minLength: 1. maxLength: 4096.
     */
    "metadata"?: (Exclude<MetadataRequestInput & object, readonly unknown[]>);
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Payment link type. Omit to use standard. Explicit values must be standard, donation, or
     * event; empty or padded values are invalid. Default: "standard". Value enum: "standard",
     * "donation", "event".
     */
    "payment_link_type"?: "standard" | "donation" | "event";
    /**
     * Payment settings on a payment link: the enabled payment options and a note shown with
     * payment.
     */
    "payments"?: PaymentLinkPaymentConfigInput;
    /**
     * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer
     * can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestInput;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface
     * is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve returns
     * PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event
     * link without sales_end_at stops selling at event_config.event_at. A checkout opened before
     * the end can still start payment for up to 15 minutes after it. Format: date-time. minLength:
     * 1.
     */
    "sales_end_at"?: string | globalThis.Date;
    /** minLength: 1. */
    "subscription_plan_id"?: string;
    /** Whether tax is collected for a checkout session or payment link. */
    "tax"?: CheckoutTaxConfigRequestInput;
    /** Theme settings for a payment link's checkout: accent color, primary color, and title. */
    "theme"?: PaymentLinkThemeConfigInput;
    /**
     * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options,
     * the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfigRequestInput;
};
/** The request body for: Register payment method domain. */
export type CreatePaymentMethodDomainRequest = {
    /**
     * Exact fully-qualified hostname to register. Limited to 253 characters (Unicode code points)
     * before trimming whitespace and lowercasing. The resulting hostname uses ASCII characters
     * only. Do not include a scheme, path, port, IP address, or wildcard. minLength: 1. maxLength:
     * 253.
     */
    "domain_name": (string);
};
/** The request body for: Register payment method domain. */
export type CreatePaymentMethodDomainRequestInput = CreatePaymentMethodDomainRequest;
