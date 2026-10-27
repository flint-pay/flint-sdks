import type {
    ReturnReplacementLineItemRequestInput,
    ReturnResolutionAdjustmentRequestInput,
    ReturnResolutionLineItemRequestInput,
    ReturnReplacementLineItemRequest,
    ReturnResolutionAdjustmentRequest,
    ReturnResolutionLineItemRequest,
    ReturnShipmentLineItemAllocationInput
} from './types-42.js';
import type { RiskPredicateNode, RiskPredicateNodeInput } from './types-43.js';
import type {
    SubscriptionIntervalOption,
    SubscriptionIntervalOptionInput,
    SubscriptionDeliveryDestinationRequest,
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionBillingScheduleRequest,
    SubscriptionBillingStartRequest,
    SubscriptionDeliveryRequest,
    SubscriptionBillingScheduleRequestInput,
    SubscriptionBillingStartRequestInput,
    SubscriptionDeliveryRequestInput
} from './types-45.js';
import type { ImageRequest, ImageRequestInput } from './types-20.js';
import type { InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-25.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type {
    SubscriptionPlanLineItemRequest,
    SubscriptionPlanLineItemRequestInput,
    SubscriptionServiceLocationRequest,
    SubscriptionTermsRequest,
    SubscriptionServiceLocationRequestInput,
    SubscriptionTermsRequestInput
} from './types-46.js';
import type { UpdateDeliveryMethodRequest, UpdateDeliveryMethodRequestInput, TaxIdentity } from './types-47.js';
import type { WorkloadIdentityClaimConditionRequest, WorkloadIdentityClaimConditionRequestInput } from './types-62.js';
import type { CredentialProvider } from '../runtime.js';
import type { CreditNoteLineItem, CreditNoteCorrectionRequestQuantityInput } from './types-10.js';
import type { ExpandedInvoiceSummary } from './types-16.js';
import type { ResponseMeta } from './types-40.js';
import type { Invoice } from './types-26.js';
/**
 * Shape $ (Value): {@link CreateReturnResolutionRequestCorrectionInput}. The `correction` variant
 * of `CreateReturnResolutionRequest`.
 */
export type CreateReturnResolutionRequestCorrectionInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id": string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
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
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /** Shape $ (Value): string.  Value enum: "correction". */
    "resolution_type": "correction";
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "adjustments": unknown;
    /** Shape $ (Value): any.  Value enum: "correction". */
    "resolution_type"?: "correction";
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id": string;
})
    & (({
    "line_items"?: never;
})
    & ({
    "replacement_line_items"?: never;
})
    & ({
    "pricing_basis"?: never;
})));
/**
 * Shape $ (Value): {@link CreateReturnResolutionRequestInput}. The request body for: Create return
 * resolution.
 */
export type CreateReturnResolutionRequestInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
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
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction";
})
    & ((Exclude<CreateReturnResolutionRequestStandardInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionRequestCorrectionInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateReturnResolutionRequestStandard}. The `exchange` variant of
 * `CreateReturnResolutionRequest`. The `no_monetary_action` variant of
 * `CreateReturnResolutionRequest`. The `refund` variant of `CreateReturnResolutionRequest`. The
 * `replacement` variant of `CreateReturnResolutionRequest`. The `store_credit` variant of
 * `CreateReturnResolutionRequest`.
 */
export type CreateReturnResolutionRequestStandard = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequest}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
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
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequest}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
    /**
     * Shape $ (Value): any. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "resolution_type"?: unknown;
}));
/**
 * Shape $ (Value): {@link CreateReturnResolutionRequestStandardInput}. The `exchange` variant of
 * `CreateReturnResolutionRequest`. The `no_monetary_action` variant of
 * `CreateReturnResolutionRequest`. The `refund` variant of `CreateReturnResolutionRequest`. The
 * `replacement` variant of `CreateReturnResolutionRequest`. The `store_credit` variant of
 * `CreateReturnResolutionRequest`.
 */
export type CreateReturnResolutionRequestStandardInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
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
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
    /**
     * Shape $ (Value): any. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
})
    & ({
    "corrects_return_resolution_id"?: never;
}));
/** Shape $ (Value): {@link CreateRiskListRequest}. The request body for: Create a risk list. */
export type CreateRiskListRequest = {
    /** Shape $ (Value): string. minLength: 1. pattern: ^[a-z][a-z0-9_]{0,127}$. */
    "alias": string;
    /**
     * Shape $ (Value): string. Values are trimmed and compared exactly after item-type
     * normalization for deduplication and membership. card_fingerprint is the 32-character
     * hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string
     * preserves case and Unicode composition. string and email are lowercased, with accents
     * preserved. email requires a bare address. email_domain is lowercased, has one final dot
     * removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form,
     * including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin
     * preserves 6 through 8 digits, including leading zeros, and matches the full value.
     * customer_id preserves the validated ID. Value enum: "card_fingerprint", "card_bin", "email",
     * "email_domain", "ip_address", "country", "customer_id", "string", "case_sensitive_string".
     */
    "item_type": "card_fingerprint"
        | "card_bin"
        | "email"
        | "email_domain"
        | "ip_address"
        | "country"
        | "customer_id"
        | "string"
        | "case_sensitive_string"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateRiskListRequestInput}. The request body for: Create a risk list.
 */
export type CreateRiskListRequestInput = {
    /** Shape $ (Value): string. minLength: 1. pattern: ^[a-z][a-z0-9_]{0,127}$. */
    "alias": string;
    /**
     * Shape $ (Value): string. Values are trimmed and compared exactly after item-type
     * normalization for deduplication and membership. card_fingerprint is the 32-character
     * hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string
     * preserves case and Unicode composition. string and email are lowercased, with accents
     * preserved. email requires a bare address. email_domain is lowercased, has one final dot
     * removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form,
     * including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin
     * preserves 6 through 8 digits, including leading zeros, and matches the full value.
     * customer_id preserves the validated ID. Value enum: "card_fingerprint", "card_bin", "email",
     * "email_domain", "ip_address", "country", "customer_id", "string", "case_sensitive_string".
     */
    "item_type": "card_fingerprint"
        | "card_bin"
        | "email"
        | "email_domain"
        | "ip_address"
        | "country"
        | "customer_id"
        | "string"
        | "case_sensitive_string";
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateRiskPreviewRequest}. The request body for: Create a risk preview.
 */
