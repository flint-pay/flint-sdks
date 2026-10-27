import type { InvoiceManualPayment, Invoice, InvoiceLateFeePolicy } from './types-26.js';
import type { ResponseMeta } from './types-40.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { PaymentErrorSummary } from './types-35.js';
import type { InputValue } from '../runtime.js';
import type { CreateInvoicePaymentTermRequestInput } from './types-7.js';
import type { UpdateInvoicePaymentTermRequestInput } from './types-48.js';
import type { InvoiceScheduleDueWriteAtIssue, InvoiceScheduleDueWriteInvoiceDueDate } from './types-28.js';
/**
 * Shape $ (Value): {@link InvoiceManualPaymentListResponse}. A page of `InvoiceManualPayment`
 * objects.
 */
export type InvoiceManualPaymentListResponse = {
    /**
     * Shape $ (Value): Array of {@link InvoiceManualPayment}. Shape $[] (Value): {@link
     * InvoiceManualPayment}. A recorded offline payment against an invoice. Its amount contributes
     * to invoice paid_money while recorded; reversing it returns its full amount to
     * outstanding_money. A payment can cover principal and late fees. Manual payments are separate
     * from online payment attempts.
     */
    "data": Array<InvoiceManualPayment>;
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
 * Shape $ (Value): {@link InvoiceManualPaymentResponse}. A response containing
 * `InvoiceManualPayment` data.
 */
export type InvoiceManualPaymentResponse = {
    /**
     * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an
     * invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns
     * its full amount to outstanding_money. A payment can cover principal and late fees. Manual
     * payments are separate from online payment attempts.
     */
    "data": InvoiceManualPayment;
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
 * Shape $ (Value): {@link InvoiceManualPaymentResult}. The recorded or reversed payment and the
 * updated invoice. expected_version on either write fences the invoice; use the returned invoice
 * version for the next write.
 */
export type InvoiceManualPaymentResult = {
    /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
    "invoice": Invoice;
    /**
     * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an
     * invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns
     * its full amount to outstanding_money. A payment can cover principal and late fees. Manual
     * payments are separate from online payment attempts.
     */
    "invoice_manual_payment": InvoiceManualPayment;
};
/**
 * Shape $ (Value): {@link InvoiceManualPaymentResultResponse}. A response containing
 * `InvoiceManualPaymentResult` data.
 */
export type InvoiceManualPaymentResultResponse = {
    /**
     * Shape $ (Value): {@link InvoiceManualPaymentResult}. The recorded or reversed payment and
     * the updated invoice. expected_version on either write fences the invoice; use the returned
     * invoice version for the next write.
     */
    "data": InvoiceManualPaymentResult;
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
/** Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an invoice. */
export type InvoicePaymentAttempt = {
    /**
     * Shape $ (Value): string. When the attempt was canceled. An attempt canceled with its
     * checkout session before payment started may not have it. Format: date-time.
     */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): string. When cancellation of this attempt was last requested. It stays set
     * when the payment processor refuses the cancellation or the payment settles first, so read
     * status and canceled_at for the outcome. Format: date-time.
     */
    "cancellation_requested_at"?: string;
    /**
     * Shape $ (Value): string. The hosted or embedded checkout session the buyer pays through.
     * Absent for automatic charges.
     */
    "checkout_session_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount this attempt collects: the outstanding
     * balance, or the targeted schedule entry's outstanding amount. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. When a checkout attempt expires, matching its checkout session.
     * Absent for automatic charges. Format: date-time.
     */
    "expires_at"?: string;
    /** Shape $ (Value): string. The invoice this attempt collects. */
    "invoice_id": string;
    /** Shape $ (Value): string. Flint invoice payment attempt ID. */
    "invoice_payment_attempt_id": string;
    /**
     * Shape $ (Value): string. The schedule entry this attempt collects. Absent when the attempt
     * collects the invoice balance.
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary}. Why the payment failed. Present only when
     * status is failed. A summary of why a payment attempt failed, with a normalized error code, a
     * message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Shape $ (Value): string. The payment intent behind this attempt. Absent until payment
     * starts, such as a hosted attempt the buyer hasn't paid yet.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. How the attempt collects: card, including Apple Pay, Google Pay,
     * and Affirm, or ACH debit. Value enum: "card", "ach_debit".
     */
    "rail": "card" | "ach_debit" | (string & {});
    /**
     * Shape $ (Value): string. When this attempt first settled successfully. Duplicate payment
     * notifications preserve this timestamp. Format: date-time.
     */
    "settled_at"?: string;
    /** Shape $ (Value): string. When the attempt was created. Format: date-time. */
    "started_at"?: string;
    /**
     * Shape $ (Value): string. Current payment attempt status. settled means this attempt
     * completed successfully, even if the invoice still has an outstanding balance.
     * invoice_payment_attempt.settled reports that completion. Value enum: "open", "settled",
     * "failed", "canceled", "expired", "processing".
     */
    "status": "open" | "settled" | "failed" | "canceled" | "expired" | "processing" | (string & {});
    /**
     * Shape $ (Value): string. When this attempt last changed. Duplicate payment notifications
     * preserve this timestamp. Format: date-time.
     */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link InvoicePaymentAttemptListResponse}. A page of `InvoicePaymentAttempt`
 * objects.
 */
export type InvoicePaymentAttemptListResponse = {
    /**
     * Shape $ (Value): Array of {@link InvoicePaymentAttempt}. Shape $[] (Value): {@link
     * InvoicePaymentAttempt}. An attempt to collect payment for an invoice.
     */
    "data": Array<InvoicePaymentAttempt>;
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
 * Shape $ (Value): {@link InvoicePaymentAttemptResponse}. A response containing
 * `InvoicePaymentAttempt` data.
 */
export type InvoicePaymentAttemptResponse = {
    /**
     * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "data": InvoicePaymentAttempt;
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
 * Shape $ (Value): {@link InvoicePaymentDue}. The invoice due-date policy resolved at write time.
 * The object can be sent back when updating a draft.
 */
export type InvoicePaymentDue = ({
    /**
     * Shape $ (Value): string. The due date set with type date. Present only with date. The
     * top-level due_at is the effective due date for every type. Format: date-time.
     */
    "due_at"?: string;
    /**
     * Shape $ (Value): string. The payment term applied, captured in payment_terms_snapshot.
     * Present only with payment_terms.
     */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. How the due date was set. Value enum: "none", "date",
     * "payment_terms".
     */
    "type": "none" | "date" | "payment_terms" | (string & {});
})
    & ((Exclude<InvoicePaymentDueNone & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueDate & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDuePaymentTerms & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Shape $ (Value): {@link InvoicePaymentDueDate}. The `date` variant of `InvoicePaymentDue`. */
export type InvoicePaymentDueDate = ({
    /**
     * Shape $ (Value): string. The due date set with type date. Present only with date. The
     * top-level due_at is the effective due date for every type. Format: date-time.
     */
    "due_at": string;
    /**
     * Shape $ (Value): string. The payment term applied, captured in payment_terms_snapshot.
     * Present only with payment_terms.
     */
    "invoice_payment_term_id"?: string;
    /** Shape $ (Value): string. How the due date was set. Value enum: "date". */
    "type": "date" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "date". */
    "type"?: "date" | (string & {});
    /**
     * Shape $ (Value): string. The due date set with type date. Present only with date. The
     * top-level due_at is the effective due date for every type. Format: date-time.
     */
    "due_at": string;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentDueInputCustomerDefault}. The `customer_default` variant
 * of `InvoicePaymentDueInput`.
 */
export type InvoicePaymentDueInputCustomerDefault = ({
    /**
     * Shape $ (Value): string. When payment is due, as an RFC 3339 timestamp. Required with date
     * and not accepted with any other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string;
    /**
     * Shape $ (Value): string. The active payment term to apply. Required with payment_terms and
     * not accepted with any other type. minLength: 1.
     */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. How the due date is set. customer_default and merchant_default
     * resolve when the draft is written, and reads return the resolved type. Sending payment_terms
     * on a draft captures the term's current revision again. Value enum: "customer_default".
     */
    "type": "customer_default" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "customer_default". */
    "type"?: "customer_default" | (string & {});
}));
/**
 * Shape $ (Value): {@link InvoicePaymentDueInputCustomerDefaultInput}. The `customer_default`
 * variant of `InvoicePaymentDueInput`.
 */
export type InvoicePaymentDueInputCustomerDefaultInput = ({
    /**
     * Shape $ (Value): string. When payment is due, as an RFC 3339 timestamp. Required with date
     * and not accepted with any other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. The active payment term to apply. Required with payment_terms and
     * not accepted with any other type. minLength: 1.
     */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. How the due date is set. customer_default and merchant_default
     * resolve when the draft is written, and reads return the resolved type. Sending payment_terms
     * on a draft captures the term's current revision again. Value enum: "customer_default".
     */
    "type": "customer_default";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "customer_default". */
    "type"?: "customer_default";
})
    & (({
    "due_at"?: never;
}) & ({
    "invoice_payment_term_id"?: never;
})));
/**
 * Shape $ (Value): {@link InvoicePaymentDueInputDateInput}. The `date` variant of
 * `InvoicePaymentDueInput`.
 */
export type InvoicePaymentDueInputDateInput = ({
    /**
     * Shape $ (Value): string. When payment is due, as an RFC 3339 timestamp. Required with date
     * and not accepted with any other type. Format: date-time. minLength: 1.
     */
    "due_at": string | globalThis.Date;
    /**
     * Shape $ (Value): string. The active payment term to apply. Required with payment_terms and
     * not accepted with any other type. minLength: 1.
     */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. How the due date is set. customer_default and merchant_default
     * resolve when the draft is written, and reads return the resolved type. Sending payment_terms
     * on a draft captures the term's current revision again. Value enum: "date".
     */
    "type": "date";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "date". */
    "type"?: "date";
    /**
     * Shape $ (Value): string. When payment is due, as an RFC 3339 timestamp. Required with date
     * and not accepted with any other type. Format: date-time. minLength: 1.
     */
    "due_at": string | globalThis.Date;
})
    & ({
    "invoice_payment_term_id"?: never;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentDueInputMerchantDefault}. The `merchant_default` variant
 * of `InvoicePaymentDueInput`.
 */
export type InvoicePaymentDueInputMerchantDefault = ({
    /**
     * Shape $ (Value): string. When payment is due, as an RFC 3339 timestamp. Required with date
     * and not accepted with any other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string;
    /**
     * Shape $ (Value): string. The active payment term to apply. Required with payment_terms and
     * not accepted with any other type. minLength: 1.
     */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. How the due date is set. customer_default and merchant_default
     * resolve when the draft is written, and reads return the resolved type. Sending payment_terms
     * on a draft captures the term's current revision again. Value enum: "merchant_default".
     */
    "type": "merchant_default" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "merchant_default". */
    "type"?: "merchant_default" | (string & {});
}));
/**
 * Shape $ (Value): {@link InvoicePaymentDueInputMerchantDefaultInput}. The `merchant_default`
 * variant of `InvoicePaymentDueInput`.
 */
export type InvoicePaymentDueInputMerchantDefaultInput = ({
    /**
     * Shape $ (Value): string. When payment is due, as an RFC 3339 timestamp. Required with date
     * and not accepted with any other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. The active payment term to apply. Required with payment_terms and
     * not accepted with any other type. minLength: 1.
     */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. How the due date is set. customer_default and merchant_default
     * resolve when the draft is written, and reads return the resolved type. Sending payment_terms
     * on a draft captures the term's current revision again. Value enum: "merchant_default".
     */
    "type": "merchant_default";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "merchant_default". */
    "type"?: "merchant_default";
})
    & (({
    "due_at"?: never;
}) & ({
    "invoice_payment_term_id"?: never;
})));
/**
 * Shape $ (Value): {@link InvoicePaymentDueInputNoneInput}. The `none` variant of
 * `InvoicePaymentDueInput`.
 */
export type InvoicePaymentDueInputNoneInput = ({
    /**
     * Shape $ (Value): string. When payment is due, as an RFC 3339 timestamp. Required with date
     * and not accepted with any other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. The active payment term to apply. Required with payment_terms and
     * not accepted with any other type. minLength: 1.
     */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. How the due date is set. customer_default and merchant_default
     * resolve when the draft is written, and reads return the resolved type. Sending payment_terms
     * on a draft captures the term's current revision again. Value enum: "none".
     */
    "type": "none";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "none". */
    "type"?: "none";
})
    & (({
    "due_at"?: never;
}) & ({
    "invoice_payment_term_id"?: never;
})));
/**
 * Shape $ (Value): {@link InvoicePaymentDueInputPaymentTermsInput}. The `payment_terms` variant of
 * `InvoicePaymentDueInput`.
 */
export type InvoicePaymentDueInputPaymentTermsInput = ({
    /**
     * Shape $ (Value): string. When payment is due, as an RFC 3339 timestamp. Required with date
     * and not accepted with any other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. The active payment term to apply. Required with payment_terms and
     * not accepted with any other type. minLength: 1.
     */
    "invoice_payment_term_id": string;
    /**
     * Shape $ (Value): string. How the due date is set. customer_default and merchant_default
     * resolve when the draft is written, and reads return the resolved type. Sending payment_terms
     * on a draft captures the term's current revision again. Value enum: "payment_terms".
     */
    "type": "payment_terms";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "payment_terms". */
    "type"?: "payment_terms";
    /**
     * Shape $ (Value): string. The active payment term to apply. Required with payment_terms and
     * not accepted with any other type. minLength: 1.
     */
    "invoice_payment_term_id": string;
})
    & ({
    "due_at"?: never;
}));
/** Shape $ (Value): {@link InvoicePaymentDueNone}. The `none` variant of `InvoicePaymentDue`. */
export type InvoicePaymentDueNone = ({
    /**
     * Shape $ (Value): string. The due date set with type date. Present only with date. The
     * top-level due_at is the effective due date for every type. Format: date-time.
     */
    "due_at"?: string;
    /**
     * Shape $ (Value): string. The payment term applied, captured in payment_terms_snapshot.
     * Present only with payment_terms.
     */
    "invoice_payment_term_id"?: string;
    /** Shape $ (Value): string. How the due date was set. Value enum: "none". */
    "type": "none" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "none". */
    "type"?: "none" | (string & {});
}));
/**
 * Shape $ (Value): {@link InvoicePaymentDuePaymentTerms}. The `payment_terms` variant of
 * `InvoicePaymentDue`.
 */
export type InvoicePaymentDuePaymentTerms = ({
    /**
     * Shape $ (Value): string. The due date set with type date. Present only with date. The
     * top-level due_at is the effective due date for every type. Format: date-time.
     */
    "due_at"?: string;
    /**
     * Shape $ (Value): string. The payment term applied, captured in payment_terms_snapshot.
     * Present only with payment_terms.
     */
    "invoice_payment_term_id": string;
    /** Shape $ (Value): string. How the due date was set. Value enum: "payment_terms". */
    "type": "payment_terms" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "payment_terms". */
    "type"?: "payment_terms" | (string & {});
    /**
     * Shape $ (Value): string. The payment term applied, captured in payment_terms_snapshot.
     * Present only with payment_terms.
     */
    "invoice_payment_term_id": string;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentDueRequest}. When an invoice is due, used when creating or
 * updating an invoice: no due date, a fixed time, payment terms, or a default.
 */
export type InvoicePaymentDueRequest = ({
    /**
     * Shape $ (Value): string. When payment is due, as an RFC 3339 timestamp. Required with date
     * and not accepted with any other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string;
    /**
     * Shape $ (Value): string. The active payment term to apply. Required with payment_terms and
     * not accepted with any other type. minLength: 1.
     */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. How the due date is set. customer_default and merchant_default
     * resolve when the draft is written, and reads return the resolved type. Sending payment_terms
     * on a draft captures the term's current revision again. Value enum: "none", "date",
     * "payment_terms", "customer_default", "merchant_default".
     */
    "type": "none" | "date" | "payment_terms" | "customer_default" | "merchant_default" | (string & {});
})
    & ((Exclude<InvoicePaymentDueNone & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueDate & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDuePaymentTerms & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputCustomerDefault & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputMerchantDefault & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InvoicePaymentDueRequestInput}. When an invoice is due, used when
 * creating or updating an invoice: no due date, a fixed time, payment terms, or a default.
 */
export type InvoicePaymentDueRequestInput = ({
    /**
     * Shape $ (Value): string. When payment is due, as an RFC 3339 timestamp. Required with date
     * and not accepted with any other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. The active payment term to apply. Required with payment_terms and
     * not accepted with any other type. minLength: 1.
     */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. How the due date is set. customer_default and merchant_default
     * resolve when the draft is written, and reads return the resolved type. Sending payment_terms
     * on a draft captures the term's current revision again. Value enum: "none", "date",
     * "payment_terms", "customer_default", "merchant_default".
     */
    "type": "none" | "date" | "payment_terms" | "customer_default" | "merchant_default";
})
    & ((Exclude<InvoicePaymentDueInputNoneInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputDateInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputPaymentTermsInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputCustomerDefaultInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputMerchantDefaultInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link InvoicePaymentOptionCostComparison}. Compares two payment options on an
 * invoice and shows the estimated savings from the lower-cost option.
 */
export type InvoicePaymentOptionCostComparison = {
    /**
     * Shape $ (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit".
     */
    "compared_with_payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Estimated savings for the merchant, as a positive
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "estimated_savings_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit".
     */
    "lower_cost_payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
};
/**
 * Shape $ (Value): {@link InvoicePaymentOptionLimit}. The largest invoice total allowed for a
 * payment option.
 */
export type InvoicePaymentOptionLimit = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The largest invoice total, in this currency, for which
     * Flint offers the option. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "max_total_money": MoneyValue;
    /**
     * Shape $ (Value): string. The payment option this cap applies to. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
};
/**
 * Shape $ (Value): {@link InvoicePaymentOptionLimitInput}. The largest invoice total allowed for a
 * payment option.
 */
export type InvoicePaymentOptionLimitInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. The largest invoice total, in this currency, for
     * which Flint offers the option. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "max_total_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. The payment option this cap applies to. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit";
};
/**
 * Shape $ (Value): {@link InvoicePaymentPolicy}. Which payment options an invoice accepts, any
 * per-option total limits, and whether to show a cost comparison.
 */
export type InvoicePaymentPolicy = {
    /**
     * Shape $ (Value): Array of string. The payment options the buyer can use on the hosted
     * invoice page. Send at least one. maxItems: 5. uniqueItems: true. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Shape $ (Value): Array of {@link InvoicePaymentOptionLimit}. Caps by payment option and
     * currency. Flint doesn't offer an option when the invoice total in that currency is above its
     * max_total_money. maxItems: 100. Shape $[] (Value): {@link InvoicePaymentOptionLimit}. The
     * largest invoice total allowed for a payment option.
     */
    "payment_option_limits"?: Array<InvoicePaymentOptionLimit>;
    /**
     * Shape $ (Value): boolean. Whether the buyer's invoice shows the estimated savings of a
     * lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or
     * google_pay.
     */
    "show_cost_comparison"?: boolean;
};
/**
 * Shape $ (Value): {@link InvoicePaymentPolicyInput}. Which payment options an invoice accepts,
 * any per-option total limits, and whether to show a cost comparison.
 */
export type InvoicePaymentPolicyInput = {
    /**
     * Shape $ (Value): Array of string. The payment options the buyer can use on the hosted
     * invoice page. Send at least one. maxItems: 5. uniqueItems: true. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Shape $ (Value): Array of {@link InvoicePaymentOptionLimitInput}. Caps by payment option and
     * currency. Flint doesn't offer an option when the invoice total in that currency is above its
     * max_total_money. maxItems: 100. Shape $[] (Value): {@link InvoicePaymentOptionLimitInput}.
     * The largest invoice total allowed for a payment option.
     */
    "payment_option_limits"?: Array<InvoicePaymentOptionLimitInput>;
    /**
     * Shape $ (Value): boolean. Whether the buyer's invoice shows the estimated savings of a
     * lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or
     * google_pay.
     */
    "show_cost_comparison"?: boolean;
};
/** Shape $ (Value): {@link InvoicePaymentTerm}. The payment timing agreed for an invoice. */
export type InvoicePaymentTerm = {
    /**
     * Shape $ (Value): {@link InvoicePaymentTermCalculation}. How an invoice due date is
     * calculated from payment terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. */
    "invoice_payment_term_id": string;
    /**
     * Shape $ (Value): {@link InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed
     * amount or a percentage, a grace period in days, and whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string.  Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Shape $ (Value): integer. Format: int32. */
    "version": number;
};
/**
 * Shape $ (Value): {@link InvoicePaymentTermCalculation}. How an invoice due date is calculated
 * from payment terms, such as on receipt, net days, or a day of the month.
 */
export type InvoicePaymentTermCalculation = ({
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day"?: number;
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /**
     * Shape $ (Value): string. Value enum: "on_receipt", "net_days", "day_of_month",
     * "day_of_next_month", "days_after_month_end".
     */
    "type": "on_receipt"
        | "net_days"
        | "day_of_month"
        | "day_of_next_month"
        | "days_after_month_end"
        | (string & {});
})
    & ((Exclude<InvoicePaymentTermCalculationOnReceipt & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationNetDays & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDaysAfterMonthEnd & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDayOfMonth & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDayOfNextMonth & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InvoicePaymentTermCalculationDayOfMonth}. The `day_of_month` variant of
 * `InvoicePaymentTermCalculation`.
 */
export type InvoicePaymentTermCalculationDayOfMonth = ({
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day": number;
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /** Shape $ (Value): string.  Value enum: "day_of_month". */
    "type": "day_of_month" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "day_of_month". */
    "type": "day_of_month" | (string & {});
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day": number;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentTermCalculationDayOfMonthInput}. The `day_of_month`
 * variant of `InvoicePaymentTermCalculation`.
 */
export type InvoicePaymentTermCalculationDayOfMonthInput = ({
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day": number;
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /** Shape $ (Value): string.  Value enum: "day_of_month". */
    "type": "day_of_month";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "day_of_month". */
    "type": "day_of_month";
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day": number;
})
    & ({
    "days"?: never;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentTermCalculationDayOfNextMonth}. The `day_of_next_month`
 * variant of `InvoicePaymentTermCalculation`.
 */
export type InvoicePaymentTermCalculationDayOfNextMonth = ({
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day": number;
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /** Shape $ (Value): string.  Value enum: "day_of_next_month". */
    "type": "day_of_next_month" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "day_of_next_month". */
    "type": "day_of_next_month" | (string & {});
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day": number;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentTermCalculationDayOfNextMonthInput}. The
 * `day_of_next_month` variant of `InvoicePaymentTermCalculation`.
 */
export type InvoicePaymentTermCalculationDayOfNextMonthInput = ({
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day": number;
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /** Shape $ (Value): string.  Value enum: "day_of_next_month". */
    "type": "day_of_next_month";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "day_of_next_month". */
    "type": "day_of_next_month";
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day": number;
})
    & ({
    "days"?: never;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentTermCalculationDaysAfterMonthEnd}. The
 * `days_after_month_end` variant of `InvoicePaymentTermCalculation`.
 */
export type InvoicePaymentTermCalculationDaysAfterMonthEnd = ({
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day"?: number;
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days": number;
    /** Shape $ (Value): string.  Value enum: "days_after_month_end". */
    "type": "days_after_month_end" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "days_after_month_end". */
    "type": "days_after_month_end" | (string & {});
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days": number;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentTermCalculationDaysAfterMonthEndInput}. The
 * `days_after_month_end` variant of `InvoicePaymentTermCalculation`.
 */
export type InvoicePaymentTermCalculationDaysAfterMonthEndInput = ({
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day"?: number;
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days": number;
    /** Shape $ (Value): string.  Value enum: "days_after_month_end". */
    "type": "days_after_month_end";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "days_after_month_end". */
    "type": "days_after_month_end";
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days": number;
})
    & ({
    "day"?: never;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentTermCalculationInput}. How an invoice due date is
 * calculated from payment terms, such as on receipt, net days, or a day of the month.
 */
export type InvoicePaymentTermCalculationInput = ({
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day"?: number;
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /**
     * Shape $ (Value): string. Value enum: "on_receipt", "net_days", "day_of_month",
     * "day_of_next_month", "days_after_month_end".
     */
    "type": "on_receipt" | "net_days" | "day_of_month" | "day_of_next_month" | "days_after_month_end";
})
    & ((Exclude<InvoicePaymentTermCalculationOnReceiptInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationNetDaysInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDaysAfterMonthEndInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDayOfMonthInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDayOfNextMonthInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link InvoicePaymentTermCalculationNetDays}. The `net_days` variant of
 * `InvoicePaymentTermCalculation`.
 */
export type InvoicePaymentTermCalculationNetDays = ({
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day"?: number;
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days": number;
    /** Shape $ (Value): string.  Value enum: "net_days". */
    "type": "net_days" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "net_days". */
    "type": "net_days" | (string & {});
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days": number;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentTermCalculationNetDaysInput}. The `net_days` variant of
 * `InvoicePaymentTermCalculation`.
 */
export type InvoicePaymentTermCalculationNetDaysInput = ({
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day"?: number;
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days": number;
    /** Shape $ (Value): string.  Value enum: "net_days". */
    "type": "net_days";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "net_days". */
    "type": "net_days";
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days": number;
})
    & ({
    "day"?: never;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentTermCalculationOnReceipt}. The `on_receipt` variant of
 * `InvoicePaymentTermCalculation`.
 */
export type InvoicePaymentTermCalculationOnReceipt = ({
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day"?: number;
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /** Shape $ (Value): string.  Value enum: "on_receipt". */
    "type": "on_receipt" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "on_receipt". */
    "type": "on_receipt" | (string & {});
}));
/**
 * Shape $ (Value): {@link InvoicePaymentTermCalculationOnReceiptInput}. The `on_receipt` variant
 * of `InvoicePaymentTermCalculation`.
 */
export type InvoicePaymentTermCalculationOnReceiptInput = ({
    /**
     * Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month.
     * Format: int32. minimum: 1. maximum: 31.
     */
    "day"?: number;
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /** Shape $ (Value): string.  Value enum: "on_receipt". */
    "type": "on_receipt";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "on_receipt". */
    "type": "on_receipt";
})
    & (({
    "days"?: never;
}) & ({
    "day"?: never;
})));
/**
 * Shape $ (Value): {@link InvoicePaymentTermListResponse}. A page of `InvoicePaymentTerm` objects.
 */
export type InvoicePaymentTermListResponse = {
    /**
     * Shape $ (Value): Array of {@link InvoicePaymentTerm}. Shape $[] (Value): {@link
     * InvoicePaymentTerm}. The payment timing agreed for an invoice.
     */
    "data": Array<InvoicePaymentTerm>;
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
 * Shape $ (Value): {@link InvoicePaymentTermResponse}. A response containing `InvoicePaymentTerm`
 * data.
 */
export type InvoicePaymentTermResponse = {
    /** Shape $ (Value): {@link InvoicePaymentTerm}. The payment timing agreed for an invoice. */
    "data": InvoicePaymentTerm;
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
export type InvoicePaymentTermsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateInvoicePaymentTermRequestInput}. The request body for: Create
     * invoice payment term.
     */
    "body": InputValue<CreateInvoicePaymentTermRequestInput>;
};
export type InvoicePaymentTermsGetInput = {
    /** Shape $ (Value): string. */
    "invoice_payment_term_id": InputValue<string>;
};
export type InvoicePaymentTermsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "archived". Shape $[]
     * (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<Array<"active" | "archived">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
};
export type InvoicePaymentTermsRemoveInput = {
    /** Shape $ (Value): string. */
    "invoice_payment_term_id": InputValue<string>;
    /** Shape $ (Value): integer. Format: uint32. minimum: 1. */
    "expected_version"?: InputValue<number>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link InvoicePaymentTermsSnapshot}. The payment terms saved on an invoice: the
 * term's name, version, due date calculation, and late fee policy.
 */
export type InvoicePaymentTermsSnapshot = {
    /**
     * Shape $ (Value): {@link InvoicePaymentTermCalculation}. How an invoice due date is
     * calculated from payment terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    /** Shape $ (Value): string. */
    "invoice_payment_term_id": string;
    /**
     * Shape $ (Value): {@link InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed
     * amount or a percentage, a grace period in days, and whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): integer. Version of the invoice payment term captured in this snapshot.
     * Format: int32.
     */
    "version": number;
};
export type InvoicePaymentTermsUpdateInput = {
    /** Shape $ (Value): string. */
    "invoice_payment_term_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateInvoicePaymentTermRequestInput}. The request body for: Update
     * invoice payment term. minProperties: 1.
     */
    "body": InputValue<UpdateInvoicePaymentTermRequestInput>;
};
/**
 * Shape $ (Value): {@link InvoiceReminderPolicy}. Rules for automatic invoice reminders, each sent
 * a set number of days before or after the due date.
 */
export type InvoiceReminderPolicy = {
    /**
     * Shape $ (Value): Array of {@link InvoiceReminderRule}. maxItems: 20. Shape $[] (Value):
     * {@link InvoiceReminderRule}. One reminder in an invoice reminder policy. `days_from_due`
     * sets when it is sent: negative values are days before the due date, positive values days
     * after.
     */
    "rules": Array<InvoiceReminderRule>;
};
/**
 * Shape $ (Value): {@link InvoiceReminderPolicyInput}. Rules for automatic invoice reminders, each
 * sent a set number of days before or after the due date.
 */
export type InvoiceReminderPolicyInput = {
    /**
     * Shape $ (Value): Array of {@link InvoiceReminderRuleInput}. maxItems: 20. Shape $[] (Value):
     * {@link InvoiceReminderRuleInput}. One reminder in an invoice reminder policy.
     * `days_from_due` sets when it is sent: negative values are days before the due date, positive
     * values days after.
     */
    "rules": Array<InvoiceReminderRuleInput>;
};
/**
 * Shape $ (Value): {@link InvoiceReminderRule}. One reminder in an invoice reminder policy.
 * `days_from_due` sets when it is sent: negative values are days before the due date, positive
 * values days after.
 */
export type InvoiceReminderRule = {
    /** Shape $ (Value): integer. Format: int32. minimum: -90. maximum: 365. */
    "days_from_due": number;
};
/**
 * Shape $ (Value): {@link InvoiceReminderRuleInput}. One reminder in an invoice reminder policy.
 * `days_from_due` sets when it is sent: negative values are days before the due date, positive
 * values days after.
 */
export type InvoiceReminderRuleInput = InvoiceReminderRule;
/** Shape $ (Value): {@link InvoiceResponse}. A response containing `Invoice` data. */
export type InvoiceResponse = {
    /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
    "data": Invoice;
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
 * Shape $ (Value): {@link InvoiceScheduleAmountSpecification}. How much a payment schedule entry
 * collects: a fixed amount, a percentage of the invoice total, or the remaining balance.
 */
export type InvoiceScheduleAmountSpecification = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount to collect, in the invoice currency.
     * Required with fixed and not accepted with any other type. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): number. Percentage of snapshot.pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * Shape $ (Value): string. How the entry's amount is set. Value enum: "fixed", "percentage",
     * "remaining_balance".
     */
    "type": "fixed" | "percentage" | "remaining_balance" | (string & {});
})
    & ((Exclude<InvoiceScheduleAmountSpecificationFixed & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationPercentage & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationRemainingBalance & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
 * `InvoiceScheduleAmountSpecification`.
 */
export type InvoiceScheduleAmountSpecificationFixed = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount to collect, in the invoice currency.
     * Required with fixed and not accepted with any other type. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): number. Percentage of snapshot.pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Shape $ (Value): string. How the entry's amount is set. Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount to collect, in the invoice currency.
     * Required with fixed and not accepted with any other type. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
/**
 * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationFixedInput}. The `fixed` variant of
 * `InvoiceScheduleAmountSpecification`.
 */
export type InvoiceScheduleAmountSpecificationFixedInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. The amount to collect, in the invoice currency.
     * Required with fixed and not accepted with any other type. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): number. Percentage of snapshot.pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Shape $ (Value): string. How the entry's amount is set. Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. The amount to collect, in the invoice currency.
     * Required with fixed and not accepted with any other type. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
})
    & ({
    "percent"?: never;
}));
/**
 * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationInput}. How much a payment schedule
 * entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.
 */
export type InvoiceScheduleAmountSpecificationInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. The amount to collect, in the invoice currency.
     * Required with fixed and not accepted with any other type. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): number. Percentage of snapshot.pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * Shape $ (Value): string. How the entry's amount is set. Value enum: "fixed", "percentage",
     * "remaining_balance".
     */
    "type": "fixed" | "percentage" | "remaining_balance";
})
    & ((Exclude<InvoiceScheduleAmountSpecificationFixedInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationPercentageInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationRemainingBalanceInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant
 * of `InvoiceScheduleAmountSpecification`.
 */
export type InvoiceScheduleAmountSpecificationPercentage = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount to collect, in the invoice currency.
     * Required with fixed and not accepted with any other type. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): number. Percentage of snapshot.pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001.
     */
    "percent": number;
    /** Shape $ (Value): string. How the entry's amount is set. Value enum: "percentage". */
    "type": "percentage" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "type": "percentage" | (string & {});
    /**
     * Shape $ (Value): number. Percentage of snapshot.pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001.
     */
    "percent": number;
}));
/**
 * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationPercentageInput}. The `percentage`
 * variant of `InvoiceScheduleAmountSpecification`.
 */
export type InvoiceScheduleAmountSpecificationPercentageInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. The amount to collect, in the invoice currency.
     * Required with fixed and not accepted with any other type. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): number. Percentage of snapshot.pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001.
     */
    "percent": number;
    /** Shape $ (Value): string. How the entry's amount is set. Value enum: "percentage". */
    "type": "percentage";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "type": "percentage";
    /**
     * Shape $ (Value): number. Percentage of snapshot.pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001.
     */
    "percent": number;
})
    & ({
    "amount_money"?: never;
}));
/**
 * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationRemainingBalance}. The
 * `remaining_balance` variant of `InvoiceScheduleAmountSpecification`.
 */
export type InvoiceScheduleAmountSpecificationRemainingBalance = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount to collect, in the invoice currency.
     * Required with fixed and not accepted with any other type. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): number. Percentage of snapshot.pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Shape $ (Value): string. How the entry's amount is set. Value enum: "remaining_balance". */
    "type": "remaining_balance" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "remaining_balance". */
    "type": "remaining_balance" | (string & {});
}));
/**
 * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationRemainingBalanceInput}. The
 * `remaining_balance` variant of `InvoiceScheduleAmountSpecification`.
 */
