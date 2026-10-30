import type { Invoice } from './types-28.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { InvoicePaymentPolicy, InvoicePaymentPolicyInput } from './types-30.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ResponseMeta } from './types-48.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { BundleComponent } from './types-1.js';
import type { CategoryReference } from './types-4.js';
import type { Image } from './types-25.js';
import type { OrderLineItemModifier } from './types-37.js';
import type { SelectedProductOption } from './types-53.js';
/**
 * The `invoice.collection_blocked` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InvoiceCollectionBlockedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.collection_blocked". */
    "event_type"?: "invoice.collection_blocked";
});
/** The `buyer_initiated` variant of `InvoiceCollection`. */
export type InvoiceCollectionBuyerInitiated = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum:
     * "buyer_initiated".
     */
    "mode": "buyer_initiated" | (string & {});
    /**
     * The saved card Flint charges. Present only with automatic. On a draft, null means Flint
     * charges the customer's default card, selected at issue. After issue it is the selected card.
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy": InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "buyer_initiated". */
    "mode"?: "buyer_initiated" | (string & {});
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy": InvoicePaymentPolicy;
}));
/** The `external` variant of `InvoiceCollection`. */
export type InvoiceCollectionExternal = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum: "external".
     */
    "mode": "external" | (string & {});
    /**
     * The saved card Flint charges. Present only with automatic. On a draft, null means Flint
     * charges the customer's default card, selected at issue. After issue it is the selected card.
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "external". */
    "mode"?: "external" | (string & {});
}));
/** The `automatic` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputAutomatic = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "automatic".
     */
    "mode": "automatic" | (string & {});
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1.
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "automatic". */
    "mode"?: "automatic" | (string & {});
}));
/** The `automatic` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputAutomaticInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "automatic".
     */
    "mode": "automatic";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1.
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyInput;
})
    & (({
    /** Value enum: "automatic". */
    "mode"?: "automatic";
})
    & (({
    "payment_policy"?: never;
})));
/** The `buyer_initiated` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputBuyerInitiated = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "buyer_initiated".
     */
    "mode": "buyer_initiated" | (string & {});
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1.
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "buyer_initiated". */
    "mode"?: "buyer_initiated" | (string & {});
}));
/** The `buyer_initiated` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputBuyerInitiatedInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "buyer_initiated".
     */
    "mode": "buyer_initiated";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1.
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyInput;
})
    & (({
    /** Value enum: "buyer_initiated". */
    "mode"?: "buyer_initiated";
})
    & (({
    "payment_method_id"?: never;
})));
/** The `external` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputExternalInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "external".
     */
    "mode": "external";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1.
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyInput;
})
    & (({
    /** Value enum: "external". */
    "mode"?: "external";
})
    & (({
    "payment_method_id"?: never;
}) & ({
    "payment_policy"?: never;
})));
/** The `merchant_default` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputMerchantDefault = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "merchant_default".
     */
    "mode": "merchant_default" | (string & {});
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1.
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "merchant_default". */
    "mode"?: "merchant_default" | (string & {});
}));
/** The `merchant_default` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputMerchantDefaultInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "merchant_default".
     */
    "mode": "merchant_default";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1.
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyInput;
})
    & (({
    /** Value enum: "merchant_default". */
    "mode"?: "merchant_default";
})
    & (({
    "payment_method_id"?: never;
}) & ({
    "payment_policy"?: never;
})));
/**
 * How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional
 * saved payment method, and a payment policy.
 */
export type InvoiceCollectionRequest = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "merchant_default", "buyer_initiated", "automatic",
     * "external".
     */
    "mode": "merchant_default" | "buyer_initiated" | "automatic" | "external" | (string & {});
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1.
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & ((Exclude<InvoiceCollectionInputMerchantDefault & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputBuyerInitiated & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputAutomatic & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional
 * saved payment method, and a payment policy.
 */
export type InvoiceCollectionRequestInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "merchant_default", "buyer_initiated", "automatic",
     * "external".
     */
    "mode": "merchant_default" | "buyer_initiated" | "automatic" | "external";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1.
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyInput;
})
    & ((Exclude<InvoiceCollectionInputMerchantDefaultInput & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputBuyerInitiatedInput & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputAutomaticInput & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputExternalInput & object, readonly unknown[]>));
