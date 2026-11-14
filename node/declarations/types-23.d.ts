import type { DeliveryZone, DeliveryZoneConfiguration } from './types-22.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-38.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryZoneRequestInput, CreateDemoSessionRequestInput, CreateDeviceRequestInput } from './types-9.js';
import type { DeliveryLocationSetsDeleteParams } from './types-18.js';
import type {
    DisputesAcceptParams,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary
} from './types-24.js';
import type { UpdateDeliveryZoneRequestInput, UpdateDeviceRequestInput } from './types-66.js';
import type { ResponseMeta, ResetDemoSessionRequestInput } from './types-54.js';
import type { InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-29.js';
import type { Settings } from './types-59.js';
import type { TaxConnection } from './types-65.js';
import type { PromotionCandidate } from './types-51.js';
import type { CreateOrderDiscount, CreateOrderDiscountInput } from './types-11.js';
import type { AcceptFulfillmentRequestInput } from './types-0.js';
import type { MoneyValue } from './types-39.js';
import type { SplitReversalReference } from './types-60.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
/**
 * The `delivery_zone.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryZoneUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryZoneConfiguration}.
     * Current geographic eligibility conditions. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions. object.created_at (Required): string.
     * Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_zone_revision_id (Required): string. Immutable revision used for new
     * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". object.delivery_zone_id (Required):
     * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing zone name.
     * object.status (Required): string. Current zone lifecycle status. Value enum: "active",
     * "archived". object.updated_at (Required): string. Time the zone last changed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryZoneConfiguration}. Current geographic
         * eligibility conditions. A reusable geographic predicate containing only country, state,
         * postal_code, and radius conditions. created_at (Required): string. Time the zone was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_zone_revision_id (Required): string. Immutable revision used for new
         * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". delivery_zone_id (Required):
         * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". metadata (Optional):
         * {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Merchant-facing zone name. status
         * (Required): string. Current zone lifecycle status. Value enum: "active", "archived".
         * updated_at (Required): string. Time the zone last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * zone writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current geographic eligibility conditions. A reusable geographic predicate
             * containing only country, state, postal_code, and radius conditions.
             */
            "configuration": DeliveryZoneConfiguration;
            /** Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example:
             * "dzoner_01KEZF7C00DF2H9VW29JN861K6".
             */
            "current_delivery_zone_revision_id": string;
            /** Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". */
            "delivery_zone_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing zone name. */
            "name": string;
            /** Current zone lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /** Time the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryZone>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_zone.updated". */
    "event_type"?: "delivery_zone.updated";
});
export type DeliveryZonesCreateParams = (InputValue<CreateDeliveryZoneRequestInput>)
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
export type DeliveryZonesDeleteParams = DeliveryLocationSetsDeleteParams;
export type DeliveryZonesGetParams = DisputesAcceptParams;
export type DeliveryZonesListParams = {
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
     * Search across delivery_zone_id, name, and external_reference_id. Text fields match any part
     * of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as dzone_01. maxLength: 255.
     */
    "query"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "active", "archived". anyOf[1][] (Value): string. Value enum: "active",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
    /**
     * Filter by an active current method that references this resource. pattern:
     * ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: InputValue<string>;
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
export type DeliveryZonesUpdateParams = (UpdateDeliveryZoneRequestInput)
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
/** A demo session with its sandbox, API key, and expiry. */
export type DemoSession = {
    /** The API key issued for a demo session, with its `secret_key` and the scopes it grants. */
    "api_key": DemoSessionAPIKey;
    /**
     * Unique identifier for this demo session, prefixed `demo_`. Example:
     * "demo_01KEZF7C001S0675NAS5BPBS0V".
     */
    "demo_session_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at": string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id": string;
};
/** The API key issued for a demo session, with its `secret_key` and the scopes it grants. */
export type DemoSessionAPIKey = {
    /**
     * [] enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
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
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
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
    "scopes": Array<"accounts.api_keys.read"
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
        | (string & {})>;
    "secret_key": string;
};
/** A response containing `DemoSession` data. */
export type DemoSessionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A demo session with its
     * sandbox, API key, and expiry.
     */
    "data": DemoSession;
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
export type DemoSessionsCreateParams = (InputValue<CreateDemoSessionRequestInput> | {
    "template"?: never;
})
    & {
    /**
     * Challenge token from Flint's hosted bot check on the page that offers the demo. Flint
     * identifies the demo client by its IP address.
     */
    "Flint-Challenge-Token": InputValue<string>;
};
export type DemoSessionsResetParams = (InputValue<ResetDemoSessionRequestInput> | {
    "template"?: never;
})
    & {
    /**
     * Challenge token from Flint's hosted bot check on the page that offers the demo. Flint
     * identifies the demo client by its IP address.
     */
    "Flint-Challenge-Token": InputValue<string>;
};
/** Takes stock off the origin location and puts it in transit. */
export type DepartInventoryTransferRequest = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_departed_quantity (Required): integer.
     * Cumulative quantity that should have departed the origin. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should have departed the origin. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_departed_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** Takes stock off the origin location and puts it in transit. */
export type DepartInventoryTransferRequestInput = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_departed_quantity (Required): integer.
     * Cumulative quantity that should have departed the origin. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should have departed the origin. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_departed_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/**
 * A device registered to the merchant account by hardware fingerprint, optionally assigned to a
 * location. Registering a device doesn't take payments; a reader does.
 */
export type Device = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Stable identifier of the device. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". */
    "device_id": string;
    /**
     * Identifier of the physical hardware, compared exactly. Only one active device can hold a
     * fingerprint. Archiving the device releases it, so the field is omitted on archived devices
     * and a new device can register the same hardware.
     */
    "hardware_fingerprint"?: string;
    /**
     * The Location the device is assigned to. Omitted when it has none. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /** The merchant that owns the device. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Name you gave the device. */
    "name": string;
    /** Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Starts at 1 and goes up with each update and on archive. Send it as `expected_version` to
     * apply an update only if nothing changed. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `Device` objects. */
export type DeviceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Device}. A device registered to the merchant account by hardware fingerprint, optionally
     * assigned to a location. Registering a device doesn't take payments; a reader does.
     */
    "data": Array<Device>;
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
/** A response containing `Device` data. */
export type DeviceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A device registered to
     * the merchant account by hardware fingerprint, optionally assigned to a location. Registering
     * a device doesn't take payments; a reader does.
     */
    "data": Device;
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
export type DevicesCreateParams = (InputValue<CreateDeviceRequestInput>);
export type DevicesDeleteParams = {
    /**
     * Optional device version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
};
export type DevicesGetParams = {};
export type DevicesListParams = {
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
     * "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "active", "archived". anyOf[1][] (Value): string. Value enum: "active",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
    /**
     * Filter by assigned Flint location ID. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: InputValue<string>;
    /**
     * Exact, case-sensitive match. Archived devices release their fingerprint, so this finds at
     * most the one active device that holds it. minLength: 1. maxLength: 255.
     */
    "hardware_fingerprint"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by device_id. Default:
     * "created_at". Value enum: "name", "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type DevicesUpdateParams = (InputValue<UpdateDeviceRequestInput>);
/**
 * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
 */
export type DigitalFulfillmentDetails = {
    /**
     * When the digital goods were delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string;
    /**
     * URL where the recipient can access the delivered digital goods. Merchant credentials receive
     * the link when set; checkout session and invoice access credentials don't receive it after
     * the covered lines are fully refunded.
     */
    "delivery_url"?: string;
};
/** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
export type Dimensions = {
    /**
     * Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0.
     * multipleOf: 0.001.
     */
    "height": number;
    /**
     * Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0.
     * multipleOf: 0.001.
     */
    "length": number;
    /**
     * Length unit for length, width, and height. Use millimeter, centimeter, or inch. Value enum:
     * "millimeter", "centimeter", "inch".
     */
    "unit": "millimeter" | "centimeter" | "inch" | (string & {});
    /**
     * Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0.
     * multipleOf: 0.001.
     */
    "width": number;
};
/** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
export type DimensionsRequestInput = {
    /**
     * Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0.
     * multipleOf: 0.001.
     */
    "height": number;
    /**
     * Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0.
     * multipleOf: 0.001.
     */
    "length": number;
    /**
     * Length unit for length, width, and height. Use millimeter, centimeter, or inch. Value enum:
     * "millimeter", "centimeter", "inch".
     */
    "unit": "millimeter" | "centimeter" | "inch";
    /**
     * Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0.
     * multipleOf: 0.001.
     */
    "width": number;
};
/** The request body for: Disconnect automatic tax. */
export type DisconnectTaxConnectionRequest = {
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Choose turn_off to stop adding tax to new orders that inherit the default, or keep to leave
     * the default unchanged. Keep refuses those orders and holds subscription renewals until
     * automatic tax is reconnected or the default is turned off. Neither choice turns tax on.
     * Value enum: "turn_off", "keep".
     */
    "tax_default_behavior": "turn_off" | "keep" | (string & {});
};
/** The request body for: Disconnect automatic tax. */
export type DisconnectTaxConnectionRequestInput = {
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Choose turn_off to stop adding tax to new orders that inherit the default, or keep to leave
     * the default unchanged. Keep refuses those orders and holds subscription renewals until
     * automatic tax is reconnected or the default is turned off. Neither choice turns tax on.
     * Value enum: "turn_off", "keep".
     */
    "tax_default_behavior": "turn_off" | "keep";
};
/** A response containing `DisconnectTaxConnectionResult` data. */
export type DisconnectTaxConnectionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The disconnected
     * automatic tax connection and merchant settings after the requested default-tax change.
     */
    "data": DisconnectTaxConnectionResult;
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
 * The disconnected automatic tax connection and merchant settings after the requested default-tax
 * change.
 */
