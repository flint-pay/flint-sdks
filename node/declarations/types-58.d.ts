import type {
    ImageRequest,
    ImageRequestInput,
    InventoryAllocationConfigurationValue,
    InventoryAllocationConfigurationValueInput
} from './types-25.js';
import type { MetadataPatchRequest, MetadataPatchRequestInput } from './types-34.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { CheckoutBuyerContactRequest, CheckoutBuyerContactRequestInput } from './types-4.js';
import type { CheckoutSubscriptionTermsRequest, CheckoutSubscriptionTermsRequestInput } from './types-5.js';
import type { CreditNoteLineItemRequest, CreditNoteLineItemRequestInput } from './types-12.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type { TaxIdentityPatch, TaxIdentityPatchInput } from './types-57.js';
import type {
    DeliveryLocationSetConfiguration,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationPatchRequest,
    DeliveryMethodConfigurationPatchRequestInput
} from './types-15.js';
import type { DeliveryProfileConfigurationRequest, DeliveryProfileConfigurationRequestInput } from './types-17.js';
import type {
    DeliveryRateCallbackConfigurationPatchRequest,
    DeliveryRateCallbackConfigurationPatchRequestInput
} from './types-18.js';
import type { WebhookSigningMethod, WebhookSigningMethodInput } from './types-61.js';
import type { DeliveryZoneConfiguration, DeliveryZoneConfigurationInput } from './types-19.js';
import type { FulfillmentRecipientRequest, FulfillmentRecipientRequestInput } from './types-22.js';
import type { UpdatePickupFulfillmentDetails, UpdatePickupFulfillmentDetailsInput } from './types-59.js';
import type { UpdateServiceFulfillmentDetails, UpdateServiceFulfillmentDetailsInput } from './types-60.js';
import type { InventoryCountObservationRequest, InventoryCountObservationRequestInput } from './types-26.js';
import type { InventorySourceSystemRequest, InventorySourceSystemRequestInput } from './types-28.js';
import type {
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyInput,
    InvoiceCollectionRequest,
    InvoiceCollectionRequestInput
} from './types-29.js';
import type {
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationInput,
    InvoicePaymentDueRequest,
    InvoicePaymentDueRequestInput
} from './types-30.js';
import type { InvoiceScheduleEntryWrite, InvoiceScheduleEntryWriteInput } from './types-31.js';
import type { GiftCardPurchaseRecipientPatchRequest, GiftCardPurchaseRecipientPatchRequestInput } from './types-24.js';
import type { OrderCalculatedLineItemTax, OrderCalculatedLineItemTaxInput } from './types-36.js';
import type { OrderLineItemModifierRequest, OrderLineItemModifierRequestInput } from './types-37.js';
import type { SubscribedLineRequest, SubscribedLineRequestInput } from './types-53.js';
import type { LocationCoordinate } from './types-32.js';
import type { LocationCoordinateRequestInput } from './types-33.js';
/** The request body for: Transition a gift card. */
export type TransitionGiftCardRequest = ({
    /** Value enum: "freeze", "unfreeze", "close". */
    "action": "freeze" | "unfreeze" | "close" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
})
    & ((Exclude<TransitionGiftCardRequestFreeze & object, readonly unknown[]>)
    | (Exclude<TransitionGiftCardRequestWithoutReason & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `freeze` variant of `TransitionGiftCardRequest`. */
export type TransitionGiftCardRequestFreeze = ({
    /** Value enum: "freeze". */
    "action": "freeze" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason": "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
})
    & ({
    /** Value enum: "freeze". */
    "action": unknown;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason": "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
});
/** The `freeze` variant of `TransitionGiftCardRequest`. */
export type TransitionGiftCardRequestFreezeInput = ({
    /** Value enum: "freeze". */
    "action": "freeze";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason": "suspicious_activity" | "customer_request" | "support_issue";
})
    & ({
    /** Value enum: "freeze". */
    "action": ("freeze") & ("freeze");
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason": "suspicious_activity" | "customer_request" | "support_issue";
});
/** The request body for: Transition a gift card. */
export type TransitionGiftCardRequestInput = ({
    /** Value enum: "freeze", "unfreeze", "close". */
    "action": "freeze" | "unfreeze" | "close";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue";
})
    & ((Exclude<TransitionGiftCardRequestFreezeInput & object, readonly unknown[]>)
    | (Exclude<TransitionGiftCardRequestWithoutReasonInput & object, readonly unknown[]>));
/**
 * The `close` variant of `TransitionGiftCardRequest`. The `unfreeze` variant of
 * `TransitionGiftCardRequest`.
 */
export type TransitionGiftCardRequestWithoutReason = ({
    /** Value enum: "unfreeze", "close". */
    "action": "unfreeze" | "close" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
})
    & (({
    /** Value enum: "unfreeze", "close". */
    "action": unknown;
}));
/**
 * The `close` variant of `TransitionGiftCardRequest`. The `unfreeze` variant of
 * `TransitionGiftCardRequest`.
 */
export type TransitionGiftCardRequestWithoutReasonInput = ({
    /** Value enum: "unfreeze", "close". */
    "action": "unfreeze" | "close";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue";
})
    & (({
    /** Value enum: "unfreeze", "close". */
    "action": "unfreeze" | "close";
})
    & ({
    "reason"?: never;
}));
/** The request body for: Update an API key. */
export type UpdateAPIKeyRequest = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "full", "read_only",
     * "restricted".
     */
    "access"?: "full" | "read_only" | "restricted" | (string & {});
    /**
     * Resource version last read by the caller. Required when access or scopes is present.
     * Optional for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format:
     * date-time. minLength: 1.
     */
    "expires_at"?: string | null;
    /** minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
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
})
    & ((({
    /** Value enum: "full". */
    "access": unknown;
}))
    | (({
    /** Value enum: "read_only". */
    "access": unknown;
}))
    | ({
    /** Value enum: "restricted". */
    "access": unknown;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
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
})
    | (unknown)
    | (Record<string, unknown>));
/** The request body for: Update an API key. */
export type UpdateAPIKeyRequestInput = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "full", "read_only",
     * "restricted".
     */
    "access"?: "full" | "read_only" | "restricted";
    /**
     * Resource version last read by the caller. Required when access or scopes is present.
     * Optional for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format:
     * date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date | null;
    /** minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
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
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
})
    & ((({
    /** Value enum: "full". */
    "access": ("full") & ("full");
})
    & ({
    "scopes"?: never;
}))
    | (({
    /** Value enum: "read_only". */
    "access": ("read_only") & ("read_only");
})
    & ({
    "scopes"?: never;
}))
    | ({
    /** Value enum: "restricted". */
    "access": ("restricted") & ("restricted");
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
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
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
})
    | ((({
    "access"?: never;
}) & ({
    "scopes"?: never;
}))));
/**
 * A component to keep or add when updating a bundle, with its variant, quantity, position, and
 * delivery profile.
 */
