import type {
    BuyerFulfillment,
    BuyerAction,
    BuyerCheckoutSession,
    BundleComponent,
    BuyerErrorRemediation,
    BuyerExpandedOrderSummary
} from './types-1.js';
import type { ResponseMeta, ReturnFinancialSummary, ReturnEligibilitySelection } from './types-48.js';
import type { MoneyValue } from './types-35.js';
import type { Address } from './types-0.js';
import type { CheckoutMerchantSupport, CheckoutBuyerContact, CategoryReference, CardDetails } from './types-4.js';
import type { CheckoutTheme } from './types-5.js';
import type { Image } from './types-25.js';
import type { InvoiceDocumentRow, InvoiceLateFeePolicy } from './types-29.js';
import type { InvoicePaymentAttempt, InvoicePaymentOptionCostComparison } from './types-30.js';
import type { InvoicePaymentTermsSnapshot, InvoiceScheduleEntry, InvoiceSnapshot } from './types-31.js';
import type { BuyerTip, BuyerSelectableOrderPaymentIntent, BuyerReturnResolutionPreview } from './types-3.js';
import type {
    OrderAuthorizationAmounts,
    OrderDeliveryDestination,
    OrderDiscount,
    OrderGiftCardEstimate,
    OrderGiftCardSelection,
    OrderGiftCardSettlement,
    OrderCalculatedChargeTax,
    OrderCalculatedLineItemTax,
    OrderLineItemFulfillmentQuantities,
    OrderLineItemFulfillmentRequirements
} from './types-36.js';
import type {
    OrderReturnCreditSettlement,
    OrderLineSubscriptionOfferSummary,
    OrderPaymentAttemptPaymentMethodSave,
    OrderTaxExemption
} from './types-37.js';
import type { PricingAmounts, PendingPaymentAction, PaymentSourceSummary } from './types-43.js';
import type { SettlementAmounts, SelectedProductOption, SubscribedLine, StripeClientSetup } from './types-53.js';
import type { TicketedEvent, TextModifierRequest } from './types-57.js';
import type { Dimensions } from './types-20.js';
import type { GiftCardPurchaseSnapshot } from './types-24.js';
import type { LineItemInventorySnapshot } from './types-32.js';
import type { PurchasedGiftCard, RefundLineItemAllocation } from './types-46.js';
import type { Weight } from './types-61.js';
import type { PaymentAttemptGiftCardRedemption, PaymentErrorSummary, PaymentFulfillmentHold } from './types-40.js';
import type { TaxBreakdown } from './types-56.js';
import type { ReturnResolutionLineItemRequest } from './types-50.js';
import type { ExpandedCustomerSummary, ExpandedPaymentIntentSummary } from './types-21.js';
import type { MetadataMap } from './types-34.js';
import type { PaymentRefund } from './types-42.js';
import type { RefundTaxBreakdownRefund, RefundTenderAllocation } from './types-47.js';
import type {
    ReturnReasonSummary,
    ReturnLineItemValue,
    ReturnLineItemDecisionProposal,
    ReturnPolicyAdjustmentProposal
} from './types-49.js';
/** A page of `BuyerFulfillment` objects. */
export type BuyerFulfillmentListResponse = {
    /**  [] (Value): {@link BuyerFulfillment}. Work required to deliver an order's items. */
    "data": Array<BuyerFulfillment>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * A terminal outcome recorded on a fulfillment, such as a no-show, with its `reason` and when it
 * occurred.
 */
export type BuyerFulfillmentOutcome = {
    /** Time the terminal outcome occurred. Format: date-time. */
    "occurred_at": string;
    /**
     * Recorded fulfillment outcome, such as a missed service appointment. Value enum: "no_show".
     */
    "outcome_type": "no_show" | (string & {});
    /**
     * Machine-readable reason for the recorded outcome. Value enum: "customer_no_show",
     * "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
};
/** A response containing `BuyerFulfillment` data. */
export type BuyerFulfillmentResponse = {
    /** Work required to deliver an order's items. */
    "data": BuyerFulfillment;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A prepaid balance a customer can spend with the merchant. */
export type BuyerGiftCard = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "available_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "balance_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    "gift_card_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "last_loaded_at": string | null;
    /** RFC3339 timestamp. Format: date-time. */
    "last_redeemed_at": string | null;
    /** Last four characters of the card's current code. minLength: 4. maxLength: 4. */
    "last4": string;
    "merchant_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "reserved_money": MoneyValue;
    /** Value enum: "pending", "active", "frozen", "closed". */
    "status": "pending" | "active" | "frozen" | "closed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. */
    "version": number;
};
/** A page of `BuyerGiftCard` objects. */
export type BuyerGiftCardListResponse = {
    /**
     *  [] (Value): {@link BuyerGiftCard}. A prepaid balance a customer can spend with the
     * merchant.
     */
    "data": Array<BuyerGiftCard>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `BuyerGiftCard` data. */
export type BuyerGiftCardResponse = {
    /** A prepaid balance a customer can spend with the merchant. */
    "data": BuyerGiftCard;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A record of a change to a gift card's balance. */
export type BuyerGiftCardTransaction = {
    /** Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "balance_after_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "balance_before_money": MoneyValue;
    "gift_card_id": string;
    "gift_card_transaction_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "posted_at": string;
    /** Format: int64. */
    "sequence": number;
    /**
     * Value enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment",
     * "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery",
     * "purchase_refund_recovery_transfer".
     */
    "transaction_type": "load"
        | "import"
        | "redeem"
        | "refund"
        | "refund_transfer"
        | "adjustment"
        | "cash_out"
        | "purchase_reversal"
        | "funding_loss_accepted"
        | "purchase_refund_recovery"
        | "purchase_refund_recovery_transfer"
        | (string & {});
};
/** A page of `BuyerGiftCardTransaction` objects. */
export type BuyerGiftCardTransactionListResponse = {
    /**
     *  [] (Value): {@link BuyerGiftCardTransaction}. A record of a change to a gift card's
     * balance.
     */
    "data": Array<BuyerGiftCardTransaction>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Controls buyer instructions for a delivery option. Omit it from a method configuration to
 * disable instruction collection.
 */
export type BuyerInstructionsConfig = {
    /** Whether checkout collects buyer instructions. */
    "enabled": boolean;
    /**
     * Checkout field label, without leading or trailing whitespace. Clients use a delivery-type
     * default when omitted. minLength: 1. maxLength: 255.
     */
    "label"?: string;
    /**
     * Checkout field placeholder, without leading or trailing whitespace. Clients use a
     * delivery-type default when omitted. minLength: 1. maxLength: 500.
     */
    "placeholder"?: string;
    /**
     * Whether the buyer must enter instructions before selecting the option. Requires
     * enabled=true.
     */
    "required": boolean;
};
/**
 * Controls buyer instructions for a delivery option. Omit it from a method configuration to
 * disable instruction collection.
 */
export type BuyerInstructionsConfigRequestInput = BuyerInstructionsConfig;
/** A bill issued to a customer. */
export type BuyerInvoice = {
    /**
     * The payment attempt in progress for this invoice, such as a bank debit still processing.
     * Omitted when none is open. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice
     * checkout session result; `GET /v1/me/invoices` omits it. An attempt to collect payment for
     * an invoice.
     */
    "active_payment_attempt"?: InvoicePaymentAttempt;
    /**
     * What changed after the invoice was issued, in display order, such as late fees, payments,
     * credit notes, and write-offs. When present, rows where `is_informational` is `false` sum to
     * `outstanding_money`. The opening `total` row contributes to the sum; the closing
     * `amount_due` row is informational and states it. `[]` when nothing changed or the invoice is
     * void. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session
     * result; `GET /v1/me/invoices` omits it. [] (Value): {@link InvoiceDocumentRow}. One row of
     * an invoice document, such as a subtotal, discount, tax, late fee, payment, or amount due,
     * with its amount.
     */
    "balance_rows"?: Array<InvoiceDocumentRow>;
    /**
     * What the buyer can do with the invoice: pay. pay is available when a checkout session can
     * take a payment now, and then required, due by due_at or by the due date of the installment
     * it collects. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /** Additional recipients copied on the invoice email and every reminder. [] (Value): string. */
    "cc_emails": Array<string>;
    /**
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time.
     */
    "closed_at"?: string;
    /**
     * Whether collection is blocked. While it is inventory_blocked, collection attempts return 409
     * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
     * "inventory_blocked", "resolved".
     */
    "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
    /**
     * How the invoice is collected: buyer_initiated, automatic, or external. Returned by `GET
     * /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it. Value enum: "buyer_initiated", "automatic", "external".
     */
    "collection_mode"?: "buyer_initiated" | "automatic" | "external" | (string & {});
    /** When the invoice was created. Format: date-time. */
    "created_at"?: string;
    /**
     * Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit
     * isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "credit_money": MoneyValue;
    /**
     * The part of the balance due now. Without schedule_entries, it equals outstanding_money. With
     * schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose
     * due time has arrived and that still has a balance, or 0 when there is none. It is the amount
     * the next collect call or checkout session charges. To total everything past due, add the
     * outstanding_money of the entries whose status is due or overdue. Always 0 unless the invoice
     * is open or partially_paid. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currently_due_money": MoneyValue;
    /** Customer billed by this invoice. Absent when the invoice has no customer. */
    "customer_id"?: string;
    /**
     * When payment is due. With payment terms, issue sets it from issued_at and the terms, counted
     * in the invoice's timezone. Absent when the invoice has no due date. Format: date-time.
     */
    "due_at"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. It cannot change after issue. null when
     * unset.
     */
    "footer": string | null;
    /** Flint invoice ID. */
    "invoice_id": string;
    /**
     * Sequential document number assigned when the invoice is issued. Numbering is per merchant,
     * with test and live mode numbered independently.
     */
    "invoice_number"?: string;
    /**
     * Whether the invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, due_at has passed and outstanding_money is above zero; with them, at least
     * one entry is overdue. Computed when the invoice is read.
     */
    "is_overdue": boolean;
    /**
     * The rows of the invoice's totals as issued, in display order. Rows where `is_informational`
     * is `false` sum to `snapshot.pricing_amounts.total_money`. A closing `total` row is
     * informational and states that sum. Show the rows in order without merging or summing them.
     * Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result;
     * `GET /v1/me/invoices` omits it. [] (Value): {@link InvoiceDocumentRow}. One row of an
     * invoice document, such as a subtotal, discount, tax, late fee, payment, or amount due, with
     * its amount.
     */
    "issue_rows"?: Array<InvoiceDocumentRow>;
    /** When the invoice was issued. Absent on a draft. Format: date-time. */
    "issued_at"?: string;
    /**
     * Late fees assessed after issue, minus waivers, including amounts since paid or written off.
     * Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "late_fee_money": MoneyValue;
    /**
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. [] (Value): {@link
     * BuyerInvoiceLateFee}. A charge assessed because an invoice payment is overdue.
     */
    "late_fees": Array<BuyerInvoiceLateFee>;
    /**
     * Message to the customer, printed on the invoice and PDF. It cannot change after issue. null
     * when unset.
     */
    "memo": string | null;
    /**
     * The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET
     * /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "merchant_icon"?: Image;
    /** Merchant that owns this invoice. */
    "merchant_id": string;
    /**
     * The merchant's logo. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice
     * checkout session result; `GET /v1/me/invoices` omits it. An image with its `url`, `width`,
     * and `height`, and optional `alt` text.
     */
    "merchant_logo"?: Image;
    /**
     * How the buyer can reach the merchant: the support email, phone, and URL the merchant set.
     * Omitted when the merchant set none. Returned by `GET /v1/me/invoices/{invoice_id}` and in
     * the invoice checkout session result; `GET /v1/me/invoices` omits it. The merchant's support
     * contact. Each field is omitted when the merchant has not set it.
     */
    "merchant_support"?: CheckoutMerchantSupport;
    /** The order this invoice bills. Every invoice has one; quick pay creates it. */
    "order_id": string;
    /**
     * What is still owed. On an open or partially_paid invoice it is total_money + late_fee_money
     * - paid_money - credit_money, never below zero. 0 on paid, credited, uncollectible, and void
     * invoices. Refunds don't change it. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * When the invoice most recently became paid. Cleared when status leaves paid and set again on
     * a later paid transition. Format: date-time.
     */
    "paid_at"?: string;
    /**
     * Payments collected toward this invoice, online or as recorded manual payments, minus
     * reversed payments, including payments toward late fees. Never below zero. Refunds don't
     * reduce it; they are in refunded_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * A payment option that costs the merchant less to accept for this invoice, with the estimated
     * savings. Present when the invoice's payment policy turns on `show_cost_comparison` and Flint
     * can compare the options. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice
     * checkout session result; `GET /v1/me/invoices` omits it. Compares two payment options on an
     * invoice and shows the estimated savings from the lower-cost option.
     */
    "payment_option_cost_comparison"?: InvoicePaymentOptionCostComparison;
    /**
     * Ways the buyer can pay this invoice online, leaving out any option whose limit the amount
     * exceeds. `[]` when it can't be paid online. Returned by `GET /v1/me/invoices/{invoice_id}`
     * and in the invoice checkout session result; `GET /v1/me/invoices` omits it. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * The payment term captured on the draft, with its due date rule and late fee policy. Later
     * changes to the payment term don't affect this invoice. The payment terms saved on an
     * invoice: the term's name, version, due date calculation, and late fee policy.
     */
    "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
    /**
     * The buyer's purchase order number, printed on the invoice and PDF. It cannot change after
     * issue. null when unset.
     */
    "po_number": string | null;
    /**
     * Where Flint emails the invoice and its reminders. Email delivery requires it at issue. null
     * when unset.
     */
    "recipient_email": string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order
     * number goes in po_number. It cannot change after issue. null when unset.
     */
    "reference": string | null;
    /**
     * How much of the collected money has been refunded. It doesn't change status. Value enum:
     * "none", "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice
     * settings remit-to address. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "remit_to_address"?: Address;
    /**
     * The payment schedule, in schedule order. Always [] when the invoice has no schedule and is
     * collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One payment on an
     * invoice's payment schedule, such as a deposit, installment, or balance, with its due time,
     * amounts, and status.
     */
    "schedule_entries": Array<InvoiceScheduleEntry>;
    /**
     * When Flint will issue and deliver this draft. null when no issue is scheduled. Cleared when
     * the draft is issued or voided, or when you send null. Format: date-time.
     */
    "scheduled_issue_at": string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. null when unset. Format: date.
     */
    "service_date": string | null;
    /**
     * Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when
     * the merchant's agreement with Flint removes it. Returned by `GET
     * /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it.
     */
    "show_flint_mark"?: boolean;
    /**
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts.
     */
    "snapshot"?: InvoiceSnapshot;
    /**
     * Current invoice status. paid and credited close the current balance and can reopen to open
     * or partially_paid after a payment or credit allocation reversal; invoice.reopened reports
     * that change. void and uncollectible are final. Refunds change refund_status without
     * reopening the balance. Value enum: "open", "partially_paid", "paid", "void",
     * "uncollectible", "credited".
     */
    "status": "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited" | (string & {});
    /**
     * The subscription the backing order belongs to, copied when the draft is created and never
     * changed. null when the order isn't part of a subscription.
     */
    "subscription_id": string | null;
    /**
     * The theme Flint's hosted invoice page renders with, from your branding settings. Returned by
     * `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it. Colors, corner radius, font family, and title that style a
     * checkout, taken from the session or link theme or the merchant's branding settings.
     */
    "theme"?: CheckoutTheme;
    /**
     * IANA time zone for the invoice's calendar dates, such as due dates from payment terms and
     * reminder and late fee day counts. At issue, an invoice without one takes the invoice
     * settings timezone.
     */
    "timezone"?: string;
    /**
     * What the invoice bills, equal to snapshot.pricing_amounts.total_money and fixed at issue.
     * Late fees are in late_fee_money. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** When the invoice last changed. Format: date-time. */
    "updated_at"?: string;
    /**
     * Current invoice version. Send this as expected_version when updating the draft. Format:
     * int64. minimum: 1.
     */
    "version": number;
    /**
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time.
     */
    "viewed_at"?: string;
    /** When the invoice was voided. Format: date-time. */
    "voided_at"?: string;
};
/** A response containing `BuyerInvoiceCheckoutSessionResult` data. */
export type BuyerInvoiceCheckoutSessionResponse = {
    /**
     * The invoice is the primary resource, with its checkout session, credential, and any invoice
     * payment attempt.
     */
    "data": BuyerInvoiceCheckoutSessionResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The invoice is the primary resource, with its checkout session, credential, and any invoice
 * payment attempt.
 */
export type BuyerInvoiceCheckoutSessionResult = {
    "checkout_auth_token": string;
    /** A session in which a buyer completes an order's payment. */
    "checkout_session": BuyerCheckoutSession;
    /** A bill issued to a customer. */
    "invoice": BuyerInvoice;
    /** An attempt to collect payment for an invoice. */
    "invoice_payment_attempt"?: InvoicePaymentAttempt;
};
/** A charge assessed because an invoice payment is overdue. */
export type BuyerInvoiceLateFee = {
    /**
     * The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** When the fee was assessed. Format: date-time. */
    "assessed_at": string;
    /**
     * The unpaid balance the fee was calculated from, excluding late fees, captured at assessment.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "base_outstanding_money": MoneyValue;
    /** Flint invoice late fee ID. */
    "invoice_late_fee_id": string;
    /**
     * The schedule entry this fee applies to. Absent on an invoice without a schedule, where the
     * fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even
     * after a waiver.
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * The late fee policy from payment_terms_snapshot, copied when the fee was assessed. anyOf[1]
     * (Value): {@link InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed amount or a
     * percentage, a grace period in days, and whether Flint applies it automatically. anyOf[2]
     * (Value): null.
     */
    "late_fee_policy": ((InvoiceLateFeePolicy) | (null) | (unknown));
    /**
     * What is still owed on this fee: amount_money - paid_money - waived_money -
     * written_off_money, never below zero. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Payments applied to this fee, minus reversed payments. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /** When the fee was waived. Absent unless it was waived. Format: date-time. */
    "waived_at"?: string;
    /**
     * The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it
     * is less than amount_money when part of the fee was already paid. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "waived_money": MoneyValue;
    /**
     * The part of this fee written off when the invoice was marked uncollectible. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
/** A page of `BuyerInvoice` objects. */
export type BuyerInvoiceListResponse = {
    /**  [] (Value): {@link BuyerInvoice}. A bill issued to a customer. */
    "data": Array<BuyerInvoice>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `BuyerInvoice` data. */
export type BuyerInvoiceResponse = {
    /** A bill issued to a customer. */
    "data": BuyerInvoice;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A customer's purchase and its payment and fulfillment progress. */
export type BuyerOrder = {
    /** An attempt to pay an order. */
    "active_payment_attempt"?: BuyerOrderPaymentAttempt;
    /**
     * The amounts authorized and still capturable on an order's payments, with the authorization
     * expiry.
     */
    "authorization_amounts"?: OrderAuthorizationAmounts;
    /**
     * What the buyer can do with the order, in this order: start_return, then resend_receipt. A
     * buyer's read through a customer session on /v1/me, or in Flint's buyer account, lists both
     * every time; a merchant read gets an empty list. A list of orders leaves start_return out,
     * since only a read of one order checks return eligibility. start_return is due when the last
     * open return window ends. Example: []. [] (Value): {@link BuyerAction}. One thing a buyer can
     * do with an order, subscription, invoice or return they read through /v1/me. Show the actions
     * with is_required as what needs the buyer's attention, and the first available action as the
     * primary action on the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * Email and phone saved when payment started, from the pay request's buyer_contact or the
     * paying checkout session's saved contact. It does not change the linked customer. Buyer
     * contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    "buyer_note"?: string;
    /**  [] (Value): {@link BuyerOrderCharge}. An additional charge applied to an order. */
    "charges": Array<BuyerOrderCharge>;
    /**  [] (Value): string. */
    "checkout_session_ids": Array<string>;
    /**
     * When the order closed. Present exactly when status is closed. Set once at the transition and
     * never changed. Format: date-time.
     */
    "closed_at"?: string;
    /**
     * Why the order closed. Present exactly when status is closed. Set once at closure.
     * Unrecognized reasons are returned as other; new values may be added. Value enum: "paid",
     * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other".
     */
    "closed_reason"?: "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "customer_id"?: string;
    /**
     * The shipment or local-delivery destination committed for this order. Payment freezes this
     * value; fulfillment recipient changes do not replace it. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. Where an order is
     * delivered: the address, the recipient, and where the destination came from.
     */
    "delivery_destination"?: OrderDeliveryDestination;
    /**
     *  [] (Value): {@link OrderDiscount}. A discount applied to an order, with its amount, status,
     * and the line items and charges it covers. It comes from a manual discount or a promotion.
     */
    "discounts": Array<OrderDiscount>;
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
    /**  [] (Value): {@link BuyerFulfillment}. Work required to deliver an order's items. */
    "fulfillments": Array<BuyerFulfillment>;
    /**
     * An estimate of how an order total splits between gift cards and the payment processor, and
     * whether gift cards can pay it.
     */
    "gift_card_estimate"?: OrderGiftCardEstimate;
    /**
     *  [] (Value): {@link OrderGiftCardSettlement}. A gift card redemption applied to an order
     * payment, with the amount, tip, and gift card.
     */
    "gift_card_settlements": Array<OrderGiftCardSettlement>;
    "gift_card_tender_enabled": boolean;
    /**
     *  [] (Value): {@link OrderGiftCardSelection}. A gift card available to pay an order, with its
     * available balance and the last four characters of its code.
     */
    "gift_cards": Array<OrderGiftCardSelection>;
    /**
     * ID of the delivery selection that governs this order, including pickup choices without a
     * delivery destination. Null when no selection governs the order. While set, change the
     * destination through the delivery selection.
     */
    "governing_delivery_selection_id": string | null;
    /**  [] (Value): {@link BuyerOrderLineItem}. An item purchased in an order. */
    "line_items": Array<BuyerOrderLineItem>;
    "merchant_id"?: string;
    "order_id": string;
    "order_number"?: string;
    /** Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription". */
    "origin"?: "virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription" | (string & {});
    /**
     * What a client needs to collect payment for a buyer's order. The `stripe` field holds the
     * Stripe values.
     */
    "payment_collection"?: BuyerPaymentCollection;
    /**  [] (Value): string. */
    "payment_intent_ids": Array<string>;
    /**
     * Payment link whose checkout created this order. Absent for orders that did not come from a
     * payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
     */
    "payment_link_id"?: string;
    /**
     * Collection progress. An invoice write-off also completes collection without receiving the
     * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip,
     * and total.
     */
    "pricing_amounts": PricingAmounts;
    /**  [] (Value): string. */
    "refund_ids": Array<string>;
    /**
     * Refund progress for collected money. Value enum: "none", "partially_refunded", "refunded".
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
     * return did not create.
     */
    "return_resolution_id"?: string;
    /**
     * How much of an order has been paid, refunded, credited, written off, and settled as tips,
     * and what balance and outstanding amount remain.
     */
    "settlement_amounts": SettlementAmounts;
    /**
     * What a client needs to collect payment for a buyer's order. The `stripe` field holds the
     * Stripe values.
     */
    "setup_collection"?: BuyerPaymentCollection;
    /**
     * Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes,
     * returns, and metadata or note edits continue on a closed order. Value enum: "open",
     * "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     */
    "subscription_cycle"?: number;
    /**
     * Time the subscriber changed delivery after this paid renewal was prepared. The order keeps
     * its committed destination until you correct it or refund and replace it. Format: date-time.
     */
    "subscription_delivery_changed_at"?: string;
    "subscription_id"?: string;
    "subscription_plan_id"?: string;
    /**
     * Tax details on a buyer's order: whether tax is enabled, its mode and status, location,
     * exemption, and tax breakdowns.
     */
    "tax": BuyerOrderTax;
    /**
     * Event and tickets this order sold through an event payment link. Absent on other orders.
     * Event details for a ticketed order: name, location, start time, time zone, and the tickets
     * issued.
     */
    "ticketed_event"?: TicketedEvent;
    /**
     *  [] (Value): {@link BuyerTip}. A tip on a buyer's order, with its requested, effective,
     * settled, and refunded amounts and how it was allocated to payments.
     */
    "tips": Array<BuyerTip>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     */
    "version": number;
};
/** An additional charge applied to an order. */
export type BuyerOrderCharge = {
    /**
     * Fixed charge amount before charge discounts and tax. Percentage charges use percent instead.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Resolved charge amount after charge discounts and before additive tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "applied_money": MoneyValue;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "description"?: string;
    "fulfillment_id"?: string;
    "name": string;
    "order_charge_id": string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Charge amount already refunded. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Tax calculated for the charge, including any tax already included in its price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Applied charge amount plus tax that is not already included in the price. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/** An item purchased in an order. */
export type BuyerOrderLineItem = {
    /**
     * Unit price multiplied by quantity, before modifiers, discounts, and tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "base_subtotal_money": MoneyValue;
    /**
     * Components fixed when the bundle line was added. The line takes their shared taxability and
     * tax category; all component variants must share both stored values. An unset category equals
     * only another unset category. [] (Value): {@link BundleComponent}. An item included in a
     * bundle.
     */
    "bundle_components": Array<BundleComponent>;
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories": Array<CategoryReference>;
    "description"?: string;
    /**
     * Discount value allocated to this line item. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Current quantities for each required fulfillment obligation: one entry for a single item or
     * one per bundle component that requires fulfillment. Quantities use line units for single
     * items and component units for bundles. required_quantity equals unassigned_quantity +
     * assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity. Omitted when
     * the line needs no fulfillment or the order's obligations cannot be computed, including older
     * lines without recorded requirements. [] (Value): {@link OrderLineItemFulfillmentQuantities}.
     * Counts of how much of an order line item is assigned, fulfilled, failed, canceled, or still
     * unassigned for fulfillment.
     */
    "fulfillment_quantities"?: Array<OrderLineItemFulfillmentQuantities>;
    /**
     * Fulfillment requirements fixed when the line item was created. direct describes a single
     * item; components describes each bundle component. Omitted for older line items without
     * recorded requirements. Fulfillment requirements for an order line item, given for a single
     * item or for each component of a bundle.
     */
    "fulfillment_requirements"?: OrderLineItemFulfillmentRequirements;
    /**
     * The gift card purchase details saved on an order line item: configuration, face value, price
     * paid, and recipient.
     */
    "gift_card_purchase"?: GiftCardPurchaseSnapshot;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /**
     *  anyOf[1] (Value): {@link LineItemInventorySnapshot}. Whether an order line item tracks
     * inventory, and the inventory item quantities each unit demands. anyOf[2] (Value): null.
     */
    "inventory_snapshot": ((LineItemInventorySnapshot) | (null));
    /**
     * Sum of the line item's modifier totals. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     *  [] (Value): {@link BuyerOrderLineItemModifier}. A modifier on a buyer's order line item,
     * either a catalog modifier or entered text, with its quantity and price change.
     */
    "modifiers": Array<BuyerOrderLineItemModifier>;
    "name": string;
    "order_line_item_id": string;
    "product_id"?: string;
    /**
     * Masked card identities for fully funded units of this purchase line. Partial consideration
     * does not issue a card. [] (Value): {@link PurchasedGiftCard}. A gift card issued for one
     * unit of a purchased order line item, with its last four code characters and any card it
     * replaced.
     */
    "purchased_gift_cards": Array<PurchasedGiftCard>;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_money": MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "refunded_quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    "sku"?: string;
    /** Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    /**
     * Recurring offer and cadence frozen for this line at signup. The subscription offer and
     * billing interval an order line was bought under, with the recurring amount.
     */
    "subscription"?: SubscribedLine;
    /** Subscription created for this line after the order is paid. */
    "subscription_id"?: string;
    /**
     * Applicable active offer for a one-time line, or the offer terms frozen for a subscribed
     * line. A subscription offer attached to an order line item, with its name, discount, and
     * billing interval options.
     */
    "subscription_offer"?: OrderLineSubscriptionOfferSummary;
    /**
     * Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax settings for an order line item calculated by Flint or supplied by you, including the
     * line item tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /**
     * Tax calculated for this line item, including any tax already included in its price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Subtotal minus discounts, plus tax that is not already included in the price. Signed
     * monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /**
     * Weight of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "unit_weight"?: Weight;
    "variant_id"?: string;
};
/**
 * A modifier on a buyer's order line item, either a catalog modifier or entered text, with its
 * quantity and price change.
 */
export type BuyerOrderLineItemModifier = {
    /** Name of the modifier group recorded when this selection was added to the order line item. */
    "modifier_group_name": string;
    /**
     * Identifier of the selected catalog modifier. If its group is owned by a modifier set
     * (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it.
     */
    "modifier_id"?: string;
    /** Name of the selected modifier recorded on the order line item. */
    "name": string;
    /** Stable identifier of the selected modifier on this order line item. */
    "order_line_item_modifier_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Whether this selection appears in fulfillment details, recorded when selected. */
    "show_on_fulfillment": boolean;
    /** Whether this selection appears on buyer receipts, recorded when selected. */
    "show_on_receipt": boolean;
    /**
     * Whether the selection is a catalog list modifier or buyer-entered text. Value enum:
     * "catalog_modifier", "text".
     */
    "source_type": "catalog_modifier" | "text" | (string & {});
    /**
     * Selected text group and buyer-entered value. Read an inline text group through its owning
     * modifier set. Text a buyer entered for a text modifier group on an order line item.
     */
    "text"?: TextModifierRequest;
    /** Buyer-entered text recorded for a text modifier selection. */
    "text_value"?: string;
    /**
     * Total price added by this selection. Multiplies unit_price_delta_money by the modifier
     * quantity and, for per_item pricing, by the line item quantity. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Amount added to the item's unit price for each unit of this selection, recorded when
     * selected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money": MoneyValue;
};
/** A page of `BuyerOrder` objects. */
export type BuyerOrderListResponse = {
    /**
     *  [] (Value): {@link BuyerOrder}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data": Array<BuyerOrder>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** An attempt to pay an order. */
export type BuyerOrderPaymentAttempt = {
    /** RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "expected_outstanding_money": MoneyValue;
    /**
     *  [] (Value): {@link PaymentAttemptGiftCardRedemption}. A gift card redemption made as part
     * of an order payment attempt, with the amount, tip, and gift card.
     */
    "gift_card_redemptions": Array<PaymentAttemptGiftCardRedemption>;
    /**
     * Whether the attempt can continue through PayOrder with action: resume and this
     * order_payment_attempt_id after any pending client action is complete. If false, check status
     * before starting another payment; the attempt may still be in progress.
     */
    "is_resumable": boolean;
    /**
     * The concluded failure of a payment leg that failed this attempt. Absent for non-payment
     * failures. Why a payment attempt failed: a normalized `code`, a message, when it failed, and
     * recovery guidance.
     */
    "last_payment_error"?: BuyerPaymentErrorSummary;
    /** Value enum: "payment", "setup", "settlement". */
    "mode": "payment" | "setup" | "settlement" | (string & {});
    "order_payment_attempt_id": string;
    /**
     *  [] (Value): {@link BuyerPaymentAttemptPaymentIntent}. The payment intent behind an order
     * payment attempt, with its status, amounts, authorization expiry, and last payment error.
     */
    "payment_intents": Array<BuyerPaymentAttemptPaymentIntent>;
    /**
     * Set when the pay request sent save_payment_method: true and the attempt paid without saving
     * the payment method. A card typed into checkout and saved has no entry here; read
     * payment_method_save on the checkout session for a card saved with a mobile phone number.
     * What became of the buyer's save_payment_method. The payment does not depend on it.
     */
    "payment_method_save"?: OrderPaymentAttemptPaymentMethodSave;
    /**
     *  [] (Value): {@link PendingPaymentAction}. Client-side action required before continuing a
     * payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a
     * standalone PaymentIntent through its confirm endpoint without a replacement credential.
     */
    "pending_actions": Array<PendingPaymentAction>;
    /** RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /**
     * Value enum: "processing", "requires_action", "requires_capture", "partially_succeeded",
     * "requires_retry", "finalizing", "succeeded", "failed", "expired", "canceled".
     */
    "status": "processing"
        | "requires_action"
        | "requires_capture"
        | "partially_succeeded"
        | "requires_retry"
        | "finalizing"
        | "succeeded"
        | "failed"
        | "expired"
        | "canceled"
        | (string & {});
    /**
     * Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an
     * unmapped non-payment reason report other. Canceled and expired attempts include a reason
     * only when it adds information beyond status. New values may be added. Value enum:
     * "authorization_canceled", "coupon_reservation_failed", "gift_card_hold_acquisition_failed",
     * "invalid_payment_source", "inventory_unavailable", "order_changed_before_payment",
     * "order_payment_customer_mismatch", "other", "payment_authorization_canceled",
     * "payment_authorization_expired", "payment_confirmation_rejected",
     * "payment_link_capacity_claim_failed", "payment_link_capacity_validation_failed",
     * "payment_method_activation_pending", "payment_method_required",
     * "payment_option_not_allowed", "payment_option_unavailable", "payment_source_binding_failed",
     * "payment_source_conflict", "payment_source_not_updatable",
     * "payment_source_ownership_mismatch", "resource_guarantee_failed",
     * "setup_action_unavailable", "setup_hold_acquisition_failed", "setup_result_incomplete",
     * "tip_allocation_sync_failed", "zero_balance_hold_acquisition_failed".
     */
    "status_reason"?: "authorization_canceled"
        | "coupon_reservation_failed"
        | "gift_card_hold_acquisition_failed"
        | "invalid_payment_source"
        | "inventory_unavailable"
        | "order_changed_before_payment"
        | "order_payment_customer_mismatch"
        | "other"
        | "payment_authorization_canceled"
        | "payment_authorization_expired"
        | "payment_confirmation_rejected"
        | "payment_link_capacity_claim_failed"
        | "payment_link_capacity_validation_failed"
        | "payment_method_activation_pending"
        | "payment_method_required"
        | "payment_option_not_allowed"
        | "payment_option_unavailable"
        | "payment_source_binding_failed"
        | "payment_source_conflict"
        | "payment_source_not_updatable"
        | "payment_source_ownership_mismatch"
        | "resource_guarantee_failed"
        | "setup_action_unavailable"
        | "setup_hold_acquisition_failed"
        | "setup_result_incomplete"
        | "tip_allocation_sync_failed"
        | "zero_balance_hold_acquisition_failed"
        | (string & {});
};
/** A response containing `BuyerOrder` data. */
export type BuyerOrderResponse = {
    /** A customer's purchase and its payment and fulfillment progress. */
    "data": BuyerOrder;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Tax details on a buyer's order: whether tax is enabled, its mode and status, location,
 * exemption, and tax breakdowns.
 */
export type BuyerOrderTax = {
    /**
     * Identifies which automatic tax behavior applies to this order. connected means the account's
     * tax connection calculated it. standard marks an order calculated before automatic tax
     * required a tax connection. Value enum: "standard", "connected".
     */
    "automatic_profile"?: "standard" | "connected" | (string & {});
    /**  [] (Value): string. */
    "available_location_inputs"?: Array<string>;
    "enabled": boolean;
    /** Whether an order is tax exempt, and the customer it was assessed from. */
    "exemption"?: OrderTaxExemption;
    /** The location used to calculate tax on a buyer's order, and where its address came from. */
    "location"?: BuyerOrderTaxLocation;
    /** Value enum: "automatic", "external". */
    "mode": "automatic" | "external" | (string & {});
    /**
     * Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`).
     * Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent
     * retry of an earlier request omits it. Each line item and charge also states its own mode in
     * `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode"?: "additive" | "inclusive" | (string & {});
    /** Value enum: "not_required", "requires_location", "calculated", "exempt", "incomplete". */
    "status": "not_required" | "requires_location" | "calculated" | "exempt" | "incomplete" | (string & {});
    /**
     *  [] (Value): {@link TaxBreakdown}. The tax calculated for one jurisdiction on an order, line
     * item, or charge, with the taxable amount, rate or flat amount, and tax.
     */
    "tax_breakdowns"?: Array<TaxBreakdown>;
};
/** The location used to calculate tax on a buyer's order, and where its address came from. */
export type BuyerOrderTaxLocation = {
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Value enum: "provided", "fulfillment", "customer", "device", "location", "merchant". */
    "address_source": "provided" | "fulfillment" | "customer" | "device" | "location" | "merchant" | (string & {});
    /**
     * Value enum: "postal_code", "tax_address", "billing_address", "shipping_address",
     * "business_address".
     */
    "address_type": "postal_code"
        | "tax_address"
        | "billing_address"
        | "shipping_address"
        | "business_address"
        | (string & {});
    "customer_id"?: string;
    "fulfillment_id"?: string;
};
/** A package within a shipment. */
export type BuyerPackage = {
    /** Carrier transporting the package. */
    "carrier"?: string;
    /** Creation timestamp. Format: date-time. */
    "created_at"?: string;
    /** Package delivery timestamp. Format: date-time. */
    "delivered_at"?: string;
    /**
     * Physical length, width, and height of the package. Package or item dimensions as `length`,
     * `width`, and `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Null when no estimate is set.
     * Retained after delivery as history. This estimate is separate from the fulfillment's
     * promised shipment window. Format: date-time.
     */
    "expected_delivery_at"?: string | null;
    /** Fulfillment whose items are in the package. */
    "fulfillment_id": string;
    /**
     * Return-label URL supplied by the merchant's integration. Included for return packages;
     * omitted for outbound packages. Omitted for a checkout session credential that doesn't act
     * for the customer the buyer verified.
     */
    "label_url"?: string;
    /** Order whose items are in the package. */
    "order_id": string;
    /** Stable identifier of the package. */
    "package_id": string;
    /** Return this package belongs to. Present only on packages of return shipments. */
    "return_id"?: string;
    /**
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and the
     * quantity placed in a return shipment or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Carrier service used for the package. */
    "service_code"?: string;
    /** Shipment carrying this package. */
    "shipment_id": string;
    /** Package handoff timestamp. Format: date-time. */
    "shipped_at"?: string;
    /**
     * Current package lifecycle state. Package states are the source used to derive shipment
     * status. - `created`: The package record exists but has not been packed or handed off. -
     * `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was
     * handed to the carrier. - `in_transit`: The carrier is moving the package through its
     * network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`:
     * The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
     * delivery but did not complete it. Follow the carrier instructions before retrying delivery.
     * - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported
     * issue. - `returned`: The package was returned toward or to its origin. - `voided`: The
     * package was voided and will not continue through delivery. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
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
    /**
     * Always empty for buyer credentials. maxItems: 0. [] enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped". [] (Value): string. Value enum:
     * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped".
     */
    "supported_actions": Array<"mark_delivered"
        | "mark_delivery_attempted"
        | "mark_exception"
        | "mark_in_transit"
        | "mark_out_for_delivery"
        | "mark_packed"
        | "mark_returned"
        | "mark_shipped"
        | (string & {})>;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "tracking_number"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     */
    "tracking_url"?: string;
    /** Last update timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Monotonic package version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
    /**
     * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "weight"?: Weight;
};
/** A page of `BuyerPackage` objects. */
export type BuyerPackageListResponse = {
    /**  [] (Value): {@link BuyerPackage}. A package within a shipment. */
    "data": Array<BuyerPackage>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `BuyerPackage` data. */
export type BuyerPackageResponse = {
    /** A package within a shipment. */
    "data": BuyerPackage;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The pause lengths this subscription accepts from its buyer. */
export type BuyerPauseActionOptions = {
    /**
     * When present, pause_duration_cycles is required and must be between 1 and this value. When
     * absent, omit pause_duration_cycles to pause until the buyer resumes. Format: int32. minimum:
     * 1. maximum: 12.
     */
    "max_pause_duration_cycles"?: number;
};
/** Whether buyers may pause their own subscriptions. Send at least one field. minProperties: 1. */
export type BuyerPauseCapability = {
    /**
     * Whether buyers may pause. When false, a buyer's pause returns 409 ACTION_NOT_ALLOWED with
     * reason not_offered. Default: true.
     */
    "enabled"?: boolean;
    /**
     * The longest pause a buyer may choose, in billing periods. When set, a buyer's pause must
     * send pause_duration_cycles from 1 to this value. Omit it for no limit, which also lets a
     * buyer pause until they resume. Format: int32. minimum: 1. maximum: 12.
     */
    "max_cycles"?: number;
};
/** Whether buyers may pause their own subscriptions. Send at least one field. minProperties: 1. */
export type BuyerPauseCapabilityInput = BuyerPauseCapability;
/** The return resolutions the buyer can pay now. */
export type BuyerPayBalanceActionOptions = {
    /**
     * Payable resolutions in creation order. Read each amount with GET
     * /v1/me/return-resolutions/{return_resolution_id}, then create its checkout session with POST
     * /v1/me/return-resolutions/{return_resolution_id}/checkout-sessions. minItems: 1. [] (Value):
     * string.
     */
    "return_resolution_ids": Array<string>;
};
/**
 * The payment intent behind an order payment attempt, with its status, amounts, authorization
 * expiry, and last payment error.
 */
export type BuyerPaymentAttemptPaymentIntent = {
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Capture is unavailable at or after this time, even if the payment still has requires_capture
     * status. Format: date-time.
     */
    "authorization_expires_at"?: string;
    /**
     * Payment intent's stored capturable amount. A positive amount does not override
     * authorization_expires_at or the payment status. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery
     * guidance.
     */
    "last_payment_error"?: BuyerPaymentErrorSummary;
    /** Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Payment option used by this leg, using the same values as
     * PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when
     * no payment option has been selected. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
    /**
     * Lifecycle status. requires_payment_method covers both a new payment intent and one whose
     * last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired
     * are final. Refunds and disputes never change status. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tip_money": MoneyValue;
};
/**
 * What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe
 * values.
 */
export type BuyerPaymentCollection = {
    /**
     * Client configuration for collecting the payment through Stripe. Stripe values for collecting
     * payment on a buyer's order: the account ID, publishable key, return URL, and Elements
     * settings.
     */
    "stripe"?: BuyerPaymentCollectionStripe;
};
/**
 * Stripe values for collecting payment on a buyer's order: the account ID, publishable key, return
 * URL, and Elements settings.
 */
export type BuyerPaymentCollectionStripe = {
    /** Stripe account to use when initializing the payment client. */
    "account_id"?: string;
    /**
     * Stripe Elements configuration for the available payment methods and amounts. Stripe Elements
     * collection guidance. Follow next_step in the browser, then submit the result to submit_to
     * through Flint.
     */
    "elements"?: BuyerPaymentCollectionStripeElements;
    /** Publishable Stripe key for initializing the payment client. */
    "publishable_key"?: string;
    /** URL the buyer returns to after a redirect payment step. */
    "return_url"?: string;
};
/**
 * Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to
 * submit_to through Flint.
 */
export type BuyerPaymentCollectionStripeElements = {
    /**
     * Amount and currency used to initialize the payment form. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Digital wallets that the payment form can offer. [] (Value): string. */
    "digital_wallets"?: Array<string>;
    /**
     * Whether Elements is collecting a payment source for an immediate payment or a setup source
     * for future use. Value enum: "payment", "setup".
     */
    "mode": "payment" | "setup" | (string & {});
    /**
     * Browser collection operation to perform before calling submit_to. Value enum:
     * "collect_payment_source", "collect_setup_payment_source", "create_confirmation_token".
     */
    "next_step": "collect_payment_source"
        | "collect_setup_payment_source"
        | "create_confirmation_token"
        | (string & {});
    /**
     * Stripe Elements payment method creation mode. Follow next_step: standalone PaymentIntents
     * and checkout-authenticated order collection create a ConfirmationToken, while
     * merchant-authenticated order collection and setup collection create a PaymentMethod. Value
     * enum: "manual".
     */
    "payment_method_creation": "manual" | (string & {});
    /** Payment method settings passed to the payment form. */
    "payment_method_options"?: {
        [key: string]: unknown;
    };
    /** Payment method types that the payment form can offer. [] (Value): string. */
    "payment_method_types": Array<string>;
    /**
     * Order payment intents that the buyer can select for collection. [] (Value): {@link
     * BuyerSelectableOrderPaymentIntent}. A payment intent a buyer can pay on an order, with its
     * status, amounts, payment collection details, and last payment error.
     */
    "selectable_payment_intents"?: Array<BuyerSelectableOrderPaymentIntent>;
    /**
     * Flint operation that accepts the result of next_step. Value enum: "pay_order",
     * "confirm_payment_intent".
     */
    "submit_to": "pay_order" | "confirm_payment_intent" | (string & {});
};
/**
 * Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery
 * guidance.
 */
export type BuyerPaymentErrorSummary = {
    /**
     * Flint-normalized payment failure code. Unknown provider values are returned as
     * payment_failed. Value enum: "card_declined", "insufficient_funds", "bank_account_closed",
     * "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted",
     * "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card",
     * "incorrect_cvc", "processing_error", "payment_method_unavailable",
     * "payment_method_declined", "payment_not_completed", "payment_action_expired",
     * "payment_method_temporarily_unavailable", "payment_failed".
     */
    "code": "card_declined"
        | "insufficient_funds"
        | "bank_account_closed"
        | "bank_account_not_found"
        | "bank_debit_not_authorized"
        | "bank_account_restricted"
        | "bank_debit_limit_exceeded"
        | "authentication_required"
        | "payment_blocked"
        | "expired_card"
        | "incorrect_cvc"
        | "processing_error"
        | "payment_method_unavailable"
        | "payment_method_declined"
        | "payment_not_completed"
        | "payment_action_expired"
        | "payment_method_temporarily_unavailable"
        | "payment_failed"
        | (string & {});
    /** Time the payment attempt concluded in failure. Format: date-time. */
    "failed_at": string;
    /**
     * Flint-authored payment failure message written for the buyer. This is stable explanatory
     * text, not raw provider copy.
     */
    "message": string;
    /**
     * Guidance for resolving the payment failure before trying to collect again. anyOf[1] (Value):
     * {@link BuyerErrorRemediation}. Guidance for recovering from a payment error: whether and how
     * to retry (`retry`), and optional next steps. anyOf[2] (Value): null.
     */
    "remediation": ((BuyerErrorRemediation) | (null));
};
/**
 * A payment as the buyer sees it. Omits the store's fees, net, risk assessment, and dispute state.
 */
export type BuyerPaymentIntent = {
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValue;
    /**
     * When the hold lapses if it hasn't been collected. Set when the hold is placed. Format:
     * date-time.
     */
    "authorization_expires_at"?: string;
    /** When the processor authorized the payment. Absent until then. Format: date-time. */
    "authorized_at"?: string;
    /**
     * The amount the processor authorized. It always equals amount_money and doesn't change once
     * set. Absent until the payment is authorized, and on payments canceled before authorization.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "authorized_money"?: MoneyValue;
    /**
     * Flint-normalized reason the payment intent was canceled. Present only while status is
     * canceled. Unknown processor values are returned as payment_canceled. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned", "invoice_payment_failed",
     * "invoice_voided", "order_closed", "payment_canceled".
     */
    "cancellation_reason"?: "requested_by_customer"
        | "duplicate"
        | "fraudulent"
        | "abandoned"
        | "invoice_payment_failed"
        | "invoice_voided"
        | "order_closed"
        | "payment_canceled"
        | (string & {});
    /**
     * The part of the authorization that can still be collected. Positive only while status is
     * requires_capture, and zero after it is collected, released, or expires. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "capturable_money"?: MoneyValue;
    /** When money is collected. Defaults to automatic. Value enum: "automatic", "manual". */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /**
     * When money was captured. For automatic capture, this is when the payment succeeded. Absent
     * until capture. Format: date-time.
     */
    "captured_at"?: string;
    /**
     * The amount collected from the buyer. Zero while a hold is open, and positive whenever status
     * is succeeded. Absent until the payment is authorized. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "captured_money"?: MoneyValue;
    /** Flint checkout session ID associated with this payment, when present. */
    "checkout_session_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Customer linked to this payment intent. */
    "customer_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Present when a payment provider asked Flint to pause fulfillment for this payment. While its
     * status is active, open fulfillments are on hold. A hold on fulfillment tied to a payment,
     * with the reason, the action required, and whether the hold is active or released.
     */
    "fulfillment_hold"?: PaymentFulfillmentHold;
    /** Bill this payment collects, when it pays a bill. */
    "invoice_id"?: string;
    /**
     * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value): {@link
     * PaymentErrorSummary}. A summary of why a payment attempt failed, with a normalized error
     * code, a message, the failure time, and remediation. anyOf[2] (Value): null.
     */
    "last_payment_error": ((PaymentErrorSummary) | (null));
    /** Merchant that owns this payment intent. */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
     * maxProperties: 0.
     */
    "metadata": {
        [key: string]: unknown;
    };
    /** Order this payment belongs to. */
    "order_id"?: string;
    /**
     * How the payment was started. Fixed when the payment is created. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api".
     */
    "payment_flow": "checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api"
        | (string & {});
    /** Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Summary of the card or bank account used for the payment. Absent until a payment source is
     * attached. A summary of the payment source used for a payment, by funding-method family, with
     * card or bank account display details.
     */
    "payment_source"?: PaymentSourceSummary;
    /**
     * Email address for this payment's receipt. When it isn't set, Flint uses the buyer's email.
     * Format: email. maxLength: 255.
     */
    "receipt_email"?: string | null;
    /**
     * How much of captured_money has been refunded, including value issued as store credit, based
     * on refunded_money. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "refunded_money"?: MoneyValue;
    /**
     * The part of the authorization returned to the buyer without being charged: the uncollected
     * remainder after a partial capture, or the whole authorization after a cancellation or
     * expiry. It was never collected, so it needs no refund. Absent until the payment is
     * authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "released_money"?: MoneyValue;
    /** Flint return ID associated with this payment, when present. */
    "return_id"?: string;
    /**
     * The payment option the most recent confirmation used. Absent until the payment intent is
     * first confirmed.
     */
    "selected_payment_option"?: string;
    /**
     * Lifecycle status. requires_payment_method covers both a new payment and one whose last
     * attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are
     * final. Refunds never change status. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
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
    /** Opaque payment reference to share with merchant support. Do not parse its format. */
    "support_reference": string;
    /**
     * Always empty for buyer credentials. maxItems: 0. [] enum: "confirm", "capture", "cancel". []
     * (Value): string. Value enum: "confirm", "capture", "cancel".
     */
    "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValue) | (null));
    /**
     * Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once
     * the payment intent exists. Value enum: "goods", "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `BuyerPaymentIntent` objects. */
export type BuyerPaymentIntentListResponse = {
    /**
     *  [] (Value): {@link BuyerPaymentIntent}. A payment as the buyer sees it. Omits the store's
     * fees, net, risk assessment, and dispute state.
     */
    "data": Array<BuyerPaymentIntent>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `BuyerPaymentIntent` data. */
export type BuyerPaymentIntentResponse = {
    /**
     * A payment as the buyer sees it. Omits the store's fees, net, risk assessment, and dispute
     * state.
     */
    "data": BuyerPaymentIntent;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A customer's saved payment details. */
export type BuyerPaymentMethod = {
    /**
     * Card details on a payment method: brand, expiration month and year, last four digits, and
     * the wallet when one was used.
     */
    "card"?: CardDetails;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "customer_id": string;
    /**
     * Whether this is the customer's default payment method, the one
     * BuyerCustomer.default_payment_method_id names. Change it with default_payment_method_id on
     * PATCH /v1/me.
     */
    "is_default": boolean;
    "merchant_id"?: string;
    "payment_method_id": string;
    /**
     * Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when
     * Flint wallet support is enabled. Accept future values. Value enum: "flint", "store".
     */
    "saved_with"?: "flint" | "store" | (string & {});
    /**
     * Whether the payment method can be charged. Treat any value other than active as not
     * chargeable, including values added later. Value enum: "pending", "active", "expired",
     * "archived", "failed".
     */
    "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
    /** Value enum: "card". */
    "type": "card" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * When Flint may charge the payment method. off_session payment methods can pay subscriptions,
     * automatic invoices, and other charges without the buyer, and can be a customer's default.
     * on_session payment methods were saved by the buyer in checkout for faster checkout at this
     * merchant; Flint charges them only in checkouts the buyer completes and refuses them for any
     * charge without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session".
     */
    "usage": "on_session" | "off_session" | (string & {});
};
/** A page of `BuyerPaymentMethod` objects. */
export type BuyerPaymentMethodListResponse = {
    /**  [] (Value): {@link BuyerPaymentMethod}. A customer's saved payment details. */
    "data": Array<BuyerPaymentMethod>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `BuyerPaymentMethod` data. */
export type BuyerPaymentMethodResponse = {
    /** A customer's saved payment details. */
    "data": BuyerPaymentMethod;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The saved payment method, with `client_setup` when the buyer must still complete processor setup
 * before the payment method can be used. A customer's saved payment details.
 */
export type BuyerPaymentMethodWithSetup = (Exclude<BuyerPaymentMethod & object, readonly unknown[]>)
    & ({
    /**
     * Present when the buyer must complete processor setup before using this payment method.
     * Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call
     * now. setup_collection is guidance instead and never carries a secret.
     */
    "client_setup"?: StripeClientSetup;
});
/** Money returned against a collected payment. */
export type BuyerRefund = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "credit_note_id"?: string;
    /**
     *  anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
     * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    "customer_id"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * Present only on refunds created through POST /v1/credit-notes/{credit_note_id}/refunds or by
     * issuing a credit note with refund: the Idempotency-Key of that call. Use it with GET
     * /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create
     * response was lost.
     */
    "idempotency_key"?: string;
    "invoice_id"?: string;
    /**
     *  [] (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations.
     */
    "line_item_allocations"?: Array<RefundLineItemAllocation>;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     *  anyOf[1] (Value): {@link BuyerExpandedOrderSummary}. An order summary in a buyer response,
     * with order status and totals. Recorded buyer contact is omitted. anyOf[2] (Value): null.
     */
    "order"?: ((BuyerExpandedOrderSummary) | (null));
    "order_id"?: string;
    /**
     *  anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields,
     * including amount, status, and capture method, returned when the payment intent is expanded.
     * anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    "payment_intent_id"?: string;
    /**
     *  [] (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with
     * the amount, tip, status, and any failure reason.
     */
    "payment_refunds"?: Array<PaymentRefund>;
    /** Always null for buyer credentials. */
    "reason": null;
    "reason_message"?: string;
    "refund_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_tip_money": MoneyValue;
    "return_id"?: string;
    "return_resolution_id"?: string;
    /**
     * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. Follow
     * refund.updated. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     *  [] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an
     * order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /**
     *  [] (Value): {@link RefundTenderAllocation}. One tender's share of a refund, listed in the
     * refund's tender allocations.
     */
    "tender_allocations"?: Array<RefundTenderAllocation>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `BuyerRefund` objects. */
export type BuyerRefundListResponse = {
    /**  [] (Value): {@link BuyerRefund}. Money returned against a collected payment. */
    "data": Array<BuyerRefund>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `BuyerRefund` data. */
export type BuyerRefundResponse = {
    /** Money returned against a collected payment. */
    "data": BuyerRefund;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The offer a buyer sees before canceling. Send at least one field. minProperties: 1. */
export type BuyerRetentionOffer = {
    /**
     * none: no offer. pause_instead: offer to pause for pause_cycles billing periods instead of
     * canceling. pause_instead needs pausing turned on. Default: "none". Value enum: "none",
     * "pause_instead".
     */
    "kind"?: "none" | "pause_instead" | (string & {});
    /**
     * Billing periods the offered pause lasts. Required when kind is pause_instead, and at most
     * pause.max_cycles when that is set. Not allowed with kind none. Format: int32. minimum: 1.
     * maximum: 12.
     */
    "pause_cycles"?: number;
};
/** The offer a buyer sees before canceling. Send at least one field. minProperties: 1. */
export type BuyerRetentionOfferInput = {
    /**
     * none: no offer. pause_instead: offer to pause for pause_cycles billing periods instead of
     * canceling. pause_instead needs pausing turned on. Default: "none". Value enum: "none",
     * "pause_instead".
     */
    "kind"?: "none" | "pause_instead";
    /**
     * Billing periods the offered pause lasts. Required when kind is pause_instead, and at most
     * pause.max_cycles when that is set. Not allowed with kind none. Format: int32. minimum: 1.
     * maximum: 12.
     */
    "pause_cycles"?: number;
};
/** A request to send purchased items back. */
export type BuyerReturn = {
    /**
     * What the buyer can do with the return, in this order: withdraw, ship_items, then
     * pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's
     * buyer account, lists all three every time; merchant reads and webhooks get an empty list.
     * ship_items is required while handoff_requirements is not empty, due by the earliest
     * expires_at there. pay_balance is required while a resolution waits for the buyer's payment.
     * Example: []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /** RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     *  [] (Value): {@link BuyerReturnCompletionBlocker}. A condition the buyer can resolve before
     * the Return can complete.
     */
    "completion_blockers": Array<BuyerReturnCompletionBlocker>;
    /**
     * automatic completes the Return when the last completion blocker clears; manual waits for
     * POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /** Value enum: "pending", "approved", "partially_approved", "declined". */
    "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
    /**
     * The money for a return: returned value, deductions, credits, replacement total, and amounts
     * due to or from the buyer.
     */
    "financial_summary": ReturnFinancialSummary;
    /**
     *  [] (Value): {@link BuyerReturnHandoffRequirement}. The merchandise quantities the buyer
     * must hand off, with their destination, instructions, and handoff status.
     */
    "handoff_requirements": Array<BuyerReturnHandoffRequirement>;
    /**
     * Who created the Return, from the credential that sent the request: buyer for a customer
     * session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for
     * an API key or partner app. It cannot be sent. Value enum: "buyer", "merchant",
     * "integration".
     */
    "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
    /**  [] (Value): {@link BuyerReturnLineItem}. An item included in a return request. */
    "line_items": Array<BuyerReturnLineItem>;
    /**
     * On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception".
     */
    "merchandise_status": "not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception"
        | (string & {});
    /** Always empty for buyer credentials. maxProperties: 0. */
    "metadata": {
        [key: string]: unknown;
    };
    "order_id": string;
    /**
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status": "not_selected"
        | "pending"
        | "partially_fulfilled"
        | "requires_action"
        | "fulfilled"
        | "failed"
        | (string & {});
    "return_id": string;
    "return_number": string;
    /**
     * IDs of every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. [] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /** Value enum: "requested", "open", "completed", "declined", "canceled". */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /** [] enum: "cancel". [] (Value): string.  Value enum: "cancel". */
    "supported_actions": Array<"cancel" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. minimum: 0. */
    "version": number;
};
/** A condition the buyer can resolve before the Return can complete. */
export type BuyerReturnCompletionBlocker = {
    /**
     * A blocker the buyer can resolve. resolution_pending is included only for a payable
     * resolution. Value enum: "resolution_pending", "handoff_pending", "resolution_not_selected",
     * "resolution_requires_action", "resolution_failed".
     */
    "code": "resolution_pending"
        | "handoff_pending"
        | "resolution_not_selected"
        | "resolution_requires_action"
        | "resolution_failed"
        | (string & {});
    "message": string;
    "return_line_item_id"?: string;
    "return_resolution_id"?: string;
};
/**
 * The buyer's Return eligibility preview for an order, including eligible items and policy
 * evaluation results.
 */
export type BuyerReturnEligibilityPreview = {
    /** RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /**
     *  [] (Value): {@link BuyerReturnEligibilityPreviewLineItem}. An order line item's Return
     * eligibility, catalog details, and suggested return reasons shown to the buyer.
     */
    "line_items": Array<BuyerReturnEligibilityPreviewLineItem>;
    "order_id": string;
    /**
     * Return policy evaluation results shown to the buyer, including eligibility and results for
     * individual order lines.
     */
    "policy_evaluation": BuyerReturnPolicyEvaluation;
    /**
     * Which order lines to check for return eligibility: all remaining fulfilled lines, or a
     * specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
    /** Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * An order line item's Return eligibility, catalog details, and suggested return reasons shown to
 * the buyer.
 */
export type BuyerReturnEligibilityPreviewLineItem = {
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components": Array<BundleComponent>;
    "bundle_id"?: string;
    /**
     * Whether the buyer can request this line themselves, through a customer session, right now.
     * False when no policy covers the item, when it is not eligible, or when the store offers no
     * reason for it. Read eligibility.reason and ineligibility_reason to say why.
     */
    "can_buyer_request": boolean;
    "description"?: string;
    /**
     * An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility
     * reasons shown to the buyer.
     */
    "eligibility": BuyerReturnLineItemEligibility;
    "fulfillment_id": string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /**
     *  [] (Value): {@link BuyerReturnLineItemModifier}. A selected modifier recorded on an item in
     * the buyer's Return, including its modifier group name and price.
     */
    "modifiers": Array<BuyerReturnLineItemModifier>;
    "name": string;
    "order_line_item_id": string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity"?: number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then
     * reasons that apply to every item. Each group sorts by handle ascending, with
     * return_reason_id ascending as the tiebreak. maxItems: 20. [] (Value): {@link
     * ReturnReasonSummary}. A return reason a buyer can pick for a line, with its `handle` and
     * whether a note is required.
     */
    "suggested_return_reasons": Array<ReturnReasonSummary>;
    "variant_id"?: string;
};
/** The destination name, address, and type shown to the buyer for returning merchandise. */
export type BuyerReturnHandoffDestination = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Value enum: "buyer_address", "location", "external_location". */
    "destination_type": "buyer_address" | "location" | "external_location" | (string & {});
    "name"?: string;
};
/**
 * The merchandise quantities the buyer must hand off, with their destination, instructions, and
 * handoff status.
 */
export type BuyerReturnHandoffRequirement = {
    /** The destination name, address, and type shown to the buyer for returning merchandise. */
    "destination": BuyerReturnHandoffDestination;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    "instructions"?: string;
    /**
     *  [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and the quantity the
     * buyer must hand back.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /** Format: int64. */
    "shipment_count"?: number;
    /**
     * Whether the buyer has started sending merchandise back. A requirement leaves
     * handoff_requirements entirely once it is satisfied, so there is no terminal status and an
     * empty array means nothing is waiting on the buyer. Value enum: "pending", "in_progress".
     */
    "status": "pending" | "in_progress" | (string & {});
};
/** An item included in a return request. */
export type BuyerReturnLineItem = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "accepted_quantity": number;
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "approved_quantity": number;
    /**
     * The refund, store_credit, or no_monetary_action resolution Flint creates and confirms
     * automatically. Absent when the merchant resolves manually. Example: "refund". Value enum:
     * "refund", "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Approved quantity that can still be assigned to a new resolution. Every non-canceled
     * resolution reserves its line quantity, including proposed, pending, action-required, failed,
     * and fulfilled resolutions. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "available_resolution_quantity": number;
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components": Array<BundleComponent>;
    "bundle_id"?: string;
    "buyer_note"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "canceled_quantity": number;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /**
     * Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse",
     * "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    "decline_reason_message"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "declined_quantity": number;
    "description"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "dispositioned_quantity": number;
    /**
     * An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility
     * reasons shown to the buyer.
     */
    "eligibility": BuyerReturnLineItemEligibility;
    "fulfillment_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "handed_off_quantity": number;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "inspected_quantity": number;
    "is_inspection_required"?: boolean;
    "is_policy_overridden": boolean;
    /**
     * Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved".
     */
    "merchandise_status": "not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | (string & {});
    /**
     *  [] (Value): {@link BuyerReturnLineItemModifier}. A selected modifier recorded on an item in
     * the buyer's Return, including its modifier group name and price.
     */
    "modifiers": Array<BuyerReturnLineItemModifier>;
    "name": string;
    "order_line_item_id": string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "received_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "rejected_quantity": number;
    /**
     * Committed resolution execution gate, filled for every approved line: after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required, unless the policy or
     * decision sets a timing explicitly. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** Value enum: "not_selected", "pending", "requires_action", "fulfilled", "failed". */
    "resolution_status": "not_selected" | "pending" | "requires_action" | "fulfilled" | "failed" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "resolved_quantity": number;
    "return_id": string;
    "return_line_item_id": string;
    /**
     * Handle of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it.
     */
    "return_reason_handle": string;
    /** ID of the reason chosen for this line. */
    "return_reason_id": string;
    /**
     * Name of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it.
     */
    "return_reason_name": string;
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64.
     */
    "return_required_quantity": number;
    /**
     * IDs of the resolutions that include this line, oldest first, including failed and canceled
     * resolutions. [] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /** The value of a return line: unit price, subtotal, discount, tax, and total. */
    "return_value": ReturnLineItemValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "review_required_quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    "sku"?: string;
    /** Value enum: "requested", "open", "completed", "declined", "canceled". */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Always empty for buyer credentials. maxItems: 0. [] enum: "cancel", "waive_inspection". []
     * (Value): string. Value enum: "cancel", "waive_inspection".
     */
    "supported_actions": Array<"cancel" | "waive_inspection" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    "variant_id"?: string;
};
/**
 * An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility
 * reasons shown to the buyer.
 */
export type BuyerReturnLineItemEligibility = {
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * The pinned policy decision recomputed for based_on_quantity. A decide with only
     * approved_quantity commits these values. Policy automatic resolution selects the policy
     * automatic_resolution_type for policy_default or the line's requested_resolution_type for
     * buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still
     * exists without automatic_resolution_type, so resolution is manual. Manual policy resolution
     * also has no automatic_resolution_type. An unset release_timing is filled with
     * after_inspection when merchandise and inspection are required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required.
     */
    "decision_proposal"?: ReturnLineItemDecisionProposal;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "eligible_quantity": number;
    /** RFC3339 timestamp. Format: date-time. */
    "evaluated_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * The matched policy's declared exclusion reason. Present exactly when reason is
     * policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /**
     *  [] (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy
     * proposes for a line, calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired",
     * "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed",
     * "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    "reason_message": string;
    /** Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * A selected modifier recorded on an item in the buyer's Return, including its modifier group name
 * and price.
 */
export type BuyerReturnLineItemModifier = {
    /** maxProperties: 0. */
    "metadata": {};
    "modifier_group_name": string;
    "name": string;
    /** Value enum: "per_item", "per_line". */
    "pricing_scope": "per_item" | "per_line" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    "show_on_fulfillment": boolean;
    "show_on_receipt": boolean;
    "text_value"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "total_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_delta_money": MoneyValue;
};
/** A page of `BuyerReturn` objects. */
export type BuyerReturnListResponse = {
    /**  [] (Value): {@link BuyerReturn}. A request to send purchased items back. */
    "data": Array<BuyerReturn>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Return policy evaluation results shown to the buyer, including eligibility and results for
 * individual order lines.
 */
export type BuyerReturnPolicyEvaluation = {
    /** RFC3339 timestamp. Format: date-time. */
    "evaluated_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     *  [] (Value): {@link BuyerReturnPolicyEvaluationLineItem}. An order line's eligibility,
     * allowed resolutions, return requirements, and catalog details from the buyer's Return policy
     * evaluation.
     */
    "line_items": Array<BuyerReturnPolicyEvaluationLineItem>;
    /**
     * Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired",
     * "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed",
     * "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    "reason_message": string;
    "return_policy_id"?: string;
    "return_policy_revision_id"?: string;
    /** Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * An order line's eligibility, allowed resolutions, return requirements, and catalog details from
 * the buyer's Return policy evaluation.
 */
export type BuyerReturnPolicyEvaluationLineItem = {
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components": Array<BundleComponent>;
    "bundle_id"?: string;
    "description"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "eligible_quantity": number;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    "fulfillment_id": string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /**
     * The matched policy's declared exclusion reason. Present exactly when reason is
     * policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    "is_inspection_required": boolean;
    "is_merchandise_return_required": boolean;
    /**
     *  [] (Value): {@link BuyerReturnLineItemModifier}. A selected modifier recorded on an item in
     * the buyer's Return, including its modifier group name and price.
     */
    "modifiers": Array<BuyerReturnLineItemModifier>;
    "name": string;
    "order_line_item_id": string;
    /**
     *  [] (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy
     * proposes for a line, calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    "product_id"?: string;
    /**
     * Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired",
     * "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed",
     * "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    "receiving_location_id"?: string;
    /**
     * Release gate for every resolution type, including exchanges and replacements. Released after
     * the Return is approved. Released after the buyer hands back the required merchandise.
     * Released after the required merchandise is received. Released after the required merchandise
     * passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release.
     * Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection",
     * "manual".
     */
    "release_timing": "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    "sku"?: string;
    /** Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then
     * reasons with no categories, each group sorted by handle. [] (Value): string.
     */
    "suggested_return_reason_ids": Array<string>;
    "variant_id"?: string;
};
/** A Return eligibility or resolution preview shown to the buyer, selected by mode. */
export type BuyerReturnPreview = ({
    /**
     * The buyer's Return eligibility preview for an order, including eligible items and policy
     * evaluation results.
     */
    "eligibility"?: BuyerReturnEligibilityPreview;
    /** Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * The buyer's preview of a Return resolution, including returned items, replacements,
     * adjustments, and the amounts to refund or collect.
     */
    "resolution"?: BuyerReturnResolutionPreview;
})
    & ((Exclude<BuyerReturnPreviewEligibility & object, readonly unknown[]>)
    | (Exclude<BuyerReturnPreviewResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `eligibility` variant of `BuyerReturnPreview`. */
export type BuyerReturnPreviewEligibility = ({
    /**
     * The buyer's Return eligibility preview for an order, including eligible items and policy
     * evaluation results.
     */
    "eligibility": BuyerReturnEligibilityPreview;
    /** Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * The buyer's preview of a Return resolution, including returned items, replacements,
     * adjustments, and the amounts to refund or collect.
     */
    "resolution"?: BuyerReturnResolutionPreview;
})
    & (({
    /** Value enum: "eligibility". */
    "mode": unknown;
    /**
     * The buyer's Return eligibility preview for an order, including eligible items and policy
     * evaluation results.
     */
    "eligibility": BuyerReturnEligibilityPreview;
}));
/** The `resolution` variant of `BuyerReturnPreview`. */
export type BuyerReturnPreviewResolution = ({
    /**
     * The buyer's Return eligibility preview for an order, including eligible items and policy
     * evaluation results.
     */
    "eligibility"?: BuyerReturnEligibilityPreview;
    /** Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * The buyer's preview of a Return resolution, including returned items, replacements,
     * adjustments, and the amounts to refund or collect.
     */
    "resolution": BuyerReturnResolutionPreview;
})
    & (({
    /** Value enum: "resolution". */
    "mode": unknown;
    /**
     * The buyer's preview of a Return resolution, including returned items, replacements,
     * adjustments, and the amounts to refund or collect.
     */
    "resolution": BuyerReturnResolutionPreview;
}));
