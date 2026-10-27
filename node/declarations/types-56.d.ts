import type { DeliveryProfile } from './types-13.js';
import type { PartnerWebhookEnvelope, PartnerEnvironmentGrant } from './types-35.js';
import type { MerchantWebhookEnvelope } from './types-31.js';
import type { DeliveryRateCallback, DeliveryRevocation } from './types-14.js';
import type { DeliverySelection, DeliveryZone } from './types-15.js';
import type { Dispute } from './types-16.js';
import type { FraudWarning, Fulfillment, FulfillmentEvent } from './types-17.js';
import type { GiftCard } from './types-18.js';
import type { GiftCardLoad, GiftCardNotification } from './types-19.js';
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
