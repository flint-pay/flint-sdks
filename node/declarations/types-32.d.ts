import type { MerchantWebhookEnvelope } from './types-38.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { ResponseMeta } from './types-54.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { WebhookInvoice } from './types-70.js';
import type { BundleComponent } from './types-1.js';
import type { CategoryReference } from './types-5.js';
import type { Image } from './types-28.js';
import type { OrderLineItemModifier } from './types-41.js';
import type { SelectedProductOption } from './types-59.js';
import type { Invoice } from './types-31.js';
/** One attempt to email an invoice or an invoice reminder. */
export type InvoiceDeliveryAttempt = ({
    /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
    "cc_emails"?: Array<string>;
    /** How Flint delivered the invoice. Value enum: "email". */
    "channel": "email" | (string & {});
    /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Whether this attempt is the invoice email sent at issue or a reminder. Value enum: "send",
     * "reminder".
     */
    "delivery_type": "send" | "reminder" | (string & {});
    /**
     * Present only when status is failed. Legacy failed attempts without a stored reason return
     * rejected. Value enum: "rejected", "delivery_unknown", "canceled".
     */
    "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
    /** Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". */
    "invoice_delivery_attempt_id": string;
    /**
     * ID of the invoice this delivery attempt belongs to. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
    /**
     * When the email service accepted the message. Absent until it does. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "sent_at"?: string;
    /**
     * The outcome of this attempt. sent means the email service accepted the message. Value enum:
     * "pending", "sent", "failed", "suppressed".
     */
    "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
    /**
     * Present only when status is suppressed. Value enum: "merchant_managed_email",
     * "recipient_unsubscribed", "sandbox_daily_limit_reached".
     */
    "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
    /** Address the invoice was sent to. `null` when the customer was deleted. */
    "to_email": string | null;
});
export type InvoiceDeliveryAttemptFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "cc_emails"?: Array<string>;
            "channel": "email" | (string & {});
            "created_at": string;
            "delivery_type": "send" | "reminder" | (string & {});
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            "invoice_delivery_attempt_id": string;
            "invoice_id": string;
            "sent_at"?: string;
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            "to_email": string | null;
        });
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_delivery_attempt.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "cc_emails"?: Array<string>;
            "channel": "email" | (string & {});
            "created_at": string;
            "delivery_type": "send" | "reminder" | (string & {});
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            "invoice_delivery_attempt_id": string;
            "invoice_id": string;
            "sent_at"?: string;
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            "to_email": string | null;
        });
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_delivery_attempt.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_delivery_attempt.failed";
});
/**
 * The `invoice_delivery_attempt.failed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoiceDeliveryAttemptFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.cc_emails (Optional): Array of string. Addresses copied on this
     * email. Absent when none were copied. object.cc_emails[] (Value): string. object.channel
     * (Required): string. How Flint delivered the invoice. Value enum: "email". object.created_at
     * (Required): string. When the attempt was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_type (Required): string. Whether this attempt is the
     * invoice email sent at issue or a reminder. Value enum: "send", "reminder".
     * object.failure_reason (Optional): string. Present only when status is failed. Legacy failed
     * attempts without a stored reason return rejected. Value enum: "rejected",
     * "delivery_unknown", "canceled". object.invoice_delivery_attempt_id (Required): string. Flint
     * invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". object.invoice_id
     * (Required): string. ID of the invoice this delivery attempt belongs to. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.sent_at (Optional): string. When the email service
     * accepted the message. Absent until it does. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The outcome of this attempt. sent
     * means the email service accepted the message. Value enum: "pending", "sent", "failed",
     * "suppressed". object.suppression_reason (Optional): string. Present only when status is
     * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
     * "sandbox_daily_limit_reached". object.to_email (Required): string or null. Address the
     * invoice was sent to. `null` when the customer was deleted. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. cc_emails
         * (Optional): Array of string. Addresses copied on this email. Absent when none were
         * copied. cc_emails[] (Value): string. channel (Required): string. How Flint delivered the
         * invoice. Value enum: "email". created_at (Required): string. When the attempt was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_type (Required):
         * string. Whether this attempt is the invoice email sent at issue or a reminder. Value
         * enum: "send", "reminder". failure_reason (Optional): string. Present only when status is
         * failed. Legacy failed attempts without a stored reason return rejected. Value enum:
         * "rejected", "delivery_unknown", "canceled". invoice_delivery_attempt_id (Required):
         * string. Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ".
         * invoice_id (Required): string. ID of the invoice this delivery attempt belongs to.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". sent_at (Optional): string. When the email
         * service accepted the message. Absent until it does. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. The outcome of this attempt. sent
         * means the email service accepted the message. Value enum: "pending", "sent", "failed",
         * "suppressed". suppression_reason (Optional): string. Present only when status is
         * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
         * "sandbox_daily_limit_reached". to_email (Required): string or null. Address the invoice
         * was sent to. `null` when the customer was deleted.
         */
        "object": ({
            /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
            "cc_emails"?: Array<string>;
            /** How Flint delivered the invoice. Value enum: "email". */
            "channel": "email" | (string & {});
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Whether this attempt is the invoice email sent at issue or a reminder. Value enum:
             * "send", "reminder".
             */
            "delivery_type": "send" | "reminder" | (string & {});
            /**
             * Present only when status is failed. Legacy failed attempts without a stored reason
             * return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
             */
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            /** Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". */
            "invoice_delivery_attempt_id": string;
            /**
             * ID of the invoice this delivery attempt belongs to. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the email service accepted the message. Absent until it does. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sent_at"?: string;
            /**
             * The outcome of this attempt. sent means the email service accepted the message.
             * Value enum: "pending", "sent", "failed", "suppressed".
             */
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            /**
             * Present only when status is suppressed. Value enum: "merchant_managed_email",
             * "recipient_unsubscribed", "sandbox_daily_limit_reached".
             */
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            /** Address the invoice was sent to. `null` when the customer was deleted. */
            "to_email": string | null;
        });
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_delivery_attempt.failed". */
    "event_type"?: "invoice_delivery_attempt.failed";
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
 * The `invoice_delivery_attempt.failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceDeliveryAttemptFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.cc_emails (Optional): Array of string. Addresses copied on this
     * email. Absent when none were copied. object.cc_emails[] (Value): string. object.channel
     * (Required): string. How Flint delivered the invoice. Value enum: "email". object.created_at
     * (Required): string. When the attempt was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_type (Required): string. Whether this attempt is the
     * invoice email sent at issue or a reminder. Value enum: "send", "reminder".
     * object.failure_reason (Optional): string. Present only when status is failed. Legacy failed
     * attempts without a stored reason return rejected. Value enum: "rejected",
     * "delivery_unknown", "canceled". object.invoice_delivery_attempt_id (Required): string. Flint
     * invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". object.invoice_id
     * (Required): string. ID of the invoice this delivery attempt belongs to. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.sent_at (Optional): string. When the email service
     * accepted the message. Absent until it does. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The outcome of this attempt. sent
     * means the email service accepted the message. Value enum: "pending", "sent", "failed",
     * "suppressed". object.suppression_reason (Optional): string. Present only when status is
     * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
     * "sandbox_daily_limit_reached". object.to_email (Required): string or null. Address the
     * invoice was sent to. `null` when the customer was deleted. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. cc_emails
         * (Optional): Array of string. Addresses copied on this email. Absent when none were
         * copied. cc_emails[] (Value): string. channel (Required): string. How Flint delivered the
         * invoice. Value enum: "email". created_at (Required): string. When the attempt was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_type (Required):
         * string. Whether this attempt is the invoice email sent at issue or a reminder. Value
         * enum: "send", "reminder". failure_reason (Optional): string. Present only when status is
         * failed. Legacy failed attempts without a stored reason return rejected. Value enum:
         * "rejected", "delivery_unknown", "canceled". invoice_delivery_attempt_id (Required):
         * string. Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ".
         * invoice_id (Required): string. ID of the invoice this delivery attempt belongs to.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". sent_at (Optional): string. When the email
         * service accepted the message. Absent until it does. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. The outcome of this attempt. sent
         * means the email service accepted the message. Value enum: "pending", "sent", "failed",
         * "suppressed". suppression_reason (Optional): string. Present only when status is
         * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
         * "sandbox_daily_limit_reached". to_email (Required): string or null. Address the invoice
         * was sent to. `null` when the customer was deleted.
         */
        "object": ({
            /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
            "cc_emails"?: Array<string>;
            /** How Flint delivered the invoice. Value enum: "email". */
            "channel": "email" | (string & {});
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Whether this attempt is the invoice email sent at issue or a reminder. Value enum:
             * "send", "reminder".
             */
            "delivery_type": "send" | "reminder" | (string & {});
            /**
             * Present only when status is failed. Legacy failed attempts without a stored reason
             * return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
             */
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            /** Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". */
            "invoice_delivery_attempt_id": string;
            /**
             * ID of the invoice this delivery attempt belongs to. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the email service accepted the message. Absent until it does. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sent_at"?: string;
            /**
             * The outcome of this attempt. sent means the email service accepted the message.
             * Value enum: "pending", "sent", "failed", "suppressed".
             */
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            /**
             * Present only when status is suppressed. Value enum: "merchant_managed_email",
             * "recipient_unsubscribed", "sandbox_daily_limit_reached".
             */
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            /** Address the invoice was sent to. `null` when the customer was deleted. */
            "to_email": string | null;
        });
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_delivery_attempt.failed". */
    "event_type"?: "invoice_delivery_attempt.failed";
});
/** A page of `InvoiceDeliveryAttempt` objects. */
export type InvoiceDeliveryAttemptListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InvoiceDeliveryAttempt}. One attempt to email an invoice or an invoice reminder.
     */
    "data": Array<InvoiceDeliveryAttempt>;
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
export type InvoiceDeliveryAttemptSentEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "cc_emails"?: Array<string>;
            "channel": "email" | (string & {});
            "created_at": string;
            "delivery_type": "send" | "reminder" | (string & {});
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            "invoice_delivery_attempt_id": string;
            "invoice_id": string;
            "sent_at"?: string;
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            "to_email": string | null;
        });
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_delivery_attempt.sent";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "cc_emails"?: Array<string>;
            "channel": "email" | (string & {});
            "created_at": string;
            "delivery_type": "send" | "reminder" | (string & {});
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            "invoice_delivery_attempt_id": string;
            "invoice_id": string;
            "sent_at"?: string;
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            "to_email": string | null;
        });
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_delivery_attempt.sent";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_delivery_attempt.sent";
});
/**
 * The `invoice_delivery_attempt.sent` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoiceDeliveryAttemptSentInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.cc_emails (Optional): Array of string. Addresses copied on this
     * email. Absent when none were copied. object.cc_emails[] (Value): string. object.channel
     * (Required): string. How Flint delivered the invoice. Value enum: "email". object.created_at
     * (Required): string. When the attempt was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_type (Required): string. Whether this attempt is the
     * invoice email sent at issue or a reminder. Value enum: "send", "reminder".
     * object.failure_reason (Optional): string. Present only when status is failed. Legacy failed
     * attempts without a stored reason return rejected. Value enum: "rejected",
     * "delivery_unknown", "canceled". object.invoice_delivery_attempt_id (Required): string. Flint
     * invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". object.invoice_id
     * (Required): string. ID of the invoice this delivery attempt belongs to. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.sent_at (Optional): string. When the email service
     * accepted the message. Absent until it does. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The outcome of this attempt. sent
     * means the email service accepted the message. Value enum: "pending", "sent", "failed",
     * "suppressed". object.suppression_reason (Optional): string. Present only when status is
     * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
     * "sandbox_daily_limit_reached". object.to_email (Required): string or null. Address the
     * invoice was sent to. `null` when the customer was deleted. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. cc_emails
         * (Optional): Array of string. Addresses copied on this email. Absent when none were
         * copied. cc_emails[] (Value): string. channel (Required): string. How Flint delivered the
         * invoice. Value enum: "email". created_at (Required): string. When the attempt was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_type (Required):
         * string. Whether this attempt is the invoice email sent at issue or a reminder. Value
         * enum: "send", "reminder". failure_reason (Optional): string. Present only when status is
         * failed. Legacy failed attempts without a stored reason return rejected. Value enum:
         * "rejected", "delivery_unknown", "canceled". invoice_delivery_attempt_id (Required):
         * string. Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ".
         * invoice_id (Required): string. ID of the invoice this delivery attempt belongs to.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". sent_at (Optional): string. When the email
         * service accepted the message. Absent until it does. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. The outcome of this attempt. sent
         * means the email service accepted the message. Value enum: "pending", "sent", "failed",
         * "suppressed". suppression_reason (Optional): string. Present only when status is
         * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
         * "sandbox_daily_limit_reached". to_email (Required): string or null. Address the invoice
         * was sent to. `null` when the customer was deleted.
         */
        "object": ({
            /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
            "cc_emails"?: Array<string>;
            /** How Flint delivered the invoice. Value enum: "email". */
            "channel": "email" | (string & {});
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Whether this attempt is the invoice email sent at issue or a reminder. Value enum:
             * "send", "reminder".
             */
            "delivery_type": "send" | "reminder" | (string & {});
            /**
             * Present only when status is failed. Legacy failed attempts without a stored reason
             * return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
             */
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            /** Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". */
            "invoice_delivery_attempt_id": string;
            /**
             * ID of the invoice this delivery attempt belongs to. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the email service accepted the message. Absent until it does. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sent_at"?: string;
            /**
             * The outcome of this attempt. sent means the email service accepted the message.
             * Value enum: "pending", "sent", "failed", "suppressed".
             */
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            /**
             * Present only when status is suppressed. Value enum: "merchant_managed_email",
             * "recipient_unsubscribed", "sandbox_daily_limit_reached".
             */
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            /** Address the invoice was sent to. `null` when the customer was deleted. */
            "to_email": string | null;
        });
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_delivery_attempt.sent". */
    "event_type"?: "invoice_delivery_attempt.sent";
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
 * The `invoice_delivery_attempt.sent` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceDeliveryAttemptSentMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.cc_emails (Optional): Array of string. Addresses copied on this
     * email. Absent when none were copied. object.cc_emails[] (Value): string. object.channel
     * (Required): string. How Flint delivered the invoice. Value enum: "email". object.created_at
     * (Required): string. When the attempt was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_type (Required): string. Whether this attempt is the
     * invoice email sent at issue or a reminder. Value enum: "send", "reminder".
     * object.failure_reason (Optional): string. Present only when status is failed. Legacy failed
     * attempts without a stored reason return rejected. Value enum: "rejected",
     * "delivery_unknown", "canceled". object.invoice_delivery_attempt_id (Required): string. Flint
     * invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". object.invoice_id
     * (Required): string. ID of the invoice this delivery attempt belongs to. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.sent_at (Optional): string. When the email service
     * accepted the message. Absent until it does. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The outcome of this attempt. sent
     * means the email service accepted the message. Value enum: "pending", "sent", "failed",
     * "suppressed". object.suppression_reason (Optional): string. Present only when status is
     * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
     * "sandbox_daily_limit_reached". object.to_email (Required): string or null. Address the
     * invoice was sent to. `null` when the customer was deleted. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. cc_emails
         * (Optional): Array of string. Addresses copied on this email. Absent when none were
         * copied. cc_emails[] (Value): string. channel (Required): string. How Flint delivered the
         * invoice. Value enum: "email". created_at (Required): string. When the attempt was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_type (Required):
         * string. Whether this attempt is the invoice email sent at issue or a reminder. Value
         * enum: "send", "reminder". failure_reason (Optional): string. Present only when status is
         * failed. Legacy failed attempts without a stored reason return rejected. Value enum:
         * "rejected", "delivery_unknown", "canceled". invoice_delivery_attempt_id (Required):
         * string. Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ".
         * invoice_id (Required): string. ID of the invoice this delivery attempt belongs to.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". sent_at (Optional): string. When the email
         * service accepted the message. Absent until it does. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. The outcome of this attempt. sent
         * means the email service accepted the message. Value enum: "pending", "sent", "failed",
         * "suppressed". suppression_reason (Optional): string. Present only when status is
         * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
         * "sandbox_daily_limit_reached". to_email (Required): string or null. Address the invoice
         * was sent to. `null` when the customer was deleted.
         */
        "object": ({
            /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
            "cc_emails"?: Array<string>;
            /** How Flint delivered the invoice. Value enum: "email". */
            "channel": "email" | (string & {});
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Whether this attempt is the invoice email sent at issue or a reminder. Value enum:
             * "send", "reminder".
             */
            "delivery_type": "send" | "reminder" | (string & {});
            /**
             * Present only when status is failed. Legacy failed attempts without a stored reason
             * return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
             */
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            /** Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". */
            "invoice_delivery_attempt_id": string;
            /**
             * ID of the invoice this delivery attempt belongs to. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the email service accepted the message. Absent until it does. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sent_at"?: string;
            /**
             * The outcome of this attempt. sent means the email service accepted the message.
             * Value enum: "pending", "sent", "failed", "suppressed".
             */
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            /**
             * Present only when status is suppressed. Value enum: "merchant_managed_email",
             * "recipient_unsubscribed", "sandbox_daily_limit_reached".
             */
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            /** Address the invoice was sent to. `null` when the customer was deleted. */
            "to_email": string | null;
        });
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_delivery_attempt.sent". */
    "event_type"?: "invoice_delivery_attempt.sent";
});
export type InvoiceDeliveryAttemptSuppressedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "cc_emails"?: Array<string>;
            "channel": "email" | (string & {});
            "created_at": string;
            "delivery_type": "send" | "reminder" | (string & {});
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            "invoice_delivery_attempt_id": string;
            "invoice_id": string;
            "sent_at"?: string;
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            "to_email": string | null;
        });
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_delivery_attempt.suppressed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "cc_emails"?: Array<string>;
            "channel": "email" | (string & {});
            "created_at": string;
            "delivery_type": "send" | "reminder" | (string & {});
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            "invoice_delivery_attempt_id": string;
            "invoice_id": string;
            "sent_at"?: string;
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            "to_email": string | null;
        });
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_delivery_attempt.suppressed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_delivery_attempt.suppressed";
});
/**
 * The `invoice_delivery_attempt.suppressed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoiceDeliveryAttemptSuppressedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.cc_emails (Optional): Array of string. Addresses copied on this
     * email. Absent when none were copied. object.cc_emails[] (Value): string. object.channel
     * (Required): string. How Flint delivered the invoice. Value enum: "email". object.created_at
     * (Required): string. When the attempt was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_type (Required): string. Whether this attempt is the
     * invoice email sent at issue or a reminder. Value enum: "send", "reminder".
     * object.failure_reason (Optional): string. Present only when status is failed. Legacy failed
     * attempts without a stored reason return rejected. Value enum: "rejected",
     * "delivery_unknown", "canceled". object.invoice_delivery_attempt_id (Required): string. Flint
     * invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". object.invoice_id
     * (Required): string. ID of the invoice this delivery attempt belongs to. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.sent_at (Optional): string. When the email service
     * accepted the message. Absent until it does. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The outcome of this attempt. sent
     * means the email service accepted the message. Value enum: "pending", "sent", "failed",
     * "suppressed". object.suppression_reason (Optional): string. Present only when status is
     * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
     * "sandbox_daily_limit_reached". object.to_email (Required): string or null. Address the
     * invoice was sent to. `null` when the customer was deleted. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. cc_emails
         * (Optional): Array of string. Addresses copied on this email. Absent when none were
         * copied. cc_emails[] (Value): string. channel (Required): string. How Flint delivered the
         * invoice. Value enum: "email". created_at (Required): string. When the attempt was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_type (Required):
         * string. Whether this attempt is the invoice email sent at issue or a reminder. Value
         * enum: "send", "reminder". failure_reason (Optional): string. Present only when status is
         * failed. Legacy failed attempts without a stored reason return rejected. Value enum:
         * "rejected", "delivery_unknown", "canceled". invoice_delivery_attempt_id (Required):
         * string. Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ".
         * invoice_id (Required): string. ID of the invoice this delivery attempt belongs to.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". sent_at (Optional): string. When the email
         * service accepted the message. Absent until it does. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. The outcome of this attempt. sent
         * means the email service accepted the message. Value enum: "pending", "sent", "failed",
         * "suppressed". suppression_reason (Optional): string. Present only when status is
         * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
         * "sandbox_daily_limit_reached". to_email (Required): string or null. Address the invoice
         * was sent to. `null` when the customer was deleted.
         */
        "object": ({
            /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
            "cc_emails"?: Array<string>;
            /** How Flint delivered the invoice. Value enum: "email". */
            "channel": "email" | (string & {});
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Whether this attempt is the invoice email sent at issue or a reminder. Value enum:
             * "send", "reminder".
             */
            "delivery_type": "send" | "reminder" | (string & {});
            /**
             * Present only when status is failed. Legacy failed attempts without a stored reason
             * return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
             */
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            /** Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". */
            "invoice_delivery_attempt_id": string;
            /**
             * ID of the invoice this delivery attempt belongs to. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the email service accepted the message. Absent until it does. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sent_at"?: string;
            /**
             * The outcome of this attempt. sent means the email service accepted the message.
             * Value enum: "pending", "sent", "failed", "suppressed".
             */
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            /**
             * Present only when status is suppressed. Value enum: "merchant_managed_email",
             * "recipient_unsubscribed", "sandbox_daily_limit_reached".
             */
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            /** Address the invoice was sent to. `null` when the customer was deleted. */
            "to_email": string | null;
        });
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_delivery_attempt.suppressed". */
    "event_type"?: "invoice_delivery_attempt.suppressed";
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
 * The `invoice_delivery_attempt.suppressed` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type InvoiceDeliveryAttemptSuppressedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.cc_emails (Optional): Array of string. Addresses copied on this
     * email. Absent when none were copied. object.cc_emails[] (Value): string. object.channel
     * (Required): string. How Flint delivered the invoice. Value enum: "email". object.created_at
     * (Required): string. When the attempt was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_type (Required): string. Whether this attempt is the
     * invoice email sent at issue or a reminder. Value enum: "send", "reminder".
     * object.failure_reason (Optional): string. Present only when status is failed. Legacy failed
     * attempts without a stored reason return rejected. Value enum: "rejected",
     * "delivery_unknown", "canceled". object.invoice_delivery_attempt_id (Required): string. Flint
     * invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". object.invoice_id
     * (Required): string. ID of the invoice this delivery attempt belongs to. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.sent_at (Optional): string. When the email service
     * accepted the message. Absent until it does. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The outcome of this attempt. sent
     * means the email service accepted the message. Value enum: "pending", "sent", "failed",
     * "suppressed". object.suppression_reason (Optional): string. Present only when status is
     * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
     * "sandbox_daily_limit_reached". object.to_email (Required): string or null. Address the
     * invoice was sent to. `null` when the customer was deleted. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. cc_emails
         * (Optional): Array of string. Addresses copied on this email. Absent when none were
         * copied. cc_emails[] (Value): string. channel (Required): string. How Flint delivered the
         * invoice. Value enum: "email". created_at (Required): string. When the attempt was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_type (Required):
         * string. Whether this attempt is the invoice email sent at issue or a reminder. Value
         * enum: "send", "reminder". failure_reason (Optional): string. Present only when status is
         * failed. Legacy failed attempts without a stored reason return rejected. Value enum:
         * "rejected", "delivery_unknown", "canceled". invoice_delivery_attempt_id (Required):
         * string. Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ".
         * invoice_id (Required): string. ID of the invoice this delivery attempt belongs to.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". sent_at (Optional): string. When the email
         * service accepted the message. Absent until it does. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. The outcome of this attempt. sent
         * means the email service accepted the message. Value enum: "pending", "sent", "failed",
         * "suppressed". suppression_reason (Optional): string. Present only when status is
         * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
         * "sandbox_daily_limit_reached". to_email (Required): string or null. Address the invoice
         * was sent to. `null` when the customer was deleted.
         */
        "object": ({
            /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
            "cc_emails"?: Array<string>;
            /** How Flint delivered the invoice. Value enum: "email". */
            "channel": "email" | (string & {});
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Whether this attempt is the invoice email sent at issue or a reminder. Value enum:
             * "send", "reminder".
             */
            "delivery_type": "send" | "reminder" | (string & {});
            /**
             * Present only when status is failed. Legacy failed attempts without a stored reason
             * return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
             */
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            /** Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". */
            "invoice_delivery_attempt_id": string;
            /**
             * ID of the invoice this delivery attempt belongs to. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the email service accepted the message. Absent until it does. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sent_at"?: string;
            /**
             * The outcome of this attempt. sent means the email service accepted the message.
             * Value enum: "pending", "sent", "failed", "suppressed".
             */
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            /**
             * Present only when status is suppressed. Value enum: "merchant_managed_email",
             * "recipient_unsubscribed", "sandbox_daily_limit_reached".
             */
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            /** Address the invoice was sent to. `null` when the customer was deleted. */
            "to_email": string | null;
        });
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_delivery_attempt.suppressed". */
    "event_type"?: "invoice_delivery_attempt.suppressed";
});
/**
 * A discount applied to an invoice, with its source, the discount amount, the amount actually
 * applied, and any promotion.
 */
