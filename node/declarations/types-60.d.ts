import type { MerchantWebhookEnvelope } from './types-31.js';
import type { Payout } from './types-36.js';
import type { PartnerWebhookEnvelope } from './types-35.js';
import type { Product, ProductVariant, Promotion } from './types-37.js';
import type { PromotionCode } from './types-38.js';
import type { Refund, Report } from './types-39.js';
import type { ReturnResource } from './types-42.js';
import type { ReturnDisposition, ReturnInspection } from './types-40.js';
import type { ReturnReceipt } from './types-41.js';
/**
 * Shape $ (Value): {@link Webhook_payout_updated_merchant}. The `payout.updated` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_payout_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Payout}. Funds sent from a
     * merchant balance to a payout destination.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Payout}. Funds sent from a merchant balance to a payout
         * destination.
         */
        "object": Payout;
    };
    /** Shape $ (Value): string.  Value enum: "payout.updated". */
    "event_type"?: "payout.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_product_archived_installed_merchants}. The `product.archived`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_product_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Product}. An item offered in the
     * merchant's catalog.
     */
    "data"?: {
        /** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Shape $ (Value): string.  Value enum: "product.archived". */
    "event_type"?: "product.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_product_archived_merchant}. The `product.archived` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_product_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Product}. An item offered in the
     * merchant's catalog.
     */
    "data"?: {
        /** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Shape $ (Value): string.  Value enum: "product.archived". */
    "event_type"?: "product.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_product_created_installed_merchants}. The `product.created`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_product_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Product}. An item offered in the
     * merchant's catalog.
     */
    "data"?: {
        /** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Shape $ (Value): string.  Value enum: "product.created". */
    "event_type"?: "product.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_product_created_merchant}. The `product.created` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_product_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Product}. An item offered in the
     * merchant's catalog.
     */
    "data"?: {
        /** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Shape $ (Value): string.  Value enum: "product.created". */
    "event_type"?: "product.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_product_updated_installed_merchants}. The `product.updated`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_product_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Product}. An item offered in the
     * merchant's catalog.
     */
    "data"?: {
        /** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Shape $ (Value): string.  Value enum: "product.updated". */
    "event_type"?: "product.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_product_updated_merchant}. The `product.updated` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_product_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Product}. An item offered in the
     * merchant's catalog.
     */
    "data"?: {
        /** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Shape $ (Value): string.  Value enum: "product.updated". */
    "event_type"?: "product.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_product_variant_archived_installed_merchants}. The
 * `product_variant.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_product_variant_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data"?: {
        /** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Shape $ (Value): string.  Value enum: "product_variant.archived". */
    "event_type"?: "product_variant.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_product_variant_archived_merchant}. The
 * `product_variant.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_product_variant_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data"?: {
        /** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Shape $ (Value): string.  Value enum: "product_variant.archived". */
    "event_type"?: "product_variant.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_product_variant_created_installed_merchants}. The
 * `product_variant.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_product_variant_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data"?: {
        /** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Shape $ (Value): string.  Value enum: "product_variant.created". */
    "event_type"?: "product_variant.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_product_variant_created_merchant}. The `product_variant.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_product_variant_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data"?: {
        /** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Shape $ (Value): string.  Value enum: "product_variant.created". */
    "event_type"?: "product_variant.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_product_variant_updated_installed_merchants}. The
 * `product_variant.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_product_variant_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data"?: {
        /** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Shape $ (Value): string.  Value enum: "product_variant.updated". */
    "event_type"?: "product_variant.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_product_variant_updated_merchant}. The `product_variant.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_product_variant_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "data"?: {
        /** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Shape $ (Value): string.  Value enum: "product_variant.updated". */
    "event_type"?: "product_variant.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_promotion_archived_installed_merchants}. The
 * `promotion.archived` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type Webhook_promotion_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Promotion}. Promotion evaluation
     * order: manual discounts stay, do not count toward the cap, and are ignored by combines_with.
     * Frozen subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Promotion}. Promotion evaluation order: manual discounts stay,
         * do not count toward the cap, and are ignored by combines_with. Frozen subscription-term
         * promotions are admitted first and are exempt from exclusivity, combines_with, and the
         * cap. Candidates include codes being applied, existing promotion discounts, and
         * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
         * member, then the larger standalone discount, earlier created_at, and lower promotion_id.
         * Remaining candidates rank by standalone discount, then earlier created_at and lower
         * promotion_id; each is admitted unless max_promotions_per_order is reached or both
         * promotions do not allow each other's discount class. Admitted promotions price line item
         * first, then order, then service charge. A zero-value promotion is dropped and selection
         * runs again.
         */
        "object": Promotion;
    };
    /** Shape $ (Value): string.  Value enum: "promotion.archived". */
    "event_type"?: "promotion.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_promotion_archived_merchant}. The `promotion.archived` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_promotion_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Promotion}. Promotion evaluation
     * order: manual discounts stay, do not count toward the cap, and are ignored by combines_with.
     * Frozen subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Promotion}. Promotion evaluation order: manual discounts stay,
         * do not count toward the cap, and are ignored by combines_with. Frozen subscription-term
         * promotions are admitted first and are exempt from exclusivity, combines_with, and the
         * cap. Candidates include codes being applied, existing promotion discounts, and
         * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
         * member, then the larger standalone discount, earlier created_at, and lower promotion_id.
         * Remaining candidates rank by standalone discount, then earlier created_at and lower
         * promotion_id; each is admitted unless max_promotions_per_order is reached or both
         * promotions do not allow each other's discount class. Admitted promotions price line item
         * first, then order, then service charge. A zero-value promotion is dropped and selection
         * runs again.
         */
        "object": Promotion;
    };
    /** Shape $ (Value): string.  Value enum: "promotion.archived". */
    "event_type"?: "promotion.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_promotion_code_archived_installed_merchants}. The
 * `promotion_code.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_promotion_code_archived_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PromotionCode}. A code a buyer
     * enters to claim a promotion.
     */
    "data"?: {
        /** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Shape $ (Value): string.  Value enum: "promotion_code.archived". */
    "event_type"?: "promotion_code.archived" | (string & {});
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
 * Shape $ (Value): {@link Webhook_promotion_code_archived_merchant}. The `promotion_code.archived`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_promotion_code_archived_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PromotionCode}. A code a buyer
     * enters to claim a promotion.
     */
    "data"?: {
        /** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Shape $ (Value): string.  Value enum: "promotion_code.archived". */
    "event_type"?: "promotion_code.archived" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_promotion_code_created_installed_merchants}. The
 * `promotion_code.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_promotion_code_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PromotionCode}. A code a buyer
     * enters to claim a promotion.
     */
    "data"?: {
        /** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Shape $ (Value): string.  Value enum: "promotion_code.created". */
    "event_type"?: "promotion_code.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_promotion_code_created_merchant}. The `promotion_code.created`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_promotion_code_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PromotionCode}. A code a buyer
     * enters to claim a promotion.
     */
    "data"?: {
        /** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Shape $ (Value): string.  Value enum: "promotion_code.created". */
    "event_type"?: "promotion_code.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_promotion_code_updated_installed_merchants}. The
 * `promotion_code.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_promotion_code_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PromotionCode}. A code a buyer
     * enters to claim a promotion.
     */
    "data"?: {
        /** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Shape $ (Value): string.  Value enum: "promotion_code.updated". */
    "event_type"?: "promotion_code.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_promotion_code_updated_merchant}. The `promotion_code.updated`
 * webhook payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_promotion_code_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link PromotionCode}. A code a buyer
     * enters to claim a promotion.
     */
    "data"?: {
        /** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Shape $ (Value): string.  Value enum: "promotion_code.updated". */
    "event_type"?: "promotion_code.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_promotion_created_installed_merchants}. The `promotion.created`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_promotion_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Promotion}. Promotion evaluation
     * order: manual discounts stay, do not count toward the cap, and are ignored by combines_with.
     * Frozen subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Promotion}. Promotion evaluation order: manual discounts stay,
         * do not count toward the cap, and are ignored by combines_with. Frozen subscription-term
         * promotions are admitted first and are exempt from exclusivity, combines_with, and the
         * cap. Candidates include codes being applied, existing promotion discounts, and
         * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
         * member, then the larger standalone discount, earlier created_at, and lower promotion_id.
         * Remaining candidates rank by standalone discount, then earlier created_at and lower
         * promotion_id; each is admitted unless max_promotions_per_order is reached or both
         * promotions do not allow each other's discount class. Admitted promotions price line item
         * first, then order, then service charge. A zero-value promotion is dropped and selection
         * runs again.
         */
        "object": Promotion;
    };
    /** Shape $ (Value): string.  Value enum: "promotion.created". */
    "event_type"?: "promotion.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_promotion_created_merchant}. The `promotion.created` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_promotion_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Promotion}. Promotion evaluation
     * order: manual discounts stay, do not count toward the cap, and are ignored by combines_with.
     * Frozen subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Promotion}. Promotion evaluation order: manual discounts stay,
         * do not count toward the cap, and are ignored by combines_with. Frozen subscription-term
         * promotions are admitted first and are exempt from exclusivity, combines_with, and the
         * cap. Candidates include codes being applied, existing promotion discounts, and
         * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
         * member, then the larger standalone discount, earlier created_at, and lower promotion_id.
         * Remaining candidates rank by standalone discount, then earlier created_at and lower
         * promotion_id; each is admitted unless max_promotions_per_order is reached or both
         * promotions do not allow each other's discount class. Admitted promotions price line item
         * first, then order, then service charge. A zero-value promotion is dropped and selection
         * runs again.
         */
        "object": Promotion;
    };
    /** Shape $ (Value): string.  Value enum: "promotion.created". */
    "event_type"?: "promotion.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_promotion_updated_installed_merchants}. The `promotion.updated`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_promotion_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Promotion}. Promotion evaluation
     * order: manual discounts stay, do not count toward the cap, and are ignored by combines_with.
     * Frozen subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Promotion}. Promotion evaluation order: manual discounts stay,
         * do not count toward the cap, and are ignored by combines_with. Frozen subscription-term
         * promotions are admitted first and are exempt from exclusivity, combines_with, and the
         * cap. Candidates include codes being applied, existing promotion discounts, and
         * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
         * member, then the larger standalone discount, earlier created_at, and lower promotion_id.
         * Remaining candidates rank by standalone discount, then earlier created_at and lower
         * promotion_id; each is admitted unless max_promotions_per_order is reached or both
         * promotions do not allow each other's discount class. Admitted promotions price line item
         * first, then order, then service charge. A zero-value promotion is dropped and selection
         * runs again.
         */
        "object": Promotion;
    };
    /** Shape $ (Value): string.  Value enum: "promotion.updated". */
    "event_type"?: "promotion.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_promotion_updated_merchant}. The `promotion.updated` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_promotion_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Promotion}. Promotion evaluation
     * order: manual discounts stay, do not count toward the cap, and are ignored by combines_with.
     * Frozen subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data"?: {
        /**
         * Shape $ (Value): {@link Promotion}. Promotion evaluation order: manual discounts stay,
         * do not count toward the cap, and are ignored by combines_with. Frozen subscription-term
         * promotions are admitted first and are exempt from exclusivity, combines_with, and the
         * cap. Candidates include codes being applied, existing promotion discounts, and
         * qualifying automatic promotions. Each exclusivity group keeps its highest-priority
         * member, then the larger standalone discount, earlier created_at, and lower promotion_id.
         * Remaining candidates rank by standalone discount, then earlier created_at and lower
         * promotion_id; each is admitted unless max_promotions_per_order is reached or both
         * promotions do not allow each other's discount class. Admitted promotions price line item
         * first, then order, then service charge. A zero-value promotion is dropped and selection
         * runs again.
         */
        "object": Promotion;
    };
    /** Shape $ (Value): string.  Value enum: "promotion.updated". */
    "event_type"?: "promotion.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_refund_created_installed_merchants}. The `refund.created`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_refund_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Refund}. Money returned against a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
        "object": Refund;
    };
    /** Shape $ (Value): string.  Value enum: "refund.created". */
    "event_type"?: "refund.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_refund_created_merchant}. The `refund.created` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_refund_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Refund}. Money returned against a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
        "object": Refund;
    };
    /** Shape $ (Value): string.  Value enum: "refund.created". */
    "event_type"?: "refund.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_refund_failed_installed_merchants}. The `refund.failed` webhook
 * payload for the `installed_merchants` event source. Fields shared by partner webhook payloads.
 */
export type Webhook_refund_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Refund}. Money returned against a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
        "object": Refund;
    };
    /** Shape $ (Value): string.  Value enum: "refund.failed". */
    "event_type"?: "refund.failed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_refund_failed_merchant}. The `refund.failed` webhook payload for
 * the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_refund_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Refund}. Money returned against a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
        "object": Refund;
    };
    /** Shape $ (Value): string.  Value enum: "refund.failed". */
    "event_type"?: "refund.failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_refund_partially_succeeded_installed_merchants}. The
 * `refund.partially_succeeded` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_refund_partially_succeeded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Refund}. Money returned against a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
        "object": Refund;
    };
    /** Shape $ (Value): string.  Value enum: "refund.partially_succeeded". */
    "event_type"?: "refund.partially_succeeded" | (string & {});
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
 * Shape $ (Value): {@link Webhook_refund_partially_succeeded_merchant}. The
 * `refund.partially_succeeded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_refund_partially_succeeded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Refund}. Money returned against a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
        "object": Refund;
    };
    /** Shape $ (Value): string.  Value enum: "refund.partially_succeeded". */
    "event_type"?: "refund.partially_succeeded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_refund_succeeded_installed_merchants}. The `refund.succeeded`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_refund_succeeded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Refund}. Money returned against a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
        "object": Refund;
    };
    /** Shape $ (Value): string.  Value enum: "refund.succeeded". */
    "event_type"?: "refund.succeeded" | (string & {});
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
 * Shape $ (Value): {@link Webhook_refund_succeeded_merchant}. The `refund.succeeded` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_refund_succeeded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Refund}. Money returned against a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
        "object": Refund;
    };
    /** Shape $ (Value): string.  Value enum: "refund.succeeded". */
    "event_type"?: "refund.succeeded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_refund_updated_installed_merchants}. The `refund.updated`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_refund_updated_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Refund}. Money returned against a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
        "object": Refund;
    };
    /** Shape $ (Value): string.  Value enum: "refund.updated". */
    "event_type"?: "refund.updated" | (string & {});
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
 * Shape $ (Value): {@link Webhook_refund_updated_merchant}. The `refund.updated` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_refund_updated_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Refund}. Money returned against a
     * collected payment.
     */
    "data"?: {
        /** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
        "object": Refund;
    };
    /** Shape $ (Value): string.  Value enum: "refund.updated". */
    "event_type"?: "refund.updated" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_report_failed_installed_merchants}. The `report.failed` webhook
 * payload for the `installed_merchants` event source. Fields shared by partner webhook payloads.
 */