export type CreateRiskPreviewRequest = ({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds" | (string & {});
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNode;
    /** Shape $ (Value): string. minLength: 1. */
    "risk_rule_id"?: string;
})
    & ((({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNode;
}))
    | ({
    /** Shape $ (Value): string. minLength: 1. */
    "risk_rule_id": string;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateRiskPreviewRequestInput}. The request body for: Create a risk
 * preview.
 */
export type CreateRiskPreviewRequestInput = {
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds";
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeInput;
    /** Shape $ (Value): string. minLength: 1. */
    "risk_rule_id"?: never;
}
    | {
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds";
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNodeInput;
    /** Shape $ (Value): string. minLength: 1. */
    "risk_rule_id": string;
};
/** Shape $ (Value): {@link CreateRiskRuleRequest}. The request body for: Create a risk rule. */
export type CreateRiskRuleRequest = {
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "description": string;
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNode;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateRiskRuleRequestInput}. The request body for: Create a risk rule.
 */
export type CreateRiskRuleRequestInput = {
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds";
    /** Shape $ (Value): string. minLength: 1. */
    "description": string;
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeInput;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/** Shape $ (Value): {@link CreateSandboxRequest}. The request body for: Create sandbox. */
export type CreateSandboxRequest = ({
    /** Shape $ (Value): boolean. */
    "issue_test_key"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "test_key_name"?: string;
})
    & ((({
    /** Shape $ (Value): any.  Value enum: true. */
    "issue_test_key": unknown;
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
    | (Record<string, unknown>)))
    | (({
    /** Shape $ (Value): any.  Value enum: false. */
    "issue_test_key"?: unknown;
}))
    | (Record<string, unknown>));
/** Shape $ (Value): {@link CreateSandboxRequestInput}. The request body for: Create sandbox. */
export type CreateSandboxRequestInput = ({
    /** Shape $ (Value): boolean. */
    "issue_test_key"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "test_key_name"?: string;
})
    & ((({
    /** Shape $ (Value): any.  Value enum: true. */
    "issue_test_key": (true) & (true);
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
})))))
    | (({
    /** Shape $ (Value): any.  Value enum: false. */
    "issue_test_key"?: (false) & (false);
})
    & (({
    "scopes"?: never;
}) & ({
    "scope_preset"?: never;
}) & ({
    "test_key_name"?: never;
}))));
/**
 * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
 * creating a fulfillment: the scheduled start and end, timezone, and notes.
 */
export type CreateServiceFulfillmentDetails = {
    /** Shape $ (Value): string. minLength: 1. */
    "notes"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_start_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply when
 * creating a fulfillment: the scheduled start and end, timezone, and notes.
 */
export type CreateServiceFulfillmentDetailsInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "notes"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_start_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
};
/** Shape $ (Value): {@link CreateShipmentRequest}. The request body for: Create shipment. */
export type CreateShipmentRequest = ({
    /** Shape $ (Value): string.  Value enum: "outbound", "return". */
    "direction"?: "outbound" | "return" | (string & {});
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
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "return_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
})
    & ((({
    /** Shape $ (Value): string.  Value enum: "outbound". */
    "direction"?: "outbound" | (string & {});
}))
    | ({
    /** Shape $ (Value): string.  Value enum: "return". */
    "direction": "return" | (string & {});
    /** Shape $ (Value): Array of any. minItems: 1. Shape $[] (Value): any. */
    "return_line_items": Array<unknown>;
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
})
    | (Record<string, unknown>));
/** Shape $ (Value): {@link CreateShipmentRequestInput}. The request body for: Create shipment. */
export type CreateShipmentRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "outbound", "return". */
    "direction"?: "outbound" | "return";
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
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "return_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnShipmentLineItemAllocationInput}. Shape $[] (Value):
     * {@link ReturnShipmentLineItemAllocationInput}. A return line and the quantity placed in a
     * return shipment or package.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationInput>;
})
    & ((({
    /** Shape $ (Value): string.  Value enum: "outbound". */
    "direction"?: "outbound";
})
    & (({
    "return_id"?: never;
}) & ({
    "return_line_items"?: never;
})))
    | ({
    /** Shape $ (Value): string.  Value enum: "return". */
    "direction": "return";
    /** Shape $ (Value): Array of any. minItems: 1. Shape $[] (Value): any. */
    "return_line_items": Array<unknown>;
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
}));
/**
 * Shape $ (Value): {@link CreateSubscriptionAccessLinkRequest}. The access a subscription link
 * gives its buyer. Omit the body or purpose for read-only access.
 */
export type CreateSubscriptionAccessLinkRequest = {
    /**
     * Shape $ (Value): string. subscription_view opens the subscription read-only.
     * subscription_manage also lets the buyer cancel, pause, or undo a scheduled cancellation,
     * subject to your store's policy and the subscription's state; it requires
     * commerce.subscriptions.write. Both work for 14 days or 5 opens. Default:
     * "subscription_view". Value enum: "subscription_view", "subscription_manage".
     */
    "purpose"?: "subscription_view" | "subscription_manage" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateSubscriptionAccessLinkRequestInput}. The access a subscription
 * link gives its buyer. Omit the body or purpose for read-only access.
 */
export type CreateSubscriptionAccessLinkRequestInput = {
    /**
     * Shape $ (Value): string. subscription_view opens the subscription read-only.
     * subscription_manage also lets the buyer cancel, pause, or undo a scheduled cancellation,
     * subject to your store's policy and the subscription's state; it requires
     * commerce.subscriptions.write. Both work for 14 days or 5 opens. Default:
     * "subscription_view". Value enum: "subscription_view", "subscription_manage".
     */
    "purpose"?: "subscription_view" | "subscription_manage";
};
/**
 * Shape $ (Value): {@link CreateSubscriptionDeliveryMigrationRequest}. The request body for: Move
 * subscribers to another delivery method.
 */
export type CreateSubscriptionDeliveryMigrationRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "from_delivery_method_id": string;
    /**
     * Shape $ (Value): string. Limit the migration to this plan's live subscriptions. minLength:
     * 1.
     */
    "subscription_plan_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "to_delivery_method_id": string;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionDeliveryMigrationRequestInput}. The request body for:
 * Move subscribers to another delivery method.
 */
export type CreateSubscriptionDeliveryMigrationRequestInput = CreateSubscriptionDeliveryMigrationRequest;
/**
 * Shape $ (Value): {@link CreateSubscriptionLineItemRequest}. The request body for: Add
 * subscription line item.
 */
export type CreateSubscriptionLineItemRequest = ({
    /** Shape $ (Value): string. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. The catalog source of the new line: variant or bundle. Value enum:
     * "variant", "bundle".
     */
    "type": "variant" | "bundle" | (string & {});
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
})
    & ((Exclude<CreateSubscriptionLineItemRequestVariant & object, readonly unknown[]>)
    | (Exclude<CreateSubscriptionLineItemRequestBundle & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateSubscriptionLineItemRequestBundle}. The `bundle` variant of
 * `CreateSubscriptionLineItemRequest`.
 */
export type CreateSubscriptionLineItemRequestBundle = ({
    /** Shape $ (Value): string. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. */
    "bundle_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. The catalog source of the new line: variant or bundle. Value enum:
     * "bundle".
     */
    "type": "bundle" | (string & {});
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
});
/**
 * Shape $ (Value): {@link CreateSubscriptionLineItemRequestBundleInput}. The `bundle` variant of
 * `CreateSubscriptionLineItemRequest`.
 */
export type CreateSubscriptionLineItemRequestBundleInput = ({
    /** Shape $ (Value): string. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. */
    "bundle_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. The catalog source of the new line: variant or bundle. Value enum:
     * "bundle".
     */
    "type": "bundle";
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
})
    & (({
    "variant_id"?: never;
}));
/**
 * Shape $ (Value): {@link CreateSubscriptionLineItemRequestInput}. The request body for: Add
 * subscription line item.
 */
export type CreateSubscriptionLineItemRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. The catalog source of the new line: variant or bundle. Value enum:
     * "variant", "bundle".
     */
    "type": "variant" | "bundle";
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
})
    & ((Exclude<CreateSubscriptionLineItemRequestVariantInput & object, readonly unknown[]>)
    | (Exclude<CreateSubscriptionLineItemRequestBundleInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateSubscriptionLineItemRequestVariant}. The `variant` variant of
 * `CreateSubscriptionLineItemRequest`.
 */
export type CreateSubscriptionLineItemRequestVariant = ({
    /** Shape $ (Value): string. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. The catalog source of the new line: variant or bundle. Value enum:
     * "variant".
     */
    "type": "variant" | (string & {});
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id": string;
});
/**
 * Shape $ (Value): {@link CreateSubscriptionLineItemRequestVariantInput}. The `variant` variant of
 * `CreateSubscriptionLineItemRequest`.
 */
export type CreateSubscriptionLineItemRequestVariantInput = ({
    /** Shape $ (Value): string. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. The catalog source of the new line: variant or bundle. Value enum:
     * "variant".
     */
    "type": "variant";
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}));
/**
 * Shape $ (Value): {@link CreateSubscriptionOfferRequest}. The request body for: Create
 * subscription offer.
 */
export type CreateSubscriptionOfferRequest = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. minItems: 1. maxItems: 12.
     * uniqueItems: true. Shape $[] (Value): {@link SubscriptionIntervalOption}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength:
     * 1.
     */
    "product_ids"?: Array<string>;
    /**
     * Shape $ (Value): string or null. An active promotion with forever recurrence. On PATCH, null
     * removes the discount for new signups; omission keeps it. minLength: 1.
     */
    "promotion_id"?: string | null;
    /**
     * Shape $ (Value): string. Use active or inactive. Archive the offer with DELETE. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): Array of string. Delivery methods offered at signup. An empty array uses
     * the store's checkout defaults. Existing subscriptions keep their selected method. maxItems:
     * 25. uniqueItems: true. Shape $[] (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength:
     * 1.
     */
    "variant_ids"?: Array<string>;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionOfferRequestInput}. The request body for: Create
 * subscription offer.
 */
export type CreateSubscriptionOfferRequestInput = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOptionInput}. minItems: 1. maxItems:
     * 12. uniqueItems: true. Shape $[] (Value): {@link SubscriptionIntervalOptionInput}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOptionInput>;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength:
     * 1.
     */
    "product_ids"?: Array<string>;
    /**
     * Shape $ (Value): string or null. An active promotion with forever recurrence. On PATCH, null
     * removes the discount for new signups; omission keeps it. minLength: 1.
     */
    "promotion_id"?: string | null;
    /**
     * Shape $ (Value): string. Use active or inactive. Archive the offer with DELETE. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): Array of string. Delivery methods offered at signup. An empty array uses
     * the store's checkout defaults. Existing subscriptions keep their selected method. maxItems:
     * 25. uniqueItems: true. Shape $[] (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength:
     * 1.
     */
    "variant_ids"?: Array<string>;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPlanRequest}. The request body for: Create
 * subscription plan.
 */
