import type {
    TaxCalculationCallbackConfigurationPatchRequest,
    TaxCalculationCallbackConfigurationPatchRequestInput
} from './types-64.js';
import type {
    WebhookSigningMethod,
    WebhookSigningMethodInput,
    WorkloadIdentityClaimConditionRequest,
    WorkloadIdentityClaimConditionRequestInput
} from './types-70.js';
import type { KnownWebhookEvent, LegalSettings } from './types-35.js';
import type { MerchantSignupTermsAcceptanceRequest, MerchantSignupTermsAcceptanceRequestInput, MetadataMap } from './types-38.js';
import type { GetReturnReceiptResponse, GetReturnResponse } from './types-26.js';
import type { ResponseMeta, ResendWebhookDeliveryRequestInput, ResourceReference } from './types-54.js';
import type { Package } from './types-42.js';
import type { Shipment, SetupCollection, RotateWebhookSecretRequestInput } from './types-59.js';
import type { BundleComponent } from './types-1.js';
import type {
    CategoryReference,
    CheckoutBuyerContact,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutPaymentConfig,
    CheckoutPrefill,
    CheckoutProblemResource,
    CheckoutPromotionConfig
} from './types-5.js';
import type { ImageAttachment } from './types-28.js';
import type { MoneyValue } from './types-39.js';
import type { BuyerRefund } from './types-3.js';
import type {
    CheckoutRedirects,
    CheckoutSessionTax,
    CheckoutSubscriptionTerms,
    CheckoutTheme,
    CheckoutTipConfig
} from './types-6.js';
import type { CustomFieldAnswer } from './types-15.js';
import type {
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary,
    DisputesAcceptParams
} from './types-24.js';
import type { OrderPaymentAttempt } from './types-41.js';
import type { PaymentCollection } from './types-44.js';
import type { InputValue } from '../runtime.js';
import type {
    CreateWebhookDeliveryRequestInput,
    CreateWebhookEndpointRequestInput,
    CreateWebhookTestEventRequestInput
} from './types-14.js';
import type { CustomersListAddressesParams } from './types-16.js';
import type { DeliveryProfileConfiguration } from './types-20.js';
import type { SignWebhookEndpointDeliveryRequestInput } from './types-60.js';
/** The request body for: Update a tax calculation callback. minProperties: 1. */
export type UpdateTaxCalculationCallbackRequest = ({
    /**
     * Changes to the callback's configuration. Requires expected_version. Changes to a tax
     * calculation callback's configuration. Only the keys you send change; keys you leave out keep
     * their current values. Null restores an optional key's default. Requires expected_version.
     * minProperties: 1.
     */
    "configuration"?: TaxCalculationCallbackConfigurationPatchRequest;
    /**
     * The `version` you last read. A stale value is refused with a version conflict. Required with
     * `configuration` and `signing_methods`. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /** New label for the callback. minLength: 1. */
    "name"?: string;
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires
     * expected_version. Removing hmac deletes the current and previous secrets. minItems: 1.
     * uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethod}. How
     * Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
    /**
     * Activates or deactivates the callback. Send it alone, with at most `expected_version`. -
     * `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`:
     * Stops the callback from being selected. Refused while your settings select it. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
})
    & (({
    /** New label for the callback. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Changes to the callback's configuration. Requires expected_version. Changes to a tax
     * calculation callback's configuration. Only the keys you send change; keys you leave out keep
     * their current values. Null restores an optional key's default. Requires expected_version.
     * minProperties: 1.
     */
    "configuration": TaxCalculationCallbackConfigurationPatchRequest;
})
    | ({
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires
     * expected_version. Removing hmac deletes the current and previous secrets. minItems: 1.
     * uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethod}. How
     * Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods": Array<WebhookSigningMethod>;
})
    | ({
    /**
     * Activates or deactivates the callback. Send it alone, with at most `expected_version`. -
     * `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`:
     * Stops the callback from being selected. Refused while your settings select it. Value enum:
     * "active", "inactive".
     */
    "status": "active" | "inactive" | (string & {});
})
    | (Record<string, unknown>));
/** The request body for: Update a tax calculation callback. minProperties: 1. */
export type UpdateTaxCalculationCallbackRequestInput = ({
    /**
     * Changes to the callback's configuration. Requires expected_version. Changes to a tax
     * calculation callback's configuration. Only the keys you send change; keys you leave out keep
     * their current values. Null restores an optional key's default. Requires expected_version.
     * minProperties: 1.
     */
    "configuration"?: TaxCalculationCallbackConfigurationPatchRequestInput;
    /**
     * The `version` you last read. A stale value is refused with a version conflict. Required with
     * `configuration` and `signing_methods`. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /** New label for the callback. minLength: 1. */
    "name"?: string;
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires
     * expected_version. Removing hmac deletes the current and previous secrets. minItems: 1.
     * uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethodInput}.
     * How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
    /**
     * Activates or deactivates the callback. Send it alone, with at most `expected_version`. -
     * `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`:
     * Stops the callback from being selected. Refused while your settings select it. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
})
    & (({
    /** New label for the callback. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Changes to the callback's configuration. Requires expected_version. Changes to a tax
     * calculation callback's configuration. Only the keys you send change; keys you leave out keep
     * their current values. Null restores an optional key's default. Requires expected_version.
     * minProperties: 1.
     */
    "configuration": TaxCalculationCallbackConfigurationPatchRequestInput;
})
    | ({
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires
     * expected_version. Removing hmac deletes the current and previous secrets. minItems: 1.
     * uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethodInput}.
     * How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods": Array<WebhookSigningMethodInput>;
})
    | ({
    /**
     * Activates or deactivates the callback. Send it alone, with at most `expected_version`. -
     * `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`:
     * Stops the callback from being selected. Refused while your settings select it. Value enum:
     * "active", "inactive".
     */
    "status": "active" | "inactive";
}));
/**
 * Update at least one of registration_number, start_date or end_date. Pending and rejected
 * registrations allow all three fields; registration_number and start_date require a connection
 * that is not active. Scheduled and active registrations allow only end_date. A pending or
 * rejected registration whose tax-account copy exists or may have been created cannot change
 * start_date; delete it and create it again. Ended registrations cannot be changed. A version
 * fence by itself is not a change. minProperties: 1.
 */
export type UpdateTaxRegistrationRequest = ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1. Example: "2026-08-02".
     */
    "end_date"?: string | null;
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1. Example: "2026-08-02".
     */
    "start_date"?: string;
})
    & ((unknown)
    | ({
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1. Example: "2026-08-02".
     */
    "start_date": string;
})
    | ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1. Example: "2026-08-02".
     */
    "end_date": string | null;
})
    | (Record<string, unknown>));
/**
 * Update at least one of registration_number, start_date or end_date. Pending and rejected
 * registrations allow all three fields; registration_number and start_date require a connection
 * that is not active. Scheduled and active registrations allow only end_date. A pending or
 * rejected registration whose tax-account copy exists or may have been created cannot change
 * start_date; delete it and create it again. Ended registrations cannot be changed. A version
 * fence by itself is not a change. minProperties: 1.
 */
