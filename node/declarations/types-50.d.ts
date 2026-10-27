import type { ImageRequestInput } from './types-20.js';
import type { InventoryRoutingSourceRequestInput } from './types-25.js';
import type { MoneyValueInput, MerchantWebhookEnvelope } from './types-31.js';
import type {
    SubscriptionIntervalOptionInput,
    SubscriptionBillingScheduleUpdateRequest,
    SubscriptionDeliveryRequest,
    SubscriptionBillingScheduleUpdateRequestInput,
    SubscriptionDeliveryRequestInput
} from './types-45.js';
import type { UpdateSubscriptionPlanLineItemRequestInput } from './types-49.js';
import type { WorkloadIdentityClaimConditionRequest, WorkloadIdentityClaimConditionRequestInput } from './types-62.js';
import type { KnownWebhookEvent } from './types-28.js';
import type { ResponseMeta, ResendWebhookDeliveryRequestInput, ResourceType } from './types-40.js';
import type { Package } from './types-34.js';
import type { Shipment } from './types-44.js';
import type { InputValue } from '../runtime.js';
import type {
    CreateWebhookDeliveryRequestInput,
    CreateWebhookEndpointRequestInput,
    CreateWebhookTestEventRequestInput,
    CreditNoteAllocation,
    CreditNote
} from './types-9.js';
import type { RotateWebhookSecretRequestInput } from './types-43.js';
import type { BalanceTransaction, Balance, Bundle } from './types-0.js';
import type { PartnerWebhookEnvelope } from './types-35.js';
import type { Category } from './types-3.js';
import type { CheckoutSession } from './types-4.js';
/**
 * Shape $ (Value): {@link UpdateSubscriptionPlanRequestInput}. The request body for: Update
 * subscription plan.
 */
export type UpdateSubscriptionPlanRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. Format: int32. */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOptionInput}. Omission leaves the
     * choices unchanged. Send [] to reset to the plan’s default billing interval and count. Null
     * is invalid. maxItems: 12. uniqueItems: true. Shape $[] (Value): {@link
     * SubscriptionIntervalOptionInput}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOptionInput>;
    /**
     * Shape $ (Value): integer. A commitment period you agree with the buyer, 1 to 120 months.
     * Flint shows it at checkout and records it on each new subscription (contract_start_at,
     * contract_end_at). Flint does not stop the buyer from canceling earlier. Format: int32.
     * minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /**
     * Shape $ (Value): string or null. Omission leaves this field unchanged. Null clears it.
     * minLength: 1.
     */
    "description"?: string | null;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. A fee you agree the buyer owes for canceling
     * before the contract term ends. Flint shows it at checkout and records it on each new
     * subscription, but never charges it. To collect it, charge the buyer yourself, for example
     * with an order on their saved payment method. Requires contract_term_months. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * replacing an owned collection. Required when any of these fields is present: images,
     * line_items. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omission leaves this field unchanged. Null clears it. minLength: 1. maxLength: 255.
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
     * Shape $ (Value): {@link InventoryRoutingSourceRequestInput}. Replaces the plan's routing
     * source. Subscriptions and payment links that already exist keep the source they copied. It
     * can't be cleared. Where you want inventory routed from: a fixed Location, an inventory
     * allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): Array of {@link UpdateSubscriptionPlanLineItemRequestInput}. Replaces all
     * owned plan line items atomically. Requires expected_version. Omission leaves items
     * unchanged; an empty array or null is invalid. Include subscription_plan_line_item_id to
     * retain an item; omit it for a new server-generated ID. Omitted members are removed. Existing
     * subscriptions keep their snapshots. Retained catalog items with the same source keep their
     * catalog snapshot; omitted modifiers keep their recorded choices. minItems: 1. Shape $[]
     * (Value): {@link UpdateSubscriptionPlanLineItemRequestInput}. A line item to keep or add when
     * updating a subscription plan. Include `subscription_plan_line_item_id` to keep an existing
     * one.
     */
    "line_items"?: Array<UpdateSubscriptionPlanLineItemRequestInput>;
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
    /**
     * Shape $ (Value): Array of integer. Omission leaves the choices unchanged. Send [] to reset
     * to [1]. Null is invalid. maxItems: 10. uniqueItems: true. Shape $[] (Value): integer.
     * minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. Active plans accept new signups. Inactive plans refuse new signups
     * with PLAN_NOT_ACTIVE while existing subscriptions keep renewing. Archived plans are
     * read-only and their status is set only by DELETE
     * /v1/subscription-plans/{subscription_plan_id}. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): Array of string. Omission leaves the delivery methods unchanged. Send [] to
     * remove all delivery methods. Null is invalid. Shape $[] (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): integer. Format: int32. */
    "trial_period_days"?: number;
});
/**
 * Shape $ (Value): {@link UpdateSubscriptionRequest}. The request body for: Update subscription.
 */
