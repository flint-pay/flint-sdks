import type { WorkloadIdentityClaimConditionRequestInput } from './types-65.js';
import type { CredentialProvider, InputValue } from '../runtime.js';
import type { ExpandedInvoiceSummary, ExpandedPaymentMethodSummary } from './types-18.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { TaxIdentity, UpdateCreditNoteRequestInput } from './types-50.js';
import type { ResponseMeta, ResourceVersionRequestInput, ResolveCustomerDeletionRequestInput } from './types-42.js';
import type { Invoice } from './types-28.js';
import type {
    CreateCreditNoteAllocationRequestInput,
    CreateCreditNoteRequestInput,
    CreateCreditNoteRefundRequestInput,
    CreateCustomDomainRequestInput
} from './types-6.js';
import type { IssueCreditNoteRequestInput } from './types-30.js';
import type { Address } from './types-0.js';
import type { CustomerReceivables } from './types-12.js';
import type { MetadataMap } from './types-32.js';
import type { BuyerCapabilities, BuyerCapabilitiesInput } from './types-1.js';
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
     * only scopes they hold in the same environment. [] enum: "accounts.api_keys.read",
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
    "request_id": string;
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
    "request_id": string;
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
    "request_id": string;
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
/**
 * Shape $ (Value): {@link CreditNoteCorrectionRequestQuantityInput}. The `quantity` variant of
 * `CreditNoteCorrectionRequest`.
 */
