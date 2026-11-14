import type {
    CreateModifierGroupRequest,
    CreateModifierSetGroupInputExisting,
    CreateModifierSetGroupInputInline,
    CreateModifierSetGroupInputExistingInput,
    CreateModifierSetGroupInputInlineInput
} from './types-10.js';
import type { ModifierOverride, ModifierOverrideRequestInput, MetadataMap, MetadataRequestInput } from './types-38.js';
import type { CreateInlineModifierGroupRequestInput } from './types-9.js';
import type {
    ManualDiscountRequest,
    ManualDiscountRequestInput,
    LineItemFulfillmentRequest,
    LineItemFulfillmentRequestModelInput,
    LegalSettings
} from './types-35.js';
import type { PromotionRefRequest, PromotionRefRequestInput } from './types-51.js';
import type {
    OrderEditRemovalRequest,
    OrderEditRemovalRequestInput,
    OrderEdit,
    OrderDraftLineItemInventoryDemandRequest,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxRequestModelInput,
    OrderDeliveryDestinationRequest,
    OrderDeliveryRequest,
    OrderHandover,
    OrderDeliveryDestinationRequestInput,
    OrderDeliveryRequestInput,
    OrderHandoverRequestInput
} from './types-40.js';
import type { RefundCharge, RefundDestinations, RefundChargeInput, RefundDestinationsInput, Refund } from './types-53.js';
import type { ResponseMeta } from './types-54.js';
import type { Order, MoneyValue, OrderCalculatedLineItemTax, MoneyValueInput } from './types-39.js';
import type { Dimensions, DimensionsRequestInput } from './types-23.js';
import type { GiftCardPurchaseRequest, GiftCardPurchaseDetailsRequestInput } from './types-27.js';
import type { ImageReferenceRequest, ImageReferenceRequestInput, ImageRequest, ImageRequestInput } from './types-28.js';
import type {
    OrderLineItemModifierRequest,
    OrderLineItemModifierRequestModelInput,
    OrderPaymentSourceSelection,
    OrderPaymentSourceSelectionInput
} from './types-41.js';
import type { SubscribedLineRequest, SubscribedLineRequestModelInput } from './types-60.js';
import type { Weight, WeightRequestInput } from './types-70.js';
import type { PaymentSplitRequest, PaymentSplitRequestInput } from './types-48.js';
import type { PlatformFeeRequest, PlatformFeeRequestInput, PlatformFeeCap, PlatformFeeCapRequestInput } from './types-49.js';
import type { InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-30.js';
import type { OrderTaxRequest, OrderTaxRequestInput } from './types-42.js';
import type { ReturnResolutionLineItemRequest, ReturnShipmentLineItemAllocationRequestInput } from './types-57.js';
import type {
    CheckoutGiftCardChallenge,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutBuyerFieldsRequestInput,
    CheckoutPromotionConfigRequestInput
} from './types-5.js';
import type {
    PartnerAppCredentialJWKSURLRequestInput,
    PartnerAppCredentialPublicKeyRequest,
    PartnerAppCredentialPublicKeyRequestInput,
    PartnerAppCredentialWorkloadIdentityRequest,
    PartnerAppCredentialWorkloadIdentityRequestInput,
    PartnerAppPaymentSplits
} from './types-43.js';
import type {
    PartnerAppPermissionManifestEntry,
    PartnerAppPlatformProfile,
    PartnerAppPaymentSplitsRequestInput,
    PartnerAppPermissionManifestEntryRequestInput,
    PartnerAppPlatformProfileRequestInput
} from './types-44.js';
import type {
    CheckoutRedirects,
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutRedirectsRequestInput,
    CheckoutTaxConfigRequestInput,
    CheckoutTipConfigRequestInput
} from './types-6.js';
import type {
    PaymentLinkCustomFieldRequest,
    PaymentLinkEventConfig,
    PaymentLinkLineItemRequest,
    PaymentLinkCustomFieldRequestInput,
    PaymentLinkCustomTextConfigInput,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLineItemRequestInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkThemeConfigInput
} from './types-46.js';
import type { ThemeConfig } from './types-65.js';
/**
 * A modifier group to add to a modifier set, either an existing group by ID or one defined inline,
 * chosen by `source`.
 */
export type CreateModifierSetGroupRequest = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group"?: CreateModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
})
    & ((Exclude<CreateModifierSetGroupInputExisting & object, readonly unknown[]>)
    | (Exclude<CreateModifierSetGroupInputInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A modifier group to add to a modifier set, either an existing group by ID or one defined inline,
 * chosen by `source`.
 */
export type CreateModifierSetGroupRequestInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group"?: CreateInlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideRequestInput}. Settings for one modifier that apply only within a modifier
     * set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideRequestInput>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline";
})
    & ((Exclude<CreateModifierSetGroupInputExistingInput & object, readonly unknown[]>)
    | (Exclude<CreateModifierSetGroupInputInlineInput & object, readonly unknown[]>));