export type UpdateSubscriptionRequest = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateRequest}. A closed owner-specific
     * billing schedule update.
     */
    "billing_schedule"?: SubscriptionBillingScheduleUpdateRequest;
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
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
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
    /** Shape $ (Value): string. minLength: 1. */
    "payment_method_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
});
/**
 * Shape $ (Value): {@link UpdateSubscriptionRequestInput}. The request body for: Update
 * subscription.
 */
export type UpdateSubscriptionRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateRequestInput}. A closed
     * owner-specific billing schedule update.
     */
    "billing_schedule"?: SubscriptionBillingScheduleUpdateRequestInput;
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
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
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
    /** Shape $ (Value): string. minLength: 1. */
    "payment_method_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
});
/**
 * Shape $ (Value): {@link UpdateWebhookEndpointRequest}. The request body for: Update webhook
 * endpoint.
 */
export type UpdateWebhookEndpointRequest = ({
    /**
     * Shape $ (Value): string. Set default to follow the merchant default, or a supported
     * YYYY-MM-DD version to pin this endpoint. Omit to leave unchanged. Null is not accepted.
     * Switching between a pin and default clears the rollback offer. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Shape $ (Value): string or null. Endpoint description. Omit to leave unchanged; null clears
     * it. Send null to clear it. minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Shape $ (Value): Array of string. Event types to deliver. Send ["*"] for every type the
     * endpoint's event_sources deliver, including types added later; * must be the only entry and
     * is not available with installed_merchants. At least one entry is required. Use only current
     * event type names; previous and removed names are rejected. Stored subscriptions map previous
     * names permanently and drop removed names on read. See the [changelog](/docs/changelog).
     * minItems: 1. Shape $[] (Value): string. minLength: 1.
     */
    "enabled_events"?: Array<string>;
    /**
     * Shape $ (Value): Array of string. Event sources this endpoint receives. Defaults to
     * merchant. Use partner_app for app lifecycle events and installed_merchants for events from
     * merchants that installed the partner app. [] enum: "merchant", "partner_app",
     * "installed_merchants". Shape $[] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Shape $ (Value): string. Apply api_version only if this matches the resource's current
     * api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted.
     * minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * enabled_events, event_sources, or installed_merchant_modes is present, including an empty
     * array. Optional for scalar updates. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of string. Modes of installed-merchant events this endpoint receives.
     * Required when event_sources includes installed_merchants and omitted otherwise. Partner app
     * lifecycle events are delivered regardless of these modes. minItems: 1. maxItems: 2.
     * uniqueItems: true. [] enum: "test", "live". Shape $[] (Value): string. Value enum: "test",
     * "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live" | (string & {})>;
    /**
     * Shape $ (Value): string. Partner app that owns partner_app or installed_merchants event
     * sources. minLength: 1.
     */
    "partner_app_id"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "url"?: string;
});
/**
 * Shape $ (Value): {@link UpdateWebhookEndpointRequestInput}. The request body for: Update webhook
 * endpoint.
 */
export type UpdateWebhookEndpointRequestInput = ({
    /**
     * Shape $ (Value): string. Set default to follow the merchant default, or a supported
     * YYYY-MM-DD version to pin this endpoint. Omit to leave unchanged. Null is not accepted.
     * Switching between a pin and default clears the rollback offer. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Shape $ (Value): string or null. Endpoint description. Omit to leave unchanged; null clears
     * it. Send null to clear it. minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Shape $ (Value): Array of string. Event types to deliver. Send ["*"] for every type the
     * endpoint's event_sources deliver, including types added later; * must be the only entry and
     * is not available with installed_merchants. At least one entry is required. Use only current
     * event type names; previous and removed names are rejected. Stored subscriptions map previous
     * names permanently and drop removed names on read. See the [changelog](/docs/changelog).
     * minItems: 1. Shape $[] (Value): string. minLength: 1.
     */
    "enabled_events"?: Array<string>;
    /**
     * Shape $ (Value): Array of string. Event sources this endpoint receives. Defaults to
     * merchant. Use partner_app for app lifecycle events and installed_merchants for events from
     * merchants that installed the partner app. [] enum: "merchant", "partner_app",
     * "installed_merchants". Shape $[] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants">;
    /**
     * Shape $ (Value): string. Apply api_version only if this matches the resource's current
     * api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted.
     * minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * enabled_events, event_sources, or installed_merchant_modes is present, including an empty
     * array. Optional for scalar updates. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of string. Modes of installed-merchant events this endpoint receives.
     * Required when event_sources includes installed_merchants and omitted otherwise. Partner app
     * lifecycle events are delivered regardless of these modes. minItems: 1. maxItems: 2.
     * uniqueItems: true. [] enum: "test", "live". Shape $[] (Value): string. Value enum: "test",
     * "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live">;
    /**
     * Shape $ (Value): string. Partner app that owns partner_app or installed_merchants event
     * sources. minLength: 1.
     */
    "partner_app_id"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): string. minLength: 1. */
    "url"?: string;
});
/**
 * Shape $ (Value): {@link UpdateWorkloadIdentityRequest}. The request body for: Update a workload
 * identity.
 */
