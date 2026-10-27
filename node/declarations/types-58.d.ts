import type { InvoicePaymentAttempt, Invoice } from './types-26.js';
import type { PartnerWebhookEnvelope, PaymentIntent } from './types-35.js';
import type { MerchantWebhookEnvelope, ModifierGroup, ModifierSet } from './types-31.js';
import type { MerchantBillingBalance, MerchantBillingInvoice, Merchant } from './types-30.js';
import type { Order } from './types-32.js';
import type { Package, PartnerAppInstall } from './types-34.js';
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
/**
 * Shape $ (Value): {@link Webhook_modifier_group_created_merchant}. The `modifier_group.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_modifier_group_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
});
/**
 * Shape $ (Value): {@link Webhook_modifier_group_updated_installed_merchants}. The
 * `modifier_group.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_modifier_group_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ModifierGroup}. A group of
     * choices that customize an item.
     */
    "data"?: {
        /** Shape $ (Value): {@link ModifierGroup}. A group of choices that customize an item. */
        "object": ModifierGroup;
    };
    /** Shape $ (Value): string.  Value enum: "modifier_group.updated". */
    "event_type"?: "modifier_group.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_modifier_group_updated_merchant}. The `modifier_group.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_modifier_group_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ModifierGroup}. A group of
     * choices that customize an item.
     */
    "data"?: {
        /** Shape $ (Value): {@link ModifierGroup}. A group of choices that customize an item. */
        "object": ModifierGroup;
    };
    /** Shape $ (Value): string.  Value enum: "modifier_group.updated". */
    "event_type"?: "modifier_group.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_modifier_set_archived_installed_merchants}. The
 * `modifier_set.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_modifier_set_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ModifierSet}. A reusable
     * collection of customization groups.
     */
    "data"?: {
        /** Shape $ (Value): {@link ModifierSet}. A reusable collection of customization groups. */
        "object": ModifierSet;
    };
    /** Shape $ (Value): string.  Value enum: "modifier_set.archived". */
    "event_type"?: "modifier_set.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_modifier_set_archived_merchant}. The `modifier_set.archived`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_modifier_set_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ModifierSet}. A reusable
     * collection of customization groups.
     */
    "data"?: {
        /** Shape $ (Value): {@link ModifierSet}. A reusable collection of customization groups. */
        "object": ModifierSet;
    };
    /** Shape $ (Value): string.  Value enum: "modifier_set.archived". */
    "event_type"?: "modifier_set.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_modifier_set_created_installed_merchants}. The
 * `modifier_set.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_modifier_set_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ModifierSet}. A reusable
     * collection of customization groups.
     */
    "data"?: {
        /** Shape $ (Value): {@link ModifierSet}. A reusable collection of customization groups. */
        "object": ModifierSet;
    };
    /** Shape $ (Value): string.  Value enum: "modifier_set.created". */
    "event_type"?: "modifier_set.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_modifier_set_created_merchant}. The `modifier_set.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_modifier_set_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ModifierSet}. A reusable
     * collection of customization groups.
     */
    "data"?: {
        /** Shape $ (Value): {@link ModifierSet}. A reusable collection of customization groups. */
        "object": ModifierSet;
    };
    /** Shape $ (Value): string.  Value enum: "modifier_set.created". */
    "event_type"?: "modifier_set.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_modifier_set_updated_installed_merchants}. The
 * `modifier_set.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_modifier_set_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ModifierSet}. A reusable
     * collection of customization groups.
     */
    "data"?: {
        /** Shape $ (Value): {@link ModifierSet}. A reusable collection of customization groups. */
        "object": ModifierSet;
    };
    /** Shape $ (Value): string.  Value enum: "modifier_set.updated". */
    "event_type"?: "modifier_set.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_modifier_set_updated_merchant}. The `modifier_set.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_modifier_set_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ModifierSet}. A reusable
     * collection of customization groups.
     */
    "data"?: {
        /** Shape $ (Value): {@link ModifierSet}. A reusable collection of customization groups. */
        "object": ModifierSet;
    };
    /** Shape $ (Value): string.  Value enum: "modifier_set.updated". */
    "event_type"?: "modifier_set.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_order_closed_installed_merchants}. The `order.closed` webhook
 * payload for the `installed_merchants` event source. Fields shared by partner webhook payloads.
 */
