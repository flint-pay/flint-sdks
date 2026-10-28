import type { MoneyValue } from './types-33.js';
import type { PaymentCollection, PaymentErrorSummary, PaymentLimitSettings } from './types-37.js';
import type { BrandingSettings } from './types-0.js';
import type { CheckoutSettings } from './types-4.js';
import type { CustomerAccountSettings, CustomerEmailDeliverySettings, CustomDomainsRemoveInput } from './types-11.js';
import type { FulfillmentSettings } from './types-19.js';
import type { InventorySettings } from './types-27.js';
import type { InvoiceSettings } from './types-29.js';
import type { LegalSettings } from './types-30.js';
import type { MetadataMap, MetadataRequestInput } from './types-32.js';
import type { PromotionSettings, ReceiptSettings } from './types-41.js';
import type {
    SubscriptionSettings,
    SubscriptionPromotion,
    SubscriptionServiceLocation,
    SubscriptionUpcomingDeliveryHold,
    SubscriptionSnapshotMetrics,
    SubscriptionWindowMetrics
} from './types-49.js';
import type { TaxIdentity, TaxSettings, TippingSettings } from './types-50.js';
import type { ResponseMeta } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { UpdateSettingsRequestInput, UpdateShipmentRequestInput } from './types-52.js';
import type {
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedCustomerSummary,
    ExpandedPaymentMethodSummary,
    ExpandedSubscriptionPlanSummary
} from './types-18.js';
import type { ReturnResolutionLineItemRequest } from './types-44.js';
import type { PackageCreateRequestInput } from './types-36.js';
import type { VoidShipmentRequestInput } from './types-53.js';
import type { Dimensions, DimensionsInput } from './types-17.js';
import type { Weight, WeightInput } from './types-65.js';
import type { ConfigurationVersionRequestInput } from './types-5.js';
import type { BuyerAction } from './types-1.js';
import type {
    SubscriptionCancellationDetails,
    SubscriptionDelivery,
    SubscriptionDeliveryHold,
    SubscriptionIntervalOption,
    SubscriptionInventoryWait,
    SubscriptionLineItem
} from './types-48.js';
/**
 * Shape $ (Value): {@link SelectableErrorResource}. A resource the caller can select for a request
 * field.
 */
export type SelectableErrorResource = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount for this choice when available. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. Resource display name when available. */
    "display_name"?: string;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary}. Most recent payment failure when available. A
     * summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Shape $ (Value): {@link PaymentCollection}. Payment collection details when available.
     * Client-side details for collecting payment from the buyer, such as the Stripe settings to
     * initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /** Shape $ (Value): string. Public Flint ID to submit in the refused request field. */
    "resource_id": string;
    /**
     * Shape $ (Value): string. Stable public resource name for this choice. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt",
     * "organization", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "tax_connection", "tax_registration", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": "api_key"
        | "api_request_log"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "bundle_component"
        | "category"
        | "checkout_session"
        | "checkout_session_customer_verification"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_address"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "customer_session"
        | "customer_verification"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_quote"
        | "delivery_rate"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "demo_session"
        | "device"
        | "discount"
        | "dispute"
        | "email_change_request"
        | "environment_grant"
        | "feedback_report"
        | "file"
        | "flint_wallet"
        | "flint_wallet_card"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "fulfillment_notification"
        | "gift_card"
        | "gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "image"
        | "inventory_adjustment"
        | "inventory_allocation_policy"
        | "inventory_allocation_policy_revision"
        | "inventory_count"
        | "inventory_item"
        | "inventory_level"
        | "inventory_movement"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "inventory_transfer_line"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_late_fee"
        | "invoice_line_item"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "invoice_payment_term"
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "organization"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_credential"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "report"
        | "report_download"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_inspection_line_item"
        | "return_line_item"
        | "return_policy"
        | "return_policy_revision"
        | "return_reason"
        | "return_receipt"
        | "return_receipt_line_item"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "sandbox"
        | "settings"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_line_item"
        | "subscription_offer"
        | "subscription_payment_retry"
        | "subscription_plan"
        | "subscription_plan_line_item"
        | "tax_connection"
        | "tax_registration"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
    /** Shape $ (Value): string. Current public status when available. */
    "status"?: string;
    /**
     * Shape $ (Value): Array of string. Actions offered for this resource when the request was
     * refused. An empty array means no action is offered; an omitted field means actions were not
     * reported. Shape $[] (Value): string.
     */
    "supported_actions"?: Array<string>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Tip for this choice when available. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link SelectableOrderPaymentIntent}. A payment intent on an order the caller
 * can pick, with its amount, status, and last payment error.
 */
export type SelectableOrderPaymentIntent = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount requested from the buyer, including any
     * tip_money. Capturing doesn't change it: after a partial capture it still shows the requested
     * amount, and captured_money shows what was collected. On a standalone payment intent, PATCH
     * can change it only before the first confirmation attempt. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary}. Most recent payment failure, when one is
     * recorded. A summary of why a payment attempt failed, with a normalized error code, a
     * message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Shape $ (Value): {@link PaymentCollection}. Client setup details for collecting this
     * payment. Client-side details for collecting payment from the buyer, such as the Stripe
     * settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /** Shape $ (Value): string. Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment
     * intent and one whose last attempt failed, so read last_payment_error with it. succeeded,
     * canceled, and expired are final. Refunds and disputes never change status. Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired".
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
     * Shape $ (Value): {@link MoneyValue}. Portion of this payment's amount allocated to a tip.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link SelectedProductOption}. An option and value chosen for a product
 * variant, such as size Large.
 */
export type SelectedProductOption = {
    /** Shape $ (Value): string. Identifier of the selected product option. */
    "option_id": string;
    /** Shape $ (Value): string. Name of the selected product option. */
    "option_name": string;
    /** Shape $ (Value): string. Identifier of the selected option value. */
    "option_value_id": string;
    /** Shape $ (Value): string. Selected value of the product option. */
    "value": string;
};
/**
 * Shape $ (Value): {@link SellerTaxAttestationRequest}. The seller's agreement to the current
 * automatic sales tax disclosure, recorded when connect succeeds.
 */
