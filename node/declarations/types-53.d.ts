import type { MoneyValue } from './types-35.js';
import type { PaymentCollection, PaymentErrorSummary, PartnerWebhookEnvelope } from './types-40.js';
import type { BrandingSettings, BuyerAction } from './types-1.js';
import type { CheckoutSettings, ConfigurationVersionRequestInput } from './types-5.js';
import type { CustomerAccountSettings, CustomerEmailDeliverySettings } from './types-13.js';
import type { FulfillmentSettings } from './types-22.js';
import type { InventorySettings } from './types-28.js';
import type { InvoiceSettings } from './types-31.js';
import type { LegalSettings } from './types-32.js';
import type { MetadataMap, MerchantWebhookEnvelope, MetadataRequestInput } from './types-34.js';
import type { PaymentLimitSettings } from './types-41.js';
import type { PromotionSettings } from './types-45.js';
import type { ReceiptSettings } from './types-46.js';
import type {
    SubscriptionSettings,
    SubscriptionPromotion,
    SubscriptionServiceLocation,
    SubscriptionUpcomingDeliveryHold,
    SubscriptionSnapshotMetrics,
    SubscriptionWindowMetrics
} from './types-56.js';
import type { TaxIdentity, TaxSettings, TippingSettings } from './types-57.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { UpdateSettingsRequestInput, UpdateShipmentRequestInput, VoidShipmentRequestInput } from './types-60.js';
import type {
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedCustomerSummary,
    ExpandedPaymentMethodSummary,
    ExpandedSubscriptionPlanSummary
} from './types-21.js';
import type { ReturnResolutionLineItemRequest } from './types-50.js';
import type { PackageCreateRequestInput } from './types-38.js';
import type { Dimensions, DimensionsInput } from './types-20.js';
import type { Weight, WeightInput } from './types-61.js';
import type {
    SubscriptionCancellationDetails,
    SubscriptionDelivery,
    SubscriptionDeliveryHold,
    SubscriptionIntervalOption
} from './types-54.js';
import type { SubscriptionInventoryWait, SubscriptionLineItem } from './types-55.js';
/**
 * A payment intent on an order the caller can pick, with its amount, status, and last payment
 * error.
 */