export type CreateSubscriptionPlanRequest = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. maxItems: 12. uniqueItems:
     * true. Shape $[] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as
     * every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * Shape $ (Value): integer. A commitment period you agree with the buyer, 1 to 120 months.
     * Flint shows it at checkout and records it on each new subscription (contract_start_at,
     * contract_end_at). Flint does not stop the buyer from canceling earlier. Format: int32.
     * minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. A fee you agree the buyer owes for canceling before the
     * contract term ends. Flint shows it at checkout and records it on each new subscription, but
     * never charges it. To collect it, charge the buyer yourself, for example with an order on
     * their saved payment method. Requires contract_term_months. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
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
     * Shape $ (Value): {@link InventoryRoutingSourceRequest}. Where tracked demand from this plan
     * is routed: a fixed Location, an allocation policy, or an immutable policy revision. Required
     * when any line item tracks inventory. New subscriptions and payment links for the plan copy
     * it, unless the payment link sends its own. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Shape $ (Value): Array of {@link SubscriptionPlanLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link SubscriptionPlanLineItemRequest}. A line item to put on a new subscription
     * plan, from a variant, a bundle, or a custom name and price.
     */
    "line_items": Array<SubscriptionPlanLineItemRequest>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): Array of integer. maxItems: 10. uniqueItems: true. Shape $[] (Value):
     * integer. minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Active plans accept new signups. Inactive plans refuse new signups
     * with PLAN_NOT_ACTIVE while existing subscriptions keep renewing. Archived plans are
     * read-only and their status is set only by DELETE
     * /v1/subscription-plans/{subscription_plan_id}. Default: "active". Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "subscription_delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): integer. Format: int32. */
    "trial_period_days"?: number;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPlanRequestInput}. The request body for: Create
 * subscription plan.
 */
export type CreateSubscriptionPlanRequestInput = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. Format: int32. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOptionInput}. maxItems: 12.
     * uniqueItems: true. Shape $[] (Value): {@link SubscriptionIntervalOptionInput}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
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
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. A fee you agree the buyer owes for canceling
     * before the contract term ends. Flint shows it at checkout and records it on each new
     * subscription, but never charges it. To collect it, charge the buyer yourself, for example
     * with an order on their saved payment method. Requires contract_term_months. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValueInput;
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
     * Shape $ (Value): {@link InventoryRoutingSourceRequestInput}. Where tracked demand from this
     * plan is routed: a fixed Location, an allocation policy, or an immutable policy revision.
     * Required when any line item tracks inventory. New subscriptions and payment links for the
     * plan copy it, unless the payment link sends its own. Where you want inventory routed from: a
     * fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): Array of {@link SubscriptionPlanLineItemRequestInput}. minItems: 1. Shape
     * $[] (Value): {@link SubscriptionPlanLineItemRequestInput}. A line item to put on a new
     * subscription plan, from a variant, a bundle, or a custom name and price.
     */
    "line_items": Array<SubscriptionPlanLineItemRequestInput>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): Array of integer. maxItems: 10. uniqueItems: true. Shape $[] (Value):
     * integer. minimum: 1. maximum: 100.
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
     * /v1/subscription-plans/{subscription_plan_id}. Default: "active". Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "subscription_delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): integer. Format: int32. */
    "trial_period_days"?: number;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequest}. The request body for: Preview
 * subscription.
 */
export type CreateSubscriptionPreviewRequest = ((CreateSubscriptionPreviewRequestDeliveryOptions)
    | (CreateSubscriptionPreviewRequestCreate)
    | (CreateSubscriptionPreviewRequestDeliveryMethodUpdate)
    | (CreateSubscriptionPreviewRequestNextRenewal)
    | (CreateSubscriptionPreviewRequestPlanChange)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestCreate}. The `create` variant of
 * `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestCreate = {
    /** Shape $ (Value): string.  Value enum: "create". */
    "mode": "create" | (string & {});
    /**
     * Shape $ (Value): {@link CreateSubscriptionRequest}. The request body for: Create
     * subscription.
     */
    "subscription": CreateSubscriptionRequest;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestCreateInput}. The `create` variant of
 * `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestCreateInput = {
    /** Shape $ (Value): string.  Value enum: "create". */
    "mode": "create";
    /**
     * Shape $ (Value): {@link CreateSubscriptionRequestInput}. The request body for: Create
     * subscription.
     */
    "subscription": CreateSubscriptionRequestInput;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestDeliveryMethodUpdate}. The
 * `delivery_method_update` variant of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestDeliveryMethodUpdate = {
    /**
     * Shape $ (Value): {@link UpdateDeliveryMethodRequest}. The request body for: Update delivery
     * method.
     */
    "delivery_method": UpdateDeliveryMethodRequest;
    /** Shape $ (Value): string. minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. */
    "delivery_method_id": string;
    /** Shape $ (Value): string.  Value enum: "delivery_method_update". */
    "mode": "delivery_method_update" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput}. The
 * `delivery_method_update` variant of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput = {
    /**
     * Shape $ (Value): {@link UpdateDeliveryMethodRequestInput}. The request body for: Update
     * delivery method.
     */
    "delivery_method": UpdateDeliveryMethodRequestInput;
    /** Shape $ (Value): string. minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. */
    "delivery_method_id": string;
    /** Shape $ (Value): string.  Value enum: "delivery_method_update". */
    "mode": "delivery_method_update";
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestDeliveryOptions}. The `delivery_options`
 * variant of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestDeliveryOptions = {
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryDestinationRequest}. Where to deliver a
     * subscription: a saved customer address by ID, or a new address.
     */
    "destination": SubscriptionDeliveryDestinationRequest;
    /** Shape $ (Value): string.  Value enum: "delivery_options". */
    "mode": "delivery_options" | (string & {});
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestDeliveryOptionsInput}. The
 * `delivery_options` variant of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestDeliveryOptionsInput = {
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryDestinationRequestInput}. Where to deliver a
     * subscription: a saved customer address by ID, or a new address.
     */
    "destination": SubscriptionDeliveryDestinationRequestInput;
    /** Shape $ (Value): string.  Value enum: "delivery_options". */
    "mode": "delivery_options";
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestInput}. The request body for: Preview
 * subscription.
 */