export type SellerTaxAttestationRequest = {
    /**
     * Shape $ (Value): string. Current disclosure version from GET /v1/tax-connection. Send only
     * after the seller agrees to every rendered statement. minLength: 1.
     */
    "disclosure_version": string;
};
/**
 * Shape $ (Value): {@link SellerTaxAttestationRequestInput}. The seller's agreement to the current
 * automatic sales tax disclosure, recorded when connect succeeds.
 */
export type SellerTaxAttestationRequestInput = SellerTaxAttestationRequest;
/**
 * Shape $ (Value): {@link SendOrderReceiptRequest}. The request body for: Send an order receipt.
 */
export type SendOrderReceiptRequest = {
    /**
     * Shape $ (Value): string. Receipt email, limited to 254 characters (Unicode code points)
     * after trimming surrounding whitespace. Format: email. minLength: 1. maxLength: 254.
     */
    "email"?: string;
};
/**
 * Shape $ (Value): {@link SendOrderReceiptRequestInput}. The request body for: Send an order
 * receipt.
 */
export type SendOrderReceiptRequestInput = SendOrderReceiptRequest;
/**
 * Shape $ (Value): {@link SendPaymentIntentReceiptRequestInput}. The request body for: Send a
 * payment receipt.
 */
export type SendPaymentIntentReceiptRequestInput = {
    /**
     * Shape $ (Value): string. Email address that receives the receipt. Omit to use the order's
     * receipt address for an order-owned intent, or receipt_email then the customer's email for a
     * standalone intent. Format: email. minLength: 1. maxLength: 254.
     */
    "email"?: string;
};
/**
 * Shape $ (Value): {@link ServiceFulfillmentDetails}. Details of a service fulfillment: the
 * scheduled start and end, timezone, completion time, and notes.
 */
export type ServiceFulfillmentDetails = {
    /**
     * Shape $ (Value): string. When the service was completed, in RFC3339 format. Format:
     * date-time.
     */
    "completed_at"?: string;
    /** Shape $ (Value): string. Additional instructions or notes for performing the service. */
    "notes"?: string;
    /**
     * Shape $ (Value): string. Scheduled end of the service, in RFC3339 format. Format: date-time.
     */
    "scheduled_end_at"?: string;
    /**
     * Shape $ (Value): string. Scheduled start of the service, in RFC3339 format. Format:
     * date-time.
     */
    "scheduled_start_at"?: string;
    /** Shape $ (Value): string. Timezone used to display the service appointment. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link Settings}. The settings for one scope (organization, merchant, location,
 * or device), grouped by area such as checkout, tax, receipts, and tipping.
 */
export type Settings = {
    /**
     * Shape $ (Value): {@link BrandingSettings}. A merchant's branding settings: colors, corner
     * radius, and font family. Checkout uses them as its default theme.
     */
    "branding"?: BrandingSettings;
    /**
     * Shape $ (Value): {@link CheckoutSettings}. Merchant defaults for checkout: custom domain,
     * delivery methods, expiration, payment options, required contact fields, promotion codes,
     * recovery email, and saved payment details.
     */
    "checkout"?: CheckoutSettings;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link CustomerAccountSettings}. Customer account settings: hosted mode,
     * merchant account URL, presentation, route templates, and what buyers may do to their own
     * subscriptions.
     */
    "customer_account"?: CustomerAccountSettings;
    /**
     * Shape $ (Value): {@link CustomerEmailDeliverySettings}. For each kind of customer email,
     * whether Flint sends it or the merchant sends it.
     */
    "customer_email_delivery"?: CustomerEmailDeliverySettings;
    /**
     * Shape $ (Value): {@link FulfillmentSettings}. Merchant fulfillment settings, including
     * whether fulfillments require approval (`approval_required`).
     */
    "fulfillment"?: FulfillmentSettings;
    /**
     * Shape $ (Value): {@link InventorySettings}. Inventory settings: the `low_stock_threshold`
     * and how inventory failures are handled for each order source.
     */
    "inventory"?: InventorySettings;
    /**
     * Shape $ (Value): {@link InvoiceSettings}. Merchant defaults for invoices, including
     * numbering prefixes, default memo and footer, collection mode, reminders, and autopay
     * retries.
     */
    "invoices"?: InvoiceSettings;
    /**
     * Shape $ (Value): {@link LegalSettings}. Merchant legal links and terms settings: contract,
     * refund policy, shipping policy, and terms of service URLs, and whether buyers must accept
     * the terms.
     */
    "legal"?: LegalSettings;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link PaymentLimitSettings}. Optional merchant limits that can lower
     * Flint's payment-option and surface policy limits.
     */
    "payment_limits"?: PaymentLimitSettings;
    /**
     * Shape $ (Value): {@link PromotionSettings}. Merchant promotion settings: whether automatic
     * promotions and codes are enabled, and how many promotions can apply to one order.
     */
    "promotions"?: PromotionSettings;
    /**
     * Shape $ (Value): {@link ReceiptSettings}. Receipt settings: whether receipts are emailed
     * automatically, whether they are itemized, and the header and footer text.
     */
    "receipts"?: ReceiptSettings;
    /** Shape $ (Value): string. */
    "settings_id": string;
    /**
     * Shape $ (Value): {@link SubscriptionSettings}. Subscription settings: the default billing
     * schedule owner, dunning retry days and end action, and the backorder email.
     */
    "subscriptions"?: SubscriptionSettings;
    /**
     * Shape $ (Value): {@link TaxSettings}. Tax settings: whether tax is calculated by default and
     * the default tax categories for line items and delivery charges.
     */
    "tax"?: TaxSettings;
    /**
     * Shape $ (Value): {@link TaxIdentity} or null. Shape $.anyOf[1] (Value): {@link TaxIdentity}.
     * Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs
     * or change tax treatment. Tax IDs are an owned collection in display order; replacing the
     * array requires the parent's expected_version. Existing entries retain their document_tax_id;
     * omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2] (Value): null.
     */
    "tax_identity": ((TaxIdentity) | (null));
    /**
     * Shape $ (Value): {@link TippingSettings}. Tipping settings: percent and fixed tip options,
     * the preselected tip, and whether custom tips are allowed.
     */
    "tipping"?: TippingSettings;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