export type SelectableOrderPaymentIntent = {
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Most recent payment failure, when one is recorded. A summary of why a payment attempt
     * failed, with a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Client setup details for collecting this payment. Client-side details for collecting payment
     * from the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /** Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Lifecycle status. requires_payment_method covers both a new payment intent and one whose
     * last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired
     * are final. Refunds and disputes never change status. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
     */
    "status": "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /**
     * Portion of this payment's amount allocated to a tip. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/** An option and value chosen for a product variant, such as size Large. */
export type SelectedProductOption = {
    /** Identifier of the selected product option. */
    "option_id": string;
    /** Name of the selected product option. */
    "option_name": string;
    /** Identifier of the selected option value. */
    "option_value_id": string;
    /** Selected value of the product option. */
    "value": string;
};
/**
 * The seller's agreement to the current automatic sales tax disclosure, recorded when connect
 * succeeds.
 */
export type SellerTaxAttestationRequest = {
    /**
     * Current disclosure version from GET /v1/tax-connection. Send only after the seller agrees to
     * every rendered statement. minLength: 1.
     */
    "disclosure_version": string;
};
/**
 * The seller's agreement to the current automatic sales tax disclosure, recorded when connect
 * succeeds.
 */
export type SellerTaxAttestationRequestInput = SellerTaxAttestationRequest;
/** The request body for: Send an order receipt. */
export type SendOrderReceiptRequest = {
    /**
     * Receipt email, limited to 254 characters (Unicode code points) after trimming surrounding
     * whitespace. Format: email. minLength: 1. maxLength: 254.
     */
    "email"?: string;
};
/** The request body for: Send an order receipt. */
export type SendOrderReceiptRequestInput = SendOrderReceiptRequest;
/** The request body for: Send a payment receipt. */
export type SendPaymentIntentReceiptRequestInput = {
    /**
     * Email address that receives the receipt. Omit to use the order's receipt address for an
     * order-owned intent, or receipt_email then the customer's email for a standalone intent.
     * Format: email. minLength: 1. maxLength: 254.
     */
    "email"?: string;
};
/**
 * Details of a service fulfillment: the scheduled start and end, timezone, completion time, and
 * notes.
 */
export type ServiceFulfillmentDetails = {
    /** When the service was completed, in RFC3339 format. Format: date-time. */
    "completed_at"?: string;
    /** Additional instructions or notes for performing the service. */
    "notes"?: string;
    /** Scheduled end of the service, in RFC3339 format. Format: date-time. */
    "scheduled_end_at"?: string;
    /** Scheduled start of the service, in RFC3339 format. Format: date-time. */
    "scheduled_start_at"?: string;
    /** Timezone used to display the service appointment. */
    "timezone"?: string;
};
/**
 * The settings for one scope (organization, merchant, location, or device), grouped by area such
 * as checkout, tax, receipts, and tipping.
 */
export type Settings = {
    /**
     * A merchant's branding settings: colors, corner radius, and font family. Checkout uses them
     * as its default theme.
     */
    "branding"?: BrandingSettings;
    /**
     * Merchant defaults for checkout: custom domain, delivery methods, expiration, payment
     * options, required contact fields, promotion codes, recovery email, and saved payment
     * details.
     */
    "checkout"?: CheckoutSettings;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Customer account settings: hosted mode, merchant account URL, presentation, route templates,
     * and what buyers may do to their own subscriptions.
     */
    "customer_account"?: CustomerAccountSettings;
    /** For each kind of customer email, whether Flint sends it or the merchant sends it. */
    "customer_email_delivery"?: CustomerEmailDeliverySettings;
    /**
     * Merchant fulfillment settings, including whether fulfillments require approval
     * (`approval_required`).
     */
    "fulfillment"?: FulfillmentSettings;
    /**
     * Inventory settings: the `low_stock_threshold` and how inventory failures are handled for
     * each order source.
     */
    "inventory"?: InventorySettings;
    /**
     * Merchant defaults for invoices, including numbering prefixes, default memo and footer,
     * collection mode, reminders, and autopay retries.
     */
    "invoices"?: InvoiceSettings;
    /**
     * Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms
     * of service URLs, and whether buyers must accept the terms.
     */
    "legal"?: LegalSettings;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Optional merchant limits that can lower Flint's payment-option and surface policy limits. */
    "payment_limits"?: PaymentLimitSettings;
    /**
     * Merchant promotion settings: whether automatic promotions and codes are enabled, and how
     * many promotions can apply to one order.
     */
    "promotions"?: PromotionSettings;
    /**
     * Receipt settings: whether receipts are emailed automatically, whether they are itemized, and
     * the header and footer text.
     */
    "receipts"?: ReceiptSettings;
    "settings_id": string;
    /**
     * Subscription settings: the default billing schedule owner, dunning retry days and end
     * action, and the backorder email.
     */
    "subscriptions"?: SubscriptionSettings;
    /**
     * Tax settings: whether tax is calculated by default and the default tax categories for line
     * items and delivery charges.
     */
    "tax"?: TaxSettings;
    /**
     *  anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
     * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
     * collection in display order; replacing the array requires the parent's expected_version.
     * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to
     * add one. anyOf[2] (Value): null.
     */
    "tax_identity": ((TaxIdentity) | (null));
    /**
     * Tipping settings: percent and fixed tip options, the preselected tip, and whether custom
     * tips are allowed.
     */
    "tipping"?: TippingSettings;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Format: uint64. minimum: 1. */
    "version": number;
};
export type SettingsGetEffectiveParams = {};
export type SettingsGetParams = {};
/** A response containing `Settings` data. */
export type SettingsResponse = {
    /**
     * The settings for one scope (organization, merchant, location, or device), grouped by area
     * such as checkout, tax, receipts, and tipping.
     */
    "data": Settings;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type SettingsUpdateParams = (InputValue<UpdateSettingsRequestInput>);
/**
 * How much of an order has been paid, refunded, credited, written off, and settled as tips, and
 * what balance and outstanding amount remain.
 */
export type SettlementAmounts = {
    /**
     * outstanding_money minus credit_money. Negative when the order holds money beyond its total
     * that has not been returned. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "balance_money": MoneyValue;
    /**
     * Money collected beyond the order total and not yet refunded. Write-offs do not create
     * credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Payments collected for the order minus money refunded to the buyer. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "net_collected_money": MoneyValue;
    /**
     * What is still left to collect: the order total minus paid_money and written_off_money, never
     * below zero. Refunds return money already collected and do not add to it. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Settled payments and applied return credit. Excludes written-off invoice balances. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Money returned to the buyer from what this order collected. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Portion of the collected money settled as tips. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "settled_tip_money": MoneyValue;
    /**
     * Invoice debt no longer owed. Reduces outstanding_money without increasing paid_money,
     * net_collected_money, or credit_money. Cannot be refunded or used to fund an exchange.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
/** A shipment carrying fulfilled order items. */
export type Shipment = {
    /** Creation timestamp. Format: date-time. */
    "created_at"?: string;
    /** When the shipment was delivered, in RFC3339 format. Format: date-time. */
    "delivered_at"?: string;
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries.
     */
    "external_system"?: string;
    /** Fulfillment associated with this shipment. */
    "fulfillment_id": string;
    /**
     * Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at
     * when no separate handoff timestamp exists. For return shipments, this can satisfy an
     * after_handoff execution gate for the declared return_line_items. Format: date-time.
     */
    "handed_off_at"?: string;
    /**
     * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Order whose items are transported by the shipment. */
    "order_id": string;
    /**
     * Total number of packages attached to the shipment, including voided packages. Format: int32.
     * minimum: 0.
     */
    "package_count": number;
    /**
     * Summaries of the shipment's packages in creation order, returned when the packages
     * relationship is expanded or when the shipment is created with packages. [] (Value): {@link
     * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking, status,
     * and supported actions, returned when the package is expanded.
     */
    "packages"?: Array<ExpandedPackageSummary>;
    /** Return associated with this shipment, when its direction is return. */
    "return_id"?: string;
    /**
     * Return lines and quantities allocated to this return shipment. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Stable identifier of the shipment. */
    "shipment_id": string;
    /** When the shipment was shipped, in RFC3339 format. Format: date-time. */
    "shipped_at"?: string;
    /**
     * Read-only shipment state derived from the shipment's package states. An empty shipment
     * remains a created draft. - `created`: The shipment leg exists but has not been packed or
     * handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. -
     * `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving
     * the shipment through its network. - `out_for_delivery`: The shipment is on its final
     * delivery route. - `delivered`: The carrier reported successful delivery. -
     * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the
     * carrier instructions before retrying delivery. - `exception`: A carrier exception is
     * blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was
     * returned toward or to its origin. - `voided`: The shipment was voided and will not continue
     * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     */
    "status": "created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /** Last update timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
export type ShipmentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Shipment;
    };
    "event_type"?: "shipment.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Shipment;
    };
    "event_type"?: "shipment.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "shipment.created";
});
/**
 * The `shipment.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ShipmentCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Shipment}. A shipment carrying fulfilled order items. */
    "data"?: {
        /** A shipment carrying fulfilled order items. */
        "object": Shipment;
    };
    /** Value enum: "shipment.created". */
    "event_type"?: "shipment.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `shipment.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ShipmentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Shipment}. A shipment carrying fulfilled order items. */
    "data"?: {
        /** A shipment carrying fulfilled order items. */
        "object": Shipment;
    };
    /** Value enum: "shipment.created". */
    "event_type"?: "shipment.created";
});
/**
 * Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was
 * handed to the carrier.
 */
