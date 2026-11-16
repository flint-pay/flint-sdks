import type { MerchantWebhookEnvelope, MetadataMap } from './types-38.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { PartnerWebhookEnvelope, PaymentErrorSummary } from './types-44.js';
import type { InvoicePaymentAttempt, InvoiceLateFeePolicy, InvoiceLateFee } from './types-32.js';
import type { ResponseMeta } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { CreateInvoicePaymentTermRequestInput } from './types-10.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { UpdateInvoicePaymentTermRequestInput } from './types-67.js';
import type { Address } from './types-0.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary } from './types-24.js';
import type { InvoiceCollection } from './types-31.js';
import type {
    InvoiceScheduleEntry,
    InvoiceSettlementAmounts,
    InvoiceSnapshot,
    InvoiceReminderRule,
    InvoiceReminderRuleInput
} from './types-34.js';
import type { PricingAmounts } from './types-50.js';
import type { WebhookInvoice } from './types-70.js';
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
            "supported_actions": Array<"cancel" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "cancellation_requested_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "expected_amount_money"?: ((MoneyValue) | (null));
            "expires_at"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_payment_attempt_id"?: ((string) | (null));
            "invoice_schedule_entry_id"?: ((string) | (null));
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            "payment_intent_id"?: ((string) | (null));
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            "settled_at"?: ((string) | (null));
            "started_at"?: ((string) | (null));
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
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
            "supported_actions": Array<"cancel" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "cancellation_requested_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "expected_amount_money"?: ((MoneyValue) | (null));
            "expires_at"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_payment_attempt_id"?: ((string) | (null));
            "invoice_schedule_entry_id"?: ((string) | (null));
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            "payment_intent_id"?: ((string) | (null));
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            "settled_at"?: ((string) | (null));
            "started_at"?: ((string) | (null));
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
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
     * "processing". object.supported_actions (Required): Array of string. Lifecycle actions
     * accepted now. An open or processing attempt can be canceled; the payment processor can still
     * refuse cancellation. [] enum: "cancel". object.supported_actions[] (Value): string. Value
     * enum: "cancel". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.canceled_at (Optional): string or null. When the attempt was canceled.
     * An attempt canceled with its checkout session before payment started may not have it.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.cancellation_requested_at (Optional): string or null.
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. previous_attributes.cancellation_requested_at.anyOf[1] (Value):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.cancellation_requested_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.expected_amount_money (Optional): {@link MoneyValue} or null. The
     * amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. previous_attributes.expected_amount_money.anyOf[1] (Value): {@link
     * MoneyValue}. The amount this attempt collects: the outstanding balance, or the targeted
     * schedule entry's outstanding amount. previous_attributes.expected_amount_money.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When a checkout
     * attempt expires, matching its checkout session. Absent for automatic charges.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When a checkout attempt expires,
     * matching its checkout session. Absent for automatic charges. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice this attempt
     * collects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this attempt
     * collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_payment_attempt_id (Optional): string or null.
     * Flint invoice payment attempt ID. previous_attributes.invoice_payment_attempt_id.anyOf[1]
     * (Value): string. Flint invoice payment attempt ID. Example:
     * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". previous_attributes.invoice_payment_attempt_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_schedule_entry_id (Optional): string or null. The
     * schedule entry this attempt collects. Absent when the attempt collects the invoice balance.
     * previous_attributes.invoice_schedule_entry_id.anyOf[1] (Value): string. The schedule entry
     * this attempt collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". previous_attributes.invoice_schedule_entry_id.anyOf[2]
     * (Value): null. previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummary} or null. Why the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. Why
     * the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_id (Optional): string or null. The payment intent behind
     * this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid
     * yet. previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent
     * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't
     * paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null. previous_attributes.rail
     * (Optional): string or null. How the attempt collects: card, including Apple Pay, Google Pay,
     * and Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[1]
     * (Value): string. How the attempt collects: card, including Apple Pay, Google Pay, and
     * Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[2]
     * (Value): null. previous_attributes.settled_at (Optional): string or null. When this attempt
     * first settled successfully. Duplicate payment notifications preserve this timestamp.
     * previous_attributes.settled_at.anyOf[1] (Value): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.settled_at.anyOf[2] (Value): null.
     * previous_attributes.started_at (Optional): string or null. When the attempt was created.
     * previous_attributes.started_at.anyOf[1] (Value): string. When the attempt was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.started_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current payment
     * attempt status. succeeded means this attempt completed successfully, even if the invoice
     * still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion.
     * Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[1] (Value): string. Current payment attempt status.
     * succeeded means this attempt completed successfully, even if the invoice still has an
     * outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum:
     * "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted now. An open or processing
     * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle
     * actions accepted now. An open or processing attempt can be canceled; the payment processor
     * can still refuse cancellation. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When this attempt last changed. Duplicate payment notifications
     * preserve this timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When this
     * attempt last changed. Duplicate payment notifications preserve this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
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
         * "succeeded", "failed", "canceled", "expired", "processing". supported_actions
         * (Required): Array of string. Lifecycle actions accepted now. An open or processing
         * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
         * "cancel". supported_actions[] (Value): string. Value enum: "cancel". updated_at
         * (Required): string. When this attempt last changed. Duplicate payment notifications
         * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". [] (Value):
             * string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
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
         * state, including synthetic test events. canceled_at (Optional): string or null. When the
         * attempt was canceled. An attempt canceled with its checkout session before payment
         * started may not have it. canceled_at.anyOf[1] (Value): string. When the attempt was
         * canceled. An attempt canceled with its checkout session before payment started may not
         * have it. Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2]
         * (Value): null. cancellation_requested_at (Optional): string or null. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. cancellation_requested_at.anyOf[1] (Value): string. When cancellation of this
         * attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * cancellation_requested_at.anyOf[2] (Value): null. checkout_session_id (Optional): string
         * or null. The hosted or headless checkout session the buyer pays through. Absent for
         * automatic charges. checkout_session_id.anyOf[1] (Value): string. The hosted or headless
         * checkout session the buyer pays through. Absent for automatic charges. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * expected_amount_money (Optional): {@link MoneyValue} or null. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[1] (Value): {@link MoneyValue}. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[2] (Value): null. expires_at (Optional): string or null.
         * When a checkout attempt expires, matching its checkout session. Absent for automatic
         * charges. expires_at.anyOf[1] (Value): string. When a checkout attempt expires, matching
         * its checkout session. Absent for automatic charges. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. invoice_id (Optional): string
         * or null. The invoice this attempt collects. invoice_id.anyOf[1] (Value): string. The
         * invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. invoice_payment_attempt_id (Optional): string or
         * null. Flint invoice payment attempt ID. invoice_payment_attempt_id.anyOf[1] (Value):
         * string. Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_payment_attempt_id.anyOf[2] (Value): null. invoice_schedule_entry_id (Optional):
         * string or null. The schedule entry this attempt collects. Absent when the attempt
         * collects the invoice balance. invoice_schedule_entry_id.anyOf[1] (Value): string. The
         * schedule entry this attempt collects. Absent when the attempt collects the invoice
         * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". invoice_schedule_entry_id.anyOf[2]
         * (Value): null. last_payment_error (Optional): {@link PaymentErrorSummary} or null. Why
         * the payment failed. Present only when status is failed. last_payment_error.anyOf[1]
         * (Value): {@link PaymentErrorSummary}. Why the payment failed. Present only when status
         * is failed. last_payment_error.anyOf[2] (Value): null. payment_intent_id (Optional):
         * string or null. The payment intent behind this attempt. Absent until payment starts,
         * such as a hosted attempt the buyer hasn't paid yet. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent behind this attempt. Absent until payment starts, such as a
         * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. rail (Optional): string or null. How the
         * attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
         * enum: "card", "ach_debit". rail.anyOf[1] (Value): string. How the attempt collects:
         * card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card",
         * "ach_debit". rail.anyOf[2] (Value): null. settled_at (Optional): string or null. When
         * this attempt first settled successfully. Duplicate payment notifications preserve this
         * timestamp. settled_at.anyOf[1] (Value): string. When this attempt first settled
         * successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". settled_at.anyOf[2] (Value): null.
         * started_at (Optional): string or null. When the attempt was created. started_at.anyOf[1]
         * (Value): string. When the attempt was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". started_at.anyOf[2] (Value): null. status (Optional): string or
         * null. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[1] (Value):
         * string. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[2] (Value):
         * null. supported_actions (Optional): Array of string or null. Lifecycle actions accepted
         * now. An open or processing attempt can be canceled; the payment processor can still
         * refuse cancellation. [] enum: "cancel". supported_actions.anyOf[1] (Value): Array of
         * string. Lifecycle actions accepted now. An open or processing attempt can be canceled;
         * the payment processor can still refuse cancellation. [] enum: "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
         * supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * this attempt last changed. Duplicate payment notifications preserve this timestamp.
         * updated_at.anyOf[1] (Value): string. When this attempt last changed. Duplicate payment
         * notifications preserve this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. anyOf[1] (Value): string. When the attempt was
             * canceled. An attempt canceled with its checkout session before payment started may
             * not have it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. anyOf[1] (Value): string. When cancellation of this
             * attempt was last requested. It stays set when the payment processor refuses the
             * cancellation or the payment settles first, so read status and canceled_at for the
             * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "cancellation_requested_at"?: ((string) | (null));
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. anyOf[1] (Value): string. The hosted or headless checkout session the buyer
             * pays through. Absent for automatic charges. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. anyOf[1] (Value): {@link MoneyValue}. The amount this
             * attempt collects: the outstanding balance, or the targeted schedule entry's
             * outstanding amount. anyOf[2] (Value): null.
             */
            "expected_amount_money"?: ((MoneyValue) | (null));
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. anyOf[1] (Value): string. When a checkout attempt expires, matching its
             * checkout session. Absent for automatic charges. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The invoice this attempt collects. anyOf[1] (Value): string. The invoice this
             * attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Flint invoice payment attempt ID. anyOf[1] (Value): string. Flint invoice payment
             * attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". anyOf[2] (Value): null.
             */
            "invoice_payment_attempt_id"?: ((string) | (null));
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. anyOf[1] (Value): string. The schedule entry this attempt collects.
             * Absent when the attempt collects the invoice balance. Example:
             * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". anyOf[2] (Value): null.
             */
            "invoice_schedule_entry_id"?: ((string) | (null));
            /**
             * Why the payment failed. Present only when status is failed. anyOf[1] (Value): {@link
             * PaymentErrorSummary}. Why the payment failed. Present only when status is failed.
             * anyOf[2] (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. anyOf[1] (Value): string. The payment
             * intent behind this attempt. Absent until payment starts, such as a hosted attempt
             * the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit". anyOf[1] (Value): string. How the attempt
             * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
             * enum: "card", "ach_debit". anyOf[2] (Value): null.
             */
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. anyOf[1] (Value): string. When this attempt first settled
             * successfully. Duplicate payment notifications preserve this timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "settled_at"?: ((string) | (null));
            /**
             * When the attempt was created. anyOf[1] (Value): string. When the attempt was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "started_at"?: ((string) | (null));
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[1] (Value):
             * string. Current payment attempt status. succeeded means this attempt completed
             * successfully, even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". anyOf[1]
             * (Value): Array of string. Lifecycle actions accepted now. An open or processing
             * attempt can be canceled; the payment processor can still refuse cancellation. []
             * enum: "cancel". anyOf[1][] (Value): string. Value enum: "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. anyOf[1] (Value): string. When this attempt last changed. Duplicate
             * payment notifications preserve this timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
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
     * "processing". object.supported_actions (Required): Array of string. Lifecycle actions
     * accepted now. An open or processing attempt can be canceled; the payment processor can still
     * refuse cancellation. [] enum: "cancel". object.supported_actions[] (Value): string. Value
     * enum: "cancel". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.canceled_at (Optional): string or null. When the attempt was canceled.
     * An attempt canceled with its checkout session before payment started may not have it.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.cancellation_requested_at (Optional): string or null.
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. previous_attributes.cancellation_requested_at.anyOf[1] (Value):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.cancellation_requested_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.expected_amount_money (Optional): {@link MoneyValue} or null. The
     * amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. previous_attributes.expected_amount_money.anyOf[1] (Value): {@link
     * MoneyValue}. The amount this attempt collects: the outstanding balance, or the targeted
     * schedule entry's outstanding amount. previous_attributes.expected_amount_money.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When a checkout
     * attempt expires, matching its checkout session. Absent for automatic charges.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When a checkout attempt expires,
     * matching its checkout session. Absent for automatic charges. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice this attempt
     * collects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this attempt
     * collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_payment_attempt_id (Optional): string or null.
     * Flint invoice payment attempt ID. previous_attributes.invoice_payment_attempt_id.anyOf[1]
     * (Value): string. Flint invoice payment attempt ID. Example:
     * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". previous_attributes.invoice_payment_attempt_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_schedule_entry_id (Optional): string or null. The
     * schedule entry this attempt collects. Absent when the attempt collects the invoice balance.
     * previous_attributes.invoice_schedule_entry_id.anyOf[1] (Value): string. The schedule entry
     * this attempt collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". previous_attributes.invoice_schedule_entry_id.anyOf[2]
     * (Value): null. previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummary} or null. Why the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. Why
     * the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_id (Optional): string or null. The payment intent behind
     * this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid
     * yet. previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent
     * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't
     * paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null. previous_attributes.rail
     * (Optional): string or null. How the attempt collects: card, including Apple Pay, Google Pay,
     * and Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[1]
     * (Value): string. How the attempt collects: card, including Apple Pay, Google Pay, and
     * Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[2]
     * (Value): null. previous_attributes.settled_at (Optional): string or null. When this attempt
     * first settled successfully. Duplicate payment notifications preserve this timestamp.
     * previous_attributes.settled_at.anyOf[1] (Value): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.settled_at.anyOf[2] (Value): null.
     * previous_attributes.started_at (Optional): string or null. When the attempt was created.
     * previous_attributes.started_at.anyOf[1] (Value): string. When the attempt was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.started_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current payment
     * attempt status. succeeded means this attempt completed successfully, even if the invoice
     * still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion.
     * Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[1] (Value): string. Current payment attempt status.
     * succeeded means this attempt completed successfully, even if the invoice still has an
     * outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum:
     * "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted now. An open or processing
     * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle
     * actions accepted now. An open or processing attempt can be canceled; the payment processor
     * can still refuse cancellation. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When this attempt last changed. Duplicate payment notifications
     * preserve this timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When this
     * attempt last changed. Duplicate payment notifications preserve this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
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
         * "succeeded", "failed", "canceled", "expired", "processing". supported_actions
         * (Required): Array of string. Lifecycle actions accepted now. An open or processing
         * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
         * "cancel". supported_actions[] (Value): string. Value enum: "cancel". updated_at
         * (Required): string. When this attempt last changed. Duplicate payment notifications
         * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". [] (Value):
             * string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
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
         * state, including synthetic test events. canceled_at (Optional): string or null. When the
         * attempt was canceled. An attempt canceled with its checkout session before payment
         * started may not have it. canceled_at.anyOf[1] (Value): string. When the attempt was
         * canceled. An attempt canceled with its checkout session before payment started may not
         * have it. Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2]
         * (Value): null. cancellation_requested_at (Optional): string or null. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. cancellation_requested_at.anyOf[1] (Value): string. When cancellation of this
         * attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * cancellation_requested_at.anyOf[2] (Value): null. checkout_session_id (Optional): string
         * or null. The hosted or headless checkout session the buyer pays through. Absent for
         * automatic charges. checkout_session_id.anyOf[1] (Value): string. The hosted or headless
         * checkout session the buyer pays through. Absent for automatic charges. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * expected_amount_money (Optional): {@link MoneyValue} or null. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[1] (Value): {@link MoneyValue}. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[2] (Value): null. expires_at (Optional): string or null.
         * When a checkout attempt expires, matching its checkout session. Absent for automatic
         * charges. expires_at.anyOf[1] (Value): string. When a checkout attempt expires, matching
         * its checkout session. Absent for automatic charges. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. invoice_id (Optional): string
         * or null. The invoice this attempt collects. invoice_id.anyOf[1] (Value): string. The
         * invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. invoice_payment_attempt_id (Optional): string or
         * null. Flint invoice payment attempt ID. invoice_payment_attempt_id.anyOf[1] (Value):
         * string. Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_payment_attempt_id.anyOf[2] (Value): null. invoice_schedule_entry_id (Optional):
         * string or null. The schedule entry this attempt collects. Absent when the attempt
         * collects the invoice balance. invoice_schedule_entry_id.anyOf[1] (Value): string. The
         * schedule entry this attempt collects. Absent when the attempt collects the invoice
         * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". invoice_schedule_entry_id.anyOf[2]
         * (Value): null. last_payment_error (Optional): {@link PaymentErrorSummary} or null. Why
         * the payment failed. Present only when status is failed. last_payment_error.anyOf[1]
         * (Value): {@link PaymentErrorSummary}. Why the payment failed. Present only when status
         * is failed. last_payment_error.anyOf[2] (Value): null. payment_intent_id (Optional):
         * string or null. The payment intent behind this attempt. Absent until payment starts,
         * such as a hosted attempt the buyer hasn't paid yet. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent behind this attempt. Absent until payment starts, such as a
         * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. rail (Optional): string or null. How the
         * attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
         * enum: "card", "ach_debit". rail.anyOf[1] (Value): string. How the attempt collects:
         * card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card",
         * "ach_debit". rail.anyOf[2] (Value): null. settled_at (Optional): string or null. When
         * this attempt first settled successfully. Duplicate payment notifications preserve this
         * timestamp. settled_at.anyOf[1] (Value): string. When this attempt first settled
         * successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". settled_at.anyOf[2] (Value): null.
         * started_at (Optional): string or null. When the attempt was created. started_at.anyOf[1]
         * (Value): string. When the attempt was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". started_at.anyOf[2] (Value): null. status (Optional): string or
         * null. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[1] (Value):
         * string. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[2] (Value):
         * null. supported_actions (Optional): Array of string or null. Lifecycle actions accepted
         * now. An open or processing attempt can be canceled; the payment processor can still
         * refuse cancellation. [] enum: "cancel". supported_actions.anyOf[1] (Value): Array of
         * string. Lifecycle actions accepted now. An open or processing attempt can be canceled;
         * the payment processor can still refuse cancellation. [] enum: "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
         * supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * this attempt last changed. Duplicate payment notifications preserve this timestamp.
         * updated_at.anyOf[1] (Value): string. When this attempt last changed. Duplicate payment
         * notifications preserve this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. anyOf[1] (Value): string. When the attempt was
             * canceled. An attempt canceled with its checkout session before payment started may
             * not have it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. anyOf[1] (Value): string. When cancellation of this
             * attempt was last requested. It stays set when the payment processor refuses the
             * cancellation or the payment settles first, so read status and canceled_at for the
             * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "cancellation_requested_at"?: ((string) | (null));
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. anyOf[1] (Value): string. The hosted or headless checkout session the buyer
             * pays through. Absent for automatic charges. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. anyOf[1] (Value): {@link MoneyValue}. The amount this
             * attempt collects: the outstanding balance, or the targeted schedule entry's
             * outstanding amount. anyOf[2] (Value): null.
             */
            "expected_amount_money"?: ((MoneyValue) | (null));
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. anyOf[1] (Value): string. When a checkout attempt expires, matching its
             * checkout session. Absent for automatic charges. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The invoice this attempt collects. anyOf[1] (Value): string. The invoice this
             * attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Flint invoice payment attempt ID. anyOf[1] (Value): string. Flint invoice payment
             * attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". anyOf[2] (Value): null.
             */
            "invoice_payment_attempt_id"?: ((string) | (null));
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. anyOf[1] (Value): string. The schedule entry this attempt collects.
             * Absent when the attempt collects the invoice balance. Example:
             * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". anyOf[2] (Value): null.
             */
            "invoice_schedule_entry_id"?: ((string) | (null));
            /**
             * Why the payment failed. Present only when status is failed. anyOf[1] (Value): {@link
             * PaymentErrorSummary}. Why the payment failed. Present only when status is failed.
             * anyOf[2] (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. anyOf[1] (Value): string. The payment
             * intent behind this attempt. Absent until payment starts, such as a hosted attempt
             * the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit". anyOf[1] (Value): string. How the attempt
             * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
             * enum: "card", "ach_debit". anyOf[2] (Value): null.
             */
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. anyOf[1] (Value): string. When this attempt first settled
             * successfully. Duplicate payment notifications preserve this timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "settled_at"?: ((string) | (null));
            /**
             * When the attempt was created. anyOf[1] (Value): string. When the attempt was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "started_at"?: ((string) | (null));
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[1] (Value):
             * string. Current payment attempt status. succeeded means this attempt completed
             * successfully, even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". anyOf[1]
             * (Value): Array of string. Lifecycle actions accepted now. An open or processing
             * attempt can be canceled; the payment processor can still refuse cancellation. []
             * enum: "cancel". anyOf[1][] (Value): string. Value enum: "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. anyOf[1] (Value): string. When this attempt last changed. Duplicate
             * payment notifications preserve this timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
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
            "supported_actions": Array<"cancel" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "cancellation_requested_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "expected_amount_money"?: ((MoneyValue) | (null));
            "expires_at"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_payment_attempt_id"?: ((string) | (null));
            "invoice_schedule_entry_id"?: ((string) | (null));
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            "payment_intent_id"?: ((string) | (null));
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            "settled_at"?: ((string) | (null));
            "started_at"?: ((string) | (null));
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
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
            "supported_actions": Array<"cancel" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "cancellation_requested_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "expected_amount_money"?: ((MoneyValue) | (null));
            "expires_at"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_payment_attempt_id"?: ((string) | (null));
            "invoice_schedule_entry_id"?: ((string) | (null));
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            "payment_intent_id"?: ((string) | (null));
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            "settled_at"?: ((string) | (null));
            "started_at"?: ((string) | (null));
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
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
     * "processing". object.supported_actions (Required): Array of string. Lifecycle actions
     * accepted now. An open or processing attempt can be canceled; the payment processor can still
     * refuse cancellation. [] enum: "cancel". object.supported_actions[] (Value): string. Value
     * enum: "cancel". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.canceled_at (Optional): string or null. When the attempt was canceled.
     * An attempt canceled with its checkout session before payment started may not have it.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.cancellation_requested_at (Optional): string or null.
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. previous_attributes.cancellation_requested_at.anyOf[1] (Value):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.cancellation_requested_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.expected_amount_money (Optional): {@link MoneyValue} or null. The
     * amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. previous_attributes.expected_amount_money.anyOf[1] (Value): {@link
     * MoneyValue}. The amount this attempt collects: the outstanding balance, or the targeted
     * schedule entry's outstanding amount. previous_attributes.expected_amount_money.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When a checkout
     * attempt expires, matching its checkout session. Absent for automatic charges.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When a checkout attempt expires,
     * matching its checkout session. Absent for automatic charges. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice this attempt
     * collects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this attempt
     * collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_payment_attempt_id (Optional): string or null.
     * Flint invoice payment attempt ID. previous_attributes.invoice_payment_attempt_id.anyOf[1]
     * (Value): string. Flint invoice payment attempt ID. Example:
     * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". previous_attributes.invoice_payment_attempt_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_schedule_entry_id (Optional): string or null. The
     * schedule entry this attempt collects. Absent when the attempt collects the invoice balance.
     * previous_attributes.invoice_schedule_entry_id.anyOf[1] (Value): string. The schedule entry
     * this attempt collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". previous_attributes.invoice_schedule_entry_id.anyOf[2]
     * (Value): null. previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummary} or null. Why the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. Why
     * the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_id (Optional): string or null. The payment intent behind
     * this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid
     * yet. previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent
     * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't
     * paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null. previous_attributes.rail
     * (Optional): string or null. How the attempt collects: card, including Apple Pay, Google Pay,
     * and Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[1]
     * (Value): string. How the attempt collects: card, including Apple Pay, Google Pay, and
     * Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[2]
     * (Value): null. previous_attributes.settled_at (Optional): string or null. When this attempt
     * first settled successfully. Duplicate payment notifications preserve this timestamp.
     * previous_attributes.settled_at.anyOf[1] (Value): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.settled_at.anyOf[2] (Value): null.
     * previous_attributes.started_at (Optional): string or null. When the attempt was created.
     * previous_attributes.started_at.anyOf[1] (Value): string. When the attempt was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.started_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current payment
     * attempt status. succeeded means this attempt completed successfully, even if the invoice
     * still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion.
     * Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[1] (Value): string. Current payment attempt status.
     * succeeded means this attempt completed successfully, even if the invoice still has an
     * outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum:
     * "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted now. An open or processing
     * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle
     * actions accepted now. An open or processing attempt can be canceled; the payment processor
     * can still refuse cancellation. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When this attempt last changed. Duplicate payment notifications
     * preserve this timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When this
     * attempt last changed. Duplicate payment notifications preserve this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
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
         * "succeeded", "failed", "canceled", "expired", "processing". supported_actions
         * (Required): Array of string. Lifecycle actions accepted now. An open or processing
         * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
         * "cancel". supported_actions[] (Value): string. Value enum: "cancel". updated_at
         * (Required): string. When this attempt last changed. Duplicate payment notifications
         * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". [] (Value):
             * string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
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
         * state, including synthetic test events. canceled_at (Optional): string or null. When the
         * attempt was canceled. An attempt canceled with its checkout session before payment
         * started may not have it. canceled_at.anyOf[1] (Value): string. When the attempt was
         * canceled. An attempt canceled with its checkout session before payment started may not
         * have it. Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2]
         * (Value): null. cancellation_requested_at (Optional): string or null. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. cancellation_requested_at.anyOf[1] (Value): string. When cancellation of this
         * attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * cancellation_requested_at.anyOf[2] (Value): null. checkout_session_id (Optional): string
         * or null. The hosted or headless checkout session the buyer pays through. Absent for
         * automatic charges. checkout_session_id.anyOf[1] (Value): string. The hosted or headless
         * checkout session the buyer pays through. Absent for automatic charges. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * expected_amount_money (Optional): {@link MoneyValue} or null. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[1] (Value): {@link MoneyValue}. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[2] (Value): null. expires_at (Optional): string or null.
         * When a checkout attempt expires, matching its checkout session. Absent for automatic
         * charges. expires_at.anyOf[1] (Value): string. When a checkout attempt expires, matching
         * its checkout session. Absent for automatic charges. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. invoice_id (Optional): string
         * or null. The invoice this attempt collects. invoice_id.anyOf[1] (Value): string. The
         * invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. invoice_payment_attempt_id (Optional): string or
         * null. Flint invoice payment attempt ID. invoice_payment_attempt_id.anyOf[1] (Value):
         * string. Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_payment_attempt_id.anyOf[2] (Value): null. invoice_schedule_entry_id (Optional):
         * string or null. The schedule entry this attempt collects. Absent when the attempt
         * collects the invoice balance. invoice_schedule_entry_id.anyOf[1] (Value): string. The
         * schedule entry this attempt collects. Absent when the attempt collects the invoice
         * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". invoice_schedule_entry_id.anyOf[2]
         * (Value): null. last_payment_error (Optional): {@link PaymentErrorSummary} or null. Why
         * the payment failed. Present only when status is failed. last_payment_error.anyOf[1]
         * (Value): {@link PaymentErrorSummary}. Why the payment failed. Present only when status
         * is failed. last_payment_error.anyOf[2] (Value): null. payment_intent_id (Optional):
         * string or null. The payment intent behind this attempt. Absent until payment starts,
         * such as a hosted attempt the buyer hasn't paid yet. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent behind this attempt. Absent until payment starts, such as a
         * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. rail (Optional): string or null. How the
         * attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
         * enum: "card", "ach_debit". rail.anyOf[1] (Value): string. How the attempt collects:
         * card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card",
         * "ach_debit". rail.anyOf[2] (Value): null. settled_at (Optional): string or null. When
         * this attempt first settled successfully. Duplicate payment notifications preserve this
         * timestamp. settled_at.anyOf[1] (Value): string. When this attempt first settled
         * successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". settled_at.anyOf[2] (Value): null.
         * started_at (Optional): string or null. When the attempt was created. started_at.anyOf[1]
         * (Value): string. When the attempt was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". started_at.anyOf[2] (Value): null. status (Optional): string or
         * null. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[1] (Value):
         * string. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[2] (Value):
         * null. supported_actions (Optional): Array of string or null. Lifecycle actions accepted
         * now. An open or processing attempt can be canceled; the payment processor can still
         * refuse cancellation. [] enum: "cancel". supported_actions.anyOf[1] (Value): Array of
         * string. Lifecycle actions accepted now. An open or processing attempt can be canceled;
         * the payment processor can still refuse cancellation. [] enum: "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
         * supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * this attempt last changed. Duplicate payment notifications preserve this timestamp.
         * updated_at.anyOf[1] (Value): string. When this attempt last changed. Duplicate payment
         * notifications preserve this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. anyOf[1] (Value): string. When the attempt was
             * canceled. An attempt canceled with its checkout session before payment started may
             * not have it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. anyOf[1] (Value): string. When cancellation of this
             * attempt was last requested. It stays set when the payment processor refuses the
             * cancellation or the payment settles first, so read status and canceled_at for the
             * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "cancellation_requested_at"?: ((string) | (null));
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. anyOf[1] (Value): string. The hosted or headless checkout session the buyer
             * pays through. Absent for automatic charges. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. anyOf[1] (Value): {@link MoneyValue}. The amount this
             * attempt collects: the outstanding balance, or the targeted schedule entry's
             * outstanding amount. anyOf[2] (Value): null.
             */
            "expected_amount_money"?: ((MoneyValue) | (null));
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. anyOf[1] (Value): string. When a checkout attempt expires, matching its
             * checkout session. Absent for automatic charges. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The invoice this attempt collects. anyOf[1] (Value): string. The invoice this
             * attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Flint invoice payment attempt ID. anyOf[1] (Value): string. Flint invoice payment
             * attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". anyOf[2] (Value): null.
             */
            "invoice_payment_attempt_id"?: ((string) | (null));
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. anyOf[1] (Value): string. The schedule entry this attempt collects.
             * Absent when the attempt collects the invoice balance. Example:
             * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". anyOf[2] (Value): null.
             */
            "invoice_schedule_entry_id"?: ((string) | (null));
            /**
             * Why the payment failed. Present only when status is failed. anyOf[1] (Value): {@link
             * PaymentErrorSummary}. Why the payment failed. Present only when status is failed.
             * anyOf[2] (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. anyOf[1] (Value): string. The payment
             * intent behind this attempt. Absent until payment starts, such as a hosted attempt
             * the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit". anyOf[1] (Value): string. How the attempt
             * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
             * enum: "card", "ach_debit". anyOf[2] (Value): null.
             */
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. anyOf[1] (Value): string. When this attempt first settled
             * successfully. Duplicate payment notifications preserve this timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "settled_at"?: ((string) | (null));
            /**
             * When the attempt was created. anyOf[1] (Value): string. When the attempt was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "started_at"?: ((string) | (null));
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[1] (Value):
             * string. Current payment attempt status. succeeded means this attempt completed
             * successfully, even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". anyOf[1]
             * (Value): Array of string. Lifecycle actions accepted now. An open or processing
             * attempt can be canceled; the payment processor can still refuse cancellation. []
             * enum: "cancel". anyOf[1][] (Value): string. Value enum: "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. anyOf[1] (Value): string. When this attempt last changed. Duplicate
             * payment notifications preserve this timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
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
     * "processing". object.supported_actions (Required): Array of string. Lifecycle actions
     * accepted now. An open or processing attempt can be canceled; the payment processor can still
     * refuse cancellation. [] enum: "cancel". object.supported_actions[] (Value): string. Value
     * enum: "cancel". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.canceled_at (Optional): string or null. When the attempt was canceled.
     * An attempt canceled with its checkout session before payment started may not have it.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.cancellation_requested_at (Optional): string or null.
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. previous_attributes.cancellation_requested_at.anyOf[1] (Value):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.cancellation_requested_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.expected_amount_money (Optional): {@link MoneyValue} or null. The
     * amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. previous_attributes.expected_amount_money.anyOf[1] (Value): {@link
     * MoneyValue}. The amount this attempt collects: the outstanding balance, or the targeted
     * schedule entry's outstanding amount. previous_attributes.expected_amount_money.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When a checkout
     * attempt expires, matching its checkout session. Absent for automatic charges.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When a checkout attempt expires,
     * matching its checkout session. Absent for automatic charges. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice this attempt
     * collects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this attempt
     * collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_payment_attempt_id (Optional): string or null.
     * Flint invoice payment attempt ID. previous_attributes.invoice_payment_attempt_id.anyOf[1]
     * (Value): string. Flint invoice payment attempt ID. Example:
     * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". previous_attributes.invoice_payment_attempt_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_schedule_entry_id (Optional): string or null. The
     * schedule entry this attempt collects. Absent when the attempt collects the invoice balance.
     * previous_attributes.invoice_schedule_entry_id.anyOf[1] (Value): string. The schedule entry
     * this attempt collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". previous_attributes.invoice_schedule_entry_id.anyOf[2]
     * (Value): null. previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummary} or null. Why the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. Why
     * the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_id (Optional): string or null. The payment intent behind
     * this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid
     * yet. previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent
     * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't
     * paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null. previous_attributes.rail
     * (Optional): string or null. How the attempt collects: card, including Apple Pay, Google Pay,
     * and Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[1]
     * (Value): string. How the attempt collects: card, including Apple Pay, Google Pay, and
     * Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[2]
     * (Value): null. previous_attributes.settled_at (Optional): string or null. When this attempt
     * first settled successfully. Duplicate payment notifications preserve this timestamp.
     * previous_attributes.settled_at.anyOf[1] (Value): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.settled_at.anyOf[2] (Value): null.
     * previous_attributes.started_at (Optional): string or null. When the attempt was created.
     * previous_attributes.started_at.anyOf[1] (Value): string. When the attempt was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.started_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current payment
     * attempt status. succeeded means this attempt completed successfully, even if the invoice
     * still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion.
     * Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[1] (Value): string. Current payment attempt status.
     * succeeded means this attempt completed successfully, even if the invoice still has an
     * outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum:
     * "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted now. An open or processing
     * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle
     * actions accepted now. An open or processing attempt can be canceled; the payment processor
     * can still refuse cancellation. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When this attempt last changed. Duplicate payment notifications
     * preserve this timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When this
     * attempt last changed. Duplicate payment notifications preserve this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
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
         * "succeeded", "failed", "canceled", "expired", "processing". supported_actions
         * (Required): Array of string. Lifecycle actions accepted now. An open or processing
         * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
         * "cancel". supported_actions[] (Value): string. Value enum: "cancel". updated_at
         * (Required): string. When this attempt last changed. Duplicate payment notifications
         * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". [] (Value):
             * string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
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
         * state, including synthetic test events. canceled_at (Optional): string or null. When the
         * attempt was canceled. An attempt canceled with its checkout session before payment
         * started may not have it. canceled_at.anyOf[1] (Value): string. When the attempt was
         * canceled. An attempt canceled with its checkout session before payment started may not
         * have it. Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2]
         * (Value): null. cancellation_requested_at (Optional): string or null. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. cancellation_requested_at.anyOf[1] (Value): string. When cancellation of this
         * attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * cancellation_requested_at.anyOf[2] (Value): null. checkout_session_id (Optional): string
         * or null. The hosted or headless checkout session the buyer pays through. Absent for
         * automatic charges. checkout_session_id.anyOf[1] (Value): string. The hosted or headless
         * checkout session the buyer pays through. Absent for automatic charges. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * expected_amount_money (Optional): {@link MoneyValue} or null. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[1] (Value): {@link MoneyValue}. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[2] (Value): null. expires_at (Optional): string or null.
         * When a checkout attempt expires, matching its checkout session. Absent for automatic
         * charges. expires_at.anyOf[1] (Value): string. When a checkout attempt expires, matching
         * its checkout session. Absent for automatic charges. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. invoice_id (Optional): string
         * or null. The invoice this attempt collects. invoice_id.anyOf[1] (Value): string. The
         * invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. invoice_payment_attempt_id (Optional): string or
         * null. Flint invoice payment attempt ID. invoice_payment_attempt_id.anyOf[1] (Value):
         * string. Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_payment_attempt_id.anyOf[2] (Value): null. invoice_schedule_entry_id (Optional):
         * string or null. The schedule entry this attempt collects. Absent when the attempt
         * collects the invoice balance. invoice_schedule_entry_id.anyOf[1] (Value): string. The
         * schedule entry this attempt collects. Absent when the attempt collects the invoice
         * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". invoice_schedule_entry_id.anyOf[2]
         * (Value): null. last_payment_error (Optional): {@link PaymentErrorSummary} or null. Why
         * the payment failed. Present only when status is failed. last_payment_error.anyOf[1]
         * (Value): {@link PaymentErrorSummary}. Why the payment failed. Present only when status
         * is failed. last_payment_error.anyOf[2] (Value): null. payment_intent_id (Optional):
         * string or null. The payment intent behind this attempt. Absent until payment starts,
         * such as a hosted attempt the buyer hasn't paid yet. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent behind this attempt. Absent until payment starts, such as a
         * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. rail (Optional): string or null. How the
         * attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
         * enum: "card", "ach_debit". rail.anyOf[1] (Value): string. How the attempt collects:
         * card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card",
         * "ach_debit". rail.anyOf[2] (Value): null. settled_at (Optional): string or null. When
         * this attempt first settled successfully. Duplicate payment notifications preserve this
         * timestamp. settled_at.anyOf[1] (Value): string. When this attempt first settled
         * successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". settled_at.anyOf[2] (Value): null.
         * started_at (Optional): string or null. When the attempt was created. started_at.anyOf[1]
         * (Value): string. When the attempt was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". started_at.anyOf[2] (Value): null. status (Optional): string or
         * null. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[1] (Value):
         * string. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[2] (Value):
         * null. supported_actions (Optional): Array of string or null. Lifecycle actions accepted
         * now. An open or processing attempt can be canceled; the payment processor can still
         * refuse cancellation. [] enum: "cancel". supported_actions.anyOf[1] (Value): Array of
         * string. Lifecycle actions accepted now. An open or processing attempt can be canceled;
         * the payment processor can still refuse cancellation. [] enum: "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
         * supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * this attempt last changed. Duplicate payment notifications preserve this timestamp.
         * updated_at.anyOf[1] (Value): string. When this attempt last changed. Duplicate payment
         * notifications preserve this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. anyOf[1] (Value): string. When the attempt was
             * canceled. An attempt canceled with its checkout session before payment started may
             * not have it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. anyOf[1] (Value): string. When cancellation of this
             * attempt was last requested. It stays set when the payment processor refuses the
             * cancellation or the payment settles first, so read status and canceled_at for the
             * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "cancellation_requested_at"?: ((string) | (null));
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. anyOf[1] (Value): string. The hosted or headless checkout session the buyer
             * pays through. Absent for automatic charges. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. anyOf[1] (Value): {@link MoneyValue}. The amount this
             * attempt collects: the outstanding balance, or the targeted schedule entry's
             * outstanding amount. anyOf[2] (Value): null.
             */
            "expected_amount_money"?: ((MoneyValue) | (null));
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. anyOf[1] (Value): string. When a checkout attempt expires, matching its
             * checkout session. Absent for automatic charges. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The invoice this attempt collects. anyOf[1] (Value): string. The invoice this
             * attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Flint invoice payment attempt ID. anyOf[1] (Value): string. Flint invoice payment
             * attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". anyOf[2] (Value): null.
             */
            "invoice_payment_attempt_id"?: ((string) | (null));
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. anyOf[1] (Value): string. The schedule entry this attempt collects.
             * Absent when the attempt collects the invoice balance. Example:
             * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". anyOf[2] (Value): null.
             */
            "invoice_schedule_entry_id"?: ((string) | (null));
            /**
             * Why the payment failed. Present only when status is failed. anyOf[1] (Value): {@link
             * PaymentErrorSummary}. Why the payment failed. Present only when status is failed.
             * anyOf[2] (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. anyOf[1] (Value): string. The payment
             * intent behind this attempt. Absent until payment starts, such as a hosted attempt
             * the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit". anyOf[1] (Value): string. How the attempt
             * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
             * enum: "card", "ach_debit". anyOf[2] (Value): null.
             */
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. anyOf[1] (Value): string. When this attempt first settled
             * successfully. Duplicate payment notifications preserve this timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "settled_at"?: ((string) | (null));
            /**
             * When the attempt was created. anyOf[1] (Value): string. When the attempt was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "started_at"?: ((string) | (null));
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[1] (Value):
             * string. Current payment attempt status. succeeded means this attempt completed
             * successfully, even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". anyOf[1]
             * (Value): Array of string. Lifecycle actions accepted now. An open or processing
             * attempt can be canceled; the payment processor can still refuse cancellation. []
             * enum: "cancel". anyOf[1][] (Value): string. Value enum: "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. anyOf[1] (Value): string. When this attempt last changed. Duplicate
             * payment notifications preserve this timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
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
            "supported_actions": Array<"cancel" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "cancellation_requested_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "expected_amount_money"?: ((MoneyValue) | (null));
            "expires_at"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_payment_attempt_id"?: ((string) | (null));
            "invoice_schedule_entry_id"?: ((string) | (null));
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            "payment_intent_id"?: ((string) | (null));
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            "settled_at"?: ((string) | (null));
            "started_at"?: ((string) | (null));
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
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
            "supported_actions": Array<"cancel" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "cancellation_requested_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "expected_amount_money"?: ((MoneyValue) | (null));
            "expires_at"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_payment_attempt_id"?: ((string) | (null));
            "invoice_schedule_entry_id"?: ((string) | (null));
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            "payment_intent_id"?: ((string) | (null));
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            "settled_at"?: ((string) | (null));
            "started_at"?: ((string) | (null));
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
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
     * "processing". object.supported_actions (Required): Array of string. Lifecycle actions
     * accepted now. An open or processing attempt can be canceled; the payment processor can still
     * refuse cancellation. [] enum: "cancel". object.supported_actions[] (Value): string. Value
     * enum: "cancel". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.canceled_at (Optional): string or null. When the attempt was canceled.
     * An attempt canceled with its checkout session before payment started may not have it.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.cancellation_requested_at (Optional): string or null.
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. previous_attributes.cancellation_requested_at.anyOf[1] (Value):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.cancellation_requested_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.expected_amount_money (Optional): {@link MoneyValue} or null. The
     * amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. previous_attributes.expected_amount_money.anyOf[1] (Value): {@link
     * MoneyValue}. The amount this attempt collects: the outstanding balance, or the targeted
     * schedule entry's outstanding amount. previous_attributes.expected_amount_money.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When a checkout
     * attempt expires, matching its checkout session. Absent for automatic charges.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When a checkout attempt expires,
     * matching its checkout session. Absent for automatic charges. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice this attempt
     * collects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this attempt
     * collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_payment_attempt_id (Optional): string or null.
     * Flint invoice payment attempt ID. previous_attributes.invoice_payment_attempt_id.anyOf[1]
     * (Value): string. Flint invoice payment attempt ID. Example:
     * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". previous_attributes.invoice_payment_attempt_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_schedule_entry_id (Optional): string or null. The
     * schedule entry this attempt collects. Absent when the attempt collects the invoice balance.
     * previous_attributes.invoice_schedule_entry_id.anyOf[1] (Value): string. The schedule entry
     * this attempt collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". previous_attributes.invoice_schedule_entry_id.anyOf[2]
     * (Value): null. previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummary} or null. Why the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. Why
     * the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_id (Optional): string or null. The payment intent behind
     * this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid
     * yet. previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent
     * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't
     * paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null. previous_attributes.rail
     * (Optional): string or null. How the attempt collects: card, including Apple Pay, Google Pay,
     * and Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[1]
     * (Value): string. How the attempt collects: card, including Apple Pay, Google Pay, and
     * Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[2]
     * (Value): null. previous_attributes.settled_at (Optional): string or null. When this attempt
     * first settled successfully. Duplicate payment notifications preserve this timestamp.
     * previous_attributes.settled_at.anyOf[1] (Value): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.settled_at.anyOf[2] (Value): null.
     * previous_attributes.started_at (Optional): string or null. When the attempt was created.
     * previous_attributes.started_at.anyOf[1] (Value): string. When the attempt was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.started_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current payment
     * attempt status. succeeded means this attempt completed successfully, even if the invoice
     * still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion.
     * Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[1] (Value): string. Current payment attempt status.
     * succeeded means this attempt completed successfully, even if the invoice still has an
     * outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum:
     * "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted now. An open or processing
     * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle
     * actions accepted now. An open or processing attempt can be canceled; the payment processor
     * can still refuse cancellation. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When this attempt last changed. Duplicate payment notifications
     * preserve this timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When this
     * attempt last changed. Duplicate payment notifications preserve this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
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
         * "succeeded", "failed", "canceled", "expired", "processing". supported_actions
         * (Required): Array of string. Lifecycle actions accepted now. An open or processing
         * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
         * "cancel". supported_actions[] (Value): string. Value enum: "cancel". updated_at
         * (Required): string. When this attempt last changed. Duplicate payment notifications
         * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". [] (Value):
             * string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
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
         * state, including synthetic test events. canceled_at (Optional): string or null. When the
         * attempt was canceled. An attempt canceled with its checkout session before payment
         * started may not have it. canceled_at.anyOf[1] (Value): string. When the attempt was
         * canceled. An attempt canceled with its checkout session before payment started may not
         * have it. Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2]
         * (Value): null. cancellation_requested_at (Optional): string or null. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. cancellation_requested_at.anyOf[1] (Value): string. When cancellation of this
         * attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * cancellation_requested_at.anyOf[2] (Value): null. checkout_session_id (Optional): string
         * or null. The hosted or headless checkout session the buyer pays through. Absent for
         * automatic charges. checkout_session_id.anyOf[1] (Value): string. The hosted or headless
         * checkout session the buyer pays through. Absent for automatic charges. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * expected_amount_money (Optional): {@link MoneyValue} or null. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[1] (Value): {@link MoneyValue}. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[2] (Value): null. expires_at (Optional): string or null.
         * When a checkout attempt expires, matching its checkout session. Absent for automatic
         * charges. expires_at.anyOf[1] (Value): string. When a checkout attempt expires, matching
         * its checkout session. Absent for automatic charges. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. invoice_id (Optional): string
         * or null. The invoice this attempt collects. invoice_id.anyOf[1] (Value): string. The
         * invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. invoice_payment_attempt_id (Optional): string or
         * null. Flint invoice payment attempt ID. invoice_payment_attempt_id.anyOf[1] (Value):
         * string. Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_payment_attempt_id.anyOf[2] (Value): null. invoice_schedule_entry_id (Optional):
         * string or null. The schedule entry this attempt collects. Absent when the attempt
         * collects the invoice balance. invoice_schedule_entry_id.anyOf[1] (Value): string. The
         * schedule entry this attempt collects. Absent when the attempt collects the invoice
         * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". invoice_schedule_entry_id.anyOf[2]
         * (Value): null. last_payment_error (Optional): {@link PaymentErrorSummary} or null. Why
         * the payment failed. Present only when status is failed. last_payment_error.anyOf[1]
         * (Value): {@link PaymentErrorSummary}. Why the payment failed. Present only when status
         * is failed. last_payment_error.anyOf[2] (Value): null. payment_intent_id (Optional):
         * string or null. The payment intent behind this attempt. Absent until payment starts,
         * such as a hosted attempt the buyer hasn't paid yet. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent behind this attempt. Absent until payment starts, such as a
         * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. rail (Optional): string or null. How the
         * attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
         * enum: "card", "ach_debit". rail.anyOf[1] (Value): string. How the attempt collects:
         * card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card",
         * "ach_debit". rail.anyOf[2] (Value): null. settled_at (Optional): string or null. When
         * this attempt first settled successfully. Duplicate payment notifications preserve this
         * timestamp. settled_at.anyOf[1] (Value): string. When this attempt first settled
         * successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". settled_at.anyOf[2] (Value): null.
         * started_at (Optional): string or null. When the attempt was created. started_at.anyOf[1]
         * (Value): string. When the attempt was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". started_at.anyOf[2] (Value): null. status (Optional): string or
         * null. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[1] (Value):
         * string. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[2] (Value):
         * null. supported_actions (Optional): Array of string or null. Lifecycle actions accepted
         * now. An open or processing attempt can be canceled; the payment processor can still
         * refuse cancellation. [] enum: "cancel". supported_actions.anyOf[1] (Value): Array of
         * string. Lifecycle actions accepted now. An open or processing attempt can be canceled;
         * the payment processor can still refuse cancellation. [] enum: "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
         * supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * this attempt last changed. Duplicate payment notifications preserve this timestamp.
         * updated_at.anyOf[1] (Value): string. When this attempt last changed. Duplicate payment
         * notifications preserve this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. anyOf[1] (Value): string. When the attempt was
             * canceled. An attempt canceled with its checkout session before payment started may
             * not have it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. anyOf[1] (Value): string. When cancellation of this
             * attempt was last requested. It stays set when the payment processor refuses the
             * cancellation or the payment settles first, so read status and canceled_at for the
             * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "cancellation_requested_at"?: ((string) | (null));
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. anyOf[1] (Value): string. The hosted or headless checkout session the buyer
             * pays through. Absent for automatic charges. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. anyOf[1] (Value): {@link MoneyValue}. The amount this
             * attempt collects: the outstanding balance, or the targeted schedule entry's
             * outstanding amount. anyOf[2] (Value): null.
             */
            "expected_amount_money"?: ((MoneyValue) | (null));
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. anyOf[1] (Value): string. When a checkout attempt expires, matching its
             * checkout session. Absent for automatic charges. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The invoice this attempt collects. anyOf[1] (Value): string. The invoice this
             * attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Flint invoice payment attempt ID. anyOf[1] (Value): string. Flint invoice payment
             * attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". anyOf[2] (Value): null.
             */
            "invoice_payment_attempt_id"?: ((string) | (null));
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. anyOf[1] (Value): string. The schedule entry this attempt collects.
             * Absent when the attempt collects the invoice balance. Example:
             * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". anyOf[2] (Value): null.
             */
            "invoice_schedule_entry_id"?: ((string) | (null));
            /**
             * Why the payment failed. Present only when status is failed. anyOf[1] (Value): {@link
             * PaymentErrorSummary}. Why the payment failed. Present only when status is failed.
             * anyOf[2] (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. anyOf[1] (Value): string. The payment
             * intent behind this attempt. Absent until payment starts, such as a hosted attempt
             * the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit". anyOf[1] (Value): string. How the attempt
             * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
             * enum: "card", "ach_debit". anyOf[2] (Value): null.
             */
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. anyOf[1] (Value): string. When this attempt first settled
             * successfully. Duplicate payment notifications preserve this timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "settled_at"?: ((string) | (null));
            /**
             * When the attempt was created. anyOf[1] (Value): string. When the attempt was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "started_at"?: ((string) | (null));
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[1] (Value):
             * string. Current payment attempt status. succeeded means this attempt completed
             * successfully, even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". anyOf[1]
             * (Value): Array of string. Lifecycle actions accepted now. An open or processing
             * attempt can be canceled; the payment processor can still refuse cancellation. []
             * enum: "cancel". anyOf[1][] (Value): string. Value enum: "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. anyOf[1] (Value): string. When this attempt last changed. Duplicate
             * payment notifications preserve this timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
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
     * "processing". object.supported_actions (Required): Array of string. Lifecycle actions
     * accepted now. An open or processing attempt can be canceled; the payment processor can still
     * refuse cancellation. [] enum: "cancel". object.supported_actions[] (Value): string. Value
     * enum: "cancel". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.canceled_at (Optional): string or null. When the attempt was canceled.
     * An attempt canceled with its checkout session before payment started may not have it.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.cancellation_requested_at (Optional): string or null.
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. previous_attributes.cancellation_requested_at.anyOf[1] (Value):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.cancellation_requested_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.expected_amount_money (Optional): {@link MoneyValue} or null. The
     * amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. previous_attributes.expected_amount_money.anyOf[1] (Value): {@link
     * MoneyValue}. The amount this attempt collects: the outstanding balance, or the targeted
     * schedule entry's outstanding amount. previous_attributes.expected_amount_money.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When a checkout
     * attempt expires, matching its checkout session. Absent for automatic charges.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When a checkout attempt expires,
     * matching its checkout session. Absent for automatic charges. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice this attempt
     * collects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this attempt
     * collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_payment_attempt_id (Optional): string or null.
     * Flint invoice payment attempt ID. previous_attributes.invoice_payment_attempt_id.anyOf[1]
     * (Value): string. Flint invoice payment attempt ID. Example:
     * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". previous_attributes.invoice_payment_attempt_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_schedule_entry_id (Optional): string or null. The
     * schedule entry this attempt collects. Absent when the attempt collects the invoice balance.
     * previous_attributes.invoice_schedule_entry_id.anyOf[1] (Value): string. The schedule entry
     * this attempt collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". previous_attributes.invoice_schedule_entry_id.anyOf[2]
     * (Value): null. previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummary} or null. Why the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. Why
     * the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_id (Optional): string or null. The payment intent behind
     * this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid
     * yet. previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent
     * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't
     * paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null. previous_attributes.rail
     * (Optional): string or null. How the attempt collects: card, including Apple Pay, Google Pay,
     * and Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[1]
     * (Value): string. How the attempt collects: card, including Apple Pay, Google Pay, and
     * Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[2]
     * (Value): null. previous_attributes.settled_at (Optional): string or null. When this attempt
     * first settled successfully. Duplicate payment notifications preserve this timestamp.
     * previous_attributes.settled_at.anyOf[1] (Value): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.settled_at.anyOf[2] (Value): null.
     * previous_attributes.started_at (Optional): string or null. When the attempt was created.
     * previous_attributes.started_at.anyOf[1] (Value): string. When the attempt was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.started_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current payment
     * attempt status. succeeded means this attempt completed successfully, even if the invoice
     * still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion.
     * Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[1] (Value): string. Current payment attempt status.
     * succeeded means this attempt completed successfully, even if the invoice still has an
     * outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum:
     * "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted now. An open or processing
     * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle
     * actions accepted now. An open or processing attempt can be canceled; the payment processor
     * can still refuse cancellation. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When this attempt last changed. Duplicate payment notifications
     * preserve this timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When this
     * attempt last changed. Duplicate payment notifications preserve this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
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
         * "succeeded", "failed", "canceled", "expired", "processing". supported_actions
         * (Required): Array of string. Lifecycle actions accepted now. An open or processing
         * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
         * "cancel". supported_actions[] (Value): string. Value enum: "cancel". updated_at
         * (Required): string. When this attempt last changed. Duplicate payment notifications
         * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". [] (Value):
             * string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
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
         * state, including synthetic test events. canceled_at (Optional): string or null. When the
         * attempt was canceled. An attempt canceled with its checkout session before payment
         * started may not have it. canceled_at.anyOf[1] (Value): string. When the attempt was
         * canceled. An attempt canceled with its checkout session before payment started may not
         * have it. Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2]
         * (Value): null. cancellation_requested_at (Optional): string or null. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. cancellation_requested_at.anyOf[1] (Value): string. When cancellation of this
         * attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * cancellation_requested_at.anyOf[2] (Value): null. checkout_session_id (Optional): string
         * or null. The hosted or headless checkout session the buyer pays through. Absent for
         * automatic charges. checkout_session_id.anyOf[1] (Value): string. The hosted or headless
         * checkout session the buyer pays through. Absent for automatic charges. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * expected_amount_money (Optional): {@link MoneyValue} or null. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[1] (Value): {@link MoneyValue}. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[2] (Value): null. expires_at (Optional): string or null.
         * When a checkout attempt expires, matching its checkout session. Absent for automatic
         * charges. expires_at.anyOf[1] (Value): string. When a checkout attempt expires, matching
         * its checkout session. Absent for automatic charges. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. invoice_id (Optional): string
         * or null. The invoice this attempt collects. invoice_id.anyOf[1] (Value): string. The
         * invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. invoice_payment_attempt_id (Optional): string or
         * null. Flint invoice payment attempt ID. invoice_payment_attempt_id.anyOf[1] (Value):
         * string. Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_payment_attempt_id.anyOf[2] (Value): null. invoice_schedule_entry_id (Optional):
         * string or null. The schedule entry this attempt collects. Absent when the attempt
         * collects the invoice balance. invoice_schedule_entry_id.anyOf[1] (Value): string. The
         * schedule entry this attempt collects. Absent when the attempt collects the invoice
         * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". invoice_schedule_entry_id.anyOf[2]
         * (Value): null. last_payment_error (Optional): {@link PaymentErrorSummary} or null. Why
         * the payment failed. Present only when status is failed. last_payment_error.anyOf[1]
         * (Value): {@link PaymentErrorSummary}. Why the payment failed. Present only when status
         * is failed. last_payment_error.anyOf[2] (Value): null. payment_intent_id (Optional):
         * string or null. The payment intent behind this attempt. Absent until payment starts,
         * such as a hosted attempt the buyer hasn't paid yet. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent behind this attempt. Absent until payment starts, such as a
         * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. rail (Optional): string or null. How the
         * attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
         * enum: "card", "ach_debit". rail.anyOf[1] (Value): string. How the attempt collects:
         * card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card",
         * "ach_debit". rail.anyOf[2] (Value): null. settled_at (Optional): string or null. When
         * this attempt first settled successfully. Duplicate payment notifications preserve this
         * timestamp. settled_at.anyOf[1] (Value): string. When this attempt first settled
         * successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". settled_at.anyOf[2] (Value): null.
         * started_at (Optional): string or null. When the attempt was created. started_at.anyOf[1]
         * (Value): string. When the attempt was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". started_at.anyOf[2] (Value): null. status (Optional): string or
         * null. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[1] (Value):
         * string. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[2] (Value):
         * null. supported_actions (Optional): Array of string or null. Lifecycle actions accepted
         * now. An open or processing attempt can be canceled; the payment processor can still
         * refuse cancellation. [] enum: "cancel". supported_actions.anyOf[1] (Value): Array of
         * string. Lifecycle actions accepted now. An open or processing attempt can be canceled;
         * the payment processor can still refuse cancellation. [] enum: "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
         * supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * this attempt last changed. Duplicate payment notifications preserve this timestamp.
         * updated_at.anyOf[1] (Value): string. When this attempt last changed. Duplicate payment
         * notifications preserve this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. anyOf[1] (Value): string. When the attempt was
             * canceled. An attempt canceled with its checkout session before payment started may
             * not have it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. anyOf[1] (Value): string. When cancellation of this
             * attempt was last requested. It stays set when the payment processor refuses the
             * cancellation or the payment settles first, so read status and canceled_at for the
             * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "cancellation_requested_at"?: ((string) | (null));
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. anyOf[1] (Value): string. The hosted or headless checkout session the buyer
             * pays through. Absent for automatic charges. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. anyOf[1] (Value): {@link MoneyValue}. The amount this
             * attempt collects: the outstanding balance, or the targeted schedule entry's
             * outstanding amount. anyOf[2] (Value): null.
             */
            "expected_amount_money"?: ((MoneyValue) | (null));
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. anyOf[1] (Value): string. When a checkout attempt expires, matching its
             * checkout session. Absent for automatic charges. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The invoice this attempt collects. anyOf[1] (Value): string. The invoice this
             * attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Flint invoice payment attempt ID. anyOf[1] (Value): string. Flint invoice payment
             * attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". anyOf[2] (Value): null.
             */
            "invoice_payment_attempt_id"?: ((string) | (null));
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. anyOf[1] (Value): string. The schedule entry this attempt collects.
             * Absent when the attempt collects the invoice balance. Example:
             * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". anyOf[2] (Value): null.
             */
            "invoice_schedule_entry_id"?: ((string) | (null));
            /**
             * Why the payment failed. Present only when status is failed. anyOf[1] (Value): {@link
             * PaymentErrorSummary}. Why the payment failed. Present only when status is failed.
             * anyOf[2] (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. anyOf[1] (Value): string. The payment
             * intent behind this attempt. Absent until payment starts, such as a hosted attempt
             * the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit". anyOf[1] (Value): string. How the attempt
             * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
             * enum: "card", "ach_debit". anyOf[2] (Value): null.
             */
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. anyOf[1] (Value): string. When this attempt first settled
             * successfully. Duplicate payment notifications preserve this timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "settled_at"?: ((string) | (null));
            /**
             * When the attempt was created. anyOf[1] (Value): string. When the attempt was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "started_at"?: ((string) | (null));
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[1] (Value):
             * string. Current payment attempt status. succeeded means this attempt completed
             * successfully, even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". anyOf[1]
             * (Value): Array of string. Lifecycle actions accepted now. An open or processing
             * attempt can be canceled; the payment processor can still refuse cancellation. []
             * enum: "cancel". anyOf[1][] (Value): string. Value enum: "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. anyOf[1] (Value): string. When this attempt last changed. Duplicate
             * payment notifications preserve this timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
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
            "supported_actions": Array<"cancel" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "cancellation_requested_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "expected_amount_money"?: ((MoneyValue) | (null));
            "expires_at"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_payment_attempt_id"?: ((string) | (null));
            "invoice_schedule_entry_id"?: ((string) | (null));
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            "payment_intent_id"?: ((string) | (null));
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            "settled_at"?: ((string) | (null));
            "started_at"?: ((string) | (null));
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
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
            "supported_actions": Array<"cancel" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "cancellation_requested_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "expected_amount_money"?: ((MoneyValue) | (null));
            "expires_at"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_payment_attempt_id"?: ((string) | (null));
            "invoice_schedule_entry_id"?: ((string) | (null));
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            "payment_intent_id"?: ((string) | (null));
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            "settled_at"?: ((string) | (null));
            "started_at"?: ((string) | (null));
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
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
     * "processing". object.supported_actions (Required): Array of string. Lifecycle actions
     * accepted now. An open or processing attempt can be canceled; the payment processor can still
     * refuse cancellation. [] enum: "cancel". object.supported_actions[] (Value): string. Value
     * enum: "cancel". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.canceled_at (Optional): string or null. When the attempt was canceled.
     * An attempt canceled with its checkout session before payment started may not have it.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.cancellation_requested_at (Optional): string or null.
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. previous_attributes.cancellation_requested_at.anyOf[1] (Value):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.cancellation_requested_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.expected_amount_money (Optional): {@link MoneyValue} or null. The
     * amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. previous_attributes.expected_amount_money.anyOf[1] (Value): {@link
     * MoneyValue}. The amount this attempt collects: the outstanding balance, or the targeted
     * schedule entry's outstanding amount. previous_attributes.expected_amount_money.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When a checkout
     * attempt expires, matching its checkout session. Absent for automatic charges.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When a checkout attempt expires,
     * matching its checkout session. Absent for automatic charges. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice this attempt
     * collects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this attempt
     * collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_payment_attempt_id (Optional): string or null.
     * Flint invoice payment attempt ID. previous_attributes.invoice_payment_attempt_id.anyOf[1]
     * (Value): string. Flint invoice payment attempt ID. Example:
     * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". previous_attributes.invoice_payment_attempt_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_schedule_entry_id (Optional): string or null. The
     * schedule entry this attempt collects. Absent when the attempt collects the invoice balance.
     * previous_attributes.invoice_schedule_entry_id.anyOf[1] (Value): string. The schedule entry
     * this attempt collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". previous_attributes.invoice_schedule_entry_id.anyOf[2]
     * (Value): null. previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummary} or null. Why the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. Why
     * the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_id (Optional): string or null. The payment intent behind
     * this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid
     * yet. previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent
     * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't
     * paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null. previous_attributes.rail
     * (Optional): string or null. How the attempt collects: card, including Apple Pay, Google Pay,
     * and Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[1]
     * (Value): string. How the attempt collects: card, including Apple Pay, Google Pay, and
     * Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[2]
     * (Value): null. previous_attributes.settled_at (Optional): string or null. When this attempt
     * first settled successfully. Duplicate payment notifications preserve this timestamp.
     * previous_attributes.settled_at.anyOf[1] (Value): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.settled_at.anyOf[2] (Value): null.
     * previous_attributes.started_at (Optional): string or null. When the attempt was created.
     * previous_attributes.started_at.anyOf[1] (Value): string. When the attempt was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.started_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current payment
     * attempt status. succeeded means this attempt completed successfully, even if the invoice
     * still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion.
     * Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[1] (Value): string. Current payment attempt status.
     * succeeded means this attempt completed successfully, even if the invoice still has an
     * outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum:
     * "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted now. An open or processing
     * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle
     * actions accepted now. An open or processing attempt can be canceled; the payment processor
     * can still refuse cancellation. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When this attempt last changed. Duplicate payment notifications
     * preserve this timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When this
     * attempt last changed. Duplicate payment notifications preserve this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
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
         * "succeeded", "failed", "canceled", "expired", "processing". supported_actions
         * (Required): Array of string. Lifecycle actions accepted now. An open or processing
         * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
         * "cancel". supported_actions[] (Value): string. Value enum: "cancel". updated_at
         * (Required): string. When this attempt last changed. Duplicate payment notifications
         * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". [] (Value):
             * string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
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
         * state, including synthetic test events. canceled_at (Optional): string or null. When the
         * attempt was canceled. An attempt canceled with its checkout session before payment
         * started may not have it. canceled_at.anyOf[1] (Value): string. When the attempt was
         * canceled. An attempt canceled with its checkout session before payment started may not
         * have it. Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2]
         * (Value): null. cancellation_requested_at (Optional): string or null. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. cancellation_requested_at.anyOf[1] (Value): string. When cancellation of this
         * attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * cancellation_requested_at.anyOf[2] (Value): null. checkout_session_id (Optional): string
         * or null. The hosted or headless checkout session the buyer pays through. Absent for
         * automatic charges. checkout_session_id.anyOf[1] (Value): string. The hosted or headless
         * checkout session the buyer pays through. Absent for automatic charges. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * expected_amount_money (Optional): {@link MoneyValue} or null. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[1] (Value): {@link MoneyValue}. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[2] (Value): null. expires_at (Optional): string or null.
         * When a checkout attempt expires, matching its checkout session. Absent for automatic
         * charges. expires_at.anyOf[1] (Value): string. When a checkout attempt expires, matching
         * its checkout session. Absent for automatic charges. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. invoice_id (Optional): string
         * or null. The invoice this attempt collects. invoice_id.anyOf[1] (Value): string. The
         * invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. invoice_payment_attempt_id (Optional): string or
         * null. Flint invoice payment attempt ID. invoice_payment_attempt_id.anyOf[1] (Value):
         * string. Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_payment_attempt_id.anyOf[2] (Value): null. invoice_schedule_entry_id (Optional):
         * string or null. The schedule entry this attempt collects. Absent when the attempt
         * collects the invoice balance. invoice_schedule_entry_id.anyOf[1] (Value): string. The
         * schedule entry this attempt collects. Absent when the attempt collects the invoice
         * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". invoice_schedule_entry_id.anyOf[2]
         * (Value): null. last_payment_error (Optional): {@link PaymentErrorSummary} or null. Why
         * the payment failed. Present only when status is failed. last_payment_error.anyOf[1]
         * (Value): {@link PaymentErrorSummary}. Why the payment failed. Present only when status
         * is failed. last_payment_error.anyOf[2] (Value): null. payment_intent_id (Optional):
         * string or null. The payment intent behind this attempt. Absent until payment starts,
         * such as a hosted attempt the buyer hasn't paid yet. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent behind this attempt. Absent until payment starts, such as a
         * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. rail (Optional): string or null. How the
         * attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
         * enum: "card", "ach_debit". rail.anyOf[1] (Value): string. How the attempt collects:
         * card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card",
         * "ach_debit". rail.anyOf[2] (Value): null. settled_at (Optional): string or null. When
         * this attempt first settled successfully. Duplicate payment notifications preserve this
         * timestamp. settled_at.anyOf[1] (Value): string. When this attempt first settled
         * successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". settled_at.anyOf[2] (Value): null.
         * started_at (Optional): string or null. When the attempt was created. started_at.anyOf[1]
         * (Value): string. When the attempt was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". started_at.anyOf[2] (Value): null. status (Optional): string or
         * null. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[1] (Value):
         * string. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[2] (Value):
         * null. supported_actions (Optional): Array of string or null. Lifecycle actions accepted
         * now. An open or processing attempt can be canceled; the payment processor can still
         * refuse cancellation. [] enum: "cancel". supported_actions.anyOf[1] (Value): Array of
         * string. Lifecycle actions accepted now. An open or processing attempt can be canceled;
         * the payment processor can still refuse cancellation. [] enum: "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
         * supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * this attempt last changed. Duplicate payment notifications preserve this timestamp.
         * updated_at.anyOf[1] (Value): string. When this attempt last changed. Duplicate payment
         * notifications preserve this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. anyOf[1] (Value): string. When the attempt was
             * canceled. An attempt canceled with its checkout session before payment started may
             * not have it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. anyOf[1] (Value): string. When cancellation of this
             * attempt was last requested. It stays set when the payment processor refuses the
             * cancellation or the payment settles first, so read status and canceled_at for the
             * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "cancellation_requested_at"?: ((string) | (null));
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. anyOf[1] (Value): string. The hosted or headless checkout session the buyer
             * pays through. Absent for automatic charges. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. anyOf[1] (Value): {@link MoneyValue}. The amount this
             * attempt collects: the outstanding balance, or the targeted schedule entry's
             * outstanding amount. anyOf[2] (Value): null.
             */
            "expected_amount_money"?: ((MoneyValue) | (null));
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. anyOf[1] (Value): string. When a checkout attempt expires, matching its
             * checkout session. Absent for automatic charges. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The invoice this attempt collects. anyOf[1] (Value): string. The invoice this
             * attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Flint invoice payment attempt ID. anyOf[1] (Value): string. Flint invoice payment
             * attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". anyOf[2] (Value): null.
             */
            "invoice_payment_attempt_id"?: ((string) | (null));
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. anyOf[1] (Value): string. The schedule entry this attempt collects.
             * Absent when the attempt collects the invoice balance. Example:
             * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". anyOf[2] (Value): null.
             */
            "invoice_schedule_entry_id"?: ((string) | (null));
            /**
             * Why the payment failed. Present only when status is failed. anyOf[1] (Value): {@link
             * PaymentErrorSummary}. Why the payment failed. Present only when status is failed.
             * anyOf[2] (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. anyOf[1] (Value): string. The payment
             * intent behind this attempt. Absent until payment starts, such as a hosted attempt
             * the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit". anyOf[1] (Value): string. How the attempt
             * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
             * enum: "card", "ach_debit". anyOf[2] (Value): null.
             */
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. anyOf[1] (Value): string. When this attempt first settled
             * successfully. Duplicate payment notifications preserve this timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "settled_at"?: ((string) | (null));
            /**
             * When the attempt was created. anyOf[1] (Value): string. When the attempt was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "started_at"?: ((string) | (null));
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[1] (Value):
             * string. Current payment attempt status. succeeded means this attempt completed
             * successfully, even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". anyOf[1]
             * (Value): Array of string. Lifecycle actions accepted now. An open or processing
             * attempt can be canceled; the payment processor can still refuse cancellation. []
             * enum: "cancel". anyOf[1][] (Value): string. Value enum: "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. anyOf[1] (Value): string. When this attempt last changed. Duplicate
             * payment notifications preserve this timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
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
     * "processing". object.supported_actions (Required): Array of string. Lifecycle actions
     * accepted now. An open or processing attempt can be canceled; the payment processor can still
     * refuse cancellation. [] enum: "cancel". object.supported_actions[] (Value): string. Value
     * enum: "cancel". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.canceled_at (Optional): string or null. When the attempt was canceled.
     * An attempt canceled with its checkout session before payment started may not have it.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.cancellation_requested_at (Optional): string or null.
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. previous_attributes.cancellation_requested_at.anyOf[1] (Value):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.cancellation_requested_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.expected_amount_money (Optional): {@link MoneyValue} or null. The
     * amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. previous_attributes.expected_amount_money.anyOf[1] (Value): {@link
     * MoneyValue}. The amount this attempt collects: the outstanding balance, or the targeted
     * schedule entry's outstanding amount. previous_attributes.expected_amount_money.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When a checkout
     * attempt expires, matching its checkout session. Absent for automatic charges.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When a checkout attempt expires,
     * matching its checkout session. Absent for automatic charges. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice this attempt
     * collects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this attempt
     * collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_payment_attempt_id (Optional): string or null.
     * Flint invoice payment attempt ID. previous_attributes.invoice_payment_attempt_id.anyOf[1]
     * (Value): string. Flint invoice payment attempt ID. Example:
     * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". previous_attributes.invoice_payment_attempt_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_schedule_entry_id (Optional): string or null. The
     * schedule entry this attempt collects. Absent when the attempt collects the invoice balance.
     * previous_attributes.invoice_schedule_entry_id.anyOf[1] (Value): string. The schedule entry
     * this attempt collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". previous_attributes.invoice_schedule_entry_id.anyOf[2]
     * (Value): null. previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummary} or null. Why the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. Why
     * the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_id (Optional): string or null. The payment intent behind
     * this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid
     * yet. previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent
     * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't
     * paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null. previous_attributes.rail
     * (Optional): string or null. How the attempt collects: card, including Apple Pay, Google Pay,
     * and Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[1]
     * (Value): string. How the attempt collects: card, including Apple Pay, Google Pay, and
     * Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[2]
     * (Value): null. previous_attributes.settled_at (Optional): string or null. When this attempt
     * first settled successfully. Duplicate payment notifications preserve this timestamp.
     * previous_attributes.settled_at.anyOf[1] (Value): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.settled_at.anyOf[2] (Value): null.
     * previous_attributes.started_at (Optional): string or null. When the attempt was created.
     * previous_attributes.started_at.anyOf[1] (Value): string. When the attempt was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.started_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current payment
     * attempt status. succeeded means this attempt completed successfully, even if the invoice
     * still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion.
     * Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[1] (Value): string. Current payment attempt status.
     * succeeded means this attempt completed successfully, even if the invoice still has an
     * outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum:
     * "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted now. An open or processing
     * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle
     * actions accepted now. An open or processing attempt can be canceled; the payment processor
     * can still refuse cancellation. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When this attempt last changed. Duplicate payment notifications
     * preserve this timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When this
     * attempt last changed. Duplicate payment notifications preserve this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
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
         * "succeeded", "failed", "canceled", "expired", "processing". supported_actions
         * (Required): Array of string. Lifecycle actions accepted now. An open or processing
         * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
         * "cancel". supported_actions[] (Value): string. Value enum: "cancel". updated_at
         * (Required): string. When this attempt last changed. Duplicate payment notifications
         * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". [] (Value):
             * string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
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
         * state, including synthetic test events. canceled_at (Optional): string or null. When the
         * attempt was canceled. An attempt canceled with its checkout session before payment
         * started may not have it. canceled_at.anyOf[1] (Value): string. When the attempt was
         * canceled. An attempt canceled with its checkout session before payment started may not
         * have it. Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2]
         * (Value): null. cancellation_requested_at (Optional): string or null. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. cancellation_requested_at.anyOf[1] (Value): string. When cancellation of this
         * attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * cancellation_requested_at.anyOf[2] (Value): null. checkout_session_id (Optional): string
         * or null. The hosted or headless checkout session the buyer pays through. Absent for
         * automatic charges. checkout_session_id.anyOf[1] (Value): string. The hosted or headless
         * checkout session the buyer pays through. Absent for automatic charges. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * expected_amount_money (Optional): {@link MoneyValue} or null. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[1] (Value): {@link MoneyValue}. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[2] (Value): null. expires_at (Optional): string or null.
         * When a checkout attempt expires, matching its checkout session. Absent for automatic
         * charges. expires_at.anyOf[1] (Value): string. When a checkout attempt expires, matching
         * its checkout session. Absent for automatic charges. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. invoice_id (Optional): string
         * or null. The invoice this attempt collects. invoice_id.anyOf[1] (Value): string. The
         * invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. invoice_payment_attempt_id (Optional): string or
         * null. Flint invoice payment attempt ID. invoice_payment_attempt_id.anyOf[1] (Value):
         * string. Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_payment_attempt_id.anyOf[2] (Value): null. invoice_schedule_entry_id (Optional):
         * string or null. The schedule entry this attempt collects. Absent when the attempt
         * collects the invoice balance. invoice_schedule_entry_id.anyOf[1] (Value): string. The
         * schedule entry this attempt collects. Absent when the attempt collects the invoice
         * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". invoice_schedule_entry_id.anyOf[2]
         * (Value): null. last_payment_error (Optional): {@link PaymentErrorSummary} or null. Why
         * the payment failed. Present only when status is failed. last_payment_error.anyOf[1]
         * (Value): {@link PaymentErrorSummary}. Why the payment failed. Present only when status
         * is failed. last_payment_error.anyOf[2] (Value): null. payment_intent_id (Optional):
         * string or null. The payment intent behind this attempt. Absent until payment starts,
         * such as a hosted attempt the buyer hasn't paid yet. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent behind this attempt. Absent until payment starts, such as a
         * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. rail (Optional): string or null. How the
         * attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
         * enum: "card", "ach_debit". rail.anyOf[1] (Value): string. How the attempt collects:
         * card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card",
         * "ach_debit". rail.anyOf[2] (Value): null. settled_at (Optional): string or null. When
         * this attempt first settled successfully. Duplicate payment notifications preserve this
         * timestamp. settled_at.anyOf[1] (Value): string. When this attempt first settled
         * successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". settled_at.anyOf[2] (Value): null.
         * started_at (Optional): string or null. When the attempt was created. started_at.anyOf[1]
         * (Value): string. When the attempt was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". started_at.anyOf[2] (Value): null. status (Optional): string or
         * null. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[1] (Value):
         * string. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[2] (Value):
         * null. supported_actions (Optional): Array of string or null. Lifecycle actions accepted
         * now. An open or processing attempt can be canceled; the payment processor can still
         * refuse cancellation. [] enum: "cancel". supported_actions.anyOf[1] (Value): Array of
         * string. Lifecycle actions accepted now. An open or processing attempt can be canceled;
         * the payment processor can still refuse cancellation. [] enum: "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
         * supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * this attempt last changed. Duplicate payment notifications preserve this timestamp.
         * updated_at.anyOf[1] (Value): string. When this attempt last changed. Duplicate payment
         * notifications preserve this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. anyOf[1] (Value): string. When the attempt was
             * canceled. An attempt canceled with its checkout session before payment started may
             * not have it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. anyOf[1] (Value): string. When cancellation of this
             * attempt was last requested. It stays set when the payment processor refuses the
             * cancellation or the payment settles first, so read status and canceled_at for the
             * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "cancellation_requested_at"?: ((string) | (null));
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. anyOf[1] (Value): string. The hosted or headless checkout session the buyer
             * pays through. Absent for automatic charges. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. anyOf[1] (Value): {@link MoneyValue}. The amount this
             * attempt collects: the outstanding balance, or the targeted schedule entry's
             * outstanding amount. anyOf[2] (Value): null.
             */
            "expected_amount_money"?: ((MoneyValue) | (null));
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. anyOf[1] (Value): string. When a checkout attempt expires, matching its
             * checkout session. Absent for automatic charges. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The invoice this attempt collects. anyOf[1] (Value): string. The invoice this
             * attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Flint invoice payment attempt ID. anyOf[1] (Value): string. Flint invoice payment
             * attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". anyOf[2] (Value): null.
             */
            "invoice_payment_attempt_id"?: ((string) | (null));
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. anyOf[1] (Value): string. The schedule entry this attempt collects.
             * Absent when the attempt collects the invoice balance. Example:
             * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". anyOf[2] (Value): null.
             */
            "invoice_schedule_entry_id"?: ((string) | (null));
            /**
             * Why the payment failed. Present only when status is failed. anyOf[1] (Value): {@link
             * PaymentErrorSummary}. Why the payment failed. Present only when status is failed.
             * anyOf[2] (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. anyOf[1] (Value): string. The payment
             * intent behind this attempt. Absent until payment starts, such as a hosted attempt
             * the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit". anyOf[1] (Value): string. How the attempt
             * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
             * enum: "card", "ach_debit". anyOf[2] (Value): null.
             */
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. anyOf[1] (Value): string. When this attempt first settled
             * successfully. Duplicate payment notifications preserve this timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "settled_at"?: ((string) | (null));
            /**
             * When the attempt was created. anyOf[1] (Value): string. When the attempt was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "started_at"?: ((string) | (null));
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[1] (Value):
             * string. Current payment attempt status. succeeded means this attempt completed
             * successfully, even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". anyOf[1]
             * (Value): Array of string. Lifecycle actions accepted now. An open or processing
             * attempt can be canceled; the payment processor can still refuse cancellation. []
             * enum: "cancel". anyOf[1][] (Value): string. Value enum: "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. anyOf[1] (Value): string. When this attempt last changed. Duplicate
             * payment notifications preserve this timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
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
            "supported_actions": Array<"cancel" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "cancellation_requested_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "expected_amount_money"?: ((MoneyValue) | (null));
            "expires_at"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_payment_attempt_id"?: ((string) | (null));
            "invoice_schedule_entry_id"?: ((string) | (null));
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            "payment_intent_id"?: ((string) | (null));
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            "settled_at"?: ((string) | (null));
            "started_at"?: ((string) | (null));
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
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
            "supported_actions": Array<"cancel" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "cancellation_requested_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "expected_amount_money"?: ((MoneyValue) | (null));
            "expires_at"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_payment_attempt_id"?: ((string) | (null));
            "invoice_schedule_entry_id"?: ((string) | (null));
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            "payment_intent_id"?: ((string) | (null));
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            "settled_at"?: ((string) | (null));
            "started_at"?: ((string) | (null));
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
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
     * "processing". object.supported_actions (Required): Array of string. Lifecycle actions
     * accepted now. An open or processing attempt can be canceled; the payment processor can still
     * refuse cancellation. [] enum: "cancel". object.supported_actions[] (Value): string. Value
     * enum: "cancel". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.canceled_at (Optional): string or null. When the attempt was canceled.
     * An attempt canceled with its checkout session before payment started may not have it.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.cancellation_requested_at (Optional): string or null.
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. previous_attributes.cancellation_requested_at.anyOf[1] (Value):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.cancellation_requested_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.expected_amount_money (Optional): {@link MoneyValue} or null. The
     * amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. previous_attributes.expected_amount_money.anyOf[1] (Value): {@link
     * MoneyValue}. The amount this attempt collects: the outstanding balance, or the targeted
     * schedule entry's outstanding amount. previous_attributes.expected_amount_money.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When a checkout
     * attempt expires, matching its checkout session. Absent for automatic charges.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When a checkout attempt expires,
     * matching its checkout session. Absent for automatic charges. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice this attempt
     * collects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this attempt
     * collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_payment_attempt_id (Optional): string or null.
     * Flint invoice payment attempt ID. previous_attributes.invoice_payment_attempt_id.anyOf[1]
     * (Value): string. Flint invoice payment attempt ID. Example:
     * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". previous_attributes.invoice_payment_attempt_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_schedule_entry_id (Optional): string or null. The
     * schedule entry this attempt collects. Absent when the attempt collects the invoice balance.
     * previous_attributes.invoice_schedule_entry_id.anyOf[1] (Value): string. The schedule entry
     * this attempt collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". previous_attributes.invoice_schedule_entry_id.anyOf[2]
     * (Value): null. previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummary} or null. Why the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. Why
     * the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_id (Optional): string or null. The payment intent behind
     * this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid
     * yet. previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent
     * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't
     * paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null. previous_attributes.rail
     * (Optional): string or null. How the attempt collects: card, including Apple Pay, Google Pay,
     * and Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[1]
     * (Value): string. How the attempt collects: card, including Apple Pay, Google Pay, and
     * Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[2]
     * (Value): null. previous_attributes.settled_at (Optional): string or null. When this attempt
     * first settled successfully. Duplicate payment notifications preserve this timestamp.
     * previous_attributes.settled_at.anyOf[1] (Value): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.settled_at.anyOf[2] (Value): null.
     * previous_attributes.started_at (Optional): string or null. When the attempt was created.
     * previous_attributes.started_at.anyOf[1] (Value): string. When the attempt was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.started_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current payment
     * attempt status. succeeded means this attempt completed successfully, even if the invoice
     * still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion.
     * Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[1] (Value): string. Current payment attempt status.
     * succeeded means this attempt completed successfully, even if the invoice still has an
     * outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum:
     * "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted now. An open or processing
     * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle
     * actions accepted now. An open or processing attempt can be canceled; the payment processor
     * can still refuse cancellation. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When this attempt last changed. Duplicate payment notifications
     * preserve this timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When this
     * attempt last changed. Duplicate payment notifications preserve this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
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
         * "succeeded", "failed", "canceled", "expired", "processing". supported_actions
         * (Required): Array of string. Lifecycle actions accepted now. An open or processing
         * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
         * "cancel". supported_actions[] (Value): string. Value enum: "cancel". updated_at
         * (Required): string. When this attempt last changed. Duplicate payment notifications
         * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". [] (Value):
             * string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
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
         * state, including synthetic test events. canceled_at (Optional): string or null. When the
         * attempt was canceled. An attempt canceled with its checkout session before payment
         * started may not have it. canceled_at.anyOf[1] (Value): string. When the attempt was
         * canceled. An attempt canceled with its checkout session before payment started may not
         * have it. Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2]
         * (Value): null. cancellation_requested_at (Optional): string or null. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. cancellation_requested_at.anyOf[1] (Value): string. When cancellation of this
         * attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * cancellation_requested_at.anyOf[2] (Value): null. checkout_session_id (Optional): string
         * or null. The hosted or headless checkout session the buyer pays through. Absent for
         * automatic charges. checkout_session_id.anyOf[1] (Value): string. The hosted or headless
         * checkout session the buyer pays through. Absent for automatic charges. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * expected_amount_money (Optional): {@link MoneyValue} or null. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[1] (Value): {@link MoneyValue}. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[2] (Value): null. expires_at (Optional): string or null.
         * When a checkout attempt expires, matching its checkout session. Absent for automatic
         * charges. expires_at.anyOf[1] (Value): string. When a checkout attempt expires, matching
         * its checkout session. Absent for automatic charges. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. invoice_id (Optional): string
         * or null. The invoice this attempt collects. invoice_id.anyOf[1] (Value): string. The
         * invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. invoice_payment_attempt_id (Optional): string or
         * null. Flint invoice payment attempt ID. invoice_payment_attempt_id.anyOf[1] (Value):
         * string. Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_payment_attempt_id.anyOf[2] (Value): null. invoice_schedule_entry_id (Optional):
         * string or null. The schedule entry this attempt collects. Absent when the attempt
         * collects the invoice balance. invoice_schedule_entry_id.anyOf[1] (Value): string. The
         * schedule entry this attempt collects. Absent when the attempt collects the invoice
         * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". invoice_schedule_entry_id.anyOf[2]
         * (Value): null. last_payment_error (Optional): {@link PaymentErrorSummary} or null. Why
         * the payment failed. Present only when status is failed. last_payment_error.anyOf[1]
         * (Value): {@link PaymentErrorSummary}. Why the payment failed. Present only when status
         * is failed. last_payment_error.anyOf[2] (Value): null. payment_intent_id (Optional):
         * string or null. The payment intent behind this attempt. Absent until payment starts,
         * such as a hosted attempt the buyer hasn't paid yet. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent behind this attempt. Absent until payment starts, such as a
         * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. rail (Optional): string or null. How the
         * attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
         * enum: "card", "ach_debit". rail.anyOf[1] (Value): string. How the attempt collects:
         * card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card",
         * "ach_debit". rail.anyOf[2] (Value): null. settled_at (Optional): string or null. When
         * this attempt first settled successfully. Duplicate payment notifications preserve this
         * timestamp. settled_at.anyOf[1] (Value): string. When this attempt first settled
         * successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". settled_at.anyOf[2] (Value): null.
         * started_at (Optional): string or null. When the attempt was created. started_at.anyOf[1]
         * (Value): string. When the attempt was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". started_at.anyOf[2] (Value): null. status (Optional): string or
         * null. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[1] (Value):
         * string. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[2] (Value):
         * null. supported_actions (Optional): Array of string or null. Lifecycle actions accepted
         * now. An open or processing attempt can be canceled; the payment processor can still
         * refuse cancellation. [] enum: "cancel". supported_actions.anyOf[1] (Value): Array of
         * string. Lifecycle actions accepted now. An open or processing attempt can be canceled;
         * the payment processor can still refuse cancellation. [] enum: "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
         * supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * this attempt last changed. Duplicate payment notifications preserve this timestamp.
         * updated_at.anyOf[1] (Value): string. When this attempt last changed. Duplicate payment
         * notifications preserve this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. anyOf[1] (Value): string. When the attempt was
             * canceled. An attempt canceled with its checkout session before payment started may
             * not have it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. anyOf[1] (Value): string. When cancellation of this
             * attempt was last requested. It stays set when the payment processor refuses the
             * cancellation or the payment settles first, so read status and canceled_at for the
             * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "cancellation_requested_at"?: ((string) | (null));
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. anyOf[1] (Value): string. The hosted or headless checkout session the buyer
             * pays through. Absent for automatic charges. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. anyOf[1] (Value): {@link MoneyValue}. The amount this
             * attempt collects: the outstanding balance, or the targeted schedule entry's
             * outstanding amount. anyOf[2] (Value): null.
             */
            "expected_amount_money"?: ((MoneyValue) | (null));
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. anyOf[1] (Value): string. When a checkout attempt expires, matching its
             * checkout session. Absent for automatic charges. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The invoice this attempt collects. anyOf[1] (Value): string. The invoice this
             * attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Flint invoice payment attempt ID. anyOf[1] (Value): string. Flint invoice payment
             * attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". anyOf[2] (Value): null.
             */
            "invoice_payment_attempt_id"?: ((string) | (null));
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. anyOf[1] (Value): string. The schedule entry this attempt collects.
             * Absent when the attempt collects the invoice balance. Example:
             * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". anyOf[2] (Value): null.
             */
            "invoice_schedule_entry_id"?: ((string) | (null));
            /**
             * Why the payment failed. Present only when status is failed. anyOf[1] (Value): {@link
             * PaymentErrorSummary}. Why the payment failed. Present only when status is failed.
             * anyOf[2] (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. anyOf[1] (Value): string. The payment
             * intent behind this attempt. Absent until payment starts, such as a hosted attempt
             * the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit". anyOf[1] (Value): string. How the attempt
             * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
             * enum: "card", "ach_debit". anyOf[2] (Value): null.
             */
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. anyOf[1] (Value): string. When this attempt first settled
             * successfully. Duplicate payment notifications preserve this timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "settled_at"?: ((string) | (null));
            /**
             * When the attempt was created. anyOf[1] (Value): string. When the attempt was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "started_at"?: ((string) | (null));
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[1] (Value):
             * string. Current payment attempt status. succeeded means this attempt completed
             * successfully, even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". anyOf[1]
             * (Value): Array of string. Lifecycle actions accepted now. An open or processing
             * attempt can be canceled; the payment processor can still refuse cancellation. []
             * enum: "cancel". anyOf[1][] (Value): string. Value enum: "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. anyOf[1] (Value): string. When this attempt last changed. Duplicate
             * payment notifications preserve this timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
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
     * "processing". object.supported_actions (Required): Array of string. Lifecycle actions
     * accepted now. An open or processing attempt can be canceled; the payment processor can still
     * refuse cancellation. [] enum: "cancel". object.supported_actions[] (Value): string. Value
     * enum: "cancel". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.canceled_at (Optional): string or null. When the attempt was canceled.
     * An attempt canceled with its checkout session before payment started may not have it.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.cancellation_requested_at (Optional): string or null.
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. previous_attributes.cancellation_requested_at.anyOf[1] (Value):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.cancellation_requested_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. The hosted or headless
     * checkout session the buyer pays through. Absent for automatic charges. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.expected_amount_money (Optional): {@link MoneyValue} or null. The
     * amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. previous_attributes.expected_amount_money.anyOf[1] (Value): {@link
     * MoneyValue}. The amount this attempt collects: the outstanding balance, or the targeted
     * schedule entry's outstanding amount. previous_attributes.expected_amount_money.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When a checkout
     * attempt expires, matching its checkout session. Absent for automatic charges.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When a checkout attempt expires,
     * matching its checkout session. Absent for automatic charges. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null. The invoice this attempt
     * collects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this attempt
     * collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_payment_attempt_id (Optional): string or null.
     * Flint invoice payment attempt ID. previous_attributes.invoice_payment_attempt_id.anyOf[1]
     * (Value): string. Flint invoice payment attempt ID. Example:
     * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". previous_attributes.invoice_payment_attempt_id.anyOf[2]
     * (Value): null. previous_attributes.invoice_schedule_entry_id (Optional): string or null. The
     * schedule entry this attempt collects. Absent when the attempt collects the invoice balance.
     * previous_attributes.invoice_schedule_entry_id.anyOf[1] (Value): string. The schedule entry
     * this attempt collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". previous_attributes.invoice_schedule_entry_id.anyOf[2]
     * (Value): null. previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummary} or null. Why the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. Why
     * the payment failed. Present only when status is failed.
     * previous_attributes.last_payment_error.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_id (Optional): string or null. The payment intent behind
     * this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid
     * yet. previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent
     * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't
     * paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null. previous_attributes.rail
     * (Optional): string or null. How the attempt collects: card, including Apple Pay, Google Pay,
     * and Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[1]
     * (Value): string. How the attempt collects: card, including Apple Pay, Google Pay, and
     * Affirm, or ACH debit. Value enum: "card", "ach_debit". previous_attributes.rail.anyOf[2]
     * (Value): null. previous_attributes.settled_at (Optional): string or null. When this attempt
     * first settled successfully. Duplicate payment notifications preserve this timestamp.
     * previous_attributes.settled_at.anyOf[1] (Value): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.settled_at.anyOf[2] (Value): null.
     * previous_attributes.started_at (Optional): string or null. When the attempt was created.
     * previous_attributes.started_at.anyOf[1] (Value): string. When the attempt was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.started_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current payment
     * attempt status. succeeded means this attempt completed successfully, even if the invoice
     * still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion.
     * Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[1] (Value): string. Current payment attempt status.
     * succeeded means this attempt completed successfully, even if the invoice still has an
     * outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum:
     * "open", "succeeded", "failed", "canceled", "expired", "processing".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted now. An open or processing
     * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle
     * actions accepted now. An open or processing attempt can be canceled; the payment processor
     * can still refuse cancellation. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When this attempt last changed. Duplicate payment notifications
     * preserve this timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When this
     * attempt last changed. Duplicate payment notifications preserve this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
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
         * "succeeded", "failed", "canceled", "expired", "processing". supported_actions
         * (Required): Array of string. Lifecycle actions accepted now. An open or processing
         * attempt can be canceled; the payment processor can still refuse cancellation. [] enum:
         * "cancel". supported_actions[] (Value): string. Value enum: "cancel". updated_at
         * (Required): string. When this attempt last changed. Duplicate payment notifications
         * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". [] (Value):
             * string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
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
         * state, including synthetic test events. canceled_at (Optional): string or null. When the
         * attempt was canceled. An attempt canceled with its checkout session before payment
         * started may not have it. canceled_at.anyOf[1] (Value): string. When the attempt was
         * canceled. An attempt canceled with its checkout session before payment started may not
         * have it. Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2]
         * (Value): null. cancellation_requested_at (Optional): string or null. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. cancellation_requested_at.anyOf[1] (Value): string. When cancellation of this
         * attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * cancellation_requested_at.anyOf[2] (Value): null. checkout_session_id (Optional): string
         * or null. The hosted or headless checkout session the buyer pays through. Absent for
         * automatic charges. checkout_session_id.anyOf[1] (Value): string. The hosted or headless
         * checkout session the buyer pays through. Absent for automatic charges. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * expected_amount_money (Optional): {@link MoneyValue} or null. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[1] (Value): {@link MoneyValue}. The amount this attempt
         * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
         * expected_amount_money.anyOf[2] (Value): null. expires_at (Optional): string or null.
         * When a checkout attempt expires, matching its checkout session. Absent for automatic
         * charges. expires_at.anyOf[1] (Value): string. When a checkout attempt expires, matching
         * its checkout session. Absent for automatic charges. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. invoice_id (Optional): string
         * or null. The invoice this attempt collects. invoice_id.anyOf[1] (Value): string. The
         * invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * invoice_id.anyOf[2] (Value): null. invoice_payment_attempt_id (Optional): string or
         * null. Flint invoice payment attempt ID. invoice_payment_attempt_id.anyOf[1] (Value):
         * string. Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_payment_attempt_id.anyOf[2] (Value): null. invoice_schedule_entry_id (Optional):
         * string or null. The schedule entry this attempt collects. Absent when the attempt
         * collects the invoice balance. invoice_schedule_entry_id.anyOf[1] (Value): string. The
         * schedule entry this attempt collects. Absent when the attempt collects the invoice
         * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". invoice_schedule_entry_id.anyOf[2]
         * (Value): null. last_payment_error (Optional): {@link PaymentErrorSummary} or null. Why
         * the payment failed. Present only when status is failed. last_payment_error.anyOf[1]
         * (Value): {@link PaymentErrorSummary}. Why the payment failed. Present only when status
         * is failed. last_payment_error.anyOf[2] (Value): null. payment_intent_id (Optional):
         * string or null. The payment intent behind this attempt. Absent until payment starts,
         * such as a hosted attempt the buyer hasn't paid yet. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent behind this attempt. Absent until payment starts, such as a
         * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. rail (Optional): string or null. How the
         * attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
         * enum: "card", "ach_debit". rail.anyOf[1] (Value): string. How the attempt collects:
         * card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card",
         * "ach_debit". rail.anyOf[2] (Value): null. settled_at (Optional): string or null. When
         * this attempt first settled successfully. Duplicate payment notifications preserve this
         * timestamp. settled_at.anyOf[1] (Value): string. When this attempt first settled
         * successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". settled_at.anyOf[2] (Value): null.
         * started_at (Optional): string or null. When the attempt was created. started_at.anyOf[1]
         * (Value): string. When the attempt was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". started_at.anyOf[2] (Value): null. status (Optional): string or
         * null. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[1] (Value):
         * string. Current payment attempt status. succeeded means this attempt completed
         * successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". status.anyOf[2] (Value):
         * null. supported_actions (Optional): Array of string or null. Lifecycle actions accepted
         * now. An open or processing attempt can be canceled; the payment processor can still
         * refuse cancellation. [] enum: "cancel". supported_actions.anyOf[1] (Value): Array of
         * string. Lifecycle actions accepted now. An open or processing attempt can be canceled;
         * the payment processor can still refuse cancellation. [] enum: "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
         * supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * this attempt last changed. Duplicate payment notifications preserve this timestamp.
         * updated_at.anyOf[1] (Value): string. When this attempt last changed. Duplicate payment
         * notifications preserve this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. anyOf[1] (Value): string. When the attempt was
             * canceled. An attempt canceled with its checkout session before payment started may
             * not have it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. anyOf[1] (Value): string. When cancellation of this
             * attempt was last requested. It stays set when the payment processor refuses the
             * cancellation or the payment settles first, so read status and canceled_at for the
             * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "cancellation_requested_at"?: ((string) | (null));
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. anyOf[1] (Value): string. The hosted or headless checkout session the buyer
             * pays through. Absent for automatic charges. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. anyOf[1] (Value): {@link MoneyValue}. The amount this
             * attempt collects: the outstanding balance, or the targeted schedule entry's
             * outstanding amount. anyOf[2] (Value): null.
             */
            "expected_amount_money"?: ((MoneyValue) | (null));
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. anyOf[1] (Value): string. When a checkout attempt expires, matching its
             * checkout session. Absent for automatic charges. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The invoice this attempt collects. anyOf[1] (Value): string. The invoice this
             * attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Flint invoice payment attempt ID. anyOf[1] (Value): string. Flint invoice payment
             * attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". anyOf[2] (Value): null.
             */
            "invoice_payment_attempt_id"?: ((string) | (null));
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. anyOf[1] (Value): string. The schedule entry this attempt collects.
             * Absent when the attempt collects the invoice balance. Example:
             * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". anyOf[2] (Value): null.
             */
            "invoice_schedule_entry_id"?: ((string) | (null));
            /**
             * Why the payment failed. Present only when status is failed. anyOf[1] (Value): {@link
             * PaymentErrorSummary}. Why the payment failed. Present only when status is failed.
             * anyOf[2] (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummary) | (null));
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. anyOf[1] (Value): string. The payment
             * intent behind this attempt. Absent until payment starts, such as a hosted attempt
             * the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit". anyOf[1] (Value): string. How the attempt
             * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value
             * enum: "card", "ach_debit". anyOf[2] (Value): null.
             */
            "rail"?: (("card" | "ach_debit" | (string & {})) | (null));
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. anyOf[1] (Value): string. When this attempt first settled
             * successfully. Duplicate payment notifications preserve this timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "settled_at"?: ((string) | (null));
            /**
             * When the attempt was created. anyOf[1] (Value): string. When the attempt was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "started_at"?: ((string) | (null));
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[1] (Value):
             * string. Current payment attempt status. succeeded means this attempt completed
             * successfully, even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted now. An open or processing attempt can be canceled; the
             * payment processor can still refuse cancellation. [] enum: "cancel". anyOf[1]
             * (Value): Array of string. Lifecycle actions accepted now. An open or processing
             * attempt can be canceled; the payment processor can still refuse cancellation. []
             * enum: "cancel". anyOf[1][] (Value): string. Value enum: "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. anyOf[1] (Value): string. When this attempt last changed. Duplicate
             * payment notifications preserve this timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "footer"?: ((string | null) | (null) | (unknown));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            "memo"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            "po_number"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmounts) | (null));
            "recipient_email"?: ((string | null) | (null) | (unknown));
            "reference"?: ((string | null) | (null) | (unknown));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((Address) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            "service_date"?: ((string | null) | (null) | (unknown));
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            "snapshot"?: ((InvoiceSnapshot) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string | null) | (null) | (unknown));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "footer"?: ((string | null) | (null) | (unknown));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            "memo"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            "po_number"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmounts) | (null));
            "recipient_email"?: ((string | null) | (null) | (unknown));
            "reference"?: ((string | null) | (null) | (unknown));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((Address) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            "service_date"?: ((string | null) | (null) | (unknown));
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            "snapshot"?: ((InvoiceSnapshot) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string | null) | (null) | (unknown));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
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
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollection} or null. How this
     * invoice is collected, resolved when the draft is written. Send this object back when
     * updating its collection policy. previous_attributes.collection.anyOf[1] (Value): {@link
     * InvoiceCollection}. How this invoice is collected, resolved when the draft is written. Send
     * this object back when updating its collection policy.
     * previous_attributes.collection.anyOf[2] (Value): null.
     * previous_attributes.collection_block_status (Optional): string or null. Whether collection
     * is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[1] (Value): string. Whether collection is
     * blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link ExpandedCustomerSummary} or
     * null or null. Summary of the billed customer. Returned only with expand=customer. Present
     * only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. previous_attributes.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary} or
     * null. Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * previous_attributes.customer.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.customer.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has no
     * customer. previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this
     * invoice. Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. Use it as your sync key: it isn't
     * printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.footer (Optional): string or null or null. Fine print at the bottom of
     * the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[1] (Value): string or null. Fine print at the bottom of the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFee} or null. Late fees assessed on this invoice,
     * each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees
     * assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A charge assessed
     * because an invoice payment is overdue. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null or null. Message to the customer,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string or null. Message to the customer, printed
     * on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummary} or null or null. Summary of the backing order. Returned only
     * with expand=order. Present only when `expand` includes `order`; `null` when expanded and
     * there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary} or null. Summary of the backing order. Returned only with
     * expand=order. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. previous_attributes.order.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * previous_attributes.order.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. The order this invoice bills. Every invoice has one; quick pay creates it.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this invoice bills. Every
     * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.paid_at (Optional):
     * string or null. When the invoice most recently became paid. Cleared when status leaves paid
     * and set again on a later paid transition. previous_attributes.paid_at.anyOf[1] (Value):
     * string. When the invoice most recently became paid. Cleared when status leaves paid and set
     * again on a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_due
     * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
     * object back when updating the draft; payment_terms captures the term's current revision
     * again. previous_attributes.payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The
     * resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. previous_attributes.payment_due.anyOf[2]
     * (Value): null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot} or null. The payment term captured on the draft, with its due
     * date rule and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A
     * draft previews the backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1] (Value):
     * {@link PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
     * backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[2] (Value):
     * null. previous_attributes.recipient_email (Optional): string or null or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[1] (Value): string or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[2] (Value): null.
     * previous_attributes.reference (Optional): string or null or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[1] (Value): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link Address} or null. Where the buyer
     * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
     * address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link Address}. Where the
     * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
     * remit-to address. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link InvoiceScheduleEntry} or
     * null. The payment schedule, in schedule order. Always [] when the invoice has no schedule
     * and is collected in one balance. previous_attributes.schedule_entries.anyOf[1] (Value):
     * Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One
     * payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
     * its due time, amounts, and status. previous_attributes.schedule_entries.anyOf[2] (Value):
     * null. previous_attributes.scheduled_issue_at (Optional): string or null or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string or null. When Flint will issue and deliver this draft. `null` when no issue
     * is scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null or null. The
     * calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as
     * written, without timezone conversion. `null` when unset.
     * previous_attributes.service_date.anyOf[1] (Value): string or null. The calendar date of the
     * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
     * previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link InvoiceSettlementAmounts} or null.
     * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice
     * balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money -
     * credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible,
     * and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
     * losses don't change it. previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes, late fees,
     * and the remaining invoice balance. What is still owed: pricing_amounts.total_money +
     * late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on
     * paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on
     * a draft. Refunds and dispute losses don't change it. Money collected, returned, waived, and
     * still owed on a bill. previous_attributes.settlement_amounts.anyOf[2] (Value): null.
     * previous_attributes.snapshot (Optional): {@link InvoiceSnapshot} or null. The billing
     * content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the
     * backing order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[1] (Value): {@link InvoiceSnapshot}. The billing content
     * of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing
     * order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Current invoice status. paid and credited close the current balance and can
     * reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
     * payments and becomes paid when fully recovered; reversals restore the write-off. voided is
     * final. Refunds change refund_status without reopening the balance. A lost dispute leaves
     * paid_money, the balance, and status unchanged; collecting it again requires a new invoice.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". previous_attributes.status.anyOf[1] (Value): string. Current invoice status.
     * paid and credited close the current balance and can reopen to open or partially_paid after a
     * payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. A lost dispute leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null or null. The subscription the backing order belongs to, copied
     * when the draft is created and never changed. `null` when the order isn't part of a
     * subscription. previous_attributes.subscription_id.anyOf[1] (Value): string or null. The
     * subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollection} or null. How this invoice is collected, resolved when the draft is
         * written. Send this object back when updating its collection policy. collection.anyOf[1]
         * (Value): {@link InvoiceCollection}. How this invoice is collected, resolved when the
         * draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null or null. Summary of the billed customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary} or null. Summary of the billed customer. Returned only with
         * expand=customer. Present only when `expand` includes `customer`; `null` when expanded
         * and there is no related customer. customer.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[1].anyOf[2] (Value): null.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer billed
         * by this invoice. Absent when the invoice has no customer. customer_id.anyOf[1] (Value):
         * string. Customer billed by this invoice. Absent when the invoice has no customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_mode (Optional): string or null. How issue delivered the invoice. Value enum:
         * "email", "caller_managed". delivery_mode.anyOf[1] (Value): string. How issue delivered
         * the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[2] (Value):
         * null. due_date (Optional): string or null. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
         * format, interpreted in timezone (UTC when absent). The outstanding balance becomes
         * overdue only after this date ends. Automatic collection runs at the later of issue and
         * the start of this date. With payment terms, issue computes this date from issued_at.
         * Absent when there is no due date. Format: date. Example: "2026-08-02". due_date.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null or null. Caller-owned
         * identifier for this resource in an external system. Use it as your sync key: it isn't
         * printed on the invoice. `null` when unset. external_reference_id.anyOf[1] (Value):
         * string or null. Caller-owned identifier for this resource in an external system. Use it
         * as your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * footer (Optional): string or null or null. Fine print at the bottom of the invoice and
         * PDF. It cannot change after issue. `null` when unset. footer.anyOf[1] (Value): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. footer.anyOf[2] (Value): null. invoice_id (Optional): string or null.
         * Flint invoice ID. invoice_id.anyOf[1] (Value): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. invoice_number
         * (Optional): string or null. Sequential document number assigned when the invoice is
         * issued. Numbering is per merchant, with test and live mode numbered independently.
         * invoice_number.anyOf[1] (Value): string. Sequential document number assigned when the
         * invoice is issued. Numbering is per merchant, with test and live mode numbered
         * independently. invoice_number.anyOf[2] (Value): null. is_overdue (Optional): boolean or
         * null. Whether the invoice is open or partially_paid and past due with a balance
         * remaining. Without schedule_entries, the due_date has ended in timezone (UTC when
         * absent) and outstanding_money is above zero; with them, at least one entry is overdue.
         * Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean. Whether the
         * invoice is open or partially_paid and past due with a balance remaining. Without
         * schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFee} or null. Late fees assessed on this invoice, each with its paid,
         * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1] (Value): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A
         * charge assessed because an invoice payment is overdue. late_fees.anyOf[2] (Value): null.
         * memo (Optional): string or null or null. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[1] (Value): string
         * or null. Message to the customer, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. memo.anyOf[2] (Value): null. merchant_id (Optional): string or
         * null. Merchant that owns this invoice. merchant_id.anyOf[1] (Value): string. Merchant
         * that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata. metadata.anyOf[2]
         * (Value): null. order (Optional): {@link ExpandedOrderSummary} or null or null. Summary
         * of the backing order. Returned only with expand=order. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[1].anyOf[2] (Value): null. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
         * object back when updating the draft; payment_terms captures the term's current revision
         * again. payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[2] (Value): null. payment_terms_snapshot
         * (Optional): {@link InvoicePaymentTermsSnapshot} or null. The payment term captured on
         * the draft, with its due date rule and late fee policy. Later changes to the payment term
         * don't affect this invoice. payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[2] (Value): null. po_number (Optional): string or null or
         * null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
         * change after issue. `null` when unset. po_number.anyOf[1] (Value): string or null. The
         * buyer's purchase order number, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. po_number.anyOf[2] (Value): null. pricing_amounts (Optional):
         * {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A draft
         * previews the backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[1] (Value): {@link
         * PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
         * backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[2] (Value): null.
         * recipient_email (Optional): string or null or null. Where Flint emails the invoice and
         * its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[1] (Value): string or null. Where Flint emails the invoice and its
         * reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string or null. Your reference for the invoice, printed on
         * the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
         * change after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link Address} or null. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[1] (Value): {@link Address}. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntry} or null. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries.anyOf[1]
         * (Value): Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order.
         * Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One payment on an
         * invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. schedule_entries.anyOf[2] (Value): null. scheduled_issue_at
         * (Optional): string or null or null. When Flint will issue and deliver this draft. `null`
         * when no issue is scheduled. Cleared when the draft is issued or voided, or when you send
         * null. scheduled_issue_at.anyOf[1] (Value): string or null. When Flint will issue and
         * deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued
         * or voided, or when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_issue_at.anyOf[2] (Value): null. service_date (Optional): string or null or
         * null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
         * print it as written, without timezone conversion. `null` when unset.
         * service_date.anyOf[1] (Value): string or null. The calendar date of the billed service,
         * in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone
         * conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmounts} or null. Payments, refunds, write-offs, allocated credit
         * notes, late fees, and the remaining invoice balance. What is still owed:
         * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses
         * don't change it. settlement_amounts.anyOf[1] (Value): {@link InvoiceSettlementAmounts}.
         * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
         * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
         * paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited,
         * uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft.
         * Refunds and dispute losses don't change it. Money collected, returned, waived, and still
         * owed on a bill. settlement_amounts.anyOf[2] (Value): null. snapshot (Optional): {@link
         * InvoiceSnapshot} or null. The billing content of the invoice: line items, discounts,
         * charges, tip, and tax. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. snapshot.anyOf[1] (Value): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, and tax. A draft previews the backing order; issue freezes it, and later order
         * changes don't reach an issued invoice. snapshot.anyOf[2] (Value): null. status
         * (Optional): string or null. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". status.anyOf[1] (Value): string. Current invoice status.
         * paid and credited close the current balance and can reopen to open or partially_paid
         * after a payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. A lost dispute leaves paid_money, the
         * balance, and status unchanged; collecting it again requires a new invoice. Value enum:
         * "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string or null. The subscription the backing order belongs to, copied when the
         * draft is created and never changed. `null` when the order isn't part of a subscription.
         * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollection}. How this invoice is collected, resolved when the draft is
             * written. Send this object back when updating its collection policy. anyOf[2]
             * (Value): null.
             */
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary} or null. Summary of the
             * billed customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string or
             * null. Caller-owned identifier for this resource in an external system. Use it as
             * your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string or null. Fine print at the bottom of the
             * invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value):
             * null.
             */
            "footer"?: ((string | null) | (null) | (unknown));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees assessed on
             * this invoice, each with its paid, waived, written-off, and outstanding amounts.
             * settlement_amounts.late_fee_money is their assessed total minus waivers. anyOf[1][]
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue. anyOf[2] (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string or null. Message to the customer,
             * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "memo"?: ((string | null) | (null) | (unknown));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
             * anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary} or null. Summary of the backing
             * order. Returned only with expand=order. Present only when `expand` includes `order`;
             * `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value):
             * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
             * and refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDue}. The resolved due-date policy. Send this object back when
             * updating the draft; payment_terms captures the term's current revision again.
             * anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with
             * its due date rule and late fee policy. Later changes to the payment term don't
             * affect this invoice. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string or null. The buyer's
             * purchase order number, printed on the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string | null) | (null) | (unknown));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmounts}. The invoice pricing totals, frozen at
             * issue. A draft previews the backing order. total_money excludes late fees, which are
             * in settlement_amounts.late_fee_money. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmounts) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string or null. Where Flint emails the
             * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "recipient_email"?: ((string | null) | (null) | (unknown));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string or null. Your reference for the invoice, printed on the
             * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
             * change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string | null) | (null) | (unknown));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link Address}. Where the
             * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
             * remit-to address. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((Address) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
             * invoice has no schedule and is collected in one balance. anyOf[1][] (Value): {@link
             * InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
             * deposit, installment, or balance, with its due time, amounts, and status. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string or null. When Flint will issue and deliver this draft. `null` when no issue
             * is scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
             * format. The invoice and PDF print it as written, without timezone conversion. `null`
             * when unset. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string | null) | (null) | (unknown));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and dispute losses don't change it. anyOf[1] (Value): {@link
             * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes,
             * late fees, and the remaining invoice balance. What is still owed:
             * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
             * losses don't change it. Money collected, returned, waived, and still owed on a bill.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link InvoiceSnapshot}. The billing
             * content of the invoice: line items, discounts, charges, tip, and tax. A draft
             * previews the backing order; issue freezes it, and later order changes don't reach an
             * issued invoice. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshot) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value):
             * string. Current invoice status. paid and credited close the current balance and can
             * reopen to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value):
             * null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string or null. The subscription the backing order belongs to, copied when the draft
             * is created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string | null) | (null) | (unknown));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
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
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollection} or null. How this
     * invoice is collected, resolved when the draft is written. Send this object back when
     * updating its collection policy. previous_attributes.collection.anyOf[1] (Value): {@link
     * InvoiceCollection}. How this invoice is collected, resolved when the draft is written. Send
     * this object back when updating its collection policy.
     * previous_attributes.collection.anyOf[2] (Value): null.
     * previous_attributes.collection_block_status (Optional): string or null. Whether collection
     * is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[1] (Value): string. Whether collection is
     * blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED
     * with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link ExpandedCustomerSummary} or
     * null or null. Summary of the billed customer. Returned only with expand=customer. Present
     * only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. previous_attributes.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary} or
     * null. Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * previous_attributes.customer.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.customer.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has no
     * customer. previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this
     * invoice. Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. Use it as your sync key: it isn't
     * printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.footer (Optional): string or null or null. Fine print at the bottom of
     * the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[1] (Value): string or null. Fine print at the bottom of the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFee} or null. Late fees assessed on this invoice,
     * each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees
     * assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A charge assessed
     * because an invoice payment is overdue. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null or null. Message to the customer,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string or null. Message to the customer, printed
     * on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummary} or null or null. Summary of the backing order. Returned only
     * with expand=order. Present only when `expand` includes `order`; `null` when expanded and
     * there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary} or null. Summary of the backing order. Returned only with
     * expand=order. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. previous_attributes.order.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * previous_attributes.order.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. The order this invoice bills. Every invoice has one; quick pay creates it.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this invoice bills. Every
     * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.paid_at (Optional):
     * string or null. When the invoice most recently became paid. Cleared when status leaves paid
     * and set again on a later paid transition. previous_attributes.paid_at.anyOf[1] (Value):
     * string. When the invoice most recently became paid. Cleared when status leaves paid and set
     * again on a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paid_at.anyOf[2] (Value): null. previous_attributes.payment_due
     * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
     * object back when updating the draft; payment_terms captures the term's current revision
     * again. previous_attributes.payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The
     * resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. previous_attributes.payment_due.anyOf[2]
     * (Value): null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot} or null. The payment term captured on the draft, with its due
     * date rule and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string or null. The buyer's purchase order
     * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A
     * draft previews the backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1] (Value):
     * {@link PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
     * backing order. total_money excludes late fees, which are in
     * settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[2] (Value):
     * null. previous_attributes.recipient_email (Optional): string or null or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[1] (Value): string or null. Where Flint
     * emails the invoice and its reminders. Email delivery requires it at issue. `null` when
     * unset. previous_attributes.recipient_email.anyOf[2] (Value): null.
     * previous_attributes.reference (Optional): string or null or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[1] (Value): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link Address} or null. Where the buyer
     * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
     * address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link Address}. Where the
     * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
     * remit-to address. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link InvoiceScheduleEntry} or
     * null. The payment schedule, in schedule order. Always [] when the invoice has no schedule
     * and is collected in one balance. previous_attributes.schedule_entries.anyOf[1] (Value):
     * Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One
     * payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
     * its due time, amounts, and status. previous_attributes.schedule_entries.anyOf[2] (Value):
     * null. previous_attributes.scheduled_issue_at (Optional): string or null or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string or null. When Flint will issue and deliver this draft. `null` when no issue
     * is scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null or null. The
     * calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as
     * written, without timezone conversion. `null` when unset.
     * previous_attributes.service_date.anyOf[1] (Value): string or null. The calendar date of the
     * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
     * previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link InvoiceSettlementAmounts} or null.
     * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice
     * balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money -
     * credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible,
     * and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
     * losses don't change it. previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes, late fees,
     * and the remaining invoice balance. What is still owed: pricing_amounts.total_money +
     * late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on
     * paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on
     * a draft. Refunds and dispute losses don't change it. Money collected, returned, waived, and
     * still owed on a bill. previous_attributes.settlement_amounts.anyOf[2] (Value): null.
     * previous_attributes.snapshot (Optional): {@link InvoiceSnapshot} or null. The billing
     * content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the
     * backing order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[1] (Value): {@link InvoiceSnapshot}. The billing content
     * of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing
     * order; issue freezes it, and later order changes don't reach an issued invoice.
     * previous_attributes.snapshot.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Current invoice status. paid and credited close the current balance and can
     * reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
     * payments and becomes paid when fully recovered; reversals restore the write-off. voided is
     * final. Refunds change refund_status without reopening the balance. A lost dispute leaves
     * paid_money, the balance, and status unchanged; collecting it again requires a new invoice.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". previous_attributes.status.anyOf[1] (Value): string. Current invoice status.
     * paid and credited close the current balance and can reopen to open or partially_paid after a
     * payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. A lost dispute leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null or null. The subscription the backing order belongs to, copied
     * when the draft is created and never changed. `null` when the order isn't part of a
     * subscription. previous_attributes.subscription_id.anyOf[1] (Value): string or null. The
     * subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollection} or null. How this invoice is collected, resolved when the draft is
         * written. Send this object back when updating its collection policy. collection.anyOf[1]
         * (Value): {@link InvoiceCollection}. How this invoice is collected, resolved when the
         * draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null or null. Summary of the billed customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary} or null. Summary of the billed customer. Returned only with
         * expand=customer. Present only when `expand` includes `customer`; `null` when expanded
         * and there is no related customer. customer.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[1].anyOf[2] (Value): null.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer billed
         * by this invoice. Absent when the invoice has no customer. customer_id.anyOf[1] (Value):
         * string. Customer billed by this invoice. Absent when the invoice has no customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_mode (Optional): string or null. How issue delivered the invoice. Value enum:
         * "email", "caller_managed". delivery_mode.anyOf[1] (Value): string. How issue delivered
         * the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[2] (Value):
         * null. due_date (Optional): string or null. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
         * format, interpreted in timezone (UTC when absent). The outstanding balance becomes
         * overdue only after this date ends. Automatic collection runs at the later of issue and
         * the start of this date. With payment terms, issue computes this date from issued_at.
         * Absent when there is no due date. Format: date. Example: "2026-08-02". due_date.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null or null. Caller-owned
         * identifier for this resource in an external system. Use it as your sync key: it isn't
         * printed on the invoice. `null` when unset. external_reference_id.anyOf[1] (Value):
         * string or null. Caller-owned identifier for this resource in an external system. Use it
         * as your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * footer (Optional): string or null or null. Fine print at the bottom of the invoice and
         * PDF. It cannot change after issue. `null` when unset. footer.anyOf[1] (Value): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. footer.anyOf[2] (Value): null. invoice_id (Optional): string or null.
         * Flint invoice ID. invoice_id.anyOf[1] (Value): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. invoice_number
         * (Optional): string or null. Sequential document number assigned when the invoice is
         * issued. Numbering is per merchant, with test and live mode numbered independently.
         * invoice_number.anyOf[1] (Value): string. Sequential document number assigned when the
         * invoice is issued. Numbering is per merchant, with test and live mode numbered
         * independently. invoice_number.anyOf[2] (Value): null. is_overdue (Optional): boolean or
         * null. Whether the invoice is open or partially_paid and past due with a balance
         * remaining. Without schedule_entries, the due_date has ended in timezone (UTC when
         * absent) and outstanding_money is above zero; with them, at least one entry is overdue.
         * Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean. Whether the
         * invoice is open or partially_paid and past due with a balance remaining. Without
         * schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFee} or null. Late fees assessed on this invoice, each with its paid,
         * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1] (Value): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
         * assessed total minus waivers. late_fees.anyOf[1][] (Value): {@link InvoiceLateFee}. A
         * charge assessed because an invoice payment is overdue. late_fees.anyOf[2] (Value): null.
         * memo (Optional): string or null or null. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[1] (Value): string
         * or null. Message to the customer, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. memo.anyOf[2] (Value): null. merchant_id (Optional): string or
         * null. Merchant that owns this invoice. merchant_id.anyOf[1] (Value): string. Merchant
         * that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata. metadata.anyOf[2]
         * (Value): null. order (Optional): {@link ExpandedOrderSummary} or null or null. Summary
         * of the backing order. Returned only with expand=order. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[1].anyOf[2] (Value): null. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDue} or null. The resolved due-date policy. Send this
         * object back when updating the draft; payment_terms captures the term's current revision
         * again. payment_due.anyOf[1] (Value): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[2] (Value): null. payment_terms_snapshot
         * (Optional): {@link InvoicePaymentTermsSnapshot} or null. The payment term captured on
         * the draft, with its due date rule and late fee policy. Later changes to the payment term
         * don't affect this invoice. payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[2] (Value): null. po_number (Optional): string or null or
         * null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
         * change after issue. `null` when unset. po_number.anyOf[1] (Value): string or null. The
         * buyer's purchase order number, printed on the invoice and PDF. It cannot change after
         * issue. `null` when unset. po_number.anyOf[2] (Value): null. pricing_amounts (Optional):
         * {@link PricingAmounts} or null. The invoice pricing totals, frozen at issue. A draft
         * previews the backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[1] (Value): {@link
         * PricingAmounts}. The invoice pricing totals, frozen at issue. A draft previews the
         * backing order. total_money excludes late fees, which are in
         * settlement_amounts.late_fee_money. pricing_amounts.anyOf[2] (Value): null.
         * recipient_email (Optional): string or null or null. Where Flint emails the invoice and
         * its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[1] (Value): string or null. Where Flint emails the invoice and its
         * reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string or null. Your reference for the invoice, printed on
         * the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
         * change after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link Address} or null. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[1] (Value): {@link Address}. Where the buyer sends offline
         * payments, shown on the invoice. Defaults to the invoice settings remit-to address.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntry} or null. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries.anyOf[1]
         * (Value): Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order.
         * Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntry}. One payment on an
         * invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. schedule_entries.anyOf[2] (Value): null. scheduled_issue_at
         * (Optional): string or null or null. When Flint will issue and deliver this draft. `null`
         * when no issue is scheduled. Cleared when the draft is issued or voided, or when you send
         * null. scheduled_issue_at.anyOf[1] (Value): string or null. When Flint will issue and
         * deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued
         * or voided, or when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_issue_at.anyOf[2] (Value): null. service_date (Optional): string or null or
         * null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
         * print it as written, without timezone conversion. `null` when unset.
         * service_date.anyOf[1] (Value): string or null. The calendar date of the billed service,
         * in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone
         * conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmounts} or null. Payments, refunds, write-offs, allocated credit
         * notes, late fees, and the remaining invoice balance. What is still owed:
         * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses
         * don't change it. settlement_amounts.anyOf[1] (Value): {@link InvoiceSettlementAmounts}.
         * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
         * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
         * paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited,
         * uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft.
         * Refunds and dispute losses don't change it. Money collected, returned, waived, and still
         * owed on a bill. settlement_amounts.anyOf[2] (Value): null. snapshot (Optional): {@link
         * InvoiceSnapshot} or null. The billing content of the invoice: line items, discounts,
         * charges, tip, and tax. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. snapshot.anyOf[1] (Value): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, and tax. A draft previews the backing order; issue freezes it, and later order
         * changes don't reach an issued invoice. snapshot.anyOf[2] (Value): null. status
         * (Optional): string or null. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". status.anyOf[1] (Value): string. Current invoice status.
         * paid and credited close the current balance and can reopen to open or partially_paid
         * after a payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. A lost dispute leaves paid_money, the
         * balance, and status unchanged; collecting it again requires a new invoice. Value enum:
         * "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string or null. The subscription the backing order belongs to, copied when the
         * draft is created and never changed. `null` when the order isn't part of a subscription.
         * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollection}. How this invoice is collected, resolved when the draft is
             * written. Send this object back when updating its collection policy. anyOf[2]
             * (Value): null.
             */
            "collection"?: ((InvoiceCollection) | (null) | (unknown));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary} or null. Summary of the
             * billed customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string or
             * null. Caller-owned identifier for this resource in an external system. Use it as
             * your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string or null. Fine print at the bottom of the
             * invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value):
             * null.
             */
            "footer"?: ((string | null) | (null) | (unknown));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFee}. Late fees assessed on
             * this invoice, each with its paid, waived, written-off, and outstanding amounts.
             * settlement_amounts.late_fee_money is their assessed total minus waivers. anyOf[1][]
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue. anyOf[2] (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFee>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string or null. Message to the customer,
             * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "memo"?: ((string | null) | (null) | (unknown));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. Caller-owned metadata.
             * anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary} or null. Summary of the backing
             * order. Returned only with expand=order. Present only when `expand` includes `order`;
             * `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value):
             * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
             * and refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "order"?: ((((ExpandedOrderSummary) | (null))) | (null) | (unknown));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDue}. The resolved due-date policy. Send this object back when
             * updating the draft; payment_terms captures the term's current revision again.
             * anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDue) | (null) | (unknown));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with
             * its due date rule and late fee policy. Later changes to the payment term don't
             * affect this invoice. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshot) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string or null. The buyer's
             * purchase order number, printed on the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string | null) | (null) | (unknown));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmounts}. The invoice pricing totals, frozen at
             * issue. A draft previews the backing order. total_money excludes late fees, which are
             * in settlement_amounts.late_fee_money. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmounts) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string or null. Where Flint emails the
             * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
             * anyOf[2] (Value): null.
             */
            "recipient_email"?: ((string | null) | (null) | (unknown));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string or null. Your reference for the invoice, printed on the
             * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot
             * change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string | null) | (null) | (unknown));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link Address}. Where the
             * buyer sends offline payments, shown on the invoice. Defaults to the invoice settings
             * remit-to address. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((Address) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
             * invoice has no schedule and is collected in one balance. anyOf[1][] (Value): {@link
             * InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
             * deposit, installment, or balance, with its due time, amounts, and status. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntry>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string or null. When Flint will issue and deliver this draft. `null` when no issue
             * is scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string | null) | (null) | (unknown));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
             * format. The invoice and PDF print it as written, without timezone conversion. `null`
             * when unset. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string | null) | (null) | (unknown));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and dispute losses don't change it. anyOf[1] (Value): {@link
             * InvoiceSettlementAmounts}. Payments, refunds, write-offs, allocated credit notes,
             * late fees, and the remaining invoice balance. What is still owed:
             * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute
             * losses don't change it. Money collected, returned, waived, and still owed on a bill.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmounts) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link InvoiceSnapshot}. The billing
             * content of the invoice: line items, discounts, charges, tip, and tax. A draft
             * previews the backing order; issue freezes it, and later order changes don't reach an
             * issued invoice. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshot) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value):
             * string. Current invoice status. paid and credited close the current balance and can
             * reopen to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value):
             * null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string or null. The subscription the backing order belongs to, copied when the draft
             * is created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string | null) | (null) | (unknown));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
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
