import type {
    InvoicePaymentDueDate,
    InvoicePaymentDueInputCustomerDefault,
    InvoicePaymentDueInputMerchantDefault,
    InvoicePaymentDueNone,
    InvoicePaymentDuePaymentTerms,
    InvoicePaymentDueInputCustomerDefaultInput,
    InvoicePaymentDueInputDateInput,
    InvoicePaymentDueInputMerchantDefaultInput,
    InvoicePaymentDueInputNoneInput,
    InvoicePaymentDueInputPaymentTermsInput,
    InvoiceLateFeePolicy,
    Invoice,
    InvoiceAutopayRetryPolicy,
    InvoiceAutopayRetryPolicyInput
} from './types-28.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { ResponseMeta } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { CreateInvoicePaymentTermRequestInput } from './types-7.js';
import type { UpdateInvoicePaymentTermRequestInput } from './types-51.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
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
    "request_id": string;
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
    "request_id": string;
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
    "request_id": string;
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
/**
 * Shape $ (Value): {@link InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of
 * `InvoiceScheduleDueWrite`.
 */
export type InvoiceScheduleDueWriteAtIssue = ({
    /**
     * Shape $ (Value): string. When this entry is due. Required for `date`. Not accepted for
     * `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format:
     * date-time. minLength: 1.
     */
    "due_at"?: string;
    /** Shape $ (Value): string. How the entry's due time is set. Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
}));
/**
 * Shape $ (Value): {@link InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of
 * `InvoiceScheduleDueWrite`.
 */
export type InvoiceScheduleDueWriteAtIssueInput = ({
    /**
     * Shape $ (Value): string. When this entry is due. Required for `date`. Not accepted for
     * `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format:
     * date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. How the entry's due time is set. Value enum: "at_issue". */
    "type": "at_issue";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "at_issue". */
    "type": "at_issue";
})
    & ({
    "due_at"?: never;
}));
/**
 * Shape $ (Value): {@link InvoiceScheduleDueWriteDateInput}. The `date` variant of
 * `InvoiceScheduleDueWrite`.
 */
export type InvoiceScheduleDueWriteDateInput = ({
    /**
     * Shape $ (Value): string. When this entry is due. Required for `date`. Not accepted for
     * `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format:
     * date-time. minLength: 1.
     */
    "due_at": string | globalThis.Date;
    /** Shape $ (Value): string. How the entry's due time is set. Value enum: "date". */
    "type": "date";
})
    & ({
    /** Shape $ (Value): string.  Value enum: "date". */
    "type": "date";
    /**
     * Shape $ (Value): string. When this entry is due. Required for `date`. Not accepted for
     * `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format:
     * date-time. minLength: 1.
     */
    "due_at": string | globalThis.Date;
});
/**
 * Shape $ (Value): {@link InvoiceScheduleDueWriteInput}. When a payment schedule entry is due, as
 * supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due
 * date.
 */
export type InvoiceScheduleDueWriteInput = ({
    /**
     * Shape $ (Value): string. When this entry is due. Required for `date`. Not accepted for
     * `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format:
     * date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. How the entry's due time is set. Value enum: "at_issue", "date",
     * "invoice_due_date".
     */
    "type": "at_issue" | "date" | "invoice_due_date";
})
    & ((Exclude<InvoiceScheduleDueWriteAtIssueInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteDateInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteInvoiceDueDateInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link InvoiceScheduleDueWriteInvoiceDueDate}. The `invoice_due_date` variant
 * of `InvoiceScheduleDueWrite`.
 */
export type InvoiceScheduleDueWriteInvoiceDueDate = ({
    /**
     * Shape $ (Value): string. When this entry is due. Required for `date`. Not accepted for
     * `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format:
     * date-time. minLength: 1.
     */
    "due_at"?: string;
    /** Shape $ (Value): string. How the entry's due time is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
}));
/**
 * Shape $ (Value): {@link InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date`
 * variant of `InvoiceScheduleDueWrite`.
 */
export type InvoiceScheduleDueWriteInvoiceDueDateInput = ({
    /**
     * Shape $ (Value): string. When this entry is due. Required for `date`. Not accepted for
     * `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format:
     * date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. How the entry's due time is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "invoice_due_date". */
    "type": "invoice_due_date";
})
    & ({
    "due_at"?: never;
}));
/**
 * Shape $ (Value): {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule,
 * such as a deposit, installment, or balance, with its due time, amounts, and status.
 */
export type InvoiceScheduleEntry = {
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecification}. How the entry's amount is set:
     * a fixed amount, a percent of the invoice total, or the remaining balance. How much a payment
     * schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining
     * balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit note credit allocated to this entry, minus
     * reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link InvoiceScheduleDue}. When the entry is due. When a payment schedule
     * entry on an invoice is due: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDue;
    /**
     * Shape $ (Value): string. Flint invoice schedule entry ID. Kept across draft edits that send
     * it back with the entry.
     */
    "invoice_schedule_entry_id": string;
    /**
     * Shape $ (Value): string. The entry's role in the schedule. Value enum: "deposit",
     * "installment", "balance".
     */
    "kind": "deposit" | "installment" | "balance" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. What is still owed on this entry, including its unpaid
     * late fee, never below zero. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Payments applied to this entry, minus reversed
     * payments, including payments toward its late fee. It can exceed total_money when the entry
     * carries a late fee. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Shape $ (Value): string. The entry's payment status, computed when the invoice is read. It
     * follows the entry's balance and due time, not the invoice's status. Value enum: "pending",
     * "due", "partially_satisfied", "satisfied", "overdue".
     */
    "status": "pending" | "due" | "partially_satisfied" | "satisfied" | "overdue" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. The entry's share of the invoice total, resolved from
     * amount_specification against snapshot.pricing_amounts.total_money. Recomputed on draft edits
     * and fixed at issue. Excludes late fees. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. The part of this entry written off when the invoice was
     * marked uncollectible, including its unpaid late fee. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link InvoiceScheduleEntryWrite}. One payment schedule entry you supply when
 * creating or updating an invoice. Set its kind, how much it collects, and when it is due.
 */
export type InvoiceScheduleEntryWrite = ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecification}. How much the entry collects.
     * Deposits and installments use fixed or percentage, and the balance uses remaining_balance.
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWrite}. When the entry is due. Deposits use
     * at_issue or date, installments use date, and the balance uses invoice_due_date or date. When
     * a payment schedule entry is due, as supplied when creating or updating an invoice: at issue,
     * on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * Shape $ (Value): string. An existing entry's ID, to keep that entry when you replace the
     * schedule on PATCH. Omit it to add a new entry. minLength: 1.
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Shape $ (Value): string. The entry's role in the schedule. Value enum: "deposit",
     * "installment", "balance".
     */
    "kind": "deposit" | "installment" | "balance" | (string & {});
})
    & ((Exclude<InvoiceScheduleEntryWriteDeposit & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteInstallment & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteBalance & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InvoiceScheduleEntryWriteBalance}. The `balance` variant of
 * `InvoiceScheduleEntryWrite`.
 */
export type InvoiceScheduleEntryWriteBalance = ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecification}. How much the entry collects.
     * Deposits and installments use fixed or percentage, and the balance uses remaining_balance.
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWrite}. When the entry is due. Deposits use
     * at_issue or date, installments use date, and the balance uses invoice_due_date or date. When
     * a payment schedule entry is due, as supplied when creating or updating an invoice: at issue,
     * on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * Shape $ (Value): string. An existing entry's ID, to keep that entry when you replace the
     * schedule on PATCH. Omit it to add a new entry. minLength: 1.
     */
    "invoice_schedule_entry_id"?: string;
    /** Shape $ (Value): string. The entry's role in the schedule. Value enum: "balance". */
    "kind": "balance" | (string & {});
})
    & ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecification}. How much a payment schedule
     * entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.
     * Shape $.amount_money (Optional): {@link MoneyValue}. The amount to collect, in the invoice
     * currency. Required with fixed and not accepted with any other type. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. Shape $.percent
     * (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater
     * than 0 and at most 100, with up to four decimal places. Required with percentage and not
     * accepted with any other type. multipleOf: 0.0001. Shape $.type (Required): string. How the
     * entry's amount is set. Value enum: "remaining_balance". Shape $.oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. Shape $.oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. Shape $.oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalance}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecification & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string.  Value enum: "remaining_balance". */
        "type"?: "remaining_balance" | (string & {});
    });
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWrite}. When a payment schedule entry is due, as
     * supplied when creating or updating an invoice: at issue, on a set date, or on the invoice
     * due date. Shape $.due_at (Optional): string. When this entry is due. Required for `date`.
     * Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is
     * issued. Format: date-time. minLength: 1. Shape $.type (Required): string. How the entry's
     * due time is set. Value enum: "date", "invoice_due_date". Shape $.oneOf[1] (Value): {@link
     * InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of `InvoiceScheduleDueWrite`. Shape
     * $.oneOf[2] (Value): {@link InvoiceScheduleDueDate}. The `date` variant of
     * `InvoiceScheduleDueWrite`. Shape $.oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDate}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWrite & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string.  Value enum: "invoice_due_date", "date". */
        "type"?: "invoice_due_date" | "date" | (string & {});
    });
    /** Shape $ (Value): string.  Value enum: "balance". */
    "kind"?: "balance" | (string & {});
});
/**
 * Shape $ (Value): {@link InvoiceScheduleEntryWriteBalanceInput}. The `balance` variant of
 * `InvoiceScheduleEntryWrite`.
 */
