import type { PaymentIntentWithAction } from './types-35.js';
import type { ResponseMeta } from './types-40.js';
import type { APIKeyWithSecret, Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { ImageRequest, ImageRequestInput } from './types-19.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { CallerSuppliedDeliveryMethodResultRequest, CallerSuppliedDeliveryMethodResultRequestInput } from './types-2.js';
import type {
    DeliveryAddressRequest,
    DeliveryBuyerLocationRequest,
    DeliveryAddressRequestInput,
    DeliveryBuyerLocationRequestInput,
    DeliveryDistance
} from './types-11.js';
import type {
    DeliveryInventoryAssignmentRequest,
    DeliveryInventoryAssignmentRequestInput,
    DeliveryLocationSetConfiguration,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationCreateRequest,
    DeliveryMethodConfigurationCreateRequestInput,
    DeliveryMethodConfigurationRequest,
    DeliveryMethodConfigurationRequestInput,
    DeliveryMethodOriginSelectorRequest,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryPreviewRoutingSourceInput,
    DeliveryPickupAvailabilityMaximumDistanceRequestInput
} from './types-12.js';
import type {
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutBuyerFieldsInput,
    CheckoutCustomTextWriteConfigInput
} from './types-3.js';
import type {
    CheckoutPaymentConfig,
    CheckoutPrefillRequest,
    CheckoutPromotionConfig,
    CheckoutQuickPayItemRequest,
    CheckoutRedirects,
    CheckoutSubscriptionTermsRequest,
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigInput,
    CheckoutQuickPayItemRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutTaxConfigInput,
    CheckoutTipConfigInput
} from './types-4.js';
import type { LegalSettings } from './types-28.js';
import type { ThemeConfig, ThemeConfigRequestInput } from './types-47.js';
import type { CreditNoteLineItemRequest, CreditNoteLineItemRequestInput } from './types-9.js';
import type { PostalAddressInput } from './types-37.js';
import type { TaxIdentityPatch, TaxIdentityRequestInput } from './types-46.js';
import type { CreateOrderLineItem, CreateOrderLineItemRequestInput } from './types-7.js';
import type { InventoryRoutingSource } from './types-25.js';
/**
 * Shape $ (Value): {@link ConfirmCustomerVerificationRequestInput}. The request body for: Confirm
 * a customer email verification.
 */
export type ConfirmCustomerVerificationRequestInput = {
    /** Shape $ (Value): string. minLength: 1. pattern: ^[0-9]{6}$. */
    "code": string;
};
/**
 * Shape $ (Value): {@link ConfirmEmailChangeRequest}. The request body for: Confirm an email
 * change.
 */
export type ConfirmEmailChangeRequest = {
    /** Shape $ (Value): string. minLength: 1. pattern: ^[0-9]{6}$. */
    "current_email_code"?: string;
    /** Shape $ (Value): string. minLength: 1. pattern: ^[0-9]{6}$. */
    "new_email_code": string;
};
/**
 * Shape $ (Value): {@link ConfirmEmailChangeRequestInput}. The request body for: Confirm an email
 * change.
 */
export type ConfirmEmailChangeRequestInput = ConfirmEmailChangeRequest;
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentRequest}. The request body for: Confirm payment
 * intent.
 */
