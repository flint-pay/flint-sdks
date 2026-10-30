import type {
    InvoicePaymentTerm,
    InvoicePaymentTermCalculation,
    InvoicePaymentPolicy,
    InvoicePaymentPolicyInput
} from './types-30.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { CreateInvoicePaymentTermRequestInput } from './types-8.js';
import type { InvoiceLateFeePolicy, InvoiceDiscount, InvoiceLineItem } from './types-29.js';
import type { UpdateInvoicePaymentTermRequestInput } from './types-58.js';
import type { Invoice, InvoiceAutopayRetryPolicy, InvoiceAutopayRetryPolicyInput } from './types-28.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { OrderCharge } from './types-36.js';
import type { PricingAmounts } from './types-43.js';
import type { TaxBreakdown } from './types-56.js';
import type { TaxIdentity } from './types-57.js';
/** The `on_receipt` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationOnReceipt = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /** Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /** Value enum: "on_receipt". */
    "type": "on_receipt" | (string & {});
})
    & (({
    /** Value enum: "on_receipt". */
    "type": "on_receipt" | (string & {});
}));
/** The `on_receipt` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationOnReceiptInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /** Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /** Value enum: "on_receipt". */
    "type": "on_receipt";
})
    & (({
    /** Value enum: "on_receipt". */
    "type": "on_receipt";
})
    & (({
    "days"?: never;
}) & ({
    "day"?: never;
})));
/** A page of `InvoicePaymentTerm` objects. */
export type InvoicePaymentTermListResponse = {
    /**  [] (Value): {@link InvoicePaymentTerm}. The payment timing agreed for an invoice. */
    "data": Array<InvoicePaymentTerm>;
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
/** A response containing `InvoicePaymentTerm` data. */
export type InvoicePaymentTermResponse = {
    /** The payment timing agreed for an invoice. */
    "data": InvoicePaymentTerm;
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
export type InvoicePaymentTermsCreateParams = (InputValue<CreateInvoicePaymentTermRequestInput>);
export type InvoicePaymentTermsDeleteParams = {
    /** Optional version last read by the caller. Format: uint32. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type InvoicePaymentTermsGetParams = {};
export type InvoicePaymentTermsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "archived". Value enum: "active", "archived".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "archived". anyOf[1][]
     * (Value): string. Value enum: "active", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across invoice payment term ID, external reference ID, and name. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as ipt_01.
     */
    "query"?: InputValue<string>;
};
/**
 * The payment terms saved on an invoice: the term's name, version, due date calculation, and late
 * fee policy.
 */
export type InvoicePaymentTermsSnapshot = {
    /**
     * How an invoice due date is calculated from payment terms, such as on receipt, net days, or a
     * day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    "invoice_payment_term_id": string;
    /**
     * A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
     * whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    "name": string;
    /** Version of the invoice payment term captured in this snapshot. Format: int32. */
    "version": number;
};
export type InvoicePaymentTermsUpdateParams = (InputValue<UpdateInvoicePaymentTermRequestInput>);
export type InvoiceRefundedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.refunded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "invoice.refunded";
});
/**
 * The `invoice.refunded` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceRefundedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.refunded". */
    "event_type"?: "invoice.refunded";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `invoice.refunded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.refunded". */
    "event_type"?: "invoice.refunded";
});
export type InvoiceReminderDueEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.reminder_due";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.reminder_due";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "invoice.reminder_due";
});
/**
 * The `invoice.reminder_due` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InvoiceReminderDueInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.reminder_due". */
    "event_type"?: "invoice.reminder_due";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `invoice.reminder_due` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceReminderDueMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.reminder_due". */
    "event_type"?: "invoice.reminder_due";
});
/**
 * Rules for automatic invoice reminders, each sent a set number of days before or after the due
 * date.
 */
export type InvoiceReminderPolicy = {
    /**
     * maxItems: 20. [] (Value): {@link InvoiceReminderRule}. One reminder in an invoice reminder
     * policy. `days_from_due` sets when it is sent: negative values are days before the due date,
     * positive values days after.
     */
    "rules": Array<InvoiceReminderRule>;
};
/**
 * Rules for automatic invoice reminders, each sent a set number of days before or after the due
 * date.
 */
export type InvoiceReminderPolicyInput = {
    /**
     * maxItems: 20. [] (Value): {@link InvoiceReminderRuleInput}. One reminder in an invoice
     * reminder policy. `days_from_due` sets when it is sent: negative values are days before the
     * due date, positive values days after.
     */
    "rules": Array<InvoiceReminderRuleInput>;
};
/**
 * One reminder in an invoice reminder policy. `days_from_due` sets when it is sent: negative
 * values are days before the due date, positive values days after.
 */
export type InvoiceReminderRule = {
    /** Format: int32. minimum: -90. maximum: 365. */
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
        "object": Invoice;
    };
    "event_type"?: "invoice.reopened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.reopened";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.reopened". */
    "event_type"?: "invoice.reopened";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `invoice.reopened` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceReopenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.reopened". */
    "event_type"?: "invoice.reopened";
});
/** A response containing `Invoice` data. */
export type InvoiceResponse = {
    /** A bill issued to a customer. */
    "data": Invoice;
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
     * Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most
     * 100, with up to four decimal places. Required with percentage and not accepted with any
     * other type. multipleOf: 0.0001.
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
     * Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most
     * 100, with up to four decimal places. Required with percentage and not accepted with any
     * other type. multipleOf: 0.0001.
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
export type InvoiceScheduleAmountSpecificationFixedInput = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most
     * 100, with up to four decimal places. Required with percentage and not accepted with any
     * other type. multipleOf: 0.0001.
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
/**
 * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total,
 * or the remaining balance.
 */
export type InvoiceScheduleAmountSpecificationInput = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most
     * 100, with up to four decimal places. Required with percentage and not accepted with any
     * other type. multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the entry's amount is set. Value enum: "fixed", "percentage", "remaining_balance". */
    "type": "fixed" | "percentage" | "remaining_balance";
})
    & ((Exclude<InvoiceScheduleAmountSpecificationFixedInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationPercentageInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleAmountSpecificationRemainingBalanceInput & object, readonly unknown[]>));
/** The `percentage` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationPercentage = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most
     * 100, with up to four decimal places. Required with percentage and not accepted with any
     * other type. multipleOf: 0.0001.
     */
    "percent": number;
    /** How the entry's amount is set. Value enum: "percentage". */
    "type": "percentage" | (string & {});
})
    & (({
    /** Value enum: "percentage". */
    "type": "percentage" | (string & {});
    /**
     * Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most
     * 100, with up to four decimal places. Required with percentage and not accepted with any
     * other type. multipleOf: 0.0001.
     */
    "percent": number;
}));
/** The `percentage` variant of `InvoiceScheduleAmountSpecification`. */
export type InvoiceScheduleAmountSpecificationPercentageInput = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most
     * 100, with up to four decimal places. Required with percentage and not accepted with any
     * other type. multipleOf: 0.0001.
     */
    "percent": number;
    /** How the entry's amount is set. Value enum: "percentage". */
    "type": "percentage";
})
    & (({
    /** Value enum: "percentage". */
    "type": "percentage";
    /**
     * Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most
     * 100, with up to four decimal places. Required with percentage and not accepted with any
     * other type. multipleOf: 0.0001.
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
     * Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most
     * 100, with up to four decimal places. Required with percentage and not accepted with any
     * other type. multipleOf: 0.0001.
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
export type InvoiceScheduleAmountSpecificationRemainingBalanceInput = ({
    /**
     * The amount to collect, in the invoice currency. Required with fixed and not accepted with
     * any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most
     * 100, with up to four decimal places. Required with percentage and not accepted with any
     * other type. multipleOf: 0.0001.
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
 * When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice
 * due date.
 */
export type InvoiceScheduleDue = ({
    /**
     * When this entry is due. Always set for `date`. For `at_issue` and `invoice_due_date`, absent
     * on a draft and set when the invoice is issued: the issue time for `at_issue` and the
     * invoice's `due_at` for `invoice_due_date`. Format: date-time.
     */
    "due_at"?: string;
    /** How the entry's due time is set. Value enum: "at_issue", "date", "invoice_due_date". */
    "type": "at_issue" | "date" | "invoice_due_date" | (string & {});
})
    & ((Exclude<InvoiceScheduleDueAtIssue & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueDate & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueInvoiceDueDate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `at_issue` variant of `InvoiceScheduleDue`. */
export type InvoiceScheduleDueAtIssue = ({
    /**
     * When this entry is due. Always set for `date`. For `at_issue` and `invoice_due_date`, absent
     * on a draft and set when the invoice is issued: the issue time for `at_issue` and the
     * invoice's `due_at` for `invoice_due_date`. Format: date-time.
     */
    "due_at"?: string;
    /** How the entry's due time is set. Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
})
    & ({
    /** Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
});
/** The `date` variant of `InvoiceScheduleDue`. */
export type InvoiceScheduleDueDate = ({
    /**
     * When this entry is due. Always set for `date`. For `at_issue` and `invoice_due_date`, absent
     * on a draft and set when the invoice is issued: the issue time for `at_issue` and the
     * invoice's `due_at` for `invoice_due_date`. Format: date-time.
     */
    "due_at": string;
    /** How the entry's due time is set. Value enum: "date". */
    "type": "date" | (string & {});
})
    & ({
    /** Value enum: "date". */
    "type": "date" | (string & {});
    /**
     * When this entry is due. Always set for `date`. For `at_issue` and `invoice_due_date`, absent
     * on a draft and set when the invoice is issued: the issue time for `at_issue` and the
     * invoice's `due_at` for `invoice_due_date`. Format: date-time.
     */
    "due_at": string;
});
/** The `invoice_due_date` variant of `InvoiceScheduleDue`. */
export type InvoiceScheduleDueInvoiceDueDate = ({
    /**
     * When this entry is due. Always set for `date`. For `at_issue` and `invoice_due_date`, absent
     * on a draft and set when the invoice is issued: the issue time for `at_issue` and the
     * invoice's `due_at` for `invoice_due_date`. Format: date-time.
     */
    "due_at"?: string;
    /** How the entry's due time is set. Value enum: "invoice_due_date". */
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
     * When this entry is due. Required for `date`. Not accepted for `at_issue` or
     * `invoice_due_date`, which Flint resolves when the invoice is issued. Format: date-time.
     * minLength: 1.
     */
    "due_at"?: string;
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
     * When this entry is due. Required for `date`. Not accepted for `at_issue` or
     * `invoice_due_date`, which Flint resolves when the invoice is issued. Format: date-time.
     * minLength: 1.
     */
    "due_at"?: string;
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
     * When this entry is due. Required for `date`. Not accepted for `at_issue` or
     * `invoice_due_date`, which Flint resolves when the invoice is issued. Format: date-time.
     * minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /** How the entry's due time is set. Value enum: "at_issue". */
    "type": "at_issue";
})
    & (({
    /** Value enum: "at_issue". */
    "type": "at_issue";
}) & ({
    "due_at"?: never;
}));
/** The `date` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteDateInput = ({
    /**
     * When this entry is due. Required for `date`. Not accepted for `at_issue` or
     * `invoice_due_date`, which Flint resolves when the invoice is issued. Format: date-time.
     * minLength: 1.
     */
    "due_at": string | globalThis.Date;
    /** How the entry's due time is set. Value enum: "date". */
    "type": "date";
})
    & ({
    /** Value enum: "date". */
    "type": "date";
    /**
     * When this entry is due. Required for `date`. Not accepted for `at_issue` or
     * `invoice_due_date`, which Flint resolves when the invoice is issued. Format: date-time.
     * minLength: 1.
     */
    "due_at": string | globalThis.Date;
});
/**
 * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
 * issue, on a set date, or on the invoice due date.
 */
export type InvoiceScheduleDueWriteInput = ({
    /**
     * When this entry is due. Required for `date`. Not accepted for `at_issue` or
     * `invoice_due_date`, which Flint resolves when the invoice is issued. Format: date-time.
     * minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /** How the entry's due time is set. Value enum: "at_issue", "date", "invoice_due_date". */
    "type": "at_issue" | "date" | "invoice_due_date";
})
    & ((Exclude<InvoiceScheduleDueWriteAtIssueInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteDateInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteInvoiceDueDateInput & object, readonly unknown[]>));
/** The `invoice_due_date` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteInvoiceDueDate = ({
    /**
     * When this entry is due. Required for `date`. Not accepted for `at_issue` or
     * `invoice_due_date`, which Flint resolves when the invoice is issued. Format: date-time.
     * minLength: 1.
     */
    "due_at"?: string;
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
     * When this entry is due. Required for `date`. Not accepted for `at_issue` or
     * `invoice_due_date`, which Flint resolves when the invoice is issued. Format: date-time.
     * minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /** How the entry's due time is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date";
})
    & (({
    /** Value enum: "invoice_due_date". */
    "type": "invoice_due_date";
})
    & ({
    "due_at"?: never;
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
     * fee. It can exceed total_money when the entry carries a late fee. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
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
     * snapshot.pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes
     * late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
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
     * to add a new entry. minLength: 1.
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
     * to add a new entry. minLength: 1.
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
     * (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater
     * than 0 and at most 100, with up to four decimal places. Required with percentage and not
     * accepted with any other type. multipleOf: 0.0001. type (Required): string. How the entry's
     * amount is set. Value enum: "remaining_balance". oneOf[1] (Value): {@link
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
     * issue, on a set date, or on the invoice due date. due_at (Optional): string. When this entry
     * is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint
     * resolves when the invoice is issued. Format: date-time. minLength: 1. type (Required):
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
    "amount_specification": InvoiceScheduleAmountSpecificationInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1.
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
     * code. percent (Optional): number. Percentage of snapshot.pricing_amounts.total_money to
     * collect, greater than 0 and at most 100, with up to four decimal places. Required with
     * percentage and not accepted with any other type. multipleOf: 0.0001. type (Required):
     * string. How the entry's amount is set. Value enum: "remaining_balance". oneOf[1] (Value):
     * {@link InvoiceScheduleAmountSpecificationFixedInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceInput}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "remaining_balance". */
        "type"?: "remaining_balance";
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_at (Optional): string. When this entry
     * is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint
     * resolves when the invoice is issued. Format: date-time. minLength: 1. type (Required):
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
     * to add a new entry. minLength: 1.
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
     * (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater
     * than 0 and at most 100, with up to four decimal places. Required with percentage and not
     * accepted with any other type. multipleOf: 0.0001. type (Required): string. How the entry's
     * amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value): {@link
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
     * issue, on a set date, or on the invoice due date. due_at (Optional): string. When this entry
     * is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint
     * resolves when the invoice is issued. Format: date-time. minLength: 1. type (Required):
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
    "amount_specification": InvoiceScheduleAmountSpecificationInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1.
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
     * code. percent (Optional): number. Percentage of snapshot.pricing_amounts.total_money to
     * collect, greater than 0 and at most 100, with up to four decimal places. Required with
     * percentage and not accepted with any other type. multipleOf: 0.0001. type (Required):
     * string. How the entry's amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value):
     * {@link InvoiceScheduleAmountSpecificationFixedInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceInput}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage";
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_at (Optional): string. When this entry
     * is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint
     * resolves when the invoice is issued. Format: date-time. minLength: 1. type (Required):
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
    "amount_specification": InvoiceScheduleAmountSpecificationInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1.
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
     * to add a new entry. minLength: 1.
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
     * (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater
     * than 0 and at most 100, with up to four decimal places. Required with percentage and not
     * accepted with any other type. multipleOf: 0.0001. type (Required): string. How the entry's
     * amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value): {@link
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
     * issue, on a set date, or on the invoice due date. due_at (Optional): string. When this entry
     * is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint
     * resolves when the invoice is issued. Format: date-time. minLength: 1. type (Required):
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
    "amount_specification": InvoiceScheduleAmountSpecificationInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1.
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
     * code. percent (Optional): number. Percentage of snapshot.pricing_amounts.total_money to
     * collect, greater than 0 and at most 100, with up to four decimal places. Required with
     * percentage and not accepted with any other type. multipleOf: 0.0001. type (Required):
     * string. How the entry's amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value):
     * {@link InvoiceScheduleAmountSpecificationFixedInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceInput}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage";
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_at (Optional): string. When this entry
     * is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint
     * resolves when the invoice is issued. Format: date-time. minLength: 1. type (Required):
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
        "object": Invoice;
    };
    "event_type"?: "invoice.sent";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.sent";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.sent". */
    "event_type"?: "invoice.sent";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `invoice.sent` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceSentMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
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
    /** Value enum: "buyer_initiated", "automatic", "external". */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | (string & {});
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. maxLength:
     * 4096.
     */
    "default_footer"?: string;
    /** pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. */
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
     * email. maxLength: 255.
     */
    "reply_to_email"?: string;
    /**
     * Limited to 255 characters (Unicode code points), counted before normalization. maxLength:
     * 255.
     */
    "timezone"?: string;
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
    /** Value enum: "buyer_initiated", "automatic", "external", null. */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null | (string & {}) | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_footer"?: string | null;
    /** Send null to clear it. minLength: 1. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. */
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
     * clear it. Format: email. minLength: 1. maxLength: 255.
     */
    "reply_to_email"?: string | null;
    /**
     * Limited to 255 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 255.
     */
    "timezone"?: string | null;
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
    /** Value enum: "buyer_initiated", "automatic", "external", null. */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_footer"?: string | null;
    /** Send null to clear it. minLength: 1. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. */
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
     * InvoicePaymentPolicyInput}. Which payment options an invoice accepts, any per-option total
     * limits, and whether to show a cost comparison. anyOf[2] (Value): null.
     */
    "payment_policy"?: ((InvoicePaymentPolicyInput) | (null));
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
     * clear it. Format: email. minLength: 1. maxLength: 255.
     */
    "reply_to_email"?: string | null;
    /**
     * Limited to 255 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 255.
     */
    "timezone"?: string | null;
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
     * Buyer tax identity captured on the invoice. Kept after the customer is deleted, because an
     * issued invoice must keep it. anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. anyOf[2] (Value): null.
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
     * (Value): {@link InvoiceLineItem}. A line item on an invoice, with its quantity, unit price,
     * discount, tax, and totals, and the product, variant, or bundle it came from.
     */
    "line_items"?: Array<InvoiceLineItem>;
    /**
     * Your business name as shown on the invoice. A draft shows your current name; issue freezes
     * it.
     */
    "merchant_display_name"?: string;
    /**
     * The invoice's pricing totals. Its total_money is the invoice total that the top-level
     * total_money reports. The money totals for an order or invoice: subtotal, discounts, charges,
     * tax, requested tip, and total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * The tip requested on the backing order, frozen at issue. Absent when none was requested. A
     * tip requested on an invoice, set as a fixed amount or a percentage, with an optional name
     * and description.
     */
    "requested_tip"?: InvoiceTip;
    /**
     * Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed
     * on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. anyOf[2] (Value): null.
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
};
/**
 * A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and
 * description.
 */
export type InvoiceTip = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    "description"?: string;
    "name"?: string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
};
export type InvoiceUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.updated". */
    "event_type"?: "invoice.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `invoice.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.updated". */
    "event_type"?: "invoice.updated";
});
export type InvoiceVoidedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.voided";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.voided";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "invoice.voided";
});
