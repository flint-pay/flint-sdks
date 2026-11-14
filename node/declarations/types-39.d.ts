import type { MerchantWebhookEnvelope, MetadataMap, ModifierSet, ModifierSetGroup } from './types-38.js';
import type { InputValue } from '../runtime.js';
import type { CreateModifierSetRequestInput, CreateOnboardingAccessLinkRequestInput } from './types-11.js';
import type {
    DisputesAcceptParams,
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedSubscriptionPlanSummary,
    ExpandedSubscriptionSummary
} from './types-24.js';
import type { UpdateModifierSetRequestInput } from './types-67.js';
import type { ResponseWarning, ResourceReference, ResponseMeta } from './types-54.js';
import type { ReadinessMerchantAccountSession, ReadinessAction } from './types-52.js';
import type { CLIDeviceRequestInput, CLIContextsRequestInput, CLIReauthorizeRequestInput } from './types-4.js';
import type { Merchant } from './types-37.js';
import type { User } from './types-69.js';
import type { WebhookPreviousAttributes } from './types-70.js';
import type { CheckoutBuyerContact } from './types-5.js';
import type { CustomFieldAnswer } from './types-15.js';
import type { DeferredPromotion } from './types-17.js';
import type { Fulfillment } from './types-25.js';
import type { InventoryRoutingSource } from './types-30.js';
import type {
    OrderCharge,
    OrderDeliveryDestination,
    OrderDeliverySummary,
    OrderDiscount,
    OrderGiftCardEstimate,
    OrderGiftCardSelection,
    OrderGiftCardSettlement,
    OrderHandover
} from './types-40.js';
import type {
    OrderLineItem,
    OrderPaymentAttempt,
    OrderReturnCreditSettlement,
    OrderSettlementAmounts,
    OrderTax
} from './types-41.js';
import type { PaymentCollection } from './types-44.js';
import type { PricingAmounts } from './types-50.js';
import type { SetupCollection } from './types-59.js';
import type { TicketedEvent, Tip } from './types-66.js';
import type { TaxCalculationRequestRequestInput, TaxCalculationRequest } from './types-65.js';
/**
 * The `modifier_set.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierSetUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ModifierSet>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_set.updated". */
    "event_type"?: "modifier_set.updated";
});
export type ModifierSetsCreateParams = (InputValue<CreateModifierSetRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ModifierSetsDeleteParams = {
    /**
     * Optional modifier set version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ModifierSetsGetParams = DisputesAcceptParams;
export type ModifierSetsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across modifier set ID, external reference ID, and name. Text fields match any part
     * of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as ms_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by modifier_set_id. Default:
     * "created_at". Value enum: "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ModifierSetsUpdateParams = (InputValue<UpdateModifierSetRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/**
 * Why a money movement action is blocked, with an error code, a message, next steps, and who can
 * resolve it.
 */
export type MoneyMovementBlockedReason = {
    /** Code of the error the blocked action would return. */
    "code": string;
    /** Why the action is blocked. */
    "message"?: string;
    /** What to do to unblock the action. */
    "next_steps"?: string;
    /** The request field the block concerns. */
    "param"?: string;
    /** Who can resolve the block. Value enum: "merchant", "flint", "integrator", "buyer". */
    "resolution_owner"?: "merchant" | "flint" | "integrator" | "buyer" | (string & {});
    /** Whether trying the action again after the block clears can succeed. */
    "retryable"?: boolean;
};
/** How complete the history in a money movement list is and when it was last reconciled. */
export type MoneyMovementHistoryMeta = {
    /**
     * When Flint last finished reconciling this list's history with your processor. Absent until a
     * reconciliation finishes. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "latest_reconciled_at"?: string;
    /**
     * Why the history may be incomplete: backfilling while Flint is still importing older history
     * from your processor, partial when Flint has records from your processor but hasn't imported
     * its full history, and unavailable when Flint can't say, such as before any import or after
     * one fails. The list still returns every record Flint has. Value enum: "backfilling",
     * "partial", "unavailable".
     */
    "status": "backfilling" | "partial" | "unavailable" | (string & {});
};
/**
 * Response metadata for money movement lists, including request and trace IDs, warnings, and the
 * state of the available history.
 */
export type MoneyMovementListMeta = {
    /** API version used to produce this response. */
    "api_version"?: string;
    /**
     * How complete Flint's history for this list is. history is omitted when Flint's history for
     * this list is complete. How complete the history in a money movement list is and when it was
     * last reconciled.
     */
    "history"?: MoneyMovementHistoryMeta;
    /** Whether this response replays a stored result for the supplied Idempotency-Key. */
    "idempotency_replayed"?: boolean;
    /**
     * Trace identifier to include when contacting Flint about this request. Example:
     * "0123456789abcdef0123456789abcdef".
     */
    "trace_id"?: string;
    /**
     * Conditions that need attention even though the request succeeded. [] (Value): {@link
     * ResponseWarning}. A non-blocking condition reported with a response. The `code` identifies
     * the condition and `severity` says how urgent it is.
     */
    "warnings"?: Array<ResponseWarning>;
};
/** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
export type MoneyValue = {
    /**
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "amount": `${bigint}`;
    /** ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. */
    "currency": string;
};
/** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
export type MoneyValueInput = {
    /**
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "amount": `${bigint}` | bigint;
    /** ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. */
    "currency": string;
};
/**
 * A follow-up action. When target_resource is present, send its resource_id in the target request
 * field named {resource_type}_id.
 */
