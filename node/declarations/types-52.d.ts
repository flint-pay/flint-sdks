import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type { ReturnPolicyRevisionRequest, ReturnPolicyRevisionRequestInput } from './types-55.js';
import type { GetReturnPolicyResponse } from './types-25.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-37.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { ResponseMeta } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { CreateReaderRequestInput } from './types-12.js';
import type { SimulateReaderRequestInput } from './types-59.js';
import type { UpdateReaderRequestInput } from './types-67.js';
import type { InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-29.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from './types-24.js';
import type { PaymentRefund } from './types-47.js';
import type {
    RefundLineItemAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery,
    RefundTaxBreakdownRefundIn
} from './types-53.js';
/**
 * One selectable option in a resolved modifier group, with its price change, tax category, and
 * whether it is available.
 */
export type PublicResolvedModifierOption = {
    /** Whether the choice can be selected now. */
    "available": boolean;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /** ID of the modifier this choice selects. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S". */
    "modifier_id": string;
    /** Name of the choice. */
    "name": string;
    /** Position of the choice within its group. Format: int32. */
    "position"?: number;
    /** Whether the choice is selected when the buyer adds the item without choosing modifiers. */
    "selected_by_default"?: boolean;
    /** Whether the choice appears on fulfillment documents. */
    "show_on_fulfillment"?: boolean;
    /** Whether the choice appears on receipts. */
    "show_on_receipt"?: boolean;
    /** Whether the choice's price is subject to tax. */
    "taxable"?: boolean;
    /**
     * The amount the choice adds to the item's unit price. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money": MoneyValue;
};
/** The request body for: Publish return policy revision. */
export type PublishReturnPolicyRevisionRequest = {
    /**
     * Required current version of the Return policy. A stale value returns VERSION_CONFLICT.
     * Publishing increments the policy version. Format: int64. minimum: 1.
     */
    "expected_version": number;
    /**
     * The revision with the complete rules. A field you leave out doesn't carry over from the
     * previous revision. The rules for a return policy revision: scope, eligibility, return
     * window, approval and resolution modes, shipping, and restocking fee.
     */
    "revision": ReturnPolicyRevisionRequest;
};
/** The request body for: Publish return policy revision. */
export type PublishReturnPolicyRevisionRequestInput = {
    /**
     * Required current version of the Return policy. A stale value returns VERSION_CONFLICT.
     * Publishing increments the policy version. Format: int64. minimum: 1.
     */
    "expected_version": number;
    /**
     * The revision with the complete rules. A field you leave out doesn't carry over from the
     * previous revision. The rules for a return policy revision: scope, eligibility, return
     * window, approval and resolution modes, shipping, and restocking fee.
     */
    "revision": ReturnPolicyRevisionRequestInput;
};
export type PublishReturnPolicyRevisionResponse = GetReturnPolicyResponse;
/**
 * A gift card issued for one unit of a purchased order line item, with its last four code
 * characters and any card it replaced.
 */
export type PurchasedGiftCard = {
    /**
     * ID of the gift card issued for the purchased unit. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /** Last four characters of the card's current code. */
    "last4": string;
    /**
     * ID of the card that this card replaces. Set when restoring reversed value needed a
     * replacement card. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "original_gift_card_id"?: string;
    /**
     * What restored the reversed value onto a replacement card. Value enum: "manual_recollection",
     * "processor_recollection".
     */
    "restoration_reason"?: "manual_recollection" | "processor_recollection" | (string & {});
    /**
     * Which unit of the line item's quantity this card was issued for, starting at 1. Format:
     * int64. minimum: 1.
     */
    "unit_ordinal": number;
};
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
        "object": {
            "active_payment_intent_id"?: string;
            "connectivity"?: ReaderConnectivity;
            "created_at": string;
            "device_id"?: string;
            "is_simulated": boolean;
            "location_id": string;
            "metadata": MetadataMap;
            "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
            "name": string;
            "reader_id": string;
            "serial_number"?: string;
            "status": "active" | "archived" | (string & {});
            "type": "smart_reader" | "tap_to_pay" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Reader>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "reader.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_intent_id"?: string;
            "connectivity"?: ReaderConnectivity;
            "created_at": string;
            "device_id"?: string;
            "is_simulated": boolean;
            "location_id": string;
            "metadata": MetadataMap;
            "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
            "name": string;
            "reader_id": string;
            "serial_number"?: string;
            "status": "active" | "archived" | (string & {});
            "type": "smart_reader" | "tap_to_pay" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Reader>;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `active_payment_intent_id`. object.active_payment_intent_id (Optional): string. The
     * payment intent presented on the reader now. Omitted while the reader is idle. It follows the
     * payment, so it doesn't advance the reader's `version` or send a reader event. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.connectivity (Optional): {@link ReaderConnectivity}.
     * Smart readers only, and omitted once the reader is archived. Observed reader state: it
     * changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on
     * it: Flint checks the reader itself before it sends a payment. Observed connectivity of a
     * smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and
     * every five minutes for active live smart readers. object.created_at (Required): string. When
     * the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.device_id (Optional): string. The register, kiosk or phone the reader takes payments
     * for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.is_simulated (Required): boolean. `true` for a
     * sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * object.location_id (Required): string. The location the reader is at. Set at registration
     * and never changed: to move a reader, archive it and register it again. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Required): {@link MetadataMap}. Your
     * key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them. object.model (Optional): string. The smart reader's model, read from the reader at
     * registration. Smart readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710",
     * "other". object.name (Required): string. Your label for the reader. minLength: 1. maxLength:
     * 255. object.reader_id (Required): string. Unique identifier for the reader. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C". object.serial_number (Optional): string. The smart
     * reader's serial number, read from the reader at registration. Smart readers only.
     * object.status (Required): string. Whether the reader can take payments. Value enum:
     * "active", "archived". object.type (Required): string. What kind of reader it is. A smart
     * reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe
     * Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay". object.updated_at
     * (Required): string. When the reader last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`. active_payment_intent_id (Optional): string. The payment
         * intent presented on the reader now. Omitted while the reader is idle. It follows the
         * payment, so it doesn't advance the reader's `version` or send a reader event. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". connectivity (Optional): {@link ReaderConnectivity}.
         * Smart readers only, and omitted once the reader is archived. Observed reader state: it
         * changes without a write, doesn't advance `version`, and sends no event. Don't gate a
         * sale on it: Flint checks the reader itself before it sends a payment. Observed
         * connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or
         * simulates one, and every five minutes for active live smart readers. created_at
         * (Required): string. When the reader was registered. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". device_id (Optional): string. The register, kiosk or phone the
         * reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when
         * none is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". is_simulated (Required):
         * boolean. `true` for a sandbox simulated reader, registered with `registration_code:
         * simulated-s700`. location_id (Required): string. The location the reader is at. Set at
         * registration and never changed: to move a reader, archive it and register it again.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Required): {@link MetadataMap}.
         * Your key-value pairs for the reader. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. model (Optional): string. The smart reader's model, read from the reader
         * at registration. Smart readers only. Value enum: "stripe_reader_s700",
         * "stripe_reader_s710", "other". name (Required): string. Your label for the reader.
         * minLength: 1. maxLength: 255. reader_id (Required): string. Unique identifier for the
         * reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". serial_number (Optional): string. The
         * smart reader's serial number, read from the reader at registration. Smart readers only.
         * status (Required): string. Whether the reader can take payments. Value enum: "active",
         * "archived". type (Required): string. What kind of reader it is. A smart reader is driven
         * from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in
         * your app. Value enum: "smart_reader", "tap_to_pay". updated_at (Required): string. When
         * the reader last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * The payment intent presented on the reader now. Omitted while the reader is idle. It
             * follows the payment, so it doesn't advance the reader's `version` or send a reader
             * event. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "active_payment_intent_id"?: string;
            /**
             * Smart readers only, and omitted once the reader is archived. Observed reader state:
             * it changes without a write, doesn't advance `version`, and sends no event. Don't
             * gate a sale on it: Flint checks the reader itself before it sends a payment.
             * Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels
             * a payment or simulates one, and every five minutes for active live smart readers.
             */
            "connectivity"?: ReaderConnectivity;
            /**
             * When the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader,
             * the phone it runs on. Omitted when none is set. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * `true` for a sandbox simulated reader, registered with `registration_code:
             * simulated-s700`.
             */
            "is_simulated": boolean;
            /**
             * The location the reader is at. Set at registration and never changed: to move a
             * reader, archive it and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id": string;
            /**
             * Your key-value pairs for the reader. Caller-owned key-value data stored on a
             * resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The smart reader's model, read from the reader at registration. Smart readers only.
             * Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
             */
            "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
            /** Your label for the reader. minLength: 1. maxLength: 255. */
            "name": string;
            /** Unique identifier for the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". */
            "reader_id": string;
            /**
             * The smart reader's serial number, read from the reader at registration. Smart
             * readers only.
             */
            "serial_number"?: string;
            /** Whether the reader can take payments. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay
             * reader is a phone driven by the Stripe Terminal SDK in your app. Value enum:
             * "smart_reader", "tap_to_pay".
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
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Reader>;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `active_payment_intent_id`. object.active_payment_intent_id (Optional): string. The
     * payment intent presented on the reader now. Omitted while the reader is idle. It follows the
     * payment, so it doesn't advance the reader's `version` or send a reader event. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.connectivity (Optional): {@link ReaderConnectivity}.
     * Smart readers only, and omitted once the reader is archived. Observed reader state: it
     * changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on
     * it: Flint checks the reader itself before it sends a payment. Observed connectivity of a
     * smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and
     * every five minutes for active live smart readers. object.created_at (Required): string. When
     * the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.device_id (Optional): string. The register, kiosk or phone the reader takes payments
     * for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.is_simulated (Required): boolean. `true` for a
     * sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * object.location_id (Required): string. The location the reader is at. Set at registration
     * and never changed: to move a reader, archive it and register it again. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Required): {@link MetadataMap}. Your
     * key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them. object.model (Optional): string. The smart reader's model, read from the reader at
     * registration. Smart readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710",
     * "other". object.name (Required): string. Your label for the reader. minLength: 1. maxLength:
     * 255. object.reader_id (Required): string. Unique identifier for the reader. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C". object.serial_number (Optional): string. The smart
     * reader's serial number, read from the reader at registration. Smart readers only.
     * object.status (Required): string. Whether the reader can take payments. Value enum:
     * "active", "archived". object.type (Required): string. What kind of reader it is. A smart
     * reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe
     * Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay". object.updated_at
     * (Required): string. When the reader last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`. active_payment_intent_id (Optional): string. The payment
         * intent presented on the reader now. Omitted while the reader is idle. It follows the
         * payment, so it doesn't advance the reader's `version` or send a reader event. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". connectivity (Optional): {@link ReaderConnectivity}.
         * Smart readers only, and omitted once the reader is archived. Observed reader state: it
         * changes without a write, doesn't advance `version`, and sends no event. Don't gate a
         * sale on it: Flint checks the reader itself before it sends a payment. Observed
         * connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or
         * simulates one, and every five minutes for active live smart readers. created_at
         * (Required): string. When the reader was registered. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". device_id (Optional): string. The register, kiosk or phone the
         * reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when
         * none is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". is_simulated (Required):
         * boolean. `true` for a sandbox simulated reader, registered with `registration_code:
         * simulated-s700`. location_id (Required): string. The location the reader is at. Set at
         * registration and never changed: to move a reader, archive it and register it again.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Required): {@link MetadataMap}.
         * Your key-value pairs for the reader. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. model (Optional): string. The smart reader's model, read from the reader
         * at registration. Smart readers only. Value enum: "stripe_reader_s700",
         * "stripe_reader_s710", "other". name (Required): string. Your label for the reader.
         * minLength: 1. maxLength: 255. reader_id (Required): string. Unique identifier for the
         * reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". serial_number (Optional): string. The
         * smart reader's serial number, read from the reader at registration. Smart readers only.
         * status (Required): string. Whether the reader can take payments. Value enum: "active",
         * "archived". type (Required): string. What kind of reader it is. A smart reader is driven
         * from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in
         * your app. Value enum: "smart_reader", "tap_to_pay". updated_at (Required): string. When
         * the reader last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * The payment intent presented on the reader now. Omitted while the reader is idle. It
             * follows the payment, so it doesn't advance the reader's `version` or send a reader
             * event. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "active_payment_intent_id"?: string;
            /**
             * Smart readers only, and omitted once the reader is archived. Observed reader state:
             * it changes without a write, doesn't advance `version`, and sends no event. Don't
             * gate a sale on it: Flint checks the reader itself before it sends a payment.
             * Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels
             * a payment or simulates one, and every five minutes for active live smart readers.
             */
            "connectivity"?: ReaderConnectivity;
            /**
             * When the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader,
             * the phone it runs on. Omitted when none is set. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * `true` for a sandbox simulated reader, registered with `registration_code:
             * simulated-s700`.
             */
            "is_simulated": boolean;
            /**
             * The location the reader is at. Set at registration and never changed: to move a
             * reader, archive it and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id": string;
            /**
             * Your key-value pairs for the reader. Caller-owned key-value data stored on a
             * resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The smart reader's model, read from the reader at registration. Smart readers only.
             * Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
             */
            "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
            /** Your label for the reader. minLength: 1. maxLength: 255. */
            "name": string;
            /** Unique identifier for the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". */
            "reader_id": string;
            /**
             * The smart reader's serial number, read from the reader at registration. Smart
             * readers only.
             */
            "serial_number"?: string;
            /** Whether the reader can take payments. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay
             * reader is a phone driven by the Stripe Terminal SDK in your app. Value enum:
             * "smart_reader", "tap_to_pay".
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
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Reader>;
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
export type ReaderCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_intent_id"?: string;
            "connectivity"?: ReaderConnectivity;
            "created_at": string;
            "device_id"?: string;
            "is_simulated": boolean;
            "location_id": string;
            "metadata": MetadataMap;
            "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
            "name": string;
            "reader_id": string;
            "serial_number"?: string;
            "status": "active" | "archived" | (string & {});
            "type": "smart_reader" | "tap_to_pay" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "reader.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_intent_id"?: string;
            "connectivity"?: ReaderConnectivity;
            "created_at": string;
            "device_id"?: string;
            "is_simulated": boolean;
            "location_id": string;
            "metadata": MetadataMap;
            "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
            "name": string;
            "reader_id": string;
            "serial_number"?: string;
            "status": "active" | "archived" | (string & {});
            "type": "smart_reader" | "tap_to_pay" | (string & {});
            "updated_at": string;
            "version": number;
        };
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `active_payment_intent_id`. object.active_payment_intent_id (Optional): string. The
     * payment intent presented on the reader now. Omitted while the reader is idle. It follows the
     * payment, so it doesn't advance the reader's `version` or send a reader event. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.connectivity (Optional): {@link ReaderConnectivity}.
     * Smart readers only, and omitted once the reader is archived. Observed reader state: it
     * changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on
     * it: Flint checks the reader itself before it sends a payment. Observed connectivity of a
     * smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and
     * every five minutes for active live smart readers. object.created_at (Required): string. When
     * the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.device_id (Optional): string. The register, kiosk or phone the reader takes payments
     * for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.is_simulated (Required): boolean. `true` for a
     * sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * object.location_id (Required): string. The location the reader is at. Set at registration
     * and never changed: to move a reader, archive it and register it again. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Required): {@link MetadataMap}. Your
     * key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them. object.model (Optional): string. The smart reader's model, read from the reader at
     * registration. Smart readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710",
     * "other". object.name (Required): string. Your label for the reader. minLength: 1. maxLength:
     * 255. object.reader_id (Required): string. Unique identifier for the reader. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C". object.serial_number (Optional): string. The smart
     * reader's serial number, read from the reader at registration. Smart readers only.
     * object.status (Required): string. Whether the reader can take payments. Value enum:
     * "active", "archived". object.type (Required): string. What kind of reader it is. A smart
     * reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe
     * Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay". object.updated_at
     * (Required): string. When the reader last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`. active_payment_intent_id (Optional): string. The payment
         * intent presented on the reader now. Omitted while the reader is idle. It follows the
         * payment, so it doesn't advance the reader's `version` or send a reader event. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". connectivity (Optional): {@link ReaderConnectivity}.
         * Smart readers only, and omitted once the reader is archived. Observed reader state: it
         * changes without a write, doesn't advance `version`, and sends no event. Don't gate a
         * sale on it: Flint checks the reader itself before it sends a payment. Observed
         * connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or
         * simulates one, and every five minutes for active live smart readers. created_at
         * (Required): string. When the reader was registered. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". device_id (Optional): string. The register, kiosk or phone the
         * reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when
         * none is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". is_simulated (Required):
         * boolean. `true` for a sandbox simulated reader, registered with `registration_code:
         * simulated-s700`. location_id (Required): string. The location the reader is at. Set at
         * registration and never changed: to move a reader, archive it and register it again.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Required): {@link MetadataMap}.
         * Your key-value pairs for the reader. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. model (Optional): string. The smart reader's model, read from the reader
         * at registration. Smart readers only. Value enum: "stripe_reader_s700",
         * "stripe_reader_s710", "other". name (Required): string. Your label for the reader.
         * minLength: 1. maxLength: 255. reader_id (Required): string. Unique identifier for the
         * reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". serial_number (Optional): string. The
         * smart reader's serial number, read from the reader at registration. Smart readers only.
         * status (Required): string. Whether the reader can take payments. Value enum: "active",
         * "archived". type (Required): string. What kind of reader it is. A smart reader is driven
         * from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in
         * your app. Value enum: "smart_reader", "tap_to_pay". updated_at (Required): string. When
         * the reader last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * The payment intent presented on the reader now. Omitted while the reader is idle. It
             * follows the payment, so it doesn't advance the reader's `version` or send a reader
             * event. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "active_payment_intent_id"?: string;
            /**
             * Smart readers only, and omitted once the reader is archived. Observed reader state:
             * it changes without a write, doesn't advance `version`, and sends no event. Don't
             * gate a sale on it: Flint checks the reader itself before it sends a payment.
             * Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels
             * a payment or simulates one, and every five minutes for active live smart readers.
             */
            "connectivity"?: ReaderConnectivity;
            /**
             * When the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader,
             * the phone it runs on. Omitted when none is set. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * `true` for a sandbox simulated reader, registered with `registration_code:
             * simulated-s700`.
             */
            "is_simulated": boolean;
            /**
             * The location the reader is at. Set at registration and never changed: to move a
             * reader, archive it and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id": string;
            /**
             * Your key-value pairs for the reader. Caller-owned key-value data stored on a
             * resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The smart reader's model, read from the reader at registration. Smart readers only.
             * Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
             */
            "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
            /** Your label for the reader. minLength: 1. maxLength: 255. */
            "name": string;
            /** Unique identifier for the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". */
            "reader_id": string;
            /**
             * The smart reader's serial number, read from the reader at registration. Smart
             * readers only.
             */
            "serial_number"?: string;
            /** Whether the reader can take payments. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay
             * reader is a phone driven by the Stripe Terminal SDK in your app. Value enum:
             * "smart_reader", "tap_to_pay".
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `active_payment_intent_id`. object.active_payment_intent_id (Optional): string. The
     * payment intent presented on the reader now. Omitted while the reader is idle. It follows the
     * payment, so it doesn't advance the reader's `version` or send a reader event. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.connectivity (Optional): {@link ReaderConnectivity}.
     * Smart readers only, and omitted once the reader is archived. Observed reader state: it
     * changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on
     * it: Flint checks the reader itself before it sends a payment. Observed connectivity of a
     * smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and
     * every five minutes for active live smart readers. object.created_at (Required): string. When
     * the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.device_id (Optional): string. The register, kiosk or phone the reader takes payments
     * for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.is_simulated (Required): boolean. `true` for a
     * sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * object.location_id (Required): string. The location the reader is at. Set at registration
     * and never changed: to move a reader, archive it and register it again. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Required): {@link MetadataMap}. Your
     * key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them. object.model (Optional): string. The smart reader's model, read from the reader at
     * registration. Smart readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710",
     * "other". object.name (Required): string. Your label for the reader. minLength: 1. maxLength:
     * 255. object.reader_id (Required): string. Unique identifier for the reader. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C". object.serial_number (Optional): string. The smart
     * reader's serial number, read from the reader at registration. Smart readers only.
     * object.status (Required): string. Whether the reader can take payments. Value enum:
     * "active", "archived". object.type (Required): string. What kind of reader it is. A smart
     * reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe
     * Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay". object.updated_at
     * (Required): string. When the reader last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`. active_payment_intent_id (Optional): string. The payment
         * intent presented on the reader now. Omitted while the reader is idle. It follows the
         * payment, so it doesn't advance the reader's `version` or send a reader event. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". connectivity (Optional): {@link ReaderConnectivity}.
         * Smart readers only, and omitted once the reader is archived. Observed reader state: it
         * changes without a write, doesn't advance `version`, and sends no event. Don't gate a
         * sale on it: Flint checks the reader itself before it sends a payment. Observed
         * connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or
         * simulates one, and every five minutes for active live smart readers. created_at
         * (Required): string. When the reader was registered. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". device_id (Optional): string. The register, kiosk or phone the
         * reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when
         * none is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". is_simulated (Required):
         * boolean. `true` for a sandbox simulated reader, registered with `registration_code:
         * simulated-s700`. location_id (Required): string. The location the reader is at. Set at
         * registration and never changed: to move a reader, archive it and register it again.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Required): {@link MetadataMap}.
         * Your key-value pairs for the reader. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. model (Optional): string. The smart reader's model, read from the reader
         * at registration. Smart readers only. Value enum: "stripe_reader_s700",
         * "stripe_reader_s710", "other". name (Required): string. Your label for the reader.
         * minLength: 1. maxLength: 255. reader_id (Required): string. Unique identifier for the
         * reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". serial_number (Optional): string. The
         * smart reader's serial number, read from the reader at registration. Smart readers only.
         * status (Required): string. Whether the reader can take payments. Value enum: "active",
         * "archived". type (Required): string. What kind of reader it is. A smart reader is driven
         * from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in
         * your app. Value enum: "smart_reader", "tap_to_pay". updated_at (Required): string. When
         * the reader last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * The payment intent presented on the reader now. Omitted while the reader is idle. It
             * follows the payment, so it doesn't advance the reader's `version` or send a reader
             * event. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "active_payment_intent_id"?: string;
            /**
             * Smart readers only, and omitted once the reader is archived. Observed reader state:
             * it changes without a write, doesn't advance `version`, and sends no event. Don't
             * gate a sale on it: Flint checks the reader itself before it sends a payment.
             * Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels
             * a payment or simulates one, and every five minutes for active live smart readers.
             */
            "connectivity"?: ReaderConnectivity;
            /**
             * When the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader,
             * the phone it runs on. Omitted when none is set. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * `true` for a sandbox simulated reader, registered with `registration_code:
             * simulated-s700`.
             */
            "is_simulated": boolean;
            /**
             * The location the reader is at. Set at registration and never changed: to move a
             * reader, archive it and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id": string;
            /**
             * Your key-value pairs for the reader. Caller-owned key-value data stored on a
             * resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The smart reader's model, read from the reader at registration. Smart readers only.
             * Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
             */
            "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
            /** Your label for the reader. minLength: 1. maxLength: 255. */
            "name": string;
            /** Unique identifier for the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". */
            "reader_id": string;
            /**
             * The smart reader's serial number, read from the reader at registration. Smart
             * readers only.
             */
            "serial_number"?: string;
            /** Whether the reader can take payments. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay
             * reader is a phone driven by the Stripe Terminal SDK in your app. Value enum:
             * "smart_reader", "tap_to_pay".
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
        "object": {
            "active_payment_intent_id"?: string;
            "connectivity"?: ReaderConnectivity;
            "created_at": string;
            "device_id"?: string;
            "is_simulated": boolean;
            "location_id": string;
            "metadata": MetadataMap;
            "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
            "name": string;
            "reader_id": string;
            "serial_number"?: string;
            "status": "active" | "archived" | (string & {});
            "type": "smart_reader" | "tap_to_pay" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Reader>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "reader.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_intent_id"?: string;
            "connectivity"?: ReaderConnectivity;
            "created_at": string;
            "device_id"?: string;
            "is_simulated": boolean;
            "location_id": string;
            "metadata": MetadataMap;
            "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
            "name": string;
            "reader_id": string;
            "serial_number"?: string;
            "status": "active" | "archived" | (string & {});
            "type": "smart_reader" | "tap_to_pay" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Reader>;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `active_payment_intent_id`. object.active_payment_intent_id (Optional): string. The
     * payment intent presented on the reader now. Omitted while the reader is idle. It follows the
     * payment, so it doesn't advance the reader's `version` or send a reader event. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.connectivity (Optional): {@link ReaderConnectivity}.
     * Smart readers only, and omitted once the reader is archived. Observed reader state: it
     * changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on
     * it: Flint checks the reader itself before it sends a payment. Observed connectivity of a
     * smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and
     * every five minutes for active live smart readers. object.created_at (Required): string. When
     * the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.device_id (Optional): string. The register, kiosk or phone the reader takes payments
     * for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.is_simulated (Required): boolean. `true` for a
     * sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * object.location_id (Required): string. The location the reader is at. Set at registration
     * and never changed: to move a reader, archive it and register it again. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Required): {@link MetadataMap}. Your
     * key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them. object.model (Optional): string. The smart reader's model, read from the reader at
     * registration. Smart readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710",
     * "other". object.name (Required): string. Your label for the reader. minLength: 1. maxLength:
     * 255. object.reader_id (Required): string. Unique identifier for the reader. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C". object.serial_number (Optional): string. The smart
     * reader's serial number, read from the reader at registration. Smart readers only.
     * object.status (Required): string. Whether the reader can take payments. Value enum:
     * "active", "archived". object.type (Required): string. What kind of reader it is. A smart
     * reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe
     * Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay". object.updated_at
     * (Required): string. When the reader last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`. active_payment_intent_id (Optional): string. The payment
         * intent presented on the reader now. Omitted while the reader is idle. It follows the
         * payment, so it doesn't advance the reader's `version` or send a reader event. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". connectivity (Optional): {@link ReaderConnectivity}.
         * Smart readers only, and omitted once the reader is archived. Observed reader state: it
         * changes without a write, doesn't advance `version`, and sends no event. Don't gate a
         * sale on it: Flint checks the reader itself before it sends a payment. Observed
         * connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or
         * simulates one, and every five minutes for active live smart readers. created_at
         * (Required): string. When the reader was registered. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". device_id (Optional): string. The register, kiosk or phone the
         * reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when
         * none is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". is_simulated (Required):
         * boolean. `true` for a sandbox simulated reader, registered with `registration_code:
         * simulated-s700`. location_id (Required): string. The location the reader is at. Set at
         * registration and never changed: to move a reader, archive it and register it again.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Required): {@link MetadataMap}.
         * Your key-value pairs for the reader. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. model (Optional): string. The smart reader's model, read from the reader
         * at registration. Smart readers only. Value enum: "stripe_reader_s700",
         * "stripe_reader_s710", "other". name (Required): string. Your label for the reader.
         * minLength: 1. maxLength: 255. reader_id (Required): string. Unique identifier for the
         * reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". serial_number (Optional): string. The
         * smart reader's serial number, read from the reader at registration. Smart readers only.
         * status (Required): string. Whether the reader can take payments. Value enum: "active",
         * "archived". type (Required): string. What kind of reader it is. A smart reader is driven
         * from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in
         * your app. Value enum: "smart_reader", "tap_to_pay". updated_at (Required): string. When
         * the reader last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * The payment intent presented on the reader now. Omitted while the reader is idle. It
             * follows the payment, so it doesn't advance the reader's `version` or send a reader
             * event. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "active_payment_intent_id"?: string;
            /**
             * Smart readers only, and omitted once the reader is archived. Observed reader state:
             * it changes without a write, doesn't advance `version`, and sends no event. Don't
             * gate a sale on it: Flint checks the reader itself before it sends a payment.
             * Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels
             * a payment or simulates one, and every five minutes for active live smart readers.
             */
            "connectivity"?: ReaderConnectivity;
            /**
             * When the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader,
             * the phone it runs on. Omitted when none is set. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * `true` for a sandbox simulated reader, registered with `registration_code:
             * simulated-s700`.
             */
            "is_simulated": boolean;
            /**
             * The location the reader is at. Set at registration and never changed: to move a
             * reader, archive it and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id": string;
            /**
             * Your key-value pairs for the reader. Caller-owned key-value data stored on a
             * resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The smart reader's model, read from the reader at registration. Smart readers only.
             * Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
             */
            "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
            /** Your label for the reader. minLength: 1. maxLength: 255. */
            "name": string;
            /** Unique identifier for the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". */
            "reader_id": string;
            /**
             * The smart reader's serial number, read from the reader at registration. Smart
             * readers only.
             */
            "serial_number"?: string;
            /** Whether the reader can take payments. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay
             * reader is a phone driven by the Stripe Terminal SDK in your app. Value enum:
             * "smart_reader", "tap_to_pay".
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
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Reader>;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `active_payment_intent_id`. object.active_payment_intent_id (Optional): string. The
     * payment intent presented on the reader now. Omitted while the reader is idle. It follows the
     * payment, so it doesn't advance the reader's `version` or send a reader event. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.connectivity (Optional): {@link ReaderConnectivity}.
     * Smart readers only, and omitted once the reader is archived. Observed reader state: it
     * changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on
     * it: Flint checks the reader itself before it sends a payment. Observed connectivity of a
     * smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and
     * every five minutes for active live smart readers. object.created_at (Required): string. When
     * the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.device_id (Optional): string. The register, kiosk or phone the reader takes payments
     * for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.is_simulated (Required): boolean. `true` for a
     * sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * object.location_id (Required): string. The location the reader is at. Set at registration
     * and never changed: to move a reader, archive it and register it again. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Required): {@link MetadataMap}. Your
     * key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them. object.model (Optional): string. The smart reader's model, read from the reader at
     * registration. Smart readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710",
     * "other". object.name (Required): string. Your label for the reader. minLength: 1. maxLength:
     * 255. object.reader_id (Required): string. Unique identifier for the reader. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C". object.serial_number (Optional): string. The smart
     * reader's serial number, read from the reader at registration. Smart readers only.
     * object.status (Required): string. Whether the reader can take payments. Value enum:
     * "active", "archived". object.type (Required): string. What kind of reader it is. A smart
     * reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe
     * Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay". object.updated_at
     * (Required): string. When the reader last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`. active_payment_intent_id (Optional): string. The payment
         * intent presented on the reader now. Omitted while the reader is idle. It follows the
         * payment, so it doesn't advance the reader's `version` or send a reader event. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". connectivity (Optional): {@link ReaderConnectivity}.
         * Smart readers only, and omitted once the reader is archived. Observed reader state: it
         * changes without a write, doesn't advance `version`, and sends no event. Don't gate a
         * sale on it: Flint checks the reader itself before it sends a payment. Observed
         * connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or
         * simulates one, and every five minutes for active live smart readers. created_at
         * (Required): string. When the reader was registered. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". device_id (Optional): string. The register, kiosk or phone the
         * reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when
         * none is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". is_simulated (Required):
         * boolean. `true` for a sandbox simulated reader, registered with `registration_code:
         * simulated-s700`. location_id (Required): string. The location the reader is at. Set at
         * registration and never changed: to move a reader, archive it and register it again.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Required): {@link MetadataMap}.
         * Your key-value pairs for the reader. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. model (Optional): string. The smart reader's model, read from the reader
         * at registration. Smart readers only. Value enum: "stripe_reader_s700",
         * "stripe_reader_s710", "other". name (Required): string. Your label for the reader.
         * minLength: 1. maxLength: 255. reader_id (Required): string. Unique identifier for the
         * reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". serial_number (Optional): string. The
         * smart reader's serial number, read from the reader at registration. Smart readers only.
         * status (Required): string. Whether the reader can take payments. Value enum: "active",
         * "archived". type (Required): string. What kind of reader it is. A smart reader is driven
         * from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in
         * your app. Value enum: "smart_reader", "tap_to_pay". updated_at (Required): string. When
         * the reader last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * The payment intent presented on the reader now. Omitted while the reader is idle. It
             * follows the payment, so it doesn't advance the reader's `version` or send a reader
             * event. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "active_payment_intent_id"?: string;
            /**
             * Smart readers only, and omitted once the reader is archived. Observed reader state:
             * it changes without a write, doesn't advance `version`, and sends no event. Don't
             * gate a sale on it: Flint checks the reader itself before it sends a payment.
             * Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels
             * a payment or simulates one, and every five minutes for active live smart readers.
             */
            "connectivity"?: ReaderConnectivity;
            /**
             * When the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader,
             * the phone it runs on. Omitted when none is set. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * `true` for a sandbox simulated reader, registered with `registration_code:
             * simulated-s700`.
             */
            "is_simulated": boolean;
            /**
             * The location the reader is at. Set at registration and never changed: to move a
             * reader, archive it and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id": string;
            /**
             * Your key-value pairs for the reader. Caller-owned key-value data stored on a
             * resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The smart reader's model, read from the reader at registration. Smart readers only.
             * Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
             */
            "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
            /** Your label for the reader. minLength: 1. maxLength: 255. */
            "name": string;
            /** Unique identifier for the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". */
            "reader_id": string;
            /**
             * The smart reader's serial number, read from the reader at registration. Smart
             * readers only.
             */
            "serial_number"?: string;
            /** Whether the reader can take payments. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay
             * reader is a phone driven by the Stripe Terminal SDK in your app. Value enum:
             * "smart_reader", "tap_to_pay".
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
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Reader>;
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
     * "settle_flint_balance", "set_tax_category", "contact_support", "other".
     */
    "action_type": "advance_onboarding"
        | "create_merchant_account_session"
        | "wait_for_review"
        | "settle_flint_balance"
        | "set_tax_category"
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
};
/**
 * Readiness for one area of a merchant account, with its `status`, the reason for it, and the
 * actions that would advance it.
 */