export type InvoiceScheduleAmountSpecificationRemainingBalanceInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. The amount to collect, in the invoice currency.
     * Required with fixed and not accepted with any other type. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): number. Percentage of snapshot.pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Shape $ (Value): string. How the entry's amount is set. Value enum: "remaining_balance". */
    "type": "remaining_balance";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "remaining_balance". */
    "type": "remaining_balance";
})
    & (({
    "amount_money"?: never;
}) & ({
    "percent"?: never;
})));
/**
 * Shape $ (Value): {@link InvoiceScheduleDue}. When a payment schedule entry on an invoice is due:
 * at issue, on a set date, or on the invoice due date.
 */
export type InvoiceScheduleDue = ({
    /**
     * Shape $ (Value): string. When this entry is due. Always set for `date`. For `at_issue` and
     * `invoice_due_date`, absent on a draft and set when the invoice is issued: the issue time for
     * `at_issue` and the invoice's `due_at` for `invoice_due_date`. Format: date-time.
     */
    "due_at"?: string;
    /**
     * Shape $ (Value): string. How the entry's due time is set. Value enum: "at_issue", "date",
     * "invoice_due_date".
     */
    "type": "at_issue" | "date" | "invoice_due_date" | (string & {});
})
    & ((Exclude<InvoiceScheduleDueAtIssue & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueDate & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueInvoiceDueDate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InvoiceScheduleDueAtIssue}. The `at_issue` variant of
 * `InvoiceScheduleDue`.
 */
export type InvoiceScheduleDueAtIssue = ({
    /**
     * Shape $ (Value): string. When this entry is due. Always set for `date`. For `at_issue` and
     * `invoice_due_date`, absent on a draft and set when the invoice is issued: the issue time for
     * `at_issue` and the invoice's `due_at` for `invoice_due_date`. Format: date-time.
     */
    "due_at"?: string;
    /** Shape $ (Value): string. How the entry's due time is set. Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
})
    & ({
    /** Shape $ (Value): string.  Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
});
/** Shape $ (Value): {@link InvoiceScheduleDueDate}. The `date` variant of `InvoiceScheduleDue`. */
export type InvoiceScheduleDueDate = ({
    /**
     * Shape $ (Value): string. When this entry is due. Always set for `date`. For `at_issue` and
     * `invoice_due_date`, absent on a draft and set when the invoice is issued: the issue time for
     * `at_issue` and the invoice's `due_at` for `invoice_due_date`. Format: date-time.
     */
    "due_at": string;
    /** Shape $ (Value): string. How the entry's due time is set. Value enum: "date". */
    "type": "date" | (string & {});
})
    & ({
    /** Shape $ (Value): string.  Value enum: "date". */
    "type": "date" | (string & {});
    /**
     * Shape $ (Value): string. When this entry is due. Always set for `date`. For `at_issue` and
     * `invoice_due_date`, absent on a draft and set when the invoice is issued: the issue time for
     * `at_issue` and the invoice's `due_at` for `invoice_due_date`. Format: date-time.
     */
    "due_at": string;
});
/**
 * Shape $ (Value): {@link InvoiceScheduleDueInvoiceDueDate}. The `invoice_due_date` variant of
 * `InvoiceScheduleDue`.
 */
export type InvoiceScheduleDueInvoiceDueDate = ({
    /**
     * Shape $ (Value): string. When this entry is due. Always set for `date`. For `at_issue` and
     * `invoice_due_date`, absent on a draft and set when the invoice is issued: the issue time for
     * `at_issue` and the invoice's `due_at` for `invoice_due_date`. Format: date-time.
     */
    "due_at"?: string;
    /** Shape $ (Value): string. How the entry's due time is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
})
    & ({
    /** Shape $ (Value): string.  Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
});
/**
 * Shape $ (Value): {@link InvoiceScheduleDueWrite}. When a payment schedule entry is due, as
 * supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due
 * date.
 */
export type InvoiceScheduleDueWrite = ({
    /**
     * Shape $ (Value): string. When this entry is due. Required for `date`. Not accepted for
     * `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format:
     * date-time. minLength: 1.
     */
    "due_at"?: string;
    /**
     * Shape $ (Value): string. How the entry's due time is set. Value enum: "at_issue", "date",
     * "invoice_due_date".
     */
    "type": "at_issue" | "date" | "invoice_due_date" | (string & {});
})
    & ((Exclude<InvoiceScheduleDueWriteAtIssue & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueDate & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteInvoiceDueDate & object, readonly unknown[]>)
    | (Record<string, unknown>));