export type CreditNoteCorrectionRequestQuantityInput = ({
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
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. quantity credits whole units and requires quantity. amount credits
     * a named figure and requires amount_money. The two are mutually exclusive. Value enum:
     * "quantity".
     */
    "type": "quantity";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "quantity". */
    "type": "quantity";
    /**
     * Shape $ (Value): integer string. Positive whole units; fractional quantities are not
     * supported. No more than the source line's remaining uncredited quantity. Credits that
     * fraction of its remaining billed value, rounded half up once at line level. Earlier amount
     * corrections reduce that remaining value without consuming quantity. A share that rounds to
     * zero is rejected; use a larger quantity or a positive amount. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "quantity": `${bigint}` | bigint;
})
    & ({
    "amount_money"?: never;
}));
/**
 * Shape $ (Value): {@link CreditNoteIssueAllocationRequest}. Credit to apply to the invoice when
 * issuing a credit note.
 */
export type CreditNoteIssueAllocationRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit to apply. Omit to apply the smaller of the
     * credit available after issue and the invoice's outstanding balance. An explicit amount must
     * be positive, use the invoice's currency, and fit both balances. Either way, the allocation
     * must leave the order's unpaid tip outstanding. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link CreditNoteIssueAllocationRequestInput}. Credit to apply to the invoice
 * when issuing a credit note.
 */
export type CreditNoteIssueAllocationRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Credit to apply. Omit to apply the smaller of the
     * credit available after issue and the invoice's outstanding balance. An explicit amount must
     * be positive, use the invoice's currency, and fit both balances. Either way, the allocation
     * must leave the order's unpaid tip outstanding. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
};
/**
 * Shape $ (Value): {@link CreditNoteLineItem}. One correction calculated from the frozen invoice
 * line's remaining billed value, discount, and tax. The source line's inclusive or additive tax
 * mode is preserved. Current catalog prices and tax settings do not affect the correction. Stored
 * issued values are never recalculated by a read.
 */
export type CreditNoteLineItem = {
    /**
     * Shape $ (Value): {@link CreditNoteCorrectionRequest}. The correction that produced this
     * line, using the same shape accepted by draft writes. Amount corrections return the requested
     * billed value in amount_money, equal to total_money. How much of an invoice line item a
     * credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.
     */
    "correction": CreditNoteCorrectionRequest;
    /** Shape $ (Value): string. Unique identifier of the credit note line item. */
    "credit_note_line_item_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The credited share of the frozen line's remaining
     * allocated merchandise discount, rounded half up in currency minor units. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** Shape $ (Value): string. The invoice snapshot line this corrects. */
    "invoice_line_item_id": string;
    /** Shape $ (Value): string. Label of the credited invoice line. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Credited subtotal before the credited discount, in the
     * source line's inclusive or additive price units. Balances the total after tax and discount
     * are rounded from the remaining pool; it is not a rounded per-unit price. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. The credited share of the frozen line's remaining tax,
     * rounded half up in currency minor units. Included tax is already part of total_money.
     * Tax-exclusive consideration is total_money minus tax_money. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Billed value credited by this line. For inclusive tax,
     * subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money
     * plus tax_money. A full remaining-value correction consumes the exact remaining components.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link CreditNoteLineItemRequest}. A credit note line you supply when creating
 * or updating a credit note: the invoice line item it credits and how much, or an existing line to
 * keep.
 */
export type CreditNoteLineItemRequest = {
    /**
     * Shape $ (Value): {@link CreditNoteCorrectionRequest}. How much of the invoice line to
     * credit, by quantity or by amount. How much of an invoice line item a credit note line
     * credits, by whole `quantity` or by `amount`, chosen by `type`.
     */
    "correction": CreditNoteCorrectionRequest;
    /**
     * Shape $ (Value): string. Existing credit note line item to retain. Omit to create a new line
     * item. minLength: 1.
     */
    "credit_note_line_item_id"?: string;
    /** Shape $ (Value): string. The invoice snapshot line to credit. minLength: 1. */
    "invoice_line_item_id": string;
};
/**
 * Shape $ (Value): {@link CreditNoteLineItemRequestInput}. A credit note line you supply when
 * creating or updating a credit note: the invoice line item it credits and how much, or an
 * existing line to keep.
 */
export type CreditNoteLineItemRequestInput = {
    /**
     * Shape $ (Value): {@link CreditNoteCorrectionRequestInput}. How much of the invoice line to
     * credit, by quantity or by amount. How much of an invoice line item a credit note line
     * credits, by whole `quantity` or by `amount`, chosen by `type`.
     */
    "correction": CreditNoteCorrectionRequestInput;
    /**
     * Shape $ (Value): string. Existing credit note line item to retain. Omit to create a new line
     * item. minLength: 1.
     */
    "credit_note_line_item_id"?: string;
    /** Shape $ (Value): string. The invoice snapshot line to credit. minLength: 1. */
    "invoice_line_item_id": string;
};
/** Shape $ (Value): {@link CreditNoteListResponse}. A page of `CreditNote` objects. */
export type CreditNoteListResponse = {
    /**
     * Shape $ (Value): Array of {@link CreditNote}. Shape $[] (Value): {@link CreditNote}. A
     * correction against an issued invoice. Credit notes reduce what is owed; refunds return what
     * was already collected.
     */
    "data": Array<CreditNote>;
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
/**
 * Shape $ (Value): {@link CreditNoteRefundRequest}. Refund details you supply when issuing a
 * credit note: the reason, an optional message, and an optional amount.
 */
export type CreditNoteRefundRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit to refund. Omit to refund all available credit,
     * which Flint resolves once when it accepts the request. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
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
 * Shape $ (Value): {@link CreditNoteRefundRequestInput}. Refund details you supply when issuing a
 * credit note: the reason, an optional message, and an optional amount.
 */
export type CreditNoteRefundRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Credit to refund. Omit to refund all available
     * credit, which Flint resolves once when it accepts the request. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
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
/** Shape $ (Value): {@link CreditNoteResponse}. A response containing `CreditNote` data. */
export type CreditNoteResponse = {
    /**
     * Shape $ (Value): {@link CreditNote}. A correction against an issued invoice. Credit notes
     * reduce what is owed; refunds return what was already collected.
     */
    "data": CreditNote;
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
export type CreditNotesCreateAllocationInput = {
    /** Shape $ (Value): string. */
    "credit_note_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCreditNoteAllocationRequestInput}. The request body for:
     * Allocate credit note.
     */
    "body": InputValue<CreateCreditNoteAllocationRequestInput>;
};
export type CreditNotesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCreditNoteRequestInput}. The request body for: Create credit
     * note.
     */
    "body": InputValue<CreateCreditNoteRequestInput>;
};
export type CreditNotesCreateRefundInput = {
    /** Shape $ (Value): string. */
    "credit_note_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCreditNoteRefundRequestInput}. The request body for: Refund
     * credit note.
     */
    "body": InputValue<CreateCreditNoteRefundRequestInput>;
};
export type CreditNotesGetAllocationInput = {
    /** Shape $ (Value): string. */
    "credit_note_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "credit_note_allocation_id": InputValue<string>;
};
export type CreditNotesGetInput = {
    /** Shape $ (Value): string. */
    "credit_note_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "invoice". Shape $[] (Value): string. Value enum:
     * "invoice".
     */
    "expand"?: InputValue<Array<"invoice">>;
};
export type CreditNotesGetPDFInput = {
    /** Shape $ (Value): string. */
    "credit_note_id": InputValue<string>;
};
export type CreditNotesGetPDFResponse = Uint8Array;
export type CreditNotesIssueInput = {
    /** Shape $ (Value): string. */
    "credit_note_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link IssueCreditNoteRequestInput}. The request body for: Issue credit
     * note.
     */
    "body"?: InputValue<IssueCreditNoteRequestInput>;
};
export type CreditNotesListAllocationsInput = {
    /** Shape $ (Value): string. */
    "credit_note_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
};
export type CreditNotesListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. */
    "invoice_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "returned_goods",
     * "order_adjustment", "billing_error", "goodwill", "other". Shape $[] (Value): string. Value
     * enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason"?: InputValue<Array<"returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "draft", "issued", "void". Shape $[]
     * (Value): string. Value enum: "draft", "issued", "void".
     */
    "status"?: InputValue<Array<"draft" | "issued" | "void">>;
    /**
     * Shape $ (Value): Array of string. [] enum: "invoice". Shape $[] (Value): string. Value enum:
     * "invoice".
     */
    "expand"?: InputValue<Array<"invoice">>;
};
export type CreditNotesListRefundsInput = CreditNotesListAllocationsInput;
export type CreditNotesReverseAllocationInput = {
    /** Shape $ (Value): string. */
    "credit_note_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "credit_note_allocation_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ResourceVersionRequestInput}. The request body for: Mark invoice
     * uncollectible; Regenerate invoice public link; Resume one of the current buyer's
     * subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void
     * invoice.
     */
    "body"?: InputValue<ResourceVersionRequestInput>;
};
export type CreditNotesUpdateInput = {
    /** Shape $ (Value): string. */
    "credit_note_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateCreditNoteRequestInput}. The request body for: Update credit
     * note.
     */
    "body": InputValue<UpdateCreditNoteRequestInput>;
};
export type CreditNotesVoidResourceInput = {
    /** Shape $ (Value): string. */
    "credit_note_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ResourceVersionRequestInput}. The request body for: Mark invoice
     * uncollectible; Regenerate invoice public link; Resume one of the current buyer's
     * subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void
     * invoice.
     */
    "body"?: InputValue<ResourceVersionRequestInput>;
};
/**
 * Shape $ (Value): {@link CustomDomain}. A merchant hostname for hosted checkout or customer
 * account pages.
 */