export type DisconnectTaxConnectionResult = {
    /**
     * Merchant settings, as returned by GET /v1/settings. The settings for one merchant
     * environment.
     */
    "settings": Settings;
    /**
     * The connection changed by this operation. Its version is the expected_version target. The
     * environment's automatic sales tax connection. Before a record exists, identity, version and
     * timestamps are omitted. Read-time business-detail changes and provider pauses do not advance
     * version or send webhooks. Status_reason and supported_actions can also change with the clock
     * as registrations end, without a version change or webhook.
     */
    "tax_connection": TaxConnection;
};
/**
 * Promotions evaluated for an order, grouped into those that were applied, those that are
 * available, and those that were skipped.
 */
export type DiscountPreview = {
    /**
     * Promotions that apply to the order now. [] (Value): {@link PromotionCandidate}. A promotion
     * considered for an order, with its discount amounts, its stacking rules, and why it was or
     * was not applied.
     */
    "applied": Array<PromotionCandidate>;
    /**
     * Promotions the order is eligible for that aren't applied. [] (Value): {@link
     * PromotionCandidate}. A promotion considered for an order, with its discount amounts, its
     * stacking rules, and why it was or was not applied.
     */
    "available": Array<PromotionCandidate>;
    /**
     * Promotions Flint evaluated and didn't apply. [] (Value): {@link PromotionCandidate}. A
     * promotion considered for an order, with its discount amounts, its stacking rules, and why it
     * was or was not applied.
     */
    "skipped": Array<PromotionCandidate>;
};
/** The request body for: Create discount preview. */
export type DiscountPreviewRequest = {
    /**
     * A discount to evaluate as if it were applied to the order. A discount to apply when creating
     * an order: either a manual discount or a reference to a promotion.
     */
    "discount"?: CreateOrderDiscount;
    /**
     * The order to evaluate. Checkout session credentials can use only their own order. minLength:
     * 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
};
/** The request body for: Create discount preview. */
export type DiscountPreviewRequestInput = {
    /**
     * A discount to evaluate as if it were applied to the order. A discount to apply when creating
     * an order: either a manual discount or a reference to a promotion.
     */
    "discount"?: CreateOrderDiscountInput;
    /**
     * The order to evaluate. Checkout session credentials can use only their own order. minLength:
     * 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
};
/** A response containing `DiscountPreview` data. */
export type DiscountPreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Promotions evaluated for
     * an order, grouped into those that were applied, those that are available, and those that
     * were skipped.
     */
    "data": DiscountPreview;
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
export type DiscountPreviewsCreateParams = (InputValue<DiscountPreviewRequestInput>)
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
/** Records that a shipment or local delivery fulfillment has left for its destination. */
export type DispatchFulfillmentRequestInput = AcceptFulfillmentRequestInput;
/** A challenge to a collected payment. */
export type Dispute = {
    /**
     * Amount in dispute. For a chargeback, this amount left your balance when the case opened; an
     * inquiry moves no money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Whether this dispute has an evidence response window. It stays true after the window closes
     * or a decision is made. Use is_action_required to know whether a response is needed now.
     */
    "can_respond_with_evidence": boolean;
    /**
     * Kind of case the card network or bank opened. `status` and `is_action_required` say whether
     * a response is needed. Value enum: "inquiry", "chargeback", "compliance", "resolution",
     * "block", "other", "bank_return".
     */
    "case_type": "inquiry"
        | "chargeback"
        | "compliance"
        | "resolution"
        | "block"
        | "other"
        | "bank_return"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * The customer on the disputed payment. Absent when the payment has none. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
    "dispute_id": string;
    /**
     * Deadline for submitting evidence. Respond before it when is_action_required is true. `null`
     * when the dispute has no response window, such as a bank return or a case your processor gave
     * no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "evidence_due_at": string | null;
    /**
     * How many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     */
    "evidence_submission_count": number;
    /**
     * The fraud warning the card network sent for this payment before the dispute. Absent when
     * there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
     */
    "fraud_warning_id"?: string;
    /**
     * Whether evidence is saved for this dispute, submitted or not. In test mode this includes an
     * unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean
     * someone started a response. evidence_submission_count says whether evidence was submitted.
     */
    "has_evidence": boolean;
    /**
     * True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is
     * true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook
     * payload, as of when Flint recorded the change. It turns false once evidence_due_at has
     * passed, with no event.
     */
    "is_action_required": boolean;
    /**
     * Whether evidence_due_at has passed on a dispute with a response window. Always false when
     * can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook
     * payload, as of when Flint recorded the change. It turns true once evidence_due_at has
     * passed, with no event.
     */
    "is_evidence_deadline_passed": boolean;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
     */
    "network_reason_code": string | null;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an
     * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Present only when `expand` includes `payment_intent`; `null` when expanded and there is no
     * related payment intent. anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
     * intent's summary fields, including amount, status, and capture method, returned when the
     * payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /**
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to
     * a payment intent that records a payment option. Value enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit", null.
     */
    "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
    /**
     * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value enum:
     * "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     */
    "reason": "fraudulent"
        | "unrecognized"
        | "duplicate"
        | "product_not_received"
        | "product_not_as_described"
        | "refund_not_processed"
        | "subscription_canceled"
        | "noncompliant"
        | "insufficient_funds"
        | "debit_not_authorized"
        | "bank_account_not_found"
        | "other"
        | (string & {});
    /**
     * Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the
     * ones that fit what you sold. Empty when Flint has no recommendation, including bank returns.
     * Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the
     * change. [] enum: "customer_details", "customer_communication", "customer_signature",
     * "receipt", "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". [] (Value): string. Value enum: "customer_details",
     * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
     * "service_documentation", "access_activity_log", "product_description", "refund_policy",
     * "duplicate_charge_documentation", "cancellation_policy".
     */
    "recommended_evidence_types": Array<"customer_details"
        | "customer_communication"
        | "customer_signature"
        | "receipt"
        | "shipping_documentation"
        | "service_documentation"
        | "access_activity_log"
        | "product_description"
        | "refund_policy"
        | "duplicate_charge_documentation"
        | "cancellation_policy"
        | (string & {})>;
    /**
     * Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason
     * is reported. Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable".
     */
    "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
    /**
     * Fixed seller allocations on the payment, each naming its payment split and reversal. Present
     * only when the payment has splits; an empty array means no seller share was allocated. Read
     * PaymentSplit.reversals for status, shortfall, and reinstated amounts. [] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes.
     */
    "split_reversals"?: Array<SplitReversalReference>;
    /**
     * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond;
     * `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other".
     */
    "status": "inquiry_needs_response"
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
     * Recorded time of the current status. On first observation this is the dispute creation time.
     * Later status changes use the provider event time when available, or the time Flint observed
     * the change. This may not be the exact decision or submission time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "status_changed_at"?: string;
    /**
     * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook
     * payload, as of when Flint recorded the change. It turns empty once evidence_due_at has
     * passed, with no event. [] enum: "accept". [] (Value): string. Value enum: "accept".
     */
    "supported_actions": Array<"accept" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type DisputeCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "dispute.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "dispute.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "dispute.created";
});
/**
 * The `dispute.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type DisputeCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "dispute.created". */
    "event_type"?: "dispute.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `dispute.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type DisputeCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "dispute.created". */
    "event_type"?: "dispute.created";
});
export type DisputeInquiryClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Dispute>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "dispute.inquiry_closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Dispute>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "dispute.inquiry_closed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "dispute.inquiry_closed";
});
/**
 * The `dispute.inquiry_closed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DisputeInquiryClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "dispute.inquiry_closed". */
    "event_type"?: "dispute.inquiry_closed";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `dispute.inquiry_closed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DisputeInquiryClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "dispute.inquiry_closed". */
    "event_type"?: "dispute.inquiry_closed";
});
/** A page of `Dispute` objects. */
export type DisputeListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Dispute}. A challenge to a collected payment.
     */
    "data": Array<Dispute>;
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
export type DisputeLostEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Dispute>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "dispute.lost";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Dispute>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "dispute.lost";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "dispute.lost";
});
/**
 * The `dispute.lost` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type DisputeLostInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "dispute.lost". */
    "event_type"?: "dispute.lost";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `dispute.lost` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type DisputeLostMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "dispute.lost". */
    "event_type"?: "dispute.lost";
});
export type DisputeNeedsResponseEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Dispute>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "dispute.needs_response";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Dispute>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "dispute.needs_response";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "dispute.needs_response";
});
/**
 * The `dispute.needs_response` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DisputeNeedsResponseInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "dispute.needs_response". */
    "event_type"?: "dispute.needs_response";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `dispute.needs_response` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DisputeNeedsResponseMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "dispute.needs_response". */
    "event_type"?: "dispute.needs_response";
});
export type DisputePreventedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Dispute>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "dispute.prevented";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Dispute>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "dispute.prevented";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "dispute.prevented";
});
/**
 * The `dispute.prevented` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DisputePreventedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "dispute.prevented". */
    "event_type"?: "dispute.prevented";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `dispute.prevented` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DisputePreventedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "dispute.prevented". */
    "event_type"?: "dispute.prevented";
});
/** A response containing `Dispute` data. */
export type DisputeResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A challenge to a
     * collected payment.
     */
    "data": Dispute;
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
 * A session for responding to a dispute in the browser, with the `dispute_id` and a short-lived
 * `client_session` for the embedded response component.
 */
export type DisputeResponseSession = {
    /**
     * The browser session for the response component. It appears only in this response, never on
     * the dispute, in lists, or in webhooks. Browser session for responding to a dispute, with its
     * expiry and the Stripe details needed to load the embedded response component.
     */
    "client_session": DisputeResponseSessionClientSession;
    /** ID of the dispute the session is for. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
    "dispute_id": string;
};
/**
 * Browser session for responding to a dispute, with its expiry and the Stripe details needed to
 * load the embedded response component.
 */
export type DisputeResponseSessionClientSession = {
    /** Time the browser session expires. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at": string;
    /**
     * What the browser needs to load Stripe's embedded dispute component. Stripe details for the
     * embedded dispute response component: the publishable key, an account session, and the
     * components to render.
     */
    "stripe": DisputeResponseSessionStripe;
};
/** A response containing `DisputeResponseSession` data. */
export type DisputeResponseSessionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A session for responding
     * to a dispute in the browser, with the `dispute_id` and a short-lived `client_session` for
     * the embedded response component.
     */
    "data": DisputeResponseSession;
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
 * Stripe details for the embedded dispute response component: the publishable key, an account
 * session, and the components to render.
 */
export type DisputeResponseSessionStripe = {
    /**
     * The Stripe account session that lets the component load. Its `client_secret` is single use.
     * Single-use account session secret and the Stripe.js call that uses it to load the embedded
     * dispute response component.
     */
    "account_session": DisputeResponseSessionStripeAccountSession;
    /**
     * The components to render. Always one entry. minItems: 1. maxItems: 1. [] (Value): {@link
     * DisputeResponseSessionStripeComponent}. An embedded Stripe component to render for the
     * dispute response session, with the payment reference to pass to it.
     */
    "components": Array<DisputeResponseSessionStripeComponent>;
    /** Stripe publishable key to pass to `loadConnectAndInitialize`. */
    "publishable_key": string;
};
/**
 * Single-use account session secret and the Stripe.js call that uses it to load the embedded
 * dispute response component.
 */
export type DisputeResponseSessionStripeAccountSession = {
    /**
     * Single-use account session secret for fetchClientSecret. Create another response session
     * when a fresh secret is needed.
     */
    "client_secret": string;
    /**
     * Call loadConnectAndInitialize with publishableKey and fetchClientSecret. Value enum:
     * "load_connect_and_initialize".
     */
    "stripe_js_call": "load_connect_and_initialize" | (string & {});
};
/**
 * An embedded Stripe component to render for the dispute response session, with the payment
 * reference to pass to it.
 */
export type DisputeResponseSessionStripeComponent = {
    /** Which embedded Stripe component to render. Value enum: "payment_disputes". */
    "component": "payment_disputes" | (string & {});
    /**
     * Stripe payment reference to pass to setPayment or the React payment prop: a PaymentIntent ID
     * for an ordinary payment, or the destination payment ID (py_) for a payment with splits. This
     * is separate from the dispute's Flint payment_intent_id. Example:
     * "pi_3QJ9oD2eZvKYlo2C0gP8kM3L".
     */
    "stripe_payment_id": string;
};
export type DisputeUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Dispute>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "dispute.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Dispute>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "dispute.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "dispute.updated";
});
/**
 * The `dispute.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type DisputeUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "dispute.updated". */
    "event_type"?: "dispute.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `dispute.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type DisputeUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "dispute.updated". */
    "event_type"?: "dispute.updated";
});
export type DisputeWonEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Dispute>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "dispute.won";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "can_respond_with_evidence": boolean;
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "dispute_id": string;
            "evidence_due_at": string | null;
            "evidence_submission_count": number;
            "fraud_warning_id"?: string;
            "has_evidence": boolean;
            "is_action_required": boolean;
            "is_evidence_deadline_passed": boolean;
            "merchant_id": string;
            "network_reason_code": string | null;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            "split_reversals"?: Array<SplitReversalReference>;
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            "status_changed_at"?: string;
            "supported_actions": Array<"accept" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Dispute>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "dispute.won";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "dispute.won";
});
/**
 * The `dispute.won` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type DisputeWonInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "dispute.won". */
    "event_type"?: "dispute.won";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `dispute.won` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type DisputeWonMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
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
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "dispute.won". */
    "event_type"?: "dispute.won";
});