export type UpdateWorkloadIdentityRequest = ({
    /**
     * Shape $ (Value): Array of {@link WorkloadIdentityClaimConditionRequest}. Bounded value
     * array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared
     * issuers require tenant pinning. maxItems: 10. uniqueItems: true. Shape $[] (Value): {@link
     * WorkloadIdentityClaimConditionRequest}. A condition to match one top-level scalar claim in
     * the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequest>;
    /**
     * Shape $ (Value): integer string. Version most recently read. Required when claim_conditions
     * or scopes is supplied; optional for scalar updates. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of string. Complete scope set to grant. Machine callers may grant
     * only scopes they hold in the same environment. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
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
    "scopes"?: Array<"accounts.api_keys.read"
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
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 1024. */
    "subject"?: string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "subject_match"?: "exact" | "glob" | (string & {});
});
/**
 * Shape $ (Value): {@link UpdateWorkloadIdentityRequestInput}. The request body for: Update a
 * workload identity.
 */
export type UpdateWorkloadIdentityRequestInput = ({
    /**
     * Shape $ (Value): Array of {@link WorkloadIdentityClaimConditionRequestInput}. Bounded value
     * array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared
     * issuers require tenant pinning. maxItems: 10. uniqueItems: true. Shape $[] (Value): {@link
     * WorkloadIdentityClaimConditionRequestInput}. A condition to match one top-level scalar claim
     * in the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequestInput>;
    /**
     * Shape $ (Value): integer string. Version most recently read. Required when claim_conditions
     * or scopes is supplied; optional for scalar updates. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of string. Complete scope set to grant. Machine callers may grant
     * only scopes they hold in the same environment. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
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
    "scopes"?: Array<"accounts.api_keys.read"
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
        | "webhooks.write">;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): string. minLength: 1. maxLength: 1024. */
    "subject"?: string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "subject_match"?: "exact" | "glob";
});
/** Shape $ (Value): {@link User}. A user with access to merchant accounts. */
export type User = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "default_merchant_id"?: string;
    /** Shape $ (Value): string. */
    "email": string;
    /** Shape $ (Value): string. */
    "first_name": string;
    /** Shape $ (Value): string. */
    "last_name": string;
    /** Shape $ (Value): string.  Value enum: "active", "deactivated". */
    "status": "active" | "deactivated" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Shape $ (Value): string. */
    "user_id": string;
};
export type VerifiedWebhook = {
    known: true;
    event: KnownWebhookEvent;
}
    | {
    known: false;
    event: unknown;
    reason: "unknown_event" | "unmatched_envelope";
};
/**
 * Shape $ (Value): {@link VerifyReturnReceiptLineItemRequest}. The request body for: Verify return
 * receipt line item.
 */
