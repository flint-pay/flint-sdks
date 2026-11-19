import type { Dimensions, DimensionsRequestInput } from './types-25.js';
import type { GiftCardPurchaseRequest } from './types-30.js';
import type { ImageReferenceRequest, ImageRequest, ImageRequestInput } from './types-31.js';
import type { LineItemFulfillmentRequest } from './types-40.js';
import type { MetadataMap, MetadataRequestInput } from './types-43.js';
import type { MoneyValue, MoneyValueInput } from './types-44.js';
import type {
    OrderCalculatedLineItemTax,
    OrderDraftLineItemInventoryDemandRequest,
    OrderDeliveryDestinationRequest,
    OrderDeliveryRequest,
    OrderDeliveryDestinationRequestInput,
    OrderDeliveryRequestInput
} from './types-45.js';
import type { OrderLineItemModifierRequest, OrderHandover, OrderHandoverRequestInput } from './types-46.js';
import type { SubscribedLineRequest } from './types-69.js';
import type { Weight, WeightRequestInput } from './types-79.js';
import type {
    CreateOrderDiscount,
    CreateOrderLineItemRequest,
    CreateOrderDiscountInput,
    CreateOrderLineItemRequestInput
} from './types-11.js';
import type { InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-33.js';
import type { OrderTaxRequest, OrderTaxRequestInput } from './types-48.js';
import type { ReturnResolutionLineItemRequest, ReturnShipmentLineItemAllocationRequestInput } from './types-65.js';
import type {
    CheckoutGiftCardChallenge,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutBuyerFieldsRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutRedirectsRequestInput
} from './types-6.js';
import type {
    PartnerAppCredentialJWKSURLRequestInput,
    PartnerAppCredentialPublicKeyRequest,
    PartnerAppCredentialPublicKeyRequestInput,
    PartnerAppCredentialWorkloadIdentityRequest,
    PartnerAppCredentialWorkloadIdentityRequestInput,
    PartnerAppPaymentSplits,
    PartnerAppPermissionManifestEntry,
    PartnerAppPaymentSplitsRequestInput,
    PartnerAppPermissionManifestEntryRequestInput
} from './types-49.js';
import type { PartnerAppPlatformProfile, PartnerAppPlatformProfileRequestInput } from './types-50.js';
import type { PlatformFeeCap } from './types-55.js';
import type {
    PlatformFeeCapRequestInput,
    PlatformFeeRequest,
    PlatformFeeRequestInput,
    PriceListPriceRequest,
    PriceListPriceRequestInput,
    PriceList,
    PriceListPriceAddition
} from './types-56.js';
import type { OrderPaymentSourceSelection, OrderPaymentSourceSelectionInput } from './types-47.js';
import type { PaymentSplitRequest, PaymentSplitRequestInput } from './types-54.js';
import type {
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutTaxConfigRequestInput,
    CheckoutTipConfigRequestInput
} from './types-7.js';
import type { LegalSettings } from './types-38.js';
import type {
    PaymentLinkCustomFieldRequest,
    PaymentLinkEventConfigRequest,
    PaymentLinkLineItemRequest,
    PaymentLinkCustomFieldRequestInput,
    PaymentLinkCustomTextConfigInput,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLineItemRequestInput,
    PaymentLinkPaymentConfigInput
} from './types-52.js';
import type { ThemeConfig } from './types-74.js';
import type { PaymentLinkThemeConfigInput } from './types-53.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type { ResponseMeta } from './types-62.js';
import type {
    ProductVariantRequest,
    ProductVariantRequestInput,
    PromotionApplicationMethodRequest,
    PromotionApplicationMethodRequestInput
} from './types-57.js';
import type {
    PromotionCodeRequest,
    PromotionCombinesWithPatch,
    PromotionExclusivityRequest,
    PromotionRuleGroupRequest,
    PromotionCodeRequestInput,
    PromotionCombinesWithRequestInput,
    PromotionExclusivityRequestInput
} from './types-58.js';
import type { PromotionSchedule, PromotionRuleGroupRequestInput, PromotionScheduleRequestInput } from './types-59.js';
import type {
    CreateSmartReaderRequest,
    CreateTapToPayReaderRequest,
    CreateSmartReaderRequestInput,
    CreateTapToPayReaderRequestInput
} from './types-14.js';
import type { CreateRefundRequestCreditNote, CreateRefundRequestFull, CreateRefundRequestTargets } from './types-13.js';
import type {
    RefundCharge,
    RefundDestinations,
    RefundLineItem,
    RefundChargeInput,
    RefundDestinationsInput,
    RefundLineItemInput
} from './types-60.js';
import type {
    RefundTaxBreakdownRefundIn,
    RefundTenderAllocationRequest,
    RefundTaxBreakdownRefundInInput,
    RefundTenderAllocationRequestInput
} from './types-61.js';
import type { SplitReversalRequest, SplitReversalRequestInput } from './types-68.js';
/** The `variant` variant of `CreateOrderLineItem`. */
export type CreateOrderLineItemVariant = ({
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the item as it appears on the order. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered.
     * For manual digital or service delivery, send requirement required, resolution_mode manual,
     * and allowed_types containing digital or service. Fulfillment requirements you supply for an
     * order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details for an order line item: the `face_value_money` and
     * the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /**
     * Image of the item as it appears on the order. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequest;
    /**
     * Inventory items and quantities each unit of the line takes from stock. [] (Value): {@link
     * OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory item that each unit
     * of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Modifiers sold with the item, each chosen from the catalog or typed as text. [] (Value):
     * {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line item: a
     * catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional): {@link
     * MetadataMap}. Caller-owned metadata for this selection, returned on the order line item's
     * modifier. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Caller-owned key-value data
     * for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to
     * 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values
     * total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with
     * flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of
     * the existing modifier. Treated as an opaque resource reference; accepted spellings follow
     * resource ID validation. Its resolved price and the resulting line subtotal must satisfy the
     * order money ceiling. The amount and every computed order amount must not exceed 99999999
     * minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity (Optional): integer. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. [].text (Optional): {@link
     * TextModifierRequest}. The text to use. Send it with a `text` modifier. Text a buyer entered
     * for a text modifier group on an order line item. [].type (Required): string. Selects the
     * type branch. Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalog}. The `catalog` variant of `OrderLineItemModifierInput`.
     * [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** Name of the item as it appears on the order. maxLength: 255. */
    "name"?: string;
    /**
     * Parent product of variant_id, resolved by the preview. Required for variant lines; absent on
     * bundle and custom lines, which have no parent product. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must
     * satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Selected recurring terms for this variant. Lines with the same cadence start one
     * subscription after payment. Makes an order line a subscription purchase, with the
     * subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * How tax applies to this line item. Tax settings you supply for a draft order line item: its
     * tax category, whether it is taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /** Selects the type branch. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /**
     * ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom
     * line item sends neither. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /** How tax applies to this line item. */
    "tax"?: unknown;
    /** Selects the type branch. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom
     * line item sends neither. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
}));
/** The request body for: Create order. */
export type CreateOrderRequest = {
    /**
     * A note to the buyer. Surrounding whitespace is trimmed before length validation. A supplied
     * value cannot be blank; use null where clearing is supported. minLength: 1. maxLength: 1000.
     */
    "buyer_note"?: string;
    /**
     * ID of the customer this order belongs to. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Quotes the exact delivery method and atomically selects it with its charge and inventory
     * hold. Requires orders-write and delivery-write. Shipment and local delivery with one choice
     * group are supported. Cannot be combined with delivery_destination or handover. Complete
     * delivery preference to quote and select together with the order's delivery charge and
     * inventory hold.
     */
    "delivery"?: OrderDeliveryRequest;
    /**
     * Shipment or local-delivery destination for an order created without a delivery selection.
     * The delivery destination you set when creating or updating an order, with an address and an
     * optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequest;
    /**
     * Discounts applied to the order, each with its amount, status, and the line items and charges
     * it covers. [] (Value): {@link CreateOrderDiscount}. A discount to apply when creating an
     * order: either a manual discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscount>;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Carry-out sale: every physical item is handed to the buyer at this location when the order
     * is paid, so paying needs no delivery selection. Can't be combined with delivery_destination.
     * Every physical item is handed to the buyer at this location when the order is paid. Replaces
     * a delivery selection.
     */
    "handover"?: OrderHandover;
    /**
     * A note for your team. Buyer reads leave it out. Surrounding whitespace is trimmed before
     * length validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 1000.
     */
    "internal_note"?: string;
    /**
     * Where tracked demand is routed. When no source is stored or sent, Flint uses
     * settings.inventory.default_routing_source, then the only active Location with
     * inventory_allocation_enabled if exactly one exists in the current environment. Zero or
     * multiple eligible Locations require an explicit source or merchant default. The order stores
     * the resolved source. Where you want inventory routed from: a fixed Location, an inventory
     * allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Items the order sells, each with its pricing, tax, and fulfillment quantities. minItems: 1.
     * [] (Value): {@link CreateOrderLineItemRequest}. A line item to add to an order: a catalog
     * variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequest>;
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
     * Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit.
     * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
     * amount_money or percent.
     */
    "requested_tip"?: CreateOrderTip;
    /**
     * Tax settings for the order. Tax settings for a new order: whether tax is enabled, its
     * calculation, location, and exemption selection.
     */
    "tax"?: OrderTaxRequest;
};
/** The request body for: Create order. */
export type CreateOrderRequestInput = {
    /**
     * A note to the buyer. Surrounding whitespace is trimmed before length validation. A supplied
     * value cannot be blank; use null where clearing is supported. minLength: 1. maxLength: 1000.
     */
    "buyer_note"?: string;
    /**
     * ID of the customer this order belongs to. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Quotes the exact delivery method and atomically selects it with its charge and inventory
     * hold. Requires orders-write and delivery-write. Shipment and local delivery with one choice
     * group are supported. Cannot be combined with delivery_destination or handover. Complete
     * delivery preference to quote and select together with the order's delivery charge and
     * inventory hold.
     */
    "delivery"?: OrderDeliveryRequestInput;
    /**
     * Shipment or local-delivery destination for an order created without a delivery selection.
     * The delivery destination you set when creating or updating an order, with an address and an
     * optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequestInput;
    /**
     * Discounts applied to the order, each with its amount, status, and the line items and charges
     * it covers. [] (Value): {@link CreateOrderDiscountInput}. A discount to apply when creating
     * an order: either a manual discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscountInput>;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Carry-out sale: every physical item is handed to the buyer at this location when the order
     * is paid, so paying needs no delivery selection. Can't be combined with delivery_destination.
     * Every physical item is handed to the buyer at this location when the order is paid. Replaces
     * a delivery selection.
     */
    "handover"?: OrderHandoverRequestInput;
    /**
     * A note for your team. Buyer reads leave it out. Surrounding whitespace is trimmed before
     * length validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 1000.
     */
    "internal_note"?: string;
    /**
     * Where tracked demand is routed. When no source is stored or sent, Flint uses
     * settings.inventory.default_routing_source, then the only active Location with
     * inventory_allocation_enabled if exactly one exists in the current environment. Zero or
     * multiple eligible Locations require an explicit source or merchant default. The order stores
     * the resolved source. Where you want inventory routed from: a fixed Location, an inventory
     * allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Items the order sells, each with its pricing, tax, and fulfillment quantities. minItems: 1.
     * [] (Value): {@link CreateOrderLineItemRequestInput}. A line item to add to an order: a
     * catalog variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
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
     * Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit.
     * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
     * amount_money or percent.
     */
    "requested_tip"?: CreateOrderTipInput;
    /**
     * Tax settings for the order. Tax settings for a new order: whether tax is enabled, its
     * calculation, location, and exemption selection.
     */
    "tax"?: OrderTaxRequestInput;
};
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTip = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "amount", "percent". */
    "calculation_type": "amount" | "percent" | (string & {});
    /**
     * Optional description that stays on the tip for your reporting. minLength: 1. maxLength: 255.
     */
    "description"?: string;
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
     * Optional name that stays on the tip for your reporting. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & ((Exclude<CreateOrderTipAmount & object, readonly unknown[]>)
    | (Exclude<CreateOrderTipPercent & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipAmount = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /**
     * Optional description that stays on the tip for your reporting. minLength: 1. maxLength: 255.
     */
    "description"?: string;
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
     * Optional name that stays on the tip for your reporting. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & (({
    /** Selects the calculation type branch. Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
}));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipAmountInput = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "amount". */
    "calculation_type": "amount";
    /**
     * Optional description that stays on the tip for your reporting. minLength: 1. maxLength: 255.
     */
    "description"?: string;
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
     * Optional name that stays on the tip for your reporting. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & (({
    /** Selects the calculation type branch. Value enum: "amount". */
    "calculation_type": ("amount") & ("amount");
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
})
    & (({
    "percent"?: never;
})));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipInput = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "amount", "percent". */
    "calculation_type": "amount" | "percent";
    /**
     * Optional description that stays on the tip for your reporting. minLength: 1. maxLength: 255.
     */
    "description"?: string;
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
     * Optional name that stays on the tip for your reporting. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & ((Exclude<CreateOrderTipAmountInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderTipPercentInput & object, readonly unknown[]>));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipPercent = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /**
     * Optional description that stays on the tip for your reporting. minLength: 1. maxLength: 255.
     */
    "description"?: string;
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
     * Optional name that stays on the tip for your reporting. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    /** Selects the calculation type branch. Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
}));
/**
 * Requested tip expressed as either a flat amount or a percentage. Send exactly one of
 * amount_money or percent.
 */
export type CreateOrderTipPercentInput = ({
    /**
     * Flat requested tip in the order currency. The amount must be at least 1 minor unit;
     * otherwise, Flint returns INVALID_REQUEST with param requested_tip.amount_money.amount. For
     * USD orders, the tip also cannot exceed the larger of $1,000 or the post-discount merchandise
     * subtotal. The amount and every computed order amount must not exceed 99999999 minor units
     * ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Selects the calculation type branch. Value enum: "percent". */
    "calculation_type": "percent";
    /**
     * Optional description that stays on the tip for your reporting. minLength: 1. maxLength: 255.
     */
    "description"?: string;
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
     * Optional name that stays on the tip for your reporting. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    /** Selects the calculation type branch. Value enum: "percent". */
    "calculation_type": ("percent") & ("percent");
    /**
     * Requested tip percentage from 1 through 100, calculated from the post-discount merchandise
     * subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    "amount_money"?: never;
})));
/** The request body for: Create package item. */
export type CreatePackageItemRequest = {
    /**
     * Bundle component to pack, from the order line's bundle_components. Required for every bundle
     * line, including a line with only one component in the fulfillment. Send null for a
     * non-bundle line. minLength: 1. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string | null;
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
     * Order line whose quantity is allocated. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * Whole-number quantity in component units for a bundle component, or line units otherwise;
     * fractional quantities are not supported. Format: int64.
     */
    "quantity": number;
};
/** The request body for: Create package item. */
export type CreatePackageItemRequestInput = {
    /**
     * Bundle component to pack, from the order line's bundle_components. Required for every bundle
     * line, including a line with only one component in the fulfillment. Send null for a
     * non-bundle line. minLength: 1. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string | null;
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
     * Order line whose quantity is allocated. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * Whole-number quantity in component units for a bundle component, or line units otherwise;
     * fractional quantities are not supported. Format: int64.
     */
    "quantity": number;
};
/**
 * Creates one package belonging to shipment_id. Inline packages omit shipment_id because their
 * enclosing create supplies the shipment.
 */
export type CreatePackageRequest = ({
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
     * Optional version of the owning fulfillment. If the version changed, Flint refuses the
     * request before creating any records. Format: uint64. minimum: 1.
     */
    "expected_fulfillment_version"?: number;
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
     * Independent package-item collection. Required when status is shipped unless
     * pack_fulfillment_items is true. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequest}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
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
    /**
     * Put every item in the fulfillment into this outbound package. Use with status shipped and a
     * single package. Omit items. Value enum: true.
     */
    "pack_fulfillment_items"?: boolean;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A Return line and the quantity to place in a return
     * shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /** Shipment that owns this package. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
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
    & ((Exclude<CreatePackageRequestCreated & object, readonly unknown[]>)
    | (Exclude<CreatePackageRequestShipped & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Creates one package belonging to shipment_id. Inline packages omit shipment_id because their
 * enclosing create supplies the shipment.
 */
export type CreatePackageRequestCreated = ({
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
     * Optional version of the owning fulfillment. If the version changed, Flint refuses the
     * request before creating any records. Format: uint64. minimum: 1.
     */
    "expected_fulfillment_version"?: number;
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
     * Independent package-item collection. Required when status is shipped unless
     * pack_fulfillment_items is true. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequest}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
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
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A Return line and the quantity to place in a return
     * shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /** Shipment that owns this package. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
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
});
/**
 * Creates one package belonging to shipment_id. Inline packages omit shipment_id because their
 * enclosing create supplies the shipment.
 */
export type CreatePackageRequestCreatedInput = ({
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
     * Optional version of the owning fulfillment. If the version changed, Flint refuses the
     * request before creating any records. Format: uint64. minimum: 1.
     */
    "expected_fulfillment_version"?: number;
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
     * Independent package-item collection. Required when status is shipped unless
     * pack_fulfillment_items is true. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
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
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A Return line and the quantity to place in a
     * return shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /** Shipment that owns this package. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
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
    & (({
    "shipped_at"?: never;
}))
    & (({
    "buyer_notification_behavior"?: never;
}));
/**
 * Creates one package belonging to shipment_id. Inline packages omit shipment_id because their
 * enclosing create supplies the shipment.
 */
export type CreatePackageRequestInput = ({
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
     * Optional version of the owning fulfillment. If the version changed, Flint refuses the
     * request before creating any records. Format: uint64. minimum: 1.
     */
    "expected_fulfillment_version"?: number;
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
     * Independent package-item collection. Required when status is shipped unless
     * pack_fulfillment_items is true. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
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
    /**
     * Put every item in the fulfillment into this outbound package. Use with status shipped and a
     * single package. Omit items. Value enum: true.
     */
    "pack_fulfillment_items"?: (true) & (true);
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A Return line and the quantity to place in a
     * return shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /** Shipment that owns this package. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
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
    & ((Exclude<CreatePackageRequestCreatedInput & object, readonly unknown[]>)
    | (Exclude<CreatePackageRequestShippedInput & object, readonly unknown[]>));
/**
 * Creates one package belonging to shipment_id. Inline packages omit shipment_id because their
 * enclosing create supplies the shipment.
 */
export type CreatePackageRequestShipped = ({
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
     * Optional version of the owning fulfillment. If the version changed, Flint refuses the
     * request before creating any records. Format: uint64. minimum: 1.
     */
    "expected_fulfillment_version"?: number;
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
     * Independent package-item collection. Required when status is shipped unless
     * pack_fulfillment_items is true. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequest}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
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
    /**
     * Put every item in the fulfillment into this outbound package. Use with status shipped and a
     * single package. Omit items. Value enum: true.
     */
    "pack_fulfillment_items"?: boolean;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A Return line and the quantity to place in a return
     * shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /** Shipment that owns this package. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
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
});
/**
 * Creates one package belonging to shipment_id. Inline packages omit shipment_id because their
 * enclosing create supplies the shipment.
 */
export type CreatePackageRequestShippedInput = ({
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
     * Optional version of the owning fulfillment. If the version changed, Flint refuses the
     * request before creating any records. Format: uint64. minimum: 1.
     */
    "expected_fulfillment_version"?: number;
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
     * Independent package-item collection. Required when status is shipped unless
     * pack_fulfillment_items is true. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
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
    /**
     * Put every item in the fulfillment into this outbound package. Use with status shipped and a
     * single package. Omit items. Value enum: true.
     */
    "pack_fulfillment_items"?: (true) & (true);
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A Return line and the quantity to place in a
     * return shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /** Shipment that owns this package. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
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
    & (({
    "return_line_items"?: never;
}));
/** The `jwks_url` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialJWKSURLRequest = {
    /**
     * The JSON Web Key Set URL to register. Required when type is jwks_url and not accepted
     * otherwise. A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before
     * registering the credential.
     */
    "jwks_url": CheckoutGiftCardChallenge;
    /**
     * Modes this credential can mint partner app tokens for, with grant_type=client_credentials or
     * an authorization code exchange. Defaults to ["live", "test"]. Send ["test"] for a staging or
     * CI deployment so its key can't mint live tokens. A mint for another mode returns 400
     * unauthorized_client. Can't be changed after creation. minItems: 1. maxItems: 2. uniqueItems:
     * true. [] enum: "live", "test". [] (Value): string. Value enum: "live", "test".
     */
    "modes"?: Array<"live" | "test" | (string & {})>;
    /**
     * Optional name to identify this credential. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 100.
     */
    "name"?: string;
    /** Credential type. Value enum: "jwks_url". */
    "type": "jwks_url" | (string & {});
};
/** The `jwks_url` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialJWKSURLRequestInput = {
    /**
     * The JSON Web Key Set URL to register. Required when type is jwks_url and not accepted
     * otherwise. A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before
     * registering the credential.
     */
    "jwks_url": PartnerAppCredentialJWKSURLRequestInput;
    /**
     * Modes this credential can mint partner app tokens for, with grant_type=client_credentials or
     * an authorization code exchange. Defaults to ["live", "test"]. Send ["test"] for a staging or
     * CI deployment so its key can't mint live tokens. A mint for another mode returns 400
     * unauthorized_client. Can't be changed after creation. minItems: 1. maxItems: 2. uniqueItems:
     * true. [] enum: "live", "test". [] (Value): string. Value enum: "live", "test".
     */
    "modes"?: Array<"live" | "test">;
    /**
     * Optional name to identify this credential. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 100.
     */
    "name"?: string;
    /** Credential type. Value enum: "jwks_url". */
    "type": "jwks_url";
};
/** The `public_key` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialPublicKeyRequest = {
    /**
     * Modes this credential can mint partner app tokens for, with grant_type=client_credentials or
     * an authorization code exchange. Defaults to ["live", "test"]. Send ["test"] for a staging or
     * CI deployment so its key can't mint live tokens. A mint for another mode returns 400
     * unauthorized_client. Can't be changed after creation. minItems: 1. maxItems: 2. uniqueItems:
     * true. [] enum: "live", "test". [] (Value): string. Value enum: "live", "test".
     */
    "modes"?: Array<"live" | "test" | (string & {})>;
    /**
     * Optional name to identify this credential. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 100.
     */
    "name"?: string;
    /**
     * The public JSON Web Key to register. Required when type is public_key and not accepted
     * otherwise. The public JSON Web Key to register for client authentication.
     */
    "public_key": PartnerAppCredentialPublicKeyRequest;
    /** Credential type. Value enum: "public_key". */
    "type": "public_key" | (string & {});
};
/** The `public_key` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialPublicKeyRequestInput = {
    /**
     * Modes this credential can mint partner app tokens for, with grant_type=client_credentials or
     * an authorization code exchange. Defaults to ["live", "test"]. Send ["test"] for a staging or
     * CI deployment so its key can't mint live tokens. A mint for another mode returns 400
     * unauthorized_client. Can't be changed after creation. minItems: 1. maxItems: 2. uniqueItems:
     * true. [] enum: "live", "test". [] (Value): string. Value enum: "live", "test".
     */
    "modes"?: Array<"live" | "test">;
    /**
     * Optional name to identify this credential. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 100.
     */
    "name"?: string;
    /**
     * The public JSON Web Key to register. Required when type is public_key and not accepted
     * otherwise. The public JSON Web Key to register for client authentication.
     */
    "public_key": PartnerAppCredentialPublicKeyRequestInput;
    /** Credential type. Value enum: "public_key". */
    "type": "public_key";
};
/**
 * An immutable public key, JWKS URL, or workload identity credential for partner app client
 * authentication.
 */
export type CreatePartnerAppCredentialRequest = ((CreatePartnerAppCredentialPublicKeyRequest)
    | (CreatePartnerAppCredentialJWKSURLRequest)
    | (CreatePartnerAppCredentialWorkloadIdentityRequest)
    | (Record<string, unknown>));
/**
 * An immutable public key, JWKS URL, or workload identity credential for partner app client
 * authentication.
 */
export type CreatePartnerAppCredentialRequestInput = ((CreatePartnerAppCredentialPublicKeyRequestInput)
    | (CreatePartnerAppCredentialJWKSURLRequestInput)
    | (CreatePartnerAppCredentialWorkloadIdentityRequestInput));
/** The `workload_identity` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialWorkloadIdentityRequest = {
    /**
     * Modes this credential can mint partner app tokens for, with grant_type=client_credentials or
     * an authorization code exchange. Defaults to ["live", "test"]. Send ["test"] for a staging or
     * CI deployment so its key can't mint live tokens. A mint for another mode returns 400
     * unauthorized_client. Can't be changed after creation. minItems: 1. maxItems: 2. uniqueItems:
     * true. [] enum: "live", "test". [] (Value): string. Value enum: "live", "test".
     */
    "modes"?: Array<"live" | "test" | (string & {})>;
    /**
     * Optional name to identify this credential. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 100.
     */
    "name"?: string;
    /** Credential type. Value enum: "workload_identity". */
    "type": "workload_identity" | (string & {});
    /**
     * The external OIDC identity to register. Required when type is workload_identity and not
     * accepted otherwise. An external OIDC identity whose subject and claim conditions must match
     * exactly the registered policy.
     */
    "workload_identity": PartnerAppCredentialWorkloadIdentityRequest;
};
/** The `workload_identity` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialWorkloadIdentityRequestInput = {
    /**
     * Modes this credential can mint partner app tokens for, with grant_type=client_credentials or
     * an authorization code exchange. Defaults to ["live", "test"]. Send ["test"] for a staging or
     * CI deployment so its key can't mint live tokens. A mint for another mode returns 400
     * unauthorized_client. Can't be changed after creation. minItems: 1. maxItems: 2. uniqueItems:
     * true. [] enum: "live", "test". [] (Value): string. Value enum: "live", "test".
     */
    "modes"?: Array<"live" | "test">;
    /**
     * Optional name to identify this credential. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 100.
     */
    "name"?: string;
    /** Credential type. Value enum: "workload_identity". */
    "type": "workload_identity";
    /**
     * The external OIDC identity to register. Required when type is workload_identity and not
     * accepted otherwise. An external OIDC identity whose subject and claim conditions must match
     * exactly the registered policy.
     */
    "workload_identity": PartnerAppCredentialWorkloadIdentityRequestInput;
};
/** The request body for: Create partner app. */
export type CreatePartnerAppRequest = {
    /**
     * API version for requests the app makes with its install tokens that send no Flint-Version
     * header. Defaults to the version of this request. Any supported version is accepted.
     * minLength: 1.
     */
    "api_version"?: string;
    /**
     * Defaults to false: no client secret is generated. Register a public key, JWKS URL, or
     * workload identity to authenticate with a client assertion. Set true explicitly to issue a
     * client secret at creation. Default: false.
     */
    "client_secret_enabled"?: boolean;
    /**
     * IDs of the permissions requested when an authorization request sends no scope. Each must be
     * in permission_manifest. Defaults to every permission that isn't optional. [] (Value):
     * string. minLength: 1.
     */
    "default_requested_permissions"?: Array<string>;
    /**
     * Where Flint sends an owner of a merchant this app created through a merchant signup when an
     * email asks them to act, such as to finish verification. An absolute `https` URL of at most
     * 2,048 characters, without userinfo or a fragment. It may have a query: Flint adds `flint_*`
     * query parameters and replaces any it already has. Once the app has a `platform_profile`, its
     * registrable domain must equal that of `platform_profile.website_url`, or the write fails
     * with 400 `INVALID_VALUE` at the field written. Setting it requests the `create_merchants`
     * platform capability. After Flint first approves or limits the platform, a change to another
     * registrable domain routes after 72 hours, and every change is emailed to the owning
     * merchant's owners and admins. Optional; set it now or later with PATCH. Format: uri.
     * minLength: 1. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     */
    "merchant_action_url"?: string;
    /**
     * The app's name, shown to merchants on the consent screen and in Flint's emails, at most 100
     * characters, without links or email addresses. Surrounding whitespace is trimmed before
     * length validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 100.
     */
    "name": string;
    /**
     * Declares that the app's owner sends splits of the payments it collects to sellers that
     * install the app, with the seller terms sellers approve on the consent screen. Optional.
     * Setting it doesn't need platform approval, so test installs can use it right away; it
     * requests the payment_splits platform capability, which live splits need. The whole
     * payment_splits declaration. Every field is required, and a write replaces the declaration
     * whole.
     */
    "payment_splits"?: PartnerAppPaymentSplits;
    /**
     * Permissions the app can request from merchants. At least one is required. Each lists the
     * Flint scopes it grants. [] (Value): {@link PartnerAppPermissionManifestEntry}. One
     * permission a partner app can request, with a title, a description, and the Flint scopes it
     * grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
    /**
     * The most a platform fee can take from one payment the app creates with a partner app token.
     * Merchants see it on the consent screen and approve it when they install the app. Optional.
     * Setting it doesn't need platform approval, so test installs can use it right away. The whole
     * platform fee cap. The largest platform fee on a payment is percent of the amount it
     * collects, rounded half up to the minor unit, plus the currency's fixed part if it has one,
     * and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum
     * allows up to 1.30 USD on a 100.00 USD payment. percent and maximum_fee_currency_options are
     * required. A write replaces the cap whole, so a cap sent without fixed_fee_currency_options
     * has no fixed part.
     */
    "platform_fee_cap"?: PlatformFeeCap;
    /**
     * The platform profile Flint reviews before it approves the app as a platform. Optional; set
     * it now or later with PATCH. support_email, website_url and support_phone are shown to
     * merchants on the consent screen and install resource. The whole platform profile.
     * support_email, website_url and support_phone are shown to merchants on the consent screen
     * and install resource. Every field is required except support_phone, and a write replaces the
     * profile whole.
     */
    "platform_profile"?: PartnerAppPlatformProfile;
    /**
     * Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or
     * HTTP on localhost or a loopback address, with no fragment. At least one is required. []
     * (Value): string. minLength: 1.
     */
    "redirect_uris": Array<string>;
};
/** The request body for: Create partner app. */
export type CreatePartnerAppRequestInput = {
    /**
     * API version for requests the app makes with its install tokens that send no Flint-Version
     * header. Defaults to the version of this request. Any supported version is accepted.
     * minLength: 1.
     */
    "api_version"?: string;
    /**
     * Defaults to false: no client secret is generated. Register a public key, JWKS URL, or
     * workload identity to authenticate with a client assertion. Set true explicitly to issue a
     * client secret at creation. Default: false.
     */
    "client_secret_enabled"?: boolean;
    /**
     * IDs of the permissions requested when an authorization request sends no scope. Each must be
     * in permission_manifest. Defaults to every permission that isn't optional. [] (Value):
     * string. minLength: 1.
     */
    "default_requested_permissions"?: Array<string>;
    /**
     * Where Flint sends an owner of a merchant this app created through a merchant signup when an
     * email asks them to act, such as to finish verification. An absolute `https` URL of at most
     * 2,048 characters, without userinfo or a fragment. It may have a query: Flint adds `flint_*`
     * query parameters and replaces any it already has. Once the app has a `platform_profile`, its
     * registrable domain must equal that of `platform_profile.website_url`, or the write fails
     * with 400 `INVALID_VALUE` at the field written. Setting it requests the `create_merchants`
     * platform capability. After Flint first approves or limits the platform, a change to another
     * registrable domain routes after 72 hours, and every change is emailed to the owning
     * merchant's owners and admins. Optional; set it now or later with PATCH. Format: uri.
     * minLength: 1. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     */
    "merchant_action_url"?: string;
    /**
     * The app's name, shown to merchants on the consent screen and in Flint's emails, at most 100
     * characters, without links or email addresses. Surrounding whitespace is trimmed before
     * length validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 100.
     */
    "name": string;
    /**
     * Declares that the app's owner sends splits of the payments it collects to sellers that
     * install the app, with the seller terms sellers approve on the consent screen. Optional.
     * Setting it doesn't need platform approval, so test installs can use it right away; it
     * requests the payment_splits platform capability, which live splits need. The whole
     * payment_splits declaration. Every field is required, and a write replaces the declaration
     * whole.
     */
    "payment_splits"?: PartnerAppPaymentSplitsRequestInput;
    /**
     * Permissions the app can request from merchants. At least one is required. Each lists the
     * Flint scopes it grants. [] (Value): {@link PartnerAppPermissionManifestEntryRequestInput}.
     * One permission a partner app can request, with a title, a description, and the Flint scopes
     * it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntryRequestInput>;
    /**
     * The most a platform fee can take from one payment the app creates with a partner app token.
     * Merchants see it on the consent screen and approve it when they install the app. Optional.
     * Setting it doesn't need platform approval, so test installs can use it right away. The whole
     * platform fee cap. The largest platform fee on a payment is percent of the amount it
     * collects, rounded half up to the minor unit, plus the currency's fixed part if it has one,
     * and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum
     * allows up to 1.30 USD on a 100.00 USD payment. percent and maximum_fee_currency_options are
     * required. A write replaces the cap whole, so a cap sent without fixed_fee_currency_options
     * has no fixed part.
     */
    "platform_fee_cap"?: PlatformFeeCapRequestInput;
    /**
     * The platform profile Flint reviews before it approves the app as a platform. Optional; set
     * it now or later with PATCH. support_email, website_url and support_phone are shown to
     * merchants on the consent screen and install resource. The whole platform profile.
     * support_email, website_url and support_phone are shown to merchants on the consent screen
     * and install resource. Every field is required except support_phone, and a write replaces the
     * profile whole.
     */
    "platform_profile"?: PartnerAppPlatformProfileRequestInput;
    /**
     * Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or
     * HTTP on localhost or a loopback address, with no fragment. At least one is required. []
     * (Value): string. minLength: 1.
     */
    "redirect_uris": Array<string>;
};
/** The request body for: Create payment intent. */
export type CreatePaymentIntentRequest = ({
    /**
     * Amount to request from the buyer, including any standalone tip_money. Required for
     * standalone payments. On an order, uses the order currency and defaults to its remaining
     * balance; the amount cannot exceed 99999999 minor units, and existing automatic tax rules
     * apply. With capture_method manual, this is the hold amount, and you can capture less later.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * automatic collects the payment when it is confirmed. manual places a hold at confirmation
     * that you capture or cancel later. Defaults to automatic. Default: "automatic". Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /**
     * Customer to link to this payment intent. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Optional order version from the last order read. Accepted only with order_id; the create
     * fails with VERSION_CONFLICT if the order changed. Format: int64. minimum: 1.
     */
    "expected_order_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
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
     * Order that owns this immutable payment leg. Omit it to create a standalone payment. With
     * order_id, the order supplies customer, receipt, tip and bank-debit purpose; those standalone
     * fields are not accepted. minLength: 1. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment options the buyer can use. Required for a standalone payment. On an order, omission
     * uses the order source defaults. Name at least one when supplied. card_present must be the
     * only option; confirm it with a reader credential. payment_return_url is not accepted with
     * card_present. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
     * "card_present". [] (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit", "card_present".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Query
     * strings are deliberately excluded so credentials and provider state cannot cross Flint's
     * payment relay. Put merchant identifiers in the URL path, such as
     * https://shop.example/return/sub_123. Test mode also accepts HTTP loopback URLs. With a
     * checkout credential on order pay, omit payment_return_url; checkout sessions use their own
     * configured return URL. Required when payment_options includes affirm and no checkout session
     * collects the payment. Not accepted with card_present. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Card and wallet selection for an order-owned payment leg. Accepted only with order_id and
     * cannot be combined with nonempty payment_options. The payment source options you choose when
     * creating an order payment intent.
     */
    "payment_source_selection"?: OrderPaymentSourceSelection;
    /**
     * A platform fee your partner app charges on this payment, checked against amount_money. Only
     * a partner app install token can send it; from any other credential it is INVALID_REQUEST
     * with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose
     * payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on
     * platform_fee, because Flint's billing creates the renewals. amount_money.amount must be at
     * least 1 minor unit; otherwise INVALID_REQUEST with INVALID_VALUE on
     * platform_fee.amount_money.amount. Omit platform_fee to charge no fee. The fee must be in the
     * payment's currency, at most the platform fee cap the merchant approved for this amount, and
     * below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money,
     * with maximum_money when the cap or the amount bounds it. Without an approved cap in this
     * currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode
     * the partner app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with
     * capability platform_fees and the reason the app's platform status gives. Test mode never
     * checks the capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees
     * leave less at confirm or capture, so the payment never fails because of it. Part of the
     * request fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the
     * partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and
     * Flint takes no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Email address for this payment's receipt. When omitted, Flint uses the customer's email. The
     * local part before @ must be at most 64 octets (UTF-8 bytes). Format: email. minLength: 1.
     * maxLength: 255. Example: "buyer@example.com".
     */
    "receipt_email"?: string;
    /**
     * Let one capture collect more than the authorization where the card network allows it, for
     * example a final bill plus a tip. Needs capture_method manual and payment_options limited to
     * card, apple_pay, google_pay or card_present; otherwise INVALID_REQUEST with NOT_ALLOWED on
     * request_overcapture. Card networks allow overcapture only where the final amount isn't known
     * at authorization, such as tips and services, and you're responsible for following their
     * rules. overcapture reports what the processor allows once the payment is authorized.
     * Default: false.
     */
    "request_overcapture"?: boolean;
    /**
     * Divide this payment's funds between the collecting merchant and sellers; this is separate
     * from split tender, where a buyer uses several payment methods. Only the collecting
     * merchant's own credentials can send splits. Each install must belong to the same app owned
     * by the collecting merchant, with the seller's approval in this mode and readiness to receive
     * payouts. Test mode needs no platform review; live mode requires the app's active
     * payment_splits capability and Flint support for the collecting account. Can't be combined
     * with platform_fee or saved payment credentials. The total must fit after the largest Flint
     * fee for the offered payment options, leaving one minor unit for the collecting merchant;
     * otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. Fixed after
     * create, except capture's final amounts. Part of the idempotency fingerprint. minItems: 1.
     * maxItems: 25. [] (Value): {@link PaymentSplitRequest}. A seller's fixed share of one
     * payment, created with that payment. This divides the payment's funds; split tender divides
     * how the buyer pays.
     */
    "splits"?: Array<PaymentSplitRequest>;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. Not accepted on order-linked payment intents. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
    /**
     * Why the bank debit is taken. Required when payment_options includes ach_debit, and rejected
     * with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose otherwise. Value enum: "goods",
     * "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
});
/** The request body for: Create payment intent. */
export type CreatePaymentIntentRequestInput = ({
    /**
     * Amount to request from the buyer, including any standalone tip_money. Required for
     * standalone payments. On an order, uses the order currency and defaults to its remaining
     * balance; the amount cannot exceed 99999999 minor units, and existing automatic tax rules
     * apply. With capture_method manual, this is the hold amount, and you can capture less later.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * automatic collects the payment when it is confirmed. manual places a hold at confirmation
     * that you capture or cancel later. Defaults to automatic. Default: "automatic". Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual";
    /**
     * Customer to link to this payment intent. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Optional order version from the last order read. Accepted only with order_id; the create
     * fails with VERSION_CONFLICT if the order changed. Format: int64. minimum: 1.
     */
    "expected_order_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
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
     * Order that owns this immutable payment leg. Omit it to create a standalone payment. With
     * order_id, the order supplies customer, receipt, tip and bank-debit purpose; those standalone
     * fields are not accepted. minLength: 1. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment options the buyer can use. Required for a standalone payment. On an order, omission
     * uses the order source defaults. Name at least one when supplied. card_present must be the
     * only option; confirm it with a reader credential. payment_return_url is not accepted with
     * card_present. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
     * "card_present". [] (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit", "card_present".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present">;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Query
     * strings are deliberately excluded so credentials and provider state cannot cross Flint's
     * payment relay. Put merchant identifiers in the URL path, such as
     * https://shop.example/return/sub_123. Test mode also accepts HTTP loopback URLs. With a
     * checkout credential on order pay, omit payment_return_url; checkout sessions use their own
     * configured return URL. Required when payment_options includes affirm and no checkout session
     * collects the payment. Not accepted with card_present. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Card and wallet selection for an order-owned payment leg. Accepted only with order_id and
     * cannot be combined with nonempty payment_options. The payment source options you choose when
     * creating an order payment intent.
     */
    "payment_source_selection"?: OrderPaymentSourceSelectionInput;
    /**
     * A platform fee your partner app charges on this payment, checked against amount_money. Only
     * a partner app install token can send it; from any other credential it is INVALID_REQUEST
     * with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose
     * payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on
     * platform_fee, because Flint's billing creates the renewals. amount_money.amount must be at
     * least 1 minor unit; otherwise INVALID_REQUEST with INVALID_VALUE on
     * platform_fee.amount_money.amount. Omit platform_fee to charge no fee. The fee must be in the
     * payment's currency, at most the platform fee cap the merchant approved for this amount, and
     * below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money,
     * with maximum_money when the cap or the amount bounds it. Without an approved cap in this
     * currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode
     * the partner app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with
     * capability platform_fees and the reason the app's platform status gives. Test mode never
     * checks the capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees
     * leave less at confirm or capture, so the payment never fails because of it. Part of the
     * request fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the
     * partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and
     * Flint takes no share of it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * Email address for this payment's receipt. When omitted, Flint uses the customer's email. The
     * local part before @ must be at most 64 octets (UTF-8 bytes). Format: email. minLength: 1.
     * maxLength: 255. Example: "buyer@example.com".
     */
    "receipt_email"?: string;
    /**
     * Let one capture collect more than the authorization where the card network allows it, for
     * example a final bill plus a tip. Needs capture_method manual and payment_options limited to
     * card, apple_pay, google_pay or card_present; otherwise INVALID_REQUEST with NOT_ALLOWED on
     * request_overcapture. Card networks allow overcapture only where the final amount isn't known
     * at authorization, such as tips and services, and you're responsible for following their
     * rules. overcapture reports what the processor allows once the payment is authorized.
     * Default: false.
     */
    "request_overcapture"?: boolean;
    /**
     * Divide this payment's funds between the collecting merchant and sellers; this is separate
     * from split tender, where a buyer uses several payment methods. Only the collecting
     * merchant's own credentials can send splits. Each install must belong to the same app owned
     * by the collecting merchant, with the seller's approval in this mode and readiness to receive
     * payouts. Test mode needs no platform review; live mode requires the app's active
     * payment_splits capability and Flint support for the collecting account. Can't be combined
     * with platform_fee or saved payment credentials. The total must fit after the largest Flint
     * fee for the offered payment options, leaving one minor unit for the collecting merchant;
     * otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. Fixed after
     * create, except capture's final amounts. Part of the idempotency fingerprint. minItems: 1.
     * maxItems: 25. [] (Value): {@link PaymentSplitRequestInput}. A seller's fixed share of one
     * payment, created with that payment. This divides the payment's funds; split tender divides
     * how the buyer pays.
     */
    "splits"?: Array<PaymentSplitRequestInput>;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. Not accepted on order-linked payment intents. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValueInput;
    /**
     * Why the bank debit is taken. Required when payment_options includes ach_debit, and rejected
     * with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose otherwise. Value enum: "goods",
     * "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other";
})
    & (({
    "splits"?: never;
} | {
    "platform_fee"?: never;
}));
/** The request body for: Create payment link. */
export type CreatePaymentLinkRequest = {
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use
     * your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: number;
    /**
     * Questions buyers answer before paying. Answers are recorded on the order and checkout
     * session in `custom_field_answers`. maxItems: 20. [] (Value): {@link
     * PaymentLinkCustomFieldRequest}. A custom field you add to a payment link when creating it.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldRequest>;
    /**
     * Custom text for checkouts started from this link. Custom text shown on a payment link's
     * checkout, such as the order summary message and shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Complete delivery method selection for the link. A link without delivery methods offers
     * settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an
     * empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null
     * and duplicate IDs are not accepted. Create, activation, and edits to items, delivery
     * methods, or inventory routing require explicit methods or checkout defaults to cover the
     * items' delivery profiles; otherwise ACTION_NOT_ALLOWED with reason configuration_required is
     * returned. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Text about what the link sells, returned to buyers when they open it. minLength: 1.
     * maxLength: 2048.
     */
    "description"?: string;
    /**
     * Largest amount a buyer can give on a donation link. Must be greater than zero and greater
     * than or equal to donation_min_amount_money. Omit on create for no maximum. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValue;
    /**
     * Smallest amount a buyer can give on a donation link. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValue;
    /**
     * Amounts a donation link offers as one-tap choices. [] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Event details for an `event` link: when and where it takes place and how many tickets it
     * sells. Event settings you supply when creating an event payment link.
     */
    "event_config"?: PaymentLinkEventConfigRequest;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Image shown to buyers with the link. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "image"?: ImageRequest;
    /** Message to show the buyer when the link is inactive. minLength: 1. maxLength: 500. */
    "inactive_message"?: string;
    /**
     * Routing source for tracked demand. When omitted, Flint stores
     * settings.inventory.default_routing_source if set. Otherwise, exactly one active Location
     * with inventory_allocation_enabled in the current environment supplies the demand; this
     * implicit source is not stored and is resolved again on use. Zero or multiple eligible
     * Locations require an explicit source or merchant default. Create, activation, and
     * sellability edits require at least one active routing location with
     * inventory_allocation_enabled; temporary stock shortages do not prevent these writes. Where
     * you want inventory routed from: a fixed Location, an inventory allocation policy, or one
     * policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * The terms and policy links checkouts started from this link show the buyer. Legal links on a
     * payment link: contract, refund policy, shipping policy, and terms of service URLs, and
     * whether buyers must accept the terms.
     */
    "legal"?: LegalSettings;
    /**
     * What the link sells. [] (Value): {@link PaymentLinkLineItemRequest}. A line item you add to
     * a payment link when creating it, from a catalog variant, a bundle, or an ad hoc name and
     * price.
     */
    "line_items"?: Array<PaymentLinkLineItemRequest>;
    /**
     * Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once
     * the limit is reached, resolving the link fails with a request error. It can't be set below
     * `completed_count`. Format: int32.
     */
    "max_completions"?: number;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. At most 44 pairs,
     * because Flint reserves 6 of the order's 50 metadata pairs. Metadata keys and values plus
     * Flint's metadata must fit within 32768 UTF-8 bytes. Custom fields don't count toward either
     * limit. These limits apply to standard and plan links and are checked against the merged
     * configuration on update. maxProperties: 44. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. * (Value): string. minLength: 1. maxLength: 4096.
     */
    "metadata"?: (Exclude<MetadataMap & object, readonly unknown[]>);
    /**
     * Name of the payment link. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Payment link type. Omit to use standard. Explicit values must be standard, donation, or
     * event; empty or padded values are invalid. Default: "standard". Value enum: "standard",
     * "donation", "event".
     */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Payment options for checkouts started from this link. Payment settings on a payment link:
     * the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Whether automatic promotions apply to checkouts started from this link and whether buyers
     * can enter promotion codes. Promotion settings for a checkout: whether automatic promotions
     * apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface
     * is headless; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve fails with
     * `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own,
     * except that an event link without sales_end_at stops selling at event_config.event_at. A
     * checkout opened before the end can still start payment for up to 15 minutes after it.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "sales_end_at"?: string;
    /**
     * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
     * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
     * sales_not_started. Must be earlier than the link’s sales end, including the event start when
     * no explicit end is set. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "sales_start_at"?: string;
    /**
     * ID of the subscription plan the link sells. The plan must be active. Omit it for a link that
     * doesn't sell a subscription. It can't be changed after the link is created. minLength: 1.
     * Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Tax settings for checkouts started from this link. Whether tax is collected for a checkout
     * session or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * The title and colors for checkouts started from this link, over your branding settings.
     * Theme settings for a payment link's checkout: accent color, primary color, and title.
     */
    "theme"?: ThemeConfig;
    /**
     * Tip options for checkouts started from this link. Tip settings for a checkout: whether tips
     * are enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
};
/** The request body for: Create payment link. */
export type CreatePaymentLinkRequestInput = {
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFieldsRequestInput;
    /**
     * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use
     * your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: number;
    /**
     * Questions buyers answer before paying. Answers are recorded on the order and checkout
     * session in `custom_field_answers`. maxItems: 20. [] (Value): {@link
     * PaymentLinkCustomFieldRequestInput}. A custom field you add to a payment link when creating
     * it.
     */
    "custom_fields"?: Array<PaymentLinkCustomFieldRequestInput>;
    /**
     * Custom text for checkouts started from this link. Custom text shown on a payment link's
     * checkout, such as the order summary message and shipping address label.
     */
    "custom_text"?: PaymentLinkCustomTextConfigInput;
    /**
     * Complete delivery method selection for the link. A link without delivery methods offers
     * settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an
     * empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null
     * and duplicate IDs are not accepted. Create, activation, and edits to items, delivery
     * methods, or inventory routing require explicit methods or checkout defaults to cover the
     * items' delivery profiles; otherwise ACTION_NOT_ALLOWED with reason configuration_required is
     * returned. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Text about what the link sells, returned to buyers when they open it. minLength: 1.
     * maxLength: 2048.
     */
    "description"?: string;
    /**
     * Largest amount a buyer can give on a donation link. Must be greater than zero and greater
     * than or equal to donation_min_amount_money. Omit on create for no maximum. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValueInput;
    /**
     * Smallest amount a buyer can give on a donation link. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValueInput;
    /**
     * Amounts a donation link offers as one-tap choices. [] (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValueInput>;
    /**
     * Event details for an `event` link: when and where it takes place and how many tickets it
     * sells. Event settings you supply when creating an event payment link.
     */
    "event_config"?: PaymentLinkEventConfigRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Image shown to buyers with the link. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "image"?: ImageRequestInput;
    /** Message to show the buyer when the link is inactive. minLength: 1. maxLength: 500. */
    "inactive_message"?: string;
    /**
     * Routing source for tracked demand. When omitted, Flint stores
     * settings.inventory.default_routing_source if set. Otherwise, exactly one active Location
     * with inventory_allocation_enabled in the current environment supplies the demand; this
     * implicit source is not stored and is resolved again on use. Zero or multiple eligible
     * Locations require an explicit source or merchant default. Create, activation, and
     * sellability edits require at least one active routing location with
     * inventory_allocation_enabled; temporary stock shortages do not prevent these writes. Where
     * you want inventory routed from: a fixed Location, an inventory allocation policy, or one
     * policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * The terms and policy links checkouts started from this link show the buyer. Legal links on a
     * payment link: contract, refund policy, shipping policy, and terms of service URLs, and
     * whether buyers must accept the terms.
     */
    "legal"?: PaymentLinkLegalConfigInput;
    /**
     * What the link sells. [] (Value): {@link PaymentLinkLineItemRequestInput}. A line item you
     * add to a payment link when creating it, from a catalog variant, a bundle, or an ad hoc name
     * and price.
     */
    "line_items"?: Array<PaymentLinkLineItemRequestInput>;
    /**
     * Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once
     * the limit is reached, resolving the link fails with a request error. It can't be set below
     * `completed_count`. Format: int32.
     */
    "max_completions"?: number;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. At most 44 pairs,
     * because Flint reserves 6 of the order's 50 metadata pairs. Metadata keys and values plus
     * Flint's metadata must fit within 32768 UTF-8 bytes. Custom fields don't count toward either
     * limit. These limits apply to standard and plan links and are checked against the merged
     * configuration on update. maxProperties: 44. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. * (Value): string. minLength: 1. maxLength: 4096.
     */
    "metadata"?: (Exclude<MetadataRequestInput & object, readonly unknown[]>);
    /**
     * Name of the payment link. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Payment link type. Omit to use standard. Explicit values must be standard, donation, or
     * event; empty or padded values are invalid. Default: "standard". Value enum: "standard",
     * "donation", "event".
     */
    "payment_link_type"?: "standard" | "donation" | "event";
    /**
     * Payment options for checkouts started from this link. Payment settings on a payment link:
     * the enabled payment options and a note shown with payment.
     */
    "payments"?: PaymentLinkPaymentConfigInput;
    /**
     * Whether automatic promotions apply to checkouts started from this link and whether buyers
     * can enter promotion codes. Promotion settings for a checkout: whether automatic promotions
     * apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestInput;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface
     * is headless; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve fails with
     * `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own,
     * except that an event link without sales_end_at stops selling at event_config.event_at. A
     * checkout opened before the end can still start payment for up to 15 minutes after it.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "sales_end_at"?: string | globalThis.Date;
    /**
     * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
     * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
     * sales_not_started. Must be earlier than the link’s sales end, including the event start when
     * no explicit end is set. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "sales_start_at"?: string | globalThis.Date;
    /**
     * ID of the subscription plan the link sells. The plan must be active. Omit it for a link that
     * doesn't sell a subscription. It can't be changed after the link is created. minLength: 1.
     * Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Tax settings for checkouts started from this link. Whether tax is collected for a checkout
     * session or payment link.
     */
    "tax"?: CheckoutTaxConfigRequestInput;
    /**
     * The title and colors for checkouts started from this link, over your branding settings.
     * Theme settings for a payment link's checkout: accent color, primary color, and title.
     */
    "theme"?: PaymentLinkThemeConfigInput;
    /**
     * Tip options for checkouts started from this link. Tip settings for a checkout: whether tips
     * are enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfigRequestInput;
};
/** The request body for: Register payment method domain. */
export type CreatePaymentMethodDomainRequest = {
    /**
     * Exact fully-qualified hostname to register. Limited to 253 characters (Unicode code points)
     * before trimming whitespace and lowercasing. The resulting hostname uses ASCII characters
     * only. Do not include a scheme, path, port, IP address, or wildcard. minLength: 1. maxLength:
     * 253. pattern: ^[\t\n\v\f\r
     * ]*(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?[\t\n\v\f\r
     * ]*$.
     */
    "domain_name": (string);
};
/** The request body for: Register payment method domain. */
export type CreatePaymentMethodDomainRequestInput = CreatePaymentMethodDomainRequest;
/** The request body for: Create a payout. */
export type CreatePayoutRequest = {
    /**
     * Amount to send, above zero. It can't exceed what one balance source has in
     * available_by_source_type. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Balance source this payout draws from. Flint chooses the source when omitted. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type"?: "card" | "bank_account" | (string & {});
    /** Your description of the payout, returned on the payout. minLength: 1. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Only `standard`. Flint doesn't offer instant payouts. Value enum: "standard". */
    "method"?: "standard" | (string & {});
    /**
     * Destination to pay. It must be active and in the payout's currency. Omit it to pay the
     * currency's default destination. minLength: 1. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
     */
    "payout_destination_id"?: string;
    /** Text shown on your bank statement for this deposit, 22 characters or fewer. minLength: 1. */
    "statement_descriptor"?: string;
};
/** The request body for: Create a payout. */
export type CreatePayoutRequestInput = {
    /**
     * Amount to send, above zero. It can't exceed what one balance source has in
     * available_by_source_type. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Balance source this payout draws from. Flint chooses the source when omitted. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type"?: "card" | "bank_account";
    /** Your description of the payout, returned on the payout. minLength: 1. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Only `standard`. Flint doesn't offer instant payouts. Value enum: "standard". */
    "method"?: "standard";
    /**
     * Destination to pay. It must be active and in the payout's currency. Omit it to pay the
     * currency's default destination. minLength: 1. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
     */
    "payout_destination_id"?: string;
    /** Text shown on your bank statement for this deposit, 22 characters or fewer. minLength: 1. */
    "statement_descriptor"?: string;
};
/**
 * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
 * instructions, and curbside details.
 */
export type CreatePickupFulfillmentDetails = {
    /**
     * Address where the buyer collects the order. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "address"?: AddressRequest;
    /** Instructions specific to curbside handoff. minLength: 1. maxLength: 2048. */
    "curbside_instructions"?: string;
    /**
     * Buyer-reported arrival time for curbside or counter pickup. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "customer_arrived_at"?: string;
    /** Pickup instructions for the buyer, such as where to go on arrival. minLength: 1. */
    "instructions"?: string;
    /** Name of the store or place where the buyer collects the order. minLength: 1. */
    "location_name"?: string;
    /**
     * Time by which the buyer should collect the order. Passing it does not change status or emit
     * an event automatically; the merchant decides how to follow up. Format: date-time. minLength:
     * 1. Example: "2026-08-02T16:00:00Z".
     */
    "pickup_due_at"?: string;
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "ready_at"?: string;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
    /** Buyer vehicle description used for curbside handoff. minLength: 1. maxLength: 500. */
    "vehicle_description"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string;
};
/**
 * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
 * instructions, and curbside details.
 */
export type CreatePickupFulfillmentDetailsInput = {
    /**
     * Address where the buyer collects the order. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "address"?: AddressRequestInput;
    /** Instructions specific to curbside handoff. minLength: 1. maxLength: 2048. */
    "curbside_instructions"?: string;
    /**
     * Buyer-reported arrival time for curbside or counter pickup. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "customer_arrived_at"?: string | globalThis.Date;
    /** Pickup instructions for the buyer, such as where to go on arrival. minLength: 1. */
    "instructions"?: string;
    /** Name of the store or place where the buyer collects the order. minLength: 1. */
    "location_name"?: string;
    /**
     * Time by which the buyer should collect the order. Passing it does not change status or emit
     * an event automatically; the merchant decides how to follow up. Format: date-time. minLength:
     * 1. Example: "2026-08-02T16:00:00Z".
     */
    "pickup_due_at"?: string | globalThis.Date;
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "ready_at"?: string | globalThis.Date;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
    /** Buyer vehicle description used for curbside handoff. minLength: 1. maxLength: 500. */
    "vehicle_description"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string | globalThis.Date;
};
/** Add or update a batch of variant prices atomically. */
export type CreatePriceListPricesRequest = {
    /**
     * Price list aggregate version last read. A mismatch rejects the entire batch. Format: uint64.
     * minimum: 1.
     */
    "expected_price_list_version"?: number;
    /**
     * Behavior when the list already prices a variant. Default: "return_existing". Value enum:
     * "return_existing", "update".
     */
    "on_variant_conflict"?: "return_existing" | "update" | (string & {});
    /**
     * Between 1 and 500 variant prices. A price list holds at most 10,000 prices. minItems: 1.
     * maxItems: 500. [] (Value): {@link PriceListPriceRequest}. A variant price to add to a price
     * list.
     */
    "prices": Array<PriceListPriceRequest>;
};
/** Add or update a batch of variant prices atomically. */
export type CreatePriceListPricesRequestInput = {
    /**
     * Price list aggregate version last read. A mismatch rejects the entire batch. Format: uint64.
     * minimum: 1.
     */
    "expected_price_list_version"?: number;
    /**
     * Behavior when the list already prices a variant. Default: "return_existing". Value enum:
     * "return_existing", "update".
     */
    "on_variant_conflict"?: "return_existing" | "update";
    /**
     * Between 1 and 500 variant prices. A price list holds at most 10,000 prices. minItems: 1.
     * maxItems: 500. [] (Value): {@link PriceListPriceRequestInput}. A variant price to add to a
     * price list.
     */
    "prices": Array<PriceListPriceRequestInput>;
};
/** A response containing `CreatePriceListPricesResult` data. */
export type CreatePriceListPricesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The price list and
     * individual outcomes after a bulk price write.
     */
    "data": CreatePriceListPricesResult;
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
/** The price list and individual outcomes after a bulk price write. */
export type CreatePriceListPricesResult = {
    /**
     * One result for each requested variant price, in request order. [] (Value): {@link
     * PriceListPriceAddition}. Outcome for one requested variant price.
     */
    "additions": Array<PriceListPriceAddition>;
    /**
     * The price list after the batch, including its new count and aggregate version. A
     * merchant-only set of variant prices for individual customers or customer segments.
     */
    "price_list": PriceList;
};
/** Fields for a new price list. */
export type CreatePriceListRequest = {
    /**
     * Currency of all list prices, as an uppercase ISO 4217 code. Must match the catalog currency;
     * currently only USD is supported. Cannot be changed after creation. minLength: 3. maxLength:
     * 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Customer.segment labels to assign, at most 20. Each label can belong to only one unarchived
     * list, including inactive lists. Omit or send [] for no segment assignments. maxItems: 20.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "customer_segments"?: Array<string>;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata to store on this price list. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Name used to identify the price list. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 100.
     */
    "name": string;
    /**
     * Initial availability. Inactive lists remain assignable but do not provide prices. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** Fields for a new price list. */
export type CreatePriceListRequestInput = {
    /**
     * Currency of all list prices, as an uppercase ISO 4217 code. Must match the catalog currency;
     * currently only USD is supported. Cannot be changed after creation. minLength: 3. maxLength:
     * 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Customer.segment labels to assign, at most 20. Each label can belong to only one unarchived
     * list, including inactive lists. Omit or send [] for no segment assignments. maxItems: 20.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "customer_segments"?: Array<string>;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata to store on this price list. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Name used to identify the price list. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 100.
     */
    "name": string;
    /**
     * Initial availability. Inactive lists remain assignable but do not provide prices. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
/**
 * A product option to create with a product, such as size, with its values, position, and status.
 */
export type CreateProductOptionRequest = {
    /**
     * Value of this option given to every active variant that has no active value for it after
     * this request, such as when you add an option to a product that already has active variants.
     * It must match one of this option's active `values`, ignoring case and surrounding
     * whitespace. Not stored; the variants keep the value. minLength: 1. maxLength: 255.
     */
    "existing_variant_value"?: string;
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
     * Option name, such as Size or Color. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Display order among the product's options, starting at zero. Defaults to the option's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the option is active or inactive. Active variants must select an active value for
     * every active option. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Values offered for this option, such as Small, Medium, and Large for Size. [] (Value):
     * {@link CreateProductOptionValueRequest}. One value of a product option to create, such as a
     * specific size, with its position and status.
     */
    "values"?: Array<CreateProductOptionValueRequest>;
};
/**
 * A product option to create with a product, such as size, with its values, position, and status.
 */
export type CreateProductOptionRequestInput = {
    /**
     * Value of this option given to every active variant that has no active value for it after
     * this request, such as when you add an option to a product that already has active variants.
     * It must match one of this option's active `values`, ignoring case and surrounding
     * whitespace. Not stored; the variants keep the value. minLength: 1. maxLength: 255.
     */
    "existing_variant_value"?: string;
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
     * Option name, such as Size or Color. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Display order among the product's options, starting at zero. Defaults to the option's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the option is active or inactive. Active variants must select an active value for
     * every active option. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Values offered for this option, such as Small, Medium, and Large for Size. [] (Value):
     * {@link CreateProductOptionValueRequestInput}. One value of a product option to create, such
     * as a specific size, with its position and status.
     */
    "values"?: Array<CreateProductOptionValueRequestInput>;
};
/**
 * One value of a product option to create, such as a specific size, with its position and status.
 */
export type CreateProductOptionValueRequest = {
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
     * Display order among the option's values, starting at zero. Defaults to the value's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the value is active or inactive. Active variants cannot newly select an inactive
     * value. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Option value shown to buyers, such as Medium. minLength: 1. maxLength: 255. */
    "value": string;
};
/**
 * One value of a product option to create, such as a specific size, with its position and status.
 */
export type CreateProductOptionValueRequestInput = {
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
     * Display order among the option's values, starting at zero. Defaults to the value's array
     * index when omitted. Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Whether the value is active or inactive. Active variants cannot newly select an inactive
     * value. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Option value shown to buyers, such as Medium. minLength: 1. maxLength: 255. */
    "value": string;
};
/** The request body for: Create product. */
export type CreateProductRequest = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant"?: ProductVariantRequest;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
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
     * Product name shown to buyers. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequest}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options"?: Array<CreateProductOptionRequest>;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Selects the variant mode branch. Value enum: "simple", "optioned". */
    "variant_mode": "simple" | "optioned" | (string & {});
    /**
     * The variants of an optioned product, sent together with `options` and without
     * `default_variant`. Each variant selects one active value for every option. At most 100; add
     * more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. []
     * (Value): {@link ProductVariantRequest}. The request body for: Create product variant.
     */
    "variants"?: Array<ProductVariantRequest>;
})
    & ((Exclude<CreateProductRequestSimple & object, readonly unknown[]>)
    | (Exclude<CreateProductRequestOptioned & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create product. */
export type CreateProductRequestInput = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant"?: ProductVariantRequestInput;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
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
     * Product name shown to buyers. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequestInput}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options"?: Array<CreateProductOptionRequestInput>;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card";
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Selects the variant mode branch. Value enum: "simple", "optioned". */
    "variant_mode": "simple" | "optioned";
    /**
     * The variants of an optioned product, sent together with `options` and without
     * `default_variant`. Each variant selects one active value for every option. At most 100; add
     * more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. []
     * (Value): {@link ProductVariantRequestInput}. The request body for: Create product variant.
     */
    "variants"?: Array<ProductVariantRequestInput>;
})
    & ((Exclude<CreateProductRequestSimpleInput & object, readonly unknown[]>)
    | (Exclude<CreateProductRequestOptionedInput & object, readonly unknown[]>));
/** The `optioned` variant of `CreateProductRequest`. */
export type CreateProductRequestOptioned = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
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
     * Product name shown to buyers. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequest}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options": Array<CreateProductOptionRequest>;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Selects the variant mode branch. Value enum: "optioned". */
    "variant_mode": "optioned" | (string & {});
    /**
     * The variants of an optioned product, sent together with `options` and without
     * `default_variant`. Each variant selects one active value for every option. At most 100; add
     * more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. []
     * (Value): {@link ProductVariantRequest}. The request body for: Create product variant.
     */
    "variants": Array<ProductVariantRequest>;
})
    & (({
    /** Selects the variant mode branch. Value enum: "optioned". */
    "variant_mode": "optioned" | (string & {});
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequest}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options": Array<CreateProductOptionRequest>;
    /**
     * The variants of an optioned product, sent together with `options` and without
     * `default_variant`. Each variant selects one active value for every option. At most 100; add
     * more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. []
     * (Value): {@link ProductVariantRequest}. The request body for: Create product variant.
     */
    "variants": Array<ProductVariantRequest>;
}));
/** The `optioned` variant of `CreateProductRequest`. */
export type CreateProductRequestOptionedInput = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
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
     * Product name shown to buyers. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequestInput}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options": Array<CreateProductOptionRequestInput>;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card";
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Selects the variant mode branch. Value enum: "optioned". */
    "variant_mode": "optioned";
    /**
     * The variants of an optioned product, sent together with `options` and without
     * `default_variant`. Each variant selects one active value for every option. At most 100; add
     * more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. []
     * (Value): {@link ProductVariantRequestInput}. The request body for: Create product variant.
     */
    "variants": Array<ProductVariantRequestInput>;
})
    & (({
    /** Selects the variant mode branch. Value enum: "optioned". */
    "variant_mode": ("optioned") & ("optioned");
    /**
     * Options and values that distinguish this product's variants. Send with variants instead of
     * default_variant. minItems: 1. [] (Value): {@link CreateProductOptionRequestInput}. A product
     * option to create with a product, such as size, with its values, position, and status.
     */
    "options": Array<CreateProductOptionRequestInput>;
    /**
     * The variants of an optioned product, sent together with `options` and without
     * `default_variant`. Each variant selects one active value for every option. At most 100; add
     * more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. []
     * (Value): {@link ProductVariantRequestInput}. The request body for: Create product variant.
     */
    "variants": Array<ProductVariantRequestInput>;
})
    & (({
    "default_variant"?: never;
})));
/** The `simple` variant of `CreateProductRequest`. */
export type CreateProductRequestSimple = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant": ProductVariantRequest;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
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
     * Product name shown to buyers. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Selects the variant mode branch. Value enum: "simple". */
    "variant_mode": "simple" | (string & {});
})
    & (({
    /** Selects the variant mode branch. Value enum: "simple". */
    "variant_mode": "simple" | (string & {});
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant": ProductVariantRequest;
}));
/** The `simple` variant of `CreateProductRequest`. */
export type CreateProductRequestSimpleInput = ({
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant": ProductVariantRequestInput;
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
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
     * Product name shown to buyers. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card";
    /**
     * Whether the product is active or inactive. An inactive product's variants cannot be sold.
     * Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Selects the variant mode branch. Value enum: "simple". */
    "variant_mode": "simple";
})
    & (({
    /** Selects the variant mode branch. Value enum: "simple". */
    "variant_mode": ("simple") & ("simple");
    /**
     * The single variant to create as the product's default. Send either default_variant or both
     * options and variants. The request body for: Create product variant.
     */
    "default_variant": ProductVariantRequestInput;
})
    & (({
    "options"?: never;
}) & ({
    "variants"?: never;
})));
/** The request body for: Create promotion code. */
export type CreatePromotionCodeRequest = {
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
     * Flint promotion ID that owns this code. minLength: 1. Example:
     * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id": string;
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
/** The request body for: Create promotion code. */
export type CreatePromotionCodeRequestInput = {
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
     * Flint promotion ID that owns this code. minLength: 1. Example:
     * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id": string;
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
/** The request body for: Create promotion. */
export type CreatePromotionRequest = {
    /**
     * Discount effect and how it applies to eligible items or charges. A flat application method
     * whose type selects its effect fields.
     */
    "application_method": PromotionApplicationMethodRequest;
    /**
     * Codes to create with a code-gated promotion, at most 100. The create response returns them
     * in `codes`. Add more later with `POST /v1/promotion-codes`, and manage each code through the
     * `/v1/promotion-codes/{promotion_code_id}` routes. maxItems: 100. [] (Value): {@link
     * PromotionCodeRequest}. A promotion code to create inline with its promotion. The promotion
     * supplies its parent ID.
     */
    "codes"?: Array<PromotionCodeRequest>;
    /**
     * Which discount classes this promotion can combine with. Omitted classes default to true.
     * Which promotion discount classes this promotion can combine with. Omitted classes default to
     * true.
     */
    "combines_with"?: PromotionCombinesWithPatch;
    /** Optional description of the promotion for your own records. minLength: 1. maxLength: 500. */
    "description"?: string;
    /**
     * Defaults to order when omitted. Default: "order". Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**
     * Buyer-facing promotion name shown in checkout and order discount surfaces. Defaults to name
     * when omitted. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Conditions an order must satisfy for the promotion to apply. Omit to create a promotion with
     * no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or
     * any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid.
     * Omit the field for no rules, or send null where the field is clearable. Responses list rules
     * before nested groups. Under any, a nested group containing only one rule reads back as that
     * rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal
     * scope. These deterministic normalizations stabilize after one round trip.
     * matched_items.subtotal sums the line items matched by the line_item.* rules in the same all
     * group, including its nested groups.
     */
    "eligibility_rules"?: PromotionRuleGroupRequest;
    /**
     * Optional group and priority used to choose one promotion from competing promotions in the
     * same group. See Promotion for the evaluation order. Only one promotion in an exclusivity
     * group continues. See Promotion for the evaluation order.
     */
    "exclusivity"?: PromotionExclusivityRequest;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Omit for no
     * redemption limit. Format: int64.
     */
    "max_uses"?: number;
    /**
     * Maximum reserved and redeemed uses per identified customer across every code and automatic
     * or ID-based application. Checked atomically when payment starts. Failed, canceled, or
     * expired attempts release their reservation; refunds do not restore uses. Counts only within
     * the same merchant and environment; live and test mode are separate. Without an identified
     * customer, returns 409 PROMOTION_DECLINED with reason customer_required. Omit or send null
     * for no per-customer limit. Format: int64. minimum: 1.
     */
    "max_uses_per_customer"?: number | null;
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
     * Internal promotion name for dashboards, searching, and reporting. This is not intended for
     * buyer-facing checkout or receipt copy. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Whether the promotion applies automatically when its rules match or requires a promotion
     * code. Value enum: "automatic", "code".
     */
    "redemption_type"?: "automatic" | "code" | (string & {});
    /**
     * Optional start and end times that limit when the promotion can apply. When a promotion is
     * active, with a start time, an end time, and the time zone it was entered in.
     */
    "schedule"?: PromotionSchedule;
    /**
     * Lifecycle status. Defaults to active; send inactive to create a promotion that is switched
     * off. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create promotion. */
export type CreatePromotionRequestInput = {
    /**
     * Discount effect and how it applies to eligible items or charges. A flat application method
     * whose type selects its effect fields.
     */
    "application_method": PromotionApplicationMethodRequestInput;
    /**
     * Codes to create with a code-gated promotion, at most 100. The create response returns them
     * in `codes`. Add more later with `POST /v1/promotion-codes`, and manage each code through the
     * `/v1/promotion-codes/{promotion_code_id}` routes. maxItems: 100. [] (Value): {@link
     * PromotionCodeRequestInput}. A promotion code to create inline with its promotion. The
     * promotion supplies its parent ID.
     */
    "codes"?: Array<PromotionCodeRequestInput>;
    /**
     * Which discount classes this promotion can combine with. Omitted classes default to true.
     * Which promotion discount classes this promotion can combine with. Omitted classes default to
     * true.
     */
    "combines_with"?: PromotionCombinesWithRequestInput;
    /** Optional description of the promotion for your own records. minLength: 1. maxLength: 500. */
    "description"?: string;
    /**
     * Defaults to order when omitted. Default: "order". Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /**
     * Buyer-facing promotion name shown in checkout and order discount surfaces. Defaults to name
     * when omitted. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Conditions an order must satisfy for the promotion to apply. Omit to create a promotion with
     * no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or
     * any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid.
     * Omit the field for no rules, or send null where the field is clearable. Responses list rules
     * before nested groups. Under any, a nested group containing only one rule reads back as that
     * rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal
     * scope. These deterministic normalizations stabilize after one round trip.
     * matched_items.subtotal sums the line items matched by the line_item.* rules in the same all
     * group, including its nested groups.
     */
    "eligibility_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Optional group and priority used to choose one promotion from competing promotions in the
     * same group. See Promotion for the evaluation order. Only one promotion in an exclusivity
     * group continues. See Promotion for the evaluation order.
     */
    "exclusivity"?: PromotionExclusivityRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Omit for no
     * redemption limit. Format: int64.
     */
    "max_uses"?: number;
    /**
     * Maximum reserved and redeemed uses per identified customer across every code and automatic
     * or ID-based application. Checked atomically when payment starts. Failed, canceled, or
     * expired attempts release their reservation; refunds do not restore uses. Counts only within
     * the same merchant and environment; live and test mode are separate. Without an identified
     * customer, returns 409 PROMOTION_DECLINED with reason customer_required. Omit or send null
     * for no per-customer limit. Format: int64. minimum: 1.
     */
    "max_uses_per_customer"?: number | null;
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
     * Internal promotion name for dashboards, searching, and reporting. This is not intended for
     * buyer-facing checkout or receipt copy. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Whether the promotion applies automatically when its rules match or requires a promotion
     * code. Value enum: "automatic", "code".
     */
    "redemption_type"?: "automatic" | "code";
    /**
     * Optional start and end times that limit when the promotion can apply. When a promotion is
     * active, with a start time, an end time, and the time zone it was entered in.
     */
    "schedule"?: PromotionScheduleRequestInput;
    /**
     * Lifecycle status. Defaults to active; send inactive to create a promotion that is switched
     * off. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
/** A reader registration selected by type. */
export type CreateReaderRequest = ((CreateSmartReaderRequest) | (CreateTapToPayReaderRequest) | (Record<string, unknown>));
/** A reader registration selected by type. */
export type CreateReaderRequestInput = ((CreateSmartReaderRequestInput) | (CreateTapToPayReaderRequestInput));
/** The `receivables_aging_v1` variant of `CreateReportRequest`. */
export type CreateReceivablesAgingReportRequest = ({
    /**
     * Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than
     * today. Balances are measured at the earlier of the end of that day and report creation.
     * Format: date. minLength: 1. Example: "2026-08-02".
     */
    "as_of_date": string;
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at"?: string;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at"?: string;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "receivables_aging_v1".
     */
    "report_type": "receivables_aging_v1" | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved
     * on the report at creation. minLength: 1.
     */
    "timezone"?: string;
});
/** The `receivables_aging_v1` variant of `CreateReportRequest`. */
export type CreateReceivablesAgingReportRequestInput = ({
    /**
     * Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than
     * today. Balances are measured at the earlier of the end of that day and report creation.
     * Format: date. minLength: 1. Example: "2026-08-02".
     */
    "as_of_date": string;
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at"?: string | globalThis.Date;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at"?: string | globalThis.Date;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "receivables_aging_v1".
     */
    "report_type": "receivables_aging_v1";
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved
     * on the report at creation. minLength: 1.
     */
    "timezone"?: string;
})
    & (({
    "interval_start_at"?: never;
}))
    & (({
    "interval_end_at"?: never;
}));
/** The request body for: Create refund. */
export type CreateRefundRequest = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundCharge}. An order charge to refund when creating a refund, with an optional amount to
     * refund.
     */
    "charges"?: Array<RefundCharge>;
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id"?: string;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the
     * current_version. Format: int64. minimum: 1.
     */
    "expected_credit_note_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItem}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItem>;
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
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use
     * flint for Flint to return the money to the invoice's payments. Use merchant to record money
     * you already returned outside Flint, for example by check or wire; Flint moves no money.
     * Default: "flint". Value enum: "flint", "merchant".
     */
    "processed_by"?: "flint" | "merchant" | (string & {});
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
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
        | (string & {});
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Return the partner app's platform fee to the merchant as part of this refund. By default the
     * partner app keeps its fee. With true, each refunded payment that carries the partner app's
     * collected platform fee returns all of the fee's unreturned amount when this refund returns
     * the whole captured amount, and otherwise a proportional share, rounded half up; the refund
     * that completes the payment returns what rounding left, when every earlier refund of it also
     * returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and
     * Flint returns it to the merchant once that payment refund succeeds. Payments without a
     * platform fee are refunded normally. Only the partner app install token whose app charged the
     * fee can send true; from any other credential, or when a refunded payment carries another
     * app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with
     * refund_type credit_note. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1
     * to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID.
     * Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400
     * INVALID_REQUEST` (`NOT_ALLOWED`). minLength: 1. maxLength: 255.
     */
    "refund_reference"?: string;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "full",
     * "amount", "targets", "credit_note".
     */
    "refund_type": "full" | "amount" | "targets" | "credit_note" | (string & {});
    /**
     * When you report returning the money outside Flint. Omit to use the current time. Must be an
     * RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds
     * are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails
     * with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "refunded_at"?: string;
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequest}. The seller amount to take back from one eligible payment split when
     * creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequest>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundIn}. The
     * tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to
     * a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequest>;
})
    & ((Exclude<CreateRefundRequestCreditNote & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestFull & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestAmount & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestTargets & object, readonly unknown[]>)
    | (Record<string, unknown>))
    & (({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to
     * a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequest>;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id": string;
})
    | (Record<string, unknown>));
/** The `amount` variant of `CreateRefundRequest`. */
export type CreateRefundRequestAmount = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundCharge}. An order charge to refund when creating a refund, with an optional amount to
     * refund.
     */
    "charges"?: Array<RefundCharge>;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItem}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItem>;
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
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
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
        | (string & {});
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Return the partner app's platform fee to the merchant as part of this refund. By default the
     * partner app keeps its fee. With true, each refunded payment that carries the partner app's
     * collected platform fee returns all of the fee's unreturned amount when this refund returns
     * the whole captured amount, and otherwise a proportional share, rounded half up; the refund
     * that completes the payment returns what rounding left, when every earlier refund of it also
     * returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and
     * Flint returns it to the merchant once that payment refund succeeds. Payments without a
     * platform fee are refunded normally. Only the partner app install token whose app charged the
     * fee can send true; from any other credential, or when a refunded payment carries another
     * app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with
     * refund_type credit_note. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "amount".
     */
    "refund_type": "amount" | (string & {});
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequest}. The seller amount to take back from one eligible payment split when
     * creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequest>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundIn}. The
     * tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to
     * a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequest>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to
     * a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequest>;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    "credit_note_id": unknown;
})
    | (Record<string, unknown>)));
/** The `amount` variant of `CreateRefundRequest`. */
export type CreateRefundRequestAmountInput = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundChargeInput}. An order charge to refund when creating a refund, with an optional
     * amount to refund.
     */
    "charges"?: Array<RefundChargeInput>;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItemInput}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItemInput>;
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
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
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
        | "out_of_stock";
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
    /**
     * Return the partner app's platform fee to the merchant as part of this refund. By default the
     * partner app keeps its fee. With true, each refunded payment that carries the partner app's
     * collected platform fee returns all of the fee's unreturned amount when this refund returns
     * the whole captured amount, and otherwise a proportional share, rounded half up; the refund
     * that completes the payment returns what rounding left, when every earlier refund of it also
     * returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and
     * Flint returns it to the merchant once that payment refund succeeds. Payments without a
     * platform fee are refunded normally. Only the partner app install token whose app charged the
     * fee can send true; from any other credential, or when a refunded payment carries another
     * app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with
     * refund_type credit_note. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "amount".
     */
    "refund_type": ("amount") & ("amount");
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequestInput}. The seller amount to take back from one eligible payment split
     * when creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequestInput>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundInInput}.
     * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequestInput}. Where part of a refund goes:
     * back to a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequestInput>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequestInput}. Where part of a refund goes:
     * back to a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequestInput>;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    "credit_note_id": unknown;
})))
    & ((({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
})));