export type UpdateTaxRegistrationRequestInput = ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1. Example: "2026-08-02".
     */
    "end_date"?: string | null;
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Seller's tax registration number. For EU, the non-Union OSS number: EU followed by nine
     * digits. Write-only; responses return only its last four characters. minLength: 1. maxLength:
     * 255.
     */
    "registration_number"?: string;
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1. Example: "2026-08-02".
     */
    "start_date"?: string;
})
    & (({
    /**
     * Seller's tax registration number. For EU, the non-Union OSS number: EU followed by nine
     * digits. Write-only; responses return only its last four characters. minLength: 1. maxLength:
     * 255.
     */
    "registration_number": string;
})
    | ({
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1. Example: "2026-08-02".
     */
    "start_date": string;
})
    | ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1. Example: "2026-08-02".
     */
    "end_date": string | null;
}));
/** The attendee name to set or clear. minProperties: 1. */
export type UpdateTicketRequest = {
    /**
     * The attendee name, 1 to 200 characters after surrounding whitespace is trimmed. Send null to
     * clear it. minLength: 1. maxLength: 200.
     */
    "attendee_name": string | null;
    /**
     * The ticket version last read. The change applies only while the ticket is at this version; a
     * stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse
     * the change. Door scanners usually omit it. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The attendee name to set or clear. minProperties: 1. */
export type UpdateTicketRequestInput = UpdateTicketRequest;
/** The request body for: Update webhook endpoint. minProperties: 1. */
export type UpdateWebhookEndpointRequest = ({
    /**
     * Set default to follow the merchant default, or a supported YYYY-MM-DD version to pin this
     * endpoint. Omit to leave unchanged. Null is not accepted. Switching between a pin and default
     * clears the rollback offer. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Endpoint description. Omit to leave unchanged; null clears it. Send null to clear it.
     * minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Event types to deliver. Send ["*"] for every type the endpoint's event_sources deliver,
     * including types added later; * must be the only entry and is not available with
     * installed_merchants. At least one entry is required. Use only current event type names;
     * previous and removed names are rejected. Stored subscriptions map previous names permanently
     * and drop removed names on read. See the [changelog](/docs/changelog). minItems: 1. []
     * (Value): string. minLength: 1.
     */
    "enabled_events"?: Array<string>;
    /**
     * Event sources this endpoint receives. Defaults to merchant. Use partner_app for app
     * lifecycle events and installed_merchants for events from merchants that installed the
     * partner app. [] enum: "merchant", "partner_app", "installed_merchants". [] (Value): string.
     * Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Apply api_version only if this matches the resource's current api_version. A mismatch
     * returns HTTP 409. Requires api_version; null is not accepted. minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Resource version last read by the caller. Required when enabled_events, event_sources,
     * installed_merchant_modes, or signing_methods is present, including an empty array. Optional
     * for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Modes of installed-merchant events this endpoint receives. Required when event_sources
     * includes installed_merchants and omitted otherwise. Partner app lifecycle events are
     * delivered regardless of these modes. minItems: 1. maxItems: 2. uniqueItems: true. [] enum:
     * "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live" | (string & {})>;
    /**
     * Partner app that owns partner_app or installed_merchants event sources. minLength: 1.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Adding hmac when no
     * secret exists issues the first secret and returns it once in this response. Omit to leave
     * unchanged. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethod}. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
    /**
     * Whether this endpoint receives events. Setting inactive suppresses pending deliveries. Omit
     * to leave unchanged. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Public HTTPS URL to receive webhook deliveries. Omit to leave unchanged. minLength: 1. */
    "url"?: string;
});
/** The request body for: Update webhook endpoint. minProperties: 1. */
export type UpdateWebhookEndpointRequestInput = ({
    /**
     * Set default to follow the merchant default, or a supported YYYY-MM-DD version to pin this
     * endpoint. Omit to leave unchanged. Null is not accepted. Switching between a pin and default
     * clears the rollback offer. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Endpoint description. Omit to leave unchanged; null clears it. Send null to clear it.
     * minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Event types to deliver. Send ["*"] for every type the endpoint's event_sources deliver,
     * including types added later; * must be the only entry and is not available with
     * installed_merchants. At least one entry is required. Use only current event type names;
     * previous and removed names are rejected. Stored subscriptions map previous names permanently
     * and drop removed names on read. See the [changelog](/docs/changelog). minItems: 1. []
     * (Value): string. minLength: 1.
     */
    "enabled_events"?: Array<string>;
    /**
     * Event sources this endpoint receives. Defaults to merchant. Use partner_app for app
     * lifecycle events and installed_merchants for events from merchants that installed the
     * partner app. [] enum: "merchant", "partner_app", "installed_merchants". [] (Value): string.
     * Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants">;
    /**
     * Apply api_version only if this matches the resource's current api_version. A mismatch
     * returns HTTP 409. Requires api_version; null is not accepted. minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Resource version last read by the caller. Required when enabled_events, event_sources,
     * installed_merchant_modes, or signing_methods is present, including an empty array. Optional
     * for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Modes of installed-merchant events this endpoint receives. Required when event_sources
     * includes installed_merchants and omitted otherwise. Partner app lifecycle events are
     * delivered regardless of these modes. minItems: 1. maxItems: 2. uniqueItems: true. [] enum:
     * "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live">;
    /**
     * Partner app that owns partner_app or installed_merchants event sources. minLength: 1.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Adding hmac when no
     * secret exists issues the first secret and returns it once in this response. Omit to leave
     * unchanged. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethodInput}. How Flint signs requests to this endpoint. Value enum: "jwt",
     * "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
    /**
     * Whether this endpoint receives events. Setting inactive suppresses pending deliveries. Omit
     * to leave unchanged. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Public HTTPS URL to receive webhook deliveries. Omit to leave unchanged. minLength: 1. */
    "url"?: string;
});
/** The request body for: Update a workload identity. minProperties: 1. */
export type UpdateWorkloadIdentityRequest = ({
    /**
     * Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition;
     * shared issuers require tenant pinning. maxItems: 10. uniqueItems: true. [] (Value): {@link
     * WorkloadIdentityClaimConditionRequest}. A condition to match one top-level scalar claim in
     * the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequest>;
    /**
     * Version most recently read. Required when claim_conditions or scopes is supplied; optional
     * for scalar updates. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * Complete scope set to grant. API keys, CLI login tokens and workload tokens may grant only
     * scopes they hold in the same environment. Only a full-access key or a freshly verified user
     * session can grant accounts.api_keys.write, accounts.workload_identities.write or
     * commerce.gift_cards.secrets.write, in every mode. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
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
    "scopes"?: Array<"accounts.api_keys.read"
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
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** minLength: 1. maxLength: 1024. */
    "subject"?: string;
    /** Default: "exact". Value enum: "exact", "glob". */
    "subject_match"?: "exact" | "glob" | (string & {});
});
/** The request body for: Update a workload identity. minProperties: 1. */
export type UpdateWorkloadIdentityRequestInput = ({
    /**
     * Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition;
     * shared issuers require tenant pinning. maxItems: 10. uniqueItems: true. [] (Value): {@link
     * WorkloadIdentityClaimConditionRequestInput}. A condition to match one top-level scalar claim
     * in the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequestInput>;
    /**
     * Version most recently read. Required when claim_conditions or scopes is supplied; optional
     * for scalar updates. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * Complete scope set to grant. API keys, CLI login tokens and workload tokens may grant only
     * scopes they hold in the same environment. Only a full-access key or a freshly verified user
     * session can grant accounts.api_keys.write, accounts.workload_identities.write or
     * commerce.gift_cards.secrets.write, in every mode. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
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
    "scopes"?: Array<"accounts.api_keys.read"
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
        | "webhooks.write">;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** minLength: 1. maxLength: 1024. */
    "subject"?: string;
    /** Default: "exact". Value enum: "exact", "glob". */
    "subject_match"?: "exact" | "glob";
});
/** A user with access to merchant accounts. */
export type User = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "default_merchant_id"?: string;
    /** Email address the user signs in with. */
    "email": string;
    /** The user's first name. */
    "first_name": string;
    /** The user's last name. */
    "last_name": string;
    /** Value enum: "active", "deactivated". */
    "status": "active" | "deactivated" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Unique identifier for this user, prefixed `usr_`. Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     */
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
/** The request body for: Verify a merchant signup. */
export type VerifyMerchantSignupRequest = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The owner's acceptance of Flint's merchant terms. Your statement that the owner ticked
     * Flint's terms checkbox in your form, with Flint's wording. The platform terms oblige you to
     * show it and to report real values.
     */
    "terms_acceptance": MerchantSignupTermsAcceptanceRequest;
    /**
     * The 8-character code Flint emailed the owner, such as `K7QM-4TXD`, with or without the
     * hyphen, in either case. Request logs redact it. minLength: 8. maxLength: 9.
     */
    "verification_code": string;
};
/** The request body for: Verify a merchant signup. */
export type VerifyMerchantSignupRequestInput = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The owner's acceptance of Flint's merchant terms. Your statement that the owner ticked
     * Flint's terms checkbox in your form, with Flint's wording. The platform terms oblige you to
     * show it and to report real values.
     */
    "terms_acceptance": MerchantSignupTermsAcceptanceRequestInput;
    /**
     * The 8-character code Flint emailed the owner, such as `K7QM-4TXD`, with or without the
     * hyphen, in either case. Request logs redact it. minLength: 8. maxLength: 9.
     */
    "verification_code": string;
};
/** The request body for: Verify return receipt line item. */
export type VerifyReturnReceiptLineItemRequest = {
    /**
     * Optional version of the return receipt. A stale value returns VERSION_CONFLICT with the
     * receipt ID and its current version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * ID of the Return line the units were matched to. Absent for unverified units. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Why the units were verified against the line. Value enum: "order_match_confirmed",
     * "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason": "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** Detail about `verification_reason`. minLength: 1. */
    "verification_reason_message"?: string;
};
/** The request body for: Verify return receipt line item. */
export type VerifyReturnReceiptLineItemRequestInput = {
    /**
     * Optional version of the return receipt. A stale value returns VERSION_CONFLICT with the
     * receipt ID and its current version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * ID of the Return line the units were matched to. Absent for unverified units. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Why the units were verified against the line. Value enum: "order_match_confirmed",
     * "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason": "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other";
    /** Detail about `verification_reason`. minLength: 1. */
    "verification_reason_message"?: string;
};
export type VerifyReturnReceiptLineItemResponse = GetReturnReceiptResponse;
/** The request body for: Void package. */
export type VoidPackageRequest = {
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** Void event timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at"?: string;
    /** Your note explaining this action. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Void package. */
export type VoidPackageRequestInput = {
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** Void event timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this action. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Void shipment. */
export type VoidShipmentRequestInput = VoidPackageRequestInput;
/** A response containing `VoidShipmentResult` data. */
export type VoidShipmentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The voided shipment and
     * its affected packages. The shipment is the primary resource and expected_version target.
     */
    "data": VoidShipmentResult;
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
 * The voided shipment and its affected packages. The shipment is the primary resource and
 * expected_version target.
 */
export type VoidShipmentResult = {
    /**  [] (Value): {@link Package}. A package within a shipment. */
    "packages": Array<Package>;
    /** A shipment carrying fulfilled order items. */
    "shipment": Shipment;
};
/** The request body for: Waive an unpaid invoice late fee. */
export type WaiveInvoiceLateFeeRequest = {
    /** Your note explaining this action. minLength: 1. maxLength: 4096. */
    "reason_message": string;
};
/** The request body for: Waive an unpaid invoice late fee. */
export type WaiveInvoiceLateFeeRequestInput = WaiveInvoiceLateFeeRequest;
/** The request body for: Waive return line inspection. */
export type WaiveReturnLineInspectionRequest = {
    /**
     * Optional. The Return's current version, not the line's; a stale value returns 409
     * VERSION_CONFLICT. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why inspection is being waived. Value enum: "policy_override", "trusted_in_store_handoff",
     * "merchant_review", "other".
     */
    "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Waive return line inspection. */
export type WaiveReturnLineInspectionRequestInput = {
    /**
     * Optional. The Return's current version, not the line's; a stale value returns 409
     * VERSION_CONFLICT. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why inspection is being waived. Value enum: "policy_override", "trusted_in_store_handoff",
     * "merchant_review", "other".
     */
    "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type WaiveReturnLineInspectionResponse = GetReturnResponse;
/** The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`. */
export type WebhookBundle = ({
    /** Barcode assigned to this sellable item. */
    "barcode"?: string;
    /** Stable identifier of the bundle. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
    /**
     * Always present. Empty collections are returned as []. [] (Value): {@link CategoryReference}.
     * A reference to a product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /** Number of components in the bundle. Format: int32. */
    "component_count": number;
    /**
     * The bundle's components in position order, on every bundle response including list rows. []
     * only when the bundle has no components. [] (Value): {@link BundleComponent}. An item
     * included in a bundle.
     */
    "components": Array<BundleComponent>;
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Delivery readiness aggregated across the bundle's components. A bundle with no components
     * reports `not_applicable`. Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Description of the bundle shown to buyers. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Images attached to this resource, in display order. The first image is primary. [] (Value):
     * {@link ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Whether the bundle can be sold now: it is `active`, has at least one component, every
     * component's variant and product are `active`, and `delivery_configuration_status` isn't
     * `action_required`. Stock isn't considered.
     */
    "is_available_for_sale": boolean;
    /**
     * Identifier of the merchant that owns this resource. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Attached modifier set. Null when no modifier set is assigned. Send null on update to remove
     * it. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id": string | null;
    /** Bundle name shown to buyers. */
    "name": string;
    /** Stock keeping unit assigned to this sellable item. */
    "sku"?: string;
    /**
     * Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Value enum:
     * "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /**
     * Current resource version. Send it as expected_version to reject a write if the resource has
     * changed. Format: uint64. minimum: 0.
     */
    "version": number;
});
/**
 * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
 * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
 * `save_payment_method_types`, `save_payment_method_requires_verification`,
 * `pay_to_new_address_requires_verification`, `can_save_payment_method_with_phone`,
 * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
 * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`, `platform_fee`.
 */
export type WebhookCheckoutSession = ({
    /**
     * The payment attempt now collecting this checkout's order, the same attempt as the order's
     * active_payment_attempt. Read it to recover after losing a pay response, and resume it only
     * when is_resumable is true. Omitted when no attempt is active. Pending actions that open a
     * URL are left out; the pay response carries them. An attempt to pay an order.
     */
    "active_payment_attempt"?: OrderPaymentAttempt;
    /**
     * Contact the buyer entered in checkout before paying, saved with the session's checkout
     * credential. Separate from merchant-supplied prefill and customer_prefill from the customer
     * record. Omitted until the buyer saves or clears a field. When a checkout session payment
     * omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the
     * contact 30 days after the session ends, and when a customer linked to the session is
     * deleted. Buyer contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Whether to offer promotion-code entry now. True only while the session is open, is not in
     * recovery, and merchant promotion policy allows codes. An explicit
     * promotion_config.codes_enabled wins; null offers entry only when this merchant has an active
     * code promotion whose schedule includes now, in the session's environment. Recomputed on each
     * read. This hint does not change code admission: checkout lifecycle, promotion_config, and
     * merchant policy still apply.
     */
    "can_apply_promotion_code": boolean;
    /**
     * Unique identifier for this checkout session, prefixed `cs_`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id": string;
    /**
     * The reference the payment link URL or resolve request carried, such as your user ID. `null`
     * when none was sent or checkout did not start from a payment link. Returned only to merchant
     * credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a
     * claim, not proof of identity. minLength: 1. maxLength: 255.
     */
    "client_reference": string | null;
    /** The note supplied when the checkout session was closed. */
    "closed_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The buyer's answers to the payment link's custom fields, the same as the
     * `custom_field_answers` of the session's order. Read-only. Empty when the session didn't
     * start from a payment link, the buyer answered no custom fields, or the order was created
     * before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer
     * credentials. maxItems: 20. [] (Value): {@link CustomFieldAnswer}. One answer to a payment
     * link custom field, with the field as it was when checkout started. `custom_field_type`
     * determines the type of `value`.
     */
    "custom_field_answers": Array<CustomFieldAnswer>;
    /**
     * The custom text this session shows in checkout. Custom text shown in checkout: an order
     * summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * The customer of the session's order. Omitted when the order has none. A checkout credential
     * issued for this session acts for this customer. Add expand=customer to include the customer.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Current delivery choices for Flint-owned pricing. External pricing reports
     * requires_explicit_quote; reading this field does not request a delivery quote. Omitted when
     * the session is not open, has no order, or Flint cannot read its delivery. The delivery
     * options Flint derived for a checkout as a buyer sees them: choice groups, input
     * requirements, and evaluation status.
     */
    "delivery"?: CheckoutDerivedDeliveryResource;
    /**
     * Immutable delivery method assignment captured when the checkout was created. [] (Value):
     * string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids": Array<string>;
    /**
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment.
     */
    "delivery_selection_required": boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the buyer completes a gift card challenge for this checkout. Returned on
     * single-session reads, session create and update responses, checkout launch results, and
     * customer verification confirmation results while the session is open and can show the
     * challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results.
     * A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     */
    "gift_card_challenge"?: CheckoutGiftCardChallenge;
    /**
     * Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty
     * and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs
     * use eligible bound holds; explicit merchant IDs replace the binding for that request. First
     * adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot
     * adopt stock, and replacements never inherit the binding. Unused cart units retain their own
     * release and expiration lifecycle. [] (Value): string. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * Present only when `expand` includes `invoice`; `null` when expanded and there is no related
     * invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields,
     * including status, due date, and paid, outstanding, and refunded amounts, returned when the
     * invoice is expanded. anyOf[2] (Value): null.
     */
    "invoice"?: ((ExpandedInvoiceSummary) | (null));
    /**
     * ID of the invoice a session of type `invoice` collects payment for. Absent for other types.
     * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * Whether this terminal session credential is temporarily restricted to recovering its owning
     * payment attempt.
     */
    "is_in_recovery": boolean;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings for a checkout: whether buyers must accept terms, and links to the
     * terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
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
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * ID of the order the session collects payment for, fixed at creation. Absent when the session
     * has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /** Origin of the page that renders this headless checkout. Omitted when not set. */
    "page_origin"?: string;
    /**
     * Guidance for collecting a payment source. Checkout-credential reads include it only while
     * the session is open. Returned only to the checkout credential; never in webhook payloads.
     * Client-side details for collecting payment from the buyer, such as the Stripe settings to
     * initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /**
     * IDs of the payment intents for the session's order. Absent when the order has none. []
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_ids"?: Array<string>;
    /**
     * Present only when `expand` includes `payment_intents`: summaries of the payment intents in
     * `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
     * related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A payment link's
     * summary fields, including name, type, status, and URL, returned when the payment link is
     * expanded. anyOf[2] (Value): null.
     */
    "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
    /**
     * ID of the payment link the session was started from. Absent when it was not started from a
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Configured payment options for merchant credentials; currently available payment options for
     * the checkout credential. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefill;
    /**
     * Named conditions that affect checkout completion. Follow each problem's remediation action
     * instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means
     * another payment for the order must finish before this checkout can complete. When Flint
     * cannot read the checkout's delivery, the read still succeeds and reports
     * delivery_unreadable; its remediation says whether reading the session again can succeed, and
     * its next action's reason_code names the error. [] (Value): {@link CheckoutProblemResource}.
     * A problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation.
     */
    "problems": Array<CheckoutProblemResource>;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * All buyer-visible refunds on this session’s order, including refunds made by the store. Uses
     * the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an
     * array, with [] when there are none, and omitted from other responses and webhooks. A failed
     * refund with failure_reason refund_abandoned could not be completed: tell the buyer to
     * contact the store to get their money back. [] (Value): {@link BuyerRefund}. Money returned
     * against a collected payment.
     */
    "refunds"?: Array<BuyerRefund>;
    /**
     * Guidance for collecting a payment method to save. Checkout-credential reads include it only
     * while the session is open. Returned only to the checkout credential; never in webhook
     * payloads. Client guidance for saving a payment method on the merchant's connected account.
     */
    "setup_collection"?: SetupCollection;
    /**
     * Where the session is in its lifecycle. Only an `open` session accepts payment.
     * `terminal_reason` says why a session that is not open ended. Value enum: "open", "paid",
     * "partially_paid", "expired", "closed", "invalidated".
     */
    "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
    /**
     * ID of the subscription plan a session of type `subscription_plan` signs the buyer up for.
     * Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order
     * was created, so later plan changes do not alter them. Absent when the checkout starts no
     * subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the
     * session's order was created, so later plan changes do not alter them.
     */
    "subscription_terms"?: CheckoutSubscriptionTerms;
    /**
     * ID of the session that replaced this one. Present when `terminal_reason` is `superseded`.
     * Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "superseding_checkout_session_id"?: string;
    /**
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". [] (Value): string. Value enum: "close".
     */
    "supported_actions": Array<"close" | (string & {})>;
    /**
     * How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout
     * page; a headless one is rendered on your own page. Value enum: "hosted", "headless".
     */
    "surface": "hosted" | "headless" | (string & {});
    /**
     * The session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     */
    "tax"?: CheckoutSessionTax;
    /**
     * Why the session ended. The checkout credential can still read its own closed or expired
     * session; every other call is refused because the session is not open. order_paid_elsewhere
     * applies only to invalidated sessions when payment succeeds or partially succeeds outside the
     * session. order_mutated applies when an edit closes or completes its order, or ends an
     * invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted
     * and headless sessions open. A session already past expires_at ends with expired before the
     * edit is applied. Value enum: "payment_succeeded", "payment_partially_succeeded", "expired",
     * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
     * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
     * "invoice_balance_changed".
     */
    "terminal_reason"?: "payment_succeeded"
        | "payment_partially_succeeded"
        | "expired"
        | "closed_by_merchant"
        | "order_mutated"
        | "superseded"
        | "order_paid_elsewhere"
        | "invoice_paid_elsewhere"
        | "invoice_voided"
        | "invoice_uncollectible"
        | "invoice_balance_changed"
        | (string & {});
    /**
     * The theme checkout renders with: your branding settings, with the session's `title`,
     * `primary_color`, and `accent_color` over them. A session sets only those three; the other
     * fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings.
     */
    "theme"?: CheckoutTheme;
    /**
     * The tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the session collects payment for, fixed at creation. Value enum: "order", "quick_pay",
     * "subscription_plan", "invoice", "payment_link".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
});
export type WebhookDeliveriesCreateParams = (InputValue<CreateWebhookDeliveryRequestInput>);
export type WebhookDeliveriesGetParams = DisputesAcceptParams;
export type WebhookDeliveriesListAttemptsParams = CustomersListAddressesParams;
export type WebhookDeliveriesListParams = {
    /**
     * Filter by an exact webhook event ID. Returns an empty page when no visible deliveries match.
     * pattern: ^whev_[0-9A-HJKMNP-TV-Z]{26}$. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id"?: InputValue<string>;
    /**
     * Filter by an exact webhook endpoint ID, including deleted endpoints. Returns an empty page
     * when no visible deliveries match. pattern: ^whep_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id"?: InputValue<string>;
    /**
     * Filter by delivery status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "pending", "delivered", "failed", "suppressed". Value enum: "pending",
     * "delivered", "failed", "suppressed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "pending", "delivered", "failed", "suppressed". anyOf[1][] (Value): string. Value
     * enum: "pending", "delivered", "failed", "suppressed". anyOf[2] (Value): string. Value enum:
     * "pending", "delivered", "failed", "suppressed".
     */
    "status"?: InputValue<("pending" | "delivered" | "failed" | "suppressed")
        | readonly ("pending" | "delivered" | "failed" | "suppressed")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
export type WebhookDeliveriesResendParams = (InputValue<ResendWebhookDeliveryRequestInput>);
/** An attempt to deliver an event to a webhook endpoint. */
export type WebhookDelivery = {
    /**
     * Attempts made by Flint's automatic schedule. Manual resends and the first attempt of a
     * delivery you create don't count. Format: int32.
     */
    "automatic_attempt_count": number;
    /**
     * When the delivery was created: when Flint prepared the event, or when you created it.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "delivered_at"?: string;
    /**
     * The kind of failure on the most recent failed attempt. Absent before any attempt, and when
     * delivered or suppressed. Value enum: "webhook_timeout", "webhook_dns", "webhook_tls",
     * "webhook_connection", "webhook_blocked_target", "webhook_request", "webhook_redirect",
     * "webhook_http_4xx", "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
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
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failed attempt. Absent before any attempt, and when delivered
     * or suppressed.
     */
    "error_summary"?: string;
    /**
     * HTTP status returned by the receiver on the latest recorded attempt. Omitted when no HTTP
     * response was received. Format: int32.
     */
    "last_response_code"?: number;
    /** Maximum automatic attempts. Format: int32. */
    "max_attempts": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "next_retry_at"?: string;
    /** The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /**
     * Current state of this endpoint delivery and its automatic retry schedule. Value enum:
     * "pending", "delivered", "failed", "suppressed".
     */
    "status": "pending" | "delivered" | "failed" | "suppressed" | (string & {});
    /**
     * Why this delivery was suppressed. Present exactly when status is suppressed. Suppressed
     * deliveries have no failure explanation. Value enum: "endpoint_inactive", "endpoint_deleted",
     * "authorization_revoked", "scope_missing", "event_not_allowed",
     * "partner_app_install_revoked", "sandbox_reset".
     */
    "suppression_reason"?: "endpoint_inactive"
        | "endpoint_deleted"
        | "authorization_revoked"
        | "scope_missing"
        | "event_not_allowed"
        | "partner_app_install_revoked"
        | "sandbox_reset"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Unique identifier for this webhook delivery, prefixed `wdel_`. Example:
     * "wdel_01KEZF7C001DWSNDCDZHCTBN0A".
     */
    "webhook_delivery_id": string;
    /**
     * ID of the receiving endpoint, retained even after the endpoint is deleted. Example:
     * "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id": string;
    /** ID of the event this delivery sends. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
/**
 * The result of a webhook delivery action, such as a resend: the delivery, attempt, status, and
 * any error details.
 */
export type WebhookDeliveryAction = {
    /**
     * Sequence number of this attempt within the delivery, including automatic and manual
     * attempts. Format: int32.
     */
    "attempt_number": number;
    /**
     * Outcome of the individual attempt made by this action. Value enum: "pending", "delivered",
     * "failed".
     */
    "attempt_status": "pending" | "delivered" | "failed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * Current state of the delivery after this action. Value enum: "pending", "delivered",
     * "failed", "suppressed".
     */
    "delivery_status": "pending" | "delivered" | "failed" | "suppressed" | (string & {});
    /**
     * What caused Flint to make this delivery attempt. Value enum: "automatic_delivery",
     * "automatic_retry", "manual_resend", "manual_delivery", "test_event".
     */
    "delivery_trigger": "automatic_delivery"
        | "automatic_retry"
        | "manual_resend"
        | "manual_delivery"
        | "test_event"
        | (string & {});
    /** Duration of this delivery attempt in milliseconds. Format: int64. */
    "duration_milliseconds"?: number;
    /**
     * The kind of failure for this attempt. Present only when this attempt's `attempt_status` is
     * `failed`. Value enum: "webhook_timeout", "webhook_dns", "webhook_tls", "webhook_connection",
     * "webhook_blocked_target", "webhook_request", "webhook_redirect", "webhook_http_4xx",
     * "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
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
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failure for this attempt. Present only when this attempt's
     * `attempt_status` is `failed`.
     */
    "error_summary"?: string;
    /** The note supplied when this action was requested. */
    "reason_message"?: string;
    /** The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /** Receiver response body excerpt. Omitted unless the caller can read the event's resource. */
    "response_body_excerpt"?: string;
    /** Receiver response content type. Omitted unless the caller can read the event's resource. */
    "response_content_type"?: string;
    /**
     * Receiver response headers, keyed by lowercase header name. Repeated values are joined with
     * ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the
     * 14-day response-detail retention, or unless the caller can read the event's resource. *
     * (Value): string.
     */
    "response_headers"?: Record<string, string>;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * HTTP status returned by the receiver. Omitted when no HTTP response was received. Format:
     * int32.
     */
    "status_code"?: number;
    /**
     * ID of this individual attempt to send the event. Example: "watt_01KEZF7C00RG6XMCAFJB8HH55R".
     */
    "webhook_delivery_attempt_id": string;
    /**
     * ID of the endpoint delivery this attempt belongs to. Example:
     * "wdel_01KEZF7C001DWSNDCDZHCTBN0A".
     */
    "webhook_delivery_id": string;
    /** ID of the event sent by this attempt. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
/** A response containing `WebhookDeliveryAction` data. */
export type WebhookDeliveryActionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of a webhook
     * delivery action, such as a resend: the delivery, attempt, status, and any error details.
     */
    "data": WebhookDeliveryAction;
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
 * One attempt to deliver a webhook event to an endpoint, with its status, timing, response code,
 * and error details.
 */
export type WebhookDeliveryAttempt = {
    /**
     * API version used for this delivery attempt. Omitted when the version was not recorded or
     * payload rendering failed. Format: date. Example: "2026-08-02".
     */
    "api_version"?: string;
    /**
     * Sequence number of this attempt within the delivery, including automatic and manual
     * attempts. Format: int32.
     */
    "attempt_number": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * What caused Flint to make this delivery attempt. Value enum: "automatic_delivery",
     * "automatic_retry", "manual_resend", "manual_delivery", "test_event".
     */
    "delivery_trigger": "automatic_delivery"
        | "automatic_retry"
        | "manual_resend"
        | "manual_delivery"
        | "test_event"
        | (string & {});
    /** Duration of this delivery attempt in milliseconds. Format: int64. */
    "duration_milliseconds"?: number;
    /**
     * The kind of failure for this attempt. Present only when this attempt's `status` is `failed`.
     * Value enum: "webhook_timeout", "webhook_dns", "webhook_tls", "webhook_connection",
     * "webhook_blocked_target", "webhook_request", "webhook_redirect", "webhook_http_4xx",
     * "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
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
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failure for this attempt. Present only when this attempt's
     * `status` is `failed`.
     */
    "error_summary"?: string;
    /** The note supplied when this action was requested. */
    "reason_message"?: string;
    /** The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /** Receiver response body excerpt. Omitted unless the caller can read the event's resource. */
    "response_body_excerpt"?: string;
    /** Receiver response content type. Omitted unless the caller can read the event's resource. */
    "response_content_type"?: string;
    /**
     * Receiver response headers, keyed by lowercase header name. Repeated values are joined with
     * ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the
     * 14-day response-detail retention, or unless the caller can read the event's resource. *
     * (Value): string.
     */
    "response_headers"?: Record<string, string>;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Outcome of this individual delivery attempt. Value enum: "pending", "delivered", "failed".
     */
    "status": "pending" | "delivered" | "failed" | (string & {});
    /**
     * HTTP status returned by the receiver. Omitted when no HTTP response was received. Format:
     * int32.
     */
    "status_code"?: number;
    /**
     * ID of this individual attempt to send the event. Example: "watt_01KEZF7C00RG6XMCAFJB8HH55R".
     */
    "webhook_delivery_attempt_id": string;
    /**
     * ID of the endpoint delivery this attempt belongs to. Example:
     * "wdel_01KEZF7C001DWSNDCDZHCTBN0A".
     */
    "webhook_delivery_id": string;
    /** ID of the event sent by this attempt. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
/** A page of `WebhookDeliveryAttempt` objects. */
export type WebhookDeliveryAttemptListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookDeliveryAttempt}. One attempt to deliver a webhook event to an endpoint, with its
     * status, timing, response code, and error details.
     */
    "data": Array<WebhookDeliveryAttempt>;
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
/** A page of `WebhookDelivery` objects. */
export type WebhookDeliveryListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookDelivery}. An attempt to deliver an event to a webhook endpoint.
     */
    "data": Array<WebhookDelivery>;
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
 * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
 * `unconfigured_assignment`.
 */
export type WebhookDeliveryProfile = ({
    /**
     * Current delivery requirement and grouping policy. Whether delivery planning applies to items
     * under a delivery profile, and if so the allowed delivery types, resolution mode, origin
     * policy, and grouping and splitting rules.
     */
    "configuration": DeliveryProfileConfiguration;
    /** Time the profile was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Immutable revision used for new line-item snapshots. Example:
     * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F".
     */
    "current_delivery_profile_revision_id": string;
    /** Stable delivery profile ID. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". */
    "delivery_profile_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** True only when this profile is the current physical catalog default. */
    "is_default": boolean;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing profile name. */
    "name": string;
    /** Current profile lifecycle status. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Time the profile last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1. */
    "version": number;
});
/** A response containing `WebhookDelivery` data. */
export type WebhookDeliveryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An attempt to deliver an
     * event to a webhook endpoint.
     */
    "data": WebhookDelivery;
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
 * A merchant webhook endpoint belongs to the live mode or sandbox of the credential that created
 * it and receives only that environment's events. Partner endpoints select sources with
 * event_sources and installed_merchant_modes.
 */
export type WebhookEndpoint = ({
    /**
     * A dated API version pins this endpoint. The value default follows the endpoint owner's
     * merchant default at delivery time, including retries. Deliveries never use a newer version
     * than the event's recorded version.
     */
    "api_version": string;
    /** When api_version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "api_version_changed_at"?: string;
    /**
     * Version this endpoint used before its last upgrade. Present while a rollback is available.
     * To roll back, send it as api_version.
     */
    "api_version_previous"?: string;
    /**
     * When the rollback offer for api_version_previous ends. You can still set any supported
     * version afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "api_version_rollback_expires_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The API key, user, partner app, or workload identity that created this endpoint. An API key
     * creator can belong to another mode, such as a live key that creates a sandbox endpoint.
     * Absent when the creator is unavailable, including endpoints created before attribution was
     * recorded. A reference to another resource by `resource_type` and `resource_id`.
     */
    "created_by"?: ResourceReference;
    /** Your description of this endpoint. Omitted when none is set. */
    "description"?: string;
    /**
     * Subscribed event types. ["*"] includes every type the endpoint's event_sources deliver,
     * including types added later; * is not available with installed_merchants. Stored
     * subscriptions map previous names permanently and drop removed names on read. Empty when no
     * current subscriptions remain. See the [changelog](/docs/changelog). [] (Value): string.
     * minLength: 1.
     */
    "enabled_events": Array<string>;
    /**
     * Event sources this endpoint receives. Defaults to merchant. Use partner_app for app
     * lifecycle events and installed_merchants for events from merchants that installed the
     * partner app. [] enum: "merchant", "partner_app", "installed_merchants". [] (Value): string.
     * Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Modes of installed-merchant events this endpoint receives. Required when event_sources
     * includes installed_merchants and omitted otherwise. Partner app lifecycle events are
     * delivered regardless of these modes. minItems: 1. maxItems: 2. uniqueItems: true. [] enum:
     * "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live" | (string & {})>;
    /**
     * Partner app that owns partner_app or installed_merchants event sources. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * The connected app install this endpoint is linked to. The endpoint is deleted when that
     * install is revoked or loses its grant for this endpoint's environment. Null when the
     * endpoint is not linked to a connected app. Never changes. pattern:
     * ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string | null;
    /**
     * When the replaced signing secret stops signing deliveries. Present only during a rotation
     * overlap. Until then each delivery carries a signature from both secrets. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "previous_secret_expires_at"?: string;
    /**
     * Methods Flint uses to sign deliveries to this endpoint. minItems: 1. uniqueItems: true. []
     * enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to this endpoint. Value
     * enum: "jwt", "hmac".
     */
    "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
    /**
     * Availability of this endpoint. Deleted is returned only by DELETE. Value enum: "active",
     * "inactive", "deleted".
     */
    "status": "active" | "inactive" | "deleted" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Public HTTPS URL that receives webhook deliveries. */
    "url": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
    /**
     * Unique identifier for this webhook endpoint, prefixed `whep_`. Example:
     * "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id": string;
});
/** A page of `WebhookEndpoint` objects. */
export type WebhookEndpointListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookEndpoint}. A merchant webhook endpoint belongs to the live mode or sandbox of the
     * credential that created it and receives only that environment's events. Partner endpoints
     * select sources with event_sources and installed_merchant_modes.
     */
    "data": Array<WebhookEndpoint>;
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
/** A response containing `WebhookEndpoint` data. */
export type WebhookEndpointResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant webhook
     * endpoint belongs to the live mode or sandbox of the credential that created it and receives
     * only that environment's events. Partner endpoints select sources with event_sources and
     * installed_merchant_modes.
     */
    "data": WebhookEndpoint;
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
 * A webhook endpoint with its one-time signing secret, returned on create with hmac, when PATCH
 * first enables hmac, or when its secret is rotated. A merchant webhook endpoint belongs to the
 * live mode or sandbox of the credential that created it and receives only that environment's
 * events. Partner endpoints select sources with event_sources and installed_merchant_modes.
 */
export type WebhookEndpointWithSecret = (Exclude<WebhookEndpoint & object, readonly unknown[]>)
    & ({
    /**
     * One-time signing secret. Present on create when hmac is enabled, on PATCH when hmac is first
     * enabled, and on rotation; omitted on an idempotent replay after the secret retention period.
     */
    "secret"?: string;
});
/** A response containing `WebhookEndpointWithSecret` data. */
export type WebhookEndpointWithSecretResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A webhook endpoint with
     * its one-time signing secret, returned on create with hmac, when PATCH first enables hmac, or
     * when its secret is rotated. A merchant webhook endpoint belongs to the live mode or sandbox
     * of the credential that created it and receives only that environment's events. Partner
     * endpoints select sources with event_sources and installed_merchant_modes.
     */
    "data": WebhookEndpointWithSecret;
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
export type WebhookEndpointsCreateParams = (InputValue<CreateWebhookEndpointRequestInput>);
export type WebhookEndpointsCreateTestEventParams = (InputValue<CreateWebhookTestEventRequestInput>);
export type WebhookEndpointsDeleteParams = {
    /**
     * Optional configuration version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
};
export type WebhookEndpointsGetParams = DisputesAcceptParams;
export type WebhookEndpointsListParams = {
    /**
     * Filter by the exact ID of the API key, user, partner app, or workload identity that created
     * the endpoint. Unknown IDs return an empty list. pattern:
     * ^(key|usr|papp|wid)_[0-7][0-9A-HJKMNP-TV-Z]{25}$.
     */
    "created_by"?: InputValue<string>;
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
     * Filter by status. Omitted, the list leaves out deleted rows; name deleted to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "deleted". Value enum: "active", "inactive", "deleted". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "active", "inactive", "deleted". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "deleted". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "deleted".
     */
    "status"?: InputValue<("active" | "inactive" | "deleted") | readonly ("active" | "inactive" | "deleted")[]>;
    /**
     * Filter by webhook endpoint event sources. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "merchant", "partner_app", "installed_merchants". Value enum:
     * "merchant", "partner_app", "installed_merchants". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "merchant", "partner_app", "installed_merchants". anyOf[1][] (Value):
     * string. Value enum: "merchant", "partner_app", "installed_merchants". anyOf[2] (Value):
     * string. Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_sources"?: InputValue<("merchant" | "partner_app" | "installed_merchants")
        | readonly ("merchant" | "partner_app" | "installed_merchants")[]>;
    /**
     * Filter by partner app ID for partner-source webhook endpoints. pattern:
     * ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Exact-match filter on partner_app_install_id. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: InputValue<string>;
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
export type WebhookEndpointsRotateSecretParams = (InputValue<RotateWebhookSecretRequestInput>);
export type WebhookEndpointsSignDeliveryParams = (InputValue<SignWebhookEndpointDeliveryRequestInput>);
export type WebhookEndpointsUpdateParams = (InputValue<UpdateWebhookEndpointRequestInput>);
/** An event prepared for delivery to webhook endpoints. */
export type WebhookEvent = ({
    /**
     * ID of the API request log associated with the event. Omitted when none is associated.
     * Example: "rlog_01KEZF7C008XJCH6BHA224X46F".
     */
    "api_request_log_id"?: string;
    /**
     * API version of the event data. Stored data follows the same versioning rules as webhook
     * deliveries. Format: date. Example: "2026-08-02".
     */
    "api_version": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The delivered envelope's data, including its payload-version-specific shape. Omitted from
     * list responses and from detail responses when the caller lacks read access to the attributed
     * resource or the payload has expired after 14 days.
     */
    "data"?: {
        [key: string]: unknown;
    };
    /**
     * Envelope discriminator identifying merchant events, partner app lifecycle events, or events
     * forwarded from installed merchants. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_source"?: "merchant" | "partner_app" | "installed_merchants" | (string & {});
    /**
     * Type of event Flint recorded, using the current event type name. Value enum:
     * "api_key.created", "api_key.revoked", "api_key.updated", "balance.updated",
     * "balance_transaction.created", "balance_transaction.updated", "bundle.archived",
     * "bundle.created", "bundle.updated", "category.created", "category.deleted",
     * "category.updated", "checkout_session.closed", "checkout_session.created",
     * "checkout_session.expired", "checkout_session.invalidated", "checkout_session.paid",
     * "checkout_session.partially_paid", "checkout_session.updated", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "order_edit.created", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided".
     */
    "event_type": "api_key.created"
        | "api_key.revoked"
        | "api_key.updated"
        | "balance.updated"
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
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
        | "environment_grant.updated"
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
        | "inventory_count.updated"
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
        | "inventory_reservation.updated"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
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
        | "invoice_payment_attempt.succeeded"
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
        | "order_edit.created"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payment_split.canceled"
        | "payment_split.created"
        | "payment_split.failed"
        | "payment_split.succeeded"
        | "payment_split.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "platform_fee.canceled"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.updated"
        | "platform_fee_payout.created"
        | "platform_fee_payout.failed"
        | "platform_fee_payout.succeeded"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
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
        | "reader.archived"
        | "reader.created"
        | "reader.updated"
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
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
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
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided"
        | (string & {});
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live" | (string & {});
    /**
     * ID of the partner app that owns this partner event. Omitted for merchant events. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * Envelope payload version. Present only while the stored payload is retained. Value enum: 1,
     * 2.
     */
    "payload_version"?: number;
    /**
     * Originating request. `null` when the event is synthetic or no originating request ID is
     * recorded. The idempotency key is included only on an authorized detail read while the
     * payload is retained. Omitted for partner events. id (Required): string. Request ID of the
     * request that caused the event. idempotency_key (Optional): string. The Idempotency-Key the
     * originating request sent. Absent when it sent none.
     */
    "request"?: {
        /** Request ID of the request that caused the event. */
        "id": string;
        /** The Idempotency-Key the originating request sent. Absent when it sent none. */
        "idempotency_key"?: string;
    }
        | null;
    /**
     * ID of the resource affected by the event. Omitted when no resource ID is attributed.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id"?: string;
    /**
     * Public resource type affected by the event. Omitted when no public resource type is
     * attributed. Example: "order". Value enum: "api_key", "api_request_log", "balance",
     * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
     * "customer_verification", "delivery_choice_group", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate",
     * "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone",
     * "demo_session", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "merchant_signup", "modifier",
     * "modifier_group", "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_intent",
     * "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payment_split", "payout", "payout_destination",
     * "payout_settings", "platform_fee", "platform_fee_balance_transaction",
     * "platform_fee_payout", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "reader", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "remembered_buyer", "report", "report_download", "return",
     * "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
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
        | "customer_tax_exemption"
        | "customer_verification"
        | "delivery_choice_group"
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
        | "merchant_signup"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_edit"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
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
        | "payment_split"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "platform_fee"
        | "platform_fee_balance_transaction"
        | "platform_fee_payout"
        | "price_list"
        | "price_list_price"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "reader"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "remembered_buyer"
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
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
    /**
     * Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode.
     * Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * Partner envelope source. Present only for partner events while the stored payload is
     * retained. The merchant and partner app install the event concerns. Environment fields are
     * present for installed-merchant events.
     */
    "source"?: WebhookEventSource;
    /**
     * Whether this is a synthetic event created to test an endpoint; independent of live or test
     * mode.
     */
    "test": boolean;
    /**
     * Unique identifier for this webhook event, prefixed `whev_`. Example:
     * "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
});
/** A page of `WebhookEvent` objects. */
export type WebhookEventListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookEvent}. An event prepared for delivery to webhook endpoints.
     */
    "data": Array<WebhookEvent>;
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
/** A response containing `WebhookEvent` data. */
export type WebhookEventResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An event prepared for
     * delivery to webhook endpoints.
     */
    "data": WebhookEvent;
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
 * The merchant and partner app install the event concerns. Environment fields are present for
 * installed-merchant events.
 */
export type WebhookEventSource = ({
    /**
     * The grant authorizing delivery from this merchant environment. Example:
     * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
     */
    "environment_grant_id"?: string;
    /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Whether the installed merchant event came from live mode or a sandbox. Value enum: "test",
     * "live".
     */
    "mode"?: "test" | "live" | (string & {});
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
/** A webhook event type, with a description and the event sources where it is valid. */
export type WebhookEventType = {
    /** Concise semantics for the state transition or event occurrence. */
    "description": string;
    /**
     * Event source buckets where this event type is valid. [] enum: "merchant", "partner_app",
     * "installed_merchants". [] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources": Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Webhook event type string accepted by compatible endpoint enabled_events values and webhook
     * event filters. Value enum: "api_key.created", "api_key.revoked", "api_key.updated",
     * "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "order_edit.created", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided".
     */
    "event_type": "api_key.created"
        | "api_key.revoked"
        | "api_key.updated"
        | "balance.updated"
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
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
        | "environment_grant.updated"
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
        | "inventory_count.updated"
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
        | "inventory_reservation.updated"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
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
        | "invoice_payment_attempt.succeeded"
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
        | "order_edit.created"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payment_split.canceled"
        | "payment_split.created"
        | "payment_split.failed"
        | "payment_split.succeeded"
        | "payment_split.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "platform_fee.canceled"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.updated"
        | "platform_fee_payout.created"
        | "platform_fee_payout.failed"
        | "platform_fee_payout.succeeded"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
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
        | "reader.archived"
        | "reader.created"
        | "reader.updated"
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
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
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
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided"
        | (string & {});
    /**
     * Whether the event records a resource snapshot or asks you to fetch current state. Value
     * enum: "snapshot", "notification".
     */
    "kind": "snapshot" | "notification" | (string & {});
    /**
     * Previous names of this type, retained permanently for reading stored events. Inputs accept
     * only the current event_type. Empty when the type has never been renamed. [] (Value): string.
     */
    "previous_names": Array<string>;
    /**
     * Public resource type: the resource's ID field name without `_id`. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_tax_exemption", "customer_verification", "delivery_choice_group",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
     * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "demo_session", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "merchant_signup", "modifier",
     * "modifier_group", "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_intent",
     * "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payment_split", "payout", "payout_destination",
     * "payout_settings", "platform_fee", "platform_fee_balance_transaction",
     * "platform_fee_payout", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "reader", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "remembered_buyer", "report", "report_download", "return",
     * "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
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
        | "customer_tax_exemption"
        | "customer_verification"
        | "delivery_choice_group"
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
        | "merchant_signup"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_edit"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
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
        | "payment_split"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "platform_fee"
        | "platform_fee_balance_transaction"
        | "platform_fee_payout"
        | "price_list"
        | "price_list_price"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "reader"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "remembered_buyer"
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
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
};
/** A page of `WebhookEventType` objects. */
export type WebhookEventTypeListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookEventType}. A webhook event type, with a description and the event sources where it
     * is valid.
     */
    "data": Array<WebhookEventType>;
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
export type WebhookEventTypesListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 100. minimum: 1. maximum:
     * 100. Default: 100.
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
export type WebhookEventsGetParams = DisputesAcceptParams;
export type WebhookEventsListParams = {
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
     * Filter to events that have a delivery for this webhook endpoint. pattern:
     * ^whep_[0-9A-HJKMNP-TV-Z]{26}$. Example: "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id"?: InputValue<string>;
    /**
     * Filter to events that have a delivery with this status. Values are trimmed and deduplicated
     * in first-seen order; empty or unknown entries are rejected. Values within this filter are
     * ORed; separate filters are ANDed. [] enum: "pending", "delivered", "failed", "suppressed".
     * Value enum: "pending", "delivered", "failed", "suppressed". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "pending", "delivered", "failed", "suppressed". anyOf[1][]
     * (Value): string. Value enum: "pending", "delivered", "failed", "suppressed". anyOf[2]
     * (Value): string. Value enum: "pending", "delivered", "failed", "suppressed".
     */
    "delivery_status"?: InputValue<("pending" | "delivered" | "failed" | "suppressed")
        | readonly ("pending" | "delivered" | "failed" | "suppressed")[]>;
    /**
     * Filter by webhook event source. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "merchant", "partner_app", "installed_merchants". Value enum:
     * "merchant", "partner_app", "installed_merchants". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "merchant", "partner_app", "installed_merchants". anyOf[1][] (Value):
     * string. Value enum: "merchant", "partner_app", "installed_merchants". anyOf[2] (Value):
     * string. Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_source"?: InputValue<("merchant" | "partner_app" | "installed_merchants")
        | readonly ("merchant" | "partner_app" | "installed_merchants")[]>;
    /**
     * Filter by partner app ID for partner-source webhook events. pattern:
     * ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Filter by webhook event type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "api_key.created", "api_key.revoked", "api_key.updated", "balance.updated",
     * "balance_transaction.created", "balance_transaction.updated", "bundle.archived",
     * "bundle.created", "bundle.updated", "category.created", "category.deleted",
     * "category.updated", "checkout_session.closed", "checkout_session.created",
     * "checkout_session.expired", "checkout_session.invalidated", "checkout_session.paid",
     * "checkout_session.partially_paid", "checkout_session.updated", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "order_edit.created", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided". Value enum:
     * "api_key.created", "api_key.revoked", "api_key.updated", "balance.updated",
     * "balance_transaction.created", "balance_transaction.updated", "bundle.archived",
     * "bundle.created", "bundle.updated", "category.created", "category.deleted",
     * "category.updated", "checkout_session.closed", "checkout_session.created",
     * "checkout_session.expired", "checkout_session.invalidated", "checkout_session.paid",
     * "checkout_session.partially_paid", "checkout_session.updated", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "order_edit.created", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "api_key.created", "api_key.revoked",
     * "api_key.updated", "balance.updated", "balance_transaction.created",
     * "balance_transaction.updated", "bundle.archived", "bundle.created", "bundle.updated",
     * "category.created", "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "order_edit.created", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided". anyOf[1][]
     * (Value): string. Value enum: "api_key.created", "api_key.revoked", "api_key.updated",
     * "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "order_edit.created", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided". anyOf[2] (Value):
     * string. Value enum: "api_key.created", "api_key.revoked", "api_key.updated",
     * "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "order_edit.created", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided".
     */
    "event_type"?: InputValue<("api_key.created"
        | "api_key.revoked"
        | "api_key.updated"
        | "balance.updated"
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
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
        | "environment_grant.updated"
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
        | "inventory_count.updated"
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
        | "inventory_reservation.updated"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
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
        | "invoice_payment_attempt.succeeded"
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
        | "order_edit.created"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payment_split.canceled"
        | "payment_split.created"
        | "payment_split.failed"
        | "payment_split.succeeded"
        | "payment_split.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "platform_fee.canceled"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.updated"
        | "platform_fee_payout.created"
        | "platform_fee_payout.failed"
        | "platform_fee_payout.succeeded"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
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
        | "reader.archived"
        | "reader.created"
        | "reader.updated"
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
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
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
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided")
        | readonly ("api_key.created"
        | "api_key.revoked"
        | "api_key.updated"
        | "balance.updated"
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
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
        | "environment_grant.updated"
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
        | "inventory_count.updated"
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
        | "inventory_reservation.updated"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
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
        | "invoice_payment_attempt.succeeded"
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
        | "order_edit.created"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payment_split.canceled"
        | "payment_split.created"
        | "payment_split.failed"
        | "payment_split.succeeded"
        | "payment_split.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "platform_fee.canceled"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.updated"
        | "platform_fee_payout.created"
        | "platform_fee_payout.failed"
        | "platform_fee_payout.succeeded"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
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
        | "reader.archived"
        | "reader.created"
        | "reader.updated"
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
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
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
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided")[]>;
    /**
     * Filter by affected resource type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "api_key", "balance", "balance_transaction", "bundle", "category",
     * "checkout_session", "credit_note", "credit_note_allocation", "custom_domain", "customer",
     * "customer_deletion_request", "customer_email_preferences", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "dispute", "environment_grant", "fraud_warning",
     * "fulfillment", "fulfillment_event", "gift_card", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "inventory_count", "inventory_level",
     * "inventory_receipt", "inventory_reservation", "inventory_transfer", "invoice",
     * "invoice_delivery_attempt", "invoice_manual_payment", "invoice_payment_attempt", "merchant",
     * "merchant_billing_balance", "merchant_billing_invoice", "modifier_group", "modifier_set",
     * "order", "order_edit", "package", "partner_app", "partner_app_install", "payment_intent",
     * "payment_link", "payment_method", "payment_review", "payment_split", "payout",
     * "payout_destination", "payout_settings", "platform_fee", "platform_fee_payout",
     * "price_list", "product", "product_variant", "promotion", "promotion_code", "reader",
     * "refund", "report", "return", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "shipment", "subscription", "subscription_delivery_migration",
     * "subscription_payment_retry", "tax_calculation_callback", "tax_connection", "test_clock",
     * "ticket". Value enum: "api_key", "balance", "balance_transaction", "bundle", "category",
     * "checkout_session", "credit_note", "credit_note_allocation", "custom_domain", "customer",
     * "customer_deletion_request", "customer_email_preferences", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "dispute", "environment_grant", "fraud_warning",
     * "fulfillment", "fulfillment_event", "gift_card", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "inventory_count", "inventory_level",
     * "inventory_receipt", "inventory_reservation", "inventory_transfer", "invoice",
     * "invoice_delivery_attempt", "invoice_manual_payment", "invoice_payment_attempt", "merchant",
     * "merchant_billing_balance", "merchant_billing_invoice", "modifier_group", "modifier_set",
     * "order", "order_edit", "package", "partner_app", "partner_app_install", "payment_intent",
     * "payment_link", "payment_method", "payment_review", "payment_split", "payout",
     * "payout_destination", "payout_settings", "platform_fee", "platform_fee_payout",
     * "price_list", "product", "product_variant", "promotion", "promotion_code", "reader",
     * "refund", "report", "return", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "shipment", "subscription", "subscription_delivery_migration",
     * "subscription_payment_retry", "tax_calculation_callback", "tax_connection", "test_clock",
     * "ticket". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "api_key", "balance",
     * "balance_transaction", "bundle", "category", "checkout_session", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_deletion_request",
     * "customer_email_preferences", "delivery_location_set", "delivery_method",
     * "delivery_profile", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "dispute", "environment_grant", "fraud_warning", "fulfillment",
     * "fulfillment_event", "gift_card", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "inventory_count", "inventory_level",
     * "inventory_receipt", "inventory_reservation", "inventory_transfer", "invoice",
     * "invoice_delivery_attempt", "invoice_manual_payment", "invoice_payment_attempt", "merchant",
     * "merchant_billing_balance", "merchant_billing_invoice", "modifier_group", "modifier_set",
     * "order", "order_edit", "package", "partner_app", "partner_app_install", "payment_intent",
     * "payment_link", "payment_method", "payment_review", "payment_split", "payout",
     * "payout_destination", "payout_settings", "platform_fee", "platform_fee_payout",
     * "price_list", "product", "product_variant", "promotion", "promotion_code", "reader",
     * "refund", "report", "return", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "shipment", "subscription", "subscription_delivery_migration",
     * "subscription_payment_retry", "tax_calculation_callback", "tax_connection", "test_clock",
     * "ticket". anyOf[1][] (Value): string. Value enum: "api_key", "balance",
     * "balance_transaction", "bundle", "category", "checkout_session", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_deletion_request",
     * "customer_email_preferences", "delivery_location_set", "delivery_method",
     * "delivery_profile", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "dispute", "environment_grant", "fraud_warning", "fulfillment",
     * "fulfillment_event", "gift_card", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "inventory_count", "inventory_level",
     * "inventory_receipt", "inventory_reservation", "inventory_transfer", "invoice",
     * "invoice_delivery_attempt", "invoice_manual_payment", "invoice_payment_attempt", "merchant",
     * "merchant_billing_balance", "merchant_billing_invoice", "modifier_group", "modifier_set",
     * "order", "order_edit", "package", "partner_app", "partner_app_install", "payment_intent",
     * "payment_link", "payment_method", "payment_review", "payment_split", "payout",
     * "payout_destination", "payout_settings", "platform_fee", "platform_fee_payout",
     * "price_list", "product", "product_variant", "promotion", "promotion_code", "reader",
     * "refund", "report", "return", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "shipment", "subscription", "subscription_delivery_migration",
     * "subscription_payment_retry", "tax_calculation_callback", "tax_connection", "test_clock",
     * "ticket". anyOf[2] (Value): string. Value enum: "api_key", "balance", "balance_transaction",
     * "bundle", "category", "checkout_session", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_deletion_request", "customer_email_preferences",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_rate_callback",
     * "delivery_revocation", "delivery_selection", "delivery_zone", "dispute",
     * "environment_grant", "fraud_warning", "fulfillment", "fulfillment_event", "gift_card",
     * "gift_card_load", "gift_card_notification", "gift_card_redemption", "gift_card_transaction",
     * "inventory_count", "inventory_level", "inventory_receipt", "inventory_reservation",
     * "inventory_transfer", "invoice", "invoice_delivery_attempt", "invoice_manual_payment",
     * "invoice_payment_attempt", "merchant", "merchant_billing_balance",
     * "merchant_billing_invoice", "modifier_group", "modifier_set", "order", "order_edit",
     * "package", "partner_app", "partner_app_install", "payment_intent", "payment_link",
     * "payment_method", "payment_review", "payment_split", "payout", "payout_destination",
     * "payout_settings", "platform_fee", "platform_fee_payout", "price_list", "product",
     * "product_variant", "promotion", "promotion_code", "reader", "refund", "report", "return",
     * "return_disposition", "return_inspection", "return_receipt", "return_resolution",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_payment_retry",
     * "tax_calculation_callback", "tax_connection", "test_clock", "ticket".
     */
    "resource_type"?: InputValue<("api_key"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "category"
        | "checkout_session"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "dispute"
        | "environment_grant"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "gift_card"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "inventory_count"
        | "inventory_level"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_transfer"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_invoice"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_edit"
        | "package"
        | "partner_app"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_method"
        | "payment_review"
        | "payment_split"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "platform_fee"
        | "platform_fee_payout"
        | "price_list"
        | "product"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "reader"
        | "refund"
        | "report"
        | "return"
        | "return_disposition"
        | "return_inspection"
        | "return_receipt"
        | "return_resolution"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_payment_retry"
        | "tax_calculation_callback"
        | "tax_connection"
        | "test_clock"
        | "ticket")
        | readonly ("api_key"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "category"
        | "checkout_session"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "dispute"
        | "environment_grant"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "gift_card"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "inventory_count"
        | "inventory_level"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_transfer"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_invoice"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_edit"
        | "package"
        | "partner_app"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_method"
        | "payment_review"
        | "payment_split"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "platform_fee"
        | "platform_fee_payout"
        | "price_list"
        | "product"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "reader"
        | "refund"
        | "report"
        | "return"
        | "return_disposition"
        | "return_inspection"
        | "return_receipt"
        | "return_resolution"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_payment_retry"
        | "tax_calculation_callback"
        | "tax_connection"
        | "test_clock"
        | "ticket")[]>;
    /**
     * Filter by affected resource ID. pattern:
     * ^((ad|afri|ba|bag|bal|bam|baoa|basa|bav|bepevt|betr|bses|btxn|bue|bun|bunc|bup|busrc|caddr|cagr|capsnap|catid|ccaevt|ccop|cdel|cdom|cecr|ch|clg|clla|cn|cna|cnart|cnlease|cnli|cnmut|cof|cpoc|cpop|cs|cscv|cses|cslimr|csrt|ctex|ctg|cus|cver|dca|dcb|dcbr|dcgrp|ddiag|defc|deff|demo|dev|dleg|dls|dlsr|dmet|dmetr|dms|dmsevt|dmslink|dmsopen|dopt|dp|dprof|dprofr|dqt|drate|drev|dreval|dsel|dsle|dti|du|dzone|dzoner|edat|edel|egrt|fbc|fbr|fev|file|fnt|frw|fsu|ful|fw|fwad|fwcmd|fwcon|fwpm|fwss|gc|gcg|gcl|gcn|gcpra|gcr|gct|gfd|hat|hce|hcr|hev|hin|hlk|hnt|hrp|hsl|hsr|hth|hwm|iacr|iaevt|iksevt|iksop|img|indel|inevt|inlf|inv|inv_cmd|invadj|invapp|invart|invc|invcln|invi|invl|invlease|invli|invm|invp|invpa|invpay|invpv|invr|invrea|invrec|invrecln|invrln|invse|invt|invtr|invtrln|iomevt|ipt|ivat|key|li|loc|mac|mace|mbbal|mbclaim|mbe|mbin|mbout|mca|mcdchg|mcdsub|mcfr|mcr|mcra|mcrecon|mcrve|menv|mer|mfa|mfce|mg|mod|mpafc|mpagr|mpfa|mpfc|mre|mrecv|mrp|ms|msa|msg|msinv|msinvl|mso|msu|mtac|ntc|ntf|oacr|oact|oalk|och|ocra|oed|olim|olimas|olra|omp|opahold|opaleg|opaobs|opaop|opard|oparp|opasd|opasgen|opasm|opasp|opat|opaum|opcred|opra|oprhold|opsa|opt|optv|ord|ordisp|org|orp|orr|otpial|otra|ovst|pac|pacr|pact|paog|papp|pasg|pat|patok|pava|pavc|pcae|pcal|pcb|pcfg|pchkr|pcode|pcri|pcrr|pcsch|pdest|peat|pendact|pfbal|pfbt|pfee|pfhi|pfhold|pfi|pfinc|pfloss|pflrec|pfpo|pfr|pfrb|pfrf|pfs|phold|pi|pia|pilm|pinst|piop|pipf|pkg|pki|pl|plan|plcf|ple|plli|plog|pm|pmcr|pmdom|po|poe|polog|ppac|ppd|pppa|pppr|ppta|pra|pref|prl|prlp|prod|promo|prrc|prt|prtn|psact|pses|pset|psetop|psinc|psplit|psrev|psu|pvimg|pvlaunch|pvscn|pvses|pvshare|pvw|ra|rbuy|rcs|rdl|rdr|rdrcfg|rdrpres|recon|ref|rep|ret|retact|retadj|retcmd|retdsp|retfx|retinli|retins|retli|retrc|retrcli|retrepli|retres|retresli|retshli|rev|rl|rli|rlia|rliar|rlima|rlog|rpoe|rpol|rpolv|rprev|rra|rrq|rrsn|rta|rtba|rule|sdmig|sdts|sdtu|set|sfba|sfpd|shp|sli|smf|soffer|spc|spcc|spli|spol|sppd|spr|ssu|sub|tac|tcae|tcb|tcbr|tce|tclk|tcn|test|tip|tkt|trg|txb|usr|var|watt|wdel|whcl|whep|whev|whout|whrc|wid|ws)_[0-9A-HJKMNP-TV-Z]{26}|fwa_[A-Z2-7]+|fwc_[A-Z2-7]+|fwin_[0-9a-f]+|req_([0-9a-f]+|caller_supplied_rate|pickup_distance_loc_[0-9A-HJKMNP-TV-Z]{26}))$.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id"?: InputValue<string>;
    /**
     * Filter by API request log ID associated with the event. pattern:
     * ^rlog_[0-9A-HJKMNP-TV-Z]{26}$. Example: "rlog_01KEZF7C008XJCH6BHA224X46F".
     */
    "api_request_log_id"?: InputValue<string>;
    /**
     * Filter by request ID associated with the event. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by whether the event is synthetic: true returns only synthetic test events, false
     * excludes them. Omit to return all events.
     */
    "test"?: InputValue<boolean>;
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
