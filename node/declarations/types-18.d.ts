import type {
    DeliveryLocationSet,
    DeliveryEligibilityMismatch,
    DeliveryEligibilityExpression,
    DeliveryEstimateRule,
    DeliveryEligibilityExpressionRequest,
    DeliveryEligibilityExpressionRequestInput,
    DeliveryEstimateRuleRequestInput
} from './types-17.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-38.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { ResponseMeta } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryLocationSetRequestInput } from './types-8.js';
import type { DisputesAcceptParams } from './types-24.js';
import type { UpdateDeliveryLocationSetRequestInput } from './types-66.js';
import type { Address } from './types-0.js';
import type { SubscriptionCounts } from './types-61.js';
import type { BuyerInstructionsConfig, BuyerInstructionsConfigRequestInput } from './types-2.js';
import type {
    DeliveryPricingStrategy,
    DeliveryPricingStrategyCreateRequest,
    DeliveryPricingStrategyCreateRequestInput,
    DeliveryPricingStrategyRequest,
    DeliveryPricingStrategyRequestInput
} from './types-19.js';
import type { DeliveryRecipientRequirement, DeliveryRecipientRequirementRequestInput } from './types-21.js';
import type {
    DeliveryScheduleWindowRule,
    DeliveryTransitTimeRule,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryTransitTimeRuleRequestInput
} from './types-22.js';
export type DeliveryLocationSetArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryLocationSet>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_location_set.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryLocationSet>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_location_set.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_location_set.archived";
});
/**
 * The `delivery_location_set.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryLocationSetArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations. The location IDs in a delivery
     * location set. object.created_at (Required): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations. The location IDs in a delivery location set. created_at (Required): string.
         * Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_location_set_revision_id (Required): string. Immutable revision used
         * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". delivery_location_set_id
         * (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /** Current member Locations. The location IDs in a delivery location set. */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryLocationSet>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_location_set.archived". */
    "event_type"?: "delivery_location_set.archived";
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
 * The `delivery_location_set.archived` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryLocationSetArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations. The location IDs in a delivery
     * location set. object.created_at (Required): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations. The location IDs in a delivery location set. created_at (Required): string.
         * Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_location_set_revision_id (Required): string. Immutable revision used
         * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". delivery_location_set_id
         * (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /** Current member Locations. The location IDs in a delivery location set. */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryLocationSet>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_location_set.archived". */
    "event_type"?: "delivery_location_set.archived";
});
/** The location IDs in a delivery location set. */
export type DeliveryLocationSetConfiguration = {
    /**
     * IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most
     * 25. [] (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
};
/** The location IDs in a delivery location set. */
export type DeliveryLocationSetConfigurationInput = DeliveryLocationSetConfiguration;
export type DeliveryLocationSetCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_location_set.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_location_set.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_location_set.created";
});
/**
 * The `delivery_location_set.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryLocationSetCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations. The location IDs in a delivery
     * location set. object.created_at (Required): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations. The location IDs in a delivery location set. created_at (Required): string.
         * Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_location_set_revision_id (Required): string. Immutable revision used
         * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". delivery_location_set_id
         * (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /** Current member Locations. The location IDs in a delivery location set. */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_location_set.created". */
    "event_type"?: "delivery_location_set.created";
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
 * The `delivery_location_set.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryLocationSetCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations. The location IDs in a delivery
     * location set. object.created_at (Required): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations. The location IDs in a delivery location set. created_at (Required): string.
         * Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_location_set_revision_id (Required): string. Immutable revision used
         * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". delivery_location_set_id
         * (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /** Current member Locations. The location IDs in a delivery location set. */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_location_set.created". */
    "event_type"?: "delivery_location_set.created";
});
/** A page of `DeliveryLocationSet` objects. */
export type DeliveryLocationSetListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * DeliveryLocationSet}. The locations available to a delivery method.
     */
    "data": Array<DeliveryLocationSet>;
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
/** A response containing `DeliveryLocationSet` data. */
export type DeliveryLocationSetResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The locations available
     * to a delivery method.
     */
    "data": DeliveryLocationSet;
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
export type DeliveryLocationSetUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryLocationSet>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_location_set.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryLocationSet>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_location_set.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_location_set.updated";
});
/**
 * The `delivery_location_set.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryLocationSetUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations. The location IDs in a delivery
     * location set. object.created_at (Required): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations. The location IDs in a delivery location set. created_at (Required): string.
         * Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_location_set_revision_id (Required): string. Immutable revision used
         * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". delivery_location_set_id
         * (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /** Current member Locations. The location IDs in a delivery location set. */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryLocationSet>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_location_set.updated". */
    "event_type"?: "delivery_location_set.updated";
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
 * The `delivery_location_set.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryLocationSetUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations. The location IDs in a delivery
     * location set. object.created_at (Required): string. Time the location set was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations. The location IDs in a delivery location set. created_at (Required): string.
         * Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_location_set_revision_id (Required): string. Immutable revision used
         * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". delivery_location_set_id
         * (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /** Current member Locations. The location IDs in a delivery location set. */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryLocationSet>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_location_set.updated". */
    "event_type"?: "delivery_location_set.updated";
});
export type DeliveryLocationSetsCreateParams = (InputValue<CreateDeliveryLocationSetRequestInput>)
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
export type DeliveryLocationSetsDeleteParams = {
    /**
     * Optional current resource version. The delete is rejected if the resource changed after this
     * version was read. Format: uint64. minimum: 1. maximum: 9007199254740991.
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
export type DeliveryLocationSetsGetParams = DisputesAcceptParams;
export type DeliveryLocationSetsListParams = {
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
     * Search across delivery_location_set_id, name, and external_reference_id. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as dls_01. maxLength: 255.
     */
    "query"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
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
     * Filter by an active current method that references this resource. pattern:
     * ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: InputValue<string>;
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
export type DeliveryLocationSetsUpdateParams = (UpdateDeliveryLocationSetRequestInput)
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
/** A pickup location shown on a delivery option: its name, address, instructions, and timezone. */
export type DeliveryLocationSummaryResource = {
    /**
     * Street address of the Location. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
    /** Buyer-visible pickup instructions for the Location. */
    "instructions"?: string;
    /** ID of the Location buyers can collect from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /** Name of the Location, as buyers see it when choosing pickup. */
    "name": string;
    /** Uses an IANA time zone name. */
    "timezone"?: string;
};
/**
 * A merchant-only diagnostic explaining why a delivery method produced no option, with its
 * outcome, recommended action, and eligibility mismatches.
 */
export type DeliveryMerchantDiagnostic = {
    /**
     * Stable reason the method did not produce an option. - `eligibility_no_match`: The configured
     * eligibility expression excluded the method. - `method_unavailable`: The method was
     * unavailable for this evaluation. - `input_required`: The buyer or caller must provide more
     * information to evaluate the method. - `checkout_context_required`: A checkout session is
     * required to evaluate the method. - `dependency_failure`: Flint could not check whether the
     * method is available. - `dependency_revoked`: The method revision or a dependency was
     * revoked. Publish a corrected revision, rotate the callback signing secret, or choose another
     * method. Value enum: "eligibility_no_match", "method_unavailable", "input_required",
     * "checkout_context_required", "dependency_failure", "dependency_revoked".
     */
    "code": "eligibility_no_match"
        | "method_unavailable"
        | "input_required"
        | "checkout_context_required"
        | "dependency_failure"
        | "dependency_revoked"
        | (string & {});
    /**
     * ID of the method that was evaluated. Omitted when the diagnostic is about a Location.
     * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: string;
    /**
     * ID of the method revision that was evaluated. Omitted when the diagnostic is about a
     * Location. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id"?: string;
    /**
     * ID to quote when you ask Flint about this diagnostic. Example:
     * "ddiag_01KEZF7C002JPVD08857RGDGPC".
     */
    "diagnostic_id": string;
    /**
     * Configured eligibility predicates that conclusively rejected the method. Present only for
     * eligibility_no_match. [] (Value): {@link DeliveryEligibilityMismatch}. An eligibility
     * condition that rejected a delivery method, with its condition type, its path in the
     * expression, and the field tested.
     */
    "eligibility_mismatches"?: Array<DeliveryEligibilityMismatch>;
    /** Time Flint recorded this diagnostic. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * What happened when Flint evaluated the method or Location. Value enum: "unavailable",
     * "input_required", "cannot_calculate", "requires_checkout_context".
     */
    "outcome": "unavailable" | "input_required" | "cannot_calculate" | "requires_checkout_context" | (string & {});
    /**
     * What the merchant can do to get an option. Value enum: "review_configuration",
     * "provide_input", "create_checkout", "retry".
     */
    "recommended_action": "review_configuration" | "provide_input" | "create_checkout" | "retry" | (string & {});
    /** Whether trying again later can succeed. */
    "retryable": boolean;
    /** What the diagnostic is about. Value enum: "method". */
    "scope": "method" | (string & {});
    /** Plain-language explanation for the merchant. */
    "summary": string;
};
/** A configured shipping, pickup, or local delivery option. */
export type DeliveryMethod = {
    /**
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes.
     */
    "configuration": DeliveryMethodConfiguration;
    /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Immutable revision currently used for new quotes. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "current_delivery_method_revision_id": string;
    /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
    "delivery_method_id": string;
    /**
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B".
     */
    "delivery_revocation_id": string | null;
    /** Optional buyer-facing description. */
    "description"?: string;
    /** Ascending display order among methods. Format: int32. */
    "display_position": number;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing method name. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * How many subscriptions use this method, by status. Counts of subscriptions by status:
     * active, past due, and paused.
     */
    "subscription_counts": SubscriptionCounts;
    /** Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup". */
    "type": "shipment" | "local_delivery" | "pickup" | (string & {});
    /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
    "version": number;
};
export type DeliveryMethodActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_method.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_method.activated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_method.activated";
});
/**
 * The `delivery_method.activated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryMethodActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Counts of
     * subscriptions by status: active, past due, and paused. object.type (Required): string.
     * Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * object.updated_at (Required): string. Time the method last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency
     * version for method writes. Format: uint64. minimum: 1. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Counts of subscriptions by status:
         * active, past due, and paused. type (Required): string. Delivery mode this method offers.
         * Value enum: "shipment", "local_delivery", "pickup". updated_at (Required): string. Time
         * the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
         * minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Counts of subscriptions by
             * status: active, past due, and paused.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_method.activated". */
    "event_type"?: "delivery_method.activated";
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
 * The `delivery_method.activated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type DeliveryMethodActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Counts of
     * subscriptions by status: active, past due, and paused. object.type (Required): string.
     * Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * object.updated_at (Required): string. Time the method last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency
     * version for method writes. Format: uint64. minimum: 1. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Counts of subscriptions by status:
         * active, past due, and paused. type (Required): string. Delivery mode this method offers.
         * Value enum: "shipment", "local_delivery", "pickup". updated_at (Required): string. Time
         * the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
         * minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Counts of subscriptions by
             * status: active, past due, and paused.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_method.activated". */
    "event_type"?: "delivery_method.activated";
});
export type DeliveryMethodArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_method.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_method.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_method.archived";
});
/**
 * The `delivery_method.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryMethodArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Counts of
     * subscriptions by status: active, past due, and paused. object.type (Required): string.
     * Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * object.updated_at (Required): string. Time the method last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency
     * version for method writes. Format: uint64. minimum: 1. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Counts of subscriptions by status:
         * active, past due, and paused. type (Required): string. Delivery mode this method offers.
         * Value enum: "shipment", "local_delivery", "pickup". updated_at (Required): string. Time
         * the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
         * minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Counts of subscriptions by
             * status: active, past due, and paused.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_method.archived". */
    "event_type"?: "delivery_method.archived";
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
 * The `delivery_method.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryMethodArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Counts of
     * subscriptions by status: active, past due, and paused. object.type (Required): string.
     * Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * object.updated_at (Required): string. Time the method last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency
     * version for method writes. Format: uint64. minimum: 1. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Counts of subscriptions by status:
         * active, past due, and paused. type (Required): string. Delivery mode this method offers.
         * Value enum: "shipment", "local_delivery", "pickup". updated_at (Required): string. Time
         * the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
         * minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Counts of subscriptions by
             * status: active, past due, and paused.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_method.archived". */
    "event_type"?: "delivery_method.archived";
});
/**
 * How a delivery method works: its origin, pricing, eligibility, timing estimate, tax settings,
 * recipient requirements, and option lifetimes.
 */
export type DeliveryMethodConfiguration = {
    /**
     * Controls whether checkout collects buyer instructions for this method. Controls buyer
     * instructions for a delivery option. Omit it from a method configuration to disable
     * instruction collection.
     */
    "buyer_instructions"?: BuyerInstructionsConfig;
    /**
     * Tax category of the delivery charge, which decides its automatic tax and appears in tax
     * records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset,
     * Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for
     * pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or
     * send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping,
     * delivery, handling, and surcharge at the general rate at the charge location, including the
     * store for pickup. `null` when the method inherits the default delivery tax category from
     * settings. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category": "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpression;
    /**
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. How a delivery method estimates timing, chosen by `type`: no estimate, a
     * transit time, or a schedule window.
     */
    "estimate": DeliveryEstimateRule;
    /**
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds": number;
    /**
     * Where delivery starts. A method can use a fixed location or a delivery location set;
     * origin.type determines allocation or buyer pickup behavior. Where a delivery method starts,
     * chosen by `type`: a fixed location, an allocated group of locations, or a collection of
     * pickup locations.
     */
    "origin": DeliveryMethodOriginSelector;
    /**
     * How Flint calculates the delivery charge. How a delivery method sets its price, selected by
     * `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`,
     * `callback`, or `caller_supplied`) is set.
     */
    "pricing": DeliveryPricingStrategy;
    /**
     * Buyer-visible structured details supplied by the merchant. instructions (Optional): string.
     * Buyer-visible instructions for this method. maxLength: 2048. pickup_mode (Optional): string.
     * Required for pickup methods and rejected for other method types. Value enum: "in_store",
     * "curbside", "locker", "other". service_level (Optional): string. Buyer-visible service
     * level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local
     * delivery accepts on_demand, same_day, scheduled. Value enum: "economy", "standard",
     * "expedited", "express", "overnight", "same_day", "on_demand", "scheduled".
     */
    "public_details"?: {
        /** Buyer-visible instructions for this method. maxLength: 2048. */
        "instructions"?: string;
        /**
         * Required for pickup methods and rejected for other method types. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
        /**
         * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
         * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
         * "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled"
            | (string & {});
    };
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". [] (Value): string. Request
     * properties the callback needs. - `destination_address`: The full destination address. -
     * `destination_address.line1`: The destination street address. - `destination_address.line2`:
     * The destination apartment, suite, or other secondary address. - `destination_address.city`:
     * The destination city. - `destination_address.state`: The destination state or region. -
     * `destination_address.postal_code`: The destination postal code. -
     * `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.address.country"
        | "buyer_location.coordinate"
        | (string & {})>;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. [] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /**
     * How long after evaluation Flint guarantees a selected price, when that is later than the
     * option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table
     * prices for a cart without tracked inventory hold until the checkout's calculation expiry.
     * Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds": number;
    /**
     * Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable.
     * Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null
     * to clear it back to inheriting. `null` when the method inherits
     * `settings.tax.default_delivery_taxable`.
     */
    "taxable": boolean | null;
};
/**
 * The configuration you supply when creating a delivery method. `origin` and `pricing` are
 * required.
 */