export type ReadinessAxis = {
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
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". [] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "targeted_requirements"?: Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
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
        | (string & {})>;
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
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". [] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "currently_due": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
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
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". [] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "eventually_due": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
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
        | (string & {})>;
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". [] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "past_due": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
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
        | (string & {})>;
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". [] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "pending_verification": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
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
        | (string & {})>;
    /**
     * Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Value
     * enum: "flint", "payment_processor".
     */
    "rejected_by"?: "flint" | "payment_processor" | (string & {});
};
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
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
     * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. Fix
     * the cause, then create a new refund with a new idempotency key. Unknown provider values are
     * returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "payment_refund_failed", "payment_refund_not_attempted",
     * "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     */
    "idempotency_key"?: string;
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
            "created_at": string;
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
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
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
            "created_at": string;
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
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
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
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. Fix the cause, then create a new refund with a new idempotency key. Unknown provider
     * values are returned as refund_failed. Value enum: "expired_or_canceled_card",
     * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined",
     * "merchant_request", "payment_disputed", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
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
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund.
         * Fix the cause, then create a new refund with a new idempotency key. Unknown provider
         * values are returned as refund_failed. Value enum: "expired_or_canceled_card",
         * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
         * "declined", "merchant_request", "payment_disputed", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
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
             * refund. Fix the cause, then create a new refund with a new idempotency key. Unknown
             * provider values are returned as refund_failed. Value enum:
             * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
             * "insufficient_available_balance", "declined", "merchant_request",
             * "payment_disputed", "payment_refund_failed", "payment_refund_not_attempted",
             * "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
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
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. Fix the cause, then create a new refund with a new idempotency key. Unknown provider
     * values are returned as refund_failed. Value enum: "expired_or_canceled_card",
     * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined",
     * "merchant_request", "payment_disputed", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
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
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund.
         * Fix the cause, then create a new refund with a new idempotency key. Unknown provider
         * values are returned as refund_failed. Value enum: "expired_or_canceled_card",
         * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
         * "declined", "merchant_request", "payment_disputed", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
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
             * refund. Fix the cause, then create a new refund with a new idempotency key. Unknown
             * provider values are returned as refund_failed. Value enum:
             * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
             * "insufficient_available_balance", "declined", "merchant_request",
             * "payment_disputed", "payment_refund_failed", "payment_refund_not_attempted",
             * "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
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
            "created_at": string;
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
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
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
        "previous_attributes"?: Partial<Refund>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "refund.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "created_at": string;
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
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
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
        "previous_attributes"?: Partial<Refund>;
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
/**
 * The `refund.failed` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type RefundFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. Fix the cause, then create a new refund with a new idempotency key. Unknown provider
     * values are returned as refund_failed. Value enum: "expired_or_canceled_card",
     * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined",
     * "merchant_request", "payment_disputed", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
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
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund.
         * Fix the cause, then create a new refund with a new idempotency key. Unknown provider
         * values are returned as refund_failed. Value enum: "expired_or_canceled_card",
         * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
         * "declined", "merchant_request", "payment_disputed", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
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
             * refund. Fix the cause, then create a new refund with a new idempotency key. Unknown
             * provider values are returned as refund_failed. Value enum:
             * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
             * "insufficient_available_balance", "declined", "merchant_request",
             * "payment_disputed", "payment_refund_failed", "payment_refund_not_attempted",
             * "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
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
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Refund>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "refund.failed". */
    "event_type"?: "refund.failed";
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
 * The `refund.failed` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type RefundFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. Fix the cause, then create a new refund with a new idempotency key. Unknown provider
     * values are returned as refund_failed. Value enum: "expired_or_canceled_card",
     * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined",
     * "merchant_request", "payment_disputed", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
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
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund.
         * Fix the cause, then create a new refund with a new idempotency key. Unknown provider
         * values are returned as refund_failed. Value enum: "expired_or_canceled_card",
         * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
         * "declined", "merchant_request", "payment_disputed", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
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
             * refund. Fix the cause, then create a new refund with a new idempotency key. Unknown
             * provider values are returned as refund_failed. Value enum:
             * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
             * "insufficient_available_balance", "declined", "merchant_request",
             * "payment_disputed", "payment_refund_failed", "payment_refund_not_attempted",
             * "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
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
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Refund>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "refund.failed". */
    "event_type"?: "refund.failed";
});
/**
 * The code of a gift card issued by a refund, returned once in the refund result with its
 * `gift_card_id`.
 */