export type InvoiceScheduleEntryWriteBalanceInput = ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationInput}. How much the entry
     * collects. Deposits and installments use fixed or percentage, and the balance uses
     * remaining_balance. How much a payment schedule entry collects: a fixed amount, a percentage
     * of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationInput;
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWriteInput}. When the entry is due. Deposits use
     * at_issue or date, installments use date, and the balance uses invoice_due_date or date. When
     * a payment schedule entry is due, as supplied when creating or updating an invoice: at issue,
     * on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * Shape $ (Value): string. An existing entry's ID, to keep that entry when you replace the
     * schedule on PATCH. Omit it to add a new entry. minLength: 1.
     */
    "invoice_schedule_entry_id"?: string;
    /** Shape $ (Value): string. The entry's role in the schedule. Value enum: "balance". */
    "kind": "balance";
})
    & ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationInput}. How much a payment
     * schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining
     * balance. Shape $.amount_money (Optional): {@link MoneyValueInput}. The amount to collect, in
     * the invoice currency. Required with fixed and not accepted with any other type. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code. Shape $.percent
     * (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater
     * than 0 and at most 100, with up to four decimal places. Required with percentage and not
     * accepted with any other type. multipleOf: 0.0001. Shape $.type (Required): string. How the
     * entry's amount is set. Value enum: "remaining_balance". Shape $.oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixedInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. Shape $.oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. Shape $.oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceInput}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationInput & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string.  Value enum: "remaining_balance". */
        "type"?: "remaining_balance";
    });
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWriteInput}. When a payment schedule entry is due,
     * as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice
     * due date. Shape $.due_at (Optional): string. When this entry is due. Required for `date`.
     * Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is
     * issued. Format: date-time. minLength: 1. Shape $.type (Required): string. How the entry's
     * due time is set. Value enum: "date", "invoice_due_date". Shape $.oneOf[1] (Value): {@link
     * InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of `InvoiceScheduleDueWrite`.
     * Shape $.oneOf[2] (Value): {@link InvoiceScheduleDueWriteDateInput}. The `date` variant of
     * `InvoiceScheduleDueWrite`. Shape $.oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWriteInput & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string.  Value enum: "invoice_due_date", "date". */
        "type"?: "invoice_due_date" | "date";
    });
    /** Shape $ (Value): string.  Value enum: "balance". */
    "kind"?: "balance";
});
/**
 * Shape $ (Value): {@link InvoiceScheduleEntryWriteDeposit}. The `deposit` variant of
 * `InvoiceScheduleEntryWrite`.
 */
