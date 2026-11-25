import type {
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutBuyerFieldsPreviousAttributes,
    CheckoutCustomTextConfigPreviousAttributes,
    CheckoutLegalConfigPreviousAttributes,
    CheckoutPaymentConfigPreviousAttributes,
    CheckoutPromotionConfigPreviousAttributes,
    CheckoutRedirectsPreviousAttributes
} from './types-6.js';
import type { CheckoutTaxConfig, CheckoutTipConfig, CheckoutTipConfigPreviousAttributes } from './types-7.js';
import type { ImageAttachment, ImageAttachmentPreviousAttributes } from './types-31.js';
import type { InventoryRoutingSource } from './types-33.js';
import type { LegalSettings } from './types-39.js';
import type { MetadataMap, MerchantWebhookEnvelope, MetadataRequestInput } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { ResponseMeta } from './types-63.js';
import type { Shop } from './types-68.js';
import type { ProductPriceRange } from './types-57.js';
import type { InventoryRoutingSourcePreviousAttributes } from './types-34.js';
import type { SubscriptionTaxPreviousAttributes } from './types-73.js';
import type { InputValue } from '../runtime.js';
import type { CreateShopRequestInput } from './types-14.js';
import type { DisputesAcceptParams } from './types-26.js';
import type { CustomersListAddressesParams } from './types-17.js';
import type { ResolveShopRequestInput } from './types-62.js';
import type { UpdateShopRequestInput } from './types-79.js';
import type { MoneyValue, MoneyValueInput, MoneyValuePreviousAttributes } from './types-44.js';
import type { Dimensions, DimensionsRequestInput } from './types-25.js';
import type { Weight, WeightRequestInput } from './types-81.js';
import type { ConfigurationVersionRequestInput } from './types-8.js';
import type { AcceptFulfillmentRequestInput } from './types-0.js';
/**
 * The `shop.created` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type ShopCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. Buyer
     * information requested at checkout. Omitted when the shop has no override. What checkout asks
     * the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Required): integer or null. Checkout lifetime in
     * seconds. Null when checkout settings apply. Format: int64. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string or null. Listing currency. Null when the shop is empty.
     * Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
     * "USD". object.custom_text (Optional): {@link CheckoutCustomTextConfig}. Merchant text shown
     * in checkout. Omitted when the shop has no override. Custom text shown in checkout: an order
     * summary message and a shipping address label. object.delivery_method_ids (Required): Array
     * of string. An empty array follows checkout settings. object.delivery_method_ids[] (Value):
     * string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.description (Required): string or
     * null. Shop description. Null when unset. object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Null when unset.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842". object.handle (Required): string or
     * null. Readable address. Null when a handle has not been assigned. object.image (Required):
     * {@link ImageAttachment} or null. Cover image. Null when unset. object.image.anyOf[1]
     * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata. object.image.anyOf[2] (Value): null.
     * object.inactive_message (Required): string or null. Inactive message. Null when unset.
     * object.inventory_routing_source (Required): {@link InventoryRoutingSource} or null. Explicit
     * inventory routing. Null when checkout settings apply.
     * object.inventory_routing_source.anyOf[1] (Value): {@link InventoryRoutingSource}. Where an
     * order, payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.inventory_routing_source.anyOf[2] (Value):
     * null. object.legal (Optional): {@link LegalSettings}. Legal policies shown to buyers.
     * Omitted when the shop has no override. Legal settings for a checkout: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.listing_count (Required): integer. The number of listings on the shop, including
     * unavailable entries. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The title buyers see on the shop.
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for the shop.
     * Omitted when the shop has no override. Payment settings for a checkout: the enabled payment
     * options and a note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Promotion settings for shop checkouts. Omitted when the shop has
     * no override. Promotion settings for a checkout: whether automatic promotions apply and
     * whether the buyer can apply promotion codes. object.redirects (Required): {@link
     * CheckoutRedirects}. Redirects configured for checkouts started from the shop. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.shop_id (Required): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shop_01KEZF7C005VQBPV4FZHDZPAHE". object.status (Required): string. Availability or
     * retirement status. Value enum: "active", "inactive", "archived". object.tax (Optional):
     * {@link CheckoutTaxConfig}. Tax settings for shop checkouts. Omitted when the shop has no
     * override. Whether tax is collected for a checkout session or payment link. object.tip
     * (Optional): {@link CheckoutTipConfig}. Tipping options for the shop. Omitted when the shop
     * has no override. Tip settings for a checkout: whether tips are enabled, the percent or fixed
     * amount options, the default tip, and custom tips. object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url
     * (Required): string. The hosted shop address. Live shops use the merchant's healthy custom
     * checkout hostname when available. object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. Buyer information requested at
         * checkout. Omitted when the shop has no override. What checkout asks the buyer for. Each
         * field you leave out uses your checkout settings. checkout_session_expires_in_seconds
         * (Required): integer or null. Checkout lifetime in seconds. Null when checkout settings
         * apply. Format: int64. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string or null. Listing
         * currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: 3.
         * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Merchant text shown in checkout. Omitted when the shop has no
         * override. Custom text shown in checkout: an order summary message and a shipping address
         * label. delivery_method_ids (Required): Array of string. An empty array follows checkout
         * settings. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". description (Required): string or null. Shop
         * description. Null when unset. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. Null when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". handle (Required): string or
         * null. Readable address. Null when a handle has not been assigned. image (Required):
         * {@link ImageAttachment} or null. Cover image. Null when unset. image.anyOf[1] (Value):
         * {@link ImageAttachment}. An image attached to a resource, with its display properties
         * and attachment metadata. image.anyOf[2] (Value): null. inactive_message (Required):
         * string or null. Inactive message. Null when unset. inventory_routing_source (Required):
         * {@link InventoryRoutingSource} or null. Explicit inventory routing. Null when checkout
         * settings apply. inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSource}. Where an order, payment link, or reservation routes inventory
         * from: a fixed Location, an inventory allocation policy, or one policy revision.
         * inventory_routing_source.anyOf[2] (Value): null. legal (Optional): {@link
         * LegalSettings}. Legal policies shown to buyers. Omitted when the shop has no override.
         * Legal settings for a checkout: whether buyers must accept terms, and links to the terms,
         * refund policy, shipping policy, and contract. listing_count (Required): integer. The
         * number of listings on the shop, including unavailable entries. Format: int32.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. The title buyers see on the shop. payments (Optional): {@link
         * CheckoutPaymentConfig}. Payment options for the shop. Omitted when the shop has no
         * override. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Promotion
         * settings for shop checkouts. Omitted when the shop has no override. Promotion settings
         * for a checkout: whether automatic promotions apply and whether the buyer can apply
         * promotion codes. redirects (Required): {@link CheckoutRedirects}. Redirects configured
         * for checkouts started from the shop. Where hosted checkout sends the buyer. Not allowed
         * when surface is headless; use payment_return_url. shop_id (Required): string. Shop ID.
         * pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
         * status (Required): string. Availability or retirement status. Value enum: "active",
         * "inactive", "archived". tax (Optional): {@link CheckoutTaxConfig}. Tax settings for shop
         * checkouts. Omitted when the shop has no override. Whether tax is collected for a
         * checkout session or payment link. tip (Optional): {@link CheckoutTipConfig}. Tipping
         * options for the shop. Omitted when the shop has no override. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". url (Required): string. The hosted shop
         * address. Live shops use the merchant's healthy custom checkout hostname when available.
         * version (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Buyer information requested at checkout. Omitted when the shop has no override. What
             * checkout asks the buyer for. Each field you leave out uses your checkout settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /** Checkout lifetime in seconds. Null when checkout settings apply. Format: int64. */
            "checkout_session_expires_in_seconds": number | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes.
             * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string | null;
            /**
             * Merchant text shown in checkout. Omitted when the shop has no override. Custom text
             * shown in checkout: an order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * An empty array follows checkout settings. [] (Value): string. Example:
             * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Shop description. Null when unset. */
            "description": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Null when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /** Readable address. Null when a handle has not been assigned. */
            "handle": string | null;
            /**
             * Cover image. Null when unset. anyOf[1] (Value): {@link ImageAttachment}. An image
             * attached to a resource, with its display properties and attachment metadata.
             * anyOf[2] (Value): null.
             */
            "image": ((ImageAttachment) | (null));
            /** Inactive message. Null when unset. */
            "inactive_message": string | null;
            /**
             * Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value):
             * {@link InventoryRoutingSource}. Where an order, payment link, or reservation routes
             * inventory from: a fixed Location, an inventory allocation policy, or one policy
             * revision. anyOf[2] (Value): null.
             */
            "inventory_routing_source": ((InventoryRoutingSource) | (null));
            /**
             * Legal policies shown to buyers. Omitted when the shop has no override. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /** The number of listings on the shop, including unavailable entries. Format: int32. */
            "listing_count": number;
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
            "metadata": MetadataMap;
            /** The title buyers see on the shop. */
            "name": string;
            /**
             * Payment options for the shop. Omitted when the shop has no override. Payment
             * settings for a checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Promotion settings for shop checkouts. Omitted when the shop has no override.
             * Promotion settings for a checkout: whether automatic promotions apply and whether
             * the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Redirects configured for checkouts started from the shop. Where hosted checkout
             * sends the buyer. Not allowed when surface is headless; use payment_return_url.
             */
            "redirects": CheckoutRedirects;
            /**
             * Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "shop_01KEZF7C005VQBPV4FZHDZPAHE".
             */
            "shop_id": string;
            /** Availability or retirement status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax
             * is collected for a checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * Tipping options for the shop. Omitted when the shop has no override. Tip settings
             * for a checkout: whether tips are enabled, the percent or fixed amount options, the
             * default tip, and custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * The hosted shop address. Live shops use the merchant's healthy custom checkout
             * hostname when available.
             */
            "url": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "shop.created". */
    "event_type"?: "shop.created";
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
 * The `shop.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ShopCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. Buyer
     * information requested at checkout. Omitted when the shop has no override. What checkout asks
     * the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Required): integer or null. Checkout lifetime in
     * seconds. Null when checkout settings apply. Format: int64. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string or null. Listing currency. Null when the shop is empty.
     * Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
     * "USD". object.custom_text (Optional): {@link CheckoutCustomTextConfig}. Merchant text shown
     * in checkout. Omitted when the shop has no override. Custom text shown in checkout: an order
     * summary message and a shipping address label. object.delivery_method_ids (Required): Array
     * of string. An empty array follows checkout settings. object.delivery_method_ids[] (Value):
     * string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.description (Required): string or
     * null. Shop description. Null when unset. object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Null when unset.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842". object.handle (Required): string or
     * null. Readable address. Null when a handle has not been assigned. object.image (Required):
     * {@link ImageAttachment} or null. Cover image. Null when unset. object.image.anyOf[1]
     * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata. object.image.anyOf[2] (Value): null.
     * object.inactive_message (Required): string or null. Inactive message. Null when unset.
     * object.inventory_routing_source (Required): {@link InventoryRoutingSource} or null. Explicit
     * inventory routing. Null when checkout settings apply.
     * object.inventory_routing_source.anyOf[1] (Value): {@link InventoryRoutingSource}. Where an
     * order, payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.inventory_routing_source.anyOf[2] (Value):
     * null. object.legal (Optional): {@link LegalSettings}. Legal policies shown to buyers.
     * Omitted when the shop has no override. Legal settings for a checkout: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.listing_count (Required): integer. The number of listings on the shop, including
     * unavailable entries. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The title buyers see on the shop.
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for the shop.
     * Omitted when the shop has no override. Payment settings for a checkout: the enabled payment
     * options and a note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Promotion settings for shop checkouts. Omitted when the shop has
     * no override. Promotion settings for a checkout: whether automatic promotions apply and
     * whether the buyer can apply promotion codes. object.redirects (Required): {@link
     * CheckoutRedirects}. Redirects configured for checkouts started from the shop. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.shop_id (Required): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shop_01KEZF7C005VQBPV4FZHDZPAHE". object.status (Required): string. Availability or
     * retirement status. Value enum: "active", "inactive", "archived". object.tax (Optional):
     * {@link CheckoutTaxConfig}. Tax settings for shop checkouts. Omitted when the shop has no
     * override. Whether tax is collected for a checkout session or payment link. object.tip
     * (Optional): {@link CheckoutTipConfig}. Tipping options for the shop. Omitted when the shop
     * has no override. Tip settings for a checkout: whether tips are enabled, the percent or fixed
     * amount options, the default tip, and custom tips. object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url
     * (Required): string. The hosted shop address. Live shops use the merchant's healthy custom
     * checkout hostname when available. object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. Buyer information requested at
         * checkout. Omitted when the shop has no override. What checkout asks the buyer for. Each
         * field you leave out uses your checkout settings. checkout_session_expires_in_seconds
         * (Required): integer or null. Checkout lifetime in seconds. Null when checkout settings
         * apply. Format: int64. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string or null. Listing
         * currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: 3.
         * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Merchant text shown in checkout. Omitted when the shop has no
         * override. Custom text shown in checkout: an order summary message and a shipping address
         * label. delivery_method_ids (Required): Array of string. An empty array follows checkout
         * settings. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". description (Required): string or null. Shop
         * description. Null when unset. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. Null when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". handle (Required): string or
         * null. Readable address. Null when a handle has not been assigned. image (Required):
         * {@link ImageAttachment} or null. Cover image. Null when unset. image.anyOf[1] (Value):
         * {@link ImageAttachment}. An image attached to a resource, with its display properties
         * and attachment metadata. image.anyOf[2] (Value): null. inactive_message (Required):
         * string or null. Inactive message. Null when unset. inventory_routing_source (Required):
         * {@link InventoryRoutingSource} or null. Explicit inventory routing. Null when checkout
         * settings apply. inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSource}. Where an order, payment link, or reservation routes inventory
         * from: a fixed Location, an inventory allocation policy, or one policy revision.
         * inventory_routing_source.anyOf[2] (Value): null. legal (Optional): {@link
         * LegalSettings}. Legal policies shown to buyers. Omitted when the shop has no override.
         * Legal settings for a checkout: whether buyers must accept terms, and links to the terms,
         * refund policy, shipping policy, and contract. listing_count (Required): integer. The
         * number of listings on the shop, including unavailable entries. Format: int32.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. The title buyers see on the shop. payments (Optional): {@link
         * CheckoutPaymentConfig}. Payment options for the shop. Omitted when the shop has no
         * override. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Promotion
         * settings for shop checkouts. Omitted when the shop has no override. Promotion settings
         * for a checkout: whether automatic promotions apply and whether the buyer can apply
         * promotion codes. redirects (Required): {@link CheckoutRedirects}. Redirects configured
         * for checkouts started from the shop. Where hosted checkout sends the buyer. Not allowed
         * when surface is headless; use payment_return_url. shop_id (Required): string. Shop ID.
         * pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
         * status (Required): string. Availability or retirement status. Value enum: "active",
         * "inactive", "archived". tax (Optional): {@link CheckoutTaxConfig}. Tax settings for shop
         * checkouts. Omitted when the shop has no override. Whether tax is collected for a
         * checkout session or payment link. tip (Optional): {@link CheckoutTipConfig}. Tipping
         * options for the shop. Omitted when the shop has no override. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". url (Required): string. The hosted shop
         * address. Live shops use the merchant's healthy custom checkout hostname when available.
         * version (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Buyer information requested at checkout. Omitted when the shop has no override. What
             * checkout asks the buyer for. Each field you leave out uses your checkout settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /** Checkout lifetime in seconds. Null when checkout settings apply. Format: int64. */
            "checkout_session_expires_in_seconds": number | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes.
             * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string | null;
            /**
             * Merchant text shown in checkout. Omitted when the shop has no override. Custom text
             * shown in checkout: an order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * An empty array follows checkout settings. [] (Value): string. Example:
             * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Shop description. Null when unset. */
            "description": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Null when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /** Readable address. Null when a handle has not been assigned. */
            "handle": string | null;
            /**
             * Cover image. Null when unset. anyOf[1] (Value): {@link ImageAttachment}. An image
             * attached to a resource, with its display properties and attachment metadata.
             * anyOf[2] (Value): null.
             */
            "image": ((ImageAttachment) | (null));
            /** Inactive message. Null when unset. */
            "inactive_message": string | null;
            /**
             * Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value):
             * {@link InventoryRoutingSource}. Where an order, payment link, or reservation routes
             * inventory from: a fixed Location, an inventory allocation policy, or one policy
             * revision. anyOf[2] (Value): null.
             */
            "inventory_routing_source": ((InventoryRoutingSource) | (null));
            /**
             * Legal policies shown to buyers. Omitted when the shop has no override. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /** The number of listings on the shop, including unavailable entries. Format: int32. */
            "listing_count": number;
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
            "metadata": MetadataMap;
            /** The title buyers see on the shop. */
            "name": string;
            /**
             * Payment options for the shop. Omitted when the shop has no override. Payment
             * settings for a checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Promotion settings for shop checkouts. Omitted when the shop has no override.
             * Promotion settings for a checkout: whether automatic promotions apply and whether
             * the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Redirects configured for checkouts started from the shop. Where hosted checkout
             * sends the buyer. Not allowed when surface is headless; use payment_return_url.
             */
            "redirects": CheckoutRedirects;
            /**
             * Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "shop_01KEZF7C005VQBPV4FZHDZPAHE".
             */
            "shop_id": string;
            /** Availability or retirement status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax
             * is collected for a checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * Tipping options for the shop. Omitted when the shop has no override. Tip settings
             * for a checkout: whether tips are enabled, the percent or fixed amount options, the
             * default tip, and custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * The hosted shop address. Live shops use the merchant's healthy custom checkout
             * hostname when available.
             */
            "url": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "shop.created". */
    "event_type"?: "shop.created";
});
/** A page of `Shop` objects. */
export type ShopListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Shop}. A hosted catalog configured by a merchant.
     */
    "data": Array<Shop>;
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
/** An owned member of a shop. */
export type ShopListing = {
    /**
     * The listed bundle. Omitted when the listing uses a product. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Whether the catalog item is unavailable in the shop currency. */
    "is_catalog_item_unavailable": boolean;
    /**
     * The listed product. Omitted when the listing uses a bundle. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Current name from the catalog. */
    "resolved_name"?: string;
    /**
     * Current prices in the shop currency. Omitted when unavailable. The lowest and highest unit
     * prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Owning shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shop_01KEZF7C005VQBPV4FZHDZPAHE".
     */
    "shop_id": string;
    /**
     * Permanent ID for this catalog item on the shop. pattern: ^shl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "shl_01KEZF7C005YZXRPWEH31ZXGKA".
     */
    "shop_listing_id": string;
    /** The catalog item this listing sells. Value enum: "product", "bundle". */
    "type": "product" | "bundle" | (string & {});
};
/** The `bundle` variant of `ShopListingInput`. */
export type ShopListingInputBundle = {
    /**
     * Catalog bundle ID. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /** Selects the catalog item to list. Value enum: "bundle". */
    "type": "bundle" | (string & {});
};
/** The `bundle` variant of `ShopListingInput`. */
export type ShopListingInputBundleInput = {
    /**
     * Catalog bundle ID. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /** Selects the catalog item to list. Value enum: "bundle". */
    "type": "bundle";
};
/** The `product` variant of `ShopListingInput`. */
export type ShopListingInputProduct = {
    /**
     * Catalog product ID. minLength: 1. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /** Selects the catalog item to list. Value enum: "product". */
    "type": "product" | (string & {});
};
/** The `product` variant of `ShopListingInput`. */
export type ShopListingInputProductInput = {
    /**
     * Catalog product ID. minLength: 1. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /** Selects the catalog item to list. Value enum: "product". */
    "type": "product";
};
/** A page of `ShopListing` objects. */
export type ShopListingListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ShopListing}. An owned member of a shop.
     */
    "data": Array<ShopListing>;
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
/** The `bundle` variant of `ShopListingPatchInput`. */
export type ShopListingPatchInputBundle = {
    /**
     * Catalog bundle ID. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * The existing listing ID, if supplied. minLength: 1. pattern: ^shl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "shl_01KEZF7C005YZXRPWEH31ZXGKA".
     */
    "shop_listing_id"?: string;
    /** Selects the catalog item to list. Value enum: "bundle". */
    "type": "bundle" | (string & {});
};
/** The `bundle` variant of `ShopListingPatchInput`. */
export type ShopListingPatchInputBundleInput = {
    /**
     * Catalog bundle ID. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * The existing listing ID, if supplied. minLength: 1. pattern: ^shl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "shl_01KEZF7C005YZXRPWEH31ZXGKA".
     */
    "shop_listing_id"?: string;
    /** Selects the catalog item to list. Value enum: "bundle". */
    "type": "bundle";
};
/** The `product` variant of `ShopListingPatchInput`. */
export type ShopListingPatchInputProduct = {
    /**
     * Catalog product ID. minLength: 1. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * The existing listing ID, if supplied. minLength: 1. pattern: ^shl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "shl_01KEZF7C005YZXRPWEH31ZXGKA".
     */
    "shop_listing_id"?: string;
    /** Selects the catalog item to list. Value enum: "product". */
    "type": "product" | (string & {});
};
/** The `product` variant of `ShopListingPatchInput`. */
export type ShopListingPatchInputProductInput = {
    /**
     * Catalog product ID. minLength: 1. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * The existing listing ID, if supplied. minLength: 1. pattern: ^shl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "shl_01KEZF7C005YZXRPWEH31ZXGKA".
     */
    "shop_listing_id"?: string;
    /** Selects the catalog item to list. Value enum: "product". */
    "type": "product";
};
/** A catalog item to keep or add in a replacement list. */
export type ShopListingPatchRequest = ({
    /**
     * Catalog bundle ID. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Catalog product ID. minLength: 1. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * The existing listing ID, if supplied. minLength: 1. pattern: ^shl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "shl_01KEZF7C005YZXRPWEH31ZXGKA".
     */
    "shop_listing_id"?: string;
    /** Selects the catalog item to list. Value enum: "product", "bundle". */
    "type": "product" | "bundle" | (string & {});
})
    & ((Exclude<ShopListingPatchInputProduct & object, readonly unknown[]>)
    | (Exclude<ShopListingPatchInputBundle & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** A catalog item to keep or add in a replacement list. */
export type ShopListingPatchRequestInput = ({
    /**
     * Catalog bundle ID. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Catalog product ID. minLength: 1. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * The existing listing ID, if supplied. minLength: 1. pattern: ^shl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "shl_01KEZF7C005YZXRPWEH31ZXGKA".
     */
    "shop_listing_id"?: string;
    /** Selects the catalog item to list. Value enum: "product", "bundle". */
    "type": "product" | "bundle";
})
    & ((Exclude<ShopListingPatchInputProductInput & object, readonly unknown[]>)
    | (Exclude<ShopListingPatchInputBundleInput & object, readonly unknown[]>));
/** A product or bundle to list in a shop. */
export type ShopListingRequest = ({
    /**
     * Catalog bundle ID. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Catalog product ID. minLength: 1. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Selects the catalog item to list. Value enum: "product", "bundle". */
    "type": "product" | "bundle" | (string & {});
})
    & ((Exclude<ShopListingInputProduct & object, readonly unknown[]>)
    | (Exclude<ShopListingInputBundle & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** A product or bundle to list in a shop. */
export type ShopListingRequestInput = ({
    /**
     * Catalog bundle ID. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Catalog product ID. minLength: 1. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Selects the catalog item to list. Value enum: "product", "bundle". */
    "type": "product" | "bundle";
})
    & ((Exclude<ShopListingInputProductInput & object, readonly unknown[]>)
    | (Exclude<ShopListingInputBundleInput & object, readonly unknown[]>));
/** A response containing `Shop` data. */
export type ShopResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A hosted catalog
     * configured by a merchant.
     */
    "data": Shop;
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
export type ShopUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds": number | null;
            "created_at": string;
            "currency": string | null;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description": string | null;
            "external_reference_id": string | null;
            "handle": string | null;
            "image": ((ImageAttachment) | (null));
            "inactive_message": string | null;
            "inventory_routing_source": ((InventoryRoutingSource) | (null));
            "legal"?: LegalSettings;
            "listing_count": number;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects": CheckoutRedirects;
            "shop_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "tax"?: CheckoutTaxConfig;
            "tip"?: CheckoutTipConfig;
            "updated_at": string;
            "url": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "buyer_fields"?: ((CheckoutBuyerFieldsPreviousAttributes) | (null));
            "checkout_session_expires_in_seconds"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "custom_text"?: ((CheckoutCustomTextConfigPreviousAttributes) | (null));
            "delivery_method_ids"?: ((Array<string>) | (null));
            "description"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "handle"?: ((string) | (null));
            "image"?: ((ImageAttachmentPreviousAttributes) | (null));
            "inactive_message"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "legal"?: ((CheckoutLegalConfigPreviousAttributes) | (null));
            "listing_count"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "payments"?: ((CheckoutPaymentConfigPreviousAttributes) | (null));
            "promotion_config"?: ((CheckoutPromotionConfigPreviousAttributes) | (null));
            "redirects"?: ((CheckoutRedirectsPreviousAttributes) | (null));
            "shop_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            "tip"?: ((CheckoutTipConfigPreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
            "url"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "shop.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds": number | null;
            "created_at": string;
            "currency": string | null;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description": string | null;
            "external_reference_id": string | null;
            "handle": string | null;
            "image": ((ImageAttachment) | (null));
            "inactive_message": string | null;
            "inventory_routing_source": ((InventoryRoutingSource) | (null));
            "legal"?: LegalSettings;
            "listing_count": number;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects": CheckoutRedirects;
            "shop_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "tax"?: CheckoutTaxConfig;
            "tip"?: CheckoutTipConfig;
            "updated_at": string;
            "url": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "buyer_fields"?: ((CheckoutBuyerFieldsPreviousAttributes) | (null));
            "checkout_session_expires_in_seconds"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "custom_text"?: ((CheckoutCustomTextConfigPreviousAttributes) | (null));
            "delivery_method_ids"?: ((Array<string>) | (null));
            "description"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "handle"?: ((string) | (null));
            "image"?: ((ImageAttachmentPreviousAttributes) | (null));
            "inactive_message"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "legal"?: ((CheckoutLegalConfigPreviousAttributes) | (null));
            "listing_count"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "payments"?: ((CheckoutPaymentConfigPreviousAttributes) | (null));
            "promotion_config"?: ((CheckoutPromotionConfigPreviousAttributes) | (null));
            "redirects"?: ((CheckoutRedirectsPreviousAttributes) | (null));
            "shop_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            "tip"?: ((CheckoutTipConfigPreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
            "url"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "shop.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "shop.updated";
});
/**
 * The `shop.updated` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type ShopUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. Buyer
     * information requested at checkout. Omitted when the shop has no override. What checkout asks
     * the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Required): integer or null. Checkout lifetime in
     * seconds. Null when checkout settings apply. Format: int64. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string or null. Listing currency. Null when the shop is empty.
     * Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
     * "USD". object.custom_text (Optional): {@link CheckoutCustomTextConfig}. Merchant text shown
     * in checkout. Omitted when the shop has no override. Custom text shown in checkout: an order
     * summary message and a shipping address label. object.delivery_method_ids (Required): Array
     * of string. An empty array follows checkout settings. object.delivery_method_ids[] (Value):
     * string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.description (Required): string or
     * null. Shop description. Null when unset. object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Null when unset.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842". object.handle (Required): string or
     * null. Readable address. Null when a handle has not been assigned. object.image (Required):
     * {@link ImageAttachment} or null. Cover image. Null when unset. object.image.anyOf[1]
     * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata. object.image.anyOf[2] (Value): null.
     * object.inactive_message (Required): string or null. Inactive message. Null when unset.
     * object.inventory_routing_source (Required): {@link InventoryRoutingSource} or null. Explicit
     * inventory routing. Null when checkout settings apply.
     * object.inventory_routing_source.anyOf[1] (Value): {@link InventoryRoutingSource}. Where an
     * order, payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.inventory_routing_source.anyOf[2] (Value):
     * null. object.legal (Optional): {@link LegalSettings}. Legal policies shown to buyers.
     * Omitted when the shop has no override. Legal settings for a checkout: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.listing_count (Required): integer. The number of listings on the shop, including
     * unavailable entries. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The title buyers see on the shop.
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for the shop.
     * Omitted when the shop has no override. Payment settings for a checkout: the enabled payment
     * options and a note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Promotion settings for shop checkouts. Omitted when the shop has
     * no override. Promotion settings for a checkout: whether automatic promotions apply and
     * whether the buyer can apply promotion codes. object.redirects (Required): {@link
     * CheckoutRedirects}. Redirects configured for checkouts started from the shop. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.shop_id (Required): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shop_01KEZF7C005VQBPV4FZHDZPAHE". object.status (Required): string. Availability or
     * retirement status. Value enum: "active", "inactive", "archived". object.tax (Optional):
     * {@link CheckoutTaxConfig}. Tax settings for shop checkouts. Omitted when the shop has no
     * override. Whether tax is collected for a checkout session or payment link. object.tip
     * (Optional): {@link CheckoutTipConfig}. Tipping options for the shop. Omitted when the shop
     * has no override. Tip settings for a checkout: whether tips are enabled, the percent or fixed
     * amount options, the default tip, and custom tips. object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url
     * (Required): string. The hosted shop address. Live shops use the merchant's healthy custom
     * checkout hostname when available. object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.buyer_fields (Optional): {@link
     * CheckoutBuyerFieldsPreviousAttributes} or null. Buyer information requested at checkout.
     * Omitted when the shop has no override. previous_attributes.buyer_fields.anyOf[1] (Value):
     * {@link CheckoutBuyerFieldsPreviousAttributes}. previous_attributes.buyer_fields.anyOf[2]
     * (Value): null. previous_attributes.checkout_session_expires_in_seconds (Optional): integer
     * or null. Checkout lifetime in seconds. Null when checkout settings apply.
     * previous_attributes.checkout_session_expires_in_seconds.anyOf[1] (Value): integer. Checkout
     * lifetime in seconds. Null when checkout settings apply. Format: int64.
     * previous_attributes.checkout_session_expires_in_seconds.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.currency (Optional): string or null. Listing currency. Null when
     * the shop is empty. Uses ISO 4217 currency codes. previous_attributes.currency.anyOf[1]
     * (Value): string. Listing currency. Null when the shop is empty. Uses ISO 4217 currency
     * codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * previous_attributes.currency.anyOf[2] (Value): null. previous_attributes.custom_text
     * (Optional): {@link CheckoutCustomTextConfigPreviousAttributes} or null. Merchant text shown
     * in checkout. Omitted when the shop has no override. previous_attributes.custom_text.anyOf[1]
     * (Value): {@link CheckoutCustomTextConfigPreviousAttributes}.
     * previous_attributes.custom_text.anyOf[2] (Value): null.
     * previous_attributes.delivery_method_ids (Optional): Array of string or null. An empty array
     * follows checkout settings. previous_attributes.delivery_method_ids.anyOf[1] (Value): Array
     * of string. An empty array follows checkout settings.
     * previous_attributes.delivery_method_ids.anyOf[1][] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". previous_attributes.delivery_method_ids.anyOf[2] (Value):
     * null. previous_attributes.description (Optional): string or null. Shop description. Null
     * when unset. previous_attributes.description.anyOf[1] (Value): string. Shop description. Null
     * when unset. previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. Null when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. Null when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.handle (Optional): string or null. Readable address. Null when a handle
     * has not been assigned. previous_attributes.handle.anyOf[1] (Value): string. Readable
     * address. Null when a handle has not been assigned. previous_attributes.handle.anyOf[2]
     * (Value): null. previous_attributes.image (Optional): {@link
     * ImageAttachmentPreviousAttributes} or null. Cover image. Null when unset.
     * previous_attributes.image.anyOf[1] (Value): {@link ImageAttachmentPreviousAttributes}.
     * previous_attributes.image.anyOf[2] (Value): null. previous_attributes.inactive_message
     * (Optional): string or null. Inactive message. Null when unset.
     * previous_attributes.inactive_message.anyOf[1] (Value): string. Inactive message. Null when
     * unset. previous_attributes.inactive_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. Explicit inventory routing. Null when
     * checkout settings apply. previous_attributes.inventory_routing_source.anyOf[1] (Value):
     * {@link InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.legal (Optional): {@link CheckoutLegalConfigPreviousAttributes} or null.
     * Legal policies shown to buyers. Omitted when the shop has no override.
     * previous_attributes.legal.anyOf[1] (Value): {@link CheckoutLegalConfigPreviousAttributes}.
     * previous_attributes.legal.anyOf[2] (Value): null. previous_attributes.listing_count
     * (Optional): integer or null. The number of listings on the shop, including unavailable
     * entries. previous_attributes.listing_count.anyOf[1] (Value): integer. The number of listings
     * on the shop, including unavailable entries. Format: int32.
     * previous_attributes.listing_count.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. ID of the merchant this resource belongs to.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. The title buyers see on the shop.
     * previous_attributes.name.anyOf[1] (Value): string. The title buyers see on the shop.
     * previous_attributes.name.anyOf[2] (Value): null. previous_attributes.payments (Optional):
     * {@link CheckoutPaymentConfigPreviousAttributes} or null. Payment options for the shop.
     * Omitted when the shop has no override. previous_attributes.payments.anyOf[1] (Value): {@link
     * CheckoutPaymentConfigPreviousAttributes}. previous_attributes.payments.anyOf[2] (Value):
     * null. previous_attributes.promotion_config (Optional): {@link
     * CheckoutPromotionConfigPreviousAttributes} or null. Promotion settings for shop checkouts.
     * Omitted when the shop has no override. previous_attributes.promotion_config.anyOf[1]
     * (Value): {@link CheckoutPromotionConfigPreviousAttributes}.
     * previous_attributes.promotion_config.anyOf[2] (Value): null. previous_attributes.redirects
     * (Optional): {@link CheckoutRedirectsPreviousAttributes} or null. Redirects configured for
     * checkouts started from the shop. previous_attributes.redirects.anyOf[1] (Value): {@link
     * CheckoutRedirectsPreviousAttributes}. previous_attributes.redirects.anyOf[2] (Value): null.
     * previous_attributes.shop_id (Optional): string or null. Shop ID.
     * previous_attributes.shop_id.anyOf[1] (Value): string. Shop ID. pattern:
     * ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
     * previous_attributes.shop_id.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Availability or retirement status. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Availability or retirement
     * status. Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link SubscriptionTaxPreviousAttributes}
     * or null. Tax settings for shop checkouts. Omitted when the shop has no override.
     * previous_attributes.tax.anyOf[1] (Value): {@link SubscriptionTaxPreviousAttributes}.
     * previous_attributes.tax.anyOf[2] (Value): null. previous_attributes.tip (Optional): {@link
     * CheckoutTipConfigPreviousAttributes} or null. Tipping options for the shop. Omitted when the
     * shop has no override. previous_attributes.tip.anyOf[1] (Value): {@link
     * CheckoutTipConfigPreviousAttributes}. previous_attributes.tip.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.url (Optional): string or null. The hosted shop address. Live
     * shops use the merchant's healthy custom checkout hostname when available.
     * previous_attributes.url.anyOf[1] (Value): string. The hosted shop address. Live shops use
     * the merchant's healthy custom checkout hostname when available.
     * previous_attributes.url.anyOf[2] (Value): null. previous_attributes.version (Optional):
     * integer or null. Persisted version of this resource's owned state. Expanded resources and
     * external observations can change independently. previous_attributes.version.anyOf[1]
     * (Value): integer. Persisted version of this resource's owned state. Expanded resources and
     * external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. Buyer information requested at
         * checkout. Omitted when the shop has no override. What checkout asks the buyer for. Each
         * field you leave out uses your checkout settings. checkout_session_expires_in_seconds
         * (Required): integer or null. Checkout lifetime in seconds. Null when checkout settings
         * apply. Format: int64. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string or null. Listing
         * currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: 3.
         * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Merchant text shown in checkout. Omitted when the shop has no
         * override. Custom text shown in checkout: an order summary message and a shipping address
         * label. delivery_method_ids (Required): Array of string. An empty array follows checkout
         * settings. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". description (Required): string or null. Shop
         * description. Null when unset. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. Null when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". handle (Required): string or
         * null. Readable address. Null when a handle has not been assigned. image (Required):
         * {@link ImageAttachment} or null. Cover image. Null when unset. image.anyOf[1] (Value):
         * {@link ImageAttachment}. An image attached to a resource, with its display properties
         * and attachment metadata. image.anyOf[2] (Value): null. inactive_message (Required):
         * string or null. Inactive message. Null when unset. inventory_routing_source (Required):
         * {@link InventoryRoutingSource} or null. Explicit inventory routing. Null when checkout
         * settings apply. inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSource}. Where an order, payment link, or reservation routes inventory
         * from: a fixed Location, an inventory allocation policy, or one policy revision.
         * inventory_routing_source.anyOf[2] (Value): null. legal (Optional): {@link
         * LegalSettings}. Legal policies shown to buyers. Omitted when the shop has no override.
         * Legal settings for a checkout: whether buyers must accept terms, and links to the terms,
         * refund policy, shipping policy, and contract. listing_count (Required): integer. The
         * number of listings on the shop, including unavailable entries. Format: int32.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. The title buyers see on the shop. payments (Optional): {@link
         * CheckoutPaymentConfig}. Payment options for the shop. Omitted when the shop has no
         * override. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Promotion
         * settings for shop checkouts. Omitted when the shop has no override. Promotion settings
         * for a checkout: whether automatic promotions apply and whether the buyer can apply
         * promotion codes. redirects (Required): {@link CheckoutRedirects}. Redirects configured
         * for checkouts started from the shop. Where hosted checkout sends the buyer. Not allowed
         * when surface is headless; use payment_return_url. shop_id (Required): string. Shop ID.
         * pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
         * status (Required): string. Availability or retirement status. Value enum: "active",
         * "inactive", "archived". tax (Optional): {@link CheckoutTaxConfig}. Tax settings for shop
         * checkouts. Omitted when the shop has no override. Whether tax is collected for a
         * checkout session or payment link. tip (Optional): {@link CheckoutTipConfig}. Tipping
         * options for the shop. Omitted when the shop has no override. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". url (Required): string. The hosted shop
         * address. Live shops use the merchant's healthy custom checkout hostname when available.
         * version (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Buyer information requested at checkout. Omitted when the shop has no override. What
             * checkout asks the buyer for. Each field you leave out uses your checkout settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /** Checkout lifetime in seconds. Null when checkout settings apply. Format: int64. */
            "checkout_session_expires_in_seconds": number | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes.
             * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string | null;
            /**
             * Merchant text shown in checkout. Omitted when the shop has no override. Custom text
             * shown in checkout: an order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * An empty array follows checkout settings. [] (Value): string. Example:
             * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Shop description. Null when unset. */
            "description": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Null when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /** Readable address. Null when a handle has not been assigned. */
            "handle": string | null;
            /**
             * Cover image. Null when unset. anyOf[1] (Value): {@link ImageAttachment}. An image
             * attached to a resource, with its display properties and attachment metadata.
             * anyOf[2] (Value): null.
             */
            "image": ((ImageAttachment) | (null));
            /** Inactive message. Null when unset. */
            "inactive_message": string | null;
            /**
             * Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value):
             * {@link InventoryRoutingSource}. Where an order, payment link, or reservation routes
             * inventory from: a fixed Location, an inventory allocation policy, or one policy
             * revision. anyOf[2] (Value): null.
             */
            "inventory_routing_source": ((InventoryRoutingSource) | (null));
            /**
             * Legal policies shown to buyers. Omitted when the shop has no override. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /** The number of listings on the shop, including unavailable entries. Format: int32. */
            "listing_count": number;
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
            "metadata": MetadataMap;
            /** The title buyers see on the shop. */
            "name": string;
            /**
             * Payment options for the shop. Omitted when the shop has no override. Payment
             * settings for a checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Promotion settings for shop checkouts. Omitted when the shop has no override.
             * Promotion settings for a checkout: whether automatic promotions apply and whether
             * the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Redirects configured for checkouts started from the shop. Where hosted checkout
             * sends the buyer. Not allowed when surface is headless; use payment_return_url.
             */
            "redirects": CheckoutRedirects;
            /**
             * Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "shop_01KEZF7C005VQBPV4FZHDZPAHE".
             */
            "shop_id": string;
            /** Availability or retirement status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax
             * is collected for a checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * Tipping options for the shop. Omitted when the shop has no override. Tip settings
             * for a checkout: whether tips are enabled, the percent or fixed amount options, the
             * default tip, and custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * The hosted shop address. Live shops use the merchant's healthy custom checkout
             * hostname when available.
             */
            "url": string;
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
         * state, including synthetic test events. buyer_fields (Optional): {@link
         * CheckoutBuyerFieldsPreviousAttributes} or null. Buyer information requested at checkout.
         * Omitted when the shop has no override. buyer_fields.anyOf[1] (Value): {@link
         * CheckoutBuyerFieldsPreviousAttributes}. buyer_fields.anyOf[2] (Value): null.
         * checkout_session_expires_in_seconds (Optional): integer or null. Checkout lifetime in
         * seconds. Null when checkout settings apply. checkout_session_expires_in_seconds.anyOf[1]
         * (Value): integer. Checkout lifetime in seconds. Null when checkout settings apply.
         * Format: int64. checkout_session_expires_in_seconds.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. currency (Optional): string or null. Listing
         * currency. Null when the shop is empty. Uses ISO 4217 currency codes. currency.anyOf[1]
         * (Value): string. Listing currency. Null when the shop is empty. Uses ISO 4217 currency
         * codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * currency.anyOf[2] (Value): null. custom_text (Optional): {@link
         * CheckoutCustomTextConfigPreviousAttributes} or null. Merchant text shown in checkout.
         * Omitted when the shop has no override. custom_text.anyOf[1] (Value): {@link
         * CheckoutCustomTextConfigPreviousAttributes}. custom_text.anyOf[2] (Value): null.
         * delivery_method_ids (Optional): Array of string or null. An empty array follows checkout
         * settings. delivery_method_ids.anyOf[1] (Value): Array of string. An empty array follows
         * checkout settings. delivery_method_ids.anyOf[1][] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_method_ids.anyOf[2] (Value): null.
         * description (Optional): string or null. Shop description. Null when unset.
         * description.anyOf[1] (Value): string. Shop description. Null when unset.
         * description.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system. Null when unset.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. Null when unset. minLength: 1. maxLength: 255. Example:
         * "warehouse-1842". external_reference_id.anyOf[2] (Value): null. handle (Optional):
         * string or null. Readable address. Null when a handle has not been assigned.
         * handle.anyOf[1] (Value): string. Readable address. Null when a handle has not been
         * assigned. handle.anyOf[2] (Value): null. image (Optional): {@link
         * ImageAttachmentPreviousAttributes} or null. Cover image. Null when unset. image.anyOf[1]
         * (Value): {@link ImageAttachmentPreviousAttributes}. image.anyOf[2] (Value): null.
         * inactive_message (Optional): string or null. Inactive message. Null when unset.
         * inactive_message.anyOf[1] (Value): string. Inactive message. Null when unset.
         * inactive_message.anyOf[2] (Value): null. inventory_routing_source (Optional): {@link
         * InventoryRoutingSourcePreviousAttributes} or null. Explicit inventory routing. Null when
         * checkout settings apply. inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSourcePreviousAttributes}. inventory_routing_source.anyOf[2] (Value):
         * null. legal (Optional): {@link CheckoutLegalConfigPreviousAttributes} or null. Legal
         * policies shown to buyers. Omitted when the shop has no override. legal.anyOf[1] (Value):
         * {@link CheckoutLegalConfigPreviousAttributes}. legal.anyOf[2] (Value): null.
         * listing_count (Optional): integer or null. The number of listings on the shop, including
         * unavailable entries. listing_count.anyOf[1] (Value): integer. The number of listings on
         * the shop, including unavailable entries. Format: int32. listing_count.anyOf[2] (Value):
         * null. merchant_id (Optional): string or null. ID of the merchant this resource belongs
         * to. merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string or null. The
         * title buyers see on the shop. name.anyOf[1] (Value): string. The title buyers see on the
         * shop. name.anyOf[2] (Value): null. payments (Optional): {@link
         * CheckoutPaymentConfigPreviousAttributes} or null. Payment options for the shop. Omitted
         * when the shop has no override. payments.anyOf[1] (Value): {@link
         * CheckoutPaymentConfigPreviousAttributes}. payments.anyOf[2] (Value): null.
         * promotion_config (Optional): {@link CheckoutPromotionConfigPreviousAttributes} or null.
         * Promotion settings for shop checkouts. Omitted when the shop has no override.
         * promotion_config.anyOf[1] (Value): {@link CheckoutPromotionConfigPreviousAttributes}.
         * promotion_config.anyOf[2] (Value): null. redirects (Optional): {@link
         * CheckoutRedirectsPreviousAttributes} or null. Redirects configured for checkouts started
         * from the shop. redirects.anyOf[1] (Value): {@link CheckoutRedirectsPreviousAttributes}.
         * redirects.anyOf[2] (Value): null. shop_id (Optional): string or null. Shop ID.
         * shop_id.anyOf[1] (Value): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$.
         * Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE". shop_id.anyOf[2] (Value): null. status
         * (Optional): string or null. Availability or retirement status. Value enum: "active",
         * "inactive", "archived". status.anyOf[1] (Value): string. Availability or retirement
         * status. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. tax
         * (Optional): {@link SubscriptionTaxPreviousAttributes} or null. Tax settings for shop
         * checkouts. Omitted when the shop has no override. tax.anyOf[1] (Value): {@link
         * SubscriptionTaxPreviousAttributes}. tax.anyOf[2] (Value): null. tip (Optional): {@link
         * CheckoutTipConfigPreviousAttributes} or null. Tipping options for the shop. Omitted when
         * the shop has no override. tip.anyOf[1] (Value): {@link
         * CheckoutTipConfigPreviousAttributes}. tip.anyOf[2] (Value): null. updated_at (Optional):
         * string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. url (Optional): string or null. The hosted shop address. Live shops use
         * the merchant's healthy custom checkout hostname when available. url.anyOf[1] (Value):
         * string. The hosted shop address. Live shops use the merchant's healthy custom checkout
         * hostname when available. url.anyOf[2] (Value): null. version (Optional): integer or
         * null. Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. version.anyOf[1] (Value): integer. Persisted
         * version of this resource's owned state. Expanded resources and external observations can
         * change independently. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Buyer information requested at checkout. Omitted when the shop has no override.
             * anyOf[1] (Value): {@link CheckoutBuyerFieldsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "buyer_fields"?: ((CheckoutBuyerFieldsPreviousAttributes) | (null));
            /**
             * Checkout lifetime in seconds. Null when checkout settings apply. anyOf[1] (Value):
             * integer. Checkout lifetime in seconds. Null when checkout settings apply. Format:
             * int64. anyOf[2] (Value): null.
             */
            "checkout_session_expires_in_seconds"?: ((number) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes.
             * anyOf[1] (Value): string. Listing currency. Null when the shop is empty. Uses ISO
             * 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Merchant text shown in checkout. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutCustomTextConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "custom_text"?: ((CheckoutCustomTextConfigPreviousAttributes) | (null));
            /**
             * An empty array follows checkout settings. anyOf[1] (Value): Array of string. An
             * empty array follows checkout settings. anyOf[1][] (Value): string. Example:
             * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
             */
            "delivery_method_ids"?: ((Array<string>) | (null));
            /**
             * Shop description. Null when unset. anyOf[1] (Value): string. Shop description. Null
             * when unset. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Null when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. Null when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Readable address. Null when a handle has not been assigned. anyOf[1] (Value):
             * string. Readable address. Null when a handle has not been assigned. anyOf[2]
             * (Value): null.
             */
            "handle"?: ((string) | (null));
            /**
             * Cover image. Null when unset. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "image"?: ((ImageAttachmentPreviousAttributes) | (null));
            /**
             * Inactive message. Null when unset. anyOf[1] (Value): string. Inactive message. Null
             * when unset. anyOf[2] (Value): null.
             */
            "inactive_message"?: ((string) | (null));
            /**
             * Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value):
             * {@link InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Legal policies shown to buyers. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutLegalConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "legal"?: ((CheckoutLegalConfigPreviousAttributes) | (null));
            /**
             * The number of listings on the shop, including unavailable entries. anyOf[1] (Value):
             * integer. The number of listings on the shop, including unavailable entries. Format:
             * int32. anyOf[2] (Value): null.
             */
            "listing_count"?: ((number) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The title buyers see on the shop. anyOf[1] (Value): string. The title buyers see on
             * the shop. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Payment options for the shop. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutPaymentConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payments"?: ((CheckoutPaymentConfigPreviousAttributes) | (null));
            /**
             * Promotion settings for shop checkouts. Omitted when the shop has no override.
             * anyOf[1] (Value): {@link CheckoutPromotionConfigPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "promotion_config"?: ((CheckoutPromotionConfigPreviousAttributes) | (null));
            /**
             * Redirects configured for checkouts started from the shop. anyOf[1] (Value): {@link
             * CheckoutRedirectsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "redirects"?: ((CheckoutRedirectsPreviousAttributes) | (null));
            /**
             * Shop ID. anyOf[1] (Value): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE". anyOf[2] (Value): null.
             */
            "shop_id"?: ((string) | (null));
            /**
             * Availability or retirement status. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Availability or retirement status. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * Tax settings for shop checkouts. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link SubscriptionTaxPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            /**
             * Tipping options for the shop. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutTipConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tip"?: ((CheckoutTipConfigPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The hosted shop address. Live shops use the merchant's healthy custom checkout
             * hostname when available. anyOf[1] (Value): string. The hosted shop address. Live
             * shops use the merchant's healthy custom checkout hostname when available. anyOf[2]
             * (Value): null.
             */
            "url"?: ((string) | (null));
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
    /** Value enum: "shop.updated". */
    "event_type"?: "shop.updated";
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
 * The `shop.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ShopUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. Buyer
     * information requested at checkout. Omitted when the shop has no override. What checkout asks
     * the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Required): integer or null. Checkout lifetime in
     * seconds. Null when checkout settings apply. Format: int64. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string or null. Listing currency. Null when the shop is empty.
     * Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
     * "USD". object.custom_text (Optional): {@link CheckoutCustomTextConfig}. Merchant text shown
     * in checkout. Omitted when the shop has no override. Custom text shown in checkout: an order
     * summary message and a shipping address label. object.delivery_method_ids (Required): Array
     * of string. An empty array follows checkout settings. object.delivery_method_ids[] (Value):
     * string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.description (Required): string or
     * null. Shop description. Null when unset. object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Null when unset.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842". object.handle (Required): string or
     * null. Readable address. Null when a handle has not been assigned. object.image (Required):
     * {@link ImageAttachment} or null. Cover image. Null when unset. object.image.anyOf[1]
     * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata. object.image.anyOf[2] (Value): null.
     * object.inactive_message (Required): string or null. Inactive message. Null when unset.
     * object.inventory_routing_source (Required): {@link InventoryRoutingSource} or null. Explicit
     * inventory routing. Null when checkout settings apply.
     * object.inventory_routing_source.anyOf[1] (Value): {@link InventoryRoutingSource}. Where an
     * order, payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.inventory_routing_source.anyOf[2] (Value):
     * null. object.legal (Optional): {@link LegalSettings}. Legal policies shown to buyers.
     * Omitted when the shop has no override. Legal settings for a checkout: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.listing_count (Required): integer. The number of listings on the shop, including
     * unavailable entries. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The title buyers see on the shop.
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for the shop.
     * Omitted when the shop has no override. Payment settings for a checkout: the enabled payment
     * options and a note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Promotion settings for shop checkouts. Omitted when the shop has
     * no override. Promotion settings for a checkout: whether automatic promotions apply and
     * whether the buyer can apply promotion codes. object.redirects (Required): {@link
     * CheckoutRedirects}. Redirects configured for checkouts started from the shop. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.shop_id (Required): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shop_01KEZF7C005VQBPV4FZHDZPAHE". object.status (Required): string. Availability or
     * retirement status. Value enum: "active", "inactive", "archived". object.tax (Optional):
     * {@link CheckoutTaxConfig}. Tax settings for shop checkouts. Omitted when the shop has no
     * override. Whether tax is collected for a checkout session or payment link. object.tip
     * (Optional): {@link CheckoutTipConfig}. Tipping options for the shop. Omitted when the shop
     * has no override. Tip settings for a checkout: whether tips are enabled, the percent or fixed
     * amount options, the default tip, and custom tips. object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url
     * (Required): string. The hosted shop address. Live shops use the merchant's healthy custom
     * checkout hostname when available. object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.buyer_fields (Optional): {@link
     * CheckoutBuyerFieldsPreviousAttributes} or null. Buyer information requested at checkout.
     * Omitted when the shop has no override. previous_attributes.buyer_fields.anyOf[1] (Value):
     * {@link CheckoutBuyerFieldsPreviousAttributes}. previous_attributes.buyer_fields.anyOf[2]
     * (Value): null. previous_attributes.checkout_session_expires_in_seconds (Optional): integer
     * or null. Checkout lifetime in seconds. Null when checkout settings apply.
     * previous_attributes.checkout_session_expires_in_seconds.anyOf[1] (Value): integer. Checkout
     * lifetime in seconds. Null when checkout settings apply. Format: int64.
     * previous_attributes.checkout_session_expires_in_seconds.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.currency (Optional): string or null. Listing currency. Null when
     * the shop is empty. Uses ISO 4217 currency codes. previous_attributes.currency.anyOf[1]
     * (Value): string. Listing currency. Null when the shop is empty. Uses ISO 4217 currency
     * codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * previous_attributes.currency.anyOf[2] (Value): null. previous_attributes.custom_text
     * (Optional): {@link CheckoutCustomTextConfigPreviousAttributes} or null. Merchant text shown
     * in checkout. Omitted when the shop has no override. previous_attributes.custom_text.anyOf[1]
     * (Value): {@link CheckoutCustomTextConfigPreviousAttributes}.
     * previous_attributes.custom_text.anyOf[2] (Value): null.
     * previous_attributes.delivery_method_ids (Optional): Array of string or null. An empty array
     * follows checkout settings. previous_attributes.delivery_method_ids.anyOf[1] (Value): Array
     * of string. An empty array follows checkout settings.
     * previous_attributes.delivery_method_ids.anyOf[1][] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". previous_attributes.delivery_method_ids.anyOf[2] (Value):
     * null. previous_attributes.description (Optional): string or null. Shop description. Null
     * when unset. previous_attributes.description.anyOf[1] (Value): string. Shop description. Null
     * when unset. previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. Null when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. Null when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.handle (Optional): string or null. Readable address. Null when a handle
     * has not been assigned. previous_attributes.handle.anyOf[1] (Value): string. Readable
     * address. Null when a handle has not been assigned. previous_attributes.handle.anyOf[2]
     * (Value): null. previous_attributes.image (Optional): {@link
     * ImageAttachmentPreviousAttributes} or null. Cover image. Null when unset.
     * previous_attributes.image.anyOf[1] (Value): {@link ImageAttachmentPreviousAttributes}.
     * previous_attributes.image.anyOf[2] (Value): null. previous_attributes.inactive_message
     * (Optional): string or null. Inactive message. Null when unset.
     * previous_attributes.inactive_message.anyOf[1] (Value): string. Inactive message. Null when
     * unset. previous_attributes.inactive_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. Explicit inventory routing. Null when
     * checkout settings apply. previous_attributes.inventory_routing_source.anyOf[1] (Value):
     * {@link InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.legal (Optional): {@link CheckoutLegalConfigPreviousAttributes} or null.
     * Legal policies shown to buyers. Omitted when the shop has no override.
     * previous_attributes.legal.anyOf[1] (Value): {@link CheckoutLegalConfigPreviousAttributes}.
     * previous_attributes.legal.anyOf[2] (Value): null. previous_attributes.listing_count
     * (Optional): integer or null. The number of listings on the shop, including unavailable
     * entries. previous_attributes.listing_count.anyOf[1] (Value): integer. The number of listings
     * on the shop, including unavailable entries. Format: int32.
     * previous_attributes.listing_count.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. ID of the merchant this resource belongs to.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. The title buyers see on the shop.
     * previous_attributes.name.anyOf[1] (Value): string. The title buyers see on the shop.
     * previous_attributes.name.anyOf[2] (Value): null. previous_attributes.payments (Optional):
     * {@link CheckoutPaymentConfigPreviousAttributes} or null. Payment options for the shop.
     * Omitted when the shop has no override. previous_attributes.payments.anyOf[1] (Value): {@link
     * CheckoutPaymentConfigPreviousAttributes}. previous_attributes.payments.anyOf[2] (Value):
     * null. previous_attributes.promotion_config (Optional): {@link
     * CheckoutPromotionConfigPreviousAttributes} or null. Promotion settings for shop checkouts.
     * Omitted when the shop has no override. previous_attributes.promotion_config.anyOf[1]
     * (Value): {@link CheckoutPromotionConfigPreviousAttributes}.
     * previous_attributes.promotion_config.anyOf[2] (Value): null. previous_attributes.redirects
     * (Optional): {@link CheckoutRedirectsPreviousAttributes} or null. Redirects configured for
     * checkouts started from the shop. previous_attributes.redirects.anyOf[1] (Value): {@link
     * CheckoutRedirectsPreviousAttributes}. previous_attributes.redirects.anyOf[2] (Value): null.
     * previous_attributes.shop_id (Optional): string or null. Shop ID.
     * previous_attributes.shop_id.anyOf[1] (Value): string. Shop ID. pattern:
     * ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
     * previous_attributes.shop_id.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Availability or retirement status. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Availability or retirement
     * status. Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link SubscriptionTaxPreviousAttributes}
     * or null. Tax settings for shop checkouts. Omitted when the shop has no override.
     * previous_attributes.tax.anyOf[1] (Value): {@link SubscriptionTaxPreviousAttributes}.
     * previous_attributes.tax.anyOf[2] (Value): null. previous_attributes.tip (Optional): {@link
     * CheckoutTipConfigPreviousAttributes} or null. Tipping options for the shop. Omitted when the
     * shop has no override. previous_attributes.tip.anyOf[1] (Value): {@link
     * CheckoutTipConfigPreviousAttributes}. previous_attributes.tip.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.url (Optional): string or null. The hosted shop address. Live
     * shops use the merchant's healthy custom checkout hostname when available.
     * previous_attributes.url.anyOf[1] (Value): string. The hosted shop address. Live shops use
     * the merchant's healthy custom checkout hostname when available.
     * previous_attributes.url.anyOf[2] (Value): null. previous_attributes.version (Optional):
     * integer or null. Persisted version of this resource's owned state. Expanded resources and
     * external observations can change independently. previous_attributes.version.anyOf[1]
     * (Value): integer. Persisted version of this resource's owned state. Expanded resources and
     * external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. Buyer information requested at
         * checkout. Omitted when the shop has no override. What checkout asks the buyer for. Each
         * field you leave out uses your checkout settings. checkout_session_expires_in_seconds
         * (Required): integer or null. Checkout lifetime in seconds. Null when checkout settings
         * apply. Format: int64. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string or null. Listing
         * currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: 3.
         * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Merchant text shown in checkout. Omitted when the shop has no
         * override. Custom text shown in checkout: an order summary message and a shipping address
         * label. delivery_method_ids (Required): Array of string. An empty array follows checkout
         * settings. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". description (Required): string or null. Shop
         * description. Null when unset. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. Null when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". handle (Required): string or
         * null. Readable address. Null when a handle has not been assigned. image (Required):
         * {@link ImageAttachment} or null. Cover image. Null when unset. image.anyOf[1] (Value):
         * {@link ImageAttachment}. An image attached to a resource, with its display properties
         * and attachment metadata. image.anyOf[2] (Value): null. inactive_message (Required):
         * string or null. Inactive message. Null when unset. inventory_routing_source (Required):
         * {@link InventoryRoutingSource} or null. Explicit inventory routing. Null when checkout
         * settings apply. inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSource}. Where an order, payment link, or reservation routes inventory
         * from: a fixed Location, an inventory allocation policy, or one policy revision.
         * inventory_routing_source.anyOf[2] (Value): null. legal (Optional): {@link
         * LegalSettings}. Legal policies shown to buyers. Omitted when the shop has no override.
         * Legal settings for a checkout: whether buyers must accept terms, and links to the terms,
         * refund policy, shipping policy, and contract. listing_count (Required): integer. The
         * number of listings on the shop, including unavailable entries. Format: int32.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. The title buyers see on the shop. payments (Optional): {@link
         * CheckoutPaymentConfig}. Payment options for the shop. Omitted when the shop has no
         * override. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Promotion
         * settings for shop checkouts. Omitted when the shop has no override. Promotion settings
         * for a checkout: whether automatic promotions apply and whether the buyer can apply
         * promotion codes. redirects (Required): {@link CheckoutRedirects}. Redirects configured
         * for checkouts started from the shop. Where hosted checkout sends the buyer. Not allowed
         * when surface is headless; use payment_return_url. shop_id (Required): string. Shop ID.
         * pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
         * status (Required): string. Availability or retirement status. Value enum: "active",
         * "inactive", "archived". tax (Optional): {@link CheckoutTaxConfig}. Tax settings for shop
         * checkouts. Omitted when the shop has no override. Whether tax is collected for a
         * checkout session or payment link. tip (Optional): {@link CheckoutTipConfig}. Tipping
         * options for the shop. Omitted when the shop has no override. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". url (Required): string. The hosted shop
         * address. Live shops use the merchant's healthy custom checkout hostname when available.
         * version (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Buyer information requested at checkout. Omitted when the shop has no override. What
             * checkout asks the buyer for. Each field you leave out uses your checkout settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /** Checkout lifetime in seconds. Null when checkout settings apply. Format: int64. */
            "checkout_session_expires_in_seconds": number | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes.
             * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string | null;
            /**
             * Merchant text shown in checkout. Omitted when the shop has no override. Custom text
             * shown in checkout: an order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * An empty array follows checkout settings. [] (Value): string. Example:
             * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Shop description. Null when unset. */
            "description": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Null when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /** Readable address. Null when a handle has not been assigned. */
            "handle": string | null;
            /**
             * Cover image. Null when unset. anyOf[1] (Value): {@link ImageAttachment}. An image
             * attached to a resource, with its display properties and attachment metadata.
             * anyOf[2] (Value): null.
             */
            "image": ((ImageAttachment) | (null));
            /** Inactive message. Null when unset. */
            "inactive_message": string | null;
            /**
             * Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value):
             * {@link InventoryRoutingSource}. Where an order, payment link, or reservation routes
             * inventory from: a fixed Location, an inventory allocation policy, or one policy
             * revision. anyOf[2] (Value): null.
             */
            "inventory_routing_source": ((InventoryRoutingSource) | (null));
            /**
             * Legal policies shown to buyers. Omitted when the shop has no override. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /** The number of listings on the shop, including unavailable entries. Format: int32. */
            "listing_count": number;
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
            "metadata": MetadataMap;
            /** The title buyers see on the shop. */
            "name": string;
            /**
             * Payment options for the shop. Omitted when the shop has no override. Payment
             * settings for a checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Promotion settings for shop checkouts. Omitted when the shop has no override.
             * Promotion settings for a checkout: whether automatic promotions apply and whether
             * the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Redirects configured for checkouts started from the shop. Where hosted checkout
             * sends the buyer. Not allowed when surface is headless; use payment_return_url.
             */
            "redirects": CheckoutRedirects;
            /**
             * Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "shop_01KEZF7C005VQBPV4FZHDZPAHE".
             */
            "shop_id": string;
            /** Availability or retirement status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax
             * is collected for a checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * Tipping options for the shop. Omitted when the shop has no override. Tip settings
             * for a checkout: whether tips are enabled, the percent or fixed amount options, the
             * default tip, and custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * The hosted shop address. Live shops use the merchant's healthy custom checkout
             * hostname when available.
             */
            "url": string;
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
         * state, including synthetic test events. buyer_fields (Optional): {@link
         * CheckoutBuyerFieldsPreviousAttributes} or null. Buyer information requested at checkout.
         * Omitted when the shop has no override. buyer_fields.anyOf[1] (Value): {@link
         * CheckoutBuyerFieldsPreviousAttributes}. buyer_fields.anyOf[2] (Value): null.
         * checkout_session_expires_in_seconds (Optional): integer or null. Checkout lifetime in
         * seconds. Null when checkout settings apply. checkout_session_expires_in_seconds.anyOf[1]
         * (Value): integer. Checkout lifetime in seconds. Null when checkout settings apply.
         * Format: int64. checkout_session_expires_in_seconds.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. currency (Optional): string or null. Listing
         * currency. Null when the shop is empty. Uses ISO 4217 currency codes. currency.anyOf[1]
         * (Value): string. Listing currency. Null when the shop is empty. Uses ISO 4217 currency
         * codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * currency.anyOf[2] (Value): null. custom_text (Optional): {@link
         * CheckoutCustomTextConfigPreviousAttributes} or null. Merchant text shown in checkout.
         * Omitted when the shop has no override. custom_text.anyOf[1] (Value): {@link
         * CheckoutCustomTextConfigPreviousAttributes}. custom_text.anyOf[2] (Value): null.
         * delivery_method_ids (Optional): Array of string or null. An empty array follows checkout
         * settings. delivery_method_ids.anyOf[1] (Value): Array of string. An empty array follows
         * checkout settings. delivery_method_ids.anyOf[1][] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_method_ids.anyOf[2] (Value): null.
         * description (Optional): string or null. Shop description. Null when unset.
         * description.anyOf[1] (Value): string. Shop description. Null when unset.
         * description.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system. Null when unset.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. Null when unset. minLength: 1. maxLength: 255. Example:
         * "warehouse-1842". external_reference_id.anyOf[2] (Value): null. handle (Optional):
         * string or null. Readable address. Null when a handle has not been assigned.
         * handle.anyOf[1] (Value): string. Readable address. Null when a handle has not been
         * assigned. handle.anyOf[2] (Value): null. image (Optional): {@link
         * ImageAttachmentPreviousAttributes} or null. Cover image. Null when unset. image.anyOf[1]
         * (Value): {@link ImageAttachmentPreviousAttributes}. image.anyOf[2] (Value): null.
         * inactive_message (Optional): string or null. Inactive message. Null when unset.
         * inactive_message.anyOf[1] (Value): string. Inactive message. Null when unset.
         * inactive_message.anyOf[2] (Value): null. inventory_routing_source (Optional): {@link
         * InventoryRoutingSourcePreviousAttributes} or null. Explicit inventory routing. Null when
         * checkout settings apply. inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSourcePreviousAttributes}. inventory_routing_source.anyOf[2] (Value):
         * null. legal (Optional): {@link CheckoutLegalConfigPreviousAttributes} or null. Legal
         * policies shown to buyers. Omitted when the shop has no override. legal.anyOf[1] (Value):
         * {@link CheckoutLegalConfigPreviousAttributes}. legal.anyOf[2] (Value): null.
         * listing_count (Optional): integer or null. The number of listings on the shop, including
         * unavailable entries. listing_count.anyOf[1] (Value): integer. The number of listings on
         * the shop, including unavailable entries. Format: int32. listing_count.anyOf[2] (Value):
         * null. merchant_id (Optional): string or null. ID of the merchant this resource belongs
         * to. merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string or null. The
         * title buyers see on the shop. name.anyOf[1] (Value): string. The title buyers see on the
         * shop. name.anyOf[2] (Value): null. payments (Optional): {@link
         * CheckoutPaymentConfigPreviousAttributes} or null. Payment options for the shop. Omitted
         * when the shop has no override. payments.anyOf[1] (Value): {@link
         * CheckoutPaymentConfigPreviousAttributes}. payments.anyOf[2] (Value): null.
         * promotion_config (Optional): {@link CheckoutPromotionConfigPreviousAttributes} or null.
         * Promotion settings for shop checkouts. Omitted when the shop has no override.
         * promotion_config.anyOf[1] (Value): {@link CheckoutPromotionConfigPreviousAttributes}.
         * promotion_config.anyOf[2] (Value): null. redirects (Optional): {@link
         * CheckoutRedirectsPreviousAttributes} or null. Redirects configured for checkouts started
         * from the shop. redirects.anyOf[1] (Value): {@link CheckoutRedirectsPreviousAttributes}.
         * redirects.anyOf[2] (Value): null. shop_id (Optional): string or null. Shop ID.
         * shop_id.anyOf[1] (Value): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$.
         * Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE". shop_id.anyOf[2] (Value): null. status
         * (Optional): string or null. Availability or retirement status. Value enum: "active",
         * "inactive", "archived". status.anyOf[1] (Value): string. Availability or retirement
         * status. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. tax
         * (Optional): {@link SubscriptionTaxPreviousAttributes} or null. Tax settings for shop
         * checkouts. Omitted when the shop has no override. tax.anyOf[1] (Value): {@link
         * SubscriptionTaxPreviousAttributes}. tax.anyOf[2] (Value): null. tip (Optional): {@link
         * CheckoutTipConfigPreviousAttributes} or null. Tipping options for the shop. Omitted when
         * the shop has no override. tip.anyOf[1] (Value): {@link
         * CheckoutTipConfigPreviousAttributes}. tip.anyOf[2] (Value): null. updated_at (Optional):
         * string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. url (Optional): string or null. The hosted shop address. Live shops use
         * the merchant's healthy custom checkout hostname when available. url.anyOf[1] (Value):
         * string. The hosted shop address. Live shops use the merchant's healthy custom checkout
         * hostname when available. url.anyOf[2] (Value): null. version (Optional): integer or
         * null. Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. version.anyOf[1] (Value): integer. Persisted
         * version of this resource's owned state. Expanded resources and external observations can
         * change independently. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Buyer information requested at checkout. Omitted when the shop has no override.
             * anyOf[1] (Value): {@link CheckoutBuyerFieldsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "buyer_fields"?: ((CheckoutBuyerFieldsPreviousAttributes) | (null));
            /**
             * Checkout lifetime in seconds. Null when checkout settings apply. anyOf[1] (Value):
             * integer. Checkout lifetime in seconds. Null when checkout settings apply. Format:
             * int64. anyOf[2] (Value): null.
             */
            "checkout_session_expires_in_seconds"?: ((number) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes.
             * anyOf[1] (Value): string. Listing currency. Null when the shop is empty. Uses ISO
             * 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Merchant text shown in checkout. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutCustomTextConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "custom_text"?: ((CheckoutCustomTextConfigPreviousAttributes) | (null));
            /**
             * An empty array follows checkout settings. anyOf[1] (Value): Array of string. An
             * empty array follows checkout settings. anyOf[1][] (Value): string. Example:
             * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
             */
            "delivery_method_ids"?: ((Array<string>) | (null));
            /**
             * Shop description. Null when unset. anyOf[1] (Value): string. Shop description. Null
             * when unset. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Null when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. Null when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Readable address. Null when a handle has not been assigned. anyOf[1] (Value):
             * string. Readable address. Null when a handle has not been assigned. anyOf[2]
             * (Value): null.
             */
            "handle"?: ((string) | (null));
            /**
             * Cover image. Null when unset. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "image"?: ((ImageAttachmentPreviousAttributes) | (null));
            /**
             * Inactive message. Null when unset. anyOf[1] (Value): string. Inactive message. Null
             * when unset. anyOf[2] (Value): null.
             */
            "inactive_message"?: ((string) | (null));
            /**
             * Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value):
             * {@link InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Legal policies shown to buyers. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutLegalConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "legal"?: ((CheckoutLegalConfigPreviousAttributes) | (null));
            /**
             * The number of listings on the shop, including unavailable entries. anyOf[1] (Value):
             * integer. The number of listings on the shop, including unavailable entries. Format:
             * int32. anyOf[2] (Value): null.
             */
            "listing_count"?: ((number) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The title buyers see on the shop. anyOf[1] (Value): string. The title buyers see on
             * the shop. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Payment options for the shop. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutPaymentConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payments"?: ((CheckoutPaymentConfigPreviousAttributes) | (null));
            /**
             * Promotion settings for shop checkouts. Omitted when the shop has no override.
             * anyOf[1] (Value): {@link CheckoutPromotionConfigPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "promotion_config"?: ((CheckoutPromotionConfigPreviousAttributes) | (null));
            /**
             * Redirects configured for checkouts started from the shop. anyOf[1] (Value): {@link
             * CheckoutRedirectsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "redirects"?: ((CheckoutRedirectsPreviousAttributes) | (null));
            /**
             * Shop ID. anyOf[1] (Value): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE". anyOf[2] (Value): null.
             */
            "shop_id"?: ((string) | (null));
            /**
             * Availability or retirement status. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Availability or retirement status. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * Tax settings for shop checkouts. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link SubscriptionTaxPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            /**
             * Tipping options for the shop. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutTipConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tip"?: ((CheckoutTipConfigPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The hosted shop address. Live shops use the merchant's healthy custom checkout
             * hostname when available. anyOf[1] (Value): string. The hosted shop address. Live
             * shops use the merchant's healthy custom checkout hostname when available. anyOf[2]
             * (Value): null.
             */
            "url"?: ((string) | (null));
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
    /** Value enum: "shop.updated". */
    "event_type"?: "shop.updated";
});
export type ShopsCreateParams = (InputValue<CreateShopRequestInput>)
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
export type ShopsDeleteParams = {
    /**
     * Shop version last read by the caller. Format: uint64. minimum: 1. maximum: 9007199254740991.
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
export type ShopsGetListingPublicParams = {};
export type ShopsGetParams = DisputesAcceptParams;
export type ShopsGetPublicParams = {};
export type ShopsListListingsParams = CustomersListAddressesParams;
export type ShopsListParams = {
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
     * Match the external reference ID exactly. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across shop ID, name, description, and external reference ID. Text fields match any
     * part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as shop_01.
     */
    "query"?: InputValue<string>;
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
export type ShopsResolveParams = (InputValue<ResolveShopRequestInput>);
export type ShopsUpdateParams = (InputValue<UpdateShopRequestInput>)
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
/** The request body for: Sign a sandbox webhook delivery. */
export type SignWebhookEndpointDeliveryRequest = {
    /**
     * Retained merchant event in the endpoint's sandbox. The endpoint must subscribe to its event
     * type. minLength: 1. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
};
/** The request body for: Sign a sandbox webhook delivery. */
export type SignWebhookEndpointDeliveryRequestInput = SignWebhookEndpointDeliveryRequest;
/** Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. */
export type SignedMoneyRequestInput = {
    /**
     * Signed amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "amount": `${bigint}` | bigint;
    /**
     * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
};
/**
 * A transient signed delivery for the caller's sandbox endpoint. Forward body bytes and headers
 * unchanged; this is not a persisted delivery or HTTP dispatch.
 */
export type SignedWebhookEndpointDelivery = {
    /** Exact UTF-8 JSON delivery bytes. Do not parse and reserialize before forwarding. */
    "body": string;
    /**
     * JWT expiry, 300 seconds after signing. Existing receiver clock skew rules apply. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Application headers from the real sender, including Authorization and any configured HMAC
     * signature. Never log these credentials. * (Value): string.
     */
    "headers": Record<string, string>;
    /**
     * The authorized sandbox endpoint and JWT audience. Example:
     * "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id": string;
    /**
     * The event ID, also sent as webhook-id for receiver deduplication. Example:
     * "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
};
/** A response containing `SignedWebhookEndpointDelivery` data. */
export type SignedWebhookEndpointDeliveryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A transient signed
     * delivery for the caller's sandbox endpoint. Forward body bytes and headers unchanged; this
     * is not a persisted delivery or HTTP dispatch.
     */
    "data": SignedWebhookEndpointDelivery;
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
/** The request body for: Simulate a dispute outcome. */
export type SimulateDisputeRequest = {
    /**
     * The ruling to simulate. `won` and `lost` decide a chargeback; `inquiry_closed` and
     * `escalated` decide an inquiry. Value enum: "won", "lost", "inquiry_closed", "escalated".
     */
    "outcome": "won" | "lost" | "inquiry_closed" | "escalated" | (string & {});
};
/** The request body for: Simulate a dispute outcome. */
export type SimulateDisputeRequestInput = {
    /**
     * The ruling to simulate. `won` and `lost` decide a chargeback; `inquiry_closed` and
     * `escalated` decide an inquiry. Value enum: "won", "lost", "inquiry_closed", "escalated".
     */
    "outcome": "won" | "lost" | "inquiry_closed" | "escalated";
};
/** Sandbox only. Presents a test card on a simulated reader. */
export type SimulateReaderRequest = {
    /**
     * The brand of the test card to present. Defaults to `visa`. Declines present Visa test cards
     * whatever brand you send. Value enum: "visa", "mastercard", "amex", "discover".
     */
    "card_brand"?: "visa" | "mastercard" | "amex" | "discover" | (string & {});
    /**
     * The buyer's and issuer's decision. Value enum: "approved", "declined", "insufficient_funds".
     */
    "outcome": "approved" | "declined" | "insufficient_funds" | (string & {});
    /**
     * The tip the buyer picks, when the payment was sent with the tip screen on. USD only.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
};
/** Sandbox only. Presents a test card on a simulated reader. */
export type SimulateReaderRequestInput = {
    /**
     * The brand of the test card to present. Defaults to `visa`. Declines present Visa test cards
     * whatever brand you send. Value enum: "visa", "mastercard", "amex", "discover".
     */
    "card_brand"?: "visa" | "mastercard" | "amex" | "discover";
    /**
     * The buyer's and issuer's decision. Value enum: "approved", "declined", "insufficient_funds".
     */
    "outcome": "approved" | "declined" | "insufficient_funds";
    /**
     * The tip the buyer picks, when the payment was sent with the tip screen on. USD only.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValueInput;
};
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputCreated = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created".
     */
    "status": "created" | (string & {});
    /**
     * Explanation of the package's status, kept as the package's `status_reason`. At most 500
     * characters. `null` is the same as omitting the field. minLength: 1.
     */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
});
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputCreatedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created".
     */
    "status": "created";
    /**
     * Explanation of the package's status, kept as the package's `status_reason`. At most 500
     * characters. `null` is the same as omitting the field. minLength: 1.
     */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & (({
    "shipped_at"?: never;
}))
    & (({
    "buyer_notification_behavior"?: never;
}));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputShipped = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped" | (string & {});
    /**
     * Explanation of the package's status, kept as the package's `status_reason` and recorded as
     * the reason on the shipped status change. At most 500 characters. `null` is the same as
     * omitting the field. minLength: 1.
     */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
});
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputShippedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped";
    /**
     * Explanation of the package's status, kept as the package's `status_reason` and recorded as
     * the reason on the shipped status change. At most 500 characters. `null` is the same as
     * omitting the field. minLength: 1.
     */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & (({
    "return_line_items"?: never;
}));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateRequest = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped" | (string & {});
    /** Additional explanation of the package's starting status. minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
})
    & ((Exclude<SinglePackageCreateInputCreated & object, readonly unknown[]>)
    | (Exclude<SinglePackageCreateInputShipped & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateRequestInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped";
    /** Additional explanation of the package's starting status. minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & ((Exclude<SinglePackageCreateInputCreatedInput & object, readonly unknown[]>)
    | (Exclude<SinglePackageCreateInputShippedInput & object, readonly unknown[]>));
/** The request body for: Skip subscription cycle. */
export type SkipMeSubscriptionCycleRequestInput = ConfigurationVersionRequestInput;
/** The request body for: Skip subscription cycle. */
export type SkipSubscriptionCycleRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/skip-cycle. Flint's skip email says the buyer
     * skipped for buyer, and that the store skipped otherwise. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration" | (string & {});
};
/** The request body for: Skip subscription cycle. */
export type SkipSubscriptionCycleRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/skip-cycle. Flint's skip email says the buyer
     * skipped for buyer, and that the store skipped otherwise. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration";
};
/**
 * A fixed allocation referencing a read-only reversal nested in a payment split. This reference
 * has no independent lifecycle or write routes.
 */
export type SplitReversalReference = {
    /**
     * The amount fixed at allocation, unchanged by recovery or reinstatement. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** The split whose seller share was allocated. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8". */
    "payment_split_id": string;
    /**
     * The reversal in PaymentSplit.reversals that records recovery status. Example:
     * "psrev_01KEZF7C00XC1HA7S8YCQJDBDM".
     */
    "payment_split_reversal_id": string;
};
export type SplitReversalReferencePreviousAttributes = {
    /**
     * The amount fixed at allocation, unchanged by recovery or reinstatement. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The split whose seller share was allocated. anyOf[1] (Value): string. The split whose seller
     * share was allocated. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8". anyOf[2] (Value): null.
     */
    "payment_split_id"?: ((string) | (null));
    /**
     * The reversal in PaymentSplit.reversals that records recovery status. anyOf[1] (Value):
     * string. The reversal in PaymentSplit.reversals that records recovery status. Example:
     * "psrev_01KEZF7C00XC1HA7S8YCQJDBDM". anyOf[2] (Value): null.
     */
    "payment_split_reversal_id"?: ((string) | (null));
};
/** The seller amount to take back from one eligible payment split when creating a refund. */
export type SplitReversalRequest = {
    /**
     * Positive seller amount to take back, in the payment's currency. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. amount (Required): integer string.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. currency
     * (Required): string. Three-letter uppercase ISO 4217 currency code for this amount, such as
     * USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * An eligible split on a payment this refund covers. Each split may appear once. minLength: 1.
     * pattern: ^psplit_[0-9A-HJKMNP-TV-Z]{26}$. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8".
     */
    "payment_split_id": string;
};
/** The seller amount to take back from one eligible payment split when creating a refund. */
export type SplitReversalRequestInput = {
    /**
     * Positive seller amount to take back, in the payment's currency. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. amount (Required): integer string.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. currency
     * (Required): string. Three-letter uppercase ISO 4217 currency code for this amount, such as
     * USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * An eligible split on a payment this refund covers. Each split may appear once. minLength: 1.
     * pattern: ^psplit_[0-9A-HJKMNP-TV-Z]{26}$. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8".
     */
    "payment_split_id": string;
};
/** Starts fulfillment work. */
export type StartFulfillmentRequestInput = AcceptFulfillmentRequestInput;
/** Stripe's current decision about the card statement name. */
export type StatementDescriptorStatus = {
    /** Stripe's refusal reason in plain language. `null` when status is accepted or pending. */
    "reason": string | null;
    /**
     * accepted when Stripe has no outstanding descriptor requirement, rejected when Stripe reports
     * a refusal, or pending while a change or review is unresolved. Value enum: "accepted",
     * "rejected", "pending".
     */
    "status": "accepted" | "rejected" | "pending" | (string & {});
};
/**
 * One-time client authority for the named Stripe object. This payload always names the Stripe.js
 * call and carries its client secret.
 */
export type StripeClientAuthority = {
    /** Stripe client secret for the named PaymentIntent or SetupIntent. */
    "client_secret": string;
    /**
     * Stripe.js operation to perform now. confirm_setup applies to client_setup. Standalone
     * PaymentIntents use payment_collection plus server confirmation instead of initial
     * confirm_payment authority. Value enum: "confirm_payment", "confirm_setup".
     */
    "stripe_js_call": "confirm_payment" | "confirm_setup" | (string & {});
};
/**
 * Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now.
 * setup_collection is guidance instead and never carries a secret.
 */
export type StripeClientSetup = {
    /**
     * Stripe.js initialization context and the SetupIntent authority for saving the payment
     * method. Stripe.js initialization context and SetupIntent setup authority.
     */
    "stripe"?: StripeClientSetupStripe;
};
/** Stripe.js initialization context and SetupIntent setup authority. */
export type StripeClientSetupStripe = {
    /**
     * Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Example:
     * "acct_1234567890".
     */
    "account_id"?: string;
    /**
     * Stripe publishable key for the active Flint payment mode; use this with account_id when
     * loading Stripe.js.
     */
    "publishable_key"?: string;
    /**
     * One-time authority for the Stripe SetupIntent: its client secret and the Stripe.js call to
     * make with it. One-time client authority for the named Stripe object. This payload always
     * names the Stripe.js call and carries its client secret.
     */
    "setup_intent"?: StripeClientAuthority;
};
/**
 * Stripe initialization context plus one flow-specific authority object. Exactly one of
 * payment_intent, setup_intent, or terminal_payment_intent is present.
 */
export type StripePaymentClientAction = ({
    /**
     * Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when
     * the payment has splits: initialize Stripe.js with publishable_key alone and omit
     * stripeAccount. The Terminal SDK ignores this field. Example: "acct_1234567890".
     */
    "account_id": string | null;
    /**
     * The collecting merchant's Stripe account for a payment on Flint's Stripe account. It
     * identifies the settlement account, not the Stripe.js account. Do not pass it as
     * stripeAccount or to handleNextAction.
     */
    "on_behalf_of"?: string;
    /**
     * PaymentIntent authority for an order payment authentication action. The client action for a
     * Stripe payment intent: the client secret to pass to Stripe.js `handleNextAction`.
     */
    "payment_intent"?: StripeSetupIntentClientAction;
    /**
     * Stripe publishable key for the active Flint payment mode; use this with account_id when
     * loading Stripe.js. The Terminal SDK ignores this field.
     */
    "publishable_key": string;
    /**
     * SetupIntent authority for a saved-payment-method authentication action. The client action
     * for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`.
     */
    "setup_intent"?: StripeSetupIntentClientAction;
    /**
     * Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay
     * reader. Authority to collect and confirm a card-present payment with the Stripe Terminal SDK
     * on the connected Tap to Pay reader.
     */
    "terminal_payment_intent"?: StripeTerminalPaymentIntentClientAction;
});
export type StripePaymentClientActionPreviousAttributes = ({
    /**
     * Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when
     * the payment has splits: initialize Stripe.js with publishable_key alone and omit
     * stripeAccount. The Terminal SDK ignores this field. anyOf[1] (Value): string. Stripe
     * connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the
     * payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount.
     * The Terminal SDK ignores this field. Example: "acct_1234567890". anyOf[2] (Value): null.
     */
    "account_id"?: ((string) | (null));
    /**
     * The collecting merchant's Stripe account for a payment on Flint's Stripe account. It
     * identifies the settlement account, not the Stripe.js account. Do not pass it as
     * stripeAccount or to handleNextAction. anyOf[1] (Value): string. The collecting merchant's
     * Stripe account for a payment on Flint's Stripe account. It identifies the settlement
     * account, not the Stripe.js account. Do not pass it as stripeAccount or to handleNextAction.
     * anyOf[2] (Value): null.
     */
    "on_behalf_of"?: ((string) | (null));
    /**
     * PaymentIntent authority for an order payment authentication action. anyOf[1] (Value): {@link
     * StripeSetupIntentClientActionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((StripeSetupIntentClientActionPreviousAttributes) | (null));
    /**
     * Stripe publishable key for the active Flint payment mode; use this with account_id when
     * loading Stripe.js. The Terminal SDK ignores this field. anyOf[1] (Value): string. Stripe
     * publishable key for the active Flint payment mode; use this with account_id when loading
     * Stripe.js. The Terminal SDK ignores this field. anyOf[2] (Value): null.
     */
    "publishable_key"?: ((string) | (null));
    /**
     * SetupIntent authority for a saved-payment-method authentication action. anyOf[1] (Value):
     * {@link StripeSetupIntentClientActionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "setup_intent"?: ((StripeSetupIntentClientActionPreviousAttributes) | (null));
    /**
     * Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay
     * reader. anyOf[1] (Value): {@link StripeTerminalPaymentIntentClientActionPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "terminal_payment_intent"?: ((StripeTerminalPaymentIntentClientActionPreviousAttributes) | (null));
});
/**
 * The client action for a Stripe setup intent: the client secret to pass to Stripe.js
 * `handleNextAction`.
 */
export type StripeSetupIntentClientAction = {
    /** SetupIntent client secret to pass to Stripe.js handleNextAction. */
    "client_secret": string;
    /**
     * Stripe.js operation to perform. Today this is handle_next_action. Value enum:
     * "handle_next_action".
     */
    "stripe_js_call": "handle_next_action" | (string & {});
};
export type StripeSetupIntentClientActionPreviousAttributes = {
    /**
     * SetupIntent client secret to pass to Stripe.js handleNextAction. anyOf[1] (Value): string.
     * SetupIntent client secret to pass to Stripe.js handleNextAction. anyOf[2] (Value): null.
     */
    "client_secret"?: ((string) | (null));
    /**
     * Stripe.js operation to perform. Today this is handle_next_action. Value enum:
     * "handle_next_action". anyOf[1] (Value): string. Stripe.js operation to perform. Today this
     * is handle_next_action. Value enum: "handle_next_action". anyOf[2] (Value): null.
     */
    "stripe_js_call"?: (("handle_next_action" | (string & {})) | (null));
};
/**
 * Authority to collect and confirm a card-present payment with the Stripe Terminal SDK on the
 * connected Tap to Pay reader.
 */
export type StripeTerminalPaymentIntentClientAction = {
    /**
     * Card-present PaymentIntent client secret to pass to the Terminal SDK's
     * retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader.
     */
    "client_secret": string;
    /**
     * Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves,
     * collects, and confirms the payment. Value enum: "collect_and_confirm_payment_intent".
     */
    "stripe_terminal_sdk_call": "collect_and_confirm_payment_intent" | (string & {});
};
export type StripeTerminalPaymentIntentClientActionPreviousAttributes = {
    /**
     * Card-present PaymentIntent client secret to pass to the Terminal SDK's
     * retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. anyOf[1]
     * (Value): string. Card-present PaymentIntent client secret to pass to the Terminal SDK's
     * retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. anyOf[2]
     * (Value): null.
     */
    "client_secret"?: ((string) | (null));
    /**
     * Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves,
     * collects, and confirms the payment. Value enum: "collect_and_confirm_payment_intent".
     * anyOf[1] (Value): string. Stripe Terminal SDK operation to perform.
     * collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. Value
     * enum: "collect_and_confirm_payment_intent". anyOf[2] (Value): null.
     */
    "stripe_terminal_sdk_call"?: (("collect_and_confirm_payment_intent" | (string & {})) | (null));
};
/**
 * The subscription offer and billing interval an order line was bought under, with the recurring
 * amount.
 */
export type SubscribedLine = {
    /**
     * Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the
     * pair must be one of the offer's billing interval options. Value enum: "daily", "weekly",
     * "monthly", "yearly".
     */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Number of billing_interval units between charges, from 1 to 365. Format: int32. */
    "billing_interval_count": number;
    /**
     * Line amount for the first renewal, including modifiers and recurring discounts, before
     * shipping and tax. Signup-only discounts are excluded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "recurring_amount_money"?: MoneyValue;
    /**
     * ID of the subscription offer the line was bought under. Example:
     * "soffer_01KEZF7C00KAA9Y1X1KM70YFAA".
     */
    "subscription_offer_id": string;
};
