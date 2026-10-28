import type { Invoice, InvoiceDeliveryAttempt, InvoiceManualPayment, InvoicePaymentAttempt } from './types-28.js';
import type { PartnerWebhookEnvelope } from './types-37.js';
import type { MerchantWebhookEnvelope, MerchantBillingBalance, MerchantBillingInvoice, Merchant, ModifierGroup } from './types-32.js';
/**
 * Shape $ (Value): {@link Webhook_invoice_created_installed_merchants}. The `invoice.created`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_invoice_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.created". */
    "event_type"?: "invoice.created" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_created_merchant}. The `invoice.created` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.created". */
    "event_type"?: "invoice.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_credited_installed_merchants}. The `invoice.credited`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_invoice_credited_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.credited". */
    "event_type"?: "invoice.credited" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_credited_merchant}. The `invoice.credited` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_credited_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.credited". */
    "event_type"?: "invoice.credited" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_delivery_attempt_failed_installed_merchants}. The
 * `invoice_delivery_attempt.failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_delivery_attempt_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceDeliveryAttempt}. One
     * attempt to deliver an invoice by email, either the original send or a reminder, with its
     * recipients and status.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
         * email, either the original send or a reminder, with its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_delivery_attempt.failed". */
    "event_type"?: "invoice_delivery_attempt.failed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_delivery_attempt_failed_merchant}. The
 * `invoice_delivery_attempt.failed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_delivery_attempt_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceDeliveryAttempt}. One
     * attempt to deliver an invoice by email, either the original send or a reminder, with its
     * recipients and status.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
         * email, either the original send or a reminder, with its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_delivery_attempt.failed". */
    "event_type"?: "invoice_delivery_attempt.failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_delivery_attempt_sent_installed_merchants}. The
 * `invoice_delivery_attempt.sent` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_delivery_attempt_sent_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceDeliveryAttempt}. One
     * attempt to deliver an invoice by email, either the original send or a reminder, with its
     * recipients and status.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
         * email, either the original send or a reminder, with its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_delivery_attempt.sent". */
    "event_type"?: "invoice_delivery_attempt.sent" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_delivery_attempt_sent_merchant}. The
 * `invoice_delivery_attempt.sent` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_delivery_attempt_sent_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceDeliveryAttempt}. One
     * attempt to deliver an invoice by email, either the original send or a reminder, with its
     * recipients and status.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
         * email, either the original send or a reminder, with its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_delivery_attempt.sent". */
    "event_type"?: "invoice_delivery_attempt.sent" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_delivery_attempt_suppressed_installed_merchants}. The
 * `invoice_delivery_attempt.suppressed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_delivery_attempt_suppressed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceDeliveryAttempt}. One
     * attempt to deliver an invoice by email, either the original send or a reminder, with its
     * recipients and status.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
         * email, either the original send or a reminder, with its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_delivery_attempt.suppressed". */
    "event_type"?: "invoice_delivery_attempt.suppressed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_delivery_attempt_suppressed_merchant}. The
 * `invoice_delivery_attempt.suppressed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_invoice_delivery_attempt_suppressed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceDeliveryAttempt}. One
     * attempt to deliver an invoice by email, either the original send or a reminder, with its
     * recipients and status.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
         * email, either the original send or a reminder, with its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_delivery_attempt.suppressed". */
    "event_type"?: "invoice_delivery_attempt.suppressed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_issue_failed_installed_merchants}. The
 * `invoice.issue_failed` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_invoice_issue_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.issue_failed". */
    "event_type"?: "invoice.issue_failed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_issue_failed_merchant}. The `invoice.issue_failed`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_issue_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.issue_failed". */
    "event_type"?: "invoice.issue_failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_issued_installed_merchants}. The `invoice.issued`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_invoice_issued_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.issued". */
    "event_type"?: "invoice.issued" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_issued_merchant}. The `invoice.issued` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_issued_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.issued". */
    "event_type"?: "invoice.issued" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_late_fee_assessed_installed_merchants}. The
 * `invoice.late_fee_assessed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_invoice_late_fee_assessed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.late_fee_assessed". */
    "event_type"?: "invoice.late_fee_assessed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_late_fee_assessed_merchant}. The
 * `invoice.late_fee_assessed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_invoice_late_fee_assessed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.late_fee_assessed". */
    "event_type"?: "invoice.late_fee_assessed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_late_fee_due_installed_merchants}. The
 * `invoice.late_fee_due` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_invoice_late_fee_due_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.late_fee_due". */
    "event_type"?: "invoice.late_fee_due" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_late_fee_due_merchant}. The `invoice.late_fee_due`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_late_fee_due_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.late_fee_due". */
    "event_type"?: "invoice.late_fee_due" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_late_fee_waived_installed_merchants}. The
 * `invoice.late_fee_waived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_invoice_late_fee_waived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.late_fee_waived". */
    "event_type"?: "invoice.late_fee_waived" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_late_fee_waived_merchant}. The `invoice.late_fee_waived`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_late_fee_waived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.late_fee_waived". */
    "event_type"?: "invoice.late_fee_waived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_manual_payment_created_installed_merchants}. The
 * `invoice_manual_payment.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_manual_payment_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceManualPayment}. A recorded
     * offline payment against an invoice. Its amount contributes to invoice paid_money while
     * recorded; reversing it returns its full amount to outstanding_money. A payment can cover
     * principal and late fees. Manual payments are separate from online payment attempts.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an
         * invoice. Its amount contributes to invoice paid_money while recorded; reversing it
         * returns its full amount to outstanding_money. A payment can cover principal and late
         * fees. Manual payments are separate from online payment attempts.
         */
        "object": InvoiceManualPayment;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_manual_payment.created". */
    "event_type"?: "invoice_manual_payment.created" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_manual_payment_created_merchant}. The
 * `invoice_manual_payment.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_manual_payment_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceManualPayment}. A recorded
     * offline payment against an invoice. Its amount contributes to invoice paid_money while
     * recorded; reversing it returns its full amount to outstanding_money. A payment can cover
     * principal and late fees. Manual payments are separate from online payment attempts.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an
         * invoice. Its amount contributes to invoice paid_money while recorded; reversing it
         * returns its full amount to outstanding_money. A payment can cover principal and late
         * fees. Manual payments are separate from online payment attempts.
         */
        "object": InvoiceManualPayment;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_manual_payment.created". */
    "event_type"?: "invoice_manual_payment.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_manual_payment_reversed_installed_merchants}. The
 * `invoice_manual_payment.reversed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_manual_payment_reversed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceManualPayment}. A recorded
     * offline payment against an invoice. Its amount contributes to invoice paid_money while
     * recorded; reversing it returns its full amount to outstanding_money. A payment can cover
     * principal and late fees. Manual payments are separate from online payment attempts.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an
         * invoice. Its amount contributes to invoice paid_money while recorded; reversing it
         * returns its full amount to outstanding_money. A payment can cover principal and late
         * fees. Manual payments are separate from online payment attempts.
         */
        "object": InvoiceManualPayment;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_manual_payment.reversed". */
    "event_type"?: "invoice_manual_payment.reversed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_manual_payment_reversed_merchant}. The
 * `invoice_manual_payment.reversed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_manual_payment_reversed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceManualPayment}. A recorded
     * offline payment against an invoice. Its amount contributes to invoice paid_money while
     * recorded; reversing it returns its full amount to outstanding_money. A payment can cover
     * principal and late fees. Manual payments are separate from online payment attempts.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an
         * invoice. Its amount contributes to invoice paid_money while recorded; reversing it
         * returns its full amount to outstanding_money. A payment can cover principal and late
         * fees. Manual payments are separate from online payment attempts.
         */
        "object": InvoiceManualPayment;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_manual_payment.reversed". */
    "event_type"?: "invoice_manual_payment.reversed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_marked_uncollectible_installed_merchants}. The
 * `invoice.marked_uncollectible` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_marked_uncollectible_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.marked_uncollectible". */
    "event_type"?: "invoice.marked_uncollectible" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_marked_uncollectible_merchant}. The
 * `invoice.marked_uncollectible` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_invoice_marked_uncollectible_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.marked_uncollectible". */
    "event_type"?: "invoice.marked_uncollectible" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_overdue_installed_merchants}. The `invoice.overdue`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_invoice_overdue_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.overdue". */
    "event_type"?: "invoice.overdue" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_overdue_merchant}. The `invoice.overdue` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_overdue_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.overdue". */
    "event_type"?: "invoice.overdue" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_paid_installed_merchants}. The `invoice.paid` webhook
 * payload for the `installed_merchants` event source. Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_paid_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.paid". */
    "event_type"?: "invoice.paid" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_paid_merchant}. The `invoice.paid` webhook payload for
 * the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_paid_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.paid". */
    "event_type"?: "invoice.paid" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_partially_paid_installed_merchants}. The
 * `invoice.partially_paid` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_invoice_partially_paid_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.partially_paid". */
    "event_type"?: "invoice.partially_paid" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_partially_paid_merchant}. The `invoice.partially_paid`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_partially_paid_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.partially_paid". */
    "event_type"?: "invoice.partially_paid" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_partially_refunded_installed_merchants}. The
 * `invoice.partially_refunded` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_invoice_partially_refunded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.partially_refunded". */
    "event_type"?: "invoice.partially_refunded" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_partially_refunded_merchant}. The
 * `invoice.partially_refunded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_invoice_partially_refunded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.partially_refunded". */
    "event_type"?: "invoice.partially_refunded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_canceled_installed_merchants}. The
 * `invoice_payment_attempt.canceled` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_payment_attempt_canceled_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.canceled". */
    "event_type"?: "invoice_payment_attempt.canceled" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_canceled_merchant}. The
 * `invoice_payment_attempt.canceled` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_invoice_payment_attempt_canceled_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.canceled". */
    "event_type"?: "invoice_payment_attempt.canceled" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_expired_installed_merchants}. The
 * `invoice_payment_attempt.expired` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_payment_attempt_expired_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.expired". */
    "event_type"?: "invoice_payment_attempt.expired" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_expired_merchant}. The
 * `invoice_payment_attempt.expired` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_payment_attempt_expired_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.expired". */
    "event_type"?: "invoice_payment_attempt.expired" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_failed_installed_merchants}. The
 * `invoice_payment_attempt.failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_payment_attempt_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.failed". */
    "event_type"?: "invoice_payment_attempt.failed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_failed_merchant}. The
 * `invoice_payment_attempt.failed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_payment_attempt_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.failed". */
    "event_type"?: "invoice_payment_attempt.failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_processing_installed_merchants}. The
 * `invoice_payment_attempt.processing` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_payment_attempt_processing_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.processing". */
    "event_type"?: "invoice_payment_attempt.processing" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_processing_merchant}. The
 * `invoice_payment_attempt.processing` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_invoice_payment_attempt_processing_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.processing". */
    "event_type"?: "invoice_payment_attempt.processing" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_settled_installed_merchants}. The
 * `invoice_payment_attempt.settled` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_payment_attempt_settled_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.settled". */
    "event_type"?: "invoice_payment_attempt.settled" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_settled_merchant}. The
 * `invoice_payment_attempt.settled` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_payment_attempt_settled_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.settled". */
    "event_type"?: "invoice_payment_attempt.settled" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_refunded_installed_merchants}. The `invoice.refunded`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_invoice_refunded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.refunded". */
    "event_type"?: "invoice.refunded" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_refunded_merchant}. The `invoice.refunded` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_refunded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.refunded". */
    "event_type"?: "invoice.refunded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_reminder_due_installed_merchants}. The
 * `invoice.reminder_due` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_invoice_reminder_due_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.reminder_due". */
    "event_type"?: "invoice.reminder_due" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_reminder_due_merchant}. The `invoice.reminder_due`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_reminder_due_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.reminder_due". */
    "event_type"?: "invoice.reminder_due" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_reopened_installed_merchants}. The `invoice.reopened`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_invoice_reopened_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.reopened". */
    "event_type"?: "invoice.reopened" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_reopened_merchant}. The `invoice.reopened` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_reopened_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.reopened". */
    "event_type"?: "invoice.reopened" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_sent_installed_merchants}. The `invoice.sent` webhook
 * payload for the `installed_merchants` event source. Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_sent_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.sent". */
    "event_type"?: "invoice.sent" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_sent_merchant}. The `invoice.sent` webhook payload for
 * the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_sent_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.sent". */
    "event_type"?: "invoice.sent" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_updated_installed_merchants}. The `invoice.updated`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_invoice_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.updated". */
    "event_type"?: "invoice.updated" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_updated_merchant}. The `invoice.updated` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.updated". */
    "event_type"?: "invoice.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_voided_installed_merchants}. The `invoice.voided`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_invoice_voided_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.voided". */
    "event_type"?: "invoice.voided" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_voided_merchant}. The `invoice.voided` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_voided_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.voided". */
    "event_type"?: "invoice.voided" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_merchant_billing_balance_updated_merchant}. The
 * `merchant_billing_balance.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_merchant_billing_balance_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link MerchantBillingBalance}. Current
     * Flint merchant billing balance for one billing account and currency.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link MerchantBillingBalance}. Current Flint merchant billing balance
         * for one billing account and currency.
         */
        "object": MerchantBillingBalance;
    };
    /** Shape $ (Value): string.  Value enum: "merchant_billing_balance.updated". */
    "event_type"?: "merchant_billing_balance.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_merchant_billing_invoice_issued_merchant}. The
 * `merchant_billing_invoice.issued` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_merchant_billing_invoice_issued_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link MerchantBillingInvoice}. A Flint
     * invoice for the merchant's Flint subscription.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link MerchantBillingInvoice}. A Flint invoice for the merchant's
         * Flint subscription.
         */
        "object": MerchantBillingInvoice;
    };
    /** Shape $ (Value): string.  Value enum: "merchant_billing_invoice.issued". */
    "event_type"?: "merchant_billing_invoice.issued" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_merchant_billing_invoice_updated_merchant}. The
 * `merchant_billing_invoice.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_merchant_billing_invoice_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link MerchantBillingInvoice}. A Flint
     * invoice for the merchant's Flint subscription.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link MerchantBillingInvoice}. A Flint invoice for the merchant's
         * Flint subscription.
         */
        "object": MerchantBillingInvoice;
    };
    /** Shape $ (Value): string.  Value enum: "merchant_billing_invoice.updated". */
    "event_type"?: "merchant_billing_invoice.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_merchant_readiness_updated_merchant}. The
 * `merchant.readiness_updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_merchant_readiness_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Merchant}. The business accepting
     * payments.
     */
    "data"?: {
        /** Shape $ (Value): {@link Merchant}. The business accepting payments. */
        "object": Merchant;
    };
    /** Shape $ (Value): string.  Value enum: "merchant.readiness_updated". */
    "event_type"?: "merchant.readiness_updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_merchant_updated_merchant}. The `merchant.updated` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_merchant_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Merchant}. The business accepting
     * payments.
     */
    "data"?: {
        /** Shape $ (Value): {@link Merchant}. The business accepting payments. */
        "object": Merchant;
    };
    /** Shape $ (Value): string.  Value enum: "merchant.updated". */
    "event_type"?: "merchant.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_modifier_group_archived_installed_merchants}. The
 * `modifier_group.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_modifier_group_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ModifierGroup}. A group of
     * choices that customize an item.
     */
    "data"?: {
        /** Shape $ (Value): {@link ModifierGroup}. A group of choices that customize an item. */
        "object": ModifierGroup;
    };
    /** Shape $ (Value): string.  Value enum: "modifier_group.archived". */
    "event_type"?: "modifier_group.archived" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_modifier_group_archived_merchant}. The `modifier_group.archived`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_modifier_group_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ModifierGroup}. A group of
     * choices that customize an item.
     */
    "data"?: {
        /** Shape $ (Value): {@link ModifierGroup}. A group of choices that customize an item. */
        "object": ModifierGroup;
    };
    /** Shape $ (Value): string.  Value enum: "modifier_group.archived". */
    "event_type"?: "modifier_group.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_modifier_group_created_installed_merchants}. The
 * `modifier_group.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_modifier_group_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ModifierGroup}. A group of
     * choices that customize an item.
     */
    "data"?: {
        /** Shape $ (Value): {@link ModifierGroup}. A group of choices that customize an item. */
        "object": ModifierGroup;
    };
    /** Shape $ (Value): string.  Value enum: "modifier_group.created". */
    "event_type"?: "modifier_group.created" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