export type SettingsGetEffectiveInput = {};
export type SettingsGetInput = {};
/** Shape $ (Value): {@link SettingsResponse}. A response containing `Settings` data. */
export type SettingsResponse = {
    /**
     * Shape $ (Value): {@link Settings}. The settings for one scope (organization, merchant,
     * location, or device), grouped by area such as checkout, tax, receipts, and tipping.
     */
    "data": Settings;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type SettingsUpdateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateSettingsRequestInput}. The request body for: Update merchant
     * settings.
     */
    "body": InputValue<UpdateSettingsRequestInput>;
};
export type SettingsValidateCustomDomainInput = CustomDomainsRemoveInput;
/**
 * Shape $ (Value): {@link SettlementAmounts}. How much of an order has been paid, refunded,
 * credited, written off, and settled as tips, and what balance and outstanding amount remain.
 */
export type SettlementAmounts = {
    /**
     * Shape $ (Value): {@link MoneyValue}. outstanding_money minus credit_money. Negative when the
     * order holds money beyond its total that has not been returned. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "balance_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Money collected beyond the order total and not yet
     * refunded. Write-offs do not create credit. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Payments collected for the order minus money refunded
     * to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "net_collected_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. What is still left to collect: the order total minus
     * paid_money and written_off_money, never below zero. Refunds return money already collected
     * and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Settled payments and applied return credit. Excludes
     * written-off invoice balances. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Money returned to the buyer from what this order
     * collected. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Portion of the collected money settled as tips.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "settled_tip_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Invoice debt no longer owed. Reduces outstanding_money
     * without increasing paid_money, net_collected_money, or credit_money. Cannot be refunded or
     * used to fund an exchange. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
/** Shape $ (Value): {@link Shipment}. A shipment carrying fulfilled order items. */
export type Shipment = {
    /** Shape $ (Value): string. Creation timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. When the shipment was delivered, in RFC3339 format. Format:
     * date-time.
     */
    "delivered_at"?: string;
    /**
     * Shape $ (Value): string. Whether the shipment sends items to the buyer or returns items to
     * the merchant. Value enum: "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries.
     */
    "external_system"?: string;
    /** Shape $ (Value): string. Fulfillment associated with this shipment. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): string. Carrier handoff timestamp for outbound and return shipments, using
     * the recorded shipped_at when no separate handoff timestamp exists. For return shipments,
     * this can satisfy an after_handoff execution gate for the declared return_line_items. Format:
     * date-time.
     */
    "handed_off_at"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value metadata associated with the
     * shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Order summary returned when the order
     * relationship is expanded. Shape $.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. Order whose items are transported by the shipment. */
    "order_id": string;
    /**
     * Shape $ (Value): integer. Total number of packages attached to the shipment, including
     * voided packages. Format: int32. minimum: 0.
     */
    "package_count": number;
    /**
     * Shape $ (Value): Array of {@link ExpandedPackageSummary}. Summaries of the shipment's
     * packages in creation order, returned when the packages relationship is expanded or when the
     * shipment is created with packages. Shape $[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded.
     */
    "packages"?: Array<ExpandedPackageSummary>;
    /**
     * Shape $ (Value): string. Return associated with this shipment, when its direction is return.
     */
    "return_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Return lines and
     * quantities allocated to this return shipment. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Shape $ (Value): string. Stable identifier of the shipment. */
    "shipment_id": string;
    /**
     * Shape $ (Value): string. When the shipment was shipped, in RFC3339 format. Format:
     * date-time.
     */
    "shipped_at"?: string;
    /**
     * Shape $ (Value): string. Read-only shipment state derived from the shipment's package
     * states. An empty shipment remains a created draft. - `created`: The shipment leg exists but
     * has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting
     * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`:
     * The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment
     * is on its final delivery route. - `delivered`: The carrier reported successful delivery. -
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
    /** Shape $ (Value): string. Last update timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Monotonic shipment version for expected_version checks. Use
     * an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ShipmentFulfillmentDetails}. Details of a shipment fulfillment: the
 * shipping window, timezone, and when the shipment was handed to the carrier.
 */
export type ShipmentFulfillmentDetails = {
    /** Shape $ (Value): string. When the shipment was handed to the carrier. Format: date-time. */
    "shipped_at"?: string;
    /**
     * Shape $ (Value): string. IANA zone the shipping window was entered in, used for display.
     * window_start_at and window_end_at are absolute timestamps, so this does not change the
     * window. maxLength: 255.
     */
    "timezone"?: string;
    /** Shape $ (Value): string. End of the scheduled shipping window. Format: date-time. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. Start of the scheduled shipping window. Format: date-time. */
    "window_start_at"?: string;
};
/** Shape $ (Value): {@link ShipmentListResponse}. A page of `Shipment` objects. */
export type ShipmentListResponse = {
    /**
     * Shape $ (Value): Array of {@link Shipment}. Shape $[] (Value): {@link Shipment}. A shipment
     * carrying fulfilled order items.
     */
    "data": Array<Shipment>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link ShipmentResponse}. A response containing `Shipment` data. */
export type ShipmentResponse = {
    /** Shape $ (Value): {@link Shipment}. A shipment carrying fulfilled order items. */
    "data": Shipment;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ShipmentsCreatePackageInput = {
    /** Shape $ (Value): string. */
    "shipment_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link PackageCreateRequestInput}. The request body for: Create package. */
    "body": InputValue<PackageCreateRequestInput>;
};
export type ShipmentsGetInput = {
    /** Shape $ (Value): string. */
    "shipment_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order", "packages". Shape $[] (Value): string.
     * Value enum: "order", "packages".
     */
    "expand"?: InputValue<Array<"order" | "packages">>;
};
export type ShipmentsListInput = {
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "external_system"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "handed_off_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "handed_off_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". Shape $[] (Value): string. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
     */
    "status"?: InputValue<Array<"created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "outbound", "return". Shape $[]
     * (Value): string. Value enum: "outbound", "return".
     */
    "direction"?: InputValue<Array<"outbound" | "return">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
};
export type ShipmentsUpdateInput = {
    /** Shape $ (Value): string. */
    "shipment_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateShipmentRequestInput}. The request body for: Update shipment.
     */
    "body": InputValue<UpdateShipmentRequestInput>;
};
export type ShipmentsVoidResourceInput = {
    /** Shape $ (Value): string. */
    "shipment_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link VoidShipmentRequestInput}. The request body for: Void shipment. */
    "body"?: InputValue<VoidShipmentRequestInput>;
};
/**
 * Shape $ (Value): {@link SignedMoneyRequestRequestInput}. Signed monetary amount represented as
 * integer minor units plus an ISO 4217 currency code.
 */
export type SignedMoneyRequestRequestInput = {
    /**
     * Shape $ (Value): integer string. Signed amount in the currency's minor unit, such as cents
     * for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "amount": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
};
/**
 * Shape $ (Value): {@link SinglePackageCreateInputCreated}. The single package created with a
 * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
 * created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputCreated = ({
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): {@link Dimensions}. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1.
     */
    "label_url"?: string;
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
    "service_code"?: string;
    /**
     * Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with
     * status shipped. Format: date-time. minLength: 1.
     */
    "shipped_at"?: string;
    /** Shape $ (Value): string.  Value enum: "created". */
    "status": "created" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "status_reason"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): {@link Weight}. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "weight"?: Weight;
});
/**
 * Shape $ (Value): {@link SinglePackageCreateInputCreatedInput}. The single package created with a
 * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
 * created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputCreatedInput = ({
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): {@link DimensionsInput}. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1.
     */
    "label_url"?: string;
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
    "service_code"?: string;
    /**
     * Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with
     * status shipped. Format: date-time. minLength: 1.
     */
    "shipped_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "created". */
    "status": "created";
    /** Shape $ (Value): string. minLength: 1. */
    "status_reason"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): {@link WeightInput}. A weight value in grams, kilograms, ounces, or pounds,
     * used in delivery profile configuration.
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
 * Shape $ (Value): {@link SinglePackageCreateInputShipped}. The single package created with a
 * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
 * created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputShipped = ({
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): {@link Dimensions}. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1.
     */
    "label_url"?: string;
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
    "service_code"?: string;
    /**
     * Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with
     * status shipped. Format: date-time. minLength: 1.
     */
    "shipped_at"?: string;
    /** Shape $ (Value): string.  Value enum: "shipped". */
    "status": "shipped" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "status_reason"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): {@link Weight}. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "weight"?: Weight;
});
/**
 * Shape $ (Value): {@link SinglePackageCreateInputShippedInput}. The single package created with a
 * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
 * created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputShippedInput = ({
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): {@link DimensionsInput}. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1.
     */
    "label_url"?: string;
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
    "service_code"?: string;
    /**
     * Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with
     * status shipped. Format: date-time. minLength: 1.
     */
    "shipped_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "shipped". */
    "status": "shipped";
    /** Shape $ (Value): string. minLength: 1. */
    "status_reason"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): {@link WeightInput}. A weight value in grams, kilograms, ounces, or pounds,
     * used in delivery profile configuration.
     */
    "weight"?: WeightInput;
})
    & (({
    "return_line_items"?: never;
}));
/**
 * Shape $ (Value): {@link SinglePackageCreateRequest}. The single package created with a shipment
 * fulfillment. It receives the submitted fulfillment line quantities. Set status to created or
 * shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateRequest = ({
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): {@link Dimensions}. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1.
     */
    "label_url"?: string;
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
    "service_code"?: string;
    /**
     * Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with
     * status shipped. Format: date-time. minLength: 1.
     */
    "shipped_at"?: string;
    /** Shape $ (Value): string.  Value enum: "created", "shipped". */
    "status": "created" | "shipped" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "status_reason"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): {@link Weight}. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "weight"?: Weight;
})
    & ((Exclude<SinglePackageCreateInputCreated & object, readonly unknown[]>)
    | (Exclude<SinglePackageCreateInputShipped & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link SinglePackageCreateRequestInput}. The single package created with a
 * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
 * created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateRequestInput = ({
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): {@link DimensionsInput}. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates
     * and transitions. Format: date-time. minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1.
     */
    "label_url"?: string;
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
    "service_code"?: string;
    /**
     * Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with
     * status shipped. Format: date-time. minLength: 1.
     */
    "shipped_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "created", "shipped". */
    "status": "created" | "shipped";
    /** Shape $ (Value): string. minLength: 1. */
    "status_reason"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): {@link WeightInput}. A weight value in grams, kilograms, ounces, or pounds,
     * used in delivery profile configuration.
     */
    "weight"?: WeightInput;
})
    & ((Exclude<SinglePackageCreateInputCreatedInput & object, readonly unknown[]>)
    | (Exclude<SinglePackageCreateInputShippedInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link SkipMeSubscriptionCycleRequestInput}. The request body for: Skip
 * subscription cycle.
 */
export type SkipMeSubscriptionCycleRequestInput = ConfigurationVersionRequestInput;
/**
 * Shape $ (Value): {@link SkipSubscriptionCycleRequest}. The request body for: Skip subscription
 * cycle.
 */
export type SkipSubscriptionCycleRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Who asked for the skip: buyer, merchant, or integration. Defaults
     * to merchant. Flint's skip email to the buyer says the buyer skipped for buyer, and that the
     * store skipped otherwise. Default: "merchant". Value enum: "buyer", "merchant",
     * "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration" | (string & {});
};
/**
 * Shape $ (Value): {@link SkipSubscriptionCycleRequestInput}. The request body for: Skip
 * subscription cycle.
 */
export type SkipSubscriptionCycleRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Who asked for the skip: buyer, merchant, or integration. Defaults
     * to merchant. Flint's skip email to the buyer says the buyer skipped for buyer, and that the
     * store skipped otherwise. Default: "merchant". Value enum: "buyer", "merchant",
     * "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration";
};
export type SpecificationGetInput = {
    /** Shape $ (Value): string. */
    "version"?: InputValue<string>;
};
export type SpecificationGetResponse = {
    [key: string]: unknown;
};
/**
 * Shape $ (Value): {@link StripeClientAuthority}. One-time client authority for the named Stripe
 * object. This payload always names the Stripe.js call and carries its client secret.
 */
export type StripeClientAuthority = {
    /** Shape $ (Value): string. Stripe client secret for the named PaymentIntent or SetupIntent. */
    "client_secret": string;
    /**
     * Shape $ (Value): string. Stripe.js operation to perform now. confirm_setup applies to
     * client_setup. Standalone PaymentIntents use payment_collection plus server confirmation
     * instead of initial confirm_payment authority. Value enum: "confirm_payment",
     * "confirm_setup".
     */
    "stripe_js_call": "confirm_payment" | "confirm_setup" | (string & {});
};
/**
 * Shape $ (Value): {@link StripeClientSetup}. Stripe.js setup authority returned while saving a
 * payment method. Follow its stripe_js_call now. setup_collection is guidance instead and never
 * carries a secret.
 */