export type UpdateBundleComponentRequest = {
    /**
     * Identifier of an existing component to retain. Omit it to add a new component. minLength: 1.
     * pattern: ^bunc_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "bundle_component_id"?: string;
    /**
     * Component delivery profile override. Omit to inherit the variant's profile. Send null to
     * clear it. minLength: 1.
     */
    "delivery_profile_id"?: string | null;
    /** Display order among the bundle's components, starting at zero. Format: int32. minimum: 0. */
    "position"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Identifier of the product variant included in the bundle. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_id": string;
};
/**
 * A component to keep or add when updating a bundle, with its variant, quantity, position, and
 * delivery profile.
 */
export type UpdateBundleComponentRequestInput = UpdateBundleComponentRequest;
/**
 * Send only fields to change. Omitted fields keep their stored values. null clears nullable
 * fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE.
 * Metadata merges by key, with at most 50 keys after merging.
 */
export type UpdateBundleRequest = ({
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Replaces all bundle components atomically. Include an existing bundle_component_id to retain
     * a member. Omitted members are removed. All must share taxable and line_item_tax_category; an
     * unset category equals only another unset category. Components are compared with the first
     * input component, with a NOT_ALLOWED detail at each differing components[index].variant_id.
     * Null is not accepted. [] (Value): {@link UpdateBundleComponentRequest}. A component to keep
     * or add when updating a bundle, with its variant, quantity, position, and delivery profile.
     */
    "components"?: Array<UpdateBundleComponentRequest>;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Resource version last read by the caller. Required when components or images is present.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
    "modifier_set_id"?: string | null;
    /** Bundle name shown to buyers. minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "sku"?: string | null;
    /**
     * Whether the bundle is active or inactive. An inactive bundle cannot be sold. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
});
/**
 * Send only fields to change. Omitted fields keep their stored values. null clears nullable
 * fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE.
 * Metadata merges by key, with at most 50 keys after merging.
 */
export type UpdateBundleRequestInput = ({
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Replaces all bundle components atomically. Include an existing bundle_component_id to retain
     * a member. Omitted members are removed. All must share taxable and line_item_tax_category; an
     * unset category equals only another unset category. Components are compared with the first
     * input component, with a NOT_ALLOWED detail at each differing components[index].variant_id.
     * Null is not accepted. [] (Value): {@link UpdateBundleComponentRequestInput}. A component to
     * keep or add when updating a bundle, with its variant, quantity, position, and delivery
     * profile.
     */
    "components"?: Array<UpdateBundleComponentRequestInput>;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Resource version last read by the caller. Required when components or images is present.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
    "modifier_set_id"?: string | null;
    /** Bundle name shown to buyers. minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "sku"?: string | null;
    /**
     * Whether the bundle is active or inactive. An inactive bundle cannot be sold. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
});
/** The request body for: Update category. */
export type UpdateCategoryRequest = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Category version last read by the caller. Optional for updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
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
    /** Category name shown to buyers. minLength: 1. maxLength: 100. */
    "name"?: string;
};
/** The request body for: Update category. */
export type UpdateCategoryRequestInput = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Category version last read by the caller. Optional for updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
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
    /** Category name shown to buyers. minLength: 1. maxLength: 100. */
    "name"?: string;
};
/** The request body for: Update checkout session. */
export type UpdateCheckoutSessionRequest = {
    /**
     * Checkout session credentials only. Saves the contact the buyer entered while the session is
     * open. A patch object: omitted fields are unchanged, and null clears a field. A merchant
     * credential that sends buyer_contact receives CHECKOUT_SESSION_UPDATE_FIELD_NOT_ALLOWED.
     * Buyer contact to supply with payment or save during checkout. Send at least one field.
     * Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout
     * session updates keep omitted fields and accept null to clear a field. Payment requests do
     * not accept null. minProperties: 1.
     */
    "buyer_contact"?: CheckoutBuyerContactRequest;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to leave unchanged;
     * send null to clear. minLength: 1. maxLength: 255.
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
     * Subscription plan sessions only. The billing interval and quantity the buyer chose from
     * subscription_terms.billing_interval_options and quantity_options. Send billing_interval and
     * billing_interval_count together. Accepted from your API key or the checkout credential.
     * Subscription terms you set on a checkout session: billing interval, interval count, and
     * quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequest;
    /**
     * Checkout credentials only. A valid IANA timezone, such as America/Toronto, used for
     * Flint-sent receipts. Omission keeps the previous observation; null is invalid. minLength: 1.
     * maxLength: 64.
     */
    "timezone"?: string;
};
/** The request body for: Update checkout session. */
export type UpdateCheckoutSessionRequestInput = {
    /**
     * Checkout session credentials only. Saves the contact the buyer entered while the session is
     * open. A patch object: omitted fields are unchanged, and null clears a field. A merchant
     * credential that sends buyer_contact receives CHECKOUT_SESSION_UPDATE_FIELD_NOT_ALLOWED.
     * Buyer contact to supply with payment or save during checkout. Send at least one field.
     * Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout
     * session updates keep omitted fields and accept null to clear a field. Payment requests do
     * not accept null. minProperties: 1.
     */
    "buyer_contact"?: CheckoutBuyerContactRequestInput;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to leave unchanged;
     * send null to clear. minLength: 1. maxLength: 255.
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
     * Subscription plan sessions only. The billing interval and quantity the buyer chose from
     * subscription_terms.billing_interval_options and quantity_options. Send billing_interval and
     * billing_interval_count together. Accepted from your API key or the checkout credential.
     * Subscription terms you set on a checkout session: billing interval, interval count, and
     * quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequestInput;
    /**
     * Checkout credentials only. A valid IANA timezone, such as America/Toronto, used for
     * Flint-sent receipts. Omission keeps the previous observation; null is invalid. minLength: 1.
     * maxLength: 64.
     */
    "timezone"?: string;
};
/** The request body for: Update credit note. */
export type UpdateCreditNoteRequest = ({
    /**
     * Credit note version last read. Required when line_items is present. Required when any of
     * these fields is present: line_items. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Full replacement of the draft's owned line collection; requires expected_version.
     * Recalculates corrections from current remaining creditable pools. After
     * CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed, replace the
     * existing corrections using the credit note's current version, review the new amounts, and
     * issue again. Scalar memo or reason changes do not reprice lines. [] (Value): {@link
     * CreditNoteLineItemRequest}. A credit note line you supply when creating or updating a credit
     * note: the invoice line item it credits and how much, or an existing line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequest>;
    /** Send null to clear it. minLength: 1. maxLength: 4096. */
    "memo"?: string | null;
    /**
     * Why the invoice is being corrected: returned_goods, order_adjustment, billing_error,
     * goodwill, or other. Cannot be null; omit it to keep the current reason. Value enum:
     * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason"?: "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
});
/** The request body for: Update credit note. */
export type UpdateCreditNoteRequestInput = ({
    /**
     * Credit note version last read. Required when line_items is present. Required when any of
     * these fields is present: line_items. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Full replacement of the draft's owned line collection; requires expected_version.
     * Recalculates corrections from current remaining creditable pools. After
     * CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed, replace the
     * existing corrections using the credit note's current version, review the new amounts, and
     * issue again. Scalar memo or reason changes do not reprice lines. [] (Value): {@link
     * CreditNoteLineItemRequestInput}. A credit note line you supply when creating or updating a
     * credit note: the invoice line item it credits and how much, or an existing line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequestInput>;
    /** Send null to clear it. minLength: 1. maxLength: 4096. */
    "memo"?: string | null;
    /**
     * Why the invoice is being corrected: returned_goods, order_adjustment, billing_error,
     * goodwill, or other. Cannot be null; omit it to keep the current reason. Value enum:
     * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason"?: "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other";
});
/**
 * The request body for: Update a customer address; Update one of the current buyer's addresses.
 * minProperties: 1.
 */
export type UpdateCustomerAddressRequest = {
    /**
     * Replaces the whole postal address. Send every field you want to keep; omitted optional
     * fields such as line2 are removed. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "address"?: AddressRequest;
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Set true to make this the default billing address and remove that default from any other
     * saved address. Set false to clear this default if this address holds it; no other address
     * becomes the default.
     */
    "is_default_billing"?: boolean;
    /**
     * Set true to make this the default shipping address and remove that default from any other
     * saved address. Set false to clear this default if this address holds it; no other address
     * becomes the default.
     */
    "is_default_shipping"?: boolean;
    /**
     * Limited to 100 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. Send null to clear it. minLength: 1. maxLength: 100.
     */
    "label"?: string | null;
    /**
     * E.164 phone number. Limited to 30 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength: 30.
     */
    "phone"?: string | null;
    /**
     * Limited to 255 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name"?: string;
};
/**
 * The request body for: Update a customer address; Update one of the current buyer's addresses.
 * minProperties: 1.
 */
export type UpdateCustomerAddressRequestInput = {
    /**
     * Replaces the whole postal address. Send every field you want to keep; omitted optional
     * fields such as line2 are removed. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "address"?: AddressRequestInput;
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Set true to make this the default billing address and remove that default from any other
     * saved address. Set false to clear this default if this address holds it; no other address
     * becomes the default.
     */
    "is_default_billing"?: boolean;
    /**
     * Set true to make this the default shipping address and remove that default from any other
     * saved address. Set false to clear this default if this address holds it; no other address
     * becomes the default.
     */
    "is_default_shipping"?: boolean;
    /**
     * Limited to 100 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. Send null to clear it. minLength: 1. maxLength: 100.
     */
    "label"?: string | null;
    /**
     * E.164 phone number. Limited to 30 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength: 30.
     */
    "phone"?: string | null;
    /**
     * Limited to 255 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name"?: string;
};
/** The request body for: Update the current buyer's email preferences. minProperties: 1. */
export type UpdateCustomerEmailPreferencesRequest = {
    /** A reminder after leaving checkout without paying. */
    "checkout_reminders"?: boolean;
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** Emails about shipments and deliveries, such as shipped, out for delivery, and delivered. */
    "shipping_updates"?: boolean;
};
/** The request body for: Update the current buyer's email preferences. minProperties: 1. */
export type UpdateCustomerEmailPreferencesRequestInput = UpdateCustomerEmailPreferencesRequest;
/** The request body for: Update customer. */
export type UpdateCustomerRequest = ({
    /** Default payment term for this customer's invoices. Send null to clear it. minLength: 1. */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * The active off_session payment method to use by default. Omit to leave unchanged; null
     * clears it. A change sends customer.updated. minLength: 1.
     */
    "default_payment_method_id"?: string | null;
    /**
     * The customer's email. Omit to leave unchanged; null clears it. Changing it is allowed only
     * when your store hosts its own customer accounts (`customer_account.mode` is
     * `merchant_hosted`). Format: email. minLength: 1. maxLength: 320.
     */
    "email"?: string | null;
    /**
     * Required when tax_identity is null or tax_identity.tax_ids is present. Stale versions return
     * a conflict. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to leave unchanged;
     * null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Internal note about this customer. Omit to leave unchanged; null clears it. minLength: 1. */
    "internal_note"?: string | null;
    /**
     * Flag you set on the customer, for example after checking ID in store. Promotion and delivery
     * rules can match it. Flint does not set it; it is unrelated to customer verifications, which
     * prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
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
    /** Customer name. Omit to leave unchanged; null clears it. minLength: 1. */
    "name"?: string | null;
    /** Customer phone number. Omit to leave unchanged; null clears it. minLength: 1. */
    "phone"?: string | null;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource. Omit to
     * leave unchanged; null clears it. minLength: 1.
     */
    "segment"?: string | null;
    "tax_exempt"?: boolean;
    /**
     *  anyOf[1] (Value): {@link TaxIdentityPatch}. Merchant-provided legal identity displayed on
     * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
     * collection in display order; replacing the array requires the parent's expected_version.
     * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to
     * add one. anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatch) | (null));
});
/** The request body for: Update customer. */
export type UpdateCustomerRequestInput = ({
    /** Default payment term for this customer's invoices. Send null to clear it. minLength: 1. */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * The active off_session payment method to use by default. Omit to leave unchanged; null
     * clears it. A change sends customer.updated. minLength: 1.
     */
    "default_payment_method_id"?: string | null;
    /**
     * The customer's email. Omit to leave unchanged; null clears it. Changing it is allowed only
     * when your store hosts its own customer accounts (`customer_account.mode` is
     * `merchant_hosted`). Format: email. minLength: 1. maxLength: 320.
     */
    "email"?: string | null;
    /**
     * Required when tax_identity is null or tax_identity.tax_ids is present. Stale versions return
     * a conflict. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to leave unchanged;
     * null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Internal note about this customer. Omit to leave unchanged; null clears it. minLength: 1. */
    "internal_note"?: string | null;
    /**
     * Flag you set on the customer, for example after checking ID in store. Promotion and delivery
     * rules can match it. Flint does not set it; it is unrelated to customer verifications, which
     * prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
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
    /** Customer name. Omit to leave unchanged; null clears it. minLength: 1. */
    "name"?: string | null;
    /** Customer phone number. Omit to leave unchanged; null clears it. minLength: 1. */
    "phone"?: string | null;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource. Omit to
     * leave unchanged; null clears it. minLength: 1.
     */
    "segment"?: string | null;
    "tax_exempt"?: boolean;
    /**
     *  anyOf[1] (Value): {@link TaxIdentityPatchInput}. Merchant-provided legal identity displayed
     * on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatchInput) | (null));
});
/**
 * Delivery fulfillment fields to change when updating a fulfillment, such as courier, tracking,
 * and delivery times. Send null to clear a field.
 */
export type UpdateDeliveryFulfillmentDetails = {
    /** Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Time at which the courier collected the order. Send null to clear it. Format: date-time.
     * minLength: 1.
     */
    "courier_pickup_at"?: string | null;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number | null;
    /**
     * Delivery network or merchant fleet provider handling the job. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string | null;
    /**
     * Buyer-safe support number for the courier or merchant fleet. Send null to clear it.
     * minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "delivered_at"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "dispatched_at"?: string | null;
    /**
     * Driver-facing notes for the final handoff. Send null to clear it. minLength: 1. maxLength:
     * 2048.
     */
    "dropoff_notes"?: string | null;
    /**
     * Deadline after which an undelivered job should enter merchant review. Send null to clear it.
     * Format: date-time. minLength: 1.
     */
    "expires_at"?: string | null;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. Send null to clear
     * it. minLength: 1. maxLength: 255.
     */
    "external_delivery_id"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "instructions"?: string | null;
    /** Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean | null;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number | null;
    /**
     * Time at which the order became ready for courier pickup. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "ready_at"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "service_area_id"?: string | null;
    /** minLength: 1. */
    "timezone"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to
     * clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "window_end_at"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "window_start_at"?: string | null;
};
/**
 * Delivery fulfillment fields to change when updating a fulfillment, such as courier, tracking,
 * and delivery times. Send null to clear a field.
 */
export type UpdateDeliveryFulfillmentDetailsInput = {
    /** Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Time at which the courier collected the order. Send null to clear it. Format: date-time.
     * minLength: 1.
     */
    "courier_pickup_at"?: string | globalThis.Date | null;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number | null;
    /**
     * Delivery network or merchant fleet provider handling the job. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string | null;
    /**
     * Buyer-safe support number for the courier or merchant fleet. Send null to clear it.
     * minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "delivered_at"?: string | globalThis.Date | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "dispatched_at"?: string | globalThis.Date | null;
    /**
     * Driver-facing notes for the final handoff. Send null to clear it. minLength: 1. maxLength:
     * 2048.
     */
    "dropoff_notes"?: string | null;
    /**
     * Deadline after which an undelivered job should enter merchant review. Send null to clear it.
     * Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date | null;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. Send null to clear
     * it. minLength: 1. maxLength: 255.
     */
    "external_delivery_id"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "instructions"?: string | null;
    /** Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean | null;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number | null;
    /**
     * Time at which the order became ready for courier pickup. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "ready_at"?: string | globalThis.Date | null;
    /** Send null to clear it. minLength: 1. */
    "service_area_id"?: string | null;
    /** minLength: 1. */
    "timezone"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to
     * clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date | null;
};
/** The request body for: Update delivery location set. */
export type UpdateDeliveryLocationSetRequest = ({
    /**
     * location_ids replaces the set's Locations when present; leave configuration out to keep
     * them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The
     * location IDs in a delivery location set.
     */
    "configuration"?: DeliveryLocationSetConfiguration;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "name"?: string;
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * location_ids replaces the set's Locations when present; leave configuration out to keep
     * them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The
     * location IDs in a delivery location set.
     */
    "configuration": DeliveryLocationSetConfiguration;
})
    | ({
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
    "metadata": ((MetadataPatchRequest) | (null));
})
    | (Record<string, unknown>));
/** The request body for: Update delivery location set. */
export type UpdateDeliveryLocationSetRequestInput = ({
    /**
     * location_ids replaces the set's Locations when present; leave configuration out to keep
     * them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The
     * location IDs in a delivery location set.
     */
    "configuration"?: DeliveryLocationSetConfigurationInput;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "name"?: string;
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * location_ids replaces the set's Locations when present; leave configuration out to keep
     * them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The
     * location IDs in a delivery location set.
     */
    "configuration": DeliveryLocationSetConfigurationInput;
})
    | ({
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
    "metadata": ((MetadataPatchRequestInput) | (null));
}));
/** The request body for: Update delivery method. */
export type UpdateDeliveryMethodRequest = ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Each key you
     * send replaces that part of the configuration whole. Null removes an optional key, as each
     * field describes. Arrays can't be null: send [] to clear recipient_requirements or
     * quote_input_fields. pricing.rate_table.rates is an owned child collection: include
     * delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to
     * remove it. The result must be a configuration you could create, including pickup_mode for
     * pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys
     * you send change; keys you leave out keep their current values. Each key you send replaces
     * that part of the configuration whole. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryMethodConfigurationPatchRequest;
    /** Delivery method description. Send null to clear it. minLength: 1. */
    "description"?: string | null;
    /** Format: int32. */
    "display_position"?: number;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration, name, description, display_position,
     * recommendation_priority. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "name"?: string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Send null to clear it. Format: int32.
     */
    "recommendation_priority"?: number | null;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Each key you
     * send replaces that part of the configuration whole. Null removes an optional key, as each
     * field describes. Arrays can't be null: send [] to clear recipient_requirements or
     * quote_input_fields. pricing.rate_table.rates is an owned child collection: include
     * delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to
     * remove it. The result must be a configuration you could create, including pickup_mode for
     * pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys
     * you send change; keys you leave out keep their current values. Each key you send replaces
     * that part of the configuration whole. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryMethodConfigurationPatchRequest;
})
    | ({
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
    "metadata": ((MetadataPatchRequest) | (null));
})
    | ({
    /** Delivery method description. Send null to clear it. minLength: 1. */
    "description": string | null;
})
    | ({
    /** Format: int32. */
    "display_position": number;
})
    | ({
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Send null to clear it. Format: int32.
     */
    "recommendation_priority": number | null;
})
    | ({
    /** Value enum: "inactive", "active". */
    "status": "inactive" | "active" | (string & {});
})
    | (Record<string, unknown>));
/** The request body for: Update delivery method. */
export type UpdateDeliveryMethodRequestInput = ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Each key you
     * send replaces that part of the configuration whole. Null removes an optional key, as each
     * field describes. Arrays can't be null: send [] to clear recipient_requirements or
     * quote_input_fields. pricing.rate_table.rates is an owned child collection: include
     * delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to
     * remove it. The result must be a configuration you could create, including pickup_mode for
     * pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys
     * you send change; keys you leave out keep their current values. Each key you send replaces
     * that part of the configuration whole. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryMethodConfigurationPatchRequestInput;
    /** Delivery method description. Send null to clear it. minLength: 1. */
    "description"?: string | null;
    /** Format: int32. */
    "display_position"?: number;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration, name, description, display_position,
     * recommendation_priority. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "name"?: string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Send null to clear it. Format: int32.
     */
    "recommendation_priority"?: number | null;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Each key you
     * send replaces that part of the configuration whole. Null removes an optional key, as each
     * field describes. Arrays can't be null: send [] to clear recipient_requirements or
     * quote_input_fields. pricing.rate_table.rates is an owned child collection: include
     * delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to
     * remove it. The result must be a configuration you could create, including pickup_mode for
     * pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys
     * you send change; keys you leave out keep their current values. Each key you send replaces
     * that part of the configuration whole. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryMethodConfigurationPatchRequestInput;
})
    | ({
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
    "metadata": ((MetadataPatchRequestInput) | (null));
})
    | ({
    /** Delivery method description. Send null to clear it. minLength: 1. */
    "description": string | null;
})
    | ({
    /** Format: int32. */
    "display_position": number;
})
    | ({
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Send null to clear it. Format: int32.
     */
    "recommendation_priority": number | null;
})
    | ({
    /** Value enum: "inactive", "active". */
    "status": "inactive" | "active";
}));
/** The request body for: Update delivery profile. */
export type UpdateDeliveryProfileRequest = ({
    /**
     * Send the whole profile configuration. It replaces the current one; leave configuration out
     * to keep it. requirement none allows no other keys, and quote profiles require origin_policy,
     * combination_policy, and splitting_policy. Null and an empty object are invalid. Requires
     * expected_version. Delivery planning settings you supply when creating or updating a delivery
     * profile. Which fields are allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration"?: DeliveryProfileConfigurationRequest;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Send true to make this active profile the physical catalog default. Can be combined with
     * other mutable fields in one atomic update. Send expected_version to fence the update against
     * this profile's current version. Sending only is_default true for the current default is a
     * no-op: its version stays unchanged and no events are emitted. False is invalid; make another
     * profile the default instead. Value enum: true.
     */
    "is_default"?: boolean;
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
    /** minLength: 1. */
    "name"?: string;
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Send the whole profile configuration. It replaces the current one; leave configuration out
     * to keep it. requirement none allows no other keys, and quote profiles require origin_policy,
     * combination_policy, and splitting_policy. Null and an empty object are invalid. Requires
     * expected_version. Delivery planning settings you supply when creating or updating a delivery
     * profile. Which fields are allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequest;
})
    | ({
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
    "metadata": ((MetadataPatchRequest) | (null));
})
    | ({
    /**
     * Send true to make this active profile the physical catalog default. Can be combined with
     * other mutable fields in one atomic update. Send expected_version to fence the update against
     * this profile's current version. Sending only is_default true for the current default is a
     * no-op: its version stays unchanged and no events are emitted. False is invalid; make another
     * profile the default instead. Value enum: true.
     */
    "is_default": boolean;
})
    | (Record<string, unknown>));
/** The request body for: Update delivery profile. */
export type UpdateDeliveryProfileRequestInput = ({
    /**
     * Send the whole profile configuration. It replaces the current one; leave configuration out
     * to keep it. requirement none allows no other keys, and quote profiles require origin_policy,
     * combination_policy, and splitting_policy. Null and an empty object are invalid. Requires
     * expected_version. Delivery planning settings you supply when creating or updating a delivery
     * profile. Which fields are allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration"?: DeliveryProfileConfigurationRequestInput;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Send true to make this active profile the physical catalog default. Can be combined with
     * other mutable fields in one atomic update. Send expected_version to fence the update against
     * this profile's current version. Sending only is_default true for the current default is a
     * no-op: its version stays unchanged and no events are emitted. False is invalid; make another
     * profile the default instead. Value enum: true.
     */
    "is_default"?: true;
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
    /** minLength: 1. */
    "name"?: string;
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Send the whole profile configuration. It replaces the current one; leave configuration out
     * to keep it. requirement none allows no other keys, and quote profiles require origin_policy,
     * combination_policy, and splitting_policy. Null and an empty object are invalid. Requires
     * expected_version. Delivery planning settings you supply when creating or updating a delivery
     * profile. Which fields are allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequestInput;
})
    | ({
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
    "metadata": ((MetadataPatchRequestInput) | (null));
})
    | ({
    /**
     * Send true to make this active profile the physical catalog default. Can be combined with
     * other mutable fields in one atomic update. Send expected_version to fence the update against
     * this profile's current version. Sending only is_default true for the current default is a
     * no-op: its version stays unchanged and no events are emitted. False is invalid; make another
     * profile the default instead. Value enum: true.
     */
    "is_default": true;
}));
/** The request body for: Update delivery rate callback. */
export type UpdateDeliveryRateCallbackRequest = ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Null restores a
     * key's default, as each field describes. The result must be a configuration you could create.
     * Requires expected_version. An empty configuration is invalid. Only the keys you send change;
     * keys you leave out keep their current values. Null restores a key's default, as each field
     * describes. The result must be a configuration you could create. Requires expected_version.
     * An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryRateCallbackConfigurationPatchRequest;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration, signing_methods. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to
     * add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version.
     * minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethod}. jwt uses Flint's public JWKS. hmac uses a shared secret and Standard
     * Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Null restores a
     * key's default, as each field describes. The result must be a configuration you could create.
     * Requires expected_version. An empty configuration is invalid. Only the keys you send change;
     * keys you leave out keep their current values. Null restores a key's default, as each field
     * describes. The result must be a configuration you could create. Requires expected_version.
     * An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryRateCallbackConfigurationPatchRequest;
})
    | ({
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to
     * add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version.
     * minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethod}. jwt uses Flint's public JWKS. hmac uses a shared secret and Standard
     * Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods": Array<WebhookSigningMethod>;
})
    | ({
    /** Value enum: "inactive", "active". */
    "status": "inactive" | "active" | (string & {});
})
    | (Record<string, unknown>));