export type Webhook_report_failed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Report}. A report generated from
     * the merchant's activity.
     */
    "data"?: {
        /** Shape $ (Value): {@link Report}. A report generated from the merchant's activity. */
        "object": Report;
    };
    /** Shape $ (Value): string.  Value enum: "report.failed". */
    "event_type"?: "report.failed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_report_failed_merchant}. The `report.failed` webhook payload for
 * the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_report_failed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Report}. A report generated from
     * the merchant's activity.
     */
    "data"?: {
        /** Shape $ (Value): {@link Report}. A report generated from the merchant's activity. */
        "object": Report;
    };
    /** Shape $ (Value): string.  Value enum: "report.failed". */
    "event_type"?: "report.failed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_report_succeeded_installed_merchants}. The `report.succeeded`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_report_succeeded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Report}. A report generated from
     * the merchant's activity.
     */
    "data"?: {
        /** Shape $ (Value): {@link Report}. A report generated from the merchant's activity. */
        "object": Report;
    };
    /** Shape $ (Value): string.  Value enum: "report.succeeded". */
    "event_type"?: "report.succeeded" | (string & {});
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
 * Shape $ (Value): {@link Webhook_report_succeeded_merchant}. The `report.succeeded` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_report_succeeded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link Report}. A report generated from
     * the merchant's activity.
     */
    "data"?: {
        /** Shape $ (Value): {@link Report}. A report generated from the merchant's activity. */
        "object": Report;
    };
    /** Shape $ (Value): string.  Value enum: "report.succeeded". */
    "event_type"?: "report.succeeded" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_canceled_installed_merchants}. The `return.canceled`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_return_canceled_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResource}. A request to
     * send purchased items back.
     */
    "data"?: {
        /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Shape $ (Value): string.  Value enum: "return.canceled". */
    "event_type"?: "return.canceled" | (string & {});
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
 * Shape $ (Value): {@link Webhook_return_canceled_merchant}. The `return.canceled` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_return_canceled_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResource}. A request to
     * send purchased items back.
     */
    "data"?: {
        /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Shape $ (Value): string.  Value enum: "return.canceled". */
    "event_type"?: "return.canceled" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_completed_installed_merchants}. The `return.completed`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_return_completed_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResource}. A request to
     * send purchased items back.
     */
    "data"?: {
        /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Shape $ (Value): string.  Value enum: "return.completed". */
    "event_type"?: "return.completed" | (string & {});
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
 * Shape $ (Value): {@link Webhook_return_completed_merchant}. The `return.completed` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_return_completed_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResource}. A request to
     * send purchased items back.
     */
    "data"?: {
        /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Shape $ (Value): string.  Value enum: "return.completed". */
    "event_type"?: "return.completed" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_created_installed_merchants}. The `return.created`
 * webhook payload for the `installed_merchants` event source. Fields shared by partner webhook
 * payloads.
 */
