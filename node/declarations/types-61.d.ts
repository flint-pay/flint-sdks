import type { MerchantWebhookEnvelope } from './types-31.js';
import type { ReturnResource, ReturnResolution } from './types-42.js';
import type { PartnerWebhookEnvelope } from './types-35.js';
import type { Shipment, Subscription } from './types-44.js';
import type { SubscriptionDeliveryMigration, SubscriptionPaymentRetry } from './types-45.js';
import type { InputValue } from '../runtime.js';
import type { CreateWorkloadIdentityRequestInput } from './types-9.js';
import type { UpdateWorkloadIdentityRequestInput } from './types-50.js';
import type { ResourceReference } from './types-40.js';
/**
 * Shape $ (Value): {@link Webhook_return_reopened_merchant}. The `return.reopened` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_return_reopened_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResource}. A request to
     * send purchased items back.
     */
    "data"?: {
        /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Shape $ (Value): string.  Value enum: "return.reopened". */
    "event_type"?: "return.reopened" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_resolution_created_installed_merchants}. The
 * `return_resolution.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_return_resolution_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResolution}. The refund,
     * exchange, or other outcome of a return.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a
         * return.
         */
        "object": ReturnResolution;
    };
    /** Shape $ (Value): string.  Value enum: "return_resolution.created". */
    "event_type"?: "return_resolution.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_return_resolution_created_merchant}. The
 * `return_resolution.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_return_resolution_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResolution}. The refund,
     * exchange, or other outcome of a return.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a
         * return.
         */
        "object": ReturnResolution;
    };
    /** Shape $ (Value): string.  Value enum: "return_resolution.created". */
    "event_type"?: "return_resolution.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_resolution_updated_installed_merchants}. The
 * `return_resolution.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_return_resolution_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResolution}. The refund,
     * exchange, or other outcome of a return.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a
         * return.
         */
        "object": ReturnResolution;
    };
    /** Shape $ (Value): string.  Value enum: "return_resolution.updated". */
    "event_type"?: "return_resolution.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_return_resolution_updated_merchant}. The
 * `return_resolution.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_return_resolution_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResolution}. The refund,
     * exchange, or other outcome of a return.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a
         * return.
         */
        "object": ReturnResolution;
    };
    /** Shape $ (Value): string.  Value enum: "return_resolution.updated". */
    "event_type"?: "return_resolution.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_updated_installed_merchants}. The `return.updated`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_return_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResource}. A request to
     * send purchased items back.
     */
    "data"?: {
        /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Shape $ (Value): string.  Value enum: "return.updated". */
    "event_type"?: "return.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_return_updated_merchant}. The `return.updated` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_return_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResource}. A request to
     * send purchased items back.
     */
    "data"?: {
        /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Shape $ (Value): string.  Value enum: "return.updated". */
    "event_type"?: "return.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_shipment_created_installed_merchants}. The `shipment.created`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_shipment_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Shipment}. A shipment carrying
     * fulfilled order items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Shipment}. A shipment carrying fulfilled order items. */
        "object": Shipment;
    };
    /** Shape $ (Value): string.  Value enum: "shipment.created". */
    "event_type"?: "shipment.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_shipment_created_merchant}. The `shipment.created` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_shipment_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Shipment}. A shipment carrying
     * fulfilled order items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Shipment}. A shipment carrying fulfilled order items. */
        "object": Shipment;
    };
    /** Shape $ (Value): string.  Value enum: "shipment.created". */
    "event_type"?: "shipment.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_shipment_updated_installed_merchants}. The `shipment.updated`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_shipment_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Shipment}. A shipment carrying
     * fulfilled order items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Shipment}. A shipment carrying fulfilled order items. */
        "object": Shipment;
    };
    /** Shape $ (Value): string.  Value enum: "shipment.updated". */
    "event_type"?: "shipment.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_shipment_updated_merchant}. The `shipment.updated` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_shipment_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Shipment}. A shipment carrying
     * fulfilled order items.
     */
    "data"?: {
        /** Shape $ (Value): {@link Shipment}. A shipment carrying fulfilled order items. */
        "object": Shipment;
    };
    /** Shape $ (Value): string.  Value enum: "shipment.updated". */
    "event_type"?: "shipment.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_activated_installed_merchants}. The
 * `subscription.activated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_subscription_activated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.activated". */
    "event_type"?: "subscription.activated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_activated_merchant}. The `subscription.activated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_subscription_activated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.activated". */
    "event_type"?: "subscription.activated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_canceled_installed_merchants}. The
 * `subscription.canceled` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_subscription_canceled_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.canceled". */
    "event_type"?: "subscription.canceled" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_canceled_merchant}. The `subscription.canceled`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_subscription_canceled_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.canceled". */
    "event_type"?: "subscription.canceled" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_cancellation_scheduled_installed_merchants}. The
 * `subscription.cancellation_scheduled` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type Webhook_subscription_cancellation_scheduled_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.cancellation_scheduled". */
    "event_type"?: "subscription.cancellation_scheduled" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_cancellation_scheduled_merchant}. The
 * `subscription.cancellation_scheduled` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_subscription_cancellation_scheduled_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.cancellation_scheduled". */
    "event_type"?: "subscription.cancellation_scheduled" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_created_installed_merchants}. The
 * `subscription.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_subscription_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.created". */
    "event_type"?: "subscription.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_created_merchant}. The `subscription.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_subscription_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.created". */
    "event_type"?: "subscription.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_cycle_skipped_installed_merchants}. The
 * `subscription.cycle_skipped` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_subscription_cycle_skipped_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.cycle_skipped". */
    "event_type"?: "subscription.cycle_skipped" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_cycle_skipped_merchant}. The
 * `subscription.cycle_skipped` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_subscription_cycle_skipped_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.cycle_skipped". */
    "event_type"?: "subscription.cycle_skipped" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_delivery_action_required_installed_merchants}. The
 * `subscription.delivery_action_required` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type Webhook_subscription_delivery_action_required_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.delivery_action_required". */
    "event_type"?: "subscription.delivery_action_required" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_delivery_action_required_merchant}. The
 * `subscription.delivery_action_required` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_subscription_delivery_action_required_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.delivery_action_required". */
    "event_type"?: "subscription.delivery_action_required" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_delivery_migration_completed_installed_merchants}.
 * The `subscription_delivery_migration.completed` webhook payload for the `installed_merchants`
 * event source. Fields shared by partner webhook payloads.
 */