export type InvoiceScheduleEntryWriteDeposit = ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecification}. How much the entry collects.
     * Deposits and installments use fixed or percentage, and the balance uses remaining_balance.
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWrite}. When the entry is due. Deposits use
     * at_issue or date, installments use date, and the balance uses invoice_due_date or date. When
     * a payment schedule entry is due, as supplied when creating or updating an invoice: at issue,
     * on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * Shape $ (Value): string. An existing entry's ID, to keep that entry when you replace the
     * schedule on PATCH. Omit it to add a new entry. minLength: 1.
     */
    "invoice_schedule_entry_id"?: string;
    /** Shape $ (Value): string. The entry's role in the schedule. Value enum: "deposit". */
    "kind": "deposit" | (string & {});
})
    & ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecification}. How much a payment schedule
     * entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.
     * Shape $.amount_money (Optional): {@link MoneyValue}. The amount to collect, in the invoice
     * currency. Required with fixed and not accepted with any other type. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. Shape $.percent
     * (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater
     * than 0 and at most 100, with up to four decimal places. Required with percentage and not
     * accepted with any other type. multipleOf: 0.0001. Shape $.type (Required): string. How the
     * entry's amount is set. Value enum: "fixed", "percentage". Shape $.oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. Shape $.oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. Shape $.oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalance}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecification & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string.  Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage" | (string & {});
    });
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWrite}. When a payment schedule entry is due, as
     * supplied when creating or updating an invoice: at issue, on a set date, or on the invoice
     * due date. Shape $.due_at (Optional): string. When this entry is due. Required for `date`.
     * Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is
     * issued. Format: date-time. minLength: 1. Shape $.type (Required): string. How the entry's
     * due time is set. Value enum: "at_issue", "date". Shape $.oneOf[1] (Value): {@link
     * InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of `InvoiceScheduleDueWrite`. Shape
     * $.oneOf[2] (Value): {@link InvoiceScheduleDueDate}. The `date` variant of
     * `InvoiceScheduleDueWrite`. Shape $.oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDate}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWrite & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string.  Value enum: "at_issue", "date". */
        "type"?: "at_issue" | "date" | (string & {});
    });
    /** Shape $ (Value): string.  Value enum: "deposit". */
    "kind"?: "deposit" | (string & {});
});
/**
 * Shape $ (Value): {@link InvoiceScheduleEntryWriteDepositInput}. The `deposit` variant of
 * `InvoiceScheduleEntryWrite`.
 */