export type CustomDomain = {
    /**
     * Shape $ (Value): integer string or null. Payment attempts in progress on this checkout
     * hostname; null for customer account domains. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "active_payment_attempt_count": `${bigint}` | null;
    /**
     * Shape $ (Value): string. When this domain resource was created, in RFC3339 format. Format:
     * date-time.
     */
    "created_at": string;
    /** Shape $ (Value): string. Flint custom domain ID. */
    "custom_domain_id": string;
    /**
     * Shape $ (Value): Array of {@link CustomDomainDNSRecord}. DNS records to add for setup or
     * verification. For an archived hostname, records that can be deleted. Shape $[] (Value):
     * {@link CustomDomainDNSRecord}. A DNS record for configuring or verifying a custom hostname.
     */
    "dns_records": Array<CustomDomainDNSRecord>;
    /**
     * Shape $ (Value): string. Configured hostname, normalized to lowercase without a trailing
     * dot.
     */
    "hostname": string;
    /**
     * Shape $ (Value): string or null. When the domain was last checked, in RFC3339 format; null
     * when no check time is available. Format: date-time.
     */
    "last_checked_at": string | null;
    /**
     * Shape $ (Value): string or null. Payment method domain associated with this hostname, or
     * null when none is reported.
     */
    "payment_method_domain_id": string | null;
    /**
     * Shape $ (Value): string or null. End of the redirect window for an archived hostname. After
     * archive, dns_records lists records you can delete. Format: date-time.
     */
    "redirect_expires_at": string | null;
    /**
     * Shape $ (Value): string. Current setup and availability state of the hostname. Archived
     * domains retain their resource identity. Value enum: "provisioning", "active",
     * "attention_required", "inactive", "archived".
     */
    "status": "provisioning" | "active" | "attention_required" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string or null. Machine-readable detail for the current status, or null
     * when no reason is reported. Value enum: "dns_record_missing", "dns_record_mismatch",
     * "ownership_record_missing", "ownership_record_mismatch", "caa_record_blocks_certificate",
     * "proxied_by_another_provider", "certificate_pending", "custom_domains_inactive", "other",
     * null.
     */
    "status_reason": "dns_record_missing"
        | "dns_record_mismatch"
        | "ownership_record_missing"
        | "ownership_record_mismatch"
        | "caa_record_blocks_certificate"
        | "proxied_by_another_provider"
        | "certificate_pending"
        | "custom_domains_inactive"
        | "other"
        | null
        | (string & {})
        | null;
    /**
     * Shape $ (Value): string. Whether the hostname serves checkout pages or the customer account
     * Flint hosts. Value enum: "checkout", "customer_account".
     */
    "type": "checkout" | "customer_account" | (string & {});
    /**
     * Shape $ (Value): string. When this domain resource was last updated, in RFC3339 format.
     * Format: date-time.
     */
    "updated_at": string;
};
/**
 * Shape $ (Value): {@link CustomDomainDNSRecord}. A DNS record for configuring or verifying a
 * custom hostname.
 */