export type ConfirmPaymentIntentRequest = (({
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1. */
    "payment_source_token": string;
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false.
     */
    "save_payment_method"?: boolean;
})
    | ({
    /**
     * Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this
     * payment. minLength: 1.
     */
    "payment_method_id": string;
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false. Value enum: false.
     */
    "save_payment_method"?: boolean;
})
    | ({
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * Shape $ (Value): object. Stripe credential collected for this payment. Shape
     * $.confirmation_token (Required): string. Stripe confirmation token you created with
     * Stripe.js from `payment_collection.stripe`. minLength: 1.
     */
    "stripe": {
        /**
         * Shape $ (Value): string. Stripe confirmation token you created with Stripe.js from
         * `payment_collection.stripe`. minLength: 1.
         */
        "confirmation_token": string;
    };
})
    | ({
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false. Value enum: false.
     */
    "save_payment_method"?: boolean;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentRequestInput}. The request body for: Confirm payment
 * intent.
 */
export type ConfirmPaymentIntentRequestInput = (({
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1. */
    "payment_source_token": string;
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false.
     */
    "save_payment_method"?: boolean;
})
    | ({
    /**
     * Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this
     * payment. minLength: 1.
     */
    "payment_method_id": string;
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false. Value enum: false.
     */
    "save_payment_method"?: (false) & (false);
})
    | ({
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * Shape $ (Value): object. Stripe credential collected for this payment. Shape
     * $.confirmation_token (Required): string. Stripe confirmation token you created with
     * Stripe.js from `payment_collection.stripe`. minLength: 1.
     */
    "stripe": {
        /**
         * Shape $ (Value): string. Stripe confirmation token you created with Stripe.js from
         * `payment_collection.stripe`. minLength: 1.
         */
        "confirmation_token": string;
    };
})
    | ({
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false. Value enum: false.
     */
    "save_payment_method"?: (false) & (false);
}));
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentResponse}. A response containing
 * `PaymentIntentWithAction` data.
 */
export type ConfirmPaymentIntentResponse = {
    /**
     * Shape $ (Value): {@link PaymentIntentWithAction}. One payment from a buyer, standalone or as
     * a leg of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data": PaymentIntentWithAction;
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
 * Shape $ (Value): {@link ConfirmReturnResolutionRequestInput}. The request body for: Confirm
 * return resolution.
 */
export type ConfirmReturnResolutionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/** Shape $ (Value): {@link CreateAPIKeyRequest}. The request body for: Create an API key. */
export type CreateAPIKeyRequest = ({
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): string. A predefined set of scopes to grant instead of listing them. Flint
     * resolves it when it creates the key and stores the resulting scopes, so scopes added to
     * Flint later are not added to the key. Send either scopes or scope_preset. Value enum:
     * "full_access", "read_only".
     */
    "scope_preset"?: "full_access" | "read_only" | (string & {});
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Send either scopes or scope_preset.
     * [] enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
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
})
    & ((({
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Send either scopes or scope_preset.
     * [] enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
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
}))
    | (({
    /**
     * Shape $ (Value): string. A predefined set of scopes to grant instead of listing them. Flint
     * resolves it when it creates the key and stores the resulting scopes, so scopes added to
     * Flint later are not added to the key. Send either scopes or scope_preset. Value enum:
     * "full_access", "read_only".
     */
    "scope_preset": "full_access" | "read_only" | (string & {});
}))
    | (Record<string, unknown>));
/** Shape $ (Value): {@link CreateAPIKeyRequestInput}. The request body for: Create an API key. */
export type CreateAPIKeyRequestInput = ({
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): string. A predefined set of scopes to grant instead of listing them. Flint
     * resolves it when it creates the key and stores the resulting scopes, so scopes added to
     * Flint later are not added to the key. Send either scopes or scope_preset. Value enum:
     * "full_access", "read_only".
     */
    "scope_preset"?: "full_access" | "read_only";
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Send either scopes or scope_preset.
     * [] enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
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
})
    & ((({
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Send either scopes or scope_preset.
     * [] enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
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
})
    & (({
    "scope_preset"?: never;
})))
    | (({
    /**
     * Shape $ (Value): string. A predefined set of scopes to grant instead of listing them. Flint
     * resolves it when it creates the key and stores the resulting scopes, so scopes added to
     * Flint later are not added to the key. Send either scopes or scope_preset. Value enum:
     * "full_access", "read_only".
     */
    "scope_preset": "full_access" | "read_only";
})
    & (({
    "scopes"?: never;
}))));
/** Shape $ (Value): {@link CreateAPIKeyResponse}. A response containing `APIKeyWithSecret` data. */
export type CreateAPIKeyResponse = {
    /**
     * Shape $ (Value): {@link APIKeyWithSecret}. An API key including its `secret_key`, returned
     * by the calls that create or issue a key. A credential used to authenticate API requests.
     */
    "data": APIKeyWithSecret;
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
 * Shape $ (Value): {@link CreateBundleComponentRequest}. A component to include when creating a
 * bundle: a variant, its quantity and position, and an optional delivery profile override.
 */
export type CreateBundleComponentRequest = {
    /**
     * Shape $ (Value): string or null. Component delivery profile override. Omit to inherit the
     * variant's profile. Send null to clear it. minLength: 1.
     */
    "delivery_profile_id"?: string | null;
    /**
     * Shape $ (Value): integer. Display order among the bundle's components, starting at zero.
     * Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Shape $ (Value): string. Identifier of the product variant included in the bundle.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_id": string;
};
/**
 * Shape $ (Value): {@link CreateBundleComponentRequestInput}. A component to include when creating
 * a bundle: a variant, its quantity and position, and an optional delivery profile override.
 */
export type CreateBundleComponentRequestInput = CreateBundleComponentRequest;
/** Shape $ (Value): {@link CreateBundleRequest}. The request body for: Create bundle. */
export type CreateBundleRequest = {
    /**
     * Shape $ (Value): string. Barcode assigned to this sellable item. minLength: 1. maxLength:
     * 100.
     */
    "barcode"?: string;
    /**
     * Shape $ (Value): Array of string. Relationship set of category handles that must already
     * exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return
     * RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH,
     * omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern:
     * ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Shape $ (Value): Array of {@link CreateBundleComponentRequest}. Variants included in the
     * bundle and their quantities. Required when status is active; send status: inactive to create
     * a draft without components. Shape $[] (Value): {@link CreateBundleComponentRequest}. A
     * component to include when creating a bundle: a variant, its quantity and position, and an
     * optional delivery profile override.
     */
    "components"?: Array<CreateBundleComponentRequest>;
    /**
     * Shape $ (Value): string. Description of the bundle shown to buyers. minLength: 1. maxLength:
     * 2048.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageRequest}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
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
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /** Shape $ (Value): string. Bundle name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): string. Stock keeping unit assigned to this sellable item. minLength: 1.
     * maxLength: 100.
     */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Whether the bundle is active or inactive. Defaults to active; an
     * active bundle requires components. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Price charged for one unit, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
/** Shape $ (Value): {@link CreateBundleRequestInput}. The request body for: Create bundle. */
export type CreateBundleRequestInput = {
    /**
     * Shape $ (Value): string. Barcode assigned to this sellable item. minLength: 1. maxLength:
     * 100.
     */
    "barcode"?: string;
    /**
     * Shape $ (Value): Array of string. Relationship set of category handles that must already
     * exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return
     * RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH,
     * omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern:
     * ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Shape $ (Value): Array of {@link CreateBundleComponentRequestInput}. Variants included in
     * the bundle and their quantities. Required when status is active; send status: inactive to
     * create a draft without components. Shape $[] (Value): {@link
     * CreateBundleComponentRequestInput}. A component to include when creating a bundle: a
     * variant, its quantity and position, and an optional delivery profile override.
     */
    "components"?: Array<CreateBundleComponentRequestInput>;
    /**
     * Shape $ (Value): string. Description of the bundle shown to buyers. minLength: 1. maxLength:
     * 2048.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageRequestInput}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
     * optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
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
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /** Shape $ (Value): string. Bundle name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): string. Stock keeping unit assigned to this sellable item. minLength: 1.
     * maxLength: 100.
     */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Whether the bundle is active or inactive. Defaults to active; an
     * active bundle requires components. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Price charged for one unit, in the currency's
     * smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "unit_price_money": MoneyValueInput;
};
/** Shape $ (Value): {@link CreateCategoryRequest}. The request body for: Create category. */
export type CreateCategoryRequest = {
    /** Shape $ (Value): string. Description of the category. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Unique category handle, using lowercase letters, digits, and single
     * hyphens between words. Cannot be changed after creation. minLength: 1. maxLength: 100.
     * pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "handle"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. Category name shown to buyers. minLength: 1. maxLength: 100. */
    "name": string;
};
/** Shape $ (Value): {@link CreateCategoryRequestInput}. The request body for: Create category. */
export type CreateCategoryRequestInput = CreateCategoryRequest;
/**
 * Shape $ (Value): {@link CreateCheckoutDeliveryQuoteRequest}. The request body for: Create
 * delivery quote.
 */
export type CreateCheckoutDeliveryQuoteRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "basis_delivery_quote_id"?: string;
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequest}. The buyer's location for pickup or
     * local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /**
     * Shape $ (Value): {@link DeliveryAddressRequest}. An address you supply for delivery quotes,
     * previews, and selections.
     */
    "destination_address"?: DeliveryAddressRequest;
    /**
     * Shape $ (Value): string or null. Current delivery selection ID used for compare-and-swap.
     * Send null to assert that no selection exists. minLength: 1.
     */
    "expected_delivery_selection_id": string | null;
    /**
     * Shape $ (Value): Array of {@link DeliveryInventoryAssignmentRequest}. maxItems: 1000. Shape
     * $[] (Value): {@link DeliveryInventoryAssignmentRequest}. Assigns a quantity of an inventory
     * item at a location to a demand when creating a delivery quote.
     */
    "inventory_assignments"?: Array<DeliveryInventoryAssignmentRequest>;
    /**
     * Shape $ (Value): Array of {@link CallerSuppliedDeliveryMethodResultRequest}. Shape $[]
     * (Value): {@link CallerSuppliedDeliveryMethodResultRequest}. The rate result you supply for
     * one delivery method and choice group when creating a delivery quote with caller-supplied
     * pricing.
     */
    "method_results"?: Array<CallerSuppliedDeliveryMethodResultRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "pickup_location_id"?: string;
    /**
     * Shape $ (Value): integer string. Caller-defined nonnegative lookup key used by methods whose
     * tiered pricing basis is caller.tier_key. Merchant authentication is required. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "tier_key"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link CreateCheckoutDeliveryQuoteRequestInput}. The request body for: Create
 * delivery quote.
 */
export type CreateCheckoutDeliveryQuoteRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "basis_delivery_quote_id"?: string;
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequestInput}. The buyer's location for pickup
     * or local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryAddressRequestInput}. An address you supply for delivery
     * quotes, previews, and selections.
     */
    "destination_address"?: DeliveryAddressRequestInput;
    /**
     * Shape $ (Value): string or null. Current delivery selection ID used for compare-and-swap.
     * Send null to assert that no selection exists. minLength: 1.
     */
    "expected_delivery_selection_id": string | null;
    /**
     * Shape $ (Value): Array of {@link DeliveryInventoryAssignmentRequestInput}. maxItems: 1000.
     * Shape $[] (Value): {@link DeliveryInventoryAssignmentRequestInput}. Assigns a quantity of an
     * inventory item at a location to a demand when creating a delivery quote.
     */
    "inventory_assignments"?: Array<DeliveryInventoryAssignmentRequestInput>;
    /**
     * Shape $ (Value): Array of {@link CallerSuppliedDeliveryMethodResultRequestInput}. Shape $[]
     * (Value): {@link CallerSuppliedDeliveryMethodResultRequestInput}. The rate result you supply
     * for one delivery method and choice group when creating a delivery quote with caller-supplied
     * pricing.
     */
    "method_results"?: Array<CallerSuppliedDeliveryMethodResultRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "pickup_location_id"?: string;
    /**
     * Shape $ (Value): integer string. Caller-defined nonnegative lookup key used by methods whose
     * tiered pricing basis is caller.tier_key. Merchant authentication is required. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "tier_key"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest}.
 * After a payment that sent save_payment_method_phone, the buyer confirms the card it saved.
 * Channel sms texts the number given with the payment; channel email emails the customer's email
 * only when it matches the payment's email, otherwise returning 409. The response masks the email.
 * Send no email. Available on the paid session, or an open session whose payment is approved for
 * later capture, while payment_method_save.status is pending. A texted code saves the card with
 * the number when the payment created the customer, the buyer confirmed their email in this
 * checkout, or the number already opens their saved details; otherwise
 * payment_method_save.email_confirmation_required becomes true and an emailed code finishes the
 * save. An emailed code alone saves the card by email.
 */
export type CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest = {
    /** Shape $ (Value): string.  Value enum: "email", "sms". */
    "channel": "email" | "sms" | (string & {});
    /** Shape $ (Value): string.  Value enum: "confirm_saved_payment_method". */
    "purpose": "confirm_saved_payment_method" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput}.
 * After a payment that sent save_payment_method_phone, the buyer confirms the card it saved.
 * Channel sms texts the number given with the payment; channel email emails the customer's email
 * only when it matches the payment's email, otherwise returning 409. The response masks the email.
 * Send no email. Available on the paid session, or an open session whose payment is approved for
 * later capture, while payment_method_save.status is pending. A texted code saves the card with
 * the number when the payment created the customer, the buyer confirmed their email in this
 * checkout, or the number already opens their saved details; otherwise
 * payment_method_save.email_confirmation_required becomes true and an emailed code finishes the
 * save. An emailed code alone saves the card by email.
 */
export type CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput = {
    /** Shape $ (Value): string.  Value enum: "email", "sms". */
    "channel": "email" | "sms";
    /** Shape $ (Value): string.  Value enum: "confirm_saved_payment_method". */
    "purpose": "confirm_saved_payment_method";
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionCustomerVerificationRequest}. A checkout
 * verification request selected by purpose.
 */
