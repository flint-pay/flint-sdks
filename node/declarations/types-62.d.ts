import type { MerchantWebhookEnvelope, ModifierGroup } from './types-32.js';
import type { PartnerWebhookEnvelope, PaymentIntent, PaymentLink } from './types-37.js';
import type { ModifierSet, Order } from './types-33.js';
import type { Package, PartnerAppInstall } from './types-36.js';
import type { PaymentMethod } from './types-38.js';
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
