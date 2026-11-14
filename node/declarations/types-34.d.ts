import type { MerchantWebhookEnvelope } from './types-38.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { WebhookInvoice } from './types-70.js';
import type { Invoice, InvoiceAutopayRetryPolicy, InvoiceAutopayRetryPolicyInput } from './types-31.js';
import type { ResponseMeta } from './types-54.js';
import type { MoneyValue, MoneyValueInput, OrderCharge } from './types-39.js';
import type { Address, AddressRequest, AddressRequestInput, AssessInvoiceLateFeeRequestInput } from './types-0.js';
import type { InvoicePaymentPolicy, InvoiceReminderPolicy, InvoicePaymentPolicyRequestInput } from './types-33.js';
import type { InvoiceDiscount, InvoiceLineItem } from './types-32.js';
import type { OrderTaxExemption } from './types-41.js';
import type { TaxBreakdown } from './types-64.js';
import type { TaxCurrencyConversion, TaxIdentity, TaxReverseCharge } from './types-65.js';
import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams } from './types-24.js';
import type { CollectInvoiceRequestInput } from './types-7.js';
import type { CreateInvoiceManualPaymentRequestInput, CreateInvoiceRequestInput } from './types-10.js';
import type { IssueInvoiceRequestInput } from './types-35.js';
import type { CustomersListAddressesParams } from './types-16.js';
import type { CreditNotesListAllocationsParams } from './types-15.js';
/**
 * Rules for automatic invoice reminders, each sent a set number of days before or after the due
 * date.
 */
export type InvoiceReminderPolicyInput = {
    /**
     * Reminder dates relative to the invoice due date. At most 20 rules; [] disables scheduled
     * reminders. maxItems: 20. [] (Value): {@link InvoiceReminderRuleInput}. One reminder in an
     * invoice reminder policy. `days_from_due` sets when it is sent: negative values are days
     * before the due date, positive values days after.
     */
    "rules": Array<InvoiceReminderRuleInput>;
};
/**
 * One reminder in an invoice reminder policy. `days_from_due` sets when it is sent: negative
 * values are days before the due date, positive values days after.
 */
export type InvoiceReminderRule = {
    /**
     * Calendar days from the due date in the invoice timezone. Negative values send before it,
     * zero sends on it, and positive values send after it. Format: int32. minimum: -90. maximum:
     * 365.
     */
    "days_from_due": number;
};
/**
 * One reminder in an invoice reminder policy. `days_from_due` sets when it is sent: negative
 * values are days before the due date, positive values days after.
 */
export type InvoiceReminderRuleInput = InvoiceReminderRule;
export type InvoiceReopenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.reopened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.reopened";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.reopened";
});
/**
 * The `invoice.reopened` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceReopenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.reopened". */
    "event_type"?: "invoice.reopened";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
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
});
/**
 * The `invoice.reopened` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceReopenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.reopened". */
    "event_type"?: "invoice.reopened";
});
/** A response containing `Invoice` data. */
export type InvoiceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A bill issued to a
     * customer.
     */
    "data": Invoice;
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
 * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total,
 * or the remaining balance.
 */
export type InvoiceScheduleAmountSpecification = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "fixed", "percentage", "remaining_balance". */
    "type": "fixed" | "percentage" | "remaining_balance" | (string & {});
})
    & ((Exclude<InvoiceScheduleAmountSpecificationFixed & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationPercentage & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationRemainingBalance & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `fixed` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationFixed = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValue;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Value enum: "fixed". */
    "type": "fixed" | (string & {});
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValue;
}));
/** The `fixed` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationFixedRequestInput = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** Value enum: "fixed". */
    "type": "fixed";
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValueInput;
})
    & ({
    "percent"?: never;
}));
/** The `percentage` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationPercentage = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent": number;
    /** How the entry's amount is set. Value enum: "percentage". */
    "type": "percentage" | (string & {});
})
    & (({
    /** Value enum: "percentage". */
    "type": "percentage" | (string & {});
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent": number;
}));
/** The `percentage` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationPercentageRequestInput = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent": number;
    /** How the entry's amount is set. Value enum: "percentage". */
    "type": "percentage";
})
    & (({
    /** Value enum: "percentage". */
    "type": "percentage";
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent": number;
})
    & ({
    "amount_money"?: never;
}));
/** The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationRemainingBalance = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "remaining_balance". */
    "type": "remaining_balance" | (string & {});
})
    & (({
    /** Value enum: "remaining_balance". */
    "type": "remaining_balance" | (string & {});
}));
/** The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "remaining_balance". */
    "type": "remaining_balance";
})
    & (({
    /** Value enum: "remaining_balance". */
    "type": "remaining_balance";
})
    & (({
    "amount_money"?: never;
}) & ({
    "percent"?: never;
})));
/**
 * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total,
 * or the remaining balance.
 */
