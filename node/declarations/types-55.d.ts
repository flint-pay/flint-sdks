import type { CustomDomain, Customer, CustomerDeletionRequest } from './types-10.js';
import type { MerchantWebhookEnvelope } from './types-31.js';
import type { PartnerWebhookEnvelope } from './types-35.js';
import type { DeliveryLocationSet, DeliveryMethod } from './types-12.js';
import type { DeliveryProfile } from './types-13.js';
import type { DeliveryRateCallback, DeliveryRevocation, DeliverySelection } from './types-14.js';
import type { DeliveryZone } from './types-15.js';
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