export type CreateCheckoutSessionCustomerVerificationRequest = ((CreateCheckoutSessionGiftCardPurchaseVerificationRequest)
    | (CreateCheckoutSessionSavePaymentMethodVerificationRequest)
    | (CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest)
    | (CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionCustomerVerificationRequestInput}. A checkout
 * verification request selected by purpose.
 */
export type CreateCheckoutSessionCustomerVerificationRequestInput = ((CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput)
    | (CreateCheckoutSessionSavePaymentMethodVerificationRequestInput)
    | (CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput)
    | (CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionGiftCardPurchaseVerificationRequest}. The buyer
 * confirms their email before funding a gift card purchase. Flint emails a code without saving a
 * payment method.
 */
export type CreateCheckoutSessionGiftCardPurchaseVerificationRequest = {
    /** Shape $ (Value): string. Default: "email". Value enum: "email". */
    "channel"?: "email" | (string & {});
    /**
     * Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are
     * matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "gift_card_purchase". */
    "purpose": "gift_card_purchase" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput}. The
 * buyer confirms their email before funding a gift card purchase. Flint emails a code without
 * saving a payment method.
 */
export type CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput = {
    /** Shape $ (Value): string. Default: "email". Value enum: "email". */
    "channel"?: "email";
    /**
     * Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are
     * matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "gift_card_purchase". */
    "purpose": "gift_card_purchase";
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionRequest}. The request body for: Create checkout
 * session.
 */
export type CreateCheckoutSessionRequest = ({
    /**
     * Shape $ (Value): {@link CheckoutBuyerFields}. What checkout asks the buyer for. Each field
     * you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom checkout text you supply when
     * creating a checkout session: an order summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Shape $ (Value): string. Existing customer to link to the order Flint creates. Not allowed
     * with type: order: the session uses the order's customer, so set customer_id on the order
     * first. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): Array of string. Immutable delivery method assignment for this checkout, 1
     * to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the
     * order has items to deliver; otherwise no methods are assigned. Empty arrays and null are
     * rejected. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): integer string. Seconds the session stays open, from 60 to 86,400. Omit it
     * to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link LegalSettings}. Legal settings you supply when creating a checkout
     * session: whether buyers must accept terms, and links to the terms, refund policy, shipping
     * policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfig}. Payment settings you supply when creating a
     * checkout session: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Shape $ (Value): {@link CheckoutPrefillRequest}. Contact details and addresses to fill in
     * for the buyer, who can change them. For a customer with saved addresses, Flint fills in any
     * address you leave out, and reads include it. With quick_pay or subscription_plan and
     * automatic tax on, a prefilled address sets the order's tax location. Not changed by what the
     * buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential
     * reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequest;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfig}. Promotion settings for a checkout: whether
     * automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequest}. A single custom item to charge on a
     * checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item"?: CheckoutQuickPayItemRequest;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where hosted checkout sends the buyer. Not
     * allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): string. Expected checkout session for an atomic replacement. Allowed only
     * with type: order. The named session must belong to the same merchant, environment, and
     * order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: 1.
     */
    "replace_checkout_session_id"?: string;
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTermsRequest}. Subscription terms you set on a
     * checkout session: billing interval, interval count, and quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequest;
    /**
     * Shape $ (Value): string. Defaults to hosted when omitted. Use embedded for a merchant-owned
     * presentation. Default: "hosted". Value enum: "hosted", "embedded".
     */
    "surface"?: "hosted" | "embedded" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutTaxConfig}. Automatic tax settings for the order Flint
     * creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order;
     * sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the
     * resulting tax settings and status. Whether tax is collected for a checkout session or
     * payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * Shape $ (Value): {@link ThemeConfig}. Colors and title to apply to a checkout session's
     * page.
     */
    "theme"?: ThemeConfig;
    /**
     * Shape $ (Value): {@link CheckoutTipConfig}. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * Shape $ (Value): string. What the checkout collects payment for. order: an order you
     * created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates
     * the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and
     * Flint creates the order and, once the buyer pays, the subscription. Value enum: "order",
     * "quick_pay", "subscription_plan".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | (string & {});
})
    & ((({
    /** Shape $ (Value): string.  Value enum: "order". */
    "type": "order";
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id": string;
}))
    | (({
    /** Shape $ (Value): string.  Value enum: "quick_pay". */
    "type": "quick_pay";
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequest}. A single custom item to charge on a
     * checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequest;
}))
    | (({
    /** Shape $ (Value): any. Shape $.require_email (Optional): any.  Value enum: true. */
    "buyer_fields"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): any.  Value enum: true. */
        "require_email"?: unknown;
    });
    /** Shape $ (Value): string.  Value enum: "subscription_plan". */
    "type": "subscription_plan";
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id": string;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionRequestInput}. The request body for: Create
 * checkout session.
 */
export type CreateCheckoutSessionRequestInput = ({
    /**
     * Shape $ (Value): {@link CheckoutBuyerFieldsInput}. What checkout asks the buyer for. Each
     * field you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFieldsInput;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextWriteConfigInput}. Custom checkout text you supply
     * when creating a checkout session: an order summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextWriteConfigInput;
    /**
     * Shape $ (Value): string. Existing customer to link to the order Flint creates. Not allowed
     * with type: order: the session uses the order's customer, so set customer_id on the order
     * first. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): Array of string. Immutable delivery method assignment for this checkout, 1
     * to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the
     * order has items to deliver; otherwise no methods are assigned. Empty arrays and null are
     * rejected. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): integer string. Seconds the session stays open, from 60 to 86,400. Omit it
     * to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutLegalConfigRequestInput}. Legal settings you supply when
     * creating a checkout session: whether buyers must accept terms, and links to the terms,
     * refund policy, shipping policy, and contract.
     */
    "legal"?: CheckoutLegalConfigRequestInput;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfigRequestInput}. Payment settings you supply when
     * creating a checkout session: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfigRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutPrefillRequestInput}. Contact details and addresses to fill
     * in for the buyer, who can change them. For a customer with saved addresses, Flint fills in
     * any address you leave out, and reads include it. With quick_pay or subscription_plan and
     * automatic tax on, a prefilled address sets the order's tax location. Not changed by what the
     * buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential
     * reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfigInput}. Promotion settings for a checkout:
     * whether automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigInput;
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequestInput}. A single custom item to charge on
     * a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item"?: CheckoutQuickPayItemRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutRedirectsRequestInput}. Where hosted checkout sends the
     * buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Shape $ (Value): string. Expected checkout session for an atomic replacement. Allowed only
     * with type: order. The named session must belong to the same merchant, environment, and
     * order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: 1.
     */
    "replace_checkout_session_id"?: string;
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTermsRequestInput}. Subscription terms you set
     * on a checkout session: billing interval, interval count, and quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequestInput;
    /**
     * Shape $ (Value): string. Defaults to hosted when omitted. Use embedded for a merchant-owned
     * presentation. Default: "hosted". Value enum: "hosted", "embedded".
     */
    "surface"?: "hosted" | "embedded";
    /**
     * Shape $ (Value): {@link CheckoutTaxConfigInput}. Automatic tax settings for the order Flint
     * creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order;
     * sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the
     * resulting tax settings and status. Whether tax is collected for a checkout session or
     * payment link.
     */
    "tax"?: CheckoutTaxConfigInput;
    /**
     * Shape $ (Value): {@link ThemeConfigRequestInput}. Colors and title to apply to a checkout
     * session's page.
     */
    "theme"?: ThemeConfigRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutTipConfigInput}. Tip settings for a checkout: whether tips
     * are enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfigInput;
    /**
     * Shape $ (Value): string. What the checkout collects payment for. order: an order you
     * created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates
     * the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and
     * Flint creates the order and, once the buyer pays, the subscription. Value enum: "order",
     * "quick_pay", "subscription_plan".
     */
    "type": "order" | "quick_pay" | "subscription_plan";
})
    & ((({
    /** Shape $ (Value): string.  Value enum: "order". */
    "type": "order";
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id": string;
})
    & (({
    "quick_pay_item"?: never;
})
    & ({
    "subscription_plan_id"?: never;
})
    & ({
    "subscription_terms"?: never;
})
    & ({
    "customer_id"?: never;
})
    & ({
    "tax"?: never;
})))
    | (({
    /** Shape $ (Value): string.  Value enum: "quick_pay". */
    "type": "quick_pay";
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequestInput}. A single custom item to charge on
     * a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequestInput;
})
    & (({
    "order_id"?: never;
})
    & ({
    "replace_checkout_session_id"?: never;
})
    & ({
    "subscription_plan_id"?: never;
})
    & ({
    "subscription_terms"?: never;
})))
    | (({
    /** Shape $ (Value): any. Shape $.require_email (Optional): any.  Value enum: true. */
    "buyer_fields"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): any.  Value enum: true. */
        "require_email"?: (true) & (true);
    });
    /** Shape $ (Value): string.  Value enum: "subscription_plan". */
    "type": "subscription_plan";
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id": string;
})
    & (({
    "order_id"?: never;
})
    & ({
    "replace_checkout_session_id"?: never;
})
    & ({
    "quick_pay_item"?: never;
}))));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionSavePaymentMethodVerificationRequest}. The buyer
 * asked to save the card they are paying with. Flint emails a code to any valid address while the
 * session is open and save_payment_method_requires_verification is true.
 */
export type CreateCheckoutSessionSavePaymentMethodVerificationRequest = {
    /** Shape $ (Value): string. Default: "email". Value enum: "email". */
    "channel"?: "email" | (string & {});
    /**
     * Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are
     * matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "save_payment_method". */
    "purpose": "save_payment_method" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionSavePaymentMethodVerificationRequestInput}. The
 * buyer asked to save the card they are paying with. Flint emails a code to any valid address
 * while the session is open and save_payment_method_requires_verification is true.
 */