export type CustomDomainDNSRecord = {
    /** Shape $ (Value): string. DNS name at which to publish this record. */
    "name": string;
    /**
     * Shape $ (Value): string. DNS record type to publish, such as cname or txt. Value enum:
     * "cname", "txt".
     */
    "type": "cname" | "txt" | (string & {});
    /** Shape $ (Value): string. DNS record value to publish at name. */
    "value": string;
};
/** Shape $ (Value): {@link CustomDomainListResponse}. A page of `CustomDomain` objects. */
export type CustomDomainListResponse = {
    /**
     * Shape $ (Value): Array of {@link CustomDomain}. Shape $[] (Value): {@link CustomDomain}. A
     * merchant hostname for hosted checkout or customer account pages.
     */
    "data": Array<CustomDomain>;
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
/** Shape $ (Value): {@link CustomDomainResponse}. A response containing `CustomDomain` data. */
export type CustomDomainResponse = {
    /**
     * Shape $ (Value): {@link CustomDomain}. A merchant hostname for hosted checkout or customer
     * account pages.
     */
    "data": CustomDomain;
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
export type CustomDomainsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCustomDomainRequestInput}. The request body for: Create a
     * custom domain.
     */
    "body": InputValue<CreateCustomDomainRequestInput>;
};
export type CustomDomainsGetInput = {
    /** Shape $ (Value): string. */
    "custom_domain_id": InputValue<string>;
};
export type CustomDomainsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "checkout", "customer_account".
     * Shape $[] (Value): string. Value enum: "checkout", "customer_account".
     */
    "type"?: InputValue<Array<"checkout" | "customer_account">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "provisioning", "active",
     * "attention_required", "inactive", "archived". Shape $[] (Value): string. Value enum:
     * "provisioning", "active", "attention_required", "inactive", "archived".
     */
    "status"?: InputValue<Array<"provisioning" | "active" | "attention_required" | "inactive" | "archived">>;
};
export type CustomDomainsRemoveInput = {
    /** Shape $ (Value): string. */
    "custom_domain_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
/** Shape $ (Value): {@link Customer}. A merchant's customer profile. */
export type Customer = {
    /**
     * Shape $ (Value): {@link Address} or null. The customer's default billing address: a copy of
     * the address of the saved address marked is_default_billing. Read-only; change it through
     * /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this
     * address. Null when no saved address is the billing default. Shape $.anyOf[1] (Value): {@link
     * Address}. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     * Shape $.anyOf[2] (Value): null.
     */
    "billing_address": ((Address) | (null));
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /** Shape $ (Value): string. */
    "default_invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedPaymentMethodSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
     * status, and card details, returned when the payment method is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
    /** Shape $ (Value): string or null. */
    "default_payment_method_id": string | null;
    /**
     * Shape $ (Value): string or null. Customer email, or null when the customer has none. Unique
     * among the environment's customers.
     */
    "email": string | null;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this customer in an external
     * system, or null when none. Not returned to customer sessions. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Internal note about this customer, or null when none. Not
     * returned to customer sessions.
     */
    "internal_note"?: string | null;
    /**
     * Shape $ (Value): boolean. Flag you set on the customer, for example after checking ID in
     * store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to
     * customer verifications, which prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string or null. Customer name, or null when none. */
    "name": string | null;
    /** Shape $ (Value): string or null. Customer phone number, or null when none. */
    "phone": string | null;
    /**
     * Shape $ (Value): {@link CustomerReceivables}. A customer's receivable balances by currency
     * and when they were observed.
     */
    "receivables"?: CustomerReceivables;
    /**
     * Shape $ (Value): string or null. Free-form label you assign, such as wholesale, so promotion
     * and delivery rules can match groups of customers. It is not an ID; Flint does not check it
     * against any resource. Null when none. Not returned to customer sessions.
     */
    "segment"?: string | null;
    /**
     * Shape $ (Value): {@link Address} or null. The customer's default shipping address: a copy of
     * the address of the saved address marked is_default_shipping. Read-only; change it through
     * /v1/customers/{customer_id}/addresses. Checkout prefills it. Null when no saved address is
     * the shipping default. Shape $.anyOf[1] (Value): {@link Address}. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country. Shape $.anyOf[2] (Value): null.
     */
    "shipping_address": ((Address) | (null));
    /** Shape $ (Value): string.  Value enum: "active", "deletion_processing", "deleted". */
    "status": "active" | "deletion_processing" | "deleted" | (string & {});
    /** Shape $ (Value): boolean. */
    "tax_exempt"?: boolean;
    /**
     * Shape $ (Value): {@link TaxIdentity} or null. Shape $.anyOf[1] (Value): {@link TaxIdentity}.
     * Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs
     * or change tax treatment. Tax IDs are an owned collection in display order; replacing the
     * array requires the parent's expected_version. Existing entries retain their document_tax_id;
     * omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2] (Value): null.
     */
    "tax_identity": ((TaxIdentity) | (null));
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link CustomerAccountPresentation}. How a customer account is presented: its
 * account name and custom domain. Send null to clear a value.
 */
export type CustomerAccountPresentation = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "account_name"?: string | null;
};
/**
 * Shape $ (Value): {@link CustomerAccountPresentationRequestRequestInput}. How a customer account
 * is presented: its account name and custom domain. Send null to clear a value.
 */
