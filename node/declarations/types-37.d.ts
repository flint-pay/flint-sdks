import type { OrderDeliveryDestinationRecipientRequest, Order, OrderCalculatedLineItemTax } from './types-36.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type { MoneyValue, MoneyValueInput, MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-35.js';
import type { PartnerWebhookEnvelope, PaymentAttemptGiftCardRedemption, PaymentAttemptPaymentIntent } from './types-40.js';
import type { DeliveryPreviewRoutingSourceInput } from './types-16.js';
import type { BundleComponent } from './types-1.js';
import type { CategoryReference } from './types-4.js';
import type { Dimensions } from './types-20.js';
import type { GiftCardPurchaseSnapshot } from './types-24.js';
import type { Image } from './types-25.js';
import type { LineItemInventorySnapshot } from './types-32.js';
import type { PurchasedGiftCard } from './types-46.js';
import type { SelectedProductOption } from './types-53.js';
import type { SubscribedLine } from './types-54.js';
import type { Weight } from './types-62.js';
import type { TextModifierRequest, TextModifierRequestInput } from './types-58.js';
import type { TaxCalculationRequest, TaxCalculationRequestModelInput } from './types-57.js';
import type { SubscriptionIntervalOption } from './types-55.js';
import type { ResponseMeta } from './types-48.js';
import type { PaymentErrorSummary } from './types-41.js';
import type { PendingPaymentAction } from './types-44.js';
import type { OrderPaymentIntentSelectionTokenInput } from './types-38.js';
/**
 * The recipient name and phone you supply for an order delivery. Send null to clear a field.
 * minProperties: 1.
 */
export type OrderDeliveryDestinationRecipientRequestInput = OrderDeliveryDestinationRecipientRequest;
/**
 * The delivery destination you set when creating or updating an order, with an address and an
 * optional recipient.
 */
export type OrderDeliveryDestinationRequest = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address": AddressRequest;
    /**
     * The recipient name and phone you supply for an order delivery. Send null to clear a field.
     * minProperties: 1.
     */
    "recipient"?: OrderDeliveryDestinationRecipientRequest;
};
/**
 * The delivery destination you set when creating or updating an order, with an address and an
 * optional recipient.
 */
export type OrderDeliveryDestinationRequestInput = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address": AddressRequestInput;
    /**
     * The recipient name and phone you supply for an order delivery. Send null to clear a field.
     * minProperties: 1.
     */
    "recipient"?: OrderDeliveryDestinationRecipientRequestInput;
};
/**
 * A discount applied to an order, with its amount, status, and the line items and charges it
 * covers. It comes from a manual discount or a promotion.
 */
export type OrderDiscount = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_money": MoneyValue;
    "customer_facing_name"?: string;
    /** Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**  [] (Value): string. */
    "order_charge_ids": Array<string>;
    /**
     * Order discount ID. It starts with ad_. Pass it to POST
     * /v1/orders/{order_id}/discounts/remove to remove the discount.
     */
    "order_discount_id": string;
    "order_id": string;
    /**  [] (Value): string. */
    "order_line_item_ids": Array<string>;
    /**
     * Promotion code used to create this discount. Present only when source is promotion and a
     * code was used.
     */
    "promotion_code"?: string;
    /** Promotion that created this discount. Present only when source is promotion. */
    "promotion_id"?: string;
    /** Value enum: "manual", "promotion", "plan_change_credit". */
    "source"?: "manual" | "promotion" | "plan_change_credit" | (string & {});
    /** Value enum: "pending", "redeemed", "canceled". */
    "status": "pending" | "redeemed" | "canceled" | (string & {});
};
/**
 * The quantity of one inventory item that each unit of a draft order line item uses, supplied when
 * creating the line item.
 */
export type OrderDraftLineItemInventoryDemandRequest = {
    /** minLength: 1. */
    "inventory_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     * maximum: 9999.
     */
    "quantity_per_line_item_unit": number;
};
/**
 * The quantity of one inventory item that each unit of a draft order line item uses, supplied when
 * creating the line item.
 */
export type OrderDraftLineItemInventoryDemandRequestInput = OrderDraftLineItemInventoryDemandRequest;
/**
 * A tax calculation you supply for a draft order line item, made of tax components and a price
 * mode.
 */