export type ShipmentFulfillmentDetails = {
    /** When the shipment was handed to the carrier. Format: date-time. */
    "shipped_at"?: string;
    /**
     * IANA zone the shipping window was entered in, used for display. window_start_at and
     * window_end_at are absolute timestamps, so this does not change the window. maxLength: 255.
     */
    "timezone"?: string;
    /** End of the scheduled shipping window. Format: date-time. */
    "window_end_at"?: string;
    /** Start of the scheduled shipping window. Format: date-time. */
    "window_start_at"?: string;
};
/** A page of `Shipment` objects. */
export type ShipmentListResponse = {
    /**  [] (Value): {@link Shipment}. A shipment carrying fulfilled order items. */
    "data": Array<Shipment>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `Shipment` data. */
export type ShipmentResponse = {
    /** A shipment carrying fulfilled order items. */
    "data": Shipment;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ShipmentUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Shipment;
    };
    "event_type"?: "shipment.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Shipment;
    };
    "event_type"?: "shipment.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "shipment.updated";
});
/**
 * The `shipment.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ShipmentUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Shipment}. A shipment carrying fulfilled order items. */
    "data"?: {
        /** A shipment carrying fulfilled order items. */
        "object": Shipment;
    };
    /** Value enum: "shipment.updated". */
    "event_type"?: "shipment.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `shipment.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ShipmentUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Shipment}. A shipment carrying fulfilled order items. */
    "data"?: {
        /** A shipment carrying fulfilled order items. */
        "object": Shipment;
    };
    /** Value enum: "shipment.updated". */
    "event_type"?: "shipment.updated";
});
export type ShipmentsCreatePackageParams = (PackageCreateRequestInput);
export type ShipmentsGetParams = {
    /**
     * Supported expansions: order, packages. Expansion requires commerce.orders.read. Limits: at
     * most 10 unique expand paths per request. To-many expansions are capped at 20 related objects
     * per path. Repeat expand, for example expand=order&expand=packages, or pass one
     * comma-separated value. [] enum: "order", "packages". Value enum: "order", "packages".
     * anyOf[1] (Value): Array of string. [] enum: "order", "packages". anyOf[1][] (Value): string.
     * Value enum: "order", "packages". anyOf[2] (Value): string. Value enum: "order", "packages".
     */
    "expand"?: InputValue<("order" | "packages") | readonly ("order" | "packages")[]>;
};
export type ShipmentsListParams = {
    /** Optional order ID filter. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Optional fulfillment ID filter. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "fulfillment_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Filter by external system identifier. */
    "external_system"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across shipment ID and external reference ID. Text fields match any part of the
     * value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and
     * need the type prefix, such as shp_01.
     */
    "query"?: InputValue<string>;
    /** Filter by linked Return ID. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_id"?: InputValue<string>;
    /**
     * Inclusive lower bound on handed_off_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "handed_off_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on handed_off_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "handed_off_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by package-derived shipment status. Values within this filter are combined with OR.
     * Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[1][] (Value): string. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[2] (Value): string. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
     */
    "status"?: InputValue<("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")
        | readonly ("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")[]>;
    /**
     * Filter by shipment direction. Values within this filter are combined with OR. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "outbound", "return". Value enum: "outbound", "return".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "outbound", "return". anyOf[1][]
     * (Value): string. Value enum: "outbound", "return". anyOf[2] (Value): string. Value enum:
     * "outbound", "return".
     */
    "direction"?: InputValue<("outbound" | "return") | readonly ("outbound" | "return")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: order. Include the requested related resources using scoped batch
     * reads for this page. Each relationship requires its existing target read scopes. Expansion
     * changes the representation without changing pagination tokens. Limits: at most 10 unique
     * expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order". anyOf[1]
     * (Value): Array of string. [] enum: "order". anyOf[1][] (Value): string. Value enum: "order".
     * anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
};
export type ShipmentsUpdateParams = (InputValue<UpdateShipmentRequestInput>);
export type ShipmentsVoidParams = (InputValue<VoidShipmentRequestInput>);
/** Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. */
export type SignedMoneyRequestInput = {
    /**
     * Signed amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "amount": `${bigint}` | bigint;
    /**
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD".
     */
    "currency": string;
};
/** The request body for: Simulate a dispute outcome. */
export type SimulateDisputeRequest = {
    /**
     * The ruling to simulate. `won` and `lost` decide a chargeback; `inquiry_closed` and
     * `escalated` decide an inquiry. Value enum: "won", "lost", "inquiry_closed", "escalated".
     */
    "outcome": "won" | "lost" | "inquiry_closed" | "escalated" | (string & {});
};
/** The request body for: Simulate a dispute outcome. */
export type SimulateDisputeRequestInput = {
    /**
     * The ruling to simulate. `won` and `lost` decide a chargeback; `inquiry_closed` and
     * `escalated` decide an inquiry. Value enum: "won", "lost", "inquiry_closed", "escalated".
     */
    "outcome": "won" | "lost" | "inquiry_closed" | "escalated";
};
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputCreated = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
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
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created".
     */
    "status": "created" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: Weight;
});
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputCreatedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: DimensionsInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
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
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created".
     */
    "status": "created";
    /** minLength: 1. */
    "status_reason"?: string;
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: WeightInput;
})
    & (({
    "shipped_at"?: never;
}))
    & (({
    "buyer_notification_behavior"?: never;
}));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputShipped = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
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
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: Weight;
});
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputShippedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: DimensionsInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
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
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped";
    /** minLength: 1. */
    "status_reason"?: string;
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: WeightInput;
})
    & (({
    "return_line_items"?: never;
}));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateRequest = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
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
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: Weight;
})
    & ((Exclude<SinglePackageCreateInputCreated & object, readonly unknown[]>)
    | (Exclude<SinglePackageCreateInputShipped & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateRequestInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: DimensionsInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
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
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped";
    /** minLength: 1. */
    "status_reason"?: string;
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: WeightInput;
})
    & ((Exclude<SinglePackageCreateInputCreatedInput & object, readonly unknown[]>)
    | (Exclude<SinglePackageCreateInputShippedInput & object, readonly unknown[]>));