export type CustomerAccountPresentationRequestRequestInput = CustomerAccountPresentation;
/**
 * Shape $ (Value): {@link CustomerAccountRouteTemplates}. Route templates for a merchant-hosted
 * customer account: email preferences, invoice, order, return, and subscription pages. Send null
 * to clear one.
 */
export type CustomerAccountRouteTemplates = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "email_preferences"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "invoice"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "order"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "return"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "subscription"?: string | null;
};
/**
 * Shape $ (Value): {@link CustomerAccountRouteTemplatesRequestRequestInput}. Route templates for a
 * merchant-hosted customer account: email preferences, invoice, order, return, and subscription
 * pages. Send null to clear one.
 */
export type CustomerAccountRouteTemplatesRequestRequestInput = CustomerAccountRouteTemplates;
/**
 * Shape $ (Value): {@link CustomerAccountSettings}. Customer account settings: hosted mode,
 * merchant account URL, presentation, route templates, and what buyers may do to their own
 * subscriptions.
 */
export type CustomerAccountSettings = {
    /**
     * Shape $ (Value): {@link BuyerCapabilities}. Replaced as a whole: send every field you want
     * to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a
     * customer session, in either mode. Merchant credentials are not bound by it. Buyers can
     * always cancel. Written as a whole: an update that includes buyer_capabilities replaces the
     * stored value, and each field it omits takes its default. Effective settings include every
     * default. What a store lets buyers do to their own subscriptions. Send at least one field;
     * each field you omit takes its default. minProperties: 1.
     */
    "buyer_capabilities"?: BuyerCapabilities;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "merchant_account_url"?: string | null;
    /** Shape $ (Value): string.  Value enum: "flint_hosted", "merchant_hosted". */
    "mode"?: "flint_hosted" | "merchant_hosted" | (string & {});
    /**
     * Shape $ (Value): {@link CustomerAccountPresentation}. Patch object: fields you send are
     * applied, fields you omit are unchanged. How a customer account is presented: its account
     * name and custom domain. Send null to clear a value.
     */
    "presentation"?: CustomerAccountPresentation;
    /**
     * Shape $ (Value): {@link CustomerAccountRouteTemplates}. Patch object: fields you send are
     * applied, fields you omit are unchanged. Route templates for a merchant-hosted customer
     * account: email preferences, invoice, order, return, and subscription pages. Send null to
     * clear one.
     */
    "route_templates"?: CustomerAccountRouteTemplates;
};
/**
 * Shape $ (Value): {@link CustomerAccountSettingsRequestRequestInput}. Customer account settings:
 * hosted mode, merchant account URL, presentation, route templates, and what buyers may do to
 * their own subscriptions.
 */
