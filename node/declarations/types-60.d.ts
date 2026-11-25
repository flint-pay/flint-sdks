import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-44.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { WebhookReader } from './types-80.js';
import type { ResponseMeta } from './types-63.js';
import type { InputValue } from '../runtime.js';
import type {
    DisputesAcceptParams,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedCustomerSummaryPreviousAttributes,
    ExpandedOrderSummaryPreviousAttributes,
    ExpandedPaymentIntentSummaryPreviousAttributes
} from './types-26.js';
import type { CreateReaderRequestInput } from './types-13.js';
import type { SimulateReaderRequestInput } from './types-69.js';
import type { UpdateReaderRequestInput } from './types-78.js';
import type { InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-32.js';
import type { PaymentRefund, PaymentRefundPreviousAttributes } from './types-53.js';
import type {
    RefundLineItemAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery,
    RefundLineItemAllocationPreviousAttributes,
    RefundTaxBreakdownRefundPreviousAttributes,
    RefundTenderAllocationPreviousAttributes,
    RefundUnissuedGiftCardRecoveryPreviousAttributes
} from './types-61.js';
/** A net unit price that applies when one catalog line reaches minimum_quantity. */
export type QuantityPriceBreak = {
    /**
     * Minimum whole-number quantity on one line for this price to apply; fractional quantities are
     * not supported. Must strictly increase between entries. Format: int64. minimum: 2.
     */
    "minimum_quantity": number;
    /**
     * Net unit price in the base unit price's currency. Must be greater than zero and below the
     * preceding price, starting with the base unit price. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
export type QuantityPriceBreakPreviousAttributes = {
    /**
     * Minimum whole-number quantity on one line for this price to apply; fractional quantities are
     * not supported. Must strictly increase between entries. anyOf[1] (Value): integer. Minimum
     * whole-number quantity on one line for this price to apply; fractional quantities are not
     * supported. Must strictly increase between entries. Format: int64. minimum: 2. anyOf[2]
     * (Value): null.
     */
    "minimum_quantity"?: ((number) | (null));
    /**
     * Net unit price in the base unit price's currency. Must be greater than zero and below the
     * preceding price, starting with the base unit price. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/** A net unit price that applies when one catalog line reaches minimum_quantity. */
export type QuantityPriceBreakRequestInput = {
    /**
     * Minimum whole-number quantity on one line for this price to apply; fractional quantities are
     * not supported. Must strictly increase between entries. Format: int64. minimum: 2.
     */
    "minimum_quantity": number;
    /**
     * Net unit price in the base unit price's currency. Must be greater than zero and below the
     * preceding price, starting with the base unit price. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
};
/**
 * Storage usage and limits for a resource, returned in the error details when an image quota is
 * exhausted.
 */
export type QuotaDetails = {
    /** Maximum bytes available for the resource in the authenticated scope. Format: int64. */
    "limit_bytes": number;
    /**
     * RFC 3339 time when the next ready unattached image becomes eligible for cleanup, when known.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "next_expiration_at"?: string;
    /** Stored bytes held by completed images that are not attached to a resource. Format: int64. */
    "ready_unattached_bytes": number;
    /** Bytes reserved by in-progress resource mutations. Format: int64. */
    "reserved_bytes": number;
    /** Stable resource name whose quota was exhausted. */
    "resource": string;
    /** Bytes currently stored for the resource in the authenticated scope. Format: int64. */
    "used_bytes": number;
};
/** A card reader or Tap to Pay phone that takes in-person payments at a location. */
export type Reader = {
    /**
     * The payment intent presented on the reader now. Omitted while the reader is idle. It follows
     * the payment, so it doesn't advance the reader's `version` or send a reader event. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "active_payment_intent_id"?: string;
    /**
     * Smart readers only, and omitted once the reader is archived. Observed reader state: it
     * changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on
     * it: Flint checks the reader itself before it sends a payment. Observed connectivity of a
     * smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and
     * every five minutes for active live smart readers.
     */
    "connectivity"?: ReaderConnectivity;
    /** When the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the
     * phone it runs on. Omitted when none is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`.
     */
    "is_simulated": boolean;
    /**
     * The location the reader is at. Set at registration and never changed: to move a reader,
     * archive it and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Your key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata": MetadataMap;
    /**
     * The smart reader's model, read from the reader at registration. Smart readers only. Value
     * enum: "stripe_reader_s700", "stripe_reader_s710", "other".
     */
    "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
    /** Your label for the reader. minLength: 1. maxLength: 255. */
    "name": string;
    /** Unique identifier for the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". */
    "reader_id": string;
    /**
     * The smart reader's serial number, read from the reader at registration. Smart readers only.
     */
    "serial_number"?: string;
    /** Whether the reader can take payments. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /**
     * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is
     * a phone driven by the Stripe Terminal SDK in your app. Value enum: "smart_reader",
     * "tap_to_pay".
     */
    "type": "smart_reader" | "tap_to_pay" | (string & {});
    /** When the reader last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type ReaderArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookReader;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "is_simulated"?: ((boolean) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            "name"?: ((string) | (null));
            "reader_id"?: ((string) | (null));
            "serial_number"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "reader.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookReader;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "is_simulated"?: ((boolean) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            "name"?: ((string) | (null));
            "reader_id"?: ((string) | (null));
            "serial_number"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "reader.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "reader.archived";
});
/**
 * The `reader.archived` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReaderArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookReader}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_intent_id`. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.connectivity (Optional): {@link
     * ReaderConnectivityPreviousAttributes} or null. Smart readers only, and omitted once the
     * reader is archived. Observed reader state: it changes without a write, doesn't advance
     * `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself
     * before it sends a payment. previous_attributes.connectivity.anyOf[1] (Value): {@link
     * ReaderConnectivityPreviousAttributes}. previous_attributes.connectivity.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. When the reader was
     * registered. previous_attributes.created_at.anyOf[1] (Value): string. When the reader was
     * registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.device_id
     * (Optional): string or null. The register, kiosk or phone the reader takes payments for; on a
     * Tap to Pay reader, the phone it runs on. Omitted when none is set.
     * previous_attributes.device_id.anyOf[1] (Value): string. The register, kiosk or phone the
     * reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none
     * is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2]
     * (Value): null. previous_attributes.is_simulated (Optional): boolean or null. `true` for a
     * sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * previous_attributes.is_simulated.anyOf[1] (Value): boolean. `true` for a sandbox simulated
     * reader, registered with `registration_code: simulated-s700`.
     * previous_attributes.is_simulated.anyOf[2] (Value): null. previous_attributes.location_id
     * (Optional): string or null. The location the reader is at. Set at registration and never
     * changed: to move a reader, archive it and register it again.
     * previous_attributes.location_id.anyOf[1] (Value): string. The location the reader is at. Set
     * at registration and never changed: to move a reader, archive it and register it again.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.location_id.anyOf[2] (Value):
     * null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Your key-value
     * pairs for the reader. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.model (Optional):
     * string or null. The smart reader's model, read from the reader at registration. Smart
     * readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
     * previous_attributes.model.anyOf[1] (Value): string. The smart reader's model, read from the
     * reader at registration. Smart readers only. Value enum: "stripe_reader_s700",
     * "stripe_reader_s710", "other". previous_attributes.model.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Your label for the reader.
     * previous_attributes.name.anyOf[1] (Value): string. Your label for the reader. minLength: 1.
     * maxLength: 255. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.reader_id (Optional): string or null. Unique identifier for the reader.
     * previous_attributes.reader_id.anyOf[1] (Value): string. Unique identifier for the reader.
     * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". previous_attributes.reader_id.anyOf[2] (Value):
     * null. previous_attributes.serial_number (Optional): string or null. The smart reader's
     * serial number, read from the reader at registration. Smart readers only.
     * previous_attributes.serial_number.anyOf[1] (Value): string. The smart reader's serial
     * number, read from the reader at registration. Smart readers only.
     * previous_attributes.serial_number.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Whether the reader can take payments. Value enum: "active",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Whether the reader can take
     * payments. Value enum: "active", "archived". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. What kind of reader it is. A
     * smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe
     * Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
     * previous_attributes.type.anyOf[1] (Value): string. What kind of reader it is. A smart reader
     * is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK
     * in your app. Value enum: "smart_reader", "tap_to_pay". previous_attributes.type.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. When the reader
     * last changed. previous_attributes.updated_at.anyOf[1] (Value): string. When the reader last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted version of this resource's
     * owned state. Expanded resources and external observations can change independently. Format:
     * uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`.
         */
        "object": WebhookReader;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. connectivity (Optional): {@link
         * ReaderConnectivityPreviousAttributes} or null. Smart readers only, and omitted once the
         * reader is archived. Observed reader state: it changes without a write, doesn't advance
         * `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself
         * before it sends a payment. connectivity.anyOf[1] (Value): {@link
         * ReaderConnectivityPreviousAttributes}. connectivity.anyOf[2] (Value): null. created_at
         * (Optional): string or null. When the reader was registered. created_at.anyOf[1] (Value):
         * string. When the reader was registered. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. device_id (Optional): string
         * or null. The register, kiosk or phone the reader takes payments for; on a Tap to Pay
         * reader, the phone it runs on. Omitted when none is set. device_id.anyOf[1] (Value):
         * string. The register, kiosk or phone the reader takes payments for; on a Tap to Pay
         * reader, the phone it runs on. Omitted when none is set. Example:
         * "dev_01KEZF7C0051ZP8MZSGHP989F6". device_id.anyOf[2] (Value): null. is_simulated
         * (Optional): boolean or null. `true` for a sandbox simulated reader, registered with
         * `registration_code: simulated-s700`. is_simulated.anyOf[1] (Value): boolean. `true` for
         * a sandbox simulated reader, registered with `registration_code: simulated-s700`.
         * is_simulated.anyOf[2] (Value): null. location_id (Optional): string or null. The
         * location the reader is at. Set at registration and never changed: to move a reader,
         * archive it and register it again. location_id.anyOf[1] (Value): string. The location the
         * reader is at. Set at registration and never changed: to move a reader, archive it and
         * register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Your key-value pairs
         * for the reader. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2]
         * (Value): null. model (Optional): string or null. The smart reader's model, read from the
         * reader at registration. Smart readers only. Value enum: "stripe_reader_s700",
         * "stripe_reader_s710", "other". model.anyOf[1] (Value): string. The smart reader's model,
         * read from the reader at registration. Smart readers only. Value enum:
         * "stripe_reader_s700", "stripe_reader_s710", "other". model.anyOf[2] (Value): null. name
         * (Optional): string or null. Your label for the reader. name.anyOf[1] (Value): string.
         * Your label for the reader. minLength: 1. maxLength: 255. name.anyOf[2] (Value): null.
         * reader_id (Optional): string or null. Unique identifier for the reader.
         * reader_id.anyOf[1] (Value): string. Unique identifier for the reader. Example:
         * "rdr_01KEZF7C007JA0G24M7SD6P46C". reader_id.anyOf[2] (Value): null. serial_number
         * (Optional): string or null. The smart reader's serial number, read from the reader at
         * registration. Smart readers only. serial_number.anyOf[1] (Value): string. The smart
         * reader's serial number, read from the reader at registration. Smart readers only.
         * serial_number.anyOf[2] (Value): null. status (Optional): string or null. Whether the
         * reader can take payments. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Whether the reader can take payments. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. type (Optional): string or null. What kind of reader it
         * is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by
         * the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
         * type.anyOf[1] (Value): string. What kind of reader it is. A smart reader is driven from
         * your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your
         * app. Value enum: "smart_reader", "tap_to_pay". type.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the reader last changed. updated_at.anyOf[1] (Value):
         * string. When the reader last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Smart readers only, and omitted once the reader is archived. Observed reader state:
             * it changes without a write, doesn't advance `version`, and sends no event. Don't
             * gate a sale on it: Flint checks the reader itself before it sends a payment.
             * anyOf[1] (Value): {@link ReaderConnectivityPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            /**
             * When the reader was registered. anyOf[1] (Value): string. When the reader was
             * registered. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader,
             * the phone it runs on. Omitted when none is set. anyOf[1] (Value): string. The
             * register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the
             * phone it runs on. Omitted when none is set. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * `true` for a sandbox simulated reader, registered with `registration_code:
             * simulated-s700`. anyOf[1] (Value): boolean. `true` for a sandbox simulated reader,
             * registered with `registration_code: simulated-s700`. anyOf[2] (Value): null.
             */
            "is_simulated"?: ((boolean) | (null));
            /**
             * The location the reader is at. Set at registration and never changed: to move a
             * reader, archive it and register it again. anyOf[1] (Value): string. The location the
             * reader is at. Set at registration and never changed: to move a reader, archive it
             * and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Your key-value pairs for the reader. anyOf[1] (Value): {@link MetadataMap}. anyOf[2]
             * (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The smart reader's model, read from the reader at registration. Smart readers only.
             * Value enum: "stripe_reader_s700", "stripe_reader_s710", "other". anyOf[1] (Value):
             * string. The smart reader's model, read from the reader at registration. Smart
             * readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
             * anyOf[2] (Value): null.
             */
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            /**
             * Your label for the reader. anyOf[1] (Value): string. Your label for the reader.
             * minLength: 1. maxLength: 255. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Unique identifier for the reader. anyOf[1] (Value): string. Unique identifier for
             * the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". anyOf[2] (Value): null.
             */
            "reader_id"?: ((string) | (null));
            /**
             * The smart reader's serial number, read from the reader at registration. Smart
             * readers only. anyOf[1] (Value): string. The smart reader's serial number, read from
             * the reader at registration. Smart readers only. anyOf[2] (Value): null.
             */
            "serial_number"?: ((string) | (null));
            /**
             * Whether the reader can take payments. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Whether the reader can take payments. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay
             * reader is a phone driven by the Stripe Terminal SDK in your app. Value enum:
             * "smart_reader", "tap_to_pay". anyOf[1] (Value): string. What kind of reader it is. A
             * smart reader is driven from your server; a Tap to Pay reader is a phone driven by
             * the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
             * anyOf[2] (Value): null.
             */
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            /**
             * When the reader last changed. anyOf[1] (Value): string. When the reader last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "reader.archived". */
    "event_type"?: "reader.archived";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `reader.archived` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReaderArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookReader}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_intent_id`. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.connectivity (Optional): {@link
     * ReaderConnectivityPreviousAttributes} or null. Smart readers only, and omitted once the
     * reader is archived. Observed reader state: it changes without a write, doesn't advance
     * `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself
     * before it sends a payment. previous_attributes.connectivity.anyOf[1] (Value): {@link
     * ReaderConnectivityPreviousAttributes}. previous_attributes.connectivity.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. When the reader was
     * registered. previous_attributes.created_at.anyOf[1] (Value): string. When the reader was
     * registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.device_id
     * (Optional): string or null. The register, kiosk or phone the reader takes payments for; on a
     * Tap to Pay reader, the phone it runs on. Omitted when none is set.
     * previous_attributes.device_id.anyOf[1] (Value): string. The register, kiosk or phone the
     * reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none
     * is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2]
     * (Value): null. previous_attributes.is_simulated (Optional): boolean or null. `true` for a
     * sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * previous_attributes.is_simulated.anyOf[1] (Value): boolean. `true` for a sandbox simulated
     * reader, registered with `registration_code: simulated-s700`.
     * previous_attributes.is_simulated.anyOf[2] (Value): null. previous_attributes.location_id
     * (Optional): string or null. The location the reader is at. Set at registration and never
     * changed: to move a reader, archive it and register it again.
     * previous_attributes.location_id.anyOf[1] (Value): string. The location the reader is at. Set
     * at registration and never changed: to move a reader, archive it and register it again.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.location_id.anyOf[2] (Value):
     * null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Your key-value
     * pairs for the reader. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.model (Optional):
     * string or null. The smart reader's model, read from the reader at registration. Smart
     * readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
     * previous_attributes.model.anyOf[1] (Value): string. The smart reader's model, read from the
     * reader at registration. Smart readers only. Value enum: "stripe_reader_s700",
     * "stripe_reader_s710", "other". previous_attributes.model.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Your label for the reader.
     * previous_attributes.name.anyOf[1] (Value): string. Your label for the reader. minLength: 1.
     * maxLength: 255. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.reader_id (Optional): string or null. Unique identifier for the reader.
     * previous_attributes.reader_id.anyOf[1] (Value): string. Unique identifier for the reader.
     * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". previous_attributes.reader_id.anyOf[2] (Value):
     * null. previous_attributes.serial_number (Optional): string or null. The smart reader's
     * serial number, read from the reader at registration. Smart readers only.
     * previous_attributes.serial_number.anyOf[1] (Value): string. The smart reader's serial
     * number, read from the reader at registration. Smart readers only.
     * previous_attributes.serial_number.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Whether the reader can take payments. Value enum: "active",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Whether the reader can take
     * payments. Value enum: "active", "archived". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. What kind of reader it is. A
     * smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe
     * Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
     * previous_attributes.type.anyOf[1] (Value): string. What kind of reader it is. A smart reader
     * is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK
     * in your app. Value enum: "smart_reader", "tap_to_pay". previous_attributes.type.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. When the reader
     * last changed. previous_attributes.updated_at.anyOf[1] (Value): string. When the reader last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted version of this resource's
     * owned state. Expanded resources and external observations can change independently. Format:
     * uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`.
         */
        "object": WebhookReader;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. connectivity (Optional): {@link
         * ReaderConnectivityPreviousAttributes} or null. Smart readers only, and omitted once the
         * reader is archived. Observed reader state: it changes without a write, doesn't advance
         * `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself
         * before it sends a payment. connectivity.anyOf[1] (Value): {@link
         * ReaderConnectivityPreviousAttributes}. connectivity.anyOf[2] (Value): null. created_at
         * (Optional): string or null. When the reader was registered. created_at.anyOf[1] (Value):
         * string. When the reader was registered. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. device_id (Optional): string
         * or null. The register, kiosk or phone the reader takes payments for; on a Tap to Pay
         * reader, the phone it runs on. Omitted when none is set. device_id.anyOf[1] (Value):
         * string. The register, kiosk or phone the reader takes payments for; on a Tap to Pay
         * reader, the phone it runs on. Omitted when none is set. Example:
         * "dev_01KEZF7C0051ZP8MZSGHP989F6". device_id.anyOf[2] (Value): null. is_simulated
         * (Optional): boolean or null. `true` for a sandbox simulated reader, registered with
         * `registration_code: simulated-s700`. is_simulated.anyOf[1] (Value): boolean. `true` for
         * a sandbox simulated reader, registered with `registration_code: simulated-s700`.
         * is_simulated.anyOf[2] (Value): null. location_id (Optional): string or null. The
         * location the reader is at. Set at registration and never changed: to move a reader,
         * archive it and register it again. location_id.anyOf[1] (Value): string. The location the
         * reader is at. Set at registration and never changed: to move a reader, archive it and
         * register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Your key-value pairs
         * for the reader. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2]
         * (Value): null. model (Optional): string or null. The smart reader's model, read from the
         * reader at registration. Smart readers only. Value enum: "stripe_reader_s700",
         * "stripe_reader_s710", "other". model.anyOf[1] (Value): string. The smart reader's model,
         * read from the reader at registration. Smart readers only. Value enum:
         * "stripe_reader_s700", "stripe_reader_s710", "other". model.anyOf[2] (Value): null. name
         * (Optional): string or null. Your label for the reader. name.anyOf[1] (Value): string.
         * Your label for the reader. minLength: 1. maxLength: 255. name.anyOf[2] (Value): null.
         * reader_id (Optional): string or null. Unique identifier for the reader.
         * reader_id.anyOf[1] (Value): string. Unique identifier for the reader. Example:
         * "rdr_01KEZF7C007JA0G24M7SD6P46C". reader_id.anyOf[2] (Value): null. serial_number
         * (Optional): string or null. The smart reader's serial number, read from the reader at
         * registration. Smart readers only. serial_number.anyOf[1] (Value): string. The smart
         * reader's serial number, read from the reader at registration. Smart readers only.
         * serial_number.anyOf[2] (Value): null. status (Optional): string or null. Whether the
         * reader can take payments. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Whether the reader can take payments. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. type (Optional): string or null. What kind of reader it
         * is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by
         * the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
         * type.anyOf[1] (Value): string. What kind of reader it is. A smart reader is driven from
         * your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your
         * app. Value enum: "smart_reader", "tap_to_pay". type.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the reader last changed. updated_at.anyOf[1] (Value):
         * string. When the reader last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Smart readers only, and omitted once the reader is archived. Observed reader state:
             * it changes without a write, doesn't advance `version`, and sends no event. Don't
             * gate a sale on it: Flint checks the reader itself before it sends a payment.
             * anyOf[1] (Value): {@link ReaderConnectivityPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            /**
             * When the reader was registered. anyOf[1] (Value): string. When the reader was
             * registered. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader,
             * the phone it runs on. Omitted when none is set. anyOf[1] (Value): string. The
             * register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the
             * phone it runs on. Omitted when none is set. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * `true` for a sandbox simulated reader, registered with `registration_code:
             * simulated-s700`. anyOf[1] (Value): boolean. `true` for a sandbox simulated reader,
             * registered with `registration_code: simulated-s700`. anyOf[2] (Value): null.
             */
            "is_simulated"?: ((boolean) | (null));
            /**
             * The location the reader is at. Set at registration and never changed: to move a
             * reader, archive it and register it again. anyOf[1] (Value): string. The location the
             * reader is at. Set at registration and never changed: to move a reader, archive it
             * and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Your key-value pairs for the reader. anyOf[1] (Value): {@link MetadataMap}. anyOf[2]
             * (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The smart reader's model, read from the reader at registration. Smart readers only.
             * Value enum: "stripe_reader_s700", "stripe_reader_s710", "other". anyOf[1] (Value):
             * string. The smart reader's model, read from the reader at registration. Smart
             * readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
             * anyOf[2] (Value): null.
             */
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            /**
             * Your label for the reader. anyOf[1] (Value): string. Your label for the reader.
             * minLength: 1. maxLength: 255. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Unique identifier for the reader. anyOf[1] (Value): string. Unique identifier for
             * the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". anyOf[2] (Value): null.
             */
            "reader_id"?: ((string) | (null));
            /**
             * The smart reader's serial number, read from the reader at registration. Smart
             * readers only. anyOf[1] (Value): string. The smart reader's serial number, read from
             * the reader at registration. Smart readers only. anyOf[2] (Value): null.
             */
            "serial_number"?: ((string) | (null));
            /**
             * Whether the reader can take payments. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Whether the reader can take payments. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay
             * reader is a phone driven by the Stripe Terminal SDK in your app. Value enum:
             * "smart_reader", "tap_to_pay". anyOf[1] (Value): string. What kind of reader it is. A
             * smart reader is driven from your server; a Tap to Pay reader is a phone driven by
             * the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
             * anyOf[2] (Value): null.
             */
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            /**
             * When the reader last changed. anyOf[1] (Value): string. When the reader last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "reader.archived". */
    "event_type"?: "reader.archived";
});
/**
 * A Tap to Pay connection session: a fresh single-use Stripe Terminal connection token for the
 * reader's location, returned only in the response that creates it.
 */
export type ReaderConnectionSession = {
    /**
     * What the Stripe Terminal SDK takes. Appears only in this response, never on the reader, in
     * lists or in webhooks. Stripe Terminal SDK inputs for one connection.
     */
    "client_session": ReaderConnectionSessionClientSession;
    /** The reader's Flint location. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /** The Tap to Pay reader the session is for. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". */
    "reader_id": string;
};
/** Stripe Terminal SDK inputs for one connection. */
export type ReaderConnectionSessionClientSession = {
    /**
     * Inputs for the Stripe Terminal SDK. Return `connection_token` from the SDK's
     * `fetchConnectionToken` callback, and pass `location_id` to
     * `TapToPayConnectionConfiguration`.
     */
    "stripe": ReaderConnectionSessionStripe;
};
/** A response containing `ReaderConnectionSession` data. */
export type ReaderConnectionSessionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A Tap to Pay connection
     * session: a fresh single-use Stripe Terminal connection token for the reader's location,
     * returned only in the response that creates it.
     */
    "data": ReaderConnectionSession;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Return `connection_token` from the SDK's `fetchConnectionToken` callback, and pass `location_id`
 * to `TapToPayConnectionConfiguration`.
 */
export type ReaderConnectionSessionStripe = {
    /**
     * Single-use Stripe Terminal connection token, scoped to the reader's Stripe location. Create
     * another session when the SDK asks for a new token. minLength: 1.
     */
    "connection_token": string;
    /**
     * The Stripe Terminal location ID the SDK's Tap to Pay connection requires. This is a Stripe
     * ID, not a Flint location ID. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
};
/**
 * Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment
 * or simulates one, and every five minutes for active live smart readers.
 */
export type ReaderConnectivity = {
    /**
     * When the reader last reached Stripe. Omitted when it never has. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "last_seen_at"?: string | null;
    /** When Flint observed this. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "observed_at": string;
    /**
     * Whether the reader was reaching Stripe when Flint last observed it. Value enum: "online",
     * "offline".
     */
    "status": "online" | "offline" | (string & {});
};
export type ReaderConnectivityPreviousAttributes = {
    /**
     * When the reader last reached Stripe. Omitted when it never has. anyOf[1] (Value): string.
     * When the reader last reached Stripe. Omitted when it never has. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "last_seen_at"?: ((string) | (null));
    /**
     * When Flint observed this. anyOf[1] (Value): string. When Flint observed this. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "observed_at"?: ((string) | (null));
    /**
     * Whether the reader was reaching Stripe when Flint last observed it. Value enum: "online",
     * "offline". anyOf[1] (Value): string. Whether the reader was reaching Stripe when Flint last
     * observed it. Value enum: "online", "offline". anyOf[2] (Value): null.
     */
    "status"?: (("online" | "offline" | (string & {})) | (null));
};
export type ReaderCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookReader;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "reader.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookReader;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "reader.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "reader.created";
});
/**
 * The `reader.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReaderCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookReader}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_intent_id`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`.
         */
        "object": WebhookReader;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "reader.created". */
    "event_type"?: "reader.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `reader.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReaderCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookReader}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_intent_id`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`.
         */
        "object": WebhookReader;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "reader.created". */
    "event_type"?: "reader.created";
});
/** A page of `Reader` objects. */
export type ReaderListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Reader}. A card reader or Tap to Pay phone that takes in-person payments at a location.
     */
    "data": Array<Reader>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Tip collection settings for a payment presented on a smart reader. */