export type VerifyReturnReceiptLineItemRequest = {
    /**
     * Shape $ (Value): integer string. Optional version of the return receipt. A stale value
     * returns VERSION_CONFLICT with the receipt ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
    /**
     * Shape $ (Value): string. Value enum: "order_match_confirmed", "sku_match_confirmed",
     * "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason": "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "verification_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link VerifyReturnReceiptLineItemRequestInput}. The request body for: Verify
 * return receipt line item.
 */
export type VerifyReturnReceiptLineItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional version of the return receipt. A stale value
     * returns VERSION_CONFLICT with the receipt ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
    /**
     * Shape $ (Value): string. Value enum: "order_match_confirmed", "sku_match_confirmed",
     * "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason": "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "verification_reason_message"?: string;
};
/** Shape $ (Value): {@link VoidPackageRequest}. The request body for: Void package. */
export type VoidPackageRequest = {
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional resource version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. Void event timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link VoidPackageRequestInput}. The request body for: Void package. */
export type VoidPackageRequestInput = {
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Optional resource version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. Void event timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link VoidShipmentRequestInput}. The request body for: Void shipment. */
export type VoidShipmentRequestInput = VoidPackageRequestInput;
/**
 * Shape $ (Value): {@link VoidShipmentResponse}. A response containing `VoidShipmentResult` data.
 */
export type VoidShipmentResponse = {
    /**
     * Shape $ (Value): {@link VoidShipmentResult}. The voided shipment and its affected packages.
     * The shipment is the primary resource and expected_version target.
     */
    "data": VoidShipmentResult;
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
 * Shape $ (Value): {@link VoidShipmentResult}. The voided shipment and its affected packages. The
 * shipment is the primary resource and expected_version target.
 */
export type VoidShipmentResult = {
    /**
     * Shape $ (Value): Array of {@link Package}. Shape $[] (Value): {@link Package}. A package
     * within a shipment.
     */
    "packages": Array<Package>;
    /** Shape $ (Value): {@link Shipment}. A shipment carrying fulfilled order items. */
    "shipment": Shipment;
};
/**
 * Shape $ (Value): {@link WaiveInvoiceLateFeeRequest}. The request body for: Waive an unpaid
 * invoice late fee.
 */
export type WaiveInvoiceLateFeeRequest = {
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1. maxLength: 4096. */
    "reason_message": string;
};
/**
 * Shape $ (Value): {@link WaiveInvoiceLateFeeRequestInput}. The request body for: Waive an unpaid
 * invoice late fee.
 */
export type WaiveInvoiceLateFeeRequestInput = WaiveInvoiceLateFeeRequest;
/**
 * Shape $ (Value): {@link WaiveReturnLineInspectionRequest}. The request body for: Waive return
 * line inspection.
 */
export type WaiveReturnLineInspectionRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "trusted_in_store_handoff",
     * "merchant_review", "other".
     */
    "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link WaiveReturnLineInspectionRequestInput}. The request body for: Waive
 * return line inspection.
 */
export type WaiveReturnLineInspectionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "trusted_in_store_handoff",
     * "merchant_review", "other".
     */
    "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
export type WebhookDeliveriesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateWebhookDeliveryRequestInput}. The request body for: Create
     * webhook delivery.
     */
    "body": InputValue<CreateWebhookDeliveryRequestInput>;
};
export type WebhookDeliveriesGetInput = {
    /** Shape $ (Value): string. */
    "webhook_delivery_id": InputValue<string>;
};
export type WebhookDeliveriesListAttemptsInput = {
    /** Shape $ (Value): string. */
    "webhook_delivery_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type WebhookDeliveriesResendInput = {
    /** Shape $ (Value): string. */
    "webhook_delivery_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ResendWebhookDeliveryRequestInput}. The request body for: Resend
     * webhook delivery.
     */
    "body"?: InputValue<ResendWebhookDeliveryRequestInput>;
};
/**
 * Shape $ (Value): {@link WebhookDelivery}. An attempt to deliver an event to a webhook endpoint.
 */