export type OrderDraftLineItemTaxCalculationRequestInput = {
    /**
     * minItems: 1. [] (Value): {@link OrderDraftTaxComponentRequestInput}. One tax component of a
     * draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.
     */
    "components": Array<OrderDraftTaxComponentRequestInput>;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/**
 * Tax settings you supply for a draft order line item: its tax category, whether it is taxable,
 * and an optional tax calculation.
 */
export type OrderDraftLineItemTaxRequestInput = {
    /**
     * A tax calculation you supply for a draft order line item, made of tax components and a price
     * mode.
     */
    "calculation"?: OrderDraftLineItemTaxCalculationRequestInput;
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
        | "admission";
    "taxable"?: boolean;
};
/**
 * One tax component of a draft line item calculation, with its jurisdiction, tax type, and
 * percentage or flat amount.
 */
export type OrderDraftTaxComponentRequestInput = ({
    /** Default: "percentage". Value enum: "percentage". */
    "calculation_type"?: "percentage";
    /**
     * Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "flat_money"?: MoneyValueInput;
    /**
     * The taxing jurisdiction of a draft tax component, identified by code, level, name, state,
     * and country.
     */
    "jurisdiction": OrderDraftTaxJurisdictionRequestInput;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Value enum: "sales_tax", "use_tax". */
    "tax_type": "sales_tax" | "use_tax";
})
    & ({
    "flat_money"?: never;
});
/**
 * The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and
 * country.
 */
export type OrderDraftTaxJurisdictionRequestInput = {
    /** minLength: 1. */
    "code": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /** Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district";
    /** minLength: 1. */
    "name": string;
    /** minLength: 1. */
    "state": string;
};
/** The amount of an order that a gift card covers. */
export type OrderGiftCardAllocation = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    "gift_card_id": string;
};
/**
 * Accept the exact gift_card_estimate returned on the current order, including all selected cards
 * and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and
 * may use one processor payment intent for the processor_money remainder. The amount and every
 * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an
 * input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
 * responsible input field. Lower payment option limits can apply.
 */