/** The request body for: Skip subscription cycle. */
export type SkipMeSubscriptionCycleRequestInput = ConfigurationVersionRequestInput;
/** The request body for: Skip subscription cycle. */
export type SkipSubscriptionCycleRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Flint's skip
     * email to the buyer says the buyer skipped for buyer, and that the store skipped otherwise.
     * Default: "merchant". Value enum: "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration" | (string & {});
};
/** The request body for: Skip subscription cycle. */
export type SkipSubscriptionCycleRequestInput = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Flint's skip
     * email to the buyer says the buyer skipped for buyer, and that the store skipped otherwise.
     * Default: "merchant". Value enum: "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration";
};
/**
 * One-time client authority for the named Stripe object. This payload always names the Stripe.js
 * call and carries its client secret.
 */
export type StripeClientAuthority = {
    /** Stripe client secret for the named PaymentIntent or SetupIntent. */
    "client_secret": string;
    /**
     * Stripe.js operation to perform now. confirm_setup applies to client_setup. Standalone
     * PaymentIntents use payment_collection plus server confirmation instead of initial
     * confirm_payment authority. Value enum: "confirm_payment", "confirm_setup".
     */
    "stripe_js_call": "confirm_payment" | "confirm_setup" | (string & {});
};
/**
 * Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now.
 * setup_collection is guidance instead and never carries a secret.
 */
