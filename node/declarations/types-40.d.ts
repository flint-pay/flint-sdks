import type { PublicDownload } from './types-38.js';
import type { InputValue, RequestOptions as RuntimeRequestOptions, CredentialProvider } from '../runtime.js';
import type { CreateReportRequestInput } from './types-8.js';
import type { AuthMode, BundleComponent, Address } from './types-0.js';
import type { Credentials } from './types-9.js';
import type { TextModifierRequest } from './types-47.js';
import type { MoneyValue, MoneyValueInput, NextAction } from './types-31.js';
import type { CheckoutSessionWithSecret } from './types-4.js';
import type { ConfirmReturnResolutionRequestInput } from './types-5.js';
import type { CancelReturnDispositionRequestInput } from './types-3.js';
import type { ReturnPolicyEvaluation, ReturnLineItemEligibility, ReturnReasonSummary } from './types-41.js';
import type { Image } from './types-19.js';
import type { OrderLineItemModifier } from './types-32.js';
import type { SelectedProductOption } from './types-44.js';
import type { ReturnResolutionLineItemRequest, ReturnSourceSystem } from './types-42.js';
import type { DecideReturnInspectionLineItemRequestInput } from './types-11.js';
/** Shape $ (Value): {@link ReportSucceeded}. A report generated from the merchant's activity. */
export type ReportSucceeded = ({
    /** Shape $ (Value): string. When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Currency the report covers. A report never combines currencies.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): {@link PublicDownload}. Link to download the generated report. Present only
     * when status is succeeded. A temporary link for downloading a generated report.
     */
    "download": PublicDownload;
    /**
     * Shape $ (Value): string. Why the report failed. Present only when status is failed:
     * limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs
     * wasn't available yet, and generation_failed for other errors. Value enum:
     * "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Shape $ (Value): string. Exclusive interval end instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive interval start instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_start_at": string;
    /**
     * Shape $ (Value): string. Stable identifier of the report. pattern:
     * ^rep_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "report_id": string;
    /**
     * Shape $ (Value): string. The report's type and column version. See the Reports guide for its
     * columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1".
     */
    "report_type": "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | (string & {});
    /**
     * Shape $ (Value): string. pending while Flint generates the report, then succeeded with a
     * download or failed with a failure_reason. Flint sends report.succeeded or report.failed when
     * it finishes. Value enum: "succeeded".
     */
    "status": "succeeded" | (string & {});
    /**
     * Shape $ (Value): string. IANA timezone used for timestamps and date bucketing. A payout
     * occurs at the start of its arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "succeeded". */
    "status"?: "succeeded" | (string & {});
    /**
     * Shape $ (Value): {@link PublicDownload}. Link to download the generated report. Present only
     * when status is succeeded. A temporary link for downloading a generated report.
     */
    "download": PublicDownload;
}));
export type ReportsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateReportRequestInput}. The request body for: Create a report. */
    "body": InputValue<CreateReportRequestInput>;
};
export type ReportsGetInput = {
    /** Shape $ (Value): string. */
    "report_id": InputValue<string>;
};
export type ReportsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "gift_card_liability_v1",
     * "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1",
     * "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1",
     * "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1". Shape
     * $[] (Value): string. Value enum: "gift_card_liability_v1", "orders_itemized_v1",
     * "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1",
     * "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1",
     * "merchant_billing_itemized_v1", "tax_transactions_itemized_v1".
     */
    "report_type"?: InputValue<Array<"gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "succeeded", "failed".
     * Shape $[] (Value): string. Value enum: "pending", "succeeded", "failed".
     */
    "status"?: InputValue<Array<"pending" | "succeeded" | "failed">>;
};
/**
 * Shape $ (Value): {@link RepriceDiscountsRequestInput}. The request body for: Reprice discounts.
 */
export type RepriceDiscountsRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/** Per-call authentication and request overrides. See RUNTIME.md#requestoptions. */
export type RequestOptions<M extends AuthMode = AuthMode> = Omit<RuntimeRequestOptions, 'authMode' | 'credentials'>
    & {
    "apiKey"?: "merchant" extends M ? (string | CredentialProvider) : never;
    "checkoutToken"?: "checkout" extends M ? (string | CredentialProvider) : never;
    "customerToken"?: "customer" extends M ? (string | CredentialProvider) : never;
    "invoiceToken"?: "invoice" extends M ? (string | CredentialProvider) : never;
    "onboardingToken"?: "onboarding" extends M ? (string | CredentialProvider) : never;
    "token"?: "merchant" extends M ? (string | CredentialProvider) : never;
}
    & ({
    authMode?: undefined;
    credentials?: Credentials[M];
}
    | {
    [K in M]: {
        authMode: K;
        credentials?: Credentials[K];
    };
}[M]);
/**
 * Shape $ (Value): {@link ResendWebhookDeliveryRequest}. The request body for: Resend webhook
 * delivery.
 */
export type ResendWebhookDeliveryRequest = {
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ResendWebhookDeliveryRequestInput}. The request body for: Resend webhook
 * delivery.
 */
export type ResendWebhookDeliveryRequestInput = ResendWebhookDeliveryRequest;
/** Shape $ (Value): {@link ResetDemoSessionRequest}. The request body for: Reset demo session. */
export type ResetDemoSessionRequest = {
    /**
     * Shape $ (Value): string. The active or provisioning demo session to reset for this client.
     * minLength: 1.
     */
    "demo_session_id": string;
    /**
     * Shape $ (Value): string. Omit to use quickstart. An explicit empty or unsupported template
     * is invalid. Default: "quickstart". Value enum: "quickstart".
     */
    "template"?: "quickstart" | (string & {});
};
/**
 * Shape $ (Value): {@link ResetDemoSessionRequestInput}. The request body for: Reset demo session.
 */
export type ResetDemoSessionRequestInput = {
    /**
     * Shape $ (Value): string. The active or provisioning demo session to reset for this client.
     * minLength: 1.
     */
    "demo_session_id": string;
    /**
     * Shape $ (Value): string. Omit to use quickstart. An explicit empty or unsupported template
     * is invalid. Default: "quickstart". Value enum: "quickstart".
     */
    "template"?: "quickstart";
};
/**
 * Shape $ (Value): {@link ResolveCustomerDeletionRequest}. The request body for: Resolve a
 * customer deletion request.
 */
export type ResolveCustomerDeletionRequest = {
    /** Shape $ (Value): string.  Value enum: "approve", "reject". */
    "decision": "approve" | "reject" | (string & {});
};
/**
 * Shape $ (Value): {@link ResolveCustomerDeletionRequestInput}. The request body for: Resolve a
 * customer deletion request.
 */
export type ResolveCustomerDeletionRequestInput = {
    /** Shape $ (Value): string.  Value enum: "approve", "reject". */
    "decision": "approve" | "reject";
};
/**
 * Shape $ (Value): {@link ResolveOrderInventoryExceptionRequestInput}. The request body for:
 * Resolve order inventory exception.
 */
export type ResolveOrderInventoryExceptionRequestInput = {
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkLineItemModifierRequest}. A modifier selection for a
 * payment link line item: a modifier option with a quantity, or a text value.
 */
export type ResolvePaymentLinkLineItemModifierRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "modifier_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link TextModifierRequest}. The text a buyer entered for a text modifier
     * group on a payment link line item.
     */
    "text"?: TextModifierRequest;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkLineItemModifierRequestInput}. A modifier selection
 * for a payment link line item: a modifier option with a quantity, or a text value.
 */
export type ResolvePaymentLinkLineItemModifierRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "modifier_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link ResolvePaymentLinkTextModifierRequestInput}. The text a buyer
     * entered for a text modifier group on a payment link line item.
     */
    "text"?: ResolvePaymentLinkTextModifierRequestInput;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkLineItemModifiers}. The modifier selections for one
 * payment link line item when resolving a payment link.
 */