export type InvoiceCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.created";
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
    "event_type": "invoice.created";
});
/**
 * The `invoice.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.created". */
    "event_type"?: "invoice.created";
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
 * The `invoice.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.created". */
    "event_type"?: "invoice.created";
});
export type InvoiceCreditedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.credited";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.credited";
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
    "event_type": "invoice.credited";
});
/**
 * The `invoice.credited` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceCreditedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.credited". */
    "event_type"?: "invoice.credited";
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
 * The `invoice.credited` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceCreditedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.credited". */
    "event_type"?: "invoice.credited";
});
/**
 * One attempt to deliver an invoice by email, either the original send or a reminder, with its
 * recipients and status.
 */
export type InvoiceDeliveryAttempt = ({
    /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
    "cc_emails"?: Array<string>;
    /** How Flint delivered the invoice. Value enum: "email". */
    "channel": "email" | (string & {});
    /** When the attempt was created. Format: date-time. */
    "created_at"?: string;
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
    /** Flint invoice delivery attempt ID. */
    "invoice_delivery_attempt_id": string;
    /** ID of the invoice this delivery attempt belongs to. */
    "invoice_id": string;
    /** When the email service accepted the message. Absent until it does. Format: date-time. */
    "sent_at"?: string;
    /**
     * The outcome of this attempt. sent means the email service accepted the message. Value enum:
     * "pending", "sent", "failed", "suppressed".
     */
    "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
    /**
     * Present only when status is suppressed. Value enum: "merchant_managed_email",
     * "recipient_unsubscribed".
     */
    "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | (string & {});
    /** Address the invoice was sent to. `null` after the customer was deleted. */
    "to_email": string | null;
});
export type InvoiceDeliveryAttemptFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceDeliveryAttempt;
    };
    "event_type"?: "invoice_delivery_attempt.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceDeliveryAttempt;
    };
    "event_type"?: "invoice_delivery_attempt.failed";
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
    "event_type": "invoice_delivery_attempt.failed";
});
/**
 * The `invoice_delivery_attempt.failed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoiceDeliveryAttemptFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
     * email, either the original send or a reminder, with its recipients and status.
     */
    "data"?: {
        /**
         * One attempt to deliver an invoice by email, either the original send or a reminder, with
         * its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Value enum: "invoice_delivery_attempt.failed". */
    "event_type"?: "invoice_delivery_attempt.failed";
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
 * The `invoice_delivery_attempt.failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceDeliveryAttemptFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
     * email, either the original send or a reminder, with its recipients and status.
     */
    "data"?: {
        /**
         * One attempt to deliver an invoice by email, either the original send or a reminder, with
         * its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Value enum: "invoice_delivery_attempt.failed". */
    "event_type"?: "invoice_delivery_attempt.failed";
});
/** A page of `InvoiceDeliveryAttempt` objects. */
export type InvoiceDeliveryAttemptListResponse = {
    /**
     *  [] (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by email,
     * either the original send or a reminder, with its recipients and status.
     */
    "data": Array<InvoiceDeliveryAttempt>;
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
export type InvoiceDeliveryAttemptSentEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceDeliveryAttempt;
    };
    "event_type"?: "invoice_delivery_attempt.sent";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceDeliveryAttempt;
    };
    "event_type"?: "invoice_delivery_attempt.sent";
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
    "event_type": "invoice_delivery_attempt.sent";
});
/**
 * The `invoice_delivery_attempt.sent` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoiceDeliveryAttemptSentInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
     * email, either the original send or a reminder, with its recipients and status.
     */
    "data"?: {
        /**
         * One attempt to deliver an invoice by email, either the original send or a reminder, with
         * its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Value enum: "invoice_delivery_attempt.sent". */
    "event_type"?: "invoice_delivery_attempt.sent";
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
 * The `invoice_delivery_attempt.sent` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceDeliveryAttemptSentMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
     * email, either the original send or a reminder, with its recipients and status.
     */
    "data"?: {
        /**
         * One attempt to deliver an invoice by email, either the original send or a reminder, with
         * its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Value enum: "invoice_delivery_attempt.sent". */
    "event_type"?: "invoice_delivery_attempt.sent";
});
export type InvoiceDeliveryAttemptSuppressedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceDeliveryAttempt;
    };
    "event_type"?: "invoice_delivery_attempt.suppressed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceDeliveryAttempt;
    };
    "event_type"?: "invoice_delivery_attempt.suppressed";
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
/**
 * The `invoice_delivery_attempt.suppressed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoiceDeliveryAttemptSuppressedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
     * email, either the original send or a reminder, with its recipients and status.
     */
    "data"?: {
        /**
         * One attempt to deliver an invoice by email, either the original send or a reminder, with
         * its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Value enum: "invoice_delivery_attempt.suppressed". */
    "event_type"?: "invoice_delivery_attempt.suppressed";
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
 * The `invoice_delivery_attempt.suppressed` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type InvoiceDeliveryAttemptSuppressedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
     * email, either the original send or a reminder, with its recipients and status.
     */
    "data"?: {
        /**
         * One attempt to deliver an invoice by email, either the original send or a reminder, with
         * its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Value enum: "invoice_delivery_attempt.suppressed". */
    "event_type"?: "invoice_delivery_attempt.suppressed";
});
/**
 * A discount applied to an invoice, with its source, the discount amount, the amount actually
 * applied, and any promotion.
 */
export type InvoiceDiscount = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_money": MoneyValue;
    "customer_facing_name"?: string;
    /** Value enum: "order", "line_item". */
    "discount_class"?: "order" | "line_item" | (string & {});
    "promotion_code"?: string;
    "promotion_id"?: string;
    /** Value enum: "manual", "promotion", "plan_change_credit". */
    "source": "manual" | "promotion" | "plan_change_credit" | (string & {});
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
     * Value enum: "subtotal", "discount", "charge", "tax", "tip", "total", "late_fee",
     * "late_fee_waived", "payments", "credit_note", "credits", "written_off", "amount_due",
     * "refunded".
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
    /** When the late fee was assessed or waived, or the credit note issued. Format: date-time. */
    "occurred_at"?: string;
    /** Rate of a percent-based charge or a tax row, in percent units. multipleOf: 0.0001. */
    "percent"?: number;
    /** Promotion code of a discount row. */
    "promotion_code"?: string;
    /** Value enum: "sales_tax", "use_tax", "retail_delivery_fee". */
    "tax_type"?: "sales_tax" | "use_tax" | "retail_delivery_fee" | (string & {});
    /**
     * Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled",
     * "location_required", "calculation_incomplete".
     */
    "taxability_reason"?: "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
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
        "object": Invoice;
    };
    "event_type"?: "invoice.issue_failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.issue_failed";
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
/**
 * The `invoice.issue_failed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InvoiceIssueFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.issue_failed". */
    "event_type"?: "invoice.issue_failed";
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
 * The `invoice.issue_failed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceIssueFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.issue_failed". */
    "event_type"?: "invoice.issue_failed";
});
export type InvoiceIssuedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.issued";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.issued";
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
/**
 * The `invoice.issued` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceIssuedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.issued". */
    "event_type"?: "invoice.issued";
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
 * The `invoice.issued` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceIssuedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
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
    /** When the fee was assessed. Format: date-time. */
    "assessed_at": string;
    /**
     * The unpaid balance the fee was calculated from, excluding late fees, captured at assessment.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "base_outstanding_money": MoneyValue;
    /** Flint invoice late fee ID. */
    "invoice_late_fee_id": string;
    /**
     * The schedule entry this fee applies to. Absent on an invoice without a schedule, where the
     * fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even
     * after a waiver.
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * The late fee policy from payment_terms_snapshot, copied when the fee was assessed. anyOf[1]
     * (Value): {@link InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed amount or a
     * percentage, a grace period in days, and whether Flint applies it automatically. anyOf[2]
     * (Value): null.
     */
    "late_fee_policy": ((InvoiceLateFeePolicy) | (null) | (unknown));
    /**
     * What is still owed on this fee: amount_money - paid_money - waived_money -
     * written_off_money, never below zero. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Payments applied to this fee, minus reversed payments. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /** When the fee was waived. Absent unless it was waived. Format: date-time. */
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
        "object": Invoice;
    };
    "event_type"?: "invoice.late_fee_assessed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.late_fee_assessed";
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
/**
 * The `invoice.late_fee_assessed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoiceLateFeeAssessedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.late_fee_assessed". */
    "event_type"?: "invoice.late_fee_assessed";
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
 * The `invoice.late_fee_assessed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InvoiceLateFeeAssessedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.late_fee_assessed". */
    "event_type"?: "invoice.late_fee_assessed";
});
export type InvoiceLateFeeDueEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.late_fee_due";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.late_fee_due";
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
/**
 * The `invoice.late_fee_due` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InvoiceLateFeeDueInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.late_fee_due". */
    "event_type"?: "invoice.late_fee_due";
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
 * The `invoice.late_fee_due` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceLateFeeDueMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.late_fee_due". */
    "event_type"?: "invoice.late_fee_due";
});
/**
 * A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
 * whether Flint applies it automatically.
 */
export type InvoiceLateFeePolicy = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /**
     * Whether Flint applies the one-time fee automatically after the grace period. Omission
     * defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum:
     * "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic" | (string & {});
    /** Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Value enum: "fixed", "percentage". */
    "type": "fixed" | "percentage" | (string & {});
})
    & ((Exclude<InvoiceLateFeePolicyFixed & object, readonly unknown[]>)
    | (Exclude<InvoiceLateFeePolicyPercentage & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `fixed` variant of `InvoiceLateFeePolicy`. */
export type InvoiceLateFeePolicyFixed = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /**
     * Whether Flint applies the one-time fee automatically after the grace period. Omission
     * defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum:
     * "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic" | (string & {});
    /** Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Value enum: "fixed". */
    "type": "fixed" | (string & {});
    /** Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
}));
/** The `fixed` variant of `InvoiceLateFeePolicy`. */
export type InvoiceLateFeePolicyFixedInput = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
    /**
     * Whether Flint applies the one-time fee automatically after the grace period. Omission
     * defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum:
     * "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic";
    /** Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** Value enum: "fixed". */
    "type": "fixed";
    /** Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
})
    & ({
    "percent"?: never;
}));
/**
 * A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
 * whether Flint applies it automatically.
 */
export type InvoiceLateFeePolicyInput = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValueInput;
    /**
     * Whether Flint applies the one-time fee automatically after the grace period. Omission
     * defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum:
     * "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic";
    /** Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Value enum: "fixed", "percentage". */
    "type": "fixed" | "percentage";
})
    & ((Exclude<InvoiceLateFeePolicyFixedInput & object, readonly unknown[]>)
    | (Exclude<InvoiceLateFeePolicyPercentageInput & object, readonly unknown[]>));
/** The `percentage` variant of `InvoiceLateFeePolicy`. */
export type InvoiceLateFeePolicyPercentage = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /**
     * Whether Flint applies the one-time fee automatically after the grace period. Omission
     * defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum:
     * "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic" | (string & {});
    /** Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent": number;
    /** Value enum: "percentage". */
    "type": "percentage" | (string & {});
})
    & (({
    /** Value enum: "percentage". */
    "type": "percentage" | (string & {});
    /** Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent": number;
}));
/** The `percentage` variant of `InvoiceLateFeePolicy`. */
export type InvoiceLateFeePolicyPercentageInput = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValueInput;
    /**
     * Whether Flint applies the one-time fee automatically after the grace period. Omission
     * defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum:
     * "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic";
    /** Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0.
     * multipleOf: 0.0001.
     */
    "percent": number;
    /** Value enum: "percentage". */
    "type": "percentage";
})
    & (({
    /** Value enum: "percentage". */
    "type": "percentage";
    /** Format: int32. minimum: 0. maximum: 365. */
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
export type InvoiceLateFeeWaivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.late_fee_waived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.late_fee_waived";
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
/**
 * The `invoice.late_fee_waived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InvoiceLateFeeWaivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.late_fee_waived". */
    "event_type"?: "invoice.late_fee_waived";
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
 * The `invoice.late_fee_waived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceLateFeeWaivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.late_fee_waived". */
    "event_type"?: "invoice.late_fee_waived";
});
/**
 * A line item on an invoice, with its quantity, unit price, discount, tax, and totals, and the
 * product, variant, or bundle it came from.
 */
export type InvoiceLineItem = {
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
    /** The catalog bundle the line was sold from. Absent unless source_type is bundle. */
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
    /** Line item image. An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /**
     * Flint invoice line item ID, stable across draft edits and issue while the backing order line
     * keeps its ID. Credit notes credit lines by this ID.
     */
    "invoice_line_item_id": string;
    /**
     * Total of the line's modifiers. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     * The line's modifiers, as billed. [] (Value): {@link OrderLineItemModifier}. A modifier
     * selected on an order line item, with its quantity, price change, total, and display flags.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    /** Line item name as billed. */
    "name": string;
    /**
     * The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by
     * this ID.
     */
    "order_line_item_id"?: string;
    /** Parent product of the line's variant. Absent on bundle and custom lines. */
    "product_id"?: string;
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
     * The catalog item the line was sold from. Absent on custom lines. Value enum: "variant",
     * "bundle".
     */
    "source_type"?: "variant" | "bundle" | (string & {});
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
     * total_money - tax_money. Signed monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Price of one unit, before modifiers and discounts. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** The catalog variant the line was sold from. Absent unless source_type is variant. */
    "variant_id"?: string;
};
/** A page of `Invoice` objects. */
export type InvoiceListResponse = {
    /**  [] (Value): {@link Invoice}. A bill issued to a customer. */
    "data": Array<Invoice>;
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
/**
 * A recorded offline payment against an invoice. Its amount contributes to invoice paid_money
 * while recorded; reversing it returns its full amount to outstanding_money. A payment can cover
 * principal and late fees. Manual payments are separate from online payment attempts.
 */
export type InvoiceManualPayment = {
    /**
     * Full amount received, including any principal and late fees covered. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** The invoice this payment was recorded against. */
    "invoice_id": string;
    /**
     * Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this
     * value as source.order_manual_payment_id.
     */
    "invoice_manual_payment_id": string;
    /** minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength:
     * 255.
     */
    "payment_reference"?: string;
    /** When the payment was received. Format: date-time. */
    "received_at": string;
    /**
     * Note supplied when reversing the payment. Present only when reversed and a note was
     * supplied. minLength: 1. maxLength: 4096.
     */
    "reversal_note"?: string;
    /** When the payment was reversed. Present only when reversed. Format: date-time. */
    "reversed_at"?: string;
    /**
     * Whether the payment is recorded or has been reversed in full. Value enum: "recorded",
     * "reversed".
     */
    "status": "recorded" | "reversed" | (string & {});
};
export type InvoiceManualPaymentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceManualPayment;
    };
    "event_type"?: "invoice_manual_payment.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceManualPayment;
    };
    "event_type"?: "invoice_manual_payment.created";
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
/**
 * The `invoice_manual_payment.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoiceManualPaymentCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice_manual_payment.created". */
    "event_type"?: "invoice_manual_payment.created";
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
 * The `invoice_manual_payment.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceManualPaymentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "invoice_manual_payment.created". */
    "event_type"?: "invoice_manual_payment.created";
});
/** A page of `InvoiceManualPayment` objects. */
export type InvoiceManualPaymentListResponse = {
    /**
     *  [] (Value): {@link InvoiceManualPayment}. A recorded offline payment against an invoice.
     * Its amount contributes to invoice paid_money while recorded; reversing it returns its full
     * amount to outstanding_money. A payment can cover principal and late fees. Manual payments
     * are separate from online payment attempts.
     */
    "data": Array<InvoiceManualPayment>;
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
/** A response containing `InvoiceManualPayment` data. */
export type InvoiceManualPaymentResponse = {
    /**
     * A recorded offline payment against an invoice. Its amount contributes to invoice paid_money
     * while recorded; reversing it returns its full amount to outstanding_money. A payment can
     * cover principal and late fees. Manual payments are separate from online payment attempts.
     */
    "data": InvoiceManualPayment;
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
 * The recorded or reversed payment and the updated invoice. expected_version on either write
 * fences the invoice; use the returned invoice version for the next write.
 */
export type InvoiceManualPaymentResult = {
    /** A bill issued to a customer. */
    "invoice": Invoice;
    /**
     * A recorded offline payment against an invoice. Its amount contributes to invoice paid_money
     * while recorded; reversing it returns its full amount to outstanding_money. A payment can
     * cover principal and late fees. Manual payments are separate from online payment attempts.
     */
    "invoice_manual_payment": InvoiceManualPayment;
};
/** A response containing `InvoiceManualPaymentResult` data. */
export type InvoiceManualPaymentResultResponse = {
    /**
     * The recorded or reversed payment and the updated invoice. expected_version on either write
     * fences the invoice; use the returned invoice version for the next write.
     */
    "data": InvoiceManualPaymentResult;
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
export type InvoiceManualPaymentReversedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceManualPayment;
    };
    "event_type"?: "invoice_manual_payment.reversed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceManualPayment;
    };
    "event_type"?: "invoice_manual_payment.reversed";
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
