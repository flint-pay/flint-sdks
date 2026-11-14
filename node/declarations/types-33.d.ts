import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { PaymentErrorSummary, PartnerWebhookEnvelope } from './types-44.js';
import type { MerchantWebhookEnvelope } from './types-38.js';
import type { ResponseMeta } from './types-54.js';
import type { InvoiceLateFeePolicy } from './types-32.js';
import type { InputValue } from '../runtime.js';
import type { CreateInvoicePaymentTermRequestInput } from './types-10.js';
import type { DisputesAcceptParams } from './types-24.js';
import type { UpdateInvoicePaymentTermRequestInput } from './types-67.js';
import type { WebhookInvoice } from './types-70.js';
import type { InvoiceReminderRule } from './types-34.js';
/** An attempt to collect payment for an invoice. */
export type InvoicePaymentAttempt = {
    /**
     * When the attempt was canceled. An attempt canceled with its checkout session before payment
     * started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "canceled_at"?: string;
    /**
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "cancellation_requested_at"?: string;
    /**
     * The hosted or headless checkout session the buyer pays through. Absent for automatic
     * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /**
     * The amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "expected_amount_money": MoneyValue;
    /**
     * When a checkout attempt expires, matching its checkout session. Absent for automatic
     * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
    "invoice_payment_attempt_id": string;
    /**
     * The schedule entry this attempt collects. Absent when the attempt collects the invoice
     * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Why the payment failed. Present only when status is failed. A summary of why a payment
     * attempt failed, with a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * The payment intent behind this attempt. Absent until payment starts, such as a hosted
     * attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
     * Value enum: "card", "ach_debit".
     */
    "rail": "card" | "ach_debit" | (string & {});
    /**
     * When this attempt first settled successfully. Duplicate payment notifications preserve this
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "settled_at"?: string;
    /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Current payment attempt status. succeeded means this attempt completed successfully, even if
     * the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that
     * completion. Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     */
    "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
    /**
     * When this attempt last changed. Duplicate payment notifications preserve this timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
};
export type InvoicePaymentAttemptCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_payment_attempt.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_payment_attempt.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_payment_attempt.canceled";
});
/**
 * The `invoice_payment_attempt.canceled` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_payment_attempt.canceled". */
    "event_type"?: "invoice_payment_attempt.canceled";
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
 * The `invoice_payment_attempt.canceled` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_payment_attempt.canceled". */
    "event_type"?: "invoice_payment_attempt.canceled";
});
export type InvoicePaymentAttemptExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_payment_attempt.expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_payment_attempt.expired";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_payment_attempt.expired";
});
/**
 * The `invoice_payment_attempt.expired` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptExpiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_payment_attempt.expired". */
    "event_type"?: "invoice_payment_attempt.expired";
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
 * The `invoice_payment_attempt.expired` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_payment_attempt.expired". */
    "event_type"?: "invoice_payment_attempt.expired";
});
export type InvoicePaymentAttemptFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_payment_attempt.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_payment_attempt.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_payment_attempt.failed";
});
/**
 * The `invoice_payment_attempt.failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_payment_attempt.failed". */
    "event_type"?: "invoice_payment_attempt.failed";
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
 * The `invoice_payment_attempt.failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_payment_attempt.failed". */
    "event_type"?: "invoice_payment_attempt.failed";
});
/** A page of `InvoicePaymentAttempt` objects. */
export type InvoicePaymentAttemptListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InvoicePaymentAttempt}. An attempt to collect payment for an invoice.
     */
    "data": Array<InvoicePaymentAttempt>;
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
export type InvoicePaymentAttemptProcessingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_payment_attempt.processing";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_payment_attempt.processing";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_payment_attempt.processing";
});
/**
 * The `invoice_payment_attempt.processing` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptProcessingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_payment_attempt.processing". */
    "event_type"?: "invoice_payment_attempt.processing";
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
 * The `invoice_payment_attempt.processing` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptProcessingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_payment_attempt.processing". */
    "event_type"?: "invoice_payment_attempt.processing";
});
/** A response containing `InvoicePaymentAttempt` data. */
export type InvoicePaymentAttemptResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An attempt to collect
     * payment for an invoice.
     */
    "data": InvoicePaymentAttempt;
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
export type InvoicePaymentAttemptSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_payment_attempt.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_payment_attempt.succeeded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_payment_attempt.succeeded";
});
/**
 * The `invoice_payment_attempt.succeeded` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptSucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_payment_attempt.succeeded". */
    "event_type"?: "invoice_payment_attempt.succeeded";
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
 * The `invoice_payment_attempt.succeeded` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_payment_attempt.succeeded". */
    "event_type"?: "invoice_payment_attempt.succeeded";
});
/**
 * The invoice due-date policy resolved at write time. The object can be sent back when updating a
 * draft.
 */
export type InvoicePaymentDue = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Present only with date. The top-level due_date is the effective due date for every
     * type. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /** How the due date was set. Value enum: "none", "date", "payment_terms". */
    "type": "none" | "date" | "payment_terms" | (string & {});
})
    & ((Exclude<InvoicePaymentDueNone & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueDate & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDuePaymentTerms & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `date` variant of `InvoicePaymentDue`. */
export type InvoicePaymentDueDate = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Present only with date. The top-level due_date is the effective due date for every
     * type. Format: date. Example: "2026-08-02".
     */
    "due_date": string;
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /** How the due date was set. Value enum: "date". */
    "type": "date" | (string & {});
})
    & (({
    /** Value enum: "date". */
    "type"?: "date" | (string & {});
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Present only with date. The top-level due_date is the effective due date for every
     * type. Format: date. Example: "2026-08-02".
     */
    "due_date": string;
}));
/** The `customer_default` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputCustomerDefault = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "customer_default".
     */
    "type": "customer_default" | (string & {});
})
    & (({
    /** Value enum: "customer_default". */
    "type"?: "customer_default" | (string & {});
}));
/** The `customer_default` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputCustomerDefaultInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "customer_default".
     */
    "type": "customer_default";
})
    & (({
    /** Value enum: "customer_default". */
    "type"?: "customer_default";
})
    & (({
    "due_date"?: never;
}) & ({
    "invoice_payment_term_id"?: never;
})));
/** The `date` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputDateInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date": string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "date".
     */
    "type": "date";
})
    & (({
    /** Value enum: "date". */
    "type"?: "date";
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date": string;
})
    & ({
    "invoice_payment_term_id"?: never;
}));
/** The `merchant_default` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputMerchantDefault = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "merchant_default".
     */
    "type": "merchant_default" | (string & {});
})
    & (({
    /** Value enum: "merchant_default". */
    "type"?: "merchant_default" | (string & {});
}));
/** The `merchant_default` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputMerchantDefaultInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "merchant_default".
     */
    "type": "merchant_default";
})
    & (({
    /** Value enum: "merchant_default". */
    "type"?: "merchant_default";
})
    & (({
    "due_date"?: never;
}) & ({
    "invoice_payment_term_id"?: never;
})));
/** The `none` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputNoneInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "none".
     */
    "type": "none";
})
    & (({
    /** Value enum: "none". */
    "type"?: "none";
})
    & (({
    "due_date"?: never;
}) & ({
    "invoice_payment_term_id"?: never;
})));
/** The `payment_terms` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputPaymentTermsInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id": string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "payment_terms".
     */
    "type": "payment_terms";
})
    & (({
    /** Value enum: "payment_terms". */
    "type"?: "payment_terms";
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id": string;
})
    & ({
    "due_date"?: never;
}));
/** The `none` variant of `InvoicePaymentDue`. */
export type InvoicePaymentDueNone = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Present only with date. The top-level due_date is the effective due date for every
     * type. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /** How the due date was set. Value enum: "none". */
    "type": "none" | (string & {});
})
    & (({
    /** Value enum: "none". */
    "type"?: "none" | (string & {});
}));
/** The `payment_terms` variant of `InvoicePaymentDue`. */
export type InvoicePaymentDuePaymentTerms = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Present only with date. The top-level due_date is the effective due date for every
     * type. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id": string;
    /** How the due date was set. Value enum: "payment_terms". */
    "type": "payment_terms" | (string & {});
})
    & (({
    /** Value enum: "payment_terms". */
    "type"?: "payment_terms" | (string & {});
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id": string;
}));
/**
 * When an invoice is due, used when creating or updating an invoice: no due date, a calendar date,
 * payment terms, or a default.
 */
export type InvoicePaymentDueRequest = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "none", "date", "payment_terms",
     * "customer_default", "merchant_default".
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
 * When an invoice is due, used when creating or updating an invoice: no due date, a calendar date,
 * payment terms, or a default.
 */
export type InvoicePaymentDueRequestInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "none", "date", "payment_terms",
     * "customer_default", "merchant_default".
     */
    "type": "none" | "date" | "payment_terms" | "customer_default" | "merchant_default";
})
    & ((Exclude<InvoicePaymentDueInputNoneInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputDateInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputPaymentTermsInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputCustomerDefaultInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputMerchantDefaultInput & object, readonly unknown[]>));
/**
 * Compares two payment options on an invoice and shows the estimated savings from the lower-cost
 * option.
 */
export type InvoicePaymentOptionCostComparison = {
    /**
     * Payment option used as the baseline for estimated_savings_money. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "compared_with_payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
    /**
     * Estimated savings for the merchant, as a positive amount. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "estimated_savings_money": MoneyValue;
    /**
     * Payment option estimated to cost the merchant less for this invoice. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "lower_cost_payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
};
/** The largest invoice total allowed for a payment option. */
export type InvoicePaymentOptionLimit = {
    /**
     * The largest invoice total, in this currency, for which Flint offers the option. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_total_money": MoneyValue;
    /**
     * The payment option this cap applies to. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
};
/** The largest invoice total allowed for a payment option. */
export type InvoicePaymentOptionLimitRequestInput = {
    /**
     * The largest invoice total, in this currency, for which Flint offers the option. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_total_money": MoneyValueInput;
    /**
     * The payment option this cap applies to. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit";
};
/**
 * Which payment options an invoice accepts, any per-option total limits, and whether to show a
 * cost comparison.
 */
export type InvoicePaymentPolicy = {
    /**
     * The payment options the buyer can use on the hosted invoice page. Send at least one.
     * maxItems: 5. uniqueItems: true. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". [] (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit".
     */
    "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Caps by payment option and currency. Flint doesn't offer an option when the invoice total in
     * that currency is above its max_total_money. maxItems: 100. [] (Value): {@link
     * InvoicePaymentOptionLimit}. The largest invoice total allowed for a payment option.
     */
    "payment_option_limits"?: Array<InvoicePaymentOptionLimit>;
    /**
     * Whether the buyer's invoice shows the estimated savings of a lower-cost payment option.
     * Requires ach_debit and at least one of card, apple_pay, or google_pay.
     */
    "show_cost_comparison"?: boolean;
};
/**
 * Which payment options an invoice accepts, any per-option total limits, and whether to show a
 * cost comparison.
 */
export type InvoicePaymentPolicyRequestInput = {
    /**
     * The payment options the buyer can use on the hosted invoice page. Send at least one.
     * maxItems: 5. uniqueItems: true. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". [] (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit".
     */
    "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Caps by payment option and currency. Flint doesn't offer an option when the invoice total in
     * that currency is above its max_total_money. maxItems: 100. [] (Value): {@link
     * InvoicePaymentOptionLimitRequestInput}. The largest invoice total allowed for a payment
     * option.
     */
    "payment_option_limits"?: Array<InvoicePaymentOptionLimitRequestInput>;
    /**
     * Whether the buyer's invoice shows the estimated savings of a lower-cost payment option.
     * Requires ach_debit and at least one of card, apple_pay, or google_pay.
     */
    "show_cost_comparison"?: boolean;
};
/** The payment timing agreed for an invoice. */
export type InvoicePaymentTerm = {
    /**
     * Rule used to calculate the invoice's due date when it is issued. How an invoice due date is
     * calculated from payment terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the payment term captured on this invoice. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id": string;
    /**
     * One-time late fee policy captured with this term. Absent when no late fee policy applies. A
     * late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
     * whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Name of the payment term shown on invoices. */
    "name": string;
    /**
     * Whether the term can be selected for new invoices. Archiving preserves terms captured on
     * existing invoices. Value enum: "active", "archived".
     */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int32.
     */
    "version": number;
};
/**
 * How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day
 * of the month.
 */
export type InvoicePaymentTermCalculation = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "on_receipt", "net_days", "day_of_month", "day_of_next_month", "days_after_month_end".
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
/** The `day_of_month` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDayOfMonth = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_month".
     */
    "type": "day_of_month" | (string & {});
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_month".
     */
    "type": "day_of_month" | (string & {});
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
}));
/** The `day_of_month` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDayOfMonthRequestInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_month".
     */
    "type": "day_of_month";
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_month".
     */
    "type": "day_of_month";
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
})
    & ({
    "days"?: never;
}));
/** The `day_of_next_month` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDayOfNextMonth = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_next_month".
     */
    "type": "day_of_next_month" | (string & {});
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_next_month".
     */
    "type": "day_of_next_month" | (string & {});
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
}));
/** The `day_of_next_month` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDayOfNextMonthRequestInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_next_month".
     */
    "type": "day_of_next_month";
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_next_month".
     */
    "type": "day_of_next_month";
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
})
    & ({
    "days"?: never;
}));
/** The `days_after_month_end` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDaysAfterMonthEnd = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "days_after_month_end".
     */
    "type": "days_after_month_end" | (string & {});
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "days_after_month_end".
     */
    "type": "days_after_month_end" | (string & {});
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
}));
/** The `days_after_month_end` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDaysAfterMonthEndRequestInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "days_after_month_end".
     */
    "type": "days_after_month_end";
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "days_after_month_end".
     */
    "type": "days_after_month_end";
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
})
    & ({
    "day"?: never;
}));
/** The `net_days` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationNetDays = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum: "net_days".
     */
    "type": "net_days" | (string & {});
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum: "net_days".
     */
    "type": "net_days" | (string & {});
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
}));
/** The `net_days` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationNetDaysRequestInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum: "net_days".
     */
    "type": "net_days";
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum: "net_days".
     */
    "type": "net_days";
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
})
    & ({
    "day"?: never;
}));
/** The `on_receipt` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationOnReceipt = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "on_receipt".
     */
    "type": "on_receipt" | (string & {});
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "on_receipt".
     */
    "type": "on_receipt" | (string & {});
}));
/** The `on_receipt` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationOnReceiptRequestInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "on_receipt".
     */
    "type": "on_receipt";
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "on_receipt".
     */
    "type": "on_receipt";
})
    & (({
    "days"?: never;
}) & ({
    "day"?: never;
})));
/**
 * How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day
 * of the month.
 */
export type InvoicePaymentTermCalculationRequestInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "on_receipt", "net_days", "day_of_month", "day_of_next_month", "days_after_month_end".
     */
    "type": "on_receipt" | "net_days" | "day_of_month" | "day_of_next_month" | "days_after_month_end";
})
    & ((Exclude<InvoicePaymentTermCalculationOnReceiptRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationNetDaysRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDaysAfterMonthEndRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDayOfMonthRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDayOfNextMonthRequestInput & object, readonly unknown[]>));
/** A page of `InvoicePaymentTerm` objects. */
export type InvoicePaymentTermListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InvoicePaymentTerm}. The payment timing agreed for an invoice.
     */
    "data": Array<InvoicePaymentTerm>;
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
/** A response containing `InvoicePaymentTerm` data. */
export type InvoicePaymentTermResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The payment timing
     * agreed for an invoice.
     */
    "data": InvoicePaymentTerm;
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
export type InvoicePaymentTermsCreateParams = (InputValue<CreateInvoicePaymentTermRequestInput>)
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
export type InvoicePaymentTermsDeleteParams = {
    /** Optional version last read by the caller. Format: uint32. minimum: 1. */
    "expected_version"?: InputValue<number>;
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
export type InvoicePaymentTermsGetParams = DisputesAcceptParams;
export type InvoicePaymentTermsListParams = {
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
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "active", "archived". anyOf[1][] (Value): string. Value enum: "active",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across invoice payment term ID, external reference ID, and name. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as ipt_01.
     */
    "query"?: InputValue<string>;
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
/**
 * The payment terms saved on an invoice: the term's name, version, due date calculation, and late
 * fee policy.
 */
export type InvoicePaymentTermsSnapshot = {
    /**
     * Rule used to calculate the invoice's due date when it is issued. How an invoice due date is
     * calculated from payment terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    /**
     * ID of the payment term captured on this invoice. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id": string;
    /**
     * One-time late fee policy captured with this term. Absent when no late fee policy applies. A
     * late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
     * whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    /** Name of the payment term shown on invoices. */
    "name": string;
    /** Version of the invoice payment term captured in this snapshot. Format: int32. */
    "version": number;
};
export type InvoicePaymentTermsUpdateParams = (InputValue<UpdateInvoicePaymentTermRequestInput>)
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
export type InvoiceRefundedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.refunded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /** Value enum: "invoice.refunded". */
    "event_type"?: "invoice.refunded";
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
 * The `invoice.refunded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.refunded". */
    "event_type"?: "invoice.refunded";
});
export type InvoiceReminderDueEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.reminder_due";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.reminder_due";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.reminder_due". */
    "event_type"?: "invoice.reminder_due";
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
 * The `invoice.reminder_due` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceReminderDueMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.reminder_due". */
    "event_type"?: "invoice.reminder_due";
});
/**
 * Rules for automatic invoice reminders, each sent a set number of days before or after the due
 * date.
 */
export type InvoiceReminderPolicy = {
    /**
     * Reminder dates relative to the invoice due date. At most 20 rules; [] disables scheduled
     * reminders. maxItems: 20. [] (Value): {@link InvoiceReminderRule}. One reminder in an invoice
     * reminder policy. `days_from_due` sets when it is sent: negative values are days before the
     * due date, positive values days after.
     */
    "rules": Array<InvoiceReminderRule>;
};