export type Webhook_subscription_delivery_migration_completed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link SubscriptionDeliveryMigration}. A
     * move of subscribers from one delivery method to another.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link SubscriptionDeliveryMigration}. A move of subscribers from one
         * delivery method to another.
         */
        "object": SubscriptionDeliveryMigration;
    };
    /** Shape $ (Value): string.  Value enum: "subscription_delivery_migration.completed". */
    "event_type"?: "subscription_delivery_migration.completed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_delivery_migration_completed_merchant}. The
 * `subscription_delivery_migration.completed` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type Webhook_subscription_delivery_migration_completed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link SubscriptionDeliveryMigration}. A
     * move of subscribers from one delivery method to another.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link SubscriptionDeliveryMigration}. A move of subscribers from one
         * delivery method to another.
         */
        "object": SubscriptionDeliveryMigration;
    };
    /** Shape $ (Value): string.  Value enum: "subscription_delivery_migration.completed". */
    "event_type"?: "subscription_delivery_migration.completed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_delivery_pause_upcoming_installed_merchants}. The
 * `subscription.delivery_pause_upcoming` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type Webhook_subscription_delivery_pause_upcoming_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.delivery_pause_upcoming". */
    "event_type"?: "subscription.delivery_pause_upcoming" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_delivery_pause_upcoming_merchant}. The
 * `subscription.delivery_pause_upcoming` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_subscription_delivery_pause_upcoming_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.delivery_pause_upcoming". */
    "event_type"?: "subscription.delivery_pause_upcoming" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_delivery_updated_installed_merchants}. The
 * `subscription.delivery_updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_subscription_delivery_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.delivery_updated". */
    "event_type"?: "subscription.delivery_updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_delivery_updated_merchant}. The
 * `subscription.delivery_updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_subscription_delivery_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.delivery_updated". */
    "event_type"?: "subscription.delivery_updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_dunning_exhausted_installed_merchants}. The
 * `subscription.dunning_exhausted` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_subscription_dunning_exhausted_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.dunning_exhausted". */
    "event_type"?: "subscription.dunning_exhausted" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_dunning_exhausted_merchant}. The
 * `subscription.dunning_exhausted` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_subscription_dunning_exhausted_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.dunning_exhausted". */
    "event_type"?: "subscription.dunning_exhausted" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_past_due_installed_merchants}. The
 * `subscription.past_due` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_subscription_past_due_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.past_due". */
    "event_type"?: "subscription.past_due" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_past_due_merchant}. The `subscription.past_due`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_subscription_past_due_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.past_due". */
    "event_type"?: "subscription.past_due" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_paused_installed_merchants}. The
 * `subscription.paused` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_subscription_paused_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.paused". */
    "event_type"?: "subscription.paused" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_paused_merchant}. The `subscription.paused` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_subscription_paused_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.paused". */
    "event_type"?: "subscription.paused" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_payment_retry_created_installed_merchants}. The
 * `subscription_payment_retry.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_subscription_payment_retry_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link SubscriptionPaymentRetry}. An
     * attempt to collect a subscription's overdue payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link SubscriptionPaymentRetry}. An attempt to collect a
         * subscription's overdue payment.
         */
        "object": SubscriptionPaymentRetry;
    };
    /** Shape $ (Value): string.  Value enum: "subscription_payment_retry.created". */
    "event_type"?: "subscription_payment_retry.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_payment_retry_created_merchant}. The
 * `subscription_payment_retry.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_subscription_payment_retry_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link SubscriptionPaymentRetry}. An
     * attempt to collect a subscription's overdue payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link SubscriptionPaymentRetry}. An attempt to collect a
         * subscription's overdue payment.
         */
        "object": SubscriptionPaymentRetry;
    };
    /** Shape $ (Value): string.  Value enum: "subscription_payment_retry.created". */
    "event_type"?: "subscription_payment_retry.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_payment_retry_failed_installed_merchants}. The
 * `subscription_payment_retry.failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_subscription_payment_retry_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link SubscriptionPaymentRetry}. An
     * attempt to collect a subscription's overdue payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link SubscriptionPaymentRetry}. An attempt to collect a
         * subscription's overdue payment.
         */
        "object": SubscriptionPaymentRetry;
    };
    /** Shape $ (Value): string.  Value enum: "subscription_payment_retry.failed". */
    "event_type"?: "subscription_payment_retry.failed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_payment_retry_failed_merchant}. The
 * `subscription_payment_retry.failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_subscription_payment_retry_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link SubscriptionPaymentRetry}. An
     * attempt to collect a subscription's overdue payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link SubscriptionPaymentRetry}. An attempt to collect a
         * subscription's overdue payment.
         */
        "object": SubscriptionPaymentRetry;
    };
    /** Shape $ (Value): string.  Value enum: "subscription_payment_retry.failed". */
    "event_type"?: "subscription_payment_retry.failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_payment_retry_succeeded_installed_merchants}. The
 * `subscription_payment_retry.succeeded` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type Webhook_subscription_payment_retry_succeeded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link SubscriptionPaymentRetry}. An
     * attempt to collect a subscription's overdue payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link SubscriptionPaymentRetry}. An attempt to collect a
         * subscription's overdue payment.
         */
        "object": SubscriptionPaymentRetry;
    };
    /** Shape $ (Value): string.  Value enum: "subscription_payment_retry.succeeded". */
    "event_type"?: "subscription_payment_retry.succeeded" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_payment_retry_succeeded_merchant}. The
 * `subscription_payment_retry.succeeded` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_subscription_payment_retry_succeeded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link SubscriptionPaymentRetry}. An
     * attempt to collect a subscription's overdue payment.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link SubscriptionPaymentRetry}. An attempt to collect a
         * subscription's overdue payment.
         */
        "object": SubscriptionPaymentRetry;
    };
    /** Shape $ (Value): string.  Value enum: "subscription_payment_retry.succeeded". */
    "event_type"?: "subscription_payment_retry.succeeded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_payment_succeeded_installed_merchants}. The
 * `subscription.payment_succeeded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_subscription_payment_succeeded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.payment_succeeded". */
    "event_type"?: "subscription.payment_succeeded" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_payment_succeeded_merchant}. The
 * `subscription.payment_succeeded` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_subscription_payment_succeeded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.payment_succeeded". */
    "event_type"?: "subscription.payment_succeeded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_plan_changed_installed_merchants}. The
 * `subscription.plan_changed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_subscription_plan_changed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.plan_changed". */
    "event_type"?: "subscription.plan_changed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_plan_changed_merchant}. The
 * `subscription.plan_changed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_subscription_plan_changed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.plan_changed". */
    "event_type"?: "subscription.plan_changed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_reactivated_installed_merchants}. The
 * `subscription.reactivated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_subscription_reactivated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.reactivated". */
    "event_type"?: "subscription.reactivated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_reactivated_merchant}. The
 * `subscription.reactivated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_subscription_reactivated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.reactivated". */
    "event_type"?: "subscription.reactivated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_renewal_upcoming_installed_merchants}. The
 * `subscription.renewal_upcoming` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_subscription_renewal_upcoming_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.renewal_upcoming". */
    "event_type"?: "subscription.renewal_upcoming" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_renewal_upcoming_merchant}. The
 * `subscription.renewal_upcoming` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_subscription_renewal_upcoming_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.renewal_upcoming". */
    "event_type"?: "subscription.renewal_upcoming" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_resumed_installed_merchants}. The
 * `subscription.resumed` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_subscription_resumed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.resumed". */
    "event_type"?: "subscription.resumed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_resumed_merchant}. The `subscription.resumed`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_subscription_resumed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.resumed". */
    "event_type"?: "subscription.resumed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_trial_ending_installed_merchants}. The
 * `subscription.trial_ending` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_subscription_trial_ending_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.trial_ending". */
    "event_type"?: "subscription.trial_ending" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_trial_ending_merchant}. The
 * `subscription.trial_ending` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_subscription_trial_ending_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.trial_ending". */
    "event_type"?: "subscription.trial_ending" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_subscription_updated_installed_merchants}. The
 * `subscription.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_subscription_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.updated". */
    "event_type"?: "subscription.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_subscription_updated_merchant}. The `subscription.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_subscription_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Subscription}. A customer's
     * recurring purchase.
     */
    "data"?: {
        /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Shape $ (Value): string.  Value enum: "subscription.updated". */
    "event_type"?: "subscription.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Weight}. A weight value in grams, kilograms, ounces, or pounds, used in
 * delivery profile configuration.
 */
export type Weight = {
    /**
     * Shape $ (Value): string. Weight unit. Use gram, kilogram, ounce, or pound. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
    /**
     * Shape $ (Value): number. Weight measured in the specified unit. maximum: 1000000.
     * exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "value": number;
};
/**
 * Shape $ (Value): {@link WeightInput}. A weight value in grams, kilograms, ounces, or pounds,
 * used in delivery profile configuration.
 */
export type WeightInput = {
    /**
     * Shape $ (Value): string. Weight unit. Use gram, kilogram, ounce, or pound. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
    /**
     * Shape $ (Value): number. Weight measured in the specified unit. maximum: 1000000.
     * exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "value": number;
};
export type WorkloadIdentitiesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateWorkloadIdentityRequestInput}. The request body for: Create a
     * workload identity.
     */
    "body": InputValue<CreateWorkloadIdentityRequestInput>;
};
export type WorkloadIdentitiesGetInput = {
    /** Shape $ (Value): string. */
    "workload_identity_id": InputValue<string>;
};
export type WorkloadIdentitiesListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "last_used_at",
     * "name".
     */
    "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type WorkloadIdentitiesRemoveInput = {
    /** Shape $ (Value): string. */
    "workload_identity_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type WorkloadIdentitiesUpdateInput = {
    /** Shape $ (Value): string. */
    "workload_identity_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateWorkloadIdentityRequestInput}. The request body for: Update a
     * workload identity.
     */
    "body": InputValue<UpdateWorkloadIdentityRequestInput>;
};
/**
 * Shape $ (Value): {@link WorkloadIdentity}. A policy that grants API access to a workload
 * authenticated by an external identity provider.
 */
export type WorkloadIdentity = {
    /**
     * Shape $ (Value): string. Time the identity was archived. Omitted before archival. Format:
     * date-time.
     */
    "archived_at"?: string;
    /** Shape $ (Value): string. */
    "audience": string;
    /**
     * Shape $ (Value): Array of {@link WorkloadIdentityClaimCondition}. Bounded value array of
     * top-level scalar claim conditions. Replaced as a whole on PATCH; [] clears it when the
     * remaining policy is valid. Shape $[] (Value): {@link WorkloadIdentityClaimCondition}. A
     * condition matching one top-level scalar claim in the workload's identity token.
     */
    "claim_conditions": Array<WorkloadIdentityClaimCondition>;
    /** Shape $ (Value): string. Time the identity was created. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ResourceReference}. The user or credential that created a workload
     * identity, identified by resource type and ID.
     */
    "created_by": ResourceReference;
    /** Shape $ (Value): string. */
    "issuer": string;
    /**
     * Shape $ (Value): string. Most recent use. Omitted before the first use. Format: date-time.
     */
    "last_used_at"?: string;
    /** Shape $ (Value): string.  Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): string. Computed from the issuer. New platform values may be added. Value
     * enum: "generic", "github_actions", "gitlab_ci", "google_cloud", "aws", "azure",
     * "kubernetes", "circleci", "buildkite", "vercel", "fly_io".
     */
    "platform": "generic"
        | "github_actions"
        | "gitlab_ci"
        | "google_cloud"
        | "aws"
        | "azure"
        | "kubernetes"
        | "circleci"
        | "buildkite"
        | "vercel"
        | "fly_io"
        | (string & {});
    /** Shape $ (Value): string. The sandbox containing this identity. Present only in test mode. */
    "sandbox_id"?: string;
    /**
     * Shape $ (Value): Array of string. Complete scope set granted to this identity. Replaced as a
     * whole on PATCH. Shape $[] (Value): string.
     */
    "scopes": Array<string>;
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. */
    "subject": string;
    /** Shape $ (Value): string.  Value enum: "exact", "glob". */
    "subject_match": "exact" | "glob" | (string & {});
    /** Shape $ (Value): string. Time the identity last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Positive concurrency version. Increases on policy and
     * lifecycle changes. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1.
     */
    "version": `${bigint}`;
    /** Shape $ (Value): string. */
    "workload_identity_id": string;
};
/**
 * Shape $ (Value): {@link WorkloadIdentityClaimCondition}. A condition matching one top-level
 * scalar claim in the workload's identity token.
 */
export type WorkloadIdentityClaimCondition = {
    /**
     * Shape $ (Value): string. Literal top-level scalar claim name. Registered JWT claims are
     * reserved.
     */
    "claim": string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "match": "exact" | "glob" | (string & {});
    /** Shape $ (Value): string. */
    "value": string;
};
