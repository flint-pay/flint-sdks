import type { InvoiceManualPayment, InvoiceLateFeePolicy } from './types-29.js';
import type { PartnerWebhookEnvelope, PaymentErrorSummary } from './types-40.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { Invoice } from './types-28.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { ResponseMeta } from './types-48.js';
import type { InvoicePaymentTermCalculationOnReceipt, InvoicePaymentTermCalculationOnReceiptInput } from './types-31.js';
/**
 * The `invoice_manual_payment.reversed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoiceManualPaymentReversedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoiceManualPayment}. A recorded offline payment against an
     * invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns
     * its full amount to outstanding_money. A payment can cover principal and late fees. Manual
     * payments are separate from online payment attempts.
     */
    "data"?: {
        /**
         * A recorded offline payment against an invoice. Its amount contributes to invoice
         * paid_money while recorded; reversing it returns its full amount to outstanding_money. A
         * payment can cover principal and late fees. Manual payments are separate from online
         * payment attempts.
         */
        "object": InvoiceManualPayment;
    };
    /** Value enum: "invoice_manual_payment.reversed". */
    "event_type"?: "invoice_manual_payment.reversed";
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
 * The `invoice_manual_payment.reversed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceManualPaymentReversedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoiceManualPayment}. A recorded offline payment against an
     * invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns
     * its full amount to outstanding_money. A payment can cover principal and late fees. Manual
     * payments are separate from online payment attempts.
     */
    "data"?: {
        /**
         * A recorded offline payment against an invoice. Its amount contributes to invoice
         * paid_money while recorded; reversing it returns its full amount to outstanding_money. A
         * payment can cover principal and late fees. Manual payments are separate from online
         * payment attempts.
         */
        "object": InvoiceManualPayment;
    };
    /** Value enum: "invoice_manual_payment.reversed". */
    "event_type"?: "invoice_manual_payment.reversed";
});
export type InvoiceMarkedUncollectibleEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.marked_uncollectible";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.marked_uncollectible";
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
    "event_type": "invoice.marked_uncollectible";
});
/**
 * The `invoice.marked_uncollectible` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoiceMarkedUncollectibleInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.marked_uncollectible". */
    "event_type"?: "invoice.marked_uncollectible";
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
 * The `invoice.marked_uncollectible` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceMarkedUncollectibleMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.marked_uncollectible". */
    "event_type"?: "invoice.marked_uncollectible";
});
export type InvoiceOverdueEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.overdue";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.overdue";
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
    "event_type": "invoice.overdue";
});
/**
 * The `invoice.overdue` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceOverdueInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.overdue". */
    "event_type"?: "invoice.overdue";
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
 * The `invoice.overdue` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceOverdueMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.overdue". */
    "event_type"?: "invoice.overdue";
});
export type InvoicePaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.paid";
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
    "event_type": "invoice.paid";
});
/**
 * The `invoice.paid` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type InvoicePaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.paid". */
    "event_type"?: "invoice.paid";
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
 * The `invoice.paid` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoicePaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.paid". */
    "event_type"?: "invoice.paid";
});
export type InvoicePartiallyPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.partially_paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.partially_paid";
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
    "event_type": "invoice.partially_paid";
});
/**
 * The `invoice.partially_paid` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InvoicePartiallyPaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.partially_paid". */
    "event_type"?: "invoice.partially_paid";
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
 * The `invoice.partially_paid` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoicePartiallyPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.partially_paid". */
    "event_type"?: "invoice.partially_paid";
});
export type InvoicePartiallyRefundedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.partially_refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.partially_refunded";
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
    "event_type": "invoice.partially_refunded";
});
/**
 * The `invoice.partially_refunded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoicePartiallyRefundedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.partially_refunded". */
    "event_type"?: "invoice.partially_refunded";
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
 * The `invoice.partially_refunded` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InvoicePartiallyRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.partially_refunded". */
    "event_type"?: "invoice.partially_refunded";
});
/** An attempt to collect payment for an invoice. */
export type InvoicePaymentAttempt = {
    /**
     * When the attempt was canceled. An attempt canceled with its checkout session before payment
     * started may not have it. Format: date-time.
     */
    "canceled_at"?: string;
    /**
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time.
     */
    "cancellation_requested_at"?: string;
    /**
     * The hosted or embedded checkout session the buyer pays through. Absent for automatic
     * charges.
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
     * charges. Format: date-time.
     */
    "expires_at"?: string;
    /** The invoice this attempt collects. */
    "invoice_id": string;
    /** Flint invoice payment attempt ID. */
    "invoice_payment_attempt_id": string;
    /**
     * The schedule entry this attempt collects. Absent when the attempt collects the invoice
     * balance.
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Why the payment failed. Present only when status is failed. A summary of why a payment
     * attempt failed, with a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * The payment intent behind this attempt. Absent until payment starts, such as a hosted
     * attempt the buyer hasn't paid yet.
     */
    "payment_intent_id"?: string;
    /**
     * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
     * Value enum: "card", "ach_debit".
     */
    "rail": "card" | "ach_debit" | (string & {});
    /**
     * When this attempt first settled successfully. Duplicate payment notifications preserve this
     * timestamp. Format: date-time.
     */
    "settled_at"?: string;
    /** When the attempt was created. Format: date-time. */
    "started_at"?: string;
    /**
     * Current payment attempt status. settled means this attempt completed successfully, even if
     * the invoice still has an outstanding balance. invoice_payment_attempt.settled reports that
     * completion. Value enum: "open", "settled", "failed", "canceled", "expired", "processing".
     */
    "status": "open" | "settled" | "failed" | "canceled" | "expired" | "processing" | (string & {});
    /**
     * When this attempt last changed. Duplicate payment notifications preserve this timestamp.
     * Format: date-time.
     */
    "updated_at"?: string;
};
export type InvoicePaymentAttemptCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.canceled";
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
    "event_type": "invoice_payment_attempt.canceled";
});
/**
 * The `invoice_payment_attempt.canceled` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "data"?: {
        /** An attempt to collect payment for an invoice. */
        "object": InvoicePaymentAttempt;
    };
    /** Value enum: "invoice_payment_attempt.canceled". */
    "event_type"?: "invoice_payment_attempt.canceled";
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
 * The `invoice_payment_attempt.canceled` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "data"?: {
        /** An attempt to collect payment for an invoice. */
        "object": InvoicePaymentAttempt;
    };
    /** Value enum: "invoice_payment_attempt.canceled". */
    "event_type"?: "invoice_payment_attempt.canceled";
});
export type InvoicePaymentAttemptExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.expired";
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
    "event_type": "invoice_payment_attempt.expired";
});
/**
 * The `invoice_payment_attempt.expired` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptExpiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "data"?: {
        /** An attempt to collect payment for an invoice. */
        "object": InvoicePaymentAttempt;
    };
    /** Value enum: "invoice_payment_attempt.expired". */
    "event_type"?: "invoice_payment_attempt.expired";
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
 * The `invoice_payment_attempt.expired` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "data"?: {
        /** An attempt to collect payment for an invoice. */
        "object": InvoicePaymentAttempt;
    };
    /** Value enum: "invoice_payment_attempt.expired". */
    "event_type"?: "invoice_payment_attempt.expired";
});
export type InvoicePaymentAttemptFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.failed";
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
    "event_type": "invoice_payment_attempt.failed";
});
/**
 * The `invoice_payment_attempt.failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "data"?: {
        /** An attempt to collect payment for an invoice. */
        "object": InvoicePaymentAttempt;
    };
    /** Value enum: "invoice_payment_attempt.failed". */
    "event_type"?: "invoice_payment_attempt.failed";
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
 * The `invoice_payment_attempt.failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "data"?: {
        /** An attempt to collect payment for an invoice. */
        "object": InvoicePaymentAttempt;
    };
    /** Value enum: "invoice_payment_attempt.failed". */
    "event_type"?: "invoice_payment_attempt.failed";
});
/** A page of `InvoicePaymentAttempt` objects. */
export type InvoicePaymentAttemptListResponse = {
    /**  [] (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an invoice. */
    "data": Array<InvoicePaymentAttempt>;
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
export type InvoicePaymentAttemptProcessingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.processing";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.processing";
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
    "event_type": "invoice_payment_attempt.processing";
});
/**
 * The `invoice_payment_attempt.processing` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptProcessingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "data"?: {
        /** An attempt to collect payment for an invoice. */
        "object": InvoicePaymentAttempt;
    };
    /** Value enum: "invoice_payment_attempt.processing". */
    "event_type"?: "invoice_payment_attempt.processing";
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
 * The `invoice_payment_attempt.processing` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptProcessingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "data"?: {
        /** An attempt to collect payment for an invoice. */
        "object": InvoicePaymentAttempt;
    };
    /** Value enum: "invoice_payment_attempt.processing". */
    "event_type"?: "invoice_payment_attempt.processing";
});
/** A response containing `InvoicePaymentAttempt` data. */
export type InvoicePaymentAttemptResponse = {
    /** An attempt to collect payment for an invoice. */
    "data": InvoicePaymentAttempt;
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
export type InvoicePaymentAttemptSettledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.settled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.settled";
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
    "event_type": "invoice_payment_attempt.settled";
});
/**
 * The `invoice_payment_attempt.settled` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptSettledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "data"?: {
        /** An attempt to collect payment for an invoice. */
        "object": InvoicePaymentAttempt;
    };
    /** Value enum: "invoice_payment_attempt.settled". */
    "event_type"?: "invoice_payment_attempt.settled";
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
 * The `invoice_payment_attempt.settled` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptSettledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "data"?: {
        /** An attempt to collect payment for an invoice. */
        "object": InvoicePaymentAttempt;
    };
    /** Value enum: "invoice_payment_attempt.settled". */
    "event_type"?: "invoice_payment_attempt.settled";
});
/**
 * The invoice due-date policy resolved at write time. The object can be sent back when updating a
 * draft.
 */
export type InvoicePaymentDue = ({
    /**
     * The due date set with type date. Present only with date. The top-level due_at is the
     * effective due date for every type. Format: date-time.
     */
    "due_at"?: string;
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms.
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
     * The due date set with type date. Present only with date. The top-level due_at is the
     * effective due date for every type. Format: date-time.
     */
    "due_at": string;
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms.
     */
    "invoice_payment_term_id"?: string;
    /** How the due date was set. Value enum: "date". */
    "type": "date" | (string & {});
})
    & (({
    /** Value enum: "date". */
    "type"?: "date" | (string & {});
    /**
     * The due date set with type date. Present only with date. The top-level due_at is the
     * effective due date for every type. Format: date-time.
     */
    "due_at": string;
}));
/** The `customer_default` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputCustomerDefault = ({
    /**
     * When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any
     * other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1.
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
     * When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any
     * other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1.
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
    "due_at"?: never;
}) & ({
    "invoice_payment_term_id"?: never;
})));
/** The `date` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputDateInput = ({
    /**
     * When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any
     * other type. Format: date-time. minLength: 1.
     */
    "due_at": string | globalThis.Date;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1.
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
     * When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any
     * other type. Format: date-time. minLength: 1.
     */
    "due_at": string | globalThis.Date;
})
    & ({
    "invoice_payment_term_id"?: never;
}));
/** The `merchant_default` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputMerchantDefault = ({
    /**
     * When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any
     * other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1.
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
     * When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any
     * other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1.
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
    "due_at"?: never;
}) & ({
    "invoice_payment_term_id"?: never;
})));
/** The `none` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputNoneInput = ({
    /**
     * When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any
     * other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1.
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
    "due_at"?: never;
}) & ({
    "invoice_payment_term_id"?: never;
})));
/** The `payment_terms` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputPaymentTermsInput = ({
    /**
     * When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any
     * other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1.
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
     * other type. minLength: 1.
     */
    "invoice_payment_term_id": string;
})
    & ({
    "due_at"?: never;
}));
/** The `none` variant of `InvoicePaymentDue`. */
export type InvoicePaymentDueNone = ({
    /**
     * The due date set with type date. Present only with date. The top-level due_at is the
     * effective due date for every type. Format: date-time.
     */
    "due_at"?: string;
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms.
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
     * The due date set with type date. Present only with date. The top-level due_at is the
     * effective due date for every type. Format: date-time.
     */
    "due_at"?: string;
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms.
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
     * payment_terms.
     */
    "invoice_payment_term_id": string;
}));
/**
 * When an invoice is due, used when creating or updating an invoice: no due date, a fixed time,
 * payment terms, or a default.
 */
export type InvoicePaymentDueRequest = ({
    /**
     * When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any
     * other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1.
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
 * When an invoice is due, used when creating or updating an invoice: no due date, a fixed time,
 * payment terms, or a default.
 */
export type InvoicePaymentDueRequestInput = ({
    /**
     * When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any
     * other type. Format: date-time. minLength: 1.
     */
    "due_at"?: string | globalThis.Date;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1.
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
    /** Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". */
    "compared_with_payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
    /**
     * Estimated savings for the merchant, as a positive amount. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "estimated_savings_money": MoneyValue;
    /** Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". */
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
export type InvoicePaymentOptionLimitInput = {
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
export type InvoicePaymentPolicyInput = {
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
     * InvoicePaymentOptionLimitInput}. The largest invoice total allowed for a payment option.
     */
    "payment_option_limits"?: Array<InvoicePaymentOptionLimitInput>;
    /**
     * Whether the buyer's invoice shows the estimated savings of a lower-cost payment option.
     * Requires ach_debit and at least one of card, apple_pay, or google_pay.
     */
    "show_cost_comparison"?: boolean;
};
/** The payment timing agreed for an invoice. */
export type InvoicePaymentTerm = {
    /**
     * How an invoice due date is calculated from payment terms, such as on receipt, net days, or a
     * day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    "invoice_payment_term_id": string;
    /**
     * A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
     * whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    "merchant_id": string;
    "name": string;
    /** Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int32. */
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
    /** Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /**
     * Value enum: "on_receipt", "net_days", "day_of_month", "day_of_next_month",
     * "days_after_month_end".
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
    /** Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /** Value enum: "day_of_month". */
    "type": "day_of_month" | (string & {});
})
    & (({
    /** Value enum: "day_of_month". */
    "type": "day_of_month" | (string & {});
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
}));
/** The `day_of_month` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDayOfMonthInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
    /** Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /** Value enum: "day_of_month". */
    "type": "day_of_month";
})
    & (({
    /** Value enum: "day_of_month". */
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
    /** Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /** Value enum: "day_of_next_month". */
    "type": "day_of_next_month" | (string & {});
})
    & (({
    /** Value enum: "day_of_next_month". */
    "type": "day_of_next_month" | (string & {});
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
}));
/** The `day_of_next_month` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDayOfNextMonthInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
    /** Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /** Value enum: "day_of_next_month". */
    "type": "day_of_next_month";
})
    & (({
    /** Value enum: "day_of_next_month". */
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
    /** Format: int32. minimum: 0. maximum: 365. */
    "days": number;
    /** Value enum: "days_after_month_end". */
    "type": "days_after_month_end" | (string & {});
})
    & (({
    /** Value enum: "days_after_month_end". */
    "type": "days_after_month_end" | (string & {});
    /** Format: int32. minimum: 0. maximum: 365. */
    "days": number;
}));
/** The `days_after_month_end` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDaysAfterMonthEndInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /** Format: int32. minimum: 0. maximum: 365. */
    "days": number;
    /** Value enum: "days_after_month_end". */
    "type": "days_after_month_end";
})
    & (({
    /** Value enum: "days_after_month_end". */
    "type": "days_after_month_end";
    /** Format: int32. minimum: 0. maximum: 365. */
    "days": number;
})
    & ({
    "day"?: never;
}));
/**
 * How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day
 * of the month.
 */
export type InvoicePaymentTermCalculationInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /** Format: int32. minimum: 0. maximum: 365. */
    "days"?: number;
    /**
     * Value enum: "on_receipt", "net_days", "day_of_month", "day_of_next_month",
     * "days_after_month_end".
     */
    "type": "on_receipt" | "net_days" | "day_of_month" | "day_of_next_month" | "days_after_month_end";
})
    & ((Exclude<InvoicePaymentTermCalculationOnReceiptInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationNetDaysInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDaysAfterMonthEndInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDayOfMonthInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDayOfNextMonthInput & object, readonly unknown[]>));
/** The `net_days` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationNetDays = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /** Format: int32. minimum: 0. maximum: 365. */
    "days": number;
    /** Value enum: "net_days". */
    "type": "net_days" | (string & {});
})
    & (({
    /** Value enum: "net_days". */
    "type": "net_days" | (string & {});
    /** Format: int32. minimum: 0. maximum: 365. */
    "days": number;
}));
/** The `net_days` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationNetDaysInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /** Format: int32. minimum: 0. maximum: 365. */
    "days": number;
    /** Value enum: "net_days". */
    "type": "net_days";
})
    & (({
    /** Value enum: "net_days". */
    "type": "net_days";
    /** Format: int32. minimum: 0. maximum: 365. */
    "days": number;
})
    & ({
    "day"?: never;
}));