export type CreateSubscriptionPreviewRequestInput = ((CreateSubscriptionPreviewRequestDeliveryOptionsInput)
    | (CreateSubscriptionPreviewRequestCreateInput)
    | (CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput)
    | (CreateSubscriptionPreviewRequestNextRenewalInput)
    | (CreateSubscriptionPreviewRequestPlanChangeInput));
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestNextRenewal}. The `next_renewal` variant
 * of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestNextRenewal = {
    /** Shape $ (Value): string.  Value enum: "next_renewal". */
    "mode": "next_renewal" | (string & {});
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestNextRenewalInput}. The `next_renewal`
 * variant of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestNextRenewalInput = {
    /** Shape $ (Value): string.  Value enum: "next_renewal". */
    "mode": "next_renewal";
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestPlanChange}. The `plan_change` variant
 * of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestPlanChange = ({
    /**
     * Shape $ (Value): string. Send with billing_interval_count to choose a target plan option.
     * Omit both to keep the current interval. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Shape $ (Value): integer. Required when billing_interval is sent; billing_interval is
     * required when this field is sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): string. now bills a new period with credit for unused paid item time.
     * next_renewal changes the plan immediately and keeps the current paid period and next billing
     * date. Value enum: "now", "next_renewal".
     */
    "billing_starts": "now" | "next_renewal" | (string & {});
    /** Shape $ (Value): string.  Value enum: "plan_change". */
    "mode": "plan_change" | (string & {});
    /**
     * Shape $ (Value): integer. Omit to keep the current subscription quantity. The target plan
     * must offer the quantity. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
    /** Shape $ (Value): string. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_plan_id": string;
});
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestPlanChangeInput}. The `plan_change`
 * variant of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestPlanChangeInput = ({
    /**
     * Shape $ (Value): string. Send with billing_interval_count to choose a target plan option.
     * Omit both to keep the current interval. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * Shape $ (Value): integer. Required when billing_interval is sent; billing_interval is
     * required when this field is sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): string. now bills a new period with credit for unused paid item time.
     * next_renewal changes the plan immediately and keeps the current paid period and next billing
     * date. Value enum: "now", "next_renewal".
     */
    "billing_starts": "now" | "next_renewal";
    /** Shape $ (Value): string.  Value enum: "plan_change". */
    "mode": "plan_change";
    /**
     * Shape $ (Value): integer. Omit to keep the current subscription quantity. The target plan
     * must offer the quantity. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
    /** Shape $ (Value): string. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_plan_id": string;
});
/**
 * Shape $ (Value): {@link CreateSubscriptionRequest}. The request body for: Create subscription.
 */
export type CreateSubscriptionRequest = {
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing. Applies
     * only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Shape $ (Value): {@link SubscriptionBillingScheduleRequest}. Who owns the billing schedule
     * when creating a subscription: Flint or an external system.
     */
    "billing_schedule"?: SubscriptionBillingScheduleRequest;
    /**
     * Shape $ (Value): {@link SubscriptionBillingStartRequest}. How billing begins. Send exactly
     * one closed tagged-union branch.
     */
    "billing_start": SubscriptionBillingStartRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryRequest}. The delivery preference to set on a
     * subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequest;
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
    "payment_method_id"?: string;
    /**
     * Shape $ (Value): {@link SubscriptionServiceLocationRequest}. Where a subscription's service
     * is delivered: a saved customer address by ID, or a new address.
     */
    "service_location"?: SubscriptionServiceLocationRequest;
    /**
     * Shape $ (Value): {@link SubscriptionTermsRequest}. Subscription terms from either a
     * subscription plan or subscription offers, selected by `type`.
     */
    "terms": SubscriptionTermsRequest;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionRequestInput}. The request body for: Create
 * subscription.
 */
export type CreateSubscriptionRequestInput = {
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing. Applies
     * only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Shape $ (Value): {@link SubscriptionBillingScheduleRequestInput}. Who owns the billing
     * schedule when creating a subscription: Flint or an external system.
     */
    "billing_schedule"?: SubscriptionBillingScheduleRequestInput;
    /**
     * Shape $ (Value): {@link SubscriptionBillingStartRequestInput}. How billing begins. Send
     * exactly one closed tagged-union branch.
     */
    "billing_start": SubscriptionBillingStartRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryRequestInput}. The delivery preference to set on
     * a subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequestInput;
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
    "payment_method_id"?: string;
    /**
     * Shape $ (Value): {@link SubscriptionServiceLocationRequestInput}. Where a subscription's
     * service is delivered: a saved customer address by ID, or a new address.
     */
    "service_location"?: SubscriptionServiceLocationRequestInput;
    /**
     * Shape $ (Value): {@link SubscriptionTermsRequestInput}. Subscription terms from either a
     * subscription plan or subscription offers, selected by `type`.
     */
    "terms": SubscriptionTermsRequestInput;
};
/**
 * Shape $ (Value): {@link CreateWebhookDeliveryRequest}. The request body for: Create webhook
 * delivery.
 */
export type CreateWebhookDeliveryRequest = {
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /**
     * Shape $ (Value): string. Active endpoint that currently subscribes to the event. minLength:
     * 1.
     */
    "webhook_endpoint_id": string;
    /** Shape $ (Value): string. Retained webhook event to deliver. minLength: 1. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link CreateWebhookDeliveryRequestInput}. The request body for: Create webhook
 * delivery.
 */
export type CreateWebhookDeliveryRequestInput = CreateWebhookDeliveryRequest;
/**
 * Shape $ (Value): {@link CreateWebhookEndpointRequest}. The request body for: Create webhook
 * endpoint.
 */
export type CreateWebhookEndpointRequest = ({
    /**
     * Shape $ (Value): string. Set default to follow the merchant default, or a supported
     * YYYY-MM-DD version to pin this endpoint. Omission follows the merchant default. Null is not
     * accepted. minLength: 1.
     */
    "api_version"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): Array of string. Event types to deliver. Send ["*"] for every type the
     * endpoint's event_sources deliver, including types added later; * must be the only entry and
     * is not available with installed_merchants. At least one entry is required. Use only current
     * event type names; previous and removed names are rejected. Stored subscriptions map previous
     * names permanently and drop removed names on read. See the [changelog](/docs/changelog).
     * minItems: 1. Shape $[] (Value): string. minLength: 1.
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
     * sources. minLength: 1.
     */
    "partner_app_id"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "url": string;
});
/**
 * Shape $ (Value): {@link CreateWebhookEndpointRequestInput}. The request body for: Create webhook
 * endpoint.
 */