export type InvoiceScheduleAmountSpecificationRequestInput = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with
     * up to four decimal places. Required with percentage and not accepted with any other type.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "fixed", "percentage", "remaining_balance". */
    "type": "fixed" | "percentage" | "remaining_balance";
})
    & ((Exclude<InvoiceScheduleAmountSpecificationFixedRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationPercentageRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput & object, readonly unknown[]>));
/**
 * When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice
 * due date.
 */
export type InvoiceScheduleDue = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent).
     * Collectible from the start of this date, overdue only after it ends. Always present for
     * date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the
     * issue date or invoice due_date. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due date is set. Value enum: "at_issue", "date", "invoice_due_date". */
    "type": "at_issue" | "date" | "invoice_due_date" | (string & {});
})
    & ((Exclude<InvoiceScheduleDueAtIssue & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueDate & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueInvoiceDueDate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `at_issue` variant of `InvoiceScheduleDue`. */
export type InvoiceScheduleDueAtIssue = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent).
     * Collectible from the start of this date, overdue only after it ends. Always present for
     * date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the
     * issue date or invoice due_date. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due date is set. Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
})
    & ({
    /** Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
});
/** The `date` variant of `InvoiceScheduleDue`. */
export type InvoiceScheduleDueDate = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent).
     * Collectible from the start of this date, overdue only after it ends. Always present for
     * date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the
     * issue date or invoice due_date. Format: date. Example: "2026-08-02".
     */
    "due_date": string;
    /** How the entry's due date is set. Value enum: "date". */
    "type": "date" | (string & {});
})
    & ({
    /** Value enum: "date". */
    "type": "date" | (string & {});
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent).
     * Collectible from the start of this date, overdue only after it ends. Always present for
     * date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the
     * issue date or invoice due_date. Format: date. Example: "2026-08-02".
     */
    "due_date": string;
});
/** The `invoice_due_date` variant of `InvoiceScheduleDue`. */
export type InvoiceScheduleDueInvoiceDueDate = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent).
     * Collectible from the start of this date, overdue only after it ends. Always present for
     * date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the
     * issue date or invoice due_date. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due date is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
})
    & ({
    /** Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
});
/**
 * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
 * issue, on a set date, or on the invoice due date.
 */
export type InvoiceScheduleDueWrite = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "at_issue", "date", "invoice_due_date". */
    "type": "at_issue" | "date" | "invoice_due_date" | (string & {});
})
    & ((Exclude<InvoiceScheduleDueWriteAtIssue & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueDate & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteInvoiceDueDate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `at_issue` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteAtIssue = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
})
    & (({
    /** Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
}));
/** The `at_issue` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteAtIssueInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "at_issue". */
    "type": "at_issue";
})
    & (({
    /** Value enum: "at_issue". */
    "type": "at_issue";
}) & ({
    "due_date"?: never;
}));
/** The `date` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteDateInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date": string;
    /** How the entry's due time is set. Value enum: "date". */
    "type": "date";
})
    & ({
    /** Value enum: "date". */
    "type": "date";
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date": string;
});
/**
 * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
 * issue, on a set date, or on the invoice due date.
 */
export type InvoiceScheduleDueWriteInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "at_issue", "date", "invoice_due_date". */
    "type": "at_issue" | "date" | "invoice_due_date";
})
    & ((Exclude<InvoiceScheduleDueWriteAtIssueInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteDateInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteInvoiceDueDateInput & object, readonly unknown[]>));
/** The `invoice_due_date` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteInvoiceDueDate = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
})
    & (({
    /** Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
}));
/** The `invoice_due_date` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteInvoiceDueDateInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date";
})
    & (({
    /** Value enum: "invoice_due_date". */
    "type": "invoice_due_date";
})
    & ({
    "due_date"?: never;
}));
/**
 * One payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
 * its due time, amounts, and status.
 */
export type InvoiceScheduleEntry = {
    /**
     * How the entry's amount is set: a fixed amount, a percent of the invoice total, or the
     * remaining balance. How much a payment schedule entry collects: a fixed amount, a percentage
     * of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * Credit note credit allocated to this entry, minus reversed allocations. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * When the entry is due. When a payment schedule entry on an invoice is due: at issue, on a
     * set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDue;
    /**
     * Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry.
     * Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id": string;
    /** The entry's role in the schedule. Value enum: "deposit", "installment", "balance". */
    "kind": "deposit" | "installment" | "balance" | (string & {});
    /**
     * What is still owed on this entry, including its unpaid late fee, never below zero. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Payments applied to this entry, minus reversed payments, including payments toward its late
     * fee. Dispute losses don't reduce it. It can exceed total_money when the entry carries a late
     * fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * The entry's payment status, computed when the invoice is read. It follows the entry's
     * balance and due time, not the invoice's status. Value enum: "pending", "due",
     * "partially_satisfied", "satisfied", "overdue".
     */
    "status": "pending" | "due" | "partially_satisfied" | "satisfied" | "overdue" | (string & {});
    /**
     * The entry's share of the invoice total, resolved from amount_specification against
     * pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late
     * fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * The part of this entry written off when the invoice was marked uncollectible, including its
     * unpaid late fee. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "written_off_money": MoneyValue;
};
/**
 * One payment schedule entry you supply when creating or updating an invoice. Set its kind, how
 * much it collects, and when it is due.
 */
export type InvoiceScheduleEntryWrite = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "deposit", "installment", "balance". */
    "kind": "deposit" | "installment" | "balance" | (string & {});
})
    & ((Exclude<InvoiceScheduleEntryWriteDeposit & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteInstallment & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteBalance & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `balance` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteBalance = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "balance". */
    "kind": "balance" | (string & {});
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValue}. The amount to
     * collect, in the invoice currency. Required with fixed and not accepted with any other type.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. percent
     * (Optional): number. Percentage of pricing_amounts.total_money to collect, greater than 0 and
     * at most 100, with up to four decimal places. Required with percentage and not accepted with
     * any other type. multipleOf: 0.0001. type (Required): string. How the entry's amount is set.
     * Value enum: "remaining_balance". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalance}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecification & object, readonly unknown[]>)
        & ({
        /** Value enum: "remaining_balance". */
        "type"?: "remaining_balance" | (string & {});
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "date", "invoice_due_date". oneOf[1]
     * (Value): {@link InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of
     * `InvoiceScheduleDueWrite`. oneOf[2] (Value): {@link InvoiceScheduleDueDate}. The `date`
     * variant of `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDate}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWrite & object, readonly unknown[]>)
        & ({
        /** Value enum: "invoice_due_date", "date". */
        "type"?: "invoice_due_date" | "date" | (string & {});
    });
    /** Value enum: "balance". */
    "kind"?: "balance" | (string & {});
});
/** The `balance` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteBalanceInput = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationRequestInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "balance". */
    "kind": "balance";
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValueInput}. The
     * amount to collect, in the invoice currency. Required with fixed and not accepted with any
     * other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. percent (Optional): number. Percentage of pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001. type (Required): string. How the
     * entry's amount is set. Value enum: "remaining_balance". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixedRequestInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageRequestInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput}. The `remaining_balance`
     * variant of `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationRequestInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "remaining_balance". */
        "type"?: "remaining_balance";
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "date", "invoice_due_date". oneOf[1]
     * (Value): {@link InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of
     * `InvoiceScheduleDueWrite`. oneOf[2] (Value): {@link InvoiceScheduleDueWriteDateInput}. The
     * `date` variant of `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWriteInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "invoice_due_date", "date". */
        "type"?: "invoice_due_date" | "date";
    });
    /** Value enum: "balance". */
    "kind"?: "balance";
});
/** The `deposit` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteDeposit = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "deposit". */
    "kind": "deposit" | (string & {});
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValue}. The amount to
     * collect, in the invoice currency. Required with fixed and not accepted with any other type.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. percent
     * (Optional): number. Percentage of pricing_amounts.total_money to collect, greater than 0 and
     * at most 100, with up to four decimal places. Required with percentage and not accepted with
     * any other type. multipleOf: 0.0001. type (Required): string. How the entry's amount is set.
     * Value enum: "fixed", "percentage". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalance}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecification & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage" | (string & {});
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "at_issue", "date". oneOf[1] (Value):
     * {@link InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of `InvoiceScheduleDueWrite`.
     * oneOf[2] (Value): {@link InvoiceScheduleDueDate}. The `date` variant of
     * `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link InvoiceScheduleDueWriteInvoiceDueDate}.
     * The `invoice_due_date` variant of `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWrite & object, readonly unknown[]>)
        & ({
        /** Value enum: "at_issue", "date". */
        "type"?: "at_issue" | "date" | (string & {});
    });
    /** Value enum: "deposit". */
    "kind"?: "deposit" | (string & {});
});
/** The `deposit` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteDepositInput = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationRequestInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "deposit". */
    "kind": "deposit";
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValueInput}. The
     * amount to collect, in the invoice currency. Required with fixed and not accepted with any
     * other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. percent (Optional): number. Percentage of pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001. type (Required): string. How the
     * entry's amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixedRequestInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageRequestInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput}. The `remaining_balance`
     * variant of `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationRequestInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage";
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "at_issue", "date". oneOf[1] (Value):
     * {@link InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of
     * `InvoiceScheduleDueWrite`. oneOf[2] (Value): {@link InvoiceScheduleDueWriteDateInput}. The
     * `date` variant of `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWriteInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "at_issue", "date". */
        "type"?: "at_issue" | "date";
    });
    /** Value enum: "deposit". */
    "kind"?: "deposit";
});
/**
 * One payment schedule entry you supply when creating or updating an invoice. Set its kind, how
 * much it collects, and when it is due.
 */
export type InvoiceScheduleEntryWriteInput = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationRequestInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "deposit", "installment", "balance". */
    "kind": "deposit" | "installment" | "balance";
})
    & ((Exclude<InvoiceScheduleEntryWriteDepositInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteInstallmentInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteBalanceInput & object, readonly unknown[]>));
/** The `installment` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteInstallment = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "installment". */
    "kind": "installment" | (string & {});
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValue}. The amount to
     * collect, in the invoice currency. Required with fixed and not accepted with any other type.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. percent
     * (Optional): number. Percentage of pricing_amounts.total_money to collect, greater than 0 and
     * at most 100, with up to four decimal places. Required with percentage and not accepted with
     * any other type. multipleOf: 0.0001. type (Required): string. How the entry's amount is set.
     * Value enum: "fixed", "percentage". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalance}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecification & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage" | (string & {});
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "date". oneOf[1] (Value): {@link
     * InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of `InvoiceScheduleDueWrite`.
     * oneOf[2] (Value): {@link InvoiceScheduleDueDate}. The `date` variant of
     * `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link InvoiceScheduleDueWriteInvoiceDueDate}.
     * The `invoice_due_date` variant of `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWrite & object, readonly unknown[]>)
        & ({
        /** Value enum: "date". */
        "type"?: "date" | (string & {});
    });
    /** Value enum: "installment". */
    "kind"?: "installment" | (string & {});
});
/** The `installment` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteInstallmentInput = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationRequestInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "installment". */
    "kind": "installment";
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValueInput}. The
     * amount to collect, in the invoice currency. Required with fixed and not accepted with any
     * other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. percent (Optional): number. Percentage of pricing_amounts.total_money to collect,
     * greater than 0 and at most 100, with up to four decimal places. Required with percentage and
     * not accepted with any other type. multipleOf: 0.0001. type (Required): string. How the
     * entry's amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixedRequestInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageRequestInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput}. The `remaining_balance`
     * variant of `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationRequestInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage";
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "date". oneOf[1] (Value): {@link
     * InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of `InvoiceScheduleDueWrite`.
     * oneOf[2] (Value): {@link InvoiceScheduleDueWriteDateInput}. The `date` variant of
     * `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWriteInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "date". */
        "type"?: "date";
    });
    /** Value enum: "installment". */
    "kind"?: "installment";
});
export type InvoiceSentEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.sent";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.sent";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.sent";
});
/**
 * The `invoice.sent` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type InvoiceSentInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.sent". */
    "event_type"?: "invoice.sent";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
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
});
/**
 * The `invoice.sent` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceSentMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.sent". */
    "event_type"?: "invoice.sent";
});
/**
 * Merchant defaults for invoices, including numbering prefixes, default memo and footer,
 * collection mode, reminders, and autopay retries.
 */
export type InvoiceSettings = {
    /**
     * Replaced as a whole: send every field you want to keep. When to retry a failed automatic
     * invoice payment, as a list of day offsets.
     */
    "autopay_retry_policy"?: InvoiceAutopayRetryPolicy;
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization.
     * maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "credit_note_number_prefix"?: string;
    /**
     * How new invoices that ask for `merchant_default` collection are collected. Defaults to
     * `buyer_initiated`. Value enum: "buyer_initiated", "automatic", "external".
     */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | (string & {});
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. maxLength:
     * 4096.
     */
    "default_footer"?: string;
    /**
     * ID of the invoice payment term that applies to your invoices created with `payment_due.type`
     * set to `merchant_default`. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. maxLength:
     * 4096.
     */
    "default_memo"?: string;
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization.
     * maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "invoice_number_prefix"?: string;
    /**
     * Replaced as a whole: send every field you want to keep. Which payment options an invoice
     * accepts, any per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
    /**
     * Replaced as a whole: send every field you want to keep. Rules for automatic invoice
     * reminders, each sent a set number of days before or after the due date.
     */
    "reminder_policy"?: InvoiceReminderPolicy;
    /**
     * Replaced as a whole: send every field you want to keep. A postal address. Every address has
     * country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "remit_to_address"?: Address;
    /**
     * Limited to 255 characters (Unicode code points), counted before normalization. Format:
     * email. maxLength: 255. Example: "buyer@example.com".
     */
    "reply_to_email"?: string;
};
/**
 * Changes to a merchant's invoice settings. Send only the fields to change, and send null on a
 * nullable field to clear it. minProperties: 1.
 */
export type InvoiceSettingsPatch = {
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoiceAutopayRetryPolicy}. When to retry a failed automatic invoice payment, as a list of
     * day offsets. anyOf[2] (Value): null.
     */
    "autopay_retry_policy"?: ((InvoiceAutopayRetryPolicy) | (null));
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send
     * null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "credit_note_number_prefix"?: string | null;
    /**
     * How new invoices that ask for `merchant_default` collection are collected. Defaults to
     * `buyer_initiated`. Value enum: "buyer_initiated", "automatic", "external", null.
     */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null | (string & {}) | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_footer"?: string | null;
    /**
     * ID of the invoice payment term that applies to your invoices created with `payment_due.type`
     * set to `merchant_default`. minLength: 1. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_memo"?: string | null;
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send
     * null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "invoice_number_prefix"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoicePaymentPolicy}. Which payment options an invoice accepts, any per-option total
     * limits, and whether to show a cost comparison. anyOf[2] (Value): null.
     */
    "payment_policy"?: ((InvoicePaymentPolicy) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoiceReminderPolicy}. Rules for automatic invoice reminders, each sent a set number of
     * days before or after the due date. anyOf[2] (Value): null.
     */
    "reminder_policy"?: ((InvoiceReminderPolicy) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * AddressRequest}. A complete postal address. State and postal_code are required for US
     * addresses and optional for other countries. Send null or omit line2, state, and postal_code
     * when the address has none. anyOf[2] (Value): null.
     */
    "remit_to_address"?: ((AddressRequest) | (null));
    /**
     * Limited to 255 characters (Unicode code points), counted before normalization. Send null to
     * clear it. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "reply_to_email"?: string | null;
};
/**
 * Changes to a merchant's invoice settings. Send only the fields to change, and send null on a
 * nullable field to clear it. minProperties: 1.
 */
export type InvoiceSettingsPatchInput = {
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoiceAutopayRetryPolicyInput}. When to retry a failed automatic invoice payment, as a list
     * of day offsets. anyOf[2] (Value): null.
     */
    "autopay_retry_policy"?: ((InvoiceAutopayRetryPolicyInput) | (null));
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send
     * null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "credit_note_number_prefix"?: string | null;
    /**
     * How new invoices that ask for `merchant_default` collection are collected. Defaults to
     * `buyer_initiated`. Value enum: "buyer_initiated", "automatic", "external", null.
     */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_footer"?: string | null;
    /**
     * ID of the invoice payment term that applies to your invoices created with `payment_due.type`
     * set to `merchant_default`. minLength: 1. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_memo"?: string | null;
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send
     * null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "invoice_number_prefix"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoicePaymentPolicyRequestInput}. Which payment options an invoice accepts, any per-option
     * total limits, and whether to show a cost comparison. anyOf[2] (Value): null.
     */
    "payment_policy"?: ((InvoicePaymentPolicyRequestInput) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoiceReminderPolicyInput}. Rules for automatic invoice reminders, each sent a set number
     * of days before or after the due date. anyOf[2] (Value): null.
     */
    "reminder_policy"?: ((InvoiceReminderPolicyInput) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * AddressRequestInput}. A complete postal address. State and postal_code are required for US
     * addresses and optional for other countries. Send null or omit line2, state, and postal_code
     * when the address has none. anyOf[2] (Value): null.
     */
    "remit_to_address"?: ((AddressRequestInput) | (null));
    /**
     * Limited to 255 characters (Unicode code points), counted before normalization. Send null to
     * clear it. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "reply_to_email"?: string | null;
};
/**
 * A frozen copy of an issued invoice's content, including line items, charges, discounts, tax
 * identities, and pricing amounts.
 */
export type InvoiceSnapshot = {
    /**
     * Billing address captured on the invoice. Kept after the customer is deleted, because an
     * issued invoice must keep it. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "billing_address"?: Address;
    /** The backing order's buyer note, captured on the invoice. */
    "buyer_note"?: string;
    /**
     * Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue
     * freezes the identity, which later profile edits and customer deletion preserve. `null` when
     * no buyer tax identity is available, including after customer deletion while the invoice is a
     * draft. anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
     * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the
     * tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
     * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display
     * order; replacing the array requires the parent's expected_version. Existing entries retain
     * their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2]
     * (Value): null.
     */
    "buyer_tax_identity": ((TaxIdentity) | (null));
    /**
     * The backing order's service charges, frozen at issue. [] (Value): {@link OrderCharge}. An
     * additional charge applied to an order.
     */
    "charges"?: Array<OrderCharge>;
    /**
     * Buyer name captured on the invoice. Kept after the customer is deleted, because an issued
     * invoice must keep it.
     */
    "customer_display_name"?: string;
    /** Buyer email captured on the invoice. */
    "customer_email"?: string;
    /**
     * The discounts applied to the backing order, frozen at issue. [] (Value): {@link
     * InvoiceDiscount}. A discount applied to an invoice, with its source, the discount amount,
     * the amount actually applied, and any promotion.
     */
    "discounts"?: Array<InvoiceDiscount>;
    /**
     * The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads
     * leave it out.
     */
    "internal_note"?: string;
    /**
     * The billed line items, frozen at issue. A draft previews the backing order's lines. []
     * (Value): {@link InvoiceLineItem}. A line item on an invoice.
     */
    "line_items"?: Array<InvoiceLineItem>;
    /**
     * Your business name as shown on the invoice. A draft shows your current name; issue freezes
     * it.
     */
    "merchant_display_name"?: string;
    /**
     * The tip requested on the backing order, frozen at issue. Absent when none was requested. A
     * tip requested on an invoice, set as a fixed amount or a percentage, with an optional name
     * and description.
     */
    "requested_tip"?: InvoiceTip;
    /**
     * Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no seller tax identity was captured. anyOf[1] (Value): {@link
     * TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Flint
     * does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ
     * destination to its tax provider, which can apply a reverse charge; other IDs do not change
     * tax treatment. Tax IDs are an owned collection in display order; replacing the array
     * requires the parent's expected_version. Existing entries retain their document_tax_id; omit
     * an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     */
    "seller_tax_identity": ((TaxIdentity) | (null));
    /**
     * Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows;
     * issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax
     * produces these rows. Automatic tax doesn't, so an automatic-tax invoice reports its tax in
     * pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum
     * to pricing_amounts.tax_money, and rows with price_mode inclusive sum to
     * pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on
     * InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows
     * apply. Some older external-tax invoices have no frozen rows. [] (Value): {@link
     * TaxBreakdown}. The tax calculated for one jurisdiction on an order, line item, or charge,
     * with the taxable amount, rate or flat amount, and tax.
     */
    "tax_breakdowns": Array<TaxBreakdown>;
    /**
     * VAT stated in the currency of the country that charges it, one entry per currency, frozen at
     * issue. EU member states require their national currency and the UK requires sterling. Each
     * entry gives the converted VAT, the converted taxable amount, and the rate with its source
     * and date. Present for VAT above zero charged by an EU member state or the UK; always []
     * otherwise, including reverse charge, invoices in that currency already, and invoices issued
     * before conversions were recorded. The invoice PDF prints the same figures. [] (Value):
     * {@link TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
     * country whose VAT is charged.
     */
    "tax_currency_conversions": Array<TaxCurrencyConversion>;
    /**
     * Exemption assessment captured on this invoice. A draft previews the backing order's
     * assessment; issue freezes it. Omitted when no assessment was recorded, including on older
     * invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply
     * to the same invoice: when an exemption applies, Flint calculates no tax, so
     * tax_reverse_charge is null. The exemption assessment recorded for an order or invoice,
     * frozen when tax commits. Fields absent from historical snapshots stay omitted.
     */
    "tax_exemption"?: OrderTaxExemption;
    /**
     * The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the
     * tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse
     * charge applies, including when an exemption applies: Flint calculates no tax for an exempt
     * sale, so the two never appear on the same invoice. Drafts preview the order's current value.
     * anyOf[1] (Value): {@link TaxReverseCharge}. The buyer accounts for the tax under the reverse
     * charge. Rows that carry it have `taxability_reason` `reverse_charge` and no tax. anyOf[2]
     * (Value): null.
     */
    "tax_reverse_charge"?: ((TaxReverseCharge) | (null));
};
/**
 * A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and
 * description.
 */
export type InvoiceTip = {
    /**
     * Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Optional description that stays on the tip for your reporting. */
    "description"?: string;
    /** Optional name that stays on the tip for your reporting. */
    "name"?: string;
    /**
     * Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
};
export type InvoiceUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.updated";
});
/**
 * The `invoice.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.updated". */
    "event_type"?: "invoice.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
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
});
/**
 * The `invoice.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.updated". */
    "event_type"?: "invoice.updated";
});
export type InvoiceVoidedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.voided";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.voided";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.voided";
});
/**
 * The `invoice.voided` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceVoidedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.voided". */
    "event_type"?: "invoice.voided";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
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
});
/**
 * The `invoice.voided` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceVoidedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.voided". */
    "event_type"?: "invoice.voided";
});
export type InvoicesCancelPaymentAttemptParams = DisputesAcceptParams;
export type InvoicesCollectParams = (InputValue<CollectInvoiceRequestInput>
    | {
    "invoice_schedule_entry_id"?: never;
    "payment_method_id"?: never;
})
    & {
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
export type InvoicesCreateLateFeeParams = (InputValue<AssessInvoiceLateFeeRequestInput> | {
    "invoice_schedule_entry_id"?: never;
})
    & {
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
export type InvoicesCreateManualPaymentParams = (InputValue<CreateInvoiceManualPaymentRequestInput>)
    & {
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
export type InvoicesCreateParams = (CreateInvoiceRequestInput)
    & {
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
export type InvoicesGetManualPaymentParams = DisputesAcceptParams;
export type InvoicesGetPDFParams = DisputesAcceptParams;
export type InvoicesGetPDFResponse = Uint8Array;
export type InvoicesGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, order. Expansion
     * requires commerce.invoices.read plus the read scope for each expanded resource. Limits: at
     * most 10 unique expand paths per request. [] enum: "customer", "order". Value enum:
     * "customer", "order". anyOf[1] (Value): Array of string. [] enum: "customer", "order".
     * anyOf[1][] (Value): string. Value enum: "customer", "order". anyOf[2] (Value): string. Value
     * enum: "customer", "order".
     */
    "expand"?: InputValue<("customer" | "order") | readonly ("customer" | "order")[]>;
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
export type InvoicesGetPaymentAttemptParams = DisputesAcceptParams;
export type InvoicesIssueParams = (InputValue<IssueInvoiceRequestInput>
    | {
    "delivery_mode"?: never;
    "expected_version"?: never;
})
    & {
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
export type InvoicesListActivitiesParams = {
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
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by activity_type. The output-only catch-all other is not accepted. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "draft_created", "issued",
     * "sent", "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started",
     * "payment_applied", "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded",
     * "voided", "token_regenerated", "collection_blocked", "collection_block_resolved", "updated",
     * "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due",
     * "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited". Value enum:
     * "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed",
     * "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "draft_created", "issued", "sent", "delivery_sent", "reminder_sent",
     * "viewed", "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited". anyOf[1][] (Value): string. Value enum:
     * "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed",
     * "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited". anyOf[2] (Value): string. Value enum:
     * "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed",
     * "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited".
     */
    "activity_type"?: InputValue<("draft_created"
        | "issued"
        | "sent"
        | "delivery_sent"
        | "reminder_sent"
        | "viewed"
        | "payment_attempt_started"
        | "payment_applied"
        | "manual_payment_recorded"
        | "manual_payment_reversed"
        | "refund_succeeded"
        | "voided"
        | "token_regenerated"
        | "collection_blocked"
        | "collection_block_resolved"
        | "updated"
        | "marked_uncollectible"
        | "payment_processing"
        | "issue_failed"
        | "overdue"
        | "reminder_due"
        | "late_fee_due"
        | "late_fee_assessed"
        | "late_fee_waived"
        | "credited")
        | readonly ("draft_created"
        | "issued"
        | "sent"
        | "delivery_sent"
        | "reminder_sent"
        | "viewed"
        | "payment_attempt_started"
        | "payment_applied"
        | "manual_payment_recorded"
        | "manual_payment_reversed"
        | "refund_succeeded"
        | "voided"
        | "token_regenerated"
        | "collection_blocked"
        | "collection_block_resolved"
        | "updated"
        | "marked_uncollectible"
        | "payment_processing"
        | "issue_failed"
        | "overdue"
        | "reminder_due"
        | "late_fee_due"
        | "late_fee_assessed"
        | "late_fee_waived"
        | "credited")[]>;
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
export type InvoicesListDeliveryAttemptsParams = CustomersListAddressesParams;
export type InvoicesListLateFeesParams = CustomersListAddressesParams;
export type InvoicesListManualPaymentsParams = CreditNotesListAllocationsParams;