export type StripeClientSetup = {
    /**
     * Shape $ (Value): {@link StripeClientSetupStripe}. Stripe.js initialization context and
     * SetupIntent setup authority.
     */
    "stripe"?: StripeClientSetupStripe;
};
/**
 * Shape $ (Value): {@link StripeClientSetupStripe}. Stripe.js initialization context and
 * SetupIntent setup authority.
 */
export type StripeClientSetupStripe = {
    /**
     * Shape $ (Value): string. Stripe connected account ID to pass as stripeAccount when
     * initializing Stripe.js.
     */
    "account_id"?: string;
    /**
     * Shape $ (Value): string. Stripe publishable key for the active Flint payment mode; use this
     * with account_id when loading Stripe.js.
     */
    "publishable_key"?: string;
    /**
     * Shape $ (Value): {@link StripeClientAuthority}. One-time client authority for the named
     * Stripe object. This payload always names the Stripe.js call and carries its client secret.
     */
    "setup_intent"?: StripeClientAuthority;
};
/**
 * Shape $ (Value): {@link StripePaymentClientAction}. Stripe.js initialization context plus one
 * flow-specific authority object. Exactly one of payment_intent or setup_intent is present.
 */
export type StripePaymentClientAction = {
    /**
     * Shape $ (Value): string. Stripe connected account ID to pass as stripeAccount when
     * initializing Stripe.js.
     */
    "account_id": string;
    /**
     * Shape $ (Value): {@link StripeSetupIntentClientAction}. PaymentIntent authority for an order
     * payment authentication action. The client action for a Stripe payment intent: the client
     * secret to pass to Stripe.js `handleNextAction`.
     */
    "payment_intent"?: StripeSetupIntentClientAction;
    /**
     * Shape $ (Value): string. Stripe publishable key for the active Flint payment mode; use this
     * with account_id when loading Stripe.js.
     */
    "publishable_key": string;
    /**
     * Shape $ (Value): {@link StripeSetupIntentClientAction}. SetupIntent authority for a
     * saved-payment-method authentication action. The client action for a Stripe setup intent: the
     * client secret to pass to Stripe.js `handleNextAction`.
     */
    "setup_intent"?: StripeSetupIntentClientAction;
};
/**
 * Shape $ (Value): {@link StripeSetupIntentClientAction}. The client action for a Stripe setup
 * intent: the client secret to pass to Stripe.js `handleNextAction`.
 */
export type StripeSetupIntentClientAction = {
    /** Shape $ (Value): string. SetupIntent client secret to pass to Stripe.js handleNextAction. */
    "client_secret": string;
    /**
     * Shape $ (Value): string. Stripe.js operation to perform. Today this is handle_next_action.
     * Value enum: "handle_next_action".
     */
    "stripe_js_call": "handle_next_action" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscribedLine}. The subscription offer and billing interval an order
 * line was bought under, with the recurring amount.
 */
export type SubscribedLine = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Line amount for the first renewal, including modifiers
     * and recurring discounts, before shipping and tax. Signup-only discounts are excluded.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "recurring_amount_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "subscription_offer_id": string;
};
/**
 * Shape $ (Value): {@link SubscribedLineRequest}. Makes an order line a subscription purchase,
 * with the subscription offer and billing interval.
 */
export type SubscribedLineRequest = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): string. Active subscription offer for this catalog variant. minLength: 1.
     */
    "subscription_offer_id": string;
};
/**
 * Shape $ (Value): {@link SubscribedLineRequestInput}. Makes an order line a subscription
 * purchase, with the subscription offer and billing interval.
 */