export type InvoiceScheduleEntryWriteDepositInput = ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationInput}. How much the entry
     * collects. Deposits and installments use fixed or percentage, and the balance uses
     * remaining_balance. How much a payment schedule entry collects: a fixed amount, a percentage
     * of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationInput;
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWriteInput}. When the entry is due. Deposits use
     * at_issue or date, installments use date, and the balance uses invoice_due_date or date. When
     * a payment schedule entry is due, as supplied when creating or updating an invoice: at issue,
     * on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * Shape $ (Value): string. An existing entry's ID, to keep that entry when you replace the
     * schedule on PATCH. Omit it to add a new entry. minLength: 1.
     */
    "invoice_schedule_entry_id"?: string;
    /** Shape $ (Value): string. The entry's role in the schedule. Value enum: "deposit". */
    "kind": "deposit";
})
    & ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationInput}. How much a payment
     * schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining
     * balance. Shape $.amount_money (Optional): {@link MoneyValueInput}. The amount to collect, in
     * the invoice currency. Required with fixed and not accepted with any other type. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code. Shape $.percent
     * (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater
     * than 0 and at most 100, with up to four decimal places. Required with percentage and not
     * accepted with any other type. multipleOf: 0.0001. Shape $.type (Required): string. How the
     * entry's amount is set. Value enum: "fixed", "percentage". Shape $.oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixedInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. Shape $.oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. Shape $.oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceInput}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationInput & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string.  Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage";
    });
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWriteInput}. When a payment schedule entry is due,
     * as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice
     * due date. Shape $.due_at (Optional): string. When this entry is due. Required for `date`.
     * Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is
     * issued. Format: date-time. minLength: 1. Shape $.type (Required): string. How the entry's
     * due time is set. Value enum: "at_issue", "date". Shape $.oneOf[1] (Value): {@link
     * InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of `InvoiceScheduleDueWrite`.
     * Shape $.oneOf[2] (Value): {@link InvoiceScheduleDueWriteDateInput}. The `date` variant of
     * `InvoiceScheduleDueWrite`. Shape $.oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWriteInput & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string.  Value enum: "at_issue", "date". */
        "type"?: "at_issue" | "date";
    });
    /** Shape $ (Value): string.  Value enum: "deposit". */
    "kind"?: "deposit";
});
/**
 * Shape $ (Value): {@link InvoiceScheduleEntryWriteInput}. One payment schedule entry you supply
 * when creating or updating an invoice. Set its kind, how much it collects, and when it is due.
 */
