import type {
    ReturnProcessDecisionInput,
    ReturnProcessDispositionRequestInput,
    ReturnProcessInspectionRequestInput,
    ReturnProcessResolutionRequestInput,
    ReturnProcessReceiptRequest,
    ReturnProcessReceiptRequestInput,
    ReturnProcessResult
} from './types-49.js';
import type { ProcessExistingReturnLineItemRequest } from './types-43.js';
import type { ResponseMeta } from './types-48.js';
import type { CategoryReference } from './types-4.js';
import type { ImageAttachment, ImageRequest, ImageRequestInput } from './types-25.js';
import type { MetadataMap, MerchantWebhookEnvelope, MetadataRequestInput } from './types-34.js';
import type { ModifierSet, MoneyValue, MoneyValueInput } from './types-35.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { Dimensions, DimensionsInput } from './types-20.js';
import type { GiftCardProductConfiguration, GiftCardProductConfigurationRequestInput } from './types-24.js';
import type { SelectedProductOption } from './types-53.js';
import type { Weight, WeightInput } from './types-61.js';
import type { InventoryItemCreateRequest, InventoryItemCreateRequestInput } from './types-26.js';
import type { CreateProductRequestInput } from './types-10.js';
import type { InputValue } from '../runtime.js';
import type { BundlesGetParams } from './types-1.js';
import type { UpdateProductRequestInput, UpdateProductVariantRequestInput } from './types-59.js';
import type {
    PromotionCode,
    PromotionCodesSummary,
    PromotionCombinesWith,
    PromotionExclusivity,
    PromotionRuleGroup,
    PromotionSchedule,
    PromotionRecurrence,
    PromotionRuleGroupRequest,
    PromotionRecurrenceInput,
    PromotionRuleGroupRequestInput,
    PromotionPercentOffMethod,
    PromotionPercentOffMethodRequest,
    PromotionBuyXGetYMethodRequestInput,
    PromotionPercentOffMethodRequestInput
} from './types-45.js';
/**
 * How to process one line of an existing return: the received quantity, inspection, decision,
 * disposition, and resolution.
 */