export type Webhook_order_closed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.closed". */
    "event_type"?: "order.closed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_order_closed_merchant}. The `order.closed` webhook payload for
 * the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_order_closed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.closed". */
    "event_type"?: "order.closed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_order_created_installed_merchants}. The `order.created` webhook
 * payload for the `installed_merchants` event source. Fields shared by partner webhook payloads.
 */
export type Webhook_order_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.created". */
    "event_type"?: "order.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_order_created_merchant}. The `order.created` webhook payload for
 * the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_order_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.created". */
    "event_type"?: "order.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_order_inventory_exception_created_installed_merchants}. The
 * `order.inventory_exception_created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_order_inventory_exception_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.inventory_exception_created". */
    "event_type"?: "order.inventory_exception_created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_order_inventory_exception_created_merchant}. The
 * `order.inventory_exception_created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_order_inventory_exception_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.inventory_exception_created". */
    "event_type"?: "order.inventory_exception_created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_order_inventory_exception_resolved_installed_merchants}. The
 * `order.inventory_exception_resolved` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_order_inventory_exception_resolved_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.inventory_exception_resolved". */
    "event_type"?: "order.inventory_exception_resolved" | (string & {});
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
 * Shape $ (Value): {@link Webhook_order_inventory_exception_resolved_merchant}. The
 * `order.inventory_exception_resolved` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_order_inventory_exception_resolved_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.inventory_exception_resolved". */
    "event_type"?: "order.inventory_exception_resolved" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_order_paid_installed_merchants}. The `order.paid` webhook
 * payload for the `installed_merchants` event source. Fields shared by partner webhook payloads.
 */
export type Webhook_order_paid_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.paid". */
    "event_type"?: "order.paid" | (string & {});
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
 * Shape $ (Value): {@link Webhook_order_paid_merchant}. The `order.paid` webhook payload for the
 * `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_order_paid_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.paid". */
    "event_type"?: "order.paid" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_order_partially_paid_installed_merchants}. The
 * `order.partially_paid` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_order_partially_paid_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.partially_paid". */
    "event_type"?: "order.partially_paid" | (string & {});
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
 * Shape $ (Value): {@link Webhook_order_partially_paid_merchant}. The `order.partially_paid`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_order_partially_paid_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.partially_paid". */
    "event_type"?: "order.partially_paid" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_order_partially_refunded_installed_merchants}. The
 * `order.partially_refunded` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_order_partially_refunded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.partially_refunded". */
    "event_type"?: "order.partially_refunded" | (string & {});
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
 * Shape $ (Value): {@link Webhook_order_partially_refunded_merchant}. The
 * `order.partially_refunded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_order_partially_refunded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.partially_refunded". */
    "event_type"?: "order.partially_refunded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_order_refunded_installed_merchants}. The `order.refunded`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_order_refunded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.refunded". */
    "event_type"?: "order.refunded" | (string & {});
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
 * Shape $ (Value): {@link Webhook_order_refunded_merchant}. The `order.refunded` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_order_refunded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.refunded". */
    "event_type"?: "order.refunded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_order_updated_installed_merchants}. The `order.updated` webhook
 * payload for the `installed_merchants` event source. Fields shared by partner webhook payloads.
 */
