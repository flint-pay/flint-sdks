import type { ConfigurationVersionRequestInput } from './types-6.js';
import type { GetReturnResponse, GetReturnDispositionResponse, GetReturnResolutionResponse } from './types-25.js';
import type { PublicDownload } from './types-49.js';
import type { MerchantWebhookEnvelope } from './types-36.js';
import type { InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-28.js';
import type { CreateReportRequestInput } from './types-11.js';
import type { InputValue, RequestOptions as RuntimeRequestOptions, CredentialProvider } from '../runtime.js';
import type { AuthMode } from './types-0.js';
import type { Credentials } from './types-13.js';
import type { CreateDemoSessionRequestInput } from './types-8.js';
import type { TextModifierRequest } from './types-62.js';
import type { MoneyValue, MoneyValueInput, NextAction } from './types-37.js';
import type { SendOrderReceiptRequest } from './types-56.js';
import type { PaymentLinkResolvePrefillRequestInput } from './types-44.js';
import type { BuyerCheckoutSessionWithSecret } from './types-1.js';
import type { ConfirmReturnResolutionRequestInput } from './types-7.js';
import type { RefundDestinations, RefundDestinationsInput, Refund } from './types-50.js';
import type { OrderEdit } from './types-39.js';
import type { ReturnActor } from './types-52.js';
/**
 * Removes pending order discounts or promotions deferred to subscription billing. Send at least
 * one ID across order_discount_ids and deferred_promotion_ids.
 */
export type RemoveDiscountsRequest = ({
    /**
     * IDs from the order's deferred_promotions to remove before payment. May be omitted or empty
     * when order_discount_ids contains an ID. [] (Value): string. minLength: 1. Example:
     * "dp_01KEZF7C00KR2DPPXEHRHG12N7".
     */
    "deferred_promotion_ids"?: Array<string>;
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * IDs from the order's discounts to remove. May be omitted or empty when
     * deferred_promotion_ids contains an ID. [] (Value): string. minLength: 1. Example:
     * "ad_01KEZF7C00T30DH97GR0A9BF31".
     */
    "order_discount_ids"?: Array<string>;
})
    & (({
    /** IDs of the order discounts to remove. minItems: 1. */
    "order_discount_ids": unknown;
})
    | ({
    /**
     * IDs from the order's deferred_promotions to remove before payment. May be omitted or empty
     * when order_discount_ids contains an ID. minItems: 1.
     */
    "deferred_promotion_ids": unknown;
})
    | (Record<string, unknown>));
/**
 * Removes pending order discounts or promotions deferred to subscription billing. Send at least
 * one ID across order_discount_ids and deferred_promotion_ids.
 */
export type RemoveDiscountsRequestInput = ({
    /**
     * IDs from the order's deferred_promotions to remove before payment. May be omitted or empty
     * when order_discount_ids contains an ID. [] (Value): string. minLength: 1. Example:
     * "dp_01KEZF7C00KR2DPPXEHRHG12N7".
     */
    "deferred_promotion_ids"?: Array<string>;
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * IDs from the order's discounts to remove. May be omitted or empty when
     * deferred_promotion_ids contains an ID. [] (Value): string. minLength: 1. Example:
     * "ad_01KEZF7C00T30DH97GR0A9BF31".
     */
    "order_discount_ids"?: Array<string>;
})
    & (({
    /** IDs of the order discounts to remove. minItems: 1. */
    "order_discount_ids": unknown;
})
    | ({
    /**
     * IDs from the order's deferred_promotions to remove before payment. May be omitted or empty
     * when order_discount_ids contains an ID. minItems: 1.
     */
    "deferred_promotion_ids": unknown;
}));
/** The request body for: Remove subscription promotions. */
export type RemoveSubscriptionPromotionsRequest = {
    /**
     * Remove only if this matches the subscription's current version. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Active or scheduled promotions to remove. Renewal orders created after removal omit them;
     * paid orders and the unpaid past_due order keep their discounts. Consumed cycles are kept for
     * reattachment. minItems: 1. maxItems: 5. uniqueItems: true. [] (Value): string. minLength: 1.
     * pattern: ^promo_[0-9A-HJKMNP-TV-Z]{26}$. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_ids": Array<string>;
};
/** The request body for: Remove subscription promotions. */
export type RemoveSubscriptionPromotionsRequestInput = RemoveSubscriptionPromotionsRequest;
/** The request body for: Renew subscription now. */
export type RenewSubscriptionRequestInput = ConfigurationVersionRequestInput;
/** The request body for: Reopen return. */
export type ReopenReturnRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why the Return is being reopened. Value enum: "linked_effect_changed",
     * "correction_required", "additional_merchandise_received", "merchant_request", "other".
     */
    "reason": "linked_effect_changed"
        | "correction_required"
        | "additional_merchandise_received"
        | "merchant_request"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Reopen return. */
export type ReopenReturnRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why the Return is being reopened. Value enum: "linked_effect_changed",
     * "correction_required", "additional_merchandise_received", "merchant_request", "other".
     */
    "reason": "linked_effect_changed"
        | "correction_required"
        | "additional_merchandise_received"
        | "merchant_request"
        | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type ReopenReturnResponse = GetReturnResponse;
/** A report generated from the merchant's activity. */
export type Report = ({
    /**
     * Present only for receivables_aging_v1. The calendar date in timezone whose receivables are
     * reported. Format: date. Example: "2026-08-02".
     */
    "as_of_date"?: string;
    /** When the report was requested. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Currency the report covers. A report never combines currencies. Uses ISO 4217 currency
     * codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Link to download the generated report. Present only when status is succeeded. A temporary
     * link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Exclusive interval end instant. Each report type matches its own occurrence time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at": string;
    /**
     * Inclusive interval start instant. Each report type matches its own occurrence time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at": string;
    /**
     * Stable identifier of the report. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rep_01KEZF7C00M947R0GYFMT8VXKJ".
     */
    "report_id": string;
    /**
     * The report's type and column version. See the Reports guide for its columns. Value enum:
     * "receivables_aging_v1", "invoices_itemized_v1", "gift_card_liability_v1",
     * "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1",
     * "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1",
     * "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1",
     * "tax_transactions_itemized_v2".
     */
    "report_type": "receivables_aging_v1"
        | "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2"
        | (string & {});
    /**
     * pending while Flint generates the report, then succeeded with a download or failed with a
     * failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum:
     * "pending", "succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "failed" | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone.
     */
    "timezone": string;
})
    & ((Exclude<ReportPending & object, readonly unknown[]>)
    | (Exclude<ReportSucceeded & object, readonly unknown[]>)
    | (Exclude<ReportFailed & object, readonly unknown[]>)
    | (Record<string, unknown>));
export type ReportDownloadsGetParams = {};
export type ReportDownloadsGetResponse = {
    location?: string;
};
/** A report generated from the merchant's activity. */
export type ReportFailed = ({
    /**
     * Present only for receivables_aging_v1. The calendar date in timezone whose receivables are
     * reported. Format: date. Example: "2026-08-02".
     */
    "as_of_date"?: string;
    /** When the report was requested. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Currency the report covers. A report never combines currencies. Uses ISO 4217 currency
     * codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Link to download the generated report. Present only when status is succeeded. A temporary
     * link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason": "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Exclusive interval end instant. Each report type matches its own occurrence time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at": string;
    /**
     * Inclusive interval start instant. Each report type matches its own occurrence time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at": string;
    /**
     * Stable identifier of the report. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rep_01KEZF7C00M947R0GYFMT8VXKJ".
     */
    "report_id": string;
    /**
     * The report's type and column version. See the Reports guide for its columns. Value enum:
     * "receivables_aging_v1", "invoices_itemized_v1", "gift_card_liability_v1",
     * "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1",
     * "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1",
     * "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1",
     * "tax_transactions_itemized_v2".
     */
    "report_type": "receivables_aging_v1"
        | "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2"
        | (string & {});
    /**
     * pending while Flint generates the report, then succeeded with a download or failed with a
     * failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum:
     * "failed".
     */
    "status": "failed" | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Value enum: "failed". */
    "status"?: "failed" | (string & {});
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason": "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
}));
export type ReportFailedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "as_of_date"?: string;
            "created_at": string;
            "currency": string;
            "download"?: PublicDownload;
            "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
            "interval_end_at": string;
            "interval_start_at": string;
            "report_id": string;
            "report_type": "receivables_aging_v1"
                | "invoices_itemized_v1"
                | "gift_card_liability_v1"
                | "orders_itemized_v1"
                | "orders_itemized_v2"
                | "payments_itemized_v1"
                | "balance_transactions_itemized_v1"
                | "payouts_itemized_v1"
                | "tax_itemized_v1"
                | "tax_summarized_v1"
                | "merchant_billing_itemized_v1"
                | "tax_transactions_itemized_v1"
                | "tax_transactions_itemized_v2"
                | (string & {});
            "status": "pending" | "succeeded" | "failed" | (string & {});
            "timezone": string;
        })
            & ((Exclude<ReportPending & object, readonly unknown[]>)
            | (Exclude<ReportSucceeded & object, readonly unknown[]>)
            | (Exclude<ReportFailed & object, readonly unknown[]>)
            | (Record<string, unknown>));
        "previous_attributes"?: Partial<Report>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "report.failed";
})
    & {
    "event_type": "report.failed";
});
/** Records in-transit stock as lost. */
export type ReportInventoryTransferLossRequest = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_lost_quantity (Required): integer.
     * Cumulative quantity that should be recorded as lost in transit. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be recorded as lost in transit. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_lost_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** Records in-transit stock as lost. */
