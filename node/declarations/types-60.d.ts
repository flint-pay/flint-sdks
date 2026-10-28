import type { Fulfillment, FulfillmentEvent } from './types-19.js';
import type { PartnerWebhookEnvelope } from './types-37.js';
import type { MerchantWebhookEnvelope } from './types-32.js';
import type { GiftCard, GiftCardLoad, GiftCardNotification } from './types-20.js';
import type { GiftCardRedemption, GiftCardTransaction } from './types-21.js';
import type { InventoryCount, InventoryLevel, InventoryReceipt } from './types-26.js';
import type { InventoryReservation, InventoryTransfer } from './types-27.js';
import type { Invoice } from './types-28.js';
/**
 * Shape $ (Value): {@link Webhook_fulfillment_created_installed_merchants}. The
 * `fulfillment.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_fulfillment_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Fulfillment}. Work required to
     * deliver an order's items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Fulfillment}. Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Shape $ (Value): string.  Value enum: "fulfillment.created". */
    "event_type"?: "fulfillment.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_fulfillment_created_merchant}. The `fulfillment.created` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_fulfillment_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Fulfillment}. Work required to
     * deliver an order's items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Fulfillment}. Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Shape $ (Value): string.  Value enum: "fulfillment.created". */
    "event_type"?: "fulfillment.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_fulfillment_event_created_installed_merchants}. The
 * `fulfillment_event.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_fulfillment_event_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link FulfillmentEvent}. An action
     * recorded during an order's fulfillment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link FulfillmentEvent}. An action recorded during an order's
         * fulfillment.
         */
        "object": FulfillmentEvent;
    };
    /** Shape $ (Value): string.  Value enum: "fulfillment_event.created". */
    "event_type"?: "fulfillment_event.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_fulfillment_event_created_merchant}. The
 * `fulfillment_event.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_fulfillment_event_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link FulfillmentEvent}. An action
     * recorded during an order's fulfillment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link FulfillmentEvent}. An action recorded during an order's
         * fulfillment.
         */
        "object": FulfillmentEvent;
    };
    /** Shape $ (Value): string.  Value enum: "fulfillment_event.created". */
    "event_type"?: "fulfillment_event.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_fulfillment_failed_installed_merchants}. The
 * `fulfillment.failed` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_fulfillment_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Fulfillment}. Work required to
     * deliver an order's items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Fulfillment}. Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Shape $ (Value): string.  Value enum: "fulfillment.failed". */
    "event_type"?: "fulfillment.failed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_fulfillment_failed_merchant}. The `fulfillment.failed` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_fulfillment_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Fulfillment}. Work required to
     * deliver an order's items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Fulfillment}. Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Shape $ (Value): string.  Value enum: "fulfillment.failed". */
    "event_type"?: "fulfillment.failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_fulfillment_updated_installed_merchants}. The
 * `fulfillment.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_fulfillment_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Fulfillment}. Work required to
     * deliver an order's items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Fulfillment}. Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Shape $ (Value): string.  Value enum: "fulfillment.updated". */
    "event_type"?: "fulfillment.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_fulfillment_updated_merchant}. The `fulfillment.updated` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_fulfillment_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Fulfillment}. Work required to
     * deliver an order's items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Fulfillment}. Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Shape $ (Value): string.  Value enum: "fulfillment.updated". */
    "event_type"?: "fulfillment.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_gift_card_created_installed_merchants}. The `gift_card.created`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_gift_card_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCard}. Merchant-issued
     * purchased gift card. Posted balance includes reserved value; available value is balance
     * minus reservations. Frozen value remains part of outstanding liability. Gift cards are
     * independent resources and cannot be transferred across merchants or currencies.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
         * includes reserved value; available value is balance minus reservations. Frozen value
         * remains part of outstanding liability. Gift cards are independent resources and cannot
         * be transferred across merchants or currencies.
         */
        "object": GiftCard;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card.created". */
    "event_type"?: "gift_card.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_gift_card_created_merchant}. The `gift_card.created` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_gift_card_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCard}. Merchant-issued
     * purchased gift card. Posted balance includes reserved value; available value is balance
     * minus reservations. Frozen value remains part of outstanding liability. Gift cards are
     * independent resources and cannot be transferred across merchants or currencies.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
         * includes reserved value; available value is balance minus reservations. Frozen value
         * remains part of outstanding liability. Gift cards are independent resources and cannot
         * be transferred across merchants or currencies.
         */
        "object": GiftCard;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card.created". */
    "event_type"?: "gift_card.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_gift_card_load_created_installed_merchants}. The
 * `gift_card_load.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_gift_card_load_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardLoad}. Independent
     * funding resource. Value and consideration are separate. External funding and import
     * provenance are merchant-attested; no payment is collected by recording them. Replacement
     * refund lots retain original funding provenance and do not represent new paid funding.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardLoad}. Independent funding resource. Value and
         * consideration are separate. External funding and import provenance are
         * merchant-attested; no payment is collected by recording them. Replacement refund lots
         * retain original funding provenance and do not represent new paid funding.
         */
        "object": GiftCardLoad;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_load.created". */
    "event_type"?: "gift_card_load.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_gift_card_load_created_merchant}. The `gift_card_load.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_gift_card_load_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardLoad}. Independent
     * funding resource. Value and consideration are separate. External funding and import
     * provenance are merchant-attested; no payment is collected by recording them. Replacement
     * refund lots retain original funding provenance and do not represent new paid funding.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardLoad}. Independent funding resource. Value and
         * consideration are separate. External funding and import provenance are
         * merchant-attested; no payment is collected by recording them. Replacement refund lots
         * retain original funding provenance and do not represent new paid funding.
         */
        "object": GiftCardLoad;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_load.created". */
    "event_type"?: "gift_card_load.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_gift_card_load_updated_installed_merchants}. The
 * `gift_card_load.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_gift_card_load_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardLoad}. Independent
     * funding resource. Value and consideration are separate. External funding and import
     * provenance are merchant-attested; no payment is collected by recording them. Replacement
     * refund lots retain original funding provenance and do not represent new paid funding.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardLoad}. Independent funding resource. Value and
         * consideration are separate. External funding and import provenance are
         * merchant-attested; no payment is collected by recording them. Replacement refund lots
         * retain original funding provenance and do not represent new paid funding.
         */
        "object": GiftCardLoad;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_load.updated". */
    "event_type"?: "gift_card_load.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_gift_card_load_updated_merchant}. The `gift_card_load.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_gift_card_load_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardLoad}. Independent
     * funding resource. Value and consideration are separate. External funding and import
     * provenance are merchant-attested; no payment is collected by recording them. Replacement
     * refund lots retain original funding provenance and do not represent new paid funding.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardLoad}. Independent funding resource. Value and
         * consideration are separate. External funding and import provenance are
         * merchant-attested; no payment is collected by recording them. Replacement refund lots
         * retain original funding provenance and do not represent new paid funding.
         */
        "object": GiftCardLoad;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_load.updated". */
    "event_type"?: "gift_card_load.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_gift_card_notification_created_installed_merchants}. The
 * `gift_card_notification.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_gift_card_notification_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardNotification}. A message
     * sent to a gift card recipient.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardNotification}. A message sent to a gift card recipient.
         */
        "object": GiftCardNotification;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_notification.created". */
    "event_type"?: "gift_card_notification.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_gift_card_notification_created_merchant}. The
 * `gift_card_notification.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_gift_card_notification_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardNotification}. A message
     * sent to a gift card recipient.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardNotification}. A message sent to a gift card recipient.
         */
        "object": GiftCardNotification;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_notification.created". */
    "event_type"?: "gift_card_notification.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_gift_card_notification_updated_installed_merchants}. The
 * `gift_card_notification.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_gift_card_notification_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardNotification}. A message
     * sent to a gift card recipient.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardNotification}. A message sent to a gift card recipient.
         */
        "object": GiftCardNotification;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_notification.updated". */
    "event_type"?: "gift_card_notification.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_gift_card_notification_updated_merchant}. The
 * `gift_card_notification.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_gift_card_notification_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardNotification}. A message
     * sent to a gift card recipient.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardNotification}. A message sent to a gift card recipient.
         */
        "object": GiftCardNotification;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_notification.updated". */
    "event_type"?: "gift_card_notification.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_gift_card_redemption_created_installed_merchants}. The
 * `gift_card_redemption.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_gift_card_redemption_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardRedemption}. Independent
     * redemption resource. Operational reservations are separate from immutable posted
     * transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations`
     * entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the
     * redemption `captured` and increase `refunded_money`.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardRedemption}. Independent redemption resource.
         * Operational reservations are separate from immutable posted transactions. Refund
         * captured value with `POST /v1/refunds`, using a `tender_allocations` entry with
         * `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the
         * redemption `captured` and increase `refunded_money`.
         */
        "object": GiftCardRedemption;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_redemption.created". */
    "event_type"?: "gift_card_redemption.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_gift_card_redemption_created_merchant}. The
 * `gift_card_redemption.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_gift_card_redemption_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardRedemption}. Independent
     * redemption resource. Operational reservations are separate from immutable posted
     * transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations`
     * entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the
     * redemption `captured` and increase `refunded_money`.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardRedemption}. Independent redemption resource.
         * Operational reservations are separate from immutable posted transactions. Refund
         * captured value with `POST /v1/refunds`, using a `tender_allocations` entry with
         * `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the
         * redemption `captured` and increase `refunded_money`.
         */
        "object": GiftCardRedemption;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_redemption.created". */
    "event_type"?: "gift_card_redemption.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_gift_card_redemption_updated_installed_merchants}. The
 * `gift_card_redemption.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_gift_card_redemption_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardRedemption}. Independent
     * redemption resource. Operational reservations are separate from immutable posted
     * transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations`
     * entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the
     * redemption `captured` and increase `refunded_money`.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardRedemption}. Independent redemption resource.
         * Operational reservations are separate from immutable posted transactions. Refund
         * captured value with `POST /v1/refunds`, using a `tender_allocations` entry with
         * `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the
         * redemption `captured` and increase `refunded_money`.
         */
        "object": GiftCardRedemption;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_redemption.updated". */
    "event_type"?: "gift_card_redemption.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_gift_card_redemption_updated_merchant}. The
 * `gift_card_redemption.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_gift_card_redemption_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardRedemption}. Independent
     * redemption resource. Operational reservations are separate from immutable posted
     * transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations`
     * entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the
     * redemption `captured` and increase `refunded_money`.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardRedemption}. Independent redemption resource.
         * Operational reservations are separate from immutable posted transactions. Refund
         * captured value with `POST /v1/refunds`, using a `tender_allocations` entry with
         * `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the
         * redemption `captured` and increase `refunded_money`.
         */
        "object": GiftCardRedemption;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_redemption.updated". */
    "event_type"?: "gift_card_redemption.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_gift_card_transaction_created_installed_merchants}. The
 * `gift_card_transaction.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_gift_card_transaction_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardTransaction}. Immutable
     * posted financial movement with signed amount, per-card sequence, merchant sequence and
     * balance snapshots. Corrections create new transactions.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardTransaction}. Immutable posted financial movement with
         * signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections
         * create new transactions.
         */
        "object": GiftCardTransaction;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_transaction.created". */
    "event_type"?: "gift_card_transaction.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_gift_card_transaction_created_merchant}. The
 * `gift_card_transaction.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_gift_card_transaction_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCardTransaction}. Immutable
     * posted financial movement with signed amount, per-card sequence, merchant sequence and
     * balance snapshots. Corrections create new transactions.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCardTransaction}. Immutable posted financial movement with
         * signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections
         * create new transactions.
         */
        "object": GiftCardTransaction;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card_transaction.created". */
    "event_type"?: "gift_card_transaction.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_gift_card_updated_installed_merchants}. The `gift_card.updated`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_gift_card_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCard}. Merchant-issued
     * purchased gift card. Posted balance includes reserved value; available value is balance
     * minus reservations. Frozen value remains part of outstanding liability. Gift cards are
     * independent resources and cannot be transferred across merchants or currencies.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
         * includes reserved value; available value is balance minus reservations. Frozen value
         * remains part of outstanding liability. Gift cards are independent resources and cannot
         * be transferred across merchants or currencies.
         */
        "object": GiftCard;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card.updated". */
    "event_type"?: "gift_card.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_gift_card_updated_merchant}. The `gift_card.updated` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_gift_card_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link GiftCard}. Merchant-issued
     * purchased gift card. Posted balance includes reserved value; available value is balance
     * minus reservations. Frozen value remains part of outstanding liability. Gift cards are
     * independent resources and cannot be transferred across merchants or currencies.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
         * includes reserved value; available value is balance minus reservations. Frozen value
         * remains part of outstanding liability. Gift cards are independent resources and cannot
         * be transferred across merchants or currencies.
         */
        "object": GiftCard;
    };
    /** Shape $ (Value): string.  Value enum: "gift_card.updated". */
    "event_type"?: "gift_card.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_count_applied_installed_merchants}. The
 * `inventory_count.applied` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_inventory_count_applied_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryCount}. A physical count
     * used to reconcile stock.
     */
    "data"?: {
        /** Shape $ (Value): {@link InventoryCount}. A physical count used to reconcile stock. */
        "object": InventoryCount;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_count.applied". */
    "event_type"?: "inventory_count.applied" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_count_applied_merchant}. The `inventory_count.applied`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_inventory_count_applied_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryCount}. A physical count
     * used to reconcile stock.
     */
    "data"?: {
        /** Shape $ (Value): {@link InventoryCount}. A physical count used to reconcile stock. */
        "object": InventoryCount;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_count.applied". */
    "event_type"?: "inventory_count.applied" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_level_shortage_detected_installed_merchants}. The
 * `inventory_level.shortage_detected` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_inventory_level_shortage_detected_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryLevel}. The quantity
     * state of one inventory item at one Location.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryLevel}. The quantity state of one inventory item at one
         * Location.
         */
        "object": InventoryLevel;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_level.shortage_detected". */
    "event_type"?: "inventory_level.shortage_detected" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_level_shortage_detected_merchant}. The
 * `inventory_level.shortage_detected` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_inventory_level_shortage_detected_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryLevel}. The quantity
     * state of one inventory item at one Location.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryLevel}. The quantity state of one inventory item at one
         * Location.
         */
        "object": InventoryLevel;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_level.shortage_detected". */
    "event_type"?: "inventory_level.shortage_detected" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_level_updated_installed_merchants}. The
 * `inventory_level.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_inventory_level_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryLevel}. The quantity
     * state of one inventory item at one Location.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryLevel}. The quantity state of one inventory item at one
         * Location.
         */
        "object": InventoryLevel;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_level.updated". */
    "event_type"?: "inventory_level.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_level_updated_merchant}. The `inventory_level.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_inventory_level_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryLevel}. The quantity
     * state of one inventory item at one Location.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryLevel}. The quantity state of one inventory item at one
         * Location.
         */
        "object": InventoryLevel;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_level.updated". */
    "event_type"?: "inventory_level.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_receipt_created_installed_merchants}. The
 * `inventory_receipt.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_inventory_receipt_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReceipt}. Returned units
     * received into Inventory, from a Return disposition or against the reservation line that
     * consumed them.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReceipt}. Returned units received into Inventory, from
         * a Return disposition or against the reservation line that consumed them.
         */
        "object": InventoryReceipt;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_receipt.created". */
    "event_type"?: "inventory_receipt.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_receipt_created_merchant}. The
 * `inventory_receipt.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_inventory_receipt_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReceipt}. Returned units
     * received into Inventory, from a Return disposition or against the reservation line that
     * consumed them.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReceipt}. Returned units received into Inventory, from
         * a Return disposition or against the reservation line that consumed them.
         */
        "object": InventoryReceipt;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_receipt.created". */
    "event_type"?: "inventory_receipt.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_reservation_action_required_installed_merchants}. The
 * `inventory_reservation.action_required` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type Webhook_inventory_reservation_action_required_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.action_required". */
    "event_type"?: "inventory_reservation.action_required" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_reservation_action_required_merchant}. The
 * `inventory_reservation.action_required` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_inventory_reservation_action_required_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.action_required". */
    "event_type"?: "inventory_reservation.action_required" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_reservation_at_risk_installed_merchants}. The
 * `inventory_reservation.at_risk` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_inventory_reservation_at_risk_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.at_risk". */
    "event_type"?: "inventory_reservation.at_risk" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_reservation_at_risk_merchant}. The
 * `inventory_reservation.at_risk` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_inventory_reservation_at_risk_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.at_risk". */
    "event_type"?: "inventory_reservation.at_risk" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_reservation_closed_installed_merchants}. The
 * `inventory_reservation.closed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_inventory_reservation_closed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.closed". */
    "event_type"?: "inventory_reservation.closed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_reservation_closed_merchant}. The
 * `inventory_reservation.closed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_inventory_reservation_closed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.closed". */
    "event_type"?: "inventory_reservation.closed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_reservation_committed_installed_merchants}. The
 * `inventory_reservation.committed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_inventory_reservation_committed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.committed". */
    "event_type"?: "inventory_reservation.committed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_reservation_committed_merchant}. The
 * `inventory_reservation.committed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_inventory_reservation_committed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.committed". */
    "event_type"?: "inventory_reservation.committed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_reservation_consumed_installed_merchants}. The
 * `inventory_reservation.consumed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_inventory_reservation_consumed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.consumed". */
    "event_type"?: "inventory_reservation.consumed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_reservation_consumed_merchant}. The
 * `inventory_reservation.consumed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_inventory_reservation_consumed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.consumed". */
    "event_type"?: "inventory_reservation.consumed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_reservation_created_installed_merchants}. The
 * `inventory_reservation.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_inventory_reservation_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.created". */
    "event_type"?: "inventory_reservation.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_reservation_created_merchant}. The
 * `inventory_reservation.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_inventory_reservation_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.created". */
    "event_type"?: "inventory_reservation.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_reservation_hold_expired_installed_merchants}. The
 * `inventory_reservation.hold_expired` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_inventory_reservation_hold_expired_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.hold_expired". */
    "event_type"?: "inventory_reservation.hold_expired" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_reservation_hold_expired_merchant}. The
 * `inventory_reservation.hold_expired` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_inventory_reservation_hold_expired_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.hold_expired". */
    "event_type"?: "inventory_reservation.hold_expired" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_reservation_released_installed_merchants}. The
 * `inventory_reservation.released` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_inventory_reservation_released_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.released". */
    "event_type"?: "inventory_reservation.released" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_reservation_released_merchant}. The
 * `inventory_reservation.released` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_inventory_reservation_released_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryReservation}. A claim on
     * stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from
         * held to committed to consumed, and can be released or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.released". */
    "event_type"?: "inventory_reservation.released" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_transfer_closed_installed_merchants}. The
 * `inventory_transfer.closed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_inventory_transfer_closed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryTransfer}. Stock moving
     * between locations.
     */
    "data"?: {
        /** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_transfer.closed". */
    "event_type"?: "inventory_transfer.closed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_transfer_closed_merchant}. The
 * `inventory_transfer.closed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_inventory_transfer_closed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryTransfer}. Stock moving
     * between locations.
     */
    "data"?: {
        /** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_transfer.closed". */
    "event_type"?: "inventory_transfer.closed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_transfer_departed_installed_merchants}. The
 * `inventory_transfer.departed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_inventory_transfer_departed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryTransfer}. Stock moving
     * between locations.
     */
    "data"?: {
        /** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_transfer.departed". */
    "event_type"?: "inventory_transfer.departed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_transfer_departed_merchant}. The
 * `inventory_transfer.departed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_inventory_transfer_departed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryTransfer}. Stock moving
     * between locations.
     */
    "data"?: {
        /** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_transfer.departed". */
    "event_type"?: "inventory_transfer.departed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_transfer_lost_installed_merchants}. The
 * `inventory_transfer.lost` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_inventory_transfer_lost_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryTransfer}. Stock moving
     * between locations.
     */
    "data"?: {
        /** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_transfer.lost". */
    "event_type"?: "inventory_transfer.lost" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_transfer_lost_merchant}. The `inventory_transfer.lost`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_inventory_transfer_lost_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryTransfer}. Stock moving
     * between locations.
     */
    "data"?: {
        /** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_transfer.lost". */
    "event_type"?: "inventory_transfer.lost" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_transfer_received_installed_merchants}. The
 * `inventory_transfer.received` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_inventory_transfer_received_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryTransfer}. Stock moving
     * between locations.
     */
    "data"?: {
        /** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_transfer.received". */
    "event_type"?: "inventory_transfer.received" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_transfer_received_merchant}. The
 * `inventory_transfer.received` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_inventory_transfer_received_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryTransfer}. Stock moving
     * between locations.
     */
    "data"?: {
        /** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_transfer.received". */
    "event_type"?: "inventory_transfer.received" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_inventory_transfer_returned_installed_merchants}. The
 * `inventory_transfer.returned` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_inventory_transfer_returned_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryTransfer}. Stock moving
     * between locations.
     */
    "data"?: {
        /** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_transfer.returned". */
    "event_type"?: "inventory_transfer.returned" | (string & {});
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
 * Shape $ (Value): {@link Webhook_inventory_transfer_returned_merchant}. The
 * `inventory_transfer.returned` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_inventory_transfer_returned_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InventoryTransfer}. Stock moving
     * between locations.
     */
    "data"?: {
        /** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Shape $ (Value): string.  Value enum: "inventory_transfer.returned". */
    "event_type"?: "inventory_transfer.returned" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_collection_block_resolved_installed_merchants}. The
 * `invoice.collection_block_resolved` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_collection_block_resolved_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.collection_block_resolved". */
    "event_type"?: "invoice.collection_block_resolved" | (string & {});
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
 * Shape $ (Value): {@link Webhook_invoice_collection_block_resolved_merchant}. The
 * `invoice.collection_block_resolved` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_invoice_collection_block_resolved_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.collection_block_resolved". */
    "event_type"?: "invoice.collection_block_resolved" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_collection_blocked_installed_merchants}. The
 * `invoice.collection_blocked` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_invoice_collection_blocked_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.collection_blocked". */
    "event_type"?: "invoice.collection_blocked" | (string & {});
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
 * Shape $ (Value): {@link Webhook_invoice_collection_blocked_merchant}. The
 * `invoice.collection_blocked` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_invoice_collection_blocked_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.collection_blocked". */
    "event_type"?: "invoice.collection_blocked" | (string & {});
});