export type Webhook_order_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.updated". */
    "event_type"?: "order.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_order_updated_merchant}. The `order.updated` webhook payload for
 * the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_order_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Order}. A customer's purchase and
     * its payment and fulfillment progress.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
         * progress.
         */
        "object": Order;
    };
    /** Shape $ (Value): string.  Value enum: "order.updated". */
    "event_type"?: "order.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_package_created_installed_merchants}. The `package.created`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_package_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Package}. A package within a
     * shipment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Package}. A package within a shipment. */
        "object": Package;
    };
    /** Shape $ (Value): string.  Value enum: "package.created". */
    "event_type"?: "package.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_package_created_merchant}. The `package.created` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_package_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Package}. A package within a
     * shipment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Package}. A package within a shipment. */
        "object": Package;
    };
    /** Shape $ (Value): string.  Value enum: "package.created". */
    "event_type"?: "package.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_package_updated_installed_merchants}. The `package.updated`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_package_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Package}. A package within a
     * shipment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Package}. A package within a shipment. */
        "object": Package;
    };
    /** Shape $ (Value): string.  Value enum: "package.updated". */
    "event_type"?: "package.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_package_updated_merchant}. The `package.updated` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_package_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Package}. A package within a
     * shipment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Package}. A package within a shipment. */
        "object": Package;
    };
    /** Shape $ (Value): string.  Value enum: "package.updated". */
    "event_type"?: "package.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_partner_app_install_created_partner_app}. The
 * `partner_app_install.created` webhook payload for the `partner_app` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_partner_app_install_created_partner_app = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PartnerAppInstall}. A merchant's
     * authorization of a partner application.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PartnerAppInstall}. A merchant's authorization of a partner
         * application.
         */
        "object": PartnerAppInstall;
    };
    /** Shape $ (Value): string.  Value enum: "partner_app_install.created". */
    "event_type"?: "partner_app_install.created" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.merchant_id (Required): string. Shape
     * $.partner_app_install_id (Required): string. Shape $.type (Required): string. Value enum:
     * "partner_app".
     */
    "source"?: {
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string.  Value enum: "partner_app". */
        "type": "partner_app" | (string & {});
    };
});
/**
 * Shape $ (Value): {@link Webhook_partner_app_install_permissions_updated_partner_app}. The
 * `partner_app_install.permissions_updated` webhook payload for the `partner_app` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_partner_app_install_permissions_updated_partner_app = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PartnerAppInstall}. A merchant's
     * authorization of a partner application.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PartnerAppInstall}. A merchant's authorization of a partner
         * application.
         */
        "object": PartnerAppInstall;
    };
    /** Shape $ (Value): string.  Value enum: "partner_app_install.permissions_updated". */
    "event_type"?: "partner_app_install.permissions_updated" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.merchant_id (Required): string. Shape
     * $.partner_app_install_id (Required): string. Shape $.type (Required): string. Value enum:
     * "partner_app".
     */
    "source"?: {
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string.  Value enum: "partner_app". */
        "type": "partner_app" | (string & {});
    };
});
/**
 * Shape $ (Value): {@link Webhook_partner_app_install_revoked_partner_app}. The
 * `partner_app_install.revoked` webhook payload for the `partner_app` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_partner_app_install_revoked_partner_app = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PartnerAppInstall}. A merchant's
     * authorization of a partner application.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PartnerAppInstall}. A merchant's authorization of a partner
         * application.
         */
        "object": PartnerAppInstall;
    };
    /** Shape $ (Value): string.  Value enum: "partner_app_install.revoked". */
    "event_type"?: "partner_app_install.revoked" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.merchant_id (Required): string. Shape
     * $.partner_app_install_id (Required): string. Shape $.type (Required): string. Value enum:
     * "partner_app".
     */
    "source"?: {
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string.  Value enum: "partner_app". */
        "type": "partner_app" | (string & {});
    };
});
/**
 * Shape $ (Value): {@link Webhook_partner_app_install_updated_partner_app}. The
 * `partner_app_install.updated` webhook payload for the `partner_app` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_partner_app_install_updated_partner_app = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PartnerAppInstall}. A merchant's
     * authorization of a partner application.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PartnerAppInstall}. A merchant's authorization of a partner
         * application.
         */
        "object": PartnerAppInstall;
    };
    /** Shape $ (Value): string.  Value enum: "partner_app_install.updated". */
    "event_type"?: "partner_app_install.updated" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.merchant_id (Required): string. Shape
     * $.partner_app_install_id (Required): string. Shape $.type (Required): string. Value enum:
     * "partner_app".
     */
    "source"?: {
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string.  Value enum: "partner_app". */
        "type": "partner_app" | (string & {});
    };
});
/**
 * Shape $ (Value): {@link Webhook_payment_intent_canceled_installed_merchants}. The
 * `payment_intent.canceled` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_payment_intent_canceled_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentIntent}. One payment from
     * a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the
     * payment is authorized, authorized_money equals amount_money and splits into captured_money
     * (collected), capturable_money (still on hold), and released_money (returned without being
     * charged), so authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
         * of an order. amount_money is the amount requested. Once the payment is authorized,
         * authorized_money equals amount_money and splits into captured_money (collected),
         * capturable_money (still on hold), and released_money (returned without being charged),
         * so authorized_money always equals the sum of those three. Reconcile revenue from
         * captured_money.
         */
        "object": PaymentIntent;
    };
    /** Shape $ (Value): string.  Value enum: "payment_intent.canceled". */
    "event_type"?: "payment_intent.canceled" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_intent_canceled_merchant}. The `payment_intent.canceled`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payment_intent_canceled_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentIntent}. One payment from
     * a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the
     * payment is authorized, authorized_money equals amount_money and splits into captured_money
     * (collected), capturable_money (still on hold), and released_money (returned without being
     * charged), so authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
         * of an order. amount_money is the amount requested. Once the payment is authorized,
         * authorized_money equals amount_money and splits into captured_money (collected),
         * capturable_money (still on hold), and released_money (returned without being charged),
         * so authorized_money always equals the sum of those three. Reconcile revenue from
         * captured_money.
         */
        "object": PaymentIntent;
    };
    /** Shape $ (Value): string.  Value enum: "payment_intent.canceled". */
    "event_type"?: "payment_intent.canceled" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_intent_created_installed_merchants}. The
 * `payment_intent.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_payment_intent_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentIntent}. One payment from
     * a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the
     * payment is authorized, authorized_money equals amount_money and splits into captured_money
     * (collected), capturable_money (still on hold), and released_money (returned without being
     * charged), so authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
         * of an order. amount_money is the amount requested. Once the payment is authorized,
         * authorized_money equals amount_money and splits into captured_money (collected),
         * capturable_money (still on hold), and released_money (returned without being charged),
         * so authorized_money always equals the sum of those three. Reconcile revenue from
         * captured_money.
         */
        "object": PaymentIntent;
    };
    /** Shape $ (Value): string.  Value enum: "payment_intent.created". */
    "event_type"?: "payment_intent.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_intent_created_merchant}. The `payment_intent.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payment_intent_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentIntent}. One payment from
     * a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the
     * payment is authorized, authorized_money equals amount_money and splits into captured_money
     * (collected), capturable_money (still on hold), and released_money (returned without being
     * charged), so authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
         * of an order. amount_money is the amount requested. Once the payment is authorized,
         * authorized_money equals amount_money and splits into captured_money (collected),
         * capturable_money (still on hold), and released_money (returned without being charged),
         * so authorized_money always equals the sum of those three. Reconcile revenue from
         * captured_money.
         */
        "object": PaymentIntent;
    };
    /** Shape $ (Value): string.  Value enum: "payment_intent.created". */
    "event_type"?: "payment_intent.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_intent_expired_installed_merchants}. The
 * `payment_intent.expired` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_payment_intent_expired_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentIntent}. One payment from
     * a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the
     * payment is authorized, authorized_money equals amount_money and splits into captured_money
     * (collected), capturable_money (still on hold), and released_money (returned without being
     * charged), so authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
         * of an order. amount_money is the amount requested. Once the payment is authorized,
         * authorized_money equals amount_money and splits into captured_money (collected),
         * capturable_money (still on hold), and released_money (returned without being charged),
         * so authorized_money always equals the sum of those three. Reconcile revenue from
         * captured_money.
         */
        "object": PaymentIntent;
    };
    /** Shape $ (Value): string.  Value enum: "payment_intent.expired". */
    "event_type"?: "payment_intent.expired" | (string & {});
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