/** The request body for: Update delivery rate callback. */
export type UpdateDeliveryRateCallbackRequestInput = ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Null restores a
     * key's default, as each field describes. The result must be a configuration you could create.
     * Requires expected_version. An empty configuration is invalid. Only the keys you send change;
     * keys you leave out keep their current values. Null restores a key's default, as each field
     * describes. The result must be a configuration you could create. Requires expected_version.
     * An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryRateCallbackConfigurationPatchRequestInput;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration, signing_methods. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to
     * add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version.
     * minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethodInput}. jwt uses Flint's public JWKS. hmac uses a shared secret and
     * Standard Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Null restores a
     * key's default, as each field describes. The result must be a configuration you could create.
     * Requires expected_version. An empty configuration is invalid. Only the keys you send change;
     * keys you leave out keep their current values. Null restores a key's default, as each field
     * describes. The result must be a configuration you could create. Requires expected_version.
     * An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryRateCallbackConfigurationPatchRequestInput;
})
    | ({
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to
     * add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version.
     * minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethodInput}. jwt uses Flint's public JWKS. hmac uses a shared secret and
     * Standard Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods": Array<WebhookSigningMethodInput>;
})
    | ({
    /** Value enum: "inactive", "active". */
    "status": "inactive" | "active";
}));
/** The request body for: Update delivery zone. */
export type UpdateDeliveryZoneRequest = ({
    /**
     * Send the whole geography. It replaces the zone's current geography; leave configuration out
     * to keep it. Null and an empty object are invalid. Requires expected_version. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "configuration"?: DeliveryZoneConfiguration;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "name"?: string;
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Send the whole geography. It replaces the zone's current geography; leave configuration out
     * to keep it. Null and an empty object are invalid. Requires expected_version. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfiguration;
})
    | ({
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
    "metadata": ((MetadataPatchRequest) | (null));
})
    | (Record<string, unknown>));
/** The request body for: Update delivery zone. */
export type UpdateDeliveryZoneRequestInput = ({
    /**
     * Send the whole geography. It replaces the zone's current geography; leave configuration out
     * to keep it. Null and an empty object are invalid. Requires expected_version. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "configuration"?: DeliveryZoneConfigurationInput;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "name"?: string;
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Send the whole geography. It replaces the zone's current geography; leave configuration out
     * to keep it. Null and an empty object are invalid. Requires expected_version. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfigurationInput;
})
    | ({
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
    "metadata": ((MetadataPatchRequestInput) | (null));
}));
/** The request body for: Update device. */
export type UpdateDeviceRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** Send null to clear it. minLength: 1. */
    "location_id"?: string | null;
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
    /** minLength: 1. */
    "name"?: string;
};
/** The request body for: Update device. */
export type UpdateDeviceRequestInput = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** Send null to clear it. minLength: 1. */
    "location_id"?: string | null;
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
    /** minLength: 1. */
    "name"?: string;
};
/**
 * Digital fulfillment fields to change when updating a fulfillment: delivery time and URL. Send
 * null to clear a field.
 */
export type UpdateDigitalFulfillmentDetails = {
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "delivered_at"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "delivery_url"?: string | null;
};
/**
 * Digital fulfillment fields to change when updating a fulfillment: delivery time and URL. Send
 * null to clear a field.
 */
export type UpdateDigitalFulfillmentDetailsInput = {
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "delivered_at"?: string | globalThis.Date | null;
    /** Send null to clear it. minLength: 1. */
    "delivery_url"?: string | null;
};
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages. A supplied detail field must match the stored fulfillment type. Omit details for
 * metadata-only updates. Even null detail fields count toward exclusivity.
 */
export type UpdateFulfillmentRequest = ({
    /**
     * Completion evidence timestamp. Use only to correct completion evidence on an already
     * completed fulfillment; complete pending fulfillments with POST /transitions. Send null to
     * clear it. Format: date-time. minLength: 1.
     */
    "completed_at"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "customer_id"?: string | null;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. Send null to clear it. minLength: 1.
     */
    "device_id"?: string | null;
    /**
     *  anyOf[1] (Value): {@link UpdateDigitalFulfillmentDetails}. Digital fulfillment fields to
     * change when updating a fulfillment: delivery time and URL. Send null to clear a field.
     * anyOf[2] (Value): null.
     */
    "digital_details"?: ((UpdateDigitalFulfillmentDetails) | (null));
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     *  anyOf[1] (Value): {@link UpdateDeliveryFulfillmentDetails}. Delivery fulfillment fields to
     * change when updating a fulfillment, such as courier, tracking, and delivery times. Send null
     * to clear a field. anyOf[2] (Value): null.
     */
    "local_delivery_details"?: ((UpdateDeliveryFulfillmentDetails) | (null));
    /** Send null to clear it. minLength: 1. */
    "location_id"?: string | null;
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
     *  anyOf[1] (Value): {@link UpdatePickupFulfillmentDetails}. Pickup fulfillment fields to
     * change when updating a fulfillment, such as location, pickup window, and curbside details.
     * Send null to clear a field. anyOf[2] (Value): null.
     */
    "pickup_details"?: ((UpdatePickupFulfillmentDetails) | (null));
    /**
     *  anyOf[1] (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     * anyOf[2] (Value): null.
     */
    "recipient"?: ((FulfillmentRecipientRequest) | (null));
    /**
     *  anyOf[1] (Value): {@link UpdateServiceFulfillmentDetails}. Service fulfillment fields to
     * change when updating a fulfillment: scheduled times, completion time, and notes. Send null
     * to clear a field. anyOf[2] (Value): null.
     */
    "service_details"?: ((UpdateServiceFulfillmentDetails) | (null));
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages. A supplied detail field must match the stored fulfillment type. Omit details for
 * metadata-only updates. Even null detail fields count toward exclusivity.
 */
export type UpdateFulfillmentRequestInput = ({
    /**
     * Completion evidence timestamp. Use only to correct completion evidence on an already
     * completed fulfillment; complete pending fulfillments with POST /transitions. Send null to
     * clear it. Format: date-time. minLength: 1.
     */
    "completed_at"?: string | globalThis.Date | null;
    /** Send null to clear it. minLength: 1. */
    "customer_id"?: string | null;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. Send null to clear it. minLength: 1.
     */
    "device_id"?: string | null;
    /**
     *  anyOf[1] (Value): {@link UpdateDigitalFulfillmentDetailsInput}. Digital fulfillment fields
     * to change when updating a fulfillment: delivery time and URL. Send null to clear a field.
     * anyOf[2] (Value): null.
     */
    "digital_details"?: ((UpdateDigitalFulfillmentDetailsInput) | (null));
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     *  anyOf[1] (Value): {@link UpdateDeliveryFulfillmentDetailsInput}. Delivery fulfillment
     * fields to change when updating a fulfillment, such as courier, tracking, and delivery times.
     * Send null to clear a field. anyOf[2] (Value): null.
     */
    "local_delivery_details"?: ((UpdateDeliveryFulfillmentDetailsInput) | (null));
    /** Send null to clear it. minLength: 1. */
    "location_id"?: string | null;
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
     *  anyOf[1] (Value): {@link UpdatePickupFulfillmentDetailsInput}. Pickup fulfillment fields to
     * change when updating a fulfillment, such as location, pickup window, and curbside details.
     * Send null to clear a field. anyOf[2] (Value): null.
     */
    "pickup_details"?: ((UpdatePickupFulfillmentDetailsInput) | (null));
    /**
     *  anyOf[1] (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply
     * when creating or updating a fulfillment: name, email, phone, address, and handling
     * instructions. anyOf[2] (Value): null.
     */
    "recipient"?: ((FulfillmentRecipientRequestInput) | (null));
    /**
     *  anyOf[1] (Value): {@link UpdateServiceFulfillmentDetailsInput}. Service fulfillment fields
     * to change when updating a fulfillment: scheduled times, completion time, and notes. Send
     * null to clear a field. anyOf[2] (Value): null.
     */
    "service_details"?: ((UpdateServiceFulfillmentDetailsInput) | (null));
})
    & (({
    "pickup_details"?: never;
} | {
    "local_delivery_details"?: never;
}))
    & (({
    "pickup_details"?: never;
} | {
    "digital_details"?: never;
}))
    & (({
    "pickup_details"?: never;
} | {
    "service_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
} | {
    "digital_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
} | {
    "service_details"?: never;
}))
    & (({
    "digital_details"?: never;
} | {
    "service_details"?: never;
}));
/** The request body for: Update a gift card. */
export type UpdateGiftCardRequest = {
    /** Omission preserves the association; null clears it. minLength: 1. */
    "customer_id"?: string | null;
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission preserves the
     * association; null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
};
/** The request body for: Update a gift card. */
export type UpdateGiftCardRequestInput = UpdateGiftCardRequest;
/** The request body for: Update inventory allocation policy. */
export type UpdateInventoryAllocationPolicyRequest = ({
    /**
     * Requires expected_version. Routing rules for an inventory allocation policy: ranked groups
     * of Locations, whether demand can be split, and how many Locations one assignment may use.
     */
    "configuration"?: InventoryAllocationConfigurationValue;
    /** Required when any of these fields is present: configuration. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "name"?: string;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
});
/** The request body for: Update inventory allocation policy. */
export type UpdateInventoryAllocationPolicyRequestInput = ({
    /**
     * Requires expected_version. Routing rules for an inventory allocation policy: ranked groups
     * of Locations, whether demand can be split, and how many Locations one assignment may use.
     */
    "configuration"?: InventoryAllocationConfigurationValueInput;
    /** Required when any of these fields is present: configuration. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "name"?: string;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
});
/** The request body for: Update inventory count. */
export type UpdateInventoryCountRequest = ({
    /** Format: uint64. minimum: 1. */
    "expected_version": number;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Complete replacement containing every count item exactly once. Every physical version must
     * match current stock or the entire save is refused. Recount affected items before submitting
     * fresh fences. minItems: 1. maxItems: 100. [] (Value): {@link
     * InventoryCountObservationRequest}. A counted quantity for one item in an inventory count,
     * with the physical version it was read at.
     */
    "observations": Array<InventoryCountObservationRequest>;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/** The request body for: Update inventory count. */
export type UpdateInventoryCountRequestInput = ({
    /** Format: uint64. minimum: 1. */
    "expected_version": number;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Complete replacement containing every count item exactly once. Every physical version must
     * match current stock or the entire save is refused. Recount affected items before submitting
     * fresh fences. minItems: 1. maxItems: 100. [] (Value): {@link
     * InventoryCountObservationRequestInput}. A counted quantity for one item in an inventory
     * count, with the physical version it was read at.
     */
    "observations": Array<InventoryCountObservationRequestInput>;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/** The request body for: Update inventory item. */
export type UpdateInventoryItemRequest = {
    /** Send null to clear it. minLength: 1. */
    "barcode"?: string | null;
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "name"?: string;
    /** Send null to clear it. minLength: 1. */
    "sku"?: string | null;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Update inventory item. */
export type UpdateInventoryItemRequestInput = {
    /** Send null to clear it. minLength: 1. */
    "barcode"?: string | null;
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "name"?: string;
    /** Send null to clear it. minLength: 1. */
    "sku"?: string | null;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/** The request body for: Update inventory level. */
export type UpdateInventoryLevelRequest = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "safety_stock_quantity": number;
};
/** The request body for: Update inventory level. */
export type UpdateInventoryLevelRequestInput = UpdateInventoryLevelRequest;
/** The request body for: Update inventory reservation. */
export type UpdateInventoryReservationRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * New hold deadline: after now and at most 24 hours from now. It can be earlier or later than
     * the current deadline. Format: date-time. minLength: 1.
     */
    "expires_at": string;
};
/** The request body for: Update inventory reservation. */
export type UpdateInventoryReservationRequestInput = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * New hold deadline: after now and at most 24 hours from now. It can be earlier or later than
     * the current deadline. Format: date-time. minLength: 1.
     */
    "expires_at": string | globalThis.Date;
};
/** The request body for: Update inventory transfer. */
export type UpdateInventoryTransferRequest = ({
    /** Required when any of these fields is present: lines. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Replace the transfer's owned lines collection atomically. Lines have no lifecycle outside
     * this transfer. Include every line to keep, with its inventory_transfer_line_id; omit it to
     * remove it. Lines with departed or canceled quantity must remain. Requires expected_version
     * when present. minItems: 1. maxItems: 100. [] (Value): object. [].condition (Optional):
     * string. Default: "sellable". Value enum: "sellable", "quality_control", "damaged",
     * "quarantined". [].inventory_item_id (Required): string. minLength: 1.
     * [].inventory_transfer_line_id (Optional): string. Existing line in this transfer. Omit to
     * add a line. minLength: 1. [].requested_quantity (Required): integer. Format: int64. minimum:
     * 1.
     */
    "lines"?: Array<{
        /**
         * Default: "sellable". Value enum: "sellable", "quality_control", "damaged",
         * "quarantined".
         */
        "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
        /** minLength: 1. */
        "inventory_item_id": string;
        /** Existing line in this transfer. Omit to add a line. minLength: 1. */
        "inventory_transfer_line_id"?: string;
        /** Format: int64. minimum: 1. */
        "requested_quantity": number;
    }>;
    /** Send null to clear it. minLength: 1. */
    "note"?: string | null;
});
/** The request body for: Update inventory transfer. */
export type UpdateInventoryTransferRequestInput = ({
    /** Required when any of these fields is present: lines. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Replace the transfer's owned lines collection atomically. Lines have no lifecycle outside
     * this transfer. Include every line to keep, with its inventory_transfer_line_id; omit it to
     * remove it. Lines with departed or canceled quantity must remain. Requires expected_version
     * when present. minItems: 1. maxItems: 100. [] (Value): object. [].condition (Optional):
     * string. Default: "sellable". Value enum: "sellable", "quality_control", "damaged",
     * "quarantined". [].inventory_item_id (Required): string. minLength: 1.
     * [].inventory_transfer_line_id (Optional): string. Existing line in this transfer. Omit to
     * add a line. minLength: 1. [].requested_quantity (Required): integer. Format: int64. minimum:
     * 1.
     */
    "lines"?: Array<{
        /**
         * Default: "sellable". Value enum: "sellable", "quality_control", "damaged",
         * "quarantined".
         */
        "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined";
        /** minLength: 1. */
        "inventory_item_id": string;
        /** Existing line in this transfer. Omit to add a line. minLength: 1. */
        "inventory_transfer_line_id"?: string;
        /** Format: int64. minimum: 1. */
        "requested_quantity": number;
    }>;
    /** Send null to clear it. minLength: 1. */
    "note"?: string | null;
});
/** The request body for: Update invoice payment term. minProperties: 1. */
export type UpdateInvoicePaymentTermRequest = {
    /**
     * How an invoice due date is calculated from payment terms, such as on receipt, net days, or a
     * day of the month.
     */
    "calculation"?: InvoicePaymentTermCalculation;
    /** Optional version last read by the caller. Format: uint32. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     *  anyOf[1] (Value): {@link InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed
     * amount or a percentage, a grace period in days, and whether Flint applies it automatically.
     * anyOf[2] (Value): null.
     */
    "late_fee_policy"?: ((InvoiceLateFeePolicy) | (null) | (unknown));
    /** minLength: 1. */
    "name"?: string;
};
/** The request body for: Update invoice payment term. minProperties: 1. */
export type UpdateInvoicePaymentTermRequestInput = {
    /**
     * How an invoice due date is calculated from payment terms, such as on receipt, net days, or a
     * day of the month.
     */
    "calculation"?: InvoicePaymentTermCalculationInput;
    /** Optional version last read by the caller. Format: uint32. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     *  anyOf[1] (Value): {@link InvoiceLateFeePolicyInput}. A late fee for overdue invoices: a
     * fixed amount or a percentage, a grace period in days, and whether Flint applies it
     * automatically. anyOf[2] (Value): null.
     */
    "late_fee_policy"?: ((InvoiceLateFeePolicyInput) | (null));
    /** minLength: 1. */
    "name"?: string;
};
/** The request body for: Update invoice. */
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
     * to clear it. minLength: 1. maxLength: 255.
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
     * used when creating or updating an invoice: no due date, a fixed time, payment terms, or a
     * default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /**
     * The buyer's purchase order number, printed on the invoice and PDF. Send null to clear it.
     * minLength: 1.
     */
    "po_number"?: string | null;
    /**
     * Where Flint emails the invoice and its reminders. Required at issue when delivery resolves
     * to email, and when you schedule the issue. Send null to clear it. minLength: 1.
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
     * the scheduled issue. Send null to clear it. Format: date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Send null to clear it. Format: date. minLength: 1.
     */
    "service_date"?: string | null;
});
/** The request body for: Update invoice. */
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
     * to clear it. minLength: 1. maxLength: 255.
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
     * used when creating or updating an invoice: no due date, a fixed time, payment terms, or a
     * default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /**
     * The buyer's purchase order number, printed on the invoice and PDF. Send null to clear it.
     * minLength: 1.
     */
    "po_number"?: string | null;
    /**
     * Where Flint emails the invoice and its reminders. Required at issue when delivery resolves
     * to email, and when you schedule the issue. Send null to clear it. minLength: 1.
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
     * the scheduled issue. Send null to clear it. Format: date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Send null to clear it. Format: date. minLength: 1.
     */
    "service_date"?: string | null;
});
/** The request body for: Update line item. */
export type UpdateLineItemRequest = ({
    /** Send null to clear description. minLength: 1. */
    "description"?: string | null;
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
     * gift_card_recipient. The amount and every computed order amount must not exceed 99999999
     * minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. amount (Required): integer string. Amount in the currency's
     * smallest unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 200000. currency (Required):
     * string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "gift_card_face_value_money"?: {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}`;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
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
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity.
     */
    "modifiers"?: Array<OrderLineItemModifierRequest>;
    /** minLength: 1. */
    "name"?: string;
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
     * Tax settings for an order line item calculated by Flint or supplied by you, including the
     * line item tax category and whether it is taxable.
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
/** The request body for: Update line item. */
export type UpdateLineItemRequestInput = ({
    /** Send null to clear description. minLength: 1. */
    "description"?: string | null;
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
     * gift_card_recipient. The amount and every computed order amount must not exceed 99999999
     * minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. amount (Required): integer string. Amount in the currency's
     * smallest unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 200000. currency (Required):
     * string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "gift_card_face_value_money"?: {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}` | bigint;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD";
    };
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
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity.
     */
    "modifiers"?: Array<OrderLineItemModifierRequestInput>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Replacement quantity, from 1 through 9999. The extended line subtotal, including modifiers,
     * must satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999.
     */
    "quantity"?: number;
    /**
     * Selects an active subscription offer and reprices an unpaid line. Null selects a one-time
     * purchase. Omission preserves the selection. Requires expected_version from the order and
     * clears the delivery selection when terms change. Send null to clear subscription. Requires
     * expected_version. anyOf[1] (Value): {@link SubscribedLineRequestInput}. Makes an order line
     * a subscription purchase, with the subscription offer and billing interval. anyOf[2] (Value):
     * null.
     */
    "subscription"?: ((SubscribedLineRequestInput) | (null));
    /**
     * Tax settings for an order line item calculated by Flint or supplied by you, including the
     * line item tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedLineItemTaxInput;
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
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Value enum: "active", "inactive". */
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
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /**
     * IANA timezone for local schedules, validated as on create. Can be updated without address.
     * minLength: 1.
     */
    "timezone"?: string;
});