export type DeliveryMethodConfigurationCreateRequest = ({
    /**
     * Controls whether checkout collects buyer instructions for this method. Controls buyer
     * instructions for a delivery option. Omit it from a method configuration to disable
     * instruction collection.
     */
    "buyer_instructions"?: BuyerInstructionsConfig;
    /**
     * Tax category of the delivery charge, which decides its automatic tax and appears in tax
     * records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset,
     * Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for
     * pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or
     * send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping,
     * delivery, handling, and surcharge at the general rate at the charge location, including the
     * store for pickup. Value enum: "service_fee", "shipping", "delivery", "handling",
     * "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpressionRequest;
    /**
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`:
     * none, a transit time, or a schedule window.
     */
    "estimate"?: DeliveryEstimateRule;
    /**
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds"?: number;
    /**
     * Where delivery starts. A method can use a fixed location or a delivery location set;
     * origin.type determines allocation or buyer pickup behavior. The origin you supply for a
     * delivery method, chosen by `type`: a fixed location, or locations from a delivery location
     * set or an inline list.
     */
    "origin": DeliveryMethodOriginSelectorRequest;
    /**
     * How Flint calculates the delivery charge. The pricing strategy you supply when creating a
     * delivery method. Set `type` and the matching property.
     */
    "pricing": DeliveryPricingStrategyCreateRequest;
    /**
     * Buyer-visible structured details supplied by the merchant. instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. pickup_mode
     * (Optional): string. Required for pickup methods and rejected for other method types. Value
     * enum: "in_store", "curbside", "locker", "other". service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
     * "scheduled".
     */
    "public_details"?: {
        /** Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. */
        "instructions"?: string;
        /**
         * Required for pickup methods and rejected for other method types. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
        /**
         * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
         * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
         * "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled"
            | (string & {});
    };
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". [] (Value): string. Request
     * properties the callback needs. - `destination_address`: The full destination address. -
     * `destination_address.line1`: The destination street address. - `destination_address.line2`:
     * The destination apartment, suite, or other secondary address. - `destination_address.city`:
     * The destination city. - `destination_address.state`: The destination state or region. -
     * `destination_address.postal_code`: The destination postal code. -
     * `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.address.country"
        | "buyer_location.coordinate"
        | (string & {})>;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. [] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /**
     * How long after evaluation Flint guarantees a selected price, when that is later than the
     * option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table
     * prices for a cart without tracked inventory hold until the checkout's calculation expiry.
     * Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: number;
    /**
     * Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable.
     * Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null
     * to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
/**
 * The configuration you supply when creating a delivery method. `origin` and `pricing` are
 * required.
 */
export type DeliveryMethodConfigurationCreateRequestInput = ({
    /**
     * Controls whether checkout collects buyer instructions for this method. Controls buyer
     * instructions for a delivery option. Omit it from a method configuration to disable
     * instruction collection.
     */
    "buyer_instructions"?: BuyerInstructionsConfigRequestInput;
    /**
     * Tax category of the delivery charge, which decides its automatic tax and appears in tax
     * records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset,
     * Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for
     * pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or
     * send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping,
     * delivery, handling, and surcharge at the general rate at the charge location, including the
     * store for pickup. Value enum: "service_fee", "shipping", "delivery", "handling",
     * "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`:
     * none, a transit time, or a schedule window.
     */
    "estimate"?: DeliveryEstimateRuleRequestInput;
    /**
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds"?: number;
    /**
     * Where delivery starts. A method can use a fixed location or a delivery location set;
     * origin.type determines allocation or buyer pickup behavior. The origin you supply for a
     * delivery method, chosen by `type`: a fixed location, or locations from a delivery location
     * set or an inline list.
     */
    "origin": DeliveryMethodOriginSelectorRequestInput;
    /**
     * How Flint calculates the delivery charge. The pricing strategy you supply when creating a
     * delivery method. Set `type` and the matching property.
     */
    "pricing": DeliveryPricingStrategyCreateRequestInput;
    /**
     * Buyer-visible structured details supplied by the merchant. instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. pickup_mode
     * (Optional): string. Required for pickup methods and rejected for other method types. Value
     * enum: "in_store", "curbside", "locker", "other". service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
     * "scheduled".
     */
    "public_details"?: {
        /** Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. */
        "instructions"?: string;
        /**
         * Required for pickup methods and rejected for other method types. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other";
        /**
         * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
         * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
         * "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled";
    };
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". [] (Value): string. Request
     * properties the callback needs. - `destination_address`: The full destination address. -
     * `destination_address.line1`: The destination street address. - `destination_address.line2`:
     * The destination apartment, suite, or other secondary address. - `destination_address.city`:
     * The destination city. - `destination_address.state`: The destination state or region. -
     * `destination_address.postal_code`: The destination postal code. -
     * `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.address.country"
        | "buyer_location.coordinate">;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. [] (Value): {@link DeliveryRecipientRequirementRequestInput}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirementRequestInput>;
    /**
     * How long after evaluation Flint guarantees a selected price, when that is later than the
     * option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table
     * prices for a cart without tracked inventory hold until the checkout's calculation expiry.
     * Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: number;
    /**
     * Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable.
     * Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null
     * to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
/**
 * Patch object: fields you send are applied, fields you omit are unchanged. Each key you send
 * replaces that part of the configuration as a whole, so send every field you want to keep in
 * pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field
 * describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
 * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate,
 * leave out the ID to create one, and leave out a rate to remove it. The result must be a
 * configuration you could create, including pickup_mode for pickup methods. An empty configuration
 * is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires
 * expected_version. minProperties: 1.
 */
export type DeliveryMethodConfigurationPatchRequest = {
    /**
     * Replaced as a whole: send every field you want to keep. Controls whether checkout collects
     * buyer instructions for this method. Null disables instruction collection. enabled
     * (Required): boolean. Whether checkout collects buyer instructions. label (Optional): string.
     * Checkout field label, without leading or trailing whitespace. Clients use a delivery-type
     * default when omitted. minLength: 1. maxLength: 255. placeholder (Optional): string. Checkout
     * field placeholder, without leading or trailing whitespace. Clients use a delivery-type
     * default when omitted. minLength: 1. maxLength: 500. required (Required): boolean. Whether
     * the buyer must enter instructions before selecting the option. Requires enabled=true.
     */
    "buyer_instructions"?: {
        /** Whether checkout collects buyer instructions. */
        "enabled": boolean;
        /**
         * Checkout field label, without leading or trailing whitespace. Clients use a
         * delivery-type default when omitted. minLength: 1. maxLength: 255.
         */
        "label"?: string;
        /**
         * Checkout field placeholder, without leading or trailing whitespace. Clients use a
         * delivery-type default when omitted. minLength: 1. maxLength: 500.
         */
        "placeholder"?: string;
        /**
         * Whether the buyer must enter instructions before selecting the option. Requires
         * enabled=true.
         */
        "required": boolean;
    }
        | null;
    /**
     * Tax category of the delivery charge, which decides its automatic tax and appears in tax
     * records and reporting. Automatic tax calculates service_fee, shipping, delivery, handling,
     * and surcharge at the general rate at the charge location, including the store for pickup.
     * Null uses settings.tax.default_delivery_tax_category, or, when that is unset, shipping for
     * shipment, delivery for local_delivery, or service_fee for pickup. Value enum: "service_fee",
     * "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Replaced as a whole: send every field you want to keep. Conditions that decide where this
     * method is offered. Null removes the conditions, so the method is offered everywhere the
     * merchant serves. anyOf[1] (Value): {@link DeliveryEligibilityExpressionRequest}. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes. anyOf[2] (Value): null.
     */
    "eligibility"?: ((DeliveryEligibilityExpressionRequest) | (null) | (unknown));
    /**
     * Replaced as a whole: send every field you want to keep. The buyer-visible delivery or pickup
     * estimate. Use type none when the merchant makes no timing promise. Null restores type none,
     * when the pricing type allows it. schedule_window (Optional): {@link
     * DeliveryScheduleWindowRule}. Weekly schedule of delivery windows. Set only when `type` is
     * `schedule_window`. Scheduled-window estimate rule you supply for a delivery method, defined
     * by its `availability` schedule. transit_time (Optional): {@link DeliveryTransitTimeRule}.
     * Handling and transit time. Set only when `type` is `transit_time`. Estimate rule giving a
     * delivery method's handling time and transit time as ranges of business days. type
     * (Required): string. How Flint estimates timing. Set the property named by this value. Value
     * enum: "none", "transit_time", "schedule_window".
     */
    "estimate"?: {
        /**
         * Weekly schedule of delivery windows. Set only when `type` is `schedule_window`.
         * Scheduled-window estimate rule you supply for a delivery method, defined by its
         * `availability` schedule.
         */
        "schedule_window"?: DeliveryScheduleWindowRule;
        /**
         * Handling and transit time. Set only when `type` is `transit_time`. Estimate rule giving
         * a delivery method's handling time and transit time as ranges of business days.
         */
        "transit_time"?: DeliveryTransitTimeRule;
        /**
         * How Flint estimates timing. Set the property named by this value. Value enum: "none",
         * "transit_time", "schedule_window".
         */
        "type": "none" | "transit_time" | "schedule_window" | (string & {});
    }
        | null;
    /**
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Null restores 0 for fixed, tiered, or rate_table
     * pricing. It is invalid for calculated, callback, or caller_supplied pricing. Format: int64.
     * minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds"?: number | null;
    /**
     * Replaced as a whole: send every field you want to keep. Where delivery starts. A method can
     * use a fixed location or a delivery location set; origin.type determines allocation or buyer
     * pickup behavior. Null is invalid. The origin you supply for a delivery method, chosen by
     * `type`: a fixed location, or locations from a delivery location set or an inline list.
     */
    "origin"?: DeliveryMethodOriginSelectorRequest;
    /**
     * Replaced as a whole: send every field you want to keep. How Flint calculates the delivery
     * charge. Null is invalid. The pricing strategy you supply when updating a delivery method.
     * Set `type` and the matching property.
     */
    "pricing"?: DeliveryPricingStrategyRequest;
    /**
     * Replaced as a whole: send every field you want to keep. Buyer-visible structured details
     * supplied by the merchant. Null removes the public details; pickup methods still require
     * pickup_mode. minProperties: 1. instructions (Optional): string. Buyer-visible instructions
     * for this method. minLength: 1. maxLength: 2048. pickup_mode (Optional): string. Required for
     * pickup methods and rejected for other method types. Value enum: "in_store", "curbside",
     * "locker", "other". service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day", "on_demand", "scheduled".
     */
    "public_details"?: {
        /** Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. */
        "instructions"?: string;
        /**
         * Required for pickup methods and rejected for other method types. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
        /**
         * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
         * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
         * "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled"
            | (string & {});
    }
        | null;
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive. Use []
     * to clear it. Null is invalid. maxItems: 12. uniqueItems: true. [] enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". [] (Value): string. Request
     * properties the callback needs. - `destination_address`: The full destination address. -
     * `destination_address.line1`: The destination street address. - `destination_address.line2`:
     * The destination apartment, suite, or other secondary address. - `destination_address.city`:
     * The destination city. - `destination_address.state`: The destination state or region. -
     * `destination_address.postal_code`: The destination postal code. -
     * `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.address.country"
        | "buyer_location.coordinate"
        | (string & {})>;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Use [] to clear it. Null is invalid. [] (Value): {@link
     * DeliveryRecipientRequirement}. Says whether a recipient field (`name`, `email`, or `phone`)
     * is required for a delivery method, and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /**
     * How long after evaluation Flint guarantees a selected price, when that is later than the
     * option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table
     * prices for a cart without tracked inventory hold until the checkout's calculation expiry.
     * Null restores 0, which uses the option expiry. Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: number | null;
    /**
     * Whether the delivery charge is taxable. Null follows tax.default_delivery_taxable in the
     * merchant's settings.
     */
    "taxable"?: boolean | null;
};
/**
 * Patch object: fields you send are applied, fields you omit are unchanged. Each key you send
 * replaces that part of the configuration as a whole, so send every field you want to keep in
 * pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field
 * describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
 * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate,
 * leave out the ID to create one, and leave out a rate to remove it. The result must be a
 * configuration you could create, including pickup_mode for pickup methods. An empty configuration
 * is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires
 * expected_version. minProperties: 1.
 */
export type DeliveryMethodConfigurationPatchRequestInput = {
    /**
     * Replaced as a whole: send every field you want to keep. Controls whether checkout collects
     * buyer instructions for this method. Null disables instruction collection. enabled
     * (Required): boolean. Whether checkout collects buyer instructions. label (Optional): string.
     * Checkout field label, without leading or trailing whitespace. Clients use a delivery-type
     * default when omitted. minLength: 1. maxLength: 255. placeholder (Optional): string. Checkout
     * field placeholder, without leading or trailing whitespace. Clients use a delivery-type
     * default when omitted. minLength: 1. maxLength: 500. required (Required): boolean. Whether
     * the buyer must enter instructions before selecting the option. Requires enabled=true.
     */
    "buyer_instructions"?: {
        /** Whether checkout collects buyer instructions. */
        "enabled": boolean;
        /**
         * Checkout field label, without leading or trailing whitespace. Clients use a
         * delivery-type default when omitted. minLength: 1. maxLength: 255.
         */
        "label"?: string;
        /**
         * Checkout field placeholder, without leading or trailing whitespace. Clients use a
         * delivery-type default when omitted. minLength: 1. maxLength: 500.
         */
        "placeholder"?: string;
        /**
         * Whether the buyer must enter instructions before selecting the option. Requires
         * enabled=true.
         */
        "required": boolean;
    }
        | null;
    /**
     * Tax category of the delivery charge, which decides its automatic tax and appears in tax
     * records and reporting. Automatic tax calculates service_fee, shipping, delivery, handling,
     * and surcharge at the general rate at the charge location, including the store for pickup.
     * Null uses settings.tax.default_delivery_tax_category, or, when that is unset, shipping for
     * shipment, delivery for local_delivery, or service_fee for pickup. Value enum: "service_fee",
     * "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Replaced as a whole: send every field you want to keep. Conditions that decide where this
     * method is offered. Null removes the conditions, so the method is offered everywhere the
     * merchant serves. anyOf[1] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. anyOf[2] (Value): null.
     */
    "eligibility"?: ((DeliveryEligibilityExpressionRequestInput) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. The buyer-visible delivery or pickup
     * estimate. Use type none when the merchant makes no timing promise. Null restores type none,
     * when the pricing type allows it. schedule_window (Optional): {@link
     * DeliveryScheduleWindowRuleRequestInput}. Weekly schedule of delivery windows. Set only when
     * `type` is `schedule_window`. Scheduled-window estimate rule you supply for a delivery
     * method, defined by its `availability` schedule. transit_time (Optional): {@link
     * DeliveryTransitTimeRuleRequestInput}. Handling and transit time. Set only when `type` is
     * `transit_time`. Estimate rule giving a delivery method's handling time and transit time as
     * ranges of business days. type (Required): string. How Flint estimates timing. Set the
     * property named by this value. Value enum: "none", "transit_time", "schedule_window".
     */
    "estimate"?: {
        /**
         * Weekly schedule of delivery windows. Set only when `type` is `schedule_window`.
         * Scheduled-window estimate rule you supply for a delivery method, defined by its
         * `availability` schedule.
         */
        "schedule_window"?: DeliveryScheduleWindowRuleRequestInput;
        /**
         * Handling and transit time. Set only when `type` is `transit_time`. Estimate rule giving
         * a delivery method's handling time and transit time as ranges of business days.
         */
        "transit_time"?: DeliveryTransitTimeRuleRequestInput;
        /**
         * How Flint estimates timing. Set the property named by this value. Value enum: "none",
         * "transit_time", "schedule_window".
         */
        "type": "none" | "transit_time" | "schedule_window";
    }
        | null;
    /**
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Null restores 0 for fixed, tiered, or rate_table
     * pricing. It is invalid for calculated, callback, or caller_supplied pricing. Format: int64.
     * minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds"?: number | null;
    /**
     * Replaced as a whole: send every field you want to keep. Where delivery starts. A method can
     * use a fixed location or a delivery location set; origin.type determines allocation or buyer
     * pickup behavior. Null is invalid. The origin you supply for a delivery method, chosen by
     * `type`: a fixed location, or locations from a delivery location set or an inline list.
     */
    "origin"?: DeliveryMethodOriginSelectorRequestInput;
    /**
     * Replaced as a whole: send every field you want to keep. How Flint calculates the delivery
     * charge. Null is invalid. The pricing strategy you supply when updating a delivery method.
     * Set `type` and the matching property.
     */
    "pricing"?: DeliveryPricingStrategyRequestInput;
    /**
     * Replaced as a whole: send every field you want to keep. Buyer-visible structured details
     * supplied by the merchant. Null removes the public details; pickup methods still require
     * pickup_mode. minProperties: 1. instructions (Optional): string. Buyer-visible instructions
     * for this method. minLength: 1. maxLength: 2048. pickup_mode (Optional): string. Required for
     * pickup methods and rejected for other method types. Value enum: "in_store", "curbside",
     * "locker", "other". service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day", "on_demand", "scheduled".
     */
    "public_details"?: {
        /** Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. */
        "instructions"?: string;
        /**
         * Required for pickup methods and rejected for other method types. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other";
        /**
         * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
         * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
         * "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled";
    }
        | null;
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive. Use []
     * to clear it. Null is invalid. maxItems: 12. uniqueItems: true. [] enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". [] (Value): string. Request
     * properties the callback needs. - `destination_address`: The full destination address. -
     * `destination_address.line1`: The destination street address. - `destination_address.line2`:
     * The destination apartment, suite, or other secondary address. - `destination_address.city`:
     * The destination city. - `destination_address.state`: The destination state or region. -
     * `destination_address.postal_code`: The destination postal code. -
     * `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.address.country"
        | "buyer_location.coordinate">;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. Use [] to clear it. Null is invalid. [] (Value): {@link
     * DeliveryRecipientRequirementRequestInput}. Says whether a recipient field (`name`, `email`,
     * or `phone`) is required for a delivery method, and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirementRequestInput>;
    /**
     * How long after evaluation Flint guarantees a selected price, when that is later than the
     * option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table
     * prices for a cart without tracked inventory hold until the checkout's calculation expiry.
     * Null restores 0, which uses the option expiry. Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: number | null;
    /**
     * Whether the delivery charge is taxable. Null follows tax.default_delivery_taxable in the
     * merchant's settings.
     */
    "taxable"?: boolean | null;
};
/**
 * The configuration you supply for a delivery method: origin, pricing, eligibility, timing
 * estimate, tax settings, and recipient requirements.
 */
export type DeliveryMethodConfigurationRequest = ({
    /**
     * Controls whether checkout collects buyer instructions for this method. Controls buyer
     * instructions for a delivery option. Omit it from a method configuration to disable
     * instruction collection.
     */
    "buyer_instructions"?: BuyerInstructionsConfig;
    /**
     * Tax category of the delivery charge, which decides its automatic tax and appears in tax
     * records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset,
     * Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for
     * pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or
     * send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping,
     * delivery, handling, and surcharge at the general rate at the charge location, including the
     * store for pickup. Value enum: "service_fee", "shipping", "delivery", "handling",
     * "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpressionRequest;
    /**
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`:
     * none, a transit time, or a schedule window.
     */
    "estimate"?: DeliveryEstimateRule;
    /**
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds"?: number;
    /**
     * Where delivery starts. A method can use a fixed location or a delivery location set;
     * origin.type determines allocation or buyer pickup behavior. The origin you supply for a
     * delivery method, chosen by `type`: a fixed location, or locations from a delivery location
     * set or an inline list.
     */
    "origin": DeliveryMethodOriginSelectorRequest;
    /**
     * How Flint calculates the delivery charge. The pricing strategy you supply when updating a
     * delivery method. Set `type` and the matching property.
     */
    "pricing": DeliveryPricingStrategyRequest;
    /**
     * Buyer-visible structured details supplied by the merchant. instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. pickup_mode
     * (Optional): string. Required for pickup methods and rejected for other method types. Value
     * enum: "in_store", "curbside", "locker", "other". service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
     * "scheduled".
     */
    "public_details"?: {
        /** Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. */
        "instructions"?: string;
        /**
         * Required for pickup methods and rejected for other method types. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
        /**
         * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
         * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
         * "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled"
            | (string & {});
    };
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". [] (Value): string. Request
     * properties the callback needs. - `destination_address`: The full destination address. -
     * `destination_address.line1`: The destination street address. - `destination_address.line2`:
     * The destination apartment, suite, or other secondary address. - `destination_address.city`:
     * The destination city. - `destination_address.state`: The destination state or region. -
     * `destination_address.postal_code`: The destination postal code. -
     * `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.address.country"
        | "buyer_location.coordinate"
        | (string & {})>;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. [] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /**
     * How long after evaluation Flint guarantees a selected price, when that is later than the
     * option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table
     * prices for a cart without tracked inventory hold until the checkout's calculation expiry.
     * Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: number;
    /**
     * Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable.
     * Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null
     * to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
/**
 * The configuration you supply for a delivery method: origin, pricing, eligibility, timing
 * estimate, tax settings, and recipient requirements.
 */
export type DeliveryMethodConfigurationRequestInput = ({
    /**
     * Controls whether checkout collects buyer instructions for this method. Controls buyer
     * instructions for a delivery option. Omit it from a method configuration to disable
     * instruction collection.
     */
    "buyer_instructions"?: BuyerInstructionsConfigRequestInput;
    /**
     * Tax category of the delivery charge, which decides its automatic tax and appears in tax
     * records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset,
     * Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for
     * pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or
     * send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping,
     * delivery, handling, and surcharge at the general rate at the charge location, including the
     * store for pickup. Value enum: "service_fee", "shipping", "delivery", "handling",
     * "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Conditions that decide where this method is offered. Omit this field to offer the method
     * everywhere the merchant serves. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no
     * timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`:
     * none, a transit time, or a schedule window.
     */
    "estimate"?: DeliveryEstimateRuleRequestInput;
    /**
     * Minimum remaining quote lifetime required before Flint offers this method. Required for
     * calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be
     * less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds"?: number;
    /**
     * Where delivery starts. A method can use a fixed location or a delivery location set;
     * origin.type determines allocation or buyer pickup behavior. The origin you supply for a
     * delivery method, chosen by `type`: a fixed location, or locations from a delivery location
     * set or an inline list.
     */
    "origin": DeliveryMethodOriginSelectorRequestInput;
    /**
     * How Flint calculates the delivery charge. The pricing strategy you supply when updating a
     * delivery method. Set `type` and the matching property.
     */
    "pricing": DeliveryPricingStrategyRequestInput;
    /**
     * Buyer-visible structured details supplied by the merchant. instructions (Optional): string.
     * Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. pickup_mode
     * (Optional): string. Required for pickup methods and rejected for other method types. Value
     * enum: "in_store", "curbside", "locker", "other". service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
     * "scheduled".
     */
    "public_details"?: {
        /** Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. */
        "instructions"?: string;
        /**
         * Required for pickup methods and rejected for other method types. Value enum: "in_store",
         * "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other";
        /**
         * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
         * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
         * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
         * "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled";
    };
    /**
     * Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". [] (Value): string. Request
     * properties the callback needs. - `destination_address`: The full destination address. -
     * `destination_address.line1`: The destination street address. - `destination_address.line2`:
     * The destination apartment, suite, or other secondary address. - `destination_address.city`:
     * The destination city. - `destination_address.state`: The destination state or region. -
     * `destination_address.postal_code`: The destination postal code. -
     * `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.address.country"
        | "buyer_location.coordinate">;
    /**
     * Recipient fields this method asks for. A delivery selection can leave out required fields,
     * but payment needs them. [] (Value): {@link DeliveryRecipientRequirementRequestInput}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirementRequestInput>;
    /**
     * How long after evaluation Flint guarantees a selected price, when that is later than the
     * option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table
     * prices for a cart without tracked inventory hold until the checkout's calculation expiry.
     * Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: number;
    /**
     * Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable.
     * Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null
     * to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
export type DeliveryMethodCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_method.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_method.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_method.created";
});
/**
 * The `delivery_method.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryMethodCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Counts of
     * subscriptions by status: active, past due, and paused. object.type (Required): string.
     * Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * object.updated_at (Required): string. Time the method last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency
     * version for method writes. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Counts of subscriptions by status:
         * active, past due, and paused. type (Required): string. Delivery mode this method offers.
         * Value enum: "shipment", "local_delivery", "pickup". updated_at (Required): string. Time
         * the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
         * minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Counts of subscriptions by
             * status: active, past due, and paused.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_method.created". */
    "event_type"?: "delivery_method.created";
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
 * The `delivery_method.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryMethodCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Counts of
     * subscriptions by status: active, past due, and paused. object.type (Required): string.
     * Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * object.updated_at (Required): string. Time the method last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency
     * version for method writes. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Counts of subscriptions by status:
         * active, past due, and paused. type (Required): string. Delivery mode this method offers.
         * Value enum: "shipment", "local_delivery", "pickup". updated_at (Required): string. Time
         * the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
         * minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Counts of subscriptions by
             * status: active, past due, and paused.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_method.created". */
    "event_type"?: "delivery_method.created";
});
export type DeliveryMethodDeactivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_method.deactivated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_method.deactivated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_method.deactivated";
});
/**
 * The `delivery_method.deactivated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryMethodDeactivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Counts of
     * subscriptions by status: active, past due, and paused. object.type (Required): string.
     * Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * object.updated_at (Required): string. Time the method last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency
     * version for method writes. Format: uint64. minimum: 1. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Counts of subscriptions by status:
         * active, past due, and paused. type (Required): string. Delivery mode this method offers.
         * Value enum: "shipment", "local_delivery", "pickup". updated_at (Required): string. Time
         * the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
         * minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Counts of subscriptions by
             * status: active, past due, and paused.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_method.deactivated". */
    "event_type"?: "delivery_method.deactivated";
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
 * The `delivery_method.deactivated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type DeliveryMethodDeactivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Counts of
     * subscriptions by status: active, past due, and paused. object.type (Required): string.
     * Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * object.updated_at (Required): string. Time the method last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency
     * version for method writes. Format: uint64. minimum: 1. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Counts of subscriptions by status:
         * active, past due, and paused. type (Required): string. Delivery mode this method offers.
         * Value enum: "shipment", "local_delivery", "pickup". updated_at (Required): string. Time
         * the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
         * minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Counts of subscriptions by
             * status: active, past due, and paused.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_method.deactivated". */
    "event_type"?: "delivery_method.deactivated";
});
/** A page of `DeliveryMethod` objects. */
export type DeliveryMethodListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * DeliveryMethod}. A configured shipping, pickup, or local delivery option.
     */
    "data": Array<DeliveryMethod>;
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
/**
 * Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of
 * locations, or a collection of pickup locations.
 */
export type DeliveryMethodOriginSelector = ({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     */
    "delivery_location_set_revision_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. [] (Value): string. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * Where delivery starts. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection".
     */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection" | (string & {});
})
    & ((Exclude<DeliveryMethodOriginSelectorFixedLocation & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorAllocatedOriginGroup & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorPickupLocationCollection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `allocated_origin_group` variant of `DeliveryMethodOriginSelector`. */
export type DeliveryMethodOriginSelectorAllocatedOriginGroup = ({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     */
    "delivery_location_set_revision_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. [] (Value): string. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": unknown;
})
    & (({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
})
    | ({
    /**
     * IDs of the Locations in the group. IDs of the Locations in the group. minItems: 1. maxItems:
     * 25. uniqueItems: true. [] (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": (Array<string>) & (Array<string>);
})
    | (Record<string, unknown>)));
/** The `fixed_location` variant of `DeliveryMethodOriginSelector`. */
export type DeliveryMethodOriginSelectorFixedLocation = ({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     */
    "delivery_location_set_revision_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * IDs of the Locations in the group. [] (Value): string. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & (({
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": unknown;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
}));
/** The `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroup = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": unknown;
})
    & ((Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/** The Delivery location set selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
});
/** The Delivery location set selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group";
})
    & (({
    "location_id"?: never;
}) & ({
    "location_ids"?: never;
}));
/** The `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group";
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": ("allocated_origin_group") & ("allocated_origin_group");
})
    & ((Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput & object, readonly unknown[]>))
    & ({
    "location_id"?: never;
}));
/** The Locations selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
});
/** The Locations selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group";
})
    & (({
    "location_id"?: never;
}) & ({
    "delivery_location_set_id"?: never;
}));
/** The `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputFixedLocation = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & (({
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": unknown;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
}));
/** The `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputFixedLocationInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": "fixed_location";
})
    & (({
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": ("fixed_location") & ("fixed_location");
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
})
    & (({
    "delivery_location_set_id"?: never;
})
    & ({
    "delivery_location_set_revision_id"?: never;
})
    & ({
    "location_ids"?: never;
})));
/** The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollection = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": unknown;
})
    & ((Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/** The Delivery location set selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
});
/** The Delivery location set selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    "location_id"?: never;
}) & ({
    "location_ids"?: never;
}));
/** The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": ("pickup_location_collection") & ("pickup_location_collection");
})
    & ((Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput & object, readonly unknown[]>))
    & ({
    "location_id"?: never;
}));
/** The Locations selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
});
/** The Locations selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    "location_id"?: never;
}) & ({
    "delivery_location_set_id"?: never;
}));
/** The `pickup_location_collection` variant of `DeliveryMethodOriginSelector`. */
export type DeliveryMethodOriginSelectorPickupLocationCollection = ({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     */
    "delivery_location_set_revision_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. [] (Value): string. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": unknown;
})
    & (({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
})
    | ({
    /**
     * IDs of the Locations in the group. IDs of the Locations in the group. minItems: 1. maxItems:
     * 1000. uniqueItems: true. [] (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": (Array<string>) & (Array<string>);
})
    | (Record<string, unknown>)));
/**
 * The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations
 * from a delivery location set or an inline list.
 */
export type DeliveryMethodOriginSelectorRequest = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * Where delivery starts. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection".
     */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection" | (string & {});
})
    & ((Exclude<DeliveryMethodOriginSelectorInputFixedLocation & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroup & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations
 * from a delivery location set or an inline list.
 */
export type DeliveryMethodOriginSelectorRequestInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * Where delivery starts. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection".
     */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection";
})
    & ((Exclude<DeliveryMethodOriginSelectorInputFixedLocationInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionInput & object, readonly unknown[]>));
/** A response containing `DeliveryMethod` data. */
export type DeliveryMethodResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A configured shipping,
     * pickup, or local delivery option.
     */
    "data": DeliveryMethod;
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
export type DeliveryMethodUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_method.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_method.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_method.updated";
});
/**
 * The `delivery_method.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryMethodUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Counts of
     * subscriptions by status: active, past due, and paused. object.type (Required): string.
     * Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * object.updated_at (Required): string. Time the method last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency
     * version for method writes. Format: uint64. minimum: 1. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Counts of subscriptions by status:
         * active, past due, and paused. type (Required): string. Delivery mode this method offers.
         * Value enum: "shipment", "local_delivery", "pickup". updated_at (Required): string. Time
         * the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
         * minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Counts of subscriptions by
             * status: active, past due, and paused.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryMethod>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_method.updated". */
    "event_type"?: "delivery_method.updated";
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