export type ResolvePaymentLinkLineItemModifiers = {
    /**
     * Shape $ (Value): Array of {@link ResolvePaymentLinkLineItemModifierRequest}. Shape $[]
     * (Value): {@link ResolvePaymentLinkLineItemModifierRequest}. A modifier selection for a
     * payment link line item: a modifier option with a quantity, or a text value.
     */
    "modifiers"?: Array<ResolvePaymentLinkLineItemModifierRequest>;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkLineItemModifiersInput}. The modifier selections for
 * one payment link line item when resolving a payment link.
 */
export type ResolvePaymentLinkLineItemModifiersInput = {
    /**
     * Shape $ (Value): Array of {@link ResolvePaymentLinkLineItemModifierRequestInput}. Shape $[]
     * (Value): {@link ResolvePaymentLinkLineItemModifierRequestInput}. A modifier selection for a
     * payment link line item: a modifier option with a quantity, or a text value.
     */
    "modifiers"?: Array<ResolvePaymentLinkLineItemModifierRequestInput>;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkRequest}. The request body for: Resolve payment link.
 */
export type ResolvePaymentLinkRequest = {
    /**
     * Shape $ (Value): Map of string. Buyer answers keyed by custom field key. Checkbox answers
     * must be exactly true or false as strings. A required checkbox must be true. Shape $.*
     * (Value): string. minLength: 1.
     */
    "custom_field_values"?: Record<string, string>;
    /**
     * Shape $ (Value): Map of {@link ResolvePaymentLinkLineItemModifiers}. Modifier choices keyed
     * by line item key, for catalog items. Shape $.* (Value): {@link
     * ResolvePaymentLinkLineItemModifiers}. The modifier selections for one payment link line item
     * when resolving a payment link.
     */
    "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiers>;
    /**
     * Shape $ (Value): Map of integer. Quantities keyed by line item key (line_items[].key), each
     * within that item's min_quantity and max_quantity. Event tiers accept 0. Whole-number
     * quantities; fractional quantities are not supported. Shape $.* (Value): integer.
     * Whole-number quantity value; fractional quantities are not supported. Format: int32.
     */
    "quantity_overrides"?: Record<string, number>;
    /** Shape $ (Value): string. minLength: 1. */
    "resolution_context": string;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Prices keyed by line item key, for items with
     * allow_unit_price_adjustment, between min_unit_price_money and max_unit_price_money. A
     * donation link has one line item, keyed donation. Shape $.* (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_overrides"?: Record<string, MoneyValue>;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkRequestInput}. The request body for: Resolve payment
 * link.
 */
export type ResolvePaymentLinkRequestInput = {
    /**
     * Shape $ (Value): Map of string. Buyer answers keyed by custom field key. Checkbox answers
     * must be exactly true or false as strings. A required checkbox must be true. Shape $.*
     * (Value): string. minLength: 1.
     */
    "custom_field_values"?: Record<string, string>;
    /**
     * Shape $ (Value): Map of {@link ResolvePaymentLinkLineItemModifiersInput}. Modifier choices
     * keyed by line item key, for catalog items. Shape $.* (Value): {@link
     * ResolvePaymentLinkLineItemModifiersInput}. The modifier selections for one payment link line
     * item when resolving a payment link.
     */
    "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiersInput>;
    /**
     * Shape $ (Value): Map of integer. Quantities keyed by line item key (line_items[].key), each
     * within that item's min_quantity and max_quantity. Event tiers accept 0. Whole-number
     * quantities; fractional quantities are not supported. Shape $.* (Value): integer.
     * Whole-number quantity value; fractional quantities are not supported. Format: int32.
     */
    "quantity_overrides"?: Record<string, number>;
    /** Shape $ (Value): string. minLength: 1. */
    "resolution_context": string;
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Prices keyed by line item key, for items
     * with allow_unit_price_adjustment, between min_unit_price_money and max_unit_price_money. A
     * donation link has one line item, keyed donation. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_overrides"?: Record<string, MoneyValueInput>;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkResponse}. A response containing
 * `CheckoutSessionWithSecret` data.
 */
export type ResolvePaymentLinkResponse = {
    /**
     * Shape $ (Value): {@link CheckoutSessionWithSecret}. The checkout session with its checkout
     * credential. For hosted checkout, send the buyer to url. For embedded checkout, pass
     * checkout_auth_token to your checkout client. A session in which a buyer completes an order's
     * payment.
     */
    "data": CheckoutSessionWithSecret;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkTextModifierRequestInput}. The text a buyer entered
 * for a text modifier group on a payment link line item.
 */
export type ResolvePaymentLinkTextModifierRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "modifier_group_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "value": string;
};
/**
 * Shape $ (Value): {@link ResourceReference}. A reference to another resource by `resource_type`
 * and `resource_id`.
 */
export type ResourceReference = {
    /** Shape $ (Value): string. Public Flint ID of the referenced resource. */
    "resource_id": string;
    /**
     * Shape $ (Value): {@link ResourceType}. Public resource type: the resource's ID field name
     * without `_id`. Clients must accept values added in future releases. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt",
     * "organization", "package", "package_item", "partner_app", "partner_app_install",
     * "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item",
     * "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": ResourceType;
};
/**
 * Shape $ (Value): {@link ResourceTimeline}. The activity timeline for one resource, such as API
 * requests, webhook events and deliveries, and image changes.
 */
export type ResourceTimeline = {
    /**
     * Shape $ (Value): Array of {@link ResourceTimelineEntry}. Shape $[] (Value): {@link
     * ResourceTimelineEntry}. One entry in a resource timeline. The `entry_type` selects which of
     * the request, webhook, or image fields are present.
     */
    "entries": Array<ResourceTimelineEntry>;
    /** Shape $ (Value): string. */
    "resource_id": string;
    /**
     * Shape $ (Value): {@link ResourceType}. Public resource type: the resource's ID field name
     * without `_id`. Clients must accept values added in future releases. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt",
     * "organization", "package", "package_item", "partner_app", "partner_app_install",
     * "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item",
     * "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": ResourceType;
    /** Shape $ (Value): boolean. */
    "test": boolean;
};
/**
 * Shape $ (Value): {@link ResourceTimelineAPIRequestEntry}. An API request recorded in this
 * resource's timeline.
 */
export type ResourceTimelineAPIRequestEntry = {
    /** Shape $ (Value): string. */
    "api_request_log_id": string;
    /**
     * Shape $ (Value): {@link ResourceReference}. The public resource that made this request.
     * Absent when Flint cannot attribute the caller. A reference to another resource by
     * `resource_type` and `resource_id`.
     */
    "caller"?: ResourceReference;
    /**
     * Shape $ (Value): string. The caller's X-Request-Id, matched exactly and case-sensitively.
     * Absent when the caller sent none. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$.
     */
    "client_request_id"?: string;
    /**
     * Shape $ (Value): string. The trace ID from a valid W3C traceparent, for correlation with the
     * caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent.
     * pattern: ^[0-9a-f]{32}$.
     */
    "client_trace_id"?: string;
    /** Shape $ (Value): string.  Value enum: "api_request". */
    "entry_type": "api_request" | (string & {});
    /** Shape $ (Value): string. */
    "error_code"?: string;
    /**
     * Shape $ (Value): string. A short explanation of why the request failed. Absent for
     * successful requests.
     */
    "error_summary"?: string;
    /**
     * Shape $ (Value): string. The error envelope's `type` for this response. Value enum:
     * "authentication_error", "authorization_error", "validation_error", "not_found_error",
     * "conflict_error", "rate_limit_error", "external_service_error", "timeout_error",
     * "unavailable_error", "internal_error", "protocol_error".
     */
    "error_type"?: "authentication_error"
        | "authorization_error"
        | "validation_error"
        | "not_found_error"
        | "conflict_error"
        | "rate_limit_error"
        | "external_service_error"
        | "timeout_error"
        | "unavailable_error"
        | "internal_error"
        | "protocol_error"
        | (string & {});
    /** Shape $ (Value): string. */
    "http_method": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "latency_milliseconds": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** Shape $ (Value): string. */
    "path": string;
    /**
     * Shape $ (Value): string. The next action to resolve the failure. Absent when no action
     * applies.
     */
    "recommended_action"?: string;
    /**
     * Shape $ (Value): string. A Flint guide that explains this failure. Absent when no guide
     * applies.
     */
    "reference_url"?: string;
    /**
     * Shape $ (Value): string. Records created before server-minted request IDs keep their
     * original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
    /** Shape $ (Value): string. */
    "resource_timeline_entry_id": string;
    /**
     * Shape $ (Value): string. How to recover: same_request resends the identical request with the
     * same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a
     * new key; none requires correcting the request or following next_steps or next_actions. Value
     * enum: "same_request", "after_refresh", "none".
     */
    "retry"?: "same_request" | "after_refresh" | "none" | (string & {});
    /** Shape $ (Value): string. */
    "route_pattern": string;
    /** Shape $ (Value): integer. Format: int32. */
    "status_code": number;
};
/**
 * Shape $ (Value): {@link ResourceTimelineEntry}. One entry in a resource timeline. The
 * `entry_type` selects which of the request, webhook, or image fields are present.
 */
export type ResourceTimelineEntry = ((ResourceTimelineAPIRequestEntry)
    | (ResourceTimelineWebhookEventEntry)
    | (ResourceTimelineWebhookDeliveryAttemptEntry)
    | (ResourceTimelineImageMutationEntry)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ResourceTimelineImageMutationEntry}. A change to this resource's image
 * attachments recorded in its timeline.
 */
export type ResourceTimelineImageMutationEntry = {
    /** Shape $ (Value): string.  Value enum: "image_mutation". */
    "entry_type": "image_mutation" | (string & {});
    /**
     * Shape $ (Value): integer string. Version of the resource's image attachments after this
     * change. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "image_version": `${bigint}`;
    /**
     * Shape $ (Value): string. The change made to the resource's images. Value enum: "replaced".
     */
    "mutation_kind": "replaced" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Shape $ (Value): string. Records created before server-minted request IDs keep their
     * original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** Shape $ (Value): string. */
    "resource_timeline_entry_id": string;
};
/**
 * Shape $ (Value): {@link ResourceTimelineResponse}. A response containing `ResourceTimeline`
 * data.
 */
export type ResourceTimelineResponse = {
    /**
     * Shape $ (Value): {@link ResourceTimeline}. The activity timeline for one resource, such as
     * API requests, webhook events and deliveries, and image changes.
     */
    "data": ResourceTimeline;
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
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link ResourceTimelineWebhookDeliveryAttemptEntry}. A webhook delivery attempt
 * recorded in this resource's timeline.
 */
export type ResourceTimelineWebhookDeliveryAttemptEntry = {
    /** Shape $ (Value): string. */
    "api_request_log_id"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "attempt_number": number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "automatic_delivery", "automatic_retry",
     * "manual_resend", "manual_delivery".
     */
    "delivery_trigger": "automatic_delivery" | "automatic_retry" | "manual_resend" | "manual_delivery" | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "duration_milliseconds"?: `${bigint}`;
    /** Shape $ (Value): string.  Value enum: "webhook_delivery_attempt". */
    "entry_type": "webhook_delivery_attempt" | (string & {});
    /**
     * Shape $ (Value): string. The kind of failure on the most recent failed attempt. Absent
     * before any attempt, and when delivered or suppressed. Value enum: "webhook_timeout",
     * "webhook_dns", "webhook_tls", "webhook_connection", "webhook_blocked_target",
     * "webhook_request", "webhook_redirect", "webhook_http_4xx", "webhook_http_5xx",
     * "server_error", "webhook_delivery".
     */
    "error_category"?: "webhook_timeout"
        | "webhook_dns"
        | "webhook_tls"
        | "webhook_connection"
        | "webhook_blocked_target"
        | "webhook_request"
        | "webhook_redirect"
        | "webhook_http_4xx"
        | "webhook_http_5xx"
        | "server_error"
        | "webhook_delivery"
        | (string & {});
    /**
     * Shape $ (Value): string. A concise explanation of the failed attempt. Absent before any
     * attempt, and when delivered or suppressed.
     */
    "error_summary"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** Shape $ (Value): string. The note supplied when this action was requested. */
    "reason_message"?: string;
    /** Shape $ (Value): string. The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Shape $ (Value): string. Records created before server-minted request IDs keep their
     * original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** Shape $ (Value): string. */
    "resource_timeline_entry_id": string;
    /**
     * Shape $ (Value): boolean. Whether sending this delivery again without changing your endpoint
     * is likely to succeed. While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "delivered", "failed", "pending", "queued", "sending".
     */
    "status": "delivered" | "failed" | "pending" | "queued" | "sending" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "status_code"?: number;
    /** Shape $ (Value): string. */
    "webhook_delivery_attempt_id": string;
    /** Shape $ (Value): string. */
    "webhook_delivery_id": string;
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": string;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link ResourceTimelineWebhookEventEntry}. A webhook event recorded in this
 * resource's timeline.
 */
export type ResourceTimelineWebhookEventEntry = {
    /** Shape $ (Value): string. */
    "api_request_log_id"?: string;
    /** Shape $ (Value): string.  Value enum: "webhook_event". */
    "entry_type": "webhook_event" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "balance.updated", "balance_transaction.created",
     * "balance_transaction.updated", "bundle.archived", "bundle.created", "bundle.updated",
     * "category.created", "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "delivery_location_set.activated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.deactivated",
     * "delivery_location_set.updated", "delivery_method.activated", "delivery_method.archived",
     * "delivery_method.created", "delivery_method.deactivated", "delivery_method.updated",
     * "delivery_profile.activated", "delivery_profile.archived", "delivery_profile.created",
     * "delivery_profile.deactivated", "delivery_profile.updated",
     * "delivery_rate_callback.activated", "delivery_rate_callback.archived",
     * "delivery_rate_callback.created", "delivery_rate_callback.deactivated",
     * "delivery_rate_callback.updated", "delivery_revocation.created",
     * "delivery_selection.committed", "delivery_zone.activated", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.deactivated", "delivery_zone.updated",
     * "dispute.created", "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response",
     * "dispute.prevented", "dispute.updated", "dispute.won", "environment_grant.created",
     * "environment_grant.revoked", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_level.shortage_detected", "inventory_level.updated", "inventory_receipt.created",
     * "inventory_reservation.action_required", "inventory_reservation.at_risk",
     * "inventory_reservation.closed", "inventory_reservation.committed",
     * "inventory_reservation.consumed", "inventory_reservation.created",
     * "inventory_reservation.hold_expired", "inventory_reservation.released",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned",
     * "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.created",
     * "invoice.credited", "invoice.issue_failed", "invoice.issued", "invoice.late_fee_assessed",
     * "invoice.late_fee_due", "invoice.late_fee_waived", "invoice.marked_uncollectible",
     * "invoice.overdue", "invoice.paid", "invoice.partially_paid", "invoice.partially_refunded",
     * "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent",
     * "invoice.updated", "invoice.voided", "invoice_delivery_attempt.failed",
     * "invoice_delivery_attempt.sent", "invoice_delivery_attempt.suppressed",
     * "invoice_manual_payment.created", "invoice_manual_payment.reversed",
     * "invoice_payment_attempt.canceled", "invoice_payment_attempt.expired",
     * "invoice_payment_attempt.failed", "invoice_payment_attempt.processing",
     * "invoice_payment_attempt.settled", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "package.created", "package.updated", "partner_app_install.created",
     * "partner_app_install.permissions_updated", "partner_app_install.revoked",
     * "partner_app_install.updated", "payment_intent.canceled", "payment_intent.created",
     * "payment_intent.expired", "payment_intent.fulfillment_hold_updated",
     * "payment_intent.payment_failed", "payment_intent.processing",
     * "payment_intent.requires_action", "payment_intent.requires_capture",
     * "payment_intent.succeeded", "payment_intent.updated", "payment_link.created",
     * "payment_link.updated", "payment_method.activated", "payment_method.archived",
     * "payment_method.failed", "payment_review.closed", "payment_review.opened",
     * "payment_review.reopened", "payout.canceled", "payout.created", "payout.failed",
     * "payout.paid", "payout.reversed", "payout.updated", "payout_destination.archived",
     * "payout_destination.created", "payout_destination.disabled", "payout_destination.updated",
     * "payout_settings.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "refund.created", "refund.failed",
     * "refund.partially_succeeded", "refund.succeeded", "refund.updated", "report.failed",
     * "report.succeeded", "return.canceled", "return.completed", "return.created",
     * "return.decision_recorded", "return.reopened", "return.updated",
     * "return_disposition.created", "return_disposition.updated",
     * "return_inspection.acceptance_decided", "return_inspection.created",
     * "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded",
     * "return_receipt.verified", "return_resolution.created", "return_resolution.updated",
     * "shipment.created", "shipment.updated", "subscription.activated", "subscription.canceled",
     * "subscription.cancellation_scheduled", "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted", "subscription.past_due",
     * "subscription.paused", "subscription.payment_succeeded", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded".
     */
    "event_type": "balance.updated"
        | "balance_transaction.created"
        | "balance_transaction.updated"
        | "bundle.archived"
        | "bundle.created"
        | "bundle.updated"
        | "category.created"
        | "category.deleted"
        | "category.updated"
        | "checkout_session.closed"
        | "checkout_session.created"
        | "checkout_session.expired"
        | "checkout_session.invalidated"
        | "checkout_session.paid"
        | "checkout_session.partially_paid"
        | "credit_note.created"
        | "credit_note.issued"
        | "credit_note.updated"
        | "credit_note.voided"
        | "credit_note_allocation.created"
        | "credit_note_allocation.reversed"
        | "custom_domain.archived"
        | "custom_domain.updated"
        | "customer.created"
        | "customer.deleted"
        | "customer.updated"
        | "customer_deletion_request.completed"
        | "customer_deletion_request.created"
        | "customer_deletion_request.failed"
        | "customer_deletion_request.processing"
        | "customer_deletion_request.rejected"
        | "delivery_location_set.activated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.deactivated"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.activated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.deactivated"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.activated"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.deactivated"
        | "delivery_zone.updated"
        | "dispute.created"
        | "dispute.inquiry_closed"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.won"
        | "environment_grant.created"
        | "environment_grant.revoked"
        | "fraud_warning.created"
        | "fraud_warning.updated"
        | "fulfillment.canceled"
        | "fulfillment.completed"
        | "fulfillment.created"
        | "fulfillment.failed"
        | "fulfillment.updated"
        | "fulfillment_event.created"
        | "gift_card.created"
        | "gift_card.updated"
        | "gift_card_load.created"
        | "gift_card_load.updated"
        | "gift_card_notification.created"
        | "gift_card_notification.updated"
        | "gift_card_redemption.created"
        | "gift_card_redemption.updated"
        | "gift_card_transaction.created"
        | "inventory_count.applied"
        | "inventory_level.shortage_detected"
        | "inventory_level.updated"
        | "inventory_receipt.created"
        | "inventory_reservation.action_required"
        | "inventory_reservation.at_risk"
        | "inventory_reservation.closed"
        | "inventory_reservation.committed"
        | "inventory_reservation.consumed"
        | "inventory_reservation.created"
        | "inventory_reservation.hold_expired"
        | "inventory_reservation.released"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "invoice.collection_block_resolved"
        | "invoice.collection_blocked"
        | "invoice.created"
        | "invoice.credited"
        | "invoice.issue_failed"
        | "invoice.issued"
        | "invoice.late_fee_assessed"
        | "invoice.late_fee_due"
        | "invoice.late_fee_waived"
        | "invoice.marked_uncollectible"
        | "invoice.overdue"
        | "invoice.paid"
        | "invoice.partially_paid"
        | "invoice.partially_refunded"
        | "invoice.refunded"
        | "invoice.reminder_due"
        | "invoice.reopened"
        | "invoice.sent"
        | "invoice.updated"
        | "invoice.voided"
        | "invoice_delivery_attempt.failed"
        | "invoice_delivery_attempt.sent"
        | "invoice_delivery_attempt.suppressed"
        | "invoice_manual_payment.created"
        | "invoice_manual_payment.reversed"
        | "invoice_payment_attempt.canceled"
        | "invoice_payment_attempt.expired"
        | "invoice_payment_attempt.failed"
        | "invoice_payment_attempt.processing"
        | "invoice_payment_attempt.settled"
        | "merchant.readiness_updated"
        | "merchant.updated"
        | "merchant_billing_balance.updated"
        | "merchant_billing_invoice.issued"
        | "merchant_billing_invoice.updated"
        | "modifier_group.archived"
        | "modifier_group.created"
        | "modifier_group.updated"
        | "modifier_set.archived"
        | "modifier_set.created"
        | "modifier_set.updated"
        | "order.closed"
        | "order.created"
        | "order.inventory_exception_created"
        | "order.inventory_exception_resolved"
        | "order.paid"
        | "order.partially_paid"
        | "order.partially_refunded"
        | "order.refunded"
        | "order.updated"
        | "package.created"
        | "package.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.canceled"
        | "payment_intent.created"
        | "payment_intent.expired"
        | "payment_intent.fulfillment_hold_updated"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.requires_capture"
        | "payment_intent.succeeded"
        | "payment_intent.updated"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.activated"
        | "payment_method.archived"
        | "payment_method.failed"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.paid"
        | "payout.reversed"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "product.archived"
        | "product.created"
        | "product.updated"
        | "product_variant.archived"
        | "product_variant.created"
        | "product_variant.updated"
        | "promotion.archived"
        | "promotion.created"
        | "promotion.updated"
        | "promotion_code.archived"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "refund.created"
        | "refund.failed"
        | "refund.partially_succeeded"
        | "refund.succeeded"
        | "refund.updated"
        | "report.failed"
        | "report.succeeded"
        | "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.updated"
        | "return_disposition.created"
        | "return_disposition.updated"
        | "return_inspection.acceptance_decided"
        | "return_inspection.created"
        | "return_inspection.superseded"
        | "return_receipt.created"
        | "return_receipt.superseded"
        | "return_receipt.verified"
        | "return_resolution.created"
        | "return_resolution.updated"
        | "shipment.created"
        | "shipment.updated"
        | "subscription.activated"
        | "subscription.canceled"
        | "subscription.cancellation_scheduled"
        | "subscription.created"
        | "subscription.cycle_skipped"
        | "subscription.delivery_action_required"
        | "subscription.delivery_pause_upcoming"
        | "subscription.delivery_updated"
        | "subscription.dunning_exhausted"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_changed"
        | "subscription.reactivated"
        | "subscription.renewal_upcoming"
        | "subscription.resumed"
        | "subscription.trial_ending"
        | "subscription.updated"
        | "subscription_delivery_migration.completed"
        | "subscription_payment_retry.created"
        | "subscription_payment_retry.failed"
        | "subscription_payment_retry.succeeded"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Shape $ (Value): string. Records created before server-minted request IDs keep their
     * original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** Shape $ (Value): string. */
    "resource_timeline_entry_id": string;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link ResourceType}. Public resource type: the resource's ID field name
 * without `_id`. Clients must accept values added in future releases. Value enum: "api_key",
 * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component", "category",
 * "checkout_session", "checkout_session_customer_verification", "credit_note",
 * "credit_note_allocation", "custom_domain", "customer", "customer_address",
 * "customer_deletion_request", "customer_email_preferences", "customer_session",
 * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
 * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
 * "delivery_selection", "delivery_zone", "device", "discount", "dispute", "email_change_request",
 * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
 * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card",
 * "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
 * "gift_card_redemption", "gift_card_transaction", "inventory_adjustment",
 * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
 * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
 * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
 * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
 * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
 * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
 * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
 * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
 * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
 * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
 * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review", "payout",
 * "payout_destination", "payout_settings", "product", "product_option", "product_option_value",
 * "product_variant", "promotion", "promotion_code", "purchase_refund_allocation", "refund",
 * "refund_allocation", "refund_line_item_adjustment", "report", "report_download", "return",
 * "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item",
 * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
 * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
 * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
 * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
 * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item", "user",
 * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
 */
export type ResourceType = "api_key"
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
    | "user"
    | "webhook_delivery"
    | "webhook_endpoint"
    | "webhook_event"
    | "workload_identity"
    | (string & {});
/**
 * Shape $ (Value): {@link ResourceVersionRequestInput}. The request body for: Mark invoice
 * uncollectible; Reactivate a subscription; Reactivate one of the current buyer's subscriptions;
 * Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume
 * subscription; Reverse credit note allocation; Void credit note; Void invoice.
 */
export type ResourceVersionRequestInput = ConfirmReturnResolutionRequestInput;
/**
 * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
 * `trace_id`, whether an idempotent request was replayed, and any warnings.
 */
export type ResponseMeta = {
    /** Shape $ (Value): string. API version used to produce this response. */
    "api_version"?: string;
    /**
     * Shape $ (Value): boolean. Whether this response replays a stored result for the supplied
     * Idempotency-Key.
     */
    "idempotency_replayed"?: boolean;
    /**
     * Shape $ (Value): string. Trace identifier to include when contacting Flint about this
     * request.
     */
    "trace_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ResponseWarning}. Conditions that need attention even
     * though the request succeeded. Shape $[] (Value): {@link ResponseWarning}. A non-blocking
     * condition reported with a response. The `code` identifies the condition and `severity` says
     * how urgent it is.
     */
    "warnings"?: Array<ResponseWarning>;
};
/**
 * Shape $ (Value): {@link ResponseWarning}. A non-blocking condition reported with a response. The
 * `code` identifies the condition and `severity` says how urgent it is.
 */
export type ResponseWarning = {
    /**
     * Shape $ (Value): string. Merchant capability for merchant_onboarding_deadline,
     * merchant_capability_pending, or merchant_capability_inactive. Value enum:
     * "accept_card_payments", "save_payment_methods", "accept_affirm_payments",
     * "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts",
     * "manage_payout_destinations", "manage_payout_settings".
     */
    "capability"?: "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | (string & {});
    /**
     * Shape $ (Value): string. Warning code. Clients must accept values added in future releases.
     * Value enum: "merchant_onboarding_past_due", "merchant_onboarding_deadline",
     * "merchant_capability_pending", "merchant_capability_inactive",
     * "payout_settings_reconciling", "promotion_declined", "promotion_removed",
     * "risk_rule_limit_reached", "rule_evaluation_stage_changed", "api_key_scopes_reduced".
     */
    "code": "merchant_onboarding_past_due"
        | "merchant_onboarding_deadline"
        | "merchant_capability_pending"
        | "merchant_capability_inactive"
        | "payout_settings_reconciling"
        | "promotion_declined"
        | "promotion_removed"
        | "risk_rule_limit_reached"
        | "rule_evaluation_stage_changed"
        | "api_key_scopes_reduced"
        | (string & {});
    /**
     * Shape $ (Value): string. Onboarding requirements deadline for merchant_onboarding_deadline,
     * or merchant_onboarding_past_due when a deadline is set. Format: date-time.
     */
    "current_deadline_at"?: string;
    /** Shape $ (Value): string. Description of the non-blocking condition. */
    "message": string;
    /**
     * Shape $ (Value): Array of {@link NextAction}. Suggested actions for addressing the warning.
     * Shape $[] (Value): {@link NextAction}. A suggested next step for resolving an error,
     * warning, or blocked state, such as the API operation to call or the scope it needs.
     */
    "next_actions"?: Array<NextAction>;
    /**
     * Shape $ (Value): string. Last synchronization time for merchant_onboarding_past_due,
     * merchant_onboarding_deadline, merchant_capability_pending, or merchant_capability_inactive,
     * when available. Format: date-time.
     */
    "observed_at"?: string;
    /**
     * Shape $ (Value): string. Previous risk rule evaluation stage for
     * rule_evaluation_stage_changed. Value enum: "pre_authorization", "post_authorization".
     */
    "previous_stage"?: "pre_authorization" | "post_authorization" | (string & {});
    /**
     * Shape $ (Value): string. Promotion code that was accepted but did not apply, on a
     * promotion_declined warning, or the code of a removed promotion discount, on a
     * promotion_removed warning.
     */
    "promotion_code"?: string;
    /**
     * Shape $ (Value): string. Stable Flint reason code. On a promotion_declined or
     * promotion_removed warning this is the promotion decline reason (for example
     * superseded_by_better_offer); an unrecognized value falls back to not_eligible. See the
     * Promotions reference for the full list. Value enum: "already_applied", "automatic_disabled",
     * "buy_item_missing", "code_invalid", "code_required", "codes_disabled", "currency_mismatch",
     * "exhausted", "expired", "inactive", "max_promotions_reached", "minimum_not_met",
     * "no_discountable_balance", "not_combinable", "not_eligible", "not_yet_started",
     * "superseded", "superseded_by_better_offer", "superseded_by_higher_priority", "unknown_type".
     */
    "reason"?: "already_applied"
        | "automatic_disabled"
        | "buy_item_missing"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "currency_mismatch"
        | "exhausted"
        | "expired"
        | "inactive"
        | "max_promotions_reached"
        | "minimum_not_met"
        | "no_discountable_balance"
        | "not_combinable"
        | "not_eligible"
        | "not_yet_started"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "unknown_type"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. Requested scopes excluded from the issued API key for
     * api_key_scopes_reduced. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.organizations.read",
     * "accounts.organizations.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.inventory_locations.write", "commerce.inventory_policies.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read",
     * "commerce.inventory.write", "commerce.inventory_locations.write",
     * "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "removed_scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.inventory_locations.write"
        | "commerce.inventory_policies.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.return_policies.write"
        | "commerce.return_reasons.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.read"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.payment_options.read"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
    /**
     * Shape $ (Value): string. Resource ID, paired with resource_type when the warning identifies
     * a resource.
     */
    "resource_id"?: string;
    /**
     * Shape $ (Value): string. Type of the resource identified by resource_id. Value enum:
     * "api_key", "api_request_log", "balance", "balance_transaction", "bundle",
     * "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_verification",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
     * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
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
     * "subscription_plan_line_item", "user", "webhook_delivery", "webhook_endpoint",
     * "webhook_event", "workload_identity".
     */
    "resource_type"?: "api_key"
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
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
    /** Shape $ (Value): string. Warning severity. Value enum: "warning", "critical". */
    "severity": "warning" | "critical" | (string & {});
    /**
     * Shape $ (Value): string. New risk rule evaluation stage for rule_evaluation_stage_changed.
     * Value enum: "pre_authorization", "post_authorization".
     */
    "stage"?: "pre_authorization" | "post_authorization" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Discount amount this promotion would have applied had
     * it won, on a promotion_declined warning, or the amount a removed promotion discount applied
     * before removal, on a promotion_removed warning. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "would_have_applied_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link RetryReturnDispositionRequest}. The request body for: Retry return
 * disposition.
 */
export type RetryReturnDispositionRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "dependency_recovered", "mapping_corrected",
     * "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link RetryReturnDispositionRequestInput}. The request body for: Retry return
 * disposition.
 */
export type RetryReturnDispositionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "dependency_recovered", "mapping_corrected",
     * "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link RetryReturnResolutionRequest}. The request body for: Retry return
 * resolution.
 */
export type RetryReturnResolutionRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "dependency_recovered", "payment_method_updated",
     * "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link RetryReturnResolutionRequestInput}. The request body for: Retry return
 * resolution.
 */
export type RetryReturnResolutionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): string. Value enum: "dependency_recovered", "payment_method_updated",
     * "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link ReturnActivity}. One entry in a Return's merchant activity history. */
export type ReturnActivity = {
    /**
     * Shape $ (Value): string. Value enum: "return.canceled", "return.completed",
     * "return.created", "return.decision_recorded", "return.reopened",
     * "return.shipment_handoff_converged", "return.updated", "return_disposition.canceled",
     * "return_disposition.created", "return_disposition.failed", "return_disposition.retried",
     * "return_disposition.succeeded", "return_inspection.corrected", "return_inspection.created",
     * "return_inspection_line_item.acceptance_decided", "return_line_item.deleted",
     * "return_line_item.inspection_waived", "return_line_item.line_item_added",
     * "return_line_item.quantity_canceled", "return_line_item.updated",
     * "return_receipt.corrected", "return_receipt.created", "return_receipt_line_item.verified",
     * "return_resolution.buyer_payment_required", "return_resolution.canceled",
     * "return_resolution.confirmed", "return_resolution.created",
     * "return_resolution.effect_failed", "return_resolution.payment_failed",
     * "return_resolution.payment_intent_updated", "return_resolution.payment_succeeded",
     * "return_resolution.refund_failed", "return_resolution.refund_succeeded",
     * "return_resolution.released", "return_resolution.replacement_fulfilled",
     * "return_resolution.replacement_fulfillment_canceled",
     * "return_resolution.replacement_order_created", "return_resolution.retried",
     * "return_resolution.updated".
     */
    "activity_type": "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.shipment_handoff_converged"
        | "return.updated"
        | "return_disposition.canceled"
        | "return_disposition.created"
        | "return_disposition.failed"
        | "return_disposition.retried"
        | "return_disposition.succeeded"
        | "return_inspection.corrected"
        | "return_inspection.created"
        | "return_inspection_line_item.acceptance_decided"
        | "return_line_item.deleted"
        | "return_line_item.inspection_waived"
        | "return_line_item.line_item_added"
        | "return_line_item.quantity_canceled"
        | "return_line_item.updated"
        | "return_receipt.corrected"
        | "return_receipt.created"
        | "return_receipt_line_item.verified"
        | "return_resolution.buyer_payment_required"
        | "return_resolution.canceled"
        | "return_resolution.confirmed"
        | "return_resolution.created"
        | "return_resolution.effect_failed"
        | "return_resolution.payment_failed"
        | "return_resolution.payment_intent_updated"
        | "return_resolution.payment_succeeded"
        | "return_resolution.refund_failed"
        | "return_resolution.refund_succeeded"
        | "return_resolution.released"
        | "return_resolution.replacement_fulfilled"
        | "return_resolution.replacement_fulfillment_canceled"
        | "return_resolution.replacement_order_created"
        | "return_resolution.retried"
        | "return_resolution.updated"
        | (string & {});
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "actor": ReturnActor;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): integer string. Canceled whole-number quantity; fractional quantities are
     * not supported. Present only for return_line_item.quantity_canceled. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "additional_merchandise_received", "automatic_receipt",
     * "buyer_payment", "buyer_request", "buyer_selection", "changed_disposition",
     * "correction_required", "created_in_error", "customer_service", "customer_service_exception",
     * "dependency_recovered", "duplicate", "duplicate_observation", "entry_error",
     * "evidence_missing", "exception_resolved", "exception_waived", "expired",
     * "inspection_confirmed", "inspection_result", "inventory_effect_failed",
     * "inventory_item_unmapped", "linked_effect_changed", "linked_effect_retry",
     * "manual_completion", "manual_correction", "manual_release", "manual_review",
     * "mapping_corrected", "merchant_approved", "merchant_discretion", "merchant_request",
     * "merchant_review", "not_eligible", "operator_retry", "order_match_confirmed", "other",
     * "payment_intent_creation_failed", "payment_method_updated", "policy_correction",
     * "policy_override", "quantity_unavailable", "reconciliation_correction",
     * "refund_creation_failed", "refund_line_value_unavailable",
     * "replacement_order_creation_failed", "resolution_effect_failed", "return_policy",
     * "return_shipping_cost", "risk_review", "safety_requirement", "sku_match_confirmed",
     * "source_correction", "suspected_abuse", "trusted_in_store_handoff", "warehouse_override".
     */
    "reason"?: "additional_merchandise_received"
        | "automatic_receipt"
        | "buyer_payment"
        | "buyer_request"
        | "buyer_selection"
        | "changed_disposition"
        | "correction_required"
        | "created_in_error"
        | "customer_service"
        | "customer_service_exception"
        | "dependency_recovered"
        | "duplicate"
        | "duplicate_observation"
        | "entry_error"
        | "evidence_missing"
        | "exception_resolved"
        | "exception_waived"
        | "expired"
        | "inspection_confirmed"
        | "inspection_result"
        | "inventory_effect_failed"
        | "inventory_item_unmapped"
        | "linked_effect_changed"
        | "linked_effect_retry"
        | "manual_completion"
        | "manual_correction"
        | "manual_release"
        | "manual_review"
        | "mapping_corrected"
        | "merchant_approved"
        | "merchant_discretion"
        | "merchant_request"
        | "merchant_review"
        | "not_eligible"
        | "operator_retry"
        | "order_match_confirmed"
        | "other"
        | "payment_intent_creation_failed"
        | "payment_method_updated"
        | "policy_correction"
        | "policy_override"
        | "quantity_unavailable"
        | "reconciliation_correction"
        | "refund_creation_failed"
        | "refund_line_value_unavailable"
        | "replacement_order_creation_failed"
        | "resolution_effect_failed"
        | "return_policy"
        | "return_shipping_cost"
        | "risk_review"
        | "safety_requirement"
        | "sku_match_confirmed"
        | "source_correction"
        | "suspected_abuse"
        | "trusted_in_store_handoff"
        | "warehouse_override"
        | (string & {});
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "resource_id": string;
    /**
     * Shape $ (Value): {@link ResourceType}. Public resource type: the resource's ID field name
     * without `_id`. Clients must accept values added in future releases. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt",
     * "organization", "package", "package_item", "partner_app", "partner_app_install",
     * "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item",
     * "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": ResourceType;
    /** Shape $ (Value): string. */
    "return_activity_id": string;
    /** Shape $ (Value): string. */
    "return_id": string;
    /**
     * Shape $ (Value): integer string. Return version produced by this activity. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "return_version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
 * integration, or the system, with an optional ID.
 */
export type ReturnActor = {
    /** Shape $ (Value): string. */
    "actor_id"?: string;
    /** Shape $ (Value): string.  Value enum: "buyer", "merchant", "integration", "system". */
    "actor_type": "buyer" | "merchant" | "integration" | "system" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
 * complete, with the return line or record it concerns.
 */
export type ReturnCompletionBlocker = {
    /**
     * Shape $ (Value): string. What is still owed before this Return can complete. Each blocker
     * names the Return line it belongs to and, where one exists, the receipt, inspection,
     * disposition, or resolution holding it up. An empty completion_blockers array means nothing
     * is outstanding. Value enum: "decision_pending", "handoff_pending", "receipt_pending",
     * "inspection_pending", "inspection_review_required", "disposition_required",
     * "resolution_not_selected", "resolution_pending", "resolution_requires_action",
     * "resolution_failed", "merchandise_exception".
     */
    "code": "decision_pending"
        | "handoff_pending"
        | "receipt_pending"
        | "inspection_pending"
        | "inspection_review_required"
        | "disposition_required"
        | "resolution_not_selected"
        | "resolution_pending"
        | "resolution_requires_action"
        | "resolution_failed"
        | "merchandise_exception"
        | (string & {});
    /** Shape $ (Value): string. */
    "message": string;
    /** Shape $ (Value): string. */
    "return_disposition_id"?: string;
    /** Shape $ (Value): string. */
    "return_inspection_id"?: string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_receipt_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: string;
    /** Shape $ (Value): string. */
    "shipment_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
 * handled.
 */
export type ReturnDisposition = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "created_in_error", "changed_disposition", "duplicate",
     * "other".
     */
    "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "cancellation_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "created_by": ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {});
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Reason code for a failed merchandise disposition, when available.
     * Value enum: "inventory_effect_failed", "inventory_item_unmapped".
     */
    "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
    /** Shape $ (Value): string. Explanation of a failed merchandise disposition, when available. */
    "failure_message"?: string;
    /** Shape $ (Value): string. */
    "inventory_location_id"?: string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "inventory_movement_ids": Array<string>;
    /** Shape $ (Value): string. */
    "inventory_receipt_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata": Record<string, string>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "replaced_by_return_disposition_id"?: string;
    /** Shape $ (Value): string. */
    "replaces_return_disposition_id"?: string;
    /** Shape $ (Value): string. */
    "return_disposition_id": string;
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_inspection_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_receipt_line_item_id"?: string;
    /** Shape $ (Value): string.  Value enum: "pending", "succeeded", "failed", "canceled". */
    "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. Actions that can succeed now. Empty unless the parent
     * Return is open. cancel is listed only before the inventory effect starts. [] enum: "cancel",
     * "retry". Shape $[] (Value): string. Value enum: "cancel", "retry".
     */
    "supported_actions": Array<"cancel" | "retry" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
export type ReturnDispositionsCancelInput = {
    /** Shape $ (Value): string. */
    "return_disposition_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelReturnDispositionRequestInput}. The request body for: Cancel
     * return disposition.
     */
    "body": InputValue<CancelReturnDispositionRequestInput>;
};
export type ReturnDispositionsGetInput = {
    /** Shape $ (Value): string. */
    "return_disposition_id": InputValue<string>;
};
export type ReturnDispositionsListInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "sellable", "quality_control",
     * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
     * "return_to_buyer", "lost". Shape $[] (Value): string. Value enum: "sellable",
     * "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate",
     * "discard", "return_to_buyer", "lost".
     */
    "disposition_type"?: InputValue<Array<"sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "inventory_location_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "replaces_return_disposition_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_inspection_line_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_receipt_line_item_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "succeeded", "failed",
     * "canceled". Shape $[] (Value): string. Value enum: "pending", "succeeded", "failed",
     * "canceled".
     */
    "status"?: InputValue<Array<"pending" | "succeeded" | "failed" | "canceled">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type ReturnDispositionsRetryInput = {
    /** Shape $ (Value): string. */
    "return_disposition_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RetryReturnDispositionRequestInput}. The request body for: Retry
     * return disposition.
     */
    "body": InputValue<RetryReturnDispositionRequestInput>;
};
/**
 * Shape $ (Value): {@link ReturnEligibilityLineItemRequest}. An order line and quantity to check.
 * return_reason_id is optional here; when you send it, Flint checks that the reason is active and
 * applies to the line.
 */
export type ReturnEligibilityLineItemRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "return_reason_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnEligibilityLineItemRequestInput}. An order line and quantity to
 * check. return_reason_id is optional here; when you send it, Flint checks that the reason is
 * active and applies to the line.
 */
export type ReturnEligibilityLineItemRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /** Shape $ (Value): string. minLength: 1. */
    "return_reason_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnEligibilityPreview}. The result of checking whether an order's
 * items can be returned: overall status, per-line eligibility, and the policy evaluation.
 */
export type ReturnEligibilityPreview = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityPreviewLineItem}. Shape $[] (Value):
     * {@link ReturnEligibilityPreviewLineItem}. Return eligibility for one order line item, with
     * the line's details, suggested return reasons, and whether self-service returns are enabled.
     */
    "line_items": Array<ReturnEligibilityPreviewLineItem>;
    /** Shape $ (Value): string. */
    "order_id": string;
    /**
     * Shape $ (Value): {@link ReturnPolicyEvaluation}. How a return policy evaluated a return
     * request: overall status and reason, the policy revision used, and per-line results.
     */
    "policy_evaluation": ReturnPolicyEvaluation;
    /**
     * Shape $ (Value): {@link ReturnEligibilitySelection}. Which order lines to check for return
     * eligibility: all remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnEligibilityPreviewLineItem}. Return eligibility for one order line
 * item, with the line's details, suggested return reasons, and whether self-service returns are
 * enabled.
 */
export type ReturnEligibilityPreviewLineItem = {
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether the buyer can request this line themselves, through a
     * customer session, right now. False when no policy covers the item, when it is not eligible,
     * or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason
     * to say why.
     */
    "can_buyer_request": boolean;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link ReturnLineItemEligibility}. Whether a return line is eligible under
     * policy, with the eligible quantity, allowed resolution types, and any policy adjustments.
     */
    "eligibility": ReturnLineItemEligibility;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifier}. Shape $[] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item, with its quantity, price
     * change, total, and display flags.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnReasonSummary}. Active reasons that apply to this
     * item, up to 20. Category-scoped reasons come first, then reasons that apply to every item.
     * Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak.
     * maxItems: 20. Shape $[] (Value): {@link ReturnReasonSummary}. A return reason a buyer can
     * pick for a line, with its `handle` and whether a note is required.
     */
    "suggested_return_reasons": Array<ReturnReasonSummary>;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnEligibilitySelection}. Which order lines to check for return
 * eligibility: all remaining fulfilled lines, or a specific list of lines.
 */
export type ReturnEligibilitySelection = ({
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityLineItemRequest}. Shape $[] (Value):
     * {@link ReturnEligibilityLineItemRequest}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequest>;
    /** Shape $ (Value): string.  Value enum: "all_remaining_fulfilled", "line_items". */
    "selection_type": "all_remaining_fulfilled" | "line_items" | (string & {});
})
    & ((Exclude<ReturnEligibilitySelectionAllRemainingFulfilled & object, readonly unknown[]>)
    | (Exclude<ReturnEligibilitySelectionLineItems & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ReturnEligibilitySelectionAllRemainingFulfilled}. The
 * `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`.
 */
export type ReturnEligibilitySelectionAllRemainingFulfilled = ({
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityLineItemRequest}. Shape $[] (Value):
     * {@link ReturnEligibilityLineItemRequest}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequest>;
    /** Shape $ (Value): string.  Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "all_remaining_fulfilled". */
    "selection_type": unknown;
}));
/**
 * Shape $ (Value): {@link ReturnEligibilitySelectionAllRemainingFulfilledInput}. The
 * `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`.
 */
