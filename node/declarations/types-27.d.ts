import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { InvoiceLateFeePolicy, Invoice } from './types-26.js';
import type { ResponseMeta } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CreateInvoicePaymentTermRequestInput } from './types-7.js';
import type { UpdateInvoicePaymentTermRequestInput } from './types-48.js';
/**
 * Shape $ (Value): {@link InvoicePaymentDue}. The invoice due-date policy resolved at write time.
 * The object can be sent back when updating a draft.
 */
export type InvoicePaymentDue = ({
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "due_at"?: string;
    /** Shape $ (Value): string. */
    "invoice_payment_term_id"?: string;
    /** Shape $ (Value): string.  Value enum: "none", "date", "payment_terms". */
    "type": "none" | "date" | "payment_terms" | (string & {});
})
    & ((Exclude<InvoicePaymentDueNone & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueDate & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDuePaymentTerms & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Shape $ (Value): {@link InvoicePaymentDueDate}. The `date` variant of `InvoicePaymentDue`. */
export type InvoicePaymentDueDate = ({
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "due_at": string;
    /** Shape $ (Value): string. */
    "invoice_payment_term_id"?: string;
    /** Shape $ (Value): string.  Value enum: "date". */
    "type": "date" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "date". */
    "type"?: "date" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "due_at": string;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentDueInputCustomerDefault}. The `customer_default` variant
 * of `InvoicePaymentDueInput`.
 */
export type InvoicePaymentDueInputCustomerDefault = ({
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "due_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. merchant_default and customer_default resolve at write time. Reads
     * return the resolved type. Sending payment_terms on a draft snapshots the term current
     * revision again. Value enum: "customer_default".
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "due_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. merchant_default and customer_default resolve at write time. Reads
     * return the resolved type. Sending payment_terms on a draft snapshots the term current
     * revision again. Value enum: "customer_default".
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "due_at": string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. merchant_default and customer_default resolve at write time. Reads
     * return the resolved type. Sending payment_terms on a draft snapshots the term current
     * revision again. Value enum: "date".
     */
    "type": "date";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "date". */
    "type"?: "date";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "due_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. merchant_default and customer_default resolve at write time. Reads
     * return the resolved type. Sending payment_terms on a draft snapshots the term current
     * revision again. Value enum: "merchant_default".
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "due_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. merchant_default and customer_default resolve at write time. Reads
     * return the resolved type. Sending payment_terms on a draft snapshots the term current
     * revision again. Value enum: "merchant_default".
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "due_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. merchant_default and customer_default resolve at write time. Reads
     * return the resolved type. Sending payment_terms on a draft snapshots the term current
     * revision again. Value enum: "none".
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "due_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_payment_term_id": string;
    /**
     * Shape $ (Value): string. merchant_default and customer_default resolve at write time. Reads
     * return the resolved type. Sending payment_terms on a draft snapshots the term current
     * revision again. Value enum: "payment_terms".
     */
    "type": "payment_terms";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "payment_terms". */
    "type"?: "payment_terms";
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_payment_term_id": string;
})
    & ({
    "due_at"?: never;
}));
/** Shape $ (Value): {@link InvoicePaymentDueNone}. The `none` variant of `InvoicePaymentDue`. */
export type InvoicePaymentDueNone = ({
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "due_at"?: string;
    /** Shape $ (Value): string. */
    "invoice_payment_term_id"?: string;
    /** Shape $ (Value): string.  Value enum: "none". */
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "due_at"?: string;
    /** Shape $ (Value): string. */
    "invoice_payment_term_id": string;
    /** Shape $ (Value): string.  Value enum: "payment_terms". */
    "type": "payment_terms" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "payment_terms". */
    "type"?: "payment_terms" | (string & {});
    /** Shape $ (Value): string. */
    "invoice_payment_term_id": string;
}));
/**
 * Shape $ (Value): {@link InvoicePaymentDueRequest}. When an invoice is due, used when creating or
 * updating an invoice: no due date, a fixed time, payment terms, or a default.
 */
export type InvoicePaymentDueRequest = ({
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "due_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. merchant_default and customer_default resolve at write time. Reads
     * return the resolved type. Sending payment_terms on a draft snapshots the term current
     * revision again. Value enum: "none", "date", "payment_terms", "customer_default",
     * "merchant_default".
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "due_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_payment_term_id"?: string;
    /**
     * Shape $ (Value): string. merchant_default and customer_default resolve at write time. Reads
     * return the resolved type. Sending payment_terms on a draft snapshots the term current
     * revision again. Value enum: "none", "date", "payment_terms", "customer_default",
     * "merchant_default".
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
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "max_total_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit".
     */
    "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
};
/**
 * Shape $ (Value): {@link InvoicePaymentOptionLimitInput}. The largest invoice total allowed for a
 * payment option.
 */
export type InvoicePaymentOptionLimitInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "max_total_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit".
     */
    "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit";
};
/**
 * Shape $ (Value): {@link InvoicePaymentPolicy}. Which payment options an invoice accepts, any
 * per-option total limits, and whether to show a cost comparison.
 */
export type InvoicePaymentPolicy = {
    /**
     * Shape $ (Value): Array of string. maxItems: 5. uniqueItems: true. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Shape $ (Value): Array of {@link InvoicePaymentOptionLimit}. maxItems: 100. Shape $[]
     * (Value): {@link InvoicePaymentOptionLimit}. The largest invoice total allowed for a payment
     * option.
     */
    "payment_option_limits"?: Array<InvoicePaymentOptionLimit>;
    /** Shape $ (Value): boolean. */
    "show_cost_comparison"?: boolean;
};
/**
 * Shape $ (Value): {@link InvoicePaymentPolicyInput}. Which payment options an invoice accepts,
 * any per-option total limits, and whether to show a cost comparison.
 */
export type InvoicePaymentPolicyInput = {
    /**
     * Shape $ (Value): Array of string. maxItems: 5. uniqueItems: true. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Shape $ (Value): Array of {@link InvoicePaymentOptionLimitInput}. maxItems: 100. Shape $[]
     * (Value): {@link InvoicePaymentOptionLimitInput}. The largest invoice total allowed for a
     * payment option.
     */
    "payment_option_limits"?: Array<InvoicePaymentOptionLimitInput>;
    /** Shape $ (Value): boolean. */
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
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "fixed", "percentage", "remaining_balance". */
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
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
/**
 * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationFixedInput}. The `fixed` variant of
 * `InvoiceScheduleAmountSpecification`.
 */
export type InvoiceScheduleAmountSpecificationFixedInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
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
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "fixed", "percentage", "remaining_balance". */
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
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent": number;
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "type": "percentage" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "type": "percentage" | (string & {});
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent": number;
}));
/**
 * Shape $ (Value): {@link InvoiceScheduleAmountSpecificationPercentageInput}. The `percentage`
 * variant of `InvoiceScheduleAmountSpecification`.
 */
export type InvoiceScheduleAmountSpecificationPercentageInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent": number;
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "type": "percentage";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "type": "percentage";
    /** Shape $ (Value): number. multipleOf: 0.0001. */
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
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "remaining_balance". */
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
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "remaining_balance". */
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
    /** Shape $ (Value): string.  Value enum: "at_issue", "date", "invoice_due_date". */
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
    /** Shape $ (Value): string.  Value enum: "at_issue". */
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
    /** Shape $ (Value): string.  Value enum: "date". */
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
    /** Shape $ (Value): string.  Value enum: "invoice_due_date". */
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
    /** Shape $ (Value): string.  Value enum: "at_issue", "date", "invoice_due_date". */
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
    /** Shape $ (Value): string.  Value enum: "at_issue". */
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
    /** Shape $ (Value): string.  Value enum: "at_issue". */
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
    /** Shape $ (Value): string.  Value enum: "date". */
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
    /** Shape $ (Value): string.  Value enum: "at_issue", "date", "invoice_due_date". */
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
    /** Shape $ (Value): string.  Value enum: "invoice_due_date". */
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
    /** Shape $ (Value): string.  Value enum: "invoice_due_date". */
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
