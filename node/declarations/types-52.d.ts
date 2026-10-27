import type { InvoiceDeliveryAttempt, Invoice, InvoiceManualPayment, InvoicePaymentAttempt } from './types-26.js';
import type { MerchantWebhookEnvelope, ModifierGroup, ModifierSet } from './types-31.js';
import type { PartnerWebhookEnvelope, PaymentIntent, PaymentLink } from './types-35.js';
import type { ResponseMeta } from './types-40.js';
import type { WebhookEvent } from './types-50.js';
import type { MerchantBillingBalance, MerchantBillingInvoice, Merchant } from './types-30.js';
import type { Order } from './types-32.js';
import type { Package, PartnerAppInstall } from './types-34.js';
import type { PaymentMethod } from './types-36.js';
export type WebhookEventInvoiceDeliveryAttemptSuppressed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceDeliveryAttempt;
    };
    "event_type"?: "invoice_delivery_attempt.suppressed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceDeliveryAttempt;
    };
    "event_type"?: "invoice_delivery_attempt.suppressed" | (string & {});
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
    "event_type": "invoice_delivery_attempt.suppressed";
});
export type WebhookEventInvoiceIssueFailed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.issue_failed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.issue_failed" | (string & {});
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
    "event_type": "invoice.issue_failed";
});
export type WebhookEventInvoiceIssued = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.issued" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.issued" | (string & {});
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
    "event_type": "invoice.issued";
});
export type WebhookEventInvoiceLateFeeAssessed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.late_fee_assessed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.late_fee_assessed" | (string & {});
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
    "event_type": "invoice.late_fee_assessed";
});
export type WebhookEventInvoiceLateFeeDue = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.late_fee_due" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.late_fee_due" | (string & {});
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
    "event_type": "invoice.late_fee_due";
});
export type WebhookEventInvoiceLateFeeWaived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.late_fee_waived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.late_fee_waived" | (string & {});
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
    "event_type": "invoice.late_fee_waived";
});
export type WebhookEventInvoiceManualPaymentCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceManualPayment;
    };
    "event_type"?: "invoice_manual_payment.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceManualPayment;
    };
    "event_type"?: "invoice_manual_payment.created" | (string & {});
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
    "event_type": "invoice_manual_payment.created";
});
export type WebhookEventInvoiceManualPaymentReversed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceManualPayment;
    };
    "event_type"?: "invoice_manual_payment.reversed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceManualPayment;
    };
    "event_type"?: "invoice_manual_payment.reversed" | (string & {});
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
    "event_type": "invoice_manual_payment.reversed";
});
export type WebhookEventInvoiceMarkedUncollectible = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.marked_uncollectible" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.marked_uncollectible" | (string & {});
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
export type WebhookEventInvoiceOverdue = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.overdue" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.overdue" | (string & {});
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
export type WebhookEventInvoicePaid = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.paid" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.paid" | (string & {});
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
export type WebhookEventInvoicePartiallyPaid = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.partially_paid" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.partially_paid" | (string & {});
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
export type WebhookEventInvoicePartiallyRefunded = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.partially_refunded" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.partially_refunded" | (string & {});
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
export type WebhookEventInvoicePaymentAttemptCanceled = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.canceled" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.canceled" | (string & {});
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
export type WebhookEventInvoicePaymentAttemptExpired = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.expired" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.expired" | (string & {});
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
export type WebhookEventInvoicePaymentAttemptFailed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.failed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.failed" | (string & {});
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
export type WebhookEventInvoicePaymentAttemptProcessing = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.processing" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.processing" | (string & {});
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
export type WebhookEventInvoicePaymentAttemptSettled = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.settled" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoicePaymentAttempt;
    };
    "event_type"?: "invoice_payment_attempt.settled" | (string & {});
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
export type WebhookEventInvoiceRefunded = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.refunded" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.refunded" | (string & {});
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
export type WebhookEventInvoiceReminderDue = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.reminder_due" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.reminder_due" | (string & {});
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
export type WebhookEventInvoiceReopened = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.reopened" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.reopened" | (string & {});
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
export type WebhookEventInvoiceSent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.sent" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.sent" | (string & {});
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
export type WebhookEventInvoiceUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.updated" | (string & {});
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
export type WebhookEventInvoiceVoided = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.voided" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.voided" | (string & {});
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
/** Shape $ (Value): {@link WebhookEventListResponse}. A page of `WebhookEvent` objects. */
export type WebhookEventListResponse = {
    /**
     * Shape $ (Value): Array of {@link WebhookEvent}. Shape $[] (Value): {@link WebhookEvent}. An
     * event prepared for delivery to webhook endpoints.
     */
    "data": Array<WebhookEvent>;
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
export type WebhookEventMerchantBillingBalanceUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": MerchantBillingBalance;
    };
    "event_type"?: "merchant_billing_balance.updated" | (string & {});
})
    & {
    "event_type": "merchant_billing_balance.updated";
});
export type WebhookEventMerchantBillingInvoiceIssued = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": MerchantBillingInvoice;
    };
    "event_type"?: "merchant_billing_invoice.issued" | (string & {});
})
    & {
    "event_type": "merchant_billing_invoice.issued";
});
export type WebhookEventMerchantBillingInvoiceUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": MerchantBillingInvoice;
    };
    "event_type"?: "merchant_billing_invoice.updated" | (string & {});
})
    & {
    "event_type": "merchant_billing_invoice.updated";
});
export type WebhookEventMerchantReadinessUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Merchant;
    };
    "event_type"?: "merchant.readiness_updated" | (string & {});
})
    & {
    "event_type": "merchant.readiness_updated";
});
export type WebhookEventMerchantUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Merchant;
    };
    "event_type"?: "merchant.updated" | (string & {});
})
    & {
    "event_type": "merchant.updated";
});
export type WebhookEventModifierGroupArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierGroup;
    };
    "event_type"?: "modifier_group.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierGroup;
    };
    "event_type"?: "modifier_group.archived" | (string & {});
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
    "event_type": "modifier_group.archived";
});
export type WebhookEventModifierGroupCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierGroup;
    };
    "event_type"?: "modifier_group.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierGroup;
    };
    "event_type"?: "modifier_group.created" | (string & {});
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
    "event_type": "modifier_group.created";
});
export type WebhookEventModifierGroupUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierGroup;
    };
    "event_type"?: "modifier_group.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierGroup;
    };
    "event_type"?: "modifier_group.updated" | (string & {});
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
    "event_type": "modifier_group.updated";
});
export type WebhookEventModifierSetArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierSet;
    };
    "event_type"?: "modifier_set.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierSet;
    };
    "event_type"?: "modifier_set.archived" | (string & {});
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
    "event_type": "modifier_set.archived";
});
export type WebhookEventModifierSetCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierSet;
    };
    "event_type"?: "modifier_set.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierSet;
    };
    "event_type"?: "modifier_set.created" | (string & {});
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
    "event_type": "modifier_set.created";
});
export type WebhookEventModifierSetUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierSet;
    };
    "event_type"?: "modifier_set.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ModifierSet;
    };
    "event_type"?: "modifier_set.updated" | (string & {});
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
    "event_type": "modifier_set.updated";
});
export type WebhookEventOrderClosed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.closed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.closed" | (string & {});
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
    "event_type": "order.closed";
});
export type WebhookEventOrderCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.created" | (string & {});
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
    "event_type": "order.created";
});
export type WebhookEventOrderInventoryExceptionCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.inventory_exception_created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.inventory_exception_created" | (string & {});
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
    "event_type": "order.inventory_exception_created";
});
export type WebhookEventOrderInventoryExceptionResolved = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.inventory_exception_resolved" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.inventory_exception_resolved" | (string & {});
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
    "event_type": "order.inventory_exception_resolved";
});
export type WebhookEventOrderPaid = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.paid" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.paid" | (string & {});
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
    "event_type": "order.paid";
});
export type WebhookEventOrderPartiallyPaid = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.partially_paid" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.partially_paid" | (string & {});
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
    "event_type": "order.partially_paid";
});
export type WebhookEventOrderPartiallyRefunded = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.partially_refunded" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.partially_refunded" | (string & {});
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
    "event_type": "order.partially_refunded";
});
export type WebhookEventOrderRefunded = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.refunded" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.refunded" | (string & {});
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
    "event_type": "order.refunded";
});
export type WebhookEventOrderUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.updated" | (string & {});
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
    "event_type": "order.updated";
});
export type WebhookEventPackageCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Package;
    };
    "event_type"?: "package.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Package;
    };
    "event_type"?: "package.created" | (string & {});
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
    "event_type": "package.created";
});
export type WebhookEventPackageUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Package;
    };
    "event_type"?: "package.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Package;
    };
    "event_type"?: "package.updated" | (string & {});
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
    "event_type": "package.updated";
});
export type WebhookEventPartnerAppInstallCreated = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerAppInstall;
    };
    "event_type"?: "partner_app_install.created" | (string & {});
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "partner_app_install.created";
});
export type WebhookEventPartnerAppInstallPermissionsUpdated = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerAppInstall;
    };
    "event_type"?: "partner_app_install.permissions_updated" | (string & {});
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "partner_app_install.permissions_updated";
});
export type WebhookEventPartnerAppInstallRevoked = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerAppInstall;
    };
    "event_type"?: "partner_app_install.revoked" | (string & {});
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "partner_app_install.revoked";
});
export type WebhookEventPartnerAppInstallUpdated = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerAppInstall;
    };
    "event_type"?: "partner_app_install.updated" | (string & {});
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "partner_app_install.updated";
});
export type WebhookEventPaymentIntentCanceled = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.canceled" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.canceled" | (string & {});
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
    "event_type": "payment_intent.canceled";
});
export type WebhookEventPaymentIntentCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.created" | (string & {});
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
    "event_type": "payment_intent.created";
});
export type WebhookEventPaymentIntentExpired = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.expired" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.expired" | (string & {});
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
    "event_type": "payment_intent.expired";
});
export type WebhookEventPaymentIntentFulfillmentHoldUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.fulfillment_hold_updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.fulfillment_hold_updated" | (string & {});
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
    "event_type": "payment_intent.fulfillment_hold_updated";
});
export type WebhookEventPaymentIntentPaymentFailed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.payment_failed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.payment_failed" | (string & {});
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
    "event_type": "payment_intent.payment_failed";
});
export type WebhookEventPaymentIntentProcessing = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.processing" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.processing" | (string & {});
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
    "event_type": "payment_intent.processing";
});
export type WebhookEventPaymentIntentRequiresAction = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.requires_action" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.requires_action" | (string & {});
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
    "event_type": "payment_intent.requires_action";
});
export type WebhookEventPaymentIntentRequiresCapture = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.requires_capture" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.requires_capture" | (string & {});
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
    "event_type": "payment_intent.requires_capture";
});
export type WebhookEventPaymentIntentSucceeded = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.succeeded" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.succeeded" | (string & {});
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
    "event_type": "payment_intent.succeeded";
});
export type WebhookEventPaymentIntentUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.updated" | (string & {});
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
    "event_type": "payment_intent.updated";
});
export type WebhookEventPaymentLinkCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentLink;
    };
    "event_type"?: "payment_link.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentLink;
    };
    "event_type"?: "payment_link.created" | (string & {});
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
    "event_type": "payment_link.created";
});
export type WebhookEventPaymentLinkUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentLink;
    };
    "event_type"?: "payment_link.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentLink;
    };
    "event_type"?: "payment_link.updated" | (string & {});
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
    "event_type": "payment_link.updated";
});
export type WebhookEventPaymentMethodActivated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.activated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.activated" | (string & {});
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
    "event_type": "payment_method.activated";
});