export type NextAction = {
    /**
     * Action to take next. Use its target resource and required_fields to prepare the request.
     * Value enum: "add_line_items", "cancel_payment_intent", "capture_payment_intent",
     * "close_checkout_session", "close_order", "complete_gift_card_challenge",
     * "confirm_payment_intent", "create_checkout_session_customer_verification",
     * "create_dispute_response_session", "create_merchant_account_session", "create_refund",
     * "get_api_key", "get_bundle", "get_category", "get_checkout_session", "get_credit_note",
     * "get_custom_domain", "get_customer", "get_customer_address",
     * "get_customer_deletion_request", "get_customer_email_change_request",
     * "get_customer_tax_exemption", "get_customer_verification", "get_delivery_location_set",
     * "get_delivery_method", "get_delivery_profile", "get_delivery_rate_callback",
     * "get_delivery_selection", "get_delivery_zone", "get_device", "get_dispute", "get_file",
     * "get_gift_card", "get_gift_card_notification", "get_gift_card_redemption",
     * "get_inventory_count", "get_inventory_item", "get_inventory_level",
     * "get_inventory_reservation", "get_inventory_transfer", "get_invoice",
     * "get_invoice_manual_payment", "get_invoice_payment_term", "get_location", "get_me",
     * "get_me_address", "get_me_email_preferences", "get_me_gift_card", "get_me_payment_method",
     * "get_me_return", "get_me_subscription", "get_merchant", "get_merchant_signup",
     * "get_modifier_group", "get_modifier_set", "get_onboarding_state", "get_operation",
     * "get_order", "get_order_edit", "get_order_payment_attempt", "get_partner_app",
     * "get_partner_app_credential", "get_partner_app_install", "get_payment_intent",
     * "get_payment_link", "get_payment_link_public", "get_payment_method",
     * "get_payment_method_domain", "get_payment_review", "get_payout", "get_payout_destination",
     * "get_payout_settings", "get_price_list", "get_price_list_price", "get_product",
     * "get_product_variant", "get_promotion", "get_promotion_code", "get_reader", "get_refund",
     * "get_return", "get_return_line_item", "get_return_policy", "get_return_resolution",
     * "get_risk_list", "get_risk_list_item", "get_risk_rule", "get_sandbox", "get_settings",
     * "get_shipment", "get_subscription", "get_subscription_offer", "get_subscription_plan",
     * "get_tax_calculation_callback", "get_tax_connection", "get_tax_registration",
     * "get_test_clock", "get_ticket", "get_webhook_delivery", "get_webhook_endpoint",
     * "get_workload_identity", "issue_developer_sandbox_test_key", "list_credit_note_allocations",
     * "list_credit_notes", "list_fulfillments", "list_gift_card_funding_dispositions",
     * "list_gift_card_loads", "list_gift_card_redemptions", "list_gift_card_transactions",
     * "list_gift_cards", "list_inventory_counts", "list_inventory_movements",
     * "list_inventory_receipts", "list_inventory_reservations", "list_inventory_transfers",
     * "list_invoice_activities", "list_invoice_late_fees", "list_invoice_manual_payments",
     * "list_invoice_payment_attempts", "list_invoices", "list_me_gift_cards",
     * "list_me_remembered_buyers", "list_me_returns", "list_me_subscription_payment_retries",
     * "list_merchant_partner_app_installs", "list_order_charges", "list_order_edits",
     * "list_order_line_items", "list_order_payment_attempts", "list_package_items",
     * "list_packages", "list_payment_intent_activities", "list_payment_intents", "list_payouts",
     * "list_product_variants", "list_refunds", "list_return_dispositions",
     * "list_return_inspections", "list_return_reasons", "list_return_receipts",
     * "list_return_resolutions", "list_returns", "list_shipments", "list_subscription_line_items",
     * "list_subscription_payment_retries", "list_subscriptions", "pay_order",
     * "payment_authentication", "recreate_delivery_quote", "review_merchant_readiness",
     * "review_onboarding_state", "start_new_image_ingestion", "update_checkout_session",
     * "update_delivery_profile", "update_inventory_allocation_policy", "update_invoice",
     * "update_location", "update_order", "update_payment_link", "update_settings".
     */
    "action_type": "add_line_items"
        | "cancel_payment_intent"
        | "capture_payment_intent"
        | "close_checkout_session"
        | "close_order"
        | "complete_gift_card_challenge"
        | "confirm_payment_intent"
        | "create_checkout_session_customer_verification"
        | "create_dispute_response_session"
        | "create_merchant_account_session"
        | "create_refund"
        | "get_api_key"
        | "get_bundle"
        | "get_category"
        | "get_checkout_session"
        | "get_credit_note"
        | "get_custom_domain"
        | "get_customer"
        | "get_customer_address"
        | "get_customer_deletion_request"
        | "get_customer_email_change_request"
        | "get_customer_tax_exemption"
        | "get_customer_verification"
        | "get_delivery_location_set"
        | "get_delivery_method"
        | "get_delivery_profile"
        | "get_delivery_rate_callback"
        | "get_delivery_selection"
        | "get_delivery_zone"
        | "get_device"
        | "get_dispute"
        | "get_file"
        | "get_gift_card"
        | "get_gift_card_notification"
        | "get_gift_card_redemption"
        | "get_inventory_count"
        | "get_inventory_item"
        | "get_inventory_level"
        | "get_inventory_reservation"
        | "get_inventory_transfer"
        | "get_invoice"
        | "get_invoice_manual_payment"
        | "get_invoice_payment_term"
        | "get_location"
        | "get_me"
        | "get_me_address"
        | "get_me_email_preferences"
        | "get_me_gift_card"
        | "get_me_payment_method"
        | "get_me_return"
        | "get_me_subscription"
        | "get_merchant"
        | "get_merchant_signup"
        | "get_modifier_group"
        | "get_modifier_set"
        | "get_onboarding_state"
        | "get_operation"
        | "get_order"
        | "get_order_edit"
        | "get_order_payment_attempt"
        | "get_partner_app"
        | "get_partner_app_credential"
        | "get_partner_app_install"
        | "get_payment_intent"
        | "get_payment_link"
        | "get_payment_link_public"
        | "get_payment_method"
        | "get_payment_method_domain"
        | "get_payment_review"
        | "get_payout"
        | "get_payout_destination"
        | "get_payout_settings"
        | "get_price_list"
        | "get_price_list_price"
        | "get_product"
        | "get_product_variant"
        | "get_promotion"
        | "get_promotion_code"
        | "get_reader"
        | "get_refund"
        | "get_return"
        | "get_return_line_item"
        | "get_return_policy"
        | "get_return_resolution"
        | "get_risk_list"
        | "get_risk_list_item"
        | "get_risk_rule"
        | "get_sandbox"
        | "get_settings"
        | "get_shipment"
        | "get_subscription"
        | "get_subscription_offer"
        | "get_subscription_plan"
        | "get_tax_calculation_callback"
        | "get_tax_connection"
        | "get_tax_registration"
        | "get_test_clock"
        | "get_ticket"
        | "get_webhook_delivery"
        | "get_webhook_endpoint"
        | "get_workload_identity"
        | "issue_developer_sandbox_test_key"
        | "list_credit_note_allocations"
        | "list_credit_notes"
        | "list_fulfillments"
        | "list_gift_card_funding_dispositions"
        | "list_gift_card_loads"
        | "list_gift_card_redemptions"
        | "list_gift_card_transactions"
        | "list_gift_cards"
        | "list_inventory_counts"
        | "list_inventory_movements"
        | "list_inventory_receipts"
        | "list_inventory_reservations"
        | "list_inventory_transfers"
        | "list_invoice_activities"
        | "list_invoice_late_fees"
        | "list_invoice_manual_payments"
        | "list_invoice_payment_attempts"
        | "list_invoices"
        | "list_me_gift_cards"
        | "list_me_remembered_buyers"
        | "list_me_returns"
        | "list_me_subscription_payment_retries"
        | "list_merchant_partner_app_installs"
        | "list_order_charges"
        | "list_order_edits"
        | "list_order_line_items"
        | "list_order_payment_attempts"
        | "list_package_items"
        | "list_packages"
        | "list_payment_intent_activities"
        | "list_payment_intents"
        | "list_payouts"
        | "list_product_variants"
        | "list_refunds"
        | "list_return_dispositions"
        | "list_return_inspections"
        | "list_return_reasons"
        | "list_return_receipts"
        | "list_return_resolutions"
        | "list_returns"
        | "list_shipments"
        | "list_subscription_line_items"
        | "list_subscription_payment_retries"
        | "list_subscriptions"
        | "pay_order"
        | "payment_authentication"
        | "recreate_delivery_quote"
        | "review_merchant_readiness"
        | "review_onboarding_state"
        | "start_new_image_ingestion"
        | "update_checkout_session"
        | "update_delivery_profile"
        | "update_inventory_allocation_policy"
        | "update_invoice"
        | "update_location"
        | "update_order"
        | "update_payment_link"
        | "update_settings"
        | (string & {});
    /**
     * When this suggested action expires, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is
     * create_merchant_account_session. When absent, GET merchant readiness and use its recommended
     * session body. Shared request body for `create_merchant_account_session` next actions in
     * readiness, onboarding, errors, and warnings. Send unchanged to POST
     * /v1/merchant-account-sessions; components and collection policy describe which requirements
     * to collect.
     */
    "merchant_account_session"?: ReadinessMerchantAccountSession;
    /** HTTP method for the recovery read. Value enum: "GET". */
    "method"?: "GET" | (string & {});
    /** Machine-readable reason this action is suggested. */
    "reason_code"?: string;
    /** Explanation of why this action is suggested. */
    "reason_message"?: string;
    /** Field names that must be supplied to perform this action. [] (Value): string. */
    "required_fields"?: Array<string>;
    /**
     * API key scope required to call the public endpoint in url, when the action points at another
     * Flint API endpoint. Value enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "required_scope"?: "accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
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
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {});
    /** Whether a person must approve the action before it is performed. */
    "requires_human_confirmation"?: boolean;
    /** Suggested wait before performing the action, in milliseconds. Format: int32. */
    "suggested_delay_milliseconds"?: number;
    /**
     * Resource whose ID to send in the target request field named {resource_type}_id when url
     * cannot carry the target. A reference to another resource by `resource_type` and
     * `resource_id`.
     */
    "target_resource"?: ResourceReference;
    /** Public endpoint or launch URL for this remediation action, when applicable. */
    "url"?: string;
};
/** The request body for: Revoke an OAuth token. */
export type OAuthRevokeRequest = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner client ID for client_secret_post, or flint-cli for the public CLI client. Example:
     * "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner client secret for client_secret_post. Omit when using HTTP Basic; flint-cli never
     * sends a secret.
     */
    "client_secret"?: string;
    /** Partner app token, or flint-cli access or refresh token, to revoke. */
    "token": string;
    /** Optional token lookup hint. Value enum: "refresh_token", "access_token". */
    "token_type_hint"?: "refresh_token" | "access_token" | (string & {});
});
/** The request body for: Revoke an OAuth token. */
export type OAuthRevokeRequestInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner client ID for client_secret_post, or flint-cli for the public CLI client. Example:
     * "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner client secret for client_secret_post. Omit when using HTTP Basic; flint-cli never
     * sends a secret.
     */
    "client_secret"?: string;
    /** Partner app token, or flint-cli access or refresh token, to revoke. */
    "token": string;
    /** Optional token lookup hint. Value enum: "refresh_token", "access_token". */
    "token_type_hint"?: "refresh_token" | "access_token";
});
/** The request body for: Exchange an OAuth token. */
export type OAuthTokenRequest = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "authorization_code", "client_credentials", "refresh_token",
     * "urn:ietf:params:oauth:grant-type:device_code",
     * "urn:ietf:params:oauth:grant-type:token-exchange".
     */
    "grant_type": "authorization_code"
        | "client_credentials"
        | "refresh_token"
        | "urn:ietf:params:oauth:grant-type:device_code"
        | "urn:ietf:params:oauth:grant-type:token-exchange"
        | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ((Exclude<OAuthTokenRequestAuthorizationCode & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestClientCredentials & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestRefreshToken & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestDeviceCode & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestTokenExchange & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `authorization_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestAuthorizationCode = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "authorization_code".
     */
    "grant_type": "authorization_code" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "authorization_code". */
    "grant_type"?: unknown;
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
});
/** The `authorization_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestAuthorizationCodeInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "authorization_code".
     */
    "grant_type": "authorization_code";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "authorization_code". */
    "grant_type"?: ("authorization_code") & ("authorization_code");
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
});
/** The `client_credentials` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestClientCredentials = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "client_credentials".
     */
    "grant_type": "client_credentials" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode": "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "client_credentials". */
    "grant_type"?: unknown;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode": "test" | "live" | (string & {});
});
/** The `client_credentials` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestClientCredentialsInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "client_credentials".
     */
    "grant_type": "client_credentials";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode": "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "client_credentials". */
    "grant_type"?: ("client_credentials") & ("client_credentials");
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode": "test" | "live";
});
/** The `urn:ietf:params:oauth:grant-type:device_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestDeviceCode = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "urn:ietf:params:oauth:grant-type:device_code".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:device_code" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:device_code". */
    "grant_type"?: unknown;
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
});
/** The `urn:ietf:params:oauth:grant-type:device_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestDeviceCodeInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "urn:ietf:params:oauth:grant-type:device_code".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:device_code";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:device_code". */
    "grant_type"?: ("urn:ietf:params:oauth:grant-type:device_code") & ("urn:ietf:params:oauth:grant-type:device_code");
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
});
/** The request body for: Exchange an OAuth token. */
export type OAuthTokenRequestInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "authorization_code", "client_credentials", "refresh_token",
     * "urn:ietf:params:oauth:grant-type:device_code",
     * "urn:ietf:params:oauth:grant-type:token-exchange".
     */
    "grant_type": "authorization_code"
        | "client_credentials"
        | "refresh_token"
        | "urn:ietf:params:oauth:grant-type:device_code"
        | "urn:ietf:params:oauth:grant-type:token-exchange";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ((Exclude<OAuthTokenRequestAuthorizationCodeInput & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestClientCredentialsInput & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestRefreshTokenInput & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestDeviceCodeInput & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestTokenExchangeInput & object, readonly unknown[]>));
