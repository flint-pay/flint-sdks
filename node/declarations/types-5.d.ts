import type { MetadataMap, MerchantWebhookEnvelope } from './types-36.js';
import type { PartnerWebhookEnvelope } from './types-42.js';
import type { ResponseMeta } from './types-51.js';
import type { SubscriptionQuantityChangeLineItemRequest, SubscriptionQuantityChangeLineItemRequestInput } from './types-60.js';
import type { SubscriptionPlanChangeLineItemRequest, SubscriptionPlanChangeLineItemRequestInput } from './types-59.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { DeliveryInputRequirement } from './types-16.js';
import type { DeliveryMerchantDiagnostic } from './types-17.js';
import type { DeliveryQuoteChoiceGroupResource } from './types-19.js';
import type {
    ErrorRemediation,
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary
} from './types-23.js';
import type { MoneyValue, MoneyValueInput } from './types-37.js';
import type { OrderLineItemTax, OrderLineItemTaxRequestInput, OrderPaymentAttempt } from './types-39.js';
import type {
    CheckoutSessionTax,
    CheckoutSubscriptionTerms,
    CheckoutTheme,
    CheckoutTipConfig,
    CheckoutSessionLaunchResponse
} from './types-6.js';
import type { CustomFieldAnswer } from './types-14.js';
import type { Image } from './types-27.js';
import type { LegalSettings } from './types-34.js';
import type { PaymentCollection } from './types-43.js';
/** A catalog grouping used to organize items. */
export type Category = {
    /** Number of bundles currently assigned to the category. Format: int64. */
    "assigned_bundle_count": number;
    /** Number of products currently assigned to the category. Format: int64. */
    "assigned_product_count": number;
    /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
    "category_id": string;
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** Description of the category. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Immutable handle used to assign this category to products and bundles. */
    "handle": string;
    /**
     * Identifier of the merchant that owns this resource. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Category name shown to buyers. */
    "name": string;
    /**
     * Category lifecycle status. Active categories can be assigned; deleted is returned only by
     * DELETE. Value enum: "active", "deleted".
     */
    "status": "active" | "deleted" | (string & {});
    /**
     * Number of promotions, return reasons and return policy versions that reference this
     * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
     * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
     */
    "targeting_reference_count": number;
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /**
     * Persisted owned-state version. Clock-based availability and expanded resources do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type CategoryCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "category.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "category.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "category.created";
});
/**
 * The `category.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CategoryCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "category.created". */
    "event_type"?: "category.created";
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
 * The `category.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CategoryCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "category.created". */
    "event_type"?: "category.created";
});
export type CategoryDeletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "category.deleted";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "category.deleted";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "category.deleted";
});
/**
 * The `category.deleted` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CategoryDeletedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "category.deleted". */
    "event_type"?: "category.deleted";
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
 * The `category.deleted` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CategoryDeletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "category.deleted". */
    "event_type"?: "category.deleted";
});
/** A page of `Category` objects. */
export type CategoryListResponse = {
    /**
     * The requested category data. [] (Value): {@link Category}. A catalog grouping used to
     * organize items.
     */
    "data": Array<Category>;
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
/** A reference to a product category by ID, handle, and name. */
export type CategoryReference = {
    /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
    "category_id": string;
    /**
     * Immutable handle of the referenced category. Read the category resource for its current
     * name.
     */
    "handle": string;
};
/** A response containing `Category` data. */
export type CategoryResponse = {
    /** The requested category data. A catalog grouping used to organize items. */
    "data": Category;
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
export type CategoryUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Category>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "category.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Category>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "category.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "category.updated";
});
/**
 * The `category.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CategoryUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Category>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "category.updated". */
    "event_type"?: "category.updated";
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
 * The `category.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CategoryUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Category>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "category.updated". */
    "event_type"?: "category.updated";
});
/** The request body for: Change subscription plan. */
export type ChangeMeSubscriptionPlanRequest = ({
    /**
     * Send with billing_interval_count to choose a target plan option. Omit both to keep the
     * current interval if the target offers that pair, otherwise use the target plan's default
     * interval and count. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Required when billing_interval is sent; billing_interval is required when this field is
     * sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Omit to keep the current subscription quantity. The target plan must offer the quantity.
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /**
     * The target subscription plan. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
});
/** The request body for: Change subscription plan. */
export type ChangeMeSubscriptionPlanRequestInput = ({
    /**
     * Send with billing_interval_count to choose a target plan option. Omit both to keep the
     * current interval if the target offers that pair, otherwise use the target plan's default
     * interval and count. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * Required when billing_interval is sent; billing_interval is required when this field is
     * sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Omit to keep the current subscription quantity. The target plan must offer the quantity.
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /**
     * The target subscription plan. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
});
/** The request body for: Change subscription quantity. */
export type ChangeMeSubscriptionQuantityRequest = {
    /**
     * period_end schedules the new quantities for the next billing boundary; prorated_now charges
     * the difference now for an eligible digital line. Value enum: "period_end", "prorated_now".
     */
    "billing_starts": "period_end" | "prorated_now" | (string & {});
    /** Reject the request if the subscription version has changed. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * The frozen adjustable subscription line and its quantity, within min_quantity and
     * max_quantity. Omitted lines keep their quantities. minItems: 1. maxItems: 50. [] (Value):
     * {@link SubscriptionQuantityChangeLineItemRequest}. Quantity for an existing subscription
     * line.
     */
    "line_items": Array<SubscriptionQuantityChangeLineItemRequest>;
};
/** The request body for: Change subscription quantity. */
export type ChangeMeSubscriptionQuantityRequestInput = {
    /**
     * period_end schedules the new quantities for the next billing boundary; prorated_now charges
     * the difference now for an eligible digital line. Value enum: "period_end", "prorated_now".
     */
    "billing_starts": "period_end" | "prorated_now";
    /** Reject the request if the subscription version has changed. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * The frozen adjustable subscription line and its quantity, within min_quantity and
     * max_quantity. Omitted lines keep their quantities. minItems: 1. maxItems: 50. [] (Value):
     * {@link SubscriptionQuantityChangeLineItemRequestInput}. Quantity for an existing
     * subscription line.
     */
    "line_items": Array<SubscriptionQuantityChangeLineItemRequestInput>;
};
/** The request body for: Change subscription plan. */
export type ChangeSubscriptionPlanRequest = ({
    /**
     * Send with billing_interval_count to choose a target plan option. Omit both to keep the
     * current interval if the target offers that pair, otherwise use the target plan's default
     * interval and count. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Required when billing_interval is sent; billing_interval is required when this field is
     * sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * now bills a new period with credit for unused paid item time. next_renewal changes the plan
     * immediately and keeps the current paid period and next billing date. period_end keeps the
     * current plan until the next charged renewal, then applies and bills the scheduled terms.
     * prorated_now charges the new terms for the rest of the current period, less unused paid item
     * credit, and keeps the billing period and anchor. Value enum: "now", "next_renewal",
     * "period_end", "prorated_now".
     */
    "billing_starts": "now" | "next_renewal" | "period_end" | "prorated_now" | (string & {});
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Optional quantities for target plan lines, with no duplicate IDs. Omitted lines carry their
     * paired current line's quantity, or use the target line's quantity when unpaired. If an
     * adjusted current quantity cannot be paired, send a quantity for every target line. []
     * (Value): {@link SubscriptionPlanChangeLineItemRequest}. Quantity override for a line in the
     * target subscription plan.
     */
    "line_items"?: Array<SubscriptionPlanChangeLineItemRequest>;
    /**
     * Omit to keep the current subscription quantity. The target plan must offer the quantity.
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /**
     * The target subscription plan. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
});
/** The request body for: Change subscription plan. */
export type ChangeSubscriptionPlanRequestInput = ({
    /**
     * Send with billing_interval_count to choose a target plan option. Omit both to keep the
     * current interval if the target offers that pair, otherwise use the target plan's default
     * interval and count. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * Required when billing_interval is sent; billing_interval is required when this field is
     * sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * now bills a new period with credit for unused paid item time. next_renewal changes the plan
     * immediately and keeps the current paid period and next billing date. period_end keeps the
     * current plan until the next charged renewal, then applies and bills the scheduled terms.
     * prorated_now charges the new terms for the rest of the current period, less unused paid item
     * credit, and keeps the billing period and anchor. Value enum: "now", "next_renewal",
     * "period_end", "prorated_now".
     */
    "billing_starts": "now" | "next_renewal" | "period_end" | "prorated_now";
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Optional quantities for target plan lines, with no duplicate IDs. Omitted lines carry their
     * paired current line's quantity, or use the target line's quantity when unpaired. If an
     * adjusted current quantity cannot be paired, send a quantity for every target line. []
     * (Value): {@link SubscriptionPlanChangeLineItemRequestInput}. Quantity override for a line in
     * the target subscription plan.
     */
    "line_items"?: Array<SubscriptionPlanChangeLineItemRequestInput>;
    /**
     * Omit to keep the current subscription quantity. The target plan must offer the quantity.
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /**
     * The target subscription plan. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
});
/** The request body for: Change subscription quantity. */
export type ChangeSubscriptionQuantityRequest = ({
    /**
     * prorated_now charges the prorated difference now and keeps the current period and anchor;
     * next_renewal changes quantities now without charging; period_end schedules them for the next
     * billing boundary. Value enum: "prorated_now", "next_renewal", "period_end".
     */
    "billing_starts": "prorated_now" | "next_renewal" | "period_end" | (string & {});
    /** Reject the request if the subscription version has changed. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their
     * quantities. Send quantity or line_items. minItems: 1. maxItems: 50. [] (Value): {@link
     * SubscriptionQuantityChangeLineItemRequest}. Quantity for an existing subscription line.
     */
    "line_items"?: Array<SubscriptionQuantityChangeLineItemRequest>;
    /**
     * The whole-number subscription multiplier; fractional quantities are not supported. Validated
     * as on subscription PATCH. Omit to keep its current value. Send quantity or line_items.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
})
    & (({
    /**
     * The whole-number subscription multiplier; fractional quantities are not supported. Validated
     * as on subscription PATCH. Omit to keep its current value. Send quantity or line_items.
     * minimum: 1. maximum: 100.
     */
    "quantity": number;
})
    | ({
    /**
     * Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their
     * quantities. Send quantity or line_items. minItems: 1. maxItems: 50. [] (Value): {@link
     * SubscriptionQuantityChangeLineItemRequest}. Quantity for an existing subscription line.
     */
    "line_items": Array<SubscriptionQuantityChangeLineItemRequest>;
})
    | (Record<string, unknown>));
/** The request body for: Change subscription quantity. */
export type ChangeSubscriptionQuantityRequestInput = ({
    /**
     * prorated_now charges the prorated difference now and keeps the current period and anchor;
     * next_renewal changes quantities now without charging; period_end schedules them for the next
     * billing boundary. Value enum: "prorated_now", "next_renewal", "period_end".
     */
    "billing_starts": "prorated_now" | "next_renewal" | "period_end";
    /** Reject the request if the subscription version has changed. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their
     * quantities. Send quantity or line_items. minItems: 1. maxItems: 50. [] (Value): {@link
     * SubscriptionQuantityChangeLineItemRequestInput}. Quantity for an existing subscription line.
     */
    "line_items"?: Array<SubscriptionQuantityChangeLineItemRequestInput>;
    /**
     * The whole-number subscription multiplier; fractional quantities are not supported. Validated
     * as on subscription PATCH. Omit to keep its current value. Send quantity or line_items.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
})
    & (({
    /**
     * The whole-number subscription multiplier; fractional quantities are not supported. Validated
     * as on subscription PATCH. Omit to keep its current value. Send quantity or line_items.
     * minimum: 1. maximum: 100.
     */
    "quantity": number;
})
    | ({
    /**
     * Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their
     * quantities. Send quantity or line_items. minItems: 1. maxItems: 50. [] (Value): {@link
     * SubscriptionQuantityChangeLineItemRequestInput}. Quantity for an existing subscription line.
     */
    "line_items": Array<SubscriptionQuantityChangeLineItemRequestInput>;
}));
/** An optional admission code to verify and an optional version fence. */
export type CheckInTicketRequest = {
    /**
     * The 16-character Crockford base32 admission code scanned at the door. Spaces, hyphens and
     * ASCII lowercase are normalized. Omit it to check the ticket in manually. minLength: 16.
     */
    "admission_code"?: string;
    /**
     * The ticket version last read. The change applies only while the ticket is at this version; a
     * stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse
     * the change. Door scanners usually omit it. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** An optional admission code to verify and an optional version fence. */
export type CheckInTicketRequestInput = CheckInTicketRequest;
/** Buyer contact supplied with payment or saved during checkout. */
export type CheckoutBuyerContact = {
    /**
     * Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared
     * distinguishes an explicit clear. Format: email. maxLength: 255. Example:
     * "buyer@example.com".
     */
    "email": string | null;
    /**
     * True when the buyer explicitly cleared the email, including before entering one. Saving an
     * email resets it to false. Do not restore a prefilled email while true.
     */
    "is_email_cleared": boolean;
    /**
     * True when the buyer explicitly cleared the phone, including before entering one. Saving a
     * phone resets it to false. Do not restore a prefilled phone while true.
     */
    "is_phone_cleared": boolean;
    /**
     * Phone supplied for the buyer, in E.164 format. Null when no phone is saved; is_phone_cleared
     * distinguishes an explicit clear. pattern: ^\+[1-9][0-9]{1,14}$.
     */
    "phone": string | null;
    /**
     * When the buyer last changed the saved checkout contact. Omitted on order buyer contact.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
};
/**
 * Buyer contact to supply with payment or save during checkout. Send at least one field. Values
 * are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session
 * updates keep omitted fields and accept null to clear a field. Payment requests do not accept
 * null. minProperties: 1.
 */
export type CheckoutBuyerContactRequest = {
    /**
     * Email for the buyer, such as buyer@example.com. On checkout session updates, null clears the
     * saved email. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "email"?: string | null;
    /**
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$.
     */
    "phone"?: string | null;
};
/**
 * Buyer contact to supply with payment or save during checkout. Send at least one field. Values
 * are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session
 * updates keep omitted fields and accept null to clear a field. Payment requests do not accept
 * null. minProperties: 1.
 */
export type CheckoutBuyerContactRequestInput = CheckoutBuyerContactRequest;
/** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
export type CheckoutBuyerFields = {
    /** Whether checkout offers address suggestions while the buyer enters an address. */
    "address_autocomplete_enabled"?: boolean;
    /** Whether checkout requires the buyer's billing address. */
    "require_billing_address"?: boolean;
    /**
     * Whether checkout requires the buyer's email address. Subscription plan sessions always
     * require email, so only true is allowed with type: subscription_plan.
     */
    "require_email"?: boolean;
    /** Whether checkout requires the buyer's phone number. */
    "require_phone"?: boolean;
};
/** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
export type CheckoutBuyerFieldsRequestInput = CheckoutBuyerFields;
/** Custom text shown in checkout: an order summary message and a shipping address label. */
export type CheckoutCustomTextConfig = {
    /** Message shown near the order summary in checkout. */
    "order_summary_message"?: string;
    /** Label shown for the shipping address in checkout. */
    "shipping_address_label"?: string;
};
/**
 * Custom checkout text you supply when creating a checkout session: an order summary message and a
 * shipping address label.
 */
export type CheckoutCustomTextWriteConfigInput = {
    /** Message shown near the order summary in checkout. minLength: 1. */
    "order_summary_message"?: string;
    /** Label shown for the shipping address in checkout. minLength: 1. */
    "shipping_address_label"?: string;
};
/** Details the buyer's checkout can prefill from the customer it acts for. */
export type CheckoutCustomerPrefill = {
    /**
     * The customer's default billing address. Omitted when the customer has none. A postal
     * address. Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "billing_address"?: Address;
    /** The customer's email. */
    "email": string;
    /**
     * The customer's default shipping address. Omitted when the customer has none. A postal
     * address. Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "shipping_address"?: Address;
    /**
     * Recipient name of the customer's default shipping address. Present whenever
     * `shipping_address` is.
     */
    "shipping_recipient_name"?: string;
};
/**
 * The delivery options Flint derived for a checkout as a buyer sees them: choice groups, input
 * requirements, and evaluation status.
 */
export type CheckoutDerivedDeliveryResource = {
    /**  [] (Value): string. */
    "buyer_reasons": Array<string>;
    /**
     *  [] (Value): {@link DeliveryQuoteChoiceGroupResource}. One group of order items in a
     * delivery quote, with the delivery options the buyer can choose, its availability status, and
     * any input still needed.
     */
    "choice_groups": Array<DeliveryQuoteChoiceGroupResource>;
    /** Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". */
    "delivery_quote_id"?: string;
    /**
     * Current delivery selection ID after reconciliation, or null when no selection is current.
     * Assert this value with expected_delivery_selection_id on checkout delivery writes. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "delivery_selection_id": string | null;
    /** Value enum: "complete", "incomplete", "degraded", "requires_explicit_quote". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | "requires_explicit_quote" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these
     * are the quote's input_requirements. Before that, they come from the methods alone and name
     * no choice group: the fields in each method's quote_input_fields, and each recipient field a
     * method requires. [] (Value): {@link DeliveryInputRequirement}. An input a delivery method
     * needs, such as an address field or time window, with its `field_path`, purpose, and
     * constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Always present with an API key or dashboard credential. [] (Value): {@link
     * DeliveryMerchantDiagnostic}. A merchant-only diagnostic explaining why a delivery method
     * produced no option, with its outcome, recommended action, and eligibility mismatches.
     */
    "merchant_diagnostics"?: Array<DeliveryMerchantDiagnostic>;
};
/** A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. */
export type CheckoutGiftCardChallenge = {
    /**
     * Load this URL in an iframe on page_origin when applying a gift card returns
     * GIFT_CARD_CHALLENGE_REQUIRED. On a hosted session, Flint's checkout loads it for you, so you
     * don't need to do anything. The page posts a single-use proof to your page; send it in
     * Flint-Gift-Card-Challenge. Treat the URL as opaque. It stays the same for the session and
     * stops working when the session ends. Format: uri. Example: "https://example.com/receipt".
     */
    "url": string;
};
/**
 * Legal settings you supply when creating a checkout session: whether buyers must accept terms,
 * and links to the terms, refund policy, shipping policy, and contract.
 */
export type CheckoutLegalConfigRequestInput = {
    /** An `https://` URL of the contract the buyer agrees to, linked in checkout. minLength: 1. */
    "contract_url"?: string;
    /** An `https://` URL of your refund policy, linked in checkout. minLength: 1. */
    "refund_policy_url"?: string;
    /** Whether the buyer must accept the terms of service before paying. */
    "require_terms_of_service"?: boolean;
    /** An `https://` URL of your shipping policy, linked in checkout. minLength: 1. */
    "shipping_policy_url"?: string;
    /** An `https://` URL of your terms of service, linked in checkout. minLength: 1. */
    "terms_of_service_url"?: string;
};
/** The merchant's support contact. Each field is omitted when the merchant has not set it. */
export type CheckoutMerchantSupport = {
    /** Support email address. Format: email. Example: "buyer@example.com". */
    "email"?: string;
    /** Support phone number. */
    "phone"?: string;
    /**
     * Support page, as an absolute http or https URL. Format: uri. Example:
     * "https://example.com/receipt".
     */
    "url"?: string;
};
/** Payment settings for a checkout: the enabled payment options and a note shown with payment. */
export type CheckoutPaymentConfig = {
    /**
     * Payment options for this session. The list replaces
     * settings.checkout.enabled_payment_options; omit it to use that setting. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /** A note shown to the buyer with the payment options. */
    "payment_note"?: string;
};
/**
 * Payment settings you supply when creating a checkout session: the enabled payment options and a
 * note shown with payment.
 */