export type ReaderPaymentSourceTip = {
    /**
     * Show the smart reader's tip screen before the card. Not accepted on Tap to Pay readers, on
     * an order with a requested tip, or on a payment that already carries a tip. Default: false.
     */
    "enabled": boolean;
};
/** Tip collection settings for a payment presented on a smart reader. */
export type ReaderPaymentSourceTipInput = ReaderPaymentSourceTip;
/** A response containing `Reader` data. */
export type ReaderResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A card reader or Tap to
     * Pay phone that takes in-person payments at a location.
     */
    "data": Reader;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ReaderUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookReader;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "is_simulated"?: ((boolean) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            "name"?: ((string) | (null));
            "reader_id"?: ((string) | (null));
            "serial_number"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "reader.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookReader;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "is_simulated"?: ((boolean) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            "name"?: ((string) | (null));
            "reader_id"?: ((string) | (null));
            "serial_number"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "reader.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "reader.updated";
});
/**
 * The `reader.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReaderUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookReader}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_intent_id`. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.connectivity (Optional): {@link
     * ReaderConnectivityPreviousAttributes} or null. Smart readers only, and omitted once the
     * reader is archived. Observed reader state: it changes without a write, doesn't advance
     * `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself
     * before it sends a payment. previous_attributes.connectivity.anyOf[1] (Value): {@link
     * ReaderConnectivityPreviousAttributes}. previous_attributes.connectivity.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. When the reader was
     * registered. previous_attributes.created_at.anyOf[1] (Value): string. When the reader was
     * registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.device_id
     * (Optional): string or null. The register, kiosk or phone the reader takes payments for; on a
     * Tap to Pay reader, the phone it runs on. Omitted when none is set.
     * previous_attributes.device_id.anyOf[1] (Value): string. The register, kiosk or phone the
     * reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none
     * is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2]
     * (Value): null. previous_attributes.is_simulated (Optional): boolean or null. `true` for a
     * sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * previous_attributes.is_simulated.anyOf[1] (Value): boolean. `true` for a sandbox simulated
     * reader, registered with `registration_code: simulated-s700`.
     * previous_attributes.is_simulated.anyOf[2] (Value): null. previous_attributes.location_id
     * (Optional): string or null. The location the reader is at. Set at registration and never
     * changed: to move a reader, archive it and register it again.
     * previous_attributes.location_id.anyOf[1] (Value): string. The location the reader is at. Set
     * at registration and never changed: to move a reader, archive it and register it again.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.location_id.anyOf[2] (Value):
     * null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Your key-value
     * pairs for the reader. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.model (Optional):
     * string or null. The smart reader's model, read from the reader at registration. Smart
     * readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
     * previous_attributes.model.anyOf[1] (Value): string. The smart reader's model, read from the
     * reader at registration. Smart readers only. Value enum: "stripe_reader_s700",
     * "stripe_reader_s710", "other". previous_attributes.model.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Your label for the reader.
     * previous_attributes.name.anyOf[1] (Value): string. Your label for the reader. minLength: 1.
     * maxLength: 255. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.reader_id (Optional): string or null. Unique identifier for the reader.
     * previous_attributes.reader_id.anyOf[1] (Value): string. Unique identifier for the reader.
     * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". previous_attributes.reader_id.anyOf[2] (Value):
     * null. previous_attributes.serial_number (Optional): string or null. The smart reader's
     * serial number, read from the reader at registration. Smart readers only.
     * previous_attributes.serial_number.anyOf[1] (Value): string. The smart reader's serial
     * number, read from the reader at registration. Smart readers only.
     * previous_attributes.serial_number.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Whether the reader can take payments. Value enum: "active",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Whether the reader can take
     * payments. Value enum: "active", "archived". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. What kind of reader it is. A
     * smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe
     * Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
     * previous_attributes.type.anyOf[1] (Value): string. What kind of reader it is. A smart reader
     * is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK
     * in your app. Value enum: "smart_reader", "tap_to_pay". previous_attributes.type.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. When the reader
     * last changed. previous_attributes.updated_at.anyOf[1] (Value): string. When the reader last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted version of this resource's
     * owned state. Expanded resources and external observations can change independently. Format:
     * uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`.
         */
        "object": WebhookReader;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. connectivity (Optional): {@link
         * ReaderConnectivityPreviousAttributes} or null. Smart readers only, and omitted once the
         * reader is archived. Observed reader state: it changes without a write, doesn't advance
         * `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself
         * before it sends a payment. connectivity.anyOf[1] (Value): {@link
         * ReaderConnectivityPreviousAttributes}. connectivity.anyOf[2] (Value): null. created_at
         * (Optional): string or null. When the reader was registered. created_at.anyOf[1] (Value):
         * string. When the reader was registered. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. device_id (Optional): string
         * or null. The register, kiosk or phone the reader takes payments for; on a Tap to Pay
         * reader, the phone it runs on. Omitted when none is set. device_id.anyOf[1] (Value):
         * string. The register, kiosk or phone the reader takes payments for; on a Tap to Pay
         * reader, the phone it runs on. Omitted when none is set. Example:
         * "dev_01KEZF7C0051ZP8MZSGHP989F6". device_id.anyOf[2] (Value): null. is_simulated
         * (Optional): boolean or null. `true` for a sandbox simulated reader, registered with
         * `registration_code: simulated-s700`. is_simulated.anyOf[1] (Value): boolean. `true` for
         * a sandbox simulated reader, registered with `registration_code: simulated-s700`.
         * is_simulated.anyOf[2] (Value): null. location_id (Optional): string or null. The
         * location the reader is at. Set at registration and never changed: to move a reader,
         * archive it and register it again. location_id.anyOf[1] (Value): string. The location the
         * reader is at. Set at registration and never changed: to move a reader, archive it and
         * register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Your key-value pairs
         * for the reader. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2]
         * (Value): null. model (Optional): string or null. The smart reader's model, read from the
         * reader at registration. Smart readers only. Value enum: "stripe_reader_s700",
         * "stripe_reader_s710", "other". model.anyOf[1] (Value): string. The smart reader's model,
         * read from the reader at registration. Smart readers only. Value enum:
         * "stripe_reader_s700", "stripe_reader_s710", "other". model.anyOf[2] (Value): null. name
         * (Optional): string or null. Your label for the reader. name.anyOf[1] (Value): string.
         * Your label for the reader. minLength: 1. maxLength: 255. name.anyOf[2] (Value): null.
         * reader_id (Optional): string or null. Unique identifier for the reader.
         * reader_id.anyOf[1] (Value): string. Unique identifier for the reader. Example:
         * "rdr_01KEZF7C007JA0G24M7SD6P46C". reader_id.anyOf[2] (Value): null. serial_number
         * (Optional): string or null. The smart reader's serial number, read from the reader at
         * registration. Smart readers only. serial_number.anyOf[1] (Value): string. The smart
         * reader's serial number, read from the reader at registration. Smart readers only.
         * serial_number.anyOf[2] (Value): null. status (Optional): string or null. Whether the
         * reader can take payments. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Whether the reader can take payments. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. type (Optional): string or null. What kind of reader it
         * is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by
         * the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
         * type.anyOf[1] (Value): string. What kind of reader it is. A smart reader is driven from
         * your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your
         * app. Value enum: "smart_reader", "tap_to_pay". type.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the reader last changed. updated_at.anyOf[1] (Value):
         * string. When the reader last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Smart readers only, and omitted once the reader is archived. Observed reader state:
             * it changes without a write, doesn't advance `version`, and sends no event. Don't
             * gate a sale on it: Flint checks the reader itself before it sends a payment.
             * anyOf[1] (Value): {@link ReaderConnectivityPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            /**
             * When the reader was registered. anyOf[1] (Value): string. When the reader was
             * registered. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader,
             * the phone it runs on. Omitted when none is set. anyOf[1] (Value): string. The
             * register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the
             * phone it runs on. Omitted when none is set. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * `true` for a sandbox simulated reader, registered with `registration_code:
             * simulated-s700`. anyOf[1] (Value): boolean. `true` for a sandbox simulated reader,
             * registered with `registration_code: simulated-s700`. anyOf[2] (Value): null.
             */
            "is_simulated"?: ((boolean) | (null));
            /**
             * The location the reader is at. Set at registration and never changed: to move a
             * reader, archive it and register it again. anyOf[1] (Value): string. The location the
             * reader is at. Set at registration and never changed: to move a reader, archive it
             * and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Your key-value pairs for the reader. anyOf[1] (Value): {@link MetadataMap}. anyOf[2]
             * (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The smart reader's model, read from the reader at registration. Smart readers only.
             * Value enum: "stripe_reader_s700", "stripe_reader_s710", "other". anyOf[1] (Value):
             * string. The smart reader's model, read from the reader at registration. Smart
             * readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
             * anyOf[2] (Value): null.
             */
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            /**
             * Your label for the reader. anyOf[1] (Value): string. Your label for the reader.
             * minLength: 1. maxLength: 255. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Unique identifier for the reader. anyOf[1] (Value): string. Unique identifier for
             * the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". anyOf[2] (Value): null.
             */
            "reader_id"?: ((string) | (null));
            /**
             * The smart reader's serial number, read from the reader at registration. Smart
             * readers only. anyOf[1] (Value): string. The smart reader's serial number, read from
             * the reader at registration. Smart readers only. anyOf[2] (Value): null.
             */
            "serial_number"?: ((string) | (null));
            /**
             * Whether the reader can take payments. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Whether the reader can take payments. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay
             * reader is a phone driven by the Stripe Terminal SDK in your app. Value enum:
             * "smart_reader", "tap_to_pay". anyOf[1] (Value): string. What kind of reader it is. A
             * smart reader is driven from your server; a Tap to Pay reader is a phone driven by
             * the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
             * anyOf[2] (Value): null.
             */
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            /**
             * When the reader last changed. anyOf[1] (Value): string. When the reader last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "reader.updated". */
    "event_type"?: "reader.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `reader.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReaderUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookReader}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_intent_id`. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.connectivity (Optional): {@link
     * ReaderConnectivityPreviousAttributes} or null. Smart readers only, and omitted once the
     * reader is archived. Observed reader state: it changes without a write, doesn't advance
     * `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself
     * before it sends a payment. previous_attributes.connectivity.anyOf[1] (Value): {@link
     * ReaderConnectivityPreviousAttributes}. previous_attributes.connectivity.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. When the reader was
     * registered. previous_attributes.created_at.anyOf[1] (Value): string. When the reader was
     * registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.device_id
     * (Optional): string or null. The register, kiosk or phone the reader takes payments for; on a
     * Tap to Pay reader, the phone it runs on. Omitted when none is set.
     * previous_attributes.device_id.anyOf[1] (Value): string. The register, kiosk or phone the
     * reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none
     * is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2]
     * (Value): null. previous_attributes.is_simulated (Optional): boolean or null. `true` for a
     * sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * previous_attributes.is_simulated.anyOf[1] (Value): boolean. `true` for a sandbox simulated
     * reader, registered with `registration_code: simulated-s700`.
     * previous_attributes.is_simulated.anyOf[2] (Value): null. previous_attributes.location_id
     * (Optional): string or null. The location the reader is at. Set at registration and never
     * changed: to move a reader, archive it and register it again.
     * previous_attributes.location_id.anyOf[1] (Value): string. The location the reader is at. Set
     * at registration and never changed: to move a reader, archive it and register it again.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.location_id.anyOf[2] (Value):
     * null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Your key-value
     * pairs for the reader. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.model (Optional):
     * string or null. The smart reader's model, read from the reader at registration. Smart
     * readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
     * previous_attributes.model.anyOf[1] (Value): string. The smart reader's model, read from the
     * reader at registration. Smart readers only. Value enum: "stripe_reader_s700",
     * "stripe_reader_s710", "other". previous_attributes.model.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Your label for the reader.
     * previous_attributes.name.anyOf[1] (Value): string. Your label for the reader. minLength: 1.
     * maxLength: 255. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.reader_id (Optional): string or null. Unique identifier for the reader.
     * previous_attributes.reader_id.anyOf[1] (Value): string. Unique identifier for the reader.
     * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". previous_attributes.reader_id.anyOf[2] (Value):
     * null. previous_attributes.serial_number (Optional): string or null. The smart reader's
     * serial number, read from the reader at registration. Smart readers only.
     * previous_attributes.serial_number.anyOf[1] (Value): string. The smart reader's serial
     * number, read from the reader at registration. Smart readers only.
     * previous_attributes.serial_number.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Whether the reader can take payments. Value enum: "active",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Whether the reader can take
     * payments. Value enum: "active", "archived". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. What kind of reader it is. A
     * smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe
     * Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
     * previous_attributes.type.anyOf[1] (Value): string. What kind of reader it is. A smart reader
     * is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK
     * in your app. Value enum: "smart_reader", "tap_to_pay". previous_attributes.type.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. When the reader
     * last changed. previous_attributes.updated_at.anyOf[1] (Value): string. When the reader last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted version of this resource's
     * owned state. Expanded resources and external observations can change independently. Format:
     * uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`.
         */
        "object": WebhookReader;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. connectivity (Optional): {@link
         * ReaderConnectivityPreviousAttributes} or null. Smart readers only, and omitted once the
         * reader is archived. Observed reader state: it changes without a write, doesn't advance
         * `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself
         * before it sends a payment. connectivity.anyOf[1] (Value): {@link
         * ReaderConnectivityPreviousAttributes}. connectivity.anyOf[2] (Value): null. created_at
         * (Optional): string or null. When the reader was registered. created_at.anyOf[1] (Value):
         * string. When the reader was registered. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. device_id (Optional): string
         * or null. The register, kiosk or phone the reader takes payments for; on a Tap to Pay
         * reader, the phone it runs on. Omitted when none is set. device_id.anyOf[1] (Value):
         * string. The register, kiosk or phone the reader takes payments for; on a Tap to Pay
         * reader, the phone it runs on. Omitted when none is set. Example:
         * "dev_01KEZF7C0051ZP8MZSGHP989F6". device_id.anyOf[2] (Value): null. is_simulated
         * (Optional): boolean or null. `true` for a sandbox simulated reader, registered with
         * `registration_code: simulated-s700`. is_simulated.anyOf[1] (Value): boolean. `true` for
         * a sandbox simulated reader, registered with `registration_code: simulated-s700`.
         * is_simulated.anyOf[2] (Value): null. location_id (Optional): string or null. The
         * location the reader is at. Set at registration and never changed: to move a reader,
         * archive it and register it again. location_id.anyOf[1] (Value): string. The location the
         * reader is at. Set at registration and never changed: to move a reader, archive it and
         * register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Your key-value pairs
         * for the reader. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2]
         * (Value): null. model (Optional): string or null. The smart reader's model, read from the
         * reader at registration. Smart readers only. Value enum: "stripe_reader_s700",
         * "stripe_reader_s710", "other". model.anyOf[1] (Value): string. The smart reader's model,
         * read from the reader at registration. Smart readers only. Value enum:
         * "stripe_reader_s700", "stripe_reader_s710", "other". model.anyOf[2] (Value): null. name
         * (Optional): string or null. Your label for the reader. name.anyOf[1] (Value): string.
         * Your label for the reader. minLength: 1. maxLength: 255. name.anyOf[2] (Value): null.
         * reader_id (Optional): string or null. Unique identifier for the reader.
         * reader_id.anyOf[1] (Value): string. Unique identifier for the reader. Example:
         * "rdr_01KEZF7C007JA0G24M7SD6P46C". reader_id.anyOf[2] (Value): null. serial_number
         * (Optional): string or null. The smart reader's serial number, read from the reader at
         * registration. Smart readers only. serial_number.anyOf[1] (Value): string. The smart
         * reader's serial number, read from the reader at registration. Smart readers only.
         * serial_number.anyOf[2] (Value): null. status (Optional): string or null. Whether the
         * reader can take payments. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Whether the reader can take payments. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. type (Optional): string or null. What kind of reader it
         * is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by
         * the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
         * type.anyOf[1] (Value): string. What kind of reader it is. A smart reader is driven from
         * your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your
         * app. Value enum: "smart_reader", "tap_to_pay". type.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the reader last changed. updated_at.anyOf[1] (Value):
         * string. When the reader last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Smart readers only, and omitted once the reader is archived. Observed reader state:
             * it changes without a write, doesn't advance `version`, and sends no event. Don't
             * gate a sale on it: Flint checks the reader itself before it sends a payment.
             * anyOf[1] (Value): {@link ReaderConnectivityPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            /**
             * When the reader was registered. anyOf[1] (Value): string. When the reader was
             * registered. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader,
             * the phone it runs on. Omitted when none is set. anyOf[1] (Value): string. The
             * register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the
             * phone it runs on. Omitted when none is set. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * `true` for a sandbox simulated reader, registered with `registration_code:
             * simulated-s700`. anyOf[1] (Value): boolean. `true` for a sandbox simulated reader,
             * registered with `registration_code: simulated-s700`. anyOf[2] (Value): null.
             */
            "is_simulated"?: ((boolean) | (null));
            /**
             * The location the reader is at. Set at registration and never changed: to move a
             * reader, archive it and register it again. anyOf[1] (Value): string. The location the
             * reader is at. Set at registration and never changed: to move a reader, archive it
             * and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Your key-value pairs for the reader. anyOf[1] (Value): {@link MetadataMap}. anyOf[2]
             * (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The smart reader's model, read from the reader at registration. Smart readers only.
             * Value enum: "stripe_reader_s700", "stripe_reader_s710", "other". anyOf[1] (Value):
             * string. The smart reader's model, read from the reader at registration. Smart
             * readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
             * anyOf[2] (Value): null.
             */
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            /**
             * Your label for the reader. anyOf[1] (Value): string. Your label for the reader.
             * minLength: 1. maxLength: 255. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Unique identifier for the reader. anyOf[1] (Value): string. Unique identifier for
             * the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". anyOf[2] (Value): null.
             */
            "reader_id"?: ((string) | (null));
            /**
             * The smart reader's serial number, read from the reader at registration. Smart
             * readers only. anyOf[1] (Value): string. The smart reader's serial number, read from
             * the reader at registration. Smart readers only. anyOf[2] (Value): null.
             */
            "serial_number"?: ((string) | (null));
            /**
             * Whether the reader can take payments. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Whether the reader can take payments. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay
             * reader is a phone driven by the Stripe Terminal SDK in your app. Value enum:
             * "smart_reader", "tap_to_pay". anyOf[1] (Value): string. What kind of reader it is. A
             * smart reader is driven from your server; a Tap to Pay reader is a phone driven by
             * the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
             * anyOf[2] (Value): null.
             */
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            /**
             * When the reader last changed. anyOf[1] (Value): string. When the reader last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "reader.updated". */
    "event_type"?: "reader.updated";
});
export type ReadersCreateConnectionSessionParams = DisputesAcceptParams;
export type ReadersCreateParams = (CreateReaderRequestInput)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ReadersDeleteParams = {
    /**
     * Optional version most recently read. A stale value fails with `VERSION_CONFLICT` and the
     * current version. Format: uint64. minimum: 1. maximum: 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ReadersGetParams = DisputesAcceptParams;
export type ReadersListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "active", "archived". anyOf[1][] (Value): string. Value enum: "active",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
    /**
     * Exact match on the reader's Flint location ID. minLength: 1. pattern:
     * ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: InputValue<string>;
    /**
     * Exact match on the reader's Flint device ID. minLength: 1. pattern:
     * ^dev_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: InputValue<string>;
    /**
     * Exact match on the reader's type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "smart_reader", "tap_to_pay". Value enum: "smart_reader", "tap_to_pay".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "smart_reader", "tap_to_pay".
     * anyOf[1][] (Value): string. Value enum: "smart_reader", "tap_to_pay". anyOf[2] (Value):
     * string. Value enum: "smart_reader", "tap_to_pay".
     */
    "type"?: InputValue<("smart_reader" | "tap_to_pay") | readonly ("smart_reader" | "tap_to_pay")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ReadersSimulateParams = (InputValue<SimulateReaderRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ReadersUpdateParams = (InputValue<UpdateReaderRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/**
 * A step that moves a merchant capability or readiness axis forward, with the party that must do
 * it (`owner`) and any required fields.
 */
export type ReadinessAction = {
    /**
     * The kind of step to take. Each value says what the step is and who carries it out. Value
     * enum: "advance_onboarding", "create_merchant_account_session", "wait_for_review",
     * "settle_flint_balance", "set_tax_category", "update_payment_settings",
     * "replace_default_payout_destination", "contact_support", "other".
     */
    "action_type": "advance_onboarding"
        | "create_merchant_account_session"
        | "wait_for_review"
        | "settle_flint_balance"
        | "set_tax_category"
        | "update_payment_settings"
        | "replace_default_payout_destination"
        | "contact_support"
        | "other"
        | (string & {});
    /**
     * Request body for `POST /v1/merchant-account-sessions`, on a
     * `create_merchant_account_session` action. Send it unchanged. Shared request body for
     * `create_merchant_account_session` next actions in readiness, onboarding, errors, and
     * warnings. Send unchanged to POST /v1/merchant-account-sessions; components and collection
     * policy describe which requirements to collect.
     */
    "merchant_account_session"?: ReadinessMerchantAccountSession;
    /** Who has to act on this step. Value enum: "integrator", "merchant", "flint". */
    "owner": "integrator" | "merchant" | "flint" | (string & {});
    /**
     * Paths in the action's target request body, using dotted JSON paths from the request root.
     * For advance_onboarding, profile fields use profile.website_url, profile.support_email,
     * profile.support_phone and profile.support_url. Top-level inputs such as country,
     * requested_capabilities and name stay bare. [] (Value): string.
     */
    "required_fields"?: Array<string>;
    /** The API endpoint for this step, when one applies. */
    "url"?: string;
};
export type ReadinessActionPreviousAttributes = {
    /**
     * The kind of step to take. Each value says what the step is and who carries it out. Value
     * enum: "advance_onboarding", "create_merchant_account_session", "wait_for_review",
     * "settle_flint_balance", "set_tax_category", "update_payment_settings",
     * "replace_default_payout_destination", "contact_support", "other". anyOf[1] (Value): string.
     * The kind of step to take. Each value says what the step is and who carries it out. Value
     * enum: "advance_onboarding", "create_merchant_account_session", "wait_for_review",
     * "settle_flint_balance", "set_tax_category", "update_payment_settings",
     * "replace_default_payout_destination", "contact_support", "other". anyOf[2] (Value): null.
     */
    "action_type"?: (("advance_onboarding"
        | "create_merchant_account_session"
        | "wait_for_review"
        | "settle_flint_balance"
        | "set_tax_category"
        | "update_payment_settings"
        | "replace_default_payout_destination"
        | "contact_support"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Request body for `POST /v1/merchant-account-sessions`, on a
     * `create_merchant_account_session` action. Send it unchanged. anyOf[1] (Value): {@link
     * ReadinessMerchantAccountSessionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "merchant_account_session"?: ((ReadinessMerchantAccountSessionPreviousAttributes) | (null));
    /**
     * Who has to act on this step. Value enum: "integrator", "merchant", "flint". anyOf[1]
     * (Value): string. Who has to act on this step. Value enum: "integrator", "merchant", "flint".
     * anyOf[2] (Value): null.
     */
    "owner"?: (("integrator" | "merchant" | "flint" | (string & {})) | (null));
    /**
     * Paths in the action's target request body, using dotted JSON paths from the request root.
     * For advance_onboarding, profile fields use profile.website_url, profile.support_email,
     * profile.support_phone and profile.support_url. Top-level inputs such as country,
     * requested_capabilities and name stay bare. anyOf[1] (Value): Array of string. Paths in the
     * action's target request body, using dotted JSON paths from the request root. For
     * advance_onboarding, profile fields use profile.website_url, profile.support_email,
     * profile.support_phone and profile.support_url. Top-level inputs such as country,
     * requested_capabilities and name stay bare. anyOf[1][] (Value): string. anyOf[2] (Value):
     * null.
     */
    "required_fields"?: ((Array<string>) | (null));
    /**
     * The API endpoint for this step, when one applies. anyOf[1] (Value): string. The API endpoint
     * for this step, when one applies. anyOf[2] (Value): null.
     */
    "url"?: ((string) | (null));
};
/**
 * Readiness for one area of a merchant account, with its `status`, the reason for it, and the
 * actions that would advance it.
 */
export type ReadinessAxis = {
    /**
     * Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to
     * the reason preserves the start. Flint may treat a brief unblock that it didn't publish as
     * part of the same blocked period. Omitted when the status is not blocked or the start is
     * unknown. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "blocked_since"?: string | null;
    /**
     * Steps that move this area toward `ready`. Empty when there is nothing to do. [] (Value):
     * {@link ReadinessAction}. A step that moves a merchant capability or readiness axis forward,
     * with the party that must do it (`owner`) and any required fields.
     */
    "next_actions": Array<ReadinessAction>;
    /**
     * Whether this area works now. `status_reason` says why when the status is neither `ready` nor
     * `not_requested`. Value enum: "ready", "pending", "blocked", "not_requested",
     * "not_available".
     */
    "status": "ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {});
    /**
     * Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for
     * onboarding_not_started, requirements_due, requirements_past_due and pending_verification,
     * and platform_review for Flint's own review. `null` when no reason applies. Value enum:
     * "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other".
     */
    "status_reason"?: "provisioning"
        | "onboarding_not_started"
        | "requirements_due"
        | "requirements_past_due"
        | "pending_verification"
        | "account_rejected"
        | "disabled_by_platform_policy"
        | "billing_suspended"
        | "platform_review"
        | "processing_not_enabled"
        | "platform_funding_unavailable"
        | "tax_category_required"
        | "service_unavailable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_in_plan"
        | "payment_option_not_available"
        | "capability_not_active"
        | "other"
        | (string & {});
    /**
     * When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this
     * area is already blocked or no block is expected. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "upcoming_block_at"?: string | null;
    /**
     * The readiness reason expected when a scheduled block takes effect. Omitted when this area is
     * already blocked or no block is expected. Value enum: "provisioning",
     * "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other", null.
     */
    "upcoming_block_reason"?: "provisioning"
        | "onboarding_not_started"
        | "requirements_due"
        | "requirements_past_due"
        | "pending_verification"
        | "account_rejected"
        | "disabled_by_platform_policy"
        | "billing_suspended"
        | "platform_review"
        | "processing_not_enabled"
        | "platform_funding_unavailable"
        | "tax_category_required"
        | "service_unavailable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_in_plan"
        | "payment_option_not_available"
        | "capability_not_active"
        | "other"
        | null
        | (string & {})
        | null;
};
export type ReadinessAxisPreviousAttributes = {
    /**
     * Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to
     * the reason preserves the start. Flint may treat a brief unblock that it didn't publish as
     * part of the same blocked period. Omitted when the status is not blocked or the start is
     * unknown. anyOf[1] (Value): string. Start of the current continuous blocked period, as an RFC
     * 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief
     * unblock that it didn't publish as part of the same blocked period. Omitted when the status
     * is not blocked or the start is unknown. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * anyOf[2] (Value): null.
     */
    "blocked_since"?: ((string) | (null));
    /**
     * Steps that move this area toward `ready`. Empty when there is nothing to do. anyOf[1]
     * (Value): Array of {@link ReadinessActionPreviousAttributes}. Steps that move this area
     * toward `ready`. Empty when there is nothing to do. anyOf[1][] (Value): {@link
     * ReadinessActionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "next_actions"?: ((Array<ReadinessActionPreviousAttributes>) | (null));
    /**
     * Whether this area works now. `status_reason` says why when the status is neither `ready` nor
     * `not_requested`. Value enum: "ready", "pending", "blocked", "not_requested",
     * "not_available". anyOf[1] (Value): string. Whether this area works now. `status_reason` says
     * why when the status is neither `ready` nor `not_requested`. Value enum: "ready", "pending",
     * "blocked", "not_requested", "not_available". anyOf[2] (Value): null.
     */
    "status"?: (("ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {})) | (null));
    /**
     * Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for
     * onboarding_not_started, requirements_due, requirements_past_due and pending_verification,
     * and platform_review for Flint's own review. `null` when no reason applies. Value enum:
     * "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other". anyOf[1] (Value): string. Why readiness has its current status. MERCHANT_NOT_READY
     * uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due
     * and pending_verification, and platform_review for Flint's own review. `null` when no reason
     * applies. Value enum: "provisioning", "onboarding_not_started", "requirements_due",
     * "requirements_past_due", "pending_verification", "account_rejected",
     * "disabled_by_platform_policy", "billing_suspended", "platform_review",
     * "processing_not_enabled", "platform_funding_unavailable", "tax_category_required",
     * "service_unavailable", "payment_option_access_not_provisioned",
     * "payment_option_activation_pending", "payment_option_not_in_plan",
     * "payment_option_not_available", "capability_not_active", "other". anyOf[2] (Value): null.
     */
    "status_reason"?: (("provisioning"
        | "onboarding_not_started"
        | "requirements_due"
        | "requirements_past_due"
        | "pending_verification"
        | "account_rejected"
        | "disabled_by_platform_policy"
        | "billing_suspended"
        | "platform_review"
        | "processing_not_enabled"
        | "platform_funding_unavailable"
        | "tax_category_required"
        | "service_unavailable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_in_plan"
        | "payment_option_not_available"
        | "capability_not_active"
        | "other"
        | (string & {}))
        | (null));
    /**
     * When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this
     * area is already blocked or no block is expected. anyOf[1] (Value): string. When the next
     * scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is
     * already blocked or no block is expected. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * anyOf[2] (Value): null.
     */
    "upcoming_block_at"?: ((string) | (null));
    /**
     * The readiness reason expected when a scheduled block takes effect. Omitted when this area is
     * already blocked or no block is expected. Value enum: "provisioning",
     * "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other", null. anyOf[1] (Value): string. The readiness reason expected when a scheduled
     * block takes effect. Omitted when this area is already blocked or no block is expected. Value
     * enum: "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other", null. anyOf[2] (Value): null.
     */
    "upcoming_block_reason"?: (("provisioning"
        | "onboarding_not_started"
        | "requirements_due"
        | "requirements_past_due"
        | "pending_verification"
        | "account_rejected"
        | "disabled_by_platform_policy"
        | "billing_suspended"
        | "platform_review"
        | "processing_not_enabled"
        | "platform_funding_unavailable"
        | "tax_category_required"
        | "service_unavailable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_in_plan"
        | "payment_option_not_available"
        | "capability_not_active"
        | "other"
        | null
        | (string & {}))
        | (null));
};
/**
 * Shared request body for `create_merchant_account_session` next actions in readiness, onboarding,
 * errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions; components and
 * collection policy describe which requirements to collect.
 */
export type ReadinessMerchantAccountSession = {
    /**
     * How onboarding collects requirements. upfront asks for everything the account will
     * eventually need; incremental asks only for what is currently due. Value enum: "upfront",
     * "incremental".
     */
    "collection_strategy": "upfront" | "incremental" | (string & {});
    /**
     * Flint components to request. Send this list as components in POST
     * /v1/merchant-account-sessions. [] enum: "account_onboarding", "account_management",
     * "payouts", "balances", "tax_documents", "notification_banner", "payments". [] (Value):
     * string. Value enum: "account_onboarding", "account_management", "payouts", "balances",
     * "tax_documents", "notification_banner", "payments".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | "payments"
        | (string & {})>;
    /**
     * Whether onboarding also collects requirements the processor has scheduled for a future date.
     * include collects them now; omit leaves them until they are due. Value enum: "omit",
     * "include".
     */
    "future_requirements": "omit" | "include" | (string & {});
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". [] (Value):
     * string. Value enum: "additional_account_information", "business_address",
     * "business_description", "business_directors", "business_executives", "business_name",
     * "business_owners", "business_phone", "business_support_email", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor".
     */
    "targeted_requirements"?: Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_email"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "payout_destination_ownership_document"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | "terms_acceptance"
        | "statement_descriptor"
        | (string & {})>;
};
export type ReadinessMerchantAccountSessionPreviousAttributes = {
    /**
     * How onboarding collects requirements. upfront asks for everything the account will
     * eventually need; incremental asks only for what is currently due. Value enum: "upfront",
     * "incremental". anyOf[1] (Value): string. How onboarding collects requirements. upfront asks
     * for everything the account will eventually need; incremental asks only for what is currently
     * due. Value enum: "upfront", "incremental". anyOf[2] (Value): null.
     */
    "collection_strategy"?: (("upfront" | "incremental" | (string & {})) | (null));
    /**
     * Flint components to request. Send this list as components in POST
     * /v1/merchant-account-sessions. [] enum: "account_onboarding", "account_management",
     * "payouts", "balances", "tax_documents", "notification_banner", "payments". anyOf[1] (Value):
     * Array of string. Flint components to request. Send this list as components in POST
     * /v1/merchant-account-sessions. [] enum: "account_onboarding", "account_management",
     * "payouts", "balances", "tax_documents", "notification_banner", "payments". anyOf[1][]
     * (Value): string. Value enum: "account_onboarding", "account_management", "payouts",
     * "balances", "tax_documents", "notification_banner", "payments". anyOf[2] (Value): null.
     */
    "components"?: ((Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | "payments"
        | (string & {})>)
        | (null));
    /**
     * Whether onboarding also collects requirements the processor has scheduled for a future date.
     * include collects them now; omit leaves them until they are due. Value enum: "omit",
     * "include". anyOf[1] (Value): string. Whether onboarding also collects requirements the
     * processor has scheduled for a future date. include collects them now; omit leaves them until
     * they are due. Value enum: "omit", "include". anyOf[2] (Value): null.
     */
    "future_requirements"?: (("omit" | "include" | (string & {})) | (null));
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1]
     * (Value): Array of string. Flint requirement codes. New codes can appear; treat an unknown
     * code as additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1][]
     * (Value): string. Value enum: "additional_account_information", "business_address",
     * "business_description", "business_directors", "business_executives", "business_name",
     * "business_owners", "business_phone", "business_support_email", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[2]
     * (Value): null.
     */
    "targeted_requirements"?: ((Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_email"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "payout_destination_ownership_document"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | "terms_acceptance"
        | "statement_descriptor"
        | (string & {})>)
        | (null));
};
/** A verification failure with a suggested correction. */
export type ReadinessRequirementError = {
    /**
     * Flint verification failure code. New codes may be added; use message and resolution for
     * unknown codes. Value enum: "statement_descriptor_mismatch", "statement_descriptor_rejected",
     * "tax_id_mismatch", "identity_mismatch", "document_unreadable", "document_expired",
     * "document_mismatch", "document_rejected", "invalid_value", "terms_reacceptance_required",
     * "profile_field_rejected", "verification_failed".
     */
    "code": "statement_descriptor_mismatch"
        | "statement_descriptor_rejected"
        | "tax_id_mismatch"
        | "identity_mismatch"
        | "document_unreadable"
        | "document_expired"
        | "document_mismatch"
        | "document_rejected"
        | "invalid_value"
        | "terms_reacceptance_required"
        | "profile_field_rejected"
        | "verification_failed"
        | (string & {});
    /** What could not be verified. */
    "message": string;
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. Value enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor".
     */
    "requirement": "additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_email"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "payout_destination_ownership_document"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | "terms_acceptance"
        | "statement_descriptor"
        | (string & {});
    /** What the merchant should do to resolve the requirement. */
    "resolution": string;
};
export type ReadinessRequirementErrorPreviousAttributes = {
    /**
     * Flint verification failure code. New codes may be added; use message and resolution for
     * unknown codes. Value enum: "statement_descriptor_mismatch", "statement_descriptor_rejected",
     * "tax_id_mismatch", "identity_mismatch", "document_unreadable", "document_expired",
     * "document_mismatch", "document_rejected", "invalid_value", "terms_reacceptance_required",
     * "profile_field_rejected", "verification_failed". anyOf[1] (Value): string. Flint
     * verification failure code. New codes may be added; use message and resolution for unknown
     * codes. Value enum: "statement_descriptor_mismatch", "statement_descriptor_rejected",
     * "tax_id_mismatch", "identity_mismatch", "document_unreadable", "document_expired",
     * "document_mismatch", "document_rejected", "invalid_value", "terms_reacceptance_required",
     * "profile_field_rejected", "verification_failed". anyOf[2] (Value): null.
     */
    "code"?: (("statement_descriptor_mismatch"
        | "statement_descriptor_rejected"
        | "tax_id_mismatch"
        | "identity_mismatch"
        | "document_unreadable"
        | "document_expired"
        | "document_mismatch"
        | "document_rejected"
        | "invalid_value"
        | "terms_reacceptance_required"
        | "profile_field_rejected"
        | "verification_failed"
        | (string & {}))
        | (null));
    /**
     * What could not be verified. anyOf[1] (Value): string. What could not be verified. anyOf[2]
     * (Value): null.
     */
    "message"?: ((string) | (null));
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. Value enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1]
     * (Value): string. Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. Value enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[2]
     * (Value): null.
     */
    "requirement"?: (("additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_email"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "payout_destination_ownership_document"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | "terms_acceptance"
        | "statement_descriptor"
        | (string & {}))
        | (null));
    /**
     * What the merchant should do to resolve the requirement. anyOf[1] (Value): string. What the
     * merchant should do to resolve the requirement. anyOf[2] (Value): null.
     */
    "resolution"?: ((string) | (null));
};
/**
 * Account information requirements for a merchant, grouped as currently due, eventually due, past
 * due, and pending verification.
 */
export type ReadinessRequirements = {
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". [] (Value):
     * string. Value enum: "additional_account_information", "business_address",
     * "business_description", "business_directors", "business_executives", "business_name",
     * "business_owners", "business_phone", "business_support_email", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor".
     */
    "currently_due": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_email"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "payout_destination_ownership_document"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | "terms_acceptance"
        | "statement_descriptor"
        | (string & {})>;
    /**
     * Why the account is disabled. Omitted when it isn't. Value enum:
     * "account_attention_required", "account_paused", "account_rejected",
     * "account_requirements_due", "account_under_review", "requirements_past_due",
     * "requirements_pending_verification".
     */
    "disabled_reason"?: "account_attention_required"
        | "account_paused"
        | "account_rejected"
        | "account_requirements_due"
        | "account_under_review"
        | "requirements_past_due"
        | "requirements_pending_verification"
        | (string & {});
    /**
     * Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339
     * UTC timestamp. Omitted when no submission deadline is set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "due_at"?: string;
    /**
     * Verification failures and how to resolve them. Empty when no failures are reported. Ordered
     * by past-due requirements, then currently due, then other requirements; unique by requirement
     * and code. A failure can name a requirement outside the due lists. [] (Value): {@link
     * ReadinessRequirementError}. A verification failure with a suggested correction.
     */
    "errors": Array<ReadinessRequirementError>;
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". [] (Value):
     * string. Value enum: "additional_account_information", "business_address",
     * "business_description", "business_directors", "business_executives", "business_name",
     * "business_owners", "business_phone", "business_support_email", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor".
     */
    "eventually_due": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_email"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "payout_destination_ownership_document"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | "terms_acceptance"
        | "statement_descriptor"
        | (string & {})>;
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". [] (Value):
     * string. Value enum: "additional_account_information", "business_address",
     * "business_description", "business_directors", "business_executives", "business_name",
     * "business_owners", "business_phone", "business_support_email", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor".
     */
    "past_due": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_email"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "payout_destination_ownership_document"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | "terms_acceptance"
        | "statement_descriptor"
        | (string & {})>;
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". [] (Value):
     * string. Value enum: "additional_account_information", "business_address",
     * "business_description", "business_directors", "business_executives", "business_name",
     * "business_owners", "business_phone", "business_support_email", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor".
     */
    "pending_verification": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_email"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "payout_destination_ownership_document"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | "terms_acceptance"
        | "statement_descriptor"
        | (string & {})>;
    /**
     * Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Value
     * enum: "flint", "payment_processor".
     */
    "rejected_by"?: "flint" | "payment_processor" | (string & {});
    /**
     * Flint requirement codes the payment processor will start requiring on `upcoming_due_at`.
     * Submit them before then; after that they move to `currently_due` or `past_due`. Empty when
     * nothing is scheduled. New codes can appear; treat an unknown code as
     * additional_account_information. [] (Value): string.
     */
    "upcoming_due": Array<string>;
    /**
     * Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp.
     * Omitted when none are scheduled. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "upcoming_due_at"?: string;
};
export type ReadinessRequirementsPreviousAttributes = {
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1]
     * (Value): Array of string. Flint requirement codes. New codes can appear; treat an unknown
     * code as additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1][]
     * (Value): string. Value enum: "additional_account_information", "business_address",
     * "business_description", "business_directors", "business_executives", "business_name",
     * "business_owners", "business_phone", "business_support_email", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[2]
     * (Value): null.
     */
    "currently_due"?: ((Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_email"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "payout_destination_ownership_document"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | "terms_acceptance"
        | "statement_descriptor"
        | (string & {})>)
        | (null));
    /**
     * Why the account is disabled. Omitted when it isn't. Value enum:
     * "account_attention_required", "account_paused", "account_rejected",
     * "account_requirements_due", "account_under_review", "requirements_past_due",
     * "requirements_pending_verification". anyOf[1] (Value): string. Why the account is disabled.
     * Omitted when it isn't. Value enum: "account_attention_required", "account_paused",
     * "account_rejected", "account_requirements_due", "account_under_review",
     * "requirements_past_due", "requirements_pending_verification". anyOf[2] (Value): null.
     */
    "disabled_reason"?: (("account_attention_required"
        | "account_paused"
        | "account_rejected"
        | "account_requirements_due"
        | "account_under_review"
        | "requirements_past_due"
        | "requirements_pending_verification"
        | (string & {}))
        | (null));
    /**
     * Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339
     * UTC timestamp. Omitted when no submission deadline is set. anyOf[1] (Value): string. Time by
     * which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC
     * timestamp. Omitted when no submission deadline is set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "due_at"?: ((string) | (null));
    /**
     * Verification failures and how to resolve them. Empty when no failures are reported. Ordered
     * by past-due requirements, then currently due, then other requirements; unique by requirement
     * and code. A failure can name a requirement outside the due lists. anyOf[1] (Value): Array of
     * {@link ReadinessRequirementErrorPreviousAttributes}. Verification failures and how to
     * resolve them. Empty when no failures are reported. Ordered by past-due requirements, then
     * currently due, then other requirements; unique by requirement and code. A failure can name a
     * requirement outside the due lists. anyOf[1][] (Value): {@link
     * ReadinessRequirementErrorPreviousAttributes}. anyOf[2] (Value): null.
     */
    "errors"?: ((Array<ReadinessRequirementErrorPreviousAttributes>) | (null));
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1]
     * (Value): Array of string. Flint requirement codes. New codes can appear; treat an unknown
     * code as additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1][]
     * (Value): string. Value enum: "additional_account_information", "business_address",
     * "business_description", "business_directors", "business_executives", "business_name",
     * "business_owners", "business_phone", "business_support_email", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[2]
     * (Value): null.
     */
    "eventually_due"?: ((Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_email"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "payout_destination_ownership_document"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | "terms_acceptance"
        | "statement_descriptor"
        | (string & {})>)
        | (null));
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1]
     * (Value): Array of string. Flint requirement codes. New codes can appear; treat an unknown
     * code as additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1][]
     * (Value): string. Value enum: "additional_account_information", "business_address",
     * "business_description", "business_directors", "business_executives", "business_name",
     * "business_owners", "business_phone", "business_support_email", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[2]
     * (Value): null.
     */
    "past_due"?: ((Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_email"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "payout_destination_ownership_document"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | "terms_acceptance"
        | "statement_descriptor"
        | (string & {})>)
        | (null));
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1]
     * (Value): Array of string. Flint requirement codes. New codes can appear; treat an unknown
     * code as additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_email",
     * "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1][]
     * (Value): string. Value enum: "additional_account_information", "business_address",
     * "business_description", "business_directors", "business_executives", "business_name",
     * "business_owners", "business_phone", "business_support_email", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "payout_destination_ownership_document", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[2]
     * (Value): null.
     */
    "pending_verification"?: ((Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_email"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "payout_destination_ownership_document"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | "terms_acceptance"
        | "statement_descriptor"
        | (string & {})>)
        | (null));
    /**
     * Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Value
     * enum: "flint", "payment_processor". anyOf[1] (Value): string. Who rejected the account.
     * Present only when `disabled_reason` is `account_rejected`. Value enum: "flint",
     * "payment_processor". anyOf[2] (Value): null.
     */
    "rejected_by"?: (("flint" | "payment_processor" | (string & {})) | (null));
    /**
     * Flint requirement codes the payment processor will start requiring on `upcoming_due_at`.
     * Submit them before then; after that they move to `currently_due` or `past_due`. Empty when
     * nothing is scheduled. New codes can appear; treat an unknown code as
     * additional_account_information. anyOf[1] (Value): Array of string. Flint requirement codes
     * the payment processor will start requiring on `upcoming_due_at`. Submit them before then;
     * after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New
     * codes can appear; treat an unknown code as additional_account_information. anyOf[1][]
     * (Value): string. anyOf[2] (Value): null.
     */
    "upcoming_due"?: ((Array<string>) | (null));
    /**
     * Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp.
     * Omitted when none are scheduled. anyOf[1] (Value): string. Time at which the `upcoming_due`
     * requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "upcoming_due_at"?: ((string) | (null));
};
/** Merchant-provided text on payment receipt emails and PDFs. */
export type ReceiptSettings = {
    /**
     * Merchant-provided plain text on payment receipt emails and PDFs. Null when no text is set.
     * maxLength: 500.
     */
    "footer_text": string | null;
};
/**
 * Changes to the merchant-provided text on payment receipt emails and PDFs. Send null for
 * footer_text to remove it. minProperties: 1.
 */
export type ReceiptSettingsPatch = {
    /**
     * Optional merchant-provided plain text shown on payment receipt emails and PDFs, including
     * manual resends and downloads. Up to 500 Unicode code points. Send null to remove the text.
     * Omit to keep it. Flint does not verify the statement or assert nonprofit status. minLength:
     * 1. maxLength: 500.
     */
    "footer_text"?: string | null;
};
/**
 * Changes to the merchant-provided text on payment receipt emails and PDFs. Send null for
 * footer_text to remove it. minProperties: 1.
 */
export type ReceiptSettingsPatchInput = ReceiptSettingsPatch;
/**
 * Adds in-transit stock to the destination location. Optional condition targets split the received
 * quantity by condition.
 */
export type ReceiveInventoryTransferRequest = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_received_damaged_quantity (Optional):
     * integer. Cumulative received quantity classified as damaged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     * [].target_received_quality_control_quantity (Optional): integer. Cumulative received
     * quantity classified for quality control. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. minimum: 0. [].target_received_quantity (Required): integer.
     * Cumulative quantity that should have been received at the destination. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * [].target_received_quarantined_quantity (Optional): integer. Cumulative received quantity
     * classified as quarantined. Whole-number quantity; fractional quantities are not supported.
     * Format: int64. minimum: 0. [].target_received_sellable_quantity (Optional): integer.
     * Cumulative received quantity classified as sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<({
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative received quantity classified as damaged. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_damaged_quantity"?: number;
        /**
         * Cumulative received quantity classified for quality control. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quality_control_quantity"?: number;
        /**
         * Cumulative quantity that should have been received at the destination. Whole-number
         * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quantity": number;
        /**
         * Cumulative received quantity classified as quarantined. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quarantined_quantity"?: number;
        /**
         * Cumulative received quantity classified as sellable. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_sellable_quantity"?: number;
    })>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/**
 * Adds in-transit stock to the destination location. Optional condition targets split the received
 * quantity by condition.
 */
export type ReceiveInventoryTransferRequestInput = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_received_damaged_quantity (Optional):
     * integer. Cumulative received quantity classified as damaged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     * [].target_received_quality_control_quantity (Optional): integer. Cumulative received
     * quantity classified for quality control. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. minimum: 0. [].target_received_quantity (Required): integer.
     * Cumulative quantity that should have been received at the destination. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * [].target_received_quarantined_quantity (Optional): integer. Cumulative received quantity
     * classified as quarantined. Whole-number quantity; fractional quantities are not supported.
     * Format: int64. minimum: 0. [].target_received_sellable_quantity (Optional): integer.
     * Cumulative received quantity classified as sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<({
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative received quantity classified as damaged. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_damaged_quantity"?: number;
        /**
         * Cumulative received quantity classified for quality control. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quality_control_quantity"?: number;
        /**
         * Cumulative quantity that should have been received at the destination. Whole-number
         * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quantity": number;
        /**
         * Cumulative received quantity classified as quarantined. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quarantined_quantity"?: number;
        /**
         * Cumulative received quantity classified as sellable. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_sellable_quantity"?: number;
    })>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/** The request body for: Refresh a customer session. */
export type RefreshCustomerSessionRequest = {
    /**
     * The `refresh_token` returned when the session was created or last refreshed. It works once;
     * the response carries the next one. minLength: 1.
     */
    "refresh_token": string;
};
/** The request body for: Refresh a customer session. */
export type RefreshCustomerSessionRequestInput = RefreshCustomerSessionRequest;
/** Money returned against a collected payment. */
export type Refund = {
    /**
     * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Money returned for each order charge, including subtotal, discount, and tax, combined across
     * payment refunds. [] (Value): {@link RefundChargeAllocation}. Money returned for one order
     * charge, including subtotal, discount, and tax.
     */
    "charge_allocations"?: Array<RefundChargeAllocation>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Money paid for Return resolution credits, included in amount_money. It carries no
     * merchandise, shipping, tax, or tip allocation. Zero for refunds without credits. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "credit_adjustment_money": MoneyValue;
    /**
     * ID of the credit note this refund paid out. Present only on refunds issued through a credit
     * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id"?: string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * ID of the customer on the refunded order or payment. Absent when neither has one. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again, except a refund with reason payment_returned that failed with
     * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
     * payment_returned refund that failed with refund_abandoned can't be retried through Flint
     * either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way
     * if you haven't already. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted",
     * "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "refund_abandoned"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key": string | null;
    /**
     * Who decided to make this refund: `merchant` for you or your integration, `flint` for a
     * refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's
     * `initiated_by`, it doesn't say which credential asked. Read-only. Value enum: "merchant",
     * "flint".
     */
    "initiated_by": "merchant" | "flint" | (string & {});
    /**
     * ID of the invoice whose credit note this refund paid out. Present only on refunds issued
     * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * How the refund applied to each order line item it covered, with quantity, tax, and
     * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to one order
     * line item: quantity, refunded amount, tax, adjustments, and modifier allocations.
     */
    "line_item_allocations"?: Array<RefundLineItemAllocation>;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * ID of the paid-order edit that created this refund. Present only on refunds issued through
     * an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     */
    "order_edit_id"?: string;
    /**
     * ID of the order the refund was issued against. For a refund with `reason`
     * `payment_returned`, the order the returned payment was for; the order never received this
     * money. Absent for a refund of a payment that has no order, and for a standalone gift card
     * refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Present only when `expand` includes `payment_intent`; `null` when expanded and there is no
     * related payment intent. anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
     * intent's summary fields, including amount, status, and capture method, returned when the
     * payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /**
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * The part of the refund returned through each payment, with its own status. Absent when the
     * refund was all gift card credit or store credit. [] (Value): {@link PaymentRefund}. The part
     * of a refund returned through one payment, with the amount, tip, status, and any failure
     * reason.
     */
    "payment_refunds"?: Array<PaymentRefund>;
    /**
     * ID of the payment review whose decline created this refund. Present only on refunds issued
     * for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     */
    "payment_review_id"?: string;
    /**
     * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is
     * on its way without review. Value enum: "manual_review", null.
     */
    "pending_reason": "manual_review" | null | (string & {}) | null;
    /**
     * Who moved or is moving the money for this refund. Flint processes refunds through a
     * processor or a gift card; merchant means the merchant returned the money outside Flint and
     * recorded it here. Existing refunds are processed by Flint. Value enum: "flint", "merchant".
     */
    "processed_by": "flint" | "merchant" | (string & {});
    /**
     * Why the refund was issued. It never changes how the money moves. The buyer's refund receipt
     * shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null.
     */
    "reason": "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock"
        | "payment_returned"
        | null
        | (string & {})
        | null;
    /** Note explaining the refund, up to 1,024 characters. */
    "reason_message"?: string;
    /**
     * Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id": string;
    /**
     * Whether the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     */
    "refund_platform_fee": boolean;
    /**
     * The merchant's opaque check, wire, or other reference for money returned outside Flint,
     * preserved exactly. Present only when processed_by is merchant and a reference was supplied.
     * external_reference_id is the merchant's own refund ID. minLength: 1. maxLength: 255.
     */
    "refund_reference"?: string;
    /**
     * When the merchant reports that the money was returned outside Flint. Present only when
     * processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "refunded_at"?: string;
    /**
     * Share of `amount_money` that refunds tips. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /**
     * ID of the return this refund paid out. Present only on refunds issued by a return. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * ID of the return resolution that issued this refund. Present only on refunds issued by a
     * return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * When `status` first became `succeeded`. For a refund with `payment_refunds` or
     * `tender_allocations`, it's when the last of them first succeeded, so it equals the latest
     * `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the
     * outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
     * `status` is `succeeded`; absent for every other status, including `partially_succeeded` and
     * a refund that failed after it succeeded. A refund that succeeds again shows its first
     * success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
    /**
     * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
     * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. [] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /**
     * Every tender the refund drew from, payment or gift card, with its amount, tip share, status,
     * and destination. [] (Value): {@link RefundTenderAllocation}. One tender's share of a refund,
     * listed in the refund's tender allocations.
     */
    "tender_allocations"?: Array<RefundTenderAllocation>;
    /**
     * Cash returned after an unissued gift card purchase refund failed. Return it through a new
     * refund against payment_intent_id and order_line_item_id. It does not issue another card.
     * Source remaining and pending amounts describe the entire original settlement allocation;
     * repeated entries for that source are not additive. [] (Value): {@link
     * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the card
     * was issued, including the amounts recovered.
     */
    "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * Who made a manual tax adjustment on a refund line item and where it came from, for audit
 * purposes.
 */
export type RefundAdjustmentAudit = {
    /**
     * ID you use for whoever made the adjustment, up to 255 characters. minLength: 1. Example:
     * "usr_01KEZF7C00YC8757ZYP9727JM0".
     */
    "actor_id": string;
    /**
     * What kind of actor made the adjustment. Example: "user". Value enum: "user", "system",
     * "admin".
     */
    "actor_type": "user" | "system" | "admin" | (string & {});
    /**
     * Where the adjustment came from, such as the name of your support tool. 1 to 255 characters.
     * minLength: 1.
     */
    "source": string;
};
/**
 * Who made a manual tax adjustment on a refund line item and where it came from, for audit
 * purposes.
 */
export type RefundAdjustmentAuditInput = {
    /**
     * ID you use for whoever made the adjustment, up to 255 characters. minLength: 1. Example:
     * "usr_01KEZF7C00YC8757ZYP9727JM0".
     */
    "actor_id": string;
    /**
     * What kind of actor made the adjustment. Example: "user". Value enum: "user", "system",
     * "admin".
     */
    "actor_type": "user" | "system" | "admin";
    /**
     * Where the adjustment came from, such as the name of your support tool. 1 to 255 characters.
     * minLength: 1.
     */
    "source": string;
};
/**
 * The reason recorded for a refund line item adjustment, as a `code` with an optional description.
 */
export type RefundAdjustmentReason = {
    /**
     * Why the adjustment was made. Value enum: "customer_agreement", "jurisdiction_specific_rule",
     * "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction",
     * "other".
     */
    "code": "customer_agreement"
        | "jurisdiction_specific_rule"
        | "merchant_policy"
        | "customer_request"
        | "restocking_policy"
        | "manual_tax_correction"
        | "other"
        | (string & {});
    /** Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. */
    "description"?: string;
};
export type RefundAdjustmentReasonPreviousAttributes = {
    /**
     * Why the adjustment was made. Value enum: "customer_agreement", "jurisdiction_specific_rule",
     * "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction",
     * "other". anyOf[1] (Value): string. Why the adjustment was made. Value enum:
     * "customer_agreement", "jurisdiction_specific_rule", "merchant_policy", "customer_request",
     * "restocking_policy", "manual_tax_correction", "other". anyOf[2] (Value): null.
     */
    "code"?: (("customer_agreement"
        | "jurisdiction_specific_rule"
        | "merchant_policy"
        | "customer_request"
        | "restocking_policy"
        | "manual_tax_correction"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Note explaining the reason, up to 1,024 characters. Required when `code` is `other`.
     * anyOf[1] (Value): string. Note explaining the reason, up to 1,024 characters. Required when
     * `code` is `other`. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
};
/** The reason to record for a refund adjustment, as a `code` with an optional description. */
export type RefundAdjustmentReasonRequestInput = {
    /**
     * Why the adjustment was made. Value enum: "customer_agreement", "jurisdiction_specific_rule",
     * "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction",
     * "other".
     */
    "code": "customer_agreement"
        | "jurisdiction_specific_rule"
        | "merchant_policy"
        | "customer_request"
        | "restocking_policy"
        | "manual_tax_correction"
        | "other";
    /**
     * Note explaining the reason, up to 1,024 characters. Required when `code` is `other`.
     * minLength: 1.
     */
    "description"?: string;
};
/** An order charge to refund when creating a refund, with an optional amount to refund. */
export type RefundCharge = {
    /**
     * Amount to refund from this charge. Omit it to refund the charge's full remaining amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * ID of the order charge to refund. minLength: 1. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id": string;
};
/** Money returned for one order charge, including subtotal, discount, and tax. */
export type RefundChargeAllocation = {
    /**
     * Total returned for this charge, including tax. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Discount allocated to the refunded part of the charge. It does not increase the money
     * returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** ID of the refunded order charge. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". */
    "order_charge_id": string;
    /**
     * ID of the order containing the refunded charge. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Charge amount returned excluding tax, after discounts. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax returned for this charge under automatic or external tax. Included in amount_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
};
export type RefundChargeAllocationPreviousAttributes = {
    /**
     * Total returned for this charge, including tax. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Discount allocated to the refunded part of the charge. It does not increase the money
     * returned. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the refunded order charge. anyOf[1] (Value): string. ID of the refunded order charge.
     * Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2] (Value): null.
     */
    "order_charge_id"?: ((string) | (null));
    /**
     * ID of the order containing the refunded charge. anyOf[1] (Value): string. ID of the order
     * containing the refunded charge. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
     * null.
     */
    "order_id"?: ((string) | (null));
    /**
     * Charge amount returned excluding tax, after discounts. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Tax returned for this charge under automatic or external tax. Included in amount_money.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/** An order charge to refund when creating a refund, with an optional amount to refund. */
export type RefundChargeInput = {
    /**
     * Amount to refund from this charge. Omit it to refund the charge's full remaining amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * ID of the order charge to refund. minLength: 1. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id": string;
};
export type RefundCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "charge_allocations"?: Array<RefundChargeAllocation>;
            "created_at": string;
            "credit_adjustment_money": MoneyValue;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string | null;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
            "reason": "duplicate"
                | "fraudulent"
                | "requested_by_customer"
                | "defective_product"
                | "wrong_item_shipped"
                | "never_received"
                | "not_as_described"
                | "arrived_too_late"
                | "customer_changed_mind"
                | "better_price_found"
                | "accidental_order"
                | "other"
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "refund.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "charge_allocations"?: Array<RefundChargeAllocation>;
            "created_at": string;
            "credit_adjustment_money": MoneyValue;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string | null;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
            "reason": "duplicate"
                | "fraudulent"
                | "requested_by_customer"
                | "defective_product"
                | "wrong_item_shipped"
                | "never_received"
                | "not_as_described"
                | "arrived_too_late"
                | "customer_changed_mind"
                | "better_price_found"
                | "accidental_order"
                | "other"
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "refund.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "refund.created";
});
/**
 * The `refund.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type RefundCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.charge_allocations (Optional): Array of {@link
     * RefundChargeAllocation}. Money returned for each order charge, including subtotal, discount,
     * and tax, combined across payment refunds. object.charge_allocations[] (Value): {@link
     * RefundChargeAllocation}. Money returned for one order charge, including subtotal, discount,
     * and tax. object.created_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_adjustment_money (Required): {@link
     * MoneyValue}. Money paid for Return resolution credits, included in amount_money. It carries
     * no merchandise, shipping, tax, or tip allocation. Zero for refunds without credits. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.credit_note_id (Optional): string. ID of the credit note this refund paid out.
     * Present only on refunds issued through a credit note. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. ID of the
     * customer on the refunded order or payment. Absent when neither has one. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.failure_reason (Optional): string. Why a refund failed or a payment
     * refund was canceled. Failed and canceled amounts become refundable again, except a refund
     * with reason payment_returned that failed with payment_disputed: the buyer won a dispute on
     * the charge, so nothing is left to refund. A payment_returned refund that failed with
     * refund_abandoned can't be retried through Flint either: the money is in your balance. Flint
     * hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then
     * create a new refund with a new idempotency key. Unknown provider values are returned as
     * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "refund_abandoned", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string
     * or null. The Idempotency-Key of the request that created this resource. `null` when that
     * request sent no key, Flint created the resource, the reader isn't the caller that created it
     * (another app install, a buyer, or the merchant reading an app's or buyer's record), or the
     * caller that created an older record is unknown. Filter its list with `idempotency_key` to
     * find it. Recorded payloads, including replayed responses and webhook events, can return
     * `null`. To find a key that a replay returns as `null`, read the resource.
     * object.initiated_by (Required): string. Who decided to make this refund: `merchant` for you
     * or your integration, `flint` for a refund Flint made on its own to return a payment it
     * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked.
     * Read-only. Value enum: "merchant", "flint". object.invoice_id (Optional): string. ID of the
     * invoice whose credit note this refund paid out. Present only on refunds issued through a
     * credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_item_allocations
     * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each order
     * line item it covered, with quantity, tax, and adjustments. object.line_item_allocations[]
     * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_edit_id (Optional): string. ID of the
     * paid-order edit that created this refund. Present only on refunds issued through an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Optional): string. ID of
     * the order the refund was issued against. For a refund with `reason` `payment_returned`, the
     * order the returned payment was for; the order never received this money. Absent for a refund
     * of a payment that has no order, and for a standalone gift card refund. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_refunds (Optional): Array of {@link
     * PaymentRefund}. The part of the refund returned through each payment, with its own status.
     * Absent when the refund was all gift card credit or store credit. object.payment_refunds[]
     * (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with the
     * amount, tip, status, and any failure reason. object.payment_review_id (Optional): string. ID
     * of the payment review whose decline created this refund. Present only on refunds issued for
     * a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.pending_reason
     * (Required): string or null. Why a pending refund is waiting. `null` when `status` isn't
     * `pending`, or when the refund is on its way without review. Value enum: "manual_review",
     * null. object.processed_by (Required): string. Who moved or is moving the money for this
     * refund. Flint processes refunds through a processor or a gift card; merchant means the
     * merchant returned the money outside Flint and recorded it here. Existing refunds are
     * processed by Flint. Value enum: "flint", "merchant". object.reason (Required): string or
     * null. Why the refund was issued. It never changes how the money moves. The buyer's refund
     * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null. object.reason_message
     * (Optional): string. Note explaining the refund, up to 1,024 characters. object.refund_id
     * (Required): string. Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_platform_fee (Required): boolean. Whether
     * the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * object.refund_reference (Optional): string. The merchant's opaque check, wire, or other
     * reference for money returned outside Flint, preserved exactly. Present only when
     * processed_by is merchant and a reference was supplied. external_reference_id is the
     * merchant's own refund ID. minLength: 1. maxLength: 255. object.refunded_at (Optional):
     * string. When the merchant reports that the money was returned outside Flint. Present only
     * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refunded_tip_money (Required): {@link MoneyValue}. Share of `amount_money` that
     * refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.return_id (Optional): string. ID of the return this refund paid out. Present
     * only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. ID of the return resolution that issued this
     * refund. Present only on refunds issued by a return. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.status (Required): string. Summary of
     * payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". object.succeeded_at (Optional): string. When `status` first
     * became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when
     * the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a
     * refund Flint processes, it's when Flint recorded the outcome; with `processed_by`
     * `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for
     * every other status, including `partially_succeeded` and a refund that failed after it
     * succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.tax_breakdown_refunds (Optional): Array of {@link
     * RefundTaxBreakdownRefund}. Tax reversed on order-level charges and flat taxes, one entry per
     * tax breakdown. Tax reversed on line items is in
     * `line_item_allocations[].tax_breakdown_refunds`. object.tax_breakdown_refunds[] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * object.tender_allocations (Optional): Array of {@link RefundTenderAllocation}. Every tender
     * the refund drew from, payment or gift card, with its amount, tip share, status, and
     * destination. object.tender_allocations[] (Value): {@link RefundTenderAllocation}. One
     * tender's share of a refund, listed in the refund's tender allocations.
     * object.unissued_gift_card_recoveries (Optional): Array of {@link
     * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase refund
     * failed. Return it through a new refund against payment_intent_id and order_line_item_id. It
     * does not issue another card. Source remaining and pending amounts describe the entire
     * original settlement allocation; repeated entries for that source are not additive.
     * object.unissued_gift_card_recoveries[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. charge_allocations (Optional): Array of {@link
         * RefundChargeAllocation}. Money returned for each order charge, including subtotal,
         * discount, and tax, combined across payment refunds. charge_allocations[] (Value): {@link
         * RefundChargeAllocation}. Money returned for one order charge, including subtotal,
         * discount, and tax. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". credit_adjustment_money (Required): {@link MoneyValue}.
         * Money paid for Return resolution credits, included in amount_money. It carries no
         * merchandise, shipping, tax, or tip allocation. Zero for refunds without credits.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * credit_note_id (Optional): string. ID of the credit note this refund paid out. Present
         * only on refunds issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
         * customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. ID of the customer on the refunded order
         * or payment. Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". failure_reason
         * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
         * canceled amounts become refundable again, except a refund with reason payment_returned
         * that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is
         * left to refund. A payment_returned refund that failed with refund_abandoned can't be
         * retried through Flint either: the money is in your balance. Flint hasn't repaid the
         * buyer. Repay them another way if you haven't already. Fix the cause, then create a new
         * refund with a new idempotency key. Unknown provider values are returned as
         * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
         * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
         * "payment_disputed", "refund_abandoned", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. initiated_by (Required): string. Who decided to make this refund:
         * `merchant` for you or your integration, `flint` for a refund Flint made on its own to
         * return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say
         * which credential asked. Read-only. Value enum: "merchant", "flint". invoice_id
         * (Optional): string. ID of the invoice whose credit note this refund paid out. Present
         * only on refunds issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * line_item_allocations (Optional): Array of {@link RefundLineItemAllocation}. How the
         * refund applied to each order line item it covered, with quantity, tax, and adjustments.
         * line_item_allocations[] (Value): {@link RefundLineItemAllocation}. How a refund applied
         * to one order line item: quantity, refunded amount, tax, adjustments, and modifier
         * allocations. merchant_id (Required): string. ID of the merchant this resource belongs
         * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}.
         * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `order`; `null` when expanded and there is no related order. order.anyOf[1] (Value):
         * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
         * refund status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_edit_id (Optional): string. ID of the paid-order
         * edit that created this refund. Present only on refunds issued through an order edit.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id (Optional): string. ID of the order
         * the refund was issued against. For a refund with `reason` `payment_returned`, the order
         * the returned payment was for; the order never received this money. Absent for a refund
         * of a payment that has no order, and for a standalone gift card refund. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment the refund was issued against, when it targeted
         * one payment. `payment_refunds` lists every payment it returned money through. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_refunds (Optional): Array of {@link
         * PaymentRefund}. The part of the refund returned through each payment, with its own
         * status. Absent when the refund was all gift card credit or store credit.
         * payment_refunds[] (Value): {@link PaymentRefund}. The part of a refund returned through
         * one payment, with the amount, tip, status, and any failure reason. payment_review_id
         * (Optional): string. ID of the payment review whose decline created this refund. Present
         * only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * pending_reason (Required): string or null. Why a pending refund is waiting. `null` when
         * `status` isn't `pending`, or when the refund is on its way without review. Value enum:
         * "manual_review", null. processed_by (Required): string. Who moved or is moving the money
         * for this refund. Flint processes refunds through a processor or a gift card; merchant
         * means the merchant returned the money outside Flint and recorded it here. Existing
         * refunds are processed by Flint. Value enum: "flint", "merchant". reason (Required):
         * string or null. Why the refund was issued. It never changes how the money moves. The
         * buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`,
         * `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`,
         * `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets
         * `payment_returned`, and it can't be sent in requests. `null` when no reason was
         * recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock", "payment_returned", null. reason_message (Optional): string.
         * Note explaining the refund, up to 1,024 characters. refund_id (Required): string. Unique
         * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_platform_fee (Required): boolean. Whether the request asked to return the
         * platform fee on the payments this refund refunds (refund_platform_fee). Each payment
         * refund's refunded_platform_fee_money is what it returns. refund_reference (Optional):
         * string. The merchant's opaque check, wire, or other reference for money returned outside
         * Flint, preserved exactly. Present only when processed_by is merchant and a reference was
         * supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
         * maxLength: 255. refunded_at (Optional): string. When the merchant reports that the money
         * was returned outside Flint. Present only when processed_by is merchant. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refunded_tip_money (Required): {@link
         * MoneyValue}. Share of `amount_money` that refunds tips. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. return_id (Optional): string. ID of
         * the return this refund paid out. Present only on refunds issued by a return. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional): string. ID of the
         * return resolution that issued this refund. Present only on refunds issued by a return.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". status (Required): string. Summary of
         * payment_refunds and tender_allocations. Only failed is final: succeeded and
         * partially_succeeded can still change when a bank rejects a refund after accepting it. A
         * refund Flint made to return a payment it couldn't accept goes from succeeded back to
         * pending, with pending_reason manual_review, when a bank reverses it. Follow
         * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
         * refund.failed when its outcome changes, and refund.updated for other changes. Value
         * enum: "pending", "succeeded", "partially_succeeded", "failed". succeeded_at (Optional):
         * string. When `status` first became `succeeded`. For a refund with `payment_refunds` or
         * `tender_allocations`, it's when the last of them first succeeded, so it equals the
         * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded
         * the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
         * `status` is `succeeded`; absent for every other status, including `partially_succeeded`
         * and a refund that failed after it succeeded. A refund that succeeds again shows its
         * first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * tax_breakdown_refunds (Optional): Array of {@link RefundTaxBreakdownRefund}. Tax
         * reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
         * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`.
         * tax_breakdown_refunds[] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for
         * one tax breakdown on an order. tender_allocations (Optional): Array of {@link
         * RefundTenderAllocation}. Every tender the refund drew from, payment or gift card, with
         * its amount, tip share, status, and destination. tender_allocations[] (Value): {@link
         * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
         * allocations. unissued_gift_card_recoveries (Optional): Array of {@link
         * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase
         * refund failed. Return it through a new refund against payment_intent_id and
         * order_line_item_id. It does not issue another card. Source remaining and pending amounts
         * describe the entire original settlement allocation; repeated entries for that source are
         * not additive. unissued_gift_card_recoveries[] (Value): {@link
         * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the
         * card was issued, including the amounts recovered. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Money returned for each order charge, including subtotal, discount, and tax,
             * combined across payment refunds. [] (Value): {@link RefundChargeAllocation}. Money
             * returned for one order charge, including subtotal, discount, and tax.
             */
            "charge_allocations"?: Array<RefundChargeAllocation>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Money paid for Return resolution credits, included in amount_money. It carries no
             * merchandise, shipping, tax, or tip allocation. Zero for refunds without credits.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "credit_adjustment_money": MoneyValue;
            /**
             * ID of the credit note this refund paid out. Present only on refunds issued through a
             * credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer on the refunded order or payment. Absent when neither has one.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Why a refund failed or a payment refund was canceled. Failed and canceled amounts
             * become refundable again, except a refund with reason payment_returned that failed
             * with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
             * refund. A payment_returned refund that failed with refund_abandoned can't be retried
             * through Flint either: the money is in your balance. Flint hasn't repaid the buyer.
             * Repay them another way if you haven't already. Fix the cause, then create a new
             * refund with a new idempotency key. Unknown provider values are returned as
             * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
             * "insufficient_funds", "insufficient_available_balance", "declined",
             * "merchant_request", "payment_disputed", "refund_abandoned", "payment_refund_failed",
             * "payment_refund_not_attempted", "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource.
             */
            "idempotency_key"?: string | null;
            /**
             * Who decided to make this refund: `merchant` for you or your integration, `flint` for
             * a refund Flint made on its own to return a payment it couldn't accept. Unlike a
             * Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value
             * enum: "merchant", "flint".
             */
            "initiated_by": "merchant" | "flint" | (string & {});
            /**
             * ID of the invoice whose credit note this refund paid out. Present only on refunds
             * issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * How the refund applied to each order line item it covered, with quantity, tax, and
             * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to
             * one order line item: quantity, refunded amount, tax, adjustments, and modifier
             * allocations.
             */
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the paid-order edit that created this refund. Present only on refunds issued
             * through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
             */
            "order_edit_id"?: string;
            /**
             * ID of the order the refund was issued against. For a refund with `reason`
             * `payment_returned`, the order the returned payment was for; the order never received
             * this money. Absent for a refund of a payment that has no order, and for a standalone
             * gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment the refund was issued against, when it targeted one payment.
             * `payment_refunds` lists every payment it returned money through. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * The part of the refund returned through each payment, with its own status. Absent
             * when the refund was all gift card credit or store credit. [] (Value): {@link
             * PaymentRefund}. The part of a refund returned through one payment, with the amount,
             * tip, status, and any failure reason.
             */
            "payment_refunds"?: Array<PaymentRefund>;
            /**
             * ID of the payment review whose decline created this refund. Present only on refunds
             * issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id"?: string;
            /**
             * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the
             * refund is on its way without review. Value enum: "manual_review", null.
             */
            "pending_reason": "manual_review" | null | (string & {}) | null;
            /**
             * Who moved or is moving the money for this refund. Flint processes refunds through a
             * processor or a gift card; merchant means the merchant returned the money outside
             * Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
             * "flint", "merchant".
             */
            "processed_by": "flint" | "merchant" | (string & {});
            /**
             * Why the refund was issued. It never changes how the money moves. The buyer's refund
             * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
             * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
             * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it
             * can't be sent in requests. `null` when no reason was recorded. Value enum:
             * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
             * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
             * "customer_changed_mind", "better_price_found", "accidental_order", "other",
             * "out_of_stock", "payment_returned", null.
             */
            "reason": "duplicate"
                | "fraudulent"
                | "requested_by_customer"
                | "defective_product"
                | "wrong_item_shipped"
                | "never_received"
                | "not_as_described"
                | "arrived_too_late"
                | "customer_changed_mind"
                | "better_price_found"
                | "accidental_order"
                | "other"
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            /** Note explaining the refund, up to 1,024 characters. */
            "reason_message"?: string;
            /**
             * Unique identifier for this refund, prefixed `ref_`. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string;
            /**
             * Whether the request asked to return the platform fee on the payments this refund
             * refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is
             * what it returns.
             */
            "refund_platform_fee": boolean;
            /**
             * The merchant's opaque check, wire, or other reference for money returned outside
             * Flint, preserved exactly. Present only when processed_by is merchant and a reference
             * was supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
             * maxLength: 255.
             */
            "refund_reference"?: string;
            /**
             * When the merchant reports that the money was returned outside Flint. Present only
             * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refunded_at"?: string;
            /**
             * Share of `amount_money` that refunds tips. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "refunded_tip_money": MoneyValue;
            /**
             * ID of the return this refund paid out. Present only on refunds issued by a return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * ID of the return resolution that issued this refund. Present only on refunds issued
             * by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded
             * and partially_succeeded can still change when a bank rejects a refund after
             * accepting it. A refund Flint made to return a payment it couldn't accept goes from
             * succeeded back to pending, with pending_reason manual_review, when a bank reverses
             * it. Follow refund.created when it is accepted, refund.succeeded,
             * refund.partially_succeeded, or refund.failed when its outcome changes, and
             * refund.updated for other changes. Value enum: "pending", "succeeded",
             * "partially_succeeded", "failed".
             */
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * When `status` first became `succeeded`. For a refund with `payment_refunds` or
             * `tender_allocations`, it's when the last of them first succeeded, so it equals the
             * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint
             * recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`.
             * Present only while `status` is `succeeded`; absent for every other status, including
             * `partially_succeeded` and a refund that failed after it succeeded. A refund that
             * succeeds again shows its first success time. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "succeeded_at"?: string;
            /**
             * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
             * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. []
             * (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on
             * an order.
             */
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            /**
             * Every tender the refund drew from, payment or gift card, with its amount, tip share,
             * status, and destination. [] (Value): {@link RefundTenderAllocation}. One tender's
             * share of a refund, listed in the refund's tender allocations.
             */
            "tender_allocations"?: Array<RefundTenderAllocation>;
            /**
             * Cash returned after an unissued gift card purchase refund failed. Return it through
             * a new refund against payment_intent_id and order_line_item_id. It does not issue
             * another card. Source remaining and pending amounts describe the entire original
             * settlement allocation; repeated entries for that source are not additive. []
             * (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
             * refunded before the card was issued, including the amounts recovered.
             */
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "refund.created". */
    "event_type"?: "refund.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `refund.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type RefundCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.charge_allocations (Optional): Array of {@link
     * RefundChargeAllocation}. Money returned for each order charge, including subtotal, discount,
     * and tax, combined across payment refunds. object.charge_allocations[] (Value): {@link
     * RefundChargeAllocation}. Money returned for one order charge, including subtotal, discount,
     * and tax. object.created_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_adjustment_money (Required): {@link
     * MoneyValue}. Money paid for Return resolution credits, included in amount_money. It carries
     * no merchandise, shipping, tax, or tip allocation. Zero for refunds without credits. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.credit_note_id (Optional): string. ID of the credit note this refund paid out.
     * Present only on refunds issued through a credit note. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. ID of the
     * customer on the refunded order or payment. Absent when neither has one. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.failure_reason (Optional): string. Why a refund failed or a payment
     * refund was canceled. Failed and canceled amounts become refundable again, except a refund
     * with reason payment_returned that failed with payment_disputed: the buyer won a dispute on
     * the charge, so nothing is left to refund. A payment_returned refund that failed with
     * refund_abandoned can't be retried through Flint either: the money is in your balance. Flint
     * hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then
     * create a new refund with a new idempotency key. Unknown provider values are returned as
     * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "refund_abandoned", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string
     * or null. The Idempotency-Key of the request that created this resource. `null` when that
     * request sent no key, Flint created the resource, the reader isn't the caller that created it
     * (another app install, a buyer, or the merchant reading an app's or buyer's record), or the
     * caller that created an older record is unknown. Filter its list with `idempotency_key` to
     * find it. Recorded payloads, including replayed responses and webhook events, can return
     * `null`. To find a key that a replay returns as `null`, read the resource.
     * object.initiated_by (Required): string. Who decided to make this refund: `merchant` for you
     * or your integration, `flint` for a refund Flint made on its own to return a payment it
     * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked.
     * Read-only. Value enum: "merchant", "flint". object.invoice_id (Optional): string. ID of the
     * invoice whose credit note this refund paid out. Present only on refunds issued through a
     * credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_item_allocations
     * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each order
     * line item it covered, with quantity, tax, and adjustments. object.line_item_allocations[]
     * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_edit_id (Optional): string. ID of the
     * paid-order edit that created this refund. Present only on refunds issued through an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Optional): string. ID of
     * the order the refund was issued against. For a refund with `reason` `payment_returned`, the
     * order the returned payment was for; the order never received this money. Absent for a refund
     * of a payment that has no order, and for a standalone gift card refund. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_refunds (Optional): Array of {@link
     * PaymentRefund}. The part of the refund returned through each payment, with its own status.
     * Absent when the refund was all gift card credit or store credit. object.payment_refunds[]
     * (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with the
     * amount, tip, status, and any failure reason. object.payment_review_id (Optional): string. ID
     * of the payment review whose decline created this refund. Present only on refunds issued for
     * a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.pending_reason
     * (Required): string or null. Why a pending refund is waiting. `null` when `status` isn't
     * `pending`, or when the refund is on its way without review. Value enum: "manual_review",
     * null. object.processed_by (Required): string. Who moved or is moving the money for this
     * refund. Flint processes refunds through a processor or a gift card; merchant means the
     * merchant returned the money outside Flint and recorded it here. Existing refunds are
     * processed by Flint. Value enum: "flint", "merchant". object.reason (Required): string or
     * null. Why the refund was issued. It never changes how the money moves. The buyer's refund
     * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null. object.reason_message
     * (Optional): string. Note explaining the refund, up to 1,024 characters. object.refund_id
     * (Required): string. Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_platform_fee (Required): boolean. Whether
     * the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * object.refund_reference (Optional): string. The merchant's opaque check, wire, or other
     * reference for money returned outside Flint, preserved exactly. Present only when
     * processed_by is merchant and a reference was supplied. external_reference_id is the
     * merchant's own refund ID. minLength: 1. maxLength: 255. object.refunded_at (Optional):
     * string. When the merchant reports that the money was returned outside Flint. Present only
     * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refunded_tip_money (Required): {@link MoneyValue}. Share of `amount_money` that
     * refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.return_id (Optional): string. ID of the return this refund paid out. Present
     * only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. ID of the return resolution that issued this
     * refund. Present only on refunds issued by a return. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.status (Required): string. Summary of
     * payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". object.succeeded_at (Optional): string. When `status` first
     * became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when
     * the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a
     * refund Flint processes, it's when Flint recorded the outcome; with `processed_by`
     * `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for
     * every other status, including `partially_succeeded` and a refund that failed after it
     * succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.tax_breakdown_refunds (Optional): Array of {@link
     * RefundTaxBreakdownRefund}. Tax reversed on order-level charges and flat taxes, one entry per
     * tax breakdown. Tax reversed on line items is in
     * `line_item_allocations[].tax_breakdown_refunds`. object.tax_breakdown_refunds[] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * object.tender_allocations (Optional): Array of {@link RefundTenderAllocation}. Every tender
     * the refund drew from, payment or gift card, with its amount, tip share, status, and
     * destination. object.tender_allocations[] (Value): {@link RefundTenderAllocation}. One
     * tender's share of a refund, listed in the refund's tender allocations.
     * object.unissued_gift_card_recoveries (Optional): Array of {@link
     * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase refund
     * failed. Return it through a new refund against payment_intent_id and order_line_item_id. It
     * does not issue another card. Source remaining and pending amounts describe the entire
     * original settlement allocation; repeated entries for that source are not additive.
     * object.unissued_gift_card_recoveries[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. charge_allocations (Optional): Array of {@link
         * RefundChargeAllocation}. Money returned for each order charge, including subtotal,
         * discount, and tax, combined across payment refunds. charge_allocations[] (Value): {@link
         * RefundChargeAllocation}. Money returned for one order charge, including subtotal,
         * discount, and tax. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". credit_adjustment_money (Required): {@link MoneyValue}.
         * Money paid for Return resolution credits, included in amount_money. It carries no
         * merchandise, shipping, tax, or tip allocation. Zero for refunds without credits.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * credit_note_id (Optional): string. ID of the credit note this refund paid out. Present
         * only on refunds issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
         * customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. ID of the customer on the refunded order
         * or payment. Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". failure_reason
         * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
         * canceled amounts become refundable again, except a refund with reason payment_returned
         * that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is
         * left to refund. A payment_returned refund that failed with refund_abandoned can't be
         * retried through Flint either: the money is in your balance. Flint hasn't repaid the
         * buyer. Repay them another way if you haven't already. Fix the cause, then create a new
         * refund with a new idempotency key. Unknown provider values are returned as
         * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
         * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
         * "payment_disputed", "refund_abandoned", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. initiated_by (Required): string. Who decided to make this refund:
         * `merchant` for you or your integration, `flint` for a refund Flint made on its own to
         * return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say
         * which credential asked. Read-only. Value enum: "merchant", "flint". invoice_id
         * (Optional): string. ID of the invoice whose credit note this refund paid out. Present
         * only on refunds issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * line_item_allocations (Optional): Array of {@link RefundLineItemAllocation}. How the
         * refund applied to each order line item it covered, with quantity, tax, and adjustments.
         * line_item_allocations[] (Value): {@link RefundLineItemAllocation}. How a refund applied
         * to one order line item: quantity, refunded amount, tax, adjustments, and modifier
         * allocations. merchant_id (Required): string. ID of the merchant this resource belongs
         * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}.
         * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `order`; `null` when expanded and there is no related order. order.anyOf[1] (Value):
         * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
         * refund status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_edit_id (Optional): string. ID of the paid-order
         * edit that created this refund. Present only on refunds issued through an order edit.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id (Optional): string. ID of the order
         * the refund was issued against. For a refund with `reason` `payment_returned`, the order
         * the returned payment was for; the order never received this money. Absent for a refund
         * of a payment that has no order, and for a standalone gift card refund. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment the refund was issued against, when it targeted
         * one payment. `payment_refunds` lists every payment it returned money through. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_refunds (Optional): Array of {@link
         * PaymentRefund}. The part of the refund returned through each payment, with its own
         * status. Absent when the refund was all gift card credit or store credit.
         * payment_refunds[] (Value): {@link PaymentRefund}. The part of a refund returned through
         * one payment, with the amount, tip, status, and any failure reason. payment_review_id
         * (Optional): string. ID of the payment review whose decline created this refund. Present
         * only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * pending_reason (Required): string or null. Why a pending refund is waiting. `null` when
         * `status` isn't `pending`, or when the refund is on its way without review. Value enum:
         * "manual_review", null. processed_by (Required): string. Who moved or is moving the money
         * for this refund. Flint processes refunds through a processor or a gift card; merchant
         * means the merchant returned the money outside Flint and recorded it here. Existing
         * refunds are processed by Flint. Value enum: "flint", "merchant". reason (Required):
         * string or null. Why the refund was issued. It never changes how the money moves. The
         * buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`,
         * `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`,
         * `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets
         * `payment_returned`, and it can't be sent in requests. `null` when no reason was
         * recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock", "payment_returned", null. reason_message (Optional): string.
         * Note explaining the refund, up to 1,024 characters. refund_id (Required): string. Unique
         * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_platform_fee (Required): boolean. Whether the request asked to return the
         * platform fee on the payments this refund refunds (refund_platform_fee). Each payment
         * refund's refunded_platform_fee_money is what it returns. refund_reference (Optional):
         * string. The merchant's opaque check, wire, or other reference for money returned outside
         * Flint, preserved exactly. Present only when processed_by is merchant and a reference was
         * supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
         * maxLength: 255. refunded_at (Optional): string. When the merchant reports that the money
         * was returned outside Flint. Present only when processed_by is merchant. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refunded_tip_money (Required): {@link
         * MoneyValue}. Share of `amount_money` that refunds tips. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. return_id (Optional): string. ID of
         * the return this refund paid out. Present only on refunds issued by a return. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional): string. ID of the
         * return resolution that issued this refund. Present only on refunds issued by a return.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". status (Required): string. Summary of
         * payment_refunds and tender_allocations. Only failed is final: succeeded and
         * partially_succeeded can still change when a bank rejects a refund after accepting it. A
         * refund Flint made to return a payment it couldn't accept goes from succeeded back to
         * pending, with pending_reason manual_review, when a bank reverses it. Follow
         * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
         * refund.failed when its outcome changes, and refund.updated for other changes. Value
         * enum: "pending", "succeeded", "partially_succeeded", "failed". succeeded_at (Optional):
         * string. When `status` first became `succeeded`. For a refund with `payment_refunds` or
         * `tender_allocations`, it's when the last of them first succeeded, so it equals the
         * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded
         * the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
         * `status` is `succeeded`; absent for every other status, including `partially_succeeded`
         * and a refund that failed after it succeeded. A refund that succeeds again shows its
         * first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * tax_breakdown_refunds (Optional): Array of {@link RefundTaxBreakdownRefund}. Tax
         * reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
         * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`.
         * tax_breakdown_refunds[] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for
         * one tax breakdown on an order. tender_allocations (Optional): Array of {@link
         * RefundTenderAllocation}. Every tender the refund drew from, payment or gift card, with
         * its amount, tip share, status, and destination. tender_allocations[] (Value): {@link
         * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
         * allocations. unissued_gift_card_recoveries (Optional): Array of {@link
         * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase
         * refund failed. Return it through a new refund against payment_intent_id and
         * order_line_item_id. It does not issue another card. Source remaining and pending amounts
         * describe the entire original settlement allocation; repeated entries for that source are
         * not additive. unissued_gift_card_recoveries[] (Value): {@link
         * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the
         * card was issued, including the amounts recovered. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Money returned for each order charge, including subtotal, discount, and tax,
             * combined across payment refunds. [] (Value): {@link RefundChargeAllocation}. Money
             * returned for one order charge, including subtotal, discount, and tax.
             */
            "charge_allocations"?: Array<RefundChargeAllocation>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Money paid for Return resolution credits, included in amount_money. It carries no
             * merchandise, shipping, tax, or tip allocation. Zero for refunds without credits.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "credit_adjustment_money": MoneyValue;
            /**
             * ID of the credit note this refund paid out. Present only on refunds issued through a
             * credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer on the refunded order or payment. Absent when neither has one.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Why a refund failed or a payment refund was canceled. Failed and canceled amounts
             * become refundable again, except a refund with reason payment_returned that failed
             * with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
             * refund. A payment_returned refund that failed with refund_abandoned can't be retried
             * through Flint either: the money is in your balance. Flint hasn't repaid the buyer.
             * Repay them another way if you haven't already. Fix the cause, then create a new
             * refund with a new idempotency key. Unknown provider values are returned as
             * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
             * "insufficient_funds", "insufficient_available_balance", "declined",
             * "merchant_request", "payment_disputed", "refund_abandoned", "payment_refund_failed",
             * "payment_refund_not_attempted", "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource.
             */
            "idempotency_key"?: string | null;
            /**
             * Who decided to make this refund: `merchant` for you or your integration, `flint` for
             * a refund Flint made on its own to return a payment it couldn't accept. Unlike a
             * Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value
             * enum: "merchant", "flint".
             */
            "initiated_by": "merchant" | "flint" | (string & {});
            /**
             * ID of the invoice whose credit note this refund paid out. Present only on refunds
             * issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * How the refund applied to each order line item it covered, with quantity, tax, and
             * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to
             * one order line item: quantity, refunded amount, tax, adjustments, and modifier
             * allocations.
             */
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the paid-order edit that created this refund. Present only on refunds issued
             * through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
             */
            "order_edit_id"?: string;
            /**
             * ID of the order the refund was issued against. For a refund with `reason`
             * `payment_returned`, the order the returned payment was for; the order never received
             * this money. Absent for a refund of a payment that has no order, and for a standalone
             * gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment the refund was issued against, when it targeted one payment.
             * `payment_refunds` lists every payment it returned money through. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * The part of the refund returned through each payment, with its own status. Absent
             * when the refund was all gift card credit or store credit. [] (Value): {@link
             * PaymentRefund}. The part of a refund returned through one payment, with the amount,
             * tip, status, and any failure reason.
             */
            "payment_refunds"?: Array<PaymentRefund>;
            /**
             * ID of the payment review whose decline created this refund. Present only on refunds
             * issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id"?: string;
            /**
             * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the
             * refund is on its way without review. Value enum: "manual_review", null.
             */
            "pending_reason": "manual_review" | null | (string & {}) | null;
            /**
             * Who moved or is moving the money for this refund. Flint processes refunds through a
             * processor or a gift card; merchant means the merchant returned the money outside
             * Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
             * "flint", "merchant".
             */
            "processed_by": "flint" | "merchant" | (string & {});
            /**
             * Why the refund was issued. It never changes how the money moves. The buyer's refund
             * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
             * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
             * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it
             * can't be sent in requests. `null` when no reason was recorded. Value enum:
             * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
             * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
             * "customer_changed_mind", "better_price_found", "accidental_order", "other",
             * "out_of_stock", "payment_returned", null.
             */
            "reason": "duplicate"
                | "fraudulent"
                | "requested_by_customer"
                | "defective_product"
                | "wrong_item_shipped"
                | "never_received"
                | "not_as_described"
                | "arrived_too_late"
                | "customer_changed_mind"
                | "better_price_found"
                | "accidental_order"
                | "other"
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            /** Note explaining the refund, up to 1,024 characters. */
            "reason_message"?: string;
            /**
             * Unique identifier for this refund, prefixed `ref_`. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string;
            /**
             * Whether the request asked to return the platform fee on the payments this refund
             * refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is
             * what it returns.
             */
            "refund_platform_fee": boolean;
            /**
             * The merchant's opaque check, wire, or other reference for money returned outside
             * Flint, preserved exactly. Present only when processed_by is merchant and a reference
             * was supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
             * maxLength: 255.
             */
            "refund_reference"?: string;
            /**
             * When the merchant reports that the money was returned outside Flint. Present only
             * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refunded_at"?: string;
            /**
             * Share of `amount_money` that refunds tips. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "refunded_tip_money": MoneyValue;
            /**
             * ID of the return this refund paid out. Present only on refunds issued by a return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * ID of the return resolution that issued this refund. Present only on refunds issued
             * by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded
             * and partially_succeeded can still change when a bank rejects a refund after
             * accepting it. A refund Flint made to return a payment it couldn't accept goes from
             * succeeded back to pending, with pending_reason manual_review, when a bank reverses
             * it. Follow refund.created when it is accepted, refund.succeeded,
             * refund.partially_succeeded, or refund.failed when its outcome changes, and
             * refund.updated for other changes. Value enum: "pending", "succeeded",
             * "partially_succeeded", "failed".
             */
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * When `status` first became `succeeded`. For a refund with `payment_refunds` or
             * `tender_allocations`, it's when the last of them first succeeded, so it equals the
             * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint
             * recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`.
             * Present only while `status` is `succeeded`; absent for every other status, including
             * `partially_succeeded` and a refund that failed after it succeeded. A refund that
             * succeeds again shows its first success time. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "succeeded_at"?: string;
            /**
             * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
             * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. []
             * (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on
             * an order.
             */
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            /**
             * Every tender the refund drew from, payment or gift card, with its amount, tip share,
             * status, and destination. [] (Value): {@link RefundTenderAllocation}. One tender's
             * share of a refund, listed in the refund's tender allocations.
             */
            "tender_allocations"?: Array<RefundTenderAllocation>;
            /**
             * Cash returned after an unissued gift card purchase refund failed. Return it through
             * a new refund against payment_intent_id and order_line_item_id. It does not issue
             * another card. Source remaining and pending amounts describe the entire original
             * settlement allocation; repeated entries for that source are not additive. []
             * (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
             * refunded before the card was issued, including the amounts recovered.
             */
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "refund.created". */
    "event_type"?: "refund.created";
});
/**
 * Default refund destinations for payment intent and gift card redemption allocations planned by
 * Flint. Each tender type defaults to original when omitted.
 */
export type RefundDestinations = {
    /**
     * Where gift card redemption value is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards, including when the original is closed or cannot accept
     * the full credit. Default: "original". Value enum: "original", "new_gift_card".
     */
    "gift_card_redemption"?: "original" | "new_gift_card" | (string & {});
    /**
     * Default destination for every payment intent allocation Flint plans for this refund.
     * original returns value to the payment; new_gift_card issues store credit on new Flint gift
     * cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or
     * Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other
     * payment options, non-USD payments, and payments without an order return INVALID_REQUEST with
     * a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card
     * redemption destinations are unaffected by the payment restrictions. Default: "original".
     * Value enum: "original", "new_gift_card".
     */
    "payment_intent"?: "original" | "new_gift_card" | (string & {});
};
/**
 * Default refund destinations for payment intent and gift card redemption allocations planned by
 * Flint. Each tender type defaults to original when omitted.
 */
export type RefundDestinationsInput = {
    /**
     * Where gift card redemption value is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards, including when the original is closed or cannot accept
     * the full credit. Default: "original". Value enum: "original", "new_gift_card".
     */
    "gift_card_redemption"?: "original" | "new_gift_card";
    /**
     * Default destination for every payment intent allocation Flint plans for this refund.
     * original returns value to the payment; new_gift_card issues store credit on new Flint gift
     * cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or
     * Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other
     * payment options, non-USD payments, and payments without an order return INVALID_REQUEST with
     * a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card
     * redemption destinations are unaffected by the payment restrictions. Default: "original".
     * Value enum: "original", "new_gift_card".
     */
    "payment_intent"?: "original" | "new_gift_card";
};
export type RefundFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "charge_allocations"?: Array<RefundChargeAllocation>;
            "created_at": string;
            "credit_adjustment_money": MoneyValue;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string | null;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
            "reason": "duplicate"
                | "fraudulent"
                | "requested_by_customer"
                | "defective_product"
                | "wrong_item_shipped"
                | "never_received"
                | "not_as_described"
                | "arrived_too_late"
                | "customer_changed_mind"
                | "better_price_found"
                | "accidental_order"
                | "other"
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "charge_allocations"?: ((Array<RefundChargeAllocationPreviousAttributes>) | (null));
            "created_at"?: ((string) | (null));
            "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            "credit_note_id"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_reason"?: (("expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {}))
                | (null));
            "idempotency_key"?: ((string) | (null));
            "initiated_by"?: (("merchant" | "flint" | (string & {})) | (null));
            "invoice_id"?: ((string) | (null));
            "line_item_allocations"?: ((Array<RefundLineItemAllocationPreviousAttributes>) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_refunds"?: ((Array<PaymentRefundPreviousAttributes>) | (null));
            "payment_review_id"?: ((string) | (null));
            "pending_reason"?: (("manual_review" | null | (string & {})) | (null));
            "processed_by"?: (("flint" | "merchant" | (string & {})) | (null));
            "reason"?: (("duplicate"
                | "fraudulent"
                | "requested_by_customer"
                | "defective_product"
                | "wrong_item_shipped"
                | "never_received"
                | "not_as_described"
                | "arrived_too_late"
                | "customer_changed_mind"
                | "better_price_found"
                | "accidental_order"
                | "other"
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {}))
                | (null));
            "reason_message"?: ((string) | (null));
            "refund_id"?: ((string) | (null));
            "refund_platform_fee"?: ((boolean) | (null));
            "refund_reference"?: ((string) | (null));
            "refunded_at"?: ((string) | (null));
            "refunded_tip_money"?: ((MoneyValuePreviousAttributes) | (null));
            "return_id"?: ((string) | (null));
            "return_resolution_id"?: ((string) | (null));
            "status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            "succeeded_at"?: ((string) | (null));
            "tax_breakdown_refunds"?: ((Array<RefundTaxBreakdownRefundPreviousAttributes>) | (null));
            "tender_allocations"?: ((Array<RefundTenderAllocationPreviousAttributes>) | (null));
            "unissued_gift_card_recoveries"?: ((Array<RefundUnissuedGiftCardRecoveryPreviousAttributes>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "refund.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "charge_allocations"?: Array<RefundChargeAllocation>;
            "created_at": string;
            "credit_adjustment_money": MoneyValue;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string | null;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
            "reason": "duplicate"
                | "fraudulent"
                | "requested_by_customer"
                | "defective_product"
                | "wrong_item_shipped"
                | "never_received"
                | "not_as_described"
                | "arrived_too_late"
                | "customer_changed_mind"
                | "better_price_found"
                | "accidental_order"
                | "other"
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "charge_allocations"?: ((Array<RefundChargeAllocationPreviousAttributes>) | (null));
            "created_at"?: ((string) | (null));
            "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            "credit_note_id"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_reason"?: (("expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {}))
                | (null));
            "idempotency_key"?: ((string) | (null));
            "initiated_by"?: (("merchant" | "flint" | (string & {})) | (null));
            "invoice_id"?: ((string) | (null));
            "line_item_allocations"?: ((Array<RefundLineItemAllocationPreviousAttributes>) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_refunds"?: ((Array<PaymentRefundPreviousAttributes>) | (null));
            "payment_review_id"?: ((string) | (null));
            "pending_reason"?: (("manual_review" | null | (string & {})) | (null));
            "processed_by"?: (("flint" | "merchant" | (string & {})) | (null));
            "reason"?: (("duplicate"
                | "fraudulent"
                | "requested_by_customer"
                | "defective_product"
                | "wrong_item_shipped"
                | "never_received"
                | "not_as_described"
                | "arrived_too_late"
                | "customer_changed_mind"
                | "better_price_found"
                | "accidental_order"
                | "other"
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {}))
                | (null));
            "reason_message"?: ((string) | (null));
            "refund_id"?: ((string) | (null));
            "refund_platform_fee"?: ((boolean) | (null));
            "refund_reference"?: ((string) | (null));
            "refunded_at"?: ((string) | (null));
            "refunded_tip_money"?: ((MoneyValuePreviousAttributes) | (null));
            "return_id"?: ((string) | (null));
            "return_resolution_id"?: ((string) | (null));
            "status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            "succeeded_at"?: ((string) | (null));
            "tax_breakdown_refunds"?: ((Array<RefundTaxBreakdownRefundPreviousAttributes>) | (null));
            "tender_allocations"?: ((Array<RefundTenderAllocationPreviousAttributes>) | (null));
            "unissued_gift_card_recoveries"?: ((Array<RefundUnissuedGiftCardRecoveryPreviousAttributes>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "refund.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "refund.failed";
});