export type CreateCheckoutSessionSavePaymentMethodVerificationRequestInput = {
    /** Shape $ (Value): string. Default: "email". Value enum: "email". */
    "channel"?: "email";
    /**
     * Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are
     * matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "save_payment_method". */
    "purpose": "save_payment_method";
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest}. The
 * buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number
 * saved with the email's details, or emails a code when they have cards saved by email and no
 * number; otherwise it sends nothing and returns CUSTOMER_VERIFICATION_NOT_SENT. The response's
 * channel says which. By email, Flint sends a code only when the email has saved details and an
 * active card saved by email or with a number; the response is the same either way. By sms, Flint
 * texts the saved number or returns CUSTOMER_VERIFICATION_TEXT_UNAVAILABLE. Auto and sms reveal
 * whether the email has saved details; sms also reveals the number's last two digits. Always offer
 * email alongside sms. A texted code opens only cards saved with that number; an emailed code
 * opens only cards saved by email.
 */
export type CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest = {
    /** Shape $ (Value): string. Default: "auto". Value enum: "email", "sms", "auto". */
    "channel"?: "email" | "sms" | "auto" | (string & {});
    /**
     * Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are
     * matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "use_saved_payment_methods". */
    "purpose": "use_saved_payment_methods" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput}.
 * The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the
 * number saved with the email's details, or emails a code when they have cards saved by email and
 * no number; otherwise it sends nothing and returns CUSTOMER_VERIFICATION_NOT_SENT. The response's
 * channel says which. By email, Flint sends a code only when the email has saved details and an
 * active card saved by email or with a number; the response is the same either way. By sms, Flint
 * texts the saved number or returns CUSTOMER_VERIFICATION_TEXT_UNAVAILABLE. Auto and sms reveal
 * whether the email has saved details; sms also reveals the number's last two digits. Always offer
 * email alongside sms. A texted code opens only cards saved with that number; an emailed code
 * opens only cards saved by email.
 */
export type CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput = {
    /** Shape $ (Value): string. Default: "auto". Value enum: "email", "sms", "auto". */
    "channel"?: "email" | "sms" | "auto";
    /**
     * Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are
     * matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "use_saved_payment_methods". */
    "purpose": "use_saved_payment_methods";
};
/**
 * Shape $ (Value): {@link CreateCreditNoteAllocationRequest}. The request body for: Allocate
 * credit note.
 */
export type CreateCreditNoteAllocationRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit to apply, no more than the credit note's
     * available_money or the invoice's outstanding balance. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): integer string. Credit note version last read. Optional; a stale version
     * returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link CreateCreditNoteAllocationRequestInput}. The request body for: Allocate
 * credit note.
 */
export type CreateCreditNoteAllocationRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Credit to apply, no more than the credit note's
     * available_money or the invoice's outstanding balance. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Credit note version last read. Optional; a stale version
     * returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CreateCreditNoteRefundRequest}. The request body for: Refund credit
 * note.
 */
export type CreateCreditNoteRefundRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit to refund. Omit to refund all available credit,
     * which Flint resolves once when it accepts the request. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Credit note version last read. Optional; a stale version
     * returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Why the refund is being made. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
     */
    "reason": "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. Optional note explaining the refund. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CreateCreditNoteRefundRequestInput}. The request body for: Refund credit
 * note.
 */
export type CreateCreditNoteRefundRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Credit to refund. Omit to refund all available
     * credit, which Flint resolves once when it accepts the request. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Credit note version last read. Optional; a stale version
     * returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Why the refund is being made. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
     */
    "reason": "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other";
    /** Shape $ (Value): string. Optional note explaining the refund. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link CreateCreditNoteRequest}. The request body for: Create credit note. */
export type CreateCreditNoteRequest = {
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. The invoice to correct. It has to be past draft and not voided.
     * minLength: 1.
     */
    "invoice_id": string;
    /**
     * Shape $ (Value): Array of {@link CreditNoteLineItemRequest}. Initial draft corrections. Omit
     * or send [] to create an empty draft. Null is not accepted. Shape $[] (Value): {@link
     * CreditNoteLineItemRequest}. A credit note line you supply when creating or updating a credit
     * note: the invoice line item it credits and how much, or an existing line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequest>;
    /**
     * Shape $ (Value): string. Free text shown on the credit note, up to 4096 characters.
     * minLength: 1. maxLength: 4096.
     */
    "memo"?: string;
    /**
     * Shape $ (Value): string. Why the invoice is being corrected: returned_goods,
     * order_adjustment, billing_error, goodwill, or other. Shown on the credit note document.
     * Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCreditNoteRequestInput}. The request body for: Create credit note.
 */
export type CreateCreditNoteRequestInput = {
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. The invoice to correct. It has to be past draft and not voided.
     * minLength: 1.
     */
    "invoice_id": string;
    /**
     * Shape $ (Value): Array of {@link CreditNoteLineItemRequestInput}. Initial draft corrections.
     * Omit or send [] to create an empty draft. Null is not accepted. Shape $[] (Value): {@link
     * CreditNoteLineItemRequestInput}. A credit note line you supply when creating or updating a
     * credit note: the invoice line item it credits and how much, or an existing line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Free text shown on the credit note, up to 4096 characters.
     * minLength: 1. maxLength: 4096.
     */
    "memo"?: string;
    /**
     * Shape $ (Value): string. Why the invoice is being corrected: returned_goods,
     * order_adjustment, billing_error, goodwill, or other. Shown on the credit note document.
     * Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other";
};
/**
 * Shape $ (Value): {@link CreateCustomDomainRequest}. The request body for: Create a custom
 * domain.
 */
export type CreateCustomDomainRequest = {
    /**
     * Shape $ (Value): string. Hostname to configure, such as checkout.example.com or
     * account.example.com. minLength: 1. maxLength: 253.
     */
    "hostname": string;
    /**
     * Shape $ (Value): string. Whether the hostname serves checkout pages or the customer account
     * Flint hosts. Value enum: "checkout", "customer_account".
     */
    "type": "checkout" | "customer_account" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCustomDomainRequestInput}. The request body for: Create a custom
 * domain.
 */
export type CreateCustomDomainRequestInput = {
    /**
     * Shape $ (Value): string. Hostname to configure, such as checkout.example.com or
     * account.example.com. minLength: 1. maxLength: 253.
     */
    "hostname": string;
    /**
     * Shape $ (Value): string. Whether the hostname serves checkout pages or the customer account
     * Flint hosts. Value enum: "checkout", "customer_account".
     */
    "type": "checkout" | "customer_account";
};
/**
 * Shape $ (Value): {@link CreateCustomerAddressRequest}. The request body for: Create a customer
 * address; Create an address for the current buyer.
 */
export type CreateCustomerAddressRequest = {
    /**
     * Shape $ (Value): {@link Address}. A postal address for a customer, with line 1, optional
     * line 2, city, state, postal code, and country.
     */
    "address": Address;
    /** Shape $ (Value): boolean. */
    "is_default_billing"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_default_shipping"?: boolean;
    /**
     * Shape $ (Value): string. Limited to 100 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 100.
     */
    "label"?: string;
    /**
     * Shape $ (Value): string. E.164 phone number. Limited to 30 characters (Unicode code points),
     * counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 30.
     */
    "phone"?: string;
    /**
     * Shape $ (Value): string. Limited to 255 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name": string;
};
/**
 * Shape $ (Value): {@link CreateCustomerAddressRequestInput}. The request body for: Create a
 * customer address; Create an address for the current buyer.
 */
export type CreateCustomerAddressRequestInput = {
    /**
     * Shape $ (Value): {@link PostalAddressInput}. A postal address for a customer, with line 1,
     * optional line 2, city, state, postal code, and country.
     */
    "address": PostalAddressInput;
    /** Shape $ (Value): boolean. */
    "is_default_billing"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_default_shipping"?: boolean;
    /**
     * Shape $ (Value): string. Limited to 100 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 100.
     */
    "label"?: string;
    /**
     * Shape $ (Value): string. E.164 phone number. Limited to 30 characters (Unicode code points),
     * counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 30.
     */
    "phone"?: string;
    /**
     * Shape $ (Value): string. Limited to 255 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name": string;
};
/**
 * Shape $ (Value): {@link CreateCustomerDeletionRequest}. The request body for: Request customer
 * account deletion.
 */
export type CreateCustomerDeletionRequest = {
    /** Shape $ (Value): string. Flint customer ID of the customer to delete. minLength: 1. */
    "customer_id": string;
};
/**
 * Shape $ (Value): {@link CreateCustomerDeletionRequestInput}. The request body for: Request
 * customer account deletion.
 */
export type CreateCustomerDeletionRequestInput = CreateCustomerDeletionRequest;
/** Shape $ (Value): {@link CreateCustomerRequest}. The request body for: Create customer. */
export type CreateCustomerRequest = ({
    /**
     * Shape $ (Value): {@link AddressRequest}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
     */
    "billing_address"?: AddressRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "default_invoice_payment_term_id"?: string;
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 320. */
    "email"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): boolean. Flag you set on the customer, for example after checking ID in
     * store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to
     * customer verifications, which prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): string. What to do when an active customer in this environment already has
     * `email`. `error` returns `409 ALREADY_EXISTS` naming that customer. `return_existing`
     * returns that customer unchanged with `200` instead of creating one; it requires `email`.
     * Emails match case-insensitively. Default: "error". Value enum: "error", "return_existing".
     */
    "on_email_conflict"?: "error" | "return_existing" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "phone"?: string;
    /**
     * Shape $ (Value): string. Free-form label you assign, such as wholesale, so promotion and
     * delivery rules can match groups of customers. It is not an ID; Flint does not check it
     * against any resource. minLength: 1.
     */
    "segment"?: string;
    /**
     * Shape $ (Value): {@link AddressRequest}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
     */
    "shipping_address"?: AddressRequest;
    /** Shape $ (Value): boolean. */
    "tax_exempt"?: boolean;
    /**
     * Shape $ (Value): {@link TaxIdentityPatch}. Merchant-provided legal identity displayed on
     * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
     * collection in display order; replacing the array requires the parent's expected_version.
     * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to
     * add one.
     */
    "tax_identity"?: TaxIdentityPatch;
});
/** Shape $ (Value): {@link CreateCustomerRequestInput}. The request body for: Create customer. */
export type CreateCustomerRequestInput = ({
    /**
     * Shape $ (Value): {@link AddressRequestInput}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
     */
    "billing_address"?: AddressRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "default_invoice_payment_term_id"?: string;
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 320. */
    "email"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): boolean. Flag you set on the customer, for example after checking ID in
     * store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to
     * customer verifications, which prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): string. What to do when an active customer in this environment already has
     * `email`. `error` returns `409 ALREADY_EXISTS` naming that customer. `return_existing`
     * returns that customer unchanged with `200` instead of creating one; it requires `email`.
     * Emails match case-insensitively. Default: "error". Value enum: "error", "return_existing".
     */
    "on_email_conflict"?: "error" | "return_existing";
    /** Shape $ (Value): string. minLength: 1. */
    "phone"?: string;
    /**
     * Shape $ (Value): string. Free-form label you assign, such as wholesale, so promotion and
     * delivery rules can match groups of customers. It is not an ID; Flint does not check it
     * against any resource. minLength: 1.
     */
    "segment"?: string;
    /**
     * Shape $ (Value): {@link AddressRequestInput}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
     */
    "shipping_address"?: AddressRequestInput;
    /** Shape $ (Value): boolean. */
    "tax_exempt"?: boolean;
    /**
     * Shape $ (Value): {@link TaxIdentityRequestInput}. Merchant-provided legal identity displayed
     * on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one.
     */
    "tax_identity"?: TaxIdentityRequestInput;
});
/**
 * Shape $ (Value): {@link CreateCustomerSessionRequest}. The request body for: Create a customer
 * session.
 */