export type Webhook_return_created_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResource}. A request to
     * send purchased items back.
     */
    "data"?: {
        /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Shape $ (Value): string.  Value enum: "return.created". */
    "event_type"?: "return.created" | (string & {});
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
 * Shape $ (Value): {@link Webhook_return_created_merchant}. The `return.created` webhook payload
 * for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type Webhook_return_created_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResource}. A request to
     * send purchased items back.
     */
    "data"?: {
        /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Shape $ (Value): string.  Value enum: "return.created". */
    "event_type"?: "return.created" | (string & {});
});
/**
 * Shape $ (Value): {@link Webhook_return_decision_recorded_installed_merchants}. The
 * `return.decision_recorded` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type Webhook_return_decision_recorded_installed_merchants = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResource}. A request to
     * send purchased items back.
     */
    "data"?: {
        /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Shape $ (Value): string.  Value enum: "return.decision_recorded". */
    "event_type"?: "return.decision_recorded" | (string & {});
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
 * Shape $ (Value): {@link Webhook_return_decision_recorded_merchant}. The
 * `return.decision_recorded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type Webhook_return_decision_recorded_merchant = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): object. Shape $.object (Required): {@link ReturnResource}. A request to
     * send purchased items back.
     */
    "data"?: {
        /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Shape $ (Value): string.  Value enum: "return.decision_recorded". */
    "event_type"?: "return.decision_recorded" | (string & {});
});
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