export type ReturnEligibilitySelectionAllRemainingFulfilledInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnEligibilityLineItemRequestInput}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequestInput>;
    /** Shape $ (Value): string.  Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled";
})
    & ({
    "line_items"?: never;
}));
/**
 * Shape $ (Value): {@link ReturnEligibilitySelectionInput}. Which order lines to check for return
 * eligibility: all remaining fulfilled lines, or a specific list of lines.
 */
export type ReturnEligibilitySelectionInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnEligibilityLineItemRequestInput}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequestInput>;
    /** Shape $ (Value): string.  Value enum: "all_remaining_fulfilled", "line_items". */
    "selection_type": "all_remaining_fulfilled" | "line_items";
})
    & ((Exclude<ReturnEligibilitySelectionAllRemainingFulfilledInput & object, readonly unknown[]>)
    | (Exclude<ReturnEligibilitySelectionLineItemsInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link ReturnEligibilitySelectionLineItems}. The `line_items` variant of
 * `ReturnEligibilitySelection`.
 */
export type ReturnEligibilitySelectionLineItems = ({
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityLineItemRequest}. Shape $[] (Value):
     * {@link ReturnEligibilityLineItemRequest}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items": Array<ReturnEligibilityLineItemRequest>;
    /** Shape $ (Value): string.  Value enum: "line_items". */
    "selection_type": "line_items" | (string & {});
})
    & ({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
    /** Shape $ (Value): any.  Value enum: "line_items". */
    "selection_type": unknown;
});
/**
 * Shape $ (Value): {@link ReturnEligibilitySelectionLineItemsInput}. The `line_items` variant of
 * `ReturnEligibilitySelection`.
 */
export type ReturnEligibilitySelectionLineItemsInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnEligibilityLineItemRequestInput}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items": Array<ReturnEligibilityLineItemRequestInput>;
    /** Shape $ (Value): string.  Value enum: "line_items". */
    "selection_type": "line_items";
})
    & ({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
    /** Shape $ (Value): any.  Value enum: "line_items". */
    "selection_type": "line_items";
});
/**
 * Shape $ (Value): {@link ReturnFinancialSummary}. The money for a return: returned value,
 * deductions, credits, replacement total, and amounts due to or from the buyer.
 */
export type ReturnFinancialSummary = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Balances collected from the buyer. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "collected_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Credits added by confirmed, non-canceled resolutions.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Fees withheld by confirmed, non-canceled resolutions.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Balances the buyer owes on confirmed, non-canceled
     * resolutions whose payment has not succeeded. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "due_from_buyer_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Refund amounts on confirmed, non-canceled resolutions
     * whose Refund has not succeeded. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "due_to_buyer_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Refund amounts that succeeded. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Value of replacement merchandise on confirmed,
     * non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Sum of return_value.discount_money across the Return's
     * line items. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "returned_discount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Sum of return_value.subtotal_money across the Return's
     * line items. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "returned_subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Sum of return_value.tax_money across the Return's line
     * items. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "returned_tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Sum of return_value.total_money across the Return's
     * line items. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "returned_total_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link ReturnHandoffDestination}. Where the buyer sends returned merchandise:
 * their own address, a merchant location, or an external location.
 */