export type CreateCustomerSessionRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 300. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 3600. maximum: 2592000.
     */
    "refresh_expires_in_seconds"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link CreateCustomerSessionRequestInput}. The request body for: Create a
 * customer session.
 */
export type CreateCustomerSessionRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 300. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 3600. maximum: 2592000.
     */
    "refresh_expires_in_seconds"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CreateCustomerVerificationRequest}. The request body for: Create a
 * customer email verification.
 */
export type CreateCustomerVerificationRequest = {
    /**
     * Shape $ (Value): string. Defaults to email when omitted. Explicit null and an empty value
     * are not accepted. Default: "email". Value enum: "email".
     */
    "channel"?: "email" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /** Shape $ (Value): string.  Value enum: "link_guest_purchases". */
    "purpose": "link_guest_purchases" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCustomerVerificationRequestInput}. The request body for: Create a
 * customer email verification.
 */
export type CreateCustomerVerificationRequestInput = {
    /**
     * Shape $ (Value): string. Defaults to email when omitted. Explicit null and an empty value
     * are not accepted. Default: "email". Value enum: "email".
     */
    "channel"?: "email";
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /** Shape $ (Value): string.  Value enum: "link_guest_purchases". */
    "purpose": "link_guest_purchases";
};
/**
 * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
 * when creating a fulfillment: courier, timing window, instructions, and tracking.
 */
export type CreateDeliveryFulfillmentDetails = {
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): string. Time at which the courier collected the order. Format: date-time.
     * minLength: 1.
     */
    "courier_pickup_at"?: string;
    /**
     * Shape $ (Value): integer string. Width of the promised courier pickup window, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Delivery network or merchant fleet provider handling the job.
     * minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string;
    /**
     * Shape $ (Value): string. Buyer-safe support number for the courier or merchant fleet.
     * minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "dispatched_at"?: string;
    /**
     * Shape $ (Value): string. Driver-facing notes for the final handoff. minLength: 1. maxLength:
     * 2048.
     */
    "dropoff_notes"?: string;
    /**
     * Shape $ (Value): string. Deadline after which an undelivered job should enter merchant
     * review. Format: date-time. minLength: 1.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Stable delivery job ID owned by the courier or merchant dispatch
     * system. minLength: 1. maxLength: 255.
     */
    "external_delivery_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "instructions"?: string;
    /** Shape $ (Value): boolean. Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean;
    /**
     * Shape $ (Value): integer string. Expected preparation time before courier pickup, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Time at which the order became ready for courier pickup. Format:
     * date-time. minLength: 1.
     */
    "ready_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "service_area_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
 * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
 */
export type CreateDeliveryFulfillmentDetailsInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "carrier"?: string;
    /**
     * Shape $ (Value): string. Time at which the courier collected the order. Format: date-time.
     * minLength: 1.
     */
    "courier_pickup_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): integer string. Width of the promised courier pickup window, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Delivery network or merchant fleet provider handling the job.
     * minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string;
    /**
     * Shape $ (Value): string. Buyer-safe support number for the courier or merchant fleet.
     * minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "dispatched_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Driver-facing notes for the final handoff. minLength: 1. maxLength:
     * 2048.
     */
    "dropoff_notes"?: string;
    /**
     * Shape $ (Value): string. Deadline after which an undelivered job should enter merchant
     * review. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Stable delivery job ID owned by the courier or merchant dispatch
     * system. minLength: 1. maxLength: 255.
     */
    "external_delivery_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "instructions"?: string;
    /** Shape $ (Value): boolean. Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean;
    /**
     * Shape $ (Value): integer string. Expected preparation time before courier pickup, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Time at which the order became ready for courier pickup. Format:
     * date-time. minLength: 1.
     */
    "ready_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "service_area_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. minLength: 1.
     */
    "tracking_url"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
};
/**
 * Shape $ (Value): {@link CreateDeliveryLocationSetRequest}. The request body for: Create delivery
 * location set.
 */
export type CreateDeliveryLocationSetRequest = {
    /**
     * Shape $ (Value): {@link DeliveryLocationSetConfiguration}. The location IDs in a delivery
     * location set.
     */
    "configuration": DeliveryLocationSetConfiguration;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryLocationSetRequestInput}. The request body for: Create
 * delivery location set.
 */
export type CreateDeliveryLocationSetRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryLocationSetConfigurationInput}. The location IDs in a
     * delivery location set.
     */
    "configuration": DeliveryLocationSetConfigurationInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequest}. The request body for: Create delivery
 * method.
 */
export type CreateDeliveryMethodRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequest}. The configuration you
     * supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
    /** Shape $ (Value): string.  Value enum: "shipment", "local_delivery", "pickup". */
    "type": "shipment" | "local_delivery" | "pickup" | (string & {});
})
    & ((Exclude<CreateDeliveryMethodRequestShipment & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestLocalDelivery & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestPickup & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestInput}. The request body for: Create delivery
 * method.
 */
export type CreateDeliveryMethodRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequestInput}. The configuration
     * you supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
    /** Shape $ (Value): string.  Value enum: "shipment", "local_delivery", "pickup". */
    "type": "shipment" | "local_delivery" | "pickup";
})
    & ((Exclude<CreateDeliveryMethodRequestShipmentInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestLocalDeliveryInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestPickupInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestLocalDelivery}. The `local_delivery` variant
 * of `CreateDeliveryMethodRequest`.
 */
export type CreateDeliveryMethodRequestLocalDelivery = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequest}. The configuration you
     * supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
    /** Shape $ (Value): string.  Value enum: "local_delivery". */
    "type": "local_delivery" | (string & {});
})
    & ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationRequest}. The configuration you supply
     * for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and
     * recipient requirements. Shape $.buyer_instructions (Optional): {@link
     * BuyerInstructionsConfig}. Controls whether checkout collects buyer instructions for this
     * method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. Shape $.charge_tax_category (Optional):
     * string or null. Tax category of the delivery charge, which decides its automatic tax and
     * appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. Shape $.eligibility
     * (Optional): {@link DeliveryEligibilityExpression}. Conditions that decide where this method
     * is offered. Omit this field to offer the method everywhere the merchant serves. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes. Shape $.estimate (Optional): {@link
     * DeliveryEstimateRule}. The buyer-visible delivery or pickup estimate. Use type none when the
     * merchant makes no timing promise. The timing estimate rule you supply for a delivery method,
     * chosen by `type`: none, a transit time, or a schedule window. Shape
     * $.minimum_option_lifetime_seconds (Optional): integer string. Minimum remaining quote
     * lifetime required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899. Shape $.origin (Required): {@link
     * DeliveryMethodOriginSelectorRequest}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. Shape $.pricing (Required):
     * {@link DeliveryPricingStrategyRequest}. How Flint calculates the delivery charge. The
     * pricing strategy you supply when updating a delivery method. Set `type` and the matching
     * property. Shape $.public_details (Optional): object. Buyer-visible structured details
     * supplied by the merchant. Shape $.public_details.instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. Shape
     * $.public_details.pickup_mode (Optional): string. Required for pickup methods and rejected
     * for other method types. Value enum: "in_store", "curbside", "locker", "other". Shape
     * $.public_details.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "same_day", "on_demand", "scheduled". Shape
     * $.quote_input_fields (Optional): Array of string. Address and coordinate fields a callback
     * method requires and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirement}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Shape $.recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirement}. Says whether a recipient field (`name`, `email`, or `phone`)
     * is required for a delivery method, and the format it must use. Shape
     * $.selection_guarantee_seconds (Optional): integer string. How long after evaluation Flint
     * guarantees a selected price, when that is later than the option expiry. Defaults to 0, which
     * uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked
     * inventory hold until the checkout's calculation expiry. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. Shape $.taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequest & object, readonly unknown[]>)
        & ({
        /**
         * Shape $ (Value): object. Shape $.service_level (Optional): string. Value enum:
         * "on_demand", "same_day", "scheduled".
         */
        "public_details"?: ({
            /** Shape $ (Value): string.  Value enum: "on_demand", "same_day", "scheduled". */
            "service_level"?: "on_demand" | "same_day" | "scheduled" | (string & {});
        });
    });
    /** Shape $ (Value): string.  Value enum: "local_delivery". */
    "type": "local_delivery" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestLocalDeliveryInput}. The `local_delivery`
 * variant of `CreateDeliveryMethodRequest`.
 */