export type InvoiceScheduleEntryWriteInput = ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationInput}. How much the entry
     * collects. Deposits and installments use fixed or percentage, and the balance uses
     * remaining_balance. How much a payment schedule entry collects: a fixed amount, a percentage
     * of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationInput;
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWriteInput}. When the entry is due. Deposits use
     * at_issue or date, installments use date, and the balance uses invoice_due_date or date. When
     * a payment schedule entry is due, as supplied when creating or updating an invoice: at issue,
     * on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * Shape $ (Value): string. An existing entry's ID, to keep that entry when you replace the
     * schedule on PATCH. Omit it to add a new entry. minLength: 1.
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Shape $ (Value): string. The entry's role in the schedule. Value enum: "deposit",
     * "installment", "balance".
     */
    "kind": "deposit" | "installment" | "balance";
})
    & ((Exclude<InvoiceScheduleEntryWriteDepositInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteInstallmentInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteBalanceInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link InvoiceScheduleEntryWriteInstallment}. The `installment` variant of
 * `InvoiceScheduleEntryWrite`.
 */
export type InvoiceScheduleEntryWriteInstallment = ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecification}. How much the entry collects.
     * Deposits and installments use fixed or percentage, and the balance uses remaining_balance.
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWrite}. When the entry is due. Deposits use
     * at_issue or date, installments use date, and the balance uses invoice_due_date or date. When
     * a payment schedule entry is due, as supplied when creating or updating an invoice: at issue,
     * on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * Shape $ (Value): string. An existing entry's ID, to keep that entry when you replace the
     * schedule on PATCH. Omit it to add a new entry. minLength: 1.
     */
    "invoice_schedule_entry_id"?: string;
    /** Shape $ (Value): string. The entry's role in the schedule. Value enum: "installment". */
    "kind": "installment" | (string & {});
})
    & ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecification}. How much a payment schedule
     * entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.
     * Shape $.amount_money (Optional): {@link MoneyValue}. The amount to collect, in the invoice
     * currency. Required with fixed and not accepted with any other type. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. Shape $.percent
     * (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater
     * than 0 and at most 100, with up to four decimal places. Required with percentage and not
     * accepted with any other type. multipleOf: 0.0001. Shape $.type (Required): string. How the
     * entry's amount is set. Value enum: "fixed", "percentage". Shape $.oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. Shape $.oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. Shape $.oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalance}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecification & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string.  Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage" | (string & {});
    });
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWrite}. When a payment schedule entry is due, as
     * supplied when creating or updating an invoice: at issue, on a set date, or on the invoice
     * due date. Shape $.due_at (Optional): string. When this entry is due. Required for `date`.
     * Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is
     * issued. Format: date-time. minLength: 1. Shape $.type (Required): string. How the entry's
     * due time is set. Value enum: "date". Shape $.oneOf[1] (Value): {@link
     * InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of `InvoiceScheduleDueWrite`. Shape
     * $.oneOf[2] (Value): {@link InvoiceScheduleDueDate}. The `date` variant of
     * `InvoiceScheduleDueWrite`. Shape $.oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDate}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWrite & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string.  Value enum: "date". */
        "type"?: "date" | (string & {});
    });
    /** Shape $ (Value): string.  Value enum: "installment". */
    "kind"?: "installment" | (string & {});
});
/**
 * Shape $ (Value): {@link InvoiceScheduleEntryWriteInstallmentInput}. The `installment` variant of
 * `InvoiceScheduleEntryWrite`.
 */
