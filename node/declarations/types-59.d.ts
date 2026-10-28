import type { DeliveryLocationSet, DeliveryMethod } from './types-13.js';
import type { MerchantWebhookEnvelope } from './types-32.js';
import type { PartnerWebhookEnvelope, PartnerEnvironmentGrant } from './types-37.js';
import type { DeliveryProfile, DeliveryRateCallback } from './types-15.js';
import type { DeliveryRevocation, DeliverySelection } from './types-16.js';
import type { DeliveryZone, Dispute } from './types-17.js';
import type { FraudWarning } from './types-18.js';
import type { Fulfillment } from './types-19.js';
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
/**
 * Shape $ (Value): {@link Webhook_delivery_profile_archived_merchant}. The
 * `delivery_profile.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_delivery_profile_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
});
/**
 * Shape $ (Value): {@link Webhook_delivery_profile_created_installed_merchants}. The
 * `delivery_profile.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_profile_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "delivery_profile.created". */
    "event_type"?: "delivery_profile.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_profile_created_merchant}. The
 * `delivery_profile.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_delivery_profile_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "delivery_profile.created". */
    "event_type"?: "delivery_profile.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_profile_deactivated_installed_merchants}. The
 * `delivery_profile.deactivated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_delivery_profile_deactivated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "delivery_profile.deactivated". */
    "event_type"?: "delivery_profile.deactivated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_profile_deactivated_merchant}. The
 * `delivery_profile.deactivated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_delivery_profile_deactivated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "delivery_profile.deactivated". */
    "event_type"?: "delivery_profile.deactivated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_profile_updated_installed_merchants}. The
 * `delivery_profile.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_profile_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "delivery_profile.updated". */
    "event_type"?: "delivery_profile.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_profile_updated_merchant}. The
 * `delivery_profile.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_delivery_profile_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Shape $ (Value): string.  Value enum: "delivery_profile.updated". */
    "event_type"?: "delivery_profile.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_rate_callback_activated_installed_merchants}. The
 * `delivery_rate_callback.activated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_delivery_rate_callback_activated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryRateCallback}. An
     * endpoint that supplies delivery rates.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
         */
        "object": DeliveryRateCallback;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback.activated". */
    "event_type"?: "delivery_rate_callback.activated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_rate_callback_activated_merchant}. The
 * `delivery_rate_callback.activated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_delivery_rate_callback_activated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryRateCallback}. An
     * endpoint that supplies delivery rates.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
         */
        "object": DeliveryRateCallback;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback.activated". */
    "event_type"?: "delivery_rate_callback.activated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_rate_callback_archived_installed_merchants}. The
 * `delivery_rate_callback.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_delivery_rate_callback_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryRateCallback}. An
     * endpoint that supplies delivery rates.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
         */
        "object": DeliveryRateCallback;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback.archived". */
    "event_type"?: "delivery_rate_callback.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_rate_callback_archived_merchant}. The
 * `delivery_rate_callback.archived` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_delivery_rate_callback_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryRateCallback}. An
     * endpoint that supplies delivery rates.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
         */
        "object": DeliveryRateCallback;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback.archived". */
    "event_type"?: "delivery_rate_callback.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_rate_callback_created_installed_merchants}. The
 * `delivery_rate_callback.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_delivery_rate_callback_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryRateCallback}. An
     * endpoint that supplies delivery rates.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
         */
        "object": DeliveryRateCallback;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback.created". */
    "event_type"?: "delivery_rate_callback.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_rate_callback_created_merchant}. The
 * `delivery_rate_callback.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_delivery_rate_callback_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryRateCallback}. An
     * endpoint that supplies delivery rates.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
         */
        "object": DeliveryRateCallback;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback.created". */
    "event_type"?: "delivery_rate_callback.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_rate_callback_deactivated_installed_merchants}. The
 * `delivery_rate_callback.deactivated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_delivery_rate_callback_deactivated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryRateCallback}. An
     * endpoint that supplies delivery rates.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
         */
        "object": DeliveryRateCallback;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback.deactivated". */
    "event_type"?: "delivery_rate_callback.deactivated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_rate_callback_deactivated_merchant}. The
 * `delivery_rate_callback.deactivated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_delivery_rate_callback_deactivated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryRateCallback}. An
     * endpoint that supplies delivery rates.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
         */
        "object": DeliveryRateCallback;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback.deactivated". */
    "event_type"?: "delivery_rate_callback.deactivated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_rate_callback_updated_installed_merchants}. The
 * `delivery_rate_callback.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_delivery_rate_callback_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryRateCallback}. An
     * endpoint that supplies delivery rates.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
         */
        "object": DeliveryRateCallback;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback.updated". */
    "event_type"?: "delivery_rate_callback.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_rate_callback_updated_merchant}. The
 * `delivery_rate_callback.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_delivery_rate_callback_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryRateCallback}. An
     * endpoint that supplies delivery rates.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
         */
        "object": DeliveryRateCallback;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback.updated". */
    "event_type"?: "delivery_rate_callback.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_revocation_created_installed_merchants}. The
 * `delivery_revocation.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_revocation_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryRevocation}. A withdrawal
     * of a previously available delivery choice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryRevocation}. A withdrawal of a previously available
         * delivery choice.
         */
        "object": DeliveryRevocation;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_revocation.created". */
    "event_type"?: "delivery_revocation.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_revocation_created_merchant}. The
 * `delivery_revocation.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_delivery_revocation_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryRevocation}. A withdrawal
     * of a previously available delivery choice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliveryRevocation}. A withdrawal of a previously available
         * delivery choice.
         */
        "object": DeliveryRevocation;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_revocation.created". */
    "event_type"?: "delivery_revocation.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_selection_committed_installed_merchants}. The
 * `delivery_selection.committed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_delivery_selection_committed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliverySelection}. The delivery
     * choice selected for a checkout or order.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliverySelection}. The delivery choice selected for a checkout
         * or order.
         */
        "object": DeliverySelection;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_selection.committed". */
    "event_type"?: "delivery_selection.committed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_selection_committed_merchant}. The
 * `delivery_selection.committed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_delivery_selection_committed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliverySelection}. The delivery
     * choice selected for a checkout or order.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link DeliverySelection}. The delivery choice selected for a checkout
         * or order.
         */
        "object": DeliverySelection;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_selection.committed". */
    "event_type"?: "delivery_selection.committed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_zone_activated_installed_merchants}. The
 * `delivery_zone.activated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_zone_activated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryZone}. A geographic area
     * served by a delivery method.
     */
    "data"?: {
        /** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_zone.activated". */
    "event_type"?: "delivery_zone.activated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_delivery_zone_activated_merchant}. The `delivery_zone.activated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_delivery_zone_activated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link DeliveryZone}. A geographic area
     * served by a delivery method.
     */
    "data"?: {
        /** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Shape $ (Value): string.  Value enum: "delivery_zone.activated". */
    "event_type"?: "delivery_zone.activated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_delivery_zone_archived_installed_merchants}. The
 * `delivery_zone.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_delivery_zone_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