export type CreateDeliveryMethodRequestLocalDeliveryInput = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequestInput}. The configuration
     * you supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
    /** Shape $ (Value): string.  Value enum: "local_delivery". */
    "type": "local_delivery";
})
    & ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationRequestInput}. The configuration you
     * supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings,
     * and recipient requirements. Shape $.buyer_instructions (Optional): {@link
     * BuyerInstructionsConfigInput}. Controls whether checkout collects buyer instructions for
     * this method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. Shape $.charge_tax_category (Optional):
     * string or null. Tax category of the delivery charge, which decides its automatic tax and
     * appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. Shape $.eligibility
     * (Optional): {@link DeliveryEligibilityExpressionInput}. Conditions that decide where this
     * method is offered. Omit this field to offer the method everywhere the merchant serves. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. Shape $.estimate (Optional):
     * {@link DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use
     * type none when the merchant makes no timing promise. The timing estimate rule you supply for
     * a delivery method, chosen by `type`: none, a transit time, or a schedule window. Shape
     * $.minimum_option_lifetime_seconds (Optional): integer string. Minimum remaining quote
     * lifetime required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899. Shape $.origin (Required): {@link
     * DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. Shape $.pricing (Required):
     * {@link DeliveryPricingStrategyRequestInput}. How Flint calculates the delivery charge. The
     * pricing strategy you supply when updating a delivery method. Set `type` and the matching
     * property. Shape $.public_details (Optional): object. Buyer-visible structured details
     * supplied by the merchant. Shape $.public_details.instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. Shape
     * $.public_details.pickup_mode (Optional): string. Required for pickup methods and rejected
     * for other method types. Value enum: "in_store", "curbside", "locker", "other". Shape
     * $.public_details.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "same_day", "on_demand", "scheduled". Shape
     * $.quote_input_fields (Optional): Array of string. Address and coordinate fields a callback
     * method requires and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirementInput}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Shape $.recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or
     * `phone`) is required for a delivery method, and the format it must use. Shape
     * $.selection_guarantee_seconds (Optional): integer string. How long after evaluation Flint
     * guarantees a selected price, when that is later than the option expiry. Defaults to 0, which
     * uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked
     * inventory hold until the checkout's calculation expiry. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. Shape $.taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**
         * Shape $ (Value): object. Shape $.service_level (Optional): string. Value enum:
         * "on_demand", "same_day", "scheduled".
         */
        "public_details"?: ({
            /** Shape $ (Value): string.  Value enum: "on_demand", "same_day", "scheduled". */
            "service_level"?: "on_demand" | "same_day" | "scheduled";
        })
            & ({
            "pickup_mode"?: never;
        });
    });
    /** Shape $ (Value): string.  Value enum: "local_delivery". */
    "type": "local_delivery";
});
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestPickup}. The `pickup` variant of
 * `CreateDeliveryMethodRequest`.
 */
export type CreateDeliveryMethodRequestPickup = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequest}. The configuration you
     * supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
    /** Shape $ (Value): string.  Value enum: "pickup". */
    "type": "pickup" | (string & {});
})
    & ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationRequest}. The configuration you supply
     * for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and
     * recipient requirements. Shape $.buyer_instructions (Optional): {@link
     * BuyerInstructionsConfig}. Controls whether checkout collects buyer instructions for this
     * method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. Shape $.charge_tax_category (Optional):
     * string or null. Tax category of the delivery charge, which decides its automatic tax and
     * appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. Shape $.eligibility
     * (Optional): {@link DeliveryEligibilityExpression}. Conditions that decide where this method
     * is offered. Omit this field to offer the method everywhere the merchant serves. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes. Shape $.estimate (Optional): {@link
     * DeliveryEstimateRule}. The buyer-visible delivery or pickup estimate. Use type none when the
     * merchant makes no timing promise. The timing estimate rule you supply for a delivery method,
     * chosen by `type`: none, a transit time, or a schedule window. Shape
     * $.minimum_option_lifetime_seconds (Optional): integer string. Minimum remaining quote
     * lifetime required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899. Shape $.origin (Required): {@link
     * DeliveryMethodOriginSelectorRequest}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. Shape
     * $.origin.delivery_location_set_id (Optional): string. Named delivery location set to reuse.
     * Send either delivery_location_set_id or inline location_ids, never both. The set may contain
     * at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection.
     * minLength: 1. Shape $.origin.location_id (Optional): string. minLength: 1. Shape
     * $.origin.location_ids (Optional): Array of string. Inline Location IDs for a set managed by
     * this delivery method. Send either location_ids or delivery_location_set_id, never both. Use
     * 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for
     * pickup_location_collection. Reads return these Location IDs without exposing the managed
     * set. Shape $.origin.location_ids[] (Value): string. minLength: 1. Shape $.origin.type
     * (Required): string. Value enum: "pickup_location_collection". Shape $.origin.oneOf[1]
     * (Value): {@link DeliveryMethodOriginSelectorInputFixedLocation}. The `fixed_location`
     * variant of `DeliveryMethodOriginSelectorInput`. Shape $.origin.oneOf[2] (Value): {@link
     * DeliveryMethodOriginSelectorInputAllocatedOriginGroup}. The `allocated_origin_group` variant
     * of `DeliveryMethodOriginSelectorInput`. Shape $.origin.oneOf[3] (Value): {@link
     * DeliveryMethodOriginSelectorInputPickupLocationCollection}. The `pickup_location_collection`
     * variant of `DeliveryMethodOriginSelectorInput`. Shape $.pricing (Required): {@link
     * DeliveryPricingStrategyRequest}. How Flint calculates the delivery charge. The pricing
     * strategy you supply when updating a delivery method. Set `type` and the matching property.
     * Shape $.public_details (Required): object. Buyer-visible structured details supplied by the
     * merchant. Shape $.public_details.instructions (Optional): string. Buyer-visible instructions
     * for this method. minLength: 1. maxLength: 2048. Shape $.public_details.pickup_mode
     * (Required): string. Required for pickup methods and rejected for other method types. Value
     * enum: "in_store", "curbside", "locker", "other". Shape $.public_details.service_level
     * (Optional): string. Buyer-visible service level. Shipment accepts economy, standard,
     * expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day,
     * scheduled. Value enum: "economy", "standard", "expedited", "express", "overnight",
     * "same_day", "on_demand", "scheduled". Shape $.quote_input_fields (Optional): Array of
     * string. Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirement}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Shape $.recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirement}. Says whether a recipient field (`name`, `email`, or `phone`)
     * is required for a delivery method, and the format it must use. Shape
     * $.selection_guarantee_seconds (Optional): integer string. How long after evaluation Flint
     * guarantees a selected price, when that is later than the option expiry. Defaults to 0, which
     * uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked
     * inventory hold until the checkout's calculation expiry. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. Shape $.taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequest & object, readonly unknown[]>)
        & ({
        /**
         * Shape $ (Value): {@link DeliveryMethodOriginSelectorRequest}. The origin you supply for
         * a delivery method, chosen by `type`: a fixed location, or locations from a delivery
         * location set or an inline list. Shape $.delivery_location_set_id (Optional): string.
         * Named delivery location set to reuse. Send either delivery_location_set_id or inline
         * location_ids, never both. The set may contain at most 25 Locations for
         * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Shape
         * $.location_id (Optional): string. minLength: 1. Shape $.location_ids (Optional): Array
         * of string. Inline Location IDs for a set managed by this delivery method. Send either
         * location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for
         * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
         * Location IDs without exposing the managed set. Shape $.location_ids[] (Value): string.
         * minLength: 1. Shape $.type (Required): string. Value enum: "pickup_location_collection".
         * Shape $.oneOf[1] (Value): {@link DeliveryMethodOriginSelectorInputFixedLocation}. The
         * `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. Shape $.oneOf[2]
         * (Value): {@link DeliveryMethodOriginSelectorInputAllocatedOriginGroup}. The
         * `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. Shape
         * $.oneOf[3] (Value): {@link DeliveryMethodOriginSelectorInputPickupLocationCollection}.
         * The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.
         */
        "origin": (Exclude<DeliveryMethodOriginSelectorRequest & object, readonly unknown[]>)
            & ({
            /** Shape $ (Value): string.  Value enum: "pickup_location_collection". */
            "type"?: "pickup_location_collection" | (string & {});
        });
        /**
         * Shape $ (Value): object. Shape $.pickup_mode (Required): string. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "public_details": ({
            /** Shape $ (Value): string.  Value enum: "in_store", "curbside", "locker", "other". */
            "pickup_mode": "in_store" | "curbside" | "locker" | "other" | (string & {});
        });
    });
    /** Shape $ (Value): string.  Value enum: "pickup". */
    "type": "pickup" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestPickupInput}. The `pickup` variant of
 * `CreateDeliveryMethodRequest`.
 */