export type SubscribedLineRequestInput = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): string. Active subscription offer for this catalog variant. minLength: 1.
     */
    "subscription_offer_id": string;
};
/** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
export type Subscription = {
    /**
     * Shape $ (Value): boolean. True while an active or trialing subscription on an external
     * billing schedule has no next billing date.
     */
    "awaiting_billing_schedule"?: boolean;
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing. Applies
     * only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Shape $ (Value): string. How often the subscription bills now. Read with
     * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the
     * next renewal that has not been paid; next_billing_at does not move. Value enum: "daily",
     * "weekly", "monthly", "yearly".
     */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Shape $ (Value): integer. Number of billing_interval units between charges. Changes with
     * billing_interval. Format: int32.
     */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. maxItems: 12. uniqueItems:
     * true. Shape $[] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as
     * every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * Shape $ (Value): string. Who supplies billing dates: flint advances the schedule after each
     * paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH
     * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
     */
    "billing_schedule_owner": "flint" | "external" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "billing_schedule_waiting_started_at"?: string;
    /**
     * Shape $ (Value): Array of {@link BuyerAction}. What the buyer can do with the subscription,
     * in this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, then renew,
     * under the store's buyer policy. The available cancel and pause actions carry the choices
     * they accept. A buyer's read or change through a customer session on /v1/me, or in Flint's
     * buyer account, lists all twelve every time; a merchant read gets an empty list.
     * update_payment_method is required while a payment is past due, due by next_retry_at when a
     * retry is scheduled, and when the card expires before next_billing_at, due by then. Example:
     * []. Shape $[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * Shape $ (Value): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false.
     */
    "cancel_at_period_end": boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and
     * why. Present once a cancellation is requested, whether it takes effect at the end of the
     * billing period or right away. Omitted when no one asked, and removed when a scheduled
     * cancellation is undone. See cancellation_reason for voluntary and payment-related
     * cancellations. The cancellation request behind a scheduled or completed cancellation.
     */
    "cancellation_details"?: SubscriptionCancellationDetails;
    /**
     * Shape $ (Value): string. Why the subscription is canceled or scheduled to cancel. Uses
     * cancellation_details.requested_by when recorded, payment_failed for a canceled subscription
     * without a requester, and other for a scheduled cancellation without a requester. Omitted
     * otherwise. Value enum: "buyer", "merchant", "payment_failed", "other".
     */
    "cancellation_reason"?: "buyer" | "merchant" | "payment_failed" | "other" | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "completed_cycles": `${bigint}`;
    /**
     * Shape $ (Value): string. When the recorded contract term ends. Does not move when the
     * subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier.
     * Format: date-time.
     */
    "contract_end_at"?: string;
    /**
     * Shape $ (Value): string. When the recorded contract term started. Does not move when the
     * subscription pauses or changes plan. Format: date-time.
     */
    "contract_start_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "current_period_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "current_period_start_at"?: string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id": string;
    /**
     * Shape $ (Value): {@link SubscriptionDelivery}. Saved delivery preference with the current
     * delivery method display. Write responses use the same display as GET: fixed shipping
     * reflects the current method configuration, and quoted shipping shows the last paid shipping
     * amount when available. A subscription's saved delivery preference: method, destination,
     * recipient, shipping cost, and who last changed it.
     */
    "delivery"?: SubscriptionDelivery;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
     * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
     * deliveries because its delivery method or destination no longer works, and who can fix it.
     */
    "delivery_hold"?: SubscriptionDeliveryHold;
    /**
     * Shape $ (Value): {@link MoneyValue}. The fee in the recorded contract terms. Present
     * whenever those terms include a fee. It applies only to a cancellation before
     * contract_end_at. Flint never charges it. Later plan changes do not change this fee. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link SubscriptionInventoryWait}. Renewal waiting for stock. Included only
     * in merchant responses and omitted from buyer responses. Shows that a subscription renewal is
     * waiting for inventory, with the order and invoice involved and when the wait started.
     */
    "inventory_wait"?: SubscriptionInventoryWait;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary}. Latest renewal payment failure, present only
     * while status is past_due and the latest payment failed. Buyer responses omit merchant
     * remediation and sensitive decline signals. A summary of why a payment attempt failed, with a
     * normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Shape $ (Value): Array of {@link SubscriptionLineItem}. What each renewal bills. Plan edits
     * do not change it. Adding, changing or swapping a line takes that variant's current catalog
     * price, which then stays until the line changes again. Shape $[] (Value): {@link
     * SubscriptionLineItem}. An item included in a customer's recurring purchase.
     */
    "line_items": Array<SubscriptionLineItem>;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. The billing date whose payment failed, as an RFC3339 timestamp.
     * Present only while status is past_due. Format: date-time.
     */
    "missed_billing_at"?: string;
    /**
     * Shape $ (Value): string. When Flint next starts a scheduled renewal charge, as an RFC3339
     * timestamp. Present only while a trialing or active subscription has a billing date and isn't
     * set to cancel at the end of its period. Absent when no renewal is scheduled: a paused
     * subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date
     * in missed_billing_at and retries at next_retry_at, an incomplete one retries at
     * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
     * scheduled_cancel_at, and an external schedule awaiting a date reports
     * awaiting_billing_schedule. Format: date-time.
     */
    "next_billing_at"?: string;
    /**
     * Shape $ (Value): string or null. Recorded automatic payment retry time. Null when no retry
     * time is available. Format: date-time.
     */
    "next_retry_at": string | null;
    /**
     * Shape $ (Value): string. ID of the paid renewal order whose shipment has not been
     * dispatched. It keeps its committed delivery destination after preference changes and
     * cancellation. Absent when no such renewal order exists. Only renewal orders count; the
     * signup order is not included.
     */
    "open_renewal_order_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Unpaid balance of the failed renewal order, including
     * tax, shipping and discounts, after payments and credits. Present only while status is
     * past_due and a positive balance remains. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "outstanding_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Why the subscription is paused: merchant for a pause made with your
     * API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
     * during or after a delivery hold, and payment_failed when renewal payment retries ran out and
     * your dunning settings pause the subscription. Omitted when the subscription is not paused.
     * Value enum: "buyer", "delivery_action_required", "merchant", "payment_failed".
     */
    "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "paused_at"?: string;
    /**
     * Shape $ (Value): {@link ExpandedPaymentMethodSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
     * status, and card details, returned when the payment method is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
    /** Shape $ (Value): string. The saved payment method renewals charge. Change it with PATCH. */
    "payment_method_id": string;
    /**
     * Shape $ (Value): Array of {@link SubscriptionPromotion}. Recurring promotions applying to
     * the next charged cycle. Empty when none apply; signup-only and exhausted promotions are
     * excluded. Shape $[] (Value): {@link SubscriptionPromotion}. A recurring promotion applied to
     * a subscription, including its recurrence and remaining discounted cycles.
     */
    "promotions": Array<SubscriptionPromotion>;
    /**
     * Shape $ (Value): integer. How many of each line the subscription bills each period, as a
     * whole number; fractional quantities are not supported. A change applies from the next
     * renewal that has not been paid. Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): Array of integer. maxItems: 10. uniqueItems: true. Shape $[] (Value):
     * integer. minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. What one billing period's items cost before
     * discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes
     * when items, quantity, or the plan change; editing the plan doesn't change it. For the next
     * charge, use a subscription preview in next_renewal mode. Shape $.anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. Shape $.anyOf[2] (Value): null.
     */
    "recurring_subtotal_money": ((MoneyValue) | (null));
    /**
     * Shape $ (Value): string or null. When Flint accepted a pending resume request. Set only
     * while paused with a resume Flint has not applied yet. Clears when Flint resumes the
     * subscription or refuses the request. Format: date-time.
     */
    "resume_requested_at": string | null;
    /**
     * Shape $ (Value): string or null. When the scheduled cancellation takes effect: trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     */
    "scheduled_cancel_at": string | null;
    /**
     * Shape $ (Value): string or null. When a pause with a length (pause_duration_cycles) resumes
     * on its own: that many billing intervals after paused_at. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time.
     */
    "scheduled_resume_at": string | null;
    /**
     * Shape $ (Value): {@link SubscriptionServiceLocation}. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. The address where a
     * subscription's service is delivered, with the saved customer address it came from.
     */
    "service_location"?: SubscriptionServiceLocation;
    /**
     * Shape $ (Value): string. When a scheduled start's first billing period begins. Present only
     * until that first payment succeeds. Format: date-time.
     */
    "starts_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "trialing", "active", "paused", "past_due", "canceled",
     * "incomplete", "scheduled".
     */
    "status": "trialing"
        | "active"
        | "paused"
        | "past_due"
        | "canceled"
        | "incomplete"
        | "scheduled"
        | (string & {});
    /** Shape $ (Value): string. */
    "subscription_id": string;
    /**
     * Shape $ (Value): {@link ExpandedSubscriptionPlanSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
     * name, billing interval, currency, and status, returned when the plan is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /**
     * Shape $ (Value): string. Subscription plan ID. Omitted when terms_type is
     * subscription_offer.
     */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): Array of string. Merchant actions allowed by the subscription's state. A
     * route can still refuse a listed action for a transient reason, such as a renewal already in
     * progress, with its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
     * "retry_payment", "change_plan". Shape $[] (Value): string. Value enum: "cancel", "pause",
     * "resume", "skip_cycle", "renew", "retry_payment", "change_plan".
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
     * Shape $ (Value): string. Terms come from the subscription plan in subscription_plan_id, or
     * from subscription offers identified on each offer line by subscription_offer_id. Value enum:
     * "subscription_plan", "subscription_offer".
     */
    "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "trial_end_at"?: string;
    /**
     * Shape $ (Value): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the
     * next renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem
     * detected for an upcoming renewal that will hold the subscription's delivery, and who can fix
     * it.
     */
    "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link SubscriptionAddressVerification}. The verification state of a
 * subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`.
 */
export type SubscriptionAddressVerification = {
    /**
     * Shape $ (Value): string. Value enum: "verified", "unverified", "needs_review",
     * "unverifiable".
     */
    "state": "verified" | "unverified" | "needs_review" | "unverifiable" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionAnalytics}. The half-open period [period_start_at,
 * period_end_at) includes its start and excludes its end. Amounts and payments_count use currency;
 * customer and subscription counts span currencies.
 */
export type SubscriptionAnalytics = {
    /**
     * Shape $ (Value): Array of string. Currencies of subscription payments selected by succeeded
     * activity created_at in the period, plus current active and past_due billing snapshots,
     * regardless of the currency filter. The half-open period [period_start_at, period_end_at)
     * includes its start and excludes its end. Amounts and payments_count use currency; customer
     * and subscription counts span currencies. Shape $[] (Value): string.
     */
    "currencies": Array<string>;
    /**
     * Shape $ (Value): string. ISO 4217 currency for amounts and payment counts. Defaults to the
     * merchant's default currency. The half-open period [period_start_at, period_end_at) includes
     * its start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): string. Exclusive resolved end instant. Omitted or future request ends
     * resolve to the request time truncated to the second. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Format: date-time.
     */
    "period_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive start instant. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Format: date-time.
     */
    "period_start_at": string;
    /**
     * Shape $ (Value): {@link SubscriptionSnapshotMetrics}. Current persisted subscription state
     * at computation time, cached briefly. Independent of the requested period end. The half-open
     * period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. The half-open
     * period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies.
     */
    "snapshot_metrics": SubscriptionSnapshotMetrics;
    /**
     * Shape $ (Value): {@link SubscriptionWindowMetrics}. Subscription creation, cancellation, and
     * payment success metrics selected within the requested period. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. The half-open
     * period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies.
     */
    "window_metrics": SubscriptionWindowMetrics;
};
/**
 * Shape $ (Value): {@link SubscriptionAnalyticsResponse}. A response containing
 * `SubscriptionAnalytics` data.
 */
export type SubscriptionAnalyticsResponse = {
    /**
     * Shape $ (Value): {@link SubscriptionAnalytics}. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies.
     */
    "data": SubscriptionAnalytics;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleInputExternal}. The `external` variant of
 * `SubscriptionBillingScheduleInput`.
 */
export type SubscriptionBillingScheduleInputExternal = {
    /** Shape $ (Value): string.  Value enum: "external". */
    "owner": "external" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleInputExternalInput}. The `external` variant
 * of `SubscriptionBillingScheduleInput`.
 */
export type SubscriptionBillingScheduleInputExternalInput = {
    /** Shape $ (Value): string.  Value enum: "external". */
    "owner": "external";
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleInputFlint}. The `flint` variant of
 * `SubscriptionBillingScheduleInput`.
 */
export type SubscriptionBillingScheduleInputFlint = {
    /** Shape $ (Value): string.  Value enum: "flint". */
    "owner": "flint" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleInputFlintInput}. The `flint` variant of
 * `SubscriptionBillingScheduleInput`.
 */
export type SubscriptionBillingScheduleInputFlintInput = {
    /** Shape $ (Value): string.  Value enum: "flint". */
    "owner": "flint";
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleRequest}. Who owns the billing schedule when
 * creating a subscription: Flint or an external system.
 */
export type SubscriptionBillingScheduleRequest = ({
    /** Shape $ (Value): string.  Value enum: "flint", "external". */
    "owner": "flint" | "external" | (string & {});
})
    & ((Exclude<SubscriptionBillingScheduleInputFlint & object, readonly unknown[]>)
    | (Exclude<SubscriptionBillingScheduleInputExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleRequestInput}. Who owns the billing schedule
 * when creating a subscription: Flint or an external system.
 */
export type SubscriptionBillingScheduleRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "flint", "external". */
    "owner": "flint" | "external";
})
    & ((Exclude<SubscriptionBillingScheduleInputFlintInput & object, readonly unknown[]>)
    | (Exclude<SubscriptionBillingScheduleInputExternalInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateInputExternal}. The `external` variant
 * of `SubscriptionBillingScheduleUpdateInput`.
 */
export type SubscriptionBillingScheduleUpdateInputExternal = {
    /**
     * Shape $ (Value): string or null. Future date at which Flint attempts the next charge. Omit
     * to preserve the date or send null to clear it. Format: date-time. minLength: 1.
     */
    "next_billing_at"?: string | null;
    /** Shape $ (Value): string.  Value enum: "external". */
    "owner": "external" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateInputExternalInput}. The `external`
 * variant of `SubscriptionBillingScheduleUpdateInput`.
 */
export type SubscriptionBillingScheduleUpdateInputExternalInput = {
    /**
     * Shape $ (Value): string or null. Future date at which Flint attempts the next charge. Omit
     * to preserve the date or send null to clear it. Format: date-time. minLength: 1.
     */
    "next_billing_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string.  Value enum: "external". */
    "owner": "external";
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateInputFlint}. The `flint` variant of
 * `SubscriptionBillingScheduleUpdateInput`.
 */
export type SubscriptionBillingScheduleUpdateInputFlint = {
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing.
     * Overrides the day inferred from a moved next_billing_at. Format: int32. minimum: 1. maximum:
     * 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Shape $ (Value): string. Future date at which Flint attempts the next charge. Format:
     * date-time. minLength: 1.
     */
    "next_billing_at": string;
    /** Shape $ (Value): string.  Value enum: "flint". */
    "owner": "flint" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateInputFlintInput}. The `flint` variant
 * of `SubscriptionBillingScheduleUpdateInput`.
 */
export type SubscriptionBillingScheduleUpdateInputFlintInput = {
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing.
     * Overrides the day inferred from a moved next_billing_at. Format: int32. minimum: 1. maximum:
     * 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Shape $ (Value): string. Future date at which Flint attempts the next charge. Format:
     * date-time. minLength: 1.
     */
    "next_billing_at": string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "flint". */
    "owner": "flint";
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateRequest}. A closed owner-specific
 * billing schedule update.
 */
export type SubscriptionBillingScheduleUpdateRequest = ((SubscriptionBillingScheduleUpdateInputFlint)
    | (SubscriptionBillingScheduleUpdateInputExternal)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateRequestInput}. A closed owner-specific
 * billing schedule update.
 */
export type SubscriptionBillingScheduleUpdateRequestInput = ((SubscriptionBillingScheduleUpdateInputFlintInput)
    | (SubscriptionBillingScheduleUpdateInputExternalInput));
/**
 * Shape $ (Value): {@link SubscriptionBillingStartInputImmediate}. The `immediate` variant of
 * `SubscriptionBillingStartInput`.
 */
export type SubscriptionBillingStartInputImmediate = {
    /** Shape $ (Value): string.  Value enum: "immediate". */
    "type": "immediate" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionBillingStartInputImmediateInput}. The `immediate` variant of
 * `SubscriptionBillingStartInput`.
 */
export type SubscriptionBillingStartInputImmediateInput = {
    /** Shape $ (Value): string.  Value enum: "immediate". */
    "type": "immediate";
};
/**
 * Shape $ (Value): {@link SubscriptionBillingStartInputImported}. The `imported` variant of
 * `SubscriptionBillingStartInput`.
 */
export type SubscriptionBillingStartInputImported = {
    /**
     * Shape $ (Value): integer. Number of billing cycles already charged on the previous billing
     * system, including the current imported period. The subscription's completed_cycles starts
     * here, and the next renewal's subscription_cycle is this number plus one. minimum: 0.
     * Default: 0.
     */
    "completed_cycles"?: number;
    /**
     * Shape $ (Value): string. Start of the already-running billing period being imported. Format:
     * date-time. minLength: 1.
     */
    "period_started_at": string;
    /** Shape $ (Value): string.  Value enum: "imported". */
    "type": "imported" | (string & {});
};