export type CustomerAccountSettingsRequestRequestInput = {
    /**
     * Shape $ (Value): {@link BuyerCapabilitiesInput}. Replaced as a whole: send every field you
     * want to keep. What buyers may do to their own subscriptions in Flint's buyer account or
     * through a customer session, in either mode. Merchant credentials are not bound by it. Buyers
     * can always cancel. Written as a whole: an update that includes buyer_capabilities replaces
     * the stored value, and each field it omits takes its default. Effective settings include
     * every default. What a store lets buyers do to their own subscriptions. Send at least one
     * field; each field you omit takes its default. minProperties: 1.
     */
    "buyer_capabilities"?: BuyerCapabilitiesInput;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "merchant_account_url"?: string | null;
    /** Shape $ (Value): string.  Value enum: "flint_hosted", "merchant_hosted". */
    "mode"?: "flint_hosted" | "merchant_hosted";
    /**
     * Shape $ (Value): {@link CustomerAccountPresentationRequestRequestInput}. Patch object:
     * fields you send are applied, fields you omit are unchanged. How a customer account is
     * presented: its account name and custom domain. Send null to clear a value.
     */
    "presentation"?: CustomerAccountPresentationRequestRequestInput;
    /**
     * Shape $ (Value): {@link CustomerAccountRouteTemplatesRequestRequestInput}. Patch object:
     * fields you send are applied, fields you omit are unchanged. Route templates for a
     * merchant-hosted customer account: email preferences, invoice, order, return, and
     * subscription pages. Send null to clear one.
     */
    "route_templates"?: CustomerAccountRouteTemplatesRequestRequestInput;
};
/** Shape $ (Value): {@link CustomerAddress}. An address saved on a customer's profile. */
export type CustomerAddress = {
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address": Address;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "customer_address_id": string;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /** Shape $ (Value): boolean. */
    "is_default_billing": boolean;
    /** Shape $ (Value): boolean. */
    "is_default_shipping": boolean;
    /** Shape $ (Value): string. Limited to 100 characters (Unicode code points). maxLength: 100. */
    "label"?: string;
    /**
     * Shape $ (Value): string. E.164 phone number. Limited to 30 characters (Unicode code points).
     * maxLength: 30.
     */
    "phone"?: string;
    /** Shape $ (Value): string. Limited to 255 characters (Unicode code points). maxLength: 255. */
    "recipient_name": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link CustomerAddressListResponse}. A page of `CustomerAddress` objects. */