export type ReturnHandoffDestination = {
    /**
     * Shape $ (Value): {@link Address}. A postal address, as returned on customers, invoices, tax
     * locations, and fulfillment recipients.
     */
    "address"?: Address;
    /** Shape $ (Value): string.  Value enum: "buyer_address", "location", "external_location". */
    "destination_type": "buyer_address" | "location" | "external_location" | (string & {});
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string. */
    "name"?: string;
};
/**
 * Shape $ (Value): {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise
 * back: the destination, instructions, line items, and expiry.
 */
export type ReturnHandoffRequirement = {
    /**
     * Shape $ (Value): {@link ReturnHandoffDestination}. Where the buyer sends returned
     * merchandise: their own address, a merchant location, or an external location.
     */
    "destination": ReturnHandoffDestination;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /** Shape $ (Value): string. */
    "instructions"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity the buyer must hand back.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "shipment_count"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Whether the buyer has started sending merchandise back. A
     * requirement leaves handoff_requirements entirely once it is satisfied, so there is no
     * terminal status and an empty array means nothing is waiting on the buyer. Value enum:
     * "pending", "in_progress".
     */
    "status": "pending" | "in_progress" | (string & {});
};
/** Shape $ (Value): {@link ReturnInspection}. An assessment of the condition of returned items. */
export type ReturnInspection = {
    /**
     * Shape $ (Value): string. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "correction_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnDisposition}. Shape $[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     */
    "generated_dispositions": Array<ReturnDisposition>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "inspected_at": string;
    /**
     * Shape $ (Value): string. Location where the returned merchandise was inspected. Must match
     * the receipt receiving_location_id.
     */
    "inspection_location_id": string;
    /**
     * Shape $ (Value): Array of {@link ReturnInspectionLineItem}. Shape $[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item.
     */
    "line_items": Array<ReturnInspectionLineItem>;
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_inspection_id": string;
    /** Shape $ (Value): string. */
    "return_receipt_id": string;
    /**
     * Shape $ (Value): {@link ReturnSourceSystem} or null. Shape $.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. Shape $.anyOf[2] (Value): null.
     */
    "source_system": ((ReturnSourceSystem) | (null));
    /** Shape $ (Value): string.  Value enum: "current", "superseded". */
    "status": "current" | "superseded" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "superseded_at"?: string;
    /** Shape $ (Value): string. */
    "superseded_by_return_inspection_id"?: string;
    /** Shape $ (Value): string. */
    "supersedes_return_inspection_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link ReturnInspectionLineItem}. The inspection result for a returned item. */
export type ReturnInspectionLineItem = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "acceptance_decided_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "acceptance_decided_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "inspection_result", "return_policy", "manual_review",
     * "other".
     */
    "acceptance_decision_reason"?: "inspection_result" | "return_policy" | "manual_review" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "acceptance_decision_reason_message"?: string;
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "available_disposition_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. `undetermined`: The item's condition could not be assessed. Value
     * enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete",
     * "undetermined".
     */
    "condition": "new"
        | "unopened"
        | "opened"
        | "used"
        | "damaged"
        | "defective"
        | "incomplete"
        | "undetermined"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     * Shape $[] (Value): string. Value enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     */
    "finding_codes": Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other"
        | (string & {})>;
    /** Shape $ (Value): string. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "return_inspection_id": string;
    /** Shape $ (Value): string. */
    "return_inspection_line_item_id": string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_receipt_line_item_id": string;
    /**
     * Shape $ (Value): Array of string. [] enum: "decide". Shape $[] (Value): string. Value enum:
     * "decide".
     */
    "supported_actions": Array<"decide" | (string & {})>;
};
/**
 * Shape $ (Value): {@link ReturnInspectionLineItemRequest}. The inspection result for one received
 * return line: acceptance status, condition, and findings.
 */