export type CreateDeliveryMethodRequestPickupInput = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequestInput}. The configuration
     * you supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
    /** Shape $ (Value): string.  Value enum: "pickup". */
    "type": "pickup";
})
    & ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationRequestInput}. The configuration you
     * supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings,
     * and recipient requirements. Shape $.buyer_instructions (Optional): {@link
     * BuyerInstructionsConfigInput}. Controls whether checkout collects buyer instructions for
     * this method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. Shape $.charge_tax_category (Optional):
     * string or null. Tax category of the delivery charge, which decides its automatic tax and
     * appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. Shape $.eligibility
     * (Optional): {@link DeliveryEligibilityExpressionInput}. Conditions that decide where this
     * method is offered. Omit this field to offer the method everywhere the merchant serves. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. Shape $.estimate (Optional):
     * {@link DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use
     * type none when the merchant makes no timing promise. The timing estimate rule you supply for
     * a delivery method, chosen by `type`: none, a transit time, or a schedule window. Shape
     * $.minimum_option_lifetime_seconds (Optional): integer string. Minimum remaining quote
     * lifetime required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899. Shape $.origin (Required): {@link
     * DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. Shape
     * $.origin.delivery_location_set_id (Optional): string. Named delivery location set to reuse.
     * Send either delivery_location_set_id or inline location_ids, never both. The set may contain
     * at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection.
     * minLength: 1. Shape $.origin.location_id (Optional): string. minLength: 1. Shape
     * $.origin.location_ids (Optional): Array of string. Inline Location IDs for a set managed by
     * this delivery method. Send either location_ids or delivery_location_set_id, never both. Use
     * 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for
     * pickup_location_collection. Reads return these Location IDs without exposing the managed
     * set. Shape $.origin.location_ids[] (Value): string. minLength: 1. Shape $.origin.type
     * (Required): string. Value enum: "pickup_location_collection". Shape $.origin.oneOf[1]
     * (Value): {@link DeliveryMethodOriginSelectorInputFixedLocationInput}. The `fixed_location`
     * variant of `DeliveryMethodOriginSelectorInput`. Shape $.origin.oneOf[2] (Value): {@link
     * DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput}. The `allocated_origin_group`
     * variant of `DeliveryMethodOriginSelectorInput`. Shape $.origin.oneOf[3] (Value): {@link
     * DeliveryMethodOriginSelectorInputPickupLocationCollectionInput}. The
     * `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`. Shape $.pricing
     * (Required): {@link DeliveryPricingStrategyRequestInput}. How Flint calculates the delivery
     * charge. The pricing strategy you supply when updating a delivery method. Set `type` and the
     * matching property. Shape $.public_details (Required): object. Buyer-visible structured
     * details supplied by the merchant. Shape $.public_details.instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. Shape
     * $.public_details.pickup_mode (Required): string. Required for pickup methods and rejected
     * for other method types. Value enum: "in_store", "curbside", "locker", "other". Shape
     * $.public_details.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day", "on_demand", "scheduled". Shape $.quote_input_fields (Optional):
     * Array of string. Address and coordinate fields a callback method requires and is allowed to
     * receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.quote_input_fields[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirementInput}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Shape $.recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or
     * `phone`) is required for a delivery method, and the format it must use. Shape
     * $.selection_guarantee_seconds (Optional): integer string. How long after evaluation Flint
     * guarantees a selected price, when that is later than the option expiry. Defaults to 0, which
     * uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked
     * inventory hold until the checkout's calculation expiry. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. Shape $.taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**
         * Shape $ (Value): {@link DeliveryMethodOriginSelectorRequestInput}. The origin you supply
         * for a delivery method, chosen by `type`: a fixed location, or locations from a delivery
         * location set or an inline list. Shape $.delivery_location_set_id (Optional): string.
         * Named delivery location set to reuse. Send either delivery_location_set_id or inline
         * location_ids, never both. The set may contain at most 25 Locations for
         * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Shape
         * $.location_id (Optional): string. minLength: 1. Shape $.location_ids (Optional): Array
         * of string. Inline Location IDs for a set managed by this delivery method. Send either
         * location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for
         * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
         * Location IDs without exposing the managed set. Shape $.location_ids[] (Value): string.
         * minLength: 1. Shape $.type (Required): string. Value enum: "pickup_location_collection".
         * Shape $.oneOf[1] (Value): {@link DeliveryMethodOriginSelectorInputFixedLocationInput}.
         * The `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. Shape $.oneOf[2]
         * (Value): {@link DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput}. The
         * `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. Shape
         * $.oneOf[3] (Value): {@link
         * DeliveryMethodOriginSelectorInputPickupLocationCollectionInput}. The
         * `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.
         */
        "origin": (Exclude<DeliveryMethodOriginSelectorRequestInput & object, readonly unknown[]>)
            & ({
            /** Shape $ (Value): string.  Value enum: "pickup_location_collection". */
            "type"?: "pickup_location_collection";
        });
        /**
         * Shape $ (Value): object. Shape $.pickup_mode (Required): string. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "public_details": ({
            /** Shape $ (Value): string.  Value enum: "in_store", "curbside", "locker", "other". */
            "pickup_mode": "in_store" | "curbside" | "locker" | "other";
        })
            & ({
            "service_level"?: never;
        });
    });
    /** Shape $ (Value): string.  Value enum: "pickup". */
    "type": "pickup";
});
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestShipment}. The `shipment` variant of
 * `CreateDeliveryMethodRequest`.
 */
export type CreateDeliveryMethodRequestShipment = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequest}. The configuration you
     * supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
    /** Shape $ (Value): string.  Value enum: "shipment". */
    "type": "shipment" | (string & {});
})
    & ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationRequest}. The configuration you supply
     * for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and
     * recipient requirements. Shape $.buyer_instructions (Optional): {@link
     * BuyerInstructionsConfig}. Controls whether checkout collects buyer instructions for this
     * method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. Shape $.charge_tax_category (Optional):
     * string or null. Tax category of the delivery charge, which decides its automatic tax and
     * appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. Shape $.eligibility
     * (Optional): {@link DeliveryEligibilityExpression}. Conditions that decide where this method
     * is offered. Omit this field to offer the method everywhere the merchant serves. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes. Shape $.estimate (Optional): {@link
     * DeliveryEstimateRule}. The buyer-visible delivery or pickup estimate. Use type none when the
     * merchant makes no timing promise. The timing estimate rule you supply for a delivery method,
     * chosen by `type`: none, a transit time, or a schedule window. Shape
     * $.minimum_option_lifetime_seconds (Optional): integer string. Minimum remaining quote
     * lifetime required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899. Shape $.origin (Required): {@link
     * DeliveryMethodOriginSelectorRequest}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. Shape $.pricing (Required):
     * {@link DeliveryPricingStrategyRequest}. How Flint calculates the delivery charge. The
     * pricing strategy you supply when updating a delivery method. Set `type` and the matching
     * property. Shape $.public_details (Optional): object. Buyer-visible structured details
     * supplied by the merchant. Shape $.public_details.instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. Shape
     * $.public_details.pickup_mode (Optional): string. Required for pickup methods and rejected
     * for other method types. Value enum: "in_store", "curbside", "locker", "other". Shape
     * $.public_details.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day". Shape $.quote_input_fields (Optional): Array of string. Address and
     * coordinate fields a callback method requires and is allowed to receive. maxItems: 12.
     * uniqueItems: true. [] enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate". Shape $.quote_input_fields[] (Value): string. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirement}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Shape $.recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirement}. Says whether a recipient field (`name`, `email`, or `phone`)
     * is required for a delivery method, and the format it must use. Shape
     * $.selection_guarantee_seconds (Optional): integer string. How long after evaluation Flint
     * guarantees a selected price, when that is later than the option expiry. Defaults to 0, which
     * uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked
     * inventory hold until the checkout's calculation expiry. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. Shape $.taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequest & object, readonly unknown[]>)
        & ({
        /**
         * Shape $ (Value): object. Shape $.service_level (Optional): string. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day".
         */
        "public_details"?: ({
            /**
             * Shape $ (Value): string. Value enum: "economy", "standard", "expedited", "express",
             * "overnight", "same_day".
             */
            "service_level"?: "economy" | "standard" | "expedited" | "express" | "overnight" | "same_day" | (string & {});
        });
    });
    /** Shape $ (Value): string.  Value enum: "shipment". */
    "type": "shipment" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateDeliveryMethodRequestShipmentInput}. The `shipment` variant of
 * `CreateDeliveryMethodRequest`.
 */
export type CreateDeliveryMethodRequestShipmentInput = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequestInput}. The configuration
     * you supply when creating a delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
    /** Shape $ (Value): string.  Value enum: "shipment". */
    "type": "shipment";
})
    & ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationRequestInput}. The configuration you
     * supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings,
     * and recipient requirements. Shape $.buyer_instructions (Optional): {@link
     * BuyerInstructionsConfigInput}. Controls whether checkout collects buyer instructions for
     * this method. Controls buyer instructions for a delivery option. Omit it from a method
     * configuration to disable instruction collection. Shape $.charge_tax_category (Optional):
     * string or null. Tax category of the delivery charge, which decides its automatic tax and
     * appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null. Shape $.eligibility
     * (Optional): {@link DeliveryEligibilityExpressionInput}. Conditions that decide where this
     * method is offered. Omit this field to offer the method everywhere the merchant serves. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. Shape $.estimate (Optional):
     * {@link DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use
     * type none when the merchant makes no timing promise. The timing estimate rule you supply for
     * a delivery method, chosen by `type`: none, a transit time, or a schedule window. Shape
     * $.minimum_option_lifetime_seconds (Optional): integer string. Minimum remaining quote
     * lifetime required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899. Shape $.origin (Required): {@link
     * DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. Shape $.pricing (Required):
     * {@link DeliveryPricingStrategyRequestInput}. How Flint calculates the delivery charge. The
     * pricing strategy you supply when updating a delivery method. Set `type` and the matching
     * property. Shape $.public_details (Optional): object. Buyer-visible structured details
     * supplied by the merchant. Shape $.public_details.instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. Shape
     * $.public_details.pickup_mode (Optional): string. Required for pickup methods and rejected
     * for other method types. Value enum: "in_store", "curbside", "locker", "other". Shape
     * $.public_details.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day". Shape $.quote_input_fields (Optional): Array of string. Address and
     * coordinate fields a callback method requires and is allowed to receive. maxItems: 12.
     * uniqueItems: true. [] enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate". Shape $.quote_input_fields[] (Value): string. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $.recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirementInput}.
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Shape $.recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or
     * `phone`) is required for a delivery method, and the format it must use. Shape
     * $.selection_guarantee_seconds (Optional): integer string. How long after evaluation Flint
     * guarantees a selected price, when that is later than the option expiry. Defaults to 0, which
     * uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked
     * inventory hold until the checkout's calculation expiry. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. Shape $.taxable (Optional):
     * boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**
         * Shape $ (Value): object. Shape $.service_level (Optional): string. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day".
         */
        "public_details"?: ({
            /**
             * Shape $ (Value): string. Value enum: "economy", "standard", "expedited", "express",
             * "overnight", "same_day".
             */
            "service_level"?: "economy" | "standard" | "expedited" | "express" | "overnight" | "same_day";
        })
            & ({
            "pickup_mode"?: never;
        });
    });
    /** Shape $ (Value): string.  Value enum: "shipment". */
    "type": "shipment";
});
/**
 * Shape $ (Value): {@link CreateDeliveryOptionsPreviewRequest}. The `delivery_options` variant of
 * `CreateDeliveryPreviewRequest`.
 */
export type CreateDeliveryOptionsPreviewRequest = {
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequest}. The buyer's location for pickup or
     * local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "delivery_method_ids": Array<string>;
    /**
     * Shape $ (Value): {@link DeliveryAddressRequest}. An address you supply for delivery quotes,
     * previews, and selections.
     */
    "destination_address"?: DeliveryAddressRequest;
    /**
     * Shape $ (Value): {@link InventoryRoutingSource}. Chooses where a delivery options preview
     * routes inventory from: a fixed Location, an inventory allocation policy, or one policy
     * revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItem}. minItems: 1. maxItems: 100. Shape $[]
     * (Value): {@link CreateOrderLineItem}. A line item to add to an order: a catalog variant, a
     * bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
    /**
     * Shape $ (Value): string. The delivery question this preview answers. - `delivery_options`:
     * Evaluates delivery methods and prices for the supplied items and buyer location. Value enum:
     * "delivery_options".
     */
    "mode": "delivery_options" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "pickup_location_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "pricing_context"?: Record<string, string>;
};
/**
 * Shape $ (Value): {@link CreateDeliveryOptionsPreviewRequestInput}. The `delivery_options`
 * variant of `CreateDeliveryPreviewRequest`.
 */
export type CreateDeliveryOptionsPreviewRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequestInput}. The buyer's location for pickup
     * or local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequestInput;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "delivery_method_ids": Array<string>;
    /**
     * Shape $ (Value): {@link DeliveryAddressRequestInput}. An address you supply for delivery
     * quotes, previews, and selections.
     */
    "destination_address"?: DeliveryAddressRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryPreviewRoutingSourceInput}. Chooses where a delivery options
     * preview routes inventory from: a fixed Location, an inventory allocation policy, or one
     * policy revision.
     */
    "inventory_routing_source"?: DeliveryPreviewRoutingSourceInput;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItemRequestInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link CreateOrderLineItemRequestInput}. A line item to add to an
     * order: a catalog variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
    /**
     * Shape $ (Value): string. The delivery question this preview answers. - `delivery_options`:
     * Evaluates delivery methods and prices for the supplied items and buyer location. Value enum:
     * "delivery_options".
     */
    "mode": "delivery_options";
    /** Shape $ (Value): string. minLength: 1. */
    "pickup_location_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "pricing_context"?: Record<string, string>;
};
/**
 * Shape $ (Value): {@link CreateDeliveryPickupLocationsPreviewRequest}. The `pickup_locations`
 * variant of `CreateDeliveryPreviewRequest`.
 */
export type CreateDeliveryPickupLocationsPreviewRequest = {
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequest}. The buyer's location for pickup or
     * local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /**
     * Shape $ (Value): string. Checkout session whose pickup locations to evaluate. Checkout
     * credentials must identify their own session. minLength: 1.
     */
    "checkout_session_id": string;
    /**
     * Shape $ (Value): string or null. ID of the checkout's current delivery selection, as GET
     * /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current returns it, or null
     * when there is none. Any other value returns 409 DELIVERY_PICKUP_AVAILABILITY_CHANGED. The
     * search does not change or release the selection. minLength: 1.
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Shape $ (Value): {@link DeliveryDistance}. A maximum distance from the buyer location, as a
     * value and unit, that limits which pickup locations a preview returns.
     */
    "maximum_distance"?: DeliveryDistance;
    /**
     * Shape $ (Value): string. The delivery question this preview answers. - `pickup_locations`:
     * Lists the checkout session's pickup locations and whether each can supply its items. Value
     * enum: "pickup_locations".
     */
    "mode": "pickup_locations" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateDeliveryPickupLocationsPreviewRequestInput}. The
 * `pickup_locations` variant of `CreateDeliveryPreviewRequest`.
 */
export type CreateDeliveryPickupLocationsPreviewRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequestInput}. The buyer's location for pickup
     * or local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequestInput;
    /**
     * Shape $ (Value): string. Checkout session whose pickup locations to evaluate. Checkout
     * credentials must identify their own session. minLength: 1.
     */
    "checkout_session_id": string;
    /**
     * Shape $ (Value): string or null. ID of the checkout's current delivery selection, as GET
     * /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current returns it, or null
     * when there is none. Any other value returns 409 DELIVERY_PICKUP_AVAILABILITY_CHANGED. The
     * search does not change or release the selection. minLength: 1.
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Shape $ (Value): {@link DeliveryPickupAvailabilityMaximumDistanceRequestInput}. A maximum
     * distance from the buyer location, as a value and unit, that limits which pickup locations a
     * preview returns.
     */
    "maximum_distance"?: DeliveryPickupAvailabilityMaximumDistanceRequestInput;
    /**
     * Shape $ (Value): string. The delivery question this preview answers. - `pickup_locations`:
     * Lists the checkout session's pickup locations and whether each can supply its items. Value
     * enum: "pickup_locations".
     */
    "mode": "pickup_locations";
};
