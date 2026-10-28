import type { PartnerWebhookEnvelope } from './types-37.js';
import type { ReturnDisposition, ReturnInspection } from './types-43.js';
import type { MerchantWebhookEnvelope } from './types-32.js';
import type { ReturnReceipt, ReturnResource, ReturnResolution } from './types-44.js';
import type { Shipment, Subscription } from './types-47.js';
import type { SubscriptionDeliveryMigration, SubscriptionPaymentRetry } from './types-48.js';
/**
 * Shape $ (Value): {@link Webhook_return_disposition_created_installed_merchants}. The
 * `return_disposition.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_return_disposition_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnDisposition}. A decision
     * about how returned merchandise will be handled.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnDisposition}. A decision about how returned merchandise
         * will be handled.
         */
        "object": ReturnDisposition;
    };
    /** Shape $ (Value): string.  Value enum: "return_disposition.created". */
    "event_type"?: "return_disposition.created" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
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
 * Shape $ (Value): {@link Webhook_return_disposition_created_merchant}. The
 * `return_disposition.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_return_disposition_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnDisposition}. A decision
     * about how returned merchandise will be handled.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnDisposition}. A decision about how returned merchandise
         * will be handled.
         */
        "object": ReturnDisposition;
    };
    /** Shape $ (Value): string.  Value enum: "return_disposition.created". */
    "event_type"?: "return_disposition.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_disposition_updated_installed_merchants}. The
 * `return_disposition.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_return_disposition_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnDisposition}. A decision
     * about how returned merchandise will be handled.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnDisposition}. A decision about how returned merchandise
         * will be handled.
         */
        "object": ReturnDisposition;
    };
    /** Shape $ (Value): string.  Value enum: "return_disposition.updated". */
    "event_type"?: "return_disposition.updated" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
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
 * Shape $ (Value): {@link Webhook_return_disposition_updated_merchant}. The
 * `return_disposition.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_return_disposition_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnDisposition}. A decision
     * about how returned merchandise will be handled.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnDisposition}. A decision about how returned merchandise
         * will be handled.
         */
        "object": ReturnDisposition;
    };
    /** Shape $ (Value): string.  Value enum: "return_disposition.updated". */
    "event_type"?: "return_disposition.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_inspection_acceptance_decided_installed_merchants}. The
 * `return_inspection.acceptance_decided` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type Webhook_return_inspection_acceptance_decided_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnInspection}. An assessment
     * of the condition of returned items.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnInspection}. An assessment of the condition of returned
         * items.
         */
        "object": ReturnInspection;
    };
    /** Shape $ (Value): string.  Value enum: "return_inspection.acceptance_decided". */
    "event_type"?: "return_inspection.acceptance_decided" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
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
 * Shape $ (Value): {@link Webhook_return_inspection_acceptance_decided_merchant}. The
 * `return_inspection.acceptance_decided` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_return_inspection_acceptance_decided_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnInspection}. An assessment
     * of the condition of returned items.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnInspection}. An assessment of the condition of returned
         * items.
         */
        "object": ReturnInspection;
    };
    /** Shape $ (Value): string.  Value enum: "return_inspection.acceptance_decided". */
    "event_type"?: "return_inspection.acceptance_decided" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_inspection_created_installed_merchants}. The
 * `return_inspection.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_return_inspection_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnInspection}. An assessment
     * of the condition of returned items.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnInspection}. An assessment of the condition of returned
         * items.
         */
        "object": ReturnInspection;
    };
    /** Shape $ (Value): string.  Value enum: "return_inspection.created". */
    "event_type"?: "return_inspection.created" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
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
 * Shape $ (Value): {@link Webhook_return_inspection_created_merchant}. The
 * `return_inspection.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_return_inspection_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnInspection}. An assessment
     * of the condition of returned items.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnInspection}. An assessment of the condition of returned
         * items.
         */
        "object": ReturnInspection;
    };
    /** Shape $ (Value): string.  Value enum: "return_inspection.created". */
    "event_type"?: "return_inspection.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_inspection_superseded_installed_merchants}. The
 * `return_inspection.superseded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_return_inspection_superseded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnInspection}. An assessment
     * of the condition of returned items.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnInspection}. An assessment of the condition of returned
         * items.
         */
        "object": ReturnInspection;
    };
    /** Shape $ (Value): string.  Value enum: "return_inspection.superseded". */
    "event_type"?: "return_inspection.superseded" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
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
 * Shape $ (Value): {@link Webhook_return_inspection_superseded_merchant}. The
 * `return_inspection.superseded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_return_inspection_superseded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnInspection}. An assessment
     * of the condition of returned items.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnInspection}. An assessment of the condition of returned
         * items.
         */
        "object": ReturnInspection;
    };
    /** Shape $ (Value): string.  Value enum: "return_inspection.superseded". */
    "event_type"?: "return_inspection.superseded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_receipt_created_installed_merchants}. The
 * `return_receipt.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_return_receipt_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnReceipt}. A record of
     * returned items arriving at a location.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnReceipt}. A record of returned items arriving at a
         * location.
         */
        "object": ReturnReceipt;
    };
    /** Shape $ (Value): string.  Value enum: "return_receipt.created". */
    "event_type"?: "return_receipt.created" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
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
 * Shape $ (Value): {@link Webhook_return_receipt_created_merchant}. The `return_receipt.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_return_receipt_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnReceipt}. A record of
     * returned items arriving at a location.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnReceipt}. A record of returned items arriving at a
         * location.
         */
        "object": ReturnReceipt;
    };
    /** Shape $ (Value): string.  Value enum: "return_receipt.created". */
    "event_type"?: "return_receipt.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_receipt_superseded_installed_merchants}. The
 * `return_receipt.superseded` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_return_receipt_superseded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnReceipt}. A record of
     * returned items arriving at a location.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnReceipt}. A record of returned items arriving at a
         * location.
         */
        "object": ReturnReceipt;
    };
    /** Shape $ (Value): string.  Value enum: "return_receipt.superseded". */
    "event_type"?: "return_receipt.superseded" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
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
 * Shape $ (Value): {@link Webhook_return_receipt_superseded_merchant}. The
 * `return_receipt.superseded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_return_receipt_superseded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnReceipt}. A record of
     * returned items arriving at a location.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnReceipt}. A record of returned items arriving at a
         * location.
         */
        "object": ReturnReceipt;
    };
    /** Shape $ (Value): string.  Value enum: "return_receipt.superseded". */
    "event_type"?: "return_receipt.superseded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_receipt_verified_installed_merchants}. The
 * `return_receipt.verified` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_return_receipt_verified_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnReceipt}. A record of
     * returned items arriving at a location.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnReceipt}. A record of returned items arriving at a
         * location.
         */
        "object": ReturnReceipt;
    };
    /** Shape $ (Value): string.  Value enum: "return_receipt.verified". */
    "event_type"?: "return_receipt.verified" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
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
 * Shape $ (Value): {@link Webhook_return_receipt_verified_merchant}. The `return_receipt.verified`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_return_receipt_verified_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnReceipt}. A record of
     * returned items arriving at a location.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link ReturnReceipt}. A record of returned items arriving at a
         * location.
         */
        "object": ReturnReceipt;
    };
    /** Shape $ (Value): string.  Value enum: "return_receipt.verified". */
    "event_type"?: "return_receipt.verified" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_reopened_installed_merchants}. The `return.reopened`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_return_reopened_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
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