export type WebhookDelivery = {
    /**
     * Shape $ (Value): integer. Attempts made by Flint's automatic schedule. Manual resends and
     * the first attempt of a delivery you create don't count. Format: int32.
     */
    "automatic_attempt_count": number;
    /**
     * Shape $ (Value): string. When the delivery was created: when Flint prepared the event, or
     * when you created it. Format: date-time.
     */
    "created_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "delivered_at"?: string;
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
    /** Shape $ (Value): integer. Format: int32. */
    "last_response_code"?: number;
    /** Shape $ (Value): integer. Maximum automatic attempts. Format: int32. */
    "max_attempts": number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "next_retry_at"?: string;
    /** Shape $ (Value): string. The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Shape $ (Value): boolean. Whether sending this delivery again without changing your endpoint
     * is likely to succeed. While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** Shape $ (Value): string.  Value enum: "pending", "delivered", "failed", "suppressed". */
    "status": "pending" | "delivered" | "failed" | "suppressed" | (string & {});
    /**
     * Shape $ (Value): string. Why this delivery was suppressed. Present exactly when status is
     * suppressed. Suppressed deliveries have no failure explanation. Value enum:
     * "endpoint_inactive", "endpoint_deleted", "authorization_revoked", "scope_missing",
     * "event_not_allowed".
     */
    "suppression_reason"?: "endpoint_inactive"
        | "endpoint_deleted"
        | "authorization_revoked"
        | "scope_missing"
        | "event_not_allowed"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Shape $ (Value): string. */
    "webhook_delivery_id": string;
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": string;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link WebhookDeliveryAction}. The result of a webhook delivery action, such as
 * a resend: the delivery, attempt, status, and any error details.
 */
export type WebhookDeliveryAction = {
    /** Shape $ (Value): integer. Format: int32. */
    "attempt_number": number;
    /** Shape $ (Value): string.  Value enum: "queued", "sending", "delivered", "failed". */
    "attempt_status": "queued" | "sending" | "delivered" | "failed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** Shape $ (Value): string.  Value enum: "pending", "delivered", "failed", "suppressed". */
    "delivery_status": "pending" | "delivered" | "failed" | "suppressed" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "automatic_delivery", "automatic_retry",
     * "manual_resend", "manual_delivery", "test_event".
     */
    "delivery_trigger": "automatic_delivery"
        | "automatic_retry"
        | "manual_resend"
        | "manual_delivery"
        | "test_event"
        | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "duration_milliseconds"?: `${bigint}`;
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
    /** Shape $ (Value): string. The note supplied when this action was requested. */
    "reason_message"?: string;
    /** Shape $ (Value): string. The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Shape $ (Value): string. Receiver response body excerpt. Omitted unless the caller can read
     * the event's resource.
     */
    "response_body_excerpt"?: string;
    /**
     * Shape $ (Value): string. Receiver response content type. Omitted unless the caller can read
     * the event's resource.
     */
    "response_content_type"?: string;
    /**
     * Shape $ (Value): Map of string. Receiver response headers, keyed by lowercase header name.
     * Repeated values are joined with ", ". Sensitive values read [REDACTED]. Absent when no
     * response was received, after the 14-day response-detail retention, or unless the caller can
     * read the event's resource. Shape $.* (Value): string.
     */
    "response_headers"?: Record<string, string>;
    /**
     * Shape $ (Value): boolean. Whether sending this delivery again without changing your endpoint
     * is likely to succeed. While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "status_code"?: number;
    /** Shape $ (Value): string. */
    "webhook_delivery_attempt_id": string;
    /** Shape $ (Value): string. */
    "webhook_delivery_id": string;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link WebhookDeliveryActionResponse}. A response containing
 * `WebhookDeliveryAction` data.
 */
export type WebhookDeliveryActionResponse = {
    /**
     * Shape $ (Value): {@link WebhookDeliveryAction}. The result of a webhook delivery action,
     * such as a resend: the delivery, attempt, status, and any error details.
     */
    "data": WebhookDeliveryAction;
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
 * Shape $ (Value): {@link WebhookDeliveryAttempt}. One attempt to deliver a webhook event to an
 * endpoint, with its status, timing, response code, and error details.
 */
export type WebhookDeliveryAttempt = {
    /**
     * Shape $ (Value): string. API version used for this delivery attempt. Omitted when the
     * version was not recorded or payload rendering failed. Format: date.
     */
    "api_version"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "attempt_number": number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "automatic_delivery", "automatic_retry",
     * "manual_resend", "manual_delivery", "test_event".
     */
    "delivery_trigger": "automatic_delivery"
        | "automatic_retry"
        | "manual_resend"
        | "manual_delivery"
        | "test_event"
        | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "duration_milliseconds"?: `${bigint}`;
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
    /** Shape $ (Value): string. The note supplied when this action was requested. */
    "reason_message"?: string;
    /** Shape $ (Value): string. The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Shape $ (Value): string. Receiver response body excerpt. Omitted unless the caller can read
     * the event's resource.
     */
    "response_body_excerpt"?: string;
    /**
     * Shape $ (Value): string. Receiver response content type. Omitted unless the caller can read
     * the event's resource.
     */
    "response_content_type"?: string;
    /**
     * Shape $ (Value): Map of string. Receiver response headers, keyed by lowercase header name.
     * Repeated values are joined with ", ". Sensitive values read [REDACTED]. Absent when no
     * response was received, after the 14-day response-detail retention, or unless the caller can
     * read the event's resource. Shape $.* (Value): string.
     */
    "response_headers"?: Record<string, string>;
    /**
     * Shape $ (Value): boolean. Whether sending this delivery again without changing your endpoint
     * is likely to succeed. While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /** Shape $ (Value): string.  Value enum: "queued", "sending", "delivered", "failed". */
    "status": "queued" | "sending" | "delivered" | "failed" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "status_code"?: number;
    /** Shape $ (Value): string. */
    "webhook_delivery_attempt_id": string;
    /** Shape $ (Value): string. */
    "webhook_delivery_id": string;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link WebhookDeliveryAttemptListResponse}. A page of `WebhookDeliveryAttempt`
 * objects.
 */
export type WebhookDeliveryAttemptListResponse = {
    /**
     * Shape $ (Value): Array of {@link WebhookDeliveryAttempt}. Shape $[] (Value): {@link
     * WebhookDeliveryAttempt}. One attempt to deliver a webhook event to an endpoint, with its
     * status, timing, response code, and error details.
     */
    "data": Array<WebhookDeliveryAttempt>;
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
/** Shape $ (Value): {@link WebhookDeliveryListResponse}. A page of `WebhookDelivery` objects. */
export type WebhookDeliveryListResponse = {
    /**
     * Shape $ (Value): Array of {@link WebhookDelivery}. Shape $[] (Value): {@link
     * WebhookDelivery}. An attempt to deliver an event to a webhook endpoint.
     */
    "data": Array<WebhookDelivery>;
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
 * Shape $ (Value): {@link WebhookDeliveryResponse}. A response containing `WebhookDelivery` data.
 */
export type WebhookDeliveryResponse = {
    /**
     * Shape $ (Value): {@link WebhookDelivery}. An attempt to deliver an event to a webhook
     * endpoint.
     */
    "data": WebhookDelivery;
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
 * Shape $ (Value): {@link WebhookEndpoint}. A merchant webhook endpoint belongs to the live mode
 * or sandbox of the credential that created it and receives only that environment's events.
 * Partner endpoints select sources with event_sources and installed_merchant_modes.
 */
export type WebhookEndpoint = ({
    /**
     * Shape $ (Value): string. A dated API version pins this endpoint. The value default follows
     * the endpoint owner's merchant default at delivery time, including retries. Deliveries never
     * use a newer version than the event's recorded version.
     */
    "api_version": string;
    /** Shape $ (Value): string. When api_version last changed. Format: date-time. */
    "api_version_changed_at"?: string;
    /**
     * Shape $ (Value): string. Version this endpoint used before its last upgrade. Present while a
     * rollback is available. To roll back, send it as api_version.
     */
    "api_version_previous"?: string;
    /**
     * Shape $ (Value): string. When the rollback offer for api_version_previous ends. You can
     * still set any supported version afterward. Format: date-time.
     */
    "api_version_rollback_expires_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): Array of string. Subscribed event types. ["*"] includes every type the
     * endpoint's event_sources deliver, including types added later; * is not available with
     * installed_merchants. Stored subscriptions map previous names permanently and drop removed
     * names on read. Empty when no current subscriptions remain. See the
     * [changelog](/docs/changelog). Shape $[] (Value): string. minLength: 1.
     */
    "enabled_events": Array<string>;
    /**
     * Shape $ (Value): Array of string. Event sources this endpoint receives. Defaults to
     * merchant. Use partner_app for app lifecycle events and installed_merchants for events from
     * merchants that installed the partner app. [] enum: "merchant", "partner_app",
     * "installed_merchants". Shape $[] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Shape $ (Value): Array of string. Modes of installed-merchant events this endpoint receives.
     * Required when event_sources includes installed_merchants and omitted otherwise. Partner app
     * lifecycle events are delivered regardless of these modes. minItems: 1. maxItems: 2.
     * uniqueItems: true. [] enum: "test", "live". Shape $[] (Value): string. Value enum: "test",
     * "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live" | (string & {})>;
    /**
     * Shape $ (Value): string. Partner app that owns partner_app or installed_merchants event
     * sources.
     */
    "partner_app_id"?: string;
    /**
     * Shape $ (Value): string. When the replaced signing secret stops signing deliveries. Present
     * only during a rotation overlap. Until then each delivery carries a signature from both
     * secrets. Format: date-time.
     */
    "previous_secret_expires_at"?: string;
    /**
     * Shape $ (Value): string. Availability of this endpoint. Deleted is returned only by DELETE.
     * Value enum: "active", "inactive", "deleted".
     */
    "status": "active" | "inactive" | "deleted" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Shape $ (Value): string. */
    "url": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": string;
});
/** Shape $ (Value): {@link WebhookEndpointListResponse}. A page of `WebhookEndpoint` objects. */
export type WebhookEndpointListResponse = {
    /**
     * Shape $ (Value): Array of {@link WebhookEndpoint}. Shape $[] (Value): {@link
     * WebhookEndpoint}. A merchant webhook endpoint belongs to the live mode or sandbox of the
     * credential that created it and receives only that environment's events. Partner endpoints
     * select sources with event_sources and installed_merchant_modes.
     */
    "data": Array<WebhookEndpoint>;
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
 * Shape $ (Value): {@link WebhookEndpointResponse}. A response containing `WebhookEndpoint` data.
 */
export type WebhookEndpointResponse = {
    /**
     * Shape $ (Value): {@link WebhookEndpoint}. A merchant webhook endpoint belongs to the live
     * mode or sandbox of the credential that created it and receives only that environment's
     * events. Partner endpoints select sources with event_sources and installed_merchant_modes.
     */
    "data": WebhookEndpoint;
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
 * Shape $ (Value): {@link WebhookEndpointWithSecret}. A webhook endpoint with its one-time signing
 * secret, returned when the endpoint is created or its secret is rotated. A merchant webhook
 * endpoint belongs to the live mode or sandbox of the credential that created it and receives only
 * that environment's events. Partner endpoints select sources with event_sources and
 * installed_merchant_modes.
 */
export type WebhookEndpointWithSecret = (Exclude<WebhookEndpoint & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): string. One-time signing secret. Present on create and rotation; omitted on
     * an idempotent replay after the secret retention period.
     */
    "secret"?: string;
});
/**
 * Shape $ (Value): {@link WebhookEndpointWithSecretResponse}. A response containing
 * `WebhookEndpointWithSecret` data.
 */
export type WebhookEndpointWithSecretResponse = {
    /**
     * Shape $ (Value): {@link WebhookEndpointWithSecret}. A webhook endpoint with its one-time
     * signing secret, returned when the endpoint is created or its secret is rotated. A merchant
     * webhook endpoint belongs to the live mode or sandbox of the credential that created it and
     * receives only that environment's events. Partner endpoints select sources with event_sources
     * and installed_merchant_modes.
     */
    "data": WebhookEndpointWithSecret;
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
export type WebhookEndpointsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateWebhookEndpointRequestInput}. The request body for: Create
     * webhook endpoint.
     */
    "body": InputValue<CreateWebhookEndpointRequestInput>;
};
export type WebhookEndpointsCreateWebhookTestEventInput = {
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateWebhookTestEventRequestInput}. The request body for: Create
     * webhook test event.
     */
    "body": InputValue<CreateWebhookTestEventRequestInput>;
};
export type WebhookEndpointsGetInput = {
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": InputValue<string>;
};
export type WebhookEndpointsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "merchant", "partner_app",
     * "installed_merchants". Shape $[] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources"?: InputValue<Array<"merchant" | "partner_app" | "installed_merchants">>;
    /** Shape $ (Value): string. */
    "partner_app_id"?: InputValue<string>;
};
export type WebhookEndpointsRemoveInput = {
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type WebhookEndpointsRotateWebhookSecretInput = {
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RotateWebhookSecretRequestInput}. The request body for: Rotate
     * webhook secret.
     */
    "body"?: InputValue<RotateWebhookSecretRequestInput>;
};
export type WebhookEndpointsUpdateInput = {
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateWebhookEndpointRequestInput}. The request body for: Update
     * webhook endpoint.
     */
    "body": InputValue<UpdateWebhookEndpointRequestInput>;
};
/** Shape $ (Value): {@link WebhookEvent}. An event prepared for delivery to webhook endpoints. */
export type WebhookEvent = {
    /** Shape $ (Value): string. */
    "api_request_log_id"?: string;
    /**
     * Shape $ (Value): string. API version of the event data. Stored data follows the same
     * versioning rules as webhook deliveries. Format: date.
     */
    "api_version": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): object. The delivered envelope's data, including its
     * payload-version-specific shape. Omitted from list responses and from detail responses when
     * the caller lacks read access to the attributed resource or the payload has expired after 14
     * days.
     */
    "data"?: {
        [key: string]: unknown;
    };
    /** Shape $ (Value): string.  Value enum: "merchant", "partner_app", "installed_merchants". */
    "event_source"?: "merchant" | "partner_app" | "installed_merchants" | (string & {});
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
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): string.  Value enum: "test", "live". */
    "mode"?: "test" | "live" | (string & {});
    /** Shape $ (Value): string. */
    "partner_app_id"?: string;
    /**
     * Shape $ (Value): integer. Envelope payload version. Present only while the stored payload is
     * retained. Value enum: 1, 2.
     */
    "payload_version"?: number;
    /**
     * Shape $ (Value): object or null. Originating merchant request, or null for a background
     * event. The idempotency key is included only on an authorized detail read while the payload
     * is retained. Omitted for partner events. Shape $.id (Required): string. Shape
     * $.idempotency_key (Optional): string. The Idempotency-Key the originating request sent.
     * Absent when it sent none.
     */
    "request"?: {
        /** Shape $ (Value): string. */
        "id": string;
        /**
         * Shape $ (Value): string. The Idempotency-Key the originating request sent. Absent when
         * it sent none.
         */
        "idempotency_key"?: string;
    }
        | null;
    /** Shape $ (Value): string. */
    "resource_id"?: string;
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
    "resource_type"?: ResourceType;
    /**
     * Shape $ (Value): object and Alternative shapes (see declared variants). Partner envelope
     * source. Present only for partner events while the stored payload is retained. Shape
     * $.environment_grant_id (Optional): string. Shape $.merchant_id (Required): string. Shape
     * $.mode (Optional): string. Value enum: "test", "live". Shape $.partner_app_install_id
     * (Required): string. Shape $.sandbox_id (Optional): string. Shape $.type (Required): string.
     * Value enum: "partner_app", "installed_merchants". Shape $.oneOf[1] (Value): object. Shape
     * $.oneOf[1].merchant_id (Required): string. Shape $.oneOf[1].partner_app_install_id
     * (Required): string. Shape $.oneOf[1].type (Required): string. Value enum: "partner_app".
     * Shape $.oneOf[2] (Value): object. Shape $.oneOf[2].environment_grant_id (Required): string.
     * Shape $.oneOf[2].merchant_id (Required): string. Shape $.oneOf[2].mode (Required): string.
     * Value enum: "test", "live". Shape $.oneOf[2].partner_app_install_id (Required): string.
     * Shape $.oneOf[2].sandbox_id (Optional): string. Shape $.oneOf[2].type (Required): string.
     * Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id"?: string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode"?: "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "partner_app", "installed_merchants". */
        "type": "partner_app" | "installed_merchants" | (string & {});
    })
        & (({
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string.  Value enum: "partner_app". */
        "type": "partner_app" | (string & {});
    })
        | (({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    }))
        | (Record<string, unknown>));
    /** Shape $ (Value): boolean. */
    "test": boolean;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
