import type { InventoryReservation, InventoryTransfer } from './types-25.js';
import type { PartnerWebhookEnvelope } from './types-35.js';
import type { MerchantWebhookEnvelope } from './types-31.js';
import type { Invoice, InvoiceDeliveryAttempt, InvoiceManualPayment, InvoicePaymentAttempt } from './types-26.js';
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
/**
 * Shape $ (Value): {@link Webhook_invoice_created_installed_merchants}. The `invoice.created`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_invoice_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.created". */
    "event_type"?: "invoice.created" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_created_merchant}. The `invoice.created` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.created". */
    "event_type"?: "invoice.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_credited_installed_merchants}. The `invoice.credited`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_invoice_credited_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.credited". */
    "event_type"?: "invoice.credited" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_credited_merchant}. The `invoice.credited` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_credited_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.credited". */
    "event_type"?: "invoice.credited" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_delivery_attempt_failed_installed_merchants}. The
 * `invoice_delivery_attempt.failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_delivery_attempt_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceDeliveryAttempt}. One
     * attempt to deliver an invoice by email, either the original send or a reminder, with its
     * recipients and status.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
         * email, either the original send or a reminder, with its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_delivery_attempt.failed". */
    "event_type"?: "invoice_delivery_attempt.failed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_delivery_attempt_failed_merchant}. The
 * `invoice_delivery_attempt.failed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_delivery_attempt_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceDeliveryAttempt}. One
     * attempt to deliver an invoice by email, either the original send or a reminder, with its
     * recipients and status.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
         * email, either the original send or a reminder, with its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_delivery_attempt.failed". */
    "event_type"?: "invoice_delivery_attempt.failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_delivery_attempt_sent_installed_merchants}. The
 * `invoice_delivery_attempt.sent` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_delivery_attempt_sent_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceDeliveryAttempt}. One
     * attempt to deliver an invoice by email, either the original send or a reminder, with its
     * recipients and status.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
         * email, either the original send or a reminder, with its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_delivery_attempt.sent". */
    "event_type"?: "invoice_delivery_attempt.sent" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_delivery_attempt_sent_merchant}. The
 * `invoice_delivery_attempt.sent` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_delivery_attempt_sent_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceDeliveryAttempt}. One
     * attempt to deliver an invoice by email, either the original send or a reminder, with its
     * recipients and status.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
         * email, either the original send or a reminder, with its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_delivery_attempt.sent". */
    "event_type"?: "invoice_delivery_attempt.sent" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_delivery_attempt_suppressed_installed_merchants}. The
 * `invoice_delivery_attempt.suppressed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_delivery_attempt_suppressed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceDeliveryAttempt}. One
     * attempt to deliver an invoice by email, either the original send or a reminder, with its
     * recipients and status.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
         * email, either the original send or a reminder, with its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_delivery_attempt.suppressed". */
    "event_type"?: "invoice_delivery_attempt.suppressed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_delivery_attempt_suppressed_merchant}. The
 * `invoice_delivery_attempt.suppressed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_invoice_delivery_attempt_suppressed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceDeliveryAttempt}. One
     * attempt to deliver an invoice by email, either the original send or a reminder, with its
     * recipients and status.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by
         * email, either the original send or a reminder, with its recipients and status.
         */
        "object": InvoiceDeliveryAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_delivery_attempt.suppressed". */
    "event_type"?: "invoice_delivery_attempt.suppressed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_issue_failed_installed_merchants}. The
 * `invoice.issue_failed` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_invoice_issue_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.issue_failed". */
    "event_type"?: "invoice.issue_failed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_issue_failed_merchant}. The `invoice.issue_failed`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_issue_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.issue_failed". */
    "event_type"?: "invoice.issue_failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_issued_installed_merchants}. The `invoice.issued`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_invoice_issued_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.issued". */
    "event_type"?: "invoice.issued" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_issued_merchant}. The `invoice.issued` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_issued_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.issued". */
    "event_type"?: "invoice.issued" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_late_fee_assessed_installed_merchants}. The
 * `invoice.late_fee_assessed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_invoice_late_fee_assessed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.late_fee_assessed". */
    "event_type"?: "invoice.late_fee_assessed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_late_fee_assessed_merchant}. The
 * `invoice.late_fee_assessed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_invoice_late_fee_assessed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.late_fee_assessed". */
    "event_type"?: "invoice.late_fee_assessed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_late_fee_due_installed_merchants}. The
 * `invoice.late_fee_due` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_invoice_late_fee_due_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.late_fee_due". */
    "event_type"?: "invoice.late_fee_due" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_late_fee_due_merchant}. The `invoice.late_fee_due`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_late_fee_due_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.late_fee_due". */
    "event_type"?: "invoice.late_fee_due" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_late_fee_waived_installed_merchants}. The
 * `invoice.late_fee_waived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_invoice_late_fee_waived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.late_fee_waived". */
    "event_type"?: "invoice.late_fee_waived" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_late_fee_waived_merchant}. The `invoice.late_fee_waived`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_late_fee_waived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.late_fee_waived". */
    "event_type"?: "invoice.late_fee_waived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_manual_payment_created_installed_merchants}. The
 * `invoice_manual_payment.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_manual_payment_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceManualPayment}. A recorded
     * offline payment against an invoice. Its amount contributes to invoice paid_money while
     * recorded; reversing it returns its full amount to outstanding_money. A payment can cover
     * principal and late fees. Manual payments are separate from online payment attempts.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an
         * invoice. Its amount contributes to invoice paid_money while recorded; reversing it
         * returns its full amount to outstanding_money. A payment can cover principal and late
         * fees. Manual payments are separate from online payment attempts.
         */
        "object": InvoiceManualPayment;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_manual_payment.created". */
    "event_type"?: "invoice_manual_payment.created" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_manual_payment_created_merchant}. The
 * `invoice_manual_payment.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_manual_payment_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceManualPayment}. A recorded
     * offline payment against an invoice. Its amount contributes to invoice paid_money while
     * recorded; reversing it returns its full amount to outstanding_money. A payment can cover
     * principal and late fees. Manual payments are separate from online payment attempts.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an
         * invoice. Its amount contributes to invoice paid_money while recorded; reversing it
         * returns its full amount to outstanding_money. A payment can cover principal and late
         * fees. Manual payments are separate from online payment attempts.
         */
        "object": InvoiceManualPayment;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_manual_payment.created". */
    "event_type"?: "invoice_manual_payment.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_manual_payment_reversed_installed_merchants}. The
 * `invoice_manual_payment.reversed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_manual_payment_reversed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceManualPayment}. A recorded
     * offline payment against an invoice. Its amount contributes to invoice paid_money while
     * recorded; reversing it returns its full amount to outstanding_money. A payment can cover
     * principal and late fees. Manual payments are separate from online payment attempts.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an
         * invoice. Its amount contributes to invoice paid_money while recorded; reversing it
         * returns its full amount to outstanding_money. A payment can cover principal and late
         * fees. Manual payments are separate from online payment attempts.
         */
        "object": InvoiceManualPayment;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_manual_payment.reversed". */
    "event_type"?: "invoice_manual_payment.reversed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_manual_payment_reversed_merchant}. The
 * `invoice_manual_payment.reversed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_manual_payment_reversed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoiceManualPayment}. A recorded
     * offline payment against an invoice. Its amount contributes to invoice paid_money while
     * recorded; reversing it returns its full amount to outstanding_money. A payment can cover
     * principal and late fees. Manual payments are separate from online payment attempts.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an
         * invoice. Its amount contributes to invoice paid_money while recorded; reversing it
         * returns its full amount to outstanding_money. A payment can cover principal and late
         * fees. Manual payments are separate from online payment attempts.
         */
        "object": InvoiceManualPayment;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_manual_payment.reversed". */
    "event_type"?: "invoice_manual_payment.reversed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_marked_uncollectible_installed_merchants}. The
 * `invoice.marked_uncollectible` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_marked_uncollectible_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.marked_uncollectible". */
    "event_type"?: "invoice.marked_uncollectible" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_marked_uncollectible_merchant}. The
 * `invoice.marked_uncollectible` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_invoice_marked_uncollectible_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.marked_uncollectible". */
    "event_type"?: "invoice.marked_uncollectible" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_overdue_installed_merchants}. The `invoice.overdue`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_invoice_overdue_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.overdue". */
    "event_type"?: "invoice.overdue" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_overdue_merchant}. The `invoice.overdue` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_overdue_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.overdue". */
    "event_type"?: "invoice.overdue" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_paid_installed_merchants}. The `invoice.paid` webhook
 * payload for the `installed_merchants` event source. Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_paid_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.paid". */
    "event_type"?: "invoice.paid" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_paid_merchant}. The `invoice.paid` webhook payload for
 * the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_paid_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.paid". */
    "event_type"?: "invoice.paid" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_partially_paid_installed_merchants}. The
 * `invoice.partially_paid` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_invoice_partially_paid_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.partially_paid". */
    "event_type"?: "invoice.partially_paid" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_partially_paid_merchant}. The `invoice.partially_paid`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_invoice_partially_paid_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.partially_paid". */
    "event_type"?: "invoice.partially_paid" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_partially_refunded_installed_merchants}. The
 * `invoice.partially_refunded` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_invoice_partially_refunded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.partially_refunded". */
    "event_type"?: "invoice.partially_refunded" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_partially_refunded_merchant}. The
 * `invoice.partially_refunded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_invoice_partially_refunded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Invoice}. A bill issued to a
     * customer.
     */
    "data"?: {
        /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
        "object": Invoice;
    };
    /** Shape $ (Value): string.  Value enum: "invoice.partially_refunded". */
    "event_type"?: "invoice.partially_refunded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_canceled_installed_merchants}. The
 * `invoice_payment_attempt.canceled` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_payment_attempt_canceled_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.canceled". */
    "event_type"?: "invoice_payment_attempt.canceled" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_canceled_merchant}. The
 * `invoice_payment_attempt.canceled` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type Webhook_invoice_payment_attempt_canceled_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.canceled". */
    "event_type"?: "invoice_payment_attempt.canceled" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_expired_installed_merchants}. The
 * `invoice_payment_attempt.expired` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_payment_attempt_expired_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.expired". */
    "event_type"?: "invoice_payment_attempt.expired" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_expired_merchant}. The
 * `invoice_payment_attempt.expired` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_payment_attempt_expired_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.expired". */
    "event_type"?: "invoice_payment_attempt.expired" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_failed_installed_merchants}. The
 * `invoice_payment_attempt.failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type Webhook_invoice_payment_attempt_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.failed". */
    "event_type"?: "invoice_payment_attempt.failed" | (string & {});
    /**
     * Shape $ (Value): object. Shape $.environment_grant_id (Required): string. Shape
     * $.merchant_id (Required): string. Shape $.mode (Required): string. Value enum: "test",
     * "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional):
     * string. Shape $.type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * Shape $ (Value): {@link Webhook_invoice_payment_attempt_failed_merchant}. The
 * `invoice_payment_attempt.failed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type Webhook_invoice_payment_attempt_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link InvoicePaymentAttempt}. An
     * attempt to collect payment for an invoice.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
         * invoice.
         */
        "object": InvoicePaymentAttempt;
    };
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.failed". */
    "event_type"?: "invoice_payment_attempt.failed" | (string & {});
});