export type InvoiceDiscount = {
    /**
     * Discount amount before limits apply, such as 20% of $100 resolving to $20. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Amount the discount took off. It is less than `amount_money` when a limit applies, such as a
     * discount that would take the order below zero. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "applied_money": MoneyValue;
    /** Name the buyer sees for the discount. */
    "customer_facing_name"?: string;
    /** Which part of the order the discount reduces. Value enum: "order", "line_item". */
    "discount_class"?: "order" | "line_item" | (string & {});
    /**
     * Promotion code used to create this discount. Present only when `source` is `promotion` and a
     * code was used.
     */
    "promotion_code"?: string;
    /**
     * ID of the promotion that supplied this discount. Absent for a manual discount. Example:
     * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: string;
    /**
     * Where the discount came from. Value enum: "manual", "promotion", "plan_change_credit",
     * "proration", "prepaid_delivery".
     */
    "source": "manual" | "promotion" | "plan_change_credit" | "proration" | "prepaid_delivery" | (string & {});
};
/**
 * One row of an invoice document, such as a subtotal, discount, tax, late fee, payment, or amount
 * due, with its amount.
 */
export type InvoiceDocumentRow = {
    /**
     * The row's signed amount. Informational rows do not contribute to the sum. Signed monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Number of the credit note a credit note row names. */
    "credit_note_number"?: string;
    /**
     * Whether the row is shown for information and left out of the sum, such as tax already
     * included in prices, tax not applied, or money refunded to the buyer. A closing `total` or
     * `amount_due` row is informational and states the sum. An opening or sole `total` row
     * contributes to the sum.
     */
    "is_informational": boolean;
    /**
     * What the row shows. Value enum: "subtotal", "discount", "charge", "tax", "tip", "total",
     * "late_fee", "late_fee_waived", "payments", "credit_note", "credits", "written_off",
     * "amount_due", "refunded".
     */
    "kind": "subtotal"
        | "discount"
        | "charge"
        | "tax"
        | "tip"
        | "total"
        | "late_fee"
        | "late_fee_waived"
        | "payments"
        | "credit_note"
        | "credits"
        | "written_off"
        | "amount_due"
        | "refunded"
        | (string & {});
    /** Discount, charge, or tax jurisdiction name. */
    "name"?: string;
    /**
     * When the late fee was assessed or waived, or the credit note issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Rate of a percent-based charge or a tax row, in percent units. multipleOf: 0.0001. */
    "percent"?: number;
    /** Promotion code of a discount row. */
    "promotion_code"?: string;
    /**
     * The kind of tax on a tax row. Value enum: "sales_tax", "use_tax", "retail_delivery_fee",
     * "vat", "gst", "hst", "pst", "qst".
     */
    "tax_type"?: "sales_tax"
        | "use_tax"
        | "retail_delivery_fee"
        | "vat"
        | "gst"
        | "hst"
        | "pst"
        | "qst"
        | (string & {});
    /**
     * Why a tax row's tax is what it is. Value enum: "standard_rated", "not_taxable",
     * "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete",
     * "reverse_charge".
     */
    "taxability_reason"?: "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | "reverse_charge"
        | (string & {});
    /**
     * Taxable amount of a tax row. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "taxable_money"?: MoneyValue;
};
export type InvoiceIssueFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.issue_failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.issue_failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.issue_failed";
});
/**
 * The `invoice.issue_failed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InvoiceIssueFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.issue_failed". */
    "event_type"?: "invoice.issue_failed";
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
 * The `invoice.issue_failed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceIssueFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.issue_failed". */
    "event_type"?: "invoice.issue_failed";
});
export type InvoiceIssuedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.issued";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.issued";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.issued";
});
/**
 * The `invoice.issued` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceIssuedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.issued". */
    "event_type"?: "invoice.issued";
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
 * The `invoice.issued` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceIssuedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.issued". */
    "event_type"?: "invoice.issued";
});
/** A charge assessed because an invoice payment is overdue. */
export type InvoiceLateFee = {
    /**
     * The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** When the fee was assessed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "assessed_at": string;
    /**
     * The unpaid balance the fee was calculated from, excluding late fees, captured at assessment.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "base_outstanding_money": MoneyValue;
    /** Invoice that owns this late fee. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /** Flint invoice late fee ID. Example: "inlf_01KEZF7C00NVR97MBH5AHR4W1X". */
    "invoice_late_fee_id": string;
    /**
     * The schedule entry this fee applies to. Absent on an invoice without a schedule, where the
     * fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even
     * after a waiver. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null`
     * when no policy was captured. anyOf[1] (Value): {@link InvoiceLateFeePolicy}. A late fee for
     * overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint
     * applies it automatically. anyOf[2] (Value): null.
     */
    "late_fee_policy": ((InvoiceLateFeePolicy) | (null) | (unknown));
    /**
     * What is still owed on this fee: amount_money - paid_money - waived_money -
     * written_off_money, never below zero. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of
     * the caller's permissions; each action still requires its route's scope. Always [] when no
     * action is available. [] enum: "waive". [] (Value): string. Value enum: "waive".
     */
    "supported_actions": Array<"waive" | (string & {})>;
    /**
     * When the fee was waived. Absent unless it was waived. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "waived_at"?: string;
    /**
     * The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it
     * is less than amount_money when part of the fee was already paid. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "waived_money": MoneyValue;
    /** Why the fee was waived, as given when waiving it. */
    "waiver_reason_message"?: string;
    /**
     * The part of this fee written off when the invoice was marked uncollectible. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
export type InvoiceLateFeeAssessedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.late_fee_assessed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.late_fee_assessed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.late_fee_assessed";
});
/**
 * The `invoice.late_fee_assessed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoiceLateFeeAssessedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.late_fee_assessed". */
    "event_type"?: "invoice.late_fee_assessed";
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
 * The `invoice.late_fee_assessed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InvoiceLateFeeAssessedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.late_fee_assessed". */
    "event_type"?: "invoice.late_fee_assessed";
});
export type InvoiceLateFeeDueEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.late_fee_due";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.late_fee_due";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.late_fee_due";
});
/**
 * The `invoice.late_fee_due` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InvoiceLateFeeDueInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.late_fee_due". */
    "event_type"?: "invoice.late_fee_due";
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
 * The `invoice.late_fee_due` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceLateFeeDueMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.late_fee_due". */
    "event_type"?: "invoice.late_fee_due";
});
/**
 * A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
 * whether Flint applies it automatically.
 */
export type InvoiceLateFeePolicy = ({
    /**
     * Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Whether Flint applies the one-time fee automatically after the grace period. Omission
     * defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum:
     * "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a
     * late fee is eligible. Never eligible before the due date ends. An on_receipt term requires
     * at least 1 day. Format: int32. minimum: 0. maximum: 365.
     */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the one-time late fee is calculated. Value enum: "fixed", "percentage". */
    "type": "fixed" | "percentage" | (string & {});
})
    & ((Exclude<InvoiceLateFeePolicyFixed & object, readonly unknown[]>)
    | (Exclude<InvoiceLateFeePolicyPercentage & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `fixed` variant of `InvoiceLateFeePolicy`. */
export type InvoiceLateFeePolicyFixed = ({
    /**
     * Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Whether Flint applies the one-time fee automatically after the grace period. Omission
     * defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum:
     * "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a
     * late fee is eligible. Never eligible before the due date ends. An on_receipt term requires
     * at least 1 day. Format: int32. minimum: 0. maximum: 365.
     */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the one-time late fee is calculated. Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** How the one-time late fee is calculated. Value enum: "fixed". */
    "type": "fixed" | (string & {});
    /**
     * Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a
     * late fee is eligible. Never eligible before the due date ends. An on_receipt term requires
     * at least 1 day. Format: int32. minimum: 0. maximum: 365.
     */
    "grace_period_days": number;
    /**
     * Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
/** The `fixed` variant of `InvoiceLateFeePolicy`. */
export type InvoiceLateFeePolicyFixedRequestInput = ({
    /**
     * Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Whether Flint applies the one-time fee automatically after the grace period. Omission
     * defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum:
     * "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic";
    /**
     * Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a
     * late fee is eligible. Never eligible before the due date ends. An on_receipt term requires
     * at least 1 day. Format: int32. minimum: 0. maximum: 365.
     */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the one-time late fee is calculated. Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** How the one-time late fee is calculated. Value enum: "fixed". */
    "type": "fixed";
    /**
     * Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a
     * late fee is eligible. Never eligible before the due date ends. An on_receipt term requires
     * at least 1 day. Format: int32. minimum: 0. maximum: 365.
     */
    "grace_period_days": number;
    /**
     * Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
})
    & ({
    "percent"?: never;
}));
/** The `percentage` variant of `InvoiceLateFeePolicy`. */
export type InvoiceLateFeePolicyPercentage = ({
    /**
     * Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Whether Flint applies the one-time fee automatically after the grace period. Omission
     * defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum:
     * "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a
     * late fee is eligible. Never eligible before the due date ends. An on_receipt term requires
     * at least 1 day. Format: int32. minimum: 0. maximum: 365.
     */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent": number;
    /** How the one-time late fee is calculated. Value enum: "percentage". */
    "type": "percentage" | (string & {});
})
    & (({
    /** How the one-time late fee is calculated. Value enum: "percentage". */
    "type": "percentage" | (string & {});
    /**
     * Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a
     * late fee is eligible. Never eligible before the due date ends. An on_receipt term requires
     * at least 1 day. Format: int32. minimum: 0. maximum: 365.
     */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent": number;
}));
/** The `percentage` variant of `InvoiceLateFeePolicy`. */
export type InvoiceLateFeePolicyPercentageRequestInput = ({
    /**
     * Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Whether Flint applies the one-time fee automatically after the grace period. Omission
     * defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum:
     * "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic";
    /**
     * Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a
     * late fee is eligible. Never eligible before the due date ends. An on_receipt term requires
     * at least 1 day. Format: int32. minimum: 0. maximum: 365.
     */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent": number;
    /** How the one-time late fee is calculated. Value enum: "percentage". */
    "type": "percentage";
})
    & (({
    /** How the one-time late fee is calculated. Value enum: "percentage". */
    "type": "percentage";
    /**
     * Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a
     * late fee is eligible. Never eligible before the due date ends. An on_receipt term requires
     * at least 1 day. Format: int32. minimum: 0. maximum: 365.
     */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent": number;
})
    & ({
    "amount_money"?: never;
}));
/**
 * A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
 * whether Flint applies it automatically.
 */
export type InvoiceLateFeePolicyRequestInput = ({
    /**
     * Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Whether Flint applies the one-time fee automatically after the grace period. Omission
     * defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum:
     * "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic";
    /**
     * Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a
     * late fee is eligible. Never eligible before the due date ends. An on_receipt term requires
     * at least 1 day. Format: int32. minimum: 0. maximum: 365.
     */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** How the one-time late fee is calculated. Value enum: "fixed", "percentage". */
    "type": "fixed" | "percentage";
})
    & ((Exclude<InvoiceLateFeePolicyFixedRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoiceLateFeePolicyPercentageRequestInput & object, readonly unknown[]>));
export type InvoiceLateFeeWaivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.late_fee_waived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.late_fee_waived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.late_fee_waived";
});
/**
 * The `invoice.late_fee_waived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InvoiceLateFeeWaivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.late_fee_waived". */
    "event_type"?: "invoice.late_fee_waived";
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
 * The `invoice.late_fee_waived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceLateFeeWaivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.late_fee_waived". */
    "event_type"?: "invoice.late_fee_waived";
});
/** A page of `InvoiceLateFee` objects. */
export type InvoiceLateFeesListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InvoiceLateFee}. A charge assessed because an invoice payment is overdue.
     */
    "data": Array<InvoiceLateFee>;
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
/** A line item on an invoice. */
export type InvoiceLineItem = ({
    /**
     * unit_price_money × quantity. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "base_subtotal_money": MoneyValue;
    /**
     * The items inside a bundle line, as billed. [] (Value): {@link BundleComponent}. An item
     * included in a bundle.
     */
    "bundle_components"?: Array<BundleComponent>;
    /**
     * The catalog bundle the line was sold from. Absent unless type is bundle. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * The catalog categories of the line's item when it was billed. [] (Value): {@link
     * CategoryReference}. A reference to a product category by ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /** Line item description as billed. */
    "description"?: string;
    /**
     * This line's share of order and line-item discounts. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** Line item image. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Flint invoice line item ID, stable across draft edits and issue while the backing order line
     * keeps its ID. Credit notes credit lines by this ID. Example:
     * "invli_01KEZF7C00H767MAT1DY7ZWSVW".
     */
    "invoice_line_item_id": string;
    /**
     * Total of the line's modifiers. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     * The line's modifiers, as billed. [] (Value): {@link OrderLineItemModifier}. A modifier
     * selected on an order line item.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    /** Line item name as billed. */
    "name": string;
    /**
     * Order that owns the backing order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by
     * this ID. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id"?: string;
    /**
     * Parent product of the line's variant. Required whenever variant_id is present. Absent on
     * bundle and custom lines, which have no parent product. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Product classification frozen on this line. Null when the line is unclassified. Custom lines
     * accept physical, digital, service, or fee; catalog lines use the product's type when added.
     * Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen
     * classification; void and reissue to change it. Value enum: "physical", "service", "fee",
     * "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The product options chosen for the line, as billed. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** Stock keeping unit as billed. */
    "sku"?: string;
    /**
     * base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a
     * tax-inclusive price, the tax is already inside subtotal_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise
     * subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is
     * total_money - tax_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "total_money": MoneyValue;
    /**
     * Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Price of one unit, before modifiers and discounts. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * The catalog variant the line was sold from. Absent unless type is variant. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
});
/** A page of `Invoice` objects. */
export type InvoiceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Invoice}. A bill issued to a customer.
     */
    "data": Array<Invoice>;
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
/**
 * A recorded offline payment against an invoice. Its amount contributes to invoice paid_money
 * while recorded. Reversing it restores outstanding_money, or written_off_money if the invoice was
 * written off. A payment can cover principal and late fees. Manual payments are separate from
 * online payment attempts.
 */
export type InvoiceManualPayment = {
    /**
     * Full amount received, including any principal and late fees covered. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** The invoice this payment was recorded against. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /**
     * Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this
     * value as source.order_manual_payment_id. Example: "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "invoice_manual_payment_id": string;
    /** Note about the offline payment, up to 4096 characters. minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength:
     * 255.
     */
    "payment_reference"?: string;
    /** When the payment was received. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "received_at": string;
    /**
     * Note supplied when reversing the payment. Present only when reversed and a note was
     * supplied. minLength: 1. maxLength: 4096.
     */
    "reversal_note"?: string;
    /**
     * When the payment was reversed. Present only when reversed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "reversed_at"?: string;
    /**
     * Whether the payment is recorded or has been reversed in full. Value enum: "recorded",
     * "reversed".
     */
    "status": "recorded" | "reversed" | (string & {});
    /**
     * Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of
     * the caller's permissions; each action still requires its route's scope. Always [] when no
     * action is available. [] enum: "reverse". [] (Value): string. Value enum: "reverse".
     */
    "supported_actions": Array<"reverse" | (string & {})>;
};
export type InvoiceManualPaymentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "invoice_id": string;
            "invoice_manual_payment_id": string;
            "note"?: string;
            "payment_reference"?: string;
            "received_at": string;
            "reversal_note"?: string;
            "reversed_at"?: string;
            "status": "recorded" | "reversed" | (string & {});
            "supported_actions": Array<"reverse" | (string & {})>;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_manual_payment.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "invoice_id": string;
            "invoice_manual_payment_id": string;
            "note"?: string;
            "payment_reference"?: string;
            "received_at": string;
            "reversal_note"?: string;
            "reversed_at"?: string;
            "status": "recorded" | "reversed" | (string & {});
            "supported_actions": Array<"reverse" | (string & {})>;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_manual_payment.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_manual_payment.created";
});
/**
 * The `invoice_manual_payment.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoiceManualPaymentCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Full amount received,
     * including any principal and late fees covered. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.invoice_id (Required): string. The invoice this
     * payment was recorded against. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.invoice_manual_payment_id (Required): string. Stable payment ID. IDs begin with omp_.
     * Gift card loads funded by this payment expose this value as source.order_manual_payment_id.
     * Example: "omp_01KEZF7C007J18203RBJKB9TYE". object.note (Optional): string. Note about the
     * offline payment, up to 4096 characters. minLength: 1. maxLength: 4096.
     * object.payment_reference (Optional): string. Caller-owned check, wire, or bank reference,
     * stored unmodified. minLength: 1. maxLength: 255. object.received_at (Required): string. When
     * the payment was received. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.reversal_note (Optional): string. Note supplied when reversing the payment. Present
     * only when reversed and a note was supplied. minLength: 1. maxLength: 4096.
     * object.reversed_at (Optional): string. When the payment was reversed. Present only when
     * reversed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Whether the payment is recorded or has been reversed in full. Value enum:
     * "recorded", "reversed". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "reverse". object.supported_actions[] (Value): string. Value enum:
     * "reverse".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Full amount received, including any
         * principal and late fees covered. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. invoice_id (Required): string. The invoice this payment was
         * recorded against. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_manual_payment_id
         * (Required): string. Stable payment ID. IDs begin with omp_. Gift card loads funded by
         * this payment expose this value as source.order_manual_payment_id. Example:
         * "omp_01KEZF7C007J18203RBJKB9TYE". note (Optional): string. Note about the offline
         * payment, up to 4096 characters. minLength: 1. maxLength: 4096. payment_reference
         * (Optional): string. Caller-owned check, wire, or bank reference, stored unmodified.
         * minLength: 1. maxLength: 255. received_at (Required): string. When the payment was
         * received. Format: date-time. Example: "2026-08-02T16:00:00Z". reversal_note (Optional):
         * string. Note supplied when reversing the payment. Present only when reversed and a note
         * was supplied. minLength: 1. maxLength: 4096. reversed_at (Optional): string. When the
         * payment was reversed. Present only when reversed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Whether the payment is recorded or
         * has been reversed in full. Value enum: "recorded", "reversed". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts for this resource now,
         * based on stored state. Independent of the caller's permissions; each action still
         * requires its route's scope. Always [] when no action is available. [] enum: "reverse".
         * supported_actions[] (Value): string. Value enum: "reverse".
         */
        "object": {
            /**
             * Full amount received, including any principal and late fees covered. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * The invoice this payment was recorded against. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment
             * expose this value as source.order_manual_payment_id. Example:
             * "omp_01KEZF7C007J18203RBJKB9TYE".
             */
            "invoice_manual_payment_id": string;
            /**
             * Note about the offline payment, up to 4096 characters. minLength: 1. maxLength:
             * 4096.
             */
            "note"?: string;
            /**
             * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1.
             * maxLength: 255.
             */
            "payment_reference"?: string;
            /**
             * When the payment was received. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "received_at": string;
            /**
             * Note supplied when reversing the payment. Present only when reversed and a note was
             * supplied. minLength: 1. maxLength: 4096.
             */
            "reversal_note"?: string;
            /**
             * When the payment was reversed. Present only when reversed. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "reversed_at"?: string;
            /**
             * Whether the payment is recorded or has been reversed in full. Value enum:
             * "recorded", "reversed".
             */
            "status": "recorded" | "reversed" | (string & {});
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "reverse". [] (Value):
             * string. Value enum: "reverse".
             */
            "supported_actions": Array<"reverse" | (string & {})>;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_manual_payment.created". */
    "event_type"?: "invoice_manual_payment.created";
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
 * The `invoice_manual_payment.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceManualPaymentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Full amount received,
     * including any principal and late fees covered. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.invoice_id (Required): string. The invoice this
     * payment was recorded against. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.invoice_manual_payment_id (Required): string. Stable payment ID. IDs begin with omp_.
     * Gift card loads funded by this payment expose this value as source.order_manual_payment_id.
     * Example: "omp_01KEZF7C007J18203RBJKB9TYE". object.note (Optional): string. Note about the
     * offline payment, up to 4096 characters. minLength: 1. maxLength: 4096.
     * object.payment_reference (Optional): string. Caller-owned check, wire, or bank reference,
     * stored unmodified. minLength: 1. maxLength: 255. object.received_at (Required): string. When
     * the payment was received. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.reversal_note (Optional): string. Note supplied when reversing the payment. Present
     * only when reversed and a note was supplied. minLength: 1. maxLength: 4096.
     * object.reversed_at (Optional): string. When the payment was reversed. Present only when
     * reversed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Whether the payment is recorded or has been reversed in full. Value enum:
     * "recorded", "reversed". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "reverse". object.supported_actions[] (Value): string. Value enum:
     * "reverse".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Full amount received, including any
         * principal and late fees covered. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. invoice_id (Required): string. The invoice this payment was
         * recorded against. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_manual_payment_id
         * (Required): string. Stable payment ID. IDs begin with omp_. Gift card loads funded by
         * this payment expose this value as source.order_manual_payment_id. Example:
         * "omp_01KEZF7C007J18203RBJKB9TYE". note (Optional): string. Note about the offline
         * payment, up to 4096 characters. minLength: 1. maxLength: 4096. payment_reference
         * (Optional): string. Caller-owned check, wire, or bank reference, stored unmodified.
         * minLength: 1. maxLength: 255. received_at (Required): string. When the payment was
         * received. Format: date-time. Example: "2026-08-02T16:00:00Z". reversal_note (Optional):
         * string. Note supplied when reversing the payment. Present only when reversed and a note
         * was supplied. minLength: 1. maxLength: 4096. reversed_at (Optional): string. When the
         * payment was reversed. Present only when reversed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Whether the payment is recorded or
         * has been reversed in full. Value enum: "recorded", "reversed". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts for this resource now,
         * based on stored state. Independent of the caller's permissions; each action still
         * requires its route's scope. Always [] when no action is available. [] enum: "reverse".
         * supported_actions[] (Value): string. Value enum: "reverse".
         */
        "object": {
            /**
             * Full amount received, including any principal and late fees covered. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * The invoice this payment was recorded against. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment
             * expose this value as source.order_manual_payment_id. Example:
             * "omp_01KEZF7C007J18203RBJKB9TYE".
             */
            "invoice_manual_payment_id": string;
            /**
             * Note about the offline payment, up to 4096 characters. minLength: 1. maxLength:
             * 4096.
             */
            "note"?: string;
            /**
             * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1.
             * maxLength: 255.
             */
            "payment_reference"?: string;
            /**
             * When the payment was received. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "received_at": string;
            /**
             * Note supplied when reversing the payment. Present only when reversed and a note was
             * supplied. minLength: 1. maxLength: 4096.
             */
            "reversal_note"?: string;
            /**
             * When the payment was reversed. Present only when reversed. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "reversed_at"?: string;
            /**
             * Whether the payment is recorded or has been reversed in full. Value enum:
             * "recorded", "reversed".
             */
            "status": "recorded" | "reversed" | (string & {});
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "reverse". [] (Value):
             * string. Value enum: "reverse".
             */
            "supported_actions": Array<"reverse" | (string & {})>;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_manual_payment.created". */
    "event_type"?: "invoice_manual_payment.created";
});
/** A page of `InvoiceManualPayment` objects. */
export type InvoiceManualPaymentListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InvoiceManualPayment}. A recorded offline payment against an invoice. Its amount contributes
     * to invoice paid_money while recorded. Reversing it restores outstanding_money, or
     * written_off_money if the invoice was written off. A payment can cover principal and late
     * fees. Manual payments are separate from online payment attempts.
     */
    "data": Array<InvoiceManualPayment>;
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
/** A response containing `InvoiceManualPayment` data. */
export type InvoiceManualPaymentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A recorded offline
     * payment against an invoice. Its amount contributes to invoice paid_money while recorded.
     * Reversing it restores outstanding_money, or written_off_money if the invoice was written
     * off. A payment can cover principal and late fees. Manual payments are separate from online
     * payment attempts.
     */
    "data": InvoiceManualPayment;
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
 * The recorded or reversed payment and the updated invoice. expected_invoice_version on create and
 * expected_version on reversal fence the invoice; use the returned invoice version for the next
 * write.
 */
export type InvoiceManualPaymentResult = {
    /**
     * The invoice with balances and supported_actions after this request. A bill issued to a
     * customer.
     */
    "invoice": Invoice;
    /**
     * The offline payment recorded or reversed by this request. A recorded offline payment against
     * an invoice. Its amount contributes to invoice paid_money while recorded. Reversing it
     * restores outstanding_money, or written_off_money if the invoice was written off. A payment
     * can cover principal and late fees. Manual payments are separate from online payment
     * attempts.
     */
    "invoice_manual_payment": InvoiceManualPayment;
};
/** A response containing `InvoiceManualPaymentResult` data. */
export type InvoiceManualPaymentResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The recorded or reversed
     * payment and the updated invoice. expected_invoice_version on create and expected_version on
     * reversal fence the invoice; use the returned invoice version for the next write.
     */
    "data": InvoiceManualPaymentResult;
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
export type InvoiceManualPaymentReversedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "invoice_id": string;
            "invoice_manual_payment_id": string;
            "note"?: string;
            "payment_reference"?: string;
            "received_at": string;
            "reversal_note"?: string;
            "reversed_at"?: string;
            "status": "recorded" | "reversed" | (string & {});
            "supported_actions": Array<"reverse" | (string & {})>;
        };
        "previous_attributes"?: Partial<InvoiceManualPayment>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_manual_payment.reversed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "invoice_id": string;
            "invoice_manual_payment_id": string;
            "note"?: string;
            "payment_reference"?: string;
            "received_at": string;
            "reversal_note"?: string;
            "reversed_at"?: string;
            "status": "recorded" | "reversed" | (string & {});
            "supported_actions": Array<"reverse" | (string & {})>;
        };
        "previous_attributes"?: Partial<InvoiceManualPayment>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_manual_payment.reversed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_manual_payment.reversed";
});
/**
 * The `invoice_manual_payment.reversed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoiceManualPaymentReversedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Full amount received,
     * including any principal and late fees covered. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.invoice_id (Required): string. The invoice this
     * payment was recorded against. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.invoice_manual_payment_id (Required): string. Stable payment ID. IDs begin with omp_.
     * Gift card loads funded by this payment expose this value as source.order_manual_payment_id.
     * Example: "omp_01KEZF7C007J18203RBJKB9TYE". object.note (Optional): string. Note about the
     * offline payment, up to 4096 characters. minLength: 1. maxLength: 4096.
     * object.payment_reference (Optional): string. Caller-owned check, wire, or bank reference,
     * stored unmodified. minLength: 1. maxLength: 255. object.received_at (Required): string. When
     * the payment was received. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.reversal_note (Optional): string. Note supplied when reversing the payment. Present
     * only when reversed and a note was supplied. minLength: 1. maxLength: 4096.
     * object.reversed_at (Optional): string. When the payment was reversed. Present only when
     * reversed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Whether the payment is recorded or has been reversed in full. Value enum:
     * "recorded", "reversed". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "reverse". object.supported_actions[] (Value): string. Value enum:
     * "reverse". previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Full amount received, including any
         * principal and late fees covered. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. invoice_id (Required): string. The invoice this payment was
         * recorded against. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_manual_payment_id
         * (Required): string. Stable payment ID. IDs begin with omp_. Gift card loads funded by
         * this payment expose this value as source.order_manual_payment_id. Example:
         * "omp_01KEZF7C007J18203RBJKB9TYE". note (Optional): string. Note about the offline
         * payment, up to 4096 characters. minLength: 1. maxLength: 4096. payment_reference
         * (Optional): string. Caller-owned check, wire, or bank reference, stored unmodified.
         * minLength: 1. maxLength: 255. received_at (Required): string. When the payment was
         * received. Format: date-time. Example: "2026-08-02T16:00:00Z". reversal_note (Optional):
         * string. Note supplied when reversing the payment. Present only when reversed and a note
         * was supplied. minLength: 1. maxLength: 4096. reversed_at (Optional): string. When the
         * payment was reversed. Present only when reversed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Whether the payment is recorded or
         * has been reversed in full. Value enum: "recorded", "reversed". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts for this resource now,
         * based on stored state. Independent of the caller's permissions; each action still
         * requires its route's scope. Always [] when no action is available. [] enum: "reverse".
         * supported_actions[] (Value): string. Value enum: "reverse".
         */
        "object": {
            /**
             * Full amount received, including any principal and late fees covered. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * The invoice this payment was recorded against. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment
             * expose this value as source.order_manual_payment_id. Example:
             * "omp_01KEZF7C007J18203RBJKB9TYE".
             */
            "invoice_manual_payment_id": string;
            /**
             * Note about the offline payment, up to 4096 characters. minLength: 1. maxLength:
             * 4096.
             */
            "note"?: string;
            /**
             * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1.
             * maxLength: 255.
             */
            "payment_reference"?: string;
            /**
             * When the payment was received. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "received_at": string;
            /**
             * Note supplied when reversing the payment. Present only when reversed and a note was
             * supplied. minLength: 1. maxLength: 4096.
             */
            "reversal_note"?: string;
            /**
             * When the payment was reversed. Present only when reversed. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "reversed_at"?: string;
            /**
             * Whether the payment is recorded or has been reversed in full. Value enum:
             * "recorded", "reversed".
             */
            "status": "recorded" | "reversed" | (string & {});
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "reverse". [] (Value):
             * string. Value enum: "reverse".
             */
            "supported_actions": Array<"reverse" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoiceManualPayment>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_manual_payment.reversed". */
    "event_type"?: "invoice_manual_payment.reversed";
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
 * The `invoice_manual_payment.reversed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceManualPaymentReversedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Full amount received,
     * including any principal and late fees covered. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.invoice_id (Required): string. The invoice this
     * payment was recorded against. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.invoice_manual_payment_id (Required): string. Stable payment ID. IDs begin with omp_.
     * Gift card loads funded by this payment expose this value as source.order_manual_payment_id.
     * Example: "omp_01KEZF7C007J18203RBJKB9TYE". object.note (Optional): string. Note about the
     * offline payment, up to 4096 characters. minLength: 1. maxLength: 4096.
     * object.payment_reference (Optional): string. Caller-owned check, wire, or bank reference,
     * stored unmodified. minLength: 1. maxLength: 255. object.received_at (Required): string. When
     * the payment was received. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.reversal_note (Optional): string. Note supplied when reversing the payment. Present
     * only when reversed and a note was supplied. minLength: 1. maxLength: 4096.
     * object.reversed_at (Optional): string. When the payment was reversed. Present only when
     * reversed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Whether the payment is recorded or has been reversed in full. Value enum:
     * "recorded", "reversed". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts for this resource now, based on stored state. Independent of the
     * caller's permissions; each action still requires its route's scope. Always [] when no action
     * is available. [] enum: "reverse". object.supported_actions[] (Value): string. Value enum:
     * "reverse". previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Full amount received, including any
         * principal and late fees covered. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. invoice_id (Required): string. The invoice this payment was
         * recorded against. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_manual_payment_id
         * (Required): string. Stable payment ID. IDs begin with omp_. Gift card loads funded by
         * this payment expose this value as source.order_manual_payment_id. Example:
         * "omp_01KEZF7C007J18203RBJKB9TYE". note (Optional): string. Note about the offline
         * payment, up to 4096 characters. minLength: 1. maxLength: 4096. payment_reference
         * (Optional): string. Caller-owned check, wire, or bank reference, stored unmodified.
         * minLength: 1. maxLength: 255. received_at (Required): string. When the payment was
         * received. Format: date-time. Example: "2026-08-02T16:00:00Z". reversal_note (Optional):
         * string. Note supplied when reversing the payment. Present only when reversed and a note
         * was supplied. minLength: 1. maxLength: 4096. reversed_at (Optional): string. When the
         * payment was reversed. Present only when reversed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Whether the payment is recorded or
         * has been reversed in full. Value enum: "recorded", "reversed". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts for this resource now,
         * based on stored state. Independent of the caller's permissions; each action still
         * requires its route's scope. Always [] when no action is available. [] enum: "reverse".
         * supported_actions[] (Value): string. Value enum: "reverse".
         */
        "object": {
            /**
             * Full amount received, including any principal and late fees covered. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * The invoice this payment was recorded against. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment
             * expose this value as source.order_manual_payment_id. Example:
             * "omp_01KEZF7C007J18203RBJKB9TYE".
             */
            "invoice_manual_payment_id": string;
            /**
             * Note about the offline payment, up to 4096 characters. minLength: 1. maxLength:
             * 4096.
             */
            "note"?: string;
            /**
             * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1.
             * maxLength: 255.
             */
            "payment_reference"?: string;
            /**
             * When the payment was received. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "received_at": string;
            /**
             * Note supplied when reversing the payment. Present only when reversed and a note was
             * supplied. minLength: 1. maxLength: 4096.
             */
            "reversal_note"?: string;
            /**
             * When the payment was reversed. Present only when reversed. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "reversed_at"?: string;
            /**
             * Whether the payment is recorded or has been reversed in full. Value enum:
             * "recorded", "reversed".
             */
            "status": "recorded" | "reversed" | (string & {});
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "reverse". [] (Value):
             * string. Value enum: "reverse".
             */
            "supported_actions": Array<"reverse" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoiceManualPayment>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_manual_payment.reversed". */
    "event_type"?: "invoice_manual_payment.reversed";
});
export type InvoiceMarkedUncollectibleEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.marked_uncollectible";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.marked_uncollectible";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.marked_uncollectible";
});
/**
 * The `invoice.marked_uncollectible` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoiceMarkedUncollectibleInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.marked_uncollectible". */
    "event_type"?: "invoice.marked_uncollectible";
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
 * The `invoice.marked_uncollectible` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceMarkedUncollectibleMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.marked_uncollectible". */
    "event_type"?: "invoice.marked_uncollectible";
});
export type InvoiceOverdueEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.overdue";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.overdue";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.overdue";
});
/**
 * The `invoice.overdue` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceOverdueInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.overdue". */
    "event_type"?: "invoice.overdue";
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
 * The `invoice.overdue` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceOverdueMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.overdue". */
    "event_type"?: "invoice.overdue";
});
export type InvoicePaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.paid";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.paid";
});
/**
 * The `invoice.paid` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type InvoicePaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.paid". */
    "event_type"?: "invoice.paid";
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
 * The `invoice.paid` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoicePaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.paid". */
    "event_type"?: "invoice.paid";
});
export type InvoicePartiallyPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.partially_paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.partially_paid";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.partially_paid";
});
/**
 * The `invoice.partially_paid` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InvoicePartiallyPaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.partially_paid". */
    "event_type"?: "invoice.partially_paid";
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
 * The `invoice.partially_paid` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoicePartiallyPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.partially_paid". */
    "event_type"?: "invoice.partially_paid";
});
export type InvoicePartiallyRefundedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.partially_refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: Partial<WebhookInvoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.partially_refunded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.partially_refunded";
});
/**
 * The `invoice.partially_refunded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoicePartiallyRefundedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.partially_refunded". */
    "event_type"?: "invoice.partially_refunded";
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
 * The `invoice.partially_refunded` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InvoicePartiallyRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice.partially_refunded". */
    "event_type"?: "invoice.partially_refunded";
});
