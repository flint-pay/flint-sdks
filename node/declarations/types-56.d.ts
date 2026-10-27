import type { DeliveryZone } from './types-15.js';
import type { MerchantWebhookEnvelope } from './types-31.js';
import type { PartnerWebhookEnvelope, PartnerEnvironmentGrant } from './types-35.js';
import type { Dispute } from './types-16.js';
import type { FraudWarning, Fulfillment, FulfillmentEvent } from './types-17.js';
import type { GiftCard, GiftCardLoad } from './types-18.js';
import type { GiftCardNotification, GiftCardRedemption, GiftCardTransaction } from './types-19.js';
import type { InventoryCount, InventoryLevel } from './types-24.js';
import type { InventoryReceipt, InventoryReservation } from './types-25.js';
/**
 * Shape $ (Value): {@link Webhook_delivery_zone_archived_merchant}. The `delivery_zone.archived`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_delivery_zone_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryZone}. A geographic area
     * served by a delivery method.
     */
    "data"?: {
        /** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_zone.archived". */
    "event_type"?: "delivery_zone.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_zone_created_installed_merchants}. The
 * `delivery_zone.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_zone_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryZone}. A geographic area
     * served by a delivery method.
     */
    "data"?: {
        /** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_zone.created". */
    "event_type"?: "delivery_zone.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_zone_created_merchant}. The `delivery_zone.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_delivery_zone_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryZone}. A geographic area
     * served by a delivery method.
     */
    "data"?: {
        /** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_zone.created". */
    "event_type"?: "delivery_zone.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_zone_deactivated_installed_merchants}. The
 * `delivery_zone.deactivated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_zone_deactivated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryZone}. A geographic area
     * served by a delivery method.
     */
    "data"?: {
        /** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_zone.deactivated". */
    "event_type"?: "delivery_zone.deactivated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_zone_deactivated_merchant}. The
 * `delivery_zone.deactivated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_delivery_zone_deactivated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryZone}. A geographic area
     * served by a delivery method.
     */
    "data"?: {
        /** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_zone.deactivated". */
    "event_type"?: "delivery_zone.deactivated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_zone_updated_installed_merchants}. The
 * `delivery_zone.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_zone_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryZone}. A geographic area
     * served by a delivery method.
     */
    "data"?: {
        /** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_zone.updated". */
    "event_type"?: "delivery_zone.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_zone_updated_merchant}. The `delivery_zone.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_delivery_zone_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryZone}. A geographic area
     * served by a delivery method.
     */
    "data"?: {
        /** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_zone.updated". */
    "event_type"?: "delivery_zone.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_dispute_created_merchant}. The `dispute.created` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_dispute_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Dispute}. A challenge to a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Dispute}. A challenge to a collected payment. */
        "object": Dispute;
    };
    /** Shape $ (Value): string.  Value enum: "dispute.created". */
    "event_type"?: "dispute.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_dispute_inquiry_closed_merchant}. The `dispute.inquiry_closed`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_dispute_inquiry_closed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Dispute}. A challenge to a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Dispute}. A challenge to a collected payment. */
        "object": Dispute;
    };
    /** Shape $ (Value): string.  Value enum: "dispute.inquiry_closed". */
    "event_type"?: "dispute.inquiry_closed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_dispute_lost_merchant}. The `dispute.lost` webhook payload for
 * the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_dispute_lost_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Dispute}. A challenge to a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Dispute}. A challenge to a collected payment. */
        "object": Dispute;
    };
    /** Shape $ (Value): string.  Value enum: "dispute.lost". */
    "event_type"?: "dispute.lost" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_dispute_needs_response_merchant}. The `dispute.needs_response`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_dispute_needs_response_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Dispute}. A challenge to a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Dispute}. A challenge to a collected payment. */
        "object": Dispute;
    };
    /** Shape $ (Value): string.  Value enum: "dispute.needs_response". */
    "event_type"?: "dispute.needs_response" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_dispute_prevented_merchant}. The `dispute.prevented` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_dispute_prevented_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Dispute}. A challenge to a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Dispute}. A challenge to a collected payment. */
        "object": Dispute;
    };
    /** Shape $ (Value): string.  Value enum: "dispute.prevented". */
    "event_type"?: "dispute.prevented" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_dispute_updated_merchant}. The `dispute.updated` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_dispute_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Dispute}. A challenge to a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Dispute}. A challenge to a collected payment. */
        "object": Dispute;
    };
    /** Shape $ (Value): string.  Value enum: "dispute.updated". */
    "event_type"?: "dispute.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_dispute_won_merchant}. The `dispute.won` webhook payload for the
 * `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_dispute_won_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Dispute}. A challenge to a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Dispute}. A challenge to a collected payment. */
        "object": Dispute;
    };
    /** Shape $ (Value): string.  Value enum: "dispute.won". */
    "event_type"?: "dispute.won" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_environment_grant_created_partner_app}. The
 * `environment_grant.created` webhook payload for the `partner_app` event source. Fields shared by
 * partner webhook payloads.
 */
export type Webhook_environment_grant_created_partner_app = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PartnerEnvironmentGrant}. A
     * partner application's authorization to access an environment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PartnerEnvironmentGrant}. A partner application's authorization
         * to access an environment.
         */
        "object": PartnerEnvironmentGrant;
    };
    /** Shape $ (Value): string.  Value enum: "environment_grant.created". */
    "event_type"?: "environment_grant.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_environment_grant_revoked_partner_app}. The
 * `environment_grant.revoked` webhook payload for the `partner_app` event source. Fields shared by
 * partner webhook payloads.
 */
export type Webhook_environment_grant_revoked_partner_app = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PartnerEnvironmentGrant}. A
     * partner application's authorization to access an environment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link PartnerEnvironmentGrant}. A partner application's authorization
         * to access an environment.
         */
        "object": PartnerEnvironmentGrant;
    };
    /** Shape $ (Value): string.  Value enum: "environment_grant.revoked". */
    "event_type"?: "environment_grant.revoked" | (string & {});
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
 * Shape $ (Value): {@link Webhook_fraud_warning_created_installed_merchants}. The
 * `fraud_warning.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_fraud_warning_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link FraudWarning}. A notice that a
     * payment may be fraudulent.
     */
    "data"?: {
        /** Shape $ (Value): {@link FraudWarning}. A notice that a payment may be fraudulent. */
        "object": FraudWarning;
    };
    /** Shape $ (Value): string.  Value enum: "fraud_warning.created". */
    "event_type"?: "fraud_warning.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_fraud_warning_created_merchant}. The `fraud_warning.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_fraud_warning_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link FraudWarning}. A notice that a
     * payment may be fraudulent.
     */
    "data"?: {
        /** Shape $ (Value): {@link FraudWarning}. A notice that a payment may be fraudulent. */
        "object": FraudWarning;
    };
    /** Shape $ (Value): string.  Value enum: "fraud_warning.created". */
    "event_type"?: "fraud_warning.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_fraud_warning_updated_installed_merchants}. The
 * `fraud_warning.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_fraud_warning_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link FraudWarning}. A notice that a
     * payment may be fraudulent.
     */
    "data"?: {
        /** Shape $ (Value): {@link FraudWarning}. A notice that a payment may be fraudulent. */
        "object": FraudWarning;
    };
    /** Shape $ (Value): string.  Value enum: "fraud_warning.updated". */
    "event_type"?: "fraud_warning.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_fraud_warning_updated_merchant}. The `fraud_warning.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_fraud_warning_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link FraudWarning}. A notice that a
     * payment may be fraudulent.
     */
    "data"?: {
        /** Shape $ (Value): {@link FraudWarning}. A notice that a payment may be fraudulent. */
        "object": FraudWarning;
    };
    /** Shape $ (Value): string.  Value enum: "fraud_warning.updated". */
    "event_type"?: "fraud_warning.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_fulfillment_canceled_installed_merchants}. The
 * `fulfillment.canceled` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_fulfillment_canceled_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Fulfillment}. Work required to
     * deliver an order's items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Fulfillment}. Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Shape $ (Value): string.  Value enum: "fulfillment.canceled". */
    "event_type"?: "fulfillment.canceled" | (string & {});
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
 * Shape $ (Value): {@link Webhook_fulfillment_canceled_merchant}. The `fulfillment.canceled`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_fulfillment_canceled_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Fulfillment}. Work required to
     * deliver an order's items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Fulfillment}. Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Shape $ (Value): string.  Value enum: "fulfillment.canceled". */
    "event_type"?: "fulfillment.canceled" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_fulfillment_completed_installed_merchants}. The
 * `fulfillment.completed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_fulfillment_completed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Fulfillment}. Work required to
     * deliver an order's items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Fulfillment}. Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Shape $ (Value): string.  Value enum: "fulfillment.completed". */
    "event_type"?: "fulfillment.completed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_fulfillment_completed_merchant}. The `fulfillment.completed`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_fulfillment_completed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Fulfillment}. Work required to
     * deliver an order's items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Fulfillment}. Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Shape $ (Value): string.  Value enum: "fulfillment.completed". */
    "event_type"?: "fulfillment.completed" | (string & {});
});
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
