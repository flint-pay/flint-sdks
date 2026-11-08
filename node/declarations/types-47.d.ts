import type { PendingPaymentActionPaymentIntentSubject, PendingPaymentActionSetupPaymentSourceSubject } from './types-46.js';
import type { Address } from './types-0.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-36.js';
import type { PartnerWebhookEnvelope } from './types-42.js';
import type { ResponseMeta } from './types-51.js';
import type { MoneyValue, MoneyValueInput, ModifierSet } from './types-37.js';
import type { QuantityPriceBreak, QuantityPriceBreakRequestInput } from './types-49.js';
import type { InputValue } from '../runtime.js';
import type { CreatePriceListRequestInput, CreatePriceListPricesRequestInput } from './types-11.js';
import type { DisputesAcceptParams, Dimensions } from './types-22.js';
import type { UpdatePriceListRequestInput, UpdatePriceListPriceRequestInput } from './types-64.js';
import type {
    ReturnProcessDecision,
    ReturnProcessDispositionRequest,
    ReturnProcessInspectionRequest,
    ReturnProcessResolutionRequest,
    ReturnProcessDecisionInput,
    ReturnProcessDispositionRequestInput,
    ReturnProcessInspectionRequestInput,
    ReturnProcessResolutionRequestInput,
    ReturnProcessReceiptRequest,
    ReturnProcessReceiptRequestInput,
    ReturnProcessResult
} from './types-53.js';
import type { CategoryReference } from './types-5.js';
import type { ImageAttachment, ImageRequest } from './types-27.js';
import type { GiftCardProductConfiguration } from './types-26.js';
import type { SelectedProductOption } from './types-56.js';
import type { Weight } from './types-66.js';
import type { InventoryRoutingSource } from './types-29.js';
import type { InventoryItemCreateRequest } from './types-28.js';
import type { ProductVariantSelectedOptionRequest } from './types-48.js';
/** Typed subject for a pending order payment action. Exactly one subject is present. */
export type PendingPaymentActionSubject = {
    /**
     * PaymentIntent that requires buyer authentication. It can be a standalone intent or an
     * order-owned payment leg. The payment intent that needs buyer authentication in a pending
     * payment action.
     */
    "payment_intent"?: PendingPaymentActionPaymentIntentSubject;
    /**
     * Future-billing payment method setup that requires buyer authentication. The payment method
     * setup that needs buyer authentication in a pending payment action.
     */
    "setup_payment_source"?: PendingPaymentActionSetupPaymentSourceSubject;
};
/**
 * Pickup details. For a pickup that checkout creates, location_name, address, and instructions
 * name the store the buyer chose and the delivery method's pickup instructions. The note the buyer
 * left for the store is in recipient.instructions.
 */