/** The request body for: Create modifier set. */
export type CreateModifierSetRequest = {
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
     * Ordered group entries in this set, including references to reusable groups and groups owned
     * by the set. [] (Value): {@link CreateModifierSetGroupRequest}. A modifier group to add to a
     * modifier set, either an existing group by ID or one defined inline, chosen by `source`.
     */
    "modifier_groups"?: Array<CreateModifierSetGroupRequest>;
    /** Name used to identify this modifier set. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Default: "active". Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create modifier set. */
export type CreateModifierSetRequestInput = {
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
     * Ordered group entries in this set, including references to reusable groups and groups owned
     * by the set. [] (Value): {@link CreateModifierSetGroupRequestInput}. A modifier group to add
     * to a modifier set, either an existing group by ID or one defined inline, chosen by `source`.
     */
    "modifier_groups"?: Array<CreateModifierSetGroupRequestInput>;
    /** Name used to identify this modifier set. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Default: "active". Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive";
};
/**
 * Where Flint's hosted onboarding page sends the person when they exit, finish, or open a used or
 * expired link.
 */
export type CreateOnboardingAccessLinkRequest = {
    /**
     * An absolute https URL without credentials, up to 2,048 characters. Query strings and
     * fragments are allowed. For a partner app install token, its origin must be the origin of the
     * app's merchant_action_url or of one of its redirect URIs. Format: uri. minLength: 1.
     * maxLength: 2048. Example: "https://example.com/receipt".
     */
    "return_url": string;
};
/**
 * Where Flint's hosted onboarding page sends the person when they exit, finish, or open a used or
 * expired link.
 */
export type CreateOnboardingAccessLinkRequestInput = CreateOnboardingAccessLinkRequest;
/**
 * A discount to apply when creating an order: either a manual discount or a reference to a
 * promotion.
 */
export type CreateOrderDiscount = ({
    /**
     * A discount you set by hand, with a name and an amount. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /**
     * The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion
     * ID.
     */
    "promotion"?: PromotionRefRequest;
})
    & ((Exclude<CreateOrderDiscountPromotion & object, readonly unknown[]>)
    | (Exclude<CreateOrderDiscountManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A discount to apply when creating an order: either a manual discount or a reference to a
 * promotion.
 */
export type CreateOrderDiscountInput = ({
    /**
     * A discount you set by hand, with a name and an amount. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /**
     * The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion
     * ID.
     */
    "promotion"?: PromotionRefRequestInput;
})
    & ((Exclude<CreateOrderDiscountPromotionInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderDiscountManualInput & object, readonly unknown[]>));
/** The `Manual` variant of `CreateOrderDiscount`. */
export type CreateOrderDiscountManual = ({
    /**
     * A discount you set by hand, with a name and an amount. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual": ManualDiscountRequest;
    /**
     * The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion
     * ID.
     */
    "promotion"?: PromotionRefRequest;
});
/** The `Manual` variant of `CreateOrderDiscount`. */
export type CreateOrderDiscountManualInput = ({
    /**
     * A discount you set by hand, with a name and an amount. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual": ManualDiscountRequestInput;
    /**
     * The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion
     * ID.
     */
    "promotion"?: PromotionRefRequestInput;
})
    & (({
    "promotion"?: never;
}));
/** The `Promotion` variant of `CreateOrderDiscount`. */
export type CreateOrderDiscountPromotion = ({
    /**
     * A discount you set by hand, with a name and an amount. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /**
     * The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion
     * ID.
     */
    "promotion": PromotionRefRequest;
});
/** The `Promotion` variant of `CreateOrderDiscount`. */
export type CreateOrderDiscountPromotionInput = ({
    /**
     * A discount you set by hand, with a name and an amount. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /**
     * The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion
     * ID.
     */
    "promotion": PromotionRefRequestInput;
})
    & (({
    "manual"?: never;
}));
/**
 * Remove unassigned units from a paid order, add items the removed value and released charges pay
 * for, or do both, and queue any remaining refund atomically.
 */
export type CreateOrderEditRequest = ({
    /**
     * Lines to add after removals, in the same shape as POST /v1/orders/{order_id}/line-items.
     * Only variant, bundle, and custom lines with a delivery requirement can be added. Added lines
     * are priced and taxed as usual, without promotions, and do not join the order's delivery
     * selection. minItems: 1. maxItems: 100. [] (Value): {@link CreateOrderLineItemRequest}. A
     * line item to add to an order: a catalog variant, a bundle, or a custom item with a name and
     * unit price.
     */
    "add_line_items"?: Array<CreateOrderLineItemRequest>;
    /**
     * Charges to release. Released value pays for added lines first and the rest is refunded.
     * Omitting amount_money releases the charge's remaining refundable amount. maxItems: 100. []
     * (Value): {@link RefundCharge}. An order charge to refund when creating a refund, with an
     * optional amount to refund.
     */
    "charge_refunds"?: Array<RefundCharge>;
    /**
     * Refund destinations, with the same defaults as POST /v1/refunds. Default refund destinations
     * for payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * The order.version the edit draft was based on. On VERSION_CONFLICT, keep the draft, fetch
     * the order, preview again, and reconcile before committing with the new version and a new
     * Idempotency-Key. Format: int64. minimum: 1.
     */
    "expected_order_version": number;
    /**
     * Internal merchant note. Omitted from buyer and webhook payloads and refund messages.
     * minLength: 1. maxLength: 500.
     */
    "note"?: string;
    /**
     * Reason for the edit and any refund it creates. Value enum: "duplicate", "fraudulent",
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
     * Whole unassigned units to remove. Each line appears once. Original quantities and pricing
     * stay unchanged. Send remove_line_items, add_line_items, or both. minItems: 1. maxItems: 100.
     * [] (Value): {@link OrderEditRemovalRequest}. An order line and the whole units to take off
     * it.
     */
    "remove_line_items"?: Array<OrderEditRemovalRequest>;
})
    & (({
    /**
     * Whole unassigned units to remove. Each line appears once. Original quantities and pricing
     * stay unchanged. Send remove_line_items, add_line_items, or both. minItems: 1. maxItems: 100.
     * [] (Value): {@link OrderEditRemovalRequest}. An order line and the whole units to take off
     * it.
     */
    "remove_line_items": Array<OrderEditRemovalRequest>;
})
    | ({
    /**
     * Lines to add after removals, in the same shape as POST /v1/orders/{order_id}/line-items.
     * Only variant, bundle, and custom lines with a delivery requirement can be added. Added lines
     * are priced and taxed as usual, without promotions, and do not join the order's delivery
     * selection. minItems: 1. maxItems: 100. [] (Value): {@link CreateOrderLineItemRequest}. A
     * line item to add to an order: a catalog variant, a bundle, or a custom item with a name and
     * unit price.
     */
    "add_line_items": Array<CreateOrderLineItemRequest>;
})
    | (Record<string, unknown>));
/**
 * Remove unassigned units from a paid order, add items the removed value and released charges pay
 * for, or do both, and queue any remaining refund atomically.
 */
export type CreateOrderEditRequestInput = ({
    /**
     * Lines to add after removals, in the same shape as POST /v1/orders/{order_id}/line-items.
     * Only variant, bundle, and custom lines with a delivery requirement can be added. Added lines
     * are priced and taxed as usual, without promotions, and do not join the order's delivery
     * selection. minItems: 1. maxItems: 100. [] (Value): {@link CreateOrderLineItemRequestInput}.
     * A line item to add to an order: a catalog variant, a bundle, or a custom item with a name
     * and unit price.
     */
    "add_line_items"?: Array<CreateOrderLineItemRequestInput>;
    /**
     * Charges to release. Released value pays for added lines first and the rest is refunded.
     * Omitting amount_money releases the charge's remaining refundable amount. maxItems: 100. []
     * (Value): {@link RefundChargeInput}. An order charge to refund when creating a refund, with
     * an optional amount to refund.
     */
    "charge_refunds"?: Array<RefundChargeInput>;
    /**
     * Refund destinations, with the same defaults as POST /v1/refunds. Default refund destinations
     * for payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * The order.version the edit draft was based on. On VERSION_CONFLICT, keep the draft, fetch
     * the order, preview again, and reconcile before committing with the new version and a new
     * Idempotency-Key. Format: int64. minimum: 1.
     */
    "expected_order_version": number;
    /**
     * Internal merchant note. Omitted from buyer and webhook payloads and refund messages.
     * minLength: 1. maxLength: 500.
     */
    "note"?: string;
    /**
     * Reason for the edit and any refund it creates. Value enum: "duplicate", "fraudulent",
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
     * Whole unassigned units to remove. Each line appears once. Original quantities and pricing
     * stay unchanged. Send remove_line_items, add_line_items, or both. minItems: 1. maxItems: 100.
     * [] (Value): {@link OrderEditRemovalRequestInput}. An order line and the whole units to take
     * off it.
     */
    "remove_line_items"?: Array<OrderEditRemovalRequestInput>;
})
    & (({
    /**
     * Whole unassigned units to remove. Each line appears once. Original quantities and pricing
     * stay unchanged. Send remove_line_items, add_line_items, or both. minItems: 1. maxItems: 100.
     * [] (Value): {@link OrderEditRemovalRequestInput}. An order line and the whole units to take
     * off it.
     */
    "remove_line_items": Array<OrderEditRemovalRequestInput>;
})
    | ({
    /**
     * Lines to add after removals, in the same shape as POST /v1/orders/{order_id}/line-items.
     * Only variant, bundle, and custom lines with a delivery requirement can be added. Added lines
     * are priced and taxed as usual, without promotions, and do not join the order's delivery
     * selection. minItems: 1. maxItems: 100. [] (Value): {@link CreateOrderLineItemRequestInput}.
     * A line item to add to an order: a catalog variant, a bundle, or a custom item with a name
     * and unit price.
     */
    "add_line_items": Array<CreateOrderLineItemRequestInput>;
}));
/** A response containing `CreateOrderEditResult` data. */
export type CreateOrderEditResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The completed edit,
     * current order, and refunds created so far.
     */
    "data": CreateOrderEditResult;
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
/** The completed edit, current order, and refunds created so far. */
export type CreateOrderEditResult = {
    /** The order after the edit. A customer's purchase and its payment and fulfillment progress. */
    "order": Order;
    /**
     * The committed edit, even when refund processing is pending. Nested child of an order:
     * immutable, completed item changes with frozen values and refund amounts. Refund completion
     * is tracked on the refunds.
     */
    "order_edit": OrderEdit;
    /**
     * Refunds created so far. Empty for zero-value edits or while refund processing has not
     * created them yet; refund.created follows when a refund is created. [] (Value): {@link
     * Refund}. Money returned against a collected payment.
     */
    "refunds": Array<Refund>;
};
/**
 * A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and
 * unit price.
 */
export type CreateOrderLineItem = ({
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
    /** Name of the item as it appears on the order. */
    "name"?: string;
    /**
     * Parent product of variant_id, resolved by the preview. Required for variant lines; absent on
     * bundle and custom lines, which have no parent product. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
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
    /** Selects the type branch. Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
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
    "variant_id"?: string;
})
    & ((Exclude<CreateOrderLineItemVariant & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemBundle & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `bundle` variant of `CreateOrderLineItem`. */
export type CreateOrderLineItemBundle = ({
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
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
    /** Name of the item as it appears on the order. */
    "name"?: string;
    /**
     * Parent product of variant_id, resolved by the preview. Required for variant lines; absent on
     * bundle and custom lines, which have no parent product. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
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
    /** Selects the type branch. Value enum: "bundle". */
    "type": "bundle" | (string & {});
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
    "variant_id"?: string;
})
    & (({
    /** How tax applies to this line item. */
    "tax"?: unknown;
    /** Selects the type branch. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** The `custom` variant of `CreateOrderLineItem`. */
export type CreateOrderLineItemCustom = ({
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
    "fulfillment": LineItemFulfillmentRequest;
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
    /** Name of the item as it appears on the order. */
    "name": string;
    /**
     * Parent product of variant_id, resolved by the preview. Required for variant lines; absent on
     * bundle and custom lines, which have no parent product. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
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
    /** Selects the type branch. Value enum: "custom". */
    "type": "custom" | (string & {});
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
    "unit_price_money": MoneyValue;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /**
     * ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom
     * line item sends neither. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /** Selects the type branch. Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Name of the item as it appears on the order. */
    "name": string;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered.
     * For manual digital or service delivery, send requirement required, resolution_mode manual,
     * and allowed_types containing digital or service. Fulfillment requirements you supply for an
     * order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
}));
/** The `bundle` variant of `CreateOrderLineItemInput`. */
export type CreateOrderLineItemInputBundle = ({
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /** Description of the item as it appears on the order. minLength: 1. */
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
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
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
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
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
    /** Name of the item as it appears on the order. minLength: 1. */
    "name"?: string;
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
    /** Selects the type branch. Value enum: "bundle". */
    "type": "bundle" | (string & {});
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
     * line item sends neither. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /** How tax applies to this line item. */
    "tax"?: unknown;
    /** Selects the type branch. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** The `bundle` variant of `CreateOrderLineItemInput`. */
export type CreateOrderLineItemInputBundleInput = ({
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /** Description of the item as it appears on the order. minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered.
     * For manual digital or service delivery, send requirement required, resolution_mode manual,
     * and allowed_types containing digital or service. Fulfillment requirements you supply for an
     * order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestModelInput;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /**
     * Image of the item as it appears on the order. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequestInput;
    /**
     * Inventory items and quantities each unit of the line takes from stock. [] (Value): {@link
     * OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one inventory item that each
     * unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
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
     * Modifiers sold with the item, each chosen from the catalog or typed as text. [] (Value):
     * {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned on the
     * order line item's modifier. Values can't be empty strings. Keys starting with flint_ are
     * reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** Name of the item as it appears on the order. minLength: 1. */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
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
    "subscription"?: SubscribedLineRequestModelInput;
    /**
     * How tax applies to this line item. Tax settings you supply for a draft order line item: its
     * tax category, whether it is taxable, and an optional tax calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestModelInput;
    /** Selects the type branch. Value enum: "bundle". */
    "type": "bundle";
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsRequestInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightRequestInput;
    /**
     * ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom
     * line item sends neither. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /** How tax applies to this line item. */
    "tax"?: (({
        "taxable"?: never;
    }) & ({
        "line_item_tax_category"?: never;
    }));
    /** Selects the type branch. Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "product_type"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "unit_weight"?: never;
})
    & ({
    "unit_dimensions"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "image"?: never;
})
    & ({
    "inventory_demands"?: never;
})
    & ({
    "fulfillment"?: never;
})
    & ({
    "gift_card_purchase"?: never;
})));
/** The `custom` variant of `CreateOrderLineItemInput`. */
export type CreateOrderLineItemInputCustom = ({
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the item as it appears on the order. minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered.
     * For manual digital or service delivery, send requirement required, resolution_mode manual,
     * and allowed_types containing digital or service. Fulfillment requirements you supply for an
     * order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
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
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
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
    /** Name of the item as it appears on the order. minLength: 1. */
    "name": string;
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
    /** Selects the type branch. Value enum: "custom". */
    "type": "custom" | (string & {});
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
    "unit_price_money": MoneyValue;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /**
     * ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom
     * line item sends neither. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /** Selects the type branch. Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Name of the item as it appears on the order. minLength: 1. */
    "name": string;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered.
     * For manual digital or service delivery, send requirement required, resolution_mode manual,
     * and allowed_types containing digital or service. Fulfillment requirements you supply for an
     * order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
}));
/** The `custom` variant of `CreateOrderLineItemInput`. */
export type CreateOrderLineItemInputCustomInput = ({
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the item as it appears on the order. minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered.
     * For manual digital or service delivery, send requirement required, resolution_mode manual,
     * and allowed_types containing digital or service. Fulfillment requirements you supply for an
     * order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestModelInput;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /**
     * Image of the item as it appears on the order. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequestInput;
    /**
     * Inventory items and quantities each unit of the line takes from stock. [] (Value): {@link
     * OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one inventory item that each
     * unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
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
     * Modifiers sold with the item, each chosen from the catalog or typed as text. [] (Value):
     * {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned on the
     * order line item's modifier. Values can't be empty strings. Keys starting with flint_ are
     * reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** Name of the item as it appears on the order. minLength: 1. */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
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
    "subscription"?: SubscribedLineRequestModelInput;
    /**
     * How tax applies to this line item. Tax settings you supply for a draft order line item: its
     * tax category, whether it is taxable, and an optional tax calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestModelInput;
    /** Selects the type branch. Value enum: "custom". */
    "type": "custom";
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsRequestInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightRequestInput;
    /**
     * ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom
     * line item sends neither. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /** Selects the type branch. Value enum: "custom". */
    "type": ("custom") & ("custom");
    /** Name of the item as it appears on the order. minLength: 1. */
    "name": string;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered.
     * For manual digital or service delivery, send requirement required, resolution_mode manual,
     * and allowed_types containing digital or service. Fulfillment requirements you supply for an
     * order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestModelInput;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})
    & ({
    "gift_card_purchase"?: never;
})));
/** The `variant` variant of `CreateOrderLineItemInput`. */
export type CreateOrderLineItemInputVariant = ({
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the item as it appears on the order. minLength: 1. */
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
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
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
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
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
    /** Name of the item as it appears on the order. minLength: 1. */
    "name"?: string;
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
     * line item sends neither. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
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
     * line item sends neither. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
}));
/** The `variant` variant of `CreateOrderLineItemInput`. */
export type CreateOrderLineItemInputVariantInput = ({
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the item as it appears on the order. minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered.
     * For manual digital or service delivery, send requirement required, resolution_mode manual,
     * and allowed_types containing digital or service. Fulfillment requirements you supply for an
     * order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestModelInput;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /**
     * Image of the item as it appears on the order. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequestInput;
    /**
     * Inventory items and quantities each unit of the line takes from stock. [] (Value): {@link
     * OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one inventory item that each
     * unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
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
     * Modifiers sold with the item, each chosen from the catalog or typed as text. [] (Value):
     * {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned on the
     * order line item's modifier. Values can't be empty strings. Keys starting with flint_ are
     * reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** Name of the item as it appears on the order. minLength: 1. */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
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
    "subscription"?: SubscribedLineRequestModelInput;
    /**
     * How tax applies to this line item. Tax settings you supply for a draft order line item: its
     * tax category, whether it is taxable, and an optional tax calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestModelInput;
    /** Selects the type branch. Value enum: "variant". */
    "type": "variant";
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsRequestInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightRequestInput;
    /**
     * ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom
     * line item sends neither. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /** How tax applies to this line item. */
    "tax"?: (({
        "taxable"?: never;
    }) & ({
        "line_item_tax_category"?: never;
    }));
    /** Selects the type branch. Value enum: "variant". */
    "type": ("variant") & ("variant");
    /**
     * ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom
     * line item sends neither. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
})
    & ({
    "product_type"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "unit_weight"?: never;
})
    & ({
    "unit_dimensions"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "image"?: never;
})
    & ({
    "inventory_demands"?: never;
})
    & ({
    "fulfillment"?: never;
})));
/**
 * A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and
 * unit price.
 */
export type CreateOrderLineItemRequest = ({
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the item as it appears on the order. minLength: 1. */
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
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
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
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
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
    /** Name of the item as it appears on the order. minLength: 1. */
    "name"?: string;
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
    /** Selects the type branch. Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
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
     * line item sends neither. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<CreateOrderLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemInputCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and
 * unit price.
 */
export type CreateOrderLineItemRequestInput = ({
    /**
     * ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item
     * sends neither. minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the item as it appears on the order. minLength: 1. */
    "description"?: string;
    /**
     * Required on line items without variant_id or bundle_id, and rejected on catalog lines, which
     * use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered.
     * For manual digital or service delivery, send requirement required, resolution_mode manual,
     * and allowed_types containing digital or service. Fulfillment requirements you supply for an
     * order line item, such as allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestModelInput;
    /**
     * Buyer-selected face value and recipient for a gift_card variant. The server freezes the
     * offer and resolves consideration per unit. Omit to purchase the reference denomination
     * without a recipient. Gift card details you supply for an order line item: the
     * `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /**
     * Image of the item as it appears on the order. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequestInput;
    /**
     * Inventory items and quantities each unit of the line takes from stock. [] (Value): {@link
     * OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one inventory item that each
     * unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
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
     * Modifiers sold with the item, each chosen from the catalog or typed as text. [] (Value):
     * {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned on the
     * order line item's modifier. Values can't be empty strings. Keys starting with flint_ are
     * reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** Name of the item as it appears on the order. minLength: 1. */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
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
    "subscription"?: SubscribedLineRequestModelInput;
    /**
     * How tax applies to this line item. Tax settings you supply for a draft order line item: its
     * tax category, whether it is taxable, and an optional tax calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestModelInput;
    /** Selects the type branch. Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom";
    /**
     * Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsRequestInput;
    /**
     * Price of one unit. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightRequestInput;
    /**
     * ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom
     * line item sends neither. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<CreateOrderLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<CreateOrderLineItemInputCustomInput & object, readonly unknown[]>));
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
    /** Name of the item as it appears on the order. */
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
/** The request body for: Create order payment intent. */
export type CreateOrderPaymentIntentRequest = ({
    /**
     * Amount to collect toward the order, in the order currency. Omit it to collect the whole
     * remaining balance: the amount still outstanding minus what the order's other open payments
     * hold, meaning payments in requires_payment_method, requires_confirmation, requires_action,
     * processing, or requires_capture. For a payment started from an invoice's checkout, the
     * outstanding amount is the invoice's outstanding_money. A sent amount must use the order
     * currency, otherwise the request fails with INVALID_REQUEST and NOT_ALLOWED on
     * amount_money.currency. An amount above the remaining balance fails with LIMIT_EXCEEDED and
     * maximum_money, and so does any amount when open payments already hold the whole balance,
     * with a maximum of zero. The amount and every computed order amount must not exceed 99999999
     * minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * automatic collects the payment when it is confirmed. manual places a hold at confirmation
     * that you capture or cancel later. Defaults to automatic. Value enum: "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
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
     * Payment options the buyer can use for this payment. Name at least one. Omit it, and
     * payment_source_selection, to offer card where your payment option settings and the order
     * allow it; a checkout credential uses its checkout session's options instead. Affirm is
     * offered only when named here. card_present must be the only option; confirm it with a reader
     * credential. payment_return_url is required with affirm and not accepted with card_present.
     * Can't be combined with payment_source_selection: sending both fails with INVALID_REQUEST and
     * NOT_ALLOWED. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
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
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. Required when
     * payment_options includes affirm and no checkout session collects the payment. Not accepted
     * with card_present. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Offer the card payment source, and choose which digital wallets appear with it, as an
     * alternative to payment_options. Sending card with no digital_wallets offers card alone;
     * apple_pay and google_pay add those wallets. Can't be combined with payment_options. If
     * nothing in the selection is available for the order, the request fails with
     * PAYMENT_OPTION_UNAVAILABLE. The payment source options you choose when creating an order
     * payment intent.
     */
    "payment_source_selection"?: OrderPaymentSourceSelection;
    /**
     * A platform fee your partner app charges on this payment, checked against amount_money. Only
     * a partner app install token can send it; from any other credential it is INVALID_REQUEST
     * with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose
     * payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on
     * platform_fee, because Flint's billing creates the renewals. amount_money must be above zero,
     * in the payment's currency, at most the platform fee cap the merchant approved for this
     * amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on
     * platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without
     * an approved cap in this currency it is ACTION_NOT_ALLOWED with reason
     * platform_fee_consent_required. In live mode the partner app's platform_fees capability must
     * be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the
     * app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or
     * cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the
     * payment never fails because of it. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). A platform fee the partner app charges on the payment,
     * beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Let one capture collect more than the authorization where the card network allows it, for
     * example the final bill plus a tip. Needs capture_method manual and payment_options limited
     * to card, apple_pay, google_pay or card_present; otherwise INVALID_REQUEST with NOT_ALLOWED
     * on request_overcapture. On an order, the bill can't exceed this payment's share of the
     * order, so an overcapture adds a tip. Card networks allow overcapture only where the final
     * amount isn't known at authorization, such as tips and services, and you're responsible for
     * following their rules. Default: false.
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
});
/** The request body for: Create order payment intent. */
export type CreateOrderPaymentIntentRequestInput = ({
    /**
     * Amount to collect toward the order, in the order currency. Omit it to collect the whole
     * remaining balance: the amount still outstanding minus what the order's other open payments
     * hold, meaning payments in requires_payment_method, requires_confirmation, requires_action,
     * processing, or requires_capture. For a payment started from an invoice's checkout, the
     * outstanding amount is the invoice's outstanding_money. A sent amount must use the order
     * currency, otherwise the request fails with INVALID_REQUEST and NOT_ALLOWED on
     * amount_money.currency. An amount above the remaining balance fails with LIMIT_EXCEEDED and
     * maximum_money, and so does any amount when open payments already hold the whole balance,
     * with a maximum of zero. The amount and every computed order amount must not exceed 99999999
     * minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * automatic collects the payment when it is confirmed. manual places a hold at confirmation
     * that you capture or cancel later. Defaults to automatic. Value enum: "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual";
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
     * Payment options the buyer can use for this payment. Name at least one. Omit it, and
     * payment_source_selection, to offer card where your payment option settings and the order
     * allow it; a checkout credential uses its checkout session's options instead. Affirm is
     * offered only when named here. card_present must be the only option; confirm it with a reader
     * credential. payment_return_url is required with affirm and not accepted with card_present.
     * Can't be combined with payment_source_selection: sending both fails with INVALID_REQUEST and
     * NOT_ALLOWED. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
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
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. Required when
     * payment_options includes affirm and no checkout session collects the payment. Not accepted
     * with card_present. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Offer the card payment source, and choose which digital wallets appear with it, as an
     * alternative to payment_options. Sending card with no digital_wallets offers card alone;
     * apple_pay and google_pay add those wallets. Can't be combined with payment_options. If
     * nothing in the selection is available for the order, the request fails with
     * PAYMENT_OPTION_UNAVAILABLE. The payment source options you choose when creating an order
     * payment intent.
     */
    "payment_source_selection"?: OrderPaymentSourceSelectionInput;
    /**
     * A platform fee your partner app charges on this payment, checked against amount_money. Only
     * a partner app install token can send it; from any other credential it is INVALID_REQUEST
     * with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose
     * payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on
     * platform_fee, because Flint's billing creates the renewals. amount_money must be above zero,
     * in the payment's currency, at most the platform fee cap the merchant approved for this
     * amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on
     * platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without
     * an approved cap in this currency it is ACTION_NOT_ALLOWED with reason
     * platform_fee_consent_required. In live mode the partner app's platform_fees capability must
     * be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the
     * app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or
     * cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the
     * payment never fails because of it. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). A platform fee the partner app charges on the payment,
     * beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * Let one capture collect more than the authorization where the card network allows it, for
     * example the final bill plus a tip. Needs capture_method manual and payment_options limited
     * to card, apple_pay, google_pay or card_present; otherwise INVALID_REQUEST with NOT_ALLOWED
     * on request_overcapture. On an order, the bill can't exceed this payment's share of the
     * order, so an overcapture adds a tip. Card networks allow overcapture only where the final
     * amount isn't known at authorization, such as tips and services, and you're responsible for
     * following their rules. Default: false.
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
})
    & (({
    "splits"?: never;
} | {
    "platform_fee"?: never;
}));
/** The request body for: Create order. */
export type CreateOrderRequest = {
    /** A note to the buyer. minLength: 1. maxLength: 1000. */
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
    /** A note for your team. Buyer reads leave it out. minLength: 1. maxLength: 1000. */
    "internal_note"?: string;
    /**
     * How Flint chooses the Locations that fill this order's inventory: one fixed Location, an
     * allocation policy, or a specific policy revision. Where you want inventory routed from: a
     * fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
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
    /** A note to the buyer. minLength: 1. maxLength: 1000. */
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
    /** A note for your team. Buyer reads leave it out. minLength: 1. maxLength: 1000. */
    "internal_note"?: string;
    /**
     * How Flint chooses the Locations that fill this order's inventory: one fixed Location, an
     * allocation policy, or a specific policy revision. Where you want inventory routed from: a
     * fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
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
    /** Optional name that stays on the tip for your reporting. minLength: 1. maxLength: 255. */
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
    /** Optional name that stays on the tip for your reporting. minLength: 1. maxLength: 255. */
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
    /** Optional name that stays on the tip for your reporting. minLength: 1. maxLength: 255. */
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
    /** Optional name that stays on the tip for your reporting. minLength: 1. maxLength: 255. */
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
    /** Optional name that stays on the tip for your reporting. minLength: 1. maxLength: 255. */
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
    /** Optional name that stays on the tip for your reporting. minLength: 1. maxLength: 255. */
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
     * Independent package-item collection. Inline creation uses the child-create shape and commits
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
     * Independent package-item collection. Inline creation uses the child-create shape and commits
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
     * Independent package-item collection. Inline creation uses the child-create shape and commits
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
     * Independent package-item collection. Inline creation uses the child-create shape and commits
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
     * Independent package-item collection. Inline creation uses the child-create shape and commits
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
     * Independent package-item collection. Inline creation uses the child-create shape and commits
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
     * A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the
     * credential.
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
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** Credential type. Value enum: "jwks_url". */
    "type": "jwks_url" | (string & {});
};
/** The `jwks_url` variant of `CreatePartnerAppCredentialRequest`. */
export type CreatePartnerAppCredentialJWKSURLRequestInput = {
    /**
     * A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the
     * credential.
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
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
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
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** The public JSON Web Key to register for client authentication. */
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
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** The public JSON Web Key to register for client authentication. */
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
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** Credential type. Value enum: "workload_identity". */
    "type": "workload_identity" | (string & {});
    /**
     * An external OIDC identity whose subject and claim conditions must match exactly the
     * registered policy.
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
    /** Optional name to identify this credential. minLength: 1. maxLength: 100. */
    "name"?: string;
    /** Credential type. Value enum: "workload_identity". */
    "type": "workload_identity";
    /**
     * An external OIDC identity whose subject and claim conditions must match exactly the
     * registered policy.
     */
    "workload_identity": PartnerAppCredentialWorkloadIdentityRequestInput;
};
/** The request body for: Create partner app. */
export type CreatePartnerAppRequest = {
    /**
     * API version for requests the app makes with its install tokens that send no Flint-Version
     * header. Defaults to the version of this request and can't be newer than it. minLength: 1.
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
     * characters, without links or email addresses. minLength: 1. maxLength: 100.
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
     * it now or later with PATCH. The whole platform profile. Every field is required except
     * support_phone, and a write replaces the profile whole.
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
     * header. Defaults to the version of this request and can't be newer than it. minLength: 1.
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
     * characters, without links or email addresses. minLength: 1. maxLength: 100.
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
     * it now or later with PATCH. The whole platform profile. Every field is required except
     * support_phone, and a write replaces the profile whole.
     */
    "platform_profile"?: PartnerAppPlatformProfileRequestInput;
    /**
     * Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or
     * HTTP on localhost or a loopback address, with no fragment. At least one is required. []
     * (Value): string. minLength: 1.
     */
    "redirect_uris": Array<string>;
};
/** The request body for: Create standalone payment intent. */
export type CreatePaymentIntentRequest = ({
    /**
     * Amount to request from the buyer, including any tip_money. With capture_method manual, this
     * is the hold amount, and you can capture less of it later. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
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
     * Payment options the buyer can use. Name at least one. card_present must be the only option;
     * confirm it with a reader credential. payment_return_url is not accepted with card_present.
     * minItems: 1. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
     * "card_present". [] (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit", "card_present".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. Required when
     * payment_options includes affirm and no checkout session collects the payment. Not accepted
     * with card_present. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * A platform fee your partner app charges on this payment, checked against amount_money. Only
     * a partner app install token can send it; from any other credential it is INVALID_REQUEST
     * with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose
     * payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on
     * platform_fee, because Flint's billing creates the renewals. amount_money must be above zero,
     * in the payment's currency, at most the platform fee cap the merchant approved for this
     * amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on
     * platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without
     * an approved cap in this currency it is ACTION_NOT_ALLOWED with reason
     * platform_fee_consent_required. In live mode the partner app's platform_fees capability must
     * be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the
     * app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or
     * cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the
     * payment never fails because of it. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). A platform fee the partner app charges on the payment,
     * beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Email address for this payment's receipt. When omitted, Flint uses the customer's email.
     * Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
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
/** The request body for: Create standalone payment intent. */
export type CreatePaymentIntentRequestInput = ({
    /**
     * Amount to request from the buyer, including any tip_money. With capture_method manual, this
     * is the hold amount, and you can capture less of it later. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
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
     * Payment options the buyer can use. Name at least one. card_present must be the only option;
     * confirm it with a reader credential. payment_return_url is not accepted with card_present.
     * minItems: 1. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
     * "card_present". [] (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit", "card_present".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present">;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. Required when
     * payment_options includes affirm and no checkout session collects the payment. Not accepted
     * with card_present. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * A platform fee your partner app charges on this payment, checked against amount_money. Only
     * a partner app install token can send it; from any other credential it is INVALID_REQUEST
     * with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose
     * payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on
     * platform_fee, because Flint's billing creates the renewals. amount_money must be above zero,
     * in the payment's currency, at most the platform fee cap the merchant approved for this
     * amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on
     * platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without
     * an approved cap in this currency it is ACTION_NOT_ALLOWED with reason
     * platform_fee_consent_required. In live mode the partner app's platform_fees capability must
     * be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the
     * app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or
     * cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the
     * payment never fails because of it. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). A platform fee the partner app charges on the payment,
     * beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * Email address for this payment's receipt. When omitted, Flint uses the customer's email.
     * Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
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
     * Largest amount a buyer can give on a donation link. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
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
    "event_config"?: PaymentLinkEventConfig;
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
     * Routing source for tracked demand. Create, activation, and sellability edits require at
     * least one active routing location with inventory_allocation_enabled; temporary stock
     * shortages do not prevent these writes. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
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
    /** Name of the payment link. minLength: 1. maxLength: 255. */
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
    /** minLength: 1. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
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
     * Largest amount a buyer can give on a donation link. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
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
     * Routing source for tracked demand. Create, activation, and sellability edits require at
     * least one active routing location with inventory_allocation_enabled; temporary stock
     * shortages do not prevent these writes. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
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
    /** Name of the payment link. minLength: 1. maxLength: 255. */
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
    /** minLength: 1. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
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
