import type { MetadataMap, MetadataRequestInput, MerchantWebhookEnvelope } from './types-34.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type {
    TextModifierRequest,
    TextModifierRequestInput,
    TaxCalculationRequest,
    TaxCalculationRequestModelInput
} from './types-57.js';
import type { SubscriptionIntervalOption } from './types-54.js';
import type { Order } from './types-36.js';
import type { ResponseMeta } from './types-48.js';
import type {
    PartnerWebhookEnvelope,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentErrorSummary
} from './types-40.js';
import type { PendingPaymentAction } from './types-43.js';
import type { TaxBreakdown } from './types-56.js';
import type { Address } from './types-0.js';
import type { OrderTaxLocationPostalAddressRequest } from './types-38.js';
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
/** The `token` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionTokenInput = {
    /** Value enum: "token". */
    "credential_type": "token";
    /** Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /** Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
/**
 * Card options for the payment source selected on an order payment intent, including which digital
 * wallets to offer.
 */
export type OrderPaymentSourceCardSelection = {
    /**  [] (Value): string. minLength: 1. */
    "digital_wallets"?: Array<string>;
};
/**
 * Card options for the payment source selected on an order payment intent, including which digital
 * wallets to offer.
 */
export type OrderPaymentSourceCardSelectionInput = OrderPaymentSourceCardSelection;
/** The payment source options you choose when creating an order payment intent. */
export type OrderPaymentSourceSelection = {
    /**
     * Card options for the payment source selected on an order payment intent, including which
     * digital wallets to offer.
     */
    "card"?: OrderPaymentSourceCardSelection;
};
/** The payment source options you choose when creating an order payment intent. */
export type OrderPaymentSourceSelectionInput = {
    /**
     * Card options for the payment source selected on an order payment intent, including which
     * digital wallets to offer.
     */
    "card"?: OrderPaymentSourceCardSelectionInput;
};
export type OrderRefundedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.refunded";
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
    "event_type": "order.refunded";
});
/**
 * The `order.refunded` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type OrderRefundedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.refunded". */
    "event_type"?: "order.refunded";
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
 * The `order.refunded` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.refunded". */
    "event_type"?: "order.refunded";
});
/** A response containing `Order` data. */
export type OrderResponse = {
    /** A customer's purchase and its payment and fulfillment progress. */
    "data": Order;
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
 * A return credit applied to an order payment, with the amount and the return and resolution it
 * came from.
 */
export type OrderReturnCreditSettlement = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "return_id": string;
    "return_resolution_id": string;
};
/**
 * An order's tax state, including its mode, price mode, status, location, exemption, and tax
 * breakdowns.
 */
export type OrderTax = {
    /**
     * Identifies which automatic tax behavior applies to this order. connected means the account's
     * tax connection calculated it. standard marks an order calculated before automatic tax
     * required a tax connection. Value enum: "standard", "connected".
     */
    "automatic_profile"?: "standard" | "connected" | (string & {});
    /**  [] (Value): string. */
    "available_location_inputs"?: Array<string>;
    "enabled": boolean;
    /** Whether an order is tax exempt, and the customer it was assessed from. */
    "exemption"?: OrderTaxExemption;
    /**
     * The location Flint uses to calculate tax on an order, with its address, address type, and
     * where the address came from.
     */
    "location"?: OrderTaxLocation;
    /** Value enum: "automatic", "external". */
    "mode": "automatic" | "external" | (string & {});
    /**
     * Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`).
     * Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent
     * retry of an earlier request omits it. Each line item and charge also states its own mode in
     * `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode"?: "additive" | "inclusive" | (string & {});
    /** Value enum: "not_required", "requires_location", "calculated", "exempt", "incomplete". */
    "status": "not_required" | "requires_location" | "calculated" | "exempt" | "incomplete" | (string & {});
    /**
     *  [] (Value): {@link TaxBreakdown}. The tax calculated for one jurisdiction on an order, line
     * item, or charge, with the taxable amount, rate or flat amount, and tax.
     */
    "tax_breakdowns"?: Array<TaxBreakdown>;
};
/** The `automatic` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputAutomatic = {
    /** Value enum: "automatic". */
    "mode": "automatic" | (string & {});
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/** The `automatic` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputAutomaticInput = {
    /** Value enum: "automatic". */
    "mode": "automatic";
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/** The `external` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputExternal = {
    /**
     *  [] (Value): {@link OrderTaxComponentRequest}. One externally supplied order tax component,
     * with its jurisdiction and either a flat amount or a percentage.
     */
    "components"?: Array<OrderTaxComponentRequest>;
    /** Value enum: "external". */
    "mode": "external" | (string & {});
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/** The `external` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputExternalInput = {
    /**
     *  [] (Value): {@link OrderTaxComponentRequestInput}. One externally supplied order tax
     * component, with its jurisdiction and either a flat amount or a percentage.
     */
    "components"?: Array<OrderTaxComponentRequestInput>;
    /** Value enum: "external". */
    "mode": "external";
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/**
 * How tax is calculated on an order: automatically, or externally with the tax components you
 * supply.
 */