export type InvoiceScheduleEntryWriteInstallmentInput = ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationInput}. How much the entry
     * collects. Deposits and installments use fixed or percentage, and the balance uses
     * remaining_balance. How much a payment schedule entry collects: a fixed amount, a percentage
     * of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationInput;
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWriteInput}. When the entry is due. Deposits use
     * at_issue or date, installments use date, and the balance uses invoice_due_date or date. When
     * a payment schedule entry is due, as supplied when creating or updating an invoice: at issue,
     * on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * Shape $ (Value): string. An existing entry's ID, to keep that entry when you replace the
     * schedule on PATCH. Omit it to add a new entry. minLength: 1.
     */
    "invoice_schedule_entry_id"?: string;
    /** Shape $ (Value): string. The entry's role in the schedule. Value enum: "installment". */
    "kind": "installment";
})
    & ({
    /**
     * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationInput}. How much a payment
     * schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining
     * balance. Shape $.amount_money (Optional): {@link MoneyValueInput}. The amount to collect, in
     * the invoice currency. Required with fixed and not accepted with any other type. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code. Shape $.percent
     * (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater
     * than 0 and at most 100, with up to four decimal places. Required with percentage and not
     * accepted with any other type. multipleOf: 0.0001. Shape $.type (Required): string. How the
     * entry's amount is set. Value enum: "fixed", "percentage". Shape $.oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixedInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. Shape $.oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. Shape $.oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceInput}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationInput & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string.  Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage";
    });
    /**
     * Shape $ (Value): {@link InvoiceScheduleDueWriteInput}. When a payment schedule entry is due,
     * as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice
     * due date. Shape $.due_at (Optional): string. When this entry is due. Required for `date`.
     * Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is
     * issued. Format: date-time. minLength: 1. Shape $.type (Required): string. How the entry's
     * due time is set. Value enum: "date". Shape $.oneOf[1] (Value): {@link
     * InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of `InvoiceScheduleDueWrite`.
     * Shape $.oneOf[2] (Value): {@link InvoiceScheduleDueWriteDateInput}. The `date` variant of
     * `InvoiceScheduleDueWrite`. Shape $.oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWriteInput & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string.  Value enum: "date". */
        "type"?: "date";
    });
    /** Shape $ (Value): string.  Value enum: "installment". */
    "kind"?: "installment";
});
/**
 * Shape $ (Value): {@link InvoiceSettings}. Merchant defaults for invoices, including numbering
 * prefixes, default memo and footer, collection mode, reminders, and autopay retries.
 */
export type InvoiceSettings = {
    /**
     * Shape $ (Value): {@link InvoiceAutopayRetryPolicy}. Replaced as a whole: send every field
     * you want to keep. When to retry a failed automatic invoice payment, as a list of day
     * offsets.
     */
    "autopay_retry_policy"?: InvoiceAutopayRetryPolicy;
    /**
     * Shape $ (Value): string. Up to 12 ASCII letters, digits, underscores, or hyphens. Counted
     * before normalization. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "credit_note_number_prefix"?: string;
    /** Shape $ (Value): string.  Value enum: "buyer_initiated", "automatic", "external". */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | (string & {});
    /**
     * Shape $ (Value): string. Limited to 4096 characters (Unicode code points), counted before
     * normalization. maxLength: 4096.
     */
    "default_footer"?: string;
    /** Shape $ (Value): string. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. */
    "default_invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. Limited to 4096 characters (Unicode code points), counted before
     * normalization. maxLength: 4096.
     */
    "default_memo"?: string;
    /**
     * Shape $ (Value): string. Up to 12 ASCII letters, digits, underscores, or hyphens. Counted
     * before normalization. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "invoice_number_prefix"?: string;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicy}. Replaced as a whole: send every field you
     * want to keep. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
    /**
     * Shape $ (Value): {@link InvoiceReminderPolicy}. Replaced as a whole: send every field you
     * want to keep. Rules for automatic invoice reminders, each sent a set number of days before
     * or after the due date.
     */
    "reminder_policy"?: InvoiceReminderPolicy;
    /**
     * Shape $ (Value): {@link Address}. Replaced as a whole: send every field you want to keep. A
     * postal address. Every address has country. Addresses Flint checked as complete (customer and
     * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "remit_to_address"?: Address;
    /**
     * Shape $ (Value): string. Limited to 255 characters (Unicode code points), counted before
     * normalization. Format: email. maxLength: 255.
     */
    "reply_to_email"?: string;
    /**
     * Shape $ (Value): string. Limited to 255 characters (Unicode code points), counted before
     * normalization. maxLength: 255.
     */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link InvoiceSettingsPatch}. Changes to a merchant's invoice settings. Send
 * only the fields to change, and send null on a nullable field to clear it. minProperties: 1.
 */