export type StripeClientSetup = {
    /** Stripe.js initialization context and SetupIntent setup authority. */
    "stripe"?: StripeClientSetupStripe;
};
/** Stripe.js initialization context and SetupIntent setup authority. */
export type StripeClientSetupStripe = {
    /** Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. */
    "account_id"?: string;
    /**
     * Stripe publishable key for the active Flint payment mode; use this with account_id when
     * loading Stripe.js.
     */
    "publishable_key"?: string;
    /**
     * One-time client authority for the named Stripe object. This payload always names the
     * Stripe.js call and carries its client secret.
     */
    "setup_intent"?: StripeClientAuthority;
};
/**
 * Stripe.js initialization context plus one flow-specific authority object. Exactly one of
 * payment_intent or setup_intent is present.
 */
export type StripePaymentClientAction = {
    /** Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. */
    "account_id": string;
    /**
     * PaymentIntent authority for an order payment authentication action. The client action for a
     * Stripe payment intent: the client secret to pass to Stripe.js `handleNextAction`.
     */
    "payment_intent"?: StripeSetupIntentClientAction;
    /**
     * Stripe publishable key for the active Flint payment mode; use this with account_id when
     * loading Stripe.js.
     */
    "publishable_key": string;
    /**
     * SetupIntent authority for a saved-payment-method authentication action. The client action
     * for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`.
     */
    "setup_intent"?: StripeSetupIntentClientAction;
};
/**
 * The client action for a Stripe setup intent: the client secret to pass to Stripe.js
 * `handleNextAction`.
 */
export type StripeSetupIntentClientAction = {
    /** SetupIntent client secret to pass to Stripe.js handleNextAction. */
    "client_secret": string;
    /**
     * Stripe.js operation to perform. Today this is handle_next_action. Value enum:
     * "handle_next_action".
     */
    "stripe_js_call": "handle_next_action" | (string & {});
};
/**
 * The subscription offer and billing interval an order line was bought under, with the recurring
 * amount.
 */
export type SubscribedLine = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count": number;
    /**
     * Line amount for the first renewal, including modifiers and recurring discounts, before
     * shipping and tax. Signup-only discounts are excluded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "recurring_amount_money"?: MoneyValue;
    "subscription_offer_id": string;
};
/**
 * Makes an order line a subscription purchase, with the subscription offer and billing interval.
 */
export type SubscribedLineRequest = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /** Active subscription offer for this catalog variant. minLength: 1. */
    "subscription_offer_id": string;
};
/**
 * Makes an order line a subscription purchase, with the subscription offer and billing interval.
 */