export type CustomerAddressListResponse = {
    /**
     * Shape $ (Value): Array of {@link CustomerAddress}. Shape $[] (Value): {@link
     * CustomerAddress}. An address saved on a customer's profile.
     */
    "data": Array<CustomerAddress>;
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
/**
 * Shape $ (Value): {@link CustomerAddressResponse}. A response containing `CustomerAddress` data.
 */
export type CustomerAddressResponse = {
    /** Shape $ (Value): {@link CustomerAddress}. An address saved on a customer's profile. */
    "data": CustomerAddress;
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
 * Shape $ (Value): {@link CustomerDeletionRequest}. A request to delete a customer's personal
 * information.
 */
export type CustomerDeletionRequest = {
    /** Shape $ (Value): string. */
    "customer_deletion_request_id": string;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "requested_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "resolved_at"?: string;
    /**
     * Shape $ (Value): string. What deletion keeps. `retain_required_commerce_records`: orders,
     * invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes,
     * without the customer's email address or phone number. Issued invoices and credit notes keep
     * the buyer name, billing address, and tax ID they were issued with, because tax law requires
     * them. Orders keep the delivery recipient's name and address. Contact copies created while
     * deletion is finishing are erased within minutes, with another check about 24 hours later.
     * Value enum: "retain_required_commerce_records".
     */
    "retention_policy": "retain_required_commerce_records" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "pending_review", "processing", "completed",
     * "rejected", "failed".
     */
    "status": "pending_review" | "processing" | "completed" | "rejected" | "failed" | (string & {});
};
/**
 * Shape $ (Value): {@link CustomerDeletionRequestListResponse}. A page of
 * `CustomerDeletionRequest` objects.
 */
export type CustomerDeletionRequestListResponse = {
    /**
     * Shape $ (Value): Array of {@link CustomerDeletionRequest}. Shape $[] (Value): {@link
     * CustomerDeletionRequest}. A request to delete a customer's personal information.
     */
    "data": Array<CustomerDeletionRequest>;
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
/**
 * Shape $ (Value): {@link CustomerDeletionRequestResponse}. A response containing
 * `CustomerDeletionRequest` data.
 */
export type CustomerDeletionRequestResponse = {
    /**
     * Shape $ (Value): {@link CustomerDeletionRequest}. A request to delete a customer's personal
     * information.
     */
    "data": CustomerDeletionRequest;
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
export type CustomerDeletionRequestsListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending_review", "processing",
     * "completed", "rejected", "failed". Shape $[] (Value): string. Value enum: "pending_review",
     * "processing", "completed", "rejected", "failed".
     */
    "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type CustomerDeletionRequestsResolveInput = {
    /** Shape $ (Value): string. */
    "customer_deletion_request_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ResolveCustomerDeletionRequestInput}. The request body for: Resolve
     * a customer deletion request.
     */
    "body": InputValue<ResolveCustomerDeletionRequestInput>;
};
/**
 * Shape $ (Value): {@link CustomerEmailDeliverySettings}. For each kind of customer email, whether
 * Flint sends it or the merchant sends it.
 */
export type CustomerEmailDeliverySettings = {
    /** Shape $ (Value): string.  Value enum: "flint_sends", "merchant_sends". */
    "dunning"?: "flint_sends" | "merchant_sends" | (string & {});
    /** Shape $ (Value): string.  Value enum: "flint_sends", "merchant_sends". */
    "fulfillment_updates"?: "flint_sends" | "merchant_sends" | (string & {});
    /** Shape $ (Value): string.  Value enum: "flint_sends", "merchant_sends". */
    "invoices"?: "flint_sends" | "merchant_sends" | (string & {});
    /** Shape $ (Value): string.  Value enum: "flint_sends", "merchant_sends". */
    "order_receipts"?: "flint_sends" | "merchant_sends" | (string & {});
    /** Shape $ (Value): string.  Value enum: "flint_sends", "merchant_sends". */
    "returns"?: "flint_sends" | "merchant_sends" | (string & {});
    /** Shape $ (Value): string.  Value enum: "flint_sends", "merchant_sends". */
    "subscription_lifecycle"?: "flint_sends" | "merchant_sends" | (string & {});
};
/**
 * Shape $ (Value): {@link CustomerEmailDeliverySettingsRequestRequestInput}. For each kind of
 * customer email, whether Flint sends it or the merchant sends it.
 */
export type CustomerEmailDeliverySettingsRequestRequestInput = {
    /** Shape $ (Value): string.  Value enum: "flint_sends", "merchant_sends". */
    "dunning"?: "flint_sends" | "merchant_sends";
    /** Shape $ (Value): string.  Value enum: "flint_sends", "merchant_sends". */
    "fulfillment_updates"?: "flint_sends" | "merchant_sends";
    /** Shape $ (Value): string.  Value enum: "flint_sends", "merchant_sends". */
    "invoices"?: "flint_sends" | "merchant_sends";
    /** Shape $ (Value): string.  Value enum: "flint_sends", "merchant_sends". */
    "order_receipts"?: "flint_sends" | "merchant_sends";
    /** Shape $ (Value): string.  Value enum: "flint_sends", "merchant_sends". */
    "returns"?: "flint_sends" | "merchant_sends";
    /** Shape $ (Value): string.  Value enum: "flint_sends", "merchant_sends". */
    "subscription_lifecycle"?: "flint_sends" | "merchant_sends";
};
/**
 * Shape $ (Value): {@link CustomerEmailPreferences}. A customer's email preferences: checkout
 * reminders and shipping updates.
 */
export type CustomerEmailPreferences = {
    /** Shape $ (Value): boolean. A reminder after leaving checkout without paying. */
    "checkout_reminders": boolean;
    /** Shape $ (Value): string. Flint customer ID fixed by the customer session. */
    "customer_id": string;
    /**
     * Shape $ (Value): boolean. Emails about shipments and deliveries, such as shipped, out for
     * delivery, and delivered.
     */
    "shipping_updates": boolean;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link CustomerEmailPreferencesResponse}. A response containing
 * `CustomerEmailPreferences` data.
 */
export type CustomerEmailPreferencesResponse = {
    /**
     * Shape $ (Value): {@link CustomerEmailPreferences}. A customer's email preferences: checkout
     * reminders and shipping updates.
     */
    "data": CustomerEmailPreferences;
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