export type InvoiceSettingsPatch = {
    /**
     * Shape $ (Value): {@link InvoiceAutopayRetryPolicy} or null. Replaced as a whole: send every
     * field you want to keep. Shape $.anyOf[1] (Value): {@link InvoiceAutopayRetryPolicy}. When to
     * retry a failed automatic invoice payment, as a list of day offsets. Shape $.anyOf[2]
     * (Value): null.
     */
    "autopay_retry_policy"?: ((InvoiceAutopayRetryPolicy) | (null));
    /**
     * Shape $ (Value): string or null. Up to 12 ASCII letters, digits, underscores, or hyphens.
     * Counted before normalization. Send null to clear it. minLength: 1. maxLength: 12. pattern:
     * ^[A-Za-z0-9_-]*$.
     */
    "credit_note_number_prefix"?: string | null;
    /**
     * Shape $ (Value): string or null. Value enum: "buyer_initiated", "automatic", "external",
     * null.
     */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null | (string & {}) | null;
    /**
     * Shape $ (Value): string or null. Limited to 4096 characters (Unicode code points), counted
     * before normalization. Send null to clear it. minLength: 1. maxLength: 4096.
     */
    "default_footer"?: string | null;
    /**
     * Shape $ (Value): string or null. Send null to clear it. minLength: 1. pattern:
     * ^ipt_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Limited to 4096 characters (Unicode code points), counted
     * before normalization. Send null to clear it. minLength: 1. maxLength: 4096.
     */
    "default_memo"?: string | null;
    /**
     * Shape $ (Value): string or null. Up to 12 ASCII letters, digits, underscores, or hyphens.
     * Counted before normalization. Send null to clear it. minLength: 1. maxLength: 12. pattern:
     * ^[A-Za-z0-9_-]*$.
     */
    "invoice_number_prefix"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicy} or null. Replaced as a whole: send every field
     * you want to keep. Shape $.anyOf[1] (Value): {@link InvoicePaymentPolicy}. Which payment
     * options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison. Shape $.anyOf[2] (Value): null.
     */
    "payment_policy"?: ((InvoicePaymentPolicy) | (null));
    /**
     * Shape $ (Value): {@link InvoiceReminderPolicy} or null. Replaced as a whole: send every
     * field you want to keep. Shape $.anyOf[1] (Value): {@link InvoiceReminderPolicy}. Rules for
     * automatic invoice reminders, each sent a set number of days before or after the due date.
     * Shape $.anyOf[2] (Value): null.
     */
    "reminder_policy"?: ((InvoiceReminderPolicy) | (null));
    /**
     * Shape $ (Value): {@link AddressRequest} or null. Replaced as a whole: send every field you
     * want to keep. Shape $.anyOf[1] (Value): {@link AddressRequest}. A complete postal address.
     * State and postal_code are required for US addresses and optional for other countries. Send
     * null or omit line2, state, and postal_code when the address has none. Shape $.anyOf[2]
     * (Value): null.
     */
    "remit_to_address"?: ((AddressRequest) | (null));
    /**
     * Shape $ (Value): string or null. Limited to 255 characters (Unicode code points), counted
     * before normalization. Send null to clear it. Format: email. minLength: 1. maxLength: 255.
     */
    "reply_to_email"?: string | null;
    /**
     * Shape $ (Value): string or null. Limited to 255 characters (Unicode code points), counted
     * before normalization. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "timezone"?: string | null;
};
/**
 * Shape $ (Value): {@link InvoiceSettingsPatchInput}. Changes to a merchant's invoice settings.
 * Send only the fields to change, and send null on a nullable field to clear it. minProperties: 1.
 */