export type SubscribedLineRequestInput = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /** Active subscription offer for this catalog variant. minLength: 1. */
    "subscription_offer_id": string;
};
/** A customer's recurring purchase. */
export type Subscription = {
    /**
     * True while an active or trialing subscription on an external billing schedule has no next
     * billing date.
     */
    "awaiting_billing_schedule"?: boolean;
    /**
     * UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned
     * schedules. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /**
     * How often the subscription bills now. Read with billing_interval_count: monthly with a count
     * of 3 bills quarterly. A change applies from the next renewal that has not been paid;
     * next_billing_at does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Number of billing_interval units between charges. Changes with billing_interval. Format:
     * int32.
     */
    "billing_interval_count": number;
    /**
     * maxItems: 12. uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * Who supplies billing dates: flint advances the schedule after each paid renewal; external
     * uses dates you supply. Change it with billing_schedule on PATCH
     * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
     */
    "billing_schedule_owner": "flint" | "external" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "billing_schedule_waiting_started_at"?: string;
    /**
     * What the buyer can do with the subscription, in this order: cancel, pause, resume,
     * reactivate, update_payment_method, retry_payment, update_delivery, skip,
     * update_billing_interval, update_quantity, swap_items, then renew, under the store's buyer
     * policy. The available cancel and pause actions carry the choices they accept. A buyer's read
     * or change through a customer session on /v1/me, or in Flint's buyer account, lists all
     * twelve every time; a merchant read gets an empty list. update_payment_method is required
     * while a payment is past due, due by next_retry_at when a retry is scheduled, and when the
     * card expires before next_billing_at, due by then. Example: []. [] (Value): {@link
     * BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return they
     * read through /v1/me. Show the actions with is_required as what needs the buyer's attention,
     * and the first available action as the primary action on the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     */
    "cancel_at_period_end": boolean;
    /** RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Who asked to cancel, when, and why. Present once a cancellation is requested, whether it
     * takes effect at the end of the billing period or right away. Omitted when no one asked, and
     * removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and
     * payment-related cancellations. The cancellation request behind a scheduled or completed
     * cancellation.
     */
    "cancellation_details"?: SubscriptionCancellationDetails;
    /**
     * Why the subscription is canceled or scheduled to cancel. Uses
     * cancellation_details.requested_by when recorded, payment_failed for a canceled subscription
     * without a requester, and other for a scheduled cancellation without a requester. Omitted
     * otherwise. Value enum: "buyer", "merchant", "payment_failed", "other".
     */
    "cancellation_reason"?: "buyer" | "merchant" | "payment_failed" | "other" | (string & {});
    /** Format: uint64. minimum: 0. */
    "completed_cycles": number;
    /**
     * When the recorded contract term ends. Does not move when the subscription pauses or changes
     * plan. Flint does not stop the buyer from canceling earlier. Format: date-time.
     */
    "contract_end_at"?: string;
    /**
     * When the recorded contract term started. Does not move when the subscription pauses or
     * changes plan. Format: date-time.
     */
    "contract_start_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "current_period_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "current_period_start_at"?: string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    "customer_id": string;
    /**
     * Saved delivery preference with the current delivery method display. Write responses use the
     * same display as GET: fixed shipping reflects the current method configuration, and quoted
     * shipping shows the last paid shipping amount when available. A subscription's saved delivery
     * preference: method, destination, recipient, shipping cost, and who last changed it.
     */
    "delivery"?: SubscriptionDelivery;
    /**
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it.
     */
    "delivery_hold"?: SubscriptionDeliveryHold;
    /**
     * The fee in the recorded contract terms. Present whenever those terms include a fee. It
     * applies only to a cancellation before contract_end_at. Flint never charges it. Later plan
     * changes do not change this fee. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Renewal waiting for stock. Included only in merchant responses and omitted from buyer
     * responses. Shows that a subscription renewal is waiting for inventory, with the order and
     * invoice involved and when the wait started.
     */
    "inventory_wait"?: SubscriptionInventoryWait;
    /**
     * Latest renewal payment failure, present only while status is past_due and the latest payment
     * failed. Buyer responses omit merchant remediation and sensitive decline signals. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line
     * takes that variant's current catalog price, which then stays until the line changes again.
     * [] (Value): {@link SubscriptionLineItem}. An item included in a customer's recurring
     * purchase.
     */
    "line_items": Array<SubscriptionLineItem>;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is
     * past_due. Format: date-time.
     */
    "missed_billing_at"?: string;
    /**
     * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only
     * while a trialing or active subscription has a billing date and isn't set to cancel at the
     * end of its period. Absent when no renewal is scheduled: a paused subscription resumes at
     * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and
     * retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start
     * begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule
     * awaiting a date reports awaiting_billing_schedule. Format: date-time.
     */
    "next_billing_at"?: string;
    /**
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time.
     */
    "next_retry_at": string | null;
    /**
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included.
     */
    "open_renewal_order_id"?: string;
    /**
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money"?: MoneyValue;
    /**
     * Why the subscription is paused: merchant for a pause made with your API key or dashboard,
     * buyer for the buyer's own pause, delivery_action_required for a pause during or after a
     * delivery hold, and payment_failed when renewal payment retries ran out and your dunning
     * settings pause the subscription. Omitted when the subscription is not paused. Value enum:
     * "buyer", "delivery_action_required", "merchant", "payment_failed".
     */
    "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "paused_at"?: string;
    /**
     * Present only when `expand` includes `payment_method`; `null` when expanded and there is no
     * related payment method. anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
     * method's summary fields, including type, status, and card details, returned when the payment
     * method is expanded. anyOf[2] (Value): null.
     */
    "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
    /** The saved payment method renewals charge. Change it with PATCH. */
    "payment_method_id": string;
    /**
     * Recurring promotions applying to the next charged cycle. Empty when none apply; signup-only
     * and exhausted promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles.
     */
    "promotions": Array<SubscriptionPromotion>;
    /**
     * How many of each line the subscription bills each period, as a whole number; fractional
     * quantities are not supported. A change applies from the next renewal that has not been paid.
     * Format: int32.
     */
    "quantity": number;
    /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
    "quantity_options"?: Array<number>;
    /**
     * What one billing period's items cost before discounts, shipping, and tax: each line's price
     * with modifiers, times quantity. It changes when items, quantity, or the plan change; editing
     * the plan doesn't change it. For the next charge, use a subscription preview in next_renewal
     * mode. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "recurring_subtotal_money": ((MoneyValue) | (null));
    /**
     * When Flint accepted a pending resume request. Set only while paused with a resume Flint has
     * not applied yet. Clears when Flint resumes the subscription or refuses the request. Format:
     * date-time.
     */
    "resume_requested_at": string | null;
    /**
     * When the scheduled cancellation takes effect: trial_end_at while trialing,
     * current_period_end_at while active, or next_retry_at while past_due. Null when
     * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     */
    "scheduled_cancel_at": string | null;
    /**
     * When a pause with a length (pause_duration_cycles) resumes on its own: that many billing
     * intervals after paused_at. Null when the subscription is not paused or the pause has no
     * length, such as a pause until you resume it or the pause Flint starts when a delivery hold
     * runs out. Format: date-time.
     */
    "scheduled_resume_at": string | null;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. The address where a subscription's service is delivered, with the saved customer
     * address it came from.
     */
    "service_location"?: SubscriptionServiceLocation;
    /**
     * When a scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time.
     */
    "starts_at"?: string;
    /**
     * Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
     * "scheduled".
     */
    "status": "trialing"
        | "active"
        | "paused"
        | "past_due"
        | "canceled"
        | "incomplete"
        | "scheduled"
        | (string & {});
    "subscription_id": string;
    /**
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /** Subscription plan ID. Omitted when terms_type is subscription_offer. */
    "subscription_plan_id"?: string;
    /**
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan". []
     * (Value): string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew",
     * "retry_payment", "change_plan".
     */
    "supported_actions": Array<"cancel"
        | "pause"
        | "resume"
        | "skip_cycle"
        | "renew"
        | "retry_payment"
        | "change_plan"
        | (string & {})>;
    /**
     * Terms come from the subscription plan in subscription_plan_id, or from subscription offers
     * identified on each offer line by subscription_offer_id. Value enum: "subscription_plan",
     * "subscription_offer".
     */
    "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
    /**
     * ID of the test clock the subscription's customer was created on. The subscription bills at
     * the clock's time. Present only when the customer is on a test clock. Included only in
     * merchant responses and omitted from buyer responses.
     */
    "test_clock_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "trial_end_at"?: string;
    /**
     * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
     * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
     * subscription's delivery, and who can fix it.
     */
    "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Format: uint64. minimum: 0. */
    "version": number;
};
export type SubscriptionActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.activated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "subscription.activated";
});
/**
 * The `subscription.activated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.activated". */
    "event_type"?: "subscription.activated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `subscription.activated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.activated". */
    "event_type"?: "subscription.activated";
});
/**
 * The verification state of a subscription's delivery address: `verified`, `unverified`,
 * `needs_review`, or `unverifiable`.
 */