export type OrderTaxCalculationRequest = ({
    /**
     *  [] (Value): {@link OrderTaxComponentRequest}. One externally supplied order tax component,
     * with its jurisdiction and either a flat amount or a percentage.
     */
    "components"?: Array<OrderTaxComponentRequest>;
    /** Value enum: "automatic", "external". */
    "mode": "automatic" | "external" | (string & {});
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
})
    & ((Exclude<OrderTaxCalculationInputAutomatic & object, readonly unknown[]>)
    | (Exclude<OrderTaxCalculationInputExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * How tax is calculated on an order: automatically, or externally with the tax components you
 * supply.
 */
export type OrderTaxCalculationRequestInput = ({
    /**
     *  [] (Value): {@link OrderTaxComponentRequestInput}. One externally supplied order tax
     * component, with its jurisdiction and either a flat amount or a percentage.
     */
    "components"?: Array<OrderTaxComponentRequestInput>;
    /** Value enum: "automatic", "external". */
    "mode": "automatic" | "external";
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
})
    & ((Exclude<OrderTaxCalculationInputAutomaticInput & object, readonly unknown[]>)
    | (Exclude<OrderTaxCalculationInputExternalInput & object, readonly unknown[]>));
/**
 * One externally supplied order tax component, with its jurisdiction and either a flat amount or a
 * percentage.
 */
export type OrderTaxComponentRequest = ({
    /** Default: "flat_amount". Value enum: "flat_amount". */
    "calculation_type"?: "flat_amount" | (string & {});
    /**
     * Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise, Flint
     * returns INVALID_FLAT_TAX. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "flat_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * The taxing jurisdiction of an externally supplied tax component, identified by code, level,
     * name, state, and country.
     */
    "jurisdiction": OrderTaxJurisdictionRequest;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /** Default: "retail_delivery_fee". Value enum: "retail_delivery_fee". */
    "tax_type"?: "retail_delivery_fee" | (string & {});
});
/**
 * One externally supplied order tax component, with its jurisdiction and either a flat amount or a
 * percentage.
 */
export type OrderTaxComponentRequestInput = ({
    /** Default: "flat_amount". Value enum: "flat_amount". */
    "calculation_type"?: "flat_amount";
    /**
     * Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise, Flint
     * returns INVALID_FLAT_TAX. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "flat_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * The taxing jurisdiction of an externally supplied tax component, identified by code, level,
     * name, state, and country.
     */
    "jurisdiction": OrderTaxJurisdictionRequestInput;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /** Default: "retail_delivery_fee". Value enum: "retail_delivery_fee". */
    "tax_type"?: "retail_delivery_fee";
})
    & ({
    "percent"?: never;
});
/** Whether an order is tax exempt, and the customer it was assessed from. */
export type OrderTaxExemption = {
    "customer_id"?: string;
    /**
     * The source of the tax exemption assessment. Omitted when the source has not been
     * established. Value enum: "none", "customer".
     */
    "source"?: "none" | "customer" | (string & {});
    "tax_exempt": boolean;
};
/**
 * The taxing jurisdiction of an externally supplied tax component, identified by code, level,
 * name, state, and country.
 */
export type OrderTaxJurisdictionRequest = {
    /** minLength: 1. maxLength: 128. pattern: ^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$. */
    "code": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country": "US" | (string & {});
    /** Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district" | (string & {});
    /** minLength: 1. maxLength: 200. pattern: ^[^\s\x00](?:[^\r\n\x00]*[^\s\x00])?$. */
    "name": string;
    /** minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */
    "state": string;
};
/**
 * The taxing jurisdiction of an externally supplied tax component, identified by code, level,
 * name, state, and country.
 */
export type OrderTaxJurisdictionRequestInput = {
    /** minLength: 1. maxLength: 128. pattern: ^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$. */
    "code": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country": "US";
    /** Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district";
    /** minLength: 1. maxLength: 200. pattern: ^[^\s\x00](?:[^\r\n\x00]*[^\s\x00])?$. */
    "name": string;
    /** minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */
    "state": string;
};
/**
 * The location Flint uses to calculate tax on an order, with its address, address type, and where
 * the address came from.
 */
export type OrderTaxLocation = {
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Value enum: "provided", "fulfillment", "customer", "device", "location", "merchant". */
    "address_source": "provided" | "fulfillment" | "customer" | "device" | "location" | "merchant" | (string & {});
    /**
     * Value enum: "postal_code", "tax_address", "billing_address", "shipping_address",
     * "business_address".
     */
    "address_type": "postal_code"
        | "tax_address"
        | "billing_address"
        | "shipping_address"
        | "business_address"
        | (string & {});
    "customer_id"?: string;
    "device_id"?: string;
    "fulfillment_id"?: string;
    "location_id"?: string;
};
/** A full street address you supply as an order's tax location. */
export type OrderTaxLocationFullAddressRequest = {
    /** minLength: 1. pattern: \S. */
    "city": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country": "US" | (string & {});
    /** minLength: 1. pattern: \S. */
    "line1": string;
    /** minLength: 1. */
    "line2"?: string;
    /** minLength: 1. pattern: \S. */
    "postal_code": string;
    /** minLength: 1. pattern: \S. */
    "state": string;
};
/** A full street address you supply as an order's tax location. */
export type OrderTaxLocationFullAddressRequestInput = {
    /** minLength: 1. pattern: \S. */
    "city": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country": "US";
    /** minLength: 1. pattern: \S. */
    "line1": string;
    /** minLength: 1. */
    "line2"?: string;
    /** minLength: 1. pattern: \S. */
    "postal_code": string;
    /** minLength: 1. pattern: \S. */
    "state": string;
};
/**
 * The `billing_address` variant of `OrderTaxLocationInput`. The `shipping_address` variant of
 * `OrderTaxLocationInput`. The `tax_address` variant of `OrderTaxLocationInput`.
 */
export type OrderTaxLocationInputFullAddress = {
    /** A full street address you supply as an order's tax location. */
    "address": OrderTaxLocationFullAddressRequest;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided" | (string & {});
    /** Value enum: "tax_address", "billing_address", "shipping_address". */
    "address_type": "tax_address" | "billing_address" | "shipping_address" | (string & {});
};
/**
 * The `billing_address` variant of `OrderTaxLocationInput`. The `shipping_address` variant of
 * `OrderTaxLocationInput`. The `tax_address` variant of `OrderTaxLocationInput`.
 */
export type OrderTaxLocationInputFullAddressInput = {
    /** A full street address you supply as an order's tax location. */
    "address": OrderTaxLocationFullAddressRequestInput;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided";
    /** Value enum: "tax_address", "billing_address", "shipping_address". */
    "address_type": "tax_address" | "billing_address" | "shipping_address";
};
/** The `postal_code` variant of `OrderTaxLocationInput`. */
export type OrderTaxLocationInputPostalCode = {
    /** A postal code, with an optional country, you supply as an order's tax location. */
    "address": OrderTaxLocationPostalAddressRequest;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided" | (string & {});
    /** Value enum: "postal_code". */
    "address_type": "postal_code" | (string & {});
};