export type RefundGiftCardCode = {
    /**
     * Code that redeems the new gift card. Only the create response and a replay of it within 24
     * hours carry codes, so store it securely.
     */
    "code": string;
    /** ID of the gift card the code belongs to. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
};
/**
 * An order line item to refund, with the quantity or amount, tax handling, and any adjustments
 * such as a restocking fee.
 */
export type RefundLineItem = {
    /**
     * Amounts to refund back against adjustments withheld by earlier refunds of this line. Each
     * uses the adjustment's remaining value, not the line's again. [] (Value): {@link
     * RefundLineItemAdjustmentRefundIn}. An amount to refund back against an earlier line item
     * adjustment, identified by `refund_line_item_adjustment_id`.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefundIn>;
    /**
     * Amount to refund for this line before `refund_adjustments`. Send `quantity` or
     * `amount_money`, not both. With neither, Flint refunds what remains of the line. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * ID of the order line item to refund. minLength: 1. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * Amounts to withhold from this line's refund, such as a restocking fee. Together they must be
     * less than the amount the line would otherwise refund. [] (Value): {@link
     * RefundLineItemAdjustmentIn}. An adjustment to apply to a refunded line item, such as a
     * restocking fee or withheld amount, and whether it applies to the gross amount or tax.
     */
    "refund_adjustments"?: Array<RefundLineItemAdjustmentIn>;
    /**
     * Who made the adjustment and where it came from, kept for your audit trail. Required when
     * `tax_refund_mode` is `explicit`, and not allowed otherwise. Who made a manual tax adjustment
     * on a refund line item and where it came from, for audit purposes.
     */
    "tax_adjustment_audit"?: RefundAdjustmentAudit;
    /**
     * Why you are refunding less tax than calculated. Required when `tax_refund_mode` is
     * `explicit`, and not allowed otherwise. The reason to record for a refund adjustment, as a
     * `code` with an optional description.
     */
    "tax_adjustment_reason"?: RefundAdjustmentReason;
    /**
     * Tax to refund for each jurisdiction on the line. Required with `tax_refund_mode` `explicit`
     * when the line has jurisdiction breakdowns. [] (Value): {@link RefundTaxBreakdownRefundIn}.
     * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
    /**
     * Tax to refund for this line. Required when `tax_refund_mode` is `explicit`, and not allowed
     * otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tax_money"?: MoneyValue;
    /**
     * Whether Flint calculates the tax refunded (`automatic`, the default) or you set it with
     * `tax_money` (`explicit`). Value enum: "automatic", "explicit".
     */
    "tax_refund_mode"?: "automatic" | "explicit" | (string & {});
};
/** An adjustment on a refunded line item, such as a restocking fee. */
export type RefundLineItemAdjustment = {
    /**
     * What kind of adjustment this is. Value enum: "restocking_fee", "withheld_amount",
     * "refund_adjustment", "tax_adjustment".
     */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment" | (string & {});
    /**
     * Amount withheld from the line's refund. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Which part of the line the adjustment reduces. Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax" | (string & {});
    /**
     * Why the amount was withheld. The reason recorded for a refund line item adjustment, as a
     * `code` with an optional description.
     */
    "reason": RefundAdjustmentReason;
    /**
     * Unique identifier for this refund line item adjustment, prefixed `rlia_`. Example:
     * "rlia_01KEZF7C00GA968004EWM2QQBC".
     */
    "refund_line_item_adjustment_id": string;
    /**
     * Part of the withheld amount that later refunds have returned. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Part of the withheld amount that can still be refunded: `amount_money` less
     * `refunded_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "remaining_money": MoneyValue;
};
/**
 * An adjustment to apply to a refunded line item, such as a restocking fee or withheld amount, and
 * whether it applies to the gross amount or tax.
 */
export type RefundLineItemAdjustmentIn = {
    /**
     * What kind of adjustment this is. Value enum: "restocking_fee", "withheld_amount",
     * "refund_adjustment", "tax_adjustment".
     */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment" | (string & {});
    /**
     * Amount to withhold from the line's refund. Above zero, in the refund's currency. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Which part of the line the adjustment reduces. Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax" | (string & {});
    /**
     * Why the amount is withheld. The reason to record for a refund adjustment, as a `code` with
     * an optional description.
     */
    "reason": RefundAdjustmentReason;
};
/**
 * An adjustment to apply to a refunded line item, such as a restocking fee or withheld amount, and
 * whether it applies to the gross amount or tax.
 */
export type RefundLineItemAdjustmentInInput = {
    /**
     * What kind of adjustment this is. Value enum: "restocking_fee", "withheld_amount",
     * "refund_adjustment", "tax_adjustment".
     */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment";
    /**
     * Amount to withhold from the line's refund. Above zero, in the refund's currency. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Which part of the line the adjustment reduces. Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax";
    /**
     * Why the amount is withheld. The reason to record for a refund adjustment, as a `code` with
     * an optional description.
     */
    "reason": RefundAdjustmentReasonRequestInput;
};
/** An amount refunded back against an earlier line item adjustment. */
export type RefundLineItemAdjustmentRefund = {
    /**
     * Amount refunded back against the adjustment. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * ID of the adjustment this amount was refunded against. Example:
     * "rlia_01KEZF7C00GA968004EWM2QQBC".
     */
    "original_refund_line_item_adjustment_id": string;
    /**
     * Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. Example:
     * "rliar_01KEZF7C003HSYWXKXGJVRAKZD".
     */
    "refund_line_item_adjustment_refund_id": string;
};
/**
 * An amount to refund back against an earlier line item adjustment, identified by
 * `refund_line_item_adjustment_id`.
 */
export type RefundLineItemAdjustmentRefundIn = {
    /**
     * Amount to refund back. Above zero and at most the adjustment's `remaining_money`. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * ID of an adjustment withheld by an earlier refund of this line, from
     * `adjustments[].refund_line_item_adjustment_id`. minLength: 1. Example:
     * "rlia_01KEZF7C00GA968004EWM2QQBC".
     */
    "refund_line_item_adjustment_id": string;
};