export type CheckoutPaymentConfigRequestInput = {
    /**
     * Payment options for this session. The list replaces
     * settings.checkout.enabled_payment_options; omit it to use that setting. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /** A note shown to the buyer with the payment options. minLength: 1. */
    "payment_note"?: string;
};
/**
 * A card the buyer saved with the checkout's payment by giving a mobile phone number. It works for
 * nothing until the buyer confirms it with a code: request one with POST
 * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
 * confirm_saved_payment_method.
 */
export type CheckoutPaymentMethodSave = {
    /**
     * True while status is pending after the buyer confirmed the number by text, when the number
     * alone can't save the card: the customer with the buyer's email existed before this payment,
     * the buyer did not confirm that email in this checkout, and the number isn't already the
     * customer's saved number with an active card saved with it. The buyer confirms the email with
     * an emailed code to finish; the card is then saved with the number, which replaces the
     * customer's saved number.
     */
    "email_confirmation_required": boolean;
    /**
     * When a pending save stops waiting: 24 hours after the payment succeeded or was approved.
     * `null` when the save is no longer pending. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | null;
    /**
     * Last two digits of the number the buyer gave, which a code is texted to. Set while status is
     * pending.
     */
    "phone_last_digits"?: string;
    /**
     * How the buyer confirmed the card: with a code texted to their phone or emailed to them.
     * Value enum: "sms", "email".
     */
    "saved_with"?: "sms" | "email" | (string & {});
    /**
     * Whether the card is saved. Until `saved`, the card can't be used. Value enum: "pending",
     * "saved", "expired".
     */
    "status": "pending" | "saved" | "expired" | (string & {});
};
/**
 * Contact details and addresses to fill in for the buyer, who can change them. For a customer with
 * saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay
 * or subscription_plan and automatic tax on, a prefilled address sets the order's tax location.
 * Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the
 * checkout credential reads from the customer record.
 */