export type OrderGiftCardAllocationAcceptance = {
    /**
     *  amount (Required): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. Value enum:
     * "USD".
     */
    "gift_card_money": {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount": `${bigint}`;
        /** Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     * minItems: 1. maxItems: 20. [] (Value): object. [].amount_money (Required): object.
     * [].amount_money.amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. [].amount_money.currency (Required):
     * string. Value enum: "USD". [].gift_card_id (Required): string. minLength: 1. maxLength: 64.
     */
    "gift_cards": Array<{
        /**
         *  amount (Required): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0. currency (Required): string. Value
         * enum: "USD".
         */
        "amount_money": {
            /**
             * Use an integer string (decimal digits), not a floating-point number. Format: int64.
             * minimum: 0.
             */
            "amount": `${bigint}`;
            /** Value enum: "USD". */
            "currency": "USD" | (string & {});
        };
        /** minLength: 1. maxLength: 64. */
        "gift_card_id": string;
    }>;
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. Format: int64. minimum: 1.
     */
    "order_version": number;
    /**
     *  amount (Required): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. Value enum:
     * "USD".
     */
    "processor_money": {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount": `${bigint}`;
        /** Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
};
/**
 * Accept the exact gift_card_estimate returned on the current order, including all selected cards
 * and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and
 * may use one processor payment intent for the processor_money remainder. The amount and every
 * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an
 * input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
 * responsible input field. Lower payment option limits can apply.
 */
export type OrderGiftCardAllocationAcceptanceInput = {
    /**
     *  amount (Required): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. Value enum:
     * "USD".
     */
    "gift_card_money": {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount": `${bigint}` | bigint;
        /** Value enum: "USD". */
        "currency": "USD";
    };
    /**
     * minItems: 1. maxItems: 20. [] (Value): object. [].amount_money (Required): object.
     * [].amount_money.amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. [].amount_money.currency (Required):
     * string. Value enum: "USD". [].gift_card_id (Required): string. minLength: 1. maxLength: 64.
     */
    "gift_cards": Array<{
        /**
         *  amount (Required): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0. currency (Required): string. Value
         * enum: "USD".
         */
        "amount_money": {
            /**
             * Use an integer string (decimal digits), not a floating-point number. Format: int64.
             * minimum: 0.
             */
            "amount": `${bigint}` | bigint;
            /** Value enum: "USD". */
            "currency": "USD";
        };
        /** minLength: 1. maxLength: 64. */
        "gift_card_id": string;
    }>;
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. Format: int64. minimum: 1.
     */
    "order_version": number;
    /**
     *  amount (Required): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. Value enum:
     * "USD".
     */
    "processor_money": {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount": `${bigint}` | bigint;
        /** Value enum: "USD". */
        "currency": "USD";
    };
};
/**
 * An estimate of how an order total splits between gift cards and the payment processor, and
 * whether gift cards can pay it.
 */
export type OrderGiftCardEstimate = {
    /**
     * Whether this allocation can be used for payment. False when a selected card needs
     * authorization or the allocation cannot cover the balance while satisfying the processor
     * minimum.
     */
    "can_pay": boolean;
    /**
     * Order balance allocated to the selected gift cards. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "gift_card_money": MoneyValue;
    /**
     *  [] (Value): {@link OrderGiftCardAllocation}. The amount of an order that a gift card
     * covers.
     */
    "gift_cards": Array<OrderGiftCardAllocation>;
    /** Whether this estimate reserves gift-card funds. Estimates currently return false. */
    "is_reserved": boolean;
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. Format: int64.
     */
    "order_version": number;
    /**
     * Order balance remaining for the payment processor. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "processor_money": MoneyValue;
};
/**
 * A gift card available to pay an order, with its available balance and the last four characters
 * of its code.
 */
export type OrderGiftCardSelection = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "available_money": MoneyValue;
    "gift_card_id": string;
    /** Last four characters of the card's current code. */
    "last4": string;
    "requires_authorization": boolean;
};
/** A gift card redemption applied to an order payment, with the amount, tip, and gift card. */
export type OrderGiftCardSettlement = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "gift_card_id": string;
    "gift_card_redemption_id": string;
    /**
     * Last four characters of the code that paid. It stays the same if the gift card's code is
     * later replaced.
     */
    "last4": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tip_money": MoneyValue;
};
export type OrderInventoryExceptionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.inventory_exception_created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.inventory_exception_created";
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
    "event_type": "order.inventory_exception_created";
});
/**
 * The `order.inventory_exception_created` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type OrderInventoryExceptionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.inventory_exception_created". */
    "event_type"?: "order.inventory_exception_created";
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
 * The `order.inventory_exception_created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type OrderInventoryExceptionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.inventory_exception_created". */
    "event_type"?: "order.inventory_exception_created";
});
export type OrderInventoryExceptionResolvedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.inventory_exception_resolved";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.inventory_exception_resolved";
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
    "event_type": "order.inventory_exception_resolved";
});
/**
 * The `order.inventory_exception_resolved` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type OrderInventoryExceptionResolvedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.inventory_exception_resolved". */
    "event_type"?: "order.inventory_exception_resolved";
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
 * The `order.inventory_exception_resolved` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type OrderInventoryExceptionResolvedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.inventory_exception_resolved". */
    "event_type"?: "order.inventory_exception_resolved";
});
/**
 * Where inventory for an order is allocated from: a fixed location, an allocation policy, or a
 * specific policy revision.
 */
export type OrderInventoryRoutingSourceRequestInput = DeliveryPreviewRoutingSourceInput;
/** An item purchased in an order. */
export type OrderLineItem = {
    /**
     * Unit price multiplied by quantity, before modifiers, discounts, and tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "base_subtotal_money": MoneyValue;
    /**
     * Components fixed when the bundle line was added. The line takes their shared taxability and
     * tax category; all component variants must share both stored values. An unset category equals
     * only another unset category. [] (Value): {@link BundleComponent}. An item included in a
     * bundle.
     */
    "bundle_components": Array<BundleComponent>;
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories": Array<CategoryReference>;
    "description"?: string;
    /**
     * Discount value allocated to this line item. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Current quantities for each required fulfillment obligation: one entry for a single item or
     * one per bundle component that requires fulfillment. Quantities use line units for single
     * items and component units for bundles. required_quantity equals unassigned_quantity +
     * assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity. Omitted when
     * the line needs no fulfillment or the order's obligations cannot be computed, including older
     * lines without recorded requirements. [] (Value): {@link OrderLineItemFulfillmentQuantities}.
     * Counts of how much of an order line item is assigned, fulfilled, failed, canceled, or still
     * unassigned for fulfillment.
     */
    "fulfillment_quantities"?: Array<OrderLineItemFulfillmentQuantities>;
    /**
     * Fulfillment requirements fixed when the line item was created. direct describes a single
     * item; components describes each bundle component. Omitted for older line items without
     * recorded requirements. Fulfillment requirements for an order line item, given for a single
     * item or for each component of a bundle.
     */
    "fulfillment_requirements"?: OrderLineItemFulfillmentRequirements;
    /**
     * The gift card purchase details saved on an order line item: configuration, face value, price
     * paid, and recipient.
     */
    "gift_card_purchase"?: GiftCardPurchaseSnapshot;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /**
     *  anyOf[1] (Value): {@link LineItemInventorySnapshot}. Whether an order line item tracks
     * inventory, and the inventory item quantities each unit demands. anyOf[2] (Value): null.
     */
    "inventory_snapshot": ((LineItemInventorySnapshot) | (null));
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Sum of the line item's modifier totals. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     *  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item, with
     * its quantity, price change, total, and display flags.
     */
    "modifiers": Array<OrderLineItemModifier>;
    "name": string;
    "order_line_item_id": string;
    "product_id"?: string;
    /**
     * Masked card identities for fully funded units of this purchase line. Partial consideration
     * does not issue a card. [] (Value): {@link PurchasedGiftCard}. A gift card issued for one
     * unit of a purchased order line item, with its last four code characters and any card it
     * replaced.
     */
    "purchased_gift_cards": Array<PurchasedGiftCard>;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_money": MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "refunded_quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    "sku"?: string;
    /** Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    /**
     * Recurring offer and cadence frozen for this line at signup. The subscription offer and
     * billing interval an order line was bought under, with the recurring amount.
     */
    "subscription"?: SubscribedLine;
    /** Subscription created for this line after the order is paid. */
    "subscription_id"?: string;
    /**
     * Applicable active offer for a one-time line, or the offer terms frozen for a subscribed
     * line. A subscription offer attached to an order line item, with its name, discount, and
     * billing interval options.
     */
    "subscription_offer"?: OrderLineSubscriptionOfferSummary;
    /**
     * Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax settings for an order line item calculated by Flint or supplied by you, including the
     * line item tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /**
     * Tax calculated for this line item, including any tax already included in its price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Subtotal minus discounts, plus tax that is not already included in the price. Signed
     * monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /**
     * Weight of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "unit_weight"?: Weight;
    "variant_id"?: string;
};
/**
 * Fulfillment requirements for one component of a bundle line item, with the component quantity
 * per unit.
 */
export type OrderLineItemFulfillmentComponent = {
    /** ID of the bundle component these requirements apply to. */
    "bundle_component_id": string;
    /**
     * Fulfillment requirements for this component. anyOf[1] (Value): {@link
     * OrderLineItemFulfillmentProfile}. Whether an order line item requires fulfillment, and the
     * fulfillment types it allows. anyOf[2] (Value): null.
     */
    "profile": ((OrderLineItemFulfillmentProfile) | (null));
    /**
     * Number of this component per unit of the order line item; fractional quantities are not
     * supported. Format: int64.
     */
    "quantity_per_line_item_unit": number;
};
/** Whether an order line item requires fulfillment, and the fulfillment types it allows. */
export type OrderLineItemFulfillmentProfile = {
    /**
     * Fulfillment types allowed for this item. Empty when fulfillment is not required. [] enum:
     * "shipment", "pickup", "local_delivery", "digital", "service". [] (Value): string. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /** Whether this item requires fulfillment. Value enum: "none", "required". */
    "requirement": "none" | "required" | (string & {});
};
/**
 * Counts of how much of an order line item is assigned, fulfilled, failed, canceled, or still
 * unassigned for fulfillment.
 */
export type OrderLineItemFulfillmentQuantities = {
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by a
     * non-terminal fulfillment, including a fulfillment on hold. Format: int64.
     */
    "assigned_quantity": number;
    /** ID of the bundle component these quantities describe. Omitted for a single item. */
    "bundle_component_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled
     * or no_show fulfillments. Format: int64.
     */
    "canceled_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by failed
     * fulfillments that kept their quantity. Failed fulfillments that released quantity own
     * nothing; their quantity becomes unassigned again. Format: int64.
     */
    "failed_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by completed
     * fulfillments. Format: int64.
     */
    "fulfilled_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Total quantity requiring
     * fulfillment, in line units for a single item or component units for a bundle component.
     * Equals the sum of the other five quantity fields. Format: int64.
     */
    "required_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Required quantity owned by
     * no fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment.
     * Format: int64.
     */
    "unassigned_quantity": number;
};
/**
 * Fulfillment requirements for an order line item, given for a single item or for each component
 * of a bundle.
 */
export type OrderLineItemFulfillmentRequirements = {
    /**
     * Fulfillment requirements for each bundle component. Present for bundle lines. [] (Value):
     * {@link OrderLineItemFulfillmentComponent}. Fulfillment requirements for one component of a
     * bundle line item, with the component quantity per unit.
     */
    "components"?: Array<OrderLineItemFulfillmentComponent>;
    /**
     * Fulfillment requirements for a single item. Present for non-bundle lines. Whether an order
     * line item requires fulfillment, and the fulfillment types it allows.
     */
    "direct"?: OrderLineItemFulfillmentProfile;
};
/**
 * A modifier selected on an order line item, with its quantity, price change, total, and display
 * flags.
 */
export type OrderLineItemModifier = {
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Name of the modifier group recorded when this selection was added to the order line item. */
    "modifier_group_name": string;
    /**
     * Identifier of the selected catalog modifier. If its group is owned by a modifier set
     * (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it.
     */
    "modifier_id"?: string;
    /** Name of the selected modifier recorded on the order line item. */
    "name": string;
    /** Stable identifier of the selected modifier on this order line item. */
    "order_line_item_modifier_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Whether this selection appears in fulfillment details, recorded when selected. */
    "show_on_fulfillment": boolean;
    /** Whether this selection appears on buyer receipts, recorded when selected. */
    "show_on_receipt": boolean;
    /**
     * Whether the selection is a catalog list modifier or buyer-entered text. Value enum:
     * "catalog_modifier", "text".
     */
    "source_type": "catalog_modifier" | "text" | (string & {});
    /**
     * Selected text group and buyer-entered value. Read an inline text group through its owning
     * modifier set. Text a buyer entered for a text modifier group on an order line item.
     */
    "text"?: TextModifierRequest;
    /** Buyer-entered text recorded for a text modifier selection. */
    "text_value"?: string;
    /**
     * Total price added by this selection. Multiplies unit_price_delta_money by the modifier
     * quantity and, for per_item pricing, by the line item quantity. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Amount added to the item's unit price for each unit of this selection, recorded when
     * selected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money": MoneyValue;
};
/** The `catalog` variant of `OrderLineItemModifierInput`. */
export type OrderLineItemModifierInputCatalog = ({
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1.
     */
    "modifier_id": string;
    /**
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /** Text a buyer entered for a text modifier group on an order line item. */
    "text"?: TextModifierRequest;
    /** Selects the type branch. Value enum: "catalog". */
    "type": "catalog" | (string & {});
})
    & (({
    /** Value enum: "catalog". */
    "type": "catalog" | (string & {});
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1.
     */
    "modifier_id": string;
}));
/** The `catalog` variant of `OrderLineItemModifierInput`. */
export type OrderLineItemModifierInputCatalogInput = ({
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1.
     */
    "modifier_id": string;
    /**
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /** Text a buyer entered for a text modifier group on an order line item. */
    "text"?: TextModifierRequestInput;
    /** Selects the type branch. Value enum: "catalog". */
    "type": "catalog";
})
    & (({
    /** Value enum: "catalog". */
    "type": ("catalog") & ("catalog");
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1.
     */
    "modifier_id": string;
})
    & ({
    "text"?: never;
}));
/** The `text` variant of `OrderLineItemModifierInput`. */
export type OrderLineItemModifierInputText = ({
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1.
     */
    "modifier_id"?: string;
    /**
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /** Text a buyer entered for a text modifier group on an order line item. */
    "text": TextModifierRequest;
    /** Selects the type branch. Value enum: "text". */
    "type": "text" | (string & {});
})
    & (({
    /** Value enum: "text". */
    "type": "text" | (string & {});
    /** Text a buyer entered for a text modifier group on an order line item. */
    "text": TextModifierRequest;
}));
/** The `text` variant of `OrderLineItemModifierInput`. */
export type OrderLineItemModifierInputTextInput = ({
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1.
     */
    "modifier_id"?: string;
    /**
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /** Text a buyer entered for a text modifier group on an order line item. */
    "text": TextModifierRequestInput;
    /** Selects the type branch. Value enum: "text". */
    "type": "text";
})
    & (({
    /** Value enum: "text". */
    "type": ("text") & ("text");
    /** Text a buyer entered for a text modifier group on an order line item. */
    "text": TextModifierRequestInput;
})
    & (({
    "modifier_id"?: never;
}) & ({
    "quantity"?: never;
})));
/**
 * A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier,
 * with a quantity.
 */
export type OrderLineItemModifierRequest = ({
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1.
     */
    "modifier_id"?: string;
    /**
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /** Text a buyer entered for a text modifier group on an order line item. */
    "text"?: TextModifierRequest;
    /** Selects the type branch. Value enum: "catalog", "text". */
    "type": "catalog" | "text" | (string & {});
})
    & ((Exclude<OrderLineItemModifierInputCatalog & object, readonly unknown[]>)
    | (Exclude<OrderLineItemModifierInputText & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier,
 * with a quantity.
 */
export type OrderLineItemModifierRequestInput = ({
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * ID of the existing modifier. Treated as an opaque resource reference; accepted spellings
     * follow resource ID validation. Its resolved price and the resulting line subtotal must
     * satisfy the order money ceiling. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. minLength: 1.
     */
    "modifier_id"?: string;
    /**
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /** Text a buyer entered for a text modifier group on an order line item. */
    "text"?: TextModifierRequestInput;
    /** Selects the type branch. Value enum: "catalog", "text". */
    "type": "catalog" | "text";
})
    & ((Exclude<OrderLineItemModifierInputCatalogInput & object, readonly unknown[]>)
    | (Exclude<OrderLineItemModifierInputTextInput & object, readonly unknown[]>));
/** A line item's tax category and whether it is taxable. */
export type OrderLineItemTax = {
    /**
     * Flint line-item tax category. A bundle line takes the stored category shared by all
     * component variants when added; all must also share taxability. Unset uses the merchant
     * default and equals only another unset category. Value enum: "general", "physical_goods",
     * "digital_goods", "software", "saas", "services", "professional_services", "food",
     * "prepared_food", "clothing", "medical_goods", "admission".
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
     * Whether the line is subject to tax. A bundle line takes the taxability shared by all
     * component variants when added; they must also share their stored tax category.
     */
    "taxable"?: boolean;
};
/** An externally calculated tax you assign to one order line item. */
export type OrderLineItemTaxAssignment = {
    /**
     * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation": TaxCalculationRequest;
    /** minLength: 1. */
    "order_line_item_id": string;
};
/** An externally calculated tax you assign to one order line item. */
export type OrderLineItemTaxAssignmentInput = {
    /**
     * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation": TaxCalculationRequestModelInput;
    /** minLength: 1. */
    "order_line_item_id": string;
};
/** A line item's tax category and whether it is taxable. */
export type OrderLineItemTaxInput = {
    /**
     * Flint line-item tax category. A bundle line takes the stored category shared by all
     * component variants when added; all must also share taxability. Unset uses the merchant
     * default and equals only another unset category. Value enum: "general", "physical_goods",
     * "digital_goods", "software", "saas", "services", "professional_services", "food",
     * "prepared_food", "clothing", "medical_goods", "admission".
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
     * Whether the line is subject to tax. A bundle line takes the taxability shared by all
     * component variants when added; they must also share their stored tax category.
     */
    "taxable"?: boolean;
};
/** The discount a subscription offer gives, as a fixed amount or a percentage. */
export type OrderLineSubscriptionOfferDiscount = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_off_money"?: MoneyValue;
    /** multipleOf: 0.0001. */
    "percent_off"?: number;
};
/**
 * A subscription offer attached to an order line item, with its name, discount, and billing
 * interval options.
 */
export type OrderLineSubscriptionOfferSummary = {
    /**
     *  [] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as every 2 months,
     * offered by a subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /** The discount a subscription offer gives, as a fixed amount or a percentage. */
    "discount"?: OrderLineSubscriptionOfferDiscount;
    "name": string;
    "subscription_offer_id": string;
};
/** A page of `Order` objects. */
export type OrderListResponse = {
    /**
     *  [] (Value): {@link Order}. A customer's purchase and its payment and fulfillment progress.
     */
    "data": Array<Order>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type OrderPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.paid";
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
    "event_type": "order.paid";
});
/**
 * The `order.paid` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type OrderPaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.paid". */
    "event_type"?: "order.paid";
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
 * The `order.paid` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.paid". */
    "event_type"?: "order.paid";
});
export type OrderPartiallyPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.partially_paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.partially_paid";
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
    "event_type": "order.partially_paid";
});
/**
 * The `order.partially_paid` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type OrderPartiallyPaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.partially_paid". */
    "event_type"?: "order.partially_paid";
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
 * The `order.partially_paid` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type OrderPartiallyPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.partially_paid". */
    "event_type"?: "order.partially_paid";
});
export type OrderPartiallyRefundedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.partially_refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.partially_refunded";
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
    "event_type": "order.partially_refunded";
});
/**
 * The `order.partially_refunded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type OrderPartiallyRefundedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.partially_refunded". */
    "event_type"?: "order.partially_refunded";
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
 * The `order.partially_refunded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type OrderPartiallyRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.partially_refunded". */
    "event_type"?: "order.partially_refunded";
});
/** An attempt to pay an order. */
export type OrderPaymentAttempt = {
    /** RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "expected_outstanding_money": MoneyValue;
    /**
     *  [] (Value): {@link PaymentAttemptGiftCardRedemption}. A gift card redemption made as part
     * of an order payment attempt, with the amount, tip, and gift card.
     */
    "gift_card_redemptions": Array<PaymentAttemptGiftCardRedemption>;
    /**
     * Whether the attempt can continue through PayOrder with action: resume and this
     * order_payment_attempt_id after any pending client action is complete. If false, check status
     * before starting another payment; the attempt may still be in progress.
     */
    "is_resumable": boolean;
    /**
     * The concluded failure of a payment leg that failed this attempt. Absent for non-payment
     * failures. A summary of why a payment attempt failed, with a normalized error code, a
     * message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Value enum: "payment", "setup", "settlement". */
    "mode": "payment" | "setup" | "settlement" | (string & {});
    "order_payment_attempt_id": string;
    /**
     *  [] (Value): {@link PaymentAttemptPaymentIntent}. A payment intent used as one leg of an
     * order payment attempt, with its amount, status, tip, and latest error.
     */
    "payment_intents": Array<PaymentAttemptPaymentIntent>;
    /**
     * Set when the pay request sent save_payment_method: true and the attempt paid without saving
     * the payment method. A card typed into checkout and saved has no entry here; read
     * payment_method_save on the checkout session for a card saved with a mobile phone number.
     * What became of the buyer's save_payment_method. The payment does not depend on it.
     */
    "payment_method_save"?: OrderPaymentAttemptPaymentMethodSave;
    /**
     *  [] (Value): {@link PendingPaymentAction}. Client-side action required before continuing a
     * payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a
     * standalone PaymentIntent through its confirm endpoint without a replacement credential.
     */
    "pending_actions": Array<PendingPaymentAction>;
    /** RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /**
     * Value enum: "processing", "requires_action", "requires_capture", "partially_succeeded",
     * "requires_retry", "finalizing", "succeeded", "failed", "expired", "canceled".
     */
    "status": "processing"
        | "requires_action"
        | "requires_capture"
        | "partially_succeeded"
        | "requires_retry"
        | "finalizing"
        | "succeeded"
        | "failed"
        | "expired"
        | "canceled"
        | (string & {});
    /**
     * Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an
     * unmapped non-payment reason report other. Canceled and expired attempts include a reason
     * only when it adds information beyond status. New values may be added. Value enum:
     * "authorization_canceled", "coupon_reservation_failed", "gift_card_hold_acquisition_failed",
     * "invalid_payment_source", "inventory_unavailable", "order_changed_before_payment",
     * "order_payment_customer_mismatch", "other", "payment_authorization_canceled",
     * "payment_authorization_expired", "payment_confirmation_rejected",
     * "payment_link_capacity_claim_failed", "payment_link_capacity_validation_failed",
     * "payment_method_activation_pending", "payment_method_required",
     * "payment_option_not_allowed", "payment_option_unavailable", "payment_source_binding_failed",
     * "payment_source_conflict", "payment_source_not_updatable",
     * "payment_source_ownership_mismatch", "resource_guarantee_failed",
     * "setup_action_unavailable", "setup_hold_acquisition_failed", "setup_result_incomplete",
     * "tip_allocation_sync_failed", "zero_balance_hold_acquisition_failed".
     */
    "status_reason"?: "authorization_canceled"
        | "coupon_reservation_failed"
        | "gift_card_hold_acquisition_failed"
        | "invalid_payment_source"
        | "inventory_unavailable"
        | "order_changed_before_payment"
        | "order_payment_customer_mismatch"
        | "other"
        | "payment_authorization_canceled"
        | "payment_authorization_expired"
        | "payment_confirmation_rejected"
        | "payment_link_capacity_claim_failed"
        | "payment_link_capacity_validation_failed"
        | "payment_method_activation_pending"
        | "payment_method_required"
        | "payment_option_not_allowed"
        | "payment_option_unavailable"
        | "payment_source_binding_failed"
        | "payment_source_conflict"
        | "payment_source_not_updatable"
        | "payment_source_ownership_mismatch"
        | "resource_guarantee_failed"
        | "setup_action_unavailable"
        | "setup_hold_acquisition_failed"
        | "setup_result_incomplete"
        | "tip_allocation_sync_failed"
        | "zero_balance_hold_acquisition_failed"
        | (string & {});
};
/** A page of `OrderPaymentAttempt` objects. */
export type OrderPaymentAttemptListResponse = {
    /**  [] (Value): {@link OrderPaymentAttempt}. An attempt to pay an order. */
    "data": Array<OrderPaymentAttempt>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** What became of the buyer's save_payment_method. The payment does not depend on it. */
export type OrderPaymentAttemptPaymentMethodSave = {
    /**
     * payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or
     * Affirm, and checkout saves only a card typed into it; save_payment_method_types on the
     * checkout session lists what it saves. other: a reason this API version does not name. The
     * values can grow. Value enum: "payment_method_not_saveable", "other".
     */
    "reason": "payment_method_not_saveable" | "other" | (string & {});
    /**
     * not_saved: the payment went ahead without saving the payment method. The values can grow.
     * Value enum: "not_saved".
     */
    "status": "not_saved" | (string & {});
};
/** A response containing `OrderPaymentAttempt` data. */
export type OrderPaymentAttemptResponse = {
    /** An attempt to pay an order. */
    "data": OrderPaymentAttempt;
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
/**
 * Identifies a payment intent to confirm for an order and the credential to use: a token, a saved
 * payment method, a Stripe confirmation token, or the attached source.
 */
export type OrderPaymentIntentSelection = ((OrderPaymentIntentSelectionToken)
    | (OrderPaymentIntentSelectionPaymentMethod)
    | (OrderPaymentIntentSelectionStripeConfirmationToken)
    | (OrderPaymentIntentSelectionAttached)
    | (Record<string, unknown>));
/** Confirm using the payment source already attached. */
export type OrderPaymentIntentSelectionAttached = {
    /** Value enum: "attached". */
    "credential_type": "attached" | (string & {});
    /** Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
};
/** Confirm using the payment source already attached. */
export type OrderPaymentIntentSelectionAttachedInput = {
    /** Value enum: "attached". */
    "credential_type": "attached";
    /** Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
};
/**
 * Identifies a payment intent to confirm for an order and the credential to use: a token, a saved
 * payment method, a Stripe confirmation token, or the attached source.
 */
export type OrderPaymentIntentSelectionInput = ((OrderPaymentIntentSelectionTokenInput)
    | (OrderPaymentIntentSelectionPaymentMethodInput)
    | (OrderPaymentIntentSelectionStripeConfirmationTokenInput)
    | (OrderPaymentIntentSelectionAttachedInput));
/** The `payment_method` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionPaymentMethod = {
    /** Value enum: "payment_method". */
    "credential_type": "payment_method" | (string & {});
    /** Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /**
     * Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     */
    "payment_method_id": string;
};
/** The `payment_method` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionPaymentMethodInput = {
    /** Value enum: "payment_method". */
    "credential_type": "payment_method";
    /** Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /**
     * Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     */
    "payment_method_id": string;
};
/** The `stripe_confirmation_token` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionStripeConfirmationToken = {
    /** Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token" | (string & {});
    /** Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /**
     * Stripe credential collected for this payment. confirmation_token (Required): string. Stripe
     * confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength:
     * 1.
     */
    "stripe": {
        /**
         * Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`.
         * minLength: 1.
         */
        "confirmation_token": string;
    };
};
/** The `stripe_confirmation_token` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionStripeConfirmationTokenInput = {
    /** Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token";
    /** Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /**
     * Stripe credential collected for this payment. confirmation_token (Required): string. Stripe
     * confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength:
     * 1.
     */
    "stripe": {
        /**
         * Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`.
         * minLength: 1.
         */
        "confirmation_token": string;
    };
};
/** The `token` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionToken = {
    /** Value enum: "token". */
    "credential_type": "token" | (string & {});
    /** Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /** Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