export type ReportInventoryTransferLossRequestInput = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_lost_quantity (Required): integer.
     * Cumulative quantity that should be recorded as lost in transit. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be recorded as lost in transit. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_lost_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/** A page of `Report` objects. */
export type ReportListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Report}. A report generated from the merchant's activity.
     */
    "data": Array<Report>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A report generated from the merchant's activity. */
export type ReportPending = ({
    /**
     * Present only for receivables_aging_v1. The calendar date in timezone whose receivables are
     * reported. Format: date. Example: "2026-08-02".
     */
    "as_of_date"?: string;
    /** When the report was requested. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Currency the report covers. A report never combines currencies. Uses ISO 4217 currency
     * codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Link to download the generated report. Present only when status is succeeded. A temporary
     * link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Exclusive interval end instant. Each report type matches its own occurrence time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at": string;
    /**
     * Inclusive interval start instant. Each report type matches its own occurrence time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at": string;
    /**
     * Stable identifier of the report. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rep_01KEZF7C00M947R0GYFMT8VXKJ".
     */
    "report_id": string;
    /**
     * The report's type and column version. See the Reports guide for its columns. Value enum:
     * "receivables_aging_v1", "invoices_itemized_v1", "gift_card_liability_v1",
     * "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1",
     * "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1",
     * "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1",
     * "tax_transactions_itemized_v2".
     */
    "report_type": "receivables_aging_v1"
        | "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2"
        | (string & {});
    /**
     * pending while Flint generates the report, then succeeded with a download or failed with a
     * failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum:
     * "pending".
     */
    "status": "pending" | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Value enum: "pending". */
    "status"?: "pending" | (string & {});
}));
/** A response containing `Report` data. */
export type ReportResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A report generated from
     * the merchant's activity.
     */
    "data": Report;
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
/** A report generated from the merchant's activity. */
export type ReportSucceeded = ({
    /**
     * Present only for receivables_aging_v1. The calendar date in timezone whose receivables are
     * reported. Format: date. Example: "2026-08-02".
     */
    "as_of_date"?: string;
    /** When the report was requested. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Currency the report covers. A report never combines currencies. Uses ISO 4217 currency
     * codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Link to download the generated report. Present only when status is succeeded. A temporary
     * link for downloading a generated report.
     */
    "download": PublicDownload;
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Exclusive interval end instant. Each report type matches its own occurrence time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at": string;
    /**
     * Inclusive interval start instant. Each report type matches its own occurrence time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at": string;
    /**
     * Stable identifier of the report. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rep_01KEZF7C00M947R0GYFMT8VXKJ".
     */
    "report_id": string;
    /**
     * The report's type and column version. See the Reports guide for its columns. Value enum:
     * "receivables_aging_v1", "invoices_itemized_v1", "gift_card_liability_v1",
     * "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1",
     * "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1",
     * "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1",
     * "tax_transactions_itemized_v2".
     */
    "report_type": "receivables_aging_v1"
        | "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2"
        | (string & {});
    /**
     * pending while Flint generates the report, then succeeded with a download or failed with a
     * failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum:
     * "succeeded".
     */
    "status": "succeeded" | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Value enum: "succeeded". */
    "status"?: "succeeded" | (string & {});
    /**
     * Link to download the generated report. Present only when status is succeeded. A temporary
     * link for downloading a generated report.
     */
    "download": PublicDownload;
}));
export type ReportSucceededEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "as_of_date"?: string;
            "created_at": string;
            "currency": string;
            "download"?: PublicDownload;
            "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
            "interval_end_at": string;
            "interval_start_at": string;
            "report_id": string;
            "report_type": "receivables_aging_v1"
                | "invoices_itemized_v1"
                | "gift_card_liability_v1"
                | "orders_itemized_v1"
                | "orders_itemized_v2"
                | "payments_itemized_v1"
                | "balance_transactions_itemized_v1"
                | "payouts_itemized_v1"
                | "tax_itemized_v1"
                | "tax_summarized_v1"
                | "merchant_billing_itemized_v1"
                | "tax_transactions_itemized_v1"
                | "tax_transactions_itemized_v2"
                | (string & {});
            "status": "pending" | "succeeded" | "failed" | (string & {});
            "timezone": string;
        })
            & ((Exclude<ReportPending & object, readonly unknown[]>)
            | (Exclude<ReportSucceeded & object, readonly unknown[]>)
            | (Exclude<ReportFailed & object, readonly unknown[]>)
            | (Record<string, unknown>));
        "previous_attributes"?: Partial<Report>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "report.succeeded";
})
    & {
    "event_type": "report.succeeded";
});
export type ReportsCreateParams = (CreateReportRequestInput);
export type ReportsGetParams = {};
export type ReportsListParams = {
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
    /**
     * Return reports with any of these report types. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "receivables_aging_v1", "invoices_itemized_v1",
     * "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1", "tax_transactions_itemized_v2". Value enum:
     * "receivables_aging_v1", "invoices_itemized_v1", "gift_card_liability_v1",
     * "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1",
     * "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1",
     * "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1",
     * "tax_transactions_itemized_v2". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "receivables_aging_v1", "invoices_itemized_v1", "gift_card_liability_v1",
     * "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1",
     * "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1",
     * "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1",
     * "tax_transactions_itemized_v2". anyOf[1][] (Value): string. Value enum:
     * "receivables_aging_v1", "invoices_itemized_v1", "gift_card_liability_v1",
     * "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1",
     * "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1",
     * "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1",
     * "tax_transactions_itemized_v2". anyOf[2] (Value): string. Value enum:
     * "receivables_aging_v1", "invoices_itemized_v1", "gift_card_liability_v1",
     * "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1",
     * "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1",
     * "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1",
     * "tax_transactions_itemized_v2".
     */
    "report_type"?: InputValue<("receivables_aging_v1"
        | "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2")
        | readonly ("receivables_aging_v1"
        | "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2")[]>;
    /**
     * Return reports in any of these statuses. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "pending", "succeeded", "failed". Value enum: "pending",
     * "succeeded", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending",
     * "succeeded", "failed". anyOf[1][] (Value): string. Value enum: "pending", "succeeded",
     * "failed". anyOf[2] (Value): string. Value enum: "pending", "succeeded", "failed".
     */
    "status"?: InputValue<("pending" | "succeeded" | "failed") | readonly ("pending" | "succeeded" | "failed")[]>;
};
/** The request body for: Reprice discounts. */
export type RepriceDiscountsRequestInput = {
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** Per-call authentication and request overrides. See RUNTIME.md#requestoptions. */
export type RequestOptions<M extends AuthMode = AuthMode> = Omit<RuntimeRequestOptions, 'authMode' | 'credentials'>
    & {
    "apiKey"?: "merchant" extends M ? (string | CredentialProvider) : never;
    "checkoutToken"?: "checkout" extends M ? (string | CredentialProvider) : never;
    "customerToken"?: "customer" extends M ? (string | CredentialProvider) : never;
    "invoiceToken"?: "invoice" extends M ? (string | CredentialProvider) : never;
    "onboardingToken"?: "onboarding" extends M ? (string | CredentialProvider) : never;
    "token"?: "merchant" extends M ? (string | CredentialProvider) : never;
}
    & ({
    authMode?: undefined;
    credentials?: Credentials[M];
}
    | {
    [K in M]: {
        authMode: K;
        credentials?: Credentials[K];
    };
}[M]);
/** The request body for: Resend webhook delivery. */
export type ResendWebhookDeliveryRequest = {
    /** Your note explaining this action. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The request body for: Resend webhook delivery. */
export type ResendWebhookDeliveryRequestInput = ResendWebhookDeliveryRequest;
/** The request body for: Reset demo session. */
export type ResetDemoSessionRequest = {
    /**
     * Omit to use quickstart. An explicit empty or unsupported template is invalid. Default:
     * "quickstart". Value enum: "quickstart".
     */
    "template"?: "quickstart" | (string & {});
};
/** The request body for: Reset demo session. */
export type ResetDemoSessionRequestInput = CreateDemoSessionRequestInput;
/** The request body for: Resolve a customer deletion request. */
export type ResolveCustomerDeletionRequest = {
    /**
     * Whether to erase the customer's personal data or keep the customer as is. Value enum:
     * "approve", "reject".
     */
    "decision": "approve" | "reject" | (string & {});
    /**
     * Optional plain-text explanation visible to the buyer. Only allowed when decision is reject.
     * Trimmed before storage; must contain 1 to 500 characters after trimming. `null` is not
     * allowed. Reasons are erased if the customer is later deleted. minLength: 1.
     */
    "decision_reason"?: string;
};
/** The request body for: Resolve a customer deletion request. */
export type ResolveCustomerDeletionRequestInput = {
    /**
     * Whether to erase the customer's personal data or keep the customer as is. Value enum:
     * "approve", "reject".
     */
    "decision": "approve" | "reject";
    /**
     * Optional plain-text explanation visible to the buyer. Only allowed when decision is reject.
     * Trimmed before storage; must contain 1 to 500 characters after trimming. `null` is not
     * allowed. Reasons are erased if the customer is later deleted. minLength: 1.
     */
    "decision_reason"?: string;
};
/** The request body for: Resolve order inventory exception. */
export type ResolveOrderInventoryExceptionRequestInput = {
    /**
     * Your note explaining this action. Leading and trailing whitespace is removed; the remaining
     * note can contain at most 500 characters. minLength: 1.
     */
    "reason_message"?: string;
};
/**
 * A modifier selection for a payment link line item: a modifier option with a quantity, or a text
 * value.
 */
export type ResolvePaymentLinkLineItemModifierRequest = {
    /**
     * ID of the modifier option the buyer chose. Send exactly one of `modifier_id` or `text`.
     * minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * The text the buyer entered for a text modifier group. Send exactly one of `modifier_id` or
     * `text`. The text a buyer entered for a text modifier group on a payment link line item.
     */
    "text"?: TextModifierRequest;
};
/**
 * A modifier selection for a payment link line item: a modifier option with a quantity, or a text
 * value.
 */
export type ResolvePaymentLinkLineItemModifierRequestInput = {
    /**
     * ID of the modifier option the buyer chose. Send exactly one of `modifier_id` or `text`.
     * minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * The text the buyer entered for a text modifier group. Send exactly one of `modifier_id` or
     * `text`. The text a buyer entered for a text modifier group on a payment link line item.
     */
    "text"?: ResolvePaymentLinkTextModifierRequestInput;
};
/** The modifier selections for one payment link line item when resolving a payment link. */
export type ResolvePaymentLinkLineItemModifiers = {
    /**
     * The buyer's modifier selections for the line item. Required, and `null` is not accepted.
     * Send an empty array when the buyer chose none. [] (Value): {@link
     * ResolvePaymentLinkLineItemModifierRequest}. A modifier selection for a payment link line
     * item: a modifier option with a quantity, or a text value.
     */
    "modifiers"?: Array<ResolvePaymentLinkLineItemModifierRequest>;
};
/** The modifier selections for one payment link line item when resolving a payment link. */
export type ResolvePaymentLinkLineItemModifiersInput = {
    /**
     * The buyer's modifier selections for the line item. Required, and `null` is not accepted.
     * Send an empty array when the buyer chose none. [] (Value): {@link
     * ResolvePaymentLinkLineItemModifierRequestInput}. A modifier selection for a payment link
     * line item: a modifier option with a quantity, or a text value.
     */
    "modifiers"?: Array<ResolvePaymentLinkLineItemModifierRequestInput>;
};
/** The request body for: Resolve payment link. */
export type ResolvePaymentLinkRequest = {
    /**
     * One attendee name per ticket on an event payment link, in line_items order: each tier's
     * tickets in turn, skipping tiers with quantity 0. The count must equal the tickets being
     * bought. Required when event_config.collect_attendee_names is true, and optional otherwise.
     * Flint trims each name, which must then be 1 to 200 characters. Duplicate names are allowed.
     * Flint copies the names onto the tickets when the order is paid, as each ticket's
     * attendee_name, and never stores them in metadata. minItems: 1. [] (Value): string.
     * minLength: 1.
     */
    "attendee_names"?: Array<string>;
    /**
     * Your reference for the buyer or cart this checkout is for, such as your user ID. It cannot
     * contain the NUL character. Copied to the checkout session and order, preserving all
     * characters exactly. Anyone with the link can change it, so do not use it as proof of who
     * paid. minLength: 1. maxLength: 255.
     */
    "client_reference"?: string;
    /**
     * Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as
     * strings, and a required checkbox must be true. Flint records the answers on the order and
     * checkout session in `custom_field_answers`; omitted and empty answers to optional fields are
     * not recorded. * (Value): string. minLength: 1.
     */
    "custom_field_values"?: Record<string, string>;
    /**
     * Modifier choices keyed by line item key, for catalog items. * (Value): {@link
     * ResolvePaymentLinkLineItemModifiers}. The modifier selections for one payment link line item
     * when resolving a payment link.
     */
    "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiers>;
    /**
     * Email to fill in on the next checkout step. The buyer can change it; it never links an
     * existing customer. Buyer-editable email prefill for payment-link checkout. It never
     * identifies a customer.
     */
    "prefill"?: SendOrderReceiptRequest;
    /**
     * Quantities keyed by line item key (line_items[].key), each within that item's min_quantity
     * and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are
     * not supported. * (Value): integer. Whole-number quantity value; fractional quantities are
     * not supported. Format: int32.
     */
    "quantity_overrides"?: Record<string, number>;
    /**
     * Private resolution context returned by GET /v1/payment-links/{payment_link_id}/public. Send
     * it unchanged when resolving the same link; read the link again after checkout_start_due_at.
     * minLength: 1.
     */
    "resolution_context": string;
    /**
     * Prices keyed by line item key, for items with allow_unit_price_adjustment, between
     * min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed
     * donation. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_overrides"?: Record<string, MoneyValue>;
    /**
     * Variant IDs keyed by line item key (line_items[].key), for lines with variant_ids. Each
     * selection must be offered by that line and priced in its current currency. Omit a key to use
     * default_variant_id; a line without a default requires a selection. Null is not accepted. *
     * (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_selections"?: Record<string, string>;
};
/** The request body for: Resolve payment link. */
export type ResolvePaymentLinkRequestInput = {
    /**
     * One attendee name per ticket on an event payment link, in line_items order: each tier's
     * tickets in turn, skipping tiers with quantity 0. The count must equal the tickets being
     * bought. Required when event_config.collect_attendee_names is true, and optional otherwise.
     * Flint trims each name, which must then be 1 to 200 characters. Duplicate names are allowed.
     * Flint copies the names onto the tickets when the order is paid, as each ticket's
     * attendee_name, and never stores them in metadata. minItems: 1. [] (Value): string.
     * minLength: 1.
     */
    "attendee_names"?: Array<string>;
    /**
     * Your reference for the buyer or cart this checkout is for, such as your user ID. It cannot
     * contain the NUL character. Copied to the checkout session and order, preserving all
     * characters exactly. Anyone with the link can change it, so do not use it as proof of who
     * paid. minLength: 1. maxLength: 255.
     */
    "client_reference"?: string;
    /**
     * Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as
     * strings, and a required checkbox must be true. Flint records the answers on the order and
     * checkout session in `custom_field_answers`; omitted and empty answers to optional fields are
     * not recorded. * (Value): string. minLength: 1.
     */
    "custom_field_values"?: Record<string, string>;
    /**
     * Modifier choices keyed by line item key, for catalog items. * (Value): {@link
     * ResolvePaymentLinkLineItemModifiersInput}. The modifier selections for one payment link line
     * item when resolving a payment link.
     */
    "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiersInput>;
    /**
     * Email to fill in on the next checkout step. The buyer can change it; it never links an
     * existing customer. Buyer-editable email prefill for payment-link checkout. It never
     * identifies a customer.
     */
    "prefill"?: PaymentLinkResolvePrefillRequestInput;
    /**
     * Quantities keyed by line item key (line_items[].key), each within that item's min_quantity
     * and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are
     * not supported. * (Value): integer. Whole-number quantity value; fractional quantities are
     * not supported. Format: int32.
     */
    "quantity_overrides"?: Record<string, number>;
    /**
     * Private resolution context returned by GET /v1/payment-links/{payment_link_id}/public. Send
     * it unchanged when resolving the same link; read the link again after checkout_start_due_at.
     * minLength: 1.
     */
    "resolution_context": string;
    /**
     * Prices keyed by line item key, for items with allow_unit_price_adjustment, between
     * min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed
     * donation. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "unit_price_overrides"?: Record<string, MoneyValueInput>;
    /**
     * Variant IDs keyed by line item key (line_items[].key), for lines with variant_ids. Each
     * selection must be offered by that line and priced in its current currency. Omit a key to use
     * default_variant_id; a line without a default requires a selection. Null is not accepted. *
     * (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_selections"?: Record<string, string>;
};
/** A response containing `BuyerCheckoutSessionWithSecret` data. */
export type ResolvePaymentLinkResponse = {
    /**
     * The buyer checkout session and its checkout credential, created from the payment link. The
     * checkout session with any newly issued checkout credential. Hosted launches return url
     * without checkout_auth_token. Embedded launches return checkout_auth_token without url.
     * Customer binding confirmation returns its newly issued credential for either surface. A
     * session in which a buyer completes an order's payment.
     */
    "data": BuyerCheckoutSessionWithSecret;
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
/** The text a buyer entered for a text modifier group on a payment link line item. */
export type ResolvePaymentLinkTextModifierRequestInput = {
    /**
     * ID of the text modifier group the buyer answered. minLength: 1. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /** The text the buyer entered. minLength: 1. */
    "value": string;
};
/** A reference to another resource by `resource_type` and `resource_id`. */
export type ResourceReference = {
    /** Public Flint ID of the referenced resource. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "resource_id": string;
    /**
     * Public resource kind identified by resource_id, such as payment_intent for a payment.
     * Example: "order". Value enum: "api_key", "api_request_log", "balance",
     * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_edit", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "price_list", "price_list_price",
     * "product", "product_option", "product_option_value", "product_variant", "promotion",
     * "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": "api_key"
        | "api_request_log"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "bundle_component"
        | "category"
        | "checkout_session"
        | "checkout_session_customer_verification"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_address"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "customer_session"
        | "customer_tax_exemption"
        | "customer_verification"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_quote"
        | "delivery_rate"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "demo_session"
        | "device"
        | "discount"
        | "dispute"
        | "email_change_request"
        | "environment_grant"
        | "feedback_report"
        | "file"
        | "flint_wallet"
        | "flint_wallet_card"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "fulfillment_notification"
        | "gift_card"
        | "gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "image"
        | "inventory_adjustment"
        | "inventory_allocation_policy"
        | "inventory_allocation_policy_revision"
        | "inventory_count"
        | "inventory_item"
        | "inventory_level"
        | "inventory_movement"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "inventory_transfer_line"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_late_fee"
        | "invoice_line_item"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "invoice_payment_term"
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_edit"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_credential"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "price_list"
        | "price_list_price"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "report"
        | "report_download"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_inspection_line_item"
        | "return_line_item"
        | "return_policy"
        | "return_policy_revision"
        | "return_reason"
        | "return_receipt"
        | "return_receipt_line_item"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "sandbox"
        | "settings"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_line_item"
        | "subscription_offer"
        | "subscription_payment_retry"
        | "subscription_plan"
        | "subscription_plan_line_item"
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
};
/**
 * The activity timeline for one resource, such as API requests, webhook events and deliveries, and
 * image changes.
 */
export type ResourceTimeline = {
    /**
     * Timeline entries for the resource, each tagged by `entry_type`. Narrowed by `include`,
     * `occurred_after`, and `occurred_before`. [] (Value): {@link ResourceTimelineEntry}. One
     * entry in a resource timeline. The `entry_type` selects which of the request, webhook, or
     * image fields are present.
     */
    "entries": Array<ResourceTimelineEntry>;
    /** ID of the resource this timeline is for. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "resource_id": string;
    /**
     * Type of the resource this timeline is for. Example: "order". Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_tax_exemption", "customer_verification", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate",
     * "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone",
     * "demo_session", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_intent",
     * "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "tax_calculation_callback", "tax_connection",
     * "tax_registration", "test_clock", "ticket", "user", "webhook_delivery", "webhook_endpoint",
     * "webhook_event", "workload_identity".
     */
    "resource_type": "api_key"
        | "api_request_log"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "bundle_component"
        | "category"
        | "checkout_session"
        | "checkout_session_customer_verification"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_address"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "customer_session"
        | "customer_tax_exemption"
        | "customer_verification"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_quote"
        | "delivery_rate"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "demo_session"
        | "device"
        | "discount"
        | "dispute"
        | "email_change_request"
        | "environment_grant"
        | "feedback_report"
        | "file"
        | "flint_wallet"
        | "flint_wallet_card"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "fulfillment_notification"
        | "gift_card"
        | "gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "image"
        | "inventory_adjustment"
        | "inventory_allocation_policy"
        | "inventory_allocation_policy_revision"
        | "inventory_count"
        | "inventory_item"
        | "inventory_level"
        | "inventory_movement"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "inventory_transfer_line"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_late_fee"
        | "invoice_line_item"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "invoice_payment_term"
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_edit"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_credential"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "price_list"
        | "price_list_price"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "report"
        | "report_download"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_inspection_line_item"
        | "return_line_item"
        | "return_policy"
        | "return_policy_revision"
        | "return_reason"
        | "return_receipt"
        | "return_receipt_line_item"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "sandbox"
        | "settings"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_line_item"
        | "subscription_offer"
        | "subscription_payment_retry"
        | "subscription_plan"
        | "subscription_plan_line_item"
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
    /** `true` when the timeline is for test mode data and `false` for live data. */
    "test": boolean;
};
/** An API request recorded in this resource's timeline. */
export type ResourceTimelineAPIRequestEntry = {
    /** Stable identifier of this log entry. Example: "rlog_01KEZF7C008XJCH6BHA224X46F". */
    "api_request_log_id": string;
    /**
     * The public resource that made this request. Absent when Flint cannot attribute the caller. A
     * reference to another resource by `resource_type` and `resource_id`.
     */
    "caller"?: ResourceReference;
    /**
     * The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent
     * none. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$. Example: "checkout-1842".
     */
    "client_request_id"?: string;
    /**
     * The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint
     * starts its own trace. Absent when no valid traceparent was sent. pattern: ^[0-9a-f]{32}$.
     * Example: "0123456789abcdef0123456789abcdef".
     */
    "client_trace_id"?: string;
    /** Always `api_request` for this kind of entry. Value enum: "api_request". */
    "entry_type": "api_request" | (string & {});
    /** The response's top-level error `code`. Absent for successful requests. */
    "error_code"?: string;
    /** A short explanation of why the request failed. Absent for successful requests. */
    "error_summary"?: string;
    /**
     * The error envelope's `type` for this response. Value enum: "authentication_error",
     * "authorization_error", "validation_error", "not_found_error", "conflict_error",
     * "rate_limit_error", "external_service_error", "timeout_error", "unavailable_error",
     * "internal_error", "protocol_error".
     */
    "error_type"?: "authentication_error"
        | "authorization_error"
        | "validation_error"
        | "not_found_error"
        | "conflict_error"
        | "rate_limit_error"
        | "external_service_error"
        | "timeout_error"
        | "unavailable_error"
        | "internal_error"
        | "protocol_error"
        | (string & {});
    /** HTTP method of the request. */
    "http_method": string;
    /** Time Flint spent handling the request, in milliseconds. Format: int64. */
    "latency_milliseconds": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** Request path as sent, with real IDs, such as /v1/orders/ord_123. */
    "path": string;
    /** The next action to resolve the failure. Absent when no action applies. */
    "recommended_action"?: string;
    /**
     * Full URL of the Flint guide that explains this failure. Absent when no guide applies.
     * Format: uri. Example: "https://example.com/receipt".
     */
    "reference_url"?: string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
    /** ID of this timeline entry. Example: "rlog_01KEZF7C008XJCH6BHA224X46F". */
    "resource_timeline_entry_id": string;
    /**
     * Whether sending this request again can succeed, and how. It depends only on code and
     * details[0].reason; the errors reference lists the value for each. Value enum:
     * "same_request", "after_refresh", "none".
     */
    "retry"?: "same_request" | "after_refresh" | "none" | (string & {});
    /** The matched route as a method and path template, such as `POST /v1/orders`. */
    "route_pattern": string;
    /** HTTP status Flint returned. Format: int32. */
    "status_code": number;
};
/**
 * One entry in a resource timeline. The `entry_type` selects which of the request, webhook, or
 * image fields are present.
 */
export type ResourceTimelineEntry = ((ResourceTimelineAPIRequestEntry)
    | (ResourceTimelineWebhookEventEntry)
    | (ResourceTimelineWebhookDeliveryAttemptEntry)
    | (ResourceTimelineImageMutationEntry)
    | (Record<string, unknown>));
/** A change to this resource's image attachments recorded in its timeline. */
export type ResourceTimelineImageMutationEntry = {
    /** Always `image_mutation` for this kind of entry. Value enum: "image_mutation". */
    "entry_type": "image_mutation" | (string & {});
    /** Version of the resource's image attachments after this change. Format: int64. */
    "image_version": number;
    /** The change made to the resource's images. Value enum: "replaced". */
    "mutation_kind": "replaced" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** ID of this timeline entry. Example: "iomevt_01KEZF7C00D4JSSDP6AB68EFF2". */
    "resource_timeline_entry_id": string;
};
/** A response containing `ResourceTimeline` data. */
export type ResourceTimelineResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The activity timeline
     * for one resource, such as API requests, webhook events and deliveries, and image changes.
     */
    "data": ResourceTimeline;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A webhook delivery attempt recorded in this resource's timeline. */
export type ResourceTimelineWebhookDeliveryAttemptEntry = {
    /**
     * ID of the API request log associated with this attempt. Omitted when no request log is
     * associated. Example: "rlog_01KEZF7C008XJCH6BHA224X46F".
     */
    "api_request_log_id"?: string;
    /** Which attempt this is for the delivery, starting at 1. Format: int32. */
    "attempt_number": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * What caused this attempt. Value enum: "automatic_delivery", "automatic_retry",
     * "manual_resend", "manual_delivery".
     */
    "delivery_trigger": "automatic_delivery" | "automatic_retry" | "manual_resend" | "manual_delivery" | (string & {});
    /** How long the attempt took, in milliseconds. Format: int64. */
    "duration_milliseconds"?: number;
    /**
     * Always `webhook_delivery_attempt` for this kind of entry. Value enum:
     * "webhook_delivery_attempt".
     */
    "entry_type": "webhook_delivery_attempt" | (string & {});
    /**
     * The kind of failure for this attempt. Present only when this attempt's `status` is `failed`.
     * Value enum: "webhook_timeout", "webhook_dns", "webhook_tls", "webhook_connection",
     * "webhook_blocked_target", "webhook_request", "webhook_redirect", "webhook_http_4xx",
     * "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
     */
    "error_category"?: "webhook_timeout"
        | "webhook_dns"
        | "webhook_tls"
        | "webhook_connection"
        | "webhook_blocked_target"
        | "webhook_request"
        | "webhook_redirect"
        | "webhook_http_4xx"
        | "webhook_http_5xx"
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failure for this attempt. Present only when this attempt's
     * `status` is `failed`.
     */
    "error_summary"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** The note supplied when this action was requested. */
    "reason_message"?: string;
    /**
     * The next step to resolve this attempt's failure. Present only when this attempt's `status`
     * is `failed`.
     */
    "recommended_action"?: string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** ID of this timeline entry. Example: "watt_01KEZF7C00RG6XMCAFJB8HH55R". */
    "resource_timeline_entry_id": string;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * Present only when this attempt's `status` is `failed`. While the delivery is pending, Flint
     * retries automatically either way.
     */
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Outcome of this individual delivery attempt. Value enum: "pending", "delivered", "failed".
     */
    "status": "pending" | "delivered" | "failed" | (string & {});
    /** HTTP status code the endpoint returned. Format: int32. */
    "status_code"?: number;
    /** ID of the delivery attempt. Example: "watt_01KEZF7C00RG6XMCAFJB8HH55R". */
    "webhook_delivery_attempt_id": string;
    /** ID of the delivery the attempt belongs to. Example: "wdel_01KEZF7C001DWSNDCDZHCTBN0A". */
    "webhook_delivery_id": string;
    /** ID of the endpoint the delivery goes to. Example: "whep_01KEZF7C006FXYTAJRZCGCBJTN". */
    "webhook_endpoint_id": string;
    /** ID of the event being delivered. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
/** A webhook event recorded in this resource's timeline. */
export type ResourceTimelineWebhookEventEntry = {
    /**
     * ID of the API request log associated with this event. Omitted when no request log is
     * associated. Example: "rlog_01KEZF7C008XJCH6BHA224X46F".
     */
    "api_request_log_id"?: string;
    /** Always `webhook_event` for this kind of entry. Value enum: "webhook_event". */
    "entry_type": "webhook_event" | (string & {});
    /**
     * Type of webhook event recorded for this resource. Value enum: "balance.updated",
     * "balance_transaction.created", "balance_transaction.updated", "bundle.archived",
     * "bundle.created", "bundle.updated", "category.created", "category.deleted",
     * "category.updated", "checkout_session.closed", "checkout_session.created",
     * "checkout_session.expired", "checkout_session.invalidated", "checkout_session.paid",
     * "checkout_session.partially_paid", "checkout_session.updated", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.activated",
     * "delivery_location_set.archived", "delivery_location_set.created",
     * "delivery_location_set.deactivated", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.activated",
     * "delivery_profile.archived", "delivery_profile.created", "delivery_profile.deactivated",
     * "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.activated",
     * "delivery_zone.archived", "delivery_zone.created", "delivery_zone.deactivated",
     * "delivery_zone.updated", "dispute.created", "dispute.inquiry_closed", "dispute.lost",
     * "dispute.needs_response", "dispute.prevented", "dispute.updated", "dispute.won",
     * "environment_grant.created", "environment_grant.revoked", "fraud_warning.created",
     * "fraud_warning.updated", "fulfillment.canceled", "fulfillment.completed",
     * "fulfillment.created", "fulfillment.failed", "fulfillment.updated",
     * "fulfillment_event.created", "gift_card.created", "gift_card.updated",
     * "gift_card_load.created", "gift_card_load.updated", "gift_card_notification.created",
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
     * "order_edit.created", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payout.canceled", "payout.created", "payout.failed", "payout.reversed", "payout.succeeded",
     * "payout.updated", "payout_destination.archived", "payout_destination.created",
     * "payout_destination.disabled", "payout_destination.updated", "payout_settings.updated",
     * "price_list.archived", "price_list.created", "price_list.updated", "product.archived",
     * "product.created", "product.updated", "product_variant.archived", "product_variant.created",
     * "product_variant.updated", "promotion.archived", "promotion.created", "promotion.updated",
     * "promotion_code.archived", "promotion_code.created", "promotion_code.updated",
     * "refund.created", "refund.failed", "refund.partially_succeeded", "refund.succeeded",
     * "refund.updated", "report.failed", "report.succeeded", "return.canceled",
     * "return.completed", "return.created", "return.decision_recorded", "return.reopened",
     * "return.updated", "return_disposition.created", "return_disposition.updated",
     * "return_inspection.acceptance_decided", "return_inspection.created",
     * "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded",
     * "return_receipt.verified", "return_resolution.created", "return_resolution.updated",
     * "shipment.created", "shipment.updated", "subscription.activated", "subscription.canceled",
     * "subscription.cancellation_scheduled", "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided".
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
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
        | "order_edit.created"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
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
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
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
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** ID of this timeline entry. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "resource_timeline_entry_id": string;
    /** ID of the event being delivered. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
export type ResourceTimelinesGetParams = {
    /**
     * Optional resource type. Must match the resource_id prefix when present. Value enum:
     * "balance", "balance_transaction", "bundle", "category", "checkout_session", "credit_note",
     * "credit_note_allocation", "customer", "dispute", "fraud_warning", "inventory_count",
     * "inventory_level", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "invoice", "invoice_payment_term",
     * "merchant_billing_balance", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "payment_intent", "payment_link", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_variant", "promotion", "promotion_code", "refund",
     * "return", "return_activity", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "subscription",
     * "subscription_plan", "test_clock".
     */
    "resource_type"?: InputValue<"balance"
        | "balance_transaction"
        | "bundle"
        | "category"
        | "checkout_session"
        | "credit_note"
        | "credit_note_allocation"
        | "customer"
        | "dispute"
        | "fraud_warning"
        | "inventory_count"
        | "inventory_level"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "invoice"
        | "invoice_payment_term"
        | "merchant_billing_balance"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "payment_intent"
        | "payment_link"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "product"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "refund"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_receipt"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "subscription"
        | "subscription_plan"
        | "test_clock">;
    /**
     * Timeline entry groups to include. Defaults to all four: requests, webhooks, attempts,
     * image_mutations. [] enum: "requests", "webhooks", "attempts", "image_mutations". [] (Value):
     * string. Value enum: "requests", "webhooks", "attempts", "image_mutations".
     */
    "include"?: InputValue<Array<"requests" | "webhooks" | "attempts" | "image_mutations">>;
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
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
};
/**
 * Public resource type: the resource's ID field name without `_id`. Clients must accept values
 * added in future releases. Value enum: "api_key", "api_request_log", "balance",
 * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
 * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
 * "custom_domain", "customer", "customer_address", "customer_deletion_request",
 * "customer_email_preferences", "customer_session", "customer_tax_exemption",
 * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
 * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
 * "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute",
 * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
 * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
 * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
 * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
 * "inventory_adjustment", "inventory_allocation_policy", "inventory_allocation_policy_revision",
 * "inventory_count", "inventory_item", "inventory_level", "inventory_movement",
 * "inventory_receipt", "inventory_reservation", "inventory_reservation_line",
 * "inventory_transfer", "inventory_transfer_line", "invoice", "invoice_delivery_attempt",
 * "invoice_late_fee", "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
 * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
 * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
 * "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
 * "order_line_item_modifier", "order_payment_attempt", "package", "package_item", "partner_app",
 * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
 * "payment_link_custom_field", "payment_link_line_item", "payment_method",
 * "payment_method_domain", "payment_review", "payout", "payout_destination", "payout_settings",
 * "price_list", "price_list_price", "product", "product_option", "product_option_value",
 * "product_variant", "promotion", "promotion_code", "purchase_refund_allocation", "refund",
 * "refund_allocation", "refund_line_item_adjustment", "report", "report_download", "return",
 * "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item",
 * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
 * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
 * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
 * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
 * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
 * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
 * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
 */
export type ResourceType = "api_key"
    | "api_request_log"
    | "balance"
    | "balance_transaction"
    | "bundle"
    | "bundle_component"
    | "category"
    | "checkout_session"
    | "checkout_session_customer_verification"
    | "credit_note"
    | "credit_note_allocation"
    | "custom_domain"
    | "customer"
    | "customer_address"
    | "customer_deletion_request"
    | "customer_email_preferences"
    | "customer_session"
    | "customer_tax_exemption"
    | "customer_verification"
    | "delivery_location_set"
    | "delivery_method"
    | "delivery_profile"
    | "delivery_quote"
    | "delivery_rate"
    | "delivery_rate_callback"
    | "delivery_revocation"
    | "delivery_selection"
    | "delivery_zone"
    | "demo_session"
    | "device"
    | "discount"
    | "dispute"
    | "email_change_request"
    | "environment_grant"
    | "feedback_report"
    | "file"
    | "flint_wallet"
    | "flint_wallet_card"
    | "fraud_warning"
    | "fulfillment"
    | "fulfillment_event"
    | "fulfillment_notification"
    | "gift_card"
    | "gift_card_funding_disposition"
    | "gift_card_load"
    | "gift_card_notification"
    | "gift_card_redemption"
    | "gift_card_transaction"
    | "image"
    | "inventory_adjustment"
    | "inventory_allocation_policy"
    | "inventory_allocation_policy_revision"
    | "inventory_count"
    | "inventory_item"
    | "inventory_level"
    | "inventory_movement"
    | "inventory_receipt"
    | "inventory_reservation"
    | "inventory_reservation_line"
    | "inventory_transfer"
    | "inventory_transfer_line"
    | "invoice"
    | "invoice_delivery_attempt"
    | "invoice_late_fee"
    | "invoice_line_item"
    | "invoice_manual_payment"
    | "invoice_payment_attempt"
    | "invoice_payment_term"
    | "location"
    | "merchant"
    | "merchant_billing_balance"
    | "merchant_billing_entry"
    | "merchant_billing_invoice"
    | "modifier"
    | "modifier_group"
    | "modifier_set"
    | "order"
    | "order_charge"
    | "order_edit"
    | "order_line_item"
    | "order_line_item_modifier"
    | "order_payment_attempt"
    | "package"
    | "package_item"
    | "partner_app"
    | "partner_app_credential"
    | "partner_app_install"
    | "payment_intent"
    | "payment_link"
    | "payment_link_custom_field"
    | "payment_link_line_item"
    | "payment_method"
    | "payment_method_domain"
    | "payment_review"
    | "payout"
    | "payout_destination"
    | "payout_settings"
    | "price_list"
    | "price_list_price"
    | "product"
    | "product_option"
    | "product_option_value"
    | "product_variant"
    | "promotion"
    | "promotion_code"
    | "purchase_refund_allocation"
    | "refund"
    | "refund_allocation"
    | "refund_line_item_adjustment"
    | "report"
    | "report_download"
    | "return"
    | "return_activity"
    | "return_disposition"
    | "return_inspection"
    | "return_inspection_line_item"
    | "return_line_item"
    | "return_policy"
    | "return_policy_revision"
    | "return_reason"
    | "return_receipt"
    | "return_receipt_line_item"
    | "return_resolution"
    | "risk_list"
    | "risk_list_item"
    | "risk_rule"
    | "sandbox"
    | "settings"
    | "shipment"
    | "subscription"
    | "subscription_delivery_migration"
    | "subscription_line_item"
    | "subscription_offer"
    | "subscription_payment_retry"
    | "subscription_plan"
    | "subscription_plan_line_item"
    | "tax_calculation_callback"
    | "tax_connection"
    | "tax_registration"
    | "test_clock"
    | "ticket"
    | "user"
    | "webhook_delivery"
    | "webhook_endpoint"
    | "webhook_event"
    | "workload_identity"
    | (string & {});
/**
 * The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of
 * the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void
 * credit note; Void invoice.
 */
export type ResourceVersionRequestInput = ConfirmReturnResolutionRequestInput;
/**
 * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request
 * was replayed, and any warnings.
 */
export type ResponseMeta = {
    /** API version used to produce this response. */
    "api_version"?: string;
    /** Whether this response replays a stored result for the supplied Idempotency-Key. */
    "idempotency_replayed"?: boolean;
    /**
     * Trace identifier to include when contacting Flint about this request. Example:
     * "0123456789abcdef0123456789abcdef".
     */
    "trace_id"?: string;
    /**
     * Conditions that need attention even though the request succeeded. [] (Value): {@link
     * ResponseWarning}. A non-blocking condition reported with a response. The `code` identifies
     * the condition and `severity` says how urgent it is.
     */
    "warnings"?: Array<ResponseWarning>;
};
/**
 * A non-blocking condition reported with a response. The `code` identifies the condition and
 * `severity` says how urgent it is.
 */
export type ResponseWarning = {
    /**
     * Merchant capability for merchant_onboarding_deadline, merchant_capability_pending, or
     * merchant_capability_inactive. Allowed for `merchant_onboarding_deadline`,
     * `merchant_capability_pending`, `merchant_capability_inactive` warnings. Value enum:
     * "accept_card_payments", "save_payment_methods", "accept_affirm_payments",
     * "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts",
     * "manage_payout_destinations", "manage_payout_settings".
     */
    "capability"?: "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | (string & {});
    /**
     * Warning code. Clients must accept values added in future releases. Value enum:
     * "billing_interval_options_same_price", "merchant_onboarding_past_due",
     * "merchant_onboarding_deadline", "merchant_capability_pending",
     * "merchant_capability_inactive", "payout_settings_reconciling", "promotion_declined",
     * "promotion_removed", "risk_rule_limit_reached", "rule_evaluation_stage_changed",
     * "api_key_scopes_reduced", "external_paid_orders_over_allowance",
     * "replacement_codes_unavailable".
     */
    "code": "billing_interval_options_same_price"
        | "merchant_onboarding_past_due"
        | "merchant_onboarding_deadline"
        | "merchant_capability_pending"
        | "merchant_capability_inactive"
        | "payout_settings_reconciling"
        | "promotion_declined"
        | "promotion_removed"
        | "risk_rule_limit_reached"
        | "rule_evaluation_stage_changed"
        | "api_key_scopes_reduced"
        | "external_paid_orders_over_allowance"
        | "replacement_codes_unavailable"
        | (string & {});
    /**
     * Time by which the merchant must submit onboarding requirements, as an RFC 3339 UTC
     * timestamp. Present only for merchant_onboarding_deadline or merchant_onboarding_past_due
     * when a submission deadline is set. Allowed for `merchant_onboarding_past_due`,
     * `merchant_onboarding_deadline` warnings. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "due_at"?: string;
    /** Description of the non-blocking condition. */
    "message": string;
    /**
     * Suggested actions for addressing the warning. Allowed for `merchant_onboarding_past_due`,
     * `merchant_onboarding_deadline`, `merchant_capability_pending`,
     * `merchant_capability_inactive`, `payout_settings_reconciling` warnings. [] (Value): {@link
     * NextAction}. A follow-up action. When target_resource is present, send its resource_id in
     * the target request field named {resource_type}_id.
     */
    "next_actions"?: Array<NextAction>;
    /**
     * Last synchronization time for merchant_onboarding_past_due, merchant_onboarding_deadline,
     * merchant_capability_pending, or merchant_capability_inactive, when available. Allowed for
     * `merchant_onboarding_past_due`, `merchant_onboarding_deadline`,
     * `merchant_capability_pending`, `merchant_capability_inactive` warnings. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "observed_at"?: string;
    /**
     * Previous risk rule evaluation stage for rule_evaluation_stage_changed. Allowed for
     * `rule_evaluation_stage_changed` warnings. Value enum: "pre_authorization",
     * "post_authorization".
     */
    "previous_stage"?: "pre_authorization" | "post_authorization" | (string & {});
    /**
     * Promotion code that was accepted but did not apply, on a promotion_declined warning, or the
     * code of a removed promotion discount, on a promotion_removed warning. Allowed for
     * `promotion_declined`, `promotion_removed` warnings.
     */
    "promotion_code"?: string;
    /**
     * Stable Flint reason code. On a promotion_declined or promotion_removed warning this is the
     * promotion decline reason (for example superseded_by_better_offer); an unrecognized value
     * falls back to not_eligible. See the Promotions reference for the full list. Allowed for
     * `promotion_declined`, `promotion_removed` warnings. Value enum: "already_applied",
     * "automatic_disabled", "buy_item_missing", "code_invalid", "code_required", "codes_disabled",
     * "currency_mismatch", "customer_limit_reached", "customer_mismatch", "customer_required",
     * "exhausted", "expired", "inactive", "max_promotions_reached", "minimum_not_met",
     * "no_discountable_balance", "not_combinable", "not_eligible", "not_yet_started",
     * "recurrence_completed", "superseded", "superseded_by_better_offer",
     * "superseded_by_higher_priority", "unknown_type".
     */
    "reason"?: "already_applied"
        | "automatic_disabled"
        | "buy_item_missing"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "currency_mismatch"
        | "customer_limit_reached"
        | "customer_mismatch"
        | "customer_required"
        | "exhausted"
        | "expired"
        | "inactive"
        | "max_promotions_reached"
        | "minimum_not_met"
        | "no_discountable_balance"
        | "not_combinable"
        | "not_eligible"
        | "not_yet_started"
        | "recurrence_completed"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "unknown_type"
        | (string & {});
    /**
     * Requested scopes excluded from the issued API key for api_key_scopes_reduced. Allowed for
     * `api_key_scopes_reduced` warnings. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
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
    "removed_scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
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
    /**
     * End of the original order reservation's usage period, at the start of a New York calendar
     * month, as an RFC 3339 UTC timestamp. Replays preserve this original reset time. Allowed for
     * `external_paid_orders_over_allowance` warnings. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "resets_at"?: string;
    /**
     * Resource ID, paired with resource_type when the warning identifies a resource. Allowed for
     * `billing_interval_options_same_price`, `merchant_onboarding_past_due`,
     * `merchant_onboarding_deadline`, `merchant_capability_pending`,
     * `merchant_capability_inactive`, `payout_settings_reconciling`, `promotion_declined`,
     * `promotion_removed`, `risk_rule_limit_reached`, `rule_evaluation_stage_changed`,
     * `external_paid_orders_over_allowance`, `replacement_codes_unavailable` warnings. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id"?: string;
    /**
     * Type of the resource identified by resource_id. Allowed for
     * `billing_interval_options_same_price`, `merchant_onboarding_past_due`,
     * `merchant_onboarding_deadline`, `merchant_capability_pending`,
     * `merchant_capability_inactive`, `payout_settings_reconciling`, `promotion_declined`,
     * `promotion_removed`, `risk_rule_limit_reached`, `rule_evaluation_stage_changed`,
     * `external_paid_orders_over_allowance`, `replacement_codes_unavailable` warnings. Example:
     * "order". Value enum: "api_key", "api_request_log", "balance", "balance_transaction",
     * "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_edit", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "price_list", "price_list_price",
     * "product", "product_option", "product_option_value", "product_variant", "promotion",
     * "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type"?: "api_key"
        | "api_request_log"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "bundle_component"
        | "category"
        | "checkout_session"
        | "checkout_session_customer_verification"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_address"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "customer_session"
        | "customer_tax_exemption"
        | "customer_verification"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_quote"
        | "delivery_rate"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "demo_session"
        | "device"
        | "discount"
        | "dispute"
        | "email_change_request"
        | "environment_grant"
        | "feedback_report"
        | "file"
        | "flint_wallet"
        | "flint_wallet_card"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "fulfillment_notification"
        | "gift_card"
        | "gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "image"
        | "inventory_adjustment"
        | "inventory_allocation_policy"
        | "inventory_allocation_policy_revision"
        | "inventory_count"
        | "inventory_item"
        | "inventory_level"
        | "inventory_movement"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "inventory_transfer_line"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_late_fee"
        | "invoice_line_item"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "invoice_payment_term"
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_edit"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_credential"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "price_list"
        | "price_list_price"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "report"
        | "report_download"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_inspection_line_item"
        | "return_line_item"
        | "return_policy"
        | "return_policy_revision"
        | "return_reason"
        | "return_receipt"
        | "return_receipt_line_item"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "sandbox"
        | "settings"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_line_item"
        | "subscription_offer"
        | "subscription_payment_retry"
        | "subscription_plan"
        | "subscription_plan_line_item"
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
    /** Warning severity. Value enum: "warning", "critical". */
    "severity": "warning" | "critical" | (string & {});
    /**
     * New risk rule evaluation stage for rule_evaluation_stage_changed. Allowed for
     * `rule_evaluation_stage_changed` warnings. Value enum: "pre_authorization",
     * "post_authorization".
     */
    "stage"?: "pre_authorization" | "post_authorization" | (string & {});
    /**
     * Discount amount this promotion would have applied had it won, on a promotion_declined
     * warning, or the amount a removed promotion discount applied before removal, on a
     * promotion_removed warning. Allowed for `promotion_declined`, `promotion_removed` warnings.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "would_have_applied_money"?: MoneyValue;
};
/** Retry the remaining refund money after refund processing has failed. */
export type RetryOrderEditRefundRequest = {
    /**
     * Refund destinations, with the same shape as on create. Omit to reuse the destinations frozen
     * on the edit. Default refund destinations for payment intent and gift card redemption
     * allocations planned by Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
};
/** Retry the remaining refund money after refund processing has failed. */
export type RetryOrderEditRefundRequestInput = {
    /**
     * Refund destinations, with the same shape as on create. Omit to reuse the destinations frozen
     * on the edit. Default refund destinations for payment intent and gift card redemption
     * allocations planned by Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
};
/** A response containing `RetryOrderEditRefundResult` data. */
export type RetryOrderEditRefundResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The order edit after a
     * refund retry, with the refunds that attempt created for its remaining money.
     */
    "data": RetryOrderEditRefundResult;
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
 * The order edit after a refund retry, with the refunds that attempt created for its remaining
 * money.
 */
export type RetryOrderEditRefundResult = {
    /**
     * The edit with its current unrefunded money and supported actions. Nested child of an order:
     * an immutable, completed removal with frozen refund amounts. Refund completion is tracked on
     * the refunds.
     */
    "order_edit": OrderEdit;
    /**
     * Refunds created by this retry attempt. [] (Value): {@link Refund}. Money returned against a
     * collected payment.
     */
    "refunds": Array<Refund>;
};
/** The request body for: Retry return disposition. */
export type RetryReturnDispositionRequest = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why the disposition is being run again. Value enum: "dependency_recovered",
     * "mapping_corrected", "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Retry return disposition. */
export type RetryReturnDispositionRequestInput = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why the disposition is being run again. Value enum: "dependency_recovered",
     * "mapping_corrected", "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type RetryReturnDispositionResponse = GetReturnDispositionResponse;
/** The request body for: Retry return resolution. */
export type RetryReturnResolutionRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Why the resolution is being run again. Value enum: "dependency_recovered",
     * "payment_method_updated", "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Retry return resolution. */
export type RetryReturnResolutionRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Why the resolution is being run again. Value enum: "dependency_recovered",
     * "payment_method_updated", "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type RetryReturnResolutionResponse = GetReturnResolutionResponse;
/** One entry in a return's activity history. */
export type ReturnActivity = {
    /**
     * What happened, as `<resource>.<action>`. Value enum: "return.canceled", "return.completed",
     * "return.created", "return.decision_recorded", "return.reopened",
     * "return.shipment_handoff_converged", "return.updated", "return_disposition.canceled",
     * "return_disposition.created", "return_disposition.failed", "return_disposition.retried",
     * "return_disposition.succeeded", "return_inspection.corrected", "return_inspection.created",
     * "return_inspection_line_item.acceptance_decided", "return_line_item.deleted",
     * "return_line_item.inspection_waived", "return_line_item.line_item_added",
     * "return_line_item.quantity_canceled", "return_line_item.updated",
     * "return_receipt.corrected", "return_receipt.created", "return_receipt_line_item.verified",
     * "return_resolution.buyer_payment_required", "return_resolution.canceled",
     * "return_resolution.confirmed", "return_resolution.created",
     * "return_resolution.effect_failed", "return_resolution.payment_failed",
     * "return_resolution.payment_intent_updated", "return_resolution.payment_succeeded",
     * "return_resolution.refund_failed", "return_resolution.refund_succeeded",
     * "return_resolution.released", "return_resolution.replacement_fulfilled",
     * "return_resolution.replacement_fulfillment_canceled",
     * "return_resolution.replacement_order_created", "return_resolution.retried",
     * "return_resolution.updated".
     */
    "activity_type": "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.shipment_handoff_converged"
        | "return.updated"
        | "return_disposition.canceled"
        | "return_disposition.created"
        | "return_disposition.failed"
        | "return_disposition.retried"
        | "return_disposition.succeeded"
        | "return_inspection.corrected"
        | "return_inspection.created"
        | "return_inspection_line_item.acceptance_decided"
        | "return_line_item.deleted"
        | "return_line_item.inspection_waived"
        | "return_line_item.line_item_added"
        | "return_line_item.quantity_canceled"
        | "return_line_item.updated"
        | "return_receipt.corrected"
        | "return_receipt.created"
        | "return_receipt_line_item.verified"
        | "return_resolution.buyer_payment_required"
        | "return_resolution.canceled"
        | "return_resolution.confirmed"
        | "return_resolution.created"
        | "return_resolution.effect_failed"
        | "return_resolution.payment_failed"
        | "return_resolution.payment_intent_updated"
        | "return_resolution.payment_succeeded"
        | "return_resolution.refund_failed"
        | "return_resolution.refund_succeeded"
        | "return_resolution.released"
        | "return_resolution.replacement_fulfilled"
        | "return_resolution.replacement_fulfillment_canceled"
        | "return_resolution.replacement_order_created"
        | "return_resolution.retried"
        | "return_resolution.updated"
        | (string & {});
    /**
     * Who took the action. Who performed a return action: a buyer, merchant, integration, or the
     * system, with an optional ID.
     */
    "actor": ReturnActor;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Canceled whole-number quantity; fractional quantities are not supported. Present only for
     * return_line_item.quantity_canceled. Format: int64.
     */
    "quantity"?: number;
    /**
     * The reason given for the action. When Flint records a failed effect, the failure code, such
     * as `refund_creation_failed`. Value enum: "additional_merchandise_received",
     * "automatic_receipt", "buyer_payment", "buyer_request", "changed_disposition",
     * "correction_required", "created_in_error", "customer_service", "customer_service_exception",
     * "dependency_recovered", "duplicate", "duplicate_observation", "entry_error",
     * "evidence_missing", "exception_resolved", "exception_waived", "expired",
     * "inspection_confirmed", "inspection_result", "inventory_effect_failed",
     * "inventory_item_unmapped", "linked_effect_changed", "manual_completion",
     * "manual_correction", "manual_release", "manual_review", "mapping_corrected",
     * "merchant_approved", "merchant_discretion", "merchant_request", "merchant_review",
     * "not_eligible", "operator_retry", "order_match_confirmed", "other",
     * "payment_intent_creation_failed", "payment_method_updated", "policy_correction",
     * "policy_override", "quantity_unavailable", "reconciliation_correction",
     * "refund_creation_failed", "refund_line_value_unavailable",
     * "replacement_order_creation_failed", "resolution_effect_failed", "return_policy",
     * "return_shipping_cost", "risk_review", "safety_requirement", "sku_match_confirmed",
     * "source_correction", "suspected_abuse", "trusted_in_store_handoff", "warehouse_override".
     */
    "reason"?: "additional_merchandise_received"
        | "automatic_receipt"
        | "buyer_payment"
        | "buyer_request"
        | "changed_disposition"
        | "correction_required"
        | "created_in_error"
        | "customer_service"
        | "customer_service_exception"
        | "dependency_recovered"
        | "duplicate"
        | "duplicate_observation"
        | "entry_error"
        | "evidence_missing"
        | "exception_resolved"
        | "exception_waived"
        | "expired"
        | "inspection_confirmed"
        | "inspection_result"
        | "inventory_effect_failed"
        | "inventory_item_unmapped"
        | "linked_effect_changed"
        | "manual_completion"
        | "manual_correction"
        | "manual_release"
        | "manual_review"
        | "mapping_corrected"
        | "merchant_approved"
        | "merchant_discretion"
        | "merchant_request"
        | "merchant_review"
        | "not_eligible"
        | "operator_retry"
        | "order_match_confirmed"
        | "other"
        | "payment_intent_creation_failed"
        | "payment_method_updated"
        | "policy_correction"
        | "policy_override"
        | "quantity_unavailable"
        | "reconciliation_correction"
        | "refund_creation_failed"
        | "refund_line_value_unavailable"
        | "replacement_order_creation_failed"
        | "resolution_effect_failed"
        | "return_policy"
        | "return_shipping_cost"
        | "risk_review"
        | "safety_requirement"
        | "sku_match_confirmed"
        | "source_correction"
        | "suspected_abuse"
        | "trusted_in_store_handoff"
        | "warehouse_override"
        | (string & {});
    /**
     * Free text given with the reason, or the failure message for a failed effect. Can hold staff
     * notes, so only merchant credentials can read it.
     */
    "reason_message"?: string;
    /**
     * The ID of the Return or child resource the activity touched, whose type is `resource_type`.
     * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "resource_id": string;
    /**
     * Type of the resource that changed: the part of `activity_type` before the dot. Example:
     * "return". Value enum: "api_key", "api_request_log", "balance", "balance_transaction",
     * "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_edit", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "price_list", "price_list_price",
     * "product", "product_option", "product_option_value", "product_variant", "promotion",
     * "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": "api_key"
        | "api_request_log"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "bundle_component"
        | "category"
        | "checkout_session"
        | "checkout_session_customer_verification"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_address"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "customer_session"
        | "customer_tax_exemption"
        | "customer_verification"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_quote"
        | "delivery_rate"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "demo_session"
        | "device"
        | "discount"
        | "dispute"
        | "email_change_request"
        | "environment_grant"
        | "feedback_report"
        | "file"
        | "flint_wallet"
        | "flint_wallet_card"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "fulfillment_notification"
        | "gift_card"
        | "gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "image"
        | "inventory_adjustment"
        | "inventory_allocation_policy"
        | "inventory_allocation_policy_revision"
        | "inventory_count"
        | "inventory_item"
        | "inventory_level"
        | "inventory_movement"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "inventory_transfer_line"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_late_fee"
        | "invoice_line_item"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "invoice_payment_term"
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_edit"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_credential"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "price_list"
        | "price_list_price"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "report"
        | "report_download"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_inspection_line_item"
        | "return_line_item"
        | "return_policy"
        | "return_policy_revision"
        | "return_reason"
        | "return_receipt"
        | "return_receipt_line_item"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "sandbox"
        | "settings"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_line_item"
        | "subscription_offer"
        | "subscription_payment_retry"
        | "subscription_plan"
        | "subscription_plan_line_item"
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
    /** Stable identifier of the activity. Example: "retact_01KEZF7C00J26XVS5GK98PQ39D". */
    "return_activity_id": string;
    /** The Return this activity belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /** Return version produced by this activity. Format: int64. minimum: 0. */
    "return_version": number;
};