/** The `refresh_token` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestRefreshToken = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "refresh_token".
     */
    "grant_type": "refresh_token" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token": string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "refresh_token". */
    "grant_type"?: unknown;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token": string;
});
/** The `refresh_token` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestRefreshTokenInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "refresh_token".
     */
    "grant_type": "refresh_token";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token": string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "refresh_token". */
    "grant_type"?: ("refresh_token") & ("refresh_token");
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token": string;
});
/** The `urn:ietf:params:oauth:grant-type:token-exchange` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestTokenExchange = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "urn:ietf:params:oauth:grant-type:token-exchange".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:token-exchange" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token": string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type": "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id": string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:token-exchange". */
    "grant_type"?: unknown;
    "requested_token_type"?: unknown;
    "scope"?: unknown;
    "subject_token": unknown;
    "subject_token_type": unknown;
    "workload_identity_id": unknown;
});
/** The `urn:ietf:params:oauth:grant-type:token-exchange` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestTokenExchangeInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "urn:ietf:params:oauth:grant-type:token-exchange".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:token-exchange";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token": string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type": "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id": string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:token-exchange". */
    "grant_type"?: ("urn:ietf:params:oauth:grant-type:token-exchange")
        & ("urn:ietf:params:oauth:grant-type:token-exchange");
    "requested_token_type"?: unknown;
    "scope"?: unknown;
    "subject_token": unknown;
    "subject_token_type": unknown;
    "workload_identity_id": unknown;
});
/** The response for: Exchange an OAuth token. */
export type OAuthTokenResponse = ({
    /**
     * The access token. Send it as a bearer token. Partner app tokens start with `fpat_` and
     * workload identity tokens with `fwat_`. minLength: 1.
     */
    "access_token": string;
    /**
     * ID of the CLI context the access token is for. minLength: 1. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /**
     * ID of the grant that authorizes the partner app in this environment, from a code exchange.
     * Each mode has its own grant. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
     */
    "environment_grant_id"?: string;
    /**
     * Seconds until the access token expires, from 1 to 86400. Partner app tokens last 900 and
     * workload identity tokens at most 3600. minimum: 1. maximum: 86400.
     */
    "expires_in": number;
    /**
     * Present for workload identity token exchange. Identifies the issued credential as an access
     * token. Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "issued_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * Merchant the token acts for: the installing merchant for a code exchange, the bound merchant
     * for a merchant-bound partner app token, or the workload identity's merchant. Absent from an
     * app-level partner app token, which names the merchant per request. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * The token's mode, live or test. Present for partner app tokens and workload access tokens.
     * Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * ID of the CLI OAuth session. It stays the same through every refresh. minLength: 1. Example:
     * "session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".
     */
    "oauth_session_id"?: string;
    /**
     * ID of the partner app the token was issued to. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * ID of the partner app's install on this merchant, from a code exchange. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string;
    /**
     * Rotating flint-cli refresh token. Absent for partner app tokens and workload access tokens.
     * minLength: 1.
     */
    "refresh_token"?: string;
    /**
     * Present exactly when mode is test, except for partner app tokens from client_credentials,
     * which use each merchant's test grant. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * Space-separated granted scope, in the vocabulary the client requested: permission IDs for a
     * partner code exchange, API scope names for flint-cli and workload identities. Empty when a
     * workload identity has no scopes. Absent from client_credentials responses, because a partner
     * app token's scopes are each install's grant.
     */
    "scope"?: string;
    /** The token type, as RFC 6749 defines it. Value enum: "Bearer". */
    "token_type": "Bearer" | (string & {});
    /**
     * Workload identity that authorized the token exchange. Present only for workload access
     * tokens. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
});
export type OauthAuthorizeCLIDeviceParams = (InputValue<CLIDeviceRequestInput>);
export type OauthExchangeTokenParams = (OAuthTokenRequestInput);
export type OauthListCLIContextsParams = (InputValue<CLIContextsRequestInput>);
export type OauthPreviewPartnerInstallAuthorizationParams = {
    /** OAuth response type. Must be code. Value enum: "code". */
    "response_type"?: InputValue<"code">;
    /** Partner app client ID. Example: "fpc_00112233445566778899aabbccddeeff". */
    "client_id": InputValue<string>;
    /** Registered redirect URI for the partner app. */
    "redirect_uri": InputValue<string>;
    /** Install mode. Value enum: "test", "live". */
    "mode": InputValue<"test" | "live">;
    /** Base64url-encoded SHA-256 hash of your code_verifier, without padding (RFC 7636). */
    "code_challenge"?: InputValue<string>;
    /** PKCE challenge method. Value enum: "S256". */
    "code_challenge_method"?: InputValue<"S256">;
    /**
     * Space-separated permission IDs from your app's permission manifest. Omit to request
     * default_requested_permissions. Required permissions are always granted.
     */
    "scope"?: InputValue<string>;
    /**
     * Optional active merchant sandbox ID, accepted only with mode=test. When omitted in test
     * mode, Flint uses the merchant's default sandbox. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: InputValue<string>;
    /** Opaque state value returned to the partner callback. */
    "state"?: InputValue<string>;
};
export type OauthReauthorizeCLIDeviceParams = (InputValue<CLIReauthorizeRequestInput>);
export type OauthRevokeTokenParams = (InputValue<OAuthRevokeRequestInput>);
export type OauthRevokeTokenResponse = undefined;
export type OnboardingAdvanceParams = (InputValue<OnboardingAdvanceRequestInput>
    | {
    "country"?: never;
    "profile"?: never;
    "requested_capabilities"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/** The request body for: Advance onboarding flow. */
export type OnboardingAdvanceRequest = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /**
     * Contact and website details to record for onboarding. Send only the fields to change.
     * Profile changes return `409 ACTION_NOT_ALLOWED` with reason `managed_externally` while the
     * account is being set up. Once the account is active, support contact and website details can
     * change; changing the email address still returns this error. Contact and website details you
     * submit for a merchant during onboarding. Send null to clear a field.
     */
    "profile"?: OnboardingProfileRequest;
    /**
     * Exact initial Flint capability set. Include accept_card_payments and receive_payouts
     * together. Optionally include accept_ach_debit_payments, or omit the field to use the card
     * and payout default set. minItems: 2. maxItems: 3. uniqueItems: true. [] enum:
     * "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". [] (Value): string.
     * Value enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments" | (string & {})>);
};
/** The request body for: Advance onboarding flow. */
export type OnboardingAdvanceRequestInput = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country"?: "US";
    /**
     * Contact and website details to record for onboarding. Send only the fields to change.
     * Profile changes return `409 ACTION_NOT_ALLOWED` with reason `managed_externally` while the
     * account is being set up. Once the account is active, support contact and website details can
     * change; changing the email address still returns this error. Contact and website details you
     * submit for a merchant during onboarding. Send null to clear a field.
     */
    "profile"?: OnboardingProfileRequestInput;
    /**
     * Exact initial Flint capability set. Include accept_card_payments and receive_payouts
     * together. Optionally include accept_ach_debit_payments, or omit the field to use the card
     * and payout default set. minItems: 2. maxItems: 3. uniqueItems: true. [] enum:
     * "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". [] (Value): string.
     * Value enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments">);
};
export type OnboardingCreateAccessLinkParams = (InputValue<CreateOnboardingAccessLinkRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type OnboardingGetStateParams = DisputesAcceptParams;
/** Contact and website details recorded for a merchant during onboarding. */
export type OnboardingProfile = {
    /**
     * The merchant's contact email address. `null` when no email address is on file for the
     * merchant.
     */
    "email": string | null;
    /** Support email address recorded for onboarding. Omitted when none is recorded. */
    "support_email"?: string;
    /** Support phone number recorded for onboarding. Omitted when none is recorded. */
    "support_phone"?: string;
    /** Support page recorded for onboarding. Omitted when none is recorded. */
    "support_url"?: string;
    /** The business's website recorded for onboarding. Omitted when none is recorded. */
    "website_url"?: string;
};
/**
 * Contact and website details you submit for a merchant during onboarding. Send null to clear a
 * field.
 */
export type OnboardingProfileRequest = {
    /** Send null to clear it. minLength: 1. */
    "email"?: string | null;
    /**
     * Buyers see this address on receipts and in their account. A support email is required before
     * initial live activation. Existing live merchants may clear it and receive a nonblocking
     * prompt to add one. Send null to clear it. minLength: 1.
     */
    "support_email"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "support_phone"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "support_url"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "website_url"?: string | null;
};
/**
 * Contact and website details you submit for a merchant during onboarding. Send null to clear a
 * field.
 */
export type OnboardingProfileRequestInput = OnboardingProfileRequest;
/** Non-secret metadata for the calling credential, selected by auth_type. */
export type OnboardingSessionAuthContext = ({
    /** Credential type that selects this object's fields. Value enum: "onboarding_session". */
    "auth_type": "onboarding_session" | (string & {});
    /** Whether the onboarding user's role permits managing API keys. */
    "can_manage_api_keys": boolean;
    /**
     * Time the credential expires; absent for keys without an expiry. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Time fresh identity verification expires; it may be in the past. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "fresh_verification_expires_at": string;
    /** Merchant the credential acts for. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Whether the credential acts in test or live mode. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /**
     * Sandbox the credential is bound to, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id": string;
    /** User the session acts for. Example: "usr_01KEZF7C00YC8757ZYP9727JM0". */
    "user_id": string;
})
    & ({
    /** Value enum: "test". */
    "mode"?: unknown;
});
export type OnboardingStartParams = (InputValue<OnboardingStartRequestInput>);
/** The request body for: Start onboarding flow. */
export type OnboardingStartRequestInput = {
    /** Email address to verify. Flint emails a verification code to it. minLength: 1. */
    "email": string;
    /** First name of the person signing up. minLength: 1. */
    "first_name": string;
    /** Last name of the person signing up. minLength: 1. */
    "last_name": string;
};
/** A response containing `OnboardingStartResult` data. */
export type OnboardingStartResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The verification token
     * and expiry returned after the verification email is accepted for asynchronous delivery.
     * Success does not confirm email delivery.
     */
    "data": OnboardingStartResult;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The verification token and expiry returned after the verification email is accepted for
 * asynchronous delivery. Success does not confirm email delivery.
 */
export type OnboardingStartResult = {
    /**
     * Time the email verification expires. Start onboarding again to request a new code after this
     * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Token identifying the email verification. Send it with the emailed code to POST
     * /v1/onboarding/verify-email.
     */
    "verification_token": string;
};
/**
 * A merchant's onboarding status, profile, next step, requested capabilities, and whether an API
 * key can be issued.
 */
export type OnboardingState = {
    /**
     * Immutable business country for the selected stable provider-account target. Omitted until
     * the target has selected an effective country. Uses ISO 3166-1 alpha-2 country codes.
     * minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /**
     * ID of the merchant's default sandbox. Omitted when the merchant has no default sandbox.
     * Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "default_sandbox_id"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * The step to take next. Omitted when no step is pending, such as while Flint prepares the
     * sandbox. A step that moves a merchant capability or readiness axis forward, with the party
     * that must do it (`owner`) and any required fields.
     */
    "next_step"?: ReadinessAction;
    /**
     * Contact and website details recorded for onboarding. Contact and website details recorded
     * for a merchant during onboarding.
     */
    "profile": OnboardingProfile;
    /**
     * Canonical Flint capability intent persisted on the selected stable provider-account target.
     * The initial merchant-account configuration always includes accept_card_payments and
     * receive_payouts and may also include accept_ach_debit_payments. minItems: 2. maxItems: 3.
     * uniqueItems: true. [] enum: "accept_card_payments", "receive_payouts",
     * "accept_ach_debit_payments". [] (Value): string. Value enum: "accept_card_payments",
     * "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments" | (string & {})>);
    /**
     * Onboarding workflow status for activation and remediation, not a durable account-readiness
     * boolean. Value enum: "complete", "waiting_for_review", "needs_external_action",
     * "needs_input".
     */
    "status": "complete" | "waiting_for_review" | "needs_external_action" | "needs_input" | (string & {});
};
/** A response containing `OnboardingState` data. */
export type OnboardingStateResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant's onboarding
     * status, profile, next step, requested capabilities, and whether an API key can be issued.
     */
    "data": OnboardingState;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type OnboardingVerifyEmailParams = (InputValue<OnboardingVerifyEmailRequestInput>);
/** The request body for: Verify onboarding email. */
export type OnboardingVerifyEmailRequest = {
    /**
     * ID of the merchant this resource belongs to. minLength: 1. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * The code Flint emailed to the address you sent to `POST /v1/onboarding/start`. minLength: 1.
     */
    "verification_code": string;
    /** The `verification_token` that `POST /v1/onboarding/start` returned. minLength: 1. */
    "verification_token": string;
};
/** The request body for: Verify onboarding email. */
export type OnboardingVerifyEmailRequestInput = OnboardingVerifyEmailRequest;
/** A response containing `OnboardingVerifyEmailResult` data. */
export type OnboardingVerifyEmailResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The merchant and user
     * signed in by email verification, with an onboarding session token. Call GET
     * /v1/onboarding/state for the current onboarding state and next step.
     */
    "data": OnboardingVerifyEmailResult;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The merchant and user signed in by email verification, with an onboarding session token. Call
 * GET /v1/onboarding/state for the current onboarding state and next step.
 */
export type OnboardingVerifyEmailResult = {
    /**
     * ID of the merchant's default sandbox for testing API calls. Omitted when the merchant has no
     * default sandbox. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "default_sandbox_id"?: string;
    /**
     * The last instant this session counts as freshly verified, 5 minutes after verification.
     * Until then it can create keys with full or read_only access or with accounts.api_keys.write,
     * accounts.workload_identities.write or commerce.gift_cards.secrets.write. Create the first
     * sandbox key with POST /v1/api-keys before this time; afterward verify the email again for a
     * fresh session. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "fresh_verification_expires_at": string;
    /**
     * The merchant the onboarding session acts for, whether newly provisioned or already
     * associated with the user. Its readiness describes the default sandbox identified by
     * default_sandbox_id, matching GET /v1/merchant with this onboarding session. The business
     * accepting payments.
     */
    "merchant": Merchant;
    /**
     * Expiry of onboarding_session_token. The token cannot be refreshed; verify the email again to
     * get a new one. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "onboarding_session_expires_at": string;
    /**
     * Bearer token for the verified user's onboarding session. Keep it secret and send it in the
     * Authorization header for subsequent onboarding calls.
     */
    "onboarding_session_token": string;
    /**
     * The user signed in by the verified email address. A user with access to merchant accounts.
     */
    "user": User;
};
export type OpenapiGetSpecParams = {
    /**
     * Supported API version in YYYY-MM-DD format, for tools and direct links that can't send
     * Flint-Version. When both are valid, this selects the returned specification. An invalid
     * Flint-Version header still returns an error.
     */
    "version"?: InputValue<string>;
};
export type OpenapiGetSpecResponse = WebhookPreviousAttributes;
/** A customer's purchase and its payment and fulfillment progress. */
export type Order = {
    /**
     * The payment attempt currently collecting this order. Omitted when no attempt is active or
     * its collection surface belongs to another caller. An attempt to pay an order.
     */
    "active_payment_attempt"?: OrderPaymentAttempt;
    /**
     * The earliest open or resolving payment review on this order's counted payments. `null` when
     * no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     */
    "active_payment_review_id": string | null;
    /**
     * The amounts authorized and still capturable on the order's payments. The amounts authorized
     * and still capturable on an order's payments, with the authorization expiry.
     */
    "authorization_amounts"?: OrderAuthorizationAmounts;
    /**
     * Email and phone saved when payment started, from the pay request's buyer_contact or the
     * paying checkout session's saved contact. It does not change the linked customer. Buyer
     * contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** A note to the buyer. */
    "buyer_note"?: string;
    /**
     * Charges added to the order, such as delivery or service fees, each with its applied amount,
     * tax, and refunded amount. [] (Value): {@link OrderCharge}. An additional charge applied to
     * an order.
     */
    "charges": Array<OrderCharge>;
    /**
     * IDs of the checkout sessions opened for this order. [] (Value): string. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_ids": Array<string>;
    /**
     * The reference the payment link URL or resolve request carried, such as your user ID. `null`
     * when none was sent or checkout did not start from a payment link. Returned only to merchant
     * credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a
     * claim, not proof of identity. minLength: 1. maxLength: 255.
     */
    "client_reference": string | null;
    /**
     * When the order closed. Present exactly when status is closed. Set once at the transition and
     * never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "closed_at"?: string;
    /**
     * Why the order closed. Present exactly when status is closed. Set once at closure.
     * Unrecognized reasons are returned as other; new values may be added. Value enum:
     * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     */
    "closed_reason"?: "invoice_voided"
        | "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /**
     * The caller note supplied when closing the order. System closures leave it absent. It is not
     * shown to the buyer.
     */
    "closed_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The buyer's answers to the payment link's custom fields, recorded when checkout started, in
     * the order the link showed the fields. Each answer keeps the field's key, label, and type
     * from that moment, so later changes to the link don't change it. Optional fields the buyer
     * left blank are left out. Read-only. Empty when the order didn't come from a payment link,
     * the link had no custom fields, or the buyer answered none. Orders created before Flint
     * recorded answers here also return an empty list and keep their answers in `metadata` as
     * `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant
     * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`.
     */
    "custom_field_answers": Array<CustomFieldAnswer>;
    /**
     * Customer summary included when `expand` names `customer`; `null` when expanded and no
     * customer is linked. Present only when `expand` includes `customer`; `null` when expanded and
     * there is no related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** ID of the customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: string;
    /**
     * Promotions accepted at subscription signup. They attach when the subscription is provisioned
     * and first discount its first charged cycle. They do not discount this order and are separate
     * from discounts and order totals. Always present; empty when no promotions are deferred. []
     * (Value): {@link DeferredPromotion}. A promotion accepted at subscription signup for the
     * subscription's first charged cycle. It does not discount the signup order.
     */
    "deferred_promotions": Array<DeferredPromotion>;
    /**
     * Method, type and recipient of governing_delivery_selection_id. The address remains in
     * delivery_destination. Omitted when no shipment or local-delivery selection governs the
     * order. Method, type and recipient of governing_delivery_selection_id. delivery_destination
     * contains the resolved address. These values describe the same selection.
     */
    "delivery"?: OrderDeliverySummary;
    /**
     * The shipment or local-delivery destination committed for this order. Payment freezes this
     * value; fulfillment recipient changes do not replace it. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. Where an order is
     * delivered: the address, the recipient, and where the destination came from.
     */
    "delivery_destination"?: OrderDeliveryDestination;
    /**
     * Discounts applied to the order, each with its amount, status, and the line items and charges
     * it covers. [] (Value): {@link OrderDiscount}. A discount applied to an order, with its
     * amount, status, and the line items and charges it covers. It comes from a manual discount or
     * a promotion.
     */
    "discounts": Array<OrderDiscount>;
    /**
     * Aggregate dispute state across the order's counted payment intents, excluding
     * payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open
     * states take precedence in this order: needs_response, under_review, inquiry_needs_response,
     * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
     * prevented, inquiry_closed; none when no disputes count. List individual cases with GET
     * /v1/disputes?order_id={order_id}. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other".
     */
    "dispute_status"?: "none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled",
     * "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     */
    "fulfillment_status"?: "not_fulfilled"
        | "partially_fulfilled"
        | "fulfilled"
        | "canceled"
        | "not_applicable"
        | "closed"
        | (string & {});
    /**
     * Fulfillments created for the order, each covering a set of its line items. [] (Value):
     * {@link Fulfillment}. Work required to deliver an order's items.
     */
    "fulfillments": Array<Fulfillment>;
    /**
     * An estimate of how the order balance splits between gift cards and the payment processor. An
     * estimate of how an order total splits between gift cards and the payment processor, and
     * whether gift cards can pay it.
     */
    "gift_card_estimate"?: OrderGiftCardEstimate;
    /**
     * The gift card redemptions applied to the order's payments. [] (Value): {@link
     * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with the
     * amount, tip, and gift card.
     */
    "gift_card_settlements": Array<OrderGiftCardSettlement>;
    /**
     * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
     * accept changes, are not subscription purchases, and whose merchant has at least one gift
     * card that is not closed in this environment. Recomputed on each read; a spent but open card
     * still counts.
     */
    "gift_card_tender_enabled": boolean;
    /**
     * Gift cards available to pay the order, with each card's available balance. [] (Value):
     * {@link OrderGiftCardSelection}. A gift card available to pay an order, with its available
     * balance and the last four characters of its code.
     */
    "gift_cards": Array<OrderGiftCardSelection>;
    /**
     * ID of the delivery selection that governs this order, including pickup choices without a
     * delivery destination: the checkout's provisional selection before payment, and the selection
     * a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "governing_delivery_selection_id": string | null;
    /**
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. Every physical item is handed to the
     * buyer at this location when the order is paid. Replaces a delivery selection.
     */
    "handover"?: OrderHandover;
    /** A note for your team. Buyer reads leave it out. */
    "internal_note"?: string;
    /**
     * Why inventory could not be committed after payment. The cause remains after resolution.
     * Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values
     * may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
     * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     */
    "inventory_exception_reason"?: "inventory_deduction_failed"
        | "inventory_handoff_failed"
        | "auto_refund_required"
        | "auto_refund_failed"
        | "policy_resolution_failed"
        | "other"
        | (string & {});
    /**
     * The merchant note supplied when resolving the inventory exception. It is not shown to the
     * buyer.
     */
    "inventory_exception_resolution_message"?: string;
    /**
     * Whether an inventory problem after payment needs attention. Value enum:
     * "paid_inventory_failed", "resolved".
     */
    "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
    /**
     * The reservation holding stock for this order, when one exists. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_id"?: string;
    /**
     * Where this order's tracked demand is routed. Required before an order containing tracked
     * variants can hold stock. Where an order, payment link, or reservation routes inventory from:
     * a fixed Location, an inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * The invoice associated with this order. Null when the order has no invoice. A replacement
     * invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string | null;
    /**
     * Items the order sells, each with its pricing, tax, and fulfillment quantities. [] (Value):
     * {@link OrderLineItem}. An item purchased in an order.
     */
    "line_items": Array<OrderLineItem>;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Unique identifier for this order, prefixed `ord_`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /** Human-readable order number for receipts and merchant reference. */
    "order_number"?: string;
    /**
     * How the order was created. invoice means a Quick Pay invoice created the order; attaching an
     * invoice to an existing order preserves its origin. Value enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription", "invoice".
     */
    "origin"?: "virtual_terminal"
        | "payment_link"
        | "checkout"
        | "api"
        | "subscription"
        | "invoice"
        | (string & {});
    /**
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "paid_at": string | null;
    /**
     * Payment options and collection instructions for the order's outstanding balance. Omitted
     * when collection is unavailable to this caller. Client-side details for collecting payment
     * from the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /**
     * IDs of the payment intents created to collect this order. [] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_ids": Array<string>;
    /**
     * Payment intents included when `expand` names `payment_intents`. [] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Payment link whose checkout created this order. Absent for orders that did not come from a
     * payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: string;
    /**
     * Collection progress. An invoice write-off also completes collection without receiving the
     * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "prepayment_order_id": string | null;
    /**
     * The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. The
     * money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and
     * total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * IDs of the refunds that name this order. This includes refunds Flint makes to return a
     * payment it couldn't accept (`reason` `payment_returned`), which never count toward
     * `refund_status` or the order's refunded amounts. [] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_ids": Array<string>;
    /**
     * Refund progress for collected money. Refunds with `reason` `payment_returned` return money
     * the order never received and don't count. Value enum: "none", "partially_refunded",
     * "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Value applied to this order from items the buyer returned, such as an exchange's replacement
     * order. Included in settlement_amounts.paid_money. [] (Value): {@link
     * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the amount
     * and the return and resolution it came from.
     */
    "return_credit_settlements": Array<OrderReturnCreditSettlement>;
    /**
     * ID of the return resolution that created this order as a replacement. Omitted for orders a
     * return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * How much of the order has been paid, refunded, credited, written off, and settled as tips,
     * and what is still outstanding. The bill settlement amounts plus order overpayments, settled
     * tips, debt discharged by final capture, and value order edits removed. Money collected,
     * returned, waived, and still owed on a bill.
     */
    "settlement_amounts": OrderSettlementAmounts;
    /**
     * Instructions for saving a payment method for a subscription order. Omitted when setup is
     * unavailable. Client guidance for saving a payment method on the merchant's connected
     * account.
     */
    "setup_collection"?: SetupCollection;
    /**
     * Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes,
     * returns, and metadata or note edits continue on a closed order. Value enum: "open",
     * "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Subscription summary included when `expand` names `subscription`; `null` when expanded and
     * this order does not bill a subscription. Present only when `expand` includes `subscription`;
     * `null` when expanded and there is no related subscription. anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummary}. A subscription's summary fields, including status, billing
     * period, and next billing time, returned when the subscription is expanded. anyOf[2] (Value):
     * null.
     */
    "subscription"?: ((ExpandedSubscriptionSummary) | (null));
    /**
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     */
    "subscription_cycle"?: number;
    /**
     * Time the subscriber changed delivery after this paid renewal was prepared. The order keeps
     * its committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "subscription_delivery_changed_at"?: string;
    /**
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     */
    "subscription_delivery_number": number | null;
    /**
     * ID of the subscription this order bills. Absent on an order that isn't from a subscription.
     * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: string;
    /**
     * Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this
     * order does not bill a subscription plan. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A subscription plan's summary
     * fields, including name, billing interval, currency, and status, returned when the plan is
     * expanded. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /**
     * ID of the subscription plan this order bills. Absent on an order that isn't from a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. [] enum: "close", "pay", "resolve_inventory_exception". []
     * (Value): string. Value enum: "close", "pay", "resolve_inventory_exception".
     */
    "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
    /**
     * The order's tax state: whether tax is enabled, its status, location, exemption, and
     * per-jurisdiction rows. An order's tax state, including its mode, price mode, status,
     * location, exemption, and tax breakdowns.
     */
    "tax": OrderTax;
    /**
     * Event and tickets this order sold through an event payment link. Absent on other orders.
     * Event details for a ticketed order: name, location, start time, time zone, and the tickets
     * issued.
     */
    "ticketed_event"?: TicketedEvent;
    /**
     * Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared
     * before payment stays listed as canceled. [] (Value): {@link Tip}. A tip on an order, with
     * its requested, settled, and refunded amounts, status, and how it was paid.
     */
    "tips": Array<Tip>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     */
    "version": number;
};
/**
 * Read-only order history row for merchant timeline rendering and debugging. The owning resource
 * remains authoritative for state and money movement.
 */
export type OrderActivity = {
    /**
     * The action recorded on the order. Omitted when the activity type cannot be identified.
     * Clients must accept values added in future releases. Value enum: "created",
     * "dispute_opened", "dispute_closed", "line_item_added", "line_item_updated",
     * "line_item_removed", "discount_applied", "discount_removed", "tax_updated",
     * "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added",
     * "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_edited",
     * "payment_review_opened", "payment_review_closed", "order_updated", "adjustment", "closed",
     * "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed".
     */
    "activity_type"?: "created"
        | "dispute_opened"
        | "dispute_closed"
        | "line_item_added"
        | "line_item_updated"
        | "line_item_removed"
        | "discount_applied"
        | "discount_removed"
        | "tax_updated"
        | "requested_tip_added"
        | "requested_tip_updated"
        | "requested_tip_removed"
        | "charge_added"
        | "charge_updated"
        | "charge_removed"
        | "charge_fulfillment_updated"
        | "order_edited"
        | "payment_review_opened"
        | "payment_review_closed"
        | "order_updated"
        | "adjustment"
        | "closed"
        | "payment"
        | "payment_failed"
        | "refund"
        | "refund_failed"
        | "checkout_session_created"
        | "checkout_session_expired"
        | "checkout_session_invalidated"
        | "fulfillment_created"
        | "fulfillment_updated"
        | "fulfillment_state_changed"
        | (string & {});
    /**
     * Signed change this row made to the order balance: running_balance_money minus the balance
     * before the row. Rows that do not change the balance, such as payment_failed, refund_failed,
     * and most refund rows, have amount 0. A payment or refund amount is on the referenced
     * resource. Do not sum activity deltas to compute the order balance. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "balance_delta_money": MoneyValue;
    /**
     * Related checkout session when activity_type points at checkout session lifecycle. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Human-readable Flint description. Provider-specific raw statuses and failure values are not
     * exposed here.
     */
    "description": string;
    /**
     * Related Flint dispute, prefixed du_, for dispute_opened and dispute_closed activities.
     * Omitted for other activities. Dispute activities do not change the order balance. Merchant
     * reads only. Buyer activity lists omit it. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id"?: string;
    /**
     * Related fulfillment for a fulfillment_created, fulfillment_updated, or
     * fulfillment_state_changed activity. Omitted when the row does not identify one fulfillment.
     * Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * Unique identifier for this activity, prefixed oact_. Example:
     * "oact_01KEZF7C006V2DKWC7N41DXD7T".
     */
    "order_activity_id": string;
    /**
     * Related charge for a charge_added, charge_updated, charge_removed, or
     * charge_fulfillment_updated activity. Omitted when the row does not identify one charge.
     * Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id"?: string;
    /**
     * Related discount for a discount_applied or discount_removed activity. Omitted when the row
     * does not identify one discount. Example: "ad_01KEZF7C00T30DH97GR0A9BF31".
     */
    "order_discount_id"?: string;
    /**
     * Order that owns this record or its referenced line item and charge. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Related line item for a line_item_added, line_item_updated, or line_item_removed activity.
     * Omitted when the row does not identify one line item. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id"?: string;
    /**
     * Related requested tip for a requested_tip_added, requested_tip_updated, or
     * requested_tip_removed activity. Omitted when the row does not identify one tip. Example:
     * "tip_01KEZF7C00JRPYP11RTMB97MYH".
     */
    "order_tip_id"?: string;
    /**
     * Related payment intent when activity_type points at a payment attempt or payment outcome.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Payment review recorded by this row. Omitted for activities unrelated to payment reviews.
     * Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     */
    "payment_review_id"?: string;
    /**
     * Related refund when activity_type points at a refund outcome. Read the refund for the
     * authoritative outcome. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: string;
    /**
     * Signed order balance just after this row: settlement_amounts.outstanding_money minus
     * settlement_amounts.overpaid_money at that moment, negative when the order is overpaid. This
     * is context for reading the log, not a reconciliation ledger. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "running_balance_money": MoneyValue;
};
/** A page of `OrderActivity` objects. */
export type OrderActivityListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * OrderActivity}. Read-only order history row for merchant timeline rendering and debugging.
     * The owning resource remains authoritative for state and money movement.
     */
    "data": Array<OrderActivity>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The amounts authorized and still capturable on an order's payments, with the authorization
 * expiry.
 */
export type OrderAuthorizationAmounts = {
    /**
     * The amount authorized on the order's payments. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "authorized_money": MoneyValue;
    /**
     * The part of the authorized amount that can still be captured. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "capturable_money": MoneyValue;
    /**
     * Earliest effective Flint capture deadline among the order's active authorizations. Each
     * authorization is bounded by its provider capture deadline and any resource guarantee.
     * Omitted when no active authorization has a deadline. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
};
/**
 * Tax settings for an order charge calculated by Flint or supplied by you, including the charge's
 * tax category and whether it is taxable.
 */
export type OrderCalculatedChargeTax = {
    /**
     * Tax category of the charge, which decides its automatic tax: service_fee, shipping,
     * delivery, handling, and surcharge are taxed at the general rate at the charge location,
     * including the store for pickup. A taxable charge without a category fails with
     * `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes
     * delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and
     * handling from handling_fee; other types take none. The default follows type and is not
     * returned. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | (string & {});
    /** Whether the charge is subject to tax. */
    "taxable"?: boolean;
};
/**
 * Tax settings for an order charge calculated by Flint or supplied by you, including the charge's
 * tax category and whether it is taxable.
 */
export type OrderCalculatedChargeTaxRequestInput = {
    /**
     * The tax you supply for this charge. Used when the order's tax `mode` is `external`. Tax you
     * calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation"?: TaxCalculationRequestRequestInput;
    /**
     * Tax category of the charge, which decides its automatic tax: service_fee, shipping,
     * delivery, handling, and surcharge are taxed at the general rate at the charge location,
     * including the store for pickup. A taxable charge without a category fails with
     * `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes
     * delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and
     * handling from handling_fee; other types take none. The default follows type and is not
     * returned. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge";
    /** Whether the charge is subject to tax. */
    "taxable"?: boolean;
};
/**
 * Tax settings for an order line item calculated by Flint or supplied by you, including the line
 * item tax category and whether it is taxable.
 */
export type OrderCalculatedLineItemTax = {
    /**
     * The tax you supply for this line item. Used when the order's tax `mode` is `external`. Tax
     * you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation"?: TaxCalculationRequest;
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
    /** Whether the line item is subject to tax. */
    "taxable"?: boolean;
};
/**
 * Tax settings for an order line item calculated by Flint or supplied by you, including the line
 * item tax category and whether it is taxable.
 */
export type OrderCalculatedLineItemTaxRequestInput = {
    /**
     * The tax you supply for this line item. Used when the order's tax `mode` is `external`. Tax
     * you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation"?: TaxCalculationRequestRequestInput;
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
    /** Whether the line item is subject to tax. */
    "taxable"?: boolean;
};