export type WebhookEventBalanceTransactionCreated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": BalanceTransaction;
    };
    "event_type"?: "balance_transaction.created" | (string & {});
})
    & {
    "event_type": "balance_transaction.created";
});
export type WebhookEventBalanceTransactionUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": BalanceTransaction;
    };
    "event_type"?: "balance_transaction.updated" | (string & {});
})
    & {
    "event_type": "balance_transaction.updated";
});
export type WebhookEventBalanceUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Balance;
    };
    "event_type"?: "balance.updated" | (string & {});
})
    & {
    "event_type": "balance.updated";
});
export type WebhookEventBundleArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.archived" | (string & {});
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
    "event_type": "bundle.archived";
});
export type WebhookEventBundleCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.created" | (string & {});
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
    "event_type": "bundle.created";
});
export type WebhookEventBundleUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.updated" | (string & {});
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
    "event_type": "bundle.updated";
});
export type WebhookEventCategoryCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.created" | (string & {});
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
    "event_type": "category.created";
});
export type WebhookEventCategoryDeleted = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.deleted" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.deleted" | (string & {});
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
    "event_type": "category.deleted";
});
export type WebhookEventCategoryUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.updated" | (string & {});
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
    "event_type": "category.updated";
});
export type WebhookEventCheckoutSessionClosed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.closed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.closed" | (string & {});
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
    "event_type": "checkout_session.closed";
});
export type WebhookEventCheckoutSessionCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.created" | (string & {});
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
    "event_type": "checkout_session.created";
});
export type WebhookEventCheckoutSessionExpired = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.expired" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.expired" | (string & {});
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
    "event_type": "checkout_session.expired";
});
export type WebhookEventCheckoutSessionInvalidated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.invalidated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.invalidated" | (string & {});
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
    "event_type": "checkout_session.invalidated";
});
export type WebhookEventCheckoutSessionPaid = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.paid" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.paid" | (string & {});
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
    "event_type": "checkout_session.paid";
});
export type WebhookEventCheckoutSessionPartiallyPaid = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.partially_paid" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.partially_paid" | (string & {});
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
    "event_type": "checkout_session.partially_paid";
});
export type WebhookEventCreditNoteAllocationCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNoteAllocation;
    };
    "event_type"?: "credit_note_allocation.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNoteAllocation;
    };
    "event_type"?: "credit_note_allocation.created" | (string & {});
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
    "event_type": "credit_note_allocation.created";
});
export type WebhookEventCreditNoteAllocationReversed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNoteAllocation;
    };
    "event_type"?: "credit_note_allocation.reversed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNoteAllocation;
    };
    "event_type"?: "credit_note_allocation.reversed" | (string & {});
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
    "event_type": "credit_note_allocation.reversed";
});
export type WebhookEventCreditNoteCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.created" | (string & {});
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
    "event_type": "credit_note.created";
});
export type WebhookEventCreditNoteIssued = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.issued" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.issued" | (string & {});
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
    "event_type": "credit_note.issued";
});
export type WebhookEventCreditNoteUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.updated" | (string & {});
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
    "event_type": "credit_note.updated";
});