export type PickupFulfillmentDetails = {
    /**
     * Address where the buyer collects the order. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Instructions specific to curbside handoff. maxLength: 2048. */
    "curbside_instructions"?: string;
    /**
     * Buyer-reported arrival time for curbside or counter pickup. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "customer_arrived_at"?: string;
    /**
     * Deadline after which an uncollected pickup should enter merchant review. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /** Pickup instructions for the buyer, such as where to go on arrival. */
    "instructions"?: string;
    /** Name of the store or place where the buyer collects the order. */
    "location_name"?: string;
    /**
     * When the recipient collected the items, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "picked_up_at"?: string;
    /**
     * How the buyer collects the items, such as in store or curbside. Value enum: "in_store",
     * "curbside", "locker", "other".
     */
    "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
    /**
     * Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0.
     * maximum: 86400.
     */
    "pickup_window_duration_seconds"?: number;
    /**
     * Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /**
     * When the items became ready for pickup, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string;
    /** Timezone used to display the pickup window. Uses an IANA time zone name. */
    "timezone"?: string;
    /**
     * Buyer vehicle description used for curbside handoff. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. maxLength: 500.
     */
    "vehicle_description"?: string;
    /**
     * End of the promised pickup window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the promised pickup window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
};
/** A merchant-only set of variant prices for individual customers or customer segments. */
export type PriceList = {
    /**
     * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been
     * archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "archived_at": string | null;
    /**
     * When this price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. [] (Value): string.
     */
    "customer_segments": Array<string>;
    /**
     * Caller-owned identifier for this resource in an external system. `null` when unset.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
    /**
     * Identifier of the merchant that owns this price list. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string;
    /**
     * Caller-owned metadata stored on this price list. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Name used to identify this price list. */
    "name": string;
    /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
    "price_count": number;
    /**
     * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id": string;
    /**
     * Availability or retirement state. Derived as archived when archived_at is set; otherwise
     * active or inactive. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * When this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /**
     * Aggregate version, increased once for a request that changes the list or its prices. No-op
     * writes preserve it. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type PriceListArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PriceList>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "price_list.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PriceList>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "price_list.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "price_list.archived";
});
/**
 * The `price_list.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PriceListArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PriceList>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "price_list.archived". */
    "event_type"?: "price_list.archived";
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
 * The `price_list.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PriceListArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PriceList>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "price_list.archived". */
    "event_type"?: "price_list.archived";
});
export type PriceListCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "price_list.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "price_list.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "price_list.created";
});
/**
 * The `price_list.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PriceListCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "price_list.created". */
    "event_type"?: "price_list.created";
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
 * The `price_list.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PriceListCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "price_list.created". */
    "event_type"?: "price_list.created";
});
/** A page of `PriceList` objects. */
export type PriceListListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PriceList}. A merchant-only set of variant prices for individual customers or customer
     * segments.
     */
    "data": Array<PriceList>;
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
/** One variant's base net unit price and quantity schedule within a price list. */
export type PriceListPrice = {
    /**
     * When this price was added, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Identifier of the price list that owns this price. Example:
     * "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id": string;
    /**
     * Stable identifier of this price within its list. pattern: ^prlp_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prlp_01KEZF7C007DQ721A29CDR73DN".
     */
    "price_list_price_id": string;
    /**
     * Identifier of the product that owns this variant. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * Up to 10 quantity breaks, ordered by increasing minimum_quantity and strictly decreasing
     * unit price. [] means the base price applies at every quantity. maxItems: 10. [] (Value):
     * {@link QuantityPriceBreak}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks": Array<QuantityPriceBreak>;
    /**
     * Positive base net unit price in the price list's currency, in the currency's smallest unit.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * When this price last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /**
     * Identifier of the priced product variant. Bundles and gift cards are not supported. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
    /**
     * Version of this variant price and its quantity schedule. No-op writes preserve it. Format:
     * uint64. minimum: 1.
     */
    "version": number;
};
/** Outcome for one requested variant price. */
export type PriceListPriceAddition = {
    /**
     * Whether the price was created, returned unchanged, or updated. Value enum: "created",
     * "existing", "updated".
     */
    "outcome": "created" | "existing" | "updated" | (string & {});
    /**
     * Price stored for this variant after the request. One variant's base net unit price and
     * quantity schedule within a price list.
     */
    "price_list_price": PriceListPrice;
};
/** A page of `PriceListPrice` objects. */
export type PriceListPriceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PriceListPrice}. One variant's base net unit price and quantity schedule within a price
     * list.
     */
    "data": Array<PriceListPrice>;
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
/** A variant price to add to a price list. */
export type PriceListPriceRequest = {
    /**
     * Complete quantity schedule, up to 10 breaks. Omit or send [] for no quantity breaks. Each
     * price must be lower than the preceding one. maxItems: 10. [] (Value): {@link
     * QuantityPriceBreak}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks"?: Array<QuantityPriceBreak>;
    /**
     * Positive base net unit price, in the price list's currency. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Product variant to price. Bundles and gift cards are refused. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/** A variant price to add to a price list. */
export type PriceListPriceRequestInput = {
    /**
     * Complete quantity schedule, up to 10 breaks. Omit or send [] for no quantity breaks. Each
     * price must be lower than the preceding one. maxItems: 10. [] (Value): {@link
     * QuantityPriceBreakRequestInput}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks"?: Array<QuantityPriceBreakRequestInput>;
    /**
     * Positive base net unit price, in the price list's currency. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Product variant to price. Bundles and gift cards are refused. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/** A response containing `PriceListPrice` data. */
export type PriceListPriceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. One variant's base net
     * unit price and quantity schedule within a price list.
     */
    "data": PriceListPrice;
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
/** A response containing `PriceList` data. */
export type PriceListResourceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant-only set of
     * variant prices for individual customers or customer segments.
     */
    "data": PriceList;
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
export type PriceListUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PriceList>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "price_list.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PriceList>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "price_list.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "price_list.updated";
});
/**
 * The `price_list.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PriceListUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PriceList>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "price_list.updated". */
    "event_type"?: "price_list.updated";
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
 * The `price_list.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PriceListUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PriceList>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "price_list.updated". */
    "event_type"?: "price_list.updated";
});
export type PriceListsCreateParams = (InputValue<CreatePriceListRequestInput>)
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
export type PriceListsCreatePricesParams = (InputValue<CreatePriceListPricesRequestInput>)
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
export type PriceListsDeleteParams = {
    /** Version last read by the caller. Format: uint64. minimum: 1. */
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
export type PriceListsDeletePriceParams = PriceListsDeleteParams;
export type PriceListsGetParams = DisputesAcceptParams;
export type PriceListsGetPriceParams = DisputesAcceptParams;
export type PriceListsListParams = {
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
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /** Exact match on a Customer.segment label assigned to this price list. */
    "customer_segment"?: InputValue<string>;
    /**
     * Exact match on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across price list ID, name, and external reference ID. Text fields match any part of
     * the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start
     * and need the type prefix, such as prl_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by price_list_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "name".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
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
export type PriceListsListPricesParams = {
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
     * Exact match on the priced variant ID. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: InputValue<string>;
    /**
     * Exact match on the product owning the priced variant. pattern:
     * ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by price_list_price_id. Default:
     * "created_at". Value enum: "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
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
export type PriceListsUpdateParams = (InputValue<UpdatePriceListRequestInput>)
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
export type PriceListsUpdatePriceParams = (InputValue<UpdatePriceListPriceRequestInput>)
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
 * The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and
 * total.
 */
export type PricingAmounts = {
    /**
     * Tax added on top of prices, included in total_money. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "additive_tax_money": MoneyValue;
    /**
     * Total of the order's service charges after service-charge discounts. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "charge_money": MoneyValue;
    /**
     * Total of order and line-item discounts. Service-charge discounts, such as free shipping, are
     * not included; they reduce charge_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Tax already included in subtotal_money and charge_money. Informational; it is not added
     * again to total_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "inclusive_tax_money": MoneyValue;
    /**
     * Tip money in the total: the requested tip before payment, and settled tips net of refunds
     * after. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "requested_tip_money": MoneyValue;
    /**
     * Sum of the line items' subtotal_money: prices with modifiers, before discounts. Lines with
     * tax-inclusive prices include their tax here. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Total tax, equal to additive_tax_money + inclusive_tax_money. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * subtotal_money - discount_money + charge_money + additive_tax_money + requested_tip_money,
     * never below zero. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "total_money": MoneyValue;
};
/**
 * How to process one line of an existing return: the received quantity, inspection, decision,
 * disposition, and resolution.
 */
export type ProcessExistingReturnLineItemRequest = {
    /**
     * The decision for this line, as an assertion about the committed terms. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}. Start from
     * the pinned policy proposal recomputed for approved_quantity when the line has a policy
     * evaluation and the proposal can be built. Otherwise start with return_required_quantity
     * equal to approved_quantity, allowed_resolution_types containing refund, exchange,
     * replacement, no_monetary_action, and store_credit in that order regardless of whether the
     * original payment is refundable, no automatic_resolution_type, is_inspection_required false,
     * and no receiving_location_id. Each supplied field replaces its starting value;
     * allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its
     * starting value, or send null to resolve manually. Then fill an omitted release_timing with
     * after_inspection when merchandise is required and inspection is required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required. Validate the merged decision for quantity bounds, allowed resolution types, and
     * reachable timing and inspection requirements. A pinned policy always requires
     * override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no
     * proposal can be built. With a pinned policy but no proposal, other decision fields use these
     * defaults and override_reason is otherwise optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     */
    "decision"?: ReturnProcessDecision;
    /**
     * A disposition to record for this line's units. What was done with a returned item, such as
     * restocked as sellable or sent for repair, supplied when processing an existing return.
     */
    "disposition"?: ReturnProcessDispositionRequest;
    /**
     * An inspection to record for this line's units. An inspection result for a returned item,
     * supplied when processing an existing return.
     */
    "inspection"?: ReturnProcessInspectionRequest;
    /**
     * Whole number of units received. It must equal the line's committed return_required_quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "received_quantity"?: number;
    /**
     * A resolution to create and confirm for this line. The resolution to apply to a returned
     * item, such as refund or exchange, with the quantity and any replacement items.
     */
    "resolution"?: ReturnProcessResolutionRequest;
    /**
     * ID of the Return line to act on. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
};
/**
 * How to process one line of an existing return: the received quantity, inspection, decision,
 * disposition, and resolution.
 */
export type ProcessExistingReturnLineItemRequestInput = {
    /**
     * The decision for this line, as an assertion about the committed terms. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}. Start from
     * the pinned policy proposal recomputed for approved_quantity when the line has a policy
     * evaluation and the proposal can be built. Otherwise start with return_required_quantity
     * equal to approved_quantity, allowed_resolution_types containing refund, exchange,
     * replacement, no_monetary_action, and store_credit in that order regardless of whether the
     * original payment is refundable, no automatic_resolution_type, is_inspection_required false,
     * and no receiving_location_id. Each supplied field replaces its starting value;
     * allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its
     * starting value, or send null to resolve manually. Then fill an omitted release_timing with
     * after_inspection when merchandise is required and inspection is required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required. Validate the merged decision for quantity bounds, allowed resolution types, and
     * reachable timing and inspection requirements. A pinned policy always requires
     * override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no
     * proposal can be built. With a pinned policy but no proposal, other decision fields use these
     * defaults and override_reason is otherwise optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     */
    "decision"?: ReturnProcessDecisionInput;
    /**
     * A disposition to record for this line's units. What was done with a returned item, such as
     * restocked as sellable or sent for repair, supplied when processing an existing return.
     */
    "disposition"?: ReturnProcessDispositionRequestInput;
    /**
     * An inspection to record for this line's units. An inspection result for a returned item,
     * supplied when processing an existing return.
     */
    "inspection"?: ReturnProcessInspectionRequestInput;
    /**
     * Whole number of units received. It must equal the line's committed return_required_quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "received_quantity"?: number;
    /**
     * A resolution to create and confirm for this line. The resolution to apply to a returned
     * item, such as refund or exchange, with the quantity and any replacement items.
     */
    "resolution"?: ReturnProcessResolutionRequestInput;
    /**
     * ID of the Return line to act on. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
};
/** The request body for: Process existing return. */
export type ProcessExistingReturnRequest = {
    /**
     * Omit to use the mode shared by all pinned policies that set completion_mode, or automatic
     * when no pinned policy sets one. Conflicting pinned policy modes return 400 naming
     * completion_mode only when completion_mode is omitted. An explicit manual or automatic value
     * is used as sent. On an open Return, omit to keep its committed mode. Sending that mode is
     * accepted; a different mode returns 409 ACTION_NOT_ALLOWED with reason field_locked and param
     * completion_mode. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * One decision for each line. minItems: 1. [] (Value): {@link
     * ProcessExistingReturnLineItemRequest}. How to process one line of an existing return: the
     * received quantity, inspection, decision, disposition, and resolution.
     */
    "line_items": Array<ProcessExistingReturnLineItemRequest>;
    /**
     * A receipt to record for the Return. The receipt of returned merchandise, with when and where
     * it was received, supplied when processing an existing return.
     */
    "receipt"?: ReturnProcessReceiptRequest;
};
/** The request body for: Process existing return. */
export type ProcessExistingReturnRequestInput = {
    /**
     * Omit to use the mode shared by all pinned policies that set completion_mode, or automatic
     * when no pinned policy sets one. Conflicting pinned policy modes return 400 naming
     * completion_mode only when completion_mode is omitted. An explicit manual or automatic value
     * is used as sent. On an open Return, omit to keep its committed mode. Sending that mode is
     * accepted; a different mode returns 409 ACTION_NOT_ALLOWED with reason field_locked and param
     * completion_mode. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic";
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * One decision for each line. minItems: 1. [] (Value): {@link
     * ProcessExistingReturnLineItemRequestInput}. How to process one line of an existing return:
     * the received quantity, inspection, decision, disposition, and resolution.
     */
    "line_items": Array<ProcessExistingReturnLineItemRequestInput>;
    /**
     * A receipt to record for the Return. The receipt of returned merchandise, with when and where
     * it was received, supplied when processing an existing return.
     */
    "receipt"?: ReturnProcessReceiptRequestInput;
};
/** A response containing `ReturnProcessResult` data. */
export type ProcessExistingReturnResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The return is the
     * primary resource and expected_version target; the other resources report the processing
     * effects.
     */
    "data": ReturnProcessResult;
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
/** An item offered in the merchant's catalog. */
export type Product = {
    /** Number of active variants belonging to the product. Format: int32. */
    "active_variant_count"?: number;
    /**
     * Always present. Empty collections are returned as []. [] (Value): {@link CategoryReference}.
     * A reference to a product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * The product's default variant, when one is set. A specific purchasable version of a product.
     */
    "default_variant"?: ProductVariant;
    /**
     * Identifier of the variant chosen as this product's default, when one is set. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /**
     * Delivery readiness aggregated across the product's non-archived variants. Value enum:
     * "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Description of the product shown to buyers. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Images attached to this resource, in display order. The first image is primary. [] (Value):
     * {@link ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /** Whether the product is active and has at least one active variant. */
    "is_available_for_sale"?: boolean;
    /**
     * On product list rows, the first non-archived variant by position, then variant_id, that
     * matches all exact variant filters. Without exact variant filters, identifies the first
     * variant whose SKU matches query. Omitted when no variant matches; a product name or
     * description match alone does not set it. Page the product's variants to find all matches. A
     * single variant witness on product list rows only. With exact variant filters, the first
     * variant by position, then variant_id, satisfying every exact predicate. Otherwise, the first
     * variant in that order whose SKU matches query. Use the paginated nested variant list to
     * enumerate every match.
     */
    "matched_variant"?: ProductVariantMatch;
    /**
     * Identifier of the merchant that owns this resource. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set. anyOf[1]
     * (Value): {@link ModifierSet}. A reusable collection of customization groups. anyOf[2]
     * (Value): null.
     */
    "modifier_set"?: ((ModifierSet) | (null));
    /**
     * Attached modifier set. Send null on update to remove it. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id": string | null;
    /** Product name shown to buyers. */
    "name": string;
    /** Number of active options belonging to the product. Format: int32. */
    "option_count"?: number;
    /**
     * Product options and their non-archived values. Empty when the product has no options. []
     * (Value): {@link ProductOption}. A choice that defines a product's variants.
     */
    "options": Array<ProductOption>;
    /**
     * Lowest and highest base unit prices among active variants, before any quantity price breaks.
     * Omitted when there are no active variants or their currencies differ. The lowest and highest
     * unit prices across a product's variants.
     */
    "price_range"?: ProductPriceRange;
    /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id": string;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Product lifecycle status. Archived products remain readable and cannot be edited. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Number of non-archived variants belonging to the product. Format: int32. */
    "variant_count"?: number;
    /**
     * The product's complete non-archived variants, ordered by `position` and then `variant_id`.
     * Present when `expand=variants` is requested, and on the `POST /v1/products` response. An
     * archived product returns an empty array. [] (Value): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "variants"?: Array<ProductVariant>;
    /**
     * Current resource version. Send it as expected_version to reject a write if the resource has
     * changed. Format: uint64. minimum: 0.
     */
    "version": number;
};
export type ProductArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_variant_count"?: number;
            "categories": Array<CategoryReference>;
            "created_at"?: string;
            "default_variant"?: ProductVariant;
            "default_variant_id"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale"?: boolean;
            "matched_variant"?: ProductVariantMatch;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "option_count"?: number;
            "options": Array<ProductOption>;
            "price_range"?: ProductPriceRange;
            "product_id": string;
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "variant_count"?: number;
            "variants"?: Array<ProductVariant>;
            "version": number;
        };
        "previous_attributes"?: Partial<Product>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "product.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_variant_count"?: number;
            "categories": Array<CategoryReference>;
            "created_at"?: string;
            "default_variant"?: ProductVariant;
            "default_variant_id"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale"?: boolean;
            "matched_variant"?: ProductVariantMatch;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "option_count"?: number;
            "options": Array<ProductOption>;
            "price_range"?: ProductPriceRange;
            "product_id": string;
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "variant_count"?: number;
            "variants"?: Array<ProductVariant>;
            "version": number;
        };
        "previous_attributes"?: Partial<Product>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "product.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "product.archived";
});
/**
 * The `product.archived` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ProductArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `variants`, `matched_variant`, `modifier_set`. object.active_variant_count
     * (Optional): integer. Number of active variants belonging to the product. Format: int32.
     * object.categories (Required): Array of {@link CategoryReference}. Always present. Empty
     * collections are returned as []. object.categories[] (Value): {@link CategoryReference}. A
     * reference to a product category by ID, handle, and name. object.created_at (Optional):
     * string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.default_variant (Optional): {@link ProductVariant}. The
     * product's default variant, when one is set. A specific purchasable version of a product.
     * object.default_variant_id (Optional): string. Identifier of the variant chosen as this
     * product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.delivery_configuration_status (Required): string. Delivery readiness aggregated
     * across the product's non-archived variants. Value enum: "configured", "action_required",
     * "not_applicable". object.description (Optional): string. Description of the product shown to
     * buyers. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.images
     * (Required): Array of {@link ImageAttachment}. Images attached to this resource, in display
     * order. The first image is primary. object.images[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Optional): boolean. Whether the product is active and has at
     * least one active variant. object.matched_variant (Optional): {@link ProductVariantMatch}. On
     * product list rows, the first non-archived variant by position, then variant_id, that matches
     * all exact variant filters. Without exact variant filters, identifies the first variant whose
     * SKU matches query. Omitted when no variant matches; a product name or description match
     * alone does not set it. Page the product's variants to find all matches. A single variant
     * witness on product list rows only. With exact variant filters, the first variant by
     * position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in
     * that order whose SKU matches query. Use the paginated nested variant list to enumerate every
     * match. object.merchant_id (Optional): string. Identifier of the merchant that owns this
     * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null.
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Product name shown
     * to buyers. object.option_count (Optional): integer. Number of active options belonging to
     * the product. Format: int32. object.options (Required): Array of {@link ProductOption}.
     * Product options and their non-archived values. Empty when the product has no options.
     * object.options[] (Value): {@link ProductOption}. A choice that defines a product's variants.
     * object.price_range (Optional): {@link ProductPriceRange}. Lowest and highest base unit
     * prices among active variants, before any quantity price breaks. Omitted when there are no
     * active variants or their currencies differ. The lowest and highest unit prices across a
     * product's variants. object.product_id (Required): string. Stable identifier of the product.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.product_type (Required): string. Kind of
     * goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card". object.status (Required):
     * string. Product lifecycle status. Archived products remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When
     * this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.variant_count (Optional): integer. Number of non-archived
     * variants belonging to the product. Format: int32. object.variants (Optional): Array of
     * {@link ProductVariant}. The product's complete non-archived variants, ordered by `position`
     * and then `variant_id`. Present when `expand=variants` is requested, and on the `POST
     * /v1/products` response. An archived product returns an empty array. object.variants[]
     * (Value): {@link ProductVariant}. A specific purchasable version of a product. object.version
     * (Required): integer. Current resource version. Send it as expected_version to reject a write
     * if the resource has changed. Format: uint64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`. active_variant_count (Optional): integer. Number of
         * active variants belonging to the product. Format: int32. categories (Required): Array of
         * {@link CategoryReference}. Always present. Empty collections are returned as [].
         * categories[] (Value): {@link CategoryReference}. A reference to a product category by
         * ID, handle, and name. created_at (Optional): string. When this resource was created, as
         * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * default_variant (Optional): {@link ProductVariant}. The product's default variant, when
         * one is set. A specific purchasable version of a product. default_variant_id (Optional):
         * string. Identifier of the variant chosen as this product's default, when one is set.
         * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". delivery_configuration_status (Required):
         * string. Delivery readiness aggregated across the product's non-archived variants. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the product shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Optional): boolean. Whether
         * the product is active and has at least one active variant. matched_variant (Optional):
         * {@link ProductVariantMatch}. On product list rows, the first non-archived variant by
         * position, then variant_id, that matches all exact variant filters. Without exact variant
         * filters, identifies the first variant whose SKU matches query. Omitted when no variant
         * matches; a product name or description match alone does not set it. Page the product's
         * variants to find all matches. A single variant witness on product list rows only. With
         * exact variant filters, the first variant by position, then variant_id, satisfying every
         * exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use
         * the paginated nested variant list to enumerate every match. merchant_id (Optional):
         * string. Identifier of the merchant that owns this resource. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_set (Optional): {@link ModifierSet} or null. Attached modifier
         * set, included when expand=modifier_set is requested. Requires commerce.catalog.read in
         * addition to the resource's read scope. Present only when `expand` includes
         * `modifier_set`; `null` when expanded and there is no related modifier set.
         * modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
         * customization groups. modifier_set.anyOf[2] (Value): null. modifier_set_id (Required):
         * string or null. Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required): string. Product name shown to buyers.
         * option_count (Optional): integer. Number of active options belonging to the product.
         * Format: int32. options (Required): Array of {@link ProductOption}. Product options and
         * their non-archived values. Empty when the product has no options. options[] (Value):
         * {@link ProductOption}. A choice that defines a product's variants. price_range
         * (Optional): {@link ProductPriceRange}. Lowest and highest base unit prices among active
         * variants, before any quantity price breaks. Omitted when there are no active variants or
         * their currencies differ. The lowest and highest unit prices across a product's variants.
         * product_id (Required): string. Stable identifier of the product. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_type (Required): string. Kind of goods or
         * service this product represents. New variants of digital products store digital_goods
         * when line_item_tax_category is omitted; explicit categories are preserved. Value enum:
         * "physical", "service", "fee", "digital", "gift_card". status (Required): string. Product
         * lifecycle status. Archived products remain readable and cannot be edited. Value enum:
         * "active", "inactive", "archived". updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * variant_count (Optional): integer. Number of non-archived variants belonging to the
         * product. Format: int32. variants (Optional): Array of {@link ProductVariant}. The
         * product's complete non-archived variants, ordered by `position` and then `variant_id`.
         * Present when `expand=variants` is requested, and on the `POST /v1/products` response. An
         * archived product returns an empty array. variants[] (Value): {@link ProductVariant}. A
         * specific purchasable version of a product. version (Required): integer. Current resource
         * version. Send it as expected_version to reject a write if the resource has changed.
         * Format: uint64. minimum: 0.
         */
        "object": {
            /** Number of active variants belonging to the product. Format: int32. */
            "active_variant_count"?: number;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * The product's default variant, when one is set. A specific purchasable version of a
             * product.
             */
            "default_variant"?: ProductVariant;
            /**
             * Identifier of the variant chosen as this product's default, when one is set.
             * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "default_variant_id"?: string;
            /**
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the product shown to buyers. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Images attached to this resource, in display order. The first image is primary. []
             * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /** Whether the product is active and has at least one active variant. */
            "is_available_for_sale"?: boolean;
            /**
             * On product list rows, the first non-archived variant by position, then variant_id,
             * that matches all exact variant filters. Without exact variant filters, identifies
             * the first variant whose SKU matches query. Omitted when no variant matches; a
             * product name or description match alone does not set it. Page the product's variants
             * to find all matches. A single variant witness on product list rows only. With exact
             * variant filters, the first variant by position, then variant_id, satisfying every
             * exact predicate. Otherwise, the first variant in that order whose SKU matches query.
             * Use the paginated nested variant list to enumerate every match.
             */
            "matched_variant"?: ProductVariantMatch;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
             * customization groups. anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Product name shown to buyers. */
            "name": string;
            /** Number of active options belonging to the product. Format: int32. */
            "option_count"?: number;
            /**
             * Product options and their non-archived values. Empty when the product has no
             * options. [] (Value): {@link ProductOption}. A choice that defines a product's
             * variants.
             */
            "options": Array<ProductOption>;
            /**
             * Lowest and highest base unit prices among active variants, before any quantity price
             * breaks. Omitted when there are no active variants or their currencies differ. The
             * lowest and highest unit prices across a product's variants.
             */
            "price_range"?: ProductPriceRange;
            /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
            "product_id": string;
            /**
             * Kind of goods or service this product represents. New variants of digital products
             * store digital_goods when line_item_tax_category is omitted; explicit categories are
             * preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
             */
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            /**
             * Product lifecycle status. Archived products remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of non-archived variants belonging to the product. Format: int32. */
            "variant_count"?: number;
            /**
             * The product's complete non-archived variants, ordered by `position` and then
             * `variant_id`. Present when `expand=variants` is requested, and on the `POST
             * /v1/products` response. An archived product returns an empty array. [] (Value):
             * {@link ProductVariant}. A specific purchasable version of a product.
             */
            "variants"?: Array<ProductVariant>;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Product>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "product.archived". */
    "event_type"?: "product.archived";
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
 * The `product.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `variants`, `matched_variant`, `modifier_set`. object.active_variant_count
     * (Optional): integer. Number of active variants belonging to the product. Format: int32.
     * object.categories (Required): Array of {@link CategoryReference}. Always present. Empty
     * collections are returned as []. object.categories[] (Value): {@link CategoryReference}. A
     * reference to a product category by ID, handle, and name. object.created_at (Optional):
     * string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.default_variant (Optional): {@link ProductVariant}. The
     * product's default variant, when one is set. A specific purchasable version of a product.
     * object.default_variant_id (Optional): string. Identifier of the variant chosen as this
     * product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.delivery_configuration_status (Required): string. Delivery readiness aggregated
     * across the product's non-archived variants. Value enum: "configured", "action_required",
     * "not_applicable". object.description (Optional): string. Description of the product shown to
     * buyers. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.images
     * (Required): Array of {@link ImageAttachment}. Images attached to this resource, in display
     * order. The first image is primary. object.images[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Optional): boolean. Whether the product is active and has at
     * least one active variant. object.matched_variant (Optional): {@link ProductVariantMatch}. On
     * product list rows, the first non-archived variant by position, then variant_id, that matches
     * all exact variant filters. Without exact variant filters, identifies the first variant whose
     * SKU matches query. Omitted when no variant matches; a product name or description match
     * alone does not set it. Page the product's variants to find all matches. A single variant
     * witness on product list rows only. With exact variant filters, the first variant by
     * position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in
     * that order whose SKU matches query. Use the paginated nested variant list to enumerate every
     * match. object.merchant_id (Optional): string. Identifier of the merchant that owns this
     * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null.
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Product name shown
     * to buyers. object.option_count (Optional): integer. Number of active options belonging to
     * the product. Format: int32. object.options (Required): Array of {@link ProductOption}.
     * Product options and their non-archived values. Empty when the product has no options.
     * object.options[] (Value): {@link ProductOption}. A choice that defines a product's variants.
     * object.price_range (Optional): {@link ProductPriceRange}. Lowest and highest base unit
     * prices among active variants, before any quantity price breaks. Omitted when there are no
     * active variants or their currencies differ. The lowest and highest unit prices across a
     * product's variants. object.product_id (Required): string. Stable identifier of the product.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.product_type (Required): string. Kind of
     * goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card". object.status (Required):
     * string. Product lifecycle status. Archived products remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When
     * this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.variant_count (Optional): integer. Number of non-archived
     * variants belonging to the product. Format: int32. object.variants (Optional): Array of
     * {@link ProductVariant}. The product's complete non-archived variants, ordered by `position`
     * and then `variant_id`. Present when `expand=variants` is requested, and on the `POST
     * /v1/products` response. An archived product returns an empty array. object.variants[]
     * (Value): {@link ProductVariant}. A specific purchasable version of a product. object.version
     * (Required): integer. Current resource version. Send it as expected_version to reject a write
     * if the resource has changed. Format: uint64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`. active_variant_count (Optional): integer. Number of
         * active variants belonging to the product. Format: int32. categories (Required): Array of
         * {@link CategoryReference}. Always present. Empty collections are returned as [].
         * categories[] (Value): {@link CategoryReference}. A reference to a product category by
         * ID, handle, and name. created_at (Optional): string. When this resource was created, as
         * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * default_variant (Optional): {@link ProductVariant}. The product's default variant, when
         * one is set. A specific purchasable version of a product. default_variant_id (Optional):
         * string. Identifier of the variant chosen as this product's default, when one is set.
         * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". delivery_configuration_status (Required):
         * string. Delivery readiness aggregated across the product's non-archived variants. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the product shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Optional): boolean. Whether
         * the product is active and has at least one active variant. matched_variant (Optional):
         * {@link ProductVariantMatch}. On product list rows, the first non-archived variant by
         * position, then variant_id, that matches all exact variant filters. Without exact variant
         * filters, identifies the first variant whose SKU matches query. Omitted when no variant
         * matches; a product name or description match alone does not set it. Page the product's
         * variants to find all matches. A single variant witness on product list rows only. With
         * exact variant filters, the first variant by position, then variant_id, satisfying every
         * exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use
         * the paginated nested variant list to enumerate every match. merchant_id (Optional):
         * string. Identifier of the merchant that owns this resource. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_set (Optional): {@link ModifierSet} or null. Attached modifier
         * set, included when expand=modifier_set is requested. Requires commerce.catalog.read in
         * addition to the resource's read scope. Present only when `expand` includes
         * `modifier_set`; `null` when expanded and there is no related modifier set.
         * modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
         * customization groups. modifier_set.anyOf[2] (Value): null. modifier_set_id (Required):
         * string or null. Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required): string. Product name shown to buyers.
         * option_count (Optional): integer. Number of active options belonging to the product.
         * Format: int32. options (Required): Array of {@link ProductOption}. Product options and
         * their non-archived values. Empty when the product has no options. options[] (Value):
         * {@link ProductOption}. A choice that defines a product's variants. price_range
         * (Optional): {@link ProductPriceRange}. Lowest and highest base unit prices among active
         * variants, before any quantity price breaks. Omitted when there are no active variants or
         * their currencies differ. The lowest and highest unit prices across a product's variants.
         * product_id (Required): string. Stable identifier of the product. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_type (Required): string. Kind of goods or
         * service this product represents. New variants of digital products store digital_goods
         * when line_item_tax_category is omitted; explicit categories are preserved. Value enum:
         * "physical", "service", "fee", "digital", "gift_card". status (Required): string. Product
         * lifecycle status. Archived products remain readable and cannot be edited. Value enum:
         * "active", "inactive", "archived". updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * variant_count (Optional): integer. Number of non-archived variants belonging to the
         * product. Format: int32. variants (Optional): Array of {@link ProductVariant}. The
         * product's complete non-archived variants, ordered by `position` and then `variant_id`.
         * Present when `expand=variants` is requested, and on the `POST /v1/products` response. An
         * archived product returns an empty array. variants[] (Value): {@link ProductVariant}. A
         * specific purchasable version of a product. version (Required): integer. Current resource
         * version. Send it as expected_version to reject a write if the resource has changed.
         * Format: uint64. minimum: 0.
         */
        "object": {
            /** Number of active variants belonging to the product. Format: int32. */
            "active_variant_count"?: number;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * The product's default variant, when one is set. A specific purchasable version of a
             * product.
             */
            "default_variant"?: ProductVariant;
            /**
             * Identifier of the variant chosen as this product's default, when one is set.
             * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "default_variant_id"?: string;
            /**
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the product shown to buyers. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Images attached to this resource, in display order. The first image is primary. []
             * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /** Whether the product is active and has at least one active variant. */
            "is_available_for_sale"?: boolean;
            /**
             * On product list rows, the first non-archived variant by position, then variant_id,
             * that matches all exact variant filters. Without exact variant filters, identifies
             * the first variant whose SKU matches query. Omitted when no variant matches; a
             * product name or description match alone does not set it. Page the product's variants
             * to find all matches. A single variant witness on product list rows only. With exact
             * variant filters, the first variant by position, then variant_id, satisfying every
             * exact predicate. Otherwise, the first variant in that order whose SKU matches query.
             * Use the paginated nested variant list to enumerate every match.
             */
            "matched_variant"?: ProductVariantMatch;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
             * customization groups. anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Product name shown to buyers. */
            "name": string;
            /** Number of active options belonging to the product. Format: int32. */
            "option_count"?: number;
            /**
             * Product options and their non-archived values. Empty when the product has no
             * options. [] (Value): {@link ProductOption}. A choice that defines a product's
             * variants.
             */
            "options": Array<ProductOption>;
            /**
             * Lowest and highest base unit prices among active variants, before any quantity price
             * breaks. Omitted when there are no active variants or their currencies differ. The
             * lowest and highest unit prices across a product's variants.
             */
            "price_range"?: ProductPriceRange;
            /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
            "product_id": string;
            /**
             * Kind of goods or service this product represents. New variants of digital products
             * store digital_goods when line_item_tax_category is omitted; explicit categories are
             * preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
             */
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            /**
             * Product lifecycle status. Archived products remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of non-archived variants belonging to the product. Format: int32. */
            "variant_count"?: number;
            /**
             * The product's complete non-archived variants, ordered by `position` and then
             * `variant_id`. Present when `expand=variants` is requested, and on the `POST
             * /v1/products` response. An archived product returns an empty array. [] (Value):
             * {@link ProductVariant}. A specific purchasable version of a product.
             */
            "variants"?: Array<ProductVariant>;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Product>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "product.archived". */
    "event_type"?: "product.archived";
});
export type ProductCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_variant_count"?: number;
            "categories": Array<CategoryReference>;
            "created_at"?: string;
            "default_variant"?: ProductVariant;
            "default_variant_id"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale"?: boolean;
            "matched_variant"?: ProductVariantMatch;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "option_count"?: number;
            "options": Array<ProductOption>;
            "price_range"?: ProductPriceRange;
            "product_id": string;
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "variant_count"?: number;
            "variants"?: Array<ProductVariant>;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "product.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_variant_count"?: number;
            "categories": Array<CategoryReference>;
            "created_at"?: string;
            "default_variant"?: ProductVariant;
            "default_variant_id"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale"?: boolean;
            "matched_variant"?: ProductVariantMatch;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "option_count"?: number;
            "options": Array<ProductOption>;
            "price_range"?: ProductPriceRange;
            "product_id": string;
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "variant_count"?: number;
            "variants"?: Array<ProductVariant>;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "product.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "product.created";
});
/**
 * The `product.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ProductCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `variants`, `matched_variant`, `modifier_set`. object.active_variant_count
     * (Optional): integer. Number of active variants belonging to the product. Format: int32.
     * object.categories (Required): Array of {@link CategoryReference}. Always present. Empty
     * collections are returned as []. object.categories[] (Value): {@link CategoryReference}. A
     * reference to a product category by ID, handle, and name. object.created_at (Optional):
     * string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.default_variant (Optional): {@link ProductVariant}. The
     * product's default variant, when one is set. A specific purchasable version of a product.
     * object.default_variant_id (Optional): string. Identifier of the variant chosen as this
     * product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.delivery_configuration_status (Required): string. Delivery readiness aggregated
     * across the product's non-archived variants. Value enum: "configured", "action_required",
     * "not_applicable". object.description (Optional): string. Description of the product shown to
     * buyers. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.images
     * (Required): Array of {@link ImageAttachment}. Images attached to this resource, in display
     * order. The first image is primary. object.images[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Optional): boolean. Whether the product is active and has at
     * least one active variant. object.matched_variant (Optional): {@link ProductVariantMatch}. On
     * product list rows, the first non-archived variant by position, then variant_id, that matches
     * all exact variant filters. Without exact variant filters, identifies the first variant whose
     * SKU matches query. Omitted when no variant matches; a product name or description match
     * alone does not set it. Page the product's variants to find all matches. A single variant
     * witness on product list rows only. With exact variant filters, the first variant by
     * position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in
     * that order whose SKU matches query. Use the paginated nested variant list to enumerate every
     * match. object.merchant_id (Optional): string. Identifier of the merchant that owns this
     * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null.
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Product name shown
     * to buyers. object.option_count (Optional): integer. Number of active options belonging to
     * the product. Format: int32. object.options (Required): Array of {@link ProductOption}.
     * Product options and their non-archived values. Empty when the product has no options.
     * object.options[] (Value): {@link ProductOption}. A choice that defines a product's variants.
     * object.price_range (Optional): {@link ProductPriceRange}. Lowest and highest base unit
     * prices among active variants, before any quantity price breaks. Omitted when there are no
     * active variants or their currencies differ. The lowest and highest unit prices across a
     * product's variants. object.product_id (Required): string. Stable identifier of the product.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.product_type (Required): string. Kind of
     * goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card". object.status (Required):
     * string. Product lifecycle status. Archived products remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When
     * this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.variant_count (Optional): integer. Number of non-archived
     * variants belonging to the product. Format: int32. object.variants (Optional): Array of
     * {@link ProductVariant}. The product's complete non-archived variants, ordered by `position`
     * and then `variant_id`. Present when `expand=variants` is requested, and on the `POST
     * /v1/products` response. An archived product returns an empty array. object.variants[]
     * (Value): {@link ProductVariant}. A specific purchasable version of a product. object.version
     * (Required): integer. Current resource version. Send it as expected_version to reject a write
     * if the resource has changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`. active_variant_count (Optional): integer. Number of
         * active variants belonging to the product. Format: int32. categories (Required): Array of
         * {@link CategoryReference}. Always present. Empty collections are returned as [].
         * categories[] (Value): {@link CategoryReference}. A reference to a product category by
         * ID, handle, and name. created_at (Optional): string. When this resource was created, as
         * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * default_variant (Optional): {@link ProductVariant}. The product's default variant, when
         * one is set. A specific purchasable version of a product. default_variant_id (Optional):
         * string. Identifier of the variant chosen as this product's default, when one is set.
         * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". delivery_configuration_status (Required):
         * string. Delivery readiness aggregated across the product's non-archived variants. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the product shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Optional): boolean. Whether
         * the product is active and has at least one active variant. matched_variant (Optional):
         * {@link ProductVariantMatch}. On product list rows, the first non-archived variant by
         * position, then variant_id, that matches all exact variant filters. Without exact variant
         * filters, identifies the first variant whose SKU matches query. Omitted when no variant
         * matches; a product name or description match alone does not set it. Page the product's
         * variants to find all matches. A single variant witness on product list rows only. With
         * exact variant filters, the first variant by position, then variant_id, satisfying every
         * exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use
         * the paginated nested variant list to enumerate every match. merchant_id (Optional):
         * string. Identifier of the merchant that owns this resource. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_set (Optional): {@link ModifierSet} or null. Attached modifier
         * set, included when expand=modifier_set is requested. Requires commerce.catalog.read in
         * addition to the resource's read scope. Present only when `expand` includes
         * `modifier_set`; `null` when expanded and there is no related modifier set.
         * modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
         * customization groups. modifier_set.anyOf[2] (Value): null. modifier_set_id (Required):
         * string or null. Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required): string. Product name shown to buyers.
         * option_count (Optional): integer. Number of active options belonging to the product.
         * Format: int32. options (Required): Array of {@link ProductOption}. Product options and
         * their non-archived values. Empty when the product has no options. options[] (Value):
         * {@link ProductOption}. A choice that defines a product's variants. price_range
         * (Optional): {@link ProductPriceRange}. Lowest and highest base unit prices among active
         * variants, before any quantity price breaks. Omitted when there are no active variants or
         * their currencies differ. The lowest and highest unit prices across a product's variants.
         * product_id (Required): string. Stable identifier of the product. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_type (Required): string. Kind of goods or
         * service this product represents. New variants of digital products store digital_goods
         * when line_item_tax_category is omitted; explicit categories are preserved. Value enum:
         * "physical", "service", "fee", "digital", "gift_card". status (Required): string. Product
         * lifecycle status. Archived products remain readable and cannot be edited. Value enum:
         * "active", "inactive", "archived". updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * variant_count (Optional): integer. Number of non-archived variants belonging to the
         * product. Format: int32. variants (Optional): Array of {@link ProductVariant}. The
         * product's complete non-archived variants, ordered by `position` and then `variant_id`.
         * Present when `expand=variants` is requested, and on the `POST /v1/products` response. An
         * archived product returns an empty array. variants[] (Value): {@link ProductVariant}. A
         * specific purchasable version of a product. version (Required): integer. Current resource
         * version. Send it as expected_version to reject a write if the resource has changed.
         * Format: uint64. minimum: 0.
         */
        "object": {
            /** Number of active variants belonging to the product. Format: int32. */
            "active_variant_count"?: number;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * The product's default variant, when one is set. A specific purchasable version of a
             * product.
             */
            "default_variant"?: ProductVariant;
            /**
             * Identifier of the variant chosen as this product's default, when one is set.
             * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "default_variant_id"?: string;
            /**
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the product shown to buyers. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Images attached to this resource, in display order. The first image is primary. []
             * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /** Whether the product is active and has at least one active variant. */
            "is_available_for_sale"?: boolean;
            /**
             * On product list rows, the first non-archived variant by position, then variant_id,
             * that matches all exact variant filters. Without exact variant filters, identifies
             * the first variant whose SKU matches query. Omitted when no variant matches; a
             * product name or description match alone does not set it. Page the product's variants
             * to find all matches. A single variant witness on product list rows only. With exact
             * variant filters, the first variant by position, then variant_id, satisfying every
             * exact predicate. Otherwise, the first variant in that order whose SKU matches query.
             * Use the paginated nested variant list to enumerate every match.
             */
            "matched_variant"?: ProductVariantMatch;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
             * customization groups. anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Product name shown to buyers. */
            "name": string;
            /** Number of active options belonging to the product. Format: int32. */
            "option_count"?: number;
            /**
             * Product options and their non-archived values. Empty when the product has no
             * options. [] (Value): {@link ProductOption}. A choice that defines a product's
             * variants.
             */
            "options": Array<ProductOption>;
            /**
             * Lowest and highest base unit prices among active variants, before any quantity price
             * breaks. Omitted when there are no active variants or their currencies differ. The
             * lowest and highest unit prices across a product's variants.
             */
            "price_range"?: ProductPriceRange;
            /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
            "product_id": string;
            /**
             * Kind of goods or service this product represents. New variants of digital products
             * store digital_goods when line_item_tax_category is omitted; explicit categories are
             * preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
             */
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            /**
             * Product lifecycle status. Archived products remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of non-archived variants belonging to the product. Format: int32. */
            "variant_count"?: number;
            /**
             * The product's complete non-archived variants, ordered by `position` and then
             * `variant_id`. Present when `expand=variants` is requested, and on the `POST
             * /v1/products` response. An archived product returns an empty array. [] (Value):
             * {@link ProductVariant}. A specific purchasable version of a product.
             */
            "variants"?: Array<ProductVariant>;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "product.created". */
    "event_type"?: "product.created";
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
 * The `product.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ProductCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `variants`, `matched_variant`, `modifier_set`. object.active_variant_count
     * (Optional): integer. Number of active variants belonging to the product. Format: int32.
     * object.categories (Required): Array of {@link CategoryReference}. Always present. Empty
     * collections are returned as []. object.categories[] (Value): {@link CategoryReference}. A
     * reference to a product category by ID, handle, and name. object.created_at (Optional):
     * string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.default_variant (Optional): {@link ProductVariant}. The
     * product's default variant, when one is set. A specific purchasable version of a product.
     * object.default_variant_id (Optional): string. Identifier of the variant chosen as this
     * product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.delivery_configuration_status (Required): string. Delivery readiness aggregated
     * across the product's non-archived variants. Value enum: "configured", "action_required",
     * "not_applicable". object.description (Optional): string. Description of the product shown to
     * buyers. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.images
     * (Required): Array of {@link ImageAttachment}. Images attached to this resource, in display
     * order. The first image is primary. object.images[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Optional): boolean. Whether the product is active and has at
     * least one active variant. object.matched_variant (Optional): {@link ProductVariantMatch}. On
     * product list rows, the first non-archived variant by position, then variant_id, that matches
     * all exact variant filters. Without exact variant filters, identifies the first variant whose
     * SKU matches query. Omitted when no variant matches; a product name or description match
     * alone does not set it. Page the product's variants to find all matches. A single variant
     * witness on product list rows only. With exact variant filters, the first variant by
     * position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in
     * that order whose SKU matches query. Use the paginated nested variant list to enumerate every
     * match. object.merchant_id (Optional): string. Identifier of the merchant that owns this
     * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null.
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Product name shown
     * to buyers. object.option_count (Optional): integer. Number of active options belonging to
     * the product. Format: int32. object.options (Required): Array of {@link ProductOption}.
     * Product options and their non-archived values. Empty when the product has no options.
     * object.options[] (Value): {@link ProductOption}. A choice that defines a product's variants.
     * object.price_range (Optional): {@link ProductPriceRange}. Lowest and highest base unit
     * prices among active variants, before any quantity price breaks. Omitted when there are no
     * active variants or their currencies differ. The lowest and highest unit prices across a
     * product's variants. object.product_id (Required): string. Stable identifier of the product.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.product_type (Required): string. Kind of
     * goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card". object.status (Required):
     * string. Product lifecycle status. Archived products remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When
     * this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.variant_count (Optional): integer. Number of non-archived
     * variants belonging to the product. Format: int32. object.variants (Optional): Array of
     * {@link ProductVariant}. The product's complete non-archived variants, ordered by `position`
     * and then `variant_id`. Present when `expand=variants` is requested, and on the `POST
     * /v1/products` response. An archived product returns an empty array. object.variants[]
     * (Value): {@link ProductVariant}. A specific purchasable version of a product. object.version
     * (Required): integer. Current resource version. Send it as expected_version to reject a write
     * if the resource has changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`. active_variant_count (Optional): integer. Number of
         * active variants belonging to the product. Format: int32. categories (Required): Array of
         * {@link CategoryReference}. Always present. Empty collections are returned as [].
         * categories[] (Value): {@link CategoryReference}. A reference to a product category by
         * ID, handle, and name. created_at (Optional): string. When this resource was created, as
         * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * default_variant (Optional): {@link ProductVariant}. The product's default variant, when
         * one is set. A specific purchasable version of a product. default_variant_id (Optional):
         * string. Identifier of the variant chosen as this product's default, when one is set.
         * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". delivery_configuration_status (Required):
         * string. Delivery readiness aggregated across the product's non-archived variants. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the product shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Optional): boolean. Whether
         * the product is active and has at least one active variant. matched_variant (Optional):
         * {@link ProductVariantMatch}. On product list rows, the first non-archived variant by
         * position, then variant_id, that matches all exact variant filters. Without exact variant
         * filters, identifies the first variant whose SKU matches query. Omitted when no variant
         * matches; a product name or description match alone does not set it. Page the product's
         * variants to find all matches. A single variant witness on product list rows only. With
         * exact variant filters, the first variant by position, then variant_id, satisfying every
         * exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use
         * the paginated nested variant list to enumerate every match. merchant_id (Optional):
         * string. Identifier of the merchant that owns this resource. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_set (Optional): {@link ModifierSet} or null. Attached modifier
         * set, included when expand=modifier_set is requested. Requires commerce.catalog.read in
         * addition to the resource's read scope. Present only when `expand` includes
         * `modifier_set`; `null` when expanded and there is no related modifier set.
         * modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
         * customization groups. modifier_set.anyOf[2] (Value): null. modifier_set_id (Required):
         * string or null. Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required): string. Product name shown to buyers.
         * option_count (Optional): integer. Number of active options belonging to the product.
         * Format: int32. options (Required): Array of {@link ProductOption}. Product options and
         * their non-archived values. Empty when the product has no options. options[] (Value):
         * {@link ProductOption}. A choice that defines a product's variants. price_range
         * (Optional): {@link ProductPriceRange}. Lowest and highest base unit prices among active
         * variants, before any quantity price breaks. Omitted when there are no active variants or
         * their currencies differ. The lowest and highest unit prices across a product's variants.
         * product_id (Required): string. Stable identifier of the product. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_type (Required): string. Kind of goods or
         * service this product represents. New variants of digital products store digital_goods
         * when line_item_tax_category is omitted; explicit categories are preserved. Value enum:
         * "physical", "service", "fee", "digital", "gift_card". status (Required): string. Product
         * lifecycle status. Archived products remain readable and cannot be edited. Value enum:
         * "active", "inactive", "archived". updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * variant_count (Optional): integer. Number of non-archived variants belonging to the
         * product. Format: int32. variants (Optional): Array of {@link ProductVariant}. The
         * product's complete non-archived variants, ordered by `position` and then `variant_id`.
         * Present when `expand=variants` is requested, and on the `POST /v1/products` response. An
         * archived product returns an empty array. variants[] (Value): {@link ProductVariant}. A
         * specific purchasable version of a product. version (Required): integer. Current resource
         * version. Send it as expected_version to reject a write if the resource has changed.
         * Format: uint64. minimum: 0.
         */
        "object": {
            /** Number of active variants belonging to the product. Format: int32. */
            "active_variant_count"?: number;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * The product's default variant, when one is set. A specific purchasable version of a
             * product.
             */
            "default_variant"?: ProductVariant;
            /**
             * Identifier of the variant chosen as this product's default, when one is set.
             * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "default_variant_id"?: string;
            /**
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the product shown to buyers. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Images attached to this resource, in display order. The first image is primary. []
             * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /** Whether the product is active and has at least one active variant. */
            "is_available_for_sale"?: boolean;
            /**
             * On product list rows, the first non-archived variant by position, then variant_id,
             * that matches all exact variant filters. Without exact variant filters, identifies
             * the first variant whose SKU matches query. Omitted when no variant matches; a
             * product name or description match alone does not set it. Page the product's variants
             * to find all matches. A single variant witness on product list rows only. With exact
             * variant filters, the first variant by position, then variant_id, satisfying every
             * exact predicate. Otherwise, the first variant in that order whose SKU matches query.
             * Use the paginated nested variant list to enumerate every match.
             */
            "matched_variant"?: ProductVariantMatch;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
             * customization groups. anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Product name shown to buyers. */
            "name": string;
            /** Number of active options belonging to the product. Format: int32. */
            "option_count"?: number;
            /**
             * Product options and their non-archived values. Empty when the product has no
             * options. [] (Value): {@link ProductOption}. A choice that defines a product's
             * variants.
             */
            "options": Array<ProductOption>;
            /**
             * Lowest and highest base unit prices among active variants, before any quantity price
             * breaks. Omitted when there are no active variants or their currencies differ. The
             * lowest and highest unit prices across a product's variants.
             */
            "price_range"?: ProductPriceRange;
            /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
            "product_id": string;
            /**
             * Kind of goods or service this product represents. New variants of digital products
             * store digital_goods when line_item_tax_category is omitted; explicit categories are
             * preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
             */
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            /**
             * Product lifecycle status. Archived products remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of non-archived variants belonging to the product. Format: int32. */
            "variant_count"?: number;
            /**
             * The product's complete non-archived variants, ordered by `position` and then
             * `variant_id`. Present when `expand=variants` is requested, and on the `POST
             * /v1/products` response. An archived product returns an empty array. [] (Value):
             * {@link ProductVariant}. A specific purchasable version of a product.
             */
            "variants"?: Array<ProductVariant>;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "product.created". */
    "event_type"?: "product.created";
});
/** A page of `Product` objects. */
export type ProductListResponse = {
    /**
     * The requested product data. [] (Value): {@link Product}. An item offered in the merchant's
     * catalog.
     */
    "data": Array<Product>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A choice that defines a product's variants. */
export type ProductOption = {
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Option name, such as Size or Color. */
    "name": string;
    /** Stable identifier of the product option. Example: "opt_01KEZF7C008R5Q9BG9B4B4KQH8". */
    "option_id": string;
    /** Display order among the product's options, starting at zero. Format: int32. */
    "position": number;
    /**
     * Identifier of the product this option belongs to. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * Option lifecycle status. Every active variant must select an active value for each active
     * option. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /**
     * Values offered for this option, such as Small, Medium, and Large for Size. [] (Value):
     * {@link ProductOptionValue}. One value of a product option, such as a size or color.
     */
    "values"?: Array<ProductOptionValue>;
};
/** A page of `ProductOption` objects. */
export type ProductOptionListResponse = {
    /**
     * The requested product option data. [] (Value): {@link ProductOption}. A choice that defines
     * a product's variants.
     */
    "data": Array<ProductOption>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `ProductOption` data. */
export type ProductOptionResponse = {
    /** The requested product option data. A choice that defines a product's variants. */
    "data": ProductOption;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** One value of a product option, such as a size or color. */
export type ProductOptionValue = {
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Stable identifier of the option value. Example: "optv_01KEZF7C0078SVZ1T7PVRXQK7F". */
    "option_value_id": string;
    /** Display order among the option's values, starting at zero. Format: int32. */
    "position": number;
    /**
     * Option value lifecycle status. Only active values can be newly selected by active variants.
     * Value enum: "active", "inactive", "archived".
     */
    "status"?: "active" | "inactive" | "archived" | (string & {});
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Option value shown to buyers, such as Medium. */
    "value": string;
};
/** The lowest and highest unit prices across a product's variants. */
export type ProductPriceRange = {
    /**
     * Highest unit price among the product's active variants. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money": MoneyValue;
    /**
     * Lowest unit price among the product's active variants. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money": MoneyValue;
};
/** A response containing `Product` data. */
export type ProductResponse = {
    /** The requested product data. An item offered in the merchant's catalog. */
    "data": Product;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ProductUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_variant_count"?: number;
            "categories": Array<CategoryReference>;
            "created_at"?: string;
            "default_variant"?: ProductVariant;
            "default_variant_id"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale"?: boolean;
            "matched_variant"?: ProductVariantMatch;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "option_count"?: number;
            "options": Array<ProductOption>;
            "price_range"?: ProductPriceRange;
            "product_id": string;
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "variant_count"?: number;
            "variants"?: Array<ProductVariant>;
            "version": number;
        };
        "previous_attributes"?: Partial<Product>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "product.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_variant_count"?: number;
            "categories": Array<CategoryReference>;
            "created_at"?: string;
            "default_variant"?: ProductVariant;
            "default_variant_id"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale"?: boolean;
            "matched_variant"?: ProductVariantMatch;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "option_count"?: number;
            "options": Array<ProductOption>;
            "price_range"?: ProductPriceRange;
            "product_id": string;
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "variant_count"?: number;
            "variants"?: Array<ProductVariant>;
            "version": number;
        };
        "previous_attributes"?: Partial<Product>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "product.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "product.updated";
});
/**
 * The `product.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ProductUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `variants`, `matched_variant`, `modifier_set`. object.active_variant_count
     * (Optional): integer. Number of active variants belonging to the product. Format: int32.
     * object.categories (Required): Array of {@link CategoryReference}. Always present. Empty
     * collections are returned as []. object.categories[] (Value): {@link CategoryReference}. A
     * reference to a product category by ID, handle, and name. object.created_at (Optional):
     * string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.default_variant (Optional): {@link ProductVariant}. The
     * product's default variant, when one is set. A specific purchasable version of a product.
     * object.default_variant_id (Optional): string. Identifier of the variant chosen as this
     * product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.delivery_configuration_status (Required): string. Delivery readiness aggregated
     * across the product's non-archived variants. Value enum: "configured", "action_required",
     * "not_applicable". object.description (Optional): string. Description of the product shown to
     * buyers. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.images
     * (Required): Array of {@link ImageAttachment}. Images attached to this resource, in display
     * order. The first image is primary. object.images[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Optional): boolean. Whether the product is active and has at
     * least one active variant. object.matched_variant (Optional): {@link ProductVariantMatch}. On
     * product list rows, the first non-archived variant by position, then variant_id, that matches
     * all exact variant filters. Without exact variant filters, identifies the first variant whose
     * SKU matches query. Omitted when no variant matches; a product name or description match
     * alone does not set it. Page the product's variants to find all matches. A single variant
     * witness on product list rows only. With exact variant filters, the first variant by
     * position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in
     * that order whose SKU matches query. Use the paginated nested variant list to enumerate every
     * match. object.merchant_id (Optional): string. Identifier of the merchant that owns this
     * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null.
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Product name shown
     * to buyers. object.option_count (Optional): integer. Number of active options belonging to
     * the product. Format: int32. object.options (Required): Array of {@link ProductOption}.
     * Product options and their non-archived values. Empty when the product has no options.
     * object.options[] (Value): {@link ProductOption}. A choice that defines a product's variants.
     * object.price_range (Optional): {@link ProductPriceRange}. Lowest and highest base unit
     * prices among active variants, before any quantity price breaks. Omitted when there are no
     * active variants or their currencies differ. The lowest and highest unit prices across a
     * product's variants. object.product_id (Required): string. Stable identifier of the product.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.product_type (Required): string. Kind of
     * goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card". object.status (Required):
     * string. Product lifecycle status. Archived products remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When
     * this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.variant_count (Optional): integer. Number of non-archived
     * variants belonging to the product. Format: int32. object.variants (Optional): Array of
     * {@link ProductVariant}. The product's complete non-archived variants, ordered by `position`
     * and then `variant_id`. Present when `expand=variants` is requested, and on the `POST
     * /v1/products` response. An archived product returns an empty array. object.variants[]
     * (Value): {@link ProductVariant}. A specific purchasable version of a product. object.version
     * (Required): integer. Current resource version. Send it as expected_version to reject a write
     * if the resource has changed. Format: uint64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`. active_variant_count (Optional): integer. Number of
         * active variants belonging to the product. Format: int32. categories (Required): Array of
         * {@link CategoryReference}. Always present. Empty collections are returned as [].
         * categories[] (Value): {@link CategoryReference}. A reference to a product category by
         * ID, handle, and name. created_at (Optional): string. When this resource was created, as
         * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * default_variant (Optional): {@link ProductVariant}. The product's default variant, when
         * one is set. A specific purchasable version of a product. default_variant_id (Optional):
         * string. Identifier of the variant chosen as this product's default, when one is set.
         * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". delivery_configuration_status (Required):
         * string. Delivery readiness aggregated across the product's non-archived variants. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the product shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Optional): boolean. Whether
         * the product is active and has at least one active variant. matched_variant (Optional):
         * {@link ProductVariantMatch}. On product list rows, the first non-archived variant by
         * position, then variant_id, that matches all exact variant filters. Without exact variant
         * filters, identifies the first variant whose SKU matches query. Omitted when no variant
         * matches; a product name or description match alone does not set it. Page the product's
         * variants to find all matches. A single variant witness on product list rows only. With
         * exact variant filters, the first variant by position, then variant_id, satisfying every
         * exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use
         * the paginated nested variant list to enumerate every match. merchant_id (Optional):
         * string. Identifier of the merchant that owns this resource. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_set (Optional): {@link ModifierSet} or null. Attached modifier
         * set, included when expand=modifier_set is requested. Requires commerce.catalog.read in
         * addition to the resource's read scope. Present only when `expand` includes
         * `modifier_set`; `null` when expanded and there is no related modifier set.
         * modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
         * customization groups. modifier_set.anyOf[2] (Value): null. modifier_set_id (Required):
         * string or null. Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required): string. Product name shown to buyers.
         * option_count (Optional): integer. Number of active options belonging to the product.
         * Format: int32. options (Required): Array of {@link ProductOption}. Product options and
         * their non-archived values. Empty when the product has no options. options[] (Value):
         * {@link ProductOption}. A choice that defines a product's variants. price_range
         * (Optional): {@link ProductPriceRange}. Lowest and highest base unit prices among active
         * variants, before any quantity price breaks. Omitted when there are no active variants or
         * their currencies differ. The lowest and highest unit prices across a product's variants.
         * product_id (Required): string. Stable identifier of the product. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_type (Required): string. Kind of goods or
         * service this product represents. New variants of digital products store digital_goods
         * when line_item_tax_category is omitted; explicit categories are preserved. Value enum:
         * "physical", "service", "fee", "digital", "gift_card". status (Required): string. Product
         * lifecycle status. Archived products remain readable and cannot be edited. Value enum:
         * "active", "inactive", "archived". updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * variant_count (Optional): integer. Number of non-archived variants belonging to the
         * product. Format: int32. variants (Optional): Array of {@link ProductVariant}. The
         * product's complete non-archived variants, ordered by `position` and then `variant_id`.
         * Present when `expand=variants` is requested, and on the `POST /v1/products` response. An
         * archived product returns an empty array. variants[] (Value): {@link ProductVariant}. A
         * specific purchasable version of a product. version (Required): integer. Current resource
         * version. Send it as expected_version to reject a write if the resource has changed.
         * Format: uint64. minimum: 0.
         */
        "object": {
            /** Number of active variants belonging to the product. Format: int32. */
            "active_variant_count"?: number;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * The product's default variant, when one is set. A specific purchasable version of a
             * product.
             */
            "default_variant"?: ProductVariant;
            /**
             * Identifier of the variant chosen as this product's default, when one is set.
             * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "default_variant_id"?: string;
            /**
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the product shown to buyers. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Images attached to this resource, in display order. The first image is primary. []
             * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /** Whether the product is active and has at least one active variant. */
            "is_available_for_sale"?: boolean;
            /**
             * On product list rows, the first non-archived variant by position, then variant_id,
             * that matches all exact variant filters. Without exact variant filters, identifies
             * the first variant whose SKU matches query. Omitted when no variant matches; a
             * product name or description match alone does not set it. Page the product's variants
             * to find all matches. A single variant witness on product list rows only. With exact
             * variant filters, the first variant by position, then variant_id, satisfying every
             * exact predicate. Otherwise, the first variant in that order whose SKU matches query.
             * Use the paginated nested variant list to enumerate every match.
             */
            "matched_variant"?: ProductVariantMatch;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
             * customization groups. anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Product name shown to buyers. */
            "name": string;
            /** Number of active options belonging to the product. Format: int32. */
            "option_count"?: number;
            /**
             * Product options and their non-archived values. Empty when the product has no
             * options. [] (Value): {@link ProductOption}. A choice that defines a product's
             * variants.
             */
            "options": Array<ProductOption>;
            /**
             * Lowest and highest base unit prices among active variants, before any quantity price
             * breaks. Omitted when there are no active variants or their currencies differ. The
             * lowest and highest unit prices across a product's variants.
             */
            "price_range"?: ProductPriceRange;
            /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
            "product_id": string;
            /**
             * Kind of goods or service this product represents. New variants of digital products
             * store digital_goods when line_item_tax_category is omitted; explicit categories are
             * preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
             */
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            /**
             * Product lifecycle status. Archived products remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of non-archived variants belonging to the product. Format: int32. */
            "variant_count"?: number;
            /**
             * The product's complete non-archived variants, ordered by `position` and then
             * `variant_id`. Present when `expand=variants` is requested, and on the `POST
             * /v1/products` response. An archived product returns an empty array. [] (Value):
             * {@link ProductVariant}. A specific purchasable version of a product.
             */
            "variants"?: Array<ProductVariant>;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Product>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "product.updated". */
    "event_type"?: "product.updated";
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
 * The `product.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ProductUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `variants`, `matched_variant`, `modifier_set`. object.active_variant_count
     * (Optional): integer. Number of active variants belonging to the product. Format: int32.
     * object.categories (Required): Array of {@link CategoryReference}. Always present. Empty
     * collections are returned as []. object.categories[] (Value): {@link CategoryReference}. A
     * reference to a product category by ID, handle, and name. object.created_at (Optional):
     * string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.default_variant (Optional): {@link ProductVariant}. The
     * product's default variant, when one is set. A specific purchasable version of a product.
     * object.default_variant_id (Optional): string. Identifier of the variant chosen as this
     * product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.delivery_configuration_status (Required): string. Delivery readiness aggregated
     * across the product's non-archived variants. Value enum: "configured", "action_required",
     * "not_applicable". object.description (Optional): string. Description of the product shown to
     * buyers. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.images
     * (Required): Array of {@link ImageAttachment}. Images attached to this resource, in display
     * order. The first image is primary. object.images[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Optional): boolean. Whether the product is active and has at
     * least one active variant. object.matched_variant (Optional): {@link ProductVariantMatch}. On
     * product list rows, the first non-archived variant by position, then variant_id, that matches
     * all exact variant filters. Without exact variant filters, identifies the first variant whose
     * SKU matches query. Omitted when no variant matches; a product name or description match
     * alone does not set it. Page the product's variants to find all matches. A single variant
     * witness on product list rows only. With exact variant filters, the first variant by
     * position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in
     * that order whose SKU matches query. Use the paginated nested variant list to enumerate every
     * match. object.merchant_id (Optional): string. Identifier of the merchant that owns this
     * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null.
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Product name shown
     * to buyers. object.option_count (Optional): integer. Number of active options belonging to
     * the product. Format: int32. object.options (Required): Array of {@link ProductOption}.
     * Product options and their non-archived values. Empty when the product has no options.
     * object.options[] (Value): {@link ProductOption}. A choice that defines a product's variants.
     * object.price_range (Optional): {@link ProductPriceRange}. Lowest and highest base unit
     * prices among active variants, before any quantity price breaks. Omitted when there are no
     * active variants or their currencies differ. The lowest and highest unit prices across a
     * product's variants. object.product_id (Required): string. Stable identifier of the product.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.product_type (Required): string. Kind of
     * goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card". object.status (Required):
     * string. Product lifecycle status. Archived products remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When
     * this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.variant_count (Optional): integer. Number of non-archived
     * variants belonging to the product. Format: int32. object.variants (Optional): Array of
     * {@link ProductVariant}. The product's complete non-archived variants, ordered by `position`
     * and then `variant_id`. Present when `expand=variants` is requested, and on the `POST
     * /v1/products` response. An archived product returns an empty array. object.variants[]
     * (Value): {@link ProductVariant}. A specific purchasable version of a product. object.version
     * (Required): integer. Current resource version. Send it as expected_version to reject a write
     * if the resource has changed. Format: uint64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`. active_variant_count (Optional): integer. Number of
         * active variants belonging to the product. Format: int32. categories (Required): Array of
         * {@link CategoryReference}. Always present. Empty collections are returned as [].
         * categories[] (Value): {@link CategoryReference}. A reference to a product category by
         * ID, handle, and name. created_at (Optional): string. When this resource was created, as
         * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * default_variant (Optional): {@link ProductVariant}. The product's default variant, when
         * one is set. A specific purchasable version of a product. default_variant_id (Optional):
         * string. Identifier of the variant chosen as this product's default, when one is set.
         * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". delivery_configuration_status (Required):
         * string. Delivery readiness aggregated across the product's non-archived variants. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the product shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Optional): boolean. Whether
         * the product is active and has at least one active variant. matched_variant (Optional):
         * {@link ProductVariantMatch}. On product list rows, the first non-archived variant by
         * position, then variant_id, that matches all exact variant filters. Without exact variant
         * filters, identifies the first variant whose SKU matches query. Omitted when no variant
         * matches; a product name or description match alone does not set it. Page the product's
         * variants to find all matches. A single variant witness on product list rows only. With
         * exact variant filters, the first variant by position, then variant_id, satisfying every
         * exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use
         * the paginated nested variant list to enumerate every match. merchant_id (Optional):
         * string. Identifier of the merchant that owns this resource. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_set (Optional): {@link ModifierSet} or null. Attached modifier
         * set, included when expand=modifier_set is requested. Requires commerce.catalog.read in
         * addition to the resource's read scope. Present only when `expand` includes
         * `modifier_set`; `null` when expanded and there is no related modifier set.
         * modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
         * customization groups. modifier_set.anyOf[2] (Value): null. modifier_set_id (Required):
         * string or null. Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required): string. Product name shown to buyers.
         * option_count (Optional): integer. Number of active options belonging to the product.
         * Format: int32. options (Required): Array of {@link ProductOption}. Product options and
         * their non-archived values. Empty when the product has no options. options[] (Value):
         * {@link ProductOption}. A choice that defines a product's variants. price_range
         * (Optional): {@link ProductPriceRange}. Lowest and highest base unit prices among active
         * variants, before any quantity price breaks. Omitted when there are no active variants or
         * their currencies differ. The lowest and highest unit prices across a product's variants.
         * product_id (Required): string. Stable identifier of the product. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_type (Required): string. Kind of goods or
         * service this product represents. New variants of digital products store digital_goods
         * when line_item_tax_category is omitted; explicit categories are preserved. Value enum:
         * "physical", "service", "fee", "digital", "gift_card". status (Required): string. Product
         * lifecycle status. Archived products remain readable and cannot be edited. Value enum:
         * "active", "inactive", "archived". updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * variant_count (Optional): integer. Number of non-archived variants belonging to the
         * product. Format: int32. variants (Optional): Array of {@link ProductVariant}. The
         * product's complete non-archived variants, ordered by `position` and then `variant_id`.
         * Present when `expand=variants` is requested, and on the `POST /v1/products` response. An
         * archived product returns an empty array. variants[] (Value): {@link ProductVariant}. A
         * specific purchasable version of a product. version (Required): integer. Current resource
         * version. Send it as expected_version to reject a write if the resource has changed.
         * Format: uint64. minimum: 0.
         */
        "object": {
            /** Number of active variants belonging to the product. Format: int32. */
            "active_variant_count"?: number;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * The product's default variant, when one is set. A specific purchasable version of a
             * product.
             */
            "default_variant"?: ProductVariant;
            /**
             * Identifier of the variant chosen as this product's default, when one is set.
             * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "default_variant_id"?: string;
            /**
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the product shown to buyers. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Images attached to this resource, in display order. The first image is primary. []
             * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /** Whether the product is active and has at least one active variant. */
            "is_available_for_sale"?: boolean;
            /**
             * On product list rows, the first non-archived variant by position, then variant_id,
             * that matches all exact variant filters. Without exact variant filters, identifies
             * the first variant whose SKU matches query. Omitted when no variant matches; a
             * product name or description match alone does not set it. Page the product's variants
             * to find all matches. A single variant witness on product list rows only. With exact
             * variant filters, the first variant by position, then variant_id, satisfying every
             * exact predicate. Otherwise, the first variant in that order whose SKU matches query.
             * Use the paginated nested variant list to enumerate every match.
             */
            "matched_variant"?: ProductVariantMatch;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
             * customization groups. anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Product name shown to buyers. */
            "name": string;
            /** Number of active options belonging to the product. Format: int32. */
            "option_count"?: number;
            /**
             * Product options and their non-archived values. Empty when the product has no
             * options. [] (Value): {@link ProductOption}. A choice that defines a product's
             * variants.
             */
            "options": Array<ProductOption>;
            /**
             * Lowest and highest base unit prices among active variants, before any quantity price
             * breaks. Omitted when there are no active variants or their currencies differ. The
             * lowest and highest unit prices across a product's variants.
             */
            "price_range"?: ProductPriceRange;
            /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
            "product_id": string;
            /**
             * Kind of goods or service this product represents. New variants of digital products
             * store digital_goods when line_item_tax_category is omitted; explicit categories are
             * preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
             */
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            /**
             * Product lifecycle status. Archived products remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of non-archived variants belonging to the product. Format: int32. */
            "variant_count"?: number;
            /**
             * The product's complete non-archived variants, ordered by `position` and then
             * `variant_id`. Present when `expand=variants` is requested, and on the `POST
             * /v1/products` response. An archived product returns an empty array. [] (Value):
             * {@link ProductVariant}. A specific purchasable version of a product.
             */
            "variants"?: Array<ProductVariant>;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Product>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "product.updated". */
    "event_type"?: "product.updated";
});
/** A specific purchasable version of a product. */
export type ProductVariant = {
    /** Barcode assigned to this sellable item. */
    "barcode"?: string;
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Reason the variant's delivery configuration needs attention. Value enum:
     * "delivery_profile_missing", "delivery_profile_inactive".
     */
    "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
    /**
     * Whether the variant's delivery configuration is ready, needs attention, or does not apply.
     * Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /**
     * Identifier of the assigned delivery profile. Digital and service variants opt in to manual
     * delivery with a required manual profile whose allowed_types is exactly [digital] or
     * [service], matching the product type. Without a profile, delivery does not apply. Example:
     * "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id"?: string;
    /**
     * Images shown for the variant: its own gallery when nonempty, otherwise the product's
     * gallery. [] (Value): {@link ImageAttachment}. An image attached to a resource, with its
     * display properties and attachment metadata.
     */
    "effective_images": Array<ImageAttachment>;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Gift card issuance terms. face_value_money is the reference denomination; unit_price_money
     * is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with
     * ties up. Gift card settings on a product variant: its `face_value_money`, price mode (face
     * value or discounted), and bounds for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfiguration;
    /**
     * The variant's own images in display order. An empty gallery inherits the product's images.
     * [] (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Whether one order line can buy this variant now, evaluated at read time against
     * `settings.inventory.default_routing_source` with the same routing pay uses. Returned by `GET
     * /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`,
     * and variants included by `expand=variants` on product reads; write responses and webhooks
     * omit it. Advisory: it holds no stock, so pay can still find the stock gone. Variants that
     * share an inventory item are each evaluated alone. It ignores the variant's `status`, so also
     * check `is_available_for_sale`. It is outside `version` and sends no event of its own: read
     * the variant again after `inventory_level.updated`. Stock availability of a variant for one
     * order line, computed when the variant is read.
     */
    "inventory_availability"?: ProductVariantInventoryAvailability;
    /**
     * The inventory item this variant consumes. Present exactly when inventory_tracking is
     * tracked. Several variants may share one inventory item. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: string;
    /**
     * Whether sales of this variant consume an inventory item. Value enum: "not_tracked",
     * "tracked".
     */
    "inventory_tracking": "not_tracked" | "tracked" | (string & {});
    /**
     * Whether the variant and its product are both active. Stock isn't considered;
     * `inventory_availability` reports it on reads.
     */
    "is_available_for_sale": boolean;
    /**
     * Whether effective_images comes from the product's gallery because this variant's gallery is
     * empty.
     */
    "is_inheriting_product_images": boolean;
    /**
     * Stored Flint line-item tax category. New digital-product variants default to digital_goods
     * when omitted. The stored value remains editable. Unset uses the merchant default. Value
     * enum: "general", "physical_goods", "digital_goods", "software", "saas", "services",
     * "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
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
    /**
     * Identifier of the merchant that owns this resource. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set. Also
     * included when `expand` includes `variants.modifier_set`. anyOf[1] (Value): {@link
     * ModifierSet}. A reusable collection of customization groups. anyOf[2] (Value): null.
     */
    "modifier_set"?: ((ModifierSet) | (null));
    /**
     * Attached modifier set. Send null on update to remove it. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id": string | null;
    /** Variant name that distinguishes it from the product's other variants. */
    "name"?: string;
    /** Display order among the product's variants, starting at zero. Format: int32. */
    "position": number;
    /**
     * Identifier of the product this variant belongs to. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * Net unit prices in ascending minimum_quantity order. The largest minimum not above the line
     * quantity applies; otherwise the base unit price applies. Empty when no breaks are
     * configured. Gift card variants have no breaks. maxItems: 10. [] (Value): {@link
     * QuantityPriceBreak}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks": Array<QuantityPriceBreak>;
    /**
     * Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created
     * while this date is after today in the merchant timezone are pre-orders. Existing order lines
     * keep their release date. Format: date. Example: "2026-08-02".
     */
    "release_date": string | null;
    /**
     * Always present. Empty collections are returned as []. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Stock keeping unit assigned to this sellable item. */
    "sku"?: string;
    /**
     * Variant lifecycle status. Archived variants remain readable and cannot be edited. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Base unit price before quantity price breaks, in the currency's smallest unit. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Stable identifier of the product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
    /**
     * Current resource version. Send it as expected_version to reject a write if the resource has
     * changed. Format: uint64. minimum: 0.
     */
    "version": number;
};
export type ProductVariantArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "barcode"?: string;
            "created_at"?: string;
            "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "delivery_profile_id"?: string;
            "effective_images": Array<ImageAttachment>;
            "external_reference_id"?: string;
            "gift_card_configuration"?: GiftCardProductConfiguration;
            "images": Array<ImageAttachment>;
            "inventory_availability"?: ProductVariantInventoryAvailability;
            "inventory_item_id"?: string;
            "inventory_tracking": "not_tracked" | "tracked" | (string & {});
            "is_available_for_sale": boolean;
            "is_inheriting_product_images": boolean;
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
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name"?: string;
            "position": number;
            "product_id": string;
            "quantity_price_breaks": Array<QuantityPriceBreak>;
            "release_date": string | null;
            "selected_options": Array<SelectedProductOption>;
            "sku"?: string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "taxable"?: boolean;
            "unit_dimensions"?: Dimensions;
            "unit_price_money": MoneyValue;
            "unit_weight"?: Weight;
            "updated_at"?: string;
            "variant_id": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ProductVariant>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "product_variant.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "barcode"?: string;
            "created_at"?: string;
            "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "delivery_profile_id"?: string;
            "effective_images": Array<ImageAttachment>;
            "external_reference_id"?: string;
            "gift_card_configuration"?: GiftCardProductConfiguration;
            "images": Array<ImageAttachment>;
            "inventory_availability"?: ProductVariantInventoryAvailability;
            "inventory_item_id"?: string;
            "inventory_tracking": "not_tracked" | "tracked" | (string & {});
            "is_available_for_sale": boolean;
            "is_inheriting_product_images": boolean;
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
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name"?: string;
            "position": number;
            "product_id": string;
            "quantity_price_breaks": Array<QuantityPriceBreak>;
            "release_date": string | null;
            "selected_options": Array<SelectedProductOption>;
            "sku"?: string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "taxable"?: boolean;
            "unit_dimensions"?: Dimensions;
            "unit_price_money": MoneyValue;
            "unit_weight"?: Weight;
            "updated_at"?: string;
            "variant_id": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ProductVariant>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "product_variant.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "product_variant.archived";
});
/**
 * The `product_variant.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ProductVariantArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `modifier_set`, `inventory_availability`. object.barcode (Optional): string. Barcode
     * assigned to this sellable item. object.created_at (Optional): string. When this resource was
     * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.delivery_configuration_reason (Optional): string. Reason the variant's delivery
     * configuration needs attention. Value enum: "delivery_profile_missing",
     * "delivery_profile_inactive". object.delivery_configuration_status (Required): string.
     * Whether the variant's delivery configuration is ready, needs attention, or does not apply.
     * Value enum: "configured", "action_required", "not_applicable". object.delivery_profile_id
     * (Optional): string. Identifier of the assigned delivery profile. Digital and service
     * variants opt in to manual delivery with a required manual profile whose allowed_types is
     * exactly [digital] or [service], matching the product type. Without a profile, delivery does
     * not apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". object.effective_images (Required):
     * Array of {@link ImageAttachment}. Images shown for the variant: its own gallery when
     * nonempty, otherwise the product's gallery. object.effective_images[] (Value): {@link
     * ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata. object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_card_configuration (Optional): {@link
     * GiftCardProductConfiguration}. Gift card issuance terms. face_value_money is the reference
     * denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio,
     * rounded to the nearest cent with ties up. Gift card settings on a product variant: its
     * `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
     * object.images (Required): Array of {@link ImageAttachment}. The variant's own images in
     * display order. An empty gallery inherits the product's images. object.images[] (Value):
     * {@link ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata. object.inventory_availability (Optional): {@link
     * ProductVariantInventoryAvailability}. Whether one order line can buy this variant now,
     * evaluated at read time against `settings.inventory.default_routing_source` with the same
     * routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET
     * /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product
     * reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still
     * find the stock gone. Variants that share an inventory item are each evaluated alone. It
     * ignores the variant's `status`, so also check `is_available_for_sale`. It is outside
     * `version` and sends no event of its own: read the variant again after
     * `inventory_level.updated`. Stock availability of a variant for one order line, computed when
     * the variant is read. object.inventory_item_id (Optional): string. The inventory item this
     * variant consumes. Present exactly when inventory_tracking is tracked. Several variants may
     * share one inventory item. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     * object.inventory_tracking (Required): string. Whether sales of this variant consume an
     * inventory item. Value enum: "not_tracked", "tracked". object.is_available_for_sale
     * (Required): boolean. Whether the variant and its product are both active. Stock isn't
     * considered; `inventory_availability` reports it on reads.
     * object.is_inheriting_product_images (Required): boolean. Whether effective_images comes from
     * the product's gallery because this variant's gallery is empty. object.line_item_tax_category
     * (Optional): string. Stored Flint line-item tax category. New digital-product variants
     * default to digital_goods when omitted. The stored value remains editable. Unset uses the
     * merchant default. Value enum: "general", "physical_goods", "digital_goods", "software",
     * "saas", "services", "professional_services", "food", "prepared_food", "clothing",
     * "medical_goods", "admission". object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_set (Optional): {@link
     * ModifierSet} or null. Attached modifier set, included when expand=modifier_set is requested.
     * Requires commerce.catalog.read in addition to the resource's read scope. Present only when
     * `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * Also included when `expand` includes `variants.modifier_set`. object.modifier_set.anyOf[1]
     * (Value): {@link ModifierSet}. A reusable collection of customization groups.
     * object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id (Required): string or
     * null. Attached modifier set. Send null on update to remove it. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Optional): string. Variant name that
     * distinguishes it from the product's other variants. object.position (Required): integer.
     * Display order among the product's variants, starting at zero. Format: int32.
     * object.product_id (Required): string. Identifier of the product this variant belongs to.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.quantity_price_breaks (Required): Array
     * of {@link QuantityPriceBreak}. Net unit prices in ascending minimum_quantity order. The
     * largest minimum not above the line quantity applies; otherwise the base unit price applies.
     * Empty when no breaks are configured. Gift card variants have no breaks. maxItems: 10.
     * object.quantity_price_breaks[] (Value): {@link QuantityPriceBreak}. A net unit price that
     * applies when one catalog line reaches minimum_quantity. object.release_date (Required):
     * string or null. Calendar release date in YYYY-MM-DD format. Null when no release date is
     * set. Lines created while this date is after today in the merchant timezone are pre-orders.
     * Existing order lines keep their release date. Format: date. Example: "2026-08-02".
     * object.selected_options (Required): Array of {@link SelectedProductOption}. Always present.
     * Empty collections are returned as []. object.selected_options[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large. object.sku (Optional): string. Stock keeping unit assigned to this sellable item.
     * object.status (Required): string. Variant lifecycle status. Archived variants remain
     * readable and cannot be edited. Value enum: "active", "inactive", "archived". object.taxable
     * (Optional): boolean. Whether this item is subject to tax. object.unit_dimensions (Optional):
     * {@link Dimensions}. Per-unit measurement. Omitted when unknown. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.unit_price_money (Required):
     * {@link MoneyValue}. Base unit price before quantity price breaks, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.unit_weight (Optional): {@link Weight}. Per-unit measurement. Omitted when unknown. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * object.updated_at (Optional): string. When this resource last changed, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.variant_id (Required):
     * string. Stable identifier of the product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.version (Required): integer. Current resource version. Send it as expected_version to
     * reject a write if the resource has changed. Format: uint64. minimum: 0. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`,
         * `inventory_availability`. barcode (Optional): string. Barcode assigned to this sellable
         * item. created_at (Optional): string. When this resource was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * delivery_configuration_reason (Optional): string. Reason the variant's delivery
         * configuration needs attention. Value enum: "delivery_profile_missing",
         * "delivery_profile_inactive". delivery_configuration_status (Required): string. Whether
         * the variant's delivery configuration is ready, needs attention, or does not apply. Value
         * enum: "configured", "action_required", "not_applicable". delivery_profile_id (Optional):
         * string. Identifier of the assigned delivery profile. Digital and service variants opt in
         * to manual delivery with a required manual profile whose allowed_types is exactly
         * [digital] or [service], matching the product type. Without a profile, delivery does not
         * apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". effective_images (Required): Array
         * of {@link ImageAttachment}. Images shown for the variant: its own gallery when nonempty,
         * otherwise the product's gallery. effective_images[] (Value): {@link ImageAttachment}. An
         * image attached to a resource, with its display properties and attachment metadata.
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". gift_card_configuration
         * (Optional): {@link GiftCardProductConfiguration}. Gift card issuance terms.
         * face_value_money is the reference denomination; unit_price_money is its price. Custom
         * amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift
         * card settings on a product variant: its `face_value_money`, price mode (face value or
         * discounted), and bounds for custom amounts. images (Required): Array of {@link
         * ImageAttachment}. The variant's own images in display order. An empty gallery inherits
         * the product's images. images[] (Value): {@link ImageAttachment}. An image attached to a
         * resource, with its display properties and attachment metadata. inventory_availability
         * (Optional): {@link ProductVariantInventoryAvailability}. Whether one order line can buy
         * this variant now, evaluated at read time against
         * `settings.inventory.default_routing_source` with the same routing pay uses. Returned by
         * `GET /v1/products/{product_id}/variants/{variant_id}`, `GET
         * /v1/products/{product_id}/variants`, and variants included by `expand=variants` on
         * product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay
         * can still find the stock gone. Variants that share an inventory item are each evaluated
         * alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is
         * outside `version` and sends no event of its own: read the variant again after
         * `inventory_level.updated`. Stock availability of a variant for one order line, computed
         * when the variant is read. inventory_item_id (Optional): string. The inventory item this
         * variant consumes. Present exactly when inventory_tracking is tracked. Several variants
         * may share one inventory item. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
         * inventory_tracking (Required): string. Whether sales of this variant consume an
         * inventory item. Value enum: "not_tracked", "tracked". is_available_for_sale (Required):
         * boolean. Whether the variant and its product are both active. Stock isn't considered;
         * `inventory_availability` reports it on reads. is_inheriting_product_images (Required):
         * boolean. Whether effective_images comes from the product's gallery because this
         * variant's gallery is empty. line_item_tax_category (Optional): string. Stored Flint
         * line-item tax category. New digital-product variants default to digital_goods when
         * omitted. The stored value remains editable. Unset uses the merchant default. Value enum:
         * "general", "physical_goods", "digital_goods", "software", "saas", "services",
         * "professional_services", "food", "prepared_food", "clothing", "medical_goods",
         * "admission". merchant_id (Optional): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. modifier_set (Optional): {@link ModifierSet}
         * or null. Attached modifier set, included when expand=modifier_set is requested. Requires
         * commerce.catalog.read in addition to the resource's read scope. Present only when
         * `expand` includes `modifier_set`; `null` when expanded and there is no related modifier
         * set. Also included when `expand` includes `variants.modifier_set`. modifier_set.anyOf[1]
         * (Value): {@link ModifierSet}. A reusable collection of customization groups.
         * modifier_set.anyOf[2] (Value): null. modifier_set_id (Required): string or null.
         * Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Optional): string. Variant name that
         * distinguishes it from the product's other variants. position (Required): integer.
         * Display order among the product's variants, starting at zero. Format: int32. product_id
         * (Required): string. Identifier of the product this variant belongs to. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". quantity_price_breaks (Required): Array of {@link
         * QuantityPriceBreak}. Net unit prices in ascending minimum_quantity order. The largest
         * minimum not above the line quantity applies; otherwise the base unit price applies.
         * Empty when no breaks are configured. Gift card variants have no breaks. maxItems: 10.
         * quantity_price_breaks[] (Value): {@link QuantityPriceBreak}. A net unit price that
         * applies when one catalog line reaches minimum_quantity. release_date (Required): string
         * or null. Calendar release date in YYYY-MM-DD format. Null when no release date is set.
         * Lines created while this date is after today in the merchant timezone are pre-orders.
         * Existing order lines keep their release date. Format: date. Example: "2026-08-02".
         * selected_options (Required): Array of {@link SelectedProductOption}. Always present.
         * Empty collections are returned as []. selected_options[] (Value): {@link
         * SelectedProductOption}. An option and value chosen for a product variant, such as size
         * Large. sku (Optional): string. Stock keeping unit assigned to this sellable item. status
         * (Required): string. Variant lifecycle status. Archived variants remain readable and
         * cannot be edited. Value enum: "active", "inactive", "archived". taxable (Optional):
         * boolean. Whether this item is subject to tax. unit_dimensions (Optional): {@link
         * Dimensions}. Per-unit measurement. Omitted when unknown. Package or item dimensions as
         * `length`, `width`, and `height` in the given `unit`. unit_price_money (Required): {@link
         * MoneyValue}. Base unit price before quantity price breaks, in the currency's smallest
         * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * unit_weight (Optional): {@link Weight}. Per-unit measurement. Omitted when unknown. A
         * weight value in grams, kilograms, ounces, or pounds, used in delivery profile
         * configuration. updated_at (Optional): string. When this resource last changed, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". variant_id
         * (Required): string. Stable identifier of the product variant. Example:
         * "var_01KEZF7C004GSH2KT8CNYVMHGX". version (Required): integer. Current resource version.
         * Send it as expected_version to reject a write if the resource has changed. Format:
         * uint64. minimum: 0.
         */
        "object": {
            /** Barcode assigned to this sellable item. */
            "barcode"?: string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Reason the variant's delivery configuration needs attention. Value enum:
             * "delivery_profile_missing", "delivery_profile_inactive".
             */
            "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
            /**
             * Whether the variant's delivery configuration is ready, needs attention, or does not
             * apply. Value enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /**
             * Identifier of the assigned delivery profile. Digital and service variants opt in to
             * manual delivery with a required manual profile whose allowed_types is exactly
             * [digital] or [service], matching the product type. Without a profile, delivery does
             * not apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
             */
            "delivery_profile_id"?: string;
            /**
             * Images shown for the variant: its own gallery when nonempty, otherwise the product's
             * gallery. [] (Value): {@link ImageAttachment}. An image attached to a resource, with
             * its display properties and attachment metadata.
             */
            "effective_images": Array<ImageAttachment>;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Gift card issuance terms. face_value_money is the reference denomination;
             * unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded
             * to the nearest cent with ties up. Gift card settings on a product variant: its
             * `face_value_money`, price mode (face value or discounted), and bounds for custom
             * amounts.
             */
            "gift_card_configuration"?: GiftCardProductConfiguration;
            /**
             * The variant's own images in display order. An empty gallery inherits the product's
             * images. [] (Value): {@link ImageAttachment}. An image attached to a resource, with
             * its display properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /**
             * Whether one order line can buy this variant now, evaluated at read time against
             * `settings.inventory.default_routing_source` with the same routing pay uses. Returned
             * by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET
             * /v1/products/{product_id}/variants`, and variants included by `expand=variants` on
             * product reads; write responses and webhooks omit it. Advisory: it holds no stock, so
             * pay can still find the stock gone. Variants that share an inventory item are each
             * evaluated alone. It ignores the variant's `status`, so also check
             * `is_available_for_sale`. It is outside `version` and sends no event of its own: read
             * the variant again after `inventory_level.updated`. Stock availability of a variant
             * for one order line, computed when the variant is read.
             */
            "inventory_availability"?: ProductVariantInventoryAvailability;
            /**
             * The inventory item this variant consumes. Present exactly when inventory_tracking is
             * tracked. Several variants may share one inventory item. Example:
             * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
             */
            "inventory_item_id"?: string;
            /**
             * Whether sales of this variant consume an inventory item. Value enum: "not_tracked",
             * "tracked".
             */
            "inventory_tracking": "not_tracked" | "tracked" | (string & {});
            /**
             * Whether the variant and its product are both active. Stock isn't considered;
             * `inventory_availability` reports it on reads.
             */
            "is_available_for_sale": boolean;
            /**
             * Whether effective_images comes from the product's gallery because this variant's
             * gallery is empty.
             */
            "is_inheriting_product_images": boolean;
            /**
             * Stored Flint line-item tax category. New digital-product variants default to
             * digital_goods when omitted. The stored value remains editable. Unset uses the
             * merchant default. Value enum: "general", "physical_goods", "digital_goods",
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
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. Also included when `expand` includes `variants.modifier_set`. anyOf[1]
             * (Value): {@link ModifierSet}. A reusable collection of customization groups.
             * anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Variant name that distinguishes it from the product's other variants. */
            "name"?: string;
            /** Display order among the product's variants, starting at zero. Format: int32. */
            "position": number;
            /**
             * Identifier of the product this variant belongs to. Example:
             * "prod_01KEZF7C00BVSHCNWVH528HB66".
             */
            "product_id": string;
            /**
             * Net unit prices in ascending minimum_quantity order. The largest minimum not above
             * the line quantity applies; otherwise the base unit price applies. Empty when no
             * breaks are configured. Gift card variants have no breaks. maxItems: 10. [] (Value):
             * {@link QuantityPriceBreak}. A net unit price that applies when one catalog line
             * reaches minimum_quantity.
             */
            "quantity_price_breaks": Array<QuantityPriceBreak>;
            /**
             * Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines
             * created while this date is after today in the merchant timezone are pre-orders.
             * Existing order lines keep their release date. Format: date. Example: "2026-08-02".
             */
            "release_date": string | null;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * SelectedProductOption}. An option and value chosen for a product variant, such as
             * size Large.
             */
            "selected_options": Array<SelectedProductOption>;
            /** Stock keeping unit assigned to this sellable item. */
            "sku"?: string;
            /**
             * Variant lifecycle status. Archived variants remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** Whether this item is subject to tax. */
            "taxable"?: boolean;
            /**
             * Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`,
             * `width`, and `height` in the given `unit`.
             */
            "unit_dimensions"?: Dimensions;
            /**
             * Base unit price before quantity price breaks, in the currency's smallest unit.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "unit_price_money": MoneyValue;
            /**
             * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms,
             * ounces, or pounds, used in delivery profile configuration.
             */
            "unit_weight"?: Weight;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Stable identifier of the product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "variant_id": string;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ProductVariant>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "product_variant.archived". */
    "event_type"?: "product_variant.archived";
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
 * The `product_variant.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductVariantArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `modifier_set`, `inventory_availability`. object.barcode (Optional): string. Barcode
     * assigned to this sellable item. object.created_at (Optional): string. When this resource was
     * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.delivery_configuration_reason (Optional): string. Reason the variant's delivery
     * configuration needs attention. Value enum: "delivery_profile_missing",
     * "delivery_profile_inactive". object.delivery_configuration_status (Required): string.
     * Whether the variant's delivery configuration is ready, needs attention, or does not apply.
     * Value enum: "configured", "action_required", "not_applicable". object.delivery_profile_id
     * (Optional): string. Identifier of the assigned delivery profile. Digital and service
     * variants opt in to manual delivery with a required manual profile whose allowed_types is
     * exactly [digital] or [service], matching the product type. Without a profile, delivery does
     * not apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". object.effective_images (Required):
     * Array of {@link ImageAttachment}. Images shown for the variant: its own gallery when
     * nonempty, otherwise the product's gallery. object.effective_images[] (Value): {@link
     * ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata. object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_card_configuration (Optional): {@link
     * GiftCardProductConfiguration}. Gift card issuance terms. face_value_money is the reference
     * denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio,
     * rounded to the nearest cent with ties up. Gift card settings on a product variant: its
     * `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
     * object.images (Required): Array of {@link ImageAttachment}. The variant's own images in
     * display order. An empty gallery inherits the product's images. object.images[] (Value):
     * {@link ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata. object.inventory_availability (Optional): {@link
     * ProductVariantInventoryAvailability}. Whether one order line can buy this variant now,
     * evaluated at read time against `settings.inventory.default_routing_source` with the same
     * routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET
     * /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product
     * reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still
     * find the stock gone. Variants that share an inventory item are each evaluated alone. It
     * ignores the variant's `status`, so also check `is_available_for_sale`. It is outside
     * `version` and sends no event of its own: read the variant again after
     * `inventory_level.updated`. Stock availability of a variant for one order line, computed when
     * the variant is read. object.inventory_item_id (Optional): string. The inventory item this
     * variant consumes. Present exactly when inventory_tracking is tracked. Several variants may
     * share one inventory item. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     * object.inventory_tracking (Required): string. Whether sales of this variant consume an
     * inventory item. Value enum: "not_tracked", "tracked". object.is_available_for_sale
     * (Required): boolean. Whether the variant and its product are both active. Stock isn't
     * considered; `inventory_availability` reports it on reads.
     * object.is_inheriting_product_images (Required): boolean. Whether effective_images comes from
     * the product's gallery because this variant's gallery is empty. object.line_item_tax_category
     * (Optional): string. Stored Flint line-item tax category. New digital-product variants
     * default to digital_goods when omitted. The stored value remains editable. Unset uses the
     * merchant default. Value enum: "general", "physical_goods", "digital_goods", "software",
     * "saas", "services", "professional_services", "food", "prepared_food", "clothing",
     * "medical_goods", "admission". object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_set (Optional): {@link
     * ModifierSet} or null. Attached modifier set, included when expand=modifier_set is requested.
     * Requires commerce.catalog.read in addition to the resource's read scope. Present only when
     * `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * Also included when `expand` includes `variants.modifier_set`. object.modifier_set.anyOf[1]
     * (Value): {@link ModifierSet}. A reusable collection of customization groups.
     * object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id (Required): string or
     * null. Attached modifier set. Send null on update to remove it. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Optional): string. Variant name that
     * distinguishes it from the product's other variants. object.position (Required): integer.
     * Display order among the product's variants, starting at zero. Format: int32.
     * object.product_id (Required): string. Identifier of the product this variant belongs to.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.quantity_price_breaks (Required): Array
     * of {@link QuantityPriceBreak}. Net unit prices in ascending minimum_quantity order. The
     * largest minimum not above the line quantity applies; otherwise the base unit price applies.
     * Empty when no breaks are configured. Gift card variants have no breaks. maxItems: 10.
     * object.quantity_price_breaks[] (Value): {@link QuantityPriceBreak}. A net unit price that
     * applies when one catalog line reaches minimum_quantity. object.release_date (Required):
     * string or null. Calendar release date in YYYY-MM-DD format. Null when no release date is
     * set. Lines created while this date is after today in the merchant timezone are pre-orders.
     * Existing order lines keep their release date. Format: date. Example: "2026-08-02".
     * object.selected_options (Required): Array of {@link SelectedProductOption}. Always present.
     * Empty collections are returned as []. object.selected_options[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large. object.sku (Optional): string. Stock keeping unit assigned to this sellable item.
     * object.status (Required): string. Variant lifecycle status. Archived variants remain
     * readable and cannot be edited. Value enum: "active", "inactive", "archived". object.taxable
     * (Optional): boolean. Whether this item is subject to tax. object.unit_dimensions (Optional):
     * {@link Dimensions}. Per-unit measurement. Omitted when unknown. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.unit_price_money (Required):
     * {@link MoneyValue}. Base unit price before quantity price breaks, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.unit_weight (Optional): {@link Weight}. Per-unit measurement. Omitted when unknown. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * object.updated_at (Optional): string. When this resource last changed, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.variant_id (Required):
     * string. Stable identifier of the product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.version (Required): integer. Current resource version. Send it as expected_version to
     * reject a write if the resource has changed. Format: uint64. minimum: 0. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`,
         * `inventory_availability`. barcode (Optional): string. Barcode assigned to this sellable
         * item. created_at (Optional): string. When this resource was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * delivery_configuration_reason (Optional): string. Reason the variant's delivery
         * configuration needs attention. Value enum: "delivery_profile_missing",
         * "delivery_profile_inactive". delivery_configuration_status (Required): string. Whether
         * the variant's delivery configuration is ready, needs attention, or does not apply. Value
         * enum: "configured", "action_required", "not_applicable". delivery_profile_id (Optional):
         * string. Identifier of the assigned delivery profile. Digital and service variants opt in
         * to manual delivery with a required manual profile whose allowed_types is exactly
         * [digital] or [service], matching the product type. Without a profile, delivery does not
         * apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". effective_images (Required): Array
         * of {@link ImageAttachment}. Images shown for the variant: its own gallery when nonempty,
         * otherwise the product's gallery. effective_images[] (Value): {@link ImageAttachment}. An
         * image attached to a resource, with its display properties and attachment metadata.
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". gift_card_configuration
         * (Optional): {@link GiftCardProductConfiguration}. Gift card issuance terms.
         * face_value_money is the reference denomination; unit_price_money is its price. Custom
         * amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift
         * card settings on a product variant: its `face_value_money`, price mode (face value or
         * discounted), and bounds for custom amounts. images (Required): Array of {@link
         * ImageAttachment}. The variant's own images in display order. An empty gallery inherits
         * the product's images. images[] (Value): {@link ImageAttachment}. An image attached to a
         * resource, with its display properties and attachment metadata. inventory_availability
         * (Optional): {@link ProductVariantInventoryAvailability}. Whether one order line can buy
         * this variant now, evaluated at read time against
         * `settings.inventory.default_routing_source` with the same routing pay uses. Returned by
         * `GET /v1/products/{product_id}/variants/{variant_id}`, `GET
         * /v1/products/{product_id}/variants`, and variants included by `expand=variants` on
         * product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay
         * can still find the stock gone. Variants that share an inventory item are each evaluated
         * alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is
         * outside `version` and sends no event of its own: read the variant again after
         * `inventory_level.updated`. Stock availability of a variant for one order line, computed
         * when the variant is read. inventory_item_id (Optional): string. The inventory item this
         * variant consumes. Present exactly when inventory_tracking is tracked. Several variants
         * may share one inventory item. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
         * inventory_tracking (Required): string. Whether sales of this variant consume an
         * inventory item. Value enum: "not_tracked", "tracked". is_available_for_sale (Required):
         * boolean. Whether the variant and its product are both active. Stock isn't considered;
         * `inventory_availability` reports it on reads. is_inheriting_product_images (Required):
         * boolean. Whether effective_images comes from the product's gallery because this
         * variant's gallery is empty. line_item_tax_category (Optional): string. Stored Flint
         * line-item tax category. New digital-product variants default to digital_goods when
         * omitted. The stored value remains editable. Unset uses the merchant default. Value enum:
         * "general", "physical_goods", "digital_goods", "software", "saas", "services",
         * "professional_services", "food", "prepared_food", "clothing", "medical_goods",
         * "admission". merchant_id (Optional): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. modifier_set (Optional): {@link ModifierSet}
         * or null. Attached modifier set, included when expand=modifier_set is requested. Requires
         * commerce.catalog.read in addition to the resource's read scope. Present only when
         * `expand` includes `modifier_set`; `null` when expanded and there is no related modifier
         * set. Also included when `expand` includes `variants.modifier_set`. modifier_set.anyOf[1]
         * (Value): {@link ModifierSet}. A reusable collection of customization groups.
         * modifier_set.anyOf[2] (Value): null. modifier_set_id (Required): string or null.
         * Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Optional): string. Variant name that
         * distinguishes it from the product's other variants. position (Required): integer.
         * Display order among the product's variants, starting at zero. Format: int32. product_id
         * (Required): string. Identifier of the product this variant belongs to. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". quantity_price_breaks (Required): Array of {@link
         * QuantityPriceBreak}. Net unit prices in ascending minimum_quantity order. The largest
         * minimum not above the line quantity applies; otherwise the base unit price applies.
         * Empty when no breaks are configured. Gift card variants have no breaks. maxItems: 10.
         * quantity_price_breaks[] (Value): {@link QuantityPriceBreak}. A net unit price that
         * applies when one catalog line reaches minimum_quantity. release_date (Required): string
         * or null. Calendar release date in YYYY-MM-DD format. Null when no release date is set.
         * Lines created while this date is after today in the merchant timezone are pre-orders.
         * Existing order lines keep their release date. Format: date. Example: "2026-08-02".
         * selected_options (Required): Array of {@link SelectedProductOption}. Always present.
         * Empty collections are returned as []. selected_options[] (Value): {@link
         * SelectedProductOption}. An option and value chosen for a product variant, such as size
         * Large. sku (Optional): string. Stock keeping unit assigned to this sellable item. status
         * (Required): string. Variant lifecycle status. Archived variants remain readable and
         * cannot be edited. Value enum: "active", "inactive", "archived". taxable (Optional):
         * boolean. Whether this item is subject to tax. unit_dimensions (Optional): {@link
         * Dimensions}. Per-unit measurement. Omitted when unknown. Package or item dimensions as
         * `length`, `width`, and `height` in the given `unit`. unit_price_money (Required): {@link
         * MoneyValue}. Base unit price before quantity price breaks, in the currency's smallest
         * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * unit_weight (Optional): {@link Weight}. Per-unit measurement. Omitted when unknown. A
         * weight value in grams, kilograms, ounces, or pounds, used in delivery profile
         * configuration. updated_at (Optional): string. When this resource last changed, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". variant_id
         * (Required): string. Stable identifier of the product variant. Example:
         * "var_01KEZF7C004GSH2KT8CNYVMHGX". version (Required): integer. Current resource version.
         * Send it as expected_version to reject a write if the resource has changed. Format:
         * uint64. minimum: 0.
         */
        "object": {
            /** Barcode assigned to this sellable item. */
            "barcode"?: string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Reason the variant's delivery configuration needs attention. Value enum:
             * "delivery_profile_missing", "delivery_profile_inactive".
             */
            "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
            /**
             * Whether the variant's delivery configuration is ready, needs attention, or does not
             * apply. Value enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /**
             * Identifier of the assigned delivery profile. Digital and service variants opt in to
             * manual delivery with a required manual profile whose allowed_types is exactly
             * [digital] or [service], matching the product type. Without a profile, delivery does
             * not apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
             */
            "delivery_profile_id"?: string;
            /**
             * Images shown for the variant: its own gallery when nonempty, otherwise the product's
             * gallery. [] (Value): {@link ImageAttachment}. An image attached to a resource, with
             * its display properties and attachment metadata.
             */
            "effective_images": Array<ImageAttachment>;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Gift card issuance terms. face_value_money is the reference denomination;
             * unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded
             * to the nearest cent with ties up. Gift card settings on a product variant: its
             * `face_value_money`, price mode (face value or discounted), and bounds for custom
             * amounts.
             */
            "gift_card_configuration"?: GiftCardProductConfiguration;
            /**
             * The variant's own images in display order. An empty gallery inherits the product's
             * images. [] (Value): {@link ImageAttachment}. An image attached to a resource, with
             * its display properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /**
             * Whether one order line can buy this variant now, evaluated at read time against
             * `settings.inventory.default_routing_source` with the same routing pay uses. Returned
             * by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET
             * /v1/products/{product_id}/variants`, and variants included by `expand=variants` on
             * product reads; write responses and webhooks omit it. Advisory: it holds no stock, so
             * pay can still find the stock gone. Variants that share an inventory item are each
             * evaluated alone. It ignores the variant's `status`, so also check
             * `is_available_for_sale`. It is outside `version` and sends no event of its own: read
             * the variant again after `inventory_level.updated`. Stock availability of a variant
             * for one order line, computed when the variant is read.
             */
            "inventory_availability"?: ProductVariantInventoryAvailability;
            /**
             * The inventory item this variant consumes. Present exactly when inventory_tracking is
             * tracked. Several variants may share one inventory item. Example:
             * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
             */
            "inventory_item_id"?: string;
            /**
             * Whether sales of this variant consume an inventory item. Value enum: "not_tracked",
             * "tracked".
             */
            "inventory_tracking": "not_tracked" | "tracked" | (string & {});
            /**
             * Whether the variant and its product are both active. Stock isn't considered;
             * `inventory_availability` reports it on reads.
             */
            "is_available_for_sale": boolean;
            /**
             * Whether effective_images comes from the product's gallery because this variant's
             * gallery is empty.
             */
            "is_inheriting_product_images": boolean;
            /**
             * Stored Flint line-item tax category. New digital-product variants default to
             * digital_goods when omitted. The stored value remains editable. Unset uses the
             * merchant default. Value enum: "general", "physical_goods", "digital_goods",
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
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. Also included when `expand` includes `variants.modifier_set`. anyOf[1]
             * (Value): {@link ModifierSet}. A reusable collection of customization groups.
             * anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Variant name that distinguishes it from the product's other variants. */
            "name"?: string;
            /** Display order among the product's variants, starting at zero. Format: int32. */
            "position": number;
            /**
             * Identifier of the product this variant belongs to. Example:
             * "prod_01KEZF7C00BVSHCNWVH528HB66".
             */
            "product_id": string;
            /**
             * Net unit prices in ascending minimum_quantity order. The largest minimum not above
             * the line quantity applies; otherwise the base unit price applies. Empty when no
             * breaks are configured. Gift card variants have no breaks. maxItems: 10. [] (Value):
             * {@link QuantityPriceBreak}. A net unit price that applies when one catalog line
             * reaches minimum_quantity.
             */
            "quantity_price_breaks": Array<QuantityPriceBreak>;
            /**
             * Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines
             * created while this date is after today in the merchant timezone are pre-orders.
             * Existing order lines keep their release date. Format: date. Example: "2026-08-02".
             */
            "release_date": string | null;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * SelectedProductOption}. An option and value chosen for a product variant, such as
             * size Large.
             */
            "selected_options": Array<SelectedProductOption>;
            /** Stock keeping unit assigned to this sellable item. */
            "sku"?: string;
            /**
             * Variant lifecycle status. Archived variants remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** Whether this item is subject to tax. */
            "taxable"?: boolean;
            /**
             * Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`,
             * `width`, and `height` in the given `unit`.
             */
            "unit_dimensions"?: Dimensions;
            /**
             * Base unit price before quantity price breaks, in the currency's smallest unit.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "unit_price_money": MoneyValue;
            /**
             * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms,
             * ounces, or pounds, used in delivery profile configuration.
             */
            "unit_weight"?: Weight;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Stable identifier of the product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "variant_id": string;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ProductVariant>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "product_variant.archived". */
    "event_type"?: "product_variant.archived";
});
export type ProductVariantCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "barcode"?: string;
            "created_at"?: string;
            "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "delivery_profile_id"?: string;
            "effective_images": Array<ImageAttachment>;
            "external_reference_id"?: string;
            "gift_card_configuration"?: GiftCardProductConfiguration;
            "images": Array<ImageAttachment>;
            "inventory_availability"?: ProductVariantInventoryAvailability;
            "inventory_item_id"?: string;
            "inventory_tracking": "not_tracked" | "tracked" | (string & {});
            "is_available_for_sale": boolean;
            "is_inheriting_product_images": boolean;
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
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name"?: string;
            "position": number;
            "product_id": string;
            "quantity_price_breaks": Array<QuantityPriceBreak>;
            "release_date": string | null;
            "selected_options": Array<SelectedProductOption>;
            "sku"?: string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "taxable"?: boolean;
            "unit_dimensions"?: Dimensions;
            "unit_price_money": MoneyValue;
            "unit_weight"?: Weight;
            "updated_at"?: string;
            "variant_id": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "product_variant.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "barcode"?: string;
            "created_at"?: string;
            "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "delivery_profile_id"?: string;
            "effective_images": Array<ImageAttachment>;
            "external_reference_id"?: string;
            "gift_card_configuration"?: GiftCardProductConfiguration;
            "images": Array<ImageAttachment>;
            "inventory_availability"?: ProductVariantInventoryAvailability;
            "inventory_item_id"?: string;
            "inventory_tracking": "not_tracked" | "tracked" | (string & {});
            "is_available_for_sale": boolean;
            "is_inheriting_product_images": boolean;
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
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name"?: string;
            "position": number;
            "product_id": string;
            "quantity_price_breaks": Array<QuantityPriceBreak>;
            "release_date": string | null;
            "selected_options": Array<SelectedProductOption>;
            "sku"?: string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "taxable"?: boolean;
            "unit_dimensions"?: Dimensions;
            "unit_price_money": MoneyValue;
            "unit_weight"?: Weight;
            "updated_at"?: string;
            "variant_id": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "product_variant.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "product_variant.created";
});
/**
 * The `product_variant.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ProductVariantCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `modifier_set`, `inventory_availability`. object.barcode (Optional): string. Barcode
     * assigned to this sellable item. object.created_at (Optional): string. When this resource was
     * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.delivery_configuration_reason (Optional): string. Reason the variant's delivery
     * configuration needs attention. Value enum: "delivery_profile_missing",
     * "delivery_profile_inactive". object.delivery_configuration_status (Required): string.
     * Whether the variant's delivery configuration is ready, needs attention, or does not apply.
     * Value enum: "configured", "action_required", "not_applicable". object.delivery_profile_id
     * (Optional): string. Identifier of the assigned delivery profile. Digital and service
     * variants opt in to manual delivery with a required manual profile whose allowed_types is
     * exactly [digital] or [service], matching the product type. Without a profile, delivery does
     * not apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". object.effective_images (Required):
     * Array of {@link ImageAttachment}. Images shown for the variant: its own gallery when
     * nonempty, otherwise the product's gallery. object.effective_images[] (Value): {@link
     * ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata. object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_card_configuration (Optional): {@link
     * GiftCardProductConfiguration}. Gift card issuance terms. face_value_money is the reference
     * denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio,
     * rounded to the nearest cent with ties up. Gift card settings on a product variant: its
     * `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
     * object.images (Required): Array of {@link ImageAttachment}. The variant's own images in
     * display order. An empty gallery inherits the product's images. object.images[] (Value):
     * {@link ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata. object.inventory_availability (Optional): {@link
     * ProductVariantInventoryAvailability}. Whether one order line can buy this variant now,
     * evaluated at read time against `settings.inventory.default_routing_source` with the same
     * routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET
     * /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product
     * reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still
     * find the stock gone. Variants that share an inventory item are each evaluated alone. It
     * ignores the variant's `status`, so also check `is_available_for_sale`. It is outside
     * `version` and sends no event of its own: read the variant again after
     * `inventory_level.updated`. Stock availability of a variant for one order line, computed when
     * the variant is read. object.inventory_item_id (Optional): string. The inventory item this
     * variant consumes. Present exactly when inventory_tracking is tracked. Several variants may
     * share one inventory item. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     * object.inventory_tracking (Required): string. Whether sales of this variant consume an
     * inventory item. Value enum: "not_tracked", "tracked". object.is_available_for_sale
     * (Required): boolean. Whether the variant and its product are both active. Stock isn't
     * considered; `inventory_availability` reports it on reads.
     * object.is_inheriting_product_images (Required): boolean. Whether effective_images comes from
     * the product's gallery because this variant's gallery is empty. object.line_item_tax_category
     * (Optional): string. Stored Flint line-item tax category. New digital-product variants
     * default to digital_goods when omitted. The stored value remains editable. Unset uses the
     * merchant default. Value enum: "general", "physical_goods", "digital_goods", "software",
     * "saas", "services", "professional_services", "food", "prepared_food", "clothing",
     * "medical_goods", "admission". object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_set (Optional): {@link
     * ModifierSet} or null. Attached modifier set, included when expand=modifier_set is requested.
     * Requires commerce.catalog.read in addition to the resource's read scope. Present only when
     * `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * Also included when `expand` includes `variants.modifier_set`. object.modifier_set.anyOf[1]
     * (Value): {@link ModifierSet}. A reusable collection of customization groups.
     * object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id (Required): string or
     * null. Attached modifier set. Send null on update to remove it. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Optional): string. Variant name that
     * distinguishes it from the product's other variants. object.position (Required): integer.
     * Display order among the product's variants, starting at zero. Format: int32.
     * object.product_id (Required): string. Identifier of the product this variant belongs to.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.quantity_price_breaks (Required): Array
     * of {@link QuantityPriceBreak}. Net unit prices in ascending minimum_quantity order. The
     * largest minimum not above the line quantity applies; otherwise the base unit price applies.
     * Empty when no breaks are configured. Gift card variants have no breaks. maxItems: 10.
     * object.quantity_price_breaks[] (Value): {@link QuantityPriceBreak}. A net unit price that
     * applies when one catalog line reaches minimum_quantity. object.release_date (Required):
     * string or null. Calendar release date in YYYY-MM-DD format. Null when no release date is
     * set. Lines created while this date is after today in the merchant timezone are pre-orders.
     * Existing order lines keep their release date. Format: date. Example: "2026-08-02".
     * object.selected_options (Required): Array of {@link SelectedProductOption}. Always present.
     * Empty collections are returned as []. object.selected_options[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large. object.sku (Optional): string. Stock keeping unit assigned to this sellable item.
     * object.status (Required): string. Variant lifecycle status. Archived variants remain
     * readable and cannot be edited. Value enum: "active", "inactive", "archived". object.taxable
     * (Optional): boolean. Whether this item is subject to tax. object.unit_dimensions (Optional):
     * {@link Dimensions}. Per-unit measurement. Omitted when unknown. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.unit_price_money (Required):
     * {@link MoneyValue}. Base unit price before quantity price breaks, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.unit_weight (Optional): {@link Weight}. Per-unit measurement. Omitted when unknown. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * object.updated_at (Optional): string. When this resource last changed, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.variant_id (Required):
     * string. Stable identifier of the product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.version (Required): integer. Current resource version. Send it as expected_version to
     * reject a write if the resource has changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`,
         * `inventory_availability`. barcode (Optional): string. Barcode assigned to this sellable
         * item. created_at (Optional): string. When this resource was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * delivery_configuration_reason (Optional): string. Reason the variant's delivery
         * configuration needs attention. Value enum: "delivery_profile_missing",
         * "delivery_profile_inactive". delivery_configuration_status (Required): string. Whether
         * the variant's delivery configuration is ready, needs attention, or does not apply. Value
         * enum: "configured", "action_required", "not_applicable". delivery_profile_id (Optional):
         * string. Identifier of the assigned delivery profile. Digital and service variants opt in
         * to manual delivery with a required manual profile whose allowed_types is exactly
         * [digital] or [service], matching the product type. Without a profile, delivery does not
         * apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". effective_images (Required): Array
         * of {@link ImageAttachment}. Images shown for the variant: its own gallery when nonempty,
         * otherwise the product's gallery. effective_images[] (Value): {@link ImageAttachment}. An
         * image attached to a resource, with its display properties and attachment metadata.
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". gift_card_configuration
         * (Optional): {@link GiftCardProductConfiguration}. Gift card issuance terms.
         * face_value_money is the reference denomination; unit_price_money is its price. Custom
         * amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift
         * card settings on a product variant: its `face_value_money`, price mode (face value or
         * discounted), and bounds for custom amounts. images (Required): Array of {@link
         * ImageAttachment}. The variant's own images in display order. An empty gallery inherits
         * the product's images. images[] (Value): {@link ImageAttachment}. An image attached to a
         * resource, with its display properties and attachment metadata. inventory_availability
         * (Optional): {@link ProductVariantInventoryAvailability}. Whether one order line can buy
         * this variant now, evaluated at read time against
         * `settings.inventory.default_routing_source` with the same routing pay uses. Returned by
         * `GET /v1/products/{product_id}/variants/{variant_id}`, `GET
         * /v1/products/{product_id}/variants`, and variants included by `expand=variants` on
         * product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay
         * can still find the stock gone. Variants that share an inventory item are each evaluated
         * alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is
         * outside `version` and sends no event of its own: read the variant again after
         * `inventory_level.updated`. Stock availability of a variant for one order line, computed
         * when the variant is read. inventory_item_id (Optional): string. The inventory item this
         * variant consumes. Present exactly when inventory_tracking is tracked. Several variants
         * may share one inventory item. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
         * inventory_tracking (Required): string. Whether sales of this variant consume an
         * inventory item. Value enum: "not_tracked", "tracked". is_available_for_sale (Required):
         * boolean. Whether the variant and its product are both active. Stock isn't considered;
         * `inventory_availability` reports it on reads. is_inheriting_product_images (Required):
         * boolean. Whether effective_images comes from the product's gallery because this
         * variant's gallery is empty. line_item_tax_category (Optional): string. Stored Flint
         * line-item tax category. New digital-product variants default to digital_goods when
         * omitted. The stored value remains editable. Unset uses the merchant default. Value enum:
         * "general", "physical_goods", "digital_goods", "software", "saas", "services",
         * "professional_services", "food", "prepared_food", "clothing", "medical_goods",
         * "admission". merchant_id (Optional): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. modifier_set (Optional): {@link ModifierSet}
         * or null. Attached modifier set, included when expand=modifier_set is requested. Requires
         * commerce.catalog.read in addition to the resource's read scope. Present only when
         * `expand` includes `modifier_set`; `null` when expanded and there is no related modifier
         * set. Also included when `expand` includes `variants.modifier_set`. modifier_set.anyOf[1]
         * (Value): {@link ModifierSet}. A reusable collection of customization groups.
         * modifier_set.anyOf[2] (Value): null. modifier_set_id (Required): string or null.
         * Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Optional): string. Variant name that
         * distinguishes it from the product's other variants. position (Required): integer.
         * Display order among the product's variants, starting at zero. Format: int32. product_id
         * (Required): string. Identifier of the product this variant belongs to. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". quantity_price_breaks (Required): Array of {@link
         * QuantityPriceBreak}. Net unit prices in ascending minimum_quantity order. The largest
         * minimum not above the line quantity applies; otherwise the base unit price applies.
         * Empty when no breaks are configured. Gift card variants have no breaks. maxItems: 10.
         * quantity_price_breaks[] (Value): {@link QuantityPriceBreak}. A net unit price that
         * applies when one catalog line reaches minimum_quantity. release_date (Required): string
         * or null. Calendar release date in YYYY-MM-DD format. Null when no release date is set.
         * Lines created while this date is after today in the merchant timezone are pre-orders.
         * Existing order lines keep their release date. Format: date. Example: "2026-08-02".
         * selected_options (Required): Array of {@link SelectedProductOption}. Always present.
         * Empty collections are returned as []. selected_options[] (Value): {@link
         * SelectedProductOption}. An option and value chosen for a product variant, such as size
         * Large. sku (Optional): string. Stock keeping unit assigned to this sellable item. status
         * (Required): string. Variant lifecycle status. Archived variants remain readable and
         * cannot be edited. Value enum: "active", "inactive", "archived". taxable (Optional):
         * boolean. Whether this item is subject to tax. unit_dimensions (Optional): {@link
         * Dimensions}. Per-unit measurement. Omitted when unknown. Package or item dimensions as
         * `length`, `width`, and `height` in the given `unit`. unit_price_money (Required): {@link
         * MoneyValue}. Base unit price before quantity price breaks, in the currency's smallest
         * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * unit_weight (Optional): {@link Weight}. Per-unit measurement. Omitted when unknown. A
         * weight value in grams, kilograms, ounces, or pounds, used in delivery profile
         * configuration. updated_at (Optional): string. When this resource last changed, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". variant_id
         * (Required): string. Stable identifier of the product variant. Example:
         * "var_01KEZF7C004GSH2KT8CNYVMHGX". version (Required): integer. Current resource version.
         * Send it as expected_version to reject a write if the resource has changed. Format:
         * uint64. minimum: 0.
         */
        "object": {
            /** Barcode assigned to this sellable item. */
            "barcode"?: string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Reason the variant's delivery configuration needs attention. Value enum:
             * "delivery_profile_missing", "delivery_profile_inactive".
             */
            "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
            /**
             * Whether the variant's delivery configuration is ready, needs attention, or does not
             * apply. Value enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /**
             * Identifier of the assigned delivery profile. Digital and service variants opt in to
             * manual delivery with a required manual profile whose allowed_types is exactly
             * [digital] or [service], matching the product type. Without a profile, delivery does
             * not apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
             */
            "delivery_profile_id"?: string;
            /**
             * Images shown for the variant: its own gallery when nonempty, otherwise the product's
             * gallery. [] (Value): {@link ImageAttachment}. An image attached to a resource, with
             * its display properties and attachment metadata.
             */
            "effective_images": Array<ImageAttachment>;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Gift card issuance terms. face_value_money is the reference denomination;
             * unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded
             * to the nearest cent with ties up. Gift card settings on a product variant: its
             * `face_value_money`, price mode (face value or discounted), and bounds for custom
             * amounts.
             */
            "gift_card_configuration"?: GiftCardProductConfiguration;
            /**
             * The variant's own images in display order. An empty gallery inherits the product's
             * images. [] (Value): {@link ImageAttachment}. An image attached to a resource, with
             * its display properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /**
             * Whether one order line can buy this variant now, evaluated at read time against
             * `settings.inventory.default_routing_source` with the same routing pay uses. Returned
             * by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET
             * /v1/products/{product_id}/variants`, and variants included by `expand=variants` on
             * product reads; write responses and webhooks omit it. Advisory: it holds no stock, so
             * pay can still find the stock gone. Variants that share an inventory item are each
             * evaluated alone. It ignores the variant's `status`, so also check
             * `is_available_for_sale`. It is outside `version` and sends no event of its own: read
             * the variant again after `inventory_level.updated`. Stock availability of a variant
             * for one order line, computed when the variant is read.
             */
            "inventory_availability"?: ProductVariantInventoryAvailability;
            /**
             * The inventory item this variant consumes. Present exactly when inventory_tracking is
             * tracked. Several variants may share one inventory item. Example:
             * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
             */
            "inventory_item_id"?: string;
            /**
             * Whether sales of this variant consume an inventory item. Value enum: "not_tracked",
             * "tracked".
             */
            "inventory_tracking": "not_tracked" | "tracked" | (string & {});
            /**
             * Whether the variant and its product are both active. Stock isn't considered;
             * `inventory_availability` reports it on reads.
             */
            "is_available_for_sale": boolean;
            /**
             * Whether effective_images comes from the product's gallery because this variant's
             * gallery is empty.
             */
            "is_inheriting_product_images": boolean;
            /**
             * Stored Flint line-item tax category. New digital-product variants default to
             * digital_goods when omitted. The stored value remains editable. Unset uses the
             * merchant default. Value enum: "general", "physical_goods", "digital_goods",
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
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. Also included when `expand` includes `variants.modifier_set`. anyOf[1]
             * (Value): {@link ModifierSet}. A reusable collection of customization groups.
             * anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Variant name that distinguishes it from the product's other variants. */
            "name"?: string;
            /** Display order among the product's variants, starting at zero. Format: int32. */
            "position": number;
            /**
             * Identifier of the product this variant belongs to. Example:
             * "prod_01KEZF7C00BVSHCNWVH528HB66".
             */
            "product_id": string;
            /**
             * Net unit prices in ascending minimum_quantity order. The largest minimum not above
             * the line quantity applies; otherwise the base unit price applies. Empty when no
             * breaks are configured. Gift card variants have no breaks. maxItems: 10. [] (Value):
             * {@link QuantityPriceBreak}. A net unit price that applies when one catalog line
             * reaches minimum_quantity.
             */
            "quantity_price_breaks": Array<QuantityPriceBreak>;
            /**
             * Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines
             * created while this date is after today in the merchant timezone are pre-orders.
             * Existing order lines keep their release date. Format: date. Example: "2026-08-02".
             */
            "release_date": string | null;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * SelectedProductOption}. An option and value chosen for a product variant, such as
             * size Large.
             */
            "selected_options": Array<SelectedProductOption>;
            /** Stock keeping unit assigned to this sellable item. */
            "sku"?: string;
            /**
             * Variant lifecycle status. Archived variants remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** Whether this item is subject to tax. */
            "taxable"?: boolean;
            /**
             * Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`,
             * `width`, and `height` in the given `unit`.
             */
            "unit_dimensions"?: Dimensions;
            /**
             * Base unit price before quantity price breaks, in the currency's smallest unit.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "unit_price_money": MoneyValue;
            /**
             * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms,
             * ounces, or pounds, used in delivery profile configuration.
             */
            "unit_weight"?: Weight;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Stable identifier of the product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "variant_id": string;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "product_variant.created". */
    "event_type"?: "product_variant.created";
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
 * The `product_variant.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductVariantCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `modifier_set`, `inventory_availability`. object.barcode (Optional): string. Barcode
     * assigned to this sellable item. object.created_at (Optional): string. When this resource was
     * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.delivery_configuration_reason (Optional): string. Reason the variant's delivery
     * configuration needs attention. Value enum: "delivery_profile_missing",
     * "delivery_profile_inactive". object.delivery_configuration_status (Required): string.
     * Whether the variant's delivery configuration is ready, needs attention, or does not apply.
     * Value enum: "configured", "action_required", "not_applicable". object.delivery_profile_id
     * (Optional): string. Identifier of the assigned delivery profile. Digital and service
     * variants opt in to manual delivery with a required manual profile whose allowed_types is
     * exactly [digital] or [service], matching the product type. Without a profile, delivery does
     * not apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". object.effective_images (Required):
     * Array of {@link ImageAttachment}. Images shown for the variant: its own gallery when
     * nonempty, otherwise the product's gallery. object.effective_images[] (Value): {@link
     * ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata. object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_card_configuration (Optional): {@link
     * GiftCardProductConfiguration}. Gift card issuance terms. face_value_money is the reference
     * denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio,
     * rounded to the nearest cent with ties up. Gift card settings on a product variant: its
     * `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
     * object.images (Required): Array of {@link ImageAttachment}. The variant's own images in
     * display order. An empty gallery inherits the product's images. object.images[] (Value):
     * {@link ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata. object.inventory_availability (Optional): {@link
     * ProductVariantInventoryAvailability}. Whether one order line can buy this variant now,
     * evaluated at read time against `settings.inventory.default_routing_source` with the same
     * routing pay uses. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET
     * /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product
     * reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay can still
     * find the stock gone. Variants that share an inventory item are each evaluated alone. It
     * ignores the variant's `status`, so also check `is_available_for_sale`. It is outside
     * `version` and sends no event of its own: read the variant again after
     * `inventory_level.updated`. Stock availability of a variant for one order line, computed when
     * the variant is read. object.inventory_item_id (Optional): string. The inventory item this
     * variant consumes. Present exactly when inventory_tracking is tracked. Several variants may
     * share one inventory item. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     * object.inventory_tracking (Required): string. Whether sales of this variant consume an
     * inventory item. Value enum: "not_tracked", "tracked". object.is_available_for_sale
     * (Required): boolean. Whether the variant and its product are both active. Stock isn't
     * considered; `inventory_availability` reports it on reads.
     * object.is_inheriting_product_images (Required): boolean. Whether effective_images comes from
     * the product's gallery because this variant's gallery is empty. object.line_item_tax_category
     * (Optional): string. Stored Flint line-item tax category. New digital-product variants
     * default to digital_goods when omitted. The stored value remains editable. Unset uses the
     * merchant default. Value enum: "general", "physical_goods", "digital_goods", "software",
     * "saas", "services", "professional_services", "food", "prepared_food", "clothing",
     * "medical_goods", "admission". object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_set (Optional): {@link
     * ModifierSet} or null. Attached modifier set, included when expand=modifier_set is requested.
     * Requires commerce.catalog.read in addition to the resource's read scope. Present only when
     * `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * Also included when `expand` includes `variants.modifier_set`. object.modifier_set.anyOf[1]
     * (Value): {@link ModifierSet}. A reusable collection of customization groups.
     * object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id (Required): string or
     * null. Attached modifier set. Send null on update to remove it. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Optional): string. Variant name that
     * distinguishes it from the product's other variants. object.position (Required): integer.
     * Display order among the product's variants, starting at zero. Format: int32.
     * object.product_id (Required): string. Identifier of the product this variant belongs to.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.quantity_price_breaks (Required): Array
     * of {@link QuantityPriceBreak}. Net unit prices in ascending minimum_quantity order. The
     * largest minimum not above the line quantity applies; otherwise the base unit price applies.
     * Empty when no breaks are configured. Gift card variants have no breaks. maxItems: 10.
     * object.quantity_price_breaks[] (Value): {@link QuantityPriceBreak}. A net unit price that
     * applies when one catalog line reaches minimum_quantity. object.release_date (Required):
     * string or null. Calendar release date in YYYY-MM-DD format. Null when no release date is
     * set. Lines created while this date is after today in the merchant timezone are pre-orders.
     * Existing order lines keep their release date. Format: date. Example: "2026-08-02".
     * object.selected_options (Required): Array of {@link SelectedProductOption}. Always present.
     * Empty collections are returned as []. object.selected_options[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large. object.sku (Optional): string. Stock keeping unit assigned to this sellable item.
     * object.status (Required): string. Variant lifecycle status. Archived variants remain
     * readable and cannot be edited. Value enum: "active", "inactive", "archived". object.taxable
     * (Optional): boolean. Whether this item is subject to tax. object.unit_dimensions (Optional):
     * {@link Dimensions}. Per-unit measurement. Omitted when unknown. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.unit_price_money (Required):
     * {@link MoneyValue}. Base unit price before quantity price breaks, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.unit_weight (Optional): {@link Weight}. Per-unit measurement. Omitted when unknown. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * object.updated_at (Optional): string. When this resource last changed, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.variant_id (Required):
     * string. Stable identifier of the product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.version (Required): integer. Current resource version. Send it as expected_version to
     * reject a write if the resource has changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`,
         * `inventory_availability`. barcode (Optional): string. Barcode assigned to this sellable
         * item. created_at (Optional): string. When this resource was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * delivery_configuration_reason (Optional): string. Reason the variant's delivery
         * configuration needs attention. Value enum: "delivery_profile_missing",
         * "delivery_profile_inactive". delivery_configuration_status (Required): string. Whether
         * the variant's delivery configuration is ready, needs attention, or does not apply. Value
         * enum: "configured", "action_required", "not_applicable". delivery_profile_id (Optional):
         * string. Identifier of the assigned delivery profile. Digital and service variants opt in
         * to manual delivery with a required manual profile whose allowed_types is exactly
         * [digital] or [service], matching the product type. Without a profile, delivery does not
         * apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". effective_images (Required): Array
         * of {@link ImageAttachment}. Images shown for the variant: its own gallery when nonempty,
         * otherwise the product's gallery. effective_images[] (Value): {@link ImageAttachment}. An
         * image attached to a resource, with its display properties and attachment metadata.
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". gift_card_configuration
         * (Optional): {@link GiftCardProductConfiguration}. Gift card issuance terms.
         * face_value_money is the reference denomination; unit_price_money is its price. Custom
         * amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift
         * card settings on a product variant: its `face_value_money`, price mode (face value or
         * discounted), and bounds for custom amounts. images (Required): Array of {@link
         * ImageAttachment}. The variant's own images in display order. An empty gallery inherits
         * the product's images. images[] (Value): {@link ImageAttachment}. An image attached to a
         * resource, with its display properties and attachment metadata. inventory_availability
         * (Optional): {@link ProductVariantInventoryAvailability}. Whether one order line can buy
         * this variant now, evaluated at read time against
         * `settings.inventory.default_routing_source` with the same routing pay uses. Returned by
         * `GET /v1/products/{product_id}/variants/{variant_id}`, `GET
         * /v1/products/{product_id}/variants`, and variants included by `expand=variants` on
         * product reads; write responses and webhooks omit it. Advisory: it holds no stock, so pay
         * can still find the stock gone. Variants that share an inventory item are each evaluated
         * alone. It ignores the variant's `status`, so also check `is_available_for_sale`. It is
         * outside `version` and sends no event of its own: read the variant again after
         * `inventory_level.updated`. Stock availability of a variant for one order line, computed
         * when the variant is read. inventory_item_id (Optional): string. The inventory item this
         * variant consumes. Present exactly when inventory_tracking is tracked. Several variants
         * may share one inventory item. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
         * inventory_tracking (Required): string. Whether sales of this variant consume an
         * inventory item. Value enum: "not_tracked", "tracked". is_available_for_sale (Required):
         * boolean. Whether the variant and its product are both active. Stock isn't considered;
         * `inventory_availability` reports it on reads. is_inheriting_product_images (Required):
         * boolean. Whether effective_images comes from the product's gallery because this
         * variant's gallery is empty. line_item_tax_category (Optional): string. Stored Flint
         * line-item tax category. New digital-product variants default to digital_goods when
         * omitted. The stored value remains editable. Unset uses the merchant default. Value enum:
         * "general", "physical_goods", "digital_goods", "software", "saas", "services",
         * "professional_services", "food", "prepared_food", "clothing", "medical_goods",
         * "admission". merchant_id (Optional): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. modifier_set (Optional): {@link ModifierSet}
         * or null. Attached modifier set, included when expand=modifier_set is requested. Requires
         * commerce.catalog.read in addition to the resource's read scope. Present only when
         * `expand` includes `modifier_set`; `null` when expanded and there is no related modifier
         * set. Also included when `expand` includes `variants.modifier_set`. modifier_set.anyOf[1]
         * (Value): {@link ModifierSet}. A reusable collection of customization groups.
         * modifier_set.anyOf[2] (Value): null. modifier_set_id (Required): string or null.
         * Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Optional): string. Variant name that
         * distinguishes it from the product's other variants. position (Required): integer.
         * Display order among the product's variants, starting at zero. Format: int32. product_id
         * (Required): string. Identifier of the product this variant belongs to. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". quantity_price_breaks (Required): Array of {@link
         * QuantityPriceBreak}. Net unit prices in ascending minimum_quantity order. The largest
         * minimum not above the line quantity applies; otherwise the base unit price applies.
         * Empty when no breaks are configured. Gift card variants have no breaks. maxItems: 10.
         * quantity_price_breaks[] (Value): {@link QuantityPriceBreak}. A net unit price that
         * applies when one catalog line reaches minimum_quantity. release_date (Required): string
         * or null. Calendar release date in YYYY-MM-DD format. Null when no release date is set.
         * Lines created while this date is after today in the merchant timezone are pre-orders.
         * Existing order lines keep their release date. Format: date. Example: "2026-08-02".
         * selected_options (Required): Array of {@link SelectedProductOption}. Always present.
         * Empty collections are returned as []. selected_options[] (Value): {@link
         * SelectedProductOption}. An option and value chosen for a product variant, such as size
         * Large. sku (Optional): string. Stock keeping unit assigned to this sellable item. status
         * (Required): string. Variant lifecycle status. Archived variants remain readable and
         * cannot be edited. Value enum: "active", "inactive", "archived". taxable (Optional):
         * boolean. Whether this item is subject to tax. unit_dimensions (Optional): {@link
         * Dimensions}. Per-unit measurement. Omitted when unknown. Package or item dimensions as
         * `length`, `width`, and `height` in the given `unit`. unit_price_money (Required): {@link
         * MoneyValue}. Base unit price before quantity price breaks, in the currency's smallest
         * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * unit_weight (Optional): {@link Weight}. Per-unit measurement. Omitted when unknown. A
         * weight value in grams, kilograms, ounces, or pounds, used in delivery profile
         * configuration. updated_at (Optional): string. When this resource last changed, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". variant_id
         * (Required): string. Stable identifier of the product variant. Example:
         * "var_01KEZF7C004GSH2KT8CNYVMHGX". version (Required): integer. Current resource version.
         * Send it as expected_version to reject a write if the resource has changed. Format:
         * uint64. minimum: 0.
         */
        "object": {
            /** Barcode assigned to this sellable item. */
            "barcode"?: string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Reason the variant's delivery configuration needs attention. Value enum:
             * "delivery_profile_missing", "delivery_profile_inactive".
             */
            "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
            /**
             * Whether the variant's delivery configuration is ready, needs attention, or does not
             * apply. Value enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /**
             * Identifier of the assigned delivery profile. Digital and service variants opt in to
             * manual delivery with a required manual profile whose allowed_types is exactly
             * [digital] or [service], matching the product type. Without a profile, delivery does
             * not apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
             */
            "delivery_profile_id"?: string;
            /**
             * Images shown for the variant: its own gallery when nonempty, otherwise the product's
             * gallery. [] (Value): {@link ImageAttachment}. An image attached to a resource, with
             * its display properties and attachment metadata.
             */
            "effective_images": Array<ImageAttachment>;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Gift card issuance terms. face_value_money is the reference denomination;
             * unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded
             * to the nearest cent with ties up. Gift card settings on a product variant: its
             * `face_value_money`, price mode (face value or discounted), and bounds for custom
             * amounts.
             */
            "gift_card_configuration"?: GiftCardProductConfiguration;
            /**
             * The variant's own images in display order. An empty gallery inherits the product's
             * images. [] (Value): {@link ImageAttachment}. An image attached to a resource, with
             * its display properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /**
             * Whether one order line can buy this variant now, evaluated at read time against
             * `settings.inventory.default_routing_source` with the same routing pay uses. Returned
             * by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET
             * /v1/products/{product_id}/variants`, and variants included by `expand=variants` on
             * product reads; write responses and webhooks omit it. Advisory: it holds no stock, so
             * pay can still find the stock gone. Variants that share an inventory item are each
             * evaluated alone. It ignores the variant's `status`, so also check
             * `is_available_for_sale`. It is outside `version` and sends no event of its own: read
             * the variant again after `inventory_level.updated`. Stock availability of a variant
             * for one order line, computed when the variant is read.
             */
            "inventory_availability"?: ProductVariantInventoryAvailability;
            /**
             * The inventory item this variant consumes. Present exactly when inventory_tracking is
             * tracked. Several variants may share one inventory item. Example:
             * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
             */
            "inventory_item_id"?: string;
            /**
             * Whether sales of this variant consume an inventory item. Value enum: "not_tracked",
             * "tracked".
             */
            "inventory_tracking": "not_tracked" | "tracked" | (string & {});
            /**
             * Whether the variant and its product are both active. Stock isn't considered;
             * `inventory_availability` reports it on reads.
             */
            "is_available_for_sale": boolean;
            /**
             * Whether effective_images comes from the product's gallery because this variant's
             * gallery is empty.
             */
            "is_inheriting_product_images": boolean;
            /**
             * Stored Flint line-item tax category. New digital-product variants default to
             * digital_goods when omitted. The stored value remains editable. Unset uses the
             * merchant default. Value enum: "general", "physical_goods", "digital_goods",
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
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. Also included when `expand` includes `variants.modifier_set`. anyOf[1]
             * (Value): {@link ModifierSet}. A reusable collection of customization groups.
             * anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Variant name that distinguishes it from the product's other variants. */
            "name"?: string;
            /** Display order among the product's variants, starting at zero. Format: int32. */
            "position": number;
            /**
             * Identifier of the product this variant belongs to. Example:
             * "prod_01KEZF7C00BVSHCNWVH528HB66".
             */
            "product_id": string;
            /**
             * Net unit prices in ascending minimum_quantity order. The largest minimum not above
             * the line quantity applies; otherwise the base unit price applies. Empty when no
             * breaks are configured. Gift card variants have no breaks. maxItems: 10. [] (Value):
             * {@link QuantityPriceBreak}. A net unit price that applies when one catalog line
             * reaches minimum_quantity.
             */
            "quantity_price_breaks": Array<QuantityPriceBreak>;
            /**
             * Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines
             * created while this date is after today in the merchant timezone are pre-orders.
             * Existing order lines keep their release date. Format: date. Example: "2026-08-02".
             */
            "release_date": string | null;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * SelectedProductOption}. An option and value chosen for a product variant, such as
             * size Large.
             */
            "selected_options": Array<SelectedProductOption>;
            /** Stock keeping unit assigned to this sellable item. */
            "sku"?: string;
            /**
             * Variant lifecycle status. Archived variants remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** Whether this item is subject to tax. */
            "taxable"?: boolean;
            /**
             * Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`,
             * `width`, and `height` in the given `unit`.
             */
            "unit_dimensions"?: Dimensions;
            /**
             * Base unit price before quantity price breaks, in the currency's smallest unit.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "unit_price_money": MoneyValue;
            /**
             * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms,
             * ounces, or pounds, used in delivery profile configuration.
             */
            "unit_weight"?: Weight;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Stable identifier of the product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "variant_id": string;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "product_variant.created". */
    "event_type"?: "product_variant.created";
});
/** Stock availability of a variant for one order line, computed when the variant is read. */
export type ProductVariantInventoryAvailability = {
    /**
     * The largest quantity of this variant one order line could route from
     * `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed
     * stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or
     * `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens
     * that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other
     * credentials, which still receive `status`. Format: int64. minimum: 0. maximum: 9999.
     */
    "available_quantity"?: number | null;
    /**
     * The routing source evaluated: the merchant's default, with
     * `inventory_allocation_policy_revision_id` set to the revision current at the read when it is
     * a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default
     * is set. anyOf[1] (Value): {@link InventoryRoutingSource}. Where an order, payment link, or
     * reservation routes inventory from: a fixed Location, an inventory allocation policy, or one
     * policy revision. anyOf[2] (Value): null.
     */
    "inventory_routing_source": ((InventoryRoutingSource) | (null));
    /**
     * Whether one order line can buy the variant now. Value enum: "in_stock", "out_of_stock",
     * "not_tracked", "routing_source_required".
     */
    "status": "in_stock" | "out_of_stock" | "not_tracked" | "routing_source_required" | (string & {});
};
/** A page of `ProductVariant` objects. */
export type ProductVariantListResponse = {
    /**
     * The requested product variant data. [] (Value): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data": Array<ProductVariant>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * A single variant witness on product list rows only. With exact variant filters, the first
 * variant by position, then variant_id, satisfying every exact predicate. Otherwise, the first
 * variant in that order whose SKU matches query. Use the paginated nested variant list to
 * enumerate every match.
 */
export type ProductVariantMatch = {
    /** Name of the matching variant, when set. */
    "name"?: string;
    /**
     * Identifier of the product the matching variant belongs to. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /** Stock keeping unit of the matching variant, when set. */
    "sku"?: string;
    /**
     * Identifier of the variant that matched the product list's variant filters or query. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/** The request body for: Create product variant. */
export type ProductVariantRequest = {
    /** Barcode assigned to this sellable item. minLength: 1. maxLength: 100. */
    "barcode"?: string;
    /**
     * Delivery profile to assign. Digital and service products require requirement required,
     * resolution_mode manual, and allowed_types exactly [digital] or [service], matching the
     * product type. Omit it to leave delivery not_applicable with no delivery requirement; digital
     * and service products never use a default. Physical products retain their default profile
     * behavior. Fees and gift cards reject profiles. minLength: 1. Example:
     * "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Only valid for product_type gift_card. Omission creates a fixed denomination at
     * unit_price_money. Discounted pricing requires an explicit face_value_money and price_mode
     * discounted. Gift card settings on a product variant: its `face_value_money`, price mode
     * (face value or discounted), and bounds for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfiguration;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * New inventory item to create and track for this variant. Send either inventory_item or
     * inventory_item_id. Inventory item details you supply when creating an inventory item for a
     * product variant: `name`, `sku`, `barcode`, and metadata.
     */
    "inventory_item"?: InventoryItemCreateRequest;
    /**
     * Identifier of an existing inventory item to track for this variant. Send either
     * inventory_item_id or inventory_item. minLength: 1. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: string;
    /**
     * Flint line-item tax category to store. Omit for a digital product to store digital_goods;
     * explicit categories are preserved. For other product types, omission uses the merchant
     * default. Value enum: "general", "physical_goods", "digital_goods", "software", "saas",
     * "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods",
     * "admission".
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
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /**
     * Variant name that distinguishes it from the product's other variants. minLength: 1.
     * maxLength: 255.
     */
    "name"?: string;
    /**
     * Display order among the product's variants, starting at zero. When omitted in the variants
     * array on product create, defaults to the variant's array index. For default_variant,
     * defaults to zero. When creating a variant separately, defaults to the highest position among
     * the product's variants plus one, or zero for the first variant. Format: int32.
     */
    "position"?: number;
    /**
     * Up to 10 quantity price breaks. Omit the field or send [] for none. Each minimum_quantity is
     * at least 2 and strictly increases. Each unit price is positive, strictly decreases from the
     * previous price starting with the base unit price, and uses the base price's currency. Gift
     * card variants reject a nonempty array. null is invalid. maxItems: 10. [] (Value): {@link
     * QuantityPriceBreak}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks"?: Array<QuantityPriceBreak>;
    /**
     * Calendar release date in YYYY-MM-DD format. Omit or send null for no release date. Lines
     * created before this date in the merchant timezone are pre-orders. Format: date. minLength:
     * 1. Example: "2026-08-02".
     */
    "release_date"?: string | null;
    /**
     * Option name and value selections for this variant. When present on an update, replaces the
     * entire selection. Omit to leave unchanged. Select one active value for every active option.
     * null is invalid. [] (Value): {@link ProductVariantSelectedOptionRequest}. An option name and
     * value you choose to identify a product variant, such as Size and Large.
     */
    "selected_options"?: Array<ProductVariantSelectedOptionRequest>;
    /** Stock keeping unit assigned to this sellable item. minLength: 1. maxLength: 100. */
    "sku"?: string;
    /**
     * Whether the variant is active or inactive. An inactive variant cannot be sold. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Base unit price in the currency's smallest unit. It applies below the first quantity price
     * break. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
};
