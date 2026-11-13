import type { CategoryReference, CategoriesDeleteParams } from './types-5.js';
import type { ImageAttachment, GiftCardProductConfigurationRequestInput } from './types-27.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-37.js';
import type { ModifierSet, MoneyValue, MetadataRequestInput, MoneyValueInput } from './types-38.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { Product, ProductOption, ProductPriceRange } from './types-49.js';
import type { Dimensions, DimensionsRequestInput, DisputesAcceptParams } from './types-23.js';
import type { GiftCardProductConfiguration } from './types-26.js';
import type { QuantityPriceBreak, QuantityPriceBreakRequestInput } from './types-52.js';
import type { SelectedProductOption } from './types-59.js';
import type { Weight, WeightRequestInput } from './types-69.js';
import type { InventoryRoutingSource } from './types-30.js';
import type { ResponseMeta } from './types-54.js';
import type { ImageRequest, ImageRequestInput } from './types-28.js';
import type { InventoryItemCreateRequest, InventoryItemCreateRequestInput } from './types-29.js';
import type { InputValue } from '../runtime.js';
import type { CreateProductRequestInput } from './types-11.js';
import type { BundlesGetParams } from './types-1.js';
import type { UpdateProductRequestInput, UpdateProductVariantRequestInput } from './types-67.js';
import type {
    PromotionCodesSummary,
    PromotionCombinesWith,
    PromotionExclusivity,
    PromotionRuleGroup,
    PromotionSchedule,
    PromotionRecurrence,
    PromotionRuleGroupRequest,
    PromotionRecurrenceRequestInput,
    PromotionRuleGroupRequestInput,
    PromotionPercentOffMethod,
    PromotionPercentOffMethodRequest,
    PromotionPercentOffMethodRequestInput
} from './types-51.js';
import type { CreatePromotionCodeRequestInput } from './types-12.js';
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
export type ProductVariantRequest = ({
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
});
/** The request body for: Create product variant. */
export type ProductVariantRequestInput = ({
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
    "gift_card_configuration"?: GiftCardProductConfigurationRequestInput;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * New inventory item to create and track for this variant. Send either inventory_item or
     * inventory_item_id. Inventory item details you supply when creating an inventory item for a
     * product variant: `name`, `sku`, `barcode`, and metadata.
     */
    "inventory_item"?: InventoryItemCreateRequestInput;
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
        | "admission";
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
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
     * QuantityPriceBreakRequestInput}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks"?: Array<QuantityPriceBreakRequestInput>;
    /**
     * Calendar release date in YYYY-MM-DD format. Omit or send null for no release date. Lines
     * created before this date in the merchant timezone are pre-orders. Format: date. minLength:
     * 1. Example: "2026-08-02".
     */
    "release_date"?: string | null;
    /**
     * Option name and value selections for this variant. When present on an update, replaces the
     * entire selection. Omit to leave unchanged. Select one active value for every active option.
     * null is invalid. [] (Value): {@link ProductVariantSelectedOptionRequestInput}. An option
     * name and value you choose to identify a product variant, such as Size and Large.
     */
    "selected_options"?: Array<ProductVariantSelectedOptionRequestInput>;
    /** Stock keeping unit assigned to this sellable item. minLength: 1. maxLength: 100. */
    "sku"?: string;
    /**
     * Whether the variant is active or inactive. An inactive variant cannot be sold. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsRequestInput;
    /**
     * Base unit price in the currency's smallest unit. It applies below the first quantity price
     * break. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightRequestInput;
})
    & ({
    "inventory_item"?: never;
} | {
    "inventory_item_id"?: never;
});
/** A response containing `ProductVariant` data. */
export type ProductVariantResponse = {
    /** The requested product variant data. A specific purchasable version of a product. */
    "data": ProductVariant;
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
/** An option name and value you choose to identify a product variant, such as Size and Large. */
export type ProductVariantSelectedOptionRequest = {
    /**
     * Name of one of the product's options. Limited to 255 characters (Unicode code points) before
     * trimming surrounding whitespace. Matches case-insensitively after trimming surrounding
     * whitespace. On a variant update, an option that is no longer active is accepted only when
     * the entry matches the variant's current selection for that option; omit it to keep that
     * selection. minLength: 1. maxLength: 255.
     */
    "option_name": string;
    /**
     * Value of the named option. Limited to 255 characters (Unicode code points) before trimming
     * surrounding whitespace. Matches the option's values case-insensitively after trimming
     * surrounding whitespace. A value that is no longer active is accepted only on a variant
     * update, when it matches the variant's current selection for that option. minLength: 1.
     * maxLength: 255.
     */
    "value": string;
};
/** An option name and value you choose to identify a product variant, such as Size and Large. */
export type ProductVariantSelectedOptionRequestInput = ProductVariantSelectedOptionRequest;
export type ProductVariantUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    "event_type"?: "product_variant.updated";
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
    "event_type"?: "product_variant.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "product_variant.updated";
});
/**
 * The `product_variant.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ProductVariantUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "product_variant.updated". */
    "event_type"?: "product_variant.updated";
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
 * The `product_variant.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductVariantUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "product_variant.updated". */
    "event_type"?: "product_variant.updated";
});
export type ProductsCreateParams = (CreateProductRequestInput)
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
export type ProductsCreateVariantParams = (InputValue<ProductVariantRequestInput>)
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
export type ProductsDeleteParams = {
    /**
     * Optional product version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
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
export type ProductsDeleteVariantParams = {
    /**
     * Optional product variant version last read by the caller. Format: uint64. minimum: 1.
     * maximum: 9007199254740991.
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
export type ProductsGetOptionParams = DisputesAcceptParams;
export type ProductsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: modifier_set, variants,
     * variants.modifier_set. Expand the attached modifier set. Limits: at most 10 unique expand
     * paths per request. To-many expansions are capped at 250 related objects per path. Products
     * have at most 250 non-archived variants. [] enum: "modifier_set", "variants",
     * "variants.modifier_set". Value enum: "modifier_set", "variants", "variants.modifier_set".
     * anyOf[1] (Value): Array of string. [] enum: "modifier_set", "variants",
     * "variants.modifier_set". anyOf[1][] (Value): string. Value enum: "modifier_set", "variants",
     * "variants.modifier_set". anyOf[2] (Value): string. Value enum: "modifier_set", "variants",
     * "variants.modifier_set".
     */
    "expand"?: InputValue<("modifier_set" | "variants" | "variants.modifier_set")
        | readonly ("modifier_set" | "variants" | "variants.modifier_set")[]>;
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
export type ProductsGetVariantParams = BundlesGetParams;
export type ProductsListOptionsParams = {
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
export type ProductsListParams = {
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
     * Filter by product type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "physical", "service", "fee", "digital", "gift_card". Value enum:
     * "physical", "service", "fee", "digital", "gift_card". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "physical", "service", "fee", "digital", "gift_card". anyOf[1][]
     * (Value): string. Value enum: "physical", "service", "fee", "digital", "gift_card". anyOf[2]
     * (Value): string. Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type"?: InputValue<("physical" | "service" | "fee" | "digital" | "gift_card")
        | readonly ("physical" | "service" | "fee" | "digital" | "gift_card")[]>;
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
    /** Filter by category handle. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$. */
    "category_handle"?: InputValue<string>;
    /**
     * Exact match on the product's own `external_reference_id`. To find a product by a variant's
     * reference, use `variant_external_reference_id`. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Full-value match on ProductVariant.sku, case- and accent-insensitive, with no trimming. All
     * exact variant filters must match the same non-archived variant, including inactive variants.
     * matched_variant is the first matching variant by position, then variant_id; exact predicates
     * take precedence over query for this witness. minLength: 1. maxLength: 100.
     */
    "sku"?: InputValue<string>;
    /**
     * Byte-sensitive whole-value match on ProductVariant.external_reference_id, preserving
     * whitespace, casing, and Unicode. All exact variant filters must match the same non-archived
     * variant. matched_variant is one deterministic witness; page the nested variant list to
     * enumerate all matches. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "variant_external_reference_id"?: InputValue<string>;
    /**
     * Exact match on ProductVariant.inventory_item_id. Multiple variants may share one inventory
     * item; this does not match or synchronize the inventory item's SKU. On products, all exact
     * variant filters must match the same non-archived variant. pattern:
     * ^invi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: InputValue<string>;
    /**
     * Search across product ID, external reference ID, name, description, and SKU. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as prod_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter products with at least one non-deleted variant assigned to this delivery profile.
     * pattern: ^dprof_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Filter by aggregated delivery readiness across non-deleted variants. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "configured", "action_required",
     * "not_applicable". Value enum: "configured", "action_required", "not_applicable". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "configured", "action_required",
     * "not_applicable". anyOf[1][] (Value): string. Value enum: "configured", "action_required",
     * "not_applicable". anyOf[2] (Value): string. Value enum: "configured", "action_required",
     * "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<("configured" | "action_required" | "not_applicable")
        | readonly ("configured" | "action_required" | "not_applicable")[]>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by product_id. Default:
     * "created_at". Value enum: "name", "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
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
     * Include related objects in the response. Supported expansions: modifier_set, variants,
     * variants.modifier_set. Include the requested related resources using scoped batch reads for
     * this page. Each relationship requires its existing target read scopes. Expansion changes the
     * representation without changing pagination tokens. Limits: at most 10 unique expand paths
     * per request. To-many expansions are capped at 250 related objects per path. Products have at
     * most 250 non-archived variants. A page includes at most 500 expanded variants and ends
     * before the first product that would exceed this budget, always returning at least one
     * product. Follow next_page_token; a product's variants are never split across pages. [] enum:
     * "modifier_set", "variants", "variants.modifier_set". Value enum: "modifier_set", "variants",
     * "variants.modifier_set". anyOf[1] (Value): Array of string. [] enum: "modifier_set",
     * "variants", "variants.modifier_set". anyOf[1][] (Value): string. Value enum: "modifier_set",
     * "variants", "variants.modifier_set". anyOf[2] (Value): string. Value enum: "modifier_set",
     * "variants", "variants.modifier_set".
     */
    "expand"?: InputValue<("modifier_set" | "variants" | "variants.modifier_set")
        | readonly ("modifier_set" | "variants" | "variants.modifier_set")[]>;
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
export type ProductsListVariantsParams = {
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
    /**
     * Byte-sensitive whole-value match on ProductVariant.external_reference_id, preserving
     * whitespace, casing, and Unicode. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Full-value match on ProductVariant.sku, case- and accent-insensitive, with no trimming. Does
     * not search the inventory item's SKU. minLength: 1. maxLength: 100.
     */
    "sku"?: InputValue<string>;
    /**
     * Exact match on ProductVariant.inventory_item_id. Multiple variants may share one inventory
     * item; this does not match or synchronize the inventory item's SKU. On products, all exact
     * variant filters must match the same non-archived variant. pattern:
     * ^invi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: InputValue<string>;
    /**
     * Search across variant ID, external reference ID, name, SKU, and barcode. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as var_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to position; ties are broken by variant_id. Default: "position".
     * Value enum: "position", "created_at", "updated_at", "unit_price_money".
     */
    "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price_money">;
    /**
     * Sort direction. Defaults to asc for position and desc for other sort fields. Default: "asc".
     * Value enum: "asc", "desc".
     */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by assigned delivery profile ID. pattern: ^dprof_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Filter by delivery readiness. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "configured", "action_required", "not_applicable". Value enum: "configured",
     * "action_required", "not_applicable". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "configured", "action_required", "not_applicable". anyOf[1][] (Value): string. Value
     * enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): string. Value
     * enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<("configured" | "action_required" | "not_applicable")
        | readonly ("configured" | "action_required" | "not_applicable")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: modifier_set. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum:
     * "modifier_set". Value enum: "modifier_set". anyOf[1] (Value): Array of string. [] enum:
     * "modifier_set". anyOf[1][] (Value): string. Value enum: "modifier_set". anyOf[2] (Value):
     * string. Value enum: "modifier_set".
     */
    "expand"?: InputValue<("modifier_set") | readonly ("modifier_set")[]>;
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
export type ProductsUpdateParams = (InputValue<UpdateProductRequestInput>)
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
export type ProductsUpdateVariantParams = (InputValue<UpdateProductVariantRequestInput>)
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
 * Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored
 * by combines_with. Frozen subscription-term promotions are admitted first and are exempt from
 * exclusivity, combines_with, and the cap. Candidates include codes being applied, existing
 * promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its
 * highest-priority member, then the larger standalone discount, earlier created_at, and lower
 * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
 * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
 * promotions do not allow each other's discount class. Admitted promotions price line item first,
 * then order, then service charge. A zero-value promotion is dropped and selection runs again.
 */
export type Promotion = {
    /**
     * Discount effect and how it applies to eligible items or charges. A flat application method
     * whose type selects its effect fields.
     */
    "application_method": PromotionApplicationMethod;
    /**
     * Whether the promotion can apply right now: it is active, inside its schedule, under its
     * max_uses, and, when code-gated, has at least one redeemable code.
     */
    "available": boolean;
    /**
     * The codes this request created, in request order. Present only on the `POST /v1/promotions`
     * response, where it is `[]` for a promotion created without codes. Read codes later with `GET
     * /v1/promotion-codes?promotion_id=`. [] (Value): {@link PromotionCode}. A code a buyer enters
     * to claim a promotion.
     */
    "codes"?: Array<PromotionCode>;
    /**
     * Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic
     * promotions omit it. A count of a promotion's codes, including how many are redeemable now
     * and the newest redeemable code.
     */
    "codes_summary"?: PromotionCodesSummary;
    /**
     * Which promotion discount classes this promotion may share an order with. Both promotions
     * must allow each other's class. Manual discounts are ignored. See Promotion for the
     * evaluation order. Which kinds of discounts a promotion can combine with: line item, order,
     * and service charge discounts.
     */
    "combines_with": PromotionCombinesWith;
    /**
     * When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /** Optional description of the promotion for your own records. */
    "description"?: string;
    /**
     * Whether the promotion discounts the order, individual line items, or service charges. Value
     * enum: "order", "line_item", "service_charge".
     */
    "discount_class": "order" | "line_item" | "service_charge" | (string & {});
    /** Buyer-facing promotion name shown in checkout and order discount surfaces. */
    "display_name": string;
    /**
     * Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has
     * no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or
     * any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid.
     * Omit the field for no rules, or send null where the field is clearable. Responses list rules
     * before nested groups. Under any, a nested group containing only one rule reads back as that
     * rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal
     * scope. These deterministic normalizations stabilize after one round trip.
     * matched_items.subtotal sums the line items matched by the line_item.* rules in the same all
     * group, including its nested groups.
     */
    "eligibility_rules"?: PromotionRuleGroup;
    /**
     * Optional group and priority used to choose one promotion from competing promotions in the
     * same group. See Promotion for the evaluation order. Only one promotion in an exclusivity
     * group continues. See Promotion for the evaluation order.
     */
    "exclusivity"?: PromotionExclusivity;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Omitted when
     * there is no redemption limit. Format: int64.
     */
    "max_uses"?: number;
    /**
     * Maximum reserved and redeemed uses per identified customer across every code and automatic
     * or ID-based application. Checked atomically when payment starts. Failed, canceled, or
     * expired attempts release their reservation; refunds do not restore uses. Counts only within
     * the same merchant and environment; live and test mode are separate. Without an identified
     * customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is
     * no per-customer limit. Format: int64. minimum: 1.
     */
    "max_uses_per_customer": number | null;
    /**
     * Identifier of the merchant that owns the promotion. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Key-value data you attach to the promotion. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Internal promotion name for dashboards, searching, and reporting. */
    "name": string;
    /** Unique identifier for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". */
    "promotion_id": string;
    /**
     * Whether the promotion applies automatically when its rules match or requires a promotion
     * code. Value enum: "automatic", "code".
     */
    "redemption_type": "automatic" | "code" | (string & {});
    /**
     * Optional start and end times that limit when the promotion can apply. When a promotion is
     * active, with a start time, an end time, and the time zone it was entered in.
     */
    "schedule"?: PromotionSchedule;
    /**
     * Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active
     * promotion can still be unavailable: read available. Value enum: "active", "inactive",
     * "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Why available is false. Present only when available is false. Value enum: "inactive",
     * "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
     */
    "unavailable_reason"?: "inactive"
        | "archived"
        | "not_yet_started"
        | "expired"
        | "exhausted"
        | "no_active_codes"
        | (string & {});
    /**
     * When the promotion was last updated, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Number of times the promotion has been redeemed. Format: int64. */
    "uses_count": number;
    /**
     * Persisted owned-state version. Clock-based availability and expanded resources do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** The `amount_off` variant of `PromotionApplicationMethod`. */
export type PromotionAmountOffMethod = {
    /**
     * How the effect is applied across the matched items or charges. each applies the effect to
     * every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items
     * discounts 30 USD, each capped at the item price), and a percent_off is taken from each item.
     * across applies the effect once to the matched set as a whole: a fixed amount_off is the
     * whole amount one time (10 USD off the group total, not prorated per item), and a percent_off
     * is taken from the combined subtotal. For percent_off the two produce the same total and
     * differ only in how the discount is attributed to individual line items; for amount_off they
     * differ by the number of matched items, so set it deliberately. Defaults to each for
     * line_item and service_charge promotions and across for order promotions.
     * max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Positive fixed discount in the primary currency. allocation determines whether it applies to
     * each matched item or once across the matched set. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_off_money": MoneyValue;
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Alternative positive fixed discounts, keyed by currency code. Each Money currency must match
     * its key. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValue>;
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. A rule group is an object with exactly one nonempty all
     * (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
     * invalid. Omit the field for no rules, or send null where the field is clearable. Responses
     * list rules before nested groups. Under any, a nested group containing only one rule reads
     * back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroup;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /** Selects the amount_off discount effect and its allowed fields. Value enum: "amount_off". */
    "type": "amount_off" | (string & {});
};
/** The `amount_off` variant of `PromotionApplicationMethodInput`. */
export type PromotionAmountOffMethodRequest = {
    /**
     * How the effect is applied across the matched items or charges. each applies the effect to
     * every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items
     * discounts 30 USD, each capped at the item price), and a percent_off is taken from each item.
     * across applies the effect once to the matched set as a whole: a fixed amount_off is the
     * whole amount one time (10 USD off the group total, not prorated per item), and a percent_off
     * is taken from the combined subtotal. For percent_off the two produce the same total and
     * differ only in how the discount is attributed to individual line items; for amount_off they
     * differ by the number of matched items, so set it deliberately. Defaults to each for
     * line_item and service_charge promotions and across for order promotions.
     * max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Positive fixed discount in the primary currency. allocation determines whether it applies to
     * each matched item or once across the matched set. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_off_money": MoneyValue;
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Alternative positive fixed discounts, keyed by currency code. Each Money currency must match
     * its key. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValue>;
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. A rule group is an object with exactly one nonempty all
     * (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
     * invalid. Omit the field for no rules, or send null where the field is clearable. Responses
     * list rules before nested groups. Under any, a nested group containing only one rule reads
     * back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroupRequest;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /** Selects the amount_off discount effect and its allowed fields. Value enum: "amount_off". */
    "type": "amount_off" | (string & {});
};
/** The `amount_off` variant of `PromotionApplicationMethodInput`. */
export type PromotionAmountOffMethodRequestInput = {
    /**
     * How the effect is applied across the matched items or charges. each applies the effect to
     * every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items
     * discounts 30 USD, each capped at the item price), and a percent_off is taken from each item.
     * across applies the effect once to the matched set as a whole: a fixed amount_off is the
     * whole amount one time (10 USD off the group total, not prorated per item), and a percent_off
     * is taken from the combined subtotal. For percent_off the two produce the same total and
     * differ only in how the discount is attributed to individual line items; for amount_off they
     * differ by the number of matched items, so set it deliberately. Defaults to each for
     * line_item and service_charge promotions and across for order promotions.
     * max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * Positive fixed discount in the primary currency. allocation determines whether it applies to
     * each matched item or once across the matched set. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_off_money": MoneyValueInput;
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax";
    /**
     * Alternative positive fixed discounts, keyed by currency code. Each Money currency must match
     * its key. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. A rule group is an object with exactly one nonempty all
     * (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
     * invalid. Omit the field for no rules, or send null where the field is clearable. Responses
     * list rules before nested groups. Under any, a nested group containing only one rule reads
     * back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrenceRequestInput;
    /** Selects the amount_off discount effect and its allowed fields. Value enum: "amount_off". */
    "type": "amount_off";
};
/** A flat application method whose type selects its effect fields. */
export type PromotionApplicationMethod = ((PromotionPercentOffMethod)
    | (PromotionAmountOffMethod)
    | (PromotionBuyXGetYMethod)
    | (Record<string, unknown>));
/**
 * Send only application_method fields to change. Omitted fields keep their stored values. Sending
 * a different type replaces the effect with the supplied effect fields; allocation,
 * calculation_basis, recurrence, and discounted_item_rules are preserved unless sent, and
 * discounted_item_rules: null clears the stored rules. Money, recurrence, currency_options, and
 * each rule group are replaced whole when present. null clears only nullable fields.
 * discounted_item_rules cannot be null for buy_x_get_y. minProperties: 1.
 */
export type PromotionApplicationMethodPatch = {
    /**
     * How the effect is allocated. Omitted allocation keeps its stored value; it defaults by
     * discount_class only when no allocation is stored. Changing discount_class does not reset
     * allocation. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Positive fixed discount in the primary currency. allocation determines whether it applies to
     * each matched item or once across the matched set. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_off_money"?: MoneyValue;
    /**
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "buy_min_quantity"?: number;
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Send null to
     * clear it. Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | null | (string & {}) | null;
    /**
     * Alternative positive fixed discounts, keyed by currency code. Each Money currency must match
     * its key. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValue> | null;
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. anyOf[1] (Value): {@link PromotionRuleGroupRequest}. A rule
     * group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested
     * groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or
     * send null where the field is clearable. Responses list rules before nested groups. Under
     * any, a nested group containing only one rule reads back as that rule. Under all, nested
     * groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic
     * normalizations stabilize after one round trip. matched_items.subtotal sums the line items
     * matched by the line_item.* rules in the same all group, including its nested groups.
     * anyOf[2] (Value): null.
     */
    "discounted_item_rules"?: ((PromotionRuleGroupRequest) | (null) | (unknown));
    /**
     * Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items
     * free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off"?: number;
    /**
     * Maximum number of reward units discounted per application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "get_quantity"?: number;
    /**
     * Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit
     * beyond the qualifying and reward quantities. Format: int32. minimum: 1.
     */
    "max_applications_per_order"?: number | null;
    /**
     * Maximum matched units discounted, valid only for percent_off with allocation each. null
     * clears the limit. Fields belonging to another effect return INVALID_REQUEST; send type to
     * change effects. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number | null;
    /** Percentage to discount, from 1 to 100. minimum: 1. maximum: 100. multipleOf: 0.0001. */
    "percent_off"?: number;
    /**
     * Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups.
     */
    "qualifying_item_rules"?: PromotionRuleGroupRequest;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. anyOf[1] (Value): {@link PromotionRecurrence}. How
     * often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever. anyOf[2] (Value): null.
     */
    "recurrence"?: ((PromotionRecurrence) | (null) | (unknown));
    /**
     * Which matching reward items receive the discount: the cheapest, the highest priced, or those
     * added first to the order. Defaults to cheapest. Default: "cheapest". Value enum: "cheapest",
     * "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Discount effect: a percentage, a fixed amount, or a discount on reward items after
     * qualifying purchases. Value enum: "percent_off", "amount_off", "buy_x_get_y".
     */
    "type"?: "percent_off" | "amount_off" | "buy_x_get_y" | (string & {});
};
/**
 * Send only application_method fields to change. Omitted fields keep their stored values. Sending
 * a different type replaces the effect with the supplied effect fields; allocation,
 * calculation_basis, recurrence, and discounted_item_rules are preserved unless sent, and
 * discounted_item_rules: null clears the stored rules. Money, recurrence, currency_options, and
 * each rule group are replaced whole when present. null clears only nullable fields.
 * discounted_item_rules cannot be null for buy_x_get_y. minProperties: 1.
 */
export type PromotionApplicationMethodPatchInput = {
    /**
     * How the effect is allocated. Omitted allocation keeps its stored value; it defaults by
     * discount_class only when no allocation is stored. Changing discount_class does not reset
     * allocation. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * Positive fixed discount in the primary currency. allocation determines whether it applies to
     * each matched item or once across the matched set. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_off_money"?: MoneyValueInput;
    /**
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "buy_min_quantity"?: number;
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Send null to
     * clear it. Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | null;
    /**
     * Alternative positive fixed discounts, keyed by currency code. Each Money currency must match
     * its key. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValueInput> | null;
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. anyOf[1] (Value): {@link PromotionRuleGroupRequestInput}. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups. anyOf[2] (Value): null.
     */
    "discounted_item_rules"?: ((PromotionRuleGroupRequestInput) | (null));
    /**
     * Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items
     * free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off"?: number;
    /**
     * Maximum number of reward units discounted per application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "get_quantity"?: number;
    /**
     * Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit
     * beyond the qualifying and reward quantities. Format: int32. minimum: 1.
     */
    "max_applications_per_order"?: number | null;
    /**
     * Maximum matched units discounted, valid only for percent_off with allocation each. null
     * clears the limit. Fields belonging to another effect return INVALID_REQUEST; send type to
     * change effects. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number | null;
    /** Percentage to discount, from 1 to 100. minimum: 1. maximum: 100. multipleOf: 0.0001. */
    "percent_off"?: number;
    /**
     * Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups.
     */
    "qualifying_item_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. anyOf[1] (Value): {@link
     * PromotionRecurrenceRequestInput}. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever. anyOf[2] (Value): null.
     */
    "recurrence"?: ((PromotionRecurrenceRequestInput) | (null));
    /**
     * Which matching reward items receive the discount: the cheapest, the highest priced, or those
     * added first to the order. Defaults to cheapest. Default: "cheapest". Value enum: "cheapest",
     * "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added";
    /**
     * Discount effect: a percentage, a fixed amount, or a discount on reward items after
     * qualifying purchases. Value enum: "percent_off", "amount_off", "buy_x_get_y".
     */
    "type"?: "percent_off" | "amount_off" | "buy_x_get_y";
};
/** A flat application method whose type selects its effect fields. */
export type PromotionApplicationMethodRequest = ((PromotionPercentOffMethodRequest)
    | (PromotionAmountOffMethodRequest)
    | (PromotionBuyXGetYMethodRequest)
    | (Record<string, unknown>));
/** A flat application method whose type selects its effect fields. */
export type PromotionApplicationMethodRequestInput = ((PromotionPercentOffMethodRequestInput)
    | (PromotionAmountOffMethodRequestInput)
    | (PromotionBuyXGetYMethodRequestInput));
export type PromotionArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "application_method": PromotionApplicationMethod;
            "available": boolean;
            "codes"?: Array<PromotionCode>;
            "codes_summary"?: PromotionCodesSummary;
            "combines_with": PromotionCombinesWith;
            "created_at"?: string;
            "description"?: string;
            "discount_class": "order" | "line_item" | "service_charge" | (string & {});
            "display_name": string;
            "eligibility_rules"?: PromotionRuleGroup;
            "exclusivity"?: PromotionExclusivity;
            "external_reference_id"?: string;
            "max_uses"?: number;
            "max_uses_per_customer": number | null;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "promotion_id": string;
            "redemption_type": "automatic" | "code" | (string & {});
            "schedule"?: PromotionSchedule;
            "status": "active" | "inactive" | "archived" | (string & {});
            "unavailable_reason"?: "inactive"
                | "archived"
                | "not_yet_started"
                | "expired"
                | "exhausted"
                | "no_active_codes"
                | (string & {});
            "updated_at"?: string;
            "uses_count": number;
            "version": number;
        };
        "previous_attributes"?: Partial<Promotion>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "promotion.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "application_method": PromotionApplicationMethod;
            "available": boolean;
            "codes"?: Array<PromotionCode>;
            "codes_summary"?: PromotionCodesSummary;
            "combines_with": PromotionCombinesWith;
            "created_at"?: string;
            "description"?: string;
            "discount_class": "order" | "line_item" | "service_charge" | (string & {});
            "display_name": string;
            "eligibility_rules"?: PromotionRuleGroup;
            "exclusivity"?: PromotionExclusivity;
            "external_reference_id"?: string;
            "max_uses"?: number;
            "max_uses_per_customer": number | null;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "promotion_id": string;
            "redemption_type": "automatic" | "code" | (string & {});
            "schedule"?: PromotionSchedule;
            "status": "active" | "inactive" | "archived" | (string & {});
            "unavailable_reason"?: "inactive"
                | "archived"
                | "not_yet_started"
                | "expired"
                | "exhausted"
                | "no_active_codes"
                | (string & {});
            "updated_at"?: string;
            "uses_count": number;
            "version": number;
        };
        "previous_attributes"?: Partial<Promotion>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "promotion.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "promotion.archived";
});
/**
 * The `promotion.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `codes`. object.application_method (Required): {@link PromotionApplicationMethod}.
     * Discount effect and how it applies to eligible items or charges. A flat application method
     * whose type selects its effect fields. object.available (Required): boolean. Whether the
     * promotion can apply right now: it is active, inside its schedule, under its max_uses, and,
     * when code-gated, has at least one redeemable code. object.codes (Optional): Array of {@link
     * PromotionCode}. The codes this request created, in request order. Present only on the `POST
     * /v1/promotions` response, where it is `[]` for a promotion created without codes. Read codes
     * later with `GET /v1/promotion-codes?promotion_id=`. object.codes[] (Value): {@link
     * PromotionCode}. A code a buyer enters to claim a promotion. object.codes_summary (Optional):
     * {@link PromotionCodesSummary}. Read-only rollup of this promotion's codes. Present only on
     * code-gated promotions; automatic promotions omit it. A count of a promotion's codes,
     * including how many are redeemable now and the newest redeemable code. object.combines_with
     * (Required): {@link PromotionCombinesWith}. Which promotion discount classes this promotion
     * may share an order with. Both promotions must allow each other's class. Manual discounts are
     * ignored. See Promotion for the evaluation order. Which kinds of discounts a promotion can
     * combine with: line item, order, and service charge discounts. object.created_at (Optional):
     * string. When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.description (Optional): string. Optional description of the
     * promotion for your own records. object.discount_class (Required): string. Whether the
     * promotion discounts the order, individual line items, or service charges. Value enum:
     * "order", "line_item", "service_charge". object.display_name (Required): string. Buyer-facing
     * promotion name shown in checkout and order discount surfaces. object.eligibility_rules
     * (Optional): {@link PromotionRuleGroup}. Conditions an order must satisfy for the promotion
     * to apply. Omitted when the promotion has no eligibility conditions. A rule group is an
     * object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups.
     * Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null
     * where the field is clearable. Responses list rules before nested groups. Under any, a nested
     * group containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. object.exclusivity
     * (Optional): {@link PromotionExclusivity}. Optional group and priority used to choose one
     * promotion from competing promotions in the same group. See Promotion for the evaluation
     * order. Only one promotion in an exclusivity group continues. See Promotion for the
     * evaluation order. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.max_uses (Optional): integer. Maximum number of redemptions across all codes and
     * automatic applications. Omitted when there is no redemption limit. Format: int64.
     * object.max_uses_per_customer (Required): integer or null. Maximum reserved and redeemed uses
     * per identified customer across every code and automatic or ID-based application. Checked
     * atomically when payment starts. Failed, canceled, or expired attempts release their
     * reservation; refunds do not restore uses. Counts only within the same merchant and
     * environment; live and test mode are separate. Without an identified customer, returns 409
     * PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit.
     * Format: int64. minimum: 1. object.merchant_id (Optional): string. Identifier of the merchant
     * that owns the promotion. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Key-value data you attach to the promotion. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.name (Required): string. Internal
     * promotion name for dashboards, searching, and reporting. object.promotion_id (Required):
     * string. Unique identifier for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * object.redemption_type (Required): string. Whether the promotion applies automatically when
     * its rules match or requires a promotion code. Value enum: "automatic", "code".
     * object.schedule (Optional): {@link PromotionSchedule}. Optional start and end times that
     * limit when the promotion can apply. When a promotion is active, with a start time, an end
     * time, and the time zone it was entered in. object.status (Required): string. Lifecycle
     * status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can
     * still be unavailable: read available. Value enum: "active", "inactive", "archived".
     * object.unavailable_reason (Optional): string. Why available is false. Present only when
     * available is false. Value enum: "inactive", "archived", "not_yet_started", "expired",
     * "exhausted", "no_active_codes". object.updated_at (Optional): string. When the promotion was
     * last updated, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.uses_count (Required): integer. Number of times the promotion has been redeemed.
     * Format: int64. object.version (Required): integer. Persisted owned-state version.
     * Clock-based availability and expanded resources do not advance this counter. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `codes`.
         * application_method (Required): {@link PromotionApplicationMethod}. Discount effect and
         * how it applies to eligible items or charges. A flat application method whose type
         * selects its effect fields. available (Required): boolean. Whether the promotion can
         * apply right now: it is active, inside its schedule, under its max_uses, and, when
         * code-gated, has at least one redeemable code. codes (Optional): Array of {@link
         * PromotionCode}. The codes this request created, in request order. Present only on the
         * `POST /v1/promotions` response, where it is `[]` for a promotion created without codes.
         * Read codes later with `GET /v1/promotion-codes?promotion_id=`. codes[] (Value): {@link
         * PromotionCode}. A code a buyer enters to claim a promotion. codes_summary (Optional):
         * {@link PromotionCodesSummary}. Read-only rollup of this promotion's codes. Present only
         * on code-gated promotions; automatic promotions omit it. A count of a promotion's codes,
         * including how many are redeemable now and the newest redeemable code. combines_with
         * (Required): {@link PromotionCombinesWith}. Which promotion discount classes this
         * promotion may share an order with. Both promotions must allow each other's class. Manual
         * discounts are ignored. See Promotion for the evaluation order. Which kinds of discounts
         * a promotion can combine with: line item, order, and service charge discounts. created_at
         * (Optional): string. When the promotion was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Optional
         * description of the promotion for your own records. discount_class (Required): string.
         * Whether the promotion discounts the order, individual line items, or service charges.
         * Value enum: "order", "line_item", "service_charge". display_name (Required): string.
         * Buyer-facing promotion name shown in checkout and order discount surfaces.
         * eligibility_rules (Optional): {@link PromotionRuleGroup}. Conditions an order must
         * satisfy for the promotion to apply. Omitted when the promotion has no eligibility
         * conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR)
         * array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit
         * the field for no rules, or send null where the field is clearable. Responses list rules
         * before nested groups. Under any, a nested group containing only one rule reads back as
         * that rule. Under all, nested groups keep their boundaries to preserve
         * matched_items.subtotal scope. These deterministic normalizations stabilize after one
         * round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
         * in the same all group, including its nested groups. exclusivity (Optional): {@link
         * PromotionExclusivity}. Optional group and priority used to choose one promotion from
         * competing promotions in the same group. See Promotion for the evaluation order. Only one
         * promotion in an exclusivity group continues. See Promotion for the evaluation order.
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_uses (Optional):
         * integer. Maximum number of redemptions across all codes and automatic applications.
         * Omitted when there is no redemption limit. Format: int64. max_uses_per_customer
         * (Required): integer or null. Maximum reserved and redeemed uses per identified customer
         * across every code and automatic or ID-based application. Checked atomically when payment
         * starts. Failed, canceled, or expired attempts release their reservation; refunds do not
         * restore uses. Counts only within the same merchant and environment; live and test mode
         * are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason
         * customer_required. Null when there is no per-customer limit. Format: int64. minimum: 1.
         * merchant_id (Optional): string. Identifier of the merchant that owns the promotion.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}.
         * Key-value data you attach to the promotion. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Internal promotion name for
         * dashboards, searching, and reporting. promotion_id (Required): string. Unique identifier
         * for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". redemption_type
         * (Required): string. Whether the promotion applies automatically when its rules match or
         * requires a promotion code. Value enum: "automatic", "code". schedule (Optional): {@link
         * PromotionSchedule}. Optional start and end times that limit when the promotion can
         * apply. When a promotion is active, with a start time, an end time, and the time zone it
         * was entered in. status (Required): string. Lifecycle status. Set active or inactive with
         * PATCH; DELETE sets archived. An active promotion can still be unavailable: read
         * available. Value enum: "active", "inactive", "archived". unavailable_reason (Optional):
         * string. Why available is false. Present only when available is false. Value enum:
         * "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
         * updated_at (Optional): string. When the promotion was last updated, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". uses_count (Required):
         * integer. Number of times the promotion has been redeemed. Format: int64. version
         * (Required): integer. Persisted owned-state version. Clock-based availability and
         * expanded resources do not advance this counter. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Discount effect and how it applies to eligible items or charges. A flat application
             * method whose type selects its effect fields.
             */
            "application_method": PromotionApplicationMethod;
            /**
             * Whether the promotion can apply right now: it is active, inside its schedule, under
             * its max_uses, and, when code-gated, has at least one redeemable code.
             */
            "available": boolean;
            /**
             * The codes this request created, in request order. Present only on the `POST
             * /v1/promotions` response, where it is `[]` for a promotion created without codes.
             * Read codes later with `GET /v1/promotion-codes?promotion_id=`. [] (Value): {@link
             * PromotionCode}. A code a buyer enters to claim a promotion.
             */
            "codes"?: Array<PromotionCode>;
            /**
             * Read-only rollup of this promotion's codes. Present only on code-gated promotions;
             * automatic promotions omit it. A count of a promotion's codes, including how many are
             * redeemable now and the newest redeemable code.
             */
            "codes_summary"?: PromotionCodesSummary;
            /**
             * Which promotion discount classes this promotion may share an order with. Both
             * promotions must allow each other's class. Manual discounts are ignored. See
             * Promotion for the evaluation order. Which kinds of discounts a promotion can combine
             * with: line item, order, and service charge discounts.
             */
            "combines_with": PromotionCombinesWith;
            /**
             * When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /** Optional description of the promotion for your own records. */
            "description"?: string;
            /**
             * Whether the promotion discounts the order, individual line items, or service
             * charges. Value enum: "order", "line_item", "service_charge".
             */
            "discount_class": "order" | "line_item" | "service_charge" | (string & {});
            /** Buyer-facing promotion name shown in checkout and order discount surfaces. */
            "display_name": string;
            /**
             * Conditions an order must satisfy for the promotion to apply. Omitted when the
             * promotion has no eligibility conditions. A rule group is an object with exactly one
             * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
             * groups, and a rules key are invalid. Omit the field for no rules, or send null where
             * the field is clearable. Responses list rules before nested groups. Under any, a
             * nested group containing only one rule reads back as that rule. Under all, nested
             * groups keep their boundaries to preserve matched_items.subtotal scope. These
             * deterministic normalizations stabilize after one round trip. matched_items.subtotal
             * sums the line items matched by the line_item.* rules in the same all group,
             * including its nested groups.
             */
            "eligibility_rules"?: PromotionRuleGroup;
            /**
             * Optional group and priority used to choose one promotion from competing promotions
             * in the same group. See Promotion for the evaluation order. Only one promotion in an
             * exclusivity group continues. See Promotion for the evaluation order.
             */
            "exclusivity"?: PromotionExclusivity;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum number of redemptions across all codes and automatic applications. Omitted
             * when there is no redemption limit. Format: int64.
             */
            "max_uses"?: number;
            /**
             * Maximum reserved and redeemed uses per identified customer across every code and
             * automatic or ID-based application. Checked atomically when payment starts. Failed,
             * canceled, or expired attempts release their reservation; refunds do not restore
             * uses. Counts only within the same merchant and environment; live and test mode are
             * separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason
             * customer_required. Null when there is no per-customer limit. Format: int64. minimum:
             * 1.
             */
            "max_uses_per_customer": number | null;
            /**
             * Identifier of the merchant that owns the promotion. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Key-value data you attach to the promotion. Caller-owned key-value data stored on a
             * resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Internal promotion name for dashboards, searching, and reporting. */
            "name": string;
            /** Unique identifier for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". */
            "promotion_id": string;
            /**
             * Whether the promotion applies automatically when its rules match or requires a
             * promotion code. Value enum: "automatic", "code".
             */
            "redemption_type": "automatic" | "code" | (string & {});
            /**
             * Optional start and end times that limit when the promotion can apply. When a
             * promotion is active, with a start time, an end time, and the time zone it was
             * entered in.
             */
            "schedule"?: PromotionSchedule;
            /**
             * Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active
             * promotion can still be unavailable: read available. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Why available is false. Present only when available is false. Value enum:
             * "inactive", "archived", "not_yet_started", "expired", "exhausted",
             * "no_active_codes".
             */
            "unavailable_reason"?: "inactive"
                | "archived"
                | "not_yet_started"
                | "expired"
                | "exhausted"
                | "no_active_codes"
                | (string & {});
            /**
             * When the promotion was last updated, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of times the promotion has been redeemed. Format: int64. */
            "uses_count": number;
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
        "previous_attributes"?: Partial<Promotion>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "promotion.archived". */
    "event_type"?: "promotion.archived";
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
 * The `promotion.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `codes`. object.application_method (Required): {@link PromotionApplicationMethod}.
     * Discount effect and how it applies to eligible items or charges. A flat application method
     * whose type selects its effect fields. object.available (Required): boolean. Whether the
     * promotion can apply right now: it is active, inside its schedule, under its max_uses, and,
     * when code-gated, has at least one redeemable code. object.codes (Optional): Array of {@link
     * PromotionCode}. The codes this request created, in request order. Present only on the `POST
     * /v1/promotions` response, where it is `[]` for a promotion created without codes. Read codes
     * later with `GET /v1/promotion-codes?promotion_id=`. object.codes[] (Value): {@link
     * PromotionCode}. A code a buyer enters to claim a promotion. object.codes_summary (Optional):
     * {@link PromotionCodesSummary}. Read-only rollup of this promotion's codes. Present only on
     * code-gated promotions; automatic promotions omit it. A count of a promotion's codes,
     * including how many are redeemable now and the newest redeemable code. object.combines_with
     * (Required): {@link PromotionCombinesWith}. Which promotion discount classes this promotion
     * may share an order with. Both promotions must allow each other's class. Manual discounts are
     * ignored. See Promotion for the evaluation order. Which kinds of discounts a promotion can
     * combine with: line item, order, and service charge discounts. object.created_at (Optional):
     * string. When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.description (Optional): string. Optional description of the
     * promotion for your own records. object.discount_class (Required): string. Whether the
     * promotion discounts the order, individual line items, or service charges. Value enum:
     * "order", "line_item", "service_charge". object.display_name (Required): string. Buyer-facing
     * promotion name shown in checkout and order discount surfaces. object.eligibility_rules
     * (Optional): {@link PromotionRuleGroup}. Conditions an order must satisfy for the promotion
     * to apply. Omitted when the promotion has no eligibility conditions. A rule group is an
     * object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups.
     * Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null
     * where the field is clearable. Responses list rules before nested groups. Under any, a nested
     * group containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. object.exclusivity
     * (Optional): {@link PromotionExclusivity}. Optional group and priority used to choose one
     * promotion from competing promotions in the same group. See Promotion for the evaluation
     * order. Only one promotion in an exclusivity group continues. See Promotion for the
     * evaluation order. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.max_uses (Optional): integer. Maximum number of redemptions across all codes and
     * automatic applications. Omitted when there is no redemption limit. Format: int64.
     * object.max_uses_per_customer (Required): integer or null. Maximum reserved and redeemed uses
     * per identified customer across every code and automatic or ID-based application. Checked
     * atomically when payment starts. Failed, canceled, or expired attempts release their
     * reservation; refunds do not restore uses. Counts only within the same merchant and
     * environment; live and test mode are separate. Without an identified customer, returns 409
     * PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit.
     * Format: int64. minimum: 1. object.merchant_id (Optional): string. Identifier of the merchant
     * that owns the promotion. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Key-value data you attach to the promotion. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.name (Required): string. Internal
     * promotion name for dashboards, searching, and reporting. object.promotion_id (Required):
     * string. Unique identifier for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * object.redemption_type (Required): string. Whether the promotion applies automatically when
     * its rules match or requires a promotion code. Value enum: "automatic", "code".
     * object.schedule (Optional): {@link PromotionSchedule}. Optional start and end times that
     * limit when the promotion can apply. When a promotion is active, with a start time, an end
     * time, and the time zone it was entered in. object.status (Required): string. Lifecycle
     * status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can
     * still be unavailable: read available. Value enum: "active", "inactive", "archived".
     * object.unavailable_reason (Optional): string. Why available is false. Present only when
     * available is false. Value enum: "inactive", "archived", "not_yet_started", "expired",
     * "exhausted", "no_active_codes". object.updated_at (Optional): string. When the promotion was
     * last updated, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.uses_count (Required): integer. Number of times the promotion has been redeemed.
     * Format: int64. object.version (Required): integer. Persisted owned-state version.
     * Clock-based availability and expanded resources do not advance this counter. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `codes`.
         * application_method (Required): {@link PromotionApplicationMethod}. Discount effect and
         * how it applies to eligible items or charges. A flat application method whose type
         * selects its effect fields. available (Required): boolean. Whether the promotion can
         * apply right now: it is active, inside its schedule, under its max_uses, and, when
         * code-gated, has at least one redeemable code. codes (Optional): Array of {@link
         * PromotionCode}. The codes this request created, in request order. Present only on the
         * `POST /v1/promotions` response, where it is `[]` for a promotion created without codes.
         * Read codes later with `GET /v1/promotion-codes?promotion_id=`. codes[] (Value): {@link
         * PromotionCode}. A code a buyer enters to claim a promotion. codes_summary (Optional):
         * {@link PromotionCodesSummary}. Read-only rollup of this promotion's codes. Present only
         * on code-gated promotions; automatic promotions omit it. A count of a promotion's codes,
         * including how many are redeemable now and the newest redeemable code. combines_with
         * (Required): {@link PromotionCombinesWith}. Which promotion discount classes this
         * promotion may share an order with. Both promotions must allow each other's class. Manual
         * discounts are ignored. See Promotion for the evaluation order. Which kinds of discounts
         * a promotion can combine with: line item, order, and service charge discounts. created_at
         * (Optional): string. When the promotion was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Optional
         * description of the promotion for your own records. discount_class (Required): string.
         * Whether the promotion discounts the order, individual line items, or service charges.
         * Value enum: "order", "line_item", "service_charge". display_name (Required): string.
         * Buyer-facing promotion name shown in checkout and order discount surfaces.
         * eligibility_rules (Optional): {@link PromotionRuleGroup}. Conditions an order must
         * satisfy for the promotion to apply. Omitted when the promotion has no eligibility
         * conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR)
         * array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit
         * the field for no rules, or send null where the field is clearable. Responses list rules
         * before nested groups. Under any, a nested group containing only one rule reads back as
         * that rule. Under all, nested groups keep their boundaries to preserve
         * matched_items.subtotal scope. These deterministic normalizations stabilize after one
         * round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
         * in the same all group, including its nested groups. exclusivity (Optional): {@link
         * PromotionExclusivity}. Optional group and priority used to choose one promotion from
         * competing promotions in the same group. See Promotion for the evaluation order. Only one
         * promotion in an exclusivity group continues. See Promotion for the evaluation order.
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_uses (Optional):
         * integer. Maximum number of redemptions across all codes and automatic applications.
         * Omitted when there is no redemption limit. Format: int64. max_uses_per_customer
         * (Required): integer or null. Maximum reserved and redeemed uses per identified customer
         * across every code and automatic or ID-based application. Checked atomically when payment
         * starts. Failed, canceled, or expired attempts release their reservation; refunds do not
         * restore uses. Counts only within the same merchant and environment; live and test mode
         * are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason
         * customer_required. Null when there is no per-customer limit. Format: int64. minimum: 1.
         * merchant_id (Optional): string. Identifier of the merchant that owns the promotion.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}.
         * Key-value data you attach to the promotion. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Internal promotion name for
         * dashboards, searching, and reporting. promotion_id (Required): string. Unique identifier
         * for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". redemption_type
         * (Required): string. Whether the promotion applies automatically when its rules match or
         * requires a promotion code. Value enum: "automatic", "code". schedule (Optional): {@link
         * PromotionSchedule}. Optional start and end times that limit when the promotion can
         * apply. When a promotion is active, with a start time, an end time, and the time zone it
         * was entered in. status (Required): string. Lifecycle status. Set active or inactive with
         * PATCH; DELETE sets archived. An active promotion can still be unavailable: read
         * available. Value enum: "active", "inactive", "archived". unavailable_reason (Optional):
         * string. Why available is false. Present only when available is false. Value enum:
         * "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
         * updated_at (Optional): string. When the promotion was last updated, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". uses_count (Required):
         * integer. Number of times the promotion has been redeemed. Format: int64. version
         * (Required): integer. Persisted owned-state version. Clock-based availability and
         * expanded resources do not advance this counter. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Discount effect and how it applies to eligible items or charges. A flat application
             * method whose type selects its effect fields.
             */
            "application_method": PromotionApplicationMethod;
            /**
             * Whether the promotion can apply right now: it is active, inside its schedule, under
             * its max_uses, and, when code-gated, has at least one redeemable code.
             */
            "available": boolean;
            /**
             * The codes this request created, in request order. Present only on the `POST
             * /v1/promotions` response, where it is `[]` for a promotion created without codes.
             * Read codes later with `GET /v1/promotion-codes?promotion_id=`. [] (Value): {@link
             * PromotionCode}. A code a buyer enters to claim a promotion.
             */
            "codes"?: Array<PromotionCode>;
            /**
             * Read-only rollup of this promotion's codes. Present only on code-gated promotions;
             * automatic promotions omit it. A count of a promotion's codes, including how many are
             * redeemable now and the newest redeemable code.
             */
            "codes_summary"?: PromotionCodesSummary;
            /**
             * Which promotion discount classes this promotion may share an order with. Both
             * promotions must allow each other's class. Manual discounts are ignored. See
             * Promotion for the evaluation order. Which kinds of discounts a promotion can combine
             * with: line item, order, and service charge discounts.
             */
            "combines_with": PromotionCombinesWith;
            /**
             * When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /** Optional description of the promotion for your own records. */
            "description"?: string;
            /**
             * Whether the promotion discounts the order, individual line items, or service
             * charges. Value enum: "order", "line_item", "service_charge".
             */
            "discount_class": "order" | "line_item" | "service_charge" | (string & {});
            /** Buyer-facing promotion name shown in checkout and order discount surfaces. */
            "display_name": string;
            /**
             * Conditions an order must satisfy for the promotion to apply. Omitted when the
             * promotion has no eligibility conditions. A rule group is an object with exactly one
             * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
             * groups, and a rules key are invalid. Omit the field for no rules, or send null where
             * the field is clearable. Responses list rules before nested groups. Under any, a
             * nested group containing only one rule reads back as that rule. Under all, nested
             * groups keep their boundaries to preserve matched_items.subtotal scope. These
             * deterministic normalizations stabilize after one round trip. matched_items.subtotal
             * sums the line items matched by the line_item.* rules in the same all group,
             * including its nested groups.
             */
            "eligibility_rules"?: PromotionRuleGroup;
            /**
             * Optional group and priority used to choose one promotion from competing promotions
             * in the same group. See Promotion for the evaluation order. Only one promotion in an
             * exclusivity group continues. See Promotion for the evaluation order.
             */
            "exclusivity"?: PromotionExclusivity;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum number of redemptions across all codes and automatic applications. Omitted
             * when there is no redemption limit. Format: int64.
             */
            "max_uses"?: number;
            /**
             * Maximum reserved and redeemed uses per identified customer across every code and
             * automatic or ID-based application. Checked atomically when payment starts. Failed,
             * canceled, or expired attempts release their reservation; refunds do not restore
             * uses. Counts only within the same merchant and environment; live and test mode are
             * separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason
             * customer_required. Null when there is no per-customer limit. Format: int64. minimum:
             * 1.
             */
            "max_uses_per_customer": number | null;
            /**
             * Identifier of the merchant that owns the promotion. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Key-value data you attach to the promotion. Caller-owned key-value data stored on a
             * resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Internal promotion name for dashboards, searching, and reporting. */
            "name": string;
            /** Unique identifier for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". */
            "promotion_id": string;
            /**
             * Whether the promotion applies automatically when its rules match or requires a
             * promotion code. Value enum: "automatic", "code".
             */
            "redemption_type": "automatic" | "code" | (string & {});
            /**
             * Optional start and end times that limit when the promotion can apply. When a
             * promotion is active, with a start time, an end time, and the time zone it was
             * entered in.
             */
            "schedule"?: PromotionSchedule;
            /**
             * Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active
             * promotion can still be unavailable: read available. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Why available is false. Present only when available is false. Value enum:
             * "inactive", "archived", "not_yet_started", "expired", "exhausted",
             * "no_active_codes".
             */
            "unavailable_reason"?: "inactive"
                | "archived"
                | "not_yet_started"
                | "expired"
                | "exhausted"
                | "no_active_codes"
                | (string & {});
            /**
             * When the promotion was last updated, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of times the promotion has been redeemed. Format: int64. */
            "uses_count": number;
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
        "previous_attributes"?: Partial<Promotion>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "promotion.archived". */
    "event_type"?: "promotion.archived";
});
/** The `buy_x_get_y` variant of `PromotionApplicationMethod`. */
export type PromotionBuyXGetYMethod = {
    /**
     * How the effect is applied across the matched items or charges. each applies the effect to
     * every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items
     * discounts 30 USD, each capped at the item price), and a percent_off is taken from each item.
     * across applies the effect once to the matched set as a whole: a fixed amount_off is the
     * whole amount one time (10 USD off the group total, not prorated per item), and a percent_off
     * is taken from the combined subtotal. For percent_off the two produce the same total and
     * differ only in how the discount is attributed to individual line items; for amount_off they
     * differ by the number of matched items, so set it deliberately. Defaults to each for
     * line_item and service_charge promotions and across for order promotions.
     * max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. A rule group is an object with exactly one nonempty all
     * (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
     * invalid. Omit the field for no rules, or send null where the field is clearable. Responses
     * list rules before nested groups. Under any, a nested group containing only one rule reads
     * back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups.
     */
    "discounted_item_rules": PromotionRuleGroup;
    /**
     * Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items
     * free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Maximum number of reward units discounted per application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit
     * beyond the qualifying and reward quantities. Format: int32. minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups.
     */
    "qualifying_item_rules": PromotionRuleGroup;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Which matching reward items receive the discount: the cheapest, the highest priced, or those
     * added first to the order. Defaults to cheapest. Default: "cheapest". Value enum: "cheapest",
     * "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Selects the buy_x_get_y discount effect and its allowed fields. Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y" | (string & {});
};
/** The `buy_x_get_y` variant of `PromotionApplicationMethodInput`. */
export type PromotionBuyXGetYMethodRequest = {
    /**
     * How the effect is applied across the matched items or charges. each applies the effect to
     * every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items
     * discounts 30 USD, each capped at the item price), and a percent_off is taken from each item.
     * across applies the effect once to the matched set as a whole: a fixed amount_off is the
     * whole amount one time (10 USD off the group total, not prorated per item), and a percent_off
     * is taken from the combined subtotal. For percent_off the two produce the same total and
     * differ only in how the discount is attributed to individual line items; for amount_off they
     * differ by the number of matched items, so set it deliberately. Defaults to each for
     * line_item and service_charge promotions and across for order promotions.
     * max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. A rule group is an object with exactly one nonempty all
     * (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
     * invalid. Omit the field for no rules, or send null where the field is clearable. Responses
     * list rules before nested groups. Under any, a nested group containing only one rule reads
     * back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups.
     */
    "discounted_item_rules": PromotionRuleGroupRequest;
    /**
     * Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items
     * free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Maximum number of reward units discounted per application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit
     * beyond the qualifying and reward quantities. Format: int32. minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups.
     */
    "qualifying_item_rules": PromotionRuleGroupRequest;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Which matching reward items receive the discount: the cheapest, the highest priced, or those
     * added first to the order. Defaults to cheapest. Default: "cheapest". Value enum: "cheapest",
     * "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Selects the buy_x_get_y discount effect and its allowed fields. Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y" | (string & {});
};
/** The `buy_x_get_y` variant of `PromotionApplicationMethodInput`. */
export type PromotionBuyXGetYMethodRequestInput = {
    /**
     * How the effect is applied across the matched items or charges. each applies the effect to
     * every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items
     * discounts 30 USD, each capped at the item price), and a percent_off is taken from each item.
     * across applies the effect once to the matched set as a whole: a fixed amount_off is the
     * whole amount one time (10 USD off the group total, not prorated per item), and a percent_off
     * is taken from the combined subtotal. For percent_off the two produce the same total and
     * differ only in how the discount is attributed to individual line items; for amount_off they
     * differ by the number of matched items, so set it deliberately. Defaults to each for
     * line_item and service_charge promotions and across for order promotions.
     * max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax";
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. A rule group is an object with exactly one nonempty all
     * (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
     * invalid. Omit the field for no rules, or send null where the field is clearable. Responses
     * list rules before nested groups. Under any, a nested group containing only one rule reads
     * back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups.
     */
    "discounted_item_rules": PromotionRuleGroupRequestInput;
    /**
     * Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items
     * free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Maximum number of reward units discounted per application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit
     * beyond the qualifying and reward quantities. Format: int32. minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups.
     */
    "qualifying_item_rules": PromotionRuleGroupRequestInput;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrenceRequestInput;
    /**
     * Which matching reward items receive the discount: the cheapest, the highest priced, or those
     * added first to the order. Defaults to cheapest. Default: "cheapest". Value enum: "cheapest",
     * "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added";
    /**
     * Selects the buy_x_get_y discount effect and its allowed fields. Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y";
};
/**
 * A promotion considered for an order, with its discount amounts, its stacking rules, and why it
 * was or was not applied.
 */
export type PromotionCandidate = {
    /**
     * Calculated discount amount for this promotion candidate before final application, when
     * available. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Discount amount applied to the order for candidates in applied[]. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "applied_money"?: MoneyValue;
    /**
     * Which promotion discount classes this promotion may share an order with. Both promotions
     * must allow each other's class. Which kinds of discounts a promotion can combine with: line
     * item, order, and service charge discounts.
     */
    "combines_with"?: PromotionCombinesWith;
    /**
     * Current money amount counted toward threshold_money for available[] candidates. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "current_money"?: MoneyValue;
    /**
     * The name buyers see for the promotion: its `display_name`, or its `name` when it has no
     * display name.
     */
    "customer_facing_name": string;
    /**
     * Whether the promotion discounts the order, individual line items, or service charges. Value
     * enum: "order", "line_item", "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**
     * The promotion's exclusivity group and priority. Promotions in the same group compete, and
     * only one of them applies. Only one promotion in an exclusivity group continues. See
     * Promotion for the evaluation order.
     */
    "exclusivity"?: PromotionExclusivity;
    /**
     * Additional money amount needed to reach threshold_money for available[] candidates. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "gap_money"?: MoneyValue;
    /**
     * IDs of the order charges the discount applies to. Set for `service_charge` promotions. []
     * (Value): string. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_ids"?: Array<string>;
    /**
     * IDs of the order line items the discount applies to. Omitted when it applies to none. []
     * (Value): string. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_ids"?: Array<string>;
    /** The code the buyer entered. Omitted when the promotion applies automatically. */
    "promotion_code"?: string;
    /**
     * ID of the promotion code the buyer entered. Omitted when the promotion applies
     * automatically. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
     */
    "promotion_code_id"?: string;
    /**
     * Why the promotion did not apply, or stopped applying. Omitted for a promotion that applies.
     * Value enum: "already_applied", "automatic_disabled", "buy_item_missing", "code_invalid",
     * "code_required", "codes_disabled", "currency_mismatch", "customer_limit_reached",
     * "customer_mismatch", "customer_required", "exhausted", "expired", "inactive",
     * "max_promotions_reached", "minimum_not_met", "no_discountable_balance", "not_combinable",
     * "not_eligible", "not_yet_started", "recurrence_completed", "superseded",
     * "superseded_by_better_offer", "superseded_by_higher_priority", "unknown_type".
     */
    "promotion_decline_reason"?: "already_applied"
        | "automatic_disabled"
        | "buy_item_missing"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "currency_mismatch"
        | "customer_limit_reached"
        | "customer_mismatch"
        | "customer_required"
        | "exhausted"
        | "expired"
        | "inactive"
        | "max_promotions_reached"
        | "minimum_not_met"
        | "no_discountable_balance"
        | "not_combinable"
        | "not_eligible"
        | "not_yet_started"
        | "recurrence_completed"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "unknown_type"
        | (string & {});
    /** ID of the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". */
    "promotion_id": string;
    /**
     * Minimum money amount required by a threshold rule for available[] candidates. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "threshold_money"?: MoneyValue;
    /**
     * Discount amount this candidate would have applied if it had been eligible and won conflict
     * resolution. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "would_have_applied_money"?: MoneyValue;
};
/** A code a buyer enters to claim a promotion. */
export type PromotionCode = {
    /**
     * Whether a buyer can redeem the code right now: the code is active, not expired, and under
     * its max_uses, and its promotion is available.
     */
    "available": boolean;
    /** Code a buyer enters to redeem the promotion. */
    "code": string;
    /**
     * When the promotion code was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Only this identified customer can redeem the code. The customer must belong to the same
     * merchant and environment. A checkout may use its merchant-named or email-verified customer;
     * a typed email does not identify a customer. Null when the code is unbound. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
    /**
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the
     * code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Maximum number of times this code can be redeemed. Omitted when the code has no redemption
     * limit. Format: int64.
     */
    "max_uses"?: number;
    /**
     * Identifier of the merchant that owns the promotion code. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string;
    /**
     * Key-value data you attach to the promotion code. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * The promotion this code belongs to. Present only when the list request asked for
     * expand=promotion. Promotion evaluation order: manual discounts stay, do not count toward the
     * cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted
     * first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes
     * being applied, existing promotion discounts, and qualifying automatic promotions. Each
     * exclusivity group keeps its highest-priority member, then the larger standalone discount,
     * earlier created_at, and lower promotion_id. Remaining candidates rank by standalone
     * discount, then earlier created_at and lower promotion_id; each is admitted unless
     * max_promotions_per_order is reached or both promotions do not allow each other's discount
     * class. Admitted promotions price line item first, then order, then service charge. A
     * zero-value promotion is dropped and selection runs again.
     */
    "promotion"?: Promotion;
    /** Unique identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". */
    "promotion_code_id": string;
    /**
     * Identifier of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id": string;
    /**
     * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE
     * sets archived. An active code can still be unavailable: read available. Value enum:
     * "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * IANA zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires.
     */
    "timezone"?: string;
    /**
     * Why available is false. Present only when available is false. The code's own state is
     * reported first; promotion_unavailable means the code is usable but its promotion is not.
     * Value enum: "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
     */
    "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
    /**
     * When the promotion code was last updated, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /** Number of times this code has been redeemed. Format: int64. */
    "uses_count": number;
    /**
     * Persisted owned-state version. Clock-based availability and expanded resources do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type PromotionCodeArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available": boolean;
            "code": string;
            "created_at": string;
            "customer_id": string | null;
            "expires_at"?: string;
            "max_uses"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "promotion"?: Promotion;
            "promotion_code_id": string;
            "promotion_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "timezone"?: string;
            "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
            "updated_at": string;
            "uses_count": number;
            "version": number;
        };
        "previous_attributes"?: Partial<PromotionCode>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "promotion_code.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available": boolean;
            "code": string;
            "created_at": string;
            "customer_id": string | null;
            "expires_at"?: string;
            "max_uses"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "promotion"?: Promotion;
            "promotion_code_id": string;
            "promotion_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "timezone"?: string;
            "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
            "updated_at": string;
            "uses_count": number;
            "version": number;
        };
        "previous_attributes"?: Partial<PromotionCode>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "promotion_code.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "promotion_code.archived";
});
/**
 * The `promotion_code.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionCodeArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `promotion`. object.available (Required): boolean. Whether a buyer can redeem the
     * code right now: the code is active, not expired, and under its max_uses, and its promotion
     * is available. object.code (Required): string. Code a buyer enters to redeem the promotion.
     * object.created_at (Required): string. When the promotion code was created, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer_id
     * (Required): string or null. Only this identified customer can redeem the code. The customer
     * must belong to the same merchant and environment. A checkout may use its merchant-named or
     * email-verified customer; a typed email does not identify a customer. Null when the code is
     * unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Optional): string.
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the
     * code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z". object.max_uses
     * (Optional): integer. Maximum number of times this code can be redeemed. Omitted when the
     * code has no redemption limit. Format: int64. object.merchant_id (Required): string.
     * Identifier of the merchant that owns the promotion code. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Key-value
     * data you attach to the promotion code. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.promotion (Optional): {@link Promotion}. The promotion this code
     * belongs to. Present only when the list request asked for expand=promotion. Promotion
     * evaluation order: manual discounts stay, do not count toward the cap, and are ignored by
     * combines_with. Frozen subscription-term promotions are admitted first and are exempt from
     * exclusivity, combines_with, and the cap. Candidates include codes being applied, existing
     * promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again. object.promotion_code_id (Required): string. Unique identifier for the promotion
     * code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". object.promotion_id (Required): string.
     * Identifier of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * object.status (Required): string. Lifecycle status: active, inactive, or archived. Set
     * active or inactive with PATCH; DELETE sets archived. An active code can still be
     * unavailable: read available. Value enum: "active", "inactive", "archived". object.timezone
     * (Optional): string. IANA zone the code's times were entered in, used for display. expires_at
     * is an absolute timestamp, so this does not change when the code expires.
     * object.unavailable_reason (Optional): string. Why available is false. Present only when
     * available is false. The code's own state is reported first; promotion_unavailable means the
     * code is usable but its promotion is not. Value enum: "archived", "inactive", "expired",
     * "exhausted", "promotion_unavailable". object.updated_at (Required): string. When the
     * promotion code was last updated, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.uses_count (Required): integer. Number of times this code has
     * been redeemed. Format: int64. object.version (Required): integer. Persisted owned-state
     * version. Clock-based availability and expanded resources do not advance this counter.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `promotion`.
         * available (Required): boolean. Whether a buyer can redeem the code right now: the code
         * is active, not expired, and under its max_uses, and its promotion is available. code
         * (Required): string. Code a buyer enters to redeem the promotion. created_at (Required):
         * string. When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". customer_id (Required): string or null. Only this
         * identified customer can redeem the code. The customer must belong to the same merchant
         * and environment. A checkout may use its merchant-named or email-verified customer; a
         * typed email does not identify a customer. Null when the code is unbound. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". expires_at (Optional): string. When the code stops
         * being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
         * expire. Format: date-time. Example: "2026-08-02T16:00:00Z". max_uses (Optional):
         * integer. Maximum number of times this code can be redeemed. Omitted when the code has no
         * redemption limit. Format: int64. merchant_id (Required): string. Identifier of the
         * merchant that owns the promotion code. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Key-value data you attach to the promotion
         * code. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
         * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. promotion
         * (Optional): {@link Promotion}. The promotion this code belongs to. Present only when the
         * list request asked for expand=promotion. Promotion evaluation order: manual discounts
         * stay, do not count toward the cap, and are ignored by combines_with. Frozen
         * subscription-term promotions are admitted first and are exempt from exclusivity,
         * combines_with, and the cap. Candidates include codes being applied, existing promotion
         * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
         * highest-priority member, then the larger standalone discount, earlier created_at, and
         * lower promotion_id. Remaining candidates rank by standalone discount, then earlier
         * created_at and lower promotion_id; each is admitted unless max_promotions_per_order is
         * reached or both promotions do not allow each other's discount class. Admitted promotions
         * price line item first, then order, then service charge. A zero-value promotion is
         * dropped and selection runs again. promotion_code_id (Required): string. Unique
         * identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
         * promotion_id (Required): string. Identifier of the promotion this code redeems. Example:
         * "promo_01KEZF7C00QQ8EZ74BDYSZ315V". status (Required): string. Lifecycle status: active,
         * inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An
         * active code can still be unavailable: read available. Value enum: "active", "inactive",
         * "archived". timezone (Optional): string. IANA zone the code's times were entered in,
         * used for display. expires_at is an absolute timestamp, so this does not change when the
         * code expires. unavailable_reason (Optional): string. Why available is false. Present
         * only when available is false. The code's own state is reported first;
         * promotion_unavailable means the code is usable but its promotion is not. Value enum:
         * "archived", "inactive", "expired", "exhausted", "promotion_unavailable". updated_at
         * (Required): string. When the promotion code was last updated, as an RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uses_count (Required): integer.
         * Number of times this code has been redeemed. Format: int64. version (Required): integer.
         * Persisted owned-state version. Clock-based availability and expanded resources do not
         * advance this counter. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available.
             */
            "available": boolean;
            /** Code a buyer enters to redeem the promotion. */
            "code": string;
            /**
             * When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Only this identified customer can redeem the code. The customer must belong to the
             * same merchant and environment. A checkout may use its merchant-named or
             * email-verified customer; a typed email does not identify a customer. Null when the
             * code is unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when
             * the code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /**
             * Maximum number of times this code can be redeemed. Omitted when the code has no
             * redemption limit. Format: int64.
             */
            "max_uses"?: number;
            /**
             * Identifier of the merchant that owns the promotion code. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Key-value data you attach to the promotion code. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The promotion this code belongs to. Present only when the list request asked for
             * expand=promotion. Promotion evaluation order: manual discounts stay, do not count
             * toward the cap, and are ignored by combines_with. Frozen subscription-term
             * promotions are admitted first and are exempt from exclusivity, combines_with, and
             * the cap. Candidates include codes being applied, existing promotion discounts, and
             * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
             * member, then the larger standalone discount, earlier created_at, and lower
             * promotion_id. Remaining candidates rank by standalone discount, then earlier
             * created_at and lower promotion_id; each is admitted unless max_promotions_per_order
             * is reached or both promotions do not allow each other's discount class. Admitted
             * promotions price line item first, then order, then service charge. A zero-value
             * promotion is dropped and selection runs again.
             */
            "promotion"?: Promotion;
            /**
             * Unique identifier for the promotion code. Example:
             * "pcode_01KEZF7C00JCC7QXWC262EF05T".
             */
            "promotion_code_id": string;
            /**
             * Identifier of the promotion this code redeems. Example:
             * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
             */
            "promotion_id": string;
            /**
             * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH;
             * DELETE sets archived. An active code can still be unavailable: read available. Value
             * enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * IANA zone the code's times were entered in, used for display. expires_at is an
             * absolute timestamp, so this does not change when the code expires.
             */
            "timezone"?: string;
            /**
             * Why available is false. Present only when available is false. The code's own state
             * is reported first; promotion_unavailable means the code is usable but its promotion
             * is not. Value enum: "archived", "inactive", "expired", "exhausted",
             * "promotion_unavailable".
             */
            "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
            /**
             * When the promotion code was last updated, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /** Number of times this code has been redeemed. Format: int64. */
            "uses_count": number;
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
        "previous_attributes"?: Partial<PromotionCode>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "promotion_code.archived". */
    "event_type"?: "promotion_code.archived";
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
 * The `promotion_code.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionCodeArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `promotion`. object.available (Required): boolean. Whether a buyer can redeem the
     * code right now: the code is active, not expired, and under its max_uses, and its promotion
     * is available. object.code (Required): string. Code a buyer enters to redeem the promotion.
     * object.created_at (Required): string. When the promotion code was created, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer_id
     * (Required): string or null. Only this identified customer can redeem the code. The customer
     * must belong to the same merchant and environment. A checkout may use its merchant-named or
     * email-verified customer; a typed email does not identify a customer. Null when the code is
     * unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Optional): string.
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the
     * code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z". object.max_uses
     * (Optional): integer. Maximum number of times this code can be redeemed. Omitted when the
     * code has no redemption limit. Format: int64. object.merchant_id (Required): string.
     * Identifier of the merchant that owns the promotion code. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Key-value
     * data you attach to the promotion code. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.promotion (Optional): {@link Promotion}. The promotion this code
     * belongs to. Present only when the list request asked for expand=promotion. Promotion
     * evaluation order: manual discounts stay, do not count toward the cap, and are ignored by
     * combines_with. Frozen subscription-term promotions are admitted first and are exempt from
     * exclusivity, combines_with, and the cap. Candidates include codes being applied, existing
     * promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again. object.promotion_code_id (Required): string. Unique identifier for the promotion
     * code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". object.promotion_id (Required): string.
     * Identifier of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * object.status (Required): string. Lifecycle status: active, inactive, or archived. Set
     * active or inactive with PATCH; DELETE sets archived. An active code can still be
     * unavailable: read available. Value enum: "active", "inactive", "archived". object.timezone
     * (Optional): string. IANA zone the code's times were entered in, used for display. expires_at
     * is an absolute timestamp, so this does not change when the code expires.
     * object.unavailable_reason (Optional): string. Why available is false. Present only when
     * available is false. The code's own state is reported first; promotion_unavailable means the
     * code is usable but its promotion is not. Value enum: "archived", "inactive", "expired",
     * "exhausted", "promotion_unavailable". object.updated_at (Required): string. When the
     * promotion code was last updated, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.uses_count (Required): integer. Number of times this code has
     * been redeemed. Format: int64. object.version (Required): integer. Persisted owned-state
     * version. Clock-based availability and expanded resources do not advance this counter.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `promotion`.
         * available (Required): boolean. Whether a buyer can redeem the code right now: the code
         * is active, not expired, and under its max_uses, and its promotion is available. code
         * (Required): string. Code a buyer enters to redeem the promotion. created_at (Required):
         * string. When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". customer_id (Required): string or null. Only this
         * identified customer can redeem the code. The customer must belong to the same merchant
         * and environment. A checkout may use its merchant-named or email-verified customer; a
         * typed email does not identify a customer. Null when the code is unbound. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". expires_at (Optional): string. When the code stops
         * being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
         * expire. Format: date-time. Example: "2026-08-02T16:00:00Z". max_uses (Optional):
         * integer. Maximum number of times this code can be redeemed. Omitted when the code has no
         * redemption limit. Format: int64. merchant_id (Required): string. Identifier of the
         * merchant that owns the promotion code. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Key-value data you attach to the promotion
         * code. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
         * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. promotion
         * (Optional): {@link Promotion}. The promotion this code belongs to. Present only when the
         * list request asked for expand=promotion. Promotion evaluation order: manual discounts
         * stay, do not count toward the cap, and are ignored by combines_with. Frozen
         * subscription-term promotions are admitted first and are exempt from exclusivity,
         * combines_with, and the cap. Candidates include codes being applied, existing promotion
         * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
         * highest-priority member, then the larger standalone discount, earlier created_at, and
         * lower promotion_id. Remaining candidates rank by standalone discount, then earlier
         * created_at and lower promotion_id; each is admitted unless max_promotions_per_order is
         * reached or both promotions do not allow each other's discount class. Admitted promotions
         * price line item first, then order, then service charge. A zero-value promotion is
         * dropped and selection runs again. promotion_code_id (Required): string. Unique
         * identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
         * promotion_id (Required): string. Identifier of the promotion this code redeems. Example:
         * "promo_01KEZF7C00QQ8EZ74BDYSZ315V". status (Required): string. Lifecycle status: active,
         * inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An
         * active code can still be unavailable: read available. Value enum: "active", "inactive",
         * "archived". timezone (Optional): string. IANA zone the code's times were entered in,
         * used for display. expires_at is an absolute timestamp, so this does not change when the
         * code expires. unavailable_reason (Optional): string. Why available is false. Present
         * only when available is false. The code's own state is reported first;
         * promotion_unavailable means the code is usable but its promotion is not. Value enum:
         * "archived", "inactive", "expired", "exhausted", "promotion_unavailable". updated_at
         * (Required): string. When the promotion code was last updated, as an RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uses_count (Required): integer.
         * Number of times this code has been redeemed. Format: int64. version (Required): integer.
         * Persisted owned-state version. Clock-based availability and expanded resources do not
         * advance this counter. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available.
             */
            "available": boolean;
            /** Code a buyer enters to redeem the promotion. */
            "code": string;
            /**
             * When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Only this identified customer can redeem the code. The customer must belong to the
             * same merchant and environment. A checkout may use its merchant-named or
             * email-verified customer; a typed email does not identify a customer. Null when the
             * code is unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when
             * the code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /**
             * Maximum number of times this code can be redeemed. Omitted when the code has no
             * redemption limit. Format: int64.
             */
            "max_uses"?: number;
            /**
             * Identifier of the merchant that owns the promotion code. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Key-value data you attach to the promotion code. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The promotion this code belongs to. Present only when the list request asked for
             * expand=promotion. Promotion evaluation order: manual discounts stay, do not count
             * toward the cap, and are ignored by combines_with. Frozen subscription-term
             * promotions are admitted first and are exempt from exclusivity, combines_with, and
             * the cap. Candidates include codes being applied, existing promotion discounts, and
             * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
             * member, then the larger standalone discount, earlier created_at, and lower
             * promotion_id. Remaining candidates rank by standalone discount, then earlier
             * created_at and lower promotion_id; each is admitted unless max_promotions_per_order
             * is reached or both promotions do not allow each other's discount class. Admitted
             * promotions price line item first, then order, then service charge. A zero-value
             * promotion is dropped and selection runs again.
             */
            "promotion"?: Promotion;
            /**
             * Unique identifier for the promotion code. Example:
             * "pcode_01KEZF7C00JCC7QXWC262EF05T".
             */
            "promotion_code_id": string;
            /**
             * Identifier of the promotion this code redeems. Example:
             * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
             */
            "promotion_id": string;
            /**
             * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH;
             * DELETE sets archived. An active code can still be unavailable: read available. Value
             * enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * IANA zone the code's times were entered in, used for display. expires_at is an
             * absolute timestamp, so this does not change when the code expires.
             */
            "timezone"?: string;
            /**
             * Why available is false. Present only when available is false. The code's own state
             * is reported first; promotion_unavailable means the code is usable but its promotion
             * is not. Value enum: "archived", "inactive", "expired", "exhausted",
             * "promotion_unavailable".
             */
            "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
            /**
             * When the promotion code was last updated, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /** Number of times this code has been redeemed. Format: int64. */
            "uses_count": number;
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
        "previous_attributes"?: Partial<PromotionCode>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "promotion_code.archived". */
    "event_type"?: "promotion_code.archived";
});
export type PromotionCodeCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available": boolean;
            "code": string;
            "created_at": string;
            "customer_id": string | null;
            "expires_at"?: string;
            "max_uses"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "promotion"?: Promotion;
            "promotion_code_id": string;
            "promotion_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "timezone"?: string;
            "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
            "updated_at": string;
            "uses_count": number;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "promotion_code.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available": boolean;
            "code": string;
            "created_at": string;
            "customer_id": string | null;
            "expires_at"?: string;
            "max_uses"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "promotion"?: Promotion;
            "promotion_code_id": string;
            "promotion_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "timezone"?: string;
            "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
            "updated_at": string;
            "uses_count": number;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "promotion_code.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "promotion_code.created";
});
/**
 * The `promotion_code.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionCodeCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `promotion`. object.available (Required): boolean. Whether a buyer can redeem the
     * code right now: the code is active, not expired, and under its max_uses, and its promotion
     * is available. object.code (Required): string. Code a buyer enters to redeem the promotion.
     * object.created_at (Required): string. When the promotion code was created, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer_id
     * (Required): string or null. Only this identified customer can redeem the code. The customer
     * must belong to the same merchant and environment. A checkout may use its merchant-named or
     * email-verified customer; a typed email does not identify a customer. Null when the code is
     * unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Optional): string.
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the
     * code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z". object.max_uses
     * (Optional): integer. Maximum number of times this code can be redeemed. Omitted when the
     * code has no redemption limit. Format: int64. object.merchant_id (Required): string.
     * Identifier of the merchant that owns the promotion code. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Key-value
     * data you attach to the promotion code. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.promotion (Optional): {@link Promotion}. The promotion this code
     * belongs to. Present only when the list request asked for expand=promotion. Promotion
     * evaluation order: manual discounts stay, do not count toward the cap, and are ignored by
     * combines_with. Frozen subscription-term promotions are admitted first and are exempt from
     * exclusivity, combines_with, and the cap. Candidates include codes being applied, existing
     * promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again. object.promotion_code_id (Required): string. Unique identifier for the promotion
     * code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". object.promotion_id (Required): string.
     * Identifier of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * object.status (Required): string. Lifecycle status: active, inactive, or archived. Set
     * active or inactive with PATCH; DELETE sets archived. An active code can still be
     * unavailable: read available. Value enum: "active", "inactive", "archived". object.timezone
     * (Optional): string. IANA zone the code's times were entered in, used for display. expires_at
     * is an absolute timestamp, so this does not change when the code expires.
     * object.unavailable_reason (Optional): string. Why available is false. Present only when
     * available is false. The code's own state is reported first; promotion_unavailable means the
     * code is usable but its promotion is not. Value enum: "archived", "inactive", "expired",
     * "exhausted", "promotion_unavailable". object.updated_at (Required): string. When the
     * promotion code was last updated, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.uses_count (Required): integer. Number of times this code has
     * been redeemed. Format: int64. object.version (Required): integer. Persisted owned-state
     * version. Clock-based availability and expanded resources do not advance this counter.
     * Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `promotion`.
         * available (Required): boolean. Whether a buyer can redeem the code right now: the code
         * is active, not expired, and under its max_uses, and its promotion is available. code
         * (Required): string. Code a buyer enters to redeem the promotion. created_at (Required):
         * string. When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". customer_id (Required): string or null. Only this
         * identified customer can redeem the code. The customer must belong to the same merchant
         * and environment. A checkout may use its merchant-named or email-verified customer; a
         * typed email does not identify a customer. Null when the code is unbound. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". expires_at (Optional): string. When the code stops
         * being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
         * expire. Format: date-time. Example: "2026-08-02T16:00:00Z". max_uses (Optional):
         * integer. Maximum number of times this code can be redeemed. Omitted when the code has no
         * redemption limit. Format: int64. merchant_id (Required): string. Identifier of the
         * merchant that owns the promotion code. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Key-value data you attach to the promotion
         * code. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
         * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. promotion
         * (Optional): {@link Promotion}. The promotion this code belongs to. Present only when the
         * list request asked for expand=promotion. Promotion evaluation order: manual discounts
         * stay, do not count toward the cap, and are ignored by combines_with. Frozen
         * subscription-term promotions are admitted first and are exempt from exclusivity,
         * combines_with, and the cap. Candidates include codes being applied, existing promotion
         * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
         * highest-priority member, then the larger standalone discount, earlier created_at, and
         * lower promotion_id. Remaining candidates rank by standalone discount, then earlier
         * created_at and lower promotion_id; each is admitted unless max_promotions_per_order is
         * reached or both promotions do not allow each other's discount class. Admitted promotions
         * price line item first, then order, then service charge. A zero-value promotion is
         * dropped and selection runs again. promotion_code_id (Required): string. Unique
         * identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
         * promotion_id (Required): string. Identifier of the promotion this code redeems. Example:
         * "promo_01KEZF7C00QQ8EZ74BDYSZ315V". status (Required): string. Lifecycle status: active,
         * inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An
         * active code can still be unavailable: read available. Value enum: "active", "inactive",
         * "archived". timezone (Optional): string. IANA zone the code's times were entered in,
         * used for display. expires_at is an absolute timestamp, so this does not change when the
         * code expires. unavailable_reason (Optional): string. Why available is false. Present
         * only when available is false. The code's own state is reported first;
         * promotion_unavailable means the code is usable but its promotion is not. Value enum:
         * "archived", "inactive", "expired", "exhausted", "promotion_unavailable". updated_at
         * (Required): string. When the promotion code was last updated, as an RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uses_count (Required): integer.
         * Number of times this code has been redeemed. Format: int64. version (Required): integer.
         * Persisted owned-state version. Clock-based availability and expanded resources do not
         * advance this counter. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available.
             */
            "available": boolean;
            /** Code a buyer enters to redeem the promotion. */
            "code": string;
            /**
             * When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Only this identified customer can redeem the code. The customer must belong to the
             * same merchant and environment. A checkout may use its merchant-named or
             * email-verified customer; a typed email does not identify a customer. Null when the
             * code is unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when
             * the code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /**
             * Maximum number of times this code can be redeemed. Omitted when the code has no
             * redemption limit. Format: int64.
             */
            "max_uses"?: number;
            /**
             * Identifier of the merchant that owns the promotion code. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Key-value data you attach to the promotion code. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The promotion this code belongs to. Present only when the list request asked for
             * expand=promotion. Promotion evaluation order: manual discounts stay, do not count
             * toward the cap, and are ignored by combines_with. Frozen subscription-term
             * promotions are admitted first and are exempt from exclusivity, combines_with, and
             * the cap. Candidates include codes being applied, existing promotion discounts, and
             * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
             * member, then the larger standalone discount, earlier created_at, and lower
             * promotion_id. Remaining candidates rank by standalone discount, then earlier
             * created_at and lower promotion_id; each is admitted unless max_promotions_per_order
             * is reached or both promotions do not allow each other's discount class. Admitted
             * promotions price line item first, then order, then service charge. A zero-value
             * promotion is dropped and selection runs again.
             */
            "promotion"?: Promotion;
            /**
             * Unique identifier for the promotion code. Example:
             * "pcode_01KEZF7C00JCC7QXWC262EF05T".
             */
            "promotion_code_id": string;
            /**
             * Identifier of the promotion this code redeems. Example:
             * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
             */
            "promotion_id": string;
            /**
             * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH;
             * DELETE sets archived. An active code can still be unavailable: read available. Value
             * enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * IANA zone the code's times were entered in, used for display. expires_at is an
             * absolute timestamp, so this does not change when the code expires.
             */
            "timezone"?: string;
            /**
             * Why available is false. Present only when available is false. The code's own state
             * is reported first; promotion_unavailable means the code is usable but its promotion
             * is not. Value enum: "archived", "inactive", "expired", "exhausted",
             * "promotion_unavailable".
             */
            "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
            /**
             * When the promotion code was last updated, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /** Number of times this code has been redeemed. Format: int64. */
            "uses_count": number;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "promotion_code.created". */
    "event_type"?: "promotion_code.created";
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
 * The `promotion_code.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionCodeCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `promotion`. object.available (Required): boolean. Whether a buyer can redeem the
     * code right now: the code is active, not expired, and under its max_uses, and its promotion
     * is available. object.code (Required): string. Code a buyer enters to redeem the promotion.
     * object.created_at (Required): string. When the promotion code was created, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer_id
     * (Required): string or null. Only this identified customer can redeem the code. The customer
     * must belong to the same merchant and environment. A checkout may use its merchant-named or
     * email-verified customer; a typed email does not identify a customer. Null when the code is
     * unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Optional): string.
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the
     * code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z". object.max_uses
     * (Optional): integer. Maximum number of times this code can be redeemed. Omitted when the
     * code has no redemption limit. Format: int64. object.merchant_id (Required): string.
     * Identifier of the merchant that owns the promotion code. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Key-value
     * data you attach to the promotion code. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.promotion (Optional): {@link Promotion}. The promotion this code
     * belongs to. Present only when the list request asked for expand=promotion. Promotion
     * evaluation order: manual discounts stay, do not count toward the cap, and are ignored by
     * combines_with. Frozen subscription-term promotions are admitted first and are exempt from
     * exclusivity, combines_with, and the cap. Candidates include codes being applied, existing
     * promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again. object.promotion_code_id (Required): string. Unique identifier for the promotion
     * code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". object.promotion_id (Required): string.
     * Identifier of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * object.status (Required): string. Lifecycle status: active, inactive, or archived. Set
     * active or inactive with PATCH; DELETE sets archived. An active code can still be
     * unavailable: read available. Value enum: "active", "inactive", "archived". object.timezone
     * (Optional): string. IANA zone the code's times were entered in, used for display. expires_at
     * is an absolute timestamp, so this does not change when the code expires.
     * object.unavailable_reason (Optional): string. Why available is false. Present only when
     * available is false. The code's own state is reported first; promotion_unavailable means the
     * code is usable but its promotion is not. Value enum: "archived", "inactive", "expired",
     * "exhausted", "promotion_unavailable". object.updated_at (Required): string. When the
     * promotion code was last updated, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.uses_count (Required): integer. Number of times this code has
     * been redeemed. Format: int64. object.version (Required): integer. Persisted owned-state
     * version. Clock-based availability and expanded resources do not advance this counter.
     * Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `promotion`.
         * available (Required): boolean. Whether a buyer can redeem the code right now: the code
         * is active, not expired, and under its max_uses, and its promotion is available. code
         * (Required): string. Code a buyer enters to redeem the promotion. created_at (Required):
         * string. When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". customer_id (Required): string or null. Only this
         * identified customer can redeem the code. The customer must belong to the same merchant
         * and environment. A checkout may use its merchant-named or email-verified customer; a
         * typed email does not identify a customer. Null when the code is unbound. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". expires_at (Optional): string. When the code stops
         * being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
         * expire. Format: date-time. Example: "2026-08-02T16:00:00Z". max_uses (Optional):
         * integer. Maximum number of times this code can be redeemed. Omitted when the code has no
         * redemption limit. Format: int64. merchant_id (Required): string. Identifier of the
         * merchant that owns the promotion code. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Key-value data you attach to the promotion
         * code. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
         * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. promotion
         * (Optional): {@link Promotion}. The promotion this code belongs to. Present only when the
         * list request asked for expand=promotion. Promotion evaluation order: manual discounts
         * stay, do not count toward the cap, and are ignored by combines_with. Frozen
         * subscription-term promotions are admitted first and are exempt from exclusivity,
         * combines_with, and the cap. Candidates include codes being applied, existing promotion
         * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
         * highest-priority member, then the larger standalone discount, earlier created_at, and
         * lower promotion_id. Remaining candidates rank by standalone discount, then earlier
         * created_at and lower promotion_id; each is admitted unless max_promotions_per_order is
         * reached or both promotions do not allow each other's discount class. Admitted promotions
         * price line item first, then order, then service charge. A zero-value promotion is
         * dropped and selection runs again. promotion_code_id (Required): string. Unique
         * identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
         * promotion_id (Required): string. Identifier of the promotion this code redeems. Example:
         * "promo_01KEZF7C00QQ8EZ74BDYSZ315V". status (Required): string. Lifecycle status: active,
         * inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An
         * active code can still be unavailable: read available. Value enum: "active", "inactive",
         * "archived". timezone (Optional): string. IANA zone the code's times were entered in,
         * used for display. expires_at is an absolute timestamp, so this does not change when the
         * code expires. unavailable_reason (Optional): string. Why available is false. Present
         * only when available is false. The code's own state is reported first;
         * promotion_unavailable means the code is usable but its promotion is not. Value enum:
         * "archived", "inactive", "expired", "exhausted", "promotion_unavailable". updated_at
         * (Required): string. When the promotion code was last updated, as an RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uses_count (Required): integer.
         * Number of times this code has been redeemed. Format: int64. version (Required): integer.
         * Persisted owned-state version. Clock-based availability and expanded resources do not
         * advance this counter. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available.
             */
            "available": boolean;
            /** Code a buyer enters to redeem the promotion. */
            "code": string;
            /**
             * When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Only this identified customer can redeem the code. The customer must belong to the
             * same merchant and environment. A checkout may use its merchant-named or
             * email-verified customer; a typed email does not identify a customer. Null when the
             * code is unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when
             * the code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /**
             * Maximum number of times this code can be redeemed. Omitted when the code has no
             * redemption limit. Format: int64.
             */
            "max_uses"?: number;
            /**
             * Identifier of the merchant that owns the promotion code. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Key-value data you attach to the promotion code. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The promotion this code belongs to. Present only when the list request asked for
             * expand=promotion. Promotion evaluation order: manual discounts stay, do not count
             * toward the cap, and are ignored by combines_with. Frozen subscription-term
             * promotions are admitted first and are exempt from exclusivity, combines_with, and
             * the cap. Candidates include codes being applied, existing promotion discounts, and
             * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
             * member, then the larger standalone discount, earlier created_at, and lower
             * promotion_id. Remaining candidates rank by standalone discount, then earlier
             * created_at and lower promotion_id; each is admitted unless max_promotions_per_order
             * is reached or both promotions do not allow each other's discount class. Admitted
             * promotions price line item first, then order, then service charge. A zero-value
             * promotion is dropped and selection runs again.
             */
            "promotion"?: Promotion;
            /**
             * Unique identifier for the promotion code. Example:
             * "pcode_01KEZF7C00JCC7QXWC262EF05T".
             */
            "promotion_code_id": string;
            /**
             * Identifier of the promotion this code redeems. Example:
             * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
             */
            "promotion_id": string;
            /**
             * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH;
             * DELETE sets archived. An active code can still be unavailable: read available. Value
             * enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * IANA zone the code's times were entered in, used for display. expires_at is an
             * absolute timestamp, so this does not change when the code expires.
             */
            "timezone"?: string;
            /**
             * Why available is false. Present only when available is false. The code's own state
             * is reported first; promotion_unavailable means the code is usable but its promotion
             * is not. Value enum: "archived", "inactive", "expired", "exhausted",
             * "promotion_unavailable".
             */
            "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
            /**
             * When the promotion code was last updated, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /** Number of times this code has been redeemed. Format: int64. */
            "uses_count": number;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "promotion_code.created". */
    "event_type"?: "promotion_code.created";
});
/** A page of `PromotionCode` objects. */
export type PromotionCodeListResponse = {
    /**
     * Promotion codes returned in the requested sort order. [] (Value): {@link PromotionCode}. A
     * code a buyer enters to claim a promotion.
     */
    "data": Array<PromotionCode>;
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
/** A promotion code to create inline with its promotion. The promotion supplies its parent ID. */
export type PromotionCodeRequest = {
    /** Code a buyer enters to redeem the promotion. minLength: 1. maxLength: 100. */
    "code": string;
    /**
     * Only this identified customer can redeem the code. The customer must belong to the same
     * merchant and environment. A checkout may use its merchant-named or email-verified customer;
     * a typed email does not identify a customer. Omit or send null to create an unbound code.
     * minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string | null;
    /**
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Maximum number of times this code can be redeemed. Omit for no redemption limit. Format:
     * int64.
     */
    "max_uses"?: number;
    /**
     * Key-value data you attach to the promotion code. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Lifecycle status. Defaults to active; send inactive to create a code that cannot be
     * redeemed. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * IANA zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires. minLength: 1. maxLength: 255.
     */
    "timezone"?: string;
};
/** A promotion code to create inline with its promotion. The promotion supplies its parent ID. */
export type PromotionCodeRequestInput = {
    /** Code a buyer enters to redeem the promotion. minLength: 1. maxLength: 100. */
    "code": string;
    /**
     * Only this identified customer can redeem the code. The customer must belong to the same
     * merchant and environment. A checkout may use its merchant-named or email-verified customer;
     * a typed email does not identify a customer. Omit or send null to create an unbound code.
     * minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string | null;
    /**
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Maximum number of times this code can be redeemed. Omit for no redemption limit. Format:
     * int64.
     */
    "max_uses"?: number;
    /**
     * Key-value data you attach to the promotion code. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Lifecycle status. Defaults to active; send inactive to create a code that cannot be
     * redeemed. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * IANA zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires. minLength: 1. maxLength: 255.
     */
    "timezone"?: string;
};
/** A response containing `PromotionCode` data. */
export type PromotionCodeResponse = {
    /** The requested promotion code. A code a buyer enters to claim a promotion. */
    "data": PromotionCode;
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
export type PromotionCodeUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available": boolean;
            "code": string;
            "created_at": string;
            "customer_id": string | null;
            "expires_at"?: string;
            "max_uses"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "promotion"?: Promotion;
            "promotion_code_id": string;
            "promotion_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "timezone"?: string;
            "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
            "updated_at": string;
            "uses_count": number;
            "version": number;
        };
        "previous_attributes"?: Partial<PromotionCode>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "promotion_code.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available": boolean;
            "code": string;
            "created_at": string;
            "customer_id": string | null;
            "expires_at"?: string;
            "max_uses"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "promotion"?: Promotion;
            "promotion_code_id": string;
            "promotion_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "timezone"?: string;
            "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
            "updated_at": string;
            "uses_count": number;
            "version": number;
        };
        "previous_attributes"?: Partial<PromotionCode>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "promotion_code.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "promotion_code.updated";
});
/**
 * The `promotion_code.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionCodeUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `promotion`. object.available (Required): boolean. Whether a buyer can redeem the
     * code right now: the code is active, not expired, and under its max_uses, and its promotion
     * is available. object.code (Required): string. Code a buyer enters to redeem the promotion.
     * object.created_at (Required): string. When the promotion code was created, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer_id
     * (Required): string or null. Only this identified customer can redeem the code. The customer
     * must belong to the same merchant and environment. A checkout may use its merchant-named or
     * email-verified customer; a typed email does not identify a customer. Null when the code is
     * unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Optional): string.
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the
     * code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z". object.max_uses
     * (Optional): integer. Maximum number of times this code can be redeemed. Omitted when the
     * code has no redemption limit. Format: int64. object.merchant_id (Required): string.
     * Identifier of the merchant that owns the promotion code. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Key-value
     * data you attach to the promotion code. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.promotion (Optional): {@link Promotion}. The promotion this code
     * belongs to. Present only when the list request asked for expand=promotion. Promotion
     * evaluation order: manual discounts stay, do not count toward the cap, and are ignored by
     * combines_with. Frozen subscription-term promotions are admitted first and are exempt from
     * exclusivity, combines_with, and the cap. Candidates include codes being applied, existing
     * promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again. object.promotion_code_id (Required): string. Unique identifier for the promotion
     * code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". object.promotion_id (Required): string.
     * Identifier of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * object.status (Required): string. Lifecycle status: active, inactive, or archived. Set
     * active or inactive with PATCH; DELETE sets archived. An active code can still be
     * unavailable: read available. Value enum: "active", "inactive", "archived". object.timezone
     * (Optional): string. IANA zone the code's times were entered in, used for display. expires_at
     * is an absolute timestamp, so this does not change when the code expires.
     * object.unavailable_reason (Optional): string. Why available is false. Present only when
     * available is false. The code's own state is reported first; promotion_unavailable means the
     * code is usable but its promotion is not. Value enum: "archived", "inactive", "expired",
     * "exhausted", "promotion_unavailable". object.updated_at (Required): string. When the
     * promotion code was last updated, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.uses_count (Required): integer. Number of times this code has
     * been redeemed. Format: int64. object.version (Required): integer. Persisted owned-state
     * version. Clock-based availability and expanded resources do not advance this counter.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `promotion`.
         * available (Required): boolean. Whether a buyer can redeem the code right now: the code
         * is active, not expired, and under its max_uses, and its promotion is available. code
         * (Required): string. Code a buyer enters to redeem the promotion. created_at (Required):
         * string. When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". customer_id (Required): string or null. Only this
         * identified customer can redeem the code. The customer must belong to the same merchant
         * and environment. A checkout may use its merchant-named or email-verified customer; a
         * typed email does not identify a customer. Null when the code is unbound. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". expires_at (Optional): string. When the code stops
         * being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
         * expire. Format: date-time. Example: "2026-08-02T16:00:00Z". max_uses (Optional):
         * integer. Maximum number of times this code can be redeemed. Omitted when the code has no
         * redemption limit. Format: int64. merchant_id (Required): string. Identifier of the
         * merchant that owns the promotion code. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Key-value data you attach to the promotion
         * code. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
         * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. promotion
         * (Optional): {@link Promotion}. The promotion this code belongs to. Present only when the
         * list request asked for expand=promotion. Promotion evaluation order: manual discounts
         * stay, do not count toward the cap, and are ignored by combines_with. Frozen
         * subscription-term promotions are admitted first and are exempt from exclusivity,
         * combines_with, and the cap. Candidates include codes being applied, existing promotion
         * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
         * highest-priority member, then the larger standalone discount, earlier created_at, and
         * lower promotion_id. Remaining candidates rank by standalone discount, then earlier
         * created_at and lower promotion_id; each is admitted unless max_promotions_per_order is
         * reached or both promotions do not allow each other's discount class. Admitted promotions
         * price line item first, then order, then service charge. A zero-value promotion is
         * dropped and selection runs again. promotion_code_id (Required): string. Unique
         * identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
         * promotion_id (Required): string. Identifier of the promotion this code redeems. Example:
         * "promo_01KEZF7C00QQ8EZ74BDYSZ315V". status (Required): string. Lifecycle status: active,
         * inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An
         * active code can still be unavailable: read available. Value enum: "active", "inactive",
         * "archived". timezone (Optional): string. IANA zone the code's times were entered in,
         * used for display. expires_at is an absolute timestamp, so this does not change when the
         * code expires. unavailable_reason (Optional): string. Why available is false. Present
         * only when available is false. The code's own state is reported first;
         * promotion_unavailable means the code is usable but its promotion is not. Value enum:
         * "archived", "inactive", "expired", "exhausted", "promotion_unavailable". updated_at
         * (Required): string. When the promotion code was last updated, as an RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uses_count (Required): integer.
         * Number of times this code has been redeemed. Format: int64. version (Required): integer.
         * Persisted owned-state version. Clock-based availability and expanded resources do not
         * advance this counter. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available.
             */
            "available": boolean;
            /** Code a buyer enters to redeem the promotion. */
            "code": string;
            /**
             * When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Only this identified customer can redeem the code. The customer must belong to the
             * same merchant and environment. A checkout may use its merchant-named or
             * email-verified customer; a typed email does not identify a customer. Null when the
             * code is unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when
             * the code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /**
             * Maximum number of times this code can be redeemed. Omitted when the code has no
             * redemption limit. Format: int64.
             */
            "max_uses"?: number;
            /**
             * Identifier of the merchant that owns the promotion code. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Key-value data you attach to the promotion code. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The promotion this code belongs to. Present only when the list request asked for
             * expand=promotion. Promotion evaluation order: manual discounts stay, do not count
             * toward the cap, and are ignored by combines_with. Frozen subscription-term
             * promotions are admitted first and are exempt from exclusivity, combines_with, and
             * the cap. Candidates include codes being applied, existing promotion discounts, and
             * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
             * member, then the larger standalone discount, earlier created_at, and lower
             * promotion_id. Remaining candidates rank by standalone discount, then earlier
             * created_at and lower promotion_id; each is admitted unless max_promotions_per_order
             * is reached or both promotions do not allow each other's discount class. Admitted
             * promotions price line item first, then order, then service charge. A zero-value
             * promotion is dropped and selection runs again.
             */
            "promotion"?: Promotion;
            /**
             * Unique identifier for the promotion code. Example:
             * "pcode_01KEZF7C00JCC7QXWC262EF05T".
             */
            "promotion_code_id": string;
            /**
             * Identifier of the promotion this code redeems. Example:
             * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
             */
            "promotion_id": string;
            /**
             * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH;
             * DELETE sets archived. An active code can still be unavailable: read available. Value
             * enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * IANA zone the code's times were entered in, used for display. expires_at is an
             * absolute timestamp, so this does not change when the code expires.
             */
            "timezone"?: string;
            /**
             * Why available is false. Present only when available is false. The code's own state
             * is reported first; promotion_unavailable means the code is usable but its promotion
             * is not. Value enum: "archived", "inactive", "expired", "exhausted",
             * "promotion_unavailable".
             */
            "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
            /**
             * When the promotion code was last updated, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /** Number of times this code has been redeemed. Format: int64. */
            "uses_count": number;
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
        "previous_attributes"?: Partial<PromotionCode>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "promotion_code.updated". */
    "event_type"?: "promotion_code.updated";
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
 * The `promotion_code.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionCodeUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `promotion`. object.available (Required): boolean. Whether a buyer can redeem the
     * code right now: the code is active, not expired, and under its max_uses, and its promotion
     * is available. object.code (Required): string. Code a buyer enters to redeem the promotion.
     * object.created_at (Required): string. When the promotion code was created, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer_id
     * (Required): string or null. Only this identified customer can redeem the code. The customer
     * must belong to the same merchant and environment. A checkout may use its merchant-named or
     * email-verified customer; a typed email does not identify a customer. Null when the code is
     * unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Optional): string.
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the
     * code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z". object.max_uses
     * (Optional): integer. Maximum number of times this code can be redeemed. Omitted when the
     * code has no redemption limit. Format: int64. object.merchant_id (Required): string.
     * Identifier of the merchant that owns the promotion code. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Key-value
     * data you attach to the promotion code. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.promotion (Optional): {@link Promotion}. The promotion this code
     * belongs to. Present only when the list request asked for expand=promotion. Promotion
     * evaluation order: manual discounts stay, do not count toward the cap, and are ignored by
     * combines_with. Frozen subscription-term promotions are admitted first and are exempt from
     * exclusivity, combines_with, and the cap. Candidates include codes being applied, existing
     * promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again. object.promotion_code_id (Required): string. Unique identifier for the promotion
     * code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". object.promotion_id (Required): string.
     * Identifier of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * object.status (Required): string. Lifecycle status: active, inactive, or archived. Set
     * active or inactive with PATCH; DELETE sets archived. An active code can still be
     * unavailable: read available. Value enum: "active", "inactive", "archived". object.timezone
     * (Optional): string. IANA zone the code's times were entered in, used for display. expires_at
     * is an absolute timestamp, so this does not change when the code expires.
     * object.unavailable_reason (Optional): string. Why available is false. Present only when
     * available is false. The code's own state is reported first; promotion_unavailable means the
     * code is usable but its promotion is not. Value enum: "archived", "inactive", "expired",
     * "exhausted", "promotion_unavailable". object.updated_at (Required): string. When the
     * promotion code was last updated, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.uses_count (Required): integer. Number of times this code has
     * been redeemed. Format: int64. object.version (Required): integer. Persisted owned-state
     * version. Clock-based availability and expanded resources do not advance this counter.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `promotion`.
         * available (Required): boolean. Whether a buyer can redeem the code right now: the code
         * is active, not expired, and under its max_uses, and its promotion is available. code
         * (Required): string. Code a buyer enters to redeem the promotion. created_at (Required):
         * string. When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". customer_id (Required): string or null. Only this
         * identified customer can redeem the code. The customer must belong to the same merchant
         * and environment. A checkout may use its merchant-named or email-verified customer; a
         * typed email does not identify a customer. Null when the code is unbound. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". expires_at (Optional): string. When the code stops
         * being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
         * expire. Format: date-time. Example: "2026-08-02T16:00:00Z". max_uses (Optional):
         * integer. Maximum number of times this code can be redeemed. Omitted when the code has no
         * redemption limit. Format: int64. merchant_id (Required): string. Identifier of the
         * merchant that owns the promotion code. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Key-value data you attach to the promotion
         * code. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
         * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. promotion
         * (Optional): {@link Promotion}. The promotion this code belongs to. Present only when the
         * list request asked for expand=promotion. Promotion evaluation order: manual discounts
         * stay, do not count toward the cap, and are ignored by combines_with. Frozen
         * subscription-term promotions are admitted first and are exempt from exclusivity,
         * combines_with, and the cap. Candidates include codes being applied, existing promotion
         * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
         * highest-priority member, then the larger standalone discount, earlier created_at, and
         * lower promotion_id. Remaining candidates rank by standalone discount, then earlier
         * created_at and lower promotion_id; each is admitted unless max_promotions_per_order is
         * reached or both promotions do not allow each other's discount class. Admitted promotions
         * price line item first, then order, then service charge. A zero-value promotion is
         * dropped and selection runs again. promotion_code_id (Required): string. Unique
         * identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
         * promotion_id (Required): string. Identifier of the promotion this code redeems. Example:
         * "promo_01KEZF7C00QQ8EZ74BDYSZ315V". status (Required): string. Lifecycle status: active,
         * inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An
         * active code can still be unavailable: read available. Value enum: "active", "inactive",
         * "archived". timezone (Optional): string. IANA zone the code's times were entered in,
         * used for display. expires_at is an absolute timestamp, so this does not change when the
         * code expires. unavailable_reason (Optional): string. Why available is false. Present
         * only when available is false. The code's own state is reported first;
         * promotion_unavailable means the code is usable but its promotion is not. Value enum:
         * "archived", "inactive", "expired", "exhausted", "promotion_unavailable". updated_at
         * (Required): string. When the promotion code was last updated, as an RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uses_count (Required): integer.
         * Number of times this code has been redeemed. Format: int64. version (Required): integer.
         * Persisted owned-state version. Clock-based availability and expanded resources do not
         * advance this counter. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available.
             */
            "available": boolean;
            /** Code a buyer enters to redeem the promotion. */
            "code": string;
            /**
             * When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Only this identified customer can redeem the code. The customer must belong to the
             * same merchant and environment. A checkout may use its merchant-named or
             * email-verified customer; a typed email does not identify a customer. Null when the
             * code is unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when
             * the code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /**
             * Maximum number of times this code can be redeemed. Omitted when the code has no
             * redemption limit. Format: int64.
             */
            "max_uses"?: number;
            /**
             * Identifier of the merchant that owns the promotion code. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Key-value data you attach to the promotion code. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The promotion this code belongs to. Present only when the list request asked for
             * expand=promotion. Promotion evaluation order: manual discounts stay, do not count
             * toward the cap, and are ignored by combines_with. Frozen subscription-term
             * promotions are admitted first and are exempt from exclusivity, combines_with, and
             * the cap. Candidates include codes being applied, existing promotion discounts, and
             * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
             * member, then the larger standalone discount, earlier created_at, and lower
             * promotion_id. Remaining candidates rank by standalone discount, then earlier
             * created_at and lower promotion_id; each is admitted unless max_promotions_per_order
             * is reached or both promotions do not allow each other's discount class. Admitted
             * promotions price line item first, then order, then service charge. A zero-value
             * promotion is dropped and selection runs again.
             */
            "promotion"?: Promotion;
            /**
             * Unique identifier for the promotion code. Example:
             * "pcode_01KEZF7C00JCC7QXWC262EF05T".
             */
            "promotion_code_id": string;
            /**
             * Identifier of the promotion this code redeems. Example:
             * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
             */
            "promotion_id": string;
            /**
             * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH;
             * DELETE sets archived. An active code can still be unavailable: read available. Value
             * enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * IANA zone the code's times were entered in, used for display. expires_at is an
             * absolute timestamp, so this does not change when the code expires.
             */
            "timezone"?: string;
            /**
             * Why available is false. Present only when available is false. The code's own state
             * is reported first; promotion_unavailable means the code is usable but its promotion
             * is not. Value enum: "archived", "inactive", "expired", "exhausted",
             * "promotion_unavailable".
             */
            "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
            /**
             * When the promotion code was last updated, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /** Number of times this code has been redeemed. Format: int64. */
            "uses_count": number;
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
        "previous_attributes"?: Partial<PromotionCode>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "promotion_code.updated". */
    "event_type"?: "promotion_code.updated";
});
export type PromotionCodesCreateParams = (InputValue<CreatePromotionCodeRequestInput>)
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
export type PromotionCodesDeleteParams = CategoriesDeleteParams;
