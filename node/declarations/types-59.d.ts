import type { MerchantWebhookEnvelope } from './types-31.js';
import type { PaymentIntent, PartnerWebhookEnvelope, PaymentLink } from './types-35.js';
import type { PaymentMethod, PaymentReview, Payout, PayoutDestination } from './types-36.js';
import type { PayoutSettings, Product, ProductVariant, Promotion } from './types-37.js';
import type { PromotionCode } from './types-38.js';
/**
 * Shape $ (Value): {@link Webhook_payment_intent_expired_merchant}. The `payment_intent.expired`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payment_intent_expired_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
});
/**
 * Shape $ (Value): {@link Webhook_payment_intent_fulfillment_hold_updated_installed_merchants}.
 * The `payment_intent.fulfillment_hold_updated` webhook payload for the `installed_merchants`
 * event source. Fields shared by partner webhook payloads.
 */
export type Webhook_payment_intent_fulfillment_hold_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.fulfillment_hold_updated". */
    "event_type"?: "payment_intent.fulfillment_hold_updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_intent_fulfillment_hold_updated_merchant}. The
 * `payment_intent.fulfillment_hold_updated` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type Webhook_payment_intent_fulfillment_hold_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.fulfillment_hold_updated". */
    "event_type"?: "payment_intent.fulfillment_hold_updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_intent_payment_failed_installed_merchants}. The
 * `payment_intent.payment_failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_payment_intent_payment_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.payment_failed". */
    "event_type"?: "payment_intent.payment_failed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_intent_payment_failed_merchant}. The
 * `payment_intent.payment_failed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_payment_intent_payment_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.payment_failed". */
    "event_type"?: "payment_intent.payment_failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_intent_processing_installed_merchants}. The
 * `payment_intent.processing` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_payment_intent_processing_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.processing". */
    "event_type"?: "payment_intent.processing" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_intent_processing_merchant}. The
 * `payment_intent.processing` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_payment_intent_processing_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.processing". */
    "event_type"?: "payment_intent.processing" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_intent_requires_action_installed_merchants}. The
 * `payment_intent.requires_action` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_payment_intent_requires_action_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.requires_action". */
    "event_type"?: "payment_intent.requires_action" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_intent_requires_action_merchant}. The
 * `payment_intent.requires_action` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_payment_intent_requires_action_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.requires_action". */
    "event_type"?: "payment_intent.requires_action" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_intent_requires_capture_installed_merchants}. The
 * `payment_intent.requires_capture` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_payment_intent_requires_capture_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.requires_capture". */
    "event_type"?: "payment_intent.requires_capture" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_intent_requires_capture_merchant}. The
 * `payment_intent.requires_capture` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_payment_intent_requires_capture_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.requires_capture". */
    "event_type"?: "payment_intent.requires_capture" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_intent_succeeded_installed_merchants}. The
 * `payment_intent.succeeded` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_payment_intent_succeeded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.succeeded". */
    "event_type"?: "payment_intent.succeeded" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_intent_succeeded_merchant}. The
 * `payment_intent.succeeded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_payment_intent_succeeded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.succeeded". */
    "event_type"?: "payment_intent.succeeded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_intent_updated_installed_merchants}. The
 * `payment_intent.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_payment_intent_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.updated". */
    "event_type"?: "payment_intent.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_intent_updated_merchant}. The `payment_intent.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payment_intent_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "payment_intent.updated". */
    "event_type"?: "payment_intent.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_link_created_installed_merchants}. The
 * `payment_link.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_payment_link_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentLink}. A reusable link
     * that opens checkout.
     */
    "data"?: {
        /** Shape $ (Value): {@link PaymentLink}. A reusable link that opens checkout. */
        "object": PaymentLink;
    };
    /** Shape $ (Value): string.  Value enum: "payment_link.created". */
    "event_type"?: "payment_link.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_link_created_merchant}. The `payment_link.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payment_link_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentLink}. A reusable link
     * that opens checkout.
     */
    "data"?: {
        /** Shape $ (Value): {@link PaymentLink}. A reusable link that opens checkout. */
        "object": PaymentLink;
    };
    /** Shape $ (Value): string.  Value enum: "payment_link.created". */
    "event_type"?: "payment_link.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_link_updated_installed_merchants}. The
 * `payment_link.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_payment_link_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentLink}. A reusable link
     * that opens checkout.
     */
    "data"?: {
        /** Shape $ (Value): {@link PaymentLink}. A reusable link that opens checkout. */
        "object": PaymentLink;
    };
    /** Shape $ (Value): string.  Value enum: "payment_link.updated". */
    "event_type"?: "payment_link.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_link_updated_merchant}. The `payment_link.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payment_link_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentLink}. A reusable link
     * that opens checkout.
     */
    "data"?: {
        /** Shape $ (Value): {@link PaymentLink}. A reusable link that opens checkout. */
        "object": PaymentLink;
    };
    /** Shape $ (Value): string.  Value enum: "payment_link.updated". */
    "event_type"?: "payment_link.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_method_activated_installed_merchants}. The
 * `payment_method.activated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_payment_method_activated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentMethod}. A customer's
     * saved payment details.
     */
    "data"?: {
        /** Shape $ (Value): {@link PaymentMethod}. A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Shape $ (Value): string.  Value enum: "payment_method.activated". */
    "event_type"?: "payment_method.activated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_method_activated_merchant}. The
 * `payment_method.activated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_payment_method_activated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentMethod}. A customer's
     * saved payment details.
     */
    "data"?: {
        /** Shape $ (Value): {@link PaymentMethod}. A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Shape $ (Value): string.  Value enum: "payment_method.activated". */
    "event_type"?: "payment_method.activated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_method_archived_installed_merchants}. The
 * `payment_method.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_payment_method_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentMethod}. A customer's
     * saved payment details.
     */
    "data"?: {
        /** Shape $ (Value): {@link PaymentMethod}. A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Shape $ (Value): string.  Value enum: "payment_method.archived". */
    "event_type"?: "payment_method.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_method_archived_merchant}. The `payment_method.archived`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payment_method_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentMethod}. A customer's
     * saved payment details.
     */
    "data"?: {
        /** Shape $ (Value): {@link PaymentMethod}. A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Shape $ (Value): string.  Value enum: "payment_method.archived". */
    "event_type"?: "payment_method.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_method_failed_installed_merchants}. The
 * `payment_method.failed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_payment_method_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentMethod}. A customer's
     * saved payment details.
     */
    "data"?: {
        /** Shape $ (Value): {@link PaymentMethod}. A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Shape $ (Value): string.  Value enum: "payment_method.failed". */
    "event_type"?: "payment_method.failed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_method_failed_merchant}. The `payment_method.failed`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payment_method_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentMethod}. A customer's
     * saved payment details.
     */
    "data"?: {
        /** Shape $ (Value): {@link PaymentMethod}. A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Shape $ (Value): string.  Value enum: "payment_method.failed". */
    "event_type"?: "payment_method.failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_review_closed_installed_merchants}. The
 * `payment_review.closed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_payment_review_closed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentReview}. A payment review
     * requiring a merchant decision.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PaymentReview}. A payment review requiring a merchant decision.
         */
        "object": PaymentReview;
    };
    /** Shape $ (Value): string.  Value enum: "payment_review.closed". */
    "event_type"?: "payment_review.closed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_review_closed_merchant}. The `payment_review.closed`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payment_review_closed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentReview}. A payment review
     * requiring a merchant decision.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PaymentReview}. A payment review requiring a merchant decision.
         */
        "object": PaymentReview;
    };
    /** Shape $ (Value): string.  Value enum: "payment_review.closed". */
    "event_type"?: "payment_review.closed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_review_opened_installed_merchants}. The
 * `payment_review.opened` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_payment_review_opened_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentReview}. A payment review
     * requiring a merchant decision.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PaymentReview}. A payment review requiring a merchant decision.
         */
        "object": PaymentReview;
    };
    /** Shape $ (Value): string.  Value enum: "payment_review.opened". */
    "event_type"?: "payment_review.opened" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_review_opened_merchant}. The `payment_review.opened`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payment_review_opened_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentReview}. A payment review
     * requiring a merchant decision.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PaymentReview}. A payment review requiring a merchant decision.
         */
        "object": PaymentReview;
    };
    /** Shape $ (Value): string.  Value enum: "payment_review.opened". */
    "event_type"?: "payment_review.opened" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payment_review_reopened_installed_merchants}. The
 * `payment_review.reopened` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_payment_review_reopened_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentReview}. A payment review
     * requiring a merchant decision.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PaymentReview}. A payment review requiring a merchant decision.
         */
        "object": PaymentReview;
    };
    /** Shape $ (Value): string.  Value enum: "payment_review.reopened". */
    "event_type"?: "payment_review.reopened" | (string & {});
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
 * Shape $ (Value): {@link Webhook_payment_review_reopened_merchant}. The `payment_review.reopened`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payment_review_reopened_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PaymentReview}. A payment review
     * requiring a merchant decision.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PaymentReview}. A payment review requiring a merchant decision.
         */
        "object": PaymentReview;
    };
    /** Shape $ (Value): string.  Value enum: "payment_review.reopened". */
    "event_type"?: "payment_review.reopened" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payout_canceled_merchant}. The `payout.canceled` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payout_canceled_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Payout}. Funds sent from a
     * merchant balance to a payout destination.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Payout}. Funds sent from a merchant balance to a payout
         * destination.
         */
        "object": Payout;
    };
    /** Shape $ (Value): string.  Value enum: "payout.canceled". */
    "event_type"?: "payout.canceled" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payout_created_merchant}. The `payout.created` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payout_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Payout}. Funds sent from a
     * merchant balance to a payout destination.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Payout}. Funds sent from a merchant balance to a payout
         * destination.
         */
        "object": Payout;
    };
    /** Shape $ (Value): string.  Value enum: "payout.created". */
    "event_type"?: "payout.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payout_destination_archived_merchant}. The
 * `payout_destination.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_payout_destination_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PayoutDestination}. The account
     * that receives merchant payouts.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PayoutDestination}. The account that receives merchant payouts.
         */
        "object": PayoutDestination;
    };
    /** Shape $ (Value): string.  Value enum: "payout_destination.archived". */
    "event_type"?: "payout_destination.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payout_destination_created_merchant}. The
 * `payout_destination.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_payout_destination_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PayoutDestination}. The account
     * that receives merchant payouts.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PayoutDestination}. The account that receives merchant payouts.
         */
        "object": PayoutDestination;
    };
    /** Shape $ (Value): string.  Value enum: "payout_destination.created". */
    "event_type"?: "payout_destination.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payout_destination_disabled_merchant}. The
 * `payout_destination.disabled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_payout_destination_disabled_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PayoutDestination}. The account
     * that receives merchant payouts.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PayoutDestination}. The account that receives merchant payouts.
         */
        "object": PayoutDestination;
    };
    /** Shape $ (Value): string.  Value enum: "payout_destination.disabled". */
    "event_type"?: "payout_destination.disabled" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payout_destination_updated_merchant}. The
 * `payout_destination.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_payout_destination_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PayoutDestination}. The account
     * that receives merchant payouts.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PayoutDestination}. The account that receives merchant payouts.
         */
        "object": PayoutDestination;
    };
    /** Shape $ (Value): string.  Value enum: "payout_destination.updated". */
    "event_type"?: "payout_destination.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payout_failed_merchant}. The `payout.failed` webhook payload for
 * the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payout_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Payout}. Funds sent from a
     * merchant balance to a payout destination.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Payout}. Funds sent from a merchant balance to a payout
         * destination.
         */
        "object": Payout;
    };
    /** Shape $ (Value): string.  Value enum: "payout.failed". */
    "event_type"?: "payout.failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payout_paid_merchant}. The `payout.paid` webhook payload for the
 * `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payout_paid_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Payout}. Funds sent from a
     * merchant balance to a payout destination.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Payout}. Funds sent from a merchant balance to a payout
         * destination.
         */
        "object": Payout;
    };
    /** Shape $ (Value): string.  Value enum: "payout.paid". */
    "event_type"?: "payout.paid" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payout_reversed_merchant}. The `payout.reversed` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payout_reversed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Payout}. Funds sent from a
     * merchant balance to a payout destination.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Payout}. Funds sent from a merchant balance to a payout
         * destination.
         */
        "object": Payout;
    };
    /** Shape $ (Value): string.  Value enum: "payout.reversed". */
    "event_type"?: "payout.reversed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payout_settings_updated_merchant}. The `payout_settings.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payout_settings_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PayoutSettings}. The merchant's
     * payout schedule and preferences.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PayoutSettings}. The merchant's payout schedule and preferences.
         */
        "object": PayoutSettings;
    };
    /** Shape $ (Value): string.  Value enum: "payout_settings.updated". */
    "event_type"?: "payout_settings.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_payout_updated_merchant}. The `payout.updated` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payout_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Payout}. Funds sent from a
     * merchant balance to a payout destination.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Payout}. Funds sent from a merchant balance to a payout
         * destination.
         */
        "object": Payout;
    };
    /** Shape $ (Value): string.  Value enum: "payout.updated". */
    "event_type"?: "payout.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_product_archived_installed_merchants}. The `product.archived`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_product_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Product}. An item offered in the
     * merchant's catalog.
     */
    "data"?: {
        /** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Shape $ (Value): string.  Value enum: "product.archived". */
    "event_type"?: "product.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_product_archived_merchant}. The `product.archived` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_product_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Product}. An item offered in the
     * merchant's catalog.
     */
    "data"?: {
        /** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Shape $ (Value): string.  Value enum: "product.archived". */
    "event_type"?: "product.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_product_created_installed_merchants}. The `product.created`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_product_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Product}. An item offered in the
     * merchant's catalog.
     */
    "data"?: {
        /** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Shape $ (Value): string.  Value enum: "product.created". */
    "event_type"?: "product.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_product_created_merchant}. The `product.created` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_product_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Product}. An item offered in the
     * merchant's catalog.
     */
    "data"?: {
        /** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Shape $ (Value): string.  Value enum: "product.created". */
    "event_type"?: "product.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_product_updated_installed_merchants}. The `product.updated`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_product_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Product}. An item offered in the
     * merchant's catalog.
     */
    "data"?: {
        /** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Shape $ (Value): string.  Value enum: "product.updated". */
    "event_type"?: "product.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_product_updated_merchant}. The `product.updated` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_product_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Product}. An item offered in the
     * merchant's catalog.
     */
    "data"?: {
        /** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Shape $ (Value): string.  Value enum: "product.updated". */
    "event_type"?: "product.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_product_variant_archived_installed_merchants}. The
 * `product_variant.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_product_variant_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data"?: {
        /** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Shape $ (Value): string.  Value enum: "product_variant.archived". */
    "event_type"?: "product_variant.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_product_variant_archived_merchant}. The
 * `product_variant.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_product_variant_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data"?: {
        /** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Shape $ (Value): string.  Value enum: "product_variant.archived". */
    "event_type"?: "product_variant.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_product_variant_created_installed_merchants}. The
 * `product_variant.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_product_variant_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data"?: {
        /** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Shape $ (Value): string.  Value enum: "product_variant.created". */
    "event_type"?: "product_variant.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_product_variant_created_merchant}. The `product_variant.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_product_variant_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data"?: {
        /** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Shape $ (Value): string.  Value enum: "product_variant.created". */
    "event_type"?: "product_variant.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_product_variant_updated_installed_merchants}. The
 * `product_variant.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_product_variant_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data"?: {
        /** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Shape $ (Value): string.  Value enum: "product_variant.updated". */
    "event_type"?: "product_variant.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_product_variant_updated_merchant}. The `product_variant.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_product_variant_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data"?: {
        /** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Shape $ (Value): string.  Value enum: "product_variant.updated". */
    "event_type"?: "product_variant.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_promotion_archived_installed_merchants}. The
 * `promotion.archived` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_promotion_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Promotion}. Promotion evaluation
     * order: manual discounts stay, do not count toward the cap, and are ignored by combines_with.
     * Frozen subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Promotion}. Promotion evaluation order: manual discounts stay,
         * do not count toward the cap, and are ignored by combines_with. Frozen subscription-term
         * promotions are admitted first and are exempt from exclusivity, combines_with, and the
         * cap. Candidates include codes being applied, existing promotion discounts, and
         * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
         * member, then the larger standalone discount, earlier created_at, and lower promotion_id.
         * Remaining candidates rank by standalone discount, then earlier created_at and lower
         * promotion_id; each is admitted unless max_promotions_per_order is reached or both
         * promotions do not allow each other's discount class. Admitted promotions price line item
         * first, then order, then service charge. A zero-value promotion is dropped and selection
         * runs again.
         */
        "object": Promotion;
    };
    /** Shape $ (Value): string.  Value enum: "promotion.archived". */
    "event_type"?: "promotion.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_promotion_archived_merchant}. The `promotion.archived` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_promotion_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Promotion}. Promotion evaluation
     * order: manual discounts stay, do not count toward the cap, and are ignored by combines_with.
     * Frozen subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Promotion}. Promotion evaluation order: manual discounts stay,
         * do not count toward the cap, and are ignored by combines_with. Frozen subscription-term
         * promotions are admitted first and are exempt from exclusivity, combines_with, and the
         * cap. Candidates include codes being applied, existing promotion discounts, and
         * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
         * member, then the larger standalone discount, earlier created_at, and lower promotion_id.
         * Remaining candidates rank by standalone discount, then earlier created_at and lower
         * promotion_id; each is admitted unless max_promotions_per_order is reached or both
         * promotions do not allow each other's discount class. Admitted promotions price line item
         * first, then order, then service charge. A zero-value promotion is dropped and selection
         * runs again.
         */
        "object": Promotion;
    };
    /** Shape $ (Value): string.  Value enum: "promotion.archived". */
    "event_type"?: "promotion.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_promotion_code_archived_installed_merchants}. The
 * `promotion_code.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_promotion_code_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PromotionCode}. A code a buyer
     * enters to claim a promotion.
     */
    "data"?: {
        /** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Shape $ (Value): string.  Value enum: "promotion_code.archived". */
    "event_type"?: "promotion_code.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_promotion_code_archived_merchant}. The `promotion_code.archived`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_promotion_code_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PromotionCode}. A code a buyer
     * enters to claim a promotion.
     */
    "data"?: {
        /** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Shape $ (Value): string.  Value enum: "promotion_code.archived". */
    "event_type"?: "promotion_code.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_promotion_code_created_installed_merchants}. The
 * `promotion_code.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_promotion_code_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PromotionCode}. A code a buyer
     * enters to claim a promotion.
     */
    "data"?: {
        /** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Shape $ (Value): string.  Value enum: "promotion_code.created". */
    "event_type"?: "promotion_code.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_promotion_code_created_merchant}. The `promotion_code.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_promotion_code_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PromotionCode}. A code a buyer
     * enters to claim a promotion.
     */
    "data"?: {
        /** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Shape $ (Value): string.  Value enum: "promotion_code.created". */
    "event_type"?: "promotion_code.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_promotion_code_updated_installed_merchants}. The
 * `promotion_code.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_promotion_code_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PromotionCode}. A code a buyer
     * enters to claim a promotion.
     */
    "data"?: {
        /** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Shape $ (Value): string.  Value enum: "promotion_code.updated". */
    "event_type"?: "promotion_code.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_promotion_code_updated_merchant}. The `promotion_code.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_promotion_code_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PromotionCode}. A code a buyer
     * enters to claim a promotion.
     */
    "data"?: {
        /** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Shape $ (Value): string.  Value enum: "promotion_code.updated". */
    "event_type"?: "promotion_code.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_promotion_created_installed_merchants}. The `promotion.created`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_promotion_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Promotion}. Promotion evaluation
     * order: manual discounts stay, do not count toward the cap, and are ignored by combines_with.
     * Frozen subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Promotion}. Promotion evaluation order: manual discounts stay,
         * do not count toward the cap, and are ignored by combines_with. Frozen subscription-term
         * promotions are admitted first and are exempt from exclusivity, combines_with, and the
         * cap. Candidates include codes being applied, existing promotion discounts, and
         * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
         * member, then the larger standalone discount, earlier created_at, and lower promotion_id.
         * Remaining candidates rank by standalone discount, then earlier created_at and lower
         * promotion_id; each is admitted unless max_promotions_per_order is reached or both
         * promotions do not allow each other's discount class. Admitted promotions price line item
         * first, then order, then service charge. A zero-value promotion is dropped and selection
         * runs again.
         */
        "object": Promotion;
    };
    /** Shape $ (Value): string.  Value enum: "promotion.created". */
    "event_type"?: "promotion.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_promotion_created_merchant}. The `promotion.created` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_promotion_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Promotion}. Promotion evaluation
     * order: manual discounts stay, do not count toward the cap, and are ignored by combines_with.
     * Frozen subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Promotion}. Promotion evaluation order: manual discounts stay,
         * do not count toward the cap, and are ignored by combines_with. Frozen subscription-term
         * promotions are admitted first and are exempt from exclusivity, combines_with, and the
         * cap. Candidates include codes being applied, existing promotion discounts, and
         * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
         * member, then the larger standalone discount, earlier created_at, and lower promotion_id.
         * Remaining candidates rank by standalone discount, then earlier created_at and lower
         * promotion_id; each is admitted unless max_promotions_per_order is reached or both
         * promotions do not allow each other's discount class. Admitted promotions price line item
         * first, then order, then service charge. A zero-value promotion is dropped and selection
         * runs again.
         */
        "object": Promotion;
    };
    /** Shape $ (Value): string.  Value enum: "promotion.created". */
    "event_type"?: "promotion.created" | (string & {});
});