export type SubscriptionAddressVerification = {
    /** Value enum: "verified", "unverified", "needs_review", "unverifiable". */
    "state": "verified" | "unverified" | "needs_review" | "unverifiable" | (string & {});
};
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type SubscriptionAnalytics = {
    /**
     * Currencies of subscription payments selected by succeeded activity created_at in the period,
     * plus current active and past_due billing snapshots, regardless of the currency filter. The
     * half-open period [period_start_at, period_end_at) includes its start and excludes its end.
     * Amounts and payments_count use currency; customer and subscription counts span currencies.
     * [] (Value): string.
     */
    "currencies": Array<string>;
    /**
     * ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default
     * currency. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive resolved end instant. Omitted or future request ends resolve to the request time
     * truncated to the second. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time.
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time.
     */
    "period_start_at": string;
    /**
     * Current persisted subscription state at computation time, cached briefly. Independent of the
     * requested period end. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. The half-open period [period_start_at, period_end_at)
     * includes its start and excludes its end. Amounts and payments_count use currency; customer
     * and subscription counts span currencies.
     */
    "snapshot_metrics": SubscriptionSnapshotMetrics;
    /**
     * Subscription creation, cancellation, and payment success metrics selected within the
     * requested period. The half-open period [period_start_at, period_end_at) includes its start
     * and excludes its end. Amounts and payments_count use currency; customer and subscription
     * counts span currencies. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies.
     */
    "window_metrics": SubscriptionWindowMetrics;
};
/** A response containing `SubscriptionAnalytics` data. */
export type SubscriptionAnalyticsResponse = {
    /**
     * The half-open period [period_start_at, period_end_at) includes its start and excludes its
     * end. Amounts and payments_count use currency; customer and subscription counts span
     * currencies.
     */
    "data": SubscriptionAnalytics;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The `external` variant of `SubscriptionBillingScheduleInput`. */
export type SubscriptionBillingScheduleInputExternal = {
    /** Value enum: "external". */
    "owner": "external" | (string & {});
};
/** The `external` variant of `SubscriptionBillingScheduleInput`. */
export type SubscriptionBillingScheduleInputExternalInput = {
    /** Value enum: "external". */
    "owner": "external";
};
/** The `flint` variant of `SubscriptionBillingScheduleInput`. */
export type SubscriptionBillingScheduleInputFlint = {
    /** Value enum: "flint". */
    "owner": "flint" | (string & {});
};
/** The `flint` variant of `SubscriptionBillingScheduleInput`. */
export type SubscriptionBillingScheduleInputFlintInput = {
    /** Value enum: "flint". */
    "owner": "flint";
};
/** Who owns the billing schedule when creating a subscription: Flint or an external system. */
export type SubscriptionBillingScheduleRequest = ({
    /** Value enum: "flint", "external". */
    "owner": "flint" | "external" | (string & {});
})
    & ((Exclude<SubscriptionBillingScheduleInputFlint & object, readonly unknown[]>)
    | (Exclude<SubscriptionBillingScheduleInputExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Who owns the billing schedule when creating a subscription: Flint or an external system. */
export type SubscriptionBillingScheduleRequestInput = ({
    /** Value enum: "flint", "external". */
    "owner": "flint" | "external";
})
    & ((Exclude<SubscriptionBillingScheduleInputFlintInput & object, readonly unknown[]>)
    | (Exclude<SubscriptionBillingScheduleInputExternalInput & object, readonly unknown[]>));
/** The `external` variant of `SubscriptionBillingScheduleUpdateInput`. */
export type SubscriptionBillingScheduleUpdateInputExternal = {
    /**
     * Future date at which Flint attempts the next charge. Omit to preserve the date or send null
     * to clear it. Format: date-time. minLength: 1.
     */
    "next_billing_at"?: string | null;
    /** Value enum: "external". */
    "owner": "external" | (string & {});
};
/** The `external` variant of `SubscriptionBillingScheduleUpdateInput`. */
export type SubscriptionBillingScheduleUpdateInputExternalInput = {
    /**
     * Future date at which Flint attempts the next charge. Omit to preserve the date or send null
     * to clear it. Format: date-time. minLength: 1.
     */
    "next_billing_at"?: string | globalThis.Date | null;
    /** Value enum: "external". */
    "owner": "external";
};