export type InvoiceSettingsPatchInput = {
    /**
     * Shape $ (Value): {@link InvoiceAutopayRetryPolicyInput} or null. Replaced as a whole: send
     * every field you want to keep. Shape $.anyOf[1] (Value): {@link
     * InvoiceAutopayRetryPolicyInput}. When to retry a failed automatic invoice payment, as a list
     * of day offsets. Shape $.anyOf[2] (Value): null.
     */
    "autopay_retry_policy"?: ((InvoiceAutopayRetryPolicyInput) | (null));
    /**
     * Shape $ (Value): string or null. Up to 12 ASCII letters, digits, underscores, or hyphens.
     * Counted before normalization. Send null to clear it. minLength: 1. maxLength: 12. pattern:
     * ^[A-Za-z0-9_-]*$.
     */
    "credit_note_number_prefix"?: string | null;
    /**
     * Shape $ (Value): string or null. Value enum: "buyer_initiated", "automatic", "external",
     * null.
     */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null;
    /**
     * Shape $ (Value): string or null. Limited to 4096 characters (Unicode code points), counted
     * before normalization. Send null to clear it. minLength: 1. maxLength: 4096.
     */
    "default_footer"?: string | null;
    /**
     * Shape $ (Value): string or null. Send null to clear it. minLength: 1. pattern:
     * ^ipt_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Limited to 4096 characters (Unicode code points), counted
     * before normalization. Send null to clear it. minLength: 1. maxLength: 4096.
     */
    "default_memo"?: string | null;
    /**
     * Shape $ (Value): string or null. Up to 12 ASCII letters, digits, underscores, or hyphens.
     * Counted before normalization. Send null to clear it. minLength: 1. maxLength: 12. pattern:
     * ^[A-Za-z0-9_-]*$.
     */
    "invoice_number_prefix"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicyInput} or null. Replaced as a whole: send every
     * field you want to keep. Shape $.anyOf[1] (Value): {@link InvoicePaymentPolicyInput}. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison. Shape $.anyOf[2] (Value): null.
     */
    "payment_policy"?: ((InvoicePaymentPolicyInput) | (null));
    /**
     * Shape $ (Value): {@link InvoiceReminderPolicyInput} or null. Replaced as a whole: send every
     * field you want to keep. Shape $.anyOf[1] (Value): {@link InvoiceReminderPolicyInput}. Rules
     * for automatic invoice reminders, each sent a set number of days before or after the due
     * date. Shape $.anyOf[2] (Value): null.
     */
    "reminder_policy"?: ((InvoiceReminderPolicyInput) | (null));
    /**
     * Shape $ (Value): {@link AddressRequestInput} or null. Replaced as a whole: send every field
     * you want to keep. Shape $.anyOf[1] (Value): {@link AddressRequestInput}. A complete postal
     * address. State and postal_code are required for US addresses and optional for other
     * countries. Send null or omit line2, state, and postal_code when the address has none. Shape
     * $.anyOf[2] (Value): null.
     */
    "remit_to_address"?: ((AddressRequestInput) | (null));
    /**
     * Shape $ (Value): string or null. Limited to 255 characters (Unicode code points), counted
     * before normalization. Send null to clear it. Format: email. minLength: 1. maxLength: 255.
     */
    "reply_to_email"?: string | null;
    /**
     * Shape $ (Value): string or null. Limited to 255 characters (Unicode code points), counted
     * before normalization. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "timezone"?: string | null;
};