export type CheckoutPrefill = {
    /**
     * The billing address to fill in. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "billing_address"?: Address;
    /** The buyer's email address to fill in. */
    "email"?: string;
    /** The buyer's phone number to fill in. */
    "phone"?: string;
    /**
     * The shipping address to fill in. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "shipping_address"?: Address;
};
/**
 * Contact details and addresses to fill in for the buyer, who can change them. For a customer with
 * saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay
 * or subscription_plan and automatic tax on, a prefilled address sets the order's tax location.
 * Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the
 * checkout credential reads from the customer record.
 */
export type CheckoutPrefillRequest = {
    /**
     * The billing address to fill in. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "billing_address"?: AddressRequest;
    /** The buyer's email address to fill in. minLength: 1. */
    "email"?: string;
    /** The buyer's phone number to fill in. minLength: 1. */
    "phone"?: string;
    /**
     * The shipping address to fill in. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "shipping_address"?: AddressRequest;
};
/**
 * Contact details and addresses to fill in for the buyer, who can change them. For a customer with
 * saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay
 * or subscription_plan and automatic tax on, a prefilled address sets the order's tax location.
 * Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the
 * checkout credential reads from the customer record.
 */
export type CheckoutPrefillRequestInput = {
    /**
     * The billing address to fill in. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "billing_address"?: AddressRequestInput;
    /** The buyer's email address to fill in. minLength: 1. */
    "email"?: string;
    /** The buyer's phone number to fill in. minLength: 1. */
    "phone"?: string;
    /**
     * The shipping address to fill in. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "shipping_address"?: AddressRequestInput;
};
/**
 * A problem with a checkout session, such as a stale delivery selection, with its `code`, whether
 * it blocks completion, and remediation.
 */
export type CheckoutProblemResource = {
    /** Whether the checkout cannot complete until the problem is resolved. */
    "blocks_completion": boolean;
    /**
     * Which condition affects the checkout. Value enum: "delivery_selection_stale",
     * "delivery_selection_invalid", "delivery_unreadable", "payment_in_progress".
     */
    "code": "delivery_selection_stale"
        | "delivery_selection_invalid"
        | "delivery_unreadable"
        | "payment_in_progress"
        | (string & {});
    /**
     * What the caller can do about the problem, and whether retrying the same request can help.
     * Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested
     * actions.
     */
    "remediation"?: ErrorRemediation;
    /** How serious the problem is. Value enum: "error". */
    "severity": "error" | (string & {});
};
/**
 * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can
 * apply promotion codes.
 */
export type CheckoutPromotionConfig = {
    /**
     * Whether automatic promotions apply to this checkout. Send false to stop them here. True
     * can't turn them back on when your promotion settings have them off.
     */
    "automatic_enabled"?: boolean;
    /**
     * Object-level override for whether this checkout's buyer can apply promotion codes, hosted or
     * headless. Hosted checkout shows or hides code entry to match. Omit to inherit
     * checkout.promotion_codes_enabled. True allows codes when the merchant's promotion settings
     * allow them; false blocks them for this checkout. `null` when this checkout inherits
     * checkout.promotion_codes_enabled.
     */
    "codes_enabled"?: boolean | null;
};
/**
 * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can
 * apply promotion codes.
 */
export type CheckoutPromotionConfigRequestInput = CheckoutPromotionConfig;
/**
 * A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an
 * amount, and optional tax settings.
 */
export type CheckoutQuickPayItemRequest = {
    /**
     * Amount the buyer pays for the item. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Name shown for the item. minLength: 1. */
    "name": string;
    /** Tax settings for the item. A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
};
/**
 * A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an
 * amount, and optional tax settings.
 */
export type CheckoutQuickPayItemRequestInput = {
    /**
     * Amount the buyer pays for the item. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Name shown for the item. minLength: 1. */
    "name": string;
    /** Tax settings for the item. A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
};
/** Checkout reminder email settings. On update, an omitted field keeps its value. */
export type CheckoutRecoveryEmailSettings = {
    /**
     * Seconds to wait after the buyer last changed their email or phone before sending the
     * reminder. Must be a multiple of 60. Defaults to 3600. Format: int32. minimum: 900. maximum:
     * 86400. multipleOf: 60. Default: 3600.
     */
    "delay_seconds"?: number;
    /**
     * Whether Flint sends checkout reminders. Turning them on requires a business address on the
     * merchant, which the reminder prints; without one the update returns ACTION_NOT_ALLOWED with
     * reason configuration_required and the merchant reference.
     */
    "enabled"?: boolean;
};
/** Checkout reminder email settings. On update, an omitted field keeps its value. */
export type CheckoutRecoveryEmailSettingsRequestInput = CheckoutRecoveryEmailSettings;
/**
 * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
 * payment_return_url.
 */
export type CheckoutRedirects = {
    /**
     * Where the buyer goes when they leave checkout without paying. The session stays open until
     * it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048
     * characters. Format: uri. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "cancel_url"?: string;
    /**
     * Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees
     * Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback
     * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "expired_url"?: string;
    /**
     * Where the buyer goes after paying. Flint adds checkout_session_id and order_id query
     * parameters, replacing any with those names. The redirect doesn't prove payment: confirm with
     * the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts
     * HTTP loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "success_url"?: string;
};
/**
 * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
 * payment_return_url.
 */
export type CheckoutRedirectsRequestInput = {
    /**
     * Where the buyer goes when they leave checkout without paying. The session stays open until
     * it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048
     * characters. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "cancel_url"?: string;
    /**
     * Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees
     * Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback
     * URLs. Up to 2,048 characters. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "expired_url"?: string;
    /**
     * Where the buyer goes after paying. Flint adds checkout_session_id and order_id query
     * parameters, replacing any with those names. The redirect doesn't prove payment: confirm with
     * the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts
     * HTTP loopback URLs. Up to 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     * Example: "https://example.com/receipt".
     */
    "success_url"?: string;
};
/**
 * Saved payment details settings for hosted checkout. On update, an omitted field keeps its value.
 */
export type CheckoutSavedPaymentDetailsSettingsRequestInput = {
    /**
     * Whether hosted checkout shows buyers an unchecked option to save the card they type. A card
     * is saved only when the buyer checks it and the payment succeeds, with usage on_session:
     * Flint charges it only in checkouts the buyer completes, never for subscriptions, automatic
     * invoices, or other charges without the buyer. Checkout never shows the option when customer
     * accounts are merchant hosted, or for invoice, subscription, and return checkouts.
     */
    "enabled"?: boolean;
};
/** A session in which a buyer completes an order's payment. */
export type CheckoutSession = {
    /** An attempt to pay an order. */
    "active_payment_attempt"?: OrderPaymentAttempt;
    /**
     * Contact the buyer entered in checkout before paying, saved with the session's checkout
     * credential. Separate from merchant-supplied prefill and customer_prefill from the customer
     * record. Omitted until the buyer saves or clears a field. When a checkout session payment
     * omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the
     * contact 30 days after the session ends, and when a customer linked to the session is
     * deleted. Buyer contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Whether checkout offers the buyer the option to save the card they type for faster checkout
     * at this merchant. When true and save_payment_method_requires_verification is false, PayOrder
     * accepts save_payment_method: true for one newly collected card. False when the merchant
     * turned checkout.saved_payment_details off, customer accounts are merchant hosted, card is
     * not an available payment option, the checkout collects an invoice, a subscription, or a
     * return, or the checkout acts for no customer and Flint cannot email the buyer a verification
     * code. Returned only to the checkout credential; never in webhook payloads.
     */
    "can_save_payment_method"?: boolean;
    /**
     * Whether the buyer can save the card they type by giving a US or Canadian mobile phone number
     * with the payment, in save_payment_method_phone on POST /v1/orders/{order_id}/pay, and
     * confirming it with a texted code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     */
    "can_save_payment_method_with_phone"?: boolean;
    /**
     * Unique identifier for this checkout session, prefixed `cs_`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id": string;
    /**
     * The reference the payment link URL or resolve request carried, such as your user ID. `null`
     * when none was sent or checkout did not start from a payment link. Returned only to merchant
     * credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a
     * claim, not proof of identity. minLength: 1. maxLength: 255.
     */
    "client_reference": string | null;
    /** The note supplied when the checkout session was closed. */
    "closed_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The buyer's answers to the payment link's custom fields, the same as the
     * `custom_field_answers` of the session's order. Read-only. Empty when the session didn't
     * start from a payment link, the buyer answered no custom fields, or the order was created
     * before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer
     * credentials. maxItems: 20. [] (Value): {@link CustomFieldAnswer}. One answer to a payment
     * link custom field, with the field as it was when checkout started. `custom_field_type`
     * determines the type of `value`.
     */
    "custom_field_answers": Array<CustomFieldAnswer>;
    /**
     * The custom text this session shows in checkout. Custom text shown in checkout: an order
     * summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * The customer of the session's order. Omitted when the order has none. A checkout credential
     * issued for this session acts for this customer. Add expand=customer to include the customer.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Contact and default addresses of the customer the checkout acts for, with the recipient name
     * on its default shipping address: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. Present on GET and PATCH responses while the
     * session is open and acts for a customer. Separate from merchant-supplied prefill and
     * buyer_contact saved by the buyer. Returned only to the checkout credential; never in webhook
     * payloads. Details the buyer's checkout can prefill from the customer it acts for.
     */
    "customer_prefill"?: CheckoutCustomerPrefill;
    /**
     * Current delivery choices for Flint-owned pricing. External pricing reports
     * requires_explicit_quote; reading this field does not request a delivery quote. Omitted when
     * the session is not open, has no order, or Flint cannot read its delivery. The delivery
     * options Flint derived for a checkout as a buyer sees them: choice groups, input
     * requirements, and evaluation status.
     */
    "delivery"?: CheckoutDerivedDeliveryResource;
    /**
     * Immutable delivery method assignment captured when the checkout was created. [] (Value):
     * string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids": Array<string>;
    /**
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment.
     */
    "delivery_selection_required": boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the buyer completes a gift card challenge for this checkout. Returned on
     * single-session reads, session create and update responses, checkout launch results, and
     * customer verification confirmation results while the session is open and can show the
     * challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results.
     * A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     */
    "gift_card_challenge"?: CheckoutGiftCardChallenge;
    /**
     * Present only when `expand` includes `invoice`; `null` when expanded and there is no related
     * invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields,
     * including status, due date, and paid, outstanding, and refunded amounts, returned when the
     * invoice is expanded. anyOf[2] (Value): null.
     */
    "invoice"?: ((ExpandedInvoiceSummary) | (null));
    /**
     * ID of the invoice a session of type `invoice` collects payment for. Absent for other types.
     * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * Whether this terminal session credential is temporarily restricted to recovering its owning
     * payment attempt.
     */
    "is_in_recovery": boolean;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings for a checkout: whether buyers must accept terms, and links to the
     * terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and
     * webhooks omit it. An image with its URL, size, and alt text.
     */
    "merchant_icon"?: Image;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
     * merchant has one; other responses and webhooks omit it. An image with its URL, size, and alt
     * text.
     */
    "merchant_logo"?: Image;
    /**
     * The merchant's business name, which hosted checkout shows when `theme.title` is unset. Reads
     * `Merchant` when the merchant has not set a business name. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     */
    "merchant_name"?: string;
    /**
     * How the buyer can reach the merchant for help: the support email, phone, and URL the
     * merchant set. Present on GET and PATCH responses when the merchant set at least one of them.
     * Show it where your checkout tells the buyer to contact the merchant, such as an expired or
     * closed checkout, or your receipt. Returned only to the checkout credential; never in webhook
     * payloads. The merchant's support contact. Each field is omitted when the merchant has not
     * set it.
     */
    "merchant_support"?: CheckoutMerchantSupport;
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
     * ID of the order the session collects payment for, fixed at creation. Absent when the session
     * has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /** Origin of the page that renders this embedded checkout. Omitted when not set. */
    "page_origin"?: string;
    /**
     * Guidance for collecting a payment source. Checkout-credential reads include it only while
     * the session is open. Returned only to the checkout credential; never in webhook payloads.
     * Client-side details for collecting payment from the buyer, such as the Stripe settings to
     * initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /**
     * IDs of the payment intents for the session's order. Absent when the order has none. []
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_ids"?: Array<string>;
    /**
     * Present only when `expand` includes `payment_intents`: summaries of the payment intents in
     * `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
     * related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A payment link's
     * summary fields, including name, type, status, and URL, returned when the payment link is
     * expanded. anyOf[2] (Value): null.
     */
    "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
    /**
     * ID of the payment link the session was started from. Absent when it was not started from a
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: string;
    /**
     * The current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text.
     */
    "payment_link_image"?: Image;
    /**
     * The card the buyer saved with this checkout's payment by giving a mobile phone number, and
     * whether they confirmed it. Present on GET and PATCH responses after a payment that paid the
     * order in full, or that was approved for the merchant to capture later, and saved a card this
     * way. A checkout whose payment is approved stays open until the capture. Returned only to the
     * checkout credential; never in webhook payloads. A card the buyer saved with the checkout's
     * payment by giving a mobile phone number. It works for nothing until the buyer confirms it
     * with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method.
     */
    "payment_method_save"?: CheckoutPaymentMethodSave;
    /**
     * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Configured payment options for merchant credentials; currently available payment options for
     * the checkout credential. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefill;
    /**
     * Named conditions that affect checkout completion. Follow each problem's remediation action
     * instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means
     * another payment for the order must finish before this checkout can complete. When Flint
     * cannot read the checkout's delivery, the read still succeeds and reports
     * delivery_unreadable; its remediation says whether reading the session again can succeed, and
     * its next action's reason_code names the error. [] (Value): {@link CheckoutProblemResource}.
     * A problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation.
     */
    "problems": Array<CheckoutProblemResource>;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * When the restricted payment-attempt recovery window ends. `null` when the session has no
     * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "recovery_expires_at"?: string | null;
    /**
     * Payment attempt that this checkout credential may recover while is_in_recovery is true.
     * Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     */
    "recovery_payment_attempt_id"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads.
     */
    "save_payment_method_requires_verification"?: boolean;
    /**
     * What save_payment_method keeps, present when can_save_payment_method is true: card, a card
     * the buyer types into checkout. Show the save option with that payment method only. A pay
     * request that sends save_payment_method: true with Apple Pay, Google Pay, a bank account, or
     * Affirm, through a confirmation token created with setup_future_usage none, still pays, and
     * its payment attempt's payment_method_save reports not_saved. The values can grow. Returned
     * only to the checkout credential; never in webhook payloads. [] enum: "card". [] (Value):
     * string. Value enum: "card".
     */
    "save_payment_method_types"?: Array<"card" | (string & {})>;
    /**
     * Guidance for collecting a payment method to save. Checkout-credential reads include it only
     * while the session is open. Returned only to the checkout credential; never in webhook
     * payloads. Client-side details for collecting payment from the buyer, such as the Stripe
     * settings to initialize Stripe.js.
     */
    "setup_collection"?: PaymentCollection;
    /**
     * Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when
     * the merchant's agreement with Flint removes it. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     */
    "show_flint_mark"?: boolean;
    /**
     * Where the session is in its lifecycle. Only an `open` session accepts payment.
     * `terminal_reason` says why a session that is not open ended. Value enum: "open", "paid",
     * "partially_paid", "expired", "closed", "invalidated".
     */
    "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
    /**
     * ID of the subscription plan a session of type `subscription_plan` signs the buyer up for.
     * Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order
     * was created, so later plan changes do not alter them. Absent when the checkout starts no
     * subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the
     * session's order was created, so later plan changes do not alter them.
     */
    "subscription_terms"?: CheckoutSubscriptionTerms;
    /**
     * ID of the session that replaced this one. Present when `terminal_reason` is `superseded`.
     * Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "superseding_checkout_session_id"?: string;
    /**
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". [] (Value): string. Value enum: "close".
     */
    "supported_actions": Array<"close" | (string & {})>;
    /**
     * How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout
     * page; an embedded one is rendered on your own page. Value enum: "hosted", "embedded".
     */
    "surface": "hosted" | "embedded" | (string & {});
    /**
     * The session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     */
    "tax"?: CheckoutSessionTax;
    /**
     * Why the session ended. The checkout credential can still read its own closed or expired
     * session; every other call is refused because the session is not open. order_paid_elsewhere
     * applies only to invalidated sessions when payment succeeds or partially succeeds outside the
     * session. order_mutated applies when an edit closes or completes its order, or ends an
     * invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted
     * and embedded sessions open. A session already past expires_at ends with expired before the
     * edit is applied. Value enum: "payment_succeeded", "payment_partially_succeeded", "expired",
     * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
     * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
     * "invoice_balance_changed".
     */
    "terminal_reason"?: "payment_succeeded"
        | "payment_partially_succeeded"
        | "expired"
        | "closed_by_merchant"
        | "order_mutated"
        | "superseded"
        | "order_paid_elsewhere"
        | "invoice_paid_elsewhere"
        | "invoice_voided"
        | "invoice_uncollectible"
        | "invoice_balance_changed"
        | (string & {});
    /**
     * The theme checkout renders with: your branding settings, with the session's `title`,
     * `primary_color`, and `accent_color` over them. A session sets only those three; the other
     * fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings.
     */
    "theme"?: CheckoutTheme;
    /**
     * The tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the session collects payment for, fixed at creation. Value enum: "order", "quick_pay",
     * "subscription_plan", "invoice", "payment_link".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Hosted checkout URL that carries a one-time launch credential. Send the buyer here to pay.
     * Present only for hosted sessions read with a merchant credential that can manage checkout
     * sessions. Launch results include it for hosted sessions: create, payment-link resolve, and
     * invoice and return-resolution checkout. Omitted for embedded sessions.
     */
    "url"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type CheckoutSessionClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
            "terminal_reason"?: "payment_succeeded"
                | "payment_partially_succeeded"
                | "expired"
                | "closed_by_merchant"
                | "order_mutated"
                | "superseded"
                | "order_paid_elsewhere"
                | "invoice_paid_elsewhere"
                | "invoice_voided"
                | "invoice_uncollectible"
                | "invoice_balance_changed"
                | (string & {});
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "checkout_session.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
            "terminal_reason"?: "payment_succeeded"
                | "payment_partially_succeeded"
                | "expired"
                | "closed_by_merchant"
                | "order_mutated"
                | "superseded"
                | "order_paid_elsewhere"
                | "invoice_paid_elsewhere"
                | "invoice_voided"
                | "invoice_uncollectible"
                | "invoice_balance_changed"
                | (string & {});
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "checkout_session.closed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "checkout_session.closed";
});
/**
 * The `checkout_session.closed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type CheckoutSessionClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
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
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
             */
            "terminal_reason"?: "payment_succeeded"
                | "payment_partially_succeeded"
                | "expired"
                | "closed_by_merchant"
                | "order_mutated"
                | "superseded"
                | "order_paid_elsewhere"
                | "invoice_paid_elsewhere"
                | "invoice_voided"
                | "invoice_uncollectible"
                | "invoice_balance_changed"
                | (string & {});
            /**
             * The theme checkout renders with: your branding settings, with the session's `title`,
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
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
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "checkout_session.closed". */
    "event_type"?: "checkout_session.closed";
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
 * The `checkout_session.closed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
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
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
             */
            "terminal_reason"?: "payment_succeeded"
                | "payment_partially_succeeded"
                | "expired"
                | "closed_by_merchant"
                | "order_mutated"
                | "superseded"
                | "order_paid_elsewhere"
                | "invoice_paid_elsewhere"
                | "invoice_voided"
                | "invoice_uncollectible"
                | "invoice_balance_changed"
                | (string & {});
            /**
             * The theme checkout renders with: your branding settings, with the session's `title`,
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
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
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "checkout_session.closed". */
    "event_type"?: "checkout_session.closed";
});
export type CheckoutSessionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
            "terminal_reason"?: "payment_succeeded"
                | "payment_partially_succeeded"
                | "expired"
                | "closed_by_merchant"
                | "order_mutated"
                | "superseded"
                | "order_paid_elsewhere"
                | "invoice_paid_elsewhere"
                | "invoice_voided"
                | "invoice_uncollectible"
                | "invoice_balance_changed"
                | (string & {});
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "checkout_session.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
            "terminal_reason"?: "payment_succeeded"
                | "payment_partially_succeeded"
                | "expired"
                | "closed_by_merchant"
                | "order_mutated"
                | "superseded"
                | "order_paid_elsewhere"
                | "invoice_paid_elsewhere"
                | "invoice_voided"
                | "invoice_uncollectible"
                | "invoice_balance_changed"
                | (string & {});
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "checkout_session.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "checkout_session.created";
});
/**
 * The `checkout_session.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type CheckoutSessionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
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
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
             */
            "terminal_reason"?: "payment_succeeded"
                | "payment_partially_succeeded"
                | "expired"
                | "closed_by_merchant"
                | "order_mutated"
                | "superseded"
                | "order_paid_elsewhere"
                | "invoice_paid_elsewhere"
                | "invoice_voided"
                | "invoice_uncollectible"
                | "invoice_balance_changed"
                | (string & {});
            /**
             * The theme checkout renders with: your branding settings, with the session's `title`,
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "checkout_session.created". */
    "event_type"?: "checkout_session.created";
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
 * The `checkout_session.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
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
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
             */
            "terminal_reason"?: "payment_succeeded"
                | "payment_partially_succeeded"
                | "expired"
                | "closed_by_merchant"
                | "order_mutated"
                | "superseded"
                | "order_paid_elsewhere"
                | "invoice_paid_elsewhere"
                | "invoice_voided"
                | "invoice_uncollectible"
                | "invoice_balance_changed"
                | (string & {});
            /**
             * The theme checkout renders with: your branding settings, with the session's `title`,
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "checkout_session.created". */
    "event_type"?: "checkout_session.created";
});
/**
 * A request for a checkout verification code. A request with channel email reads the same whether
 * or not Flint sent a code.
 */
export type CheckoutSessionCustomerVerification = {
    /** How the code reached the buyer: email or sms. Value enum: "email", "sms". */
    "channel": "email" | "sms" | (string & {});
    /** ID to confirm the code with. Example: "cscv_01KEZF7C00XW14W2FCVD5PH3Z9". */
    "checkout_session_customer_verification_id": string;
    /** The checkout session the code belongs to. Example: "cs_01KEZF7C004JRWFW43H037MQRN". */
    "checkout_session_id": string;
    /** When the code was requested. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The address the code is for, lowercased: the email the buyer typed, or for an emailed
     * confirm_saved_payment_method code, the customer's email masked to its first character and
     * domain, such as a•••@example.com. Omitted for a texted confirm_saved_payment_method code.
     */
    "email"?: string;
    /**
     * When the code stops working: 15 minutes after the request for an emailed code, and 10
     * minutes after the text provider first sent a texted code, which a new request within them
     * texts again. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Last two digits of the number a texted code went to, so the buyer knows which phone to
     * check. Set only for channel sms.
     */
    "phone_last_digits"?: string;
    /**
     * Why the buyer asked for the code, as sent in the request. Value enum: "gift_card_purchase",
     * "save_payment_method", "use_saved_payment_methods", "confirm_saved_payment_method".
     */
    "purpose": "gift_card_purchase"
        | "save_payment_method"
        | "use_saved_payment_methods"
        | "confirm_saved_payment_method"
        | (string & {});
    /**
     * Lifecycle actions available on this code request. Contains confirm before expires_at; empty
     * once the code expires. A wrong code is refused without revealing whether a code was sent. []
     * enum: "confirm". [] (Value): string. Value enum: "confirm".
     */
    "supported_actions": Array<"confirm" | (string & {})>;
};
export type CheckoutSessionCustomerVerificationConfirmationResponse = CheckoutSessionLaunchResponse;
/** A response containing `CheckoutSessionCustomerVerification` data. */
export type CheckoutSessionCustomerVerificationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A request for a checkout
     * verification code. A request with channel email reads the same whether or not Flint sent a
     * code.
     */
    "data": CheckoutSessionCustomerVerification;
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
export type CheckoutSessionExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
            "terminal_reason"?: "payment_succeeded"
                | "payment_partially_succeeded"
                | "expired"
                | "closed_by_merchant"
                | "order_mutated"
                | "superseded"
                | "order_paid_elsewhere"
                | "invoice_paid_elsewhere"
                | "invoice_voided"
                | "invoice_uncollectible"
                | "invoice_balance_changed"
                | (string & {});
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "checkout_session.expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
            "terminal_reason"?: "payment_succeeded"
                | "payment_partially_succeeded"
                | "expired"
                | "closed_by_merchant"
                | "order_mutated"
                | "superseded"
                | "order_paid_elsewhere"
                | "invoice_paid_elsewhere"
                | "invoice_voided"
                | "invoice_uncollectible"
                | "invoice_balance_changed"
                | (string & {});
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "checkout_session.expired";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "checkout_session.expired";
});
/**
 * The `checkout_session.expired` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type CheckoutSessionExpiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
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
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
             */
            "terminal_reason"?: "payment_succeeded"
                | "payment_partially_succeeded"
                | "expired"
                | "closed_by_merchant"
                | "order_mutated"
                | "superseded"
                | "order_paid_elsewhere"
                | "invoice_paid_elsewhere"
                | "invoice_voided"
                | "invoice_uncollectible"
                | "invoice_balance_changed"
                | (string & {});
            /**
             * The theme checkout renders with: your branding settings, with the session's `title`,
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
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
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "checkout_session.expired". */
    "event_type"?: "checkout_session.expired";
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
 * The `checkout_session.expired` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
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
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
             */
            "terminal_reason"?: "payment_succeeded"
                | "payment_partially_succeeded"
                | "expired"
                | "closed_by_merchant"
                | "order_mutated"
                | "superseded"
                | "order_paid_elsewhere"
                | "invoice_paid_elsewhere"
                | "invoice_voided"
                | "invoice_uncollectible"
                | "invoice_balance_changed"
                | (string & {});
            /**
             * The theme checkout renders with: your branding settings, with the session's `title`,
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
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
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "checkout_session.expired". */
    "event_type"?: "checkout_session.expired";
});