export type CreateWebhookEndpointRequestInput = ({
    /**
     * Shape $ (Value): string. Set default to follow the merchant default, or a supported
     * YYYY-MM-DD version to pin this endpoint. Omission follows the merchant default. Null is not
     * accepted. minLength: 1.
     */
    "api_version"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): Array of string. Event types to deliver. Send ["*"] for every type the
     * endpoint's event_sources deliver, including types added later; * must be the only entry and
     * is not available with installed_merchants. At least one entry is required. Use only current
     * event type names; previous and removed names are rejected. Stored subscriptions map previous
     * names permanently and drop removed names on read. See the [changelog](/docs/changelog).
     * minItems: 1. Shape $[] (Value): string. minLength: 1.
     */
    "enabled_events": Array<string>;
    /**
     * Shape $ (Value): Array of string. Event sources this endpoint receives. Defaults to
     * merchant. Use partner_app for app lifecycle events and installed_merchants for events from
     * merchants that installed the partner app. [] enum: "merchant", "partner_app",
     * "installed_merchants". Shape $[] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants">;
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
    "url": string;
});
/**
 * Shape $ (Value): {@link CreateWebhookTestEventRequest}. The request body for: Create webhook
 * test event.
 */
export type CreateWebhookTestEventRequest = {
    /**
     * Shape $ (Value): string. Current event type to send. merchant delivers merchant events;
     * partner_app delivers partner lifecycle events; installed_merchants delivers merchant events
     * permitted by the install read scopes. The event catalog lists event_sources for each type.
     * Value enum: "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
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
};
/**
 * Shape $ (Value): {@link CreateWebhookTestEventRequestInput}. The request body for: Create
 * webhook test event.
 */
export type CreateWebhookTestEventRequestInput = {
    /**
     * Shape $ (Value): string. Current event type to send. merchant delivers merchant events;
     * partner_app delivers partner lifecycle events; installed_merchants delivers merchant events
     * permitted by the install read scopes. The event catalog lists event_sources for each type.
     * Value enum: "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
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
        | "subscription_payment_retry.succeeded";
};
/**
 * Shape $ (Value): {@link CreateWorkloadIdentityRequest}. The request body for: Create a workload
 * identity.
 */
export type CreateWorkloadIdentityRequest = {
    /**
     * Shape $ (Value): string. Immutable token audience. Defaults to Flint's configured issuer URL
     * when omitted. minLength: 1. maxLength: 255.
     */
    "audience"?: string;
    /**
     * Shape $ (Value): Array of {@link WorkloadIdentityClaimConditionRequest}. Bounded value
     * array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared
     * issuers require tenant pinning. maxItems: 10. uniqueItems: true. Shape $[] (Value): {@link
     * WorkloadIdentityClaimConditionRequest}. A condition to match one top-level scalar claim in
     * the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequest>;
    /**
     * Shape $ (Value): string. Immutable public HTTPS issuer with a DNS host, optional port 443,
     * and no userinfo, query, or fragment. Compared exactly. minLength: 1. maxLength: 255.
     */
    "issuer": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 1024. */
    "subject": string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "subject_match"?: "exact" | "glob" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateWorkloadIdentityRequestInput}. The request body for: Create a
 * workload identity.
 */
export type CreateWorkloadIdentityRequestInput = {
    /**
     * Shape $ (Value): string. Immutable token audience. Defaults to Flint's configured issuer URL
     * when omitted. minLength: 1. maxLength: 255.
     */
    "audience"?: string;
    /**
     * Shape $ (Value): Array of {@link WorkloadIdentityClaimConditionRequestInput}. Bounded value
     * array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared
     * issuers require tenant pinning. maxItems: 10. uniqueItems: true. Shape $[] (Value): {@link
     * WorkloadIdentityClaimConditionRequestInput}. A condition to match one top-level scalar claim
     * in the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequestInput>;
    /**
     * Shape $ (Value): string. Immutable public HTTPS issuer with a DNS host, optional port 443,
     * and no userinfo, query, or fragment. Compared exactly. minLength: 1. maxLength: 255.
     */
    "issuer": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 1024. */
    "subject": string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "subject_match"?: "exact" | "glob";
};
export interface Credentials {
    "checkout": {
        "CheckoutSessionBearer": string | CredentialProvider;
    };
    "customer": {
        "CustomerSessionBearer": string | CredentialProvider;
    };
    "invoice": {
        "InvoiceAccessTokenBearer": string | CredentialProvider;
    };
    "merchant": {
        "BearerAuth": string | CredentialProvider;
    };
    "onboarding": {
        "OnboardingSessionBearer": string | CredentialProvider;
    };
}
/**
 * Shape $ (Value): {@link CreditNote}. A correction against an issued invoice. Credit notes reduce
 * what is owed; refunds return what was already collected.
 */
export type CreditNote = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit applied to the invoice, net of reversed
     * allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "allocated_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit available to allocate or refund. Zero on draft
     * and void notes. On issued notes, total_money equals allocated_money plus
     * pending_refund_money plus refunded_money plus available_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /**
     * Shape $ (Value): {@link TaxIdentity} or null. Identity frozen on the source invoice at
     * issue. Later profile edits do not change this document. Shape $.anyOf[1] (Value): {@link
     * TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Does
     * not verify IDs or change tax treatment. Tax IDs are an owned collection in display order;
     * replacing the array requires the parent's expected_version. Existing entries retain their
     * document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2]
     * (Value): null.
     */
    "buyer_tax_identity": ((TaxIdentity) | (null));
    /** Shape $ (Value): string. When the credit note was created. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. Unique identifier of the credit note. */
    "credit_note_id": string;
    /**
     * Shape $ (Value): string. Assigned at issue and stable from then on. Absent while the credit
     * note is a draft.
     */
    "credit_note_number"?: string;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. null when unset. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
    /**
     * Shape $ (Value): {@link ExpandedInvoiceSummary}. Summary of the source invoice. Returned
     * only with expand=invoice. An invoice's summary fields, including status, due date, and paid,
     * outstanding, and refunded amounts, returned when the invoice is expanded.
     */
    "invoice"?: ExpandedInvoiceSummary;
    /** Shape $ (Value): string. The invoice this credit note corrects. */
    "invoice_id": string;
    /**
     * Shape $ (Value): string. When the credit note was issued. Absent on a draft. Format:
     * date-time.
     */
    "issued_at"?: string;
    /**
     * Shape $ (Value): string. Status of the most recent refund linked to this credit note. Absent
     * when no refund has been requested. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed".
     */
    "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * Shape $ (Value): Array of {@link CreditNoteLineItem}. Itemized corrections against frozen
     * invoice lines. Amount and quantity corrections share each source line's remaining value,
     * discount, and tax across issued, non-void credit notes. Drafts reserve no credit. Shape $[]
     * (Value): {@link CreditNoteLineItem}. One correction calculated from the frozen invoice
     * line's remaining billed value, discount, and tax. The source line's inclusive or additive
     * tax mode is preserved. Current catalog prices and tax settings do not affect the correction.
     * Stored issued values are never recalculated by a read.
     */
    "line_items": Array<CreditNoteLineItem>;
    /**
     * Shape $ (Value): string or null. Free text shown on the credit note, up to 4096 characters.
     * null when unset.
     */
    "memo": string | null;
    /** Shape $ (Value): string. The merchant that owns the credit note. */
    "merchant_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit reserved by linked refunds that have not
     * resolved yet. Released if a refund fails or is canceled. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "pending_refund_money": MoneyValue;
    /**
     * Shape $ (Value): string. Why the invoice is being corrected. Shown on the credit note
     * document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill",
     * "other".
     */
    "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit consumed by linked refunds that succeeded.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link TaxIdentity} or null. Identity frozen on the source invoice at
     * issue. Later profile edits do not change this document. Shape $.anyOf[1] (Value): {@link
     * TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Does
     * not verify IDs or change tax treatment. Tax IDs are an owned collection in display order;
     * replacing the array requires the parent's expected_version. Existing entries retain their
     * document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2]
     * (Value): null.
     */
    "seller_tax_identity": ((TaxIdentity) | (null));
    /**
     * Shape $ (Value): string. draft while the credit note is editable, issued once it is numbered
     * and frozen, void once retired. Value enum: "draft", "issued", "void".
     */
    "status": "draft" | "issued" | "void" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. The face value of the credit note, the sum of its
     * lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** Shape $ (Value): string. When the credit note last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Current credit note version. Send this as expected_version
     * when updating the draft. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "version": `${bigint}`;
    /**
     * Shape $ (Value): string. When the credit note was voided. Absent unless it is void. Format:
     * date-time.
     */
    "voided_at"?: string;
};
/**
 * Shape $ (Value): {@link CreditNoteAllocation}. One application of credit to the invoice.
 * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
 */
export type CreditNoteAllocation = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "allocated_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit applied to the invoice balance. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. Unique identifier of the allocation. */
    "credit_note_allocation_id": string;
    /** Shape $ (Value): string. The credit note whose credit was applied. */
    "credit_note_id": string;
    /**
     * Shape $ (Value): string. The key the caller sent when allocating, or issue: followed by the
     * issue request's Idempotency-Key for an allocation made on issue. It is this allocation's
     * identity and is filterable on the allocations list.
     */
    "idempotency_key": string;
    /** Shape $ (Value): string. The invoice whose balance the credit reduced. */
    "invoice_id": string;
    /**
     * Shape $ (Value): string. When the allocation was reversed and its credit returned. Absent
     * while the allocation stands. Format: date-time.
     */
    "reversed_at"?: string;
};
/**
 * Shape $ (Value): {@link CreditNoteAllocationListResponse}. A page of `CreditNoteAllocation`
 * objects.
 */
export type CreditNoteAllocationListResponse = {
    /**
     * Shape $ (Value): Array of {@link CreditNoteAllocation}. Shape $[] (Value): {@link
     * CreditNoteAllocation}. One application of credit to the invoice. Allocations are
     * append-only: a reversal sets reversed_at rather than removing the row.
     */
    "data": Array<CreditNoteAllocation>;
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
 * Shape $ (Value): {@link CreditNoteAllocationResponse}. A response containing
 * `CreditNoteAllocation` data.
 */
export type CreditNoteAllocationResponse = {
    /**
     * Shape $ (Value): {@link CreditNoteAllocation}. One application of credit to the invoice.
     * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
     */
    "data": CreditNoteAllocation;
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
 * Shape $ (Value): {@link CreditNoteAllocationResult}. The allocation, the credit note with its
 * new available_money, and the recomputed invoice.
 */
export type CreditNoteAllocationResult = {
    /**
     * Shape $ (Value): {@link CreditNote}. The credit note with its recomputed available_money and
     * allocated_money. A correction against an issued invoice. Credit notes reduce what is owed;
     * refunds return what was already collected.
     */
    "credit_note": CreditNote;
    /**
     * Shape $ (Value): {@link CreditNoteAllocation}. The allocation that was created or reversed.
     * One application of credit to the invoice. Allocations are append-only: a reversal sets
     * reversed_at rather than removing the row.
     */
    "credit_note_allocation": CreditNoteAllocation;
    /**
     * Shape $ (Value): {@link Invoice}. The invoice with its recomputed outstanding balance and
     * status. A bill issued to a customer.
     */
    "invoice": Invoice;
};
/**
 * Shape $ (Value): {@link CreditNoteAllocationResultResponse}. A response containing
 * `CreditNoteAllocationResult` data.
 */
export type CreditNoteAllocationResultResponse = {
    /**
     * Shape $ (Value): {@link CreditNoteAllocationResult}. The allocation, the credit note with
     * its new available_money, and the recomputed invoice.
     */
    "data": CreditNoteAllocationResult;
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
 * Shape $ (Value): {@link CreditNoteCorrectionRequest}. How much of an invoice line item a credit
 * note line credits, by whole `quantity` or by `amount`, chosen by `type`.
 */
export type CreditNoteCorrectionRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Positive billed value to credit in the invoice
     * currency, no more than the frozen source line's remaining value. Consumes proportional
     * remaining tax and discount without consuming quantity; later quantity corrections use the
     * reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Positive whole units; fractional quantities are not
     * supported. No more than the source line's remaining uncredited quantity. Credits that
     * fraction of its remaining billed value, rounded half up once at line level. Earlier amount
     * corrections reduce that remaining value without consuming quantity. A share that rounds to
     * zero is rejected; use a larger quantity or a positive amount. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. quantity credits whole units and requires quantity. amount credits
     * a named figure and requires amount_money. The two are mutually exclusive. Value enum:
     * "quantity", "amount".
     */
    "type": "quantity" | "amount" | (string & {});
})
    & ((Exclude<CreditNoteCorrectionRequestQuantity & object, readonly unknown[]>)
    | (Exclude<CreditNoteCorrectionRequestAmount & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreditNoteCorrectionRequestAmount}. The `amount` variant of
 * `CreditNoteCorrectionRequest`.
 */
export type CreditNoteCorrectionRequestAmount = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Positive billed value to credit in the invoice
     * currency, no more than the frozen source line's remaining value. Consumes proportional
     * remaining tax and discount without consuming quantity; later quantity corrections use the
     * reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): integer string. Positive whole units; fractional quantities are not
     * supported. No more than the source line's remaining uncredited quantity. Credits that
     * fraction of its remaining billed value, rounded half up once at line level. Earlier amount
     * corrections reduce that remaining value without consuming quantity. A share that rounds to
     * zero is rejected; use a larger quantity or a positive amount. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. quantity credits whole units and requires quantity. amount credits
     * a named figure and requires amount_money. The two are mutually exclusive. Value enum:
     * "amount".
     */
    "type": "amount" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "amount". */
    "type": "amount" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Positive billed value to credit in the invoice
     * currency, no more than the frozen source line's remaining value. Consumes proportional
     * remaining tax and discount without consuming quantity; later quantity corrections use the
     * reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
}));
/**
 * Shape $ (Value): {@link CreditNoteCorrectionRequestAmountInput}. The `amount` variant of
 * `CreditNoteCorrectionRequest`.
 */
export type CreditNoteCorrectionRequestAmountInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Positive billed value to credit in the invoice
     * currency, no more than the frozen source line's remaining value. Consumes proportional
     * remaining tax and discount without consuming quantity; later quantity corrections use the
     * reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Positive whole units; fractional quantities are not
     * supported. No more than the source line's remaining uncredited quantity. Credits that
     * fraction of its remaining billed value, rounded half up once at line level. Earlier amount
     * corrections reduce that remaining value without consuming quantity. A share that rounds to
     * zero is rejected; use a larger quantity or a positive amount. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. quantity credits whole units and requires quantity. amount credits
     * a named figure and requires amount_money. The two are mutually exclusive. Value enum:
     * "amount".
     */
    "type": "amount";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "amount". */
    "type": "amount";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Positive billed value to credit in the invoice
     * currency, no more than the frozen source line's remaining value. Consumes proportional
     * remaining tax and discount without consuming quantity; later quantity corrections use the
     * reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValueInput;
})
    & ({
    "quantity"?: never;
}));
/**
 * Shape $ (Value): {@link CreditNoteCorrectionRequestInput}. How much of an invoice line item a
 * credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.
 */
export type CreditNoteCorrectionRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Positive billed value to credit in the invoice
     * currency, no more than the frozen source line's remaining value. Consumes proportional
     * remaining tax and discount without consuming quantity; later quantity corrections use the
     * reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Positive whole units; fractional quantities are not
     * supported. No more than the source line's remaining uncredited quantity. Credits that
     * fraction of its remaining billed value, rounded half up once at line level. Earlier amount
     * corrections reduce that remaining value without consuming quantity. A share that rounds to
     * zero is rejected; use a larger quantity or a positive amount. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. quantity credits whole units and requires quantity. amount credits
     * a named figure and requires amount_money. The two are mutually exclusive. Value enum:
     * "quantity", "amount".
     */
    "type": "quantity" | "amount";
})
    & ((Exclude<CreditNoteCorrectionRequestQuantityInput & object, readonly unknown[]>)
    | (Exclude<CreditNoteCorrectionRequestAmountInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreditNoteCorrectionRequestQuantity}. The `quantity` variant of
 * `CreditNoteCorrectionRequest`.
 */
export type CreditNoteCorrectionRequestQuantity = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Positive billed value to credit in the invoice
     * currency, no more than the frozen source line's remaining value. Consumes proportional
     * remaining tax and discount without consuming quantity; later quantity corrections use the
     * reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Positive whole units; fractional quantities are not
     * supported. No more than the source line's remaining uncredited quantity. Credits that
     * fraction of its remaining billed value, rounded half up once at line level. Earlier amount
     * corrections reduce that remaining value without consuming quantity. A share that rounds to
     * zero is rejected; use a larger quantity or a positive amount. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. quantity credits whole units and requires quantity. amount credits
     * a named figure and requires amount_money. The two are mutually exclusive. Value enum:
     * "quantity".
     */
    "type": "quantity" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "quantity". */
    "type": "quantity" | (string & {});
    /**
     * Shape $ (Value): integer string. Positive whole units; fractional quantities are not
     * supported. No more than the source line's remaining uncredited quantity. Credits that
     * fraction of its remaining billed value, rounded half up once at line level. Earlier amount
     * corrections reduce that remaining value without consuming quantity. A share that rounds to
     * zero is rejected; use a larger quantity or a positive amount. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "quantity": `${bigint}`;
}));