export type ProcessExistingReturnLineItemRequestInput = {
    /**
     * Start from the pinned policy proposal recomputed for approved_quantity when the line has a
     * policy evaluation and the proposal can be built. Otherwise start with
     * return_required_quantity equal to approved_quantity, allowed_resolution_types containing
     * refund, exchange, replacement, no_monetary_action, and store_credit in that order regardless
     * of whether the original payment is refundable, no automatic_resolution_type,
     * is_inspection_required false, and no receiving_location_id. Each supplied field replaces its
     * starting value; allowed_resolution_types replaces the whole list. Omit
     * automatic_resolution_type to keep its starting value, or send null to resolve manually. Then
     * fill an omitted release_timing with after_inspection when merchandise is required and
     * inspection is required, after_receipt when merchandise is required without inspection, or
     * after_approval when no merchandise is required. Validate the merged decision for quantity
     * bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned
     * policy always requires override_reason when approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
     * other decision fields use these defaults and override_reason is otherwise optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     */
    "decision"?: ReturnProcessDecisionInput;
    /**
     * What was done with a returned item, such as restocked as sellable or sent for repair,
     * supplied when processing an existing return.
     */
    "disposition"?: ReturnProcessDispositionRequestInput;
    /** An inspection result for a returned item, supplied when processing an existing return. */
    "inspection"?: ReturnProcessInspectionRequestInput;
    /**
     * Whole number of units received. It must equal the line's committed return_required_quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "received_quantity"?: number;
    /**
     * The resolution to apply to a returned item, such as refund or exchange, with the quantity
     * and any replacement items.
     */
    "resolution"?: ReturnProcessResolutionRequestInput;
    /** minLength: 1. */
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
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. [] (Value): {@link ProcessExistingReturnLineItemRequest}. How to process one
     * line of an existing return: the received quantity, inspection, decision, disposition, and
     * resolution.
     */
    "line_items": Array<ProcessExistingReturnLineItemRequest>;
    /**
     * The receipt of returned merchandise, with when and where it was received, supplied when
     * processing an existing return.
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
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. [] (Value): {@link ProcessExistingReturnLineItemRequestInput}. How to process
     * one line of an existing return: the received quantity, inspection, decision, disposition,
     * and resolution.
     */
    "line_items": Array<ProcessExistingReturnLineItemRequestInput>;
    /**
     * The receipt of returned merchandise, with when and where it was received, supplied when
     * processing an existing return.
     */
    "receipt"?: ReturnProcessReceiptRequestInput;
};
/** A response containing `ReturnProcessResult` data. */
export type ProcessExistingReturnResponse = {
    /**
     * The return is the primary resource and expected_version target; the other resources report
     * the processing effects.
     */
    "data": ReturnProcessResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** An item offered in the merchant's catalog. */
export type Product = {
    /** Number of active variants belonging to the product. Format: int32. */
    "active_variant_count"?: number;
    /** Whether the product is active and has at least one active variant. */
    "available_for_sale"?: boolean;
    /**
     * Always present. Empty collections are returned as []. [] (Value): {@link CategoryReference}.
     * A reference to a product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * The product's default variant, when one is set. A specific purchasable version of a product.
     */
    "default_variant"?: ProductVariant;
    /** Identifier of the variant chosen as this product's default, when one is set. */
    "default_variant_id"?: string;
    /**
     * Delivery readiness aggregated across the product's non-archived variants. Value enum:
     * "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Description of the product shown to buyers. */
    "description"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Images attached to this resource, in display order. The first image is primary. [] (Value):
     * {@link ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "images": Array<ImageAttachment>;
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
    /** Identifier of the merchant that owns this resource. */
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
    /** Attached modifier set. Send null on update to remove it. */
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
     * Lowest and highest unit prices among active variants. Omitted when there are no active
     * variants or their currencies differ. The lowest and highest unit prices across a product's
     * variants.
     */
    "price_range"?: ProductPriceRange;
    /** Stable identifier of the product. */
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
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Number of non-archived variants belonging to the product. Format: int32. */
    "variant_count"?: number;
    /**
     * The variants this request created, ordered by `position` and then `variant_id`. Present only
     * on the `POST /v1/products` response. Read variants later with `GET
     * /v1/products/{product_id}/variants`. [] (Value): {@link ProductVariant}. A specific
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
        "object": Product;
    };
    "event_type"?: "product.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link Product}. An item offered in the merchant's catalog. */
    "data"?: {
        /** An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Value enum: "product.archived". */
    "event_type"?: "product.archived";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `product.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Product}. An item offered in the merchant's catalog. */
    "data"?: {
        /** An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Value enum: "product.archived". */
    "event_type"?: "product.archived";
});
export type ProductCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link Product}. An item offered in the merchant's catalog. */
    "data"?: {
        /** An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Value enum: "product.created". */
    "event_type"?: "product.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `product.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ProductCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Product}. An item offered in the merchant's catalog. */
    "data"?: {
        /** An item offered in the merchant's catalog. */
        "object": Product;
    };
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
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time. */
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
    /** Stable identifier of the product option. */
    "option_id": string;
    /** Display order among the product's options, starting at zero. Format: int32. */
    "position": number;
    /** Identifier of the product this option belongs to. */
    "product_id": string;
    /**
     * Option lifecycle status. Every active variant must select an active value for each active
     * option. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Values offered for this option, such as Small, Medium, and Large for Size. [] (Value):
     * {@link ProductOptionValue}. One value of a product option, such as a size or color, with its
     * position and status.
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
/** One value of a product option, such as a size or color, with its position and status. */
export type ProductOptionValue = {
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Stable identifier of the option value. */
    "option_value_id": string;
    /** Display order among the option's values, starting at zero. Format: int32. */
    "position": number;
    /**
     * Option value lifecycle status. Only active values can be newly selected by active variants.
     * Value enum: "active", "inactive", "archived".
     */
    "status"?: "active" | "inactive" | "archived" | (string & {});
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time. */
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
        "object": Product;
    };
    "event_type"?: "product.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link Product}. An item offered in the merchant's catalog. */
    "data"?: {
        /** An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Value enum: "product.updated". */
    "event_type"?: "product.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `product.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ProductUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Product}. An item offered in the merchant's catalog. */
    "data"?: {
        /** An item offered in the merchant's catalog. */
        "object": Product;
    };
    /** Value enum: "product.updated". */
    "event_type"?: "product.updated";
});
/** A specific purchasable version of a product. */
export type ProductVariant = {
    /** Whether the variant and its product are both active. */
    "available_for_sale": boolean;
    /** Barcode assigned to this sellable item. */
    "barcode"?: string;
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time. */
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
    /** Identifier of the delivery profile assigned to this variant. */
    "delivery_profile_id"?: string;
    /**
     * Images shown for the variant: its own gallery when nonempty, otherwise the product's
     * gallery. [] (Value): {@link ImageAttachment}. An image attached to a resource, with its
     * display properties and attachment metadata.
     */
    "effective_images": Array<ImageAttachment>;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
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
     * Whether effective_images comes from the product's gallery because this variant's gallery is
     * empty.
     */
    "images_inherited": boolean;
    /**
     * The inventory item this variant consumes. Present exactly when inventory_tracking is
     * tracked. Several variants may share one inventory item.
     */
    "inventory_item_id"?: string;
    /**
     * Whether sales of this variant consume an inventory item. Value enum: "not_tracked",
     * "tracked".
     */
    "inventory_tracking": "not_tracked" | "tracked" | (string & {});
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
    /** Identifier of the merchant that owns this resource. */
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
    /** Attached modifier set. Send null on update to remove it. */
    "modifier_set_id": string | null;
    /** Variant name that distinguishes it from the product's other variants. */
    "name"?: string;
    /** Display order among the product's variants, starting at zero. Format: int32. */
    "position": number;
    /** Identifier of the product this variant belongs to. */
    "product_id": string;
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
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Stable identifier of the product variant. */
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
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link ProductVariant}. A specific purchasable version of a product. */
    "data"?: {
        /** A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Value enum: "product_variant.archived". */
    "event_type"?: "product_variant.archived";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `product_variant.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductVariantArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ProductVariant}. A specific purchasable version of a product. */
    "data"?: {
        /** A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Value enum: "product_variant.archived". */
    "event_type"?: "product_variant.archived";
});
export type ProductVariantCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link ProductVariant}. A specific purchasable version of a product. */
    "data"?: {
        /** A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Value enum: "product_variant.created". */
    "event_type"?: "product_variant.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `product_variant.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductVariantCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ProductVariant}. A specific purchasable version of a product. */
    "data"?: {
        /** A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Value enum: "product_variant.created". */
    "event_type"?: "product_variant.created";
});
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
    /** Stock keeping unit of the matching variant, when set. */
    "sku"?: string;
    /** Identifier of the variant that matched the product list's variant filters or query. */
    "variant_id": string;
};
/** The request body for: Create product variant. */
export type ProductVariantRequest = {
    /** Barcode assigned to this sellable item. minLength: 1. maxLength: 100. */
    "barcode"?: string;
    /** Identifier of the delivery profile to assign to this variant. minLength: 1. */
    "delivery_profile_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
     * inventory_item_id or inventory_item. minLength: 1.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
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
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
};
/** The request body for: Create product variant. */
export type ProductVariantRequestInput = {
    /** Barcode assigned to this sellable item. minLength: 1. maxLength: 100. */
    "barcode"?: string;
    /** Identifier of the delivery profile to assign to this variant. minLength: 1. */
    "delivery_profile_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
     * inventory_item_id or inventory_item. minLength: 1.
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
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
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
    "unit_dimensions"?: DimensionsInput;
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
};
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
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link ProductVariant}. A specific purchasable version of a product. */
    "data"?: {
        /** A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Value enum: "product_variant.updated". */
    "event_type"?: "product_variant.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `product_variant.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductVariantUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ProductVariant}. A specific purchasable version of a product. */
    "data"?: {
        /** A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Value enum: "product_variant.updated". */
    "event_type"?: "product_variant.updated";
});
export type ProductsCreateParams = (CreateProductRequestInput);
export type ProductsCreateVariantParams = (InputValue<ProductVariantRequestInput>);
export type ProductsDeleteParams = {
    /** Optional product version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type ProductsDeleteVariantParams = {
    /** Optional product variant version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type ProductsGetOptionParams = {};
export type ProductsGetParams = BundlesGetParams;
export type ProductsGetVariantParams = BundlesGetParams;
export type ProductsListOptionsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
};
export type ProductsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by product type. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "physical",
     * "service", "fee", "digital", "gift_card". Value enum: "physical", "service", "fee",
     * "digital", "gift_card". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "physical",
     * "service", "fee", "digital", "gift_card". anyOf[1][] (Value): string. Value enum:
     * "physical", "service", "fee", "digital", "gift_card". anyOf[2] (Value): string. Value enum:
     * "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type"?: InputValue<("physical" | "service" | "fee" | "digital" | "gift_card")
        | readonly ("physical" | "service" | "fee" | "digital" | "gift_card")[]>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /** Filter by category handle. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$. */
    "category_handle"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
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
     * enumerate all matches. minLength: 1. maxLength: 255.
     */
    "variant_external_reference_id"?: InputValue<string>;
    /**
     * Exact match on ProductVariant.inventory_item_id. Multiple variants may share one inventory
     * item; this does not match or synchronize the inventory item's SKU. On products, all exact
     * variant filters must match the same non-archived variant. pattern:
     * ^invi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "invi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
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
     * Example: "dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Filter by aggregated delivery readiness across non-deleted variants. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "configured", "action_required", "not_applicable". Value enum:
     * "configured", "action_required", "not_applicable". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "configured", "action_required", "not_applicable". anyOf[1][] (Value):
     * string. Value enum: "configured", "action_required", "not_applicable". anyOf[2] (Value):
     * string. Value enum: "configured", "action_required", "not_applicable".
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
     * Supported expansions: modifier_set. Include the requested related resources using scoped
     * batch reads for this page. Each relationship requires its existing target read scopes.
     * Expansion changes the representation without changing pagination tokens. Limits: at most 10
     * unique expand paths per request. Pass expand=modifier_set. [] enum: "modifier_set". Value
     * enum: "modifier_set". anyOf[1] (Value): Array of string. [] enum: "modifier_set". anyOf[1][]
     * (Value): string. Value enum: "modifier_set". anyOf[2] (Value): string. Value enum:
     * "modifier_set".
     */
    "expand"?: InputValue<("modifier_set") | readonly ("modifier_set")[]>;
};
export type ProductsListVariantsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
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
     * ^invi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "invi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
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
    /** Filter by assigned delivery profile ID. Example: "dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Filter by delivery readiness. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "configured", "action_required", "not_applicable". Value enum: "configured",
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
     * Supported expansions: modifier_set. Include the requested related resources using scoped
     * batch reads for this page. Each relationship requires its existing target read scopes.
     * Expansion changes the representation without changing pagination tokens. Limits: at most 10
     * unique expand paths per request. Pass expand=modifier_set. [] enum: "modifier_set". Value
     * enum: "modifier_set". anyOf[1] (Value): Array of string. [] enum: "modifier_set". anyOf[1][]
     * (Value): string. Value enum: "modifier_set". anyOf[2] (Value): string. Value enum:
     * "modifier_set".
     */
    "expand"?: InputValue<("modifier_set") | readonly ("modifier_set")[]>;
};
export type ProductsUpdateParams = (InputValue<UpdateProductRequestInput>);
export type ProductsUpdateVariantParams = (InputValue<UpdateProductVariantRequestInput>);
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
    /** When the promotion was created, as an RFC3339 timestamp. Format: date-time. */
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
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Omitted when
     * there is no redemption limit. Format: int64.
     */
    "max_uses"?: number;
    /** Identifier of the merchant that owns the promotion. */
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
    /** Unique identifier for the promotion. */
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
    /** When the promotion was last updated, as an RFC3339 timestamp. Format: date-time. */
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
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
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
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
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
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
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
    "recurrence"?: PromotionRecurrenceInput;
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Send null to clear it.
     * Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
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
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. anyOf[1] (Value): {@link PromotionRuleGroupRequest}. A rule
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Send null to clear it.
     * Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
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
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. anyOf[1] (Value): {@link PromotionRuleGroupRequestInput}. A
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
     * PromotionRecurrenceInput}. How often a promotion's discount repeats on a subscription: once,
     * for a number of charged payments, or forever. anyOf[2] (Value): null.
     */
    "recurrence"?: ((PromotionRecurrenceInput) | (null));
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
        "object": Promotion;
    };
    "event_type"?: "promotion.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Promotion;
    };
    "event_type"?: "promotion.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
     *  object (Required): {@link Promotion}. Promotion evaluation order: manual discounts stay, do
     * not count toward the cap, and are ignored by combines_with. Frozen subscription-term
     * promotions are admitted first and are exempt from exclusivity, combines_with, and the cap.
     * Candidates include codes being applied, existing promotion discounts, and qualifying
     * automatic promotions. Each exclusivity group keeps its highest-priority member, then the
     * larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates
     * rank by standalone discount, then earlier created_at and lower promotion_id; each is
     * admitted unless max_promotions_per_order is reached or both promotions do not allow each
     * other's discount class. Admitted promotions price line item first, then order, then service
     * charge. A zero-value promotion is dropped and selection runs again.
     */
    "data"?: {
        /**
         * Promotion evaluation order: manual discounts stay, do not count toward the cap, and are
         * ignored by combines_with. Frozen subscription-term promotions are admitted first and are
         * exempt from exclusivity, combines_with, and the cap. Candidates include codes being
         * applied, existing promotion discounts, and qualifying automatic promotions. Each
         * exclusivity group keeps its highest-priority member, then the larger standalone
         * discount, earlier created_at, and lower promotion_id. Remaining candidates rank by
         * standalone discount, then earlier created_at and lower promotion_id; each is admitted
         * unless max_promotions_per_order is reached or both promotions do not allow each other's
         * discount class. Admitted promotions price line item first, then order, then service
         * charge. A zero-value promotion is dropped and selection runs again.
         */
        "object": Promotion;
    };
    /** Value enum: "promotion.archived". */
    "event_type"?: "promotion.archived";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `promotion.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Promotion}. Promotion evaluation order: manual discounts stay, do
     * not count toward the cap, and are ignored by combines_with. Frozen subscription-term
     * promotions are admitted first and are exempt from exclusivity, combines_with, and the cap.
     * Candidates include codes being applied, existing promotion discounts, and qualifying
     * automatic promotions. Each exclusivity group keeps its highest-priority member, then the
     * larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates
     * rank by standalone discount, then earlier created_at and lower promotion_id; each is
     * admitted unless max_promotions_per_order is reached or both promotions do not allow each
     * other's discount class. Admitted promotions price line item first, then order, then service
     * charge. A zero-value promotion is dropped and selection runs again.
     */
    "data"?: {
        /**
         * Promotion evaluation order: manual discounts stay, do not count toward the cap, and are
         * ignored by combines_with. Frozen subscription-term promotions are admitted first and are
         * exempt from exclusivity, combines_with, and the cap. Candidates include codes being
         * applied, existing promotion discounts, and qualifying automatic promotions. Each
         * exclusivity group keeps its highest-priority member, then the larger standalone
         * discount, earlier created_at, and lower promotion_id. Remaining candidates rank by
         * standalone discount, then earlier created_at and lower promotion_id; each is admitted
         * unless max_promotions_per_order is reached or both promotions do not allow each other's
         * discount class. Admitted promotions price line item first, then order, then service
         * charge. A zero-value promotion is dropped and selection runs again.
         */
        "object": Promotion;
    };
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