export type ReturnInspectionLineItemRequest = {
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /**
     * Shape $ (Value): string. `undetermined`: The item's condition could not be assessed. Value
     * enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete",
     * "undetermined".
     */
    "condition": "new"
        | "unopened"
        | "opened"
        | "used"
        | "damaged"
        | "defective"
        | "incomplete"
        | "undetermined"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     * Shape $[] (Value): string. Value enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     */
    "finding_codes"?: Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other"
        | (string & {})>;
    /** Shape $ (Value): string. minLength: 1. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_receipt_line_item_id": string;
    /**
     * Shape $ (Value): string. Value enum: "order_match_confirmed", "sku_match_confirmed",
     * "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "verification_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ReturnInspectionLineItemRequestInput}. The inspection result for one
 * received return line: acceptance status, condition, and findings.
 */
export type ReturnInspectionLineItemRequestInput = {
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required";
    /**
     * Shape $ (Value): string. `undetermined`: The item's condition could not be assessed. Value
     * enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete",
     * "undetermined".
     */
    "condition": "new" | "unopened" | "opened" | "used" | "damaged" | "defective" | "incomplete" | "undetermined";
    /**
     * Shape $ (Value): Array of string. [] enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     * Shape $[] (Value): string. Value enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     */
    "finding_codes"?: Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other">;
    /** Shape $ (Value): string. minLength: 1. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_receipt_line_item_id": string;
    /**
     * Shape $ (Value): string. Value enum: "order_match_confirmed", "sku_match_confirmed",
     * "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "verification_reason_message"?: string;
};
export type ReturnInspectionsDecideLineItemInput = {
    /** Shape $ (Value): string. */
    "return_inspection_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_inspection_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link DecideReturnInspectionLineItemRequestInput}. The request body for:
     * Decide return inspection line item.
     */
    "body": InputValue<DecideReturnInspectionLineItemRequestInput>;
};
export type ReturnInspectionsGetInput = {
    /** Shape $ (Value): string. */
    "return_inspection_id": InputValue<string>;
};
