import type { CheckoutSession } from './types-4.js';
import type { MerchantWebhookEnvelope } from './types-31.js';
import type { PartnerWebhookEnvelope } from './types-35.js';
import type { CreditNoteAllocation, CreditNote } from './types-9.js';
import type { CustomDomain, Customer, CustomerDeletionRequest } from './types-10.js';
import type { DeliveryLocationSet, DeliveryMethod } from './types-12.js';
import type { DeliveryProfile } from './types-13.js';
/**
 * Shape $ (Value): {@link Webhook_checkout_session_closed_merchant}. The `checkout_session.closed`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_checkout_session_closed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CheckoutSession}. A session in
     * which a buyer completes an order's payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an
         * order's payment.
         */
        "object": CheckoutSession;
    };
    /** Shape $ (Value): string.  Value enum: "checkout_session.closed". */
    "event_type"?: "checkout_session.closed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_checkout_session_created_installed_merchants}. The
 * `checkout_session.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_checkout_session_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CheckoutSession}. A session in
     * which a buyer completes an order's payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an
         * order's payment.
         */
        "object": CheckoutSession;
    };
    /** Shape $ (Value): string.  Value enum: "checkout_session.created". */
    "event_type"?: "checkout_session.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_checkout_session_created_merchant}. The
 * `checkout_session.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_checkout_session_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CheckoutSession}. A session in
     * which a buyer completes an order's payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an
         * order's payment.
         */
        "object": CheckoutSession;
    };
    /** Shape $ (Value): string.  Value enum: "checkout_session.created". */
    "event_type"?: "checkout_session.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_checkout_session_expired_installed_merchants}. The
 * `checkout_session.expired` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_checkout_session_expired_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CheckoutSession}. A session in
     * which a buyer completes an order's payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an
         * order's payment.
         */
        "object": CheckoutSession;
    };
    /** Shape $ (Value): string.  Value enum: "checkout_session.expired". */
    "event_type"?: "checkout_session.expired" | (string & {});
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
 * Shape $ (Value): {@link Webhook_checkout_session_expired_merchant}. The
 * `checkout_session.expired` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_checkout_session_expired_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CheckoutSession}. A session in
     * which a buyer completes an order's payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an
         * order's payment.
         */
        "object": CheckoutSession;
    };
    /** Shape $ (Value): string.  Value enum: "checkout_session.expired". */
    "event_type"?: "checkout_session.expired" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_checkout_session_invalidated_installed_merchants}. The
 * `checkout_session.invalidated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_checkout_session_invalidated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CheckoutSession}. A session in
     * which a buyer completes an order's payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an
         * order's payment.
         */
        "object": CheckoutSession;
    };
    /** Shape $ (Value): string.  Value enum: "checkout_session.invalidated". */
    "event_type"?: "checkout_session.invalidated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_checkout_session_invalidated_merchant}. The
 * `checkout_session.invalidated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_checkout_session_invalidated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CheckoutSession}. A session in
     * which a buyer completes an order's payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an
         * order's payment.
         */
        "object": CheckoutSession;
    };
    /** Shape $ (Value): string.  Value enum: "checkout_session.invalidated". */
    "event_type"?: "checkout_session.invalidated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_checkout_session_paid_installed_merchants}. The
 * `checkout_session.paid` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_checkout_session_paid_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CheckoutSession}. A session in
     * which a buyer completes an order's payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an
         * order's payment.
         */
        "object": CheckoutSession;
    };
    /** Shape $ (Value): string.  Value enum: "checkout_session.paid". */
    "event_type"?: "checkout_session.paid" | (string & {});
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
 * Shape $ (Value): {@link Webhook_checkout_session_paid_merchant}. The `checkout_session.paid`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_checkout_session_paid_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CheckoutSession}. A session in
     * which a buyer completes an order's payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an
         * order's payment.
         */
        "object": CheckoutSession;
    };
    /** Shape $ (Value): string.  Value enum: "checkout_session.paid". */
    "event_type"?: "checkout_session.paid" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_checkout_session_partially_paid_installed_merchants}. The
 * `checkout_session.partially_paid` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_checkout_session_partially_paid_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CheckoutSession}. A session in
     * which a buyer completes an order's payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an
         * order's payment.
         */
        "object": CheckoutSession;
    };
    /** Shape $ (Value): string.  Value enum: "checkout_session.partially_paid". */
    "event_type"?: "checkout_session.partially_paid" | (string & {});
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
 * Shape $ (Value): {@link Webhook_checkout_session_partially_paid_merchant}. The
 * `checkout_session.partially_paid` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_checkout_session_partially_paid_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CheckoutSession}. A session in
     * which a buyer completes an order's payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an
         * order's payment.
         */
        "object": CheckoutSession;
    };
    /** Shape $ (Value): string.  Value enum: "checkout_session.partially_paid". */
    "event_type"?: "checkout_session.partially_paid" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_credit_note_allocation_created_installed_merchants}. The
 * `credit_note_allocation.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_credit_note_allocation_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CreditNoteAllocation}. One
     * application of credit to the invoice. Allocations are append-only: a reversal sets
     * reversed_at rather than removing the row.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CreditNoteAllocation}. One application of credit to the invoice.
         * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
         */
        "object": CreditNoteAllocation;
    };
    /** Shape $ (Value): string.  Value enum: "credit_note_allocation.created". */
    "event_type"?: "credit_note_allocation.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_credit_note_allocation_created_merchant}. The
 * `credit_note_allocation.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_credit_note_allocation_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CreditNoteAllocation}. One
     * application of credit to the invoice. Allocations are append-only: a reversal sets
     * reversed_at rather than removing the row.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CreditNoteAllocation}. One application of credit to the invoice.
         * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
         */
        "object": CreditNoteAllocation;
    };
    /** Shape $ (Value): string.  Value enum: "credit_note_allocation.created". */
    "event_type"?: "credit_note_allocation.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_credit_note_allocation_reversed_installed_merchants}. The
 * `credit_note_allocation.reversed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_credit_note_allocation_reversed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CreditNoteAllocation}. One
     * application of credit to the invoice. Allocations are append-only: a reversal sets
     * reversed_at rather than removing the row.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CreditNoteAllocation}. One application of credit to the invoice.
         * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
         */
        "object": CreditNoteAllocation;
    };
    /** Shape $ (Value): string.  Value enum: "credit_note_allocation.reversed". */
    "event_type"?: "credit_note_allocation.reversed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_credit_note_allocation_reversed_merchant}. The
 * `credit_note_allocation.reversed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_credit_note_allocation_reversed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CreditNoteAllocation}. One
     * application of credit to the invoice. Allocations are append-only: a reversal sets
     * reversed_at rather than removing the row.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CreditNoteAllocation}. One application of credit to the invoice.
         * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
         */
        "object": CreditNoteAllocation;
    };
    /** Shape $ (Value): string.  Value enum: "credit_note_allocation.reversed". */
    "event_type"?: "credit_note_allocation.reversed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_credit_note_created_installed_merchants}. The
 * `credit_note.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_credit_note_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CreditNote}. A correction against
     * an issued invoice. Credit notes reduce what is owed; refunds return what was already
     * collected.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CreditNote}. A correction against an issued invoice. Credit
         * notes reduce what is owed; refunds return what was already collected.
         */
        "object": CreditNote;
    };
    /** Shape $ (Value): string.  Value enum: "credit_note.created". */
    "event_type"?: "credit_note.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_credit_note_created_merchant}. The `credit_note.created` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_credit_note_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CreditNote}. A correction against
     * an issued invoice. Credit notes reduce what is owed; refunds return what was already
     * collected.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CreditNote}. A correction against an issued invoice. Credit
         * notes reduce what is owed; refunds return what was already collected.
         */
        "object": CreditNote;
    };
    /** Shape $ (Value): string.  Value enum: "credit_note.created". */
    "event_type"?: "credit_note.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_credit_note_issued_installed_merchants}. The
 * `credit_note.issued` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_credit_note_issued_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CreditNote}. A correction against
     * an issued invoice. Credit notes reduce what is owed; refunds return what was already
     * collected.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CreditNote}. A correction against an issued invoice. Credit
         * notes reduce what is owed; refunds return what was already collected.
         */
        "object": CreditNote;
    };
    /** Shape $ (Value): string.  Value enum: "credit_note.issued". */
    "event_type"?: "credit_note.issued" | (string & {});
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
 * Shape $ (Value): {@link Webhook_credit_note_issued_merchant}. The `credit_note.issued` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_credit_note_issued_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CreditNote}. A correction against
     * an issued invoice. Credit notes reduce what is owed; refunds return what was already
     * collected.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CreditNote}. A correction against an issued invoice. Credit
         * notes reduce what is owed; refunds return what was already collected.
         */
        "object": CreditNote;
    };
    /** Shape $ (Value): string.  Value enum: "credit_note.issued". */
    "event_type"?: "credit_note.issued" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_credit_note_updated_installed_merchants}. The
 * `credit_note.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_credit_note_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CreditNote}. A correction against
     * an issued invoice. Credit notes reduce what is owed; refunds return what was already
     * collected.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CreditNote}. A correction against an issued invoice. Credit
         * notes reduce what is owed; refunds return what was already collected.
         */
        "object": CreditNote;
    };
    /** Shape $ (Value): string.  Value enum: "credit_note.updated". */
    "event_type"?: "credit_note.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_credit_note_updated_merchant}. The `credit_note.updated` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_credit_note_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CreditNote}. A correction against
     * an issued invoice. Credit notes reduce what is owed; refunds return what was already
     * collected.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CreditNote}. A correction against an issued invoice. Credit
         * notes reduce what is owed; refunds return what was already collected.
         */
        "object": CreditNote;
    };
    /** Shape $ (Value): string.  Value enum: "credit_note.updated". */
    "event_type"?: "credit_note.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_credit_note_voided_installed_merchants}. The
 * `credit_note.voided` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_credit_note_voided_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CreditNote}. A correction against
     * an issued invoice. Credit notes reduce what is owed; refunds return what was already
     * collected.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CreditNote}. A correction against an issued invoice. Credit
         * notes reduce what is owed; refunds return what was already collected.
         */
        "object": CreditNote;
    };
    /** Shape $ (Value): string.  Value enum: "credit_note.voided". */
    "event_type"?: "credit_note.voided" | (string & {});
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
 * Shape $ (Value): {@link Webhook_credit_note_voided_merchant}. The `credit_note.voided` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_credit_note_voided_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CreditNote}. A correction against
     * an issued invoice. Credit notes reduce what is owed; refunds return what was already
     * collected.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CreditNote}. A correction against an issued invoice. Credit
         * notes reduce what is owed; refunds return what was already collected.
         */
        "object": CreditNote;
    };
    /** Shape $ (Value): string.  Value enum: "credit_note.voided". */
    "event_type"?: "credit_note.voided" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_custom_domain_archived_merchant}. The `custom_domain.archived`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_custom_domain_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CustomDomain}. A merchant
     * hostname for hosted checkout or customer account pages.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CustomDomain}. A merchant hostname for hosted checkout or
         * customer account pages.
         */
        "object": CustomDomain;
    };
    /** Shape $ (Value): string.  Value enum: "custom_domain.archived". */
    "event_type"?: "custom_domain.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_custom_domain_updated_merchant}. The `custom_domain.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_custom_domain_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CustomDomain}. A merchant
     * hostname for hosted checkout or customer account pages.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CustomDomain}. A merchant hostname for hosted checkout or
         * customer account pages.
         */
        "object": CustomDomain;
    };
    /** Shape $ (Value): string.  Value enum: "custom_domain.updated". */
    "event_type"?: "custom_domain.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_customer_created_installed_merchants}. The `customer.created`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_customer_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Customer}. A merchant's customer
     * profile.
     */
    "data"?: {
        /** Shape $ (Value): {@link Customer}. A merchant's customer profile. */
        "object": Customer;
    };
    /** Shape $ (Value): string.  Value enum: "customer.created". */
    "event_type"?: "customer.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_customer_created_merchant}. The `customer.created` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_customer_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Customer}. A merchant's customer
     * profile.
     */
    "data"?: {
        /** Shape $ (Value): {@link Customer}. A merchant's customer profile. */
        "object": Customer;
    };
    /** Shape $ (Value): string.  Value enum: "customer.created". */
    "event_type"?: "customer.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_customer_deleted_installed_merchants}. The `customer.deleted`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_customer_deleted_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Customer}. A merchant's customer
     * profile.
     */
    "data"?: {
        /** Shape $ (Value): {@link Customer}. A merchant's customer profile. */
        "object": Customer;
    };
    /** Shape $ (Value): string.  Value enum: "customer.deleted". */
    "event_type"?: "customer.deleted" | (string & {});
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
 * Shape $ (Value): {@link Webhook_customer_deleted_merchant}. The `customer.deleted` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_customer_deleted_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Customer}. A merchant's customer
     * profile.
     */
    "data"?: {
        /** Shape $ (Value): {@link Customer}. A merchant's customer profile. */
        "object": Customer;
    };
    /** Shape $ (Value): string.  Value enum: "customer.deleted". */
    "event_type"?: "customer.deleted" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_customer_deletion_request_completed_installed_merchants}. The
 * `customer_deletion_request.completed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type Webhook_customer_deletion_request_completed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CustomerDeletionRequest}. A
     * request to delete a customer's personal information.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CustomerDeletionRequest}. A request to delete a customer's
         * personal information.
         */
        "object": CustomerDeletionRequest;
    };
    /** Shape $ (Value): string.  Value enum: "customer_deletion_request.completed". */
    "event_type"?: "customer_deletion_request.completed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_customer_deletion_request_completed_merchant}. The
 * `customer_deletion_request.completed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_customer_deletion_request_completed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CustomerDeletionRequest}. A
     * request to delete a customer's personal information.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CustomerDeletionRequest}. A request to delete a customer's
         * personal information.
         */
        "object": CustomerDeletionRequest;
    };
    /** Shape $ (Value): string.  Value enum: "customer_deletion_request.completed". */
    "event_type"?: "customer_deletion_request.completed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_customer_deletion_request_created_installed_merchants}. The
 * `customer_deletion_request.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_customer_deletion_request_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CustomerDeletionRequest}. A
     * request to delete a customer's personal information.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CustomerDeletionRequest}. A request to delete a customer's
         * personal information.
         */
        "object": CustomerDeletionRequest;
    };
    /** Shape $ (Value): string.  Value enum: "customer_deletion_request.created". */
    "event_type"?: "customer_deletion_request.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_customer_deletion_request_created_merchant}. The
 * `customer_deletion_request.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_customer_deletion_request_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CustomerDeletionRequest}. A
     * request to delete a customer's personal information.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CustomerDeletionRequest}. A request to delete a customer's
         * personal information.
         */
        "object": CustomerDeletionRequest;
    };
    /** Shape $ (Value): string.  Value enum: "customer_deletion_request.created". */
    "event_type"?: "customer_deletion_request.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_customer_deletion_request_failed_installed_merchants}. The
 * `customer_deletion_request.failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_customer_deletion_request_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CustomerDeletionRequest}. A
     * request to delete a customer's personal information.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CustomerDeletionRequest}. A request to delete a customer's
         * personal information.
         */
        "object": CustomerDeletionRequest;
    };
    /** Shape $ (Value): string.  Value enum: "customer_deletion_request.failed". */
    "event_type"?: "customer_deletion_request.failed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_customer_deletion_request_failed_merchant}. The
 * `customer_deletion_request.failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_customer_deletion_request_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CustomerDeletionRequest}. A
     * request to delete a customer's personal information.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CustomerDeletionRequest}. A request to delete a customer's
         * personal information.
         */
        "object": CustomerDeletionRequest;
    };
    /** Shape $ (Value): string.  Value enum: "customer_deletion_request.failed". */
    "event_type"?: "customer_deletion_request.failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_customer_deletion_request_processing_installed_merchants}. The
 * `customer_deletion_request.processing` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type Webhook_customer_deletion_request_processing_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CustomerDeletionRequest}. A
     * request to delete a customer's personal information.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CustomerDeletionRequest}. A request to delete a customer's
         * personal information.
         */
        "object": CustomerDeletionRequest;
    };
    /** Shape $ (Value): string.  Value enum: "customer_deletion_request.processing". */
    "event_type"?: "customer_deletion_request.processing" | (string & {});
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
 * Shape $ (Value): {@link Webhook_customer_deletion_request_processing_merchant}. The
 * `customer_deletion_request.processing` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_customer_deletion_request_processing_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CustomerDeletionRequest}. A
     * request to delete a customer's personal information.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CustomerDeletionRequest}. A request to delete a customer's
         * personal information.
         */
        "object": CustomerDeletionRequest;
    };
    /** Shape $ (Value): string.  Value enum: "customer_deletion_request.processing". */
    "event_type"?: "customer_deletion_request.processing" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_customer_deletion_request_rejected_installed_merchants}. The
 * `customer_deletion_request.rejected` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_customer_deletion_request_rejected_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CustomerDeletionRequest}. A
     * request to delete a customer's personal information.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CustomerDeletionRequest}. A request to delete a customer's
         * personal information.
         */
        "object": CustomerDeletionRequest;
    };
    /** Shape $ (Value): string.  Value enum: "customer_deletion_request.rejected". */
    "event_type"?: "customer_deletion_request.rejected" | (string & {});
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
 * Shape $ (Value): {@link Webhook_customer_deletion_request_rejected_merchant}. The
 * `customer_deletion_request.rejected` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_customer_deletion_request_rejected_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link CustomerDeletionRequest}. A
     * request to delete a customer's personal information.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link CustomerDeletionRequest}. A request to delete a customer's
         * personal information.
         */
        "object": CustomerDeletionRequest;
    };
    /** Shape $ (Value): string.  Value enum: "customer_deletion_request.rejected". */
    "event_type"?: "customer_deletion_request.rejected" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_customer_updated_installed_merchants}. The `customer.updated`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_customer_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Customer}. A merchant's customer
     * profile.
     */
    "data"?: {
        /** Shape $ (Value): {@link Customer}. A merchant's customer profile. */
        "object": Customer;
    };
    /** Shape $ (Value): string.  Value enum: "customer.updated". */
    "event_type"?: "customer.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_customer_updated_merchant}. The `customer.updated` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_customer_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Customer}. A merchant's customer
     * profile.
     */
    "data"?: {
        /** Shape $ (Value): {@link Customer}. A merchant's customer profile. */
        "object": Customer;
    };
    /** Shape $ (Value): string.  Value enum: "customer.updated". */
    "event_type"?: "customer.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_location_set_activated_installed_merchants}. The
 * `delivery_location_set.activated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_delivery_location_set_activated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryLocationSet}. The
     * locations available to a delivery method.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryLocationSet}. The locations available to a delivery
         * method.
         */
        "object": DeliveryLocationSet;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_location_set.activated". */
    "event_type"?: "delivery_location_set.activated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_location_set_activated_merchant}. The
 * `delivery_location_set.activated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_delivery_location_set_activated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryLocationSet}. The
     * locations available to a delivery method.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryLocationSet}. The locations available to a delivery
         * method.
         */
        "object": DeliveryLocationSet;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_location_set.activated". */
    "event_type"?: "delivery_location_set.activated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_location_set_archived_installed_merchants}. The
 * `delivery_location_set.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_delivery_location_set_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryLocationSet}. The
     * locations available to a delivery method.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryLocationSet}. The locations available to a delivery
         * method.
         */
        "object": DeliveryLocationSet;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_location_set.archived". */
    "event_type"?: "delivery_location_set.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_location_set_archived_merchant}. The
 * `delivery_location_set.archived` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_delivery_location_set_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryLocationSet}. The
     * locations available to a delivery method.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryLocationSet}. The locations available to a delivery
         * method.
         */
        "object": DeliveryLocationSet;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_location_set.archived". */
    "event_type"?: "delivery_location_set.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_location_set_created_installed_merchants}. The
 * `delivery_location_set.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_delivery_location_set_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryLocationSet}. The
     * locations available to a delivery method.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryLocationSet}. The locations available to a delivery
         * method.
         */
        "object": DeliveryLocationSet;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_location_set.created". */
    "event_type"?: "delivery_location_set.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_location_set_created_merchant}. The
 * `delivery_location_set.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_delivery_location_set_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryLocationSet}. The
     * locations available to a delivery method.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryLocationSet}. The locations available to a delivery
         * method.
         */
        "object": DeliveryLocationSet;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_location_set.created". */
    "event_type"?: "delivery_location_set.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_location_set_deactivated_installed_merchants}. The
 * `delivery_location_set.deactivated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_delivery_location_set_deactivated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryLocationSet}. The
     * locations available to a delivery method.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryLocationSet}. The locations available to a delivery
         * method.
         */
        "object": DeliveryLocationSet;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_location_set.deactivated". */
    "event_type"?: "delivery_location_set.deactivated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_location_set_deactivated_merchant}. The
 * `delivery_location_set.deactivated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_delivery_location_set_deactivated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryLocationSet}. The
     * locations available to a delivery method.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryLocationSet}. The locations available to a delivery
         * method.
         */
        "object": DeliveryLocationSet;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_location_set.deactivated". */
    "event_type"?: "delivery_location_set.deactivated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_location_set_updated_installed_merchants}. The
 * `delivery_location_set.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_delivery_location_set_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryLocationSet}. The
     * locations available to a delivery method.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryLocationSet}. The locations available to a delivery
         * method.
         */
        "object": DeliveryLocationSet;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_location_set.updated". */
    "event_type"?: "delivery_location_set.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_location_set_updated_merchant}. The
 * `delivery_location_set.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_delivery_location_set_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryLocationSet}. The
     * locations available to a delivery method.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryLocationSet}. The locations available to a delivery
         * method.
         */
        "object": DeliveryLocationSet;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_location_set.updated". */
    "event_type"?: "delivery_location_set.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_method_activated_installed_merchants}. The
 * `delivery_method.activated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_method_activated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryMethod}. A configured
     * shipping, pickup, local delivery, or service option.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
         * or service option.
         */
        "object": DeliveryMethod;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_method.activated". */
    "event_type"?: "delivery_method.activated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_method_activated_merchant}. The
 * `delivery_method.activated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_delivery_method_activated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryMethod}. A configured
     * shipping, pickup, local delivery, or service option.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
         * or service option.
         */
        "object": DeliveryMethod;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_method.activated". */
    "event_type"?: "delivery_method.activated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_method_archived_installed_merchants}. The
 * `delivery_method.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_method_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryMethod}. A configured
     * shipping, pickup, local delivery, or service option.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
         * or service option.
         */
        "object": DeliveryMethod;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_method.archived". */
    "event_type"?: "delivery_method.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_method_archived_merchant}. The
 * `delivery_method.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_delivery_method_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryMethod}. A configured
     * shipping, pickup, local delivery, or service option.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
         * or service option.
         */
        "object": DeliveryMethod;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_method.archived". */
    "event_type"?: "delivery_method.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_method_created_installed_merchants}. The
 * `delivery_method.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_method_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryMethod}. A configured
     * shipping, pickup, local delivery, or service option.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
         * or service option.
         */
        "object": DeliveryMethod;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_method.created". */
    "event_type"?: "delivery_method.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_method_created_merchant}. The `delivery_method.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_delivery_method_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryMethod}. A configured
     * shipping, pickup, local delivery, or service option.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
         * or service option.
         */
        "object": DeliveryMethod;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_method.created". */
    "event_type"?: "delivery_method.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_method_deactivated_installed_merchants}. The
 * `delivery_method.deactivated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_method_deactivated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryMethod}. A configured
     * shipping, pickup, local delivery, or service option.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
         * or service option.
         */
        "object": DeliveryMethod;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_method.deactivated". */
    "event_type"?: "delivery_method.deactivated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_method_deactivated_merchant}. The
 * `delivery_method.deactivated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_delivery_method_deactivated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryMethod}. A configured
     * shipping, pickup, local delivery, or service option.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
         * or service option.
         */
        "object": DeliveryMethod;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_method.deactivated". */
    "event_type"?: "delivery_method.deactivated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_method_updated_installed_merchants}. The
 * `delivery_method.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_method_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryMethod}. A configured
     * shipping, pickup, local delivery, or service option.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
         * or service option.
         */
        "object": DeliveryMethod;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_method.updated". */
    "event_type"?: "delivery_method.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_method_updated_merchant}. The `delivery_method.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_delivery_method_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryMethod}. A configured
     * shipping, pickup, local delivery, or service option.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
         * or service option.
         */
        "object": DeliveryMethod;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_method.updated". */
    "event_type"?: "delivery_method.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_profile_activated_installed_merchants}. The
 * `delivery_profile.activated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_profile_activated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryProfile}. Reusable
     * delivery rules assigned to catalog items.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
         * items.
         */
        "object": DeliveryProfile;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_profile.activated". */
    "event_type"?: "delivery_profile.activated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_profile_activated_merchant}. The
 * `delivery_profile.activated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_delivery_profile_activated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryProfile}. Reusable
     * delivery rules assigned to catalog items.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
         * items.
         */
        "object": DeliveryProfile;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_profile.activated". */
    "event_type"?: "delivery_profile.activated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_profile_archived_installed_merchants}. The
 * `delivery_profile.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_profile_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryProfile}. Reusable
     * delivery rules assigned to catalog items.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
         * items.
         */
        "object": DeliveryProfile;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_profile.archived". */
    "event_type"?: "delivery_profile.archived" | (string & {});
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
